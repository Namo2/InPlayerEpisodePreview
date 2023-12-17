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
        renderedElement.addEventListener('click', (e) => clickHandler(e));
    }
    
    public setText(text: string) {
        let renderedElement = this.getElement();
        renderedElement.querySelector('h1').innerText = text;
    }
    
    public setVisible(isVisible: boolean) {
        let renderedElement = this.getElement();
        if (isVisible) {
            renderedElement.classList.remove('hide');
            return;
        }
        
        renderedElement.classList.add('hide');
    }
}
