﻿import {EpisodeElementTemplate} from "./Components/EpisodeElementTemplate";
import {Episode} from "./Models/Episode";
import {ProgramDataStore} from "./Services/ProgramDataStore";
import {Season} from "./Models/Season";
import {SeasonListElementTemplate} from "./Components/SeasonListElementTemplate";
import {PopupTitleTemplate} from "./Components/PopupTitleTemplate";
import {DataLoader} from "./Services/DataLoader";
import {PlaybackHandler} from "./Services/PlaybackHandler";

export class ListElementFactory {
    constructor(private dataLoader: DataLoader, private playbackHandler: PlaybackHandler, private programDataStore: ProgramDataStore) {
    }
    
    public createEpisodeElements(episodes: Episode[], parentDiv: HTMLElement) {
        for (let i = 0; i < episodes.length; i++) {
            let episode = new EpisodeElementTemplate(parentDiv, i, episodes[i], this.dataLoader, this.playbackHandler, this.programDataStore);
            episode.render((e: MouseEvent) => {
                e.stopPropagation();
                
                // hide episode content for all existing episodes in the preview list
                document.querySelectorAll(".previewListItemContent").forEach((element) => {
                    element.classList.add('hide');
                    element.classList.remove('selectedListItem');
                });

                // show episode content for the selected episode
                let episodeContainer = document.querySelector(`[data-id="${episodes[i].IndexNumber}"]`).querySelector('.previewListItemContent');
                episodeContainer.classList.remove('hide');
                episodeContainer.classList.add('selectedListItem');
                
                // scroll to the selected episode
                episodeContainer.scrollIntoView({ block: "end" });
            });

            if (episodes[i].Id === this.programDataStore.activeMediaSourceId) {
                let episodeNode = document.querySelector(`[data-id="${episodes[i].IndexNumber}"]`).querySelector('.previewListItemContent');
                episodeNode.classList.remove('hide');
                episodeNode.classList.add('selectedListItem');
            }
        }
    }
    
    public createSeasonElements(seasons: Season[], parentDiv: HTMLElement, currentSeasonIndex: number, titleContainer: PopupTitleTemplate) {
        for (let i = 0; i < seasons.length; i++) {
            let season = new SeasonListElementTemplate(parentDiv, i, seasons[i], i === currentSeasonIndex);
            season.render((e: MouseEvent) => {
                e.stopPropagation();
                
                titleContainer.setText(seasons[i].seasonName);
                titleContainer.setVisible(true);
                
                parentDiv.innerHTML = ""; // remove old content
                this.createEpisodeElements(seasons[i].episodes, parentDiv);
            });
        }
    }
}