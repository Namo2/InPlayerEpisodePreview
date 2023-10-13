import {BaseTemplate} from "./BaseTemplate";

export class PopupContentContainerTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number) {
        super(container, positionAfterIndex);
        this.setElementId('popupContentContainer');
    }

    getTemplate(): string {
        return `
            <div id="${this.getElementId()}" class="actionSheetScroller scrollY previewPopupScroller"/>
        `;
    }

    public render(clickHandler: Function): void {
        let renderedElement = this.addElementToContainer();
    }

}