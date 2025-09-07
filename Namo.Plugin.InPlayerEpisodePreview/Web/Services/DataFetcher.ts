﻿import {ProgramDataStore} from "./ProgramDataStore";
import {AuthService} from "./AuthService";
import {Logger} from "./Logger";
import {BaseItem, ItemDto} from "../Models/Episode";
import {Season} from "../Models/Season";
import {ItemType} from "../Models/ItemType";
import {PlaybackProgressInfo} from "../Models/PlaybackProgressInfo";

/**
 * The classes which derives from this interface, will provide the functionality to handle the data input from the server if the PlaybackState is changed.
 */
export class DataFetcher {
    private static nextDataIsChildData: boolean = false
    
    constructor(private programDataStore: ProgramDataStore, private authService: AuthService, private logger: Logger) {
        const {fetch: originalFetch} = window
        window.fetch = async (...args): Promise<Response> => {
            let resource: URL = args[0] as URL
            const config: RequestInit = args[1] ?? {}

            if (config && config.headers) {
                this.authService.setAuthHeaderValue(config.headers[this.authService.getAuthHeaderKey()] ?? '')
            }

            const url: URL = new URL(resource);
            const urlPathname: string = url.pathname;

            // Process data from POST requests
            // Endpoint: /Sessions/Playing
            if (config.body && typeof config.body === 'string' && urlPathname.includes('Sessions/Playing')) {
                const playingInfo: PlaybackProgressInfo = JSON.parse(config.body)

                // save the media id of the currently played video
                if (this.programDataStore.activeMediaSourceId !== playingInfo.MediaSourceId)
                    this.programDataStore.activeMediaSourceId = playingInfo.MediaSourceId

                // Endpoint: /Sessions/Playing/Progress
                if (urlPathname.includes('Progress')) {
                    // update the playback progress of the currently played video
                    const episode: BaseItem = this.programDataStore.getItemById(playingInfo.MediaSourceId)
                    if (episode) {
                        this.programDataStore.updateItem({
                            ...episode,
                            UserData: {
                                ...episode.UserData,
                                PlaybackPositionTicks: playingInfo.PositionTicks,
                                PlayedPercentage: 100 / episode.RunTimeTicks * playingInfo.PositionTicks,
                                Played: episode.UserData.PlayedPercentage > 90 // 90 is the default percentage for watched episodes
                            }
                        })
                    }
                }
            }

            if (urlPathname.includes('Episodes')) {
                // remove new 'startItemId' query parameter, to still get the full list of episodes
                const cleanedURL = url.href.replace(/startItemId=[^&]+&?/, '')
                resource = new URL(cleanedURL)
            }

            const response: Response = await originalFetch(resource, config)

            if (urlPathname.includes('Episodes')) {
                this.logger.debug('Received Episodes')

                this.programDataStore.userId = extractKeyFromString(url.search, 'UserId=', '&')
                response.clone().json().then((data: ItemDto): void => {
                    this.programDataStore.type = ItemType.Series
                    this.programDataStore.seasons = this.getFormattedEpisodeData(data)
                })

            } else if (urlPathname.includes('User') && urlPathname.includes('Items') && url.search.includes('ParentId')) {
                this.logger.debug('Received Items with ParentId')

                this.programDataStore.userId = extractKeyFromString(urlPathname, 'Users/', '/')
                response.clone().json().then((data: ItemDto): void => this.saveItemData(data))

            } else if (urlPathname.includes('User') && urlPathname.includes('Items')) {
                this.logger.debug('Received Items without ParentId')

                response.clone().json().then((data: BaseItem): void => {
                    this.logger.debug('Received single item data -> Setting BoxSet name');

                    switch (ItemType[data.Type]) {
                        case ItemType.BoxSet:
                        case ItemType.Folder:
                            DataFetcher.nextDataIsChildData = true
                            this.programDataStore.boxSetName = data.Name
                            break
                        case ItemType.Movie: // could be single video (e.g. started from dashboard)
                        case ItemType.Video:
                            DataFetcher.nextDataIsChildData = false
                            this.saveItemData({
                                Items: [data],
                                TotalRecordCount: 1,
                                StartIndex: 0
                            })
                            break
                    }
                })
                
            } else if (urlPathname.includes('PlayedItems')) {
                // update the played state of the episode
                this.logger.debug('Received PlayedItems')

                const itemId: string = extractKeyFromString(urlPathname, 'PlayedItems/')
                const changedItem: BaseItem = this.programDataStore.getItemById(itemId)
                if (!changedItem) return
                
                response.clone().json().then((data) => changedItem.UserData.Played = data["Played"])
                this.programDataStore.updateItem(changedItem)

            } else if (urlPathname.includes('FavoriteItems')) {
                // update the favourite state of the episode
                this.logger.debug('Received FavoriteItems')

                const itemId: string = extractKeyFromString(urlPathname, 'FavoriteItems/');
                const changedItem: BaseItem = this.programDataStore.getItemById(itemId);
                if (!changedItem) return
                    
                response.clone().json().then((data) => changedItem.UserData.IsFavorite = data["IsFavorite"]);
                this.programDataStore.updateItem(changedItem)
            }

            return response

            function extractKeyFromString(searchString: string, startString: string, endString: string = ''): string {
                const startIndex: number = searchString.indexOf(startString) + startString.length
                if (endString !== '') {
                    const endIndex: number = searchString.indexOf(endString, startIndex)
                    return searchString.substring(startIndex, endIndex)
                }

                return searchString.substring(startIndex)
            }
        }
    }
    
    public saveItemData(itemDto: ItemDto): void {
        if (!itemDto || !itemDto.Items || itemDto.Items.length === 0)
            return
        
        const firstItem = itemDto.Items.at(0)
        const itemDtoType: ItemType = ItemType[firstItem?.Type]
        switch (itemDtoType) {
            case ItemType.Episode:
                // do not overwrite data if we only receive one item which already exists
                if (itemDto.Items.length > 1 || !this.programDataStore.seasons.flatMap(season => season.episodes).some(episode => episode.Id === firstItem.Id)) {
                    this.programDataStore.type = ItemType.Series
                    this.programDataStore.seasons = this.getFormattedEpisodeData(itemDto)
                }
                break
            case ItemType.Movie:
                // do not overwrite data if we only receive one item which already exists
                if (itemDto.Items.length > 1 || !this.programDataStore.movies.some(movie => movie.Id === firstItem.Id)) {
                    this.programDataStore.type = DataFetcher.nextDataIsChildData ? ItemType.BoxSet : ItemType.Movie
                    this.programDataStore.movies = itemDto.Items.map((movie, idx) => ({
                        ...movie,
                        IndexNumber: idx + 1
                    }))
                }
                break
            case ItemType.Video:
                // do not overwrite data if we only receive one item which already exists
                if (itemDto.Items.length > 1 || !this.programDataStore.movies.some(video => video.Id === firstItem.Id)) {
                    this.programDataStore.type = DataFetcher.nextDataIsChildData ? ItemType.Folder : ItemType.Video
                    itemDto.Items.sort((a, b) => (a.SortName && b.SortName) ? a.SortName.localeCompare(b.SortName) : 0)
                    this.programDataStore.movies = itemDto.Items.map((video, idx) => ({
                        ...video,
                        IndexNumber: idx + 1
                    }))
                }
                break
        }
        DataFetcher.nextDataIsChildData = false

        // this.logger.error("Couldn't save items from response", itemDto);
    }
    
    public getFormattedEpisodeData = (itemDto: ItemDto) => {
        const episodeData: BaseItem[] = itemDto.Items
        
        // get all different seasonIds
        const seasonIds: Set<string> = new Set<string>(episodeData.map((episode: BaseItem): string => episode.SeasonId))

        // group the episodes by seasonId
        const group: Record<string, BaseItem[]> = groupBy(episodeData, (episode: BaseItem): string => episode.SeasonId)

        const seasons: Season[] = []
        const iterator: IterableIterator<string> = seasonIds.values()
        let value: IteratorResult<string> = iterator.next()
        while (!value.done) {
            const seasonId: string = value.value
            const season: Season = {
                seasonId: seasonId,
                seasonName: group[seasonId].at(0).SeasonName,
                episodes: group[seasonId],
                IndexNumber: seasons.length
            }
            
            seasons.push(season)
            value = iterator.next()
        }

        return seasons
        
        function groupBy<T>(arr: T[], fn: (item: T) => any): Record<string, T[]> {
            return arr.reduce<Record<string, T[]>>((prev: Record<string, T[]>, curr: T): {} => {
                const groupKey = fn(curr)
                const group: T[] = prev[groupKey] || []
                group.push(curr)
                return { ...prev, [groupKey]: group }
            }, {})
        }
    }
}