import {BaseTemplate} from "./BaseTemplate";
import {Episode} from "../Models/Episode";

export class EpisodeElementTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private episode: Episode) {
        super(container, positionAfterIndex);
        this.setElementId(`episode-${episode.IndexNumber}`);
    }
    
    getTemplate(): string {
        return `
            <div id="${this.getElementId()}" 
                class="listItem listItem-button actionSheetMenuItem emby-button previewListItem" 
                is="emby-button" 
                data-id="${this.episode.IndexNumber}">
                <button class="listItem" type="button">
                    <span>${this.episode.IndexNumber}</span>
                    <div class="listItemBody actionsheetListItemBody">
                        <span class="actionSheetItemText">${this.episode.Name}</span>
                    </div>
                </button>
                <div class="previewListItemContent hide">
                    <button class="cardImageContainer cardContent itemAction lazy blurhashed lazy-image-fadein-fast previewEpisodeImageCard" 
                            data-action="link" 
                            style="background-image: url('../Items/${this.episode.Id}/Images/Primary?tag=${this.episode.ImageTags.Primary}');">
                    </button>
                    <span class="previewEpisodeDescription">${this.episode.Description}</span>
                </div>
            </div>
        `;
    }

    public render(clickHandler: Function): void {
        let renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
    }
}