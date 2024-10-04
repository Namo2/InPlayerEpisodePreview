import {BaseTemplate} from "./BaseTemplate";
import {PopupContentContainerTemplate} from "./PopupContentContainerTemplate";

export class PopupFocusContainer extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number) {
        super(container, positionAfterIndex);
        this.setElementId('popupFocusContainer');
    }

    getTemplate(): string {
        let tempContainerDiv: HTMLDivElement = document.createElement('div');
        let popupContentContainer: PopupContentContainerTemplate = new PopupContentContainerTemplate(tempContainerDiv, -1);
        popupContentContainer.render();

        return `
            <div id="${this.getElementId()}" class="focuscontainer dialog actionsheet-not-fullscreen actionSheet centeredDialog opened previewPopup actionSheetContent" data-history="true" data-removeonclose="true">
                ${tempContainerDiv.innerHTML}
            </div>
        `;
    }

    public render(): void {
        this.addElementToContainer();
    }
}