import {BaseTemplate} from "../BaseTemplate";
import {BaseItem} from "../../Models/Episode";
import {ProgramDataStore} from "../../Services/ProgramDataStore";

export class FavoriteIconTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private episode: BaseItem, private programDataStore: ProgramDataStore) {
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

    /**
     * Unused - Will maybe be used in further updates on this
     */
    public update(): void {
        // get current episode data
        const season = this.programDataStore.seasons.find(s => s.episodes.some(e => e.Id === this.episode.Id));
        const newData = season.episodes.find(e => e.Id === this.episode.Id);
        
        const favoriteIcon = this.getElement();
        favoriteIcon.setAttribute("data-isfavorite", newData.UserData.IsFavorite.toString());
    }
}