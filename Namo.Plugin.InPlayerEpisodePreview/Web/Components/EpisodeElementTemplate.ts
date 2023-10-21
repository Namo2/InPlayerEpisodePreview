import {BaseTemplate} from "./BaseTemplate";
import {Episode} from "../Models/Episode";
import {DataLoader} from "../Services/DataLoader/DataLoader";
import {PlaybackHandler} from "../Services/PlaybackHandler/PlaybackHandler";

export class EpisodeElementTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private episode: Episode, private dataLoader: DataLoader, private playbackHandler: PlaybackHandler) {
        super(container, positionAfterIndex);
        this.setElementId(`episode-${episode.IndexNumber}`);
    }
    
    getTemplate(): string {
        return `
            <div id="${this.getElementId()}" 
                class="listItem listItem-button actionSheetMenuItem emby-button previewListItem" 
                is="emby-button" 
                data-id="${this.episode.IndexNumber}">
                <button class="listItem previewEpisodeTitle" type="button">
                    <span>${this.episode.IndexNumber}</span>
                    <div class="listItemBody actionsheetListItemBody">
                        <span class="actionSheetItemText">${this.episode.Name}</span>
                    </div>
                </button>
                <div class="previewListItemContent hide">
                    <button id="previewEpisodeImageCard-${this.episode.IndexNumber}"
                            class="cardImageContainer cardContent itemAction lazy blurhashed lazy-image-fadein-fast previewEpisodeImageCard" 
                            data-action="link"  
                            style="background-image: url('${this.dataLoader.getBaseUrl()}/Items/${this.episode.Id}/Images/Primary?tag=${this.episode.ImageTags.Primary}');">
                    </button>
                    <span class="previewEpisodeDescription">${this.episode.Description}</span>
                </div>
            </div>
        `;
    }

    public render(clickHandler: Function): void {
        let renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
        
        // add event handler to start the playback of this episode
        let episodeImageCard = document.getElementById(`previewEpisodeImageCard-${this.episode.IndexNumber}`);
        episodeImageCard.addEventListener('click', () => this.playbackHandler.play(this.episode.Id, this.episode.UserData.PlaybackPositionTicks, this.episode.ServerId));
    }
}