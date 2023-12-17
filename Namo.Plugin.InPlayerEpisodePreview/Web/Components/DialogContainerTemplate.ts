import {BaseTemplate} from "./BaseTemplate";
import {PopupFocusContainer} from "./PopupFocusContainer";

export class DialogContainerTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number) {
        super(container, positionAfterIndex);
        this.setElementId('dialogContainer');
    }

    getTemplate(): string {
        let tempContainerDiv = document.createElement('div');
        let focusContainerDiv = new PopupFocusContainer(tempContainerDiv, -1);
        focusContainerDiv.render();

        return `
            <div id="${this.getElementId()}" class="dialogContainer">
                ${tempContainerDiv.innerHTML}
            <div>
        `;
    }

    public render(dialogContainerClickHandler: Function): void {
        let renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => dialogContainerClickHandler(e));
    }
}