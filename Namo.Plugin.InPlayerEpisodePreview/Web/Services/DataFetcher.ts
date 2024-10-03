import {ProgramDataStore} from "./ProgramDataStore";
import {AuthService} from "./AuthService";
import {Logger} from "./Logger";
import {Episode, EpisodeDto} from "../Models/Episode";
import {Season} from "../Models/Season";

/**
 * The classes which derives from this interface, will provide the functionality to handle the data input from the server if the PlaybackState is changed.
 */
export class DataFetcher {
    constructor(private programDataStore: ProgramDataStore, private authService: AuthService, private logger: Logger) {
        const {fetch: originalFetch} = window;
        window.fetch = async (...args) => {
            let resource: URL = args[0] as URL;
            let config: RequestInit = args[1];

            if (config && config.headers) {
                let auth = config.headers[this.authService.getAuthHeader()];
                this.authService.setAuthHeaderValue(auth ? auth : '');
            }

            const response = await originalFetch(resource, config);

            let url = new URL(resource);
            let urlPathname = url.pathname;

            if (urlPathname.includes('PlaybackInfo')) {
                this.logger.debug('Received PlaybackInfo');

                // save the media id of the currently played video
                this.programDataStore.activeMediaSourceId = extractKeyFromString(urlPathname, 'Items/', '/');

            } else if (urlPathname.includes('Episodes')) {
                this.logger.debug('Received Episodes');

                this.programDataStore.userId = extractKeyFromString(url.search, 'UserId=', '&');
                response.clone().json().then((data) => this.saveEpisodeData(data));

            } else if (urlPathname.includes('Items') && url.search.includes('ParentId')) {
                this.logger.debug('Received Episode Items');

                this.programDataStore.userId = extractKeyFromString(urlPathname, 'Users/', '/');
                response.clone().json().then((data) => this.saveEpisodeData(data));

            } else if (urlPathname.includes('Progress')) {
                // update the playback state of the currently played video
                const sliderCollection = document.getElementsByClassName('osdPositionSlider')
                const slider = sliderCollection[sliderCollection.length - 1];
                const currentPlaybackPercentage: number = parseFloat((slider as HTMLInputElement).value);
                const episode: Episode = this.programDataStore.getEpisodeById(this.programDataStore.activeMediaSourceId);

                episode.UserData.PlaybackPositionTicks = episode.RunTimeTicks * currentPlaybackPercentage / 100;
                episode.UserData.PlayedPercentage = currentPlaybackPercentage;
                this.programDataStore.updateEpisode(episode);

            } else if (urlPathname.includes('PlayedItems')) {
                // update the played state of the episode
                this.logger.debug('Received PlayedItems');

                let episodeId: string = extractKeyFromString(urlPathname, 'PlayedItems/');
                let changedEpisode: Episode = this.programDataStore.getEpisodeById(episodeId);

                response.clone().json().then((data) => changedEpisode.UserData.Played = data["Played"]);
                this.programDataStore.updateEpisode(changedEpisode);

            } else if (urlPathname.includes('FavoriteItems')) {
                // update the favourite state of the episode
                this.logger.debug('Received FavoriteItems');

                let episodeId: string = extractKeyFromString(urlPathname, 'FavoriteItems/');
                let changedEpisode: Episode = this.programDataStore.getEpisodeById(episodeId);

                response.clone().json().then((data) => changedEpisode.UserData.IsFavorite = data["IsFavorite"]);
                this.programDataStore.updateEpisode(changedEpisode);
            }

            return response;

            function extractKeyFromString(searchString: string, startString: string, endString: string = ''): string {
                const startIndex = searchString.indexOf(startString) + startString.length;
                if (endString !== '') {
                    const endIndex = searchString.indexOf(endString, startIndex);
                    return searchString.substring(startIndex, endIndex);
                }

                return searchString.substring(startIndex);
            }
        };
    }

    public checkIfDataIsEpisodeData(episodeData: EpisodeDto): boolean {
        return episodeData
            && episodeData.Items
            && episodeData.Items.length > 0
            && episodeData.Items[0].Type !== 'Movie';
    }
    
    public saveEpisodeData(episodeData: EpisodeDto): void {
        if (!this.checkIfDataIsEpisodeData(episodeData))
            return;
        
        this.programDataStore.isSeries = true;
        
        // get all different seasonIds
        let seasonIds: Set<string> = new Set<string>(episodeData.Items.map((episode: Episode) => episode.SeasonId))

        // group the episodes by seasonId
        let group: Record<string, Episode[]> = groupBy(episodeData.Items, (episode: Episode) => episode.SeasonId);

        let seasons: Season[] = [];
        let iterator = seasonIds.values();
        let value: IteratorResult<string> = iterator.next();
        while (!value.done) {
            let seasonId = value.value;
            let season: Season = {
                seasonId: seasonId,
                seasonName: group[seasonId][0].SeasonName,
                episodes: group[seasonId]
            };
            
            season.episodes.sort((a: Episode, b: Episode) => a.IndexNumber - b.IndexNumber);
            
            seasons.push(season);
            if (season.episodes.some((episode: Episode) => episode.Id === this.programDataStore.activeMediaSourceId))
                this.programDataStore.activeSeasonIndex = seasons.length - 1;
            
            value = iterator.next();
        }

        this.programDataStore.seasons = seasons;
        
        function groupBy<T>(arr: T[], fn: (item: T) => any) {
            return arr.reduce<Record<string, T[]>>((prev, curr) => {
                const groupKey = fn(curr);
                const group = prev[groupKey] || [];
                group.push(curr);
                return { ...prev, [groupKey]: group };
            }, {});
        }
    }
}