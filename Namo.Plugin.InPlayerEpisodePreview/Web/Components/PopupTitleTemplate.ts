import {BaseTemplate} from "./BaseTemplate";

export class PopupTitleTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number) {
        super(container, positionAfterIndex);
        this.setElementId('popupTitleContainer');
    }

    getTemplate(): string {
        return `
            <div id="${this.getElementId()}" class="actionSheetTitle listItem previewPopupTitle">
                <span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons keyboard_backspace"></span>
                <h1 class="actionSheetTitle">Not implemented</h1>
            </div>
        `;
    }

    public render(clickHandler: Function) {
        let renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}
