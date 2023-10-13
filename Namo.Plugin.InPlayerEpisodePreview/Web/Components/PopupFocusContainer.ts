import {BaseTemplate} from "./BaseTemplate";
import {PopupTitleTemplate} from "./PopupTitleTemplate";
import {PopupContentContainerTemplate} from "./PopupContentContainerTemplate";

export class PopupFocusContainer extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number) {
        super(container, positionAfterIndex);
        this.setElementId('popupFocusContainer');
    }

    getTemplate(): string {
        let tempContainerDiv = document.createElement('div');
        let popupTitle = new PopupTitleTemplate(tempContainerDiv, -1);
        let popupContentContainer = new PopupContentContainerTemplate(tempContainerDiv, -1);

        popupTitle.render(() => {});
        popupContentContainer.render(() => {});

        return `
            <div id="${this.getElementId()}" class="focuscontainer dialog actionsheet-not-fullscreen actionSheet centeredDialog opened previewPopup actionSheetContent" data-history="true" data-removeonclose="true">
                ${tempContainerDiv.innerHTML}
            </div>
        `;
    }

    public render(clickHandler: Function): void {
        let renderedElement = this.addElementToContainer();
    }
}