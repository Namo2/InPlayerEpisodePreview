import {BaseTemplate} from "./BaseTemplate";
import {ProgramDataStore} from "../Services/ProgramDataStore";

export class PopupTitleTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private programDataStore: ProgramDataStore) {
        super(container, positionAfterIndex);
        this.setElementId('popupTitleContainer');
    }

    getTemplate(): string {
        return `
            <div id="${this.getElementId()}" class="actionSheetTitle listItem previewPopupTitle">
                ${
                    this.programDataStore.isSeries && this.programDataStore.seasons.length > 1 ? 
                    '<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons keyboard_backspace"></span>' : 
                    ''
                }
                <h1 class="actionSheetTitle"></h1>
            </div>
        `;
    }

    public render(clickHandler: Function) {
        let renderedElement = this.addElementToContainer();
        
        if (this.programDataStore.isSeries)
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
