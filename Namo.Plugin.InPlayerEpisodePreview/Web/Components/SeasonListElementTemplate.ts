import {BaseTemplate} from "./BaseTemplate";
import {Season} from "../Models/Season";

export class SeasonListElementTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private season: Season, private isCurrentSeason: boolean) {
        super(container, positionAfterIndex);
        this.setElementId(`episode-${season.seasonId}`);
    }

    getTemplate(): string {
        // language=HTML
        return `
            <div id="${this.getElementId()}"
                 class="listItem listItem-button actionSheetMenuItem emby-button previewListItem"
                 is="emby-button"
                 data-id="${this.season.seasonId}">
                <button class="listItem previewEpisodeTitle" type="button">
                    <span class="${this.isCurrentSeason ? "material-icons check" : ""}"></span>
                    <div class="listItemBody actionsheetListItemBody">
                        <span class="actionSheetItemText">${this.season.seasonName}</span>
                    </div>
                </button>
            </div>
        `;
    }

    public render(clickHandler: Function): void {
        let renderedElement: HTMLElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e: MouseEvent): void => clickHandler(e));
    }
}