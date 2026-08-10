import {BaseTemplate} from "./BaseTemplate";
import {Group} from "../Models/PreviewData/Group";
import {renderWatchedCountInnerHtml} from "../Models/PreviewData/WatchProgress";
import {WatchCountDisplayMode} from "../Models/WatchCountDisplayMode";

export class GroupListElementTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private group: Group, private isCurrentGroup: boolean, private showWatchedCount: boolean, private watchCountDisplayMode: WatchCountDisplayMode) {
        super(container, positionAfterIndex);
        this.setElementId(`group-${group.groupId}`);
    }

    getTemplate(): string {
        // language=HTML
        return `
            <div id="${this.getElementId()}"
                 class="listItem listItem-button actionSheetMenuItem emby-button previewListItem"
                 is="emby-button"
                 data-id="${this.group.groupId}">
                <button class="listItem previewItemTitle" type="button">
                    <span class="${this.isCurrentGroup ? "material-icons check" : ""}"></span>
                    <div class="listItemBody actionsheetListItemBody">
                        <span class="actionSheetItemText">${this.group.groupName}</span>
                    </div>
                    ${this.showWatchedCount ? `<div class="previewGroupWatchedCount">${renderWatchedCountInnerHtml(this.group, this.watchCountDisplayMode)}</div>` : ''}
                </button>
            </div>
        `;
    }

    public render(clickHandler: Function): void {
        const renderedElement: HTMLElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e: MouseEvent): void => clickHandler(e));
    }
}
