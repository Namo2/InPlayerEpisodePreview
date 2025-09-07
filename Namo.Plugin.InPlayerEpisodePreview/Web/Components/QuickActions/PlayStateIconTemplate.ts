import {BaseTemplate} from "../BaseTemplate"
import {BaseItem} from "../../Models/Episode"

export class PlayStateIconTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private episode: BaseItem) {
        super(container, positionAfterIndex)
        this.setElementId('playStateButton-' + this.episode.IndexNumber)
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
        `
    }

    public render(): void {
        this.addElementToContainer()
    }
}