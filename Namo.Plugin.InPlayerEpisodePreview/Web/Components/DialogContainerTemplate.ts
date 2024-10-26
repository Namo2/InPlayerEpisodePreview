import {BaseTemplate} from "./BaseTemplate";
import {PopupFocusContainer} from "./PopupFocusContainer";

export class DialogContainerTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number) {
        super(container, positionAfterIndex);
        this.setElementId('dialogContainer');
    }

    getTemplate(): string {
        let tempContainerDiv: HTMLDivElement = document.createElement('div');
        let focusContainerDiv: PopupFocusContainer = new PopupFocusContainer(tempContainerDiv, -1);
        focusContainerDiv.render();

        return `
            <div id="${this.getElementId()}" class="dialogContainer">
                ${tempContainerDiv.innerHTML}
            <div>
        `;
    }

    public render(dialogContainerClickHandler: Function): void {
        let renderedElement: HTMLElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e: MouseEvent): any => dialogContainerClickHandler(e));
    }
}