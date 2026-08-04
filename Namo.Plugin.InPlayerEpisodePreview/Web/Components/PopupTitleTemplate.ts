import {BaseTemplate} from "./BaseTemplate";
import {ProgramDataStore} from "../Services/ProgramDataStore";
import {ItemType} from "../Models/ItemType";
import {Group} from "../Models/PreviewData/Group";
import {renderWatchedCountInnerHtml} from "../Models/PreviewData/WatchProgress";

export class PopupTitleTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private programDataStore: ProgramDataStore) {
        super(container, positionAfterIndex)
        this.setElementId('popupTitleContainer')
    }

    getTemplate(): string {
        return `
            <div id="${this.getElementId()}" class="listItem previewPopupTitle">
                <span id="popupTitleSwitchIcon" class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons keyboard_backspace ${this.programDataStore.groups.length > 1 ? '' : 'hide'}"></span>
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

    public setSwitchable(switchable: boolean) {
        this.getElement().querySelector<HTMLElement>('#popupTitleSwitchIcon')?.classList.toggle('hide', !switchable)
    }

    public setWatchedCount(group: Group) {
        const watchedCountElement = this.getElement().querySelector<HTMLElement>('.previewGroupWatchedCount')
        if (watchedCountElement) watchedCountElement.innerHTML = renderWatchedCountInnerHtml(group, this.programDataStore.pluginSettings.WatchCountDisplayMode)
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
