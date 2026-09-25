import {BaseTemplate} from "../BaseTemplate"
import {PreviewItem} from "../../Models/PreviewData/PreviewItem"

export class PlayIconTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private item: PreviewItem, private isActive: boolean) {
        super(container, positionAfterIndex)
        this.setElementId('playButton-' + this.item.Id)
    }

    getTemplate(): string {
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="paper-icon-button-light"
                    type="button"
                    data-action="none"
                    class="itemAction paper-icon-button-light emby-button"
                    ${this.isActive ? 'disabled' : ''}
                    title="Play">
                <span class="material-icons play_arrow" aria-hidden="true"></span>
            </button>
        `
    }

    public render(): void {
        this.addElementToContainer()
    }
}
