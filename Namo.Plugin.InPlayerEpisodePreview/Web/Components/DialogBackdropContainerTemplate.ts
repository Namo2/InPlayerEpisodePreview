import {BaseTemplate} from "./BaseTemplate";

export class DialogBackdropContainerTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number) {
        super(container, positionAfterIndex);
        this.setElementId('dialogBackdropContainer');
    }

    getTemplate(): string {
        return `
            <div  id="${this.getElementId()}" class="dialogBackdrop dialogBackdropOpened"/>
        `;
    }

    public render(): void {
        this.addElementToContainer();
    }
}