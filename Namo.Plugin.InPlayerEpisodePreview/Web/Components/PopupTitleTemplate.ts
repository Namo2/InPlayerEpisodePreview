import {BaseTemplate} from "./BaseTemplate";
import {ProgramDataStore} from "../Services/ProgramDataStore";

export class PopupTitleTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private programDataStore: ProgramDataStore) {
        super(container, positionAfterIndex)
        this.setElementId('popupTitleContainer')
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
        `
    }

    public render(clickHandler: Function) {
        const renderedElement = this.addElementToContainer();
        if (this.programDataStore.isSeries)
            renderedElement.addEventListener('click', (e) => clickHandler(e))
        if (this.programDataStore.isMovie && this.programDataStore.boxSetName !== '')
            renderedElement.addEventListener('click', (e) => e.stopPropagation())
    }
    
    public setText(text: string) {
        this.getElement().querySelector('h1').innerText = text
    }
    
    public setVisible(isVisible: boolean) {
        const renderedElement = this.getElement()
        if (isVisible) {
            renderedElement.classList.remove('hide');
            return
        }
        
        renderedElement.classList.add('hide');
    }
}
