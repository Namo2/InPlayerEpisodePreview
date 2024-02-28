import {BaseTemplate} from "../BaseTemplate";
import {Episode} from "../../Models/Episode";

export class FavoriteIconTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private episode: Episode) {
        super(container, positionAfterIndex);
        this.setElementId('favoriteButton');
    }

    getTemplate(): string {
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="emby-ratingbutton"
                    type="button"
                    data-action="none"
                    class="itemAction paper-icon-button-light emby-button"
                    data-id="${this.episode?.Id ?? ''}" 
                    data-serverid="${this.episode?.ServerId ?? ''}"
                    data-itemtype="Episode"
                    data-likes=""
                    data-isfavorite="${this.episode?.UserData?.IsFavorite ?? false}"
                    title="Add to favorites">
                <span class="material-icons favorite"></span>
            </button>
        `;
    }

    public render(): void {
        this.addElementToContainer();
        
        this.getElement().addEventListener('click', (e: MouseEvent) => {
            e.stopPropagation();
            
            // update the favorite state
            this.episode.UserData.IsFavorite = !this.episode.UserData.IsFavorite;
            this.getElement().dataset.isfavorite = this.episode.UserData.IsFavorite.toString();
        });
    }
}