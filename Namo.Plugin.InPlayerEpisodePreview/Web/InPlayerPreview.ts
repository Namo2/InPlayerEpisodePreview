import {Logger} from "./Services/Logger";
import {AuthService} from "./Services/AuthService";
import {PreviewButtonTemplate} from "./Components/PreviewButtonTemplate";
import {ProgramDataStore} from "./Services/ProgramDataStore";
import {DataLoader} from "./Services/DataLoader";
import {DialogContainerTemplate} from "./Components/DialogContainerTemplate";
import {PlaybackHandler} from "./Services/PlaybackHandler";
import {ListElementFactory} from "./ListElementFactory";
import {PopupTitleTemplate} from "./Components/PopupTitleTemplate";
import {DataFetcher} from "./Services/DataFetcher";
import {ItemType} from "./Models/ItemType";
import { PluginSettings } from "./Models/PluginSettings";

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
.previewPopupScroller {
    max-height: 60vh;
}
.previewQuickActionContainer {
    margin-left: auto; 
    margin-right: 1em;
}
.previewEpisodeContainer {
    width: 100%;
}
.previewEpisodeTitle {
    pointer-events: none;
}
.previewEpisodeImageCard {
    max-width: 30%;
}
.previewEpisodeDescription {
    margin-left: 0.5em; 
    margin-top: 1em; 
    margin-right: 1.5em; 
    display: block;
}
.previewEpisodeDetails {
    margin-left: 1em; 
    justify-content: start !important;
}
.blur {
    filter: blur(6px); 
    transition: filter 0.3s ease; 
    display: inline-block;
}
.blur:hover {
    filter: blur(0);
}
.previewEpisodeImageCard:hover .blur {
    filter: blur(0);
}
`
document?.head?.appendChild(inPlayerPreviewStyle)

// init services and helpers
const logger: Logger = new Logger()
const authService: AuthService = new AuthService()
const programDataStore: ProgramDataStore = new ProgramDataStore()
const dataLoader: DataLoader = new DataLoader(authService)
new DataFetcher(programDataStore, authService, logger)
const playbackHandler: PlaybackHandler = new PlaybackHandler(programDataStore, logger)
const listElementFactory = new ListElementFactory(dataLoader, playbackHandler, programDataStore)

function initialize() {
    // Ensure ApiClient exists and user is logged in
    if (typeof window['ApiClient'] === 'undefined' || !window['ApiClient'].getCurrentUserId?.()) {
        setTimeout(initialize, 300) // Increased retry delay slightly
        return
    }

    window['ApiClient']
        .getPluginConfiguration('73833d5f-0bcb-45dc-ab8b-7ce668f4345d')
        .then((config: PluginSettings) => programDataStore.settings = config)
}
initialize()

const videoPaths: string[] = ['/video']
let previousRoutePath: string = null
let previewContainerLoaded: boolean = false
document.addEventListener('viewshow', viewShowEventHandler)

function viewShowEventHandler(): void {
    const currentRoutePath: string = getLocationPath()

    function getLocationPath(): string {
        const location: string = window.location.toString()
        const currentRouteIndex: number = location.lastIndexOf('/')
        return location.substring(currentRouteIndex)
    }

    // Initial attempt to load the video view or schedule retries.
    attemptLoadVideoView()
    previousRoutePath = currentRoutePath

    // This function attempts to load the video view, retrying up to 3 times if necessary.
    function attemptLoadVideoView(retryCount = 0): void {
        if (videoPaths.includes(currentRoutePath)) {
            if (programDataStore.dataIsAllowedForPreview) {
                // Check if the preview container is already loaded before loading
                if (!previewContainerLoaded && !isPreviewButtonCreated()) {
                    loadVideoView()
                    previewContainerLoaded = true // Set flag to true after loading
                }
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
        previewButton.render(previewButtonClickHandler)

        function previewButtonClickHandler(): void {
            const dialogContainer: DialogContainerTemplate = new DialogContainerTemplate(document.body, document.body.children.length - 1)
            dialogContainer.render()

            const contentDiv: HTMLElement = document.getElementById('popupContentContainer')
            contentDiv.innerHTML = '' // remove old content

            const popupTitle: PopupTitleTemplate = new PopupTitleTemplate(document.getElementById('popupFocusContainer'), -1, programDataStore)
            popupTitle.render((e: MouseEvent) => {
                e.stopPropagation()
                
                popupTitle.setVisible(false);
                const contentDiv: HTMLElement = document.getElementById('popupContentContainer')

                // delete episode content for all existing episodes in the preview list;
                contentDiv.innerHTML = ''
                
                listElementFactory.createSeasonElements(programDataStore.seasons, contentDiv, programDataStore.activeSeason.IndexNumber, popupTitle)
            })

            switch (programDataStore.type) {
                case ItemType.Series:
                    popupTitle.setText(programDataStore.activeSeason.seasonName)
                    popupTitle.setVisible(true)
                    listElementFactory.createEpisodeElements(programDataStore.activeSeason.episodes, contentDiv)
                    break
                case ItemType.Movie:
                    popupTitle.setText('')
                    popupTitle.setVisible(false)
                    listElementFactory.createEpisodeElements(programDataStore.movies.filter(movie => movie.Id === programDataStore.activeMediaSourceId), contentDiv)
                    break
                case ItemType.Video:
                    popupTitle.setText('')
                    popupTitle.setVisible(false)
                    listElementFactory.createEpisodeElements(programDataStore.movies, contentDiv)
                    break
                case ItemType.BoxSet:
                case ItemType.Folder:
                    popupTitle.setText(programDataStore.boxSetName)
                    popupTitle.setVisible(true)
                    listElementFactory.createEpisodeElements(programDataStore.movies, contentDiv)
                    break
            }
            
            // scroll to the episode that is currently playing
            contentDiv.querySelector('.selectedListItem').parentElement.scrollIntoView()
        }
    }
    function unloadVideoView(): void {
        // Clear old data and reset previewContainerLoaded flag
        authService.setAuthHeaderValue("")

        if (document.getElementById("dialogBackdropContainer"))
            document.body.removeChild(document.getElementById("dialogBackdropContainer"))
        if (document.getElementById("dialogContainer"))
            document.body.removeChild(document.getElementById("dialogContainer"))
        
        previewContainerLoaded = false // Reset flag when unloading
    }
    
    function isPreviewButtonCreated(): boolean {
        return document.querySelector('.buttons').querySelector('#popupPreviewButton') !== null
    }
}