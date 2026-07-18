import {BaseTemplate} from "./BaseTemplate";
import {ProgramDataStore} from "../Services/ProgramDataStore";
import {ItemType} from "../Models/ItemType";
import {formatWatchedCount} from "../Models/PreviewData/Group";

export class PopupTitleTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private programDataStore: ProgramDataStore) {
        super(container, positionAfterIndex)
        this.setElementId('popupTitleContainer')
    }

    getTemplate(): string {
        return `
            <div id="${this.getElementId()}" class="listItem previewPopupTitle">
                ${
                    this.programDataStore.groups.length > 1 ?
                    '<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons keyboard_backspace"></span>' : 
                    ''
                }
                <h1 class="actionSheetTitle"></h1>
                ${this.programDataStore.pluginSettings.ShowWatchedCount ? '<div class="previewGroupWatchedCount"></div>' : ''}
            </div>
        `
    }

    public render(clickHandler: Function) {
        const renderedElement = this.addElementToContainer()
        renderedElement.addEventListener('click', (e) => clickHandler(e))
    }

    public setText(text: string) {
        this.getElement().querySelector('h1').innerText = text
    }

    public setWatchedCount(playedItemCount: number, totalItemCount: number) {
        const watchedCountElement = this.getElement().querySelector<HTMLElement>('.previewGroupWatchedCount')
        if (watchedCountElement) watchedCountElement.innerText = formatWatchedCount(playedItemCount, totalItemCount)
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
