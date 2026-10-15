import {BaseTemplate} from "./BaseTemplate"
import {FavoriteIconTemplate} from "./QuickActions/FavoriteIconTemplate"
import {PlayStateIconTemplate} from "./QuickActions/PlayStateIconTemplate"
import {PlayIconTemplate} from "./QuickActions/PlayIconTemplate"
import {PlaybackHandler} from "../Services/PlaybackHandler"
import {ItemDetailsTemplate} from "./ItemDetails"
import {ProgramDataStore} from "../Services/ProgramDataStore"
import {PreviewItem} from "../Models/PreviewData/PreviewItem"
import {ItemType} from "../Models/ItemType"
import {adjustWatchedCount, togglePlayedStateLocally, updateBlurDom} from "../Services/DataFetcher"
import {ExpandedItemLayout} from "../Models/ExpandedItemLayout"
import {carryPositionOver, VersionSelectTemplate} from "./VersionSelectTemplate"
import {ItemVersion} from "../Models/PreviewData/ItemVersion"

// Shows/hides the "start playback" overlay for a rendered list item
export const setItemOverlayActive = (itemId: string, isActive: boolean): void => {
    document.getElementById(`cardOverlay-${itemId}`)?.classList.toggle('hide', isActive)
    document.getElementById(`playButton-${itemId}`)?.toggleAttribute('disabled', isActive)
}

// Updates or creates the progress bar of a rendered list item
export const updateItemProgressDom = (itemId: string, percentage: number): void => {
    const foreground = document.getElementById(`item-${itemId}`)?.querySelector<HTMLElement>('.itemProgressBarForeground')
    if (foreground) {
        foreground.style.width = `${percentage}%`
        return
    }

    const scalable = document.getElementById(`previewItemImageCard-${itemId}`)?.parentElement
    if (!scalable || !percentage) return
    scalable.querySelector('#cardOverlay-' + itemId)?.insertAdjacentHTML('beforebegin',
        `<div class="innerCardFooter fullInnerCardFooter innerCardFooterClear itemProgressBar">
            <div class="itemProgressBarForeground" style="width:${percentage}%;"></div>
        </div>`)
}

// Show a "Show more" button if description exceeds max height
export const applyDescriptionReadMore = (itemContainer: Element): void => {
    const description = itemContainer.querySelector<HTMLElement>('.previewItemDescription')
    const readMoreButton = itemContainer.querySelector<HTMLElement>('.previewItemReadMoreButton')
    if (!description || !readMoreButton) return

    description.classList.remove('expanded')
    readMoreButton.textContent = 'Show more'

    const isOverflowing = description.scrollHeight > description.clientHeight
    readMoreButton.classList.toggle('hide', !isOverflowing)
    if (!isOverflowing) return

    readMoreButton.onclick = (e: MouseEvent): void => {
        e.stopPropagation()
        const expanded = description.classList.toggle('expanded')
        readMoreButton.textContent = expanded ? 'Show less' : 'Show more'
    }
}

// Index number span for the title row, e.g. "<span>1</span>" or "<span>1-2</span>" for a multi-episode file.
// Empty for Movies, or items without an IndexNumber.
const indexNumberHtml = (item: PreviewItem, groupType: ItemType): string => {
    if (!item.IndexNumber || groupType === ItemType.Movie) return ''
    
    if (item.IndexNumberEnd && item.IndexNumberEnd !== item.IndexNumber) {
        return `<span>${item.IndexNumber}-${item.IndexNumberEnd}</span>`
    }

    return `<span>${item.IndexNumber}</span>`
}

export class ListElementTemplate extends BaseTemplate {
    private readonly quickActionContainer: HTMLElement
    private playStateIcon: PlayStateIconTemplate
    private favoriteIcon: FavoriteIconTemplate
    private playIcon?: PlayIconTemplate
    private versionSelect?: VersionSelectTemplate
    private versions: ItemVersion[] = []
    private hasUserDataPerVersion: boolean = false
    private versionsLoad?: Promise<void>
    // Version this item plays in the current session
    private playingVersionId?: string

    constructor(container: HTMLElement, positionAfterIndex: number, private item: PreviewItem, private playbackHandler: PlaybackHandler, private programDataStore: ProgramDataStore) {
        super(container, positionAfterIndex)
        this.setElementId(`item-${item.Id}`)

        // create temp quick action container
        this.quickActionContainer = document.createElement('div')

        // create quick actions
        this.playStateIcon = new PlayStateIconTemplate(this.quickActionContainer, -1, this.item)
        this.favoriteIcon = new FavoriteIconTemplate(this.quickActionContainer, 0, this.item)
        if (!this.programDataStore.pluginSettings.ExpandAllItems)
            this.playIcon = new PlayIconTemplate(this.quickActionContainer, -1, this.item, this.item.Id === this.programDataStore.activeMediaSourceId)
    }

    getTemplate(): string {
        // add quick actions
        this.playStateIcon.render()
        this.favoriteIcon.render()
        this.playIcon?.render()

        // add item details/info
        const detailsContainer: HTMLDivElement = document.createElement('div')
        const details: ItemDetailsTemplate = new ItemDetailsTemplate(detailsContainer, -1, this.item)
        details.render()

        const backgroundImageStyle: string = `background-image: url('../Items/${this.item.Id}/Images/Primary?tag=${this.item.PrimaryImageTag}')`

        const shouldBlur: boolean = !(this.programDataStore.pluginSettings.OnlyBlurUnwatched && this.item.UserData.Played)

        // Only takes effect while every item is force-expanded
        const useSideBySideLayout: boolean = this.programDataStore.pluginSettings.ExpandAllItems
            && this.programDataStore.pluginSettings.ExpandedItemLayout === ExpandedItemLayout.SideBySide

        const indexNumber: string = indexNumberHtml(this.item, this.programDataStore.type)

        // language=HTML
        const titleRow: string = `
            <div class="previewItemContainer flex">
                <button class="listItem previewItemTitle${indexNumber ? '' : ' previewItemTitle-noIndex'}" type="button">
                    ${indexNumber}
                    <div class="listItemBody actionsheetListItemBody">
                        <span class="actionSheetItemText">${this.item.Name}</span>
                    </div>
                </button>
                <div class="previewQuickActionContainer flex">
                    ${this.quickActionContainer.innerHTML}
                </div>
            </div>
        `

        // language=HTML
        const imageCard: string = `
            <div class="card overflowBackdropCard card-hoverable card-withuserdata previewItemImageCard">
                <div class="cardBox">
                    <div class="cardScalable">
                        <div class="cardPadder cardPadder-overflowBackdrop lazy-hidden-children">
                            <span class="cardImageIcon material-icons tv" aria-hidden="true"/>
                        </div>
                        <button id="previewItemImageCard-${this.item.Id}"
                                class="cardImageContainer cardContent itemAction lazy blurhashed lazy-image-fadein-fast ${this.programDataStore.pluginSettings.BlurThumbnail && shouldBlur ? 'blur' : ''}"
                                data-action="link"
                                style="${backgroundImageStyle}">
                        </button>
                        ${this.programDataStore.pluginSettings.ShowWatchProgress && this.item.UserData.PlayedPercentage ?
                            `<div class="innerCardFooter fullInnerCardFooter innerCardFooterClear itemProgressBar">
                                <div class="itemProgressBarForeground"
                                    style="width:${this.item.UserData.PlayedPercentage}%;">
                                </div>
                            </div>` : ''
                        }
                        <div id="cardOverlay-${this.item.Id}"
                             class="cardOverlayContainer itemAction ${this.item.Id === this.programDataStore.activeMediaSourceId ? 'hide' : ''}"
                             data-action="link">
                            <button id="start-item-${this.item.Id}"
                                    is="paper-icon-button-light"
                                    class="cardOverlayButton cardOverlayButton-hover itemAction paper-icon-button-light cardOverlayFab-primary"
                                    data-action="resume">
                                <span class="material-icons cardOverlayButtonIcon cardOverlayButtonIcon-hover play_arrow"
                                    aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `

        // language=HTML
        const descriptionBlock: string = `
            <span class="previewItemDescription ${this.programDataStore.pluginSettings.BlurDescription && shouldBlur ? 'blur' : ''}">
                ${this.item.Description ?? ''}
            </span>
            <button type="button" class="previewItemReadMoreButton hide">Show more</button>
        `

        // language=HTML
        const contentRow: string = useSideBySideLayout ? `
            <div class="flex previewItemContentRow">
                ${imageCard}
                <div class="previewItemDescriptionColumn">
                    ${titleRow}
                    ${detailsContainer.innerHTML}
                    ${descriptionBlock}
                </div>
            </div>
        ` : `
            ${detailsContainer.innerHTML}
            <div class="flex previewItemContentRow">
                ${imageCard}
                <div class="previewItemDescriptionColumn">
                    ${descriptionBlock}
                </div>
            </div>
        `

        // language=HTML
        return `
            <div id="${this.getElementId()}"
                 class="listItem listItem-button actionSheetMenuItem emby-button previewListItem${useSideBySideLayout ? ' previewListItem-sideBySide' : ''}"
                 is="emby-button"
                 data-id="${this.item.Id}">
                ${useSideBySideLayout ? '' : titleRow}
                <div class="previewListItemContent hide">
                    ${contentRow}
                </div>
            </div>
        `
    }

    public render(clickHandler: Function): void {
        const renderedElement: HTMLElement = this.addElementToContainer()
        renderedElement.addEventListener('click', (e) => clickHandler(e))
        
        const playStateButton: HTMLElement = document.getElementById(`playStateButton-${this.item.Id}`)
        playStateButton?.addEventListener('click', (e: MouseEvent) => {
            e.stopPropagation()
            togglePlayedStateLocally(this.programDataStore, this.item.Id)
        })
        
        renderedElement.querySelector('.previewItemDescription')
            ?.addEventListener('click', (e: MouseEvent) => e.stopPropagation())

        const startPlayback = (e: MouseEvent): void => {
            e.stopPropagation()
            if (this.versions.length) {
                this.playSelectedVersion()
                return
            }

            void this.playbackHandler.play(this.item.Id, this.item.UserData.PlaybackPositionTicks)
            if (this.programDataStore.pluginSettings.AutoClosePreview)
                document.getElementById('previewPopup')?.remove()
        }
        document.getElementById(`start-item-${this.item.Id}`).addEventListener('click', startPlayback)
        document.getElementById(`playButton-${this.item.Id}`)?.addEventListener('click', startPlayback)

        if (this.programDataStore.pluginSettings.ShowAlternateVersions && (this.item.MediaSourceCount ?? 0) > 1)
            this.renderVersionSelect()
    }

    // Versions load once the item gets expanded
    public ensureVersionsLoaded(): void {
        if (!this.versionSelect || this.versionsLoad) return
        this.versionsLoad = this.loadVersions()
    }

    private get isPlaying(): boolean {
        return this.item.Id === this.programDataStore.activeMediaSourceId
    }

    private renderVersionSelect(): void {
        const detailsElement = document.getElementById(`item-${this.item.Id}-details`)
        if (!detailsElement) return

        this.versionSelect = new VersionSelectTemplate(detailsElement, detailsElement.children.length - 1, this.item.Id, this.item.MediaSourceCount)
        this.versionSelect.render(
            (versionId: string) => this.showVersion(versionId),
            () => this.playSelectedVersion())
    }

    private async loadVersions(): Promise<void> {
        const result = await this.playbackHandler.getVersions(this.item.Id)
        if (!result || result.Versions.length < 2) {
            this.versionSelect.remove()
            return
        }

        this.versions = result.Versions
        this.hasUserDataPerVersion = result.HasUserDataPerVersion
        // Unknown playing version: first one is the server's default
        const selectedVersion = (this.isPlaying && this.versions.find(v => v.Id === result.ActiveVersionId)) || this.versions[0]
        this.versionSelect.setVersions(this.versions, selectedVersion.Id)

        if (this.isPlaying) {
            const item = this.programDataStore.getItemById(this.item.Id)
            if (item) this.setPlayingVersion(selectedVersion, item.UserData.PlaybackPositionTicks)
        }
        this.showVersion(selectedVersion.Id)
    }

    private playSelectedVersion(): void {
        const version = this.versions.find(v => v.Id === this.versionSelect.selectedVersionId)
        if (!version) return

        const isPlaying = this.isPlaying
        if (isPlaying && version.Id === this.playingVersionId) return

        const videoElement = document.querySelector<HTMLVideoElement>('video.htmlvideoplayer')
        const positionTicks = isPlaying && videoElement
            ? Math.floor(videoElement.currentTime * 10_000_000)
            : version.Item.UserData.PlaybackPositionTicks

        // Item becomes the playing one, its store data must match the started version for progress tracking
        this.setPlayingVersion(version, positionTicks)
        this.showVersion(version.Id)

        void this.playbackHandler.play(this.item.Id, positionTicks, version.Id)
        if (this.programDataStore.pluginSettings.AutoClosePreview)
            document.getElementById('previewPopup')?.remove()
    }

    // Stores runtime, progress and played state of the playing version on this item
    private setPlayingVersion(version: ItemVersion, positionTicks: number): void {
        this.playingVersionId = version.Id
        this.versionSelect.setPlayingVersion(version.Id)

        const item = this.programDataStore.getItemById(this.item.Id)
        if (!item) return

        const runTimeTicks = version.Item.RunTimeTicks || item.RunTimeTicks
        const played = version.Item.UserData.Played
        this.programDataStore.updateItem({
            ...item,
            RunTimeTicks: runTimeTicks,
            UserData: {
                ...item.UserData,
                PlaybackPositionTicks: positionTicks,
                PlayedPercentage: runTimeTicks ? (positionTicks / runTimeTicks) * 100 : item.UserData.PlayedPercentage,
                Played: played
            }
        })
        adjustWatchedCount(this.programDataStore, item, item.UserData.Played, played, item.UserData.PlaybackPositionTicks, positionTicks)
    }

    // Renders the given version's data into this item. Display only, playback stays untouched.
    private showVersion(versionId: string): void {
        const version = this.versions.find(v => v.Id === versionId)
        const element = document.getElementById(`item-${this.item.Id}`)
        if (!version || !element) return

        const isPlayingVersion = this.isPlaying && version.Id === this.playingVersionId
        const storeItem = this.programDataStore.getItemById(this.item.Id) ?? this.item
        const displayItem: PreviewItem = isPlayingVersion
            ? { ...version.Item, Id: this.item.Id, RunTimeTicks: storeItem.RunTimeTicks, UserData: storeItem.UserData }
            : this.isPlaying
                ? carryPositionOver({ ...version.Item, Id: this.item.Id }, storeItem.UserData.PlaybackPositionTicks)
                : { ...version.Item, Id: this.item.Id }

        const title = element.querySelector('.previewItemTitle .actionSheetItemText')
        if (title) title.textContent = displayItem.Name ?? ''
        
        const detailsElement = document.getElementById(`item-${this.item.Id}-details`)
        const versionRow = this.versionSelect.getElement()
        if (detailsElement && versionRow) {
            const detailsContainer = document.createElement('div')
            new ItemDetailsTemplate(detailsContainer, -1, displayItem).render()
            Array.from(detailsElement.children).filter(child => child !== versionRow).forEach(child => child.remove())
            versionRow.before(...Array.from(detailsContainer.firstElementChild.children))
        }

        // Version without own image keeps the listed item's image
        const [imageItemId, imageTag] = version.Item.PrimaryImageTag
            ? [version.Item.Id, version.Item.PrimaryImageTag]
            : [this.item.Id, this.item.PrimaryImageTag]
        const imageCard = document.getElementById(`previewItemImageCard-${this.item.Id}`)
        if (imageCard) imageCard.style.backgroundImage = `url('../Items/${imageItemId}/Images/Primary?tag=${imageTag}')`

        const description = element.querySelector('.previewItemDescription')
        const content = element.querySelector('.previewListItemContent')
        if (description && content) {
            description.innerHTML = displayItem.Description ?? ''
            applyDescriptionReadMore(content)
        }

        if (this.programDataStore.pluginSettings.ShowWatchProgress)
            updateItemProgressDom(this.item.Id, displayItem.UserData.PlayedPercentage ?? 0)
        updateBlurDom(this.programDataStore, this.item.Id, displayItem.UserData.Played)
        
        const quickActionsMatchVersion = !this.hasUserDataPerVersion || version.Id === this.item.Id
        for (const buttonId of [`playStateButton-${this.item.Id}`, `favoriteButton-${this.item.Id}`])
            document.getElementById(buttonId)?.toggleAttribute('disabled', !quickActionsMatchVersion)

        this.versionSelect.setButtonEnabled(!isPlayingVersion)
    }
}
