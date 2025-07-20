import {ProgramDataStore} from "./ProgramDataStore";
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
            if (config.body && typeof config.body === 'string') {
                // Endpoint: /Sessions/Playing
                if (urlPathname.includes('Sessions/Playing')) {
                    const playingInfo: PlaybackProgressInfo = JSON.parse(config.body)

                    // save the media id of the currently played video
                    this.programDataStore.activeMediaSourceId = playingInfo.MediaSourceId

                    // Endpoint: /Sessions/Playing/Progress
                    if (urlPathname.includes('Progress')) {
                        // update the playback progress of the currently played video
                        const episode: BaseItem = this.programDataStore.getItemById(playingInfo.MediaSourceId)
                        if (episode) {
                            episode.UserData.PlaybackPositionTicks = playingInfo.PositionTicks
                            episode.UserData.PlayedPercentage = 100 / episode.RunTimeTicks * playingInfo.PositionTicks
                            episode.UserData.Played = episode.UserData.PlayedPercentage > 90 // 90 is the default percentage for watched episodes
                            this.programDataStore.updateItem(episode)
                        }
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
                response.clone().json().then((data: ItemDto): void => this.saveEpisodeData(data))

            } else if (urlPathname.includes('PlayedItems')) {
                // update the played state of the episode
                this.logger.debug('Received PlayedItems')

                const itemId: string = extractKeyFromString(urlPathname, 'PlayedItems/')
                const changedItem: BaseItem = this.programDataStore.getItemById(itemId)
                if (changedItem) {
                    response.clone().json().then((data) => changedItem.UserData.Played = data["Played"])
                    this.programDataStore.updateItem(changedItem)
                }


            } else if (urlPathname.includes('FavoriteItems')) {
                // update the favourite state of the episode
                this.logger.debug('Received FavoriteItems')

                const itemId: string = extractKeyFromString(urlPathname, 'FavoriteItems/');
                const changedItem: BaseItem = this.programDataStore.getItemById(itemId);
                if (changedItem) {
                    response.clone().json().then((data) => changedItem.UserData.IsFavorite = data["IsFavorite"]);
                    this.programDataStore.updateItem(changedItem)
                }
                
            } else if (urlPathname.includes('Items') && url.search.includes('ParentId')) {
                this.logger.debug('Received Items with ParentId')

                this.programDataStore.userId = extractKeyFromString(urlPathname, 'Users/', '/')
                response.clone().json().then((data: ItemDto): void => this.saveItemData(data))
                
            } else if (urlPathname.includes('Items')) {
                this.logger.debug('Received Items without ParentId')
                
                response.clone().json().then((data: BaseItem): void => {
                    this.logger.debug('Received single item data -> Setting BoxSet name');

                    // set boxSetName for list title
                    if (ItemType[data.Type] === ItemType.BoxSet)
                        this.programDataStore.boxSetName = data.Name
                });
            }

            return response;

            function extractKeyFromString(searchString: string, startString: string, endString: string = ''): string {
                const startIndex: number = searchString.indexOf(startString) + startString.length
                if (endString !== '') {
                    const endIndex: number = searchString.indexOf(endString, startIndex)
                    return searchString.substring(startIndex, endIndex)
                }

                return searchString.substring(startIndex)
            }
        };
    }
    
    public saveItemData(itemDto: ItemDto): void {
        if (this.checkIfDataIsMovieData(itemDto) && itemDto.Items.length > 0) {
            this.saveMovieData(itemDto)
            return;
        }

        if (this.checkIfDataIsEpisodeData(itemDto)) {
            this.saveEpisodeData(itemDto)
            return
        }

        // this.logger.error("Couldn't save items from response", itemDto);
    }

    public checkIfDataIsMovieData(itemDto: ItemDto): boolean {
        return itemDto
            && itemDto.Items
            && itemDto.Items.length > 0
            && ItemType[itemDto.Items[0].Type] === ItemType.Movie
    }

    public checkIfDataIsEpisodeData(itemDto: ItemDto): boolean {
        return itemDto
            && itemDto.Items
            && itemDto.Items.length > 0
            && ItemType[itemDto.Items[0].Type] === ItemType.Episode
    }

    public saveMovieData(itemDto: ItemDto): void {
        this.programDataStore.type = ItemType.Movie
        this.programDataStore.movies = itemDto.Items
    }
    
    public saveEpisodeData(itemDto: ItemDto): void {
        this.programDataStore.type = ItemType.Series
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
                seasonName: group[seasonId][0].SeasonName,
                episodes: group[seasonId]
            }
            
            season.episodes.sort((a: BaseItem, b: BaseItem): number => a.IndexNumber - b.IndexNumber)
            
            seasons.push(season)
            if (season.episodes.some((episode: BaseItem): boolean => episode.Id === this.programDataStore.activeMediaSourceId))
                this.programDataStore.activeSeasonIndex = seasons.length - 1
            
            value = iterator.next()
        }

        this.programDataStore.seasons = seasons
        
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