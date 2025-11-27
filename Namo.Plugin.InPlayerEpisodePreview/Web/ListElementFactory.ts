import {ListElementTemplate} from "./Components/ListElementTemplate";
import {BaseItem} from "./Models/Episode";
import {ProgramDataStore} from "./Services/ProgramDataStore";
import {Season} from "./Models/Season";
import {SeasonListElementTemplate} from "./Components/SeasonListElementTemplate";
import {PopupTitleTemplate} from "./Components/PopupTitleTemplate";
import {PlaybackHandler} from "./Services/PlaybackHandler";
import {Endpoints} from "./Endpoints";

export class ListElementFactory {
    constructor(private playbackHandler: PlaybackHandler, private programDataStore: ProgramDataStore) { }
    
    public async createEpisodeElements(episodes: BaseItem[], parentDiv: HTMLElement): Promise<void> {
        episodes.sort((a, b) => a.IndexNumber - b.IndexNumber)
        
        for (let i: number = 0; i < episodes.length; i++) {
            const episode = episodes[i]
            const episodeListElementTemplate = new ListElementTemplate(parentDiv, i, episode, this.playbackHandler, this.programDataStore);
            episodeListElementTemplate.render(async (e: MouseEvent) => {
                e.stopPropagation();
                
                // hide episode content for all existing episodes in the preview list
                document.querySelectorAll(".previewListItemContent").forEach((element: Element): void => {
                    element.classList.add('hide');
                    element.classList.remove('selectedListItem');
                });
                
                const episodeContainer: Element = document.querySelector(`[data-id="${episode.IndexNumber}"]`).querySelector('.previewListItemContent');
                
                // load episode description
                if (!episode.Description) {
                    const url = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.EPISODE_DESCRIPTION}`
                        .replace('{episodeId}', episode.Id));
                    const result = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' })
                    const newDescription: string = result?.Description
                    
                    this.programDataStore.updateItem({
                        ...episode,
                        Description: newDescription
                    })
                    episodeContainer.querySelector('.previewEpisodeDescription').textContent = newDescription
                }
                
                // show episode content for the selected episode
                episodeContainer.classList.remove('hide');
                episodeContainer.classList.add('selectedListItem');
                
                // scroll to the selected episode
                episodeContainer.parentElement.scrollIntoView({ block: "start" });
            });

            if (episode.Id === this.programDataStore.activeMediaSourceId) {
                const episodeNode: Element = document.querySelector(`[data-id="${episode.IndexNumber}"]`).querySelector('.previewListItemContent');
                
                // preload episode description for the currently playing episode
                if (!episode.Description) {
                    const url = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.EPISODE_DESCRIPTION}`
                        .replace('{episodeId}', episode.Id));
                    const result = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' })
                    const newDescription: string = result?.Description

                    this.programDataStore.updateItem({
                        ...episode,
                        Description: newDescription
                    })
                    episodeNode.querySelector('.previewEpisodeDescription').textContent = newDescription
                }
                
                episodeNode.classList.remove('hide');
                episodeNode.classList.add('selectedListItem');
            }
        }
    }
    
    public createSeasonElements(seasons: Season[], parentDiv: HTMLElement, currentSeasonIndex: number, titleContainer: PopupTitleTemplate): void {
        seasons.sort((a, b) => a.IndexNumber - b.IndexNumber)
        
        for (let i: number = 0; i < seasons.length; i++) {
            const season = new SeasonListElementTemplate(parentDiv, i, seasons[i], seasons[i].IndexNumber === currentSeasonIndex);
            season.render((e: MouseEvent): void => {
                e.stopPropagation();
                
                titleContainer.setText(seasons[i].seasonName);
                titleContainer.setVisible(true);
                
                parentDiv.innerHTML = ""; // remove old content
                this.createEpisodeElements(seasons[i].episodes, parentDiv).then();
            });
        }
    }
}