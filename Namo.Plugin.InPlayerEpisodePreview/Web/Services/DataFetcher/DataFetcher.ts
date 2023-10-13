import {ProgramDataStore} from "../ProgramDataStore";
import {Episode, EpisodeDto} from "../../Models/Episode";
import {Season} from "../../Models/Season";
import {DataLoader} from "../DataLoader/DataLoader";

/**
 * The classes which derives from this interface, will provide the functionality to handle the data input from the server if the PlaybackState is changed.
 */
export class DataFetcher {
    constructor(private programDataStore: ProgramDataStore, private dataLoader: DataLoader) {}
    
    protected getProgramDataStore(): ProgramDataStore {
        return this.programDataStore;
    }
    
    public saveEpisodeData(episodeData: EpisodeDto): void {
        // get all different seasonIds
        let seasonIds: Set<string> = new Set<string> (episodeData.Items.map((episode: Episode) => episode.SeasonId))

        // group the episodes by seasonId
        let group: Record<string, Episode[]> = groupBy(episodeData.Items, (episode: Episode) => episode.SeasonId);

        let seasons: Season[] = [];
        let iterator = seasonIds.values();
        let value: IteratorResult<string, any> = iterator.next();
        while (!value.done) {
            let seasonId = value.value;
            let season: Season = {
                seasonId: seasonId,
                seasonName: group[seasonId][0].SeasonName,
                episodes: group[seasonId]
            };
            
            season.episodes.map((episode: Episode) => {
                let request = this.dataLoader.loadEpisodeDescription(episode.Id, () => {});
                request.onloadend = () => {
                    episode.Description = request.response.Overview;
                };
                
                return episode;
            });
            
            seasons.push(season);
            value = iterator.next();
        }
        this.programDataStore.setSeasons(seasons);

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