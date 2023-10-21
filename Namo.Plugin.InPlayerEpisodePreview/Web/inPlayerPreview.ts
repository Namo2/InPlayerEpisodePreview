import {Logger} from "./Services/Logger";
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
import {EpisodeElementTemplate} from "./Components/EpisodeElementTemplate";

let isJMPClient = false;

// logger
const logger: Logger = new Logger();

// load and inject inPlayerPreview.css into the page
/*
 * Inject style to be used for the preview popup
 */
let inPlayerPreviewStyle = document.createElement('style');
inPlayerPreviewStyle.id = 'inPlayerPreviewStyle';
inPlayerPreviewStyle.textContent += '.selectedListItem {height: 22vh;}';
inPlayerPreviewStyle.textContent += '.previewListItem {flex-direction: column; align-items: flex-start;}';
inPlayerPreviewStyle.textContent += '.previewListItemContent {width: 100%; height: 16.5vh; position: relative; top: 0.5em}';
inPlayerPreviewStyle.textContent += '.previewPopup {animation: 140ms ease-out 0s 1 normal both running scaleup; position: fixed; margin: 0px; bottom: 1.5vh; left: 68vw; width: 30vw;}';
inPlayerPreviewStyle.textContent += '.previewPopupTitle {height: 4vh;}';
inPlayerPreviewStyle.textContent += '.previewPopupScroller {height: 60vh;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeImageCard {width: 12vw; height: 15vh; left: 1em;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeDescription {position: absolute; right: 1em; left: 13.5vw;}';
document.body.appendChild(inPlayerPreviewStyle);
// const cssInjector: CssInjector = new CssInjector();
// cssInjector.injectCss('/Web/inPlayerPreviewStyle.css', document.body);

// authService
// @ts-ignore: ServerConnections is defined by JMP
const authService: AuthService = isJMPClient ? new JMPAuthService(ServerConnections, window) : new WebAuthService();
const programDataStore: ProgramDataStore = new ProgramDataStore();
// @ts-ignore
const dataLoader: DataLoader = isJMPClient ? new JMPDataLoader(authService, programDataStore, ServerConnections, window) : new WebDataLoader(authService, programDataStore);

// @ts-ignore
isJMPClient ? new JMPDataFetcher(programDataStore, dataLoader, events, playbackManager) : new WebDataFetcher(programDataStore, dataLoader, authService, logger)

const videoPaths = ['playback/video/index.html', '/video'];
let previousRoutePath = null;
document.addEventListener('viewshow', viewShowEventHandler);

function viewShowEventHandler(): void {
    // @ts-ignore
    let currentRoutePath = Emby.Page.currentRouteInfo.route.path;

    if (currentRoutePath)
        // @ts-ignore
        currentRoutePath = Emby.Page.currentRouteInfo.path;

    if (videoPaths.includes(currentRoutePath) && programDataStore.isSeries)
        loadVideoView();
    else if (videoPaths.includes(previousRoutePath))
        unloadVideoView();

    previousRoutePath = currentRoutePath;

    function loadVideoView(): void {
        // add preview button to the page
        // let previewButtonContainer = document.createElement('div');
        // document.getElementsByClassName('buttons')[0].querySelector('.osdTimeText').after(previewButtonContainer);
        let parent = document.querySelector('.buttons').lastElementChild.parentElement;
        let index = Array.prototype.indexOf.call(parent.children, document.querySelector('.osdTimeText'));
        let previewButton: PreviewButtonTemplate = new PreviewButtonTemplate(parent, index);
        previewButton.render(() => {
            let dialogBackdrop = new DialogBackdropContainerTemplate(document.body, -1);
            dialogBackdrop.render(() => {});
            
            let dialogContainer = new DialogContainerTemplate(document.body, -1);
            dialogContainer.render(() => {
                document.body.removeChild(document.getElementById(dialogBackdrop.getElementId()));
                document.body.removeChild(document.getElementById(dialogContainer.getElementId()));
            });
            
            let contentDiv = document.getElementById('popupContentContainer');
            contentDiv.innerHTML = ""; // remove old content

            document.getElementById('popupTitleContainer').querySelector('.actionSheetTitle').textContent = programDataStore.getSeasons()[programDataStore.getActiveSeasonIndex()].seasonName;
            
            let episodesForCurrentSeason = programDataStore.getSeasons()[programDataStore.getActiveSeasonIndex()].episodes;
            for (let i = 0; i < episodesForCurrentSeason.length; i++) {
                let episode = new EpisodeElementTemplate(contentDiv, i, episodesForCurrentSeason[i]);
                episode.render((e) => {
                    // hide episode content for all existing episodes in the preview list
                    document.querySelectorAll(".previewListItemContent").forEach((element) => {
                        element.classList.add('hide');
                        element.classList.remove('selectedListItem');
                    });

                    // show episode content for the selected episode
                    let episodeContainer = document.querySelector(`[data-id="${episodesForCurrentSeason[i].IndexNumber}"]`).querySelector('.previewListItemContent');
                    episodeContainer.classList.remove('hide');
                    episodeContainer.classList.add('selectedListItem');
                    
                    e.stopPropagation();
                });
                
                if (episodesForCurrentSeason[i].Id === programDataStore.getActiveMediaSourceId()) {
                    let episodeNode = document.querySelector(`[data-id="${episodesForCurrentSeason[i].IndexNumber}"]`).querySelector('.previewListItemContent');
                    episodeNode.classList.remove('hide');
                    episodeNode.classList.add('selectedListItem');
                }
            }
            
            let seasons = programDataStore.getSeasons();
            seasons[programDataStore.getActiveSeasonIndex()].episodes = episodesForCurrentSeason;
            programDataStore.setSeasons(seasons);

            // scroll to the episode that is currently playing
            contentDiv.querySelector('.selectedListItem').parentElement.scrollIntoView();
        });
    }

    function unloadVideoView(): void {
        // clear old data
        authService.setAuthHeaderValue("");
        programDataStore.clear();
    }
}