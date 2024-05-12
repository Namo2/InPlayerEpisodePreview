﻿import {Logger} from "./Services/Logger";
import {AuthService} from "./Services/AuthService/AuthService";
import {JMPAuthService} from "./Services/AuthService/JMPAuthService";
import {WebAuthService} from "./Services/AuthService/WebAuthService";
import {PreviewButtonTemplate} from "./Components/PreviewButtonTemplate";
import {JMPDataFetcher} from "./Services/DataFetcher/JMPDataFetcher";
import {WebDataFetcher} from "./Services/DataFetcher/WebDataFetcher";
import {ProgramDataStore} from "./Services/ProgramDataStore";
import {DataLoader} from "./Services/DataLoader/DataLoader";
import {JMPDataLoader} from "./Services/DataLoader/JMPDataLoader";
import {WebDataLoader} from "./Services/DataLoader/WebDataLoader";
import {DialogBackdropContainerTemplate} from "./Components/DialogBackdropContainerTemplate";
import {DialogContainerTemplate} from "./Components/DialogContainerTemplate";
import {JMPPlaybackHandler} from "./Services/PlaybackHandler/JMPPlaybackHandler";
import {PlaybackHandler} from "./Services/PlaybackHandler/PlaybackHandler";
import {WebPlaybackHandler} from "./Services/PlaybackHandler/WebPlaybackHandler";
import {ListElementFactory} from "./ListElementFactory";
import {PopupTitleTemplate} from "./Components/PopupTitleTemplate";

// @ts-ignore
const isJMPClient = CLIENT === "JMP";

// logger
const logger: Logger = new Logger();

// load and inject inPlayerPreview.css into the page
/*
 * Inject style to be used for the preview popup
 */
let inPlayerPreviewStyle = document.createElement('style');
inPlayerPreviewStyle.id = 'inPlayerPreviewStyle';
inPlayerPreviewStyle.textContent += '.selectedListItem {height: auto;}';
inPlayerPreviewStyle.textContent += '.previewListItem {flex-direction: column; align-items: flex-start;}';
inPlayerPreviewStyle.textContent += '.previewListItemContent {width: 100%; min-height: 15.5vh; position: relative; top: 0.5em; display: flex}';
inPlayerPreviewStyle.textContent += '.previewPopup {animation: 140ms ease-out 0s 1 normal both running scaleup; position: fixed; margin: 0px; bottom: 1.5vh; left: 50vw; width: 48vw;}';
inPlayerPreviewStyle.textContent += '.previewPopupTitle {max-height: 4vh;}';
inPlayerPreviewStyle.textContent += '.previewPopupScroller {max-height: 60vh;}';
inPlayerPreviewStyle.textContent += '.previewQuickActionContainer {margin-left: auto; margin-right: 1em;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeContainer {width: 100%;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeTitle {pointer-events: none;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeImageCard {width: 12vw; height: 15vh; left: 1em;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeDescription {position: absolute; right: 1em; left: 13.5vw; display: block; overflow: auto;}';
document.body.appendChild(inPlayerPreviewStyle);
// const cssInjector: CssInjector = new CssInjector();
// cssInjector.injectCss('/Web/inPlayerPreviewStyle.css', document.body);

// @ts-ignore
const authService: AuthService = isJMPClient ? new JMPAuthService(ServerConnections, window) : new WebAuthService();
const programDataStore: ProgramDataStore = new ProgramDataStore();
// @ts-ignore
const dataLoader: DataLoader = isJMPClient ? new JMPDataLoader(authService, programDataStore, ServerConnections, window) : new WebDataLoader(authService, programDataStore);

// @ts-ignore
isJMPClient ? new JMPDataFetcher(programDataStore, dataLoader, events, playbackManager) : new WebDataFetcher(programDataStore, dataLoader, authService, logger)

// @ts-ignore
let playbackHandler: PlaybackHandler = isJMPClient ? new JMPPlaybackHandler(playbackManager) : new WebPlaybackHandler();

const videoPaths = ['playback/video/index.html', '/video'];
let previousRoutePath = null;
document.addEventListener('viewshow', viewShowEventHandler);
let previewContainerLoaded = false;
function viewShowEventHandler(): void {
    // @ts-ignore
    let currentRoutePath = Emby.Page.currentRouteInfo.route.path;

    if (currentRoutePath)
        // @ts-ignore
        currentRoutePath = Emby.Page.currentRouteInfo.path;

    // This function attempts to load the video view, retrying up to 3 times if necessary.
    function attemptLoadVideoView(retryCount = 0) {
        if (videoPaths.includes(currentRoutePath)) {
            if (programDataStore.isSeries) {
                // Check if the preview container is already loaded before loading
                if (!previewContainerLoaded) {
                    loadVideoView();
                    previewContainerLoaded = true; // Set flag to true after loading
                }
            } else if (retryCount < 3) { // Retry up to 3 times
                setTimeout(() => {
                    console.log(`Retry #${retryCount + 1}`);
                    attemptLoadVideoView(retryCount + 1);
                }, 10000); // Wait 10 seconds for each retry
            }
        } else if (videoPaths.includes(previousRoutePath)) {
            unloadVideoView();
        }
    }

    // Initial attempt to load the video view or schedule retries.
    attemptLoadVideoView();

    previousRoutePath = currentRoutePath;
    
    function loadVideoView(): void {
        // add preview button to the page
        let parent = document.querySelector('.buttons').lastElementChild.parentElement;
        let index = Array.prototype.indexOf.call(parent.children, document.querySelector('.osdTimeText'));
        let previewButton: PreviewButtonTemplate = new PreviewButtonTemplate(parent, index);
        previewButton.render(previewButtonClickHandler);

        function previewButtonClickHandler() {
            // refresh active season
            programDataStore.activeSeasonIndex = programDataStore.seasons
                .findIndex(season => season.episodes.some(episode => episode.Id === programDataStore.activeMediaSourceId));
            
            let dialogBackdrop = new DialogBackdropContainerTemplate(document.body, document.body.children.length - 1);
            dialogBackdrop.render();
            
            let dialogContainer = new DialogContainerTemplate(document.body, document.body.children.length - 1);
            dialogContainer.render(() => {
                document.body.removeChild(document.getElementById(dialogBackdrop.getElementId()));
                document.body.removeChild(document.getElementById(dialogContainer.getElementId()));
            });

            let contentDiv = document.getElementById('popupContentContainer');
            contentDiv.innerHTML = ""; // remove old content
            
            let popupTitle = new PopupTitleTemplate(document.getElementById('popupFocusContainer'), -1);
            popupTitle.render((e: MouseEvent) => {
                e.stopPropagation();
                
                popupTitle.setVisible(false);
                let contentDiv = document.getElementById('popupContentContainer');

                // delete episode content for all existing episodes in the preview list;
                contentDiv.innerHTML = "";
                
                let listElementFactory = new ListElementFactory(dataLoader, playbackHandler, programDataStore, isJMPClient);
                listElementFactory.createSeasonElements(programDataStore.seasons, contentDiv, programDataStore.activeSeasonIndex, popupTitle);
            });
            popupTitle.setText(programDataStore.seasons[programDataStore.activeSeasonIndex].seasonName);

            let episodesForCurrentSeason = programDataStore.seasons[programDataStore.activeSeasonIndex].episodes;
            let listElementFactory = new ListElementFactory(dataLoader, playbackHandler, programDataStore, isJMPClient);
            listElementFactory.createEpisodeElements(episodesForCurrentSeason, contentDiv);
            
            // scroll to the episode that is currently playing
            contentDiv.querySelector('.selectedListItem').parentElement.scrollIntoView();
        }
    }
    function unloadVideoView(): void {
        // Clear old data and reset previewContainerLoaded flag
        authService.setAuthHeaderValue("");
        programDataStore.clear();
        previewContainerLoaded = false; // Reset flag when unloading
    }
}