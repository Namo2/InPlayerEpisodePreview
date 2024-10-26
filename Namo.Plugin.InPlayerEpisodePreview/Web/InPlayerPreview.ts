import {Logger} from "./Services/Logger";
import {AuthService} from "./Services/AuthService";
import {PreviewButtonTemplate} from "./Components/PreviewButtonTemplate";
import {ProgramDataStore} from "./Services/ProgramDataStore";
import {DataLoader} from "./Services/DataLoader";
import {DialogBackdropContainerTemplate} from "./Components/DialogBackdropContainerTemplate";
import {DialogContainerTemplate} from "./Components/DialogContainerTemplate";
import {PlaybackHandler} from "./Services/PlaybackHandler";
import {ListElementFactory} from "./ListElementFactory";
import {PopupTitleTemplate} from "./Components/PopupTitleTemplate";
import {DataFetcher} from "./Services/DataFetcher";
import {BaseItem} from "./Models/Episode";
import {Season} from "./Models/Season";

// load and inject inPlayerPreview.css into the page
/*
 * Inject style to be used for the preview popup
 */
let inPlayerPreviewStyle: HTMLStyleElement = document.createElement('style');
inPlayerPreviewStyle.id = 'inPlayerPreviewStyle';
inPlayerPreviewStyle.textContent += '.selectedListItem {height: auto;}';
inPlayerPreviewStyle.textContent += '.previewListItem {flex-direction: column; align-items: flex-start;}';
inPlayerPreviewStyle.textContent += '.previewListItemContent {width: 100%; min-height: 15.5vh; position: relative; display: flex; flex-direction: column;}';
inPlayerPreviewStyle.textContent += '.previewPopup {animation: 140ms ease-out 0s 1 normal both running scaleup; position: fixed; margin: 0px; bottom: 1.5vh; left: 50vw; width: 48vw;}';
inPlayerPreviewStyle.textContent += '.previewPopupTitle {max-height: 4vh;}';
inPlayerPreviewStyle.textContent += '.previewPopupScroller {max-height: 60vh;}';
inPlayerPreviewStyle.textContent += '.previewQuickActionContainer {margin-left: auto; margin-right: 1em;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeContainer {width: 100%;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeTitle {pointer-events: none;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeImageCard {max-width: 30%;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeDescription {margin-left: 0.5em; margin-top: 0.5em; margin-right: 1.5em; display: block;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeDetails {margin-left: 0.5em;}';
document?.head?.appendChild(inPlayerPreviewStyle);

// init services and helpers
const logger: Logger = new Logger();
const authService: AuthService = new AuthService();
const programDataStore: ProgramDataStore = new ProgramDataStore();
const dataLoader: DataLoader = new DataLoader(authService);
new DataFetcher(programDataStore, authService, logger);
const playbackHandler: PlaybackHandler = new PlaybackHandler(programDataStore, logger);
const listElementFactory = new ListElementFactory(dataLoader, playbackHandler, programDataStore);

const videoPaths: string[] = ['/video'];
let previousRoutePath: string = null;
document.addEventListener('viewshow', viewShowEventHandler);
let previewContainerLoaded: boolean = false;

function viewShowEventHandler(): void {
    let currentRoutePath: string = getLocationPath();

    function getLocationPath(): string {
        const location: string = window.location.toString();
        const currentRouteIndex: number = location.lastIndexOf('/');

        return location.substring(currentRouteIndex);
    }

    // Initial attempt to load the video view or schedule retries.
    attemptLoadVideoView();

    previousRoutePath = currentRoutePath;

    // This function attempts to load the video view, retrying up to 3 times if necessary.
    function attemptLoadVideoView(retryCount = 0): void {
        if (videoPaths.includes(currentRoutePath)) {
            if ((programDataStore.movies.length > 0 && programDataStore.boxSetName !== '') || (programDataStore.seasons.length > 0 && programDataStore.seasons[programDataStore.activeSeasonIndex].episodes.length > 1)) {
                // Check if the preview container is already loaded before loading
                if (!previewContainerLoaded && !isPreviewButtonCreated()) {
                    loadVideoView();
                    previewContainerLoaded = true; // Set flag to true after loading
                }
            } else if (retryCount < 3) { // Retry up to 3 times
                setTimeout((): void => {
                    logger.debug(`Retry #${retryCount + 1}`);
                    attemptLoadVideoView(retryCount + 1);
                }, 10000); // Wait 10 seconds for each retry
            }
        } else if (videoPaths.includes(previousRoutePath)) {
            unloadVideoView();
        }
    }
    
    function loadVideoView(): void {
        // add preview button to the page
        let parent: HTMLElement = document.querySelector('.buttons').lastElementChild.parentElement; // lastElementChild.parentElement is used for casting from Element to HTMLElement
        
        let index: number = Array.from(parent.children).findIndex((child: Element): boolean => child.classList.contains("btnUserRating"));
        // if index is invalid try to use the old position (used in Jellyfin 10.8.12)
        if (index === -1)
            index = Array.from(parent.children).findIndex((child: Element): boolean => child.classList.contains("osdTimeText"))

        const previewButton: PreviewButtonTemplate = new PreviewButtonTemplate(parent, index);
        previewButton.render(previewButtonClickHandler);

        function previewButtonClickHandler(): void {
            const isSeries: boolean = programDataStore.isSeries;
            
            if (isSeries) {
                // refresh active season
                programDataStore.activeSeasonIndex = programDataStore.seasons
                    .findIndex((season: Season): boolean => season.episodes.some((episode: BaseItem): boolean => episode.Id === programDataStore.activeMediaSourceId));
            }
            
            let dialogBackdrop: DialogBackdropContainerTemplate = new DialogBackdropContainerTemplate(document.body, document.body.children.length - 1);
            dialogBackdrop.render();
            
            let dialogContainer: DialogContainerTemplate = new DialogContainerTemplate(document.body, document.body.children.length - 1);
            dialogContainer.render((): void => {
                document.body.removeChild(document.getElementById(dialogBackdrop.getElementId()));
                document.body.removeChild(document.getElementById(dialogContainer.getElementId()));
            });

            let contentDiv: HTMLElement = document.getElementById('popupContentContainer');
            contentDiv.innerHTML = ""; // remove old content
            
            let popupTitle: PopupTitleTemplate = new PopupTitleTemplate(document.getElementById('popupFocusContainer'), -1, programDataStore);
            popupTitle.render((e: MouseEvent) => {
                e.stopPropagation();
                
                popupTitle.setVisible(false);
                let contentDiv: HTMLElement = document.getElementById('popupContentContainer');

                // delete episode content for all existing episodes in the preview list;
                contentDiv.innerHTML = "";
                
                listElementFactory.createSeasonElements(programDataStore.seasons, contentDiv, programDataStore.activeSeasonIndex, popupTitle);
            });
            
            popupTitle.setText(isSeries ? programDataStore.seasons[programDataStore.activeSeasonIndex].seasonName : programDataStore.boxSetName);

            let itemsForCurrentList: BaseItem[] = isSeries ? programDataStore.seasons[programDataStore.activeSeasonIndex].episodes : programDataStore.movies;
            listElementFactory.createEpisodeElements(itemsForCurrentList, contentDiv);
            
            // scroll to the episode that is currently playing
            contentDiv.querySelector('.selectedListItem').parentElement.scrollIntoView();
        }
    }
    function unloadVideoView(): void {
        // Clear old data and reset previewContainerLoaded flag
        authService.setAuthHeaderValue("");
        programDataStore.clear();

        if (document.getElementById("dialogBackdropContainer"))
            document.body.removeChild(document.getElementById("dialogBackdropContainer"));
        if (document.getElementById("dialogContainer"))
            document.body.removeChild(document.getElementById("dialogContainer"));
        
        previewContainerLoaded = false; // Reset flag when unloading
    }
    
    function isPreviewButtonCreated(): boolean {
        return document.querySelector('.buttons').querySelector('#popupPreviewButton') !== null;
    }
}