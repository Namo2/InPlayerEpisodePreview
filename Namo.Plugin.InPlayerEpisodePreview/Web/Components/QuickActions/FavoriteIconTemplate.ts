import {BaseTemplate} from "../BaseTemplate";
import {Episode} from "../../Models/Episode";
import {ProgramDataStore} from "../../Services/ProgramDataStore";

export class FavoriteIconTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private episode: Episode, private programDataStore: ProgramDataStore) {
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
        // let element = this.addElementToContainer();
        //
        // element.addEventListener('click', (e) => {
        //     e.stopPropagation();
        //
        //     console.log("Update Episode Fav")
        //    
        //     this.getElement().nextElementSibling.dispatchEvent(new MouseEvent('click'))
        //
        //     // update the favorite state
        //     this.episode.UserData.IsFavorite = !this.episode.UserData.IsFavorite;
        //     this.getElement().dataset.isfavorite = this.episode.UserData.IsFavorite.toString();
        //
        //     this.programDataStore
        //         .seasons.find(s => s.seasonId === this.episode.SeasonId)
        //         .episodes.find(e => e.Id === this.episode.Id).UserData.IsFavorite = this.episode.UserData.IsFavorite;
        // });
    }
}