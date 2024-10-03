import {ProgramDataStore} from "./ProgramDataStore";
import {AuthService} from "./AuthService";
import {Logger} from "./Logger";
import {BaseItem, ItemDto} from "../Models/Episode";
import {Season} from "../Models/Season";
import {ItemType} from "../Models/ItemType";

/**
 * The classes which derives from this interface, will provide the functionality to handle the data input from the server if the PlaybackState is changed.
 */
export class DataFetcher {
    constructor(private programDataStore: ProgramDataStore, private authService: AuthService, private logger: Logger) {
        const {fetch: originalFetch} = window;
        window.fetch = async (...args): Promise<Response> => {
            let resource: URL = args[0] as URL;
            let config: RequestInit = args[1];

            if (config && config.headers) {
                let auth: string = config.headers[this.authService.getAuthHeader()];
                this.authService.setAuthHeaderValue(auth ? auth : '');
            }
            
            const response: Response = await originalFetch(resource, config);

            let url: URL = new URL(resource);
            let urlPathname: string = url.pathname;

            if (urlPathname.includes('PlaybackInfo')) {
                this.logger.debug('Received PlaybackInfo');

                // save the media id of the currently played video
                this.getProgramDataStore().activeMediaSourceId = extractKeyFromString(urlPathname, 'Items/', '/');

            } else if (urlPathname.includes('Episodes')) {
                this.logger.debug('Received Episodes');

                this.getProgramDataStore().userId = extractKeyFromString(url.search, 'UserId=', '&');
                response.clone().json().then((data: ItemDto): void => this.saveEpisodeData(data));

            } else if (urlPathname.includes('Items') && url.search.includes('ParentId')) {
                this.logger.debug('Received Items with ParentId');

                this.getProgramDataStore().userId = extractKeyFromString(urlPathname, 'Users/', '/');
                response.clone().json().then((data: ItemDto): void => this.saveItemData(data));
                
            } else if (urlPathname.includes('Items')) {
                this.logger.debug('Received Items without ParentId');
                
                response.clone().json().then((data: BaseItem): void => {
                    if (ItemType[data.Type] === ItemType.BoxSet)
                        this.programDataStore.boxSetName = data.Name;
                });
            }

            return response;

            function extractKeyFromString(searchString: string, startString: string, endString: string): string {
                let startIndex: number = searchString.indexOf(startString) + startString.length;
                let endIndex: number = searchString.indexOf(endString, startIndex);

                return searchString.substring(startIndex, endIndex);
            }
        };
    }
    
    protected getProgramDataStore(): ProgramDataStore {
        return this.programDataStore;
    }
    
    public saveItemData(itemDto: ItemDto): void {
        if (this.checkIfDataIsMovieData(itemDto) && itemDto.Items.length > 0) {
            this.saveMovieData(itemDto);
            return;
        }

        if (this.checkIfDataIsEpisodeData(itemDto)) {
            this.saveEpisodeData(itemDto)
            return
        }

        this.logger.error("Couldn't save items from response");
    }

    public checkIfDataIsMovieData(itemDto: ItemDto): boolean {
        return itemDto
            && itemDto.Items
            && itemDto.Items.length > 0
            && ItemType[itemDto.Items[0].Type] === ItemType.Movie;
    }

    public checkIfDataIsEpisodeData(itemDto: ItemDto): boolean {
        return itemDto
            && itemDto.Items
            && itemDto.Items.length > 0
            && ItemType[itemDto.Items[0].Type] === ItemType.Episode;
    }

    public saveMovieData(itemDto: ItemDto): void {
        this.programDataStore.type = ItemType.Movie;
        this.programDataStore.movies = itemDto.Items;
    }
    
    public saveEpisodeData(itemDto: ItemDto): void {
        this.programDataStore.type = ItemType.Series;
        const episodeData: BaseItem[] = itemDto.Items;
        
        // get all different seasonIds
        let seasonIds: Set<string> = new Set<string> (episodeData.map((episode: BaseItem): string => episode.SeasonId))

        // group the episodes by seasonId
        let group: Record<string, BaseItem[]> = groupBy(episodeData, (episode: BaseItem): string => episode.SeasonId);

        let seasons: Season[] = [];
        let iterator: IterableIterator<string> = seasonIds.values();
        let value: IteratorResult<string> = iterator.next();
        while (!value.done) {
            let seasonId: string = value.value;
            let season: Season = {
                seasonId: seasonId,
                seasonName: group[seasonId][0].SeasonName,
                episodes: group[seasonId]
            };
            
            season.episodes.sort((a: BaseItem, b: BaseItem): number => a.IndexNumber - b.IndexNumber);
            
            seasons.push(season);
            if (season.episodes.some((episode: BaseItem): boolean => episode.Id === this.programDataStore.activeMediaSourceId))
                this.programDataStore.activeSeasonIndex = seasons.length - 1;
            
            value = iterator.next();
        }

        this.programDataStore.seasons = seasons;
        
        function groupBy<T>(arr: T[], fn: (item: T) => any): Record<string, T[]> {
            return arr.reduce<Record<string, T[]>>((prev: Record<string, T[]>, curr: T): {} => {
                const groupKey = fn(curr);
                const group: T[] = prev[groupKey] || [];
                group.push(curr);
                return { ...prev, [groupKey]: group };
            }, {});
        }
    }
}