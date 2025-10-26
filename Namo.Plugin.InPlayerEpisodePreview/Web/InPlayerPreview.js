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
                                    <canvas aria-hidden="true" width="20" height="20"
                                            class="blurhash-canvas lazy-hidden"></canvas>
                                    <button id="previewEpisodeImageCard-${this.item.IndexNumber}"
                                            class="cardImageContainer cardContent itemAction lazy blurhashed lazy-image-fadein-fast"
                                            data-action="link"
                                            style="${backgroundImageStyle}">
                                        <div class="innerCardFooter fullInnerCardFooter innerCardFooterClear ${this.item.UserData.PlayedPercentage ? '' : 'hide'}">
                                            <div class="itemProgressBar">
                                                <div class="itemProgressBarForeground"
                                                     style="width:${this.item.UserData.PlayedPercentage}%;"></div>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="cardOverlayContainer itemAction"
                                         data-action="link">
                                        <button id="start-episode-${this.item.IndexNumber}"
                                                is="paper-icon-button-light"
                                                class="cardOverlayButton cardOverlayButton-hover itemAction paper-icon-button-light cardOverlayFab-primary"
                                                data-action="resume">
                                    <span class="material-icons cardOverlayButtonIcon cardOverlayButtonIcon-hover play_arrow"
                                          aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="previewEpisodeDescription">${this.item.Description ?? 'loading...'}</span>
                    </div>
                </div>
            </div>
        `;
    }
    render(clickHandler) {
        let renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
        // add event handler to start the playback of this episode
        let episodeImageCard = document.getElementById(`start-episode-${this.item.IndexNumber}`);
        episodeImageCard.addEventListener('click', () => this.playbackHandler.play(this.item.Id, this.item.UserData.PlaybackPositionTicks));
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
            let resource = args[0];
            const config = args[1] ?? {};
            if (config && config.headers) {
                this.authService.setAuthHeaderValue(config.headers[this.authService.getAuthHeaderKey()] ?? '');
            }
            const url = new URL(resource);
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
                resource = new URL(cleanedURL);
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
class ProgramDataStore {
    _programData;
    constructor() {
        this._programData = {
            userId: '',
            activeMediaSourceId: '',
            boxSetName: '',
            type: undefined,
            movies: [],
            seasons: []
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
        // TODO: get from plugin config in the future
        return [ItemType_1.ItemType.Series, ItemType_1.ItemType.BoxSet, ItemType_1.ItemType.Movie, ItemType_1.ItemType.Folder, ItemType_1.ItemType.Video];
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
inPlayerPreviewStyle.textContent += '.previewEpisodeDescription {margin-left: 0.5em; margin-top: 1em; margin-right: 1.5em; display: block;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeDetails {margin-left: 1em; justify-content: start !important;}';
document?.head?.appendChild(inPlayerPreviewStyle);
// init services and helpers
const logger = new Logger_1.Logger();
const authService = new AuthService_1.AuthService();
const programDataStore = new ProgramDataStore_1.ProgramDataStore();
const dataLoader = new DataLoader_1.DataLoader(authService);
new DataFetcher_1.DataFetcher(programDataStore, authService, logger);
const playbackHandler = new PlaybackHandler_1.PlaybackHandler(programDataStore, logger);
const listElementFactory = new ListElementFactory_1.ListElementFactory(dataLoader, playbackHandler, programDataStore);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovLy8uL1dlYi9Db21wb25lbnRzL0Jhc2VUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9EaWFsb2dCYWNrZHJvcENvbnRhaW5lclRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0VwaXNvZGVEZXRhaWxzLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUG9wdXBDb250ZW50Q29udGFpbmVyVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUG9wdXBGb2N1c0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvUGxheVN0YXRlSWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1NlYXNvbkxpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0VuZHBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTGlzdEVsZW1lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvSXRlbVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0F1dGhTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9EYXRhRmV0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvRGF0YUxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL1dlYi9JblBsYXllclByZXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VUZW1wbGF0ZSB7XG4gICAgLypcbiAgICAgKiB0aGUgSFRNTCBiYXNlZCBJRCBvZiB0aGUgbmV3IGdlbmVyYXRlZCBFbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBlbGVtZW50SWQ6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHByaXZhdGUgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHsgfVxuXG4gICAgcHVibGljIGdldENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb25BZnRlckluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uQWZ0ZXJJbmRleDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0RWxlbWVudElkKGVsZW1lbnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbGVtZW50SWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudElkO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuZ2V0RWxlbWVudElkKCl9YCk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IHN0cmluZztcblxuICAgIGFic3RyYWN0IHJlbmRlciguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogdm9pZDtcblxuICAgIHByb3RlY3RlZCBhZGRFbGVtZW50VG9Db250YWluZXIoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIGlmIHBvc2l0aW9uIGlzIG5lZ2F0aXZlXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpIDwgMCAmJiB0aGlzLmdldENvbnRhaW5lcigpLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5maXJzdEVsZW1lbnRDaGlsZC5iZWZvcmUodGhpcy5zdHJpbmdUb05vZGUodGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgRWxlbWVudCBpZiBjb250YWluZXIgaXMgZW1wdHlcbiAgICAgICAgaWYgKCF0aGlzLmdldENvbnRhaW5lcigpLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5pbm5lckhUTUwgPSB0aGlzLmdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5sYXN0RWxlbWVudENoaWxkXG4gICAgICAgIGlmICh0aGlzLmdldENvbnRhaW5lcigpLmNoaWxkcmVuLmxlbmd0aCA+IHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgJiYgdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSA+PSAwKVxuICAgICAgICAgICAgY2hpbGRCZWZvcmUgPSB0aGlzLmdldENvbnRhaW5lcigpLmNoaWxkcmVuW3RoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCldO1xuICAgICAgICBcbiAgICAgICAgY2hpbGRCZWZvcmUuYWZ0ZXIodGhpcy5zdHJpbmdUb05vZGUodGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKSkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBzdHJpbmdUb05vZGUodGVtcGxhdGVTdHJpbmc6IHN0cmluZyk6IE5vZGUge1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gdGVtcGxhdGVTdHJpbmc7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlhbG9nQmFja2Ryb3BDb250YWluZXJUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgnZGlhbG9nQmFja2Ryb3BDb250YWluZXInKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiAgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJkaWFsb2dCYWNrZHJvcCBkaWFsb2dCYWNrZHJvcE9wZW5lZFwiLz5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1BvcHVwRm9jdXNDb250YWluZXJ9IGZyb20gXCIuL1BvcHVwRm9jdXNDb250YWluZXJcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdkaWFsb2dDb250YWluZXInKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgdGVtcENvbnRhaW5lckRpdjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGZvY3VzQ29udGFpbmVyRGl2OiBQb3B1cEZvY3VzQ29udGFpbmVyID0gbmV3IFBvcHVwRm9jdXNDb250YWluZXIodGVtcENvbnRhaW5lckRpdiwgLTEpO1xuICAgICAgICBmb2N1c0NvbnRhaW5lckRpdi5yZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImRpYWxvZ0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICR7dGVtcENvbnRhaW5lckRpdi5pbm5lckhUTUx9XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoZGlhbG9nQ29udGFpbmVyQ2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBsZXQgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogYW55ID0+IGRpYWxvZ0NvbnRhaW5lckNsaWNrSGFuZGxlcihlKSk7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7QmFzZUl0ZW19IGZyb20gXCIuLi9Nb2RlbHMvRXBpc29kZVwiO1xuXG5leHBvcnQgY2xhc3MgRXBpc29kZURldGFpbHNUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZXBpc29kZTogQmFzZUl0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgZXBpc29kZS0ke2VwaXNvZGUuSW5kZXhOdW1iZXJ9YCk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX0tZGV0YWlsc1wiIGNsYXNzPVwiaXRlbU1pc2NJbmZvIGl0ZW1NaXNjSW5mby1wcmltYXJ5IHByZXZpZXdFcGlzb2RlRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5lcGlzb2RlLlByZW1pZXJlRGF0ZSA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAkeyhuZXcgRGF0ZSh0aGlzLmVwaXNvZGUuUHJlbWllcmVEYXRlKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuZ2V0TG9jYWxlKCkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPiR7dGhpcy5mb3JtYXRSdW5UaW1lKHRoaXMuZXBpc29kZS5SdW5UaW1lVGlja3MpfTwvZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5lcGlzb2RlLkNvbW11bml0eVJhdGluZyA/IGA8ZGl2IGNsYXNzPVwic3RhclJhdGluZ0NvbnRhaW5lciBtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgc3Rhckljb24gc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmVwaXNvZGUuQ29tbXVuaXR5UmF0aW5nLnRvRml4ZWQoMSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICR7dGhpcy5lcGlzb2RlLkNyaXRpY1JhdGluZyA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbSBtZWRpYUluZm9Dcml0aWNSYXRpbmcgJHt0aGlzLmVwaXNvZGUuQ3JpdGljUmF0aW5nID49IDYwID8gJ21lZGlhSW5mb0NyaXRpY1JhdGluZ0ZyZXNoJyA6ICdtZWRpYUluZm9Dcml0aWNSYXRpbmdSb3R0ZW4nfVwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuZXBpc29kZS5Dcml0aWNSYXRpbmd9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmRzQXQgbWVkaWFJbmZvSXRlbVwiPiR7dGhpcy5mb3JtYXRFbmRUaW1lKHRoaXMuZXBpc29kZS5SdW5UaW1lVGlja3MsIHRoaXMuZXBpc29kZS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBnZXRMb2NhbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5sYW5ndWFnZXNcbiAgICAgICAgICAgID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXSAvLyBAdHMtaWdub3JlIGZvciB1c2VyTGFuZ3VhZ2UgKHRoaXMgYWRkcyBzdXBwb3J0IGZvciBJRSkgVE9ETzogTW92ZSB0byBpbnRlcmZhY2VcbiAgICAgICAgICAgIDogKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBmb3JtYXRSdW5UaW1lKHRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBmb3JtYXQgdGhlIHRpY2tzIHRvIGEgc3RyaW5nIHdpdGggbWludXRlcyBhbmQgaG91cnNcbiAgICAgICAgdGlja3MgLz0gMTAwMDA7IC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCk7XG4gICAgICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgICAgIGxldCBob3Vyc1N0cmluZzogc3RyaW5nID0gaG91cnMgPiAwID8gYCR7aG91cnN9aCBgIDogJyc7XG4gICAgICAgIHJldHVybiBgJHtob3Vyc1N0cmluZ30ke21pbnV0ZXN9bWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRFbmRUaW1lKHJ1bnRpbWVUaWNrczogbnVtYmVyLCBwbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIHJ1bnRpbWVUaWNrcyAvPSAxMDAwMDtcbiAgICAgICAgcGxheWJhY2tQb3NpdGlvblRpY2tzIC89IDEwMDAwO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRpY2tzOiBudW1iZXIgPSBEYXRlLm5vdygpICsgKHJ1bnRpbWVUaWNrcyk7XG4gICAgICAgIHRpY2tzIC09IChuZXcgRGF0ZSgpKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAgKiAxMDAwOyAvLyBhZGp1c3QgZm9yIHRpbWV6b25lXG4gICAgICAgIHRpY2tzIC09IHBsYXliYWNrUG9zaXRpb25UaWNrczsgLy8gc3VidHJhY3QgdGhlIHBsYXliYWNrIHBvc2l0aW9uXG4gICAgICAgIFxuICAgICAgICBsZXQgaG91cnM6IHN0cmluZyA9IHRoaXMuemVyb1BhZChNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyAzNjAwKSAlIDI0KSk7XG4gICAgICAgIGxldCBtaW51dGVzOiBzdHJpbmcgPSB0aGlzLnplcm9QYWQoTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gNjApICUgNjApKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBgRW5kcyBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSB6ZXJvUGFkKG51bTogbnVtYmVyLCBwbGFjZXM6IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gU3RyaW5nKG51bSkucGFkU3RhcnQocGxhY2VzLCAnMCcpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7RmF2b3JpdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZVwiXG5pbXBvcnQge1BsYXlTdGF0ZUljb25UZW1wbGF0ZX0gZnJvbSBcIi4vUXVpY2tBY3Rpb25zL1BsYXlTdGF0ZUljb25UZW1wbGF0ZVwiXG5pbXBvcnQge1BsYXliYWNrSGFuZGxlcn0gZnJvbSBcIi4uL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiXG5pbXBvcnQge0VwaXNvZGVEZXRhaWxzVGVtcGxhdGV9IGZyb20gXCIuL0VwaXNvZGVEZXRhaWxzXCJcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIlxuaW1wb3J0IHtCYXNlSXRlbX0gZnJvbSBcIi4uL01vZGVscy9FcGlzb2RlXCJcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIlxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBxdWlja0FjdGlvbkNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgICBwcml2YXRlIHBsYXlTdGF0ZUljb246IFBsYXlTdGF0ZUljb25UZW1wbGF0ZVxuICAgIHByaXZhdGUgZmF2b3JpdGVJY29uOiBGYXZvcml0ZUljb25UZW1wbGF0ZVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IEJhc2VJdGVtLCBwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBlcGlzb2RlLSR7aXRlbS5JbmRleE51bWJlcn1gKVxuXG4gICAgICAgIC8vIGNyZWF0ZSB0ZW1wIHF1aWNrIGFjdGlvbiBjb250YWluZXJcbiAgICAgICAgdGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24gPSBuZXcgUGxheVN0YXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIC0xLCB0aGlzLml0ZW0pXG4gICAgICAgIHRoaXMuZmF2b3JpdGVJY29uID0gbmV3IEZhdm9yaXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIDAsIHRoaXMuaXRlbSlcbiAgICB9XG4gICAgXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gYWRkIHF1aWNrIGFjdGlvbnNcbiAgICAgICAgdGhpcy5wbGF5U3RhdGVJY29uLnJlbmRlcigpXG4gICAgICAgIHRoaXMuZmF2b3JpdGVJY29uLnJlbmRlcigpXG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgZXBpc29kZSBkZXRhaWxzL2luZm9cbiAgICAgICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBkZXRhaWxzOiBFcGlzb2RlRGV0YWlsc1RlbXBsYXRlID0gbmV3IEVwaXNvZGVEZXRhaWxzVGVtcGxhdGUoZGV0YWlsc0NvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSlcbiAgICAgICAgZGV0YWlscy5yZW5kZXIoKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEltYWdlU3R5bGU6IHN0cmluZyA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL0l0ZW1zLyR7dGhpcy5pdGVtLklkfS9JbWFnZXMvUHJpbWFyeT90YWc9JHt0aGlzLml0ZW0uSW1hZ2VUYWdzLlByaW1hcnl9JylgXG4gICAgICAgIFxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdEl0ZW0gbGlzdEl0ZW0tYnV0dG9uIGFjdGlvblNoZWV0TWVudUl0ZW0gZW1ieS1idXR0b24gcHJldmlld0xpc3RJdGVtXCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbS5JbmRleE51bWJlcn1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0VwaXNvZGVDb250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld0VwaXNvZGVUaXRsZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5JbmRleE51bWJlciAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSAhPT0gSXRlbVR5cGUuTW92aWVcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPyBgPHNwYW4+JHt0aGlzLml0ZW0uSW5kZXhOdW1iZXJ9PC9zcGFuPmAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuaXRlbS5OYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMucXVpY2tBY3Rpb25Db250YWluZXIuaW5uZXJIVE1MfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3TGlzdEl0ZW1Db250ZW50IGhpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtkZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG92ZXJmbG93QmFja2Ryb3BDYXJkIGNhcmQtaG92ZXJhYmxlIGNhcmQtd2l0aHVzZXJkYXRhIHByZXZpZXdFcGlzb2RlSW1hZ2VDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRCb3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRTY2FsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRQYWRkZXIgY2FyZFBhZGRlci1vdmVyZmxvd0JhY2tkcm9wIGxhenktaGlkZGVuLWNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkSW1hZ2VJY29uIG1hdGVyaWFsLWljb25zIHR2XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmx1cmhhc2gtY2FudmFzIGxhenktaGlkZGVuXCI+PC9jYW52YXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlld0VwaXNvZGVJbWFnZUNhcmQtJHt0aGlzLml0ZW0uSW5kZXhOdW1iZXJ9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkSW1hZ2VDb250YWluZXIgY2FyZENvbnRlbnQgaXRlbUFjdGlvbiBsYXp5IGJsdXJoYXNoZWQgbGF6eS1pbWFnZS1mYWRlaW4tZmFzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiJHtiYWNrZ3JvdW5kSW1hZ2VTdHlsZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJDYXJkRm9vdGVyIGZ1bGxJbm5lckNhcmRGb290ZXIgaW5uZXJDYXJkRm9vdGVyQ2xlYXIgJHt0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZSA/ICcnIDogJ2hpZGUnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByb2dyZXNzQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByb2dyZXNzQmFyRm9yZWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6JHt0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZX0lO1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRPdmVybGF5Q29udGFpbmVyIGl0ZW1BY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3RhcnQtZXBpc29kZS0ke3RoaXMuaXRlbS5JbmRleE51bWJlcn1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5QnV0dG9uIGNhcmRPdmVybGF5QnV0dG9uLWhvdmVyIGl0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgY2FyZE92ZXJsYXlGYWItcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cInJlc3VtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjYXJkT3ZlcmxheUJ1dHRvbkljb24gY2FyZE92ZXJsYXlCdXR0b25JY29uLWhvdmVyIHBsYXlfYXJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZXZpZXdFcGlzb2RlRGVzY3JpcHRpb25cIj4ke3RoaXMuaXRlbS5EZXNjcmlwdGlvbiA/PyAnbG9hZGluZy4uLid9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGxldCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xpY2tIYW5kbGVyKGUpKVxuICAgICAgICBcbiAgICAgICAgLy8gYWRkIGV2ZW50IGhhbmRsZXIgdG8gc3RhcnQgdGhlIHBsYXliYWNrIG9mIHRoaXMgZXBpc29kZVxuICAgICAgICBsZXQgZXBpc29kZUltYWdlQ2FyZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnQtZXBpc29kZS0ke3RoaXMuaXRlbS5JbmRleE51bWJlcn1gKVxuICAgICAgICBlcGlzb2RlSW1hZ2VDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wbGF5YmFja0hhbmRsZXIucGxheSh0aGlzLml0ZW0uSWQsIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpKVxuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cENvbnRlbnRDb250YWluZXJUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJhY3Rpb25TaGVldFNjcm9sbGVyIHNjcm9sbFkgcHJldmlld1BvcHVwU2Nyb2xsZXJcIi8+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1BvcHVwQ29udGVudENvbnRhaW5lclRlbXBsYXRlfSBmcm9tIFwiLi9Qb3B1cENvbnRlbnRDb250YWluZXJUZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBGb2N1c0NvbnRhaW5lciBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBGb2N1c0NvbnRhaW5lcicpO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCB0ZW1wQ29udGFpbmVyRGl2OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcG9wdXBDb250ZW50Q29udGFpbmVyOiBQb3B1cENvbnRlbnRDb250YWluZXJUZW1wbGF0ZSA9IG5ldyBQb3B1cENvbnRlbnRDb250YWluZXJUZW1wbGF0ZSh0ZW1wQ29udGFpbmVyRGl2LCAtMSk7XG4gICAgICAgIHBvcHVwQ29udGVudENvbnRhaW5lci5yZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImZvY3VzY29udGFpbmVyIGRpYWxvZyBhY3Rpb25zaGVldC1ub3QtZnVsbHNjcmVlbiBhY3Rpb25TaGVldCBjZW50ZXJlZERpYWxvZyBvcGVuZWQgcHJldmlld1BvcHVwIGFjdGlvblNoZWV0Q29udGVudFwiIGRhdGEtaGlzdG9yeT1cInRydWVcIiBkYXRhLXJlbW92ZW9uY2xvc2U9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgJHt0ZW1wQ29udGFpbmVyRGl2LmlubmVySFRNTH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcblxuZXhwb3J0IGNsYXNzIFBvcHVwVGl0bGVUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BvcHVwVGl0bGVDb250YWluZXInKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwiYWN0aW9uU2hlZXRUaXRsZSBsaXN0SXRlbSBwcmV2aWV3UG9wdXBUaXRsZVwiPlxuICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlID09PSBJdGVtVHlwZS5TZXJpZXMgJiYgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnNlYXNvbnMubGVuZ3RoID4gMSA/IFxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJhY3Rpb25zaGVldE1lbnVJdGVtSWNvbiBsaXN0SXRlbUljb24gbGlzdEl0ZW1JY29uLXRyYW5zcGFyZW50IG1hdGVyaWFsLWljb25zIGtleWJvYXJkX2JhY2tzcGFjZVwiPjwvc3Bhbj4nIDogXG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImFjdGlvblNoZWV0VGl0bGVcIj48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuU2VyaWVzOlxuICAgICAgICAgICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbGlja0hhbmRsZXIoZSkpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuQm94U2V0OlxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Gb2xkZXI6XG4gICAgICAgICAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lclRleHQgPSB0ZXh0XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXRWaXNpYmxlKGlzVmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKVxuICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICByZW5kZXJlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgUHJldmlld0J1dHRvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwb3B1cFByZXZpZXdCdXR0b24nKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwiYXV0b1NpemUgcGFwZXItaWNvbi1idXR0b24tbGlnaHRcIiBpcz1cInBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFcGlzb2RlIFByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICA8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT5cbiAgICAgICAgICAgICAgICA8c3ZnIGlkPVwic3ZnMVwiXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNiA0XCJcbiAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJsYXllcjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdDQ3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc2NDY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMuNzU2ODY3NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyLjE2OTM2NjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjAuMjM4MjMzMDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjEuODI1NzMzNVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwicmVjdDQ3LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40NzY1OTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtIDEuMDI5MTQzNywxLjAzMjA0ODIgaCAzLjc1Mjg5OTEgdiAyLjE3MjIzOTQgbCAwLjAwNjc2LC0yLjE1NzI1OTUgelwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwicmVjdDQ3LThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40Nzc0Mjc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtIDEuODIyODYxNCwwLjIzODcxMzM2IGggMy43NTkyNTkgViAyLjQxMDEyMTEgbCAtMC4wMDY4LC0yLjE3MTQwNzc0IHpcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBsZXQgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiBhbnkgPT4gY2xpY2tIYW5kbGVyKCkpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge0Jhc2VJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL0VwaXNvZGVcIlxuXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVJY29uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGVwaXNvZGU6IEJhc2VJdGVtKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgnZmF2b3JpdGVCdXR0b24tJyArIGVwaXNvZGUuSW5kZXhOdW1iZXIpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICAgICBpcz1cImVtYnktcmF0aW5nYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbUFjdGlvbiBwYXBlci1pY29uLWJ1dHRvbi1saWdodCBlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuZXBpc29kZT8uSWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zZXJ2ZXJpZD1cIiR7dGhpcy5lcGlzb2RlPy5TZXJ2ZXJJZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWl0ZW10eXBlPVwiRXBpc29kZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbGlrZXM9XCJcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlzZmF2b3JpdGU9XCIke3RoaXMuZXBpc29kZT8uVXNlckRhdGE/LklzRmF2b3JpdGUgPz8gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBmYXZvcml0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge0Jhc2VJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL0VwaXNvZGVcIlxuXG5leHBvcnQgY2xhc3MgUGxheVN0YXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBlcGlzb2RlOiBCYXNlSXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BsYXlTdGF0ZUJ1dHRvbi0nICsgdGhpcy5lcGlzb2RlLkluZGV4TnVtYmVyKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXBsYXlzdGF0ZWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLmVwaXNvZGU/LklkID8/ICcnfVwiIFxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNlcnZlcmlkPVwiJHt0aGlzLmVwaXNvZGU/LlNlcnZlcklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbXR5cGU9XCJFcGlzb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1saWtlcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGxheWVkPVwiJHt0aGlzLmVwaXNvZGU/LlVzZXJEYXRhPy5QbGF5ZWQgPz8gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNYXJrIHBsYXllZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2hlY2sgcGxheXN0YXRlYnV0dG9uLWljb24tJHt0aGlzLmVwaXNvZGU/LlVzZXJEYXRhPy5QbGF5ZWQgPyBcInBsYXllZFwiIDogXCJ1bnBsYXllZFwifVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1NlYXNvbn0gZnJvbSBcIi4uL01vZGVscy9TZWFzb25cIjtcblxuZXhwb3J0IGNsYXNzIFNlYXNvbkxpc3RFbGVtZW50VGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIHNlYXNvbjogU2Vhc29uLCBwcml2YXRlIGlzQ3VycmVudFNlYXNvbjogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBlcGlzb2RlLSR7c2Vhc29uLnNlYXNvbklkfWApO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5zZWFzb24uc2Vhc29uSWR9XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpc3RJdGVtIHByZXZpZXdFcGlzb2RlVGl0bGVcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiJHt0aGlzLmlzQ3VycmVudFNlYXNvbiA/IFwibWF0ZXJpYWwtaWNvbnMgY2hlY2tcIiA6IFwiXCJ9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdEl0ZW1Cb2R5IGFjdGlvbnNoZWV0TGlzdEl0ZW1Cb2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuc2Vhc29uLnNlYXNvbk5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBsZXQgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiBjbGlja0hhbmRsZXIoZSkpO1xuICAgIH1cbn0iLCJleHBvcnQgZW51bSBFbmRwb2ludHMge1xuICAgIEJBU0UgPSBcIkluUGxheWVyUHJldmlld1wiLFxuICAgIEVQSVNPREVfSU5GTyA9IFwiL1VzZXJzL3t1c2VySWR9L0l0ZW1zL3tlcGlzb2RlSWR9XCIsXG4gICAgRVBJU09ERV9ERVNDUklQVElPTiA9IFwiL0l0ZW1zL3tlcGlzb2RlSWR9XCIsXG4gICAgUExBWV9NRURJQSA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vSXRlbXMve2VwaXNvZGVJZH0vUGxheS97dGlja3N9XCJcbn0iLCJpbXBvcnQge0xpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHtCYXNlSXRlbX0gZnJvbSBcIi4vTW9kZWxzL0VwaXNvZGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtTZWFzb259IGZyb20gXCIuL01vZGVscy9TZWFzb25cIjtcbmltcG9ydCB7U2Vhc29uTGlzdEVsZW1lbnRUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9TZWFzb25MaXN0RWxlbWVudFRlbXBsYXRlXCI7XG5pbXBvcnQge1BvcHVwVGl0bGVUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGVcIjtcbmltcG9ydCB7RGF0YUxvYWRlcn0gZnJvbSBcIi4vU2VydmljZXMvRGF0YUxvYWRlclwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFMb2FkZXI6IERhdGFMb2FkZXIsIHByaXZhdGUgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgY3JlYXRlRXBpc29kZUVsZW1lbnRzKGVwaXNvZGVzOiBCYXNlSXRlbVtdLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGVwaXNvZGVzLnNvcnQoKGEsIGIpID0+IGEuSW5kZXhOdW1iZXIgLSBiLkluZGV4TnVtYmVyKVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGVwaXNvZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlcGlzb2RlID0gbmV3IExpc3RFbGVtZW50VGVtcGxhdGUocGFyZW50RGl2LCBpLCBlcGlzb2Rlc1tpXSwgdGhpcy5wbGF5YmFja0hhbmRsZXIsIHRoaXMucHJvZ3JhbURhdGFTdG9yZSk7XG4gICAgICAgICAgICBlcGlzb2RlLnJlbmRlcigoZTogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gaGlkZSBlcGlzb2RlIGNvbnRlbnQgZm9yIGFsbCBleGlzdGluZyBlcGlzb2RlcyBpbiB0aGUgcHJldmlldyBsaXN0XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50XCIpLmZvckVhY2goKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGVwaXNvZGVDb250YWluZXI6IEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7ZXBpc29kZXNbaV0uSW5kZXhOdW1iZXJ9XCJdYCkucXVlcnlTZWxlY3RvcignLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBsb2FkIGVwaXNvZGUgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBpZiAoIWVwaXNvZGVzW2ldLkRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3Q6IFhNTEh0dHBSZXF1ZXN0ID0gdGhpcy5kYXRhTG9hZGVyLmxvYWRFcGlzb2RlRGVzY3JpcHRpb24oZXBpc29kZXNbaV0uSWQsICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVwaXNvZGVzW2ldLkRlc2NyaXB0aW9uID0gcmVxdWVzdC5yZXNwb25zZT8uRGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbShlcGlzb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcGlzb2RlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3RXBpc29kZURlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBlcGlzb2Rlc1tpXS5EZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHNob3cgZXBpc29kZSBjb250ZW50IGZvciB0aGUgc2VsZWN0ZWQgZXBpc29kZVxuICAgICAgICAgICAgICAgIGVwaXNvZGVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGVwaXNvZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgc2VsZWN0ZWQgZXBpc29kZVxuICAgICAgICAgICAgICAgIGVwaXNvZGVDb250YWluZXIucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGVwaXNvZGVzW2ldLklkID09PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVwaXNvZGVOb2RlOiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2VwaXNvZGVzW2ldLkluZGV4TnVtYmVyfVwiXWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gcHJlbG9hZCBlcGlzb2RlIGRlc2NyaXB0aW9uIGZvciB0aGUgY3VycmVudGx5IHBsYXlpbmcgZXBpc29kZVxuICAgICAgICAgICAgICAgIGlmICghZXBpc29kZXNbaV0uRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdDogWE1MSHR0cFJlcXVlc3QgPSB0aGlzLmRhdGFMb2FkZXIubG9hZEVwaXNvZGVEZXNjcmlwdGlvbihlcGlzb2Rlc1tpXS5JZCwgKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXBpc29kZXNbaV0uRGVzY3JpcHRpb24gPSByZXF1ZXN0LnJlc3BvbnNlPy5EZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKGVwaXNvZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVwaXNvZGVOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3RXBpc29kZURlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBlcGlzb2Rlc1tpXS5EZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGVwaXNvZGVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBlcGlzb2RlTm9kZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZExpc3RJdGVtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGNyZWF0ZVNlYXNvbkVsZW1lbnRzKHNlYXNvbnM6IFNlYXNvbltdLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50LCBjdXJyZW50U2Vhc29uSW5kZXg6IG51bWJlciwgdGl0bGVDb250YWluZXI6IFBvcHVwVGl0bGVUZW1wbGF0ZSk6IHZvaWQge1xuICAgICAgICBzZWFzb25zLnNvcnQoKGEsIGIpID0+IGEuSW5kZXhOdW1iZXIgLSBiLkluZGV4TnVtYmVyKVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHNlYXNvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNlYXNvbiA9IG5ldyBTZWFzb25MaXN0RWxlbWVudFRlbXBsYXRlKHBhcmVudERpdiwgaSwgc2Vhc29uc1tpXSwgc2Vhc29uc1tpXS5JbmRleE51bWJlciA9PT0gY3VycmVudFNlYXNvbkluZGV4KTtcbiAgICAgICAgICAgIHNlYXNvbi5yZW5kZXIoKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFRleHQoc2Vhc29uc1tpXS5zZWFzb25OYW1lKTtcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHBhcmVudERpdi5pbm5lckhUTUwgPSBcIlwiOyAvLyByZW1vdmUgb2xkIGNvbnRlbnRcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVwaXNvZGVFbGVtZW50cyhzZWFzb25zW2ldLmVwaXNvZGVzLCBwYXJlbnREaXYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGVudW0gSXRlbVR5cGUge1xuICAgIEFnZ3JlZ2F0ZUZvbGRlcixcbiAgICBBdWRpbyxcbiAgICBBdWRpb0Jvb2ssXG4gICAgQmFzZVBsdWdpbkZvbGRlcixcbiAgICBCb29rLFxuICAgIEJveFNldCxcbiAgICBDaGFubmVsLFxuICAgIENoYW5uZWxGb2xkZXJJdGVtLFxuICAgIENvbGxlY3Rpb25Gb2xkZXIsXG4gICAgRXBpc29kZSxcbiAgICBGb2xkZXIsXG4gICAgR2VucmUsXG4gICAgTWFudWFsUGxheWxpc3RzRm9sZGVyLFxuICAgIE1vdmllLFxuICAgIExpdmVUdkNoYW5uZWwsXG4gICAgTGl2ZVR2UHJvZ3JhbSxcbiAgICBNdXNpY0FsYnVtLFxuICAgIE11c2ljQXJ0aXN0LFxuICAgIE11c2ljR2VucmUsXG4gICAgTXVzaWNWaWRlbyxcbiAgICBQZXJzb24sXG4gICAgUGhvdG8sXG4gICAgUGhvdG9BbGJ1bSxcbiAgICBQbGF5bGlzdCxcbiAgICBQbGF5bGlzdHNGb2xkZXIsXG4gICAgUHJvZ3JhbSxcbiAgICBSZWNvcmRpbmcsXG4gICAgU2Vhc29uLFxuICAgIFNlcmllcyxcbiAgICBTdHVkaW8sXG4gICAgVHJhaWxlcixcbiAgICBUdkNoYW5uZWwsXG4gICAgVHZQcm9ncmFtLFxuICAgIFVzZXJSb290Rm9sZGVyLFxuICAgIFVzZXJWaWV3LFxuICAgIFZpZGVvLFxuICAgIFllYXJcbn0iLCJleHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F1dGhIZWFkZXI6IHN0cmluZyA9ICdBdXRob3JpemF0aW9uJztcbiAgICBwcml2YXRlIF9hdXRoSGVhZGVyVmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEF1dGhIZWFkZXJLZXkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhIZWFkZXI7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgZ2V0QXV0aEhlYWRlclZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoSGVhZGVyVmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEF1dGhIZWFkZXJWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2F1dGhIZWFkZXJWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRBdXRoSGVhZGVySW50b0h0dHBSZXF1ZXN0KHJlcXVlc3Q6IFhNTEh0dHBSZXF1ZXN0KTogdm9pZCB7XG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcih0aGlzLl9hdXRoSGVhZGVyLCB0aGlzLmdldEF1dGhIZWFkZXJWYWx1ZSgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL0F1dGhTZXJ2aWNlXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vTG9nZ2VyXCI7XG5pbXBvcnQge0Jhc2VJdGVtLCBJdGVtRHRvfSBmcm9tIFwiLi4vTW9kZWxzL0VwaXNvZGVcIjtcbmltcG9ydCB7U2Vhc29ufSBmcm9tIFwiLi4vTW9kZWxzL1NlYXNvblwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHtQbGF5YmFja1Byb2dyZXNzSW5mb30gZnJvbSBcIi4uL01vZGVscy9QbGF5YmFja1Byb2dyZXNzSW5mb1wiO1xuXG4vKipcbiAqIFRoZSBjbGFzc2VzIHdoaWNoIGRlcml2ZXMgZnJvbSB0aGlzIGludGVyZmFjZSwgd2lsbCBwcm92aWRlIHRoZSBmdW5jdGlvbmFsaXR5IHRvIGhhbmRsZSB0aGUgZGF0YSBpbnB1dCBmcm9tIHRoZSBzZXJ2ZXIgaWYgdGhlIFBsYXliYWNrU3RhdGUgaXMgY2hhbmdlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhdGFGZXRjaGVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBuZXh0RGF0YUlzQ2hpbGREYXRhOiBib29sZWFuID0gZmFsc2VcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7XG4gICAgICAgIGNvbnN0IHtmZXRjaDogb3JpZ2luYWxGZXRjaH0gPSB3aW5kb3dcbiAgICAgICAgd2luZG93LmZldGNoID0gYXN5bmMgKC4uLmFyZ3MpOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzb3VyY2U6IFVSTCA9IGFyZ3NbMF0gYXMgVVJMXG4gICAgICAgICAgICBjb25zdCBjb25maWc6IFJlcXVlc3RJbml0ID0gYXJnc1sxXSA/PyB7fVxuXG4gICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRBdXRoSGVhZGVyVmFsdWUoY29uZmlnLmhlYWRlcnNbdGhpcy5hdXRoU2VydmljZS5nZXRBdXRoSGVhZGVyS2V5KCldID8/ICcnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB1cmw6IFVSTCA9IG5ldyBVUkwocmVzb3VyY2UpO1xuICAgICAgICAgICAgY29uc3QgdXJsUGF0aG5hbWU6IHN0cmluZyA9IHVybC5wYXRobmFtZTtcblxuICAgICAgICAgICAgLy8gUHJvY2VzcyBkYXRhIGZyb20gUE9TVCByZXF1ZXN0c1xuICAgICAgICAgICAgLy8gRW5kcG9pbnQ6IC9TZXNzaW9ucy9QbGF5aW5nXG4gICAgICAgICAgICBpZiAoY29uZmlnLmJvZHkgJiYgdHlwZW9mIGNvbmZpZy5ib2R5ID09PSAnc3RyaW5nJyAmJiB1cmxQYXRobmFtZS5pbmNsdWRlcygnU2Vzc2lvbnMvUGxheWluZycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWluZ0luZm86IFBsYXliYWNrUHJvZ3Jlc3NJbmZvID0gSlNPTi5wYXJzZShjb25maWcuYm9keSlcblxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIG1lZGlhIGlkIG9mIHRoZSBjdXJyZW50bHkgcGxheWVkIHZpZGVvXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkICE9PSBwbGF5aW5nSW5mby5NZWRpYVNvdXJjZUlkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCA9IHBsYXlpbmdJbmZvLk1lZGlhU291cmNlSWRcblxuICAgICAgICAgICAgICAgIC8vIEVuZHBvaW50OiAvU2Vzc2lvbnMvUGxheWluZy9Qcm9ncmVzc1xuICAgICAgICAgICAgICAgIGlmICh1cmxQYXRobmFtZS5pbmNsdWRlcygnUHJvZ3Jlc3MnKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHBsYXliYWNrIHByb2dyZXNzIG9mIHRoZSBjdXJyZW50bHkgcGxheWVkIHZpZGVvXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVwaXNvZGU6IEJhc2VJdGVtID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKHBsYXlpbmdJbmZvLk1lZGlhU291cmNlSWQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcGlzb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXBpc29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyRGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5lcGlzb2RlLlVzZXJEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IHBsYXlpbmdJbmZvLlBvc2l0aW9uVGlja3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IDEwMCAvIGVwaXNvZGUuUnVuVGltZVRpY2tzICogcGxheWluZ0luZm8uUG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVkOiBlcGlzb2RlLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2UgPiA5MCAvLyA5MCBpcyB0aGUgZGVmYXVsdCBwZXJjZW50YWdlIGZvciB3YXRjaGVkIGVwaXNvZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVybFBhdGhuYW1lLmluY2x1ZGVzKCdFcGlzb2RlcycpKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG5ldyAnc3RhcnRJdGVtSWQnIGFuZCAnbGltaXQnIHF1ZXJ5IHBhcmFtZXRlciwgdG8gc3RpbGwgZ2V0IHRoZSBmdWxsIGxpc3Qgb2YgZXBpc29kZXNcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbmVkVVJMID0gdXJsLmhyZWYucmVwbGFjZSgvc3RhcnRJdGVtSWQ9W14mXSsmPy8sICcnKS5yZXBsYWNlKC9saW1pdD1bXiZdKyY/LywgJycpXG4gICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBuZXcgVVJMKGNsZWFuZWRVUkwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IG9yaWdpbmFsRmV0Y2gocmVzb3VyY2UsIGNvbmZpZylcblxuICAgICAgICAgICAgaWYgKHVybFBhdGhuYW1lLmluY2x1ZGVzKCdFcGlzb2RlcycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1JlY2VpdmVkIEVwaXNvZGVzJylcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51c2VySWQgPSBleHRyYWN0S2V5RnJvbVN0cmluZyh1cmwuc2VhcmNoLCAnVXNlcklkPScsICcmJylcbiAgICAgICAgICAgICAgICByZXNwb25zZS5jbG9uZSgpLmpzb24oKS50aGVuKChkYXRhOiBJdGVtRHRvKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlID0gSXRlbVR5cGUuU2VyaWVzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5zZWFzb25zID0gdGhpcy5nZXRGb3JtYXR0ZWRFcGlzb2RlRGF0YShkYXRhKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodXJsUGF0aG5hbWUuaW5jbHVkZXMoJ1VzZXInKSAmJiB1cmxQYXRobmFtZS5pbmNsdWRlcygnSXRlbXMnKSAmJiB1cmwuc2VhcmNoLmluY2x1ZGVzKCdQYXJlbnRJZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1JlY2VpdmVkIEl0ZW1zIHdpdGggUGFyZW50SWQnKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVzZXJJZCA9IGV4dHJhY3RLZXlGcm9tU3RyaW5nKHVybFBhdGhuYW1lLCAnVXNlcnMvJywgJy8nKVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmNsb25lKCkuanNvbigpLnRoZW4oKGRhdGE6IEl0ZW1EdG8pOiB2b2lkID0+IHRoaXMuc2F2ZUl0ZW1EYXRhKGRhdGEpKVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVybFBhdGhuYW1lLmluY2x1ZGVzKCdVc2VyJykgJiYgdXJsUGF0aG5hbWUuaW5jbHVkZXMoJ0l0ZW1zJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgSXRlbXMgd2l0aG91dCBQYXJlbnRJZCcpXG5cbiAgICAgICAgICAgICAgICByZXNwb25zZS5jbG9uZSgpLmpzb24oKS50aGVuKChkYXRhOiBCYXNlSXRlbSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgc2luZ2xlIGl0ZW0gZGF0YSAtPiBTZXR0aW5nIEJveFNldCBuYW1lJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChJdGVtVHlwZVtkYXRhLlR5cGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkJveFNldDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuRm9sZGVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGFGZXRjaGVyLm5leHREYXRhSXNDaGlsZERhdGEgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmJveFNldE5hbWUgPSBkYXRhLk5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Nb3ZpZTogLy8gY291bGQgYmUgc2luZ2xlIHZpZGVvIChlLmcuIHN0YXJ0ZWQgZnJvbSBkYXNoYm9hcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLlZpZGVvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGFGZXRjaGVyLm5leHREYXRhSXNDaGlsZERhdGEgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUl0ZW1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbXM6IFtkYXRhXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWxSZWNvcmRDb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRJbmRleDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVybFBhdGhuYW1lLmluY2x1ZGVzKCdQbGF5ZWRJdGVtcycpKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBwbGF5ZWQgc3RhdGUgb2YgdGhlIGVwaXNvZGVcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgUGxheWVkSXRlbXMnKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkOiBzdHJpbmcgPSBleHRyYWN0S2V5RnJvbVN0cmluZyh1cmxQYXRobmFtZSwgJ1BsYXllZEl0ZW1zLycpXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlZEl0ZW06IEJhc2VJdGVtID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKGl0ZW1JZClcbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5nZWRJdGVtKSByZXR1cm5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXNwb25zZS5jbG9uZSgpLmpzb24oKS50aGVuKChkYXRhKSA9PiBjaGFuZ2VkSXRlbS5Vc2VyRGF0YS5QbGF5ZWQgPSBkYXRhW1wiUGxheWVkXCJdKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKGNoYW5nZWRJdGVtKVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVybFBhdGhuYW1lLmluY2x1ZGVzKCdGYXZvcml0ZUl0ZW1zJykpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGZhdm91cml0ZSBzdGF0ZSBvZiB0aGUgZXBpc29kZVxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCBGYXZvcml0ZUl0ZW1zJylcblxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZDogc3RyaW5nID0gZXh0cmFjdEtleUZyb21TdHJpbmcodXJsUGF0aG5hbWUsICdGYXZvcml0ZUl0ZW1zLycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZWRJdGVtOiBCYXNlSXRlbSA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZChpdGVtSWQpO1xuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlZEl0ZW0pIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXNwb25zZS5jbG9uZSgpLmpzb24oKS50aGVuKChkYXRhKSA9PiBjaGFuZ2VkSXRlbS5Vc2VyRGF0YS5Jc0Zhdm9yaXRlID0gZGF0YVtcIklzRmF2b3JpdGVcIl0pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKGNoYW5nZWRJdGVtKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcblxuICAgICAgICAgICAgZnVuY3Rpb24gZXh0cmFjdEtleUZyb21TdHJpbmcoc2VhcmNoU3RyaW5nOiBzdHJpbmcsIHN0YXJ0U3RyaW5nOiBzdHJpbmcsIGVuZFN0cmluZzogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXg6IG51bWJlciA9IHNlYXJjaFN0cmluZy5pbmRleE9mKHN0YXJ0U3RyaW5nKSArIHN0YXJ0U3RyaW5nLmxlbmd0aFxuICAgICAgICAgICAgICAgIGlmIChlbmRTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4OiBudW1iZXIgPSBzZWFyY2hTdHJpbmcuaW5kZXhPZihlbmRTdHJpbmcsIHN0YXJ0SW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0SW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNhdmVJdGVtRGF0YShpdGVtRHRvOiBJdGVtRHRvKTogdm9pZCB7XG4gICAgICAgIGlmICghaXRlbUR0byB8fCAhaXRlbUR0by5JdGVtcyB8fCBpdGVtRHRvLkl0ZW1zLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gaXRlbUR0by5JdGVtcy5hdCgwKVxuICAgICAgICBjb25zdCBpdGVtRHRvVHlwZTogSXRlbVR5cGUgPSBJdGVtVHlwZVtmaXJzdEl0ZW0/LlR5cGVdXG4gICAgICAgIHN3aXRjaCAoaXRlbUR0b1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuRXBpc29kZTpcbiAgICAgICAgICAgICAgICAvLyBkbyBub3Qgb3ZlcndyaXRlIGRhdGEgaWYgd2Ugb25seSByZWNlaXZlIG9uZSBpdGVtIHdoaWNoIGFscmVhZHkgZXhpc3RzXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1EdG8uSXRlbXMubGVuZ3RoID4gMSB8fCAhdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnNlYXNvbnMuZmxhdE1hcChzZWFzb24gPT4gc2Vhc29uLmVwaXNvZGVzKS5zb21lKGVwaXNvZGUgPT4gZXBpc29kZS5JZCA9PT0gZmlyc3RJdGVtLklkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSA9IEl0ZW1UeXBlLlNlcmllc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuc2Vhc29ucyA9IHRoaXMuZ2V0Rm9ybWF0dGVkRXBpc29kZURhdGEoaXRlbUR0bylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuTW92aWU6XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IG92ZXJ3cml0ZSBkYXRhIGlmIHdlIG9ubHkgcmVjZWl2ZSBvbmUgaXRlbSB3aGljaCBhbHJlYWR5IGV4aXN0c1xuICAgICAgICAgICAgICAgIGlmIChpdGVtRHRvLkl0ZW1zLmxlbmd0aCA+IDEgfHwgIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5tb3ZpZXMuc29tZShtb3ZpZSA9PiBtb3ZpZS5JZCA9PT0gZmlyc3RJdGVtLklkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSA9IERhdGFGZXRjaGVyLm5leHREYXRhSXNDaGlsZERhdGEgPyBJdGVtVHlwZS5Cb3hTZXQgOiBJdGVtVHlwZS5Nb3ZpZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUubW92aWVzID0gaXRlbUR0by5JdGVtcy5tYXAoKG1vdmllLCBpZHgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5tb3ZpZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4TnVtYmVyOiBpZHggKyAxXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5WaWRlbzpcbiAgICAgICAgICAgICAgICAvLyBkbyBub3Qgb3ZlcndyaXRlIGRhdGEgaWYgd2Ugb25seSByZWNlaXZlIG9uZSBpdGVtIHdoaWNoIGFscmVhZHkgZXhpc3RzXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1EdG8uSXRlbXMubGVuZ3RoID4gMSB8fCAhdGhpcy5wcm9ncmFtRGF0YVN0b3JlLm1vdmllcy5zb21lKHZpZGVvID0+IHZpZGVvLklkID09PSBmaXJzdEl0ZW0uSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlID0gRGF0YUZldGNoZXIubmV4dERhdGFJc0NoaWxkRGF0YSA/IEl0ZW1UeXBlLkZvbGRlciA6IEl0ZW1UeXBlLlZpZGVvXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EdG8uSXRlbXMuc29ydCgoYSwgYikgPT4gKGEuU29ydE5hbWUgJiYgYi5Tb3J0TmFtZSkgPyBhLlNvcnROYW1lLmxvY2FsZUNvbXBhcmUoYi5Tb3J0TmFtZSkgOiAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUubW92aWVzID0gaXRlbUR0by5JdGVtcy5tYXAoKHZpZGVvLCBpZHgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi52aWRlbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4TnVtYmVyOiBpZHggKyAxXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIERhdGFGZXRjaGVyLm5leHREYXRhSXNDaGlsZERhdGEgPSBmYWxzZVxuXG4gICAgICAgIC8vIHRoaXMubG9nZ2VyLmVycm9yKFwiQ291bGRuJ3Qgc2F2ZSBpdGVtcyBmcm9tIHJlc3BvbnNlXCIsIGl0ZW1EdG8pO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0Rm9ybWF0dGVkRXBpc29kZURhdGEgPSAoaXRlbUR0bzogSXRlbUR0bykgPT4ge1xuICAgICAgICBjb25zdCBlcGlzb2RlRGF0YTogQmFzZUl0ZW1bXSA9IGl0ZW1EdG8uSXRlbXNcbiAgICAgICAgXG4gICAgICAgIC8vIGdldCBhbGwgZGlmZmVyZW50IHNlYXNvbklkc1xuICAgICAgICBjb25zdCBzZWFzb25JZHM6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KGVwaXNvZGVEYXRhLm1hcCgoZXBpc29kZTogQmFzZUl0ZW0pOiBzdHJpbmcgPT4gZXBpc29kZS5TZWFzb25JZCkpXG5cbiAgICAgICAgLy8gZ3JvdXAgdGhlIGVwaXNvZGVzIGJ5IHNlYXNvbklkXG4gICAgICAgIGNvbnN0IGdyb3VwOiBSZWNvcmQ8c3RyaW5nLCBCYXNlSXRlbVtdPiA9IGdyb3VwQnkoZXBpc29kZURhdGEsIChlcGlzb2RlOiBCYXNlSXRlbSk6IHN0cmluZyA9PiBlcGlzb2RlLlNlYXNvbklkKVxuXG4gICAgICAgIGNvbnN0IHNlYXNvbnM6IFNlYXNvbltdID0gW11cbiAgICAgICAgY29uc3QgaXRlcmF0b3I6IEl0ZXJhYmxlSXRlcmF0b3I8c3RyaW5nPiA9IHNlYXNvbklkcy52YWx1ZXMoKVxuICAgICAgICBsZXQgdmFsdWU6IEl0ZXJhdG9yUmVzdWx0PHN0cmluZz4gPSBpdGVyYXRvci5uZXh0KClcbiAgICAgICAgd2hpbGUgKCF2YWx1ZS5kb25lKSB7XG4gICAgICAgICAgICBjb25zdCBzZWFzb25JZDogc3RyaW5nID0gdmFsdWUudmFsdWVcbiAgICAgICAgICAgIGNvbnN0IHNlYXNvbjogU2Vhc29uID0ge1xuICAgICAgICAgICAgICAgIHNlYXNvbklkOiBzZWFzb25JZCxcbiAgICAgICAgICAgICAgICBzZWFzb25OYW1lOiBncm91cFtzZWFzb25JZF0uYXQoMCkuU2Vhc29uTmFtZSxcbiAgICAgICAgICAgICAgICBlcGlzb2RlczogZ3JvdXBbc2Vhc29uSWRdLFxuICAgICAgICAgICAgICAgIEluZGV4TnVtYmVyOiBzZWFzb25zLmxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZWFzb25zLnB1c2goc2Vhc29uKVxuICAgICAgICAgICAgdmFsdWUgPSBpdGVyYXRvci5uZXh0KClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWFzb25zXG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBncm91cEJ5PFQ+KGFycjogVFtdLCBmbjogKGl0ZW06IFQpID0+IGFueSk6IFJlY29yZDxzdHJpbmcsIFRbXT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFyci5yZWR1Y2U8UmVjb3JkPHN0cmluZywgVFtdPj4oKHByZXY6IFJlY29yZDxzdHJpbmcsIFRbXT4sIGN1cnI6IFQpOiB7fSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBLZXkgPSBmbihjdXJyKVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwOiBUW10gPSBwcmV2W2dyb3VwS2V5XSB8fCBbXVxuICAgICAgICAgICAgICAgIGdyb3VwLnB1c2goY3VycilcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBbZ3JvdXBLZXldOiBncm91cCB9XG4gICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9BdXRoU2VydmljZVwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuLi9FbmRwb2ludHNcIjtcblxuZXhwb3J0IGNsYXNzIERhdGFMb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEVwaXNvZGVEZXNjcmlwdGlvbihlcGlzb2RlSWQ6IHN0cmluZywgb25sb2FkZW5kOiAodGhpczogWE1MSHR0cFJlcXVlc3QsIGV2OiBQcm9ncmVzc0V2ZW50PEV2ZW50VGFyZ2V0PikgPT4gdm9pZCk6IFhNTEh0dHBSZXF1ZXN0IHtcbiAgICAgICAgbGV0IHJlcXVlc3RVcmwgPSBgLi4vJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5FUElTT0RFX0RFU0NSSVBUSU9OfWBcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7ZXBpc29kZUlkfScsIGVwaXNvZGVJZCk7XG5cbiAgICAgICAgbGV0IGVwaXNvZGVEZXNjcmlwdGlvblJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnanNvbic7XG5cbiAgICAgICAgZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdC5vcGVuKCdHRVQnLCByZXF1ZXN0VXJsKTtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5hZGRBdXRoSGVhZGVySW50b0h0dHBSZXF1ZXN0KGVwaXNvZGVEZXNjcmlwdGlvblJlcXVlc3QpO1xuICAgICAgICBlcGlzb2RlRGVzY3JpcHRpb25SZXF1ZXN0LnNlbmQoKTtcbiAgICAgICAgZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG5cbiAgICAgICAgcmV0dXJuIGVwaXNvZGVEZXNjcmlwdGlvblJlcXVlc3Q7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nX3ByZWZpeDogc3RyaW5nID0gXCJbSW5QbGF5ZXJFcGlzb2RlUHJldmlld11cIikge1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmluZm8oYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuLi9FbmRwb2ludHNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXliYWNrSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7XG4gICAgfVxuXG4gICAgYXN5bmMgcGxheShlcGlzb2RlSWQ6IHN0cmluZywgc3RhcnRQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQgfCBSZXNwb25zZT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt3aW5kb3dbJ0FwaUNsaWVudCddWydfc2VydmVyQWRkcmVzcyddfS8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLlBMQVlfTUVESUF9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51c2VySWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tkZXZpY2VJZH0nLCB3aW5kb3dbJ0FwaUNsaWVudCddWydfZGV2aWNlSWQnXSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2VwaXNvZGVJZH0nLCBlcGlzb2RlSWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t0aWNrc30nLCBzdGFydFBvc2l0aW9uVGlja3MudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IHN0YXJ0IHRoZSBwbGF5YmFjayBvZiBhbiBlcGlzb2RlYCwgZXgpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtQcm9ncmFtRGF0YX0gZnJvbSBcIi4uL01vZGVscy9Qcm9ncmFtRGF0YVwiO1xuaW1wb3J0IHtTZWFzb259IGZyb20gXCIuLi9Nb2RlbHMvU2Vhc29uXCI7XG5pbXBvcnQge0Jhc2VJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL0VwaXNvZGVcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcblxuZXhwb3J0IGNsYXNzIFByb2dyYW1EYXRhU3RvcmUge1xuICAgIHByaXZhdGUgX3Byb2dyYW1EYXRhOiBQcm9ncmFtRGF0YVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhID0ge1xuICAgICAgICAgICAgdXNlcklkOiAnJyxcbiAgICAgICAgICAgIGFjdGl2ZU1lZGlhU291cmNlSWQ6ICcnLFxuICAgICAgICAgICAgYm94U2V0TmFtZTogJycsXG4gICAgICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtb3ZpZXM6IFtdLFxuICAgICAgICAgICAgc2Vhc29uczogW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdXNlcklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS51c2VySWRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHVzZXJJZCh1c2VySWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS51c2VySWQgPSB1c2VySWRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZU1lZGlhU291cmNlSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZU1lZGlhU291cmNlSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZU1lZGlhU291cmNlSWQoYWN0aXZlTWVkaWFTb3VyY2VJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBhY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVTZWFzb24oKTogU2Vhc29uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vhc29ucy5maW5kKHNlYXNvbiA9PiBzZWFzb24uZXBpc29kZXMuc29tZShlcGlzb2RlID0+IGVwaXNvZGUuSWQgPT09IHRoaXMuYWN0aXZlTWVkaWFTb3VyY2VJZCkpXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBJdGVtVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS50eXBlXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXQgdHlwZSh0eXBlOiBJdGVtVHlwZSkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS50eXBlID0gdHlwZVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IGJveFNldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmJveFNldE5hbWVcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldCBib3hTZXROYW1lKGJveFNldE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lID0gYm94U2V0TmFtZVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IG1vdmllcygpOiBCYXNlSXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLm1vdmllc1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0IG1vdmllcyhtb3ZpZXM6IEJhc2VJdGVtW10pIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEubW92aWVzID0gbW92aWVzXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWFzb25zKCk6IFNlYXNvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLnNlYXNvbnNcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlYXNvbnMoc2Vhc29uczogU2Vhc29uW10pIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuc2Vhc29ucyA9IHNlYXNvbnNcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBkYXRhSXNBbGxvd2VkRm9yUHJldmlldygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93ZWRQcmV2aWV3VHlwZXMuaW5jbHVkZXModGhpcy50eXBlKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuU2VyaWVzOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVNlYXNvbi5lcGlzb2Rlcy5sZW5ndGggPj0gdGhpcy5taW5pbXVtRWxlbWVudHNOZWVkZWRcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuTW92aWU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuQm94U2V0OlxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Gb2xkZXI6XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLlZpZGVvOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmllcy5sZW5ndGggPj0gdGhpcy5taW5pbXVtRWxlbWVudHNOZWVkZWRcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBhbGxvd2VkUHJldmlld1R5cGVzKCkgeyBcbiAgICAgICAgLy8gVE9ETzogZ2V0IGZyb20gcGx1Z2luIGNvbmZpZyBpbiB0aGUgZnV0dXJlXG4gICAgICAgIHJldHVybiBbSXRlbVR5cGUuU2VyaWVzLCBJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLk1vdmllLCBJdGVtVHlwZS5Gb2xkZXIsIEl0ZW1UeXBlLlZpZGVvXVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IG1pbmltdW1FbGVtZW50c05lZWRlZCgpOiBudW1iZXIge1xuICAgICAgICAvLyBUT0RPOiBnZXQgZnJvbSBwbHVnaW4gY29uZmlnIGluIHRoZSBmdXR1cmVcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXRlbUJ5SWQoaXRlbUlkOiBzdHJpbmcpOiBCYXNlSXRlbSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLlNlcmllczpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC5mbGF0TWFwKHNlYXNvbiA9PiBzZWFzb24uZXBpc29kZXMpXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKGVwaXNvZGUgPT4gZXBpc29kZS5JZCA9PT0gaXRlbUlkKVxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Cb3hTZXQ6XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLk1vdmllOlxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Gb2xkZXI6XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLlZpZGVvOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmllcy5maW5kKG1vdmllID0+IG1vdmllLklkID09PSBpdGVtSWQpXG4gICAgICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlSXRlbShpdGVtVG9VcGRhdGU6IEJhc2VJdGVtKTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLlNlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFzb246IFNlYXNvbiA9IHRoaXMuc2Vhc29ucy5maW5kKHNlYXNvbiA9PiBzZWFzb24uc2Vhc29uSWQgPT09IGl0ZW1Ub1VwZGF0ZS5TZWFzb25JZClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uIHRoaXMuc2Vhc29ucy5maWx0ZXIoc2Vhc29uID0+IHNlYXNvbi5zZWFzb25JZCAhPT0gaXRlbVRvVXBkYXRlLlNlYXNvbklkKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlYXNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcGlzb2RlczogWy4uLiBzZWFzb24uZXBpc29kZXMuZmlsdGVyKGVwaXNvZGUgPT4gZXBpc29kZS5JZCAhPT0gaXRlbVRvVXBkYXRlLklkKSwgaXRlbVRvVXBkYXRlXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkJveFNldDpcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuTW92aWU6XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkZvbGRlcjpcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuVmlkZW86XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpZXMgPSBbLi4uIHRoaXMubW92aWVzLmZpbHRlcihtb3ZpZSA9PiBtb3ZpZS5JZCAhPT0gaXRlbVRvVXBkYXRlLklkKSwgaXRlbVRvVXBkYXRlXVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vU2VydmljZXMvTG9nZ2VyXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9TZXJ2aWNlcy9BdXRoU2VydmljZVwiO1xuaW1wb3J0IHtQcmV2aWV3QnV0dG9uVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7RGF0YUxvYWRlcn0gZnJvbSBcIi4vU2VydmljZXMvRGF0YUxvYWRlclwiO1xuaW1wb3J0IHtEaWFsb2dCYWNrZHJvcENvbnRhaW5lclRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL0RpYWxvZ0JhY2tkcm9wQ29udGFpbmVyVGVtcGxhdGVcIjtcbmltcG9ydCB7RGlhbG9nQ29udGFpbmVyVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvRGlhbG9nQ29udGFpbmVyVGVtcGxhdGVcIjtcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcbmltcG9ydCB7TGlzdEVsZW1lbnRGYWN0b3J5fSBmcm9tIFwiLi9MaXN0RWxlbWVudEZhY3RvcnlcIjtcbmltcG9ydCB7UG9wdXBUaXRsZVRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xuaW1wb3J0IHtEYXRhRmV0Y2hlcn0gZnJvbSBcIi4vU2VydmljZXMvRGF0YUZldGNoZXJcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL01vZGVscy9JdGVtVHlwZVwiO1xuXG4vLyBsb2FkIGFuZCBpbmplY3QgaW5QbGF5ZXJQcmV2aWV3LmNzcyBpbnRvIHRoZSBwYWdlXG4vKlxuICogSW5qZWN0IHN0eWxlIHRvIGJlIHVzZWQgZm9yIHRoZSBwcmV2aWV3IHBvcHVwXG4gKi9cbmxldCBpblBsYXllclByZXZpZXdTdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbmluUGxheWVyUHJldmlld1N0eWxlLmlkID0gJ2luUGxheWVyUHJldmlld1N0eWxlJ1xuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5zZWxlY3RlZExpc3RJdGVtIHtoZWlnaHQ6IGF1dG87fSdcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ICs9ICcucHJldmlld0xpc3RJdGVtIHtmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDt9J1xuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IHt3aWR0aDogMTAwJTsgbWluLWhlaWdodDogMTUuNXZoOyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47fSdcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ICs9ICcucHJldmlld1BvcHVwIHthbmltYXRpb246IDE0MG1zIGVhc2Utb3V0IDBzIDEgbm9ybWFsIGJvdGggcnVubmluZyBzY2FsZXVwOyBwb3NpdGlvbjogZml4ZWQ7IG1hcmdpbjogMHB4OyBib3R0b206IDEuNXZoOyBsZWZ0OiA1MHZ3OyB3aWR0aDogNDh2dzt9J1xuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3UG9wdXBUaXRsZSB7bWF4LWhlaWdodDogNHZoO30nXG5pblBsYXllclByZXZpZXdTdHlsZS50ZXh0Q29udGVudCArPSAnLnByZXZpZXdQb3B1cFNjcm9sbGVyIHttYXgtaGVpZ2h0OiA2MHZoO30nXG5pblBsYXllclByZXZpZXdTdHlsZS50ZXh0Q29udGVudCArPSAnLnByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciB7bWFyZ2luLWxlZnQ6IGF1dG87IG1hcmdpbi1yaWdodDogMWVtO30nXG5pblBsYXllclByZXZpZXdTdHlsZS50ZXh0Q29udGVudCArPSAnLnByZXZpZXdFcGlzb2RlQ29udGFpbmVyIHt3aWR0aDogMTAwJTt9J1xuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3RXBpc29kZVRpdGxlIHtwb2ludGVyLWV2ZW50czogbm9uZTt9J1xuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3RXBpc29kZUltYWdlQ2FyZCB7bWF4LXdpZHRoOiAzMCU7fSdcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ICs9ICcucHJldmlld0VwaXNvZGVEZXNjcmlwdGlvbiB7bWFyZ2luLWxlZnQ6IDAuNWVtOyBtYXJnaW4tdG9wOiAxZW07IG1hcmdpbi1yaWdodDogMS41ZW07IGRpc3BsYXk6IGJsb2NrO30nXG5pblBsYXllclByZXZpZXdTdHlsZS50ZXh0Q29udGVudCArPSAnLnByZXZpZXdFcGlzb2RlRGV0YWlscyB7bWFyZ2luLWxlZnQ6IDFlbTsganVzdGlmeS1jb250ZW50OiBzdGFydCAhaW1wb3J0YW50O30nXG5kb2N1bWVudD8uaGVhZD8uYXBwZW5kQ2hpbGQoaW5QbGF5ZXJQcmV2aWV3U3R5bGUpXG5cbi8vIGluaXQgc2VydmljZXMgYW5kIGhlbHBlcnNcbmNvbnN0IGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcigpXG5jb25zdCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UoKVxuY29uc3QgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSA9IG5ldyBQcm9ncmFtRGF0YVN0b3JlKClcbmNvbnN0IGRhdGFMb2FkZXI6IERhdGFMb2FkZXIgPSBuZXcgRGF0YUxvYWRlcihhdXRoU2VydmljZSlcbm5ldyBEYXRhRmV0Y2hlcihwcm9ncmFtRGF0YVN0b3JlLCBhdXRoU2VydmljZSwgbG9nZ2VyKVxuY29uc3QgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIgPSBuZXcgUGxheWJhY2tIYW5kbGVyKHByb2dyYW1EYXRhU3RvcmUsIGxvZ2dlcilcbmNvbnN0IGxpc3RFbGVtZW50RmFjdG9yeSA9IG5ldyBMaXN0RWxlbWVudEZhY3RvcnkoZGF0YUxvYWRlciwgcGxheWJhY2tIYW5kbGVyLCBwcm9ncmFtRGF0YVN0b3JlKVxuXG5jb25zdCB2aWRlb1BhdGhzOiBzdHJpbmdbXSA9IFsnL3ZpZGVvJ11cbmxldCBwcmV2aW91c1JvdXRlUGF0aDogc3RyaW5nID0gbnVsbFxubGV0IHByZXZpZXdDb250YWluZXJMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlld3Nob3cnLCB2aWV3U2hvd0V2ZW50SGFuZGxlcilcblxuZnVuY3Rpb24gdmlld1Nob3dFdmVudEhhbmRsZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFJvdXRlUGF0aDogc3RyaW5nID0gZ2V0TG9jYXRpb25QYXRoKClcblxuICAgIGZ1bmN0aW9uIGdldExvY2F0aW9uUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsb2NhdGlvbjogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlSW5kZXg6IG51bWJlciA9IGxvY2F0aW9uLmxhc3RJbmRleE9mKCcvJylcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnN1YnN0cmluZyhjdXJyZW50Um91dGVJbmRleClcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsIGF0dGVtcHQgdG8gbG9hZCB0aGUgdmlkZW8gdmlldyBvciBzY2hlZHVsZSByZXRyaWVzLlxuICAgIGF0dGVtcHRMb2FkVmlkZW9WaWV3KClcbiAgICBwcmV2aW91c1JvdXRlUGF0aCA9IGN1cnJlbnRSb3V0ZVBhdGhcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYXR0ZW1wdHMgdG8gbG9hZCB0aGUgdmlkZW8gdmlldywgcmV0cnlpbmcgdXAgdG8gMyB0aW1lcyBpZiBuZWNlc3NhcnkuXG4gICAgZnVuY3Rpb24gYXR0ZW1wdExvYWRWaWRlb1ZpZXcocmV0cnlDb3VudCA9IDApOiB2b2lkIHtcbiAgICAgICAgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMoY3VycmVudFJvdXRlUGF0aCkpIHtcbiAgICAgICAgICAgIGlmIChwcm9ncmFtRGF0YVN0b3JlLmRhdGFJc0FsbG93ZWRGb3JQcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByZXZpZXcgY29udGFpbmVyIGlzIGFscmVhZHkgbG9hZGVkIGJlZm9yZSBsb2FkaW5nXG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2aWV3Q29udGFpbmVyTG9hZGVkICYmICFpc1ByZXZpZXdCdXR0b25DcmVhdGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZFZpZGVvVmlldygpXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdDb250YWluZXJMb2FkZWQgPSB0cnVlIC8vIFNldCBmbGFnIHRvIHRydWUgYWZ0ZXIgbG9hZGluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmV0cnlDb3VudCA8IDMpIHsgLy8gUmV0cnkgdXAgdG8gMyB0aW1lc1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFJldHJ5ICMke3JldHJ5Q291bnQgKyAxfWApXG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHRMb2FkVmlkZW9WaWV3KHJldHJ5Q291bnQgKyAxKVxuICAgICAgICAgICAgICAgIH0sIDEwMDAwKSAvLyBXYWl0IDEwIHNlY29uZHMgZm9yIGVhY2ggcmV0cnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKHByZXZpb3VzUm91dGVQYXRoKSkge1xuICAgICAgICAgICAgdW5sb2FkVmlkZW9WaWV3KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBsb2FkVmlkZW9WaWV3KCk6IHZvaWQge1xuICAgICAgICAvLyBhZGQgcHJldmlldyBidXR0b24gdG8gdGhlIHBhZ2VcbiAgICAgICAgY29uc3QgcGFyZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJykubGFzdEVsZW1lbnRDaGlsZC5wYXJlbnRFbGVtZW50OyAvLyBsYXN0RWxlbWVudENoaWxkLnBhcmVudEVsZW1lbnQgaXMgdXNlZCBmb3IgY2FzdGluZyBmcm9tIEVsZW1lbnQgdG8gSFRNTEVsZW1lbnRcbiAgICAgICAgXG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmRJbmRleCgoY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImJ0blVzZXJSYXRpbmdcIikpO1xuICAgICAgICAvLyBpZiBpbmRleCBpcyBpbnZhbGlkIHRyeSB0byB1c2UgdGhlIG9sZCBwb3NpdGlvbiAodXNlZCBpbiBKZWxseWZpbiAxMC44LjEyKVxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKVxuICAgICAgICAgICAgaW5kZXggPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikuZmluZEluZGV4KChjaGlsZDogRWxlbWVudCk6IGJvb2xlYW4gPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3NkVGltZVRleHRcIikpXG5cbiAgICAgICAgY29uc3QgcHJldmlld0J1dHRvbjogUHJldmlld0J1dHRvblRlbXBsYXRlID0gbmV3IFByZXZpZXdCdXR0b25UZW1wbGF0ZShwYXJlbnQsIGluZGV4KVxuICAgICAgICBwcmV2aWV3QnV0dG9uLnJlbmRlcihwcmV2aWV3QnV0dG9uQ2xpY2tIYW5kbGVyKVxuXG4gICAgICAgIGZ1bmN0aW9uIHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIoKTogdm9pZCB7XG4gICAgICAgICAgICBjb25zdCBkaWFsb2dCYWNrZHJvcDogRGlhbG9nQmFja2Ryb3BDb250YWluZXJUZW1wbGF0ZSA9IG5ldyBEaWFsb2dCYWNrZHJvcENvbnRhaW5lclRlbXBsYXRlKGRvY3VtZW50LmJvZHksIGRvY3VtZW50LmJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIGRpYWxvZ0JhY2tkcm9wLnJlbmRlcigpXG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lcjogRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUgPSBuZXcgRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUoZG9jdW1lbnQuYm9keSwgZG9jdW1lbnQuYm9keS5jaGlsZHJlbi5sZW5ndGggLSAxKVxuICAgICAgICAgICAgZGlhbG9nQ29udGFpbmVyLnJlbmRlcigoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWFsb2dCYWNrZHJvcC5nZXRFbGVtZW50SWQoKSkpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWFsb2dDb250YWluZXIuZ2V0RWxlbWVudElkKCkpKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJylcbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIiAvLyByZW1vdmUgb2xkIGNvbnRlbnRcblxuICAgICAgICAgICAgY29uc3QgcG9wdXBUaXRsZTogUG9wdXBUaXRsZVRlbXBsYXRlID0gbmV3IFBvcHVwVGl0bGVUZW1wbGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBGb2N1c0NvbnRhaW5lcicpLCAtMSwgcHJvZ3JhbURhdGFTdG9yZSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUucmVuZGVyKChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJylcblxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBlcGlzb2RlIGNvbnRlbnQgZm9yIGFsbCBleGlzdGluZyBlcGlzb2RlcyBpbiB0aGUgcHJldmlldyBsaXN0O1xuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVTZWFzb25FbGVtZW50cyhwcm9ncmFtRGF0YVN0b3JlLnNlYXNvbnMsIGNvbnRlbnREaXYsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlU2Vhc29uLkluZGV4TnVtYmVyLCBwb3B1cFRpdGxlKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc3dpdGNoIChwcm9ncmFtRGF0YVN0b3JlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLlNlcmllczpcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRUZXh0KHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlU2Vhc29uLnNlYXNvbk5hbWUpXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlRXBpc29kZUVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlU2Vhc29uLmVwaXNvZGVzLCBjb250ZW50RGl2KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuTW92aWU6XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VGV4dCgnJylcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlRXBpc29kZUVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUubW92aWVzLmZpbHRlcihtb3ZpZSA9PiBtb3ZpZS5JZCA9PT0gcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKSwgY29udGVudERpdilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLlZpZGVvOlxuICAgICAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFRleHQoJycpXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUVwaXNvZGVFbGVtZW50cyhwcm9ncmFtRGF0YVN0b3JlLm1vdmllcywgY29udGVudERpdilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkJveFNldDpcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkZvbGRlcjpcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRUZXh0KHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVFcGlzb2RlRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5tb3ZpZXMsIGNvbnRlbnREaXYpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgZXBpc29kZSB0aGF0IGlzIGN1cnJlbnRseSBwbGF5aW5nXG4gICAgICAgICAgICBjb250ZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZExpc3RJdGVtJykucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdW5sb2FkVmlkZW9WaWV3KCk6IHZvaWQge1xuICAgICAgICAvLyBDbGVhciBvbGQgZGF0YSBhbmQgcmVzZXQgcHJldmlld0NvbnRhaW5lckxvYWRlZCBmbGFnXG4gICAgICAgIGF1dGhTZXJ2aWNlLnNldEF1dGhIZWFkZXJWYWx1ZShcIlwiKVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ0JhY2tkcm9wQ29udGFpbmVyXCIpKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ0JhY2tkcm9wQ29udGFpbmVyXCIpKVxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2dDb250YWluZXJcIikpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nQ29udGFpbmVyXCIpKVxuICAgICAgICBcbiAgICAgICAgcHJldmlld0NvbnRhaW5lckxvYWRlZCA9IGZhbHNlIC8vIFJlc2V0IGZsYWcgd2hlbiB1bmxvYWRpbmdcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJykucXVlcnlTZWxlY3RvcignI3BvcHVwUHJldmlld0J1dHRvbicpICE9PSBudWxsXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==