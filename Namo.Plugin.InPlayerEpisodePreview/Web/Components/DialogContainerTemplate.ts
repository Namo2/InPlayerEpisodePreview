import {BaseTemplate} from "./BaseTemplate";

export class DialogContainerTemplate extends BaseTemplate {
    dialogBackdropId = 'dialogBackdrop'
    dialogContainerId = 'dialogContainer'
    popupContentContainerId = 'popupContentContainer'
    popupFocusContainerId = 'popupFocusContainer'
    
    constructor(container: HTMLElement, positionAfterIndex: number) {
        super(container, positionAfterIndex);
        this.setElementId('previewPopup');
    }

    getTemplate(): string {
        return `
            <div id="${this.getElementId()}">
                <div id="${this.dialogBackdropId}" class="dialogBackdrop dialogBackdropOpened"></div>
                <div id="${this.dialogContainerId}" class="dialogContainer">
                    <div id="${this.popupFocusContainerId}" 
                        class="focuscontainer dialog actionsheet-not-fullscreen actionSheet centeredDialog opened previewPopup actionSheetContent" 
                        data-history="true" 
                        data-removeonclose="true">
                        <div id="${this.popupContentContainerId}" class="actionSheetScroller scrollY previewPopupScroller"/>
                    </div>
                </div>
            </div>
        `;
    }

    public render(): void {
        const renderedElement: HTMLElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e: MouseEvent): any => {
            this.getContainer().removeChild(document.getElementById(this.getElementId()))
        });
    }
}