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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDakYsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1lBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV6RSxzQkFBc0IsR0FBRyxLQUFLLEVBQUMsNEJBQTRCO0lBQy9ELENBQUM7SUFFRCxTQUFTLHNCQUFzQjtRQUMzQixPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEtBQUssSUFBSTtJQUMzRixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0Jhc2VUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9EaWFsb2dCYWNrZHJvcENvbnRhaW5lclRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0VwaXNvZGVEZXRhaWxzLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUG9wdXBDb250ZW50Q29udGFpbmVyVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUG9wdXBGb2N1c0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvUGxheVN0YXRlSWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1NlYXNvbkxpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0VuZHBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTGlzdEVsZW1lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvSXRlbVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0F1dGhTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9EYXRhRmV0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvRGF0YUxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL1dlYi9JblBsYXllclByZXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VUZW1wbGF0ZSB7XHJcbiAgICAvKlxyXG4gICAgICogdGhlIEhUTUwgYmFzZWQgSUQgb2YgdGhlIG5ldyBnZW5lcmF0ZWQgRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGVsZW1lbnRJZDogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHByaXZhdGUgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UG9zaXRpb25BZnRlckluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25BZnRlckluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRFbGVtZW50SWQoZWxlbWVudElkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RWxlbWVudElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudElkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5nZXRFbGVtZW50SWQoKX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBnZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogc3RyaW5nO1xyXG5cclxuICAgIGFic3RyYWN0IHJlbmRlciguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogdm9pZDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgYWRkRWxlbWVudFRvQ29udGFpbmVyKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIGlmIHBvc2l0aW9uIGlzIG5lZ2F0aXZlXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgPCAwICYmIHRoaXMuZ2V0Q29udGFpbmVyKCkuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZmlyc3RFbGVtZW50Q2hpbGQuYmVmb3JlKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGQgRWxlbWVudCBpZiBjb250YWluZXIgaXMgZW1wdHlcclxuICAgICAgICBpZiAoIXRoaXMuZ2V0Q29udGFpbmVyKCkuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuaW5uZXJIVE1MID0gdGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5sYXN0RWxlbWVudENoaWxkXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29udGFpbmVyKCkuY2hpbGRyZW4ubGVuZ3RoID4gdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSAmJiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpID49IDApXHJcbiAgICAgICAgICAgIGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlblt0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpXTtcclxuICAgICAgICBcclxuICAgICAgICBjaGlsZEJlZm9yZS5hZnRlcih0aGlzLnN0cmluZ1RvTm9kZSh0aGlzLmdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnMpKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdHJpbmdUb05vZGUodGVtcGxhdGVTdHJpbmc6IHN0cmluZyk6IE5vZGUge1xyXG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHRlbXBsYXRlU3RyaW5nO1xyXG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlci5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dCYWNrZHJvcENvbnRhaW5lclRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdkaWFsb2dCYWNrZHJvcENvbnRhaW5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiAgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJkaWFsb2dCYWNrZHJvcCBkaWFsb2dCYWNrZHJvcE9wZW5lZFwiLz5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcclxuaW1wb3J0IHtQb3B1cEZvY3VzQ29udGFpbmVyfSBmcm9tIFwiLi9Qb3B1cEZvY3VzQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ2RpYWxvZ0NvbnRhaW5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHRlbXBDb250YWluZXJEaXY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGZvY3VzQ29udGFpbmVyRGl2OiBQb3B1cEZvY3VzQ29udGFpbmVyID0gbmV3IFBvcHVwRm9jdXNDb250YWluZXIodGVtcENvbnRhaW5lckRpdiwgLTEpO1xyXG4gICAgICAgIGZvY3VzQ29udGFpbmVyRGl2LnJlbmRlcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwiZGlhbG9nQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAke3RlbXBDb250YWluZXJEaXYuaW5uZXJIVE1MfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcihkaWFsb2dDb250YWluZXJDbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xyXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogYW55ID0+IGRpYWxvZ0NvbnRhaW5lckNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XHJcbmltcG9ydCB7QmFzZUl0ZW19IGZyb20gXCIuLi9Nb2RlbHMvRXBpc29kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGVEZXRhaWxzVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZXBpc29kZTogQmFzZUl0ZW0pIHtcclxuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGVwaXNvZGUtJHtlcGlzb2RlLkluZGV4TnVtYmVyfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9LWRldGFpbHNcIiBjbGFzcz1cIml0ZW1NaXNjSW5mbyBpdGVtTWlzY0luZm8tcHJpbWFyeSBwcmV2aWV3RXBpc29kZURldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICR7dGhpcy5lcGlzb2RlLlByZW1pZXJlRGF0ZSA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7KG5ldyBEYXRlKHRoaXMuZXBpc29kZS5QcmVtaWVyZURhdGUpKS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5nZXRMb2NhbGUoKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPiR7dGhpcy5mb3JtYXRSdW5UaW1lKHRoaXMuZXBpc29kZS5SdW5UaW1lVGlja3MpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgJHt0aGlzLmVwaXNvZGUuQ29tbXVuaXR5UmF0aW5nID8gYDxkaXYgY2xhc3M9XCJzdGFyUmF0aW5nQ29udGFpbmVyIG1lZGlhSW5mb0l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHN0YXJJY29uIHN0YXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmVwaXNvZGUuQ29tbXVuaXR5UmF0aW5nLnRvRml4ZWQoMSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAke3RoaXMuZXBpc29kZS5Dcml0aWNSYXRpbmcgPyBgPGRpdiBjbGFzcz1cIm1lZGlhSW5mb0l0ZW0gbWVkaWFJbmZvQ3JpdGljUmF0aW5nICR7dGhpcy5lcGlzb2RlLkNyaXRpY1JhdGluZyA+PSA2MCA/ICdtZWRpYUluZm9Dcml0aWNSYXRpbmdGcmVzaCcgOiAnbWVkaWFJbmZvQ3JpdGljUmF0aW5nUm90dGVuJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuZXBpc29kZS5Dcml0aWNSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW5kc0F0IG1lZGlhSW5mb0l0ZW1cIj4ke3RoaXMuZm9ybWF0RW5kVGltZSh0aGlzLmVwaXNvZGUuUnVuVGltZVRpY2tzLCB0aGlzLmVwaXNvZGUuVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgZ2V0TG9jYWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5sYW5ndWFnZXNcclxuICAgICAgICAgICAgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIC8vIEB0cy1pZ25vcmUgZm9yIHVzZXJMYW5ndWFnZSAodGhpcyBhZGRzIHN1cHBvcnQgZm9yIElFKSBUT0RPOiBNb3ZlIHRvIGludGVyZmFjZVxyXG4gICAgICAgICAgICA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgZm9ybWF0UnVuVGltZSh0aWNrczogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBmb3JtYXQgdGhlIHRpY2tzIHRvIGEgc3RyaW5nIHdpdGggbWludXRlcyBhbmQgaG91cnNcclxuICAgICAgICB0aWNrcyAvPSAxMDAwMDsgLy8gY29udmVydCBmcm9tIG1pY3Jvc2Vjb25kcyB0byBtaWxsaXNlY29uZHNcclxuICAgICAgICBsZXQgaG91cnM6IG51bWJlciA9IE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDM2MDApICUgMjQpO1xyXG4gICAgICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCk7XHJcbiAgICAgICAgbGV0IGhvdXJzU3RyaW5nOiBzdHJpbmcgPSBob3VycyA+IDAgPyBgJHtob3Vyc31oIGAgOiAnJztcclxuICAgICAgICByZXR1cm4gYCR7aG91cnNTdHJpbmd9JHttaW51dGVzfW1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0RW5kVGltZShydW50aW1lVGlja3M6IG51bWJlciwgcGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXHJcbiAgICAgICAgcnVudGltZVRpY2tzIC89IDEwMDAwO1xyXG4gICAgICAgIHBsYXliYWNrUG9zaXRpb25UaWNrcyAvPSAxMDAwMDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdGlja3M6IG51bWJlciA9IERhdGUubm93KCkgKyAocnVudGltZVRpY2tzKTtcclxuICAgICAgICB0aWNrcyAtPSAobmV3IERhdGUoKSkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDsgLy8gYWRqdXN0IGZvciB0aW1lem9uZVxyXG4gICAgICAgIHRpY2tzIC09IHBsYXliYWNrUG9zaXRpb25UaWNrczsgLy8gc3VidHJhY3QgdGhlIHBsYXliYWNrIHBvc2l0aW9uXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhvdXJzOiBzdHJpbmcgPSB0aGlzLnplcm9QYWQoTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCkpO1xyXG4gICAgICAgIGxldCBtaW51dGVzOiBzdHJpbmcgPSB0aGlzLnplcm9QYWQoTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gNjApICUgNjApKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYEVuZHMgYXQgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgemVyb1BhZChudW06IG51bWJlciwgcGxhY2VzOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nKG51bSkucGFkU3RhcnQocGxhY2VzLCAnMCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiXHJcbmltcG9ydCB7RmF2b3JpdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZVwiXHJcbmltcG9ydCB7UGxheVN0YXRlSWNvblRlbXBsYXRlfSBmcm9tIFwiLi9RdWlja0FjdGlvbnMvUGxheVN0YXRlSWNvblRlbXBsYXRlXCJcclxuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIlxyXG5pbXBvcnQge0VwaXNvZGVEZXRhaWxzVGVtcGxhdGV9IGZyb20gXCIuL0VwaXNvZGVEZXRhaWxzXCJcclxuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiXHJcbmltcG9ydCB7QmFzZUl0ZW19IGZyb20gXCIuLi9Nb2RlbHMvRXBpc29kZVwiXHJcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RFbGVtZW50VGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBxdWlja0FjdGlvbkNvbnRhaW5lcjogSFRNTEVsZW1lbnRcclxuICAgIHByaXZhdGUgcGxheVN0YXRlSWNvbjogUGxheVN0YXRlSWNvblRlbXBsYXRlXHJcbiAgICBwcml2YXRlIGZhdm9yaXRlSWNvbjogRmF2b3JpdGVJY29uVGVtcGxhdGVcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogQmFzZUl0ZW0sIHByaXZhdGUgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxyXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBlcGlzb2RlLSR7aXRlbS5JbmRleE51bWJlcn1gKVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgdGVtcCBxdWljayBhY3Rpb24gY29udGFpbmVyXHJcbiAgICAgICAgdGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY3JlYXRlIHF1aWNrIGFjdGlvbnNcclxuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24gPSBuZXcgUGxheVN0YXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIC0xLCB0aGlzLml0ZW0pXHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24gPSBuZXcgRmF2b3JpdGVJY29uVGVtcGxhdGUodGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciwgMCwgdGhpcy5pdGVtKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIGFkZCBxdWljayBhY3Rpb25zXHJcbiAgICAgICAgdGhpcy5wbGF5U3RhdGVJY29uLnJlbmRlcigpXHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24ucmVuZGVyKClcclxuICAgICAgICBcclxuICAgICAgICAvLyBhZGQgZXBpc29kZSBkZXRhaWxzL2luZm9cclxuICAgICAgICBjb25zdCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29uc3QgZGV0YWlsczogRXBpc29kZURldGFpbHNUZW1wbGF0ZSA9IG5ldyBFcGlzb2RlRGV0YWlsc1RlbXBsYXRlKGRldGFpbHNDb250YWluZXIsIC0xLCB0aGlzLml0ZW0pXHJcbiAgICAgICAgZGV0YWlscy5yZW5kZXIoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZVN0eWxlOiBzdHJpbmcgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9JdGVtcy8ke3RoaXMuaXRlbS5JZH0vSW1hZ2VzL1ByaW1hcnk/dGFnPSR7dGhpcy5pdGVtLkltYWdlVGFncy5QcmltYXJ5fScpYFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXHJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbS5JbmRleE51bWJlcn1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3RXBpc29kZUNvbnRhaW5lciBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpc3RJdGVtIHByZXZpZXdFcGlzb2RlVGl0bGVcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLkluZGV4TnVtYmVyICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUgIT09IEl0ZW1UeXBlLk1vdmllXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPyBgPHNwYW4+JHt0aGlzLml0ZW0uSW5kZXhOdW1iZXJ9PC9zcGFuPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RJdGVtQm9keSBhY3Rpb25zaGVldExpc3RJdGVtQm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25TaGVldEl0ZW1UZXh0XCI+JHt0aGlzLml0ZW0uTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMucXVpY2tBY3Rpb25Db250YWluZXIuaW5uZXJIVE1MfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdMaXN0SXRlbUNvbnRlbnQgaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7ZGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUx9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgb3ZlcmZsb3dCYWNrZHJvcENhcmQgY2FyZC1ob3ZlcmFibGUgY2FyZC13aXRodXNlcmRhdGEgcHJldmlld0VwaXNvZGVJbWFnZUNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRTY2FsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFBhZGRlciBjYXJkUGFkZGVyLW92ZXJmbG93QmFja2Ryb3AgbGF6eS1oaWRkZW4tY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZEltYWdlSWNvbiBtYXRlcmlhbC1pY29ucyB0dlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjYW52YXMgYXJpYS1oaWRkZW49XCJ0cnVlXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJsdXJoYXNoLWNhbnZhcyBsYXp5LWhpZGRlblwiPjwvY2FudmFzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlld0VwaXNvZGVJbWFnZUNhcmQtJHt0aGlzLml0ZW0uSW5kZXhOdW1iZXJ9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRJbWFnZUNvbnRhaW5lciBjYXJkQ29udGVudCBpdGVtQWN0aW9uIGxhenkgYmx1cmhhc2hlZCBsYXp5LWltYWdlLWZhZGVpbi1mYXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiJHtiYWNrZ3JvdW5kSW1hZ2VTdHlsZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lckNhcmRGb290ZXIgZnVsbElubmVyQ2FyZEZvb3RlciBpbm5lckNhcmRGb290ZXJDbGVhciAke3RoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlID8gJycgOiAnaGlkZSd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1Qcm9ncmVzc0JhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByb2dyZXNzQmFyRm9yZWdyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoke3RoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlfSU7XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkT3ZlcmxheUNvbnRhaW5lciBpdGVtQWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydC1lcGlzb2RlLSR7dGhpcy5pdGVtLkluZGV4TnVtYmVyfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzPVwicGFwZXItaWNvbi1idXR0b24tbGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5QnV0dG9uIGNhcmRPdmVybGF5QnV0dG9uLWhvdmVyIGl0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgY2FyZE92ZXJsYXlGYWItcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwicmVzdW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2FyZE92ZXJsYXlCdXR0b25JY29uIGNhcmRPdmVybGF5QnV0dG9uSWNvbi1ob3ZlciBwbGF5X2Fycm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZXZpZXdFcGlzb2RlRGVzY3JpcHRpb25cIj4ke3RoaXMuaXRlbS5EZXNjcmlwdGlvbiA/PyAnbG9hZGluZy4uLid9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcclxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xpY2tIYW5kbGVyKGUpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGFkZCBldmVudCBoYW5kbGVyIHRvIHN0YXJ0IHRoZSBwbGF5YmFjayBvZiB0aGlzIGVwaXNvZGVcclxuICAgICAgICBsZXQgZXBpc29kZUltYWdlQ2FyZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnQtZXBpc29kZS0ke3RoaXMuaXRlbS5JbmRleE51bWJlcn1gKVxyXG4gICAgICAgIGVwaXNvZGVJbWFnZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnBsYXliYWNrSGFuZGxlci5wbGF5KHRoaXMuaXRlbS5JZCwgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcykpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBDb250ZW50Q29udGFpbmVyVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImFjdGlvblNoZWV0U2Nyb2xsZXIgc2Nyb2xsWSBwcmV2aWV3UG9wdXBTY3JvbGxlclwiLz5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XHJcbmltcG9ydCB7UG9wdXBDb250ZW50Q29udGFpbmVyVGVtcGxhdGV9IGZyb20gXCIuL1BvcHVwQ29udGVudENvbnRhaW5lclRlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBGb2N1c0NvbnRhaW5lciBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcclxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBGb2N1c0NvbnRhaW5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHRlbXBDb250YWluZXJEaXY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IHBvcHVwQ29udGVudENvbnRhaW5lcjogUG9wdXBDb250ZW50Q29udGFpbmVyVGVtcGxhdGUgPSBuZXcgUG9wdXBDb250ZW50Q29udGFpbmVyVGVtcGxhdGUodGVtcENvbnRhaW5lckRpdiwgLTEpO1xyXG4gICAgICAgIHBvcHVwQ29udGVudENvbnRhaW5lci5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImZvY3VzY29udGFpbmVyIGRpYWxvZyBhY3Rpb25zaGVldC1ub3QtZnVsbHNjcmVlbiBhY3Rpb25TaGVldCBjZW50ZXJlZERpYWxvZyBvcGVuZWQgcHJldmlld1BvcHVwIGFjdGlvblNoZWV0Q29udGVudFwiIGRhdGEtaGlzdG9yeT1cInRydWVcIiBkYXRhLXJlbW92ZW9uY2xvc2U9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAke3RlbXBDb250YWluZXJEaXYuaW5uZXJIVE1MfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcclxuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xyXG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi4vTW9kZWxzL0l0ZW1UeXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBUaXRsZVRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcclxuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcclxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwiYWN0aW9uU2hlZXRUaXRsZSBsaXN0SXRlbSBwcmV2aWV3UG9wdXBUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSA9PT0gSXRlbVR5cGUuU2VyaWVzICYmIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5zZWFzb25zLmxlbmd0aCA+IDEgPyBcclxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJhY3Rpb25zaGVldE1lbnVJdGVtSWNvbiBsaXN0SXRlbUljb24gbGlzdEl0ZW1JY29uLXRyYW5zcGFyZW50IG1hdGVyaWFsLWljb25zIGtleWJvYXJkX2JhY2tzcGFjZVwiPjwvc3Bhbj4nIDogXHJcbiAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImFjdGlvblNoZWV0VGl0bGVcIj48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuU2VyaWVzOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuQm94U2V0OlxyXG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkZvbGRlcjpcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJUZXh0ID0gdGV4dFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0VmlzaWJsZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKVxyXG4gICAgICAgIGlmIChpc1Zpc2libGUpIHtcclxuICAgICAgICAgICAgcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByZXZpZXdCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcclxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBQcmV2aWV3QnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImF1dG9TaXplIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCIgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFcGlzb2RlIFByZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBpZD1cInN2ZzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYgNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImxheWVyMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3Q0N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc2NDY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMy43NTY4Njc2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMi4xNjkzNjYxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjAuMjM4MjMzMDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PVwiMS44MjU3MzM1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40NzY1OTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gMS4wMjkxNDM3LDEuMDMyMDQ4MiBoIDMuNzUyODk5MSB2IDIuMTcyMjM5NCBsIDAuMDA2NzYsLTIuMTU3MjU5NSB6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny04XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40Nzc0Mjc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gMS44MjI4NjE0LDAuMjM4NzEzMzYgaCAzLjc1OTI1OSBWIDIuNDEwMTIxMSBsIC0wLjAwNjgsLTIuMTcxNDA3NzQgelwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XHJcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IGFueSA9PiBjbGlja0hhbmRsZXIoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXHJcbmltcG9ydCB7QmFzZUl0ZW19IGZyb20gXCIuLi8uLi9Nb2RlbHMvRXBpc29kZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVJY29uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZXBpc29kZTogQmFzZUl0ZW0pIHtcclxuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcclxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgnZmF2b3JpdGVCdXR0b24tJyArIGVwaXNvZGUuSW5kZXhOdW1iZXIpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1yYXRpbmdidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbUFjdGlvbiBwYXBlci1pY29uLWJ1dHRvbi1saWdodCBlbWJ5LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLmVwaXNvZGU/LklkID8/ICcnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zZXJ2ZXJpZD1cIiR7dGhpcy5lcGlzb2RlPy5TZXJ2ZXJJZCA/PyAnJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbXR5cGU9XCJFcGlzb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlzZmF2b3JpdGU9XCIke3RoaXMuZXBpc29kZT8uVXNlckRhdGE/LklzRmF2b3JpdGUgPz8gZmFsc2V9XCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZmF2b3JpdGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcclxuICAgIH1cclxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi4vQmFzZVRlbXBsYXRlXCJcclxuaW1wb3J0IHtCYXNlSXRlbX0gZnJvbSBcIi4uLy4uL01vZGVscy9FcGlzb2RlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5U3RhdGVJY29uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZXBpc29kZTogQmFzZUl0ZW0pIHtcclxuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcclxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncGxheVN0YXRlQnV0dG9uLScgKyB0aGlzLmVwaXNvZGUuSW5kZXhOdW1iZXIpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1wbGF5c3RhdGVidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGVtYnktYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLmVwaXNvZGU/LklkID8/ICcnfVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuZXBpc29kZT8uU2VydmVySWQgPz8gJyd9XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWl0ZW10eXBlPVwiRXBpc29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1saWtlcz1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGF5ZWQ9XCIke3RoaXMuZXBpc29kZT8uVXNlckRhdGE/LlBsYXllZCA/PyBmYWxzZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTWFyayBwbGF5ZWRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2hlY2sgcGxheXN0YXRlYnV0dG9uLWljb24tJHt0aGlzLmVwaXNvZGU/LlVzZXJEYXRhPy5QbGF5ZWQgPyBcInBsYXllZFwiIDogXCJ1bnBsYXllZFwifVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xyXG5pbXBvcnQge1NlYXNvbn0gZnJvbSBcIi4uL01vZGVscy9TZWFzb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFzb25MaXN0RWxlbWVudFRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIHNlYXNvbjogU2Vhc29uLCBwcml2YXRlIGlzQ3VycmVudFNlYXNvbjogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcclxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgZXBpc29kZS0ke3NlYXNvbi5zZWFzb25JZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXHJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuc2Vhc29uLnNlYXNvbklkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpc3RJdGVtIHByZXZpZXdFcGlzb2RlVGl0bGVcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuaXNDdXJyZW50U2Vhc29uID8gXCJtYXRlcmlhbC1pY29ucyBjaGVja1wiIDogXCJcIn1cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RJdGVtQm9keSBhY3Rpb25zaGVldExpc3RJdGVtQm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuc2Vhc29uLnNlYXNvbk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xyXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiBjbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gRW5kcG9pbnRzIHtcclxuICAgIEJBU0UgPSBcIkluUGxheWVyUHJldmlld1wiLFxyXG4gICAgRVBJU09ERV9JTkZPID0gXCIvVXNlcnMve3VzZXJJZH0vSXRlbXMve2VwaXNvZGVJZH1cIixcclxuICAgIEVQSVNPREVfREVTQ1JJUFRJT04gPSBcIi9JdGVtcy97ZXBpc29kZUlkfVwiLFxyXG4gICAgUExBWV9NRURJQSA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vSXRlbXMve2VwaXNvZGVJZH0vUGxheS97dGlja3N9XCJcclxufSIsImltcG9ydCB7TGlzdEVsZW1lbnRUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9MaXN0RWxlbWVudFRlbXBsYXRlXCI7XHJcbmltcG9ydCB7QmFzZUl0ZW19IGZyb20gXCIuL01vZGVscy9FcGlzb2RlXCI7XHJcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xyXG5pbXBvcnQge1NlYXNvbn0gZnJvbSBcIi4vTW9kZWxzL1NlYXNvblwiO1xyXG5pbXBvcnQge1NlYXNvbkxpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvU2Vhc29uTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xyXG5pbXBvcnQge1BvcHVwVGl0bGVUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGVcIjtcclxuaW1wb3J0IHtEYXRhTG9hZGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhTG9hZGVyXCI7XHJcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0RWxlbWVudEZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhTG9hZGVyOiBEYXRhTG9hZGVyLCBwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGNyZWF0ZUVwaXNvZGVFbGVtZW50cyhlcGlzb2RlczogQmFzZUl0ZW1bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGVwaXNvZGVzLnNvcnQoKGEsIGIpID0+IGEuSW5kZXhOdW1iZXIgLSBiLkluZGV4TnVtYmVyKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBlcGlzb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlcGlzb2RlID0gbmV3IExpc3RFbGVtZW50VGVtcGxhdGUocGFyZW50RGl2LCBpLCBlcGlzb2Rlc1tpXSwgdGhpcy5wbGF5YmFja0hhbmRsZXIsIHRoaXMucHJvZ3JhbURhdGFTdG9yZSk7XHJcbiAgICAgICAgICAgIGVwaXNvZGUucmVuZGVyKChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBoaWRlIGVwaXNvZGUgY29udGVudCBmb3IgYWxsIGV4aXN0aW5nIGVwaXNvZGVzIGluIHRoZSBwcmV2aWV3IGxpc3RcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJldmlld0xpc3RJdGVtQ29udGVudFwiKS5mb3JFYWNoKChlbGVtZW50OiBFbGVtZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZExpc3RJdGVtJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXBpc29kZUNvbnRhaW5lcjogRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtlcGlzb2Rlc1tpXS5JbmRleE51bWJlcn1cIl1gKS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0xpc3RJdGVtQ29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBsb2FkIGVwaXNvZGUgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlmICghZXBpc29kZXNbaV0uRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0OiBYTUxIdHRwUmVxdWVzdCA9IHRoaXMuZGF0YUxvYWRlci5sb2FkRXBpc29kZURlc2NyaXB0aW9uKGVwaXNvZGVzW2ldLklkLCAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVwaXNvZGVzW2ldLkRlc2NyaXB0aW9uID0gcmVxdWVzdC5yZXNwb25zZT8uRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKGVwaXNvZGVzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXBpc29kZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJldmlld0VwaXNvZGVEZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gZXBpc29kZXNbaV0uRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgZXBpc29kZSBjb250ZW50IGZvciB0aGUgc2VsZWN0ZWQgZXBpc29kZVxyXG4gICAgICAgICAgICAgICAgZXBpc29kZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBlcGlzb2RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRoZSBzZWxlY3RlZCBlcGlzb2RlXHJcbiAgICAgICAgICAgICAgICBlcGlzb2RlQ29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJzdGFydFwiIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcGlzb2Rlc1tpXS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVwaXNvZGVOb2RlOiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2VwaXNvZGVzW2ldLkluZGV4TnVtYmVyfVwiXWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHByZWxvYWQgZXBpc29kZSBkZXNjcmlwdGlvbiBmb3IgdGhlIGN1cnJlbnRseSBwbGF5aW5nIGVwaXNvZGVcclxuICAgICAgICAgICAgICAgIGlmICghZXBpc29kZXNbaV0uRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0OiBYTUxIdHRwUmVxdWVzdCA9IHRoaXMuZGF0YUxvYWRlci5sb2FkRXBpc29kZURlc2NyaXB0aW9uKGVwaXNvZGVzW2ldLklkLCAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVwaXNvZGVzW2ldLkRlc2NyaXB0aW9uID0gcmVxdWVzdC5yZXNwb25zZT8uRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKGVwaXNvZGVzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXBpc29kZU5vZGUucXVlcnlTZWxlY3RvcignLnByZXZpZXdFcGlzb2RlRGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IGVwaXNvZGVzW2ldLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlcGlzb2RlTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBlcGlzb2RlTm9kZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZExpc3RJdGVtJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBjcmVhdGVTZWFzb25FbGVtZW50cyhzZWFzb25zOiBTZWFzb25bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgY3VycmVudFNlYXNvbkluZGV4OiBudW1iZXIsIHRpdGxlQ29udGFpbmVyOiBQb3B1cFRpdGxlVGVtcGxhdGUpOiB2b2lkIHtcclxuICAgICAgICBzZWFzb25zLnNvcnQoKGEsIGIpID0+IGEuSW5kZXhOdW1iZXIgLSBiLkluZGV4TnVtYmVyKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzZWFzb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXNvbiA9IG5ldyBTZWFzb25MaXN0RWxlbWVudFRlbXBsYXRlKHBhcmVudERpdiwgaSwgc2Vhc29uc1tpXSwgc2Vhc29uc1tpXS5JbmRleE51bWJlciA9PT0gY3VycmVudFNlYXNvbkluZGV4KTtcclxuICAgICAgICAgICAgc2Vhc29uLnJlbmRlcigoZTogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0VGV4dChzZWFzb25zW2ldLnNlYXNvbk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFyZW50RGl2LmlubmVySFRNTCA9IFwiXCI7IC8vIHJlbW92ZSBvbGQgY29udGVudFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcGlzb2RlRWxlbWVudHMoc2Vhc29uc1tpXS5lcGlzb2RlcywgcGFyZW50RGl2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gSXRlbVR5cGUge1xyXG4gICAgQWdncmVnYXRlRm9sZGVyLFxyXG4gICAgQXVkaW8sXHJcbiAgICBBdWRpb0Jvb2ssXHJcbiAgICBCYXNlUGx1Z2luRm9sZGVyLFxyXG4gICAgQm9vayxcclxuICAgIEJveFNldCxcclxuICAgIENoYW5uZWwsXHJcbiAgICBDaGFubmVsRm9sZGVySXRlbSxcclxuICAgIENvbGxlY3Rpb25Gb2xkZXIsXHJcbiAgICBFcGlzb2RlLFxyXG4gICAgRm9sZGVyLFxyXG4gICAgR2VucmUsXHJcbiAgICBNYW51YWxQbGF5bGlzdHNGb2xkZXIsXHJcbiAgICBNb3ZpZSxcclxuICAgIExpdmVUdkNoYW5uZWwsXHJcbiAgICBMaXZlVHZQcm9ncmFtLFxyXG4gICAgTXVzaWNBbGJ1bSxcclxuICAgIE11c2ljQXJ0aXN0LFxyXG4gICAgTXVzaWNHZW5yZSxcclxuICAgIE11c2ljVmlkZW8sXHJcbiAgICBQZXJzb24sXHJcbiAgICBQaG90byxcclxuICAgIFBob3RvQWxidW0sXHJcbiAgICBQbGF5bGlzdCxcclxuICAgIFBsYXlsaXN0c0ZvbGRlcixcclxuICAgIFByb2dyYW0sXHJcbiAgICBSZWNvcmRpbmcsXHJcbiAgICBTZWFzb24sXHJcbiAgICBTZXJpZXMsXHJcbiAgICBTdHVkaW8sXHJcbiAgICBUcmFpbGVyLFxyXG4gICAgVHZDaGFubmVsLFxyXG4gICAgVHZQcm9ncmFtLFxyXG4gICAgVXNlclJvb3RGb2xkZXIsXHJcbiAgICBVc2VyVmlldyxcclxuICAgIFZpZGVvLFxyXG4gICAgWWVhclxyXG59IiwiZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F1dGhIZWFkZXI6IHN0cmluZyA9ICdBdXRob3JpemF0aW9uJztcclxuICAgIHByaXZhdGUgX2F1dGhIZWFkZXJWYWx1ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF1dGhIZWFkZXJLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aEhlYWRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBnZXRBdXRoSGVhZGVyVmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aEhlYWRlclZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRBdXRoSGVhZGVyVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2F1dGhIZWFkZXJWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBdXRoSGVhZGVySW50b0h0dHBSZXF1ZXN0KHJlcXVlc3Q6IFhNTEh0dHBSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKHRoaXMuX2F1dGhIZWFkZXIsIHRoaXMuZ2V0QXV0aEhlYWRlclZhbHVlKCkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vUHJvZ3JhbURhdGFTdG9yZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9BdXRoU2VydmljZVwiO1xyXG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vTG9nZ2VyXCI7XHJcbmltcG9ydCB7QmFzZUl0ZW0sIEl0ZW1EdG99IGZyb20gXCIuLi9Nb2RlbHMvRXBpc29kZVwiO1xyXG5pbXBvcnQge1NlYXNvbn0gZnJvbSBcIi4uL01vZGVscy9TZWFzb25cIjtcclxuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiO1xyXG5pbXBvcnQge1BsYXliYWNrUHJvZ3Jlc3NJbmZvfSBmcm9tIFwiLi4vTW9kZWxzL1BsYXliYWNrUHJvZ3Jlc3NJbmZvXCI7XHJcblxyXG4vKipcclxuICogVGhlIGNsYXNzZXMgd2hpY2ggZGVyaXZlcyBmcm9tIHRoaXMgaW50ZXJmYWNlLCB3aWxsIHByb3ZpZGUgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gaGFuZGxlIHRoZSBkYXRhIGlucHV0IGZyb20gdGhlIHNlcnZlciBpZiB0aGUgUGxheWJhY2tTdGF0ZSBpcyBjaGFuZ2VkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERhdGFGZXRjaGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIG5leHREYXRhSXNDaGlsZERhdGE6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7XHJcbiAgICAgICAgY29uc3Qge2ZldGNoOiBvcmlnaW5hbEZldGNofSA9IHdpbmRvd1xyXG4gICAgICAgIHdpbmRvdy5mZXRjaCA9IGFzeW5jICguLi5hcmdzKTogUHJvbWlzZTxSZXNwb25zZT4gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7b3JpZ2lufSA9IHdpbmRvdy5sb2NhdGlvbjtcclxuICAgICAgICAgICAgbGV0IHJlc291cmNlID0gYXJnc1swXSBhcyBSZXF1ZXN0SW5mbztcclxuICAgICAgICAgICAgY29uc3QgY29uZmlnOiBSZXF1ZXN0SW5pdCA9IGFyZ3NbMV0gPz8ge307XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b1VybCA9IChpbnB1dDogUmVxdWVzdEluZm8pOiBVUkwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgVVJMKSByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSByZXR1cm4gbmV3IFVSTChpbnB1dC51cmwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVUkwoU3RyaW5nKGlucHV0KSwgb3JpZ2luKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0QXV0aEhlYWRlclZhbHVlKGNvbmZpZy5oZWFkZXJzW3RoaXMuYXV0aFNlcnZpY2UuZ2V0QXV0aEhlYWRlcktleSgpXSA/PyAnJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsOiBVUkwgPSB0b1VybChyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybFBhdGhuYW1lOiBzdHJpbmcgPSB1cmwucGF0aG5hbWU7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9jZXNzIGRhdGEgZnJvbSBQT1NUIHJlcXVlc3RzXHJcbiAgICAgICAgICAgIC8vIEVuZHBvaW50OiAvU2Vzc2lvbnMvUGxheWluZ1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmJvZHkgJiYgdHlwZW9mIGNvbmZpZy5ib2R5ID09PSAnc3RyaW5nJyAmJiB1cmxQYXRobmFtZS5pbmNsdWRlcygnU2Vzc2lvbnMvUGxheWluZycpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5aW5nSW5mbzogUGxheWJhY2tQcm9ncmVzc0luZm8gPSBKU09OLnBhcnNlKGNvbmZpZy5ib2R5KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIG1lZGlhIGlkIG9mIHRoZSBjdXJyZW50bHkgcGxheWVkIHZpZGVvXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgIT09IHBsYXlpbmdJbmZvLk1lZGlhU291cmNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBwbGF5aW5nSW5mby5NZWRpYVNvdXJjZUlkXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRW5kcG9pbnQ6IC9TZXNzaW9ucy9QbGF5aW5nL1Byb2dyZXNzXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsUGF0aG5hbWUuaW5jbHVkZXMoJ1Byb2dyZXNzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHBsYXliYWNrIHByb2dyZXNzIG9mIHRoZSBjdXJyZW50bHkgcGxheWVkIHZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXBpc29kZTogQmFzZUl0ZW0gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQocGxheWluZ0luZm8uTWVkaWFTb3VyY2VJZClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXBpc29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5lcGlzb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5lcGlzb2RlLlVzZXJEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogcGxheWluZ0luZm8uUG9zaXRpb25UaWNrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZWRQZXJjZW50YWdlOiAxMDAgLyBlcGlzb2RlLlJ1blRpbWVUaWNrcyAqIHBsYXlpbmdJbmZvLlBvc2l0aW9uVGlja3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVkOiBlcGlzb2RlLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2UgPiA5MCAvLyA5MCBpcyB0aGUgZGVmYXVsdCBwZXJjZW50YWdlIGZvciB3YXRjaGVkIGVwaXNvZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodXJsUGF0aG5hbWUuaW5jbHVkZXMoJ0VwaXNvZGVzJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBuZXcgJ3N0YXJ0SXRlbUlkJyBhbmQgJ2xpbWl0JyBxdWVyeSBwYXJhbWV0ZXIsIHRvIHN0aWxsIGdldCB0aGUgZnVsbCBsaXN0IG9mIGVwaXNvZGVzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbmVkVVJMID0gdXJsLmhyZWYucmVwbGFjZSgvc3RhcnRJdGVtSWQ9W14mXSsmPy8sICcnKS5yZXBsYWNlKC9saW1pdD1bXiZdKyY/LywgJycpO1xyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2UgPSB0b1VybChjbGVhbmVkVVJMKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBvcmlnaW5hbEZldGNoKHJlc291cmNlLCBjb25maWcpXHJcblxyXG4gICAgICAgICAgICBpZiAodXJsUGF0aG5hbWUuaW5jbHVkZXMoJ0VwaXNvZGVzJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCBFcGlzb2RlcycpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVzZXJJZCA9IGV4dHJhY3RLZXlGcm9tU3RyaW5nKHVybC5zZWFyY2gsICdVc2VySWQ9JywgJyYnKVxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCkudGhlbigoZGF0YTogSXRlbUR0byk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlID0gSXRlbVR5cGUuU2VyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnNlYXNvbnMgPSB0aGlzLmdldEZvcm1hdHRlZEVwaXNvZGVEYXRhKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh1cmxQYXRobmFtZS5pbmNsdWRlcygnVXNlcicpICYmIHVybFBhdGhuYW1lLmluY2x1ZGVzKCdJdGVtcycpICYmIHVybC5zZWFyY2guaW5jbHVkZXMoJ1BhcmVudElkJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCBJdGVtcyB3aXRoIFBhcmVudElkJylcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXNlcklkID0gZXh0cmFjdEtleUZyb21TdHJpbmcodXJsUGF0aG5hbWUsICdVc2Vycy8nLCAnLycpXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5jbG9uZSgpLmpzb24oKS50aGVuKChkYXRhOiBJdGVtRHRvKTogdm9pZCA9PiB0aGlzLnNhdmVJdGVtRGF0YShkYXRhKSlcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodXJsUGF0aG5hbWUuaW5jbHVkZXMoJ1VzZXInKSAmJiB1cmxQYXRobmFtZS5pbmNsdWRlcygnSXRlbXMnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1JlY2VpdmVkIEl0ZW1zIHdpdGhvdXQgUGFyZW50SWQnKVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmNsb25lKCkuanNvbigpLnRoZW4oKGRhdGE6IEJhc2VJdGVtKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1JlY2VpdmVkIHNpbmdsZSBpdGVtIGRhdGEgLT4gU2V0dGluZyBCb3hTZXQgbmFtZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKEl0ZW1UeXBlW2RhdGEuVHlwZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Cb3hTZXQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuRm9sZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0YUZldGNoZXIubmV4dERhdGFJc0NoaWxkRGF0YSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5ib3hTZXROYW1lID0gZGF0YS5OYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLk1vdmllOiAvLyBjb3VsZCBiZSBzaW5nbGUgdmlkZW8gKGUuZy4gc3RhcnRlZCBmcm9tIGRhc2hib2FyZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5WaWRlbzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGFGZXRjaGVyLm5leHREYXRhSXNDaGlsZERhdGEgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlSXRlbURhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW1zOiBbZGF0YV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWxSZWNvcmRDb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydEluZGV4OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodXJsUGF0aG5hbWUuaW5jbHVkZXMoJ1BsYXllZEl0ZW1zJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgcGxheWVkIHN0YXRlIG9mIHRoZSBlcGlzb2RlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgUGxheWVkSXRlbXMnKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZDogc3RyaW5nID0gZXh0cmFjdEtleUZyb21TdHJpbmcodXJsUGF0aG5hbWUsICdQbGF5ZWRJdGVtcy8nKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlZEl0ZW06IEJhc2VJdGVtID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKGl0ZW1JZClcclxuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlZEl0ZW0pIHJldHVyblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5jbG9uZSgpLmpzb24oKS50aGVuKChkYXRhKSA9PiBjaGFuZ2VkSXRlbS5Vc2VyRGF0YS5QbGF5ZWQgPSBkYXRhW1wiUGxheWVkXCJdKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oY2hhbmdlZEl0ZW0pXHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVybFBhdGhuYW1lLmluY2x1ZGVzKCdGYXZvcml0ZUl0ZW1zJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZmF2b3VyaXRlIHN0YXRlIG9mIHRoZSBlcGlzb2RlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgRmF2b3JpdGVJdGVtcycpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkOiBzdHJpbmcgPSBleHRyYWN0S2V5RnJvbVN0cmluZyh1cmxQYXRobmFtZSwgJ0Zhdm9yaXRlSXRlbXMvJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VkSXRlbTogQmFzZUl0ZW0gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKTtcclxuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlZEl0ZW0pIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCkudGhlbigoZGF0YSkgPT4gY2hhbmdlZEl0ZW0uVXNlckRhdGEuSXNGYXZvcml0ZSA9IGRhdGFbXCJJc0Zhdm9yaXRlXCJdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKGNoYW5nZWRJdGVtKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGV4dHJhY3RLZXlGcm9tU3RyaW5nKHNlYXJjaFN0cmluZzogc3RyaW5nLCBzdGFydFN0cmluZzogc3RyaW5nLCBlbmRTdHJpbmc6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXg6IG51bWJlciA9IHNlYXJjaFN0cmluZy5pbmRleE9mKHN0YXJ0U3RyaW5nKSArIHN0YXJ0U3RyaW5nLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgaWYgKGVuZFN0cmluZyAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRJbmRleDogbnVtYmVyID0gc2VhcmNoU3RyaW5nLmluZGV4T2YoZW5kU3RyaW5nLCBzdGFydEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0SW5kZXgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzYXZlSXRlbURhdGEoaXRlbUR0bzogSXRlbUR0byk6IHZvaWQge1xyXG4gICAgICAgIGlmICghaXRlbUR0byB8fCAhaXRlbUR0by5JdGVtcyB8fCBpdGVtRHRvLkl0ZW1zLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gaXRlbUR0by5JdGVtcy5hdCgwKVxyXG4gICAgICAgIGNvbnN0IGl0ZW1EdG9UeXBlOiBJdGVtVHlwZSA9IEl0ZW1UeXBlW2ZpcnN0SXRlbT8uVHlwZV1cclxuICAgICAgICBzd2l0Y2ggKGl0ZW1EdG9UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuRXBpc29kZTpcclxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBvdmVyd3JpdGUgZGF0YSBpZiB3ZSBvbmx5IHJlY2VpdmUgb25lIGl0ZW0gd2hpY2ggYWxyZWFkeSBleGlzdHNcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtRHRvLkl0ZW1zLmxlbmd0aCA+IDEgfHwgIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5zZWFzb25zLmZsYXRNYXAoc2Vhc29uID0+IHNlYXNvbi5lcGlzb2Rlcykuc29tZShlcGlzb2RlID0+IGVwaXNvZGUuSWQgPT09IGZpcnN0SXRlbS5JZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSA9IEl0ZW1UeXBlLlNlcmllc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5zZWFzb25zID0gdGhpcy5nZXRGb3JtYXR0ZWRFcGlzb2RlRGF0YShpdGVtRHRvKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Nb3ZpZTpcclxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBvdmVyd3JpdGUgZGF0YSBpZiB3ZSBvbmx5IHJlY2VpdmUgb25lIGl0ZW0gd2hpY2ggYWxyZWFkeSBleGlzdHNcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtRHRvLkl0ZW1zLmxlbmd0aCA+IDEgfHwgIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5tb3ZpZXMuc29tZShtb3ZpZSA9PiBtb3ZpZS5JZCA9PT0gZmlyc3RJdGVtLklkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlID0gRGF0YUZldGNoZXIubmV4dERhdGFJc0NoaWxkRGF0YSA/IEl0ZW1UeXBlLkJveFNldCA6IEl0ZW1UeXBlLk1vdmllXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLm1vdmllcyA9IGl0ZW1EdG8uSXRlbXMubWFwKChtb3ZpZSwgaWR4KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5tb3ZpZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXhOdW1iZXI6IGlkeCArIDFcclxuICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuVmlkZW86XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBub3Qgb3ZlcndyaXRlIGRhdGEgaWYgd2Ugb25seSByZWNlaXZlIG9uZSBpdGVtIHdoaWNoIGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUR0by5JdGVtcy5sZW5ndGggPiAxIHx8ICF0aGlzLnByb2dyYW1EYXRhU3RvcmUubW92aWVzLnNvbWUodmlkZW8gPT4gdmlkZW8uSWQgPT09IGZpcnN0SXRlbS5JZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSA9IERhdGFGZXRjaGVyLm5leHREYXRhSXNDaGlsZERhdGEgPyBJdGVtVHlwZS5Gb2xkZXIgOiBJdGVtVHlwZS5WaWRlb1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EdG8uSXRlbXMuc29ydCgoYSwgYikgPT4gKGEuU29ydE5hbWUgJiYgYi5Tb3J0TmFtZSkgPyBhLlNvcnROYW1lLmxvY2FsZUNvbXBhcmUoYi5Tb3J0TmFtZSkgOiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5tb3ZpZXMgPSBpdGVtRHRvLkl0ZW1zLm1hcCgodmlkZW8sIGlkeCkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udmlkZW8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4TnVtYmVyOiBpZHggKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBEYXRhRmV0Y2hlci5uZXh0RGF0YUlzQ2hpbGREYXRhID0gZmFsc2VcclxuXHJcbiAgICAgICAgLy8gdGhpcy5sb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBzYXZlIGl0ZW1zIGZyb20gcmVzcG9uc2VcIiwgaXRlbUR0byk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXRGb3JtYXR0ZWRFcGlzb2RlRGF0YSA9IChpdGVtRHRvOiBJdGVtRHRvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXBpc29kZURhdGE6IEJhc2VJdGVtW10gPSBpdGVtRHRvLkl0ZW1zXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZ2V0IGFsbCBkaWZmZXJlbnQgc2Vhc29uSWRzXHJcbiAgICAgICAgY29uc3Qgc2Vhc29uSWRzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPihlcGlzb2RlRGF0YS5tYXAoKGVwaXNvZGU6IEJhc2VJdGVtKTogc3RyaW5nID0+IGVwaXNvZGUuU2Vhc29uSWQpKVxyXG5cclxuICAgICAgICAvLyBncm91cCB0aGUgZXBpc29kZXMgYnkgc2Vhc29uSWRcclxuICAgICAgICBjb25zdCBncm91cDogUmVjb3JkPHN0cmluZywgQmFzZUl0ZW1bXT4gPSBncm91cEJ5KGVwaXNvZGVEYXRhLCAoZXBpc29kZTogQmFzZUl0ZW0pOiBzdHJpbmcgPT4gZXBpc29kZS5TZWFzb25JZClcclxuXHJcbiAgICAgICAgY29uc3Qgc2Vhc29uczogU2Vhc29uW10gPSBbXVxyXG4gICAgICAgIGNvbnN0IGl0ZXJhdG9yOiBJdGVyYWJsZUl0ZXJhdG9yPHN0cmluZz4gPSBzZWFzb25JZHMudmFsdWVzKClcclxuICAgICAgICBsZXQgdmFsdWU6IEl0ZXJhdG9yUmVzdWx0PHN0cmluZz4gPSBpdGVyYXRvci5uZXh0KClcclxuICAgICAgICB3aGlsZSAoIXZhbHVlLmRvbmUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Vhc29uSWQ6IHN0cmluZyA9IHZhbHVlLnZhbHVlXHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXNvbjogU2Vhc29uID0ge1xyXG4gICAgICAgICAgICAgICAgc2Vhc29uSWQ6IHNlYXNvbklkLFxyXG4gICAgICAgICAgICAgICAgc2Vhc29uTmFtZTogZ3JvdXBbc2Vhc29uSWRdLmF0KDApLlNlYXNvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICBlcGlzb2RlczogZ3JvdXBbc2Vhc29uSWRdLFxyXG4gICAgICAgICAgICAgICAgSW5kZXhOdW1iZXI6IHNlYXNvbnMubGVuZ3RoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNlYXNvbnMucHVzaChzZWFzb24pXHJcbiAgICAgICAgICAgIHZhbHVlID0gaXRlcmF0b3IubmV4dCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2Vhc29uc1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGdyb3VwQnk8VD4oYXJyOiBUW10sIGZuOiAoaXRlbTogVCkgPT4gYW55KTogUmVjb3JkPHN0cmluZywgVFtdPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnIucmVkdWNlPFJlY29yZDxzdHJpbmcsIFRbXT4+KChwcmV2OiBSZWNvcmQ8c3RyaW5nLCBUW10+LCBjdXJyOiBUKToge30gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBLZXkgPSBmbihjdXJyKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXA6IFRbXSA9IHByZXZbZ3JvdXBLZXldIHx8IFtdXHJcbiAgICAgICAgICAgICAgICBncm91cC5wdXNoKGN1cnIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBbZ3JvdXBLZXldOiBncm91cCB9XHJcbiAgICAgICAgICAgIH0sIHt9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL0F1dGhTZXJ2aWNlXCI7XHJcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi4vRW5kcG9pbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRFcGlzb2RlRGVzY3JpcHRpb24oZXBpc29kZUlkOiBzdHJpbmcsIG9ubG9hZGVuZDogKHRoaXM6IFhNTEh0dHBSZXF1ZXN0LCBldjogUHJvZ3Jlc3NFdmVudDxFdmVudFRhcmdldD4pID0+IHZvaWQpOiBYTUxIdHRwUmVxdWVzdCB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3RVcmwgPSBgLi4vJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5FUElTT0RFX0RFU0NSSVBUSU9OfWBcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3tlcGlzb2RlSWR9JywgZXBpc29kZUlkKTtcclxuXHJcbiAgICAgICAgbGV0IGVwaXNvZGVEZXNjcmlwdGlvblJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICBlcGlzb2RlRGVzY3JpcHRpb25SZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuXHJcbiAgICAgICAgZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdC5vcGVuKCdHRVQnLCByZXF1ZXN0VXJsKTtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmFkZEF1dGhIZWFkZXJJbnRvSHR0cFJlcXVlc3QoZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdCk7XHJcbiAgICAgICAgZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdC5zZW5kKCk7XHJcbiAgICAgICAgZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XHJcblxyXG4gICAgICAgIHJldHVybiBlcGlzb2RlRGVzY3JpcHRpb25SZXF1ZXN0O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIExvZ2dlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ19wcmVmaXg6IHN0cmluZyA9IFwiW0luUGxheWVyRXBpc29kZVByZXZpZXddXCIpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vUHJvZ3JhbURhdGFTdG9yZVwiO1xyXG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vTG9nZ2VyXCI7XHJcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi4vRW5kcG9pbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWJhY2tIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXkoZXBpc29kZUlkOiBzdHJpbmcsIHN0YXJ0UG9zaXRpb25UaWNrczogbnVtYmVyKTogUHJvbWlzZTx2b2lkIHwgUmVzcG9uc2U+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3dpbmRvd1snQXBpQ2xpZW50J11bJ19zZXJ2ZXJBZGRyZXNzJ119LyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuUExBWV9NRURJQX1gXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXNlcklkKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tkZXZpY2VJZH0nLCB3aW5kb3dbJ0FwaUNsaWVudCddWydfZGV2aWNlSWQnXSlcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7ZXBpc29kZUlkfScsIGVwaXNvZGVJZClcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dGlja3N9Jywgc3RhcnRQb3NpdGlvblRpY2tzLnRvU3RyaW5nKCkpKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybClcclxuICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IHN0YXJ0IHRoZSBwbGF5YmFjayBvZiBhbiBlcGlzb2RlYCwgZXgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtQcm9ncmFtRGF0YX0gZnJvbSBcIi4uL01vZGVscy9Qcm9ncmFtRGF0YVwiO1xyXG5pbXBvcnQge1NlYXNvbn0gZnJvbSBcIi4uL01vZGVscy9TZWFzb25cIjtcclxuaW1wb3J0IHtCYXNlSXRlbX0gZnJvbSBcIi4uL01vZGVscy9FcGlzb2RlXCI7XHJcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmFtRGF0YVN0b3JlIHtcclxuICAgIHByaXZhdGUgX3Byb2dyYW1EYXRhOiBQcm9ncmFtRGF0YVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VySWQ6ICcnLFxyXG4gICAgICAgICAgICBhY3RpdmVNZWRpYVNvdXJjZUlkOiAnJyxcclxuICAgICAgICAgICAgYm94U2V0TmFtZTogJycsXHJcbiAgICAgICAgICAgIHR5cGU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgbW92aWVzOiBbXSxcclxuICAgICAgICAgICAgc2Vhc29uczogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB1c2VySWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEudXNlcklkXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB1c2VySWQodXNlcklkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS51c2VySWQgPSB1c2VySWRcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZU1lZGlhU291cmNlSWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlTWVkaWFTb3VyY2VJZFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgYWN0aXZlTWVkaWFTb3VyY2VJZChhY3RpdmVNZWRpYVNvdXJjZUlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gYWN0aXZlTWVkaWFTb3VyY2VJZFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWN0aXZlU2Vhc29uKCk6IFNlYXNvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vhc29ucy5maW5kKHNlYXNvbiA9PiBzZWFzb24uZXBpc29kZXMuc29tZShlcGlzb2RlID0+IGVwaXNvZGUuSWQgPT09IHRoaXMuYWN0aXZlTWVkaWFTb3VyY2VJZCkpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBJdGVtVHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLnR5cGVcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldCB0eXBlKHR5cGU6IEl0ZW1UeXBlKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEudHlwZSA9IHR5cGVcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBib3hTZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmJveFNldE5hbWVcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldCBib3hTZXROYW1lKGJveFNldE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmJveFNldE5hbWUgPSBib3hTZXROYW1lXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgbW92aWVzKCk6IEJhc2VJdGVtW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5tb3ZpZXNcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldCBtb3ZpZXMobW92aWVzOiBCYXNlSXRlbVtdKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEubW92aWVzID0gbW92aWVzXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzZWFzb25zKCk6IFNlYXNvbltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuc2Vhc29uc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgc2Vhc29ucyhzZWFzb25zOiBTZWFzb25bXSkge1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnNlYXNvbnMgPSBzZWFzb25zXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgZGF0YUlzQWxsb3dlZEZvclByZXZpZXcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93ZWRQcmV2aWV3VHlwZXMuaW5jbHVkZXModGhpcy50eXBlKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5TZXJpZXM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVTZWFzb24uZXBpc29kZXMubGVuZ3RoID49IHRoaXMubWluaW11bUVsZW1lbnRzTmVlZGVkXHJcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuTW92aWU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkJveFNldDpcclxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Gb2xkZXI6XHJcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuVmlkZW86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZpZXMubGVuZ3RoID49IHRoaXMubWluaW11bUVsZW1lbnRzTmVlZGVkXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgYWxsb3dlZFByZXZpZXdUeXBlcygpIHsgXHJcbiAgICAgICAgLy8gVE9ETzogZ2V0IGZyb20gcGx1Z2luIGNvbmZpZyBpbiB0aGUgZnV0dXJlXHJcbiAgICAgICAgcmV0dXJuIFtJdGVtVHlwZS5TZXJpZXMsIEl0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuTW92aWUsIEl0ZW1UeXBlLkZvbGRlciwgSXRlbVR5cGUuVmlkZW9dXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgbWluaW11bUVsZW1lbnRzTmVlZGVkKCk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gVE9ETzogZ2V0IGZyb20gcGx1Z2luIGNvbmZpZyBpbiB0aGUgZnV0dXJlXHJcbiAgICAgICAgcmV0dXJuIDFcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbUJ5SWQoaXRlbUlkOiBzdHJpbmcpOiBCYXNlSXRlbSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5TZXJpZXM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFzb25zXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsYXRNYXAoc2Vhc29uID0+IHNlYXNvbi5lcGlzb2RlcylcclxuICAgICAgICAgICAgICAgICAgICAuZmluZChlcGlzb2RlID0+IGVwaXNvZGUuSWQgPT09IGl0ZW1JZClcclxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Cb3hTZXQ6XHJcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuTW92aWU6XHJcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuRm9sZGVyOlxyXG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLlZpZGVvOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW92aWVzLmZpbmQobW92aWUgPT4gbW92aWUuSWQgPT09IGl0ZW1JZClcclxuICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVJdGVtKGl0ZW1Ub1VwZGF0ZTogQmFzZUl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLlNlcmllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXNvbjogU2Vhc29uID0gdGhpcy5zZWFzb25zLmZpbmQoc2Vhc29uID0+IHNlYXNvbi5zZWFzb25JZCA9PT0gaXRlbVRvVXBkYXRlLlNlYXNvbklkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29ucyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uIHRoaXMuc2Vhc29ucy5maWx0ZXIoc2Vhc29uID0+IHNlYXNvbi5zZWFzb25JZCAhPT0gaXRlbVRvVXBkYXRlLlNlYXNvbklkKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2Vhc29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXBpc29kZXM6IFsuLi4gc2Vhc29uLmVwaXNvZGVzLmZpbHRlcihlcGlzb2RlID0+IGVwaXNvZGUuSWQgIT09IGl0ZW1Ub1VwZGF0ZS5JZCksIGl0ZW1Ub1VwZGF0ZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuQm94U2V0OlxyXG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLk1vdmllOlxyXG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLkZvbGRlcjpcclxuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5WaWRlbzpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92aWVzID0gWy4uLiB0aGlzLm1vdmllcy5maWx0ZXIobW92aWUgPT4gbW92aWUuSWQgIT09IGl0ZW1Ub1VwZGF0ZS5JZCksIGl0ZW1Ub1VwZGF0ZV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL1NlcnZpY2VzL0xvZ2dlclwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9TZXJ2aWNlcy9BdXRoU2VydmljZVwiO1xyXG5pbXBvcnQge1ByZXZpZXdCdXR0b25UZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGVcIjtcclxuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XHJcbmltcG9ydCB7RGF0YUxvYWRlcn0gZnJvbSBcIi4vU2VydmljZXMvRGF0YUxvYWRlclwiO1xyXG5pbXBvcnQge0RpYWxvZ0JhY2tkcm9wQ29udGFpbmVyVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvRGlhbG9nQmFja2Ryb3BDb250YWluZXJUZW1wbGF0ZVwiO1xyXG5pbXBvcnQge0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlXCI7XHJcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcclxuaW1wb3J0IHtMaXN0RWxlbWVudEZhY3Rvcnl9IGZyb20gXCIuL0xpc3RFbGVtZW50RmFjdG9yeVwiO1xyXG5pbXBvcnQge1BvcHVwVGl0bGVUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGVcIjtcclxuaW1wb3J0IHtEYXRhRmV0Y2hlcn0gZnJvbSBcIi4vU2VydmljZXMvRGF0YUZldGNoZXJcIjtcclxuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XHJcblxyXG4vLyBsb2FkIGFuZCBpbmplY3QgaW5QbGF5ZXJQcmV2aWV3LmNzcyBpbnRvIHRoZSBwYWdlXHJcbi8qXHJcbiAqIEluamVjdCBzdHlsZSB0byBiZSB1c2VkIGZvciB0aGUgcHJldmlldyBwb3B1cFxyXG4gKi9cclxubGV0IGluUGxheWVyUHJldmlld1N0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG5pblBsYXllclByZXZpZXdTdHlsZS5pZCA9ICdpblBsYXllclByZXZpZXdTdHlsZSdcclxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5zZWxlY3RlZExpc3RJdGVtIHtoZWlnaHQ6IGF1dG87fSdcclxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3TGlzdEl0ZW0ge2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O30nXHJcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ICs9ICcucHJldmlld0xpc3RJdGVtQ29udGVudCB7d2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDE1LjV2aDsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO30nXHJcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ICs9ICcucHJldmlld1BvcHVwIHthbmltYXRpb246IDE0MG1zIGVhc2Utb3V0IDBzIDEgbm9ybWFsIGJvdGggcnVubmluZyBzY2FsZXVwOyBwb3NpdGlvbjogZml4ZWQ7IG1hcmdpbjogMHB4OyBib3R0b206IDEuNXZoOyBsZWZ0OiA1MHZ3OyB3aWR0aDogNDh2dzt9J1xyXG5pblBsYXllclByZXZpZXdTdHlsZS50ZXh0Q29udGVudCArPSAnLnByZXZpZXdQb3B1cFRpdGxlIHttYXgtaGVpZ2h0OiA0dmg7fSdcclxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3UG9wdXBTY3JvbGxlciB7bWF4LWhlaWdodDogNjB2aDt9J1xyXG5pblBsYXllclByZXZpZXdTdHlsZS50ZXh0Q29udGVudCArPSAnLnByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciB7bWFyZ2luLWxlZnQ6IGF1dG87IG1hcmdpbi1yaWdodDogMWVtO30nXHJcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ICs9ICcucHJldmlld0VwaXNvZGVDb250YWluZXIge3dpZHRoOiAxMDAlO30nXHJcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ICs9ICcucHJldmlld0VwaXNvZGVUaXRsZSB7cG9pbnRlci1ldmVudHM6IG5vbmU7fSdcclxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3RXBpc29kZUltYWdlQ2FyZCB7bWF4LXdpZHRoOiAzMCU7fSdcclxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3RXBpc29kZURlc2NyaXB0aW9uIHttYXJnaW4tbGVmdDogMC41ZW07IG1hcmdpbi10b3A6IDFlbTsgbWFyZ2luLXJpZ2h0OiAxLjVlbTsgZGlzcGxheTogYmxvY2s7fSdcclxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3RXBpc29kZURldGFpbHMge21hcmdpbi1sZWZ0OiAxZW07IGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDt9J1xyXG5kb2N1bWVudD8uaGVhZD8uYXBwZW5kQ2hpbGQoaW5QbGF5ZXJQcmV2aWV3U3R5bGUpXHJcblxyXG4vLyBpbml0IHNlcnZpY2VzIGFuZCBoZWxwZXJzXHJcbmNvbnN0IGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcigpXHJcbmNvbnN0IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSA9IG5ldyBBdXRoU2VydmljZSgpXHJcbmNvbnN0IHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUgPSBuZXcgUHJvZ3JhbURhdGFTdG9yZSgpXHJcbmNvbnN0IGRhdGFMb2FkZXI6IERhdGFMb2FkZXIgPSBuZXcgRGF0YUxvYWRlcihhdXRoU2VydmljZSlcclxubmV3IERhdGFGZXRjaGVyKHByb2dyYW1EYXRhU3RvcmUsIGF1dGhTZXJ2aWNlLCBsb2dnZXIpXHJcbmNvbnN0IHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyID0gbmV3IFBsYXliYWNrSGFuZGxlcihwcm9ncmFtRGF0YVN0b3JlLCBsb2dnZXIpXHJcbmNvbnN0IGxpc3RFbGVtZW50RmFjdG9yeSA9IG5ldyBMaXN0RWxlbWVudEZhY3RvcnkoZGF0YUxvYWRlciwgcGxheWJhY2tIYW5kbGVyLCBwcm9ncmFtRGF0YVN0b3JlKVxyXG5cclxuY29uc3QgdmlkZW9QYXRoczogc3RyaW5nW10gPSBbJy92aWRlbyddXHJcbmxldCBwcmV2aW91c1JvdXRlUGF0aDogc3RyaW5nID0gbnVsbFxyXG5sZXQgcHJldmlld0NvbnRhaW5lckxvYWRlZDogYm9vbGVhbiA9IGZhbHNlXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdzaG93Jywgdmlld1Nob3dFdmVudEhhbmRsZXIpXHJcblxyXG5mdW5jdGlvbiB2aWV3U2hvd0V2ZW50SGFuZGxlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZVBhdGg6IHN0cmluZyA9IGdldExvY2F0aW9uUGF0aCgpXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TG9jYXRpb25QYXRoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb246IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXHJcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlSW5kZXg6IG51bWJlciA9IGxvY2F0aW9uLmxhc3RJbmRleE9mKCcvJylcclxuICAgICAgICByZXR1cm4gbG9jYXRpb24uc3Vic3RyaW5nKGN1cnJlbnRSb3V0ZUluZGV4KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWwgYXR0ZW1wdCB0byBsb2FkIHRoZSB2aWRlbyB2aWV3IG9yIHNjaGVkdWxlIHJldHJpZXMuXHJcbiAgICBhdHRlbXB0TG9hZFZpZGVvVmlldygpXHJcbiAgICBwcmV2aW91c1JvdXRlUGF0aCA9IGN1cnJlbnRSb3V0ZVBhdGhcclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGF0dGVtcHRzIHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcsIHJldHJ5aW5nIHVwIHRvIDMgdGltZXMgaWYgbmVjZXNzYXJ5LlxyXG4gICAgZnVuY3Rpb24gYXR0ZW1wdExvYWRWaWRlb1ZpZXcocmV0cnlDb3VudCA9IDApOiB2b2lkIHtcclxuICAgICAgICBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhjdXJyZW50Um91dGVQYXRoKSkge1xyXG4gICAgICAgICAgICBpZiAocHJvZ3JhbURhdGFTdG9yZS5kYXRhSXNBbGxvd2VkRm9yUHJldmlldykge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByZXZpZXcgY29udGFpbmVyIGlzIGFscmVhZHkgbG9hZGVkIGJlZm9yZSBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZpZXdDb250YWluZXJMb2FkZWQgJiYgIWlzUHJldmlld0J1dHRvbkNyZWF0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRWaWRlb1ZpZXcoKVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdDb250YWluZXJMb2FkZWQgPSB0cnVlIC8vIFNldCBmbGFnIHRvIHRydWUgYWZ0ZXIgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJldHJ5Q291bnQgPCAzKSB7IC8vIFJldHJ5IHVwIHRvIDMgdGltZXNcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUmV0cnkgIyR7cmV0cnlDb3VudCArIDF9YClcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0TG9hZFZpZGVvVmlldyhyZXRyeUNvdW50ICsgMSlcclxuICAgICAgICAgICAgICAgIH0sIDEwMDAwKSAvLyBXYWl0IDEwIHNlY29uZHMgZm9yIGVhY2ggcmV0cnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhwcmV2aW91c1JvdXRlUGF0aCkpIHtcclxuICAgICAgICAgICAgdW5sb2FkVmlkZW9WaWV3KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGxvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gYWRkIHByZXZpZXcgYnV0dG9uIHRvIHRoZSBwYWdlXHJcbiAgICAgICAgY29uc3QgcGFyZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJykubGFzdEVsZW1lbnRDaGlsZC5wYXJlbnRFbGVtZW50OyAvLyBsYXN0RWxlbWVudENoaWxkLnBhcmVudEVsZW1lbnQgaXMgdXNlZCBmb3IgY2FzdGluZyBmcm9tIEVsZW1lbnQgdG8gSFRNTEVsZW1lbnRcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5Vc2VyUmF0aW5nXCIpKTtcclxuICAgICAgICAvLyBpZiBpbmRleCBpcyBpbnZhbGlkIHRyeSB0byB1c2UgdGhlIG9sZCBwb3NpdGlvbiAodXNlZCBpbiBKZWxseWZpbiAxMC44LjEyKVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpXHJcbiAgICAgICAgICAgIGluZGV4ID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmRJbmRleCgoY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9zZFRpbWVUZXh0XCIpKVxyXG5cclxuICAgICAgICBjb25zdCBwcmV2aWV3QnV0dG9uOiBQcmV2aWV3QnV0dG9uVGVtcGxhdGUgPSBuZXcgUHJldmlld0J1dHRvblRlbXBsYXRlKHBhcmVudCwgaW5kZXgpXHJcbiAgICAgICAgcHJldmlld0J1dHRvbi5yZW5kZXIocHJldmlld0J1dHRvbkNsaWNrSGFuZGxlcilcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJldmlld0J1dHRvbkNsaWNrSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQmFja2Ryb3A6IERpYWxvZ0JhY2tkcm9wQ29udGFpbmVyVGVtcGxhdGUgPSBuZXcgRGlhbG9nQmFja2Ryb3BDb250YWluZXJUZW1wbGF0ZShkb2N1bWVudC5ib2R5LCBkb2N1bWVudC5ib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIGRpYWxvZ0JhY2tkcm9wLnJlbmRlcigpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dDb250YWluZXI6IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlID0gbmV3IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlKGRvY3VtZW50LmJvZHksIGRvY3VtZW50LmJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgZGlhbG9nQ29udGFpbmVyLnJlbmRlcigoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpYWxvZ0JhY2tkcm9wLmdldEVsZW1lbnRJZCgpKSlcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlhbG9nQ29udGFpbmVyLmdldEVsZW1lbnRJZCgpKSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpXHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIiAvLyByZW1vdmUgb2xkIGNvbnRlbnRcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwVGl0bGU6IFBvcHVwVGl0bGVUZW1wbGF0ZSA9IG5ldyBQb3B1cFRpdGxlVGVtcGxhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwRm9jdXNDb250YWluZXInKSwgLTEsIHByb2dyYW1EYXRhU3RvcmUpXHJcbiAgICAgICAgICAgIHBvcHVwVGl0bGUucmVuZGVyKChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbnRlbnRDb250YWluZXInKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBlcGlzb2RlIGNvbnRlbnQgZm9yIGFsbCBleGlzdGluZyBlcGlzb2RlcyBpbiB0aGUgcHJldmlldyBsaXN0O1xyXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVTZWFzb25FbGVtZW50cyhwcm9ncmFtRGF0YVN0b3JlLnNlYXNvbnMsIGNvbnRlbnREaXYsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlU2Vhc29uLkluZGV4TnVtYmVyLCBwb3B1cFRpdGxlKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChwcm9ncmFtRGF0YVN0b3JlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuU2VyaWVzOlxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VGV4dChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZVNlYXNvbi5zZWFzb25OYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVFcGlzb2RlRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVTZWFzb24uZXBpc29kZXMsIGNvbnRlbnREaXYpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuTW92aWU6XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRUZXh0KCcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlRXBpc29kZUVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUubW92aWVzLmZpbHRlcihtb3ZpZSA9PiBtb3ZpZS5JZCA9PT0gcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKSwgY29udGVudERpdilcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5WaWRlbzpcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFRleHQoJycpXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVFcGlzb2RlRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5tb3ZpZXMsIGNvbnRlbnREaXYpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuQm94U2V0OlxyXG4gICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5Gb2xkZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRUZXh0KHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlRXBpc29kZUVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUubW92aWVzLCBjb250ZW50RGl2KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgZXBpc29kZSB0aGF0IGlzIGN1cnJlbnRseSBwbGF5aW5nXHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkTGlzdEl0ZW0nKS5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1bmxvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gQ2xlYXIgb2xkIGRhdGEgYW5kIHJlc2V0IHByZXZpZXdDb250YWluZXJMb2FkZWQgZmxhZ1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlLnNldEF1dGhIZWFkZXJWYWx1ZShcIlwiKVxyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2dCYWNrZHJvcENvbnRhaW5lclwiKSlcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ0JhY2tkcm9wQ29udGFpbmVyXCIpKVxyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ0NvbnRhaW5lclwiKSlcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ0NvbnRhaW5lclwiKSlcclxuICAgICAgICBcclxuICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gZmFsc2UgLy8gUmVzZXQgZmxhZyB3aGVuIHVubG9hZGluZ1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpc1ByZXZpZXdCdXR0b25DcmVhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucycpLnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cFByZXZpZXdCdXR0b24nKSAhPT0gbnVsbFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9