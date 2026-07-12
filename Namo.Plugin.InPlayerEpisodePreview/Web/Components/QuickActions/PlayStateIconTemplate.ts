import {BaseTemplate} from "../BaseTemplate"
import {PreviewItem} from "../../Models/PreviewData/PreviewItem"

export class PlayStateIconTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private item: PreviewItem) {
        super(container, positionAfterIndex)
        this.setElementId('playStateButton-' + this.item.Id)
    }

    getTemplate(): string {
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="emby-playstatebutton"
                    type="button"
                    data-action="none"
                    class="itemAction paper-icon-button-light emby-button"
                    data-id="${this.item?.Id ?? ''}"
                    data-serverid="${this.item?.ServerId ?? ''}"
                    data-itemtype="Episode"
                    data-likes=""
                    data-played="${this.item?.UserData?.Played ?? false}"
                    title="Mark played">
                <span class="material-icons check playstatebutton-icon-${this.item?.UserData?.Played ? "played" : "unplayed"}"></span>
            </button>
        `
    }

    public render(): void {
        this.addElementToContainer()
    }
}
