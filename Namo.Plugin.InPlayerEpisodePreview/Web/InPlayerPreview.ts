import {Logger} from "./Services/Logger";
import {PreviewButtonTemplate} from "./Components/PreviewButtonTemplate";
import {ProgramDataStore} from "./Services/ProgramDataStore";
import {DialogContainerTemplate} from "./Components/DialogContainerTemplate";
import {PlaybackHandler} from "./Services/PlaybackHandler";
import {ListElementFactory} from "./ListElementFactory";
import {PopupTitleTemplate} from "./Components/PopupTitleTemplate";
import {DataFetcher} from "./Services/DataFetcher";
import {ItemType} from "./Models/ItemType";
import {PluginSettings} from "./Models/PluginSettings";
import {ServerSettings} from "./Models/ServerSettings";
import {Endpoints} from "./Endpoints";
import {Group} from "./Models/PreviewData/Group";
import {GroupItemsResult} from "./Models/PreviewData/GroupItemsResult";
import {activateSpinner, spinnerHtml} from "./Components/Spinner";

// load and inject inPlayerPreview.css into the page
/*
 * Inject style to be used for the preview popup
 */
let inPlayerPreviewStyle: HTMLStyleElement = document.createElement('style')
inPlayerPreviewStyle.id = 'inPlayerPreviewStyle'
inPlayerPreviewStyle.textContent = `
.selectedListItem {
    height: auto;
}
.previewListItem {
    flex-direction: column; 
    align-items: flex-start;
}
.previewListItemContent {
    width: 100%; 
    min-height: 15.5vh; 
    position: relative; 
    display: flex; 
    flex-direction: column;
}
.previewPopup {
    animation: 140ms ease-out 0s 1 normal both running scaleup; 
    position: fixed; 
    margin: 0px; 
    bottom: 1.5vh; 
    left: 50vw; 
    width: 48vw;
}
.previewPopupTitle {
    max-height: 4vh;
}
.previewPopupTitle h1.actionSheetTitle {
    margin-left: 0 !important;
}
.previewGroupWatchedCount {
    margin-left: auto;
    margin-right: 1em;
    padding-left: 1em;
    white-space: nowrap;
    opacity: 0.7;
}
.previewPopupScroller {
    max-height: 60vh;
}
.previewQuickActionContainer {
    margin-left: auto; 
}
.previewItemContainer {
    width: 100%;
}
.previewItemTitle {
    pointer-events: none;
}
.previewItemImageCard {
    max-width: 30%;
}
.previewItemContentRow {
    align-items: flex-start;
}
.previewItemDescriptionColumn {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
}
.previewItemDescription {
    margin-left: 0.5em;
    margin-top: 0.5em;
    margin-right: 1.5em;
    display: block;
    overflow: hidden;
    max-height: 150px;
}
.previewItemDescription.expanded {
    max-height: none;
}
.previewItemReadMoreButton {
    align-self: flex-start;
    margin-left: 0.5em;
    margin-top: 0.25em;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.9em;
    opacity: 0.75;
}
.previewItemReadMoreButton:hover {
    opacity: 1;
}
.previewItemDetails {
    margin-left: 1em;
    justify-content: start !important;
}

/* Lock the position of this details, so that no theme can change it */
.previewListItemContent .itemMiscInfo.previewItemDetails {
    position: relative !important;
    top: auto !important;
    left: 0 !important;
    right: auto !important;
    bottom: auto !important;
    transform: none !important;
    margin-left: 1em !important;
    margin-top: 0 !important;
}
.blur {
    filter: blur(6px);
    transition: filter 0.3s ease;
    display: inline-block;
}
.blur:hover {
    filter: blur(0);
}
.previewItemImageCard:hover .blur {
    filter: blur(0);
}
.previewScrollSpinner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
}
.previewScrollSpinner .docspinner {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    margin: 0 !important;
    width: 1.95em !important;
    height: 1.95em !important;
    z-index: auto !important;
}
`
document?.head?.appendChild(inPlayerPreviewStyle)

// init services and helpers
const logger: Logger = new Logger()
const programDataStore: ProgramDataStore = new ProgramDataStore()
const playbackHandler: PlaybackHandler = new PlaybackHandler(logger)
const listElementFactory = new ListElementFactory(playbackHandler, programDataStore)

function initialize() {
    // Ensure ApiClient/Events exist and user is logged in
    if (typeof ApiClient === 'undefined' || typeof Events === 'undefined' || !ApiClient.getCurrentUserId?.()) {
        setTimeout(initialize, 300) // Increased retry delay slightly
        return
    }

    new DataFetcher(programDataStore)

    ApiClient.getPluginConfiguration('73833d5f-0bcb-45dc-ab8b-7ce668f4345d')
        .then((config: PluginSettings) => programDataStore.pluginSettings = config)

    const serverSettingsUrl = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.SERVER_SETTINGS}`)
    ApiClient.ajax({ type: 'GET', url: serverSettingsUrl, dataType: 'json' })
        .then((config: ServerSettings) => programDataStore.serverSettings = config)
}
initialize()

const videoPaths: string[] = ['/video']
let previousRoutePath: string = null
let previewContainerLoaded: boolean = false
document.addEventListener('viewshow', viewShowEventHandler)

// Sometimes their can be stale rating buttons. thats why we take the last one from the DOM for the itemId
function getLatestUserRatingItemId(): string | null {
    const elements = document.querySelectorAll('.btnUserRating.autoSize.paper-icon-button-light')
    return elements[elements.length - 1]?.getAttribute('data-id') ?? null
}

let lastTrackedPositionSecond: number = -1
function onVideoTimeUpdate(this: HTMLVideoElement): void {
    const positionSecond = Math.floor(this.currentTime)
    if (positionSecond === lastTrackedPositionSecond) return
    lastTrackedPositionSecond = positionSecond

    const itemId = getLatestUserRatingItemId()
    if (!itemId) return
    programDataStore.activeMediaSourceId = itemId

    const item = programDataStore.getItemById(itemId)
    if (!item || !item.RunTimeTicks) return

    const positionTicks = this.currentTime * 10_000_000
    const playedPercentage = (positionTicks / item.RunTimeTicks) * 100

    programDataStore.updateItem({
        ...item,
        UserData: {
            ...item.UserData,
            PlaybackPositionTicks: positionTicks,
            PlayedPercentage: playedPercentage,
            Played: playedPercentage >= programDataStore.serverSettings.MaxResumePct
        }
    })
}

// Tracks which BoxSet/Playlist details page (if any) was visited immediately before navigating into playback
const DETAILS_ROUTE_PATH: string = '/details'
const collectionLikeItemTypes: Set<ItemType> = new Set([ItemType.BoxSet, ItemType.Playlist])
let pendingSourceCollectionId: string = null

function recordSourceCollection(collectionId: string): void {
    const url = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.SET_SOURCE_COLLECTION}`
        .replace('{userId}', ApiClient.getCurrentUserId())
        .replace('{deviceId}', ApiClient.deviceId())
        .replace('{collectionId}', collectionId))
    ApiClient.ajax({type: 'GET', url}).catch((ex: unknown) => logger.error("Couldn't record source collection for playback session", ex))
}

function captureSourceCollection(currentRoutePath: string): void {
    const [currentPath, currentQuery] = currentRoutePath.split('?')
    const previousPath = previousRoutePath?.split('?')[0]

    if (currentPath === DETAILS_ROUTE_PATH) {
        const detailsId = new URLSearchParams(currentQuery ?? '').get('id')
        pendingSourceCollectionId = null
        if (!detailsId) return

        ApiClient.getItem(ApiClient.getCurrentUserId(), detailsId).then((item) => {
            const itemType: ItemType = ItemType[item.Type as unknown as keyof typeof ItemType]
            pendingSourceCollectionId = collectionLikeItemTypes.has(itemType) ? detailsId : null
        })
        return
    }

    if (videoPaths.includes(currentPath) && previousPath === DETAILS_ROUTE_PATH && pendingSourceCollectionId) {
        recordSourceCollection(pendingSourceCollectionId)
    }

    pendingSourceCollectionId = null
}

// Retrieve the current colloection/playlist id thorugh a play action on a card the same way as hellyfin does it itself
// https://github.com/jellyfin/jellyfin-web/blob/release-10.11.z/src/components/shortcuts.js#L216
const PLAYBACK_TRIGGER_ACTIONS: Set<string> = new Set(['play', 'resume', 'playallfromhere'])
function onDocumentClickCapture(event: MouseEvent): void {
    const actionElement = (event.target as HTMLElement)?.closest?.('[data-action]') as HTMLElement | null
    if (!actionElement || !PLAYBACK_TRIGGER_ACTIONS.has(actionElement.getAttribute('data-action'))) return

    const card = actionElement.closest('[data-id]') as HTMLElement | null
    if (!card) return

    const childOfCollectionId = card.getAttribute('data-collectionid') ?? card.getAttribute('data-playlistid')
    if (childOfCollectionId) {
        recordSourceCollection(childOfCollectionId)
        return
    }

    const cardItemType: ItemType = ItemType[card.getAttribute('data-type') as unknown as keyof typeof ItemType]
    const cardId = card.getAttribute('data-id')
    if (cardId && collectionLikeItemTypes.has(cardItemType)) {
        recordSourceCollection(cardId)
    }
}
document.addEventListener('click', onDocumentClickCapture, true)

function viewShowEventHandler(): void {
    const currentRoutePath: string = getLocationPath()

    function getLocationPath(): string {
        const location: string = window.location.toString()
        const currentRouteIndex: number = location.lastIndexOf('/')
        return location.substring(currentRouteIndex)
    }

    // Initial attempt to load the video view or schedule retries.
    captureSourceCollection(currentRoutePath)
    attemptLoadVideoView()
    previousRoutePath = currentRoutePath

    // Attempts to load the video view, retrying up to 3 times if necessary.
    function attemptLoadVideoView(retryCount = 0): void {
        if (videoPaths.includes(currentRoutePath)) {
            // if (programDataStore.dataIsAllowedForPreview) {
                // Check if the preview container is already loaded before loading
                if (!previewContainerLoaded && !isPreviewButtonCreated()) {
                    loadVideoView()
                    previewContainerLoaded = true // Set flag to true after loading
                // }
            } else if (retryCount < 3) { // Retry up to 3 times
                setTimeout((): void => {
                    logger.debug(`Retry #${retryCount + 1}`)
                    attemptLoadVideoView(retryCount + 1)
                }, 10000) // Wait 10 seconds for each retry
            }
        } else if (videoPaths.includes(previousRoutePath)) {
            unloadVideoView()
        }
    }
    
    function loadVideoView(): void {
        // add preview button to the page
        const parent: HTMLElement = document.querySelector('.buttons').lastElementChild.parentElement; // lastElementChild.parentElement is used for casting from Element to HTMLElement
        
        let index: number = Array.from(parent.children).findIndex((child: Element): boolean => child.classList.contains("btnUserRating"));
        // if index is invalid try to use the old position (used in Jellyfin 10.8.12)
        if (index === -1)
            index = Array.from(parent.children).findIndex((child: Element): boolean => child.classList.contains("osdTimeText"))

        const previewButton: PreviewButtonTemplate = new PreviewButtonTemplate(parent, index)
        let previewButtonLoading: boolean = false
        previewButton.render(previewButtonClickHandler)

        document.querySelector<HTMLVideoElement>('video.htmlvideoplayer')?.addEventListener('timeupdate', onVideoTimeUpdate)

        async function previewButtonClickHandler(): Promise<void> {
            if (previewButtonLoading) return
            previewButtonLoading = true
            try {
                await doPreviewButtonClick()
            } finally {
                previewButtonLoading = false
            }
        }

        async function doPreviewButtonClick(): Promise<void> {
            const loadItemPreviewData = async (itemId: string): Promise<{
                itemType: string, containerName: string | null, groups: Group[], activeGroupId: string, activeItemIndex: number
            }> => {
                const userId = ApiClient.getCurrentUserId()
                const url = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.ITEM_PREVIEW_DATA}`
                    .replace('{userId}', userId)
                    .replace('{deviceId}', ApiClient.deviceId())
                    .replace('{itemId}', itemId))
                const raw = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' })
                return {
                    itemType: raw.ItemType,
                    containerName: raw.ContainerName,
                    groups: raw.Groups.map((g: any) => ({
                        groupId: g.GroupId,
                        groupName: g.GroupName,
                        items: [],
                        indexNumber: g.IndexNumber,
                        playedItemCount: g.PlayedItemCount,
                        totalItemCount: g.TotalItemCount
                    })),
                    activeGroupId: raw.ActiveGroupId,
                    activeItemIndex: raw.ActiveItemIndex
                }
            }

            const PAGE_SIZE = programDataStore.pluginSettings.EpisodePageSize

            const loadGroupItems = async (groupId: string, startIndex: number = 0, limit: number = PAGE_SIZE): Promise<GroupItemsResult> => {
                const userId = ApiClient.getCurrentUserId()
                const url = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.GROUP_ITEMS}`
                    .replace('{userId}', userId)
                    .replace('{groupId}', groupId),
                    { startIndex, limit })
                const raw = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' })
                const result: GroupItemsResult = { items: raw.Items, totalRecordCount: raw.TotalRecordCount }

                programDataStore.recordLoadedItems(groupId, result.items, startIndex)
                return result
            }

            // This is experimental and will maybe be used in future releases
            const getNowPlayingItemIdFromSession = async (): Promise<string | null> => {
                const url = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.NOW_PLAYING_ITEM}`)
                try {
                    return await ApiClient.ajax({ type: 'GET', url, dataType: 'json' })
                } catch (ex: unknown) {
                    logger.error("Couldn't resolve now-playing item from session, falling back to OSD rating button", ex)
                    return null
                }
            }
            
            const dialogContainer: DialogContainerTemplate = new DialogContainerTemplate(document.body, document.body.children.length - 1)
            dialogContainer.render()

            const contentDiv: HTMLElement = document.getElementById('popupContentContainer')

            const itemId = getLatestUserRatingItemId()
            const cachedGroup = !programDataStore.isGroupsCacheExpired
                ? programDataStore.groups.find(g => g.items.some(item => item.Id === itemId))
                : undefined

            let activeGroupId: string
            let initialPage: GroupItemsResult
            let initialWindowStartIndex: number

            if (cachedGroup) {
                activeGroupId = cachedGroup.groupId
                initialWindowStartIndex = cachedGroup.loadedStartIndex ?? 0
                initialPage = { items: [...cachedGroup.items], totalRecordCount: cachedGroup.totalItemCount }
            } else {
                contentDiv.innerHTML = `<div class="previewScrollSpinner">${spinnerHtml()}</div>`
                activateSpinner(contentDiv)

                const { itemType, containerName, groups, activeGroupId: fetchedActiveGroupId, activeItemIndex } = await loadItemPreviewData(itemId)
                programDataStore.groups = groups
                programDataStore.markGroupsFetched()
                programDataStore.type = ItemType[itemType as keyof typeof ItemType]
                programDataStore.boxSetName = containerName ?? ''
                activeGroupId = fetchedActiveGroupId

                // Load a 3-page window (page of the active episode, plus one page before and after)
                const pageOfActiveEpisode = Math.floor(activeItemIndex / PAGE_SIZE)
                initialWindowStartIndex = Math.max(0, (pageOfActiveEpisode - 1) * PAGE_SIZE)
                const initialWindowLimit = (pageOfActiveEpisode + 2) * PAGE_SIZE - initialWindowStartIndex

                initialPage = await loadGroupItems(activeGroupId, initialWindowStartIndex, initialWindowLimit)
            }

            programDataStore.activeMediaSourceId = itemId
            programDataStore.activeGroupId = activeGroupId

            contentDiv.innerHTML = '' // remove the loading spinner
            const viewToken = programDataStore.beginNewView()
            
            const hasSelectableGroups = programDataStore.type !== ItemType.Movie

            const popupTitle: PopupTitleTemplate = new PopupTitleTemplate(document.getElementById('popupFocusContainer'), -1, programDataStore)
            popupTitle.render((e: MouseEvent) => {
                e.stopPropagation()
                if (!hasSelectableGroups) return

                popupTitle.setVisible(false);
                const contentDiv: HTMLElement = document.getElementById('popupContentContainer')
                contentDiv.innerHTML = ''

                listElementFactory.createGroupElements(programDataStore.groups, contentDiv, programDataStore.activeGroup.indexNumber, popupTitle, loadGroupItems)
            })
            popupTitle.setVisible(hasSelectableGroups)

            await listElementFactory.createLazyItemList(contentDiv, (startIndex) => loadGroupItems(activeGroupId, startIndex), viewToken, initialPage, initialWindowStartIndex)
            popupTitle.setText(programDataStore.activeGroup?.groupName ?? '')
            popupTitle.setWatchedCount(programDataStore.activeGroup?.playedItemCount ?? 0, programDataStore.activeGroup?.totalItemCount ?? 0)

            // scroll to the item that is currently playing
            const activeItem = contentDiv.querySelector('.selectedListItem') 
            if (!activeItem) {
                logger.error("Couldn't find active media source element in preview list. This should never happen", programDataStore)
            }
            activeItem?.parentElement.scrollIntoView()
        }
    }
    function unloadVideoView(): void {
        // Clear old data and reset previewContainerLoaded flag
        document.querySelector<HTMLVideoElement>('video.htmlvideoplayer')?.removeEventListener('timeupdate', onVideoTimeUpdate)
        lastTrackedPositionSecond = -1
        
        document.getElementById('previewPopup')?.remove()

        previewContainerLoaded = false // Reset flag when unloading
    }
    
    function isPreviewButtonCreated(): boolean {
        return document.querySelector('.buttons').querySelector('#popupPreviewButton') !== null
    }
}