import {BaseTemplate} from "./BaseTemplate"
import {FavoriteIconTemplate} from "./QuickActions/FavoriteIconTemplate"
import {PlayStateIconTemplate} from "./QuickActions/PlayStateIconTemplate"
import {PlaybackHandler} from "../Services/PlaybackHandler"
import {ItemDetailsTemplate} from "./ItemDetails"
import {ProgramDataStore} from "../Services/ProgramDataStore"
import {PreviewItem} from "../Models/PreviewData/PreviewItem"
import {ItemType} from "../Models/ItemType"

export class ListElementTemplate extends BaseTemplate {
    private readonly quickActionContainer: HTMLElement
    private playStateIcon: PlayStateIconTemplate
    private favoriteIcon: FavoriteIconTemplate

    constructor(container: HTMLElement, positionAfterIndex: number, private item: PreviewItem, private playbackHandler: PlaybackHandler, private programDataStore: ProgramDataStore) {
        super(container, positionAfterIndex)
        this.setElementId(`item-${item.Id}`)

        // create temp quick action container
        this.quickActionContainer = document.createElement('div')

        // create quick actions
        this.playStateIcon = new PlayStateIconTemplate(this.quickActionContainer, -1, this.item)
        this.favoriteIcon = new FavoriteIconTemplate(this.quickActionContainer, 0, this.item)
    }

    getTemplate(): string {
        // add quick actions
        this.playStateIcon.render()
        this.favoriteIcon.render()

        // add item details/info
        const detailsContainer: HTMLDivElement = document.createElement('div')
        const details: ItemDetailsTemplate = new ItemDetailsTemplate(detailsContainer, -1, this.item)
        details.render()

        const backgroundImageStyle: string = `background-image: url('../Items/${this.item.Id}/Images/Primary?tag=${this.item.PrimaryImageTag}')`

        // language=HTML
        return `
            <div id="${this.getElementId()}"
                 class="listItem listItem-button actionSheetMenuItem emby-button previewListItem"
                 is="emby-button"
                 data-id="${this.item.Id}">
                <div class="previewItemContainer flex">
                    <button class="listItem previewItemTitle" type="button">
                        ${(
                                this.item.IndexNumber &&
                                this.programDataStore.type !== ItemType.Movie
                        ) ? `<span>${this.item.IndexNumber}</span>` : ''}
                        <div class="listItemBody actionsheetListItemBody">
                            <span class="actionSheetItemText">${this.item.Name}</span>
                        </div>
                    </button>
                    <div class="previewQuickActionContainer flex">
                        ${this.quickActionContainer.innerHTML}
                    </div>
                </div>

                <div class="previewListItemContent hide">
                    ${detailsContainer.innerHTML}
                    <div class="flex">
                        <div class="card overflowBackdropCard card-hoverable card-withuserdata previewItemImageCard">
                            <div class="cardBox">
                                <div class="cardScalable">
                                    <div class="cardPadder cardPadder-overflowBackdrop lazy-hidden-children">
                                        <span class="cardImageIcon material-icons tv" aria-hidden="true"/>
                                    </div>
                                    <button id="previewItemImageCard-${this.item.Id}"
                                            class="cardImageContainer cardContent itemAction lazy blurhashed lazy-image-fadein-fast ${this.programDataStore.pluginSettings.BlurThumbnail ? 'blur' : ''}"
                                            data-action="link"
                                            style="${backgroundImageStyle}">
                                    </button>
                                    ${this.item.UserData.PlayedPercentage ?
                                        `<div class="innerCardFooter fullInnerCardFooter innerCardFooterClear itemProgressBar">
                                            <div class="itemProgressBarForeground"
                                                style="width:${this.item.UserData.PlayedPercentage}%;">
                                            </div>
                                        </div>` : ''
                                    }
                                    ${this.item.Id !== this.programDataStore.activeMediaSourceId ?
                                        `<div class="cardOverlayContainer itemAction"
                                             data-action="link">
                                            <button id="start-item-${this.item.Id}"
                                                    is="paper-icon-button-light"
                                                    class="cardOverlayButton cardOverlayButton-hover itemAction paper-icon-button-light cardOverlayFab-primary"
                                                    data-action="resume">
                                                <span class="material-icons cardOverlayButtonIcon cardOverlayButtonIcon-hover play_arrow"
                                                    aria-hidden="true"/>
                                            </button>
                                        </div>` : ''
                                    }
                                </div>
                            </div>
                        </div>
                        <span class="previewItemDescription ${this.programDataStore.pluginSettings.BlurDescription ? 'blur' : ''}">
                            ${this.item.Description ?? 'loading...'}
                        </span>
                    </div>
                </div>
            </div>
        `
    }

    public render(clickHandler: Function): void {
        const renderedElement: HTMLElement = this.addElementToContainer()
        renderedElement.addEventListener('click', (e) => clickHandler(e))

        if (this.item.Id !== this.programDataStore.activeMediaSourceId) {
            // add event handler to start the playback of this item
            const itemImageCard: HTMLElement = document.getElementById(`start-item-${this.item.Id}`)
            itemImageCard.addEventListener('click', () => this.playbackHandler.play(this.item.Id, this.item.UserData.PlaybackPositionTicks))
        }
    }
}
