import {BaseTemplate} from "../BaseTemplate";
import {BaseItem} from "../../Models/Episode";

export class FavoriteIconTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private episode: BaseItem) {
        super(container, positionAfterIndex);
        this.setElementId('favoriteButton-' + episode.IndexNumber);
    }

    getTemplate(): string {
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="emby-ratingbutton"
                    type="button"
                    class="itemAction paper-icon-button-light emby-button"
                    data-action="none"
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
    }
}