import {BaseTemplate} from "../BaseTemplate"
import {PreviewItem} from "../../Models/PreviewData/PreviewItem"

export class FavoriteIconTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private item: PreviewItem) {
        super(container, positionAfterIndex)
        this.setElementId('favoriteButton-' + item.Id)
    }

    getTemplate(): string {
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="emby-ratingbutton"
                    type="button"
                    class="itemAction paper-icon-button-light emby-button"
                    data-action="none"
                    data-id="${this.item?.Id ?? ''}"
                    data-serverid="${this.item?.ServerId ?? ''}"
                    data-itemtype="Episode"
                    data-likes=""
                    data-isfavorite="${this.item?.UserData?.IsFavorite ?? false}"
                    title="Add to favorites">
                <span class="material-icons favorite"></span>
            </button>
        `
    }

    public render(): void {
        this.addElementToContainer()
    }
}
