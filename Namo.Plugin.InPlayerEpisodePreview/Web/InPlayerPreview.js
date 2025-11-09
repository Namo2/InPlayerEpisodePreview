/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Web/Components/BaseTemplate.ts":
/*!****************************************!*\
  !*** ./Web/Components/BaseTemplate.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseTemplate = void 0;
class BaseTemplate {
    container;
    positionAfterIndex;
    /*
     * the HTML based ID of the new generated Element
     */
    elementId;
    constructor(container, positionAfterIndex) {
        this.container = container;
        this.positionAfterIndex = positionAfterIndex;
    }
    getContainer() {
        return this.container;
    }
    getPositionAfterIndex() {
        return this.positionAfterIndex;
    }
    setElementId(elementId) {
        this.elementId = elementId;
    }
    getElementId() {
        return this.elementId;
    }
    getElement() {
        return this.getContainer().querySelector(`#${this.getElementId()}`);
    }
    addElementToContainer(...clickHandlers) {
        // Add Element as the first child if position is negative
        if (this.getPositionAfterIndex() < 0 && this.getContainer().hasChildNodes()) {
            this.getContainer().firstElementChild.before(this.stringToNode(this.getTemplate(...clickHandlers)));
            return this.getElement();
        }
        // Add Element if container is empty
        if (!this.getContainer().hasChildNodes()) {
            this.getContainer().innerHTML = this.getTemplate(...clickHandlers);
            return this.getElement();
        }
        let childBefore = this.getContainer().lastElementChild;
        if (this.getContainer().children.length > this.getPositionAfterIndex() && this.getPositionAfterIndex() >= 0)
            childBefore = this.getContainer().children[this.getPositionAfterIndex()];
        childBefore.after(this.stringToNode(this.getTemplate(...clickHandlers)));
        return this.getElement();
    }
    stringToNode(templateString) {
        let placeholder = document.createElement('div');
        placeholder.innerHTML = templateString;
        return placeholder.firstElementChild;
    }
}
exports.BaseTemplate = BaseTemplate;


/***/ }),

/***/ "./Web/Components/DialogBackdropContainerTemplate.ts":
/*!***********************************************************!*\
  !*** ./Web/Components/DialogBackdropContainerTemplate.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DialogBackdropContainerTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class DialogBackdropContainerTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex) {
        super(container, positionAfterIndex);
        this.setElementId('dialogBackdropContainer');
    }
    getTemplate() {
        return `
            <div  id="${this.getElementId()}" class="dialogBackdrop dialogBackdropOpened"/>
        `;
    }
    render() {
        this.addElementToContainer();
    }
}
exports.DialogBackdropContainerTemplate = DialogBackdropContainerTemplate;


/***/ }),

/***/ "./Web/Components/DialogContainerTemplate.ts":
/*!***************************************************!*\
  !*** ./Web/Components/DialogContainerTemplate.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DialogContainerTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
const PopupFocusContainer_1 = __webpack_require__(/*! ./PopupFocusContainer */ "./Web/Components/PopupFocusContainer.ts");
class DialogContainerTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex) {
        super(container, positionAfterIndex);
        this.setElementId('dialogContainer');
    }
    getTemplate() {
        let tempContainerDiv = document.createElement('div');
        let focusContainerDiv = new PopupFocusContainer_1.PopupFocusContainer(tempContainerDiv, -1);
        focusContainerDiv.render();
        return `
            <div id="${this.getElementId()}" class="dialogContainer">
                ${tempContainerDiv.innerHTML}
            <div>
        `;
    }
    render(dialogContainerClickHandler) {
        let renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => dialogContainerClickHandler(e));
    }
}
exports.DialogContainerTemplate = DialogContainerTemplate;


/***/ }),

/***/ "./Web/Components/EpisodeDetails.ts":
/*!******************************************!*\
  !*** ./Web/Components/EpisodeDetails.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EpisodeDetailsTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class EpisodeDetailsTemplate extends BaseTemplate_1.BaseTemplate {
    episode;
    constructor(container, positionAfterIndex, episode) {
        super(container, positionAfterIndex);
        this.episode = episode;
        this.setElementId(`episode-${episode.IndexNumber}`);
    }
    getTemplate() {
        // language=HTML
        return `
            <div id="${this.getElementId()}-details" class="itemMiscInfo itemMiscInfo-primary previewEpisodeDetails">
                ${this.episode.PremiereDate ? `<div class="mediaInfoItem">
                    ${(new Date(this.episode.PremiereDate)).toLocaleDateString(this.getLocale())}
                </div>` : ''}
                <div class="mediaInfoItem">${this.formatRunTime(this.episode.RunTimeTicks)}</div>
                ${this.episode.CommunityRating ? `<div class="starRatingContainer mediaInfoItem">
                    <span class="material-icons starIcon star" aria-hidden="true"></span>
                    ${this.episode.CommunityRating.toFixed(1)}
                </div>` : ''}
                ${this.episode.CriticRating ? `<div class="mediaInfoItem mediaInfoCriticRating ${this.episode.CriticRating >= 60 ? 'mediaInfoCriticRatingFresh' : 'mediaInfoCriticRatingRotten'}">
                    ${this.episode.CriticRating}
                </div>` : ''}
                <div class="endsAt mediaInfoItem">${this.formatEndTime(this.episode.RunTimeTicks, this.episode.UserData.PlaybackPositionTicks)}</div>
            </div>
        `;
    }
    render() {
        this.addElementToContainer();
    }
    getLocale() {
        return navigator.languages
            ? navigator.languages[0] // @ts-ignore for userLanguage (this adds support for IE) TODO: Move to interface
            : (navigator.language || navigator.userLanguage);
    }
    formatRunTime(ticks) {
        // format the ticks to a string with minutes and hours
        ticks /= 10000; // convert from microseconds to milliseconds
        let hours = Math.floor((ticks / 1000 / 3600) % 24);
        let minutes = Math.floor((ticks / 1000 / 60) % 60);
        let hoursString = hours > 0 ? `${hours}h ` : '';
        return `${hoursString}${minutes}m`;
    }
    formatEndTime(runtimeTicks, playbackPositionTicks) {
        // convert from microseconds to milliseconds
        runtimeTicks /= 10000;
        playbackPositionTicks /= 10000;
        let ticks = Date.now() + (runtimeTicks);
        ticks -= (new Date()).getTimezoneOffset() * 60 * 1000; // adjust for timezone
        ticks -= playbackPositionTicks; // subtract the playback position
        let hours = this.zeroPad(Math.floor((ticks / 1000 / 3600) % 24));
        let minutes = this.zeroPad(Math.floor((ticks / 1000 / 60) % 60));
        return `Ends at ${hours}:${minutes}`;
    }
    zeroPad(num, places = 2) {
        return String(num).padStart(places, '0');
    }
}
exports.EpisodeDetailsTemplate = EpisodeDetailsTemplate;


/***/ }),

/***/ "./Web/Components/ListElementTemplate.ts":
/*!***********************************************!*\
  !*** ./Web/Components/ListElementTemplate.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListElementTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
const FavoriteIconTemplate_1 = __webpack_require__(/*! ./QuickActions/FavoriteIconTemplate */ "./Web/Components/QuickActions/FavoriteIconTemplate.ts");
const PlayStateIconTemplate_1 = __webpack_require__(/*! ./QuickActions/PlayStateIconTemplate */ "./Web/Components/QuickActions/PlayStateIconTemplate.ts");
const EpisodeDetails_1 = __webpack_require__(/*! ./EpisodeDetails */ "./Web/Components/EpisodeDetails.ts");
const ItemType_1 = __webpack_require__(/*! ../Models/ItemType */ "./Web/Models/ItemType.ts");
class ListElementTemplate extends BaseTemplate_1.BaseTemplate {
    item;
    playbackHandler;
    programDataStore;
    quickActionContainer;
    playStateIcon;
    favoriteIcon;
    constructor(container, positionAfterIndex, item, playbackHandler, programDataStore) {
        super(container, positionAfterIndex);
        this.item = item;
        this.playbackHandler = playbackHandler;
        this.programDataStore = programDataStore;
        this.setElementId(`episode-${item.IndexNumber}`);
        // create temp quick action container
        this.quickActionContainer = document.createElement('div');
        // create quick actions
        this.playStateIcon = new PlayStateIconTemplate_1.PlayStateIconTemplate(this.quickActionContainer, -1, this.item);
        this.favoriteIcon = new FavoriteIconTemplate_1.FavoriteIconTemplate(this.quickActionContainer, 0, this.item);
    }
    getTemplate() {
        // add quick actions
        this.playStateIcon.render();
        this.favoriteIcon.render();
        // add episode details/info
        const detailsContainer = document.createElement('div');
        const details = new EpisodeDetails_1.EpisodeDetailsTemplate(detailsContainer, -1, this.item);
        details.render();
        const backgroundImageStyle = `background-image: url('../Items/${this.item.Id}/Images/Primary?tag=${this.item.ImageTags.Primary}')`;
        // language=HTML
        return `
            <div id="${this.getElementId()}"
                 class="listItem listItem-button actionSheetMenuItem emby-button previewListItem"
                 is="emby-button"
                 data-id="${this.item.IndexNumber}">
                <div class="previewEpisodeContainer flex">
                    <button class="listItem previewEpisodeTitle" type="button">
                        ${(this.item.IndexNumber &&
            this.programDataStore.type !== ItemType_1.ItemType.Movie) ? `<span>${this.item.IndexNumber}</span>` : ''}
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
                        <div class="card overflowBackdropCard card-hoverable card-withuserdata previewEpisodeImageCard">
                            <div class="cardBox">
                                <div class="cardScalable">
                                    <div class="cardPadder cardPadder-overflowBackdrop lazy-hidden-children">
                                        <span class="cardImageIcon material-icons tv" aria-hidden="true"/>
                                    </div>
                                    <button id="previewEpisodeImageCard-${this.item.IndexNumber}"
                                            class="cardImageContainer cardContent itemAction lazy blurhashed lazy-image-fadein-fast ${this.programDataStore.settings.BlurDescription ? 'blur' : ''}"
                                            data-action="link"
                                            style="${backgroundImageStyle}">
                                    </button>
                                    ${this.item.UserData.PlayedPercentage ?
            `<div class="innerCardFooter fullInnerCardFooter innerCardFooterClear itemProgressBar">
                                            <div class="itemProgressBarForeground"
                                                style="width:${this.item.UserData.PlayedPercentage}%;">           
                                            </div>
                                        </div>` : ''}
                                    ${this.item.Id !== this.programDataStore.activeMediaSourceId ?
            `<div class="cardOverlayContainer itemAction"
                                             data-action="link">
                                            <button id="start-episode-${this.item.IndexNumber}"
                                                    is="paper-icon-button-light"
                                                    class="cardOverlayButton cardOverlayButton-hover itemAction paper-icon-button-light cardOverlayFab-primary"
                                                    data-action="resume">
                                                <span class="material-icons cardOverlayButtonIcon cardOverlayButtonIcon-hover play_arrow"
                                                    aria-hidden="true"/>
                                            </button>
                                        </div>` : ''}
                                </div>
                            </div>
                        </div>
                        <span class="previewEpisodeDescription ${this.programDataStore.settings.BlurDescription ? 'blur' : ''}">
                            ${this.item.Description ?? 'loading...'}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }
    render(clickHandler) {
        const renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
        if (this.item.Id !== this.programDataStore.activeMediaSourceId) {
            // add event handler to start the playback of this episode
            const episodeImageCard = document.getElementById(`start-episode-${this.item.IndexNumber}`);
            episodeImageCard.addEventListener('click', () => this.playbackHandler.play(this.item.Id, this.item.UserData.PlaybackPositionTicks));
        }
    }
}
exports.ListElementTemplate = ListElementTemplate;


/***/ }),

/***/ "./Web/Components/PopupContentContainerTemplate.ts":
/*!*********************************************************!*\
  !*** ./Web/Components/PopupContentContainerTemplate.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupContentContainerTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class PopupContentContainerTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex) {
        super(container, positionAfterIndex);
        this.setElementId('popupContentContainer');
    }
    getTemplate() {
        return `
            <div id="${this.getElementId()}" class="actionSheetScroller scrollY previewPopupScroller"/>
        `;
    }
    render() {
        this.addElementToContainer();
    }
}
exports.PopupContentContainerTemplate = PopupContentContainerTemplate;


/***/ }),

/***/ "./Web/Components/PopupFocusContainer.ts":
/*!***********************************************!*\
  !*** ./Web/Components/PopupFocusContainer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupFocusContainer = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
const PopupContentContainerTemplate_1 = __webpack_require__(/*! ./PopupContentContainerTemplate */ "./Web/Components/PopupContentContainerTemplate.ts");
class PopupFocusContainer extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex) {
        super(container, positionAfterIndex);
        this.setElementId('popupFocusContainer');
    }
    getTemplate() {
        let tempContainerDiv = document.createElement('div');
        let popupContentContainer = new PopupContentContainerTemplate_1.PopupContentContainerTemplate(tempContainerDiv, -1);
        popupContentContainer.render();
        return `
            <div id="${this.getElementId()}" class="focuscontainer dialog actionsheet-not-fullscreen actionSheet centeredDialog opened previewPopup actionSheetContent" data-history="true" data-removeonclose="true">
                ${tempContainerDiv.innerHTML}
            </div>
        `;
    }
    render() {
        this.addElementToContainer();
    }
}
exports.PopupFocusContainer = PopupFocusContainer;


/***/ }),

/***/ "./Web/Components/PopupTitleTemplate.ts":
/*!**********************************************!*\
  !*** ./Web/Components/PopupTitleTemplate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupTitleTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
const ItemType_1 = __webpack_require__(/*! ../Models/ItemType */ "./Web/Models/ItemType.ts");
class PopupTitleTemplate extends BaseTemplate_1.BaseTemplate {
    programDataStore;
    constructor(container, positionAfterIndex, programDataStore) {
        super(container, positionAfterIndex);
        this.programDataStore = programDataStore;
        this.setElementId('popupTitleContainer');
    }
    getTemplate() {
        return `
            <div id="${this.getElementId()}" class="actionSheetTitle listItem previewPopupTitle">
                ${this.programDataStore.type === ItemType_1.ItemType.Series && this.programDataStore.seasons.length > 1 ?
            '<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons keyboard_backspace"></span>' :
            ''}
                <h1 class="actionSheetTitle"></h1>
            </div>
        `;
    }
    render(clickHandler) {
        const renderedElement = this.addElementToContainer();
        switch (this.programDataStore.type) {
            case ItemType_1.ItemType.Series:
                renderedElement.addEventListener('click', (e) => clickHandler(e));
                break;
            case ItemType_1.ItemType.BoxSet:
            case ItemType_1.ItemType.Folder:
                renderedElement.addEventListener('click', (e) => e.stopPropagation());
                break;
        }
    }
    setText(text) {
        this.getElement().querySelector('h1').innerText = text;
    }
    setVisible(isVisible) {
        const renderedElement = this.getElement();
        if (isVisible) {
            renderedElement.classList.remove('hide');
            return;
        }
        renderedElement.classList.add('hide');
    }
}
exports.PopupTitleTemplate = PopupTitleTemplate;


/***/ }),

/***/ "./Web/Components/PreviewButtonTemplate.ts":
/*!*************************************************!*\
  !*** ./Web/Components/PreviewButtonTemplate.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PreviewButtonTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class PreviewButtonTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex) {
        super(container, positionAfterIndex);
        this.setElementId('popupPreviewButton');
    }
    getTemplate() {
        // language=HTML
        return `
            <button id="${this.getElementId()}" class="autoSize paper-icon-button-light" is="paper-icon-button-light"
                    title="Episode Preview">
                <!-- Created with Inkscape (http://www.inkscape.org/) -->
                <svg id="svg1"
                     width="24"
                     height="24"
                     viewBox="0 0 6 4"
                     xmlns="http://www.w3.org/2000/svg">
                    <g id="layer1">
                        <rect id="rect47"
                              style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:currentColor;stroke-width:0.476467;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:stroke markers fill"
                              width="3.7568676"
                              height="2.1693661"
                              x="0.23823303"
                              y="1.8257335"/>
                        <path id="rect47-5"
                              style="fill:none;stroke:currentColor;stroke-width:0.476597;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:stroke markers fill"
                              d="m 1.0291437,1.0320482 h 3.7528991 v 2.1722394 l 0.00676,-2.1572595 z"/>
                        <path id="rect47-8"
                              style="fill:none;stroke:currentColor;stroke-width:0.477427;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:stroke markers fill"
                              d="m 1.8228614,0.23871336 h 3.759259 V 2.4101211 l -0.0068,-2.17140774 z"/>
                    </g>
                </svg>
            </button>
        `;
    }
    render(clickHandler) {
        let renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', () => clickHandler());
    }
}
exports.PreviewButtonTemplate = PreviewButtonTemplate;


/***/ }),

/***/ "./Web/Components/QuickActions/FavoriteIconTemplate.ts":
/*!*************************************************************!*\
  !*** ./Web/Components/QuickActions/FavoriteIconTemplate.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FavoriteIconTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ../BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class FavoriteIconTemplate extends BaseTemplate_1.BaseTemplate {
    episode;
    constructor(container, positionAfterIndex, episode) {
        super(container, positionAfterIndex);
        this.episode = episode;
        this.setElementId('favoriteButton-' + episode.IndexNumber);
    }
    getTemplate() {
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="emby-ratingbutton"
                    type="button"
                    class="itemAction paper-icon-button-light emby-button"
                    data-action="none"
                    data-id="${this.episode?.Id ?? ''}"
                    data-serverid="${this.episode?.ServerId ?? ''}"
                    data-itemtype="Episode"
                    data-likes=""
                    data-isfavorite="${this.episode?.UserData?.IsFavorite ?? false}"
                    title="Add to favorites">
                <span class="material-icons favorite"></span>
            </button>
        `;
    }
    render() {
        this.addElementToContainer();
    }
}
exports.FavoriteIconTemplate = FavoriteIconTemplate;


/***/ }),

/***/ "./Web/Components/QuickActions/PlayStateIconTemplate.ts":
/*!**************************************************************!*\
  !*** ./Web/Components/QuickActions/PlayStateIconTemplate.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayStateIconTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ../BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class PlayStateIconTemplate extends BaseTemplate_1.BaseTemplate {
    episode;
    constructor(container, positionAfterIndex, episode) {
        super(container, positionAfterIndex);
        this.episode = episode;
        this.setElementId('playStateButton-' + this.episode.IndexNumber);
    }
    getTemplate() {
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="emby-playstatebutton"
                    type="button"
                    data-action="none"
                    class="itemAction paper-icon-button-light emby-button"
                    data-id="${this.episode?.Id ?? ''}" 
                    data-serverid="${this.episode?.ServerId ?? ''}"
                    data-itemtype="Episode"
                    data-likes=""
                    data-played="${this.episode?.UserData?.Played ?? false}"
                    title="Mark played">
                <span class="material-icons check playstatebutton-icon-${this.episode?.UserData?.Played ? "played" : "unplayed"}"></span>
            </button>
        `;
    }
    render() {
        this.addElementToContainer();
    }
}
exports.PlayStateIconTemplate = PlayStateIconTemplate;


/***/ }),

/***/ "./Web/Components/SeasonListElementTemplate.ts":
/*!*****************************************************!*\
  !*** ./Web/Components/SeasonListElementTemplate.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeasonListElementTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class SeasonListElementTemplate extends BaseTemplate_1.BaseTemplate {
    season;
    isCurrentSeason;
    constructor(container, positionAfterIndex, season, isCurrentSeason) {
        super(container, positionAfterIndex);
        this.season = season;
        this.isCurrentSeason = isCurrentSeason;
        this.setElementId(`episode-${season.seasonId}`);
    }
    getTemplate() {
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
    render(clickHandler) {
        let renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
    }
}
exports.SeasonListElementTemplate = SeasonListElementTemplate;


/***/ }),

/***/ "./Web/Endpoints.ts":
/*!**************************!*\
  !*** ./Web/Endpoints.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Endpoints = void 0;
var Endpoints;
(function (Endpoints) {
    Endpoints["BASE"] = "InPlayerPreview";
    Endpoints["EPISODE_INFO"] = "/Users/{userId}/Items/{episodeId}";
    Endpoints["EPISODE_DESCRIPTION"] = "/Items/{episodeId}";
    Endpoints["PLAY_MEDIA"] = "/Users/{userId}/{deviceId}/Items/{episodeId}/Play/{ticks}";
})(Endpoints || (exports.Endpoints = Endpoints = {}));


/***/ }),

/***/ "./Web/ListElementFactory.ts":
/*!***********************************!*\
  !*** ./Web/ListElementFactory.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListElementFactory = void 0;
const ListElementTemplate_1 = __webpack_require__(/*! ./Components/ListElementTemplate */ "./Web/Components/ListElementTemplate.ts");
const SeasonListElementTemplate_1 = __webpack_require__(/*! ./Components/SeasonListElementTemplate */ "./Web/Components/SeasonListElementTemplate.ts");
class ListElementFactory {
    dataLoader;
    playbackHandler;
    programDataStore;
    constructor(dataLoader, playbackHandler, programDataStore) {
        this.dataLoader = dataLoader;
        this.playbackHandler = playbackHandler;
        this.programDataStore = programDataStore;
    }
    createEpisodeElements(episodes, parentDiv) {
        episodes.sort((a, b) => a.IndexNumber - b.IndexNumber);
        for (let i = 0; i < episodes.length; i++) {
            const episode = new ListElementTemplate_1.ListElementTemplate(parentDiv, i, episodes[i], this.playbackHandler, this.programDataStore);
            episode.render((e) => {
                e.stopPropagation();
                // hide episode content for all existing episodes in the preview list
                document.querySelectorAll(".previewListItemContent").forEach((element) => {
                    element.classList.add('hide');
                    element.classList.remove('selectedListItem');
                });
                const episodeContainer = document.querySelector(`[data-id="${episodes[i].IndexNumber}"]`).querySelector('.previewListItemContent');
                // load episode description
                if (!episodes[i].Description) {
                    const request = this.dataLoader.loadEpisodeDescription(episodes[i].Id, () => {
                        episodes[i].Description = request.response?.Description;
                        this.programDataStore.updateItem(episodes[i]);
                        episodeContainer.querySelector('.previewEpisodeDescription').textContent = episodes[i].Description;
                    });
                }
                // show episode content for the selected episode
                episodeContainer.classList.remove('hide');
                episodeContainer.classList.add('selectedListItem');
                // scroll to the selected episode
                episodeContainer.parentElement.scrollIntoView({ block: "start" });
            });
            if (episodes[i].Id === this.programDataStore.activeMediaSourceId) {
                const episodeNode = document.querySelector(`[data-id="${episodes[i].IndexNumber}"]`).querySelector('.previewListItemContent');
                // preload episode description for the currently playing episode
                if (!episodes[i].Description) {
                    const request = this.dataLoader.loadEpisodeDescription(episodes[i].Id, () => {
                        episodes[i].Description = request.response?.Description;
                        this.programDataStore.updateItem(episodes[i]);
                        episodeNode.querySelector('.previewEpisodeDescription').textContent = episodes[i].Description;
                    });
                }
                episodeNode.classList.remove('hide');
                episodeNode.classList.add('selectedListItem');
            }
        }
    }
    createSeasonElements(seasons, parentDiv, currentSeasonIndex, titleContainer) {
        seasons.sort((a, b) => a.IndexNumber - b.IndexNumber);
        for (let i = 0; i < seasons.length; i++) {
            const season = new SeasonListElementTemplate_1.SeasonListElementTemplate(parentDiv, i, seasons[i], seasons[i].IndexNumber === currentSeasonIndex);
            season.render((e) => {
                e.stopPropagation();
                titleContainer.setText(seasons[i].seasonName);
                titleContainer.setVisible(true);
                parentDiv.innerHTML = ""; // remove old content
                this.createEpisodeElements(seasons[i].episodes, parentDiv);
            });
        }
    }
}
exports.ListElementFactory = ListElementFactory;


/***/ }),

/***/ "./Web/Models/ItemType.ts":
/*!********************************!*\
  !*** ./Web/Models/ItemType.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemType = void 0;
var ItemType;
(function (ItemType) {
    ItemType[ItemType["AggregateFolder"] = 0] = "AggregateFolder";
    ItemType[ItemType["Audio"] = 1] = "Audio";
    ItemType[ItemType["AudioBook"] = 2] = "AudioBook";
    ItemType[ItemType["BasePluginFolder"] = 3] = "BasePluginFolder";
    ItemType[ItemType["Book"] = 4] = "Book";
    ItemType[ItemType["BoxSet"] = 5] = "BoxSet";
    ItemType[ItemType["Channel"] = 6] = "Channel";
    ItemType[ItemType["ChannelFolderItem"] = 7] = "ChannelFolderItem";
    ItemType[ItemType["CollectionFolder"] = 8] = "CollectionFolder";
    ItemType[ItemType["Episode"] = 9] = "Episode";
    ItemType[ItemType["Folder"] = 10] = "Folder";
    ItemType[ItemType["Genre"] = 11] = "Genre";
    ItemType[ItemType["ManualPlaylistsFolder"] = 12] = "ManualPlaylistsFolder";
    ItemType[ItemType["Movie"] = 13] = "Movie";
    ItemType[ItemType["LiveTvChannel"] = 14] = "LiveTvChannel";
    ItemType[ItemType["LiveTvProgram"] = 15] = "LiveTvProgram";
    ItemType[ItemType["MusicAlbum"] = 16] = "MusicAlbum";
    ItemType[ItemType["MusicArtist"] = 17] = "MusicArtist";
    ItemType[ItemType["MusicGenre"] = 18] = "MusicGenre";
    ItemType[ItemType["MusicVideo"] = 19] = "MusicVideo";
    ItemType[ItemType["Person"] = 20] = "Person";
    ItemType[ItemType["Photo"] = 21] = "Photo";
    ItemType[ItemType["PhotoAlbum"] = 22] = "PhotoAlbum";
    ItemType[ItemType["Playlist"] = 23] = "Playlist";
    ItemType[ItemType["PlaylistsFolder"] = 24] = "PlaylistsFolder";
    ItemType[ItemType["Program"] = 25] = "Program";
    ItemType[ItemType["Recording"] = 26] = "Recording";
    ItemType[ItemType["Season"] = 27] = "Season";
    ItemType[ItemType["Series"] = 28] = "Series";
    ItemType[ItemType["Studio"] = 29] = "Studio";
    ItemType[ItemType["Trailer"] = 30] = "Trailer";
    ItemType[ItemType["TvChannel"] = 31] = "TvChannel";
    ItemType[ItemType["TvProgram"] = 32] = "TvProgram";
    ItemType[ItemType["UserRootFolder"] = 33] = "UserRootFolder";
    ItemType[ItemType["UserView"] = 34] = "UserView";
    ItemType[ItemType["Video"] = 35] = "Video";
    ItemType[ItemType["Year"] = 36] = "Year";
})(ItemType || (exports.ItemType = ItemType = {}));


/***/ }),

/***/ "./Web/Models/PluginSettings.ts":
/*!**************************************!*\
  !*** ./Web/Models/PluginSettings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultPluginSettings = void 0;
const ItemType_1 = __webpack_require__(/*! ./ItemType */ "./Web/Models/ItemType.ts");
exports.DefaultPluginSettings = {
    EnabledItemTypes: [ItemType_1.ItemType.Series, ItemType_1.ItemType.BoxSet, ItemType_1.ItemType.Movie, ItemType_1.ItemType.Folder, ItemType_1.ItemType.Video],
    BlurDescription: false,
    BlurThumbnail: false,
};


/***/ }),

/***/ "./Web/Services/AuthService.ts":
/*!*************************************!*\
  !*** ./Web/Services/AuthService.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
class AuthService {
    _authHeader = 'Authorization';
    _authHeaderValue = '';
    constructor() {
    }
    getAuthHeaderKey() {
        return this._authHeader;
    }
    getAuthHeaderValue() {
        return this._authHeaderValue;
    }
    setAuthHeaderValue(value) {
        this._authHeaderValue = value;
    }
    addAuthHeaderIntoHttpRequest(request) {
        request.setRequestHeader(this._authHeader, this.getAuthHeaderValue());
    }
}
exports.AuthService = AuthService;


/***/ }),

/***/ "./Web/Services/DataFetcher.ts":
/*!*************************************!*\
  !*** ./Web/Services/DataFetcher.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataFetcher = void 0;
const ItemType_1 = __webpack_require__(/*! ../Models/ItemType */ "./Web/Models/ItemType.ts");
/**
 * The classes which derives from this interface, will provide the functionality to handle the data input from the server if the PlaybackState is changed.
 */
class DataFetcher {
    programDataStore;
    authService;
    logger;
    static nextDataIsChildData = false;
    constructor(programDataStore, authService, logger) {
        this.programDataStore = programDataStore;
        this.authService = authService;
        this.logger = logger;
        const { fetch: originalFetch } = window;
        window.fetch = async (...args) => {
            const { origin } = window.location;
            let resource = args[0];
            const config = args[1] ?? {};
            const toUrl = (input) => {
                if (input instanceof URL)
                    return input;
                if (input instanceof Request)
                    return new URL(input.url);
                return new URL(String(input), origin);
            };
            if (config && config.headers) {
                this.authService.setAuthHeaderValue(config.headers[this.authService.getAuthHeaderKey()] ?? '');
            }
            const url = toUrl(resource);
            const urlPathname = url.pathname;
            // Process data from POST requests
            // Endpoint: /Sessions/Playing
            if (config.body && typeof config.body === 'string' && urlPathname.includes('Sessions/Playing')) {
                const playingInfo = JSON.parse(config.body);
                // save the media id of the currently played video
                if (this.programDataStore.activeMediaSourceId !== playingInfo.MediaSourceId)
                    this.programDataStore.activeMediaSourceId = playingInfo.MediaSourceId;
                // Endpoint: /Sessions/Playing/Progress
                if (urlPathname.includes('Progress')) {
                    // update the playback progress of the currently played video
                    const episode = this.programDataStore.getItemById(playingInfo.MediaSourceId);
                    if (episode) {
                        this.programDataStore.updateItem({
                            ...episode,
                            UserData: {
                                ...episode.UserData,
                                PlaybackPositionTicks: playingInfo.PositionTicks,
                                PlayedPercentage: 100 / episode.RunTimeTicks * playingInfo.PositionTicks,
                                Played: episode.UserData.PlayedPercentage > 90 // 90 is the default percentage for watched episodes
                            }
                        });
                    }
                }
            }
            if (urlPathname.includes('Episodes')) {
                // remove new 'startItemId' and 'limit' query parameter, to still get the full list of episodes
                const cleanedURL = url.href.replace(/startItemId=[^&]+&?/, '').replace(/limit=[^&]+&?/, '');
                resource = toUrl(cleanedURL).toString();
            }
            const response = await originalFetch(resource, config);
            if (urlPathname.includes('Episodes')) {
                this.logger.debug('Received Episodes');
                this.programDataStore.userId = extractKeyFromString(url.search, 'UserId=', '&');
                response.clone().json().then((data) => {
                    this.programDataStore.type = ItemType_1.ItemType.Series;
                    this.programDataStore.seasons = this.getFormattedEpisodeData(data);
                });
            }
            else if (urlPathname.includes('User') && urlPathname.includes('Items') && url.search.includes('ParentId')) {
                this.logger.debug('Received Items with ParentId');
                this.programDataStore.userId = extractKeyFromString(urlPathname, 'Users/', '/');
                response.clone().json().then((data) => this.saveItemData(data));
            }
            else if (urlPathname.includes('User') && urlPathname.includes('Items')) {
                this.logger.debug('Received Items without ParentId');
                response.clone().json().then((data) => {
                    this.logger.debug('Received single item data -> Setting BoxSet name');
                    switch (ItemType_1.ItemType[data.Type]) {
                        case ItemType_1.ItemType.BoxSet:
                        case ItemType_1.ItemType.Folder:
                            DataFetcher.nextDataIsChildData = true;
                            this.programDataStore.boxSetName = data.Name;
                            break;
                        case ItemType_1.ItemType.Movie: // could be single video (e.g. started from dashboard)
                        case ItemType_1.ItemType.Video:
                            DataFetcher.nextDataIsChildData = false;
                            this.saveItemData({
                                Items: [data],
                                TotalRecordCount: 1,
                                StartIndex: 0
                            });
                            break;
                    }
                });
            }
            else if (urlPathname.includes('PlayedItems')) {
                // update the played state of the episode
                this.logger.debug('Received PlayedItems');
                const itemId = extractKeyFromString(urlPathname, 'PlayedItems/');
                const changedItem = this.programDataStore.getItemById(itemId);
                if (!changedItem)
                    return;
                response.clone().json().then((data) => changedItem.UserData.Played = data["Played"]);
                this.programDataStore.updateItem(changedItem);
            }
            else if (urlPathname.includes('FavoriteItems')) {
                // update the favourite state of the episode
                this.logger.debug('Received FavoriteItems');
                const itemId = extractKeyFromString(urlPathname, 'FavoriteItems/');
                const changedItem = this.programDataStore.getItemById(itemId);
                if (!changedItem)
                    return;
                response.clone().json().then((data) => changedItem.UserData.IsFavorite = data["IsFavorite"]);
                this.programDataStore.updateItem(changedItem);
            }
            return response;
            function extractKeyFromString(searchString, startString, endString = '') {
                const startIndex = searchString.indexOf(startString) + startString.length;
                if (endString !== '') {
                    const endIndex = searchString.indexOf(endString, startIndex);
                    return searchString.substring(startIndex, endIndex);
                }
                return searchString.substring(startIndex);
            }
        };
    }
    saveItemData(itemDto) {
        if (!itemDto || !itemDto.Items || itemDto.Items.length === 0)
            return;
        const firstItem = itemDto.Items.at(0);
        const itemDtoType = ItemType_1.ItemType[firstItem?.Type];
        switch (itemDtoType) {
            case ItemType_1.ItemType.Episode:
                // do not overwrite data if we only receive one item which already exists
                if (itemDto.Items.length > 1 || !this.programDataStore.seasons.flatMap(season => season.episodes).some(episode => episode.Id === firstItem.Id)) {
                    this.programDataStore.type = ItemType_1.ItemType.Series;
                    this.programDataStore.seasons = this.getFormattedEpisodeData(itemDto);
                }
                break;
            case ItemType_1.ItemType.Movie:
                // do not overwrite data if we only receive one item which already exists
                if (itemDto.Items.length > 1 || !this.programDataStore.movies.some(movie => movie.Id === firstItem.Id)) {
                    this.programDataStore.type = DataFetcher.nextDataIsChildData ? ItemType_1.ItemType.BoxSet : ItemType_1.ItemType.Movie;
                    this.programDataStore.movies = itemDto.Items.map((movie, idx) => ({
                        ...movie,
                        IndexNumber: idx + 1
                    }));
                }
                break;
            case ItemType_1.ItemType.Video:
                // do not overwrite data if we only receive one item which already exists
                if (itemDto.Items.length > 1 || !this.programDataStore.movies.some(video => video.Id === firstItem.Id)) {
                    this.programDataStore.type = DataFetcher.nextDataIsChildData ? ItemType_1.ItemType.Folder : ItemType_1.ItemType.Video;
                    itemDto.Items.sort((a, b) => (a.SortName && b.SortName) ? a.SortName.localeCompare(b.SortName) : 0);
                    this.programDataStore.movies = itemDto.Items.map((video, idx) => ({
                        ...video,
                        IndexNumber: idx + 1
                    }));
                }
                break;
        }
        DataFetcher.nextDataIsChildData = false;
        // this.logger.error("Couldn't save items from response", itemDto);
    }
    getFormattedEpisodeData = (itemDto) => {
        const episodeData = itemDto.Items;
        // get all different seasonIds
        const seasonIds = new Set(episodeData.map((episode) => episode.SeasonId));
        // group the episodes by seasonId
        const group = groupBy(episodeData, (episode) => episode.SeasonId);
        const seasons = [];
        const iterator = seasonIds.values();
        let value = iterator.next();
        while (!value.done) {
            const seasonId = value.value;
            const season = {
                seasonId: seasonId,
                seasonName: group[seasonId].at(0).SeasonName,
                episodes: group[seasonId],
                IndexNumber: seasons.length
            };
            seasons.push(season);
            value = iterator.next();
        }
        return seasons;
        function groupBy(arr, fn) {
            return arr.reduce((prev, curr) => {
                const groupKey = fn(curr);
                const group = prev[groupKey] || [];
                group.push(curr);
                return { ...prev, [groupKey]: group };
            }, {});
        }
    };
}
exports.DataFetcher = DataFetcher;


/***/ }),

/***/ "./Web/Services/DataLoader.ts":
/*!************************************!*\
  !*** ./Web/Services/DataLoader.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataLoader = void 0;
const Endpoints_1 = __webpack_require__(/*! ../Endpoints */ "./Web/Endpoints.ts");
class DataLoader {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    loadEpisodeDescription(episodeId, onloadend) {
        let requestUrl = `../${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.EPISODE_DESCRIPTION}`
            .replace('{episodeId}', episodeId);
        let episodeDescriptionRequest = new XMLHttpRequest();
        episodeDescriptionRequest.responseType = 'json';
        episodeDescriptionRequest.open('GET', requestUrl);
        this.authService.addAuthHeaderIntoHttpRequest(episodeDescriptionRequest);
        episodeDescriptionRequest.send();
        episodeDescriptionRequest.onloadend = onloadend;
        return episodeDescriptionRequest;
    }
}
exports.DataLoader = DataLoader;


/***/ }),

/***/ "./Web/Services/Logger.ts":
/*!********************************!*\
  !*** ./Web/Services/Logger.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
class Logger {
    log_prefix;
    constructor(log_prefix = "[InPlayerEpisodePreview]") {
        this.log_prefix = log_prefix;
    }
    debug(msg, ...details) {
        // console.debug(`${this.log_prefix} ${msg}`, details);
    }
    error(msg, ...details) {
        console.error(`${this.log_prefix} ${msg}`, details);
    }
    info(msg, ...details) {
        console.info(`${this.log_prefix} ${msg}`, details);
    }
}
exports.Logger = Logger;


/***/ }),

/***/ "./Web/Services/PlaybackHandler.ts":
/*!*****************************************!*\
  !*** ./Web/Services/PlaybackHandler.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlaybackHandler = void 0;
const Endpoints_1 = __webpack_require__(/*! ../Endpoints */ "./Web/Endpoints.ts");
class PlaybackHandler {
    programDataStore;
    logger;
    constructor(programDataStore, logger) {
        this.programDataStore = programDataStore;
        this.logger = logger;
    }
    async play(episodeId, startPositionTicks) {
        try {
            const url = new URL(`${window['ApiClient']['_serverAddress']}/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.PLAY_MEDIA}`
                .replace('{userId}', this.programDataStore.userId)
                .replace('{deviceId}', window['ApiClient']['_deviceId'])
                .replace('{episodeId}', episodeId)
                .replace('{ticks}', startPositionTicks.toString()));
            return await fetch(url);
        }
        catch (ex) {
            return this.logger.error(`Couldn't start the playback of an episode`, ex);
        }
    }
}
exports.PlaybackHandler = PlaybackHandler;


/***/ }),

/***/ "./Web/Services/ProgramDataStore.ts":
/*!******************************************!*\
  !*** ./Web/Services/ProgramDataStore.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgramDataStore = void 0;
const ItemType_1 = __webpack_require__(/*! ../Models/ItemType */ "./Web/Models/ItemType.ts");
const PluginSettings_1 = __webpack_require__(/*! ../Models/PluginSettings */ "./Web/Models/PluginSettings.ts");
class ProgramDataStore {
    _programData;
    constructor() {
        this._programData = {
            userId: '',
            activeMediaSourceId: '',
            boxSetName: '',
            type: undefined,
            movies: [],
            seasons: [],
            settings: PluginSettings_1.DefaultPluginSettings
        };
    }
    get userId() {
        return this._programData.userId;
    }
    set userId(userId) {
        this._programData.userId = userId;
    }
    get activeMediaSourceId() {
        return this._programData.activeMediaSourceId;
    }
    set activeMediaSourceId(activeMediaSourceId) {
        this._programData.activeMediaSourceId = activeMediaSourceId;
    }
    get activeSeason() {
        return this.seasons.find(season => season.episodes.some(episode => episode.Id === this.activeMediaSourceId));
    }
    get type() {
        return this._programData.type;
    }
    set type(type) {
        this._programData.type = type;
    }
    get boxSetName() {
        return this._programData.boxSetName;
    }
    set boxSetName(boxSetName) {
        this._programData.boxSetName = boxSetName;
    }
    get movies() {
        return this._programData.movies;
    }
    set movies(movies) {
        this._programData.movies = movies;
    }
    get seasons() {
        return this._programData.seasons;
    }
    set seasons(seasons) {
        this._programData.seasons = seasons;
    }
    get settings() {
        return this._programData.settings;
    }
    set settings(settings) {
        this._programData.settings = settings;
    }
    get dataIsAllowedForPreview() {
        if (!this.allowedPreviewTypes.includes(this.type))
            return false;
        switch (this.type) {
            case ItemType_1.ItemType.Series:
                return this.activeSeason.episodes.length >= this.minimumElementsNeeded;
            case ItemType_1.ItemType.Movie:
                return true;
            case ItemType_1.ItemType.BoxSet:
            case ItemType_1.ItemType.Folder:
            case ItemType_1.ItemType.Video:
                return this.movies.length >= this.minimumElementsNeeded;
            default:
                return false;
        }
    }
    get allowedPreviewTypes() {
        return this.settings.EnabledItemTypes;
    }
    get minimumElementsNeeded() {
        // TODO: get from plugin config in the future
        return 1;
    }
    getItemById(itemId) {
        switch (this.type) {
            case ItemType_1.ItemType.Series:
                return this.seasons
                    .flatMap(season => season.episodes)
                    .find(episode => episode.Id === itemId);
            case ItemType_1.ItemType.BoxSet:
            case ItemType_1.ItemType.Movie:
            case ItemType_1.ItemType.Folder:
            case ItemType_1.ItemType.Video:
                return this.movies.find(movie => movie.Id === itemId);
            default:
                return undefined;
        }
    }
    updateItem(itemToUpdate) {
        switch (this.type) {
            case ItemType_1.ItemType.Series:
                {
                    const season = this.seasons.find(season => season.seasonId === itemToUpdate.SeasonId);
                    this.seasons = [
                        ...this.seasons.filter(season => season.seasonId !== itemToUpdate.SeasonId), {
                            ...season,
                            episodes: [...season.episodes.filter(episode => episode.Id !== itemToUpdate.Id), itemToUpdate]
                        }
                    ];
                }
                break;
            case ItemType_1.ItemType.BoxSet:
            case ItemType_1.ItemType.Movie:
            case ItemType_1.ItemType.Folder:
            case ItemType_1.ItemType.Video:
                this.movies = [...this.movies.filter(movie => movie.Id !== itemToUpdate.Id), itemToUpdate];
        }
    }
}
exports.ProgramDataStore = ProgramDataStore;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./Web/InPlayerPreview.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Logger_1 = __webpack_require__(/*! ./Services/Logger */ "./Web/Services/Logger.ts");
const AuthService_1 = __webpack_require__(/*! ./Services/AuthService */ "./Web/Services/AuthService.ts");
const PreviewButtonTemplate_1 = __webpack_require__(/*! ./Components/PreviewButtonTemplate */ "./Web/Components/PreviewButtonTemplate.ts");
const ProgramDataStore_1 = __webpack_require__(/*! ./Services/ProgramDataStore */ "./Web/Services/ProgramDataStore.ts");
const DataLoader_1 = __webpack_require__(/*! ./Services/DataLoader */ "./Web/Services/DataLoader.ts");
const DialogBackdropContainerTemplate_1 = __webpack_require__(/*! ./Components/DialogBackdropContainerTemplate */ "./Web/Components/DialogBackdropContainerTemplate.ts");
const DialogContainerTemplate_1 = __webpack_require__(/*! ./Components/DialogContainerTemplate */ "./Web/Components/DialogContainerTemplate.ts");
const PlaybackHandler_1 = __webpack_require__(/*! ./Services/PlaybackHandler */ "./Web/Services/PlaybackHandler.ts");
const ListElementFactory_1 = __webpack_require__(/*! ./ListElementFactory */ "./Web/ListElementFactory.ts");
const PopupTitleTemplate_1 = __webpack_require__(/*! ./Components/PopupTitleTemplate */ "./Web/Components/PopupTitleTemplate.ts");
const DataFetcher_1 = __webpack_require__(/*! ./Services/DataFetcher */ "./Web/Services/DataFetcher.ts");
const ItemType_1 = __webpack_require__(/*! ./Models/ItemType */ "./Web/Models/ItemType.ts");
// load and inject inPlayerPreview.css into the page
/*
 * Inject style to be used for the preview popup
 */
let inPlayerPreviewStyle = document.createElement('style');
inPlayerPreviewStyle.id = 'inPlayerPreviewStyle';
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
`;
document?.head?.appendChild(inPlayerPreviewStyle);
// init services and helpers
const logger = new Logger_1.Logger();
const authService = new AuthService_1.AuthService();
const programDataStore = new ProgramDataStore_1.ProgramDataStore();
const dataLoader = new DataLoader_1.DataLoader(authService);
new DataFetcher_1.DataFetcher(programDataStore, authService, logger);
const playbackHandler = new PlaybackHandler_1.PlaybackHandler(programDataStore, logger);
const listElementFactory = new ListElementFactory_1.ListElementFactory(dataLoader, playbackHandler, programDataStore);
function initialize() {
    // Ensure ApiClient exists and user is logged in
    if (typeof window['ApiClient'] === 'undefined' || !window['ApiClient'].getCurrentUserId?.()) {
        setTimeout(initialize, 300); // Increased retry delay slightly
        return;
    }
    window['ApiClient']
        .getPluginConfiguration('73833d5f-0bcb-45dc-ab8b-7ce668f4345d')
        .then((config) => programDataStore.settings = config);
}
initialize();
const videoPaths = ['/video'];
let previousRoutePath = null;
let previewContainerLoaded = false;
document.addEventListener('viewshow', viewShowEventHandler);
function viewShowEventHandler() {
    const currentRoutePath = getLocationPath();
    function getLocationPath() {
        const location = window.location.toString();
        const currentRouteIndex = location.lastIndexOf('/');
        return location.substring(currentRouteIndex);
    }
    // Initial attempt to load the video view or schedule retries.
    attemptLoadVideoView();
    previousRoutePath = currentRoutePath;
    // This function attempts to load the video view, retrying up to 3 times if necessary.
    function attemptLoadVideoView(retryCount = 0) {
        if (videoPaths.includes(currentRoutePath)) {
            if (programDataStore.dataIsAllowedForPreview) {
                // Check if the preview container is already loaded before loading
                if (!previewContainerLoaded && !isPreviewButtonCreated()) {
                    loadVideoView();
                    previewContainerLoaded = true; // Set flag to true after loading
                }
            }
            else if (retryCount < 3) { // Retry up to 3 times
                setTimeout(() => {
                    logger.debug(`Retry #${retryCount + 1}`);
                    attemptLoadVideoView(retryCount + 1);
                }, 10000); // Wait 10 seconds for each retry
            }
        }
        else if (videoPaths.includes(previousRoutePath)) {
            unloadVideoView();
        }
    }
    function loadVideoView() {
        // add preview button to the page
        const parent = document.querySelector('.buttons').lastElementChild.parentElement; // lastElementChild.parentElement is used for casting from Element to HTMLElement
        let index = Array.from(parent.children).findIndex((child) => child.classList.contains("btnUserRating"));
        // if index is invalid try to use the old position (used in Jellyfin 10.8.12)
        if (index === -1)
            index = Array.from(parent.children).findIndex((child) => child.classList.contains("osdTimeText"));
        const previewButton = new PreviewButtonTemplate_1.PreviewButtonTemplate(parent, index);
        previewButton.render(previewButtonClickHandler);
        function previewButtonClickHandler() {
            const dialogBackdrop = new DialogBackdropContainerTemplate_1.DialogBackdropContainerTemplate(document.body, document.body.children.length - 1);
            dialogBackdrop.render();
            const dialogContainer = new DialogContainerTemplate_1.DialogContainerTemplate(document.body, document.body.children.length - 1);
            dialogContainer.render(() => {
                document.body.removeChild(document.getElementById(dialogBackdrop.getElementId()));
                document.body.removeChild(document.getElementById(dialogContainer.getElementId()));
            });
            const contentDiv = document.getElementById('popupContentContainer');
            contentDiv.innerHTML = ""; // remove old content
            const popupTitle = new PopupTitleTemplate_1.PopupTitleTemplate(document.getElementById('popupFocusContainer'), -1, programDataStore);
            popupTitle.render((e) => {
                e.stopPropagation();
                popupTitle.setVisible(false);
                const contentDiv = document.getElementById('popupContentContainer');
                // delete episode content for all existing episodes in the preview list;
                contentDiv.innerHTML = "";
                listElementFactory.createSeasonElements(programDataStore.seasons, contentDiv, programDataStore.activeSeason.IndexNumber, popupTitle);
            });
            switch (programDataStore.type) {
                case ItemType_1.ItemType.Series:
                    popupTitle.setText(programDataStore.activeSeason.seasonName);
                    popupTitle.setVisible(true);
                    listElementFactory.createEpisodeElements(programDataStore.activeSeason.episodes, contentDiv);
                    break;
                case ItemType_1.ItemType.Movie:
                    popupTitle.setText('');
                    popupTitle.setVisible(false);
                    listElementFactory.createEpisodeElements(programDataStore.movies.filter(movie => movie.Id === programDataStore.activeMediaSourceId), contentDiv);
                    break;
                case ItemType_1.ItemType.Video:
                    popupTitle.setText('');
                    popupTitle.setVisible(false);
                    listElementFactory.createEpisodeElements(programDataStore.movies, contentDiv);
                    break;
                case ItemType_1.ItemType.BoxSet:
                case ItemType_1.ItemType.Folder:
                    popupTitle.setText(programDataStore.boxSetName);
                    popupTitle.setVisible(true);
                    listElementFactory.createEpisodeElements(programDataStore.movies, contentDiv);
                    break;
            }
            // scroll to the episode that is currently playing
            contentDiv.querySelector('.selectedListItem').parentElement.scrollIntoView();
        }
    }
    function unloadVideoView() {
        // Clear old data and reset previewContainerLoaded flag
        authService.setAuthHeaderValue("");
        if (document.getElementById("dialogBackdropContainer"))
            document.body.removeChild(document.getElementById("dialogBackdropContainer"));
        if (document.getElementById("dialogContainer"))
            document.body.removeChild(document.getElementById("dialogContainer"));
        previewContainerLoaded = false; // Reset flag when unloading
    }
    function isPreviewButtonCreated() {
        return document.querySelector('.buttons').querySelector('#popupPreviewButton') !== null;
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLElBQUk7SUFDM0YsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9CYXNlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvRGlhbG9nQmFja2Ryb3BDb250YWluZXJUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9FcGlzb2RlRGV0YWlscy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9MaXN0RWxlbWVudFRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1BvcHVwQ29udGVudENvbnRhaW5lclRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1BvcHVwRm9jdXNDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1ByZXZpZXdCdXR0b25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvRmF2b3JpdGVJY29uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUXVpY2tBY3Rpb25zL1BsYXlTdGF0ZUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9TZWFzb25MaXN0RWxlbWVudFRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9FbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0xpc3RFbGVtZW50RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL0l0ZW1UeXBlLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0F1dGhTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9EYXRhRmV0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvRGF0YUxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL1dlYi9JblBsYXllclByZXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VUZW1wbGF0ZSB7XG4gICAgLypcbiAgICAgKiB0aGUgSFRNTCBiYXNlZCBJRCBvZiB0aGUgbmV3IGdlbmVyYXRlZCBFbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBlbGVtZW50SWQ6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHByaXZhdGUgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHsgfVxuXG4gICAgcHVibGljIGdldENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb25BZnRlckluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uQWZ0ZXJJbmRleDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0RWxlbWVudElkKGVsZW1lbnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbGVtZW50SWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudElkO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuZ2V0RWxlbWVudElkKCl9YCk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IHN0cmluZztcblxuICAgIGFic3RyYWN0IHJlbmRlciguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogdm9pZDtcblxuICAgIHByb3RlY3RlZCBhZGRFbGVtZW50VG9Db250YWluZXIoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIGlmIHBvc2l0aW9uIGlzIG5lZ2F0aXZlXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpIDwgMCAmJiB0aGlzLmdldENvbnRhaW5lcigpLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5maXJzdEVsZW1lbnRDaGlsZC5iZWZvcmUodGhpcy5zdHJpbmdUb05vZGUodGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgRWxlbWVudCBpZiBjb250YWluZXIgaXMgZW1wdHlcbiAgICAgICAgaWYgKCF0aGlzLmdldENvbnRhaW5lcigpLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5pbm5lckhUTUwgPSB0aGlzLmdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5sYXN0RWxlbWVudENoaWxkXG4gICAgICAgIGlmICh0aGlzLmdldENvbnRhaW5lcigpLmNoaWxkcmVuLmxlbmd0aCA+IHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgJiYgdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSA+PSAwKVxuICAgICAgICAgICAgY2hpbGRCZWZvcmUgPSB0aGlzLmdldENvbnRhaW5lcigpLmNoaWxkcmVuW3RoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCldO1xuICAgICAgICBcbiAgICAgICAgY2hpbGRCZWZvcmUuYWZ0ZXIodGhpcy5zdHJpbmdUb05vZGUodGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKSkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBzdHJpbmdUb05vZGUodGVtcGxhdGVTdHJpbmc6IHN0cmluZyk6IE5vZGUge1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gdGVtcGxhdGVTdHJpbmc7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlhbG9nQmFja2Ryb3BDb250YWluZXJUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgnZGlhbG9nQmFja2Ryb3BDb250YWluZXInKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiAgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJkaWFsb2dCYWNrZHJvcCBkaWFsb2dCYWNrZHJvcE9wZW5lZFwiLz5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1BvcHVwRm9jdXNDb250YWluZXJ9IGZyb20gXCIuL1BvcHVwRm9jdXNDb250YWluZXJcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdkaWFsb2dDb250YWluZXInKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgdGVtcENvbnRhaW5lckRpdjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGZvY3VzQ29udGFpbmVyRGl2OiBQb3B1cEZvY3VzQ29udGFpbmVyID0gbmV3IFBvcHVwRm9jdXNDb250YWluZXIodGVtcENvbnRhaW5lckRpdiwgLTEpO1xuICAgICAgICBmb2N1c0NvbnRhaW5lckRpdi5yZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImRpYWxvZ0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICR7dGVtcENvbnRhaW5lckRpdi5pbm5lckhUTUx9XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoZGlhbG9nQ29udGFpbmVyQ2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBsZXQgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogYW55ID0+IGRpYWxvZ0NvbnRhaW5lckNsaWNrSGFuZGxlcihlKSk7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7QmFzZUl0ZW19IGZyb20gXCIuLi9Nb2RlbHMvRXBpc29kZVwiO1xuXG5leHBvcnQgY2xhc3MgRXBpc29kZURldGFpbHNUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZXBpc29kZTogQmFzZUl0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgZXBpc29kZS0ke2VwaXNvZGUuSW5kZXhOdW1iZXJ9YCk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX0tZGV0YWlsc1wiIGNsYXNzPVwiaXRlbU1pc2NJbmZvIGl0ZW1NaXNjSW5mby1wcmltYXJ5IHByZXZpZXdFcGlzb2RlRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5lcGlzb2RlLlByZW1pZXJlRGF0ZSA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAkeyhuZXcgRGF0ZSh0aGlzLmVwaXNvZGUuUHJlbWllcmVEYXRlKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuZ2V0TG9jYWxlKCkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPiR7dGhpcy5mb3JtYXRSdW5UaW1lKHRoaXMuZXBpc29kZS5SdW5UaW1lVGlja3MpfTwvZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5lcGlzb2RlLkNvbW11bml0eVJhdGluZyA/IGA8ZGl2IGNsYXNzPVwic3RhclJhdGluZ0NvbnRhaW5lciBtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgc3Rhckljb24gc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmVwaXNvZGUuQ29tbXVuaXR5UmF0aW5nLnRvRml4ZWQoMSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICR7dGhpcy5lcGlzb2RlLkNyaXRpY1JhdGluZyA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbSBtZWRpYUluZm9Dcml0aWNSYXRpbmcgJHt0aGlzLmVwaXNvZGUuQ3JpdGljUmF0aW5nID49IDYwID8gJ21lZGlhSW5mb0NyaXRpY1JhdGluZ0ZyZXNoJyA6ICdtZWRpYUluZm9Dcml0aWNSYXRpbmdSb3R0ZW4nfVwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuZXBpc29kZS5Dcml0aWNSYXRpbmd9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmRzQXQgbWVkaWFJbmZvSXRlbVwiPiR7dGhpcy5mb3JtYXRFbmRUaW1lKHRoaXMuZXBpc29kZS5SdW5UaW1lVGlja3MsIHRoaXMuZXBpc29kZS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBnZXRMb2NhbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5sYW5ndWFnZXNcbiAgICAgICAgICAgID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXSAvLyBAdHMtaWdub3JlIGZvciB1c2VyTGFuZ3VhZ2UgKHRoaXMgYWRkcyBzdXBwb3J0IGZvciBJRSkgVE9ETzogTW92ZSB0byBpbnRlcmZhY2VcbiAgICAgICAgICAgIDogKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBmb3JtYXRSdW5UaW1lKHRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBmb3JtYXQgdGhlIHRpY2tzIHRvIGEgc3RyaW5nIHdpdGggbWludXRlcyBhbmQgaG91cnNcbiAgICAgICAgdGlja3MgLz0gMTAwMDA7IC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCk7XG4gICAgICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgICAgIGxldCBob3Vyc1N0cmluZzogc3RyaW5nID0gaG91cnMgPiAwID8gYCR7aG91cnN9aCBgIDogJyc7XG4gICAgICAgIHJldHVybiBgJHtob3Vyc1N0cmluZ30ke21pbnV0ZXN9bWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRFbmRUaW1lKHJ1bnRpbWVUaWNrczogbnVtYmVyLCBwbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIHJ1bnRpbWVUaWNrcyAvPSAxMDAwMDtcbiAgICAgICAgcGxheWJhY2tQb3NpdGlvblRpY2tzIC89IDEwMDAwO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRpY2tzOiBudW1iZXIgPSBEYXRlLm5vdygpICsgKHJ1bnRpbWVUaWNrcyk7XG4gICAgICAgIHRpY2tzIC09IChuZXcgRGF0ZSgpKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAgKiAxMDAwOyAvLyBhZGp1c3QgZm9yIHRpbWV6b25lXG4gICAgICAgIHRpY2tzIC09IHBsYXliYWNrUG9zaXRpb25UaWNrczsgLy8gc3VidHJhY3QgdGhlIHBsYXliYWNrIHBvc2l0aW9uXG4gICAgICAgIFxuICAgICAgICBsZXQgaG91cnM6IHN0cmluZyA9IHRoaXMuemVyb1BhZChNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyAzNjAwKSAlIDI0KSk7XG4gICAgICAgIGxldCBtaW51dGVzOiBzdHJpbmcgPSB0aGlzLnplcm9QYWQoTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gNjApICUgNjApKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBgRW5kcyBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSB6ZXJvUGFkKG51bTogbnVtYmVyLCBwbGFjZXM6IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gU3RyaW5nKG51bSkucGFkU3RhcnQocGxhY2VzLCAnMCcpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7RmF2b3JpdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZVwiXG5pbXBvcnQge1BsYXlTdGF0ZUljb25UZW1wbGF0ZX0gZnJvbSBcIi4vUXVpY2tBY3Rpb25zL1BsYXlTdGF0ZUljb25UZW1wbGF0ZVwiXG5pbXBvcnQge1BsYXliYWNrSGFuZGxlcn0gZnJvbSBcIi4uL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiXG5pbXBvcnQge0VwaXNvZGVEZXRhaWxzVGVtcGxhdGV9IGZyb20gXCIuL0VwaXNvZGVEZXRhaWxzXCJcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIlxuaW1wb3J0IHtCYXNlSXRlbX0gZnJvbSBcIi4uL01vZGVscy9FcGlzb2RlXCJcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIlxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBxdWlja0FjdGlvbkNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgICBwcml2YXRlIHBsYXlTdGF0ZUljb246IFBsYXlTdGF0ZUljb25UZW1wbGF0ZVxuICAgIHByaXZhdGUgZmF2b3JpdGVJY29uOiBGYXZvcml0ZUljb25UZW1wbGF0ZVxuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogQmFzZUl0ZW0sIHByaXZhdGUgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGVwaXNvZGUtJHtpdGVtLkluZGV4TnVtYmVyfWApXG5cbiAgICAgICAgLy8gY3JlYXRlIHRlbXAgcXVpY2sgYWN0aW9uIGNvbnRhaW5lclxuICAgICAgICB0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICAvLyBjcmVhdGUgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24gPSBuZXcgUGxheVN0YXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIC0xLCB0aGlzLml0ZW0pXG4gICAgICAgIHRoaXMuZmF2b3JpdGVJY29uID0gbmV3IEZhdm9yaXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIDAsIHRoaXMuaXRlbSlcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBhZGQgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24ucmVuZGVyKClcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24ucmVuZGVyKClcblxuICAgICAgICAvLyBhZGQgZXBpc29kZSBkZXRhaWxzL2luZm9cbiAgICAgICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBkZXRhaWxzOiBFcGlzb2RlRGV0YWlsc1RlbXBsYXRlID0gbmV3IEVwaXNvZGVEZXRhaWxzVGVtcGxhdGUoZGV0YWlsc0NvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSlcbiAgICAgICAgZGV0YWlscy5yZW5kZXIoKVxuXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZVN0eWxlOiBzdHJpbmcgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9JdGVtcy8ke3RoaXMuaXRlbS5JZH0vSW1hZ2VzL1ByaW1hcnk/dGFnPSR7dGhpcy5pdGVtLkltYWdlVGFncy5QcmltYXJ5fScpYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5pdGVtLkluZGV4TnVtYmVyfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3RXBpc29kZUNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3RXBpc29kZVRpdGxlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5JbmRleE51bWJlciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSAhPT0gSXRlbVR5cGUuTW92aWVcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPyBgPHNwYW4+JHt0aGlzLml0ZW0uSW5kZXhOdW1iZXJ9PC9zcGFuPmAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuaXRlbS5OYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMucXVpY2tBY3Rpb25Db250YWluZXIuaW5uZXJIVE1MfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3TGlzdEl0ZW1Db250ZW50IGhpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtkZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG92ZXJmbG93QmFja2Ryb3BDYXJkIGNhcmQtaG92ZXJhYmxlIGNhcmQtd2l0aHVzZXJkYXRhIHByZXZpZXdFcGlzb2RlSW1hZ2VDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRCb3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRTY2FsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRQYWRkZXIgY2FyZFBhZGRlci1vdmVyZmxvd0JhY2tkcm9wIGxhenktaGlkZGVuLWNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkSW1hZ2VJY29uIG1hdGVyaWFsLWljb25zIHR2XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlld0VwaXNvZGVJbWFnZUNhcmQtJHt0aGlzLml0ZW0uSW5kZXhOdW1iZXJ9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkSW1hZ2VDb250YWluZXIgY2FyZENvbnRlbnQgaXRlbUFjdGlvbiBsYXp5IGJsdXJoYXNoZWQgbGF6eS1pbWFnZS1mYWRlaW4tZmFzdCAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5zZXR0aW5ncy5CbHVyRGVzY3JpcHRpb24gPyAnYmx1cicgOiAnJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIiR7YmFja2dyb3VuZEltYWdlU3R5bGV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2UgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImlubmVyQ2FyZEZvb3RlciBmdWxsSW5uZXJDYXJkRm9vdGVyIGlubmVyQ2FyZEZvb3RlckNsZWFyIGl0ZW1Qcm9ncmVzc0JhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByb2dyZXNzQmFyRm9yZWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiR7dGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2V9JTtcIj4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLklkICE9PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiY2FyZE92ZXJsYXlDb250YWluZXIgaXRlbUFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0LWVwaXNvZGUtJHt0aGlzLml0ZW0uSW5kZXhOdW1iZXJ9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcz1cInBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5QnV0dG9uIGNhcmRPdmVybGF5QnV0dG9uLWhvdmVyIGl0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgY2FyZE92ZXJsYXlGYWItcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJyZXN1bWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2FyZE92ZXJsYXlCdXR0b25JY29uIGNhcmRPdmVybGF5QnV0dG9uSWNvbi1ob3ZlciBwbGF5X2Fycm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aWV3RXBpc29kZURlc2NyaXB0aW9uICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnNldHRpbmdzLkJsdXJEZXNjcmlwdGlvbiA/ICdibHVyJyA6ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkRlc2NyaXB0aW9uID8/ICdsb2FkaW5nLi4uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xpY2tIYW5kbGVyKGUpKVxuXG4gICAgICAgIGlmICh0aGlzLml0ZW0uSWQgIT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKSB7XG4gICAgICAgICAgICAvLyBhZGQgZXZlbnQgaGFuZGxlciB0byBzdGFydCB0aGUgcGxheWJhY2sgb2YgdGhpcyBlcGlzb2RlXG4gICAgICAgICAgICBjb25zdCBlcGlzb2RlSW1hZ2VDYXJkOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFydC1lcGlzb2RlLSR7dGhpcy5pdGVtLkluZGV4TnVtYmVyfWApXG4gICAgICAgICAgICBlcGlzb2RlSW1hZ2VDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wbGF5YmFja0hhbmRsZXIucGxheSh0aGlzLml0ZW0uSWQsIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpKVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29udGVudENvbnRhaW5lclRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwb3B1cENvbnRlbnRDb250YWluZXInKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImFjdGlvblNoZWV0U2Nyb2xsZXIgc2Nyb2xsWSBwcmV2aWV3UG9wdXBTY3JvbGxlclwiLz5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgIH1cblxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7UG9wdXBDb250ZW50Q29udGFpbmVyVGVtcGxhdGV9IGZyb20gXCIuL1BvcHVwQ29udGVudENvbnRhaW5lclRlbXBsYXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cEZvY3VzQ29udGFpbmVyIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwb3B1cEZvY3VzQ29udGFpbmVyJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHRlbXBDb250YWluZXJEaXY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBwb3B1cENvbnRlbnRDb250YWluZXI6IFBvcHVwQ29udGVudENvbnRhaW5lclRlbXBsYXRlID0gbmV3IFBvcHVwQ29udGVudENvbnRhaW5lclRlbXBsYXRlKHRlbXBDb250YWluZXJEaXYsIC0xKTtcbiAgICAgICAgcG9wdXBDb250ZW50Q29udGFpbmVyLnJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwiZm9jdXNjb250YWluZXIgZGlhbG9nIGFjdGlvbnNoZWV0LW5vdC1mdWxsc2NyZWVuIGFjdGlvblNoZWV0IGNlbnRlcmVkRGlhbG9nIG9wZW5lZCBwcmV2aWV3UG9wdXAgYWN0aW9uU2hlZXRDb250ZW50XCIgZGF0YS1oaXN0b3J5PVwidHJ1ZVwiIGRhdGEtcmVtb3Zlb25jbG9zZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAke3RlbXBDb250YWluZXJEaXYuaW5uZXJIVE1MfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBUaXRsZVRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJhY3Rpb25TaGVldFRpdGxlIGxpc3RJdGVtIHByZXZpZXdQb3B1cFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUgPT09IEl0ZW1UeXBlLlNlcmllcyAmJiB0aGlzLnByb2dyYW1EYXRhU3RvcmUuc2Vhc29ucy5sZW5ndGggPiAxID8gXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImFjdGlvbnNoZWV0TWVudUl0ZW1JY29uIGxpc3RJdGVtSWNvbiBsaXN0SXRlbUljb24tdHJhbnNwYXJlbnQgbWF0ZXJpYWwtaWNvbnMga2V5Ym9hcmRfYmFja3NwYWNlXCI+PC9zcGFuPicgOiBcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiYWN0aW9uU2hlZXRUaXRsZVwiPjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbikge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5TZXJpZXM6XG4gICAgICAgICAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Cb3hTZXQ6XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkZvbGRlcjpcbiAgICAgICAgICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVyVGV4dCA9IHRleHRcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldFZpc2libGUoaXNWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpXG4gICAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BvcHVwUHJldmlld0J1dHRvbicpO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJhdXRvU2l6ZSBwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiIGlzPVwicGFwZXItaWNvbi1idXR0b24tbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVwaXNvZGUgUHJldmlld1wiPlxuICAgICAgICAgICAgICAgIDwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPlxuICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJzdmcxXCJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2IDRcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImxheWVyMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0NDdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40NzY0Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMy43NTY4Njc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIuMTY5MzY2MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMC4yMzgyMzMwM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PVwiMS44MjU3MzM1XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJyZWN0NDctNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NjU5NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gMS4wMjkxNDM3LDEuMDMyMDQ4MiBoIDMuNzUyODk5MSB2IDIuMTcyMjM5NCBsIDAuMDA2NzYsLTIuMTU3MjU5NSB6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJyZWN0NDctOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NzQyNztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gMS44MjI4NjE0LDAuMjM4NzEzMzYgaCAzLjc1OTI1OSBWIDIuNDEwMTIxMSBsIC0wLjAwNjgsLTIuMTcxNDA3NzQgelwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGxldCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IGFueSA9PiBjbGlja0hhbmRsZXIoKSk7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7QmFzZUl0ZW19IGZyb20gXCIuLi8uLi9Nb2RlbHMvRXBpc29kZVwiXG5cbmV4cG9ydCBjbGFzcyBGYXZvcml0ZUljb25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZXBpc29kZTogQmFzZUl0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdmYXZvcml0ZUJ1dHRvbi0nICsgZXBpc29kZS5JbmRleE51bWJlcilcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1yYXRpbmdidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5lcGlzb2RlPy5JZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNlcnZlcmlkPVwiJHt0aGlzLmVwaXNvZGU/LlNlcnZlcklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbXR5cGU9XCJFcGlzb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1saWtlcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXNmYXZvcml0ZT1cIiR7dGhpcy5lcGlzb2RlPy5Vc2VyRGF0YT8uSXNGYXZvcml0ZSA/PyBmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGZhdm9yaXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7QmFzZUl0ZW19IGZyb20gXCIuLi8uLi9Nb2RlbHMvRXBpc29kZVwiXG5cbmV4cG9ydCBjbGFzcyBQbGF5U3RhdGVJY29uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGVwaXNvZGU6IEJhc2VJdGVtKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncGxheVN0YXRlQnV0dG9uLScgKyB0aGlzLmVwaXNvZGUuSW5kZXhOdW1iZXIpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICAgICBpcz1cImVtYnktcGxheXN0YXRlYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbUFjdGlvbiBwYXBlci1pY29uLWJ1dHRvbi1saWdodCBlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuZXBpc29kZT8uSWQgPz8gJyd9XCIgXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuZXBpc29kZT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGF5ZWQ9XCIke3RoaXMuZXBpc29kZT8uVXNlckRhdGE/LlBsYXllZCA/PyBmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1hcmsgcGxheWVkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjaGVjayBwbGF5c3RhdGVidXR0b24taWNvbi0ke3RoaXMuZXBpc29kZT8uVXNlckRhdGE/LlBsYXllZCA/IFwicGxheWVkXCIgOiBcInVucGxheWVkXCJ9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7U2Vhc29ufSBmcm9tIFwiLi4vTW9kZWxzL1NlYXNvblwiO1xuXG5leHBvcnQgY2xhc3MgU2Vhc29uTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgc2Vhc29uOiBTZWFzb24sIHByaXZhdGUgaXNDdXJyZW50U2Vhc29uOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGVwaXNvZGUtJHtzZWFzb24uc2Vhc29uSWR9YCk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3RJdGVtIGxpc3RJdGVtLWJ1dHRvbiBhY3Rpb25TaGVldE1lbnVJdGVtIGVtYnktYnV0dG9uIHByZXZpZXdMaXN0SXRlbVwiXG4gICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLnNlYXNvbi5zZWFzb25JZH1cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld0VwaXNvZGVUaXRsZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuaXNDdXJyZW50U2Vhc29uID8gXCJtYXRlcmlhbC1pY29ucyBjaGVja1wiIDogXCJcIn1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uU2hlZXRJdGVtVGV4dFwiPiR7dGhpcy5zZWFzb24uc2Vhc29uTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGxldCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IGNsaWNrSGFuZGxlcihlKSk7XG4gICAgfVxufSIsImV4cG9ydCBlbnVtIEVuZHBvaW50cyB7XG4gICAgQkFTRSA9IFwiSW5QbGF5ZXJQcmV2aWV3XCIsXG4gICAgRVBJU09ERV9JTkZPID0gXCIvVXNlcnMve3VzZXJJZH0vSXRlbXMve2VwaXNvZGVJZH1cIixcbiAgICBFUElTT0RFX0RFU0NSSVBUSU9OID0gXCIvSXRlbXMve2VwaXNvZGVJZH1cIixcbiAgICBQTEFZX01FRElBID0gXCIvVXNlcnMve3VzZXJJZH0ve2RldmljZUlkfS9JdGVtcy97ZXBpc29kZUlkfS9QbGF5L3t0aWNrc31cIlxufSIsImltcG9ydCB7TGlzdEVsZW1lbnRUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9MaXN0RWxlbWVudFRlbXBsYXRlXCI7XG5pbXBvcnQge0Jhc2VJdGVtfSBmcm9tIFwiLi9Nb2RlbHMvRXBpc29kZVwiO1xuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge1NlYXNvbn0gZnJvbSBcIi4vTW9kZWxzL1NlYXNvblwiO1xuaW1wb3J0IHtTZWFzb25MaXN0RWxlbWVudFRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1NlYXNvbkxpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7UG9wdXBUaXRsZVRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xuaW1wb3J0IHtEYXRhTG9hZGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhTG9hZGVyXCI7XG5pbXBvcnQge1BsYXliYWNrSGFuZGxlcn0gZnJvbSBcIi4vU2VydmljZXMvUGxheWJhY2tIYW5kbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXN0RWxlbWVudEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YUxvYWRlcjogRGF0YUxvYWRlciwgcHJpdmF0ZSBwbGF5YmFja0hhbmRsZXI6IFBsYXliYWNrSGFuZGxlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBjcmVhdGVFcGlzb2RlRWxlbWVudHMoZXBpc29kZXM6IEJhc2VJdGVtW10sIHBhcmVudERpdjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgZXBpc29kZXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZXBpc29kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVwaXNvZGUgPSBuZXcgTGlzdEVsZW1lbnRUZW1wbGF0ZShwYXJlbnREaXYsIGksIGVwaXNvZGVzW2ldLCB0aGlzLnBsYXliYWNrSGFuZGxlciwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlKTtcbiAgICAgICAgICAgIGVwaXNvZGUucmVuZGVyKChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBoaWRlIGVwaXNvZGUgY29udGVudCBmb3IgYWxsIGV4aXN0aW5nIGVwaXNvZGVzIGluIHRoZSBwcmV2aWV3IGxpc3RcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXZpZXdMaXN0SXRlbUNvbnRlbnRcIikuZm9yRWFjaCgoZWxlbWVudDogRWxlbWVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZExpc3RJdGVtJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZXBpc29kZUNvbnRhaW5lcjogRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtlcGlzb2Rlc1tpXS5JbmRleE51bWJlcn1cIl1gKS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0xpc3RJdGVtQ29udGVudCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGxvYWQgZXBpc29kZSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIGlmICghZXBpc29kZXNbaV0uRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdDogWE1MSHR0cFJlcXVlc3QgPSB0aGlzLmRhdGFMb2FkZXIubG9hZEVwaXNvZGVEZXNjcmlwdGlvbihlcGlzb2Rlc1tpXS5JZCwgKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXBpc29kZXNbaV0uRGVzY3JpcHRpb24gPSByZXF1ZXN0LnJlc3BvbnNlPy5EZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKGVwaXNvZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVwaXNvZGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByZXZpZXdFcGlzb2RlRGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IGVwaXNvZGVzW2ldLkRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gc2hvdyBlcGlzb2RlIGNvbnRlbnQgZm9yIHRoZSBzZWxlY3RlZCBlcGlzb2RlXG4gICAgICAgICAgICAgICAgZXBpc29kZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgZXBpc29kZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZExpc3RJdGVtJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRoZSBzZWxlY3RlZCBlcGlzb2RlXG4gICAgICAgICAgICAgICAgZXBpc29kZUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZXBpc29kZXNbaV0uSWQgPT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXBpc29kZU5vZGU6IEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7ZXBpc29kZXNbaV0uSW5kZXhOdW1iZXJ9XCJdYCkucXVlcnlTZWxlY3RvcignLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBwcmVsb2FkIGVwaXNvZGUgZGVzY3JpcHRpb24gZm9yIHRoZSBjdXJyZW50bHkgcGxheWluZyBlcGlzb2RlXG4gICAgICAgICAgICAgICAgaWYgKCFlcGlzb2Rlc1tpXS5EZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0OiBYTUxIdHRwUmVxdWVzdCA9IHRoaXMuZGF0YUxvYWRlci5sb2FkRXBpc29kZURlc2NyaXB0aW9uKGVwaXNvZGVzW2ldLklkLCAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcGlzb2Rlc1tpXS5EZXNjcmlwdGlvbiA9IHJlcXVlc3QucmVzcG9uc2U/LkRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oZXBpc29kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXBpc29kZU5vZGUucXVlcnlTZWxlY3RvcignLnByZXZpZXdFcGlzb2RlRGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IGVwaXNvZGVzW2ldLkRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZXBpc29kZU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGVwaXNvZGVOb2RlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgY3JlYXRlU2Vhc29uRWxlbWVudHMoc2Vhc29uczogU2Vhc29uW10sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIGN1cnJlbnRTZWFzb25JbmRleDogbnVtYmVyLCB0aXRsZUNvbnRhaW5lcjogUG9wdXBUaXRsZVRlbXBsYXRlKTogdm9pZCB7XG4gICAgICAgIHNlYXNvbnMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2Vhc29ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2Vhc29uID0gbmV3IFNlYXNvbkxpc3RFbGVtZW50VGVtcGxhdGUocGFyZW50RGl2LCBpLCBzZWFzb25zW2ldLCBzZWFzb25zW2ldLkluZGV4TnVtYmVyID09PSBjdXJyZW50U2Vhc29uSW5kZXgpO1xuICAgICAgICAgICAgc2Vhc29uLnJlbmRlcigoZTogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0VGV4dChzZWFzb25zW2ldLnNlYXNvbk5hbWUpO1xuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcGFyZW50RGl2LmlubmVySFRNTCA9IFwiXCI7IC8vIHJlbW92ZSBvbGQgY29udGVudFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRXBpc29kZUVsZW1lbnRzKHNlYXNvbnNbaV0uZXBpc29kZXMsIHBhcmVudERpdik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZW51bSBJdGVtVHlwZSB7XG4gICAgQWdncmVnYXRlRm9sZGVyLFxuICAgIEF1ZGlvLFxuICAgIEF1ZGlvQm9vayxcbiAgICBCYXNlUGx1Z2luRm9sZGVyLFxuICAgIEJvb2ssXG4gICAgQm94U2V0LFxuICAgIENoYW5uZWwsXG4gICAgQ2hhbm5lbEZvbGRlckl0ZW0sXG4gICAgQ29sbGVjdGlvbkZvbGRlcixcbiAgICBFcGlzb2RlLFxuICAgIEZvbGRlcixcbiAgICBHZW5yZSxcbiAgICBNYW51YWxQbGF5bGlzdHNGb2xkZXIsXG4gICAgTW92aWUsXG4gICAgTGl2ZVR2Q2hhbm5lbCxcbiAgICBMaXZlVHZQcm9ncmFtLFxuICAgIE11c2ljQWxidW0sXG4gICAgTXVzaWNBcnRpc3QsXG4gICAgTXVzaWNHZW5yZSxcbiAgICBNdXNpY1ZpZGVvLFxuICAgIFBlcnNvbixcbiAgICBQaG90byxcbiAgICBQaG90b0FsYnVtLFxuICAgIFBsYXlsaXN0LFxuICAgIFBsYXlsaXN0c0ZvbGRlcixcbiAgICBQcm9ncmFtLFxuICAgIFJlY29yZGluZyxcbiAgICBTZWFzb24sXG4gICAgU2VyaWVzLFxuICAgIFN0dWRpbyxcbiAgICBUcmFpbGVyLFxuICAgIFR2Q2hhbm5lbCxcbiAgICBUdlByb2dyYW0sXG4gICAgVXNlclJvb3RGb2xkZXIsXG4gICAgVXNlclZpZXcsXG4gICAgVmlkZW8sXG4gICAgWWVhclxufSIsImltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL0l0ZW1UeXBlXCI7XG5cbmV4cG9ydCB0eXBlIFBsdWdpblNldHRpbmdzID0ge1xuICAgIEVuYWJsZWRJdGVtVHlwZXM6IEl0ZW1UeXBlW10sXG4gICAgQmx1ckRlc2NyaXB0aW9uOiBib29sZWFuLFxuICAgIEJsdXJUaHVtYm5haWw6IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0UGx1Z2luU2V0dGluZ3M6IFBsdWdpblNldHRpbmdzID0ge1xuICAgIEVuYWJsZWRJdGVtVHlwZXM6IFtJdGVtVHlwZS5TZXJpZXMsIEl0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuTW92aWUsIEl0ZW1UeXBlLkZvbGRlciwgSXRlbVR5cGUuVmlkZW9dLFxuICAgIEJsdXJEZXNjcmlwdGlvbjogZmFsc2UsXG4gICAgQmx1clRodW1ibmFpbDogZmFsc2UsXG59IiwiZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdXRoSGVhZGVyOiBzdHJpbmcgPSAnQXV0aG9yaXphdGlvbic7XG4gICAgcHJpdmF0ZSBfYXV0aEhlYWRlclZhbHVlOiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBdXRoSGVhZGVyS2V5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoSGVhZGVyO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGdldEF1dGhIZWFkZXJWYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aEhlYWRlclZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBdXRoSGVhZGVyVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9hdXRoSGVhZGVyVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQXV0aEhlYWRlckludG9IdHRwUmVxdWVzdChyZXF1ZXN0OiBYTUxIdHRwUmVxdWVzdCk6IHZvaWQge1xuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIodGhpcy5fYXV0aEhlYWRlciwgdGhpcy5nZXRBdXRoSGVhZGVyVmFsdWUoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9BdXRoU2VydmljZVwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHtCYXNlSXRlbSwgSXRlbUR0b30gZnJvbSBcIi4uL01vZGVscy9FcGlzb2RlXCI7XG5pbXBvcnQge1NlYXNvbn0gZnJvbSBcIi4uL01vZGVscy9TZWFzb25cIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7UGxheWJhY2tQcm9ncmVzc0luZm99IGZyb20gXCIuLi9Nb2RlbHMvUGxheWJhY2tQcm9ncmVzc0luZm9cIjtcblxuLyoqXG4gKiBUaGUgY2xhc3NlcyB3aGljaCBkZXJpdmVzIGZyb20gdGhpcyBpbnRlcmZhY2UsIHdpbGwgcHJvdmlkZSB0aGUgZnVuY3Rpb25hbGl0eSB0byBoYW5kbGUgdGhlIGRhdGEgaW5wdXQgZnJvbSB0aGUgc2VydmVyIGlmIHRoZSBQbGF5YmFja1N0YXRlIGlzIGNoYW5nZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRhRmV0Y2hlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgbmV4dERhdGFJc0NoaWxkRGF0YTogYm9vbGVhbiA9IGZhbHNlXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikge1xuICAgICAgICBjb25zdCB7ZmV0Y2g6IG9yaWdpbmFsRmV0Y2h9ID0gd2luZG93XG4gICAgICAgIHdpbmRvdy5mZXRjaCA9IGFzeW5jICguLi5hcmdzKTogUHJvbWlzZTxSZXNwb25zZT4gPT4ge1xuICAgICAgICAgICAgY29uc3Qge29yaWdpbn0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgICAgICAgICBsZXQgcmVzb3VyY2UgPSBhcmdzWzBdIGFzIFJlcXVlc3RJbmZvO1xuICAgICAgICAgICAgY29uc3QgY29uZmlnOiBSZXF1ZXN0SW5pdCA9IGFyZ3NbMV0gPz8ge307XG5cbiAgICAgICAgICAgIGNvbnN0IHRvVXJsID0gKGlucHV0OiBSZXF1ZXN0SW5mbyk6IFVSTCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgVVJMKSByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkgcmV0dXJuIG5ldyBVUkwoaW5wdXQudXJsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVSTChTdHJpbmcoaW5wdXQpLCBvcmlnaW4pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuaGVhZGVycykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0QXV0aEhlYWRlclZhbHVlKGNvbmZpZy5oZWFkZXJzW3RoaXMuYXV0aFNlcnZpY2UuZ2V0QXV0aEhlYWRlcktleSgpXSA/PyAnJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdXJsOiBVUkwgPSB0b1VybChyZXNvdXJjZSk7XG4gICAgICAgICAgICBjb25zdCB1cmxQYXRobmFtZTogc3RyaW5nID0gdXJsLnBhdGhuYW1lO1xuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIGRhdGEgZnJvbSBQT1NUIHJlcXVlc3RzXG4gICAgICAgICAgICAvLyBFbmRwb2ludDogL1Nlc3Npb25zL1BsYXlpbmdcbiAgICAgICAgICAgIGlmIChjb25maWcuYm9keSAmJiB0eXBlb2YgY29uZmlnLmJvZHkgPT09ICdzdHJpbmcnICYmIHVybFBhdGhuYW1lLmluY2x1ZGVzKCdTZXNzaW9ucy9QbGF5aW5nJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5aW5nSW5mbzogUGxheWJhY2tQcm9ncmVzc0luZm8gPSBKU09OLnBhcnNlKGNvbmZpZy5ib2R5KVxuXG4gICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgbWVkaWEgaWQgb2YgdGhlIGN1cnJlbnRseSBwbGF5ZWQgdmlkZW9cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgIT09IHBsYXlpbmdJbmZvLk1lZGlhU291cmNlSWQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gcGxheWluZ0luZm8uTWVkaWFTb3VyY2VJZFxuXG4gICAgICAgICAgICAgICAgLy8gRW5kcG9pbnQ6IC9TZXNzaW9ucy9QbGF5aW5nL1Byb2dyZXNzXG4gICAgICAgICAgICAgICAgaWYgKHVybFBhdGhuYW1lLmluY2x1ZGVzKCdQcm9ncmVzcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgcGxheWJhY2sgcHJvZ3Jlc3Mgb2YgdGhlIGN1cnJlbnRseSBwbGF5ZWQgdmlkZW9cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXBpc29kZTogQmFzZUl0ZW0gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQocGxheWluZ0luZm8uTWVkaWFTb3VyY2VJZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVwaXNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5lcGlzb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVwaXNvZGUuVXNlckRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogcGxheWluZ0luZm8uUG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVkUGVyY2VudGFnZTogMTAwIC8gZXBpc29kZS5SdW5UaW1lVGlja3MgKiBwbGF5aW5nSW5mby5Qb3NpdGlvblRpY2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZWQ6IGVwaXNvZGUuVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZSA+IDkwIC8vIDkwIGlzIHRoZSBkZWZhdWx0IHBlcmNlbnRhZ2UgZm9yIHdhdGNoZWQgZXBpc29kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodXJsUGF0aG5hbWUuaW5jbHVkZXMoJ0VwaXNvZGVzJykpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbmV3ICdzdGFydEl0ZW1JZCcgYW5kICdsaW1pdCcgcXVlcnkgcGFyYW1ldGVyLCB0byBzdGlsbCBnZXQgdGhlIGZ1bGwgbGlzdCBvZiBlcGlzb2Rlc1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuZWRVUkwgPSB1cmwuaHJlZi5yZXBsYWNlKC9zdGFydEl0ZW1JZD1bXiZdKyY/LywgJycpLnJlcGxhY2UoL2xpbWl0PVteJl0rJj8vLCAnJyk7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UgPSB0b1VybChjbGVhbmVkVVJMKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBvcmlnaW5hbEZldGNoKHJlc291cmNlLCBjb25maWcpXG5cbiAgICAgICAgICAgIGlmICh1cmxQYXRobmFtZS5pbmNsdWRlcygnRXBpc29kZXMnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCBFcGlzb2RlcycpXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXNlcklkID0gZXh0cmFjdEtleUZyb21TdHJpbmcodXJsLnNlYXJjaCwgJ1VzZXJJZD0nLCAnJicpXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCkudGhlbigoZGF0YTogSXRlbUR0byk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSA9IEl0ZW1UeXBlLlNlcmllc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuc2Vhc29ucyA9IHRoaXMuZ2V0Rm9ybWF0dGVkRXBpc29kZURhdGEoZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVybFBhdGhuYW1lLmluY2x1ZGVzKCdVc2VyJykgJiYgdXJsUGF0aG5hbWUuaW5jbHVkZXMoJ0l0ZW1zJykgJiYgdXJsLnNlYXJjaC5pbmNsdWRlcygnUGFyZW50SWQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCBJdGVtcyB3aXRoIFBhcmVudElkJylcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51c2VySWQgPSBleHRyYWN0S2V5RnJvbVN0cmluZyh1cmxQYXRobmFtZSwgJ1VzZXJzLycsICcvJylcbiAgICAgICAgICAgICAgICByZXNwb25zZS5jbG9uZSgpLmpzb24oKS50aGVuKChkYXRhOiBJdGVtRHRvKTogdm9pZCA9PiB0aGlzLnNhdmVJdGVtRGF0YShkYXRhKSlcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh1cmxQYXRobmFtZS5pbmNsdWRlcygnVXNlcicpICYmIHVybFBhdGhuYW1lLmluY2x1ZGVzKCdJdGVtcycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1JlY2VpdmVkIEl0ZW1zIHdpdGhvdXQgUGFyZW50SWQnKVxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCkudGhlbigoZGF0YTogQmFzZUl0ZW0pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1JlY2VpdmVkIHNpbmdsZSBpdGVtIGRhdGEgLT4gU2V0dGluZyBCb3hTZXQgbmFtZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoSXRlbVR5cGVbZGF0YS5UeXBlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Cb3hTZXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkZvbGRlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhRmV0Y2hlci5uZXh0RGF0YUlzQ2hpbGREYXRhID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5ib3hTZXROYW1lID0gZGF0YS5OYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuTW92aWU6IC8vIGNvdWxkIGJlIHNpbmdsZSB2aWRlbyAoZS5nLiBzdGFydGVkIGZyb20gZGFzaGJvYXJkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5WaWRlbzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhRmV0Y2hlci5uZXh0RGF0YUlzQ2hpbGREYXRhID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVJdGVtRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW1zOiBbZGF0YV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsUmVjb3JkQ291bnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0SW5kZXg6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICh1cmxQYXRobmFtZS5pbmNsdWRlcygnUGxheWVkSXRlbXMnKSkge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgcGxheWVkIHN0YXRlIG9mIHRoZSBlcGlzb2RlXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1JlY2VpdmVkIFBsYXllZEl0ZW1zJylcblxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZDogc3RyaW5nID0gZXh0cmFjdEtleUZyb21TdHJpbmcodXJsUGF0aG5hbWUsICdQbGF5ZWRJdGVtcy8nKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZWRJdGVtOiBCYXNlSXRlbSA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZChpdGVtSWQpXG4gICAgICAgICAgICAgICAgaWYgKCFjaGFuZ2VkSXRlbSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCkudGhlbigoZGF0YSkgPT4gY2hhbmdlZEl0ZW0uVXNlckRhdGEuUGxheWVkID0gZGF0YVtcIlBsYXllZFwiXSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbShjaGFuZ2VkSXRlbSlcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh1cmxQYXRobmFtZS5pbmNsdWRlcygnRmF2b3JpdGVJdGVtcycpKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBmYXZvdXJpdGUgc3RhdGUgb2YgdGhlIGVwaXNvZGVcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgRmF2b3JpdGVJdGVtcycpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWQ6IHN0cmluZyA9IGV4dHJhY3RLZXlGcm9tU3RyaW5nKHVybFBhdGhuYW1lLCAnRmF2b3JpdGVJdGVtcy8nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VkSXRlbTogQmFzZUl0ZW0gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5nZWRJdGVtKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCkudGhlbigoZGF0YSkgPT4gY2hhbmdlZEl0ZW0uVXNlckRhdGEuSXNGYXZvcml0ZSA9IGRhdGFbXCJJc0Zhdm9yaXRlXCJdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbShjaGFuZ2VkSXRlbSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGV4dHJhY3RLZXlGcm9tU3RyaW5nKHNlYXJjaFN0cmluZzogc3RyaW5nLCBzdGFydFN0cmluZzogc3RyaW5nLCBlbmRTdHJpbmc6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydEluZGV4OiBudW1iZXIgPSBzZWFyY2hTdHJpbmcuaW5kZXhPZihzdGFydFN0cmluZykgKyBzdGFydFN0cmluZy5sZW5ndGhcbiAgICAgICAgICAgICAgICBpZiAoZW5kU3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRJbmRleDogbnVtYmVyID0gc2VhcmNoU3RyaW5nLmluZGV4T2YoZW5kU3RyaW5nLCBzdGFydEluZGV4KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoU3RyaW5nLnN1YnN0cmluZyhzdGFydEluZGV4LCBlbmRJbmRleClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoU3RyaW5nLnN1YnN0cmluZyhzdGFydEluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzYXZlSXRlbURhdGEoaXRlbUR0bzogSXRlbUR0byk6IHZvaWQge1xuICAgICAgICBpZiAoIWl0ZW1EdG8gfHwgIWl0ZW1EdG8uSXRlbXMgfHwgaXRlbUR0by5JdGVtcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IGl0ZW1EdG8uSXRlbXMuYXQoMClcbiAgICAgICAgY29uc3QgaXRlbUR0b1R5cGU6IEl0ZW1UeXBlID0gSXRlbVR5cGVbZmlyc3RJdGVtPy5UeXBlXVxuICAgICAgICBzd2l0Y2ggKGl0ZW1EdG9UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkVwaXNvZGU6XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IG92ZXJ3cml0ZSBkYXRhIGlmIHdlIG9ubHkgcmVjZWl2ZSBvbmUgaXRlbSB3aGljaCBhbHJlYWR5IGV4aXN0c1xuICAgICAgICAgICAgICAgIGlmIChpdGVtRHRvLkl0ZW1zLmxlbmd0aCA+IDEgfHwgIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5zZWFzb25zLmZsYXRNYXAoc2Vhc29uID0+IHNlYXNvbi5lcGlzb2Rlcykuc29tZShlcGlzb2RlID0+IGVwaXNvZGUuSWQgPT09IGZpcnN0SXRlbS5JZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUgPSBJdGVtVHlwZS5TZXJpZXNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnNlYXNvbnMgPSB0aGlzLmdldEZvcm1hdHRlZEVwaXNvZGVEYXRhKGl0ZW1EdG8pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLk1vdmllOlxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBvdmVyd3JpdGUgZGF0YSBpZiB3ZSBvbmx5IHJlY2VpdmUgb25lIGl0ZW0gd2hpY2ggYWxyZWFkeSBleGlzdHNcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUR0by5JdGVtcy5sZW5ndGggPiAxIHx8ICF0aGlzLnByb2dyYW1EYXRhU3RvcmUubW92aWVzLnNvbWUobW92aWUgPT4gbW92aWUuSWQgPT09IGZpcnN0SXRlbS5JZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUgPSBEYXRhRmV0Y2hlci5uZXh0RGF0YUlzQ2hpbGREYXRhID8gSXRlbVR5cGUuQm94U2V0IDogSXRlbVR5cGUuTW92aWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLm1vdmllcyA9IGl0ZW1EdG8uSXRlbXMubWFwKChtb3ZpZSwgaWR4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubW92aWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBJbmRleE51bWJlcjogaWR4ICsgMVxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuVmlkZW86XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IG92ZXJ3cml0ZSBkYXRhIGlmIHdlIG9ubHkgcmVjZWl2ZSBvbmUgaXRlbSB3aGljaCBhbHJlYWR5IGV4aXN0c1xuICAgICAgICAgICAgICAgIGlmIChpdGVtRHRvLkl0ZW1zLmxlbmd0aCA+IDEgfHwgIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5tb3ZpZXMuc29tZSh2aWRlbyA9PiB2aWRlby5JZCA9PT0gZmlyc3RJdGVtLklkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSA9IERhdGFGZXRjaGVyLm5leHREYXRhSXNDaGlsZERhdGEgPyBJdGVtVHlwZS5Gb2xkZXIgOiBJdGVtVHlwZS5WaWRlb1xuICAgICAgICAgICAgICAgICAgICBpdGVtRHRvLkl0ZW1zLnNvcnQoKGEsIGIpID0+IChhLlNvcnROYW1lICYmIGIuU29ydE5hbWUpID8gYS5Tb3J0TmFtZS5sb2NhbGVDb21wYXJlKGIuU29ydE5hbWUpIDogMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLm1vdmllcyA9IGl0ZW1EdG8uSXRlbXMubWFwKCh2aWRlbywgaWR4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udmlkZW8sXG4gICAgICAgICAgICAgICAgICAgICAgICBJbmRleE51bWJlcjogaWR4ICsgMVxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBEYXRhRmV0Y2hlci5uZXh0RGF0YUlzQ2hpbGREYXRhID0gZmFsc2VcblxuICAgICAgICAvLyB0aGlzLmxvZ2dlci5lcnJvcihcIkNvdWxkbid0IHNhdmUgaXRlbXMgZnJvbSByZXNwb25zZVwiLCBpdGVtRHRvKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldEZvcm1hdHRlZEVwaXNvZGVEYXRhID0gKGl0ZW1EdG86IEl0ZW1EdG8pID0+IHtcbiAgICAgICAgY29uc3QgZXBpc29kZURhdGE6IEJhc2VJdGVtW10gPSBpdGVtRHRvLkl0ZW1zXG4gICAgICAgIFxuICAgICAgICAvLyBnZXQgYWxsIGRpZmZlcmVudCBzZWFzb25JZHNcbiAgICAgICAgY29uc3Qgc2Vhc29uSWRzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPihlcGlzb2RlRGF0YS5tYXAoKGVwaXNvZGU6IEJhc2VJdGVtKTogc3RyaW5nID0+IGVwaXNvZGUuU2Vhc29uSWQpKVxuXG4gICAgICAgIC8vIGdyb3VwIHRoZSBlcGlzb2RlcyBieSBzZWFzb25JZFxuICAgICAgICBjb25zdCBncm91cDogUmVjb3JkPHN0cmluZywgQmFzZUl0ZW1bXT4gPSBncm91cEJ5KGVwaXNvZGVEYXRhLCAoZXBpc29kZTogQmFzZUl0ZW0pOiBzdHJpbmcgPT4gZXBpc29kZS5TZWFzb25JZClcblxuICAgICAgICBjb25zdCBzZWFzb25zOiBTZWFzb25bXSA9IFtdXG4gICAgICAgIGNvbnN0IGl0ZXJhdG9yOiBJdGVyYWJsZUl0ZXJhdG9yPHN0cmluZz4gPSBzZWFzb25JZHMudmFsdWVzKClcbiAgICAgICAgbGV0IHZhbHVlOiBJdGVyYXRvclJlc3VsdDxzdHJpbmc+ID0gaXRlcmF0b3IubmV4dCgpXG4gICAgICAgIHdoaWxlICghdmFsdWUuZG9uZSkge1xuICAgICAgICAgICAgY29uc3Qgc2Vhc29uSWQ6IHN0cmluZyA9IHZhbHVlLnZhbHVlXG4gICAgICAgICAgICBjb25zdCBzZWFzb246IFNlYXNvbiA9IHtcbiAgICAgICAgICAgICAgICBzZWFzb25JZDogc2Vhc29uSWQsXG4gICAgICAgICAgICAgICAgc2Vhc29uTmFtZTogZ3JvdXBbc2Vhc29uSWRdLmF0KDApLlNlYXNvbk5hbWUsXG4gICAgICAgICAgICAgICAgZXBpc29kZXM6IGdyb3VwW3NlYXNvbklkXSxcbiAgICAgICAgICAgICAgICBJbmRleE51bWJlcjogc2Vhc29ucy5sZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2Vhc29ucy5wdXNoKHNlYXNvbilcbiAgICAgICAgICAgIHZhbHVlID0gaXRlcmF0b3IubmV4dCgpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2Vhc29uc1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZ3JvdXBCeTxUPihhcnI6IFRbXSwgZm46IChpdGVtOiBUKSA9PiBhbnkpOiBSZWNvcmQ8c3RyaW5nLCBUW10+IHtcbiAgICAgICAgICAgIHJldHVybiBhcnIucmVkdWNlPFJlY29yZDxzdHJpbmcsIFRbXT4+KChwcmV2OiBSZWNvcmQ8c3RyaW5nLCBUW10+LCBjdXJyOiBUKToge30gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gZm4oY3VycilcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cDogVFtdID0gcHJldltncm91cEtleV0gfHwgW11cbiAgICAgICAgICAgICAgICBncm91cC5wdXNoKGN1cnIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2dyb3VwS2V5XTogZ3JvdXAgfVxuICAgICAgICAgICAgfSwge30pXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vQXV0aFNlcnZpY2VcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi4vRW5kcG9pbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBEYXRhTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRFcGlzb2RlRGVzY3JpcHRpb24oZXBpc29kZUlkOiBzdHJpbmcsIG9ubG9hZGVuZDogKHRoaXM6IFhNTEh0dHBSZXF1ZXN0LCBldjogUHJvZ3Jlc3NFdmVudDxFdmVudFRhcmdldD4pID0+IHZvaWQpOiBYTUxIdHRwUmVxdWVzdCB7XG4gICAgICAgIGxldCByZXF1ZXN0VXJsID0gYC4uLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuRVBJU09ERV9ERVNDUklQVElPTn1gXG4gICAgICAgICAgICAucmVwbGFjZSgne2VwaXNvZGVJZH0nLCBlcGlzb2RlSWQpO1xuXG4gICAgICAgIGxldCBlcGlzb2RlRGVzY3JpcHRpb25SZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGVwaXNvZGVEZXNjcmlwdGlvblJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuXG4gICAgICAgIGVwaXNvZGVEZXNjcmlwdGlvblJlcXVlc3Qub3BlbignR0VUJywgcmVxdWVzdFVybCk7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuYWRkQXV0aEhlYWRlckludG9IdHRwUmVxdWVzdChlcGlzb2RlRGVzY3JpcHRpb25SZXF1ZXN0KTtcbiAgICAgICAgZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdC5zZW5kKCk7XG4gICAgICAgIGVwaXNvZGVEZXNjcmlwdGlvblJlcXVlc3Qub25sb2FkZW5kID0gb25sb2FkZW5kO1xuXG4gICAgICAgIHJldHVybiBlcGlzb2RlRGVzY3JpcHRpb25SZXF1ZXN0O1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ19wcmVmaXg6IHN0cmluZyA9IFwiW0luUGxheWVyRXBpc29kZVByZXZpZXddXCIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi4vRW5kcG9pbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5YmFja0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikge1xuICAgIH1cblxuICAgIGFzeW5jIHBsYXkoZXBpc29kZUlkOiBzdHJpbmcsIHN0YXJ0UG9zaXRpb25UaWNrczogbnVtYmVyKTogUHJvbWlzZTx2b2lkIHwgUmVzcG9uc2U+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7d2luZG93WydBcGlDbGllbnQnXVsnX3NlcnZlckFkZHJlc3MnXX0vJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5QTEFZX01FRElBfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9Jywgd2luZG93WydBcGlDbGllbnQnXVsnX2RldmljZUlkJ10pXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tlcGlzb2RlSWR9JywgZXBpc29kZUlkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dGlja3N9Jywgc3RhcnRQb3NpdGlvblRpY2tzLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2godXJsKVxuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBzdGFydCB0aGUgcGxheWJhY2sgb2YgYW4gZXBpc29kZWAsIGV4KVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7UHJvZ3JhbURhdGF9IGZyb20gXCIuLi9Nb2RlbHMvUHJvZ3JhbURhdGFcIjtcbmltcG9ydCB7U2Vhc29ufSBmcm9tIFwiLi4vTW9kZWxzL1NlYXNvblwiO1xuaW1wb3J0IHtCYXNlSXRlbX0gZnJvbSBcIi4uL01vZGVscy9FcGlzb2RlXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge0RlZmF1bHRQbHVnaW5TZXR0aW5ncywgUGx1Z2luU2V0dGluZ3N9IGZyb20gXCIuLi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFByb2dyYW1EYXRhU3RvcmUge1xuICAgIHByaXZhdGUgX3Byb2dyYW1EYXRhOiBQcm9ncmFtRGF0YVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhID0ge1xuICAgICAgICAgICAgdXNlcklkOiAnJyxcbiAgICAgICAgICAgIGFjdGl2ZU1lZGlhU291cmNlSWQ6ICcnLFxuICAgICAgICAgICAgYm94U2V0TmFtZTogJycsXG4gICAgICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtb3ZpZXM6IFtdLFxuICAgICAgICAgICAgc2Vhc29uczogW10sXG4gICAgICAgICAgICBzZXR0aW5nczogRGVmYXVsdFBsdWdpblNldHRpbmdzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHVzZXJJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEudXNlcklkXG4gICAgfVxuXG4gICAgcHVibGljIHNldCB1c2VySWQodXNlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEudXNlcklkID0gdXNlcklkXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVNZWRpYVNvdXJjZUlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhY3RpdmVNZWRpYVNvdXJjZUlkKGFjdGl2ZU1lZGlhU291cmNlSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlU2Vhc29uKCk6IFNlYXNvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXNvbnMuZmluZChzZWFzb24gPT4gc2Vhc29uLmVwaXNvZGVzLnNvbWUoZXBpc29kZSA9PiBlcGlzb2RlLklkID09PSB0aGlzLmFjdGl2ZU1lZGlhU291cmNlSWQpKVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogSXRlbVR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEudHlwZVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0IHR5cGUodHlwZTogSXRlbVR5cGUpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEudHlwZSA9IHR5cGVcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBib3hTZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXQgYm94U2V0TmFtZShib3hTZXROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYm94U2V0TmFtZSA9IGJveFNldE5hbWVcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBtb3ZpZXMoKTogQmFzZUl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5tb3ZpZXNcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldCBtb3ZpZXMobW92aWVzOiBCYXNlSXRlbVtdKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLm1vdmllcyA9IG1vdmllc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2Vhc29ucygpOiBTZWFzb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5zZWFzb25zXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWFzb25zKHNlYXNvbnM6IFNlYXNvbltdKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnNlYXNvbnMgPSBzZWFzb25zXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZXR0aW5ncygpOiBQbHVnaW5TZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5zZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2V0dGluZ3Moc2V0dGluZ3M6IFBsdWdpblNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnNldHRpbmdzID0gc2V0dGluZ3NcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBkYXRhSXNBbGxvd2VkRm9yUHJldmlldygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93ZWRQcmV2aWV3VHlwZXMuaW5jbHVkZXModGhpcy50eXBlKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuU2VyaWVzOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVNlYXNvbi5lcGlzb2Rlcy5sZW5ndGggPj0gdGhpcy5taW5pbXVtRWxlbWVudHNOZWVkZWRcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuTW92aWU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuQm94U2V0OlxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Gb2xkZXI6XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLlZpZGVvOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmllcy5sZW5ndGggPj0gdGhpcy5taW5pbXVtRWxlbWVudHNOZWVkZWRcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBhbGxvd2VkUHJldmlld1R5cGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5FbmFibGVkSXRlbVR5cGVzXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgbWluaW11bUVsZW1lbnRzTmVlZGVkKCk6IG51bWJlciB7XG4gICAgICAgIC8vIFRPRE86IGdldCBmcm9tIHBsdWdpbiBjb25maWcgaW4gdGhlIGZ1dHVyZVxuICAgICAgICByZXR1cm4gMVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtQnlJZChpdGVtSWQ6IHN0cmluZyk6IEJhc2VJdGVtIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuU2VyaWVzOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLmZsYXRNYXAoc2Vhc29uID0+IHNlYXNvbi5lcGlzb2RlcylcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoZXBpc29kZSA9PiBlcGlzb2RlLklkID09PSBpdGVtSWQpXG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkJveFNldDpcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuTW92aWU6XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkZvbGRlcjpcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuVmlkZW86XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW92aWVzLmZpbmQobW92aWUgPT4gbW92aWUuSWQgPT09IGl0ZW1JZClcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVJdGVtKGl0ZW1Ub1VwZGF0ZTogQmFzZUl0ZW0pOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuU2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXNvbjogU2Vhc29uID0gdGhpcy5zZWFzb25zLmZpbmQoc2Vhc29uID0+IHNlYXNvbi5zZWFzb25JZCA9PT0gaXRlbVRvVXBkYXRlLlNlYXNvbklkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4gdGhpcy5zZWFzb25zLmZpbHRlcihzZWFzb24gPT4gc2Vhc29uLnNlYXNvbklkICE9PSBpdGVtVG9VcGRhdGUuU2Vhc29uSWQpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2Vhc29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVwaXNvZGVzOiBbLi4uIHNlYXNvbi5lcGlzb2Rlcy5maWx0ZXIoZXBpc29kZSA9PiBlcGlzb2RlLklkICE9PSBpdGVtVG9VcGRhdGUuSWQpLCBpdGVtVG9VcGRhdGVdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuQm94U2V0OlxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Nb3ZpZTpcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuRm9sZGVyOlxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5WaWRlbzpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmllcyA9IFsuLi4gdGhpcy5tb3ZpZXMuZmlsdGVyKG1vdmllID0+IG1vdmllLklkICE9PSBpdGVtVG9VcGRhdGUuSWQpLCBpdGVtVG9VcGRhdGVdXG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9TZXJ2aWNlcy9Mb2dnZXJcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL1NlcnZpY2VzL0F1dGhTZXJ2aWNlXCI7XG5pbXBvcnQge1ByZXZpZXdCdXR0b25UZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtEYXRhTG9hZGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhTG9hZGVyXCI7XG5pbXBvcnQge0RpYWxvZ0JhY2tkcm9wQ29udGFpbmVyVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvRGlhbG9nQmFja2Ryb3BDb250YWluZXJUZW1wbGF0ZVwiO1xuaW1wb3J0IHtEaWFsb2dDb250YWluZXJUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtMaXN0RWxlbWVudEZhY3Rvcnl9IGZyb20gXCIuL0xpc3RFbGVtZW50RmFjdG9yeVwiO1xuaW1wb3J0IHtQb3B1cFRpdGxlVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlXCI7XG5pbXBvcnQge0RhdGFGZXRjaGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQgeyBQbHVnaW5TZXR0aW5ncyB9IGZyb20gXCIuL01vZGVscy9QbHVnaW5TZXR0aW5nc1wiO1xuXG4vLyBsb2FkIGFuZCBpbmplY3QgaW5QbGF5ZXJQcmV2aWV3LmNzcyBpbnRvIHRoZSBwYWdlXG4vKlxuICogSW5qZWN0IHN0eWxlIHRvIGJlIHVzZWQgZm9yIHRoZSBwcmV2aWV3IHBvcHVwXG4gKi9cbmxldCBpblBsYXllclByZXZpZXdTdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbmluUGxheWVyUHJldmlld1N0eWxlLmlkID0gJ2luUGxheWVyUHJldmlld1N0eWxlJ1xuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgPSBgXG4uc2VsZWN0ZWRMaXN0SXRlbSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLnByZXZpZXdMaXN0SXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucHJldmlld0xpc3RJdGVtQ29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIG1pbi1oZWlnaHQ6IDE1LjV2aDsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByZXZpZXdQb3B1cCB7XG4gICAgYW5pbWF0aW9uOiAxNDBtcyBlYXNlLW91dCAwcyAxIG5vcm1hbCBib3RoIHJ1bm5pbmcgc2NhbGV1cDsgXG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICBtYXJnaW46IDBweDsgXG4gICAgYm90dG9tOiAxLjV2aDsgXG4gICAgbGVmdDogNTB2dzsgXG4gICAgd2lkdGg6IDQ4dnc7XG59XG4ucHJldmlld1BvcHVwVGl0bGUge1xuICAgIG1heC1oZWlnaHQ6IDR2aDtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlciB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbn1cbi5wcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbi5wcmV2aWV3RXBpc29kZUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJldmlld0VwaXNvZGVUaXRsZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucHJldmlld0VwaXNvZGVJbWFnZUNhcmQge1xuICAgIG1heC13aWR0aDogMzAlO1xufVxuLnByZXZpZXdFcGlzb2RlRGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTsgXG4gICAgbWFyZ2luLXRvcDogMWVtOyBcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtOyBcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcmV2aWV3RXBpc29kZURldGFpbHMge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07IFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcbn1cbi5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTsgXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTsgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJsdXI6aG92ZXIge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbn1cbi5wcmV2aWV3RXBpc29kZUltYWdlQ2FyZDpob3ZlciAuYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xufVxuYFxuZG9jdW1lbnQ/LmhlYWQ/LmFwcGVuZENoaWxkKGluUGxheWVyUHJldmlld1N0eWxlKVxuXG4vLyBpbml0IHNlcnZpY2VzIGFuZCBoZWxwZXJzXG5jb25zdCBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoKVxuY29uc3QgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlID0gbmV3IEF1dGhTZXJ2aWNlKClcbmNvbnN0IHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUgPSBuZXcgUHJvZ3JhbURhdGFTdG9yZSgpXG5jb25zdCBkYXRhTG9hZGVyOiBEYXRhTG9hZGVyID0gbmV3IERhdGFMb2FkZXIoYXV0aFNlcnZpY2UpXG5uZXcgRGF0YUZldGNoZXIocHJvZ3JhbURhdGFTdG9yZSwgYXV0aFNlcnZpY2UsIGxvZ2dlcilcbmNvbnN0IHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyID0gbmV3IFBsYXliYWNrSGFuZGxlcihwcm9ncmFtRGF0YVN0b3JlLCBsb2dnZXIpXG5jb25zdCBsaXN0RWxlbWVudEZhY3RvcnkgPSBuZXcgTGlzdEVsZW1lbnRGYWN0b3J5KGRhdGFMb2FkZXIsIHBsYXliYWNrSGFuZGxlciwgcHJvZ3JhbURhdGFTdG9yZSlcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBFbnN1cmUgQXBpQ2xpZW50IGV4aXN0cyBhbmQgdXNlciBpcyBsb2dnZWQgaW5cbiAgICBpZiAodHlwZW9mIHdpbmRvd1snQXBpQ2xpZW50J10gPT09ICd1bmRlZmluZWQnIHx8ICF3aW5kb3dbJ0FwaUNsaWVudCddLmdldEN1cnJlbnRVc2VySWQ/LigpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoaW5pdGlhbGl6ZSwgMzAwKSAvLyBJbmNyZWFzZWQgcmV0cnkgZGVsYXkgc2xpZ2h0bHlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgd2luZG93WydBcGlDbGllbnQnXVxuICAgICAgICAuZ2V0UGx1Z2luQ29uZmlndXJhdGlvbignNzM4MzNkNWYtMGJjYi00NWRjLWFiOGItN2NlNjY4ZjQzNDVkJylcbiAgICAgICAgLnRoZW4oKGNvbmZpZzogUGx1Z2luU2V0dGluZ3MpID0+IHByb2dyYW1EYXRhU3RvcmUuc2V0dGluZ3MgPSBjb25maWcpXG59XG5pbml0aWFsaXplKClcblxuY29uc3QgdmlkZW9QYXRoczogc3RyaW5nW10gPSBbJy92aWRlbyddXG5sZXQgcHJldmlvdXNSb3V0ZVBhdGg6IHN0cmluZyA9IG51bGxcbmxldCBwcmV2aWV3Q29udGFpbmVyTG9hZGVkOiBib29sZWFuID0gZmFsc2VcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdzaG93Jywgdmlld1Nob3dFdmVudEhhbmRsZXIpXG5cbmZ1bmN0aW9uIHZpZXdTaG93RXZlbnRIYW5kbGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZVBhdGg6IHN0cmluZyA9IGdldExvY2F0aW9uUGF0aCgpXG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhdGlvblBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb246IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZUluZGV4OiBudW1iZXIgPSBsb2NhdGlvbi5sYXN0SW5kZXhPZignLycpXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5zdWJzdHJpbmcoY3VycmVudFJvdXRlSW5kZXgpXG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbCBhdHRlbXB0IHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcgb3Igc2NoZWR1bGUgcmV0cmllcy5cbiAgICBhdHRlbXB0TG9hZFZpZGVvVmlldygpXG4gICAgcHJldmlvdXNSb3V0ZVBhdGggPSBjdXJyZW50Um91dGVQYXRoXG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGF0dGVtcHRzIHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcsIHJldHJ5aW5nIHVwIHRvIDMgdGltZXMgaWYgbmVjZXNzYXJ5LlxuICAgIGZ1bmN0aW9uIGF0dGVtcHRMb2FkVmlkZW9WaWV3KHJldHJ5Q291bnQgPSAwKTogdm9pZCB7XG4gICAgICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRSb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICBpZiAocHJvZ3JhbURhdGFTdG9yZS5kYXRhSXNBbGxvd2VkRm9yUHJldmlldykge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcmV2aWV3IGNvbnRhaW5lciBpcyBhbHJlYWR5IGxvYWRlZCBiZWZvcmUgbG9hZGluZ1xuICAgICAgICAgICAgICAgIGlmICghcHJldmlld0NvbnRhaW5lckxvYWRlZCAmJiAhaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRWaWRlb1ZpZXcoKVxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gdHJ1ZSAvLyBTZXQgZmxhZyB0byB0cnVlIGFmdGVyIGxvYWRpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJldHJ5Q291bnQgPCAzKSB7IC8vIFJldHJ5IHVwIHRvIDMgdGltZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBSZXRyeSAjJHtyZXRyeUNvdW50ICsgMX1gKVxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0TG9hZFZpZGVvVmlldyhyZXRyeUNvdW50ICsgMSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwMCkgLy8gV2FpdCAxMCBzZWNvbmRzIGZvciBlYWNoIHJldHJ5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhwcmV2aW91c1JvdXRlUGF0aCkpIHtcbiAgICAgICAgICAgIHVubG9hZFZpZGVvVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgLy8gYWRkIHByZXZpZXcgYnV0dG9uIHRvIHRoZSBwYWdlXG4gICAgICAgIGNvbnN0IHBhcmVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucycpLmxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudDsgLy8gbGFzdEVsZW1lbnRDaGlsZC5wYXJlbnRFbGVtZW50IGlzIHVzZWQgZm9yIGNhc3RpbmcgZnJvbSBFbGVtZW50IHRvIEhUTUxFbGVtZW50XG4gICAgICAgIFxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5Vc2VyUmF0aW5nXCIpKTtcbiAgICAgICAgLy8gaWYgaW5kZXggaXMgaW52YWxpZCB0cnkgdG8gdXNlIHRoZSBvbGQgcG9zaXRpb24gKHVzZWQgaW4gSmVsbHlmaW4gMTAuOC4xMilcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSlcbiAgICAgICAgICAgIGluZGV4ID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmRJbmRleCgoY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9zZFRpbWVUZXh0XCIpKVxuXG4gICAgICAgIGNvbnN0IHByZXZpZXdCdXR0b246IFByZXZpZXdCdXR0b25UZW1wbGF0ZSA9IG5ldyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUocGFyZW50LCBpbmRleClcbiAgICAgICAgcHJldmlld0J1dHRvbi5yZW5kZXIocHJldmlld0J1dHRvbkNsaWNrSGFuZGxlcilcblxuICAgICAgICBmdW5jdGlvbiBwcmV2aWV3QnV0dG9uQ2xpY2tIYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nQmFja2Ryb3A6IERpYWxvZ0JhY2tkcm9wQ29udGFpbmVyVGVtcGxhdGUgPSBuZXcgRGlhbG9nQmFja2Ryb3BDb250YWluZXJUZW1wbGF0ZShkb2N1bWVudC5ib2R5LCBkb2N1bWVudC5ib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICBkaWFsb2dCYWNrZHJvcC5yZW5kZXIoKVxuXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dDb250YWluZXI6IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlID0gbmV3IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlKGRvY3VtZW50LmJvZHksIGRvY3VtZW50LmJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIGRpYWxvZ0NvbnRhaW5lci5yZW5kZXIoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlhbG9nQmFja2Ryb3AuZ2V0RWxlbWVudElkKCkpKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlhbG9nQ29udGFpbmVyLmdldEVsZW1lbnRJZCgpKSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpXG4gICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCIgLy8gcmVtb3ZlIG9sZCBjb250ZW50XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcHVwVGl0bGU6IFBvcHVwVGl0bGVUZW1wbGF0ZSA9IG5ldyBQb3B1cFRpdGxlVGVtcGxhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwRm9jdXNDb250YWluZXInKSwgLTEsIHByb2dyYW1EYXRhU3RvcmUpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnJlbmRlcigoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpXG5cbiAgICAgICAgICAgICAgICAvLyBkZWxldGUgZXBpc29kZSBjb250ZW50IGZvciBhbGwgZXhpc3RpbmcgZXBpc29kZXMgaW4gdGhlIHByZXZpZXcgbGlzdDtcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlU2Vhc29uRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5zZWFzb25zLCBjb250ZW50RGl2LCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZVNlYXNvbi5JbmRleE51bWJlciwgcG9wdXBUaXRsZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHN3aXRjaCAocHJvZ3JhbURhdGFTdG9yZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5TZXJpZXM6XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VGV4dChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZVNlYXNvbi5zZWFzb25OYW1lKVxuICAgICAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUVwaXNvZGVFbGVtZW50cyhwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZVNlYXNvbi5lcGlzb2RlcywgY29udGVudERpdilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLk1vdmllOlxuICAgICAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFRleHQoJycpXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUVwaXNvZGVFbGVtZW50cyhwcm9ncmFtRGF0YVN0b3JlLm1vdmllcy5maWx0ZXIobW92aWUgPT4gbW92aWUuSWQgPT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCksIGNvbnRlbnREaXYpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5WaWRlbzpcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRUZXh0KCcnKVxuICAgICAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVFcGlzb2RlRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5tb3ZpZXMsIGNvbnRlbnREaXYpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Cb3hTZXQ6XG4gICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Gb2xkZXI6XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VGV4dChwcm9ncmFtRGF0YVN0b3JlLmJveFNldE5hbWUpXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlRXBpc29kZUVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUubW92aWVzLCBjb250ZW50RGl2KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIGVwaXNvZGUgdGhhdCBpcyBjdXJyZW50bHkgcGxheWluZ1xuICAgICAgICAgICAgY29udGVudERpdi5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWRMaXN0SXRlbScpLnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVubG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgLy8gQ2xlYXIgb2xkIGRhdGEgYW5kIHJlc2V0IHByZXZpZXdDb250YWluZXJMb2FkZWQgZmxhZ1xuICAgICAgICBhdXRoU2VydmljZS5zZXRBdXRoSGVhZGVyVmFsdWUoXCJcIilcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2dCYWNrZHJvcENvbnRhaW5lclwiKSlcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2dCYWNrZHJvcENvbnRhaW5lclwiKSlcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nQ29udGFpbmVyXCIpKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ0NvbnRhaW5lclwiKSlcbiAgICAgICAgXG4gICAgICAgIHByZXZpZXdDb250YWluZXJMb2FkZWQgPSBmYWxzZSAvLyBSZXNldCBmbGFnIHdoZW4gdW5sb2FkaW5nXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGlzUHJldmlld0J1dHRvbkNyZWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucycpLnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cFByZXZpZXdCdXR0b24nKSAhPT0gbnVsbFxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=