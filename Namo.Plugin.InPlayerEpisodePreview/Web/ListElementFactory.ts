import {ListElementTemplate} from "./Components/ListElementTemplate";
import {BaseItem} from "./Models/Episode";
import {ProgramDataStore} from "./Services/ProgramDataStore";
import {Season} from "./Models/Season";
import {SeasonListElementTemplate} from "./Components/SeasonListElementTemplate";
import {PopupTitleTemplate} from "./Components/PopupTitleTemplate";
import {DataLoader} from "./Services/DataLoader";
import {PlaybackHandler} from "./Services/PlaybackHandler";

export class ListElementFactory {
    constructor(private dataLoader: DataLoader, private playbackHandler: PlaybackHandler, private programDataStore: ProgramDataStore) {
    }
    
    public createEpisodeElements(episodes: BaseItem[], parentDiv: HTMLElement): void {
        for (let i: number = 0; i < episodes.length; i++) {
            if (this.programDataStore.isMovie) {
                episodes[i].IndexNumber = i + 1
                this.programDataStore.updateItem(episodes[i])
            }
            
            const episode = new ListElementTemplate(parentDiv, i, episodes[i], this.playbackHandler);
            episode.render((e: MouseEvent): void => {
                e.stopPropagation();
                
                // hide episode content for all existing episodes in the preview list
                document.querySelectorAll(".previewListItemContent").forEach((element: Element): void => {
                    element.classList.add('hide');
                    element.classList.remove('selectedListItem');
                });
                
                const episodeContainer: Element = document.querySelector(`[data-id="${episodes[i].IndexNumber}"]`).querySelector('.previewListItemContent');
                
                // load episode description
                if (!episodes[i].Description) {
                    const request: XMLHttpRequest = this.dataLoader.loadEpisodeDescription(episodes[i].Id, (): void => {
                        episodes[i].Description = request.response?.Description;
                        this.programDataStore.updateItem(episodes[i]);
                        episodeContainer.querySelector('.previewEpisodeDescription').textContent = episodes[i].Description;
                    });
                }
                
                // show episode content for the selected episode
                episodeContainer.classList.remove('hide');
                episodeContainer.classList.add('selectedListItem');
                
                // scroll to the selected episode
                episodeContainer.parentElement.scrollIntoView({ block: "start" });
            });

            if (episodes[i].Id === this.programDataStore.activeMediaSourceId) {
                const episodeNode: Element = document.querySelector(`[data-id="${episodes[i].IndexNumber}"]`).querySelector('.previewListItemContent');
                
                // preload episode description for the currently playing episode
                if (!episodes[i].Description) {
                    const request: XMLHttpRequest = this.dataLoader.loadEpisodeDescription(episodes[i].Id, (): void => {
                        episodes[i].Description = request.response?.Description;
                        this.programDataStore.updateItem(episodes[i]);
                        episodeNode.querySelector('.previewEpisodeDescription').textContent = episodes[i].Description;
                    });
                }
                
                episodeNode.classList.remove('hide');
                episodeNode.classList.add('selectedListItem');
            }
        }
    }
    
    public createSeasonElements(seasons: Season[], parentDiv: HTMLElement, currentSeasonIndex: number, titleContainer: PopupTitleTemplate): void {
        for (let i: number = 0; i < seasons.length; i++) {
            const season = new SeasonListElementTemplate(parentDiv, i, seasons[i], i === currentSeasonIndex);
            season.render((e: MouseEvent): void => {
                e.stopPropagation();
                
                titleContainer.setText(seasons[i].seasonName);
                titleContainer.setVisible(true);
                
                parentDiv.innerHTML = ""; // remove old content
                this.createEpisodeElements(seasons[i].episodes, parentDiv);
            });
        }
    }
}