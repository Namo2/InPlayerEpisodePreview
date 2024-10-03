import {BaseTemplate} from "../BaseTemplate";
import {Episode} from "../../Models/Episode";
import {ProgramDataStore} from "../../Services/ProgramDataStore";

export class PlayStateIconTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private episode: Episode, private programDataStore: ProgramDataStore) {
        super(container, positionAfterIndex);
        this.setElementId('playStateButton-' + this.episode.IndexNumber);
    }

    getTemplate(): string {
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="emby-playstatebutton"
                    type="button"
                    data-action="none"
                    class="itemAction paper-icon-button-light emby-button"
                    data-id="${this.episode?.Id ?? ''}" 
                    data-serverid="${this.episode?.ServerId ?? ''}"
                    data-itemtype="Episode"
                    data-likes=""
                    data-played="${this.episode?.UserData?.Played ?? false}"
                    title="Mark played">
                <span class="material-icons check playstatebutton-icon-${this.episode?.UserData?.Played ? "played" : "unplayed"}"></span>
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
        
        const playStateIcon = this.getElement();
        playStateIcon.setAttribute("data-played", newData.UserData.Played.toString());
    }
}