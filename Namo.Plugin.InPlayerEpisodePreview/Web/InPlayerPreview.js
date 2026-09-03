/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Web/Components/BaseTemplate.ts"
/*!****************************************!*\
  !*** ./Web/Components/BaseTemplate.ts ***!
  \****************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseTemplate = void 0;
class BaseTemplate {
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


/***/ },

/***/ "./Web/Components/DialogContainerTemplate.ts"
/*!***************************************************!*\
  !*** ./Web/Components/DialogContainerTemplate.ts ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DialogContainerTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class DialogContainerTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex) {
        super(container, positionAfterIndex);
        this.dialogBackdropId = 'dialogBackdrop';
        this.dialogContainerId = 'dialogContainer';
        this.popupContentContainerId = 'popupContentContainer';
        this.popupFocusContainerId = 'popupFocusContainer';
        this.setElementId('previewPopup');
    }
    getTemplate() {
        return `
            <div id="${this.getElementId()}">
                <div id="${this.dialogBackdropId}" class="dialogBackdrop dialogBackdropOpened"></div>
                <div id="${this.dialogContainerId}" class="dialogContainer">
                    <div id="${this.popupFocusContainerId}" 
                        class="focuscontainer dialog actionsheet-not-fullscreen actionSheet centeredDialog opened previewPopup actionSheetContent" 
                        data-history="true" 
                        data-removeonclose="true">
                        <div id="${this.popupContentContainerId}" class="actionSheetScroller scrollY previewPopupScroller"/>
                    </div>
                </div>
            </div>
        `;
    }
    render() {
        const renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => {
            this.getContainer().removeChild(document.getElementById(this.getElementId()));
        });
    }
}
exports.DialogContainerTemplate = DialogContainerTemplate;


/***/ },

/***/ "./Web/Components/GroupListElementTemplate.ts"
/*!****************************************************!*\
  !*** ./Web/Components/GroupListElementTemplate.ts ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupListElementTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
const WatchProgress_1 = __webpack_require__(/*! ../Models/PreviewData/WatchProgress */ "./Web/Models/PreviewData/WatchProgress.ts");
class GroupListElementTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex, group, isCurrentGroup, showWatchedCount, watchCountDisplayMode) {
        super(container, positionAfterIndex);
        this.group = group;
        this.isCurrentGroup = isCurrentGroup;
        this.showWatchedCount = showWatchedCount;
        this.watchCountDisplayMode = watchCountDisplayMode;
        this.setElementId(`group-${group.groupId}`);
    }
    getTemplate() {
        // language=HTML
        return `
            <div id="${this.getElementId()}"
                 class="listItem listItem-button actionSheetMenuItem emby-button previewListItem"
                 is="emby-button"
                 data-id="${this.group.groupId}">
                <button class="listItem previewItemTitle" type="button">
                    <span class="${this.isCurrentGroup ? "material-icons check" : ""}"></span>
                    <div class="listItemBody actionsheetListItemBody">
                        <span class="actionSheetItemText">${this.group.groupName}</span>
                    </div>
                    ${this.showWatchedCount ? `<div class="previewGroupWatchedCount">${(0, WatchProgress_1.renderWatchedCountInnerHtml)(this.group, this.watchCountDisplayMode)}</div>` : ''}
                </button>
            </div>
        `;
    }
    render(clickHandler) {
        const renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
    }
}
exports.GroupListElementTemplate = GroupListElementTemplate;


/***/ },

/***/ "./Web/Components/ItemDetails.ts"
/*!***************************************!*\
  !*** ./Web/Components/ItemDetails.ts ***!
  \***************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemDetailsTemplate = exports.updateEndTimeDisplay = exports.formatEndTime = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
function getCurrentPlaybackRate() {
    var _a;
    return ((_a = document.querySelector('video.htmlvideoplayer')) === null || _a === void 0 ? void 0 : _a.playbackRate) || 1;
}
function zeroPad(num, places = 2) {
    return String(num).padStart(places, '0');
}
function formatEndTime(runtimeTicks, playbackPositionTicks) {
    // convert from ticks (100ns units) to milliseconds
    runtimeTicks /= 10000;
    playbackPositionTicks /= 10000;
    const remainingMs = (runtimeTicks - playbackPositionTicks) / getCurrentPlaybackRate();
    let ticks = Date.now() + remainingMs;
    ticks -= (new Date()).getTimezoneOffset() * 60 * 1000; // adjust for timezone
    let hours = zeroPad(Math.floor((ticks / 1000 / 3600) % 24));
    let minutes = zeroPad(Math.floor((ticks / 1000 / 60) % 60));
    return `Ends at ${hours}:${minutes}`;
}
exports.formatEndTime = formatEndTime;
function updateEndTimeDisplay(item) {
    const element = document.querySelector(`.endsAt[data-item-id="${item.Id}"]`);
    if (!element || !item.RunTimeTicks)
        return;
    element.textContent = formatEndTime(item.RunTimeTicks, item.UserData.PlaybackPositionTicks);
}
exports.updateEndTimeDisplay = updateEndTimeDisplay;
class ItemDetailsTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex, item) {
        super(container, positionAfterIndex);
        this.item = item;
        this.setElementId(`item-${item.Id}`);
    }
    getTemplate() {
        // language=HTML
        return `
            <div id="${this.getElementId()}-details" class="itemMiscInfo itemMiscInfo-primary previewItemDetails">
                ${this.item.PremiereDate ? `<div class="mediaInfoItem">
                    ${(new Date(this.item.PremiereDate)).toLocaleDateString(this.getLocale())}
                </div>` : ''}
                <div class="mediaInfoItem">${this.formatRunTime(this.item.RunTimeTicks)}</div>
                ${this.item.CommunityRating ? `<div class="starRatingContainer mediaInfoItem">
                    <span class="material-icons starIcon star" aria-hidden="true"></span>
                    ${this.item.CommunityRating.toFixed(1)}
                </div>` : ''}
                ${this.item.CriticRating ? `<div class="mediaInfoItem mediaInfoCriticRating ${this.item.CriticRating >= 60 ? 'mediaInfoCriticRatingFresh' : 'mediaInfoCriticRatingRotten'}">
                    ${this.item.CriticRating}
                </div>` : ''}
                <div class="endsAt mediaInfoItem" data-item-id="${this.item.Id}">${formatEndTime(this.item.RunTimeTicks, this.item.UserData.PlaybackPositionTicks)}</div>
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
}
exports.ItemDetailsTemplate = ItemDetailsTemplate;


/***/ },

/***/ "./Web/Components/ListElementTemplate.ts"
/*!***********************************************!*\
  !*** ./Web/Components/ListElementTemplate.ts ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListElementTemplate = exports.setItemOverlayActive = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
const FavoriteIconTemplate_1 = __webpack_require__(/*! ./QuickActions/FavoriteIconTemplate */ "./Web/Components/QuickActions/FavoriteIconTemplate.ts");
const PlayStateIconTemplate_1 = __webpack_require__(/*! ./QuickActions/PlayStateIconTemplate */ "./Web/Components/QuickActions/PlayStateIconTemplate.ts");
const ItemDetails_1 = __webpack_require__(/*! ./ItemDetails */ "./Web/Components/ItemDetails.ts");
const ItemType_1 = __webpack_require__(/*! ../Models/ItemType */ "./Web/Models/ItemType.ts");
const DataFetcher_1 = __webpack_require__(/*! ../Services/DataFetcher */ "./Web/Services/DataFetcher.ts");
// Shows/hides the "start playback" overlay for a rendered list item
function setItemOverlayActive(itemId, isActive) {
    var _a;
    (_a = document.getElementById(`cardOverlay-${itemId}`)) === null || _a === void 0 ? void 0 : _a.classList.toggle('hide', isActive);
}
exports.setItemOverlayActive = setItemOverlayActive;
class ListElementTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex, item, playbackHandler, programDataStore) {
        super(container, positionAfterIndex);
        this.item = item;
        this.playbackHandler = playbackHandler;
        this.programDataStore = programDataStore;
        this.setElementId(`item-${item.Id}`);
        // create temp quick action container
        this.quickActionContainer = document.createElement('div');
        // create quick actions
        this.playStateIcon = new PlayStateIconTemplate_1.PlayStateIconTemplate(this.quickActionContainer, -1, this.item);
        this.favoriteIcon = new FavoriteIconTemplate_1.FavoriteIconTemplate(this.quickActionContainer, 0, this.item);
    }
    getTemplate() {
        var _a;
        // add quick actions
        this.playStateIcon.render();
        this.favoriteIcon.render();
        // add item details/info
        const detailsContainer = document.createElement('div');
        const details = new ItemDetails_1.ItemDetailsTemplate(detailsContainer, -1, this.item);
        details.render();
        const backgroundImageStyle = `background-image: url('../Items/${this.item.Id}/Images/Primary?tag=${this.item.PrimaryImageTag}')`;
        const shouldBlur = !(this.programDataStore.pluginSettings.OnlyBlurUnwatched && this.item.UserData.Played);
        // language=HTML
        return `
            <div id="${this.getElementId()}"
                 class="listItem listItem-button actionSheetMenuItem emby-button previewListItem"
                 is="emby-button"
                 data-id="${this.item.Id}">
                <div class="previewItemContainer flex">
                    <button class="listItem previewItemTitle" type="button">
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
                    <div class="flex previewItemContentRow">
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
                                        </div>` : ''}
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
                        <div class="previewItemDescriptionColumn">
                            <span class="previewItemDescription ${this.programDataStore.pluginSettings.BlurDescription && shouldBlur ? 'blur' : ''}">
                                ${(_a = this.item.Description) !== null && _a !== void 0 ? _a : 'loading...'}
                            </span>
                            <button type="button" class="previewItemReadMoreButton hide">Show more</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    render(clickHandler) {
        var _a;
        const renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
        const playStateButton = document.getElementById(`playStateButton-${this.item.Id}`);
        playStateButton === null || playStateButton === void 0 ? void 0 : playStateButton.addEventListener('click', (e) => {
            e.stopPropagation();
            (0, DataFetcher_1.togglePlayedStateLocally)(this.programDataStore, this.item.Id);
        });
        (_a = renderedElement.querySelector('.previewItemDescription')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => e.stopPropagation());
        const itemImageCard = document.getElementById(`start-item-${this.item.Id}`);
        itemImageCard.addEventListener('click', () => this.playbackHandler.play(this.item.Id, this.item.UserData.PlaybackPositionTicks));
    }
}
exports.ListElementTemplate = ListElementTemplate;


/***/ },

/***/ "./Web/Components/PopupTitleTemplate.ts"
/*!**********************************************!*\
  !*** ./Web/Components/PopupTitleTemplate.ts ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupTitleTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
const WatchProgress_1 = __webpack_require__(/*! ../Models/PreviewData/WatchProgress */ "./Web/Models/PreviewData/WatchProgress.ts");
class PopupTitleTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex, programDataStore) {
        super(container, positionAfterIndex);
        this.programDataStore = programDataStore;
        this.setElementId('popupTitleContainer');
    }
    getTemplate() {
        return `
            <div id="${this.getElementId()}" class="listItem previewPopupTitle">
                <span id="popupTitleSwitchIcon" class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons keyboard_backspace ${this.programDataStore.groups.length > 1 ? '' : 'hide'}"></span>
                <h1 class="actionSheetTitle"></h1>
                ${this.programDataStore.pluginSettings.ShowWatchedCount ? '<div class="previewGroupWatchedCount"></div>' : ''}
            </div>
        `;
    }
    render(clickHandler) {
        const renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
    }
    setText(text) {
        this.getElement().querySelector('h1').innerText = text;
    }
    setSwitchable(switchable) {
        var _a;
        (_a = this.getElement().querySelector('#popupTitleSwitchIcon')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hide', !switchable);
    }
    setWatchedCount(group) {
        const watchedCountElement = this.getElement().querySelector('.previewGroupWatchedCount');
        if (watchedCountElement)
            watchedCountElement.innerHTML = (0, WatchProgress_1.renderWatchedCountInnerHtml)(group, this.programDataStore.pluginSettings.WatchCountDisplayMode);
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


/***/ },

/***/ "./Web/Components/PreviewButtonTemplate.ts"
/*!*************************************************!*\
  !*** ./Web/Components/PreviewButtonTemplate.ts ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


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
        const renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', () => clickHandler());
    }
}
exports.PreviewButtonTemplate = PreviewButtonTemplate;


/***/ },

/***/ "./Web/Components/QuickActions/FavoriteIconTemplate.ts"
/*!*************************************************************!*\
  !*** ./Web/Components/QuickActions/FavoriteIconTemplate.ts ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FavoriteIconTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ../BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class FavoriteIconTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex, item) {
        super(container, positionAfterIndex);
        this.item = item;
        this.setElementId('favoriteButton-' + item.Id);
    }
    getTemplate() {
        var _a, _b, _c, _d, _e, _f, _g;
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="emby-ratingbutton"
                    type="button"
                    class="itemAction paper-icon-button-light emby-button"
                    data-action="none"
                    data-id="${(_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.Id) !== null && _b !== void 0 ? _b : ''}"
                    data-serverid="${(_d = (_c = this.item) === null || _c === void 0 ? void 0 : _c.ServerId) !== null && _d !== void 0 ? _d : ''}"
                    data-itemtype="Episode"
                    data-likes=""
                    data-isfavorite="${(_g = (_f = (_e = this.item) === null || _e === void 0 ? void 0 : _e.UserData) === null || _f === void 0 ? void 0 : _f.IsFavorite) !== null && _g !== void 0 ? _g : false}"
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


/***/ },

/***/ "./Web/Components/QuickActions/PlayStateIconTemplate.ts"
/*!**************************************************************!*\
  !*** ./Web/Components/QuickActions/PlayStateIconTemplate.ts ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayStateIconTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ../BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class PlayStateIconTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex, item) {
        super(container, positionAfterIndex);
        this.item = item;
        this.setElementId('playStateButton-' + this.item.Id);
    }
    getTemplate() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="emby-playstatebutton"
                    type="button"
                    data-action="none"
                    class="itemAction paper-icon-button-light emby-button"
                    data-id="${(_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.Id) !== null && _b !== void 0 ? _b : ''}"
                    data-serverid="${(_d = (_c = this.item) === null || _c === void 0 ? void 0 : _c.ServerId) !== null && _d !== void 0 ? _d : ''}"
                    data-itemtype="Episode"
                    data-likes=""
                    data-played="${(_g = (_f = (_e = this.item) === null || _e === void 0 ? void 0 : _e.UserData) === null || _f === void 0 ? void 0 : _f.Played) !== null && _g !== void 0 ? _g : false}"
                    title="Mark played">
                <span class="material-icons check playstatebutton-icon-${((_j = (_h = this.item) === null || _h === void 0 ? void 0 : _h.UserData) === null || _j === void 0 ? void 0 : _j.Played) ? "played" : "unplayed"}"></span>
            </button>
        `;
    }
    render() {
        this.addElementToContainer();
    }
}
exports.PlayStateIconTemplate = PlayStateIconTemplate;


/***/ },

/***/ "./Web/Components/Spinner.ts"
/*!***********************************!*\
  !*** ./Web/Components/Spinner.ts ***!
  \***********************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activateSpinner = exports.spinnerHtml = void 0;
const SPINNER_LAYERS_HTML = [1, 2, 3, 4].map(layer => `<div class="mdl-spinner__layer mdl-spinner__layer-${layer}">` +
    `<div class="mdl-spinner__circle-clipper mdl-spinner__left">` +
    `<div class="mdl-spinner__circle mdl-spinner__circleLeft"></div>` +
    `</div>` +
    `<div class="mdl-spinner__circle-clipper mdl-spinner__right">` +
    `<div class="mdl-spinner__circle mdl-spinner__circleRight"></div>` +
    `</div>` +
    `</div>`).join('');
function spinnerHtml(extraClasses = '') {
    return `<div dir="ltr" class="docspinner mdl-spinner ${extraClasses}">${SPINNER_LAYERS_HTML}</div>`;
}
exports.spinnerHtml = spinnerHtml;
function activateSpinner(container) {
    var _a;
    (_a = container.querySelector('.mdl-spinner')) === null || _a === void 0 ? void 0 : _a.classList.add('mdlSpinnerActive');
}
exports.activateSpinner = activateSpinner;


/***/ },

/***/ "./Web/Endpoints.ts"
/*!**************************!*\
  !*** ./Web/Endpoints.ts ***!
  \**************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Endpoints = void 0;
var Endpoints;
(function (Endpoints) {
    Endpoints["BASE"] = "InPlayerPreview";
    Endpoints["ITEM_DESCRIPTION"] = "/Items/{itemId}";
    Endpoints["PLAY_MEDIA"] = "/Items/{itemId}/Play/{ticks}";
    Endpoints["NOW_PLAYING_ITEM"] = "/NowPlayingItem";
    Endpoints["SERVER_SETTINGS"] = "/ServerSettings";
    Endpoints["ITEM_PREVIEW_TYPE"] = "/Users/{userId}/{deviceId}/Items/{itemId}/PreviewItemType";
    Endpoints["ITEM_PREVIEW_DATA"] = "/Users/{userId}/{deviceId}/Items/{itemId}/PreviewData";
    Endpoints["GROUP_ITEMS"] = "/Users/{userId}/Groups/{groupId}/Items";
    Endpoints["GROUP_WATCHED_COUNT"] = "/Users/{userId}/Groups/{groupId}/WatchedCount";
    Endpoints["CONTAINING_COLLECTIONS"] = "/Users/{userId}/Items/{itemId}/ContainingCollections";
    Endpoints["SET_SOURCE_COLLECTION"] = "/Users/{userId}/{deviceId}/SourceCollection/{collectionId}";
    Endpoints["PLUGIN_SETTINGS"] = "/PluginSettings";
})(Endpoints || (exports.Endpoints = Endpoints = {}));


/***/ },

/***/ "./Web/ListElementFactory.ts"
/*!***********************************!*\
  !*** ./Web/ListElementFactory.ts ***!
  \***********************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListElementFactory = void 0;
const ListElementTemplate_1 = __webpack_require__(/*! ./Components/ListElementTemplate */ "./Web/Components/ListElementTemplate.ts");
const Group_1 = __webpack_require__(/*! ./Models/PreviewData/Group */ "./Web/Models/PreviewData/Group.ts");
const GroupListElementTemplate_1 = __webpack_require__(/*! ./Components/GroupListElementTemplate */ "./Web/Components/GroupListElementTemplate.ts");
const Endpoints_1 = __webpack_require__(/*! ./Endpoints */ "./Web/Endpoints.ts");
const ItemType_1 = __webpack_require__(/*! ./Models/ItemType */ "./Web/Models/ItemType.ts");
const Spinner_1 = __webpack_require__(/*! ./Components/Spinner */ "./Web/Components/Spinner.ts");
const DataFetcher_1 = __webpack_require__(/*! ./Services/DataFetcher */ "./Web/Services/DataFetcher.ts");
// The backend already returns Playlists/BoxSets and Folders in their own manual item/dissplay order
// sorting should only apply for season-based (Episode) groups, where it reflects actual episode order.
const preserveBackendOrderTypes = new Set([ItemType_1.ItemType.Playlist, ItemType_1.ItemType.BoxSet, ItemType_1.ItemType.Folder]);
class ListElementFactory {
    constructor(playbackHandler, programDataStore, logger) {
        this.playbackHandler = playbackHandler;
        this.programDataStore = programDataStore;
        this.logger = logger;
    }
    async createItemElements(items, parentDiv, offset = 0) {
        const preserveOrder = preserveBackendOrderTypes.has(this.programDataStore.type);
        if (!preserveOrder)
            items.sort((a, b) => a.IndexNumber - b.IndexNumber);
        for (let i = 0; i < items.length; i++) {
            // For Playlists/BoxSets, show the actual list position instead of the IndexNumber from their season/episode.
            const item = preserveOrder ? Object.assign(Object.assign({}, items[i]), { IndexNumber: offset + i + 1 }) : items[i];
            await this.renderItem(item, parentDiv, offset + i);
        }
    }
    async prependItemElements(items, parentDiv, offset) {
        const preserveOrder = preserveBackendOrderTypes.has(this.programDataStore.type);
        if (!preserveOrder)
            items.sort((a, b) => a.IndexNumber - b.IndexNumber);
        for (let i = items.length - 1; i >= 0; i--) {
            const item = preserveOrder ? Object.assign(Object.assign({}, items[i]), { IndexNumber: offset + i + 1 }) : items[i];
            await this.renderItem(item, parentDiv, -1);
        }
    }
    // Show a "Show more" button if description exceeds max height
    applyDescriptionReadMore(itemContainer) {
        const description = itemContainer.querySelector('.previewItemDescription');
        const readMoreButton = itemContainer.querySelector('.previewItemReadMoreButton');
        if (!description || !readMoreButton)
            return;
        description.classList.remove('expanded');
        readMoreButton.textContent = 'Show more';
        const isOverflowing = description.scrollHeight > description.clientHeight;
        readMoreButton.classList.toggle('hide', !isOverflowing);
        if (!isOverflowing)
            return;
        readMoreButton.onclick = (e) => {
            e.stopPropagation();
            const expanded = description.classList.toggle('expanded');
            readMoreButton.textContent = expanded ? 'Show less' : 'Show more';
        };
    }
    async renderItem(item, parentDiv, positionAfterIndex) {
        const itemListElementTemplate = new ListElementTemplate_1.ListElementTemplate(parentDiv, positionAfterIndex, item, this.playbackHandler, this.programDataStore);
        itemListElementTemplate.render(async (e) => {
            e.stopPropagation();
            // hide item content for all existing items in the preview list
            document.querySelectorAll(".previewListItemContent").forEach((element) => {
                element.classList.add('hide');
                element.classList.remove('selectedListItem');
            });
            const itemContainer = document.getElementById(`item-${item.Id}`).querySelector('.previewListItemContent');
            // load item description
            if (!item.Description) {
                try {
                    const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.ITEM_DESCRIPTION}`
                        .replace('{itemId}', item.Id));
                    const result = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
                    const newDescription = result === null || result === void 0 ? void 0 : result.Description;
                    this.programDataStore.updateItem(Object.assign(Object.assign({}, item), { Description: newDescription }));
                    itemContainer.querySelector('.previewItemDescription').textContent = newDescription;
                }
                catch (ex) {
                    this.logger.error(`Couldn't load description for item ${item.Id}`, ex);
                }
            }
            // show item content for the selected item
            itemContainer.classList.remove('hide');
            itemContainer.classList.add('selectedListItem');
            this.applyDescriptionReadMore(itemContainer);
            // scroll to the selected item
            itemContainer.parentElement.scrollIntoView({ block: "start" });
        });
        if (item.Id === this.programDataStore.activeMediaSourceId) {
            const itemNode = document.getElementById(`item-${item.Id}`).querySelector('.previewListItemContent');
            // preload description for the currently playing item
            if (!item.Description) {
                try {
                    const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.ITEM_DESCRIPTION}`
                        .replace('{itemId}', item.Id));
                    const result = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
                    const newDescription = result === null || result === void 0 ? void 0 : result.Description;
                    this.programDataStore.updateItem(Object.assign(Object.assign({}, item), { Description: newDescription }));
                    itemNode.querySelector('.previewItemDescription').textContent = newDescription;
                }
                catch (ex) {
                    this.logger.error(`Couldn't load description for item ${item.Id}`, ex);
                }
            }
            itemNode.classList.remove('hide');
            itemNode.classList.add('selectedListItem');
            this.applyDescriptionReadMore(itemNode);
        }
    }
    createSpinnerElement() {
        const spinner = document.createElement('div');
        spinner.classList.add('previewScrollSpinner');
        spinner.innerHTML = (0, Spinner_1.spinnerHtml)();
        (0, Spinner_1.activateSpinner)(spinner);
        return spinner;
    }
    attachScrollPagination(parentDiv, loadPage, viewToken, initialTotalLoaded, initialTotalRecordCount, initialLoadedStartIndex) {
        const SCROLL_TRIGGER_DISTANCE_PX = 200;
        let totalLoaded = initialTotalLoaded;
        let totalRecordCount = initialTotalRecordCount;
        let loadedStartIndex = initialLoadedStartIndex;
        let loadingForward = false;
        let loadingBackward = false;
        const loadNextPage = async () => {
            loadingForward = true;
            const spinner = this.createSpinnerElement();
            parentDiv.appendChild(spinner);
            try {
                const { items, totalRecordCount: newTotalRecordCount } = await loadPage(totalLoaded);
                // The view may have moved on (e.g. back to the group list) while this page was loading.
                if (!this.programDataStore.isCurrentView(viewToken))
                    return;
                spinner.remove();
                await this.createItemElements(items, parentDiv, totalLoaded);
                totalLoaded += items.length;
                totalRecordCount = newTotalRecordCount;
                // The newly loaded page might still not fill the container, so re-check right away.
                checkScrollPosition();
            }
            catch (ex) {
                this.logger.error(`Couldn't load next page of items (startIndex ${totalLoaded})`, ex);
                spinner.remove();
            }
            finally {
                loadingForward = false;
            }
        };
        const loadPreviousPage = async () => {
            loadingBackward = true;
            const scrollHeightBeforeSpinner = parentDiv.scrollHeight;
            const spinner = this.createSpinnerElement();
            parentDiv.insertBefore(spinner, parentDiv.firstChild);
            parentDiv.scrollTop += parentDiv.scrollHeight - scrollHeightBeforeSpinner;
            const pageSize = this.programDataStore.pluginSettings.EpisodePageSize;
            const newStartIndex = Math.max(0, loadedStartIndex - pageSize);
            try {
                const { items } = await loadPage(newStartIndex);
                // The view may have moved on (e.g. back to the group list) while this page was loading.
                if (!this.programDataStore.isCurrentView(viewToken))
                    return;
                const scrollHeightBeforePrepend = parentDiv.scrollHeight;
                spinner.remove();
                await this.prependItemElements(items, parentDiv, newStartIndex);
                parentDiv.scrollTop += parentDiv.scrollHeight - scrollHeightBeforePrepend;
                loadedStartIndex = newStartIndex;
                checkScrollPosition();
            }
            catch (ex) {
                this.logger.error(`Couldn't load previous page of items (startIndex ${newStartIndex})`, ex);
                spinner.remove();
            }
            finally {
                loadingBackward = false;
            }
        };
        const checkScrollPosition = () => {
            if (!this.programDataStore.isCurrentView(viewToken)) {
                parentDiv.removeEventListener('scroll', checkScrollPosition);
                return;
            }
            const nearBottom = parentDiv.scrollTop + parentDiv.clientHeight >= parentDiv.scrollHeight - SCROLL_TRIGGER_DISTANCE_PX;
            if (!loadingForward && totalLoaded < totalRecordCount && nearBottom) {
                loadNextPage();
                return;
            }
            const nearTop = parentDiv.scrollTop <= SCROLL_TRIGGER_DISTANCE_PX;
            if (!loadingBackward && loadedStartIndex > 0 && nearTop) {
                loadPreviousPage();
            }
        };
        parentDiv.addEventListener('scroll', checkScrollPosition);
        checkScrollPosition();
    }
    async createLazyItemList(parentDiv, loadPage, viewToken, initialPage, initialOffset = 0) {
        const firstPage = initialPage !== null && initialPage !== void 0 ? initialPage : await loadPage(0);
        // The view may have moved on (e.g. back to the group list) while this page was loading.
        if (!this.programDataStore.isCurrentView(viewToken))
            return;
        await this.createItemElements(firstPage.items, parentDiv, initialOffset);
        const totalLoaded = initialOffset + firstPage.items.length;
        this.attachScrollPagination(parentDiv, loadPage, viewToken, totalLoaded, firstPage.totalRecordCount, initialOffset);
    }
    async fetchGroupWatchedCount(groupId) {
        const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.GROUP_WATCHED_COUNT}`
            .replace('{userId}', ApiClient.getCurrentUserId())
            .replace('{groupId}', groupId));
        const raw = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
        return {
            playedItemCount: raw.PlayedItemCount,
            totalItemCount: raw.TotalItemCount,
            playedRuntimeTicks: raw.PlayedRuntimeTicks,
            totalRuntimeTicks: raw.TotalRuntimeTicks
        };
    }
    async ensureGroupWatchedCount(group) {
        if (group.playedItemCount !== Group_1.UNKNOWN_WATCHED_COUNT)
            return group;
        const { playedItemCount, totalItemCount, playedRuntimeTicks, totalRuntimeTicks } = await this.fetchGroupWatchedCount(group.groupId);
        this.programDataStore.setGroupWatchedCount(group.groupId, playedItemCount, totalItemCount, playedRuntimeTicks, totalRuntimeTicks);
        return Object.assign(Object.assign({}, group), { playedItemCount, totalItemCount, playedRuntimeTicks, totalRuntimeTicks });
    }
    createGroupElements(groups, parentDiv, currentGroupIndex, titleContainer, loadItems) {
        groups.sort((a, b) => a.indexNumber - b.indexNumber);
        // Invalidates any item load still in progresss
        this.programDataStore.beginNewView();
        for (let i = 0; i < groups.length; i++) {
            const group = new GroupListElementTemplate_1.GroupListElementTemplate(parentDiv, i, groups[i], groups[i].indexNumber === currentGroupIndex, this.programDataStore.pluginSettings.ShowWatchedCount, this.programDataStore.pluginSettings.WatchCountDisplayMode);
            group.render(async (e) => {
                var _a, _b;
                e.stopPropagation();
                this.programDataStore.activeGroupId = groups[i].groupId;
                titleContainer.setText(groups[i].groupName);
                if (this.programDataStore.pluginSettings.ShowWatchedCount) {
                    titleContainer.setWatchedCount(groups[i]);
                    if (groups[i].playedItemCount === Group_1.UNKNOWN_WATCHED_COUNT) {
                        this.ensureGroupWatchedCount(groups[i])
                            .then(updated => titleContainer.setWatchedCount(updated))
                            .catch((ex) => this.logger.error(`Couldn't load watched count for group ${groups[i].groupId}`, ex));
                    }
                }
                titleContainer.setVisible(true);
                parentDiv.innerHTML = '';
                const viewToken = this.programDataStore.beginNewView();
                const cached = !this.programDataStore.isGroupsCacheExpired
                    ? this.programDataStore.groups.find(g => g.groupId === groups[i].groupId)
                    : undefined;
                const initialPage = (cached === null || cached === void 0 ? void 0 : cached.loadedStartIndex) !== undefined
                    ? { items: [...cached.items], totalRecordCount: (_a = cached.loadedTotalRecordCount) !== null && _a !== void 0 ? _a : cached.items.length }
                    : undefined;
                const initialOffset = (_b = cached === null || cached === void 0 ? void 0 : cached.loadedStartIndex) !== null && _b !== void 0 ? _b : 0;
                try {
                    await this.createLazyItemList(parentDiv, (startIndex) => loadItems(groups[i].groupId, startIndex), viewToken, initialPage, initialOffset);
                }
                catch (ex) {
                    this.logger.error(`Couldn't load items for group ${groups[i].groupId}`, ex);
                }
            });
            if (this.programDataStore.pluginSettings.ShowWatchedCount && groups[i].playedItemCount === Group_1.UNKNOWN_WATCHED_COUNT) {
                this.ensureGroupWatchedCount(groups[i])
                    .then(updated => (0, DataFetcher_1.updateWatchedCountDom)(this.programDataStore, updated))
                    .catch((ex) => this.logger.error(`Couldn't load watched count for group ${groups[i].groupId}`, ex));
            }
        }
    }
}
exports.ListElementFactory = ListElementFactory;


/***/ },

/***/ "./Web/Models/ItemType.ts"
/*!********************************!*\
  !*** ./Web/Models/ItemType.ts ***!
  \********************************/
(__unused_webpack_module, exports) {


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


/***/ },

/***/ "./Web/Models/LogLevel.ts"
/*!********************************!*\
  !*** ./Web/Models/LogLevel.ts ***!
  \********************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["None"] = 0] = "None";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Information"] = 2] = "Information";
    LogLevel[LogLevel["Debug"] = 3] = "Debug";
})(LogLevel || (exports.LogLevel = LogLevel = {}));


/***/ },

/***/ "./Web/Models/PluginSettings.ts"
/*!**************************************!*\
  !*** ./Web/Models/PluginSettings.ts ***!
  \**************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultPluginSettings = void 0;
const ItemType_1 = __webpack_require__(/*! ./ItemType */ "./Web/Models/ItemType.ts");
const WatchCountDisplayMode_1 = __webpack_require__(/*! ./WatchCountDisplayMode */ "./Web/Models/WatchCountDisplayMode.ts");
const LogLevel_1 = __webpack_require__(/*! ./LogLevel */ "./Web/Models/LogLevel.ts");
exports.DefaultPluginSettings = {
    EnabledItemTypes: [ItemType_1.ItemType.Series, ItemType_1.ItemType.BoxSet, ItemType_1.ItemType.Movie, ItemType_1.ItemType.Video],
    BlurDescription: false,
    BlurThumbnail: false,
    EpisodePageSize: 10,
    ShowWatchedCount: true,
    WatchCountDisplayMode: WatchCountDisplayMode_1.WatchCountDisplayMode.HoursMinutes,
    SearchContainingCollections: true,
    OnlyBlurUnwatched: false,
    ShowWatchProgress: true,
    LogLevel: LogLevel_1.LogLevel.Information,
};


/***/ },

/***/ "./Web/Models/PreviewData/Group.ts"
/*!*****************************************!*\
  !*** ./Web/Models/PreviewData/Group.ts ***!
  \*****************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatWatchedCount = exports.UNKNOWN_WATCHED_COUNT = void 0;
exports.UNKNOWN_WATCHED_COUNT = -1;
const formatWatchedCount = (playedItemCount, totalItemCount) => playedItemCount === exports.UNKNOWN_WATCHED_COUNT || totalItemCount === exports.UNKNOWN_WATCHED_COUNT
    ? '… watched'
    : `${playedItemCount}/${totalItemCount} watched`;
exports.formatWatchedCount = formatWatchedCount;


/***/ },

/***/ "./Web/Models/PreviewData/WatchProgress.ts"
/*!*************************************************!*\
  !*** ./Web/Models/PreviewData/WatchProgress.ts ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderWatchedCountInnerHtml = exports.formatWatchedCountText = exports.isWatchedCountUnknown = exports.getWatchProgressPercent = void 0;
const Group_1 = __webpack_require__(/*! ./Group */ "./Web/Models/PreviewData/Group.ts");
const WatchCountDisplayMode_1 = __webpack_require__(/*! ../WatchCountDisplayMode */ "./Web/Models/WatchCountDisplayMode.ts");
const TICKS_PER_SECOND = 10000000;
const getTimeString = (ticks, mode) => {
    const seconds = ticks / TICKS_PER_SECOND;
    const totalMinutes = Math.floor(seconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalMonths = Math.floor(totalDays / 30);
    const totalYears = Math.floor(totalDays / 365);
    if (mode === WatchCountDisplayMode_1.WatchCountDisplayMode.HoursMinutes) {
        if (totalHours >= 1) {
            const minutes = totalMinutes % 60;
            return minutes > 0 ? `${totalHours}h ${minutes}m` : `${totalHours}h`;
        }
        return totalMinutes > 0 ? `${totalMinutes}m` : '0m';
    }
    if (totalYears >= 1) {
        const months = Math.floor((totalDays % 365) / 30);
        return months > 0 ? `${totalYears}y ${months}mo` : `${totalYears}y`;
    }
    if (totalMonths >= 1) {
        const days = totalDays % 30;
        return days > 0 ? `${totalMonths}mo ${days}d` : `${totalMonths}mo`;
    }
    if (totalDays >= 1) {
        const hours = totalHours % 24;
        return hours > 0 ? `${totalDays}d ${hours}h` : `${totalDays}d`;
    }
    if (totalHours >= 1) {
        const minutes = totalMinutes % 60;
        return minutes > 0 ? `${totalHours}h ${minutes}m` : `${totalHours}h`;
    }
    return totalMinutes > 0 ? `${totalMinutes}m` : '0m';
};
const clampProgress = (progress) => Math.max(0, Math.min(100, Math.round(progress)));
const getWatchProgressPercent = (group, mode) => {
    if (mode === WatchCountDisplayMode_1.WatchCountDisplayMode.Count) {
        if (!group.totalItemCount)
            return 0;
        return clampProgress((group.playedItemCount / group.totalItemCount) * 100);
    }
    if (!group.totalRuntimeTicks)
        return 0;
    return clampProgress((group.playedRuntimeTicks / group.totalRuntimeTicks) * 100);
};
exports.getWatchProgressPercent = getWatchProgressPercent;
const isWatchedCountUnknown = (group, mode) => {
    if (group.playedItemCount === Group_1.UNKNOWN_WATCHED_COUNT || group.totalItemCount === Group_1.UNKNOWN_WATCHED_COUNT)
        return true;
    return mode !== WatchCountDisplayMode_1.WatchCountDisplayMode.Count
        && (group.playedRuntimeTicks === Group_1.UNKNOWN_WATCHED_COUNT || group.totalRuntimeTicks === Group_1.UNKNOWN_WATCHED_COUNT);
};
exports.isWatchedCountUnknown = isWatchedCountUnknown;
const formatWatchedCountText = (group, mode) => {
    if (mode === WatchCountDisplayMode_1.WatchCountDisplayMode.Count)
        return (0, Group_1.formatWatchedCount)(group.playedItemCount, group.totalItemCount);
    if (mode === WatchCountDisplayMode_1.WatchCountDisplayMode.Percentage)
        return `${(0, exports.getWatchProgressPercent)(group, mode)}%`;
    const safeTotal = Math.max(0, group.totalRuntimeTicks || 0);
    const safePlayed = Math.max(0, Math.min(safeTotal, group.playedRuntimeTicks || 0));
    return `${getTimeString(safePlayed, mode)} / ${getTimeString(safeTotal, mode)}`;
};
exports.formatWatchedCountText = formatWatchedCountText;
// Ported from https://github.com/n00bcodr/Jellyfin-Enhanced/blob/main/Jellyfin.Plugin.JellyfinEnhanced/js/enhanced/itemdetails/features-details-media-info.js
const getWatchProgressIconHtml = (progress) => {
    const circumference = 2 * Math.PI * 8; // radius = 8
    const offset = circumference - (progress / 100) * circumference;
    if (progress >= 100) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="margin-right: 0.3em; display: inline-block; vertical-align: middle; flex-shrink: 0;">
            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M9.5 15.5l-3-3 1.4-1.4L9.5 12.7l5.6-5.6 1.4 1.4z" fill="currentColor"/>
        </svg>`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="margin-right: 0.3em; display: inline-block; vertical-align: middle; flex-shrink: 0;">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2"/>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"
            style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${offset}; transform: rotate(-90deg); transform-origin: 50% 50%;"/>
    </svg>`;
};
const renderWatchedCountInnerHtml = (group, mode) => {
    if ((0, exports.isWatchedCountUnknown)(group, mode))
        return `${getWatchProgressIconHtml(0)}<span class="previewGroupWatchedCountText">,,,</span>`;
    const progress = (0, exports.getWatchProgressPercent)(group, mode);
    return `${getWatchProgressIconHtml(progress)}<span class="previewGroupWatchedCountText">${(0, exports.formatWatchedCountText)(group, mode)}</span>`;
};
exports.renderWatchedCountInnerHtml = renderWatchedCountInnerHtml;


/***/ },

/***/ "./Web/Models/ServerSettings.ts"
/*!**************************************!*\
  !*** ./Web/Models/ServerSettings.ts ***!
  \**************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultServerSettings = void 0;
exports.DefaultServerSettings = {
    MinResumePct: 5,
    MaxResumePct: 90,
    MinResumeDurationSeconds: 300
};


/***/ },

/***/ "./Web/Models/WatchCountDisplayMode.ts"
/*!*********************************************!*\
  !*** ./Web/Models/WatchCountDisplayMode.ts ***!
  \*********************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WatchCountDisplayMode = void 0;
var WatchCountDisplayMode;
(function (WatchCountDisplayMode) {
    WatchCountDisplayMode[WatchCountDisplayMode["Count"] = 0] = "Count";
    WatchCountDisplayMode[WatchCountDisplayMode["HoursMinutes"] = 1] = "HoursMinutes";
    WatchCountDisplayMode[WatchCountDisplayMode["AllUnits"] = 2] = "AllUnits";
    WatchCountDisplayMode[WatchCountDisplayMode["Percentage"] = 3] = "Percentage";
})(WatchCountDisplayMode || (exports.WatchCountDisplayMode = WatchCountDisplayMode = {}));


/***/ },

/***/ "./Web/Services/DataFetcher.ts"
/*!*************************************!*\
  !*** ./Web/Services/DataFetcher.ts ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataFetcher = exports.togglePlayedStateLocally = exports.updateWatchedCountDom = void 0;
const WatchProgress_1 = __webpack_require__(/*! ../Models/PreviewData/WatchProgress */ "./Web/Models/PreviewData/WatchProgress.ts");
function updateWatchedCountDom(programDataStore, group) {
    var _a, _b;
    const html = (0, WatchProgress_1.renderWatchedCountInnerHtml)(group, programDataStore.pluginSettings.WatchCountDisplayMode);
    if (group.groupId === programDataStore.activeGroupId) {
        const popupWatchedCount = (_a = document.getElementById('popupTitleContainer')) === null || _a === void 0 ? void 0 : _a.querySelector('.previewGroupWatchedCount');
        if (popupWatchedCount)
            popupWatchedCount.innerHTML = html;
    }
    const groupListWatchedCount = (_b = document.getElementById(`group-${group.groupId}`)) === null || _b === void 0 ? void 0 : _b.querySelector('.previewGroupWatchedCount');
    if (groupListWatchedCount)
        groupListWatchedCount.innerHTML = html;
}
exports.updateWatchedCountDom = updateWatchedCountDom;
function playedRuntimeContribution(item, played, playbackPositionTicks) {
    var _a;
    return played ? ((_a = item.RunTimeTicks) !== null && _a !== void 0 ? _a : 0) : playbackPositionTicks;
}
function adjustWatchedCount(programDataStore, item, wasPlayed, isPlayed, oldPlaybackPositionTicks, newPlaybackPositionTicks) {
    if (!programDataStore.pluginSettings.ShowWatchedCount)
        return;
    if (wasPlayed === isPlayed)
        return;
    const deltaPlayedCount = isPlayed ? 1 : -1;
    const deltaPlayedRuntimeTicks = playedRuntimeContribution(item, isPlayed, newPlaybackPositionTicks) -
        playedRuntimeContribution(item, wasPlayed, oldPlaybackPositionTicks);
    const updatedGroup = programDataStore.adjustGroupWatchStats(item.Id, deltaPlayedCount, deltaPlayedRuntimeTicks);
    if (updatedGroup)
        updateWatchedCountDom(programDataStore, updatedGroup);
}
function togglePlayedStateLocally(programDataStore, itemId) {
    const item = programDataStore.getItemById(itemId);
    if (!item)
        return;
    const wasPlayed = item.UserData.Played;
    const isPlayed = !wasPlayed;
    const oldPlaybackPositionTicks = item.UserData.PlaybackPositionTicks;
    const newPlaybackPositionTicks = isPlayed ? 0 : oldPlaybackPositionTicks;
    programDataStore.updateItem(Object.assign(Object.assign({}, item), { UserData: Object.assign(Object.assign({}, item.UserData), { Played: isPlayed, PlaybackPositionTicks: newPlaybackPositionTicks }) }));
    adjustWatchedCount(programDataStore, item, wasPlayed, isPlayed, oldPlaybackPositionTicks, newPlaybackPositionTicks);
}
exports.togglePlayedStateLocally = togglePlayedStateLocally;
class DataFetcher {
    constructor(programDataStore) {
        this.programDataStore = programDataStore;
        Events.on(ApiClient, 'message', (_event, message) => {
            var _a;
            if (message.MessageType !== 'UserDataChanged')
                return;
            if (message.Data.UserId !== ApiClient.getCurrentUserId())
                return;
            const userDataList = (_a = message.Data.UserDataList) !== null && _a !== void 0 ? _a : [];
            for (const userData of userDataList) {
                const item = this.programDataStore.getItemById(userData.ItemId);
                if (!item)
                    continue;
                const wasPlayed = item.UserData.Played;
                const oldPlaybackPositionTicks = item.UserData.PlaybackPositionTicks;
                this.programDataStore.updateItem(Object.assign(Object.assign({}, item), { UserData: Object.assign(Object.assign({}, item.UserData), { Played: userData.Played, IsFavorite: userData.IsFavorite, PlaybackPositionTicks: userData.PlaybackPositionTicks, PlayedPercentage: userData.PlayedPercentage }) }));
                adjustWatchedCount(this.programDataStore, item, wasPlayed, userData.Played, oldPlaybackPositionTicks, userData.PlaybackPositionTicks);
            }
        });
    }
}
exports.DataFetcher = DataFetcher;


/***/ },

/***/ "./Web/Services/Logger.ts"
/*!********************************!*\
  !*** ./Web/Services/Logger.ts ***!
  \********************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
const LogLevel_1 = __webpack_require__(/*! ../Models/LogLevel */ "./Web/Models/LogLevel.ts");
class Logger {
    constructor(log_prefix = "[InPlayerEpisodePreview]") {
        this.log_prefix = log_prefix;
        this.logLevel = LogLevel_1.LogLevel.Information;
    }
    setLogLevel(level) {
        this.logLevel = level;
    }
    debug(msg, ...details) {
        if (this.logLevel < LogLevel_1.LogLevel.Debug)
            return;
        console.debug(`${this.log_prefix} ${msg}`, details);
    }
    error(msg, ...details) {
        if (this.logLevel < LogLevel_1.LogLevel.Error)
            return;
        console.error(`${this.log_prefix} ${msg}`, details);
    }
    info(msg, ...details) {
        if (this.logLevel < LogLevel_1.LogLevel.Information)
            return;
        console.info(`${this.log_prefix} ${msg}`, details);
    }
}
exports.Logger = Logger;


/***/ },

/***/ "./Web/Services/PlaybackHandler.ts"
/*!*****************************************!*\
  !*** ./Web/Services/PlaybackHandler.ts ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlaybackHandler = void 0;
const Endpoints_1 = __webpack_require__(/*! ../Endpoints */ "./Web/Endpoints.ts");
class PlaybackHandler {
    constructor(logger) {
        this.logger = logger;
    }
    async play(itemId, startPositionTicks) {
        try {
            const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.PLAY_MEDIA}`
                .replace('{itemId}', itemId)
                .replace('{ticks}', startPositionTicks.toString()));
            return await ApiClient.ajax({ type: 'GET', url });
        }
        catch (ex) {
            return this.logger.error(`Couldn't start the playback of an item`, ex);
        }
    }
}
exports.PlaybackHandler = PlaybackHandler;


/***/ },

/***/ "./Web/Services/ProgramDataStore.ts"
/*!******************************************!*\
  !*** ./Web/Services/ProgramDataStore.ts ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgramDataStore = void 0;
const Group_1 = __webpack_require__(/*! ../Models/PreviewData/Group */ "./Web/Models/PreviewData/Group.ts");
const ItemType_1 = __webpack_require__(/*! ../Models/ItemType */ "./Web/Models/ItemType.ts");
const PluginSettings_1 = __webpack_require__(/*! ../Models/PluginSettings */ "./Web/Models/PluginSettings.ts");
const ServerSettings_1 = __webpack_require__(/*! ../Models/ServerSettings */ "./Web/Models/ServerSettings.ts");
const GROUPS_CACHE_TTL = 5 * 60 * 1000;
// Item Type mappings for the Types selectable in the Plugin Configuration
const PREVIEW_TYPE_GROUPS = {
    [ItemType_1.ItemType.Series]: [ItemType_1.ItemType.Series, ItemType_1.ItemType.Season, ItemType_1.ItemType.Episode],
    [ItemType_1.ItemType.BoxSet]: [ItemType_1.ItemType.BoxSet, ItemType_1.ItemType.Playlist],
    [ItemType_1.ItemType.Video]: [ItemType_1.ItemType.Video, ItemType_1.ItemType.Folder]
};
class ProgramDataStore {
    constructor() {
        this._viewToken = 0;
        this._groupsCachedAt = null;
        this._programData = {
            activeMediaSourceId: '',
            activeGroupId: '',
            boxSetName: '',
            type: undefined,
            groups: [],
            pluginSettings: PluginSettings_1.DefaultPluginSettings,
            serverSettings: ServerSettings_1.DefaultServerSettings
        };
    }
    get activeMediaSourceId() {
        return this._programData.activeMediaSourceId;
    }
    set activeMediaSourceId(activeMediaSourceId) {
        this._programData.activeMediaSourceId = activeMediaSourceId;
    }
    get activeGroupId() {
        return this._programData.activeGroupId;
    }
    set activeGroupId(activeGroupId) {
        this._programData.activeGroupId = activeGroupId;
    }
    get activeGroup() {
        return this.groups.find(group => group.groupId === this.activeGroupId);
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
    get groups() {
        return this._programData.groups;
    }
    set groups(groups) {
        this._programData.groups = groups;
    }
    get pluginSettings() {
        return this._programData.pluginSettings;
    }
    set pluginSettings(settings) {
        this._programData.pluginSettings = settings;
    }
    get serverSettings() {
        return this._programData.serverSettings;
    }
    set serverSettings(settings) {
        this._programData.serverSettings = settings;
    }
    markGroupsFetched() {
        this._groupsCachedAt = Date.now();
    }
    invalidateGroupsCache() {
        this._groupsCachedAt = null;
    }
    get isGroupsCacheExpired() {
        return this._groupsCachedAt === null || Date.now() - this._groupsCachedAt > GROUPS_CACHE_TTL;
    }
    isTypeAllowedForPreview(type) {
        return this.allowedPreviewTypes.some(configuredType => { var _a; return ((_a = PREVIEW_TYPE_GROUPS[configuredType]) !== null && _a !== void 0 ? _a : [configuredType]).includes(type); });
    }
    get allowedPreviewTypes() {
        return this.pluginSettings.EnabledItemTypes;
    }
    getItemById(itemId) {
        return this.groups
            .flatMap(group => group.items)
            .find(item => item.Id === itemId);
    }
    recordLoadedItems(groupId, items, startIndex, totalRecordCount) {
        this._programData.groups = this._programData.groups.map(group => {
            if (group.groupId !== groupId)
                return group;
            if (group.loadedStartIndex === undefined || group.loadedEndIndex === undefined) {
                return Object.assign(Object.assign({}, group), { items, loadedStartIndex: startIndex, loadedEndIndex: startIndex + items.length, loadedTotalRecordCount: totalRecordCount });
            }
            if (startIndex >= group.loadedEndIndex) {
                return Object.assign(Object.assign({}, group), { items: [...group.items, ...items], loadedEndIndex: startIndex + items.length, loadedTotalRecordCount: totalRecordCount });
            }
            if (startIndex < group.loadedStartIndex) {
                return Object.assign(Object.assign({}, group), { items: [...items, ...group.items], loadedStartIndex: startIndex, loadedTotalRecordCount: totalRecordCount });
            }
            return group;
        });
    }
    setGroupWatchedCount(groupId, playedItemCount, totalItemCount, playedRuntimeTicks, totalRuntimeTicks) {
        this.groups = this.groups.map(g => g.groupId === groupId ? Object.assign(Object.assign({}, g), { playedItemCount, totalItemCount, playedRuntimeTicks, totalRuntimeTicks }) : g);
    }
    adjustGroupWatchStats(itemId, deltaPlayedCount, deltaPlayedRuntimeTicks) {
        const group = this.groups.find(g => g.items.some(item => item.Id === itemId));
        if (!group)
            return undefined;
        const updatedGroup = Object.assign(Object.assign({}, group), { playedItemCount: group.playedItemCount + deltaPlayedCount, playedRuntimeTicks: group.playedRuntimeTicks === Group_1.UNKNOWN_WATCHED_COUNT ? Group_1.UNKNOWN_WATCHED_COUNT : group.playedRuntimeTicks + deltaPlayedRuntimeTicks });
        this.groups = this.groups.map(g => g.groupId === group.groupId ? updatedGroup : g);
        return updatedGroup;
    }
    updateItem(itemToUpdate) {
        this.groups = this.groups.map(group => group.items.some(item => item.Id === itemToUpdate.Id)
            ? Object.assign(Object.assign({}, group), { items: group.items.map(item => item.Id === itemToUpdate.Id ? itemToUpdate : item) }) : group);
    }
    // Called whenever the popup switches what it's displaying (opening, selecting a group, going back to the group list)
    beginNewView() {
        return ++this._viewToken;
    }
    isCurrentView(token) {
        return token === this._viewToken;
    }
    get currentViewToken() {
        return this._viewToken;
    }
}
exports.ProgramDataStore = ProgramDataStore;


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
let exports = __webpack_exports__;
/*!********************************!*\
  !*** ./Web/InPlayerPreview.ts ***!
  \********************************/

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Logger_1 = __webpack_require__(/*! ./Services/Logger */ "./Web/Services/Logger.ts");
const PreviewButtonTemplate_1 = __webpack_require__(/*! ./Components/PreviewButtonTemplate */ "./Web/Components/PreviewButtonTemplate.ts");
const ProgramDataStore_1 = __webpack_require__(/*! ./Services/ProgramDataStore */ "./Web/Services/ProgramDataStore.ts");
const DialogContainerTemplate_1 = __webpack_require__(/*! ./Components/DialogContainerTemplate */ "./Web/Components/DialogContainerTemplate.ts");
const PlaybackHandler_1 = __webpack_require__(/*! ./Services/PlaybackHandler */ "./Web/Services/PlaybackHandler.ts");
const ListElementFactory_1 = __webpack_require__(/*! ./ListElementFactory */ "./Web/ListElementFactory.ts");
const PopupTitleTemplate_1 = __webpack_require__(/*! ./Components/PopupTitleTemplate */ "./Web/Components/PopupTitleTemplate.ts");
const DataFetcher_1 = __webpack_require__(/*! ./Services/DataFetcher */ "./Web/Services/DataFetcher.ts");
const ItemType_1 = __webpack_require__(/*! ./Models/ItemType */ "./Web/Models/ItemType.ts");
const Endpoints_1 = __webpack_require__(/*! ./Endpoints */ "./Web/Endpoints.ts");
const Group_1 = __webpack_require__(/*! ./Models/PreviewData/Group */ "./Web/Models/PreviewData/Group.ts");
const Spinner_1 = __webpack_require__(/*! ./Components/Spinner */ "./Web/Components/Spinner.ts");
const ListElementTemplate_1 = __webpack_require__(/*! ./Components/ListElementTemplate */ "./Web/Components/ListElementTemplate.ts");
const ItemDetails_1 = __webpack_require__(/*! ./Components/ItemDetails */ "./Web/Components/ItemDetails.ts");
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
.previewPopupTitle h1.actionSheetTitle {
    margin-left: 0 !important;
}
.previewGroupWatchedCount {
    margin-left: auto;
    margin-right: 1em;
    padding-left: 1em;
    white-space: nowrap;
    opacity: 0.7;
    display: flex;
    align-items: center;
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
`;
(_a = document === null || document === void 0 ? void 0 : document.head) === null || _a === void 0 ? void 0 : _a.appendChild(inPlayerPreviewStyle);
// init services and helpers
const logger = new Logger_1.Logger();
const programDataStore = new ProgramDataStore_1.ProgramDataStore();
const playbackHandler = new PlaybackHandler_1.PlaybackHandler(logger);
const listElementFactory = new ListElementFactory_1.ListElementFactory(playbackHandler, programDataStore, logger);
const collectionsByItemId = new Map();
async function fetchContainingCollections(itemId) {
    const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.CONTAINING_COLLECTIONS}`
        .replace('{userId}', ApiClient.getCurrentUserId())
        .replace('{itemId}', itemId));
    try {
        const raw = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
        return raw.map((g) => ({
            groupId: g.GroupId,
            groupName: g.GroupName,
            items: [],
            indexNumber: g.IndexNumber,
            playedItemCount: g.PlayedItemCount,
            totalItemCount: g.TotalItemCount,
            playedRuntimeTicks: g.PlayedRuntimeTicks,
            totalRuntimeTicks: g.TotalRuntimeTicks
        }));
    }
    catch (ex) {
        logger.error("Couldn't load Collections/Playlists containing this movie", ex);
        return [];
    }
}
function getContainingCollections(itemId) {
    let promise = collectionsByItemId.get(itemId);
    if (!promise) {
        promise = fetchContainingCollections(itemId);
        collectionsByItemId.set(itemId, promise);
    }
    return promise;
}
function initialize() {
    var _a;
    // Ensure ApiClient/Events exist and user is logged in
    if (typeof ApiClient === 'undefined' || typeof Events === 'undefined' || !((_a = ApiClient.getCurrentUserId) === null || _a === void 0 ? void 0 : _a.call(ApiClient))) {
        setTimeout(initialize, 300);
        return;
    }
    new DataFetcher_1.DataFetcher(programDataStore);
    const pluginSettingsUrl = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.PLUGIN_SETTINGS}`);
    ApiClient.ajax({ type: 'GET', url: pluginSettingsUrl, dataType: 'json' })
        .then((config) => {
        programDataStore.pluginSettings = config;
        logger.setLogLevel(config.LogLevel);
    })
        .catch((ex) => logger.error("Couldn't load plugin settings, falling back to defaults", ex));
    const serverSettingsUrl = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.SERVER_SETTINGS}`);
    ApiClient.ajax({ type: 'GET', url: serverSettingsUrl, dataType: 'json' })
        .then((config) => programDataStore.serverSettings = config)
        .catch((ex) => logger.error("Couldn't load server settings, falling back to defaults", ex));
    logger.info("InPlayerEpisodePreview initialized");
}
initialize();
const SEARCH_COLLECTIONS_GROUP_NAME = 'Search Collections/Playlists';
const videoPaths = ['/video'];
let previousRoutePath = null;
let previewContainerLoaded = false;
let pendingPreloadItemId = null;
let pendingPreload = null;
let preloadObserver = null;
document.addEventListener('viewshow', viewShowEventHandler);
window.addEventListener('popstate', viewShowEventHandler);
window.addEventListener('popstate', () => { var _a; return (_a = document.getElementById('previewPopup')) === null || _a === void 0 ? void 0 : _a.remove(); });
// Sometimes their can be stale rating buttons. thats why we take the last one from the DOM for the itemId
function getLatestUserRatingItemId() {
    var _a, _b;
    const elements = document.querySelectorAll('.btnUserRating.autoSize.paper-icon-button-light');
    return (_b = (_a = elements[elements.length - 1]) === null || _a === void 0 ? void 0 : _a.getAttribute('data-id')) !== null && _b !== void 0 ? _b : null;
}
let lastTrackedPositionSecond = -1;
function onVideoTimeUpdate() {
    const positionSecond = Math.floor(this.currentTime);
    if (positionSecond === lastTrackedPositionSecond)
        return;
    lastTrackedPositionSecond = positionSecond;
    const itemId = getLatestUserRatingItemId();
    if (!itemId)
        return;
    if (itemId !== programDataStore.activeMediaSourceId) {
        const previousItemId = programDataStore.activeMediaSourceId;
        programDataStore.activeMediaSourceId = itemId;
        (0, ListElementTemplate_1.setItemOverlayActive)(previousItemId, false);
        (0, ListElementTemplate_1.setItemOverlayActive)(itemId, true);
    }
    const item = programDataStore.getItemById(itemId);
    if (!item || !item.RunTimeTicks)
        return;
    const positionTicks = this.currentTime * 10000000;
    const playedPercentage = (positionTicks / item.RunTimeTicks) * 100;
    programDataStore.updateItem(Object.assign(Object.assign({}, item), { UserData: Object.assign(Object.assign({}, item.UserData), { PlaybackPositionTicks: positionTicks, PlayedPercentage: playedPercentage, Played: playedPercentage >= programDataStore.serverSettings.MaxResumePct }) }));
}
function onVideoRateChange() {
    document.querySelectorAll('.endsAt[data-item-id]').forEach(element => {
        const item = programDataStore.getItemById(element.dataset.itemId);
        if (item)
            (0, ItemDetails_1.updateEndTimeDisplay)(item);
    });
}
// Tracks which BoxSet/Playlist details page (if any) was visited immediately before navigating into playback
const DETAILS_ROUTE_PATH = '/details';
const DASHBOARD_ROUTE_PATH = '/home';
const collectionLikeItemTypes = new Set([ItemType_1.ItemType.BoxSet, ItemType_1.ItemType.Playlist]);
let pendingSourceCollectionId = null;
const EMPTY_GUID = '00000000-0000-0000-0000-000000000000';
function recordSourceCollection(collectionId) {
    programDataStore.invalidateGroupsCache();
    const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.SET_SOURCE_COLLECTION}`
        .replace('{userId}', ApiClient.getCurrentUserId())
        .replace('{deviceId}', ApiClient.deviceId())
        .replace('{collectionId}', collectionId));
    ApiClient.ajax({ type: 'GET', url }).catch((ex) => logger.error("Couldn't record source collection for playback session", ex));
}
function clearSourceCollection() {
    recordSourceCollection(EMPTY_GUID);
}
function captureSourceCollection(currentRoutePath) {
    const [currentPath, currentQuery] = currentRoutePath.split('?');
    const previousPath = previousRoutePath === null || previousRoutePath === void 0 ? void 0 : previousRoutePath.split('?')[0];
    if (currentPath === DASHBOARD_ROUTE_PATH) {
        pendingSourceCollectionId = null;
        clearSourceCollection();
        return;
    }
    if (currentPath === DETAILS_ROUTE_PATH) {
        const detailsId = new URLSearchParams(currentQuery !== null && currentQuery !== void 0 ? currentQuery : '').get('id');
        pendingSourceCollectionId = null;
        if (!detailsId)
            return;
        ApiClient.getItem(ApiClient.getCurrentUserId(), detailsId).then((item) => {
            const itemType = ItemType_1.ItemType[item.Type];
            pendingSourceCollectionId = collectionLikeItemTypes.has(itemType) ? detailsId : null;
        });
        return;
    }
    if (videoPaths.includes(currentPath) && previousPath === DETAILS_ROUTE_PATH) {
        if (pendingSourceCollectionId)
            recordSourceCollection(pendingSourceCollectionId);
        else
            clearSourceCollection();
    }
    pendingSourceCollectionId = null;
}
// Retrieve the current colloection/playlist id through a play action on a card the same way as hellyfin does it itself
// https://github.com/jellyfin/jellyfin-web/blob/release-10.11.z/src/components/shortcuts.js#L216
const PLAYBACK_TRIGGER_ACTIONS = new Set(['play', 'resume', 'playallfromhere']);
function onDocumentClickCapture(event) {
    var _a, _b, _c;
    const actionElement = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, '[data-action]');
    if (!actionElement || !PLAYBACK_TRIGGER_ACTIONS.has(actionElement.getAttribute('data-action')))
        return;
    const card = actionElement.closest('[data-id]');
    if (!card)
        return;
    const childOfCollectionId = (_c = card.getAttribute('data-collectionid')) !== null && _c !== void 0 ? _c : card.getAttribute('data-playlistid');
    if (childOfCollectionId) {
        recordSourceCollection(childOfCollectionId);
        return;
    }
    const cardItemType = ItemType_1.ItemType[card.getAttribute('data-type')];
    const cardId = card.getAttribute('data-id');
    if (cardId && collectionLikeItemTypes.has(cardItemType)) {
        recordSourceCollection(cardId);
        return;
    }
    clearSourceCollection();
}
document.addEventListener('click', onDocumentClickCapture, true);
function viewShowEventHandler() {
    const currentRoutePath = getLocationPath();
    function getLocationPath() {
        const location = window.location.toString();
        const currentRouteIndex = location.lastIndexOf('/');
        return location.substring(currentRouteIndex);
    }
    // Initial attempt to load the video view or schedule retries.
    captureSourceCollection(currentRoutePath);
    attemptLoadVideoView();
    previousRoutePath = currentRoutePath;
    function attemptLoadVideoView() {
        if (videoPaths.includes(currentRoutePath)) {
            // Check if the preview container is already loaded before loading
            if (!previewContainerLoaded && !isPreviewButtonCreated()) {
                loadVideoView();
                previewContainerLoaded = true; // Set flag to true after loading
            }
        }
        else if (videoPaths.includes(previousRoutePath)) {
            unloadVideoView();
        }
    }
    function loadVideoView() {
        logger.debug("Loading video view");
        // add preview button to the page
        const parent = document.querySelector('.buttons').lastElementChild.parentElement; // lastElementChild.parentElement is used for casting from Element to HTMLElement
        let index = Array.from(parent.children).findIndex((child) => child.classList.contains("btnUserRating"));
        // if index is invalid try to use the old position (used in Jellyfin 10.8.12)
        if (index === -1)
            index = Array.from(parent.children).findIndex((child) => child.classList.contains("osdTimeText"));
        let previewButton = null;
        let previewButtonLoading = false;
        // Only actually inserted into the OSD once the item's type is confirmed enabled - see preloadPreviewData.
        function insertPreviewButton() {
            if (previewButton)
                return;
            previewButton = new PreviewButtonTemplate_1.PreviewButtonTemplate(parent, index);
            previewButton.render(previewButtonClickHandler);
            const videoElement = document.querySelector('video.htmlvideoplayer');
            videoElement === null || videoElement === void 0 ? void 0 : videoElement.addEventListener('timeupdate', onVideoTimeUpdate);
            videoElement === null || videoElement === void 0 ? void 0 : videoElement.addEventListener('ratechange', onVideoRateChange);
        }
        const fetchPreviewItemType = async (itemId) => {
            const userId = ApiClient.getCurrentUserId();
            const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.ITEM_PREVIEW_TYPE}`
                .replace('{userId}', userId)
                .replace('{deviceId}', ApiClient.deviceId())
                .replace('{itemId}', itemId));
            const rawType = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
            return ItemType_1.ItemType[rawType];
        };
        const loadItemPreviewData = async (itemId) => {
            const userId = ApiClient.getCurrentUserId();
            const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.ITEM_PREVIEW_DATA}`
                .replace('{userId}', userId)
                .replace('{deviceId}', ApiClient.deviceId())
                .replace('{itemId}', itemId));
            const raw = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
            return {
                itemType: raw.ItemType,
                containerName: raw.ContainerName,
                groups: raw.Groups.map((g) => ({
                    groupId: g.GroupId,
                    groupName: g.GroupName,
                    items: [],
                    indexNumber: g.IndexNumber,
                    playedItemCount: g.PlayedItemCount,
                    totalItemCount: g.TotalItemCount,
                    playedRuntimeTicks: g.PlayedRuntimeTicks,
                    totalRuntimeTicks: g.TotalRuntimeTicks
                })),
                activeGroupId: raw.ActiveGroupId,
                activeItemIndex: raw.ActiveItemIndex
            };
        };
        const loadGroupItems = async (groupId, startIndex = 0, limit = programDataStore.pluginSettings.EpisodePageSize) => {
            const userId = ApiClient.getCurrentUserId();
            const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.GROUP_ITEMS}`
                .replace('{userId}', userId)
                .replace('{groupId}', groupId), { startIndex, limit });
            const raw = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
            const result = { items: raw.Items, totalRecordCount: raw.TotalRecordCount };
            programDataStore.recordLoadedItems(groupId, result.items, startIndex, result.totalRecordCount);
            return result;
        };
        function preloadPreviewData(itemId) {
            if (!itemId)
                return;
            if (!programDataStore.isGroupsCacheExpired && programDataStore.groups.some(g => g.items.some(item => item.Id === itemId))) {
                // Already fetched (and therefore already known-allowed) earlier this session - just show the button.
                insertPreviewButton();
                return;
            }
            if (pendingPreloadItemId === itemId)
                return;
            pendingPreloadItemId = itemId;
            pendingPreload = (async () => {
                const previewType = await fetchPreviewItemType(itemId);
                if (!programDataStore.isTypeAllowedForPreview(previewType)) {
                    logger.debug(`Preview not enabled for item type '${previewType}', skipping button for item ${itemId}`);
                    return;
                }
                insertPreviewButton();
                const { itemType, containerName, groups, activeGroupId, activeItemIndex } = await loadItemPreviewData(itemId);
                programDataStore.groups = groups;
                programDataStore.markGroupsFetched();
                programDataStore.type = ItemType_1.ItemType[itemType];
                programDataStore.boxSetName = containerName !== null && containerName !== void 0 ? containerName : '';
                const PAGE_SIZE = programDataStore.pluginSettings.EpisodePageSize;
                const pageOfActiveEpisode = Math.floor(activeItemIndex / PAGE_SIZE);
                const initialWindowStartIndex = Math.max(0, (pageOfActiveEpisode - 1) * PAGE_SIZE);
                const initialWindowLimit = (pageOfActiveEpisode + 2) * PAGE_SIZE - initialWindowStartIndex;
                await loadGroupItems(activeGroupId, initialWindowStartIndex, initialWindowLimit);
                logger.debug(`Preloaded ${groups.length} group(s) for item ${itemId}`);
            })().catch((ex) => {
                logger.error("Couldn't preload preview data", ex);
            }).finally(() => {
                if (pendingPreloadItemId === itemId)
                    pendingPreloadItemId = null;
            });
        }
        // Wait that data-id gets populated by Jellyfin
        function schedulePreload() {
            const itemId = getLatestUserRatingItemId();
            if (itemId) {
                preloadPreviewData(itemId);
                return;
            }
            const ratingButtons = document.querySelectorAll('.btnUserRating.autoSize.paper-icon-button-light');
            const target = ratingButtons[ratingButtons.length - 1];
            if (!target)
                return;
            preloadObserver === null || preloadObserver === void 0 ? void 0 : preloadObserver.disconnect();
            preloadObserver = new MutationObserver(() => {
                const id = target.getAttribute('data-id');
                if (!id)
                    return;
                preloadObserver === null || preloadObserver === void 0 ? void 0 : preloadObserver.disconnect();
                preloadObserver = null;
                preloadPreviewData(id);
            });
            preloadObserver.observe(target, { attributes: true, attributeFilter: ['data-id'] });
        }
        schedulePreload();
        async function previewButtonClickHandler() {
            var _a;
            if (previewButtonLoading)
                return;
            previewButtonLoading = true;
            try {
                await doPreviewButtonClick();
            }
            catch (ex) {
                logger.error("Couldn't open preview popup", ex);
                (_a = document.getElementById('previewPopup')) === null || _a === void 0 ? void 0 : _a.remove();
            }
            finally {
                previewButtonLoading = false;
            }
        }
        async function doPreviewButtonClick() {
            var _a, _b, _c, _d, _e;
            // This is experimental and will maybe be used in future releases
            const getNowPlayingItemIdFromSession = async () => {
                const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.NOW_PLAYING_ITEM}`);
                try {
                    return await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
                }
                catch (ex) {
                    logger.error("Couldn't resolve now-playing item from session, falling back to OSD rating button", ex);
                    return null;
                }
            };
            const dialogContainer = new DialogContainerTemplate_1.DialogContainerTemplate(document.body, document.body.children.length - 1);
            dialogContainer.render();
            const contentDiv = document.getElementById('popupContentContainer');
            const itemId = getLatestUserRatingItemId();
            // If there is no response of the OSD's preload of this same item, wait for it instead of firing a duplicate fetch.
            if (pendingPreloadItemId === itemId && pendingPreload) {
                contentDiv.innerHTML = `<div class="previewScrollSpinner">${(0, Spinner_1.spinnerHtml)()}</div>`;
                (0, Spinner_1.activateSpinner)(contentDiv);
                await pendingPreload;
            }
            const cachedGroup = !programDataStore.isGroupsCacheExpired
                ? programDataStore.groups.find(g => g.items.some(item => item.Id === itemId))
                : undefined;
            let activeGroupId;
            let initialPage;
            let initialWindowStartIndex;
            if (cachedGroup) {
                logger.debug(`Opening preview popup for item ${itemId} using cached group data`);
                activeGroupId = cachedGroup.groupId;
                initialWindowStartIndex = (_a = cachedGroup.loadedStartIndex) !== null && _a !== void 0 ? _a : 0;
                initialPage = { items: [...cachedGroup.items], totalRecordCount: (_b = cachedGroup.loadedTotalRecordCount) !== null && _b !== void 0 ? _b : cachedGroup.items.length };
            }
            else {
                logger.debug(`Opening preview popup for item ${itemId}, fetching group data`);
                contentDiv.innerHTML = `<div class="previewScrollSpinner">${(0, Spinner_1.spinnerHtml)()}</div>`;
                (0, Spinner_1.activateSpinner)(contentDiv);
                const { itemType, containerName, groups, activeGroupId: fetchedActiveGroupId, activeItemIndex } = await loadItemPreviewData(itemId);
                programDataStore.groups = groups;
                programDataStore.markGroupsFetched();
                programDataStore.type = ItemType_1.ItemType[itemType];
                programDataStore.boxSetName = containerName !== null && containerName !== void 0 ? containerName : '';
                activeGroupId = fetchedActiveGroupId;
                // Load a 3-page window (page of the active episode, plus one page before and after)
                const PAGE_SIZE = programDataStore.pluginSettings.EpisodePageSize;
                const pageOfActiveEpisode = Math.floor(activeItemIndex / PAGE_SIZE);
                initialWindowStartIndex = Math.max(0, (pageOfActiveEpisode - 1) * PAGE_SIZE);
                const initialWindowLimit = (pageOfActiveEpisode + 2) * PAGE_SIZE - initialWindowStartIndex;
                initialPage = await loadGroupItems(activeGroupId, initialWindowStartIndex, initialWindowLimit);
            }
            programDataStore.activeMediaSourceId = itemId;
            programDataStore.activeGroupId = activeGroupId;
            contentDiv.innerHTML = ''; // remove the loading spinner
            const viewToken = programDataStore.beginNewView();
            // A standalone movie has no meaningful group name of its own; an item sourced from a Playlist/BoxSet
            // already has that collection's real name, so only the standalone-movie case gets relabeled.
            const isStandaloneMovie = programDataStore.type === ItemType_1.ItemType.Movie;
            const isSourcedFromCollection = programDataStore.type === ItemType_1.ItemType.Playlist || programDataStore.type === ItemType_1.ItemType.BoxSet;
            // Label the movie's own group as the collection search up front, even before any results are known.
            if (isStandaloneMovie && programDataStore.pluginSettings.SearchContainingCollections) {
                programDataStore.groups = programDataStore.groups.map((g, i) => i === 0 ? Object.assign(Object.assign({}, g), { groupName: SEARCH_COLLECTIONS_GROUP_NAME }) : g);
            }
            // Only search once per fresh group-fetch (not on every popup reopen while cached groups already include the search results).
            // getContainingCollections itself is memoized per item for the whole page session, so even this can't re-trigger the
            // expensive backend scan more than once per item, no matter how often the popup is reopened while it's pending.
            const isSearchingCollections = (isStandaloneMovie || isSourcedFromCollection) && programDataStore.pluginSettings.SearchContainingCollections && programDataStore.groups.length === 1;
            let collectionsSearchDone = !isSearchingCollections;
            const collectionsSearch = isSearchingCollections
                ? getContainingCollections(itemId).then(collectionGroups => {
                    if (!collectionGroups.length || programDataStore.activeMediaSourceId !== itemId)
                        return;
                    const selfGroup = programDataStore.groups[0];
                    // Exclude the collection/playlist this item was already played from - it's already the active/default group.
                    const newGroups = collectionGroups.filter(g => g.groupId !== selfGroup.groupId);
                    if (!newGroups.length)
                        return;
                    programDataStore.groups = [selfGroup, ...newGroups].map((g, i) => (Object.assign(Object.assign({}, g), { indexNumber: i })));
                }).finally(() => { collectionsSearchDone = true; })
                : Promise.resolve();
            const canSwitchGroups = () => programDataStore.type !== ItemType_1.ItemType.Movie || programDataStore.pluginSettings.SearchContainingCollections;
            const popupTitle = new PopupTitleTemplate_1.PopupTitleTemplate(document.getElementById('popupFocusContainer'), -1, programDataStore);
            popupTitle.render(async (e) => {
                e.stopPropagation();
                if (!canSwitchGroups())
                    return;
                popupTitle.setVisible(false);
                const contentDiv = document.getElementById('popupContentContainer');
                contentDiv.innerHTML = '';
                listElementFactory.createGroupElements(programDataStore.groups, contentDiv, programDataStore.activeGroup.indexNumber, popupTitle, loadGroupItems);
                const groupViewToken = programDataStore.currentViewToken;
                if (collectionsSearchDone)
                    return;
                const spinner = document.createElement('div');
                spinner.classList.add('previewScrollSpinner');
                spinner.innerHTML = (0, Spinner_1.spinnerHtml)();
                contentDiv.appendChild(spinner);
                (0, Spinner_1.activateSpinner)(spinner);
                await collectionsSearch;
                // The view may have moved on (e.g. a group was selected, or the popup closed) while this was loading.
                if (!programDataStore.isCurrentView(groupViewToken))
                    return;
                spinner.remove();
                contentDiv.innerHTML = '';
                listElementFactory.createGroupElements(programDataStore.groups, contentDiv, programDataStore.activeGroup.indexNumber, popupTitle, loadGroupItems);
            });
            popupTitle.setSwitchable(canSwitchGroups());
            popupTitle.setVisible(canSwitchGroups());
            await listElementFactory.createLazyItemList(contentDiv, (startIndex) => loadGroupItems(activeGroupId, startIndex), viewToken, initialPage, initialWindowStartIndex);
            popupTitle.setText((_d = (_c = programDataStore.activeGroup) === null || _c === void 0 ? void 0 : _c.groupName) !== null && _d !== void 0 ? _d : '');
            if (programDataStore.activeGroup)
                popupTitle.setWatchedCount(programDataStore.activeGroup);
            if (programDataStore.pluginSettings.ShowWatchedCount && ((_e = programDataStore.activeGroup) === null || _e === void 0 ? void 0 : _e.playedItemCount) === Group_1.UNKNOWN_WATCHED_COUNT) {
                listElementFactory.ensureGroupWatchedCount(programDataStore.activeGroup)
                    .then(updated => popupTitle.setWatchedCount(updated))
                    .catch((ex) => { var _a; return logger.error(`Couldn't load watched count for group ${(_a = programDataStore.activeGroup) === null || _a === void 0 ? void 0 : _a.groupId}`, ex); });
            }
            // scroll to the item that is currently playing
            const activeItem = contentDiv.querySelector('.selectedListItem');
            if (!activeItem) {
                logger.error("Couldn't find active media source element in preview list. This should never happen", programDataStore);
            }
            activeItem === null || activeItem === void 0 ? void 0 : activeItem.parentElement.scrollIntoView();
        }
    }
    function unloadVideoView() {
        var _a;
        logger.debug("Unloading video view");
        // Clear old data and reset previewContainerLoaded flag
        const videoElement = document.querySelector('video.htmlvideoplayer');
        videoElement === null || videoElement === void 0 ? void 0 : videoElement.removeEventListener('timeupdate', onVideoTimeUpdate);
        videoElement === null || videoElement === void 0 ? void 0 : videoElement.removeEventListener('ratechange', onVideoRateChange);
        lastTrackedPositionSecond = -1;
        preloadObserver === null || preloadObserver === void 0 ? void 0 : preloadObserver.disconnect();
        preloadObserver = null;
        pendingPreloadItemId = null;
        pendingPreload = null;
        (_a = document.getElementById('previewPopup')) === null || _a === void 0 ? void 0 : _a.remove();
        previewContainerLoaded = false; // Reset flag when unloading
    }
    function isPreviewButtonCreated() {
        return document.querySelector('.buttons').querySelector('#popupPreviewButton') !== null;
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtRQUVqRCxzQkFBc0IsR0FBRyxLQUFLLEVBQUMsNEJBQTRCO0lBQy9ELENBQUM7SUFFRCxTQUFTLHNCQUFzQjtRQUMzQixPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEtBQUssSUFBSTtJQUMzRixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0Jhc2VUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Hcm91cExpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvSXRlbURldGFpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvUGxheVN0YXRlSWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1NwaW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0VuZHBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTGlzdEVsZW1lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvSXRlbVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9Mb2dMZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1BsdWdpblNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvU2VydmVyU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9XYXRjaENvdW50RGlzcGxheU1vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0RhdGFGZXRjaGVyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vV2ViL0luUGxheWVyUHJldmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVRlbXBsYXRlIHtcbiAgICAvKlxuICAgICAqIHRoZSBIVE1MIGJhc2VkIElEIG9mIHRoZSBuZXcgZ2VuZXJhdGVkIEVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGVsZW1lbnRJZDogc3RyaW5nO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcHJpdmF0ZSBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikgeyB9XG5cbiAgICBwdWJsaWMgZ2V0Q29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbkFmdGVySW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25BZnRlckluZGV4O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRFbGVtZW50SWQoZWxlbWVudElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEVsZW1lbnRJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50SWQ7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5nZXRFbGVtZW50SWQoKX1gKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogc3RyaW5nO1xuXG4gICAgYWJzdHJhY3QgcmVuZGVyKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiB2b2lkO1xuXG4gICAgcHJvdGVjdGVkIGFkZEVsZW1lbnRUb0NvbnRhaW5lciguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogSFRNTEVsZW1lbnQge1xuICAgICAgICAvLyBBZGQgRWxlbWVudCBhcyB0aGUgZmlyc3QgY2hpbGQgaWYgcG9zaXRpb24gaXMgbmVnYXRpdmVcbiAgICAgICAgaWYgKHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgPCAwICYmIHRoaXMuZ2V0Q29udGFpbmVyKCkuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmZpcnN0RWxlbWVudENoaWxkLmJlZm9yZSh0aGlzLnN0cmluZ1RvTm9kZSh0aGlzLmdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnMpKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBFbGVtZW50IGlmIGNvbnRhaW5lciBpcyBlbXB0eVxuICAgICAgICBpZiAoIXRoaXMuZ2V0Q29udGFpbmVyKCkuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmlubmVySFRNTCA9IHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2hpbGRCZWZvcmUgPSB0aGlzLmdldENvbnRhaW5lcigpLmxhc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29udGFpbmVyKCkuY2hpbGRyZW4ubGVuZ3RoID4gdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSAmJiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpID49IDApXG4gICAgICAgICAgICBjaGlsZEJlZm9yZSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuY2hpbGRyZW5bdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKV07XG4gICAgICAgIFxuICAgICAgICBjaGlsZEJlZm9yZS5hZnRlcih0aGlzLnN0cmluZ1RvTm9kZSh0aGlzLmdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnMpKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIHN0cmluZ1RvTm9kZSh0ZW1wbGF0ZVN0cmluZzogc3RyaW5nKTogTm9kZSB7XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSB0ZW1wbGF0ZVN0cmluZztcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2dDb250YWluZXJUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgZGlhbG9nQmFja2Ryb3BJZCA9ICdkaWFsb2dCYWNrZHJvcCdcbiAgICBkaWFsb2dDb250YWluZXJJZCA9ICdkaWFsb2dDb250YWluZXInXG4gICAgcG9wdXBDb250ZW50Q29udGFpbmVySWQgPSAncG9wdXBDb250ZW50Q29udGFpbmVyJ1xuICAgIHBvcHVwRm9jdXNDb250YWluZXJJZCA9ICdwb3B1cEZvY3VzQ29udGFpbmVyJ1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3ByZXZpZXdQb3B1cCcpO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZGlhbG9nQmFja2Ryb3BJZH1cIiBjbGFzcz1cImRpYWxvZ0JhY2tkcm9wIGRpYWxvZ0JhY2tkcm9wT3BlbmVkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5kaWFsb2dDb250YWluZXJJZH1cIiBjbGFzcz1cImRpYWxvZ0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLnBvcHVwRm9jdXNDb250YWluZXJJZH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9jdXNjb250YWluZXIgZGlhbG9nIGFjdGlvbnNoZWV0LW5vdC1mdWxsc2NyZWVuIGFjdGlvblNoZWV0IGNlbnRlcmVkRGlhbG9nIG9wZW5lZCBwcmV2aWV3UG9wdXAgYWN0aW9uU2hlZXRDb250ZW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhpc3Rvcnk9XCJ0cnVlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJlbW92ZW9uY2xvc2U9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLnBvcHVwQ29udGVudENvbnRhaW5lcklkfVwiIGNsYXNzPVwiYWN0aW9uU2hlZXRTY3JvbGxlciBzY3JvbGxZIHByZXZpZXdQb3B1cFNjcm9sbGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCk6IGFueSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZ2V0RWxlbWVudElkKCkpKVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtyZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWx9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvV2F0Y2hQcm9ncmVzc1wiO1xuaW1wb3J0IHtXYXRjaENvdW50RGlzcGxheU1vZGV9IGZyb20gXCIuLi9Nb2RlbHMvV2F0Y2hDb3VudERpc3BsYXlNb2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cExpc3RFbGVtZW50VGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGdyb3VwOiBHcm91cCwgcHJpdmF0ZSBpc0N1cnJlbnRHcm91cDogYm9vbGVhbiwgcHJpdmF0ZSBzaG93V2F0Y2hlZENvdW50OiBib29sZWFuLCBwcml2YXRlIHdhdGNoQ291bnREaXNwbGF5TW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGdyb3VwLSR7Z3JvdXAuZ3JvdXBJZH1gKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdEl0ZW0gbGlzdEl0ZW0tYnV0dG9uIGFjdGlvblNoZWV0TWVudUl0ZW0gZW1ieS1idXR0b24gcHJldmlld0xpc3RJdGVtXCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuZ3JvdXAuZ3JvdXBJZH1cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld0l0ZW1UaXRsZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuaXNDdXJyZW50R3JvdXAgPyBcIm1hdGVyaWFsLWljb25zIGNoZWNrXCIgOiBcIlwifVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RJdGVtQm9keSBhY3Rpb25zaGVldExpc3RJdGVtQm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25TaGVldEl0ZW1UZXh0XCI+JHt0aGlzLmdyb3VwLmdyb3VwTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuc2hvd1dhdGNoZWRDb3VudCA/IGA8ZGl2IGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50XCI+JHtyZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWwodGhpcy5ncm91cCwgdGhpcy53YXRjaENvdW50RGlzcGxheU1vZGUpfTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IGNsaWNrSGFuZGxlcihlKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50UGxheWJhY2tSYXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFZpZGVvRWxlbWVudD4oJ3ZpZGVvLmh0bWx2aWRlb3BsYXllcicpPy5wbGF5YmFja1JhdGUgfHwgMTtcbn1cblxuZnVuY3Rpb24gemVyb1BhZChudW06IG51bWJlciwgcGxhY2VzOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU3RyaW5nKG51bSkucGFkU3RhcnQocGxhY2VzLCAnMCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RW5kVGltZShydW50aW1lVGlja3M6IG51bWJlciwgcGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIC8vIGNvbnZlcnQgZnJvbSB0aWNrcyAoMTAwbnMgdW5pdHMpIHRvIG1pbGxpc2Vjb25kc1xuICAgIHJ1bnRpbWVUaWNrcyAvPSAxMDAwMDtcbiAgICBwbGF5YmFja1Bvc2l0aW9uVGlja3MgLz0gMTAwMDA7XG5cbiAgICBjb25zdCByZW1haW5pbmdNczogbnVtYmVyID0gKHJ1bnRpbWVUaWNrcyAtIHBsYXliYWNrUG9zaXRpb25UaWNrcykgLyBnZXRDdXJyZW50UGxheWJhY2tSYXRlKCk7XG5cbiAgICBsZXQgdGlja3M6IG51bWJlciA9IERhdGUubm93KCkgKyByZW1haW5pbmdNcztcbiAgICB0aWNrcyAtPSAobmV3IERhdGUoKSkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDsgLy8gYWRqdXN0IGZvciB0aW1lem9uZVxuXG4gICAgbGV0IGhvdXJzOiBzdHJpbmcgPSB6ZXJvUGFkKE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDM2MDApICUgMjQpKTtcbiAgICBsZXQgbWludXRlczogc3RyaW5nID0gemVyb1BhZChNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCkpO1xuXG4gICAgcmV0dXJuIGBFbmRzIGF0ICR7aG91cnN9OiR7bWludXRlc31gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRW5kVGltZURpc3BsYXkoaXRlbTogUHJldmlld0l0ZW0pOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVuZHNBdFtkYXRhLWl0ZW0taWQ9XCIke2l0ZW0uSWR9XCJdYClcbiAgICBpZiAoIWVsZW1lbnQgfHwgIWl0ZW0uUnVuVGltZVRpY2tzKSByZXR1cm5cblxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBmb3JtYXRFbmRUaW1lKGl0ZW0uUnVuVGltZVRpY2tzLCBpdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcylcbn1cblxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxzVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGl0ZW0tJHtpdGVtLklkfWApO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9LWRldGFpbHNcIiBjbGFzcz1cIml0ZW1NaXNjSW5mbyBpdGVtTWlzY0luZm8tcHJpbWFyeSBwcmV2aWV3SXRlbURldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5QcmVtaWVyZURhdGUgPyBgPGRpdiBjbGFzcz1cIm1lZGlhSW5mb0l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgJHsobmV3IERhdGUodGhpcy5pdGVtLlByZW1pZXJlRGF0ZSkpLnRvTG9jYWxlRGF0ZVN0cmluZyh0aGlzLmdldExvY2FsZSgpKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhSW5mb0l0ZW1cIj4ke3RoaXMuZm9ybWF0UnVuVGltZSh0aGlzLml0ZW0uUnVuVGltZVRpY2tzKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Db21tdW5pdHlSYXRpbmcgPyBgPGRpdiBjbGFzcz1cInN0YXJSYXRpbmdDb250YWluZXIgbWVkaWFJbmZvSXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHN0YXJJY29uIHN0YXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNvbW11bml0eVJhdGluZy50b0ZpeGVkKDEpfVxuICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmcgPyBgPGRpdiBjbGFzcz1cIm1lZGlhSW5mb0l0ZW0gbWVkaWFJbmZvQ3JpdGljUmF0aW5nICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZyA+PSA2MCA/ICdtZWRpYUluZm9Dcml0aWNSYXRpbmdGcmVzaCcgOiAnbWVkaWFJbmZvQ3JpdGljUmF0aW5nUm90dGVuJ31cIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nfVxuICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW5kc0F0IG1lZGlhSW5mb0l0ZW1cIiBkYXRhLWl0ZW0taWQ9XCIke3RoaXMuaXRlbS5JZH1cIj4ke2Zvcm1hdEVuZFRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcywgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TG9jYWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubGFuZ3VhZ2VzXG4gICAgICAgICAgICA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gLy8gQHRzLWlnbm9yZSBmb3IgdXNlckxhbmd1YWdlICh0aGlzIGFkZHMgc3VwcG9ydCBmb3IgSUUpIFRPRE86IE1vdmUgdG8gaW50ZXJmYWNlXG4gICAgICAgICAgICA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRSdW5UaW1lKHRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBmb3JtYXQgdGhlIHRpY2tzIHRvIGEgc3RyaW5nIHdpdGggbWludXRlcyBhbmQgaG91cnNcbiAgICAgICAgdGlja3MgLz0gMTAwMDA7IC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCk7XG4gICAgICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgICAgIGxldCBob3Vyc1N0cmluZzogc3RyaW5nID0gaG91cnMgPiAwID8gYCR7aG91cnN9aCBgIDogJyc7XG4gICAgICAgIHJldHVybiBgJHtob3Vyc1N0cmluZ30ke21pbnV0ZXN9bWA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge0Zhdm9yaXRlSWNvblRlbXBsYXRlfSBmcm9tIFwiLi9RdWlja0FjdGlvbnMvRmF2b3JpdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5U3RhdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9QbGF5U3RhdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIlxuaW1wb3J0IHtJdGVtRGV0YWlsc1RlbXBsYXRlfSBmcm9tIFwiLi9JdGVtRGV0YWlsc1wiXG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiXG5pbXBvcnQge3RvZ2dsZVBsYXllZFN0YXRlTG9jYWxseX0gZnJvbSBcIi4uL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCJcblxuLy8gU2hvd3MvaGlkZXMgdGhlIFwic3RhcnQgcGxheWJhY2tcIiBvdmVybGF5IGZvciBhIHJlbmRlcmVkIGxpc3QgaXRlbVxuZXhwb3J0IGZ1bmN0aW9uIHNldEl0ZW1PdmVybGF5QWN0aXZlKGl0ZW1JZDogc3RyaW5nLCBpc0FjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJkT3ZlcmxheS0ke2l0ZW1JZH1gKT8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGlzQWN0aXZlKVxufVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBxdWlja0FjdGlvbkNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgICBwcml2YXRlIHBsYXlTdGF0ZUljb246IFBsYXlTdGF0ZUljb25UZW1wbGF0ZVxuICAgIHByaXZhdGUgZmF2b3JpdGVJY29uOiBGYXZvcml0ZUljb25UZW1wbGF0ZVxuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0sIHByaXZhdGUgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGl0ZW0tJHtpdGVtLklkfWApXG5cbiAgICAgICAgLy8gY3JlYXRlIHRlbXAgcXVpY2sgYWN0aW9uIGNvbnRhaW5lclxuICAgICAgICB0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICAvLyBjcmVhdGUgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24gPSBuZXcgUGxheVN0YXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIC0xLCB0aGlzLml0ZW0pXG4gICAgICAgIHRoaXMuZmF2b3JpdGVJY29uID0gbmV3IEZhdm9yaXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIDAsIHRoaXMuaXRlbSlcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBhZGQgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24ucmVuZGVyKClcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24ucmVuZGVyKClcblxuICAgICAgICAvLyBhZGQgaXRlbSBkZXRhaWxzL2luZm9cbiAgICAgICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBkZXRhaWxzOiBJdGVtRGV0YWlsc1RlbXBsYXRlID0gbmV3IEl0ZW1EZXRhaWxzVGVtcGxhdGUoZGV0YWlsc0NvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSlcbiAgICAgICAgZGV0YWlscy5yZW5kZXIoKVxuXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZVN0eWxlOiBzdHJpbmcgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9JdGVtcy8ke3RoaXMuaXRlbS5JZH0vSW1hZ2VzL1ByaW1hcnk/dGFnPSR7dGhpcy5pdGVtLlByaW1hcnlJbWFnZVRhZ30nKWBcblxuICAgICAgICBjb25zdCBzaG91bGRCbHVyOiBib29sZWFuID0gISh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuT25seUJsdXJVbndhdGNoZWQgJiYgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZClcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdEl0ZW0gbGlzdEl0ZW0tYnV0dG9uIGFjdGlvblNoZWV0TWVudUl0ZW0gZW1ieS1idXR0b24gcHJldmlld0xpc3RJdGVtXCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbS5JZH1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld0l0ZW1UaXRsZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0uSW5kZXhOdW1iZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUgIT09IEl0ZW1UeXBlLk1vdmllXG4gICAgICAgICAgICAgICAgICAgICAgICApID8gYDxzcGFuPiR7dGhpcy5pdGVtLkluZGV4TnVtYmVyfTwvc3Bhbj5gIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdEl0ZW1Cb2R5IGFjdGlvbnNoZWV0TGlzdEl0ZW1Cb2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25TaGVldEl0ZW1UZXh0XCI+JHt0aGlzLml0ZW0uTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0xpc3RJdGVtQ29udGVudCBoaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHByZXZpZXdJdGVtQ29udGVudFJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgb3ZlcmZsb3dCYWNrZHJvcENhcmQgY2FyZC1ob3ZlcmFibGUgY2FyZC13aXRodXNlcmRhdGEgcHJldmlld0l0ZW1JbWFnZUNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZEJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFNjYWxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFBhZGRlciBjYXJkUGFkZGVyLW92ZXJmbG93QmFja2Ryb3AgbGF6eS1oaWRkZW4tY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmRJbWFnZUljb24gbWF0ZXJpYWwtaWNvbnMgdHZcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwcmV2aWV3SXRlbUltYWdlQ2FyZC0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRJbWFnZUNvbnRhaW5lciBjYXJkQ29udGVudCBpdGVtQWN0aW9uIGxhenkgYmx1cmhhc2hlZCBsYXp5LWltYWdlLWZhZGVpbi1mYXN0ICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkJsdXJUaHVtYm5haWwgJiYgc2hvdWxkQmx1ciA/ICdibHVyJyA6ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiJHtiYWNrZ3JvdW5kSW1hZ2VTdHlsZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoUHJvZ3Jlc3MgJiYgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiaW5uZXJDYXJkRm9vdGVyIGZ1bGxJbm5lckNhcmRGb290ZXIgaW5uZXJDYXJkRm9vdGVyQ2xlYXIgaXRlbVByb2dyZXNzQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtUHJvZ3Jlc3NCYXJGb3JlZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6JHt0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZX0lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkT3ZlcmxheS0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5Q29udGFpbmVyIGl0ZW1BY3Rpb24gJHt0aGlzLml0ZW0uSWQgPT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID8gJ2hpZGUnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0LWl0ZW0tJHt0aGlzLml0ZW0uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzPVwicGFwZXItaWNvbi1idXR0b24tbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkT3ZlcmxheUJ1dHRvbiBjYXJkT3ZlcmxheUJ1dHRvbi1ob3ZlciBpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGNhcmRPdmVybGF5RmFiLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJyZXN1bWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjYXJkT3ZlcmxheUJ1dHRvbkljb24gY2FyZE92ZXJsYXlCdXR0b25JY29uLWhvdmVyIHBsYXlfYXJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1EZXNjcmlwdGlvbkNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJldmlld0l0ZW1EZXNjcmlwdGlvbiAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5CbHVyRGVzY3JpcHRpb24gJiYgc2hvdWxkQmx1ciA/ICdibHVyJyA6ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5EZXNjcmlwdGlvbiA/PyAnbG9hZGluZy4uLid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbiBoaWRlXCI+U2hvdyBtb3JlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xpY2tIYW5kbGVyKGUpKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcGxheVN0YXRlQnV0dG9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGF5U3RhdGVCdXR0b24tJHt0aGlzLml0ZW0uSWR9YClcbiAgICAgICAgcGxheVN0YXRlQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB0b2dnbGVQbGF5ZWRTdGF0ZUxvY2FsbHkodGhpcy5wcm9ncmFtRGF0YVN0b3JlLCB0aGlzLml0ZW0uSWQpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICByZW5kZXJlZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKVxuICAgICAgICAgICAgPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKVxuXG4gICAgICAgIGNvbnN0IGl0ZW1JbWFnZUNhcmQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0YXJ0LWl0ZW0tJHt0aGlzLml0ZW0uSWR9YClcbiAgICAgICAgaXRlbUltYWdlQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucGxheWJhY2tIYW5kbGVyLnBsYXkodGhpcy5pdGVtLklkLCB0aGlzLml0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKSlcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge3JlbmRlcldhdGNoZWRDb3VudElubmVySHRtbH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cFRpdGxlVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwb3B1cFRpdGxlQ29udGFpbmVyJylcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImxpc3RJdGVtIHByZXZpZXdQb3B1cFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwb3B1cFRpdGxlU3dpdGNoSWNvblwiIGNsYXNzPVwiYWN0aW9uc2hlZXRNZW51SXRlbUljb24gbGlzdEl0ZW1JY29uIGxpc3RJdGVtSWNvbi10cmFuc3BhcmVudCBtYXRlcmlhbC1pY29ucyBrZXlib2FyZF9iYWNrc3BhY2UgJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmxlbmd0aCA+IDEgPyAnJyA6ICdoaWRlJ31cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiYWN0aW9uU2hlZXRUaXRsZVwiPjwvaDE+XG4gICAgICAgICAgICAgICAgJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCA/ICc8ZGl2IGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50XCI+PC9kaXY+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xpY2tIYW5kbGVyKGUpKVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVyVGV4dCA9IHRleHRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U3dpdGNoYWJsZShzd2l0Y2hhYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjcG9wdXBUaXRsZVN3aXRjaEljb24nKT8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFzd2l0Y2hhYmxlKVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRXYXRjaGVkQ291bnQoZ3JvdXA6IEdyb3VwKSB7XG4gICAgICAgIGNvbnN0IHdhdGNoZWRDb3VudEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCcpXG4gICAgICAgIGlmICh3YXRjaGVkQ291bnRFbGVtZW50KSB3YXRjaGVkQ291bnRFbGVtZW50LmlubmVySFRNTCA9IHJlbmRlcldhdGNoZWRDb3VudElubmVySHRtbChncm91cCwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLldhdGNoQ291bnREaXNwbGF5TW9kZSlcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldFZpc2libGUoaXNWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpXG4gICAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BvcHVwUHJldmlld0J1dHRvbicpO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJhdXRvU2l6ZSBwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiIGlzPVwicGFwZXItaWNvbi1idXR0b24tbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVwaXNvZGUgUHJldmlld1wiPlxuICAgICAgICAgICAgICAgIDwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPlxuICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJzdmcxXCJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2IDRcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImxheWVyMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0NDdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40NzY0Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMy43NTY4Njc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIuMTY5MzY2MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMC4yMzgyMzMwM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PVwiMS44MjU3MzM1XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJyZWN0NDctNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NjU5NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gMS4wMjkxNDM3LDEuMDMyMDQ4MiBoIDMuNzUyODk5MSB2IDIuMTcyMjM5NCBsIDAuMDA2NzYsLTIuMTU3MjU5NSB6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJyZWN0NDctOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NzQyNztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gMS44MjI4NjE0LDAuMjM4NzEzMzYgaCAzLjc1OTI1OSBWIDIuNDEwMTIxMSBsIC0wLjAwNjgsLTIuMTcxNDA3NzQgelwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogYW55ID0+IGNsaWNrSGFuZGxlcigpKTtcbiAgICB9XG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuLi9CYXNlVGVtcGxhdGVcIlxuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uLy4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiXG5cbmV4cG9ydCBjbGFzcyBGYXZvcml0ZUljb25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdmYXZvcml0ZUJ1dHRvbi0nICsgaXRlbS5JZClcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1yYXRpbmdidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5pdGVtPy5JZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNlcnZlcmlkPVwiJHt0aGlzLml0ZW0/LlNlcnZlcklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbXR5cGU9XCJFcGlzb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1saWtlcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXNmYXZvcml0ZT1cIiR7dGhpcy5pdGVtPy5Vc2VyRGF0YT8uSXNGYXZvcml0ZSA/PyBmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGZhdm9yaXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuLi9CYXNlVGVtcGxhdGVcIlxuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uLy4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiXG5cbmV4cG9ydCBjbGFzcyBQbGF5U3RhdGVJY29uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncGxheVN0YXRlQnV0dG9uLScgKyB0aGlzLml0ZW0uSWQpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICAgICBpcz1cImVtYnktcGxheXN0YXRlYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbUFjdGlvbiBwYXBlci1pY29uLWJ1dHRvbi1saWdodCBlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbT8uSWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zZXJ2ZXJpZD1cIiR7dGhpcy5pdGVtPy5TZXJ2ZXJJZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWl0ZW10eXBlPVwiRXBpc29kZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbGlrZXM9XCJcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYXllZD1cIiR7dGhpcy5pdGVtPy5Vc2VyRGF0YT8uUGxheWVkID8/IGZhbHNlfVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTWFyayBwbGF5ZWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNoZWNrIHBsYXlzdGF0ZWJ1dHRvbi1pY29uLSR7dGhpcy5pdGVtPy5Vc2VyRGF0YT8uUGxheWVkID8gXCJwbGF5ZWRcIiA6IFwidW5wbGF5ZWRcIn1cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICB9XG59XG4iLCJjb25zdCBTUElOTkVSX0xBWUVSU19IVE1MOiBzdHJpbmcgPSBbMSwgMiwgMywgNF0ubWFwKGxheWVyID0+XG4gICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fbGF5ZXIgbWRsLXNwaW5uZXJfX2xheWVyLSR7bGF5ZXJ9XCI+YCArXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZS1jbGlwcGVyIG1kbC1zcGlubmVyX19sZWZ0XCI+YCArXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUgbWRsLXNwaW5uZXJfX2NpcmNsZUxlZnRcIj48L2Rpdj5gICtcbiAgICAgICAgYDwvZGl2PmAgK1xuICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUtY2xpcHBlciBtZGwtc3Bpbm5lcl9fcmlnaHRcIj5gICtcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZSBtZGwtc3Bpbm5lcl9fY2lyY2xlUmlnaHRcIj48L2Rpdj5gICtcbiAgICAgICAgYDwvZGl2PmAgK1xuICAgIGA8L2Rpdj5gXG4pLmpvaW4oJycpXG5cbmV4cG9ydCBmdW5jdGlvbiBzcGlubmVySHRtbChleHRyYUNsYXNzZXM6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxkaXYgZGlyPVwibHRyXCIgY2xhc3M9XCJkb2NzcGlubmVyIG1kbC1zcGlubmVyICR7ZXh0cmFDbGFzc2VzfVwiPiR7U1BJTk5FUl9MQVlFUlNfSFRNTH08L2Rpdj5gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZVNwaW5uZXIoY29udGFpbmVyOiBQYXJlbnROb2RlKTogdm9pZCB7XG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5tZGwtc3Bpbm5lcicpPy5jbGFzc0xpc3QuYWRkKCdtZGxTcGlubmVyQWN0aXZlJylcbn0iLCJleHBvcnQgZW51bSBFbmRwb2ludHMge1xuICAgIEJBU0UgPSBcIkluUGxheWVyUHJldmlld1wiLFxuICAgIElURU1fREVTQ1JJUFRJT04gPSBcIi9JdGVtcy97aXRlbUlkfVwiLFxuICAgIFBMQVlfTUVESUEgPSBcIi9JdGVtcy97aXRlbUlkfS9QbGF5L3t0aWNrc31cIixcbiAgICBOT1dfUExBWUlOR19JVEVNID0gXCIvTm93UGxheWluZ0l0ZW1cIixcbiAgICBTRVJWRVJfU0VUVElOR1MgPSBcIi9TZXJ2ZXJTZXR0aW5nc1wiLFxuICAgIElURU1fUFJFVklFV19UWVBFID0gXCIvVXNlcnMve3VzZXJJZH0ve2RldmljZUlkfS9JdGVtcy97aXRlbUlkfS9QcmV2aWV3SXRlbVR5cGVcIixcbiAgICBJVEVNX1BSRVZJRVdfREFUQSA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vSXRlbXMve2l0ZW1JZH0vUHJldmlld0RhdGFcIixcbiAgICBHUk9VUF9JVEVNUyA9IFwiL1VzZXJzL3t1c2VySWR9L0dyb3Vwcy97Z3JvdXBJZH0vSXRlbXNcIixcbiAgICBHUk9VUF9XQVRDSEVEX0NPVU5UID0gXCIvVXNlcnMve3VzZXJJZH0vR3JvdXBzL3tncm91cElkfS9XYXRjaGVkQ291bnRcIixcbiAgICBDT05UQUlOSU5HX0NPTExFQ1RJT05TID0gXCIvVXNlcnMve3VzZXJJZH0vSXRlbXMve2l0ZW1JZH0vQ29udGFpbmluZ0NvbGxlY3Rpb25zXCIsXG4gICAgU0VUX1NPVVJDRV9DT0xMRUNUSU9OID0gXCIvVXNlcnMve3VzZXJJZH0ve2RldmljZUlkfS9Tb3VyY2VDb2xsZWN0aW9uL3tjb2xsZWN0aW9uSWR9XCIsXG4gICAgUExVR0lOX1NFVFRJTkdTID0gXCIvUGx1Z2luU2V0dGluZ3NcIlxufSIsImltcG9ydCB7TGlzdEVsZW1lbnRUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9MaXN0RWxlbWVudFRlbXBsYXRlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtHcm91cCwgVU5LTk9XTl9XQVRDSEVEX0NPVU5UfSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7R3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL0dyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQb3B1cFRpdGxlVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlXCI7XG5pbXBvcnQge1BsYXliYWNrSGFuZGxlcn0gZnJvbSBcIi4vU2VydmljZXMvUGxheWJhY2tIYW5kbGVyXCI7XG5pbXBvcnQge0VuZHBvaW50c30gZnJvbSBcIi4vRW5kcG9pbnRzXCI7XG5pbXBvcnQge0dyb3VwSXRlbXNSZXN1bHR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cEl0ZW1zUmVzdWx0XCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7YWN0aXZhdGVTcGlubmVyLCBzcGlubmVySHRtbH0gZnJvbSBcIi4vQ29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQge3VwZGF0ZVdhdGNoZWRDb3VudERvbX0gZnJvbSBcIi4vU2VydmljZXMvRGF0YUZldGNoZXJcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9TZXJ2aWNlcy9Mb2dnZXJcIjtcblxuLy8gVGhlIGJhY2tlbmQgYWxyZWFkeSByZXR1cm5zIFBsYXlsaXN0cy9Cb3hTZXRzIGFuZCBGb2xkZXJzIGluIHRoZWlyIG93biBtYW51YWwgaXRlbS9kaXNzcGxheSBvcmRlclxuLy8gc29ydGluZyBzaG91bGQgb25seSBhcHBseSBmb3Igc2Vhc29uLWJhc2VkIChFcGlzb2RlKSBncm91cHMsIHdoZXJlIGl0IHJlZmxlY3RzIGFjdHVhbCBlcGlzb2RlIG9yZGVyLlxuY29uc3QgcHJlc2VydmVCYWNrZW5kT3JkZXJUeXBlczogU2V0PEl0ZW1UeXBlPiA9IG5ldyBTZXQoW0l0ZW1UeXBlLlBsYXlsaXN0LCBJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLkZvbGRlcl0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0RWxlbWVudEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikgeyB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlSXRlbUVsZW1lbnRzKGl0ZW1zOiBQcmV2aWV3SXRlbVtdLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50LCBvZmZzZXQ6IG51bWJlciA9IDApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcHJlc2VydmVPcmRlciA9IHByZXNlcnZlQmFja2VuZE9yZGVyVHlwZXMuaGFzKHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlKVxuICAgICAgICBpZiAoIXByZXNlcnZlT3JkZXIpXG4gICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLkluZGV4TnVtYmVyIC0gYi5JbmRleE51bWJlcilcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEZvciBQbGF5bGlzdHMvQm94U2V0cywgc2hvdyB0aGUgYWN0dWFsIGxpc3QgcG9zaXRpb24gaW5zdGVhZCBvZiB0aGUgSW5kZXhOdW1iZXIgZnJvbSB0aGVpciBzZWFzb24vZXBpc29kZS5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcmVzZXJ2ZU9yZGVyID8geyAuLi5pdGVtc1tpXSwgSW5kZXhOdW1iZXI6IG9mZnNldCArIGkgKyAxIH0gOiBpdGVtc1tpXVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIHBhcmVudERpdiwgb2Zmc2V0ICsgaSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgYXN5bmMgcHJlcGVuZEl0ZW1FbGVtZW50cyhpdGVtczogUHJldmlld0l0ZW1bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcHJlc2VydmVPcmRlciA9IHByZXNlcnZlQmFja2VuZE9yZGVyVHlwZXMuaGFzKHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlKVxuICAgICAgICBpZiAoIXByZXNlcnZlT3JkZXIpXG4gICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLkluZGV4TnVtYmVyIC0gYi5JbmRleE51bWJlcilcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHByZXNlcnZlT3JkZXIgPyB7IC4uLml0ZW1zW2ldLCBJbmRleE51bWJlcjogb2Zmc2V0ICsgaSArIDEgfSA6IGl0ZW1zW2ldXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlbmRlckl0ZW0oaXRlbSwgcGFyZW50RGl2LCAtMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3cgYSBcIlNob3cgbW9yZVwiIGJ1dHRvbiBpZiBkZXNjcmlwdGlvbiBleGNlZWRzIG1heCBoZWlnaHRcbiAgICBwcml2YXRlIGFwcGx5RGVzY3JpcHRpb25SZWFkTW9yZShpdGVtQ29udGFpbmVyOiBFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaXRlbUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKVxuICAgICAgICBjb25zdCByZWFkTW9yZUJ1dHRvbiA9IGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uJylcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbiB8fCAhcmVhZE1vcmVCdXR0b24pIHJldHVyblxuXG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJylcbiAgICAgICAgcmVhZE1vcmVCdXR0b24udGV4dENvbnRlbnQgPSAnU2hvdyBtb3JlJ1xuXG4gICAgICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSBkZXNjcmlwdGlvbi5zY3JvbGxIZWlnaHQgPiBkZXNjcmlwdGlvbi5jbGllbnRIZWlnaHRcbiAgICAgICAgcmVhZE1vcmVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFpc092ZXJmbG93aW5nKVxuICAgICAgICBpZiAoIWlzT3ZlcmZsb3dpbmcpIHJldHVyblxuXG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLm9uY2xpY2sgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpXG4gICAgICAgICAgICByZWFkTW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9IGV4cGFuZGVkID8gJ1Nob3cgbGVzcycgOiAnU2hvdyBtb3JlJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByZW5kZXJJdGVtKGl0ZW06IFByZXZpZXdJdGVtLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBpdGVtTGlzdEVsZW1lbnRUZW1wbGF0ZSA9IG5ldyBMaXN0RWxlbWVudFRlbXBsYXRlKHBhcmVudERpdiwgcG9zaXRpb25BZnRlckluZGV4LCBpdGVtLCB0aGlzLnBsYXliYWNrSGFuZGxlciwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlKTtcbiAgICAgICAgaXRlbUxpc3RFbGVtZW50VGVtcGxhdGUucmVuZGVyKGFzeW5jIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBoaWRlIGl0ZW0gY29udGVudCBmb3IgYWxsIGV4aXN0aW5nIGl0ZW1zIGluIHRoZSBwcmV2aWV3IGxpc3RcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJldmlld0xpc3RJdGVtQ29udGVudFwiKS5mb3JFYWNoKChlbGVtZW50OiBFbGVtZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZExpc3RJdGVtJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lcjogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLSR7aXRlbS5JZH1gKS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0xpc3RJdGVtQ29udGVudCcpO1xuXG4gICAgICAgICAgICAvLyBsb2FkIGl0ZW0gZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGlmICghaXRlbS5EZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLklURU1fREVTQ1JJUFRJT059YFxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbS5JZCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb246IHN0cmluZyA9IHJlc3VsdD8uRGVzY3JpcHRpb25cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgZGVzY3JpcHRpb24gZm9yIGl0ZW0gJHtpdGVtLklkfWAsIGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2hvdyBpdGVtIGNvbnRlbnQgZm9yIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICAgICAgdGhpcy5hcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGl0ZW0uSWQgPT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtTm9kZTogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLSR7aXRlbS5JZH1gKS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0xpc3RJdGVtQ29udGVudCcpO1xuXG4gICAgICAgICAgICAvLyBwcmVsb2FkIGRlc2NyaXB0aW9uIGZvciB0aGUgY3VycmVudGx5IHBsYXlpbmcgaXRlbVxuICAgICAgICAgICAgaWYgKCFpdGVtLkRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuSVRFTV9ERVNDUklQVElPTn1gXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtLklkKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbjogc3RyaW5nID0gcmVzdWx0Py5EZXNjcmlwdGlvblxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5vZGUucXVlcnlTZWxlY3RvcignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgZGVzY3JpcHRpb24gZm9yIGl0ZW0gJHtpdGVtLklkfWAsIGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgaXRlbU5vZGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICAgICAgdGhpcy5hcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbU5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVTcGlubmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ3ByZXZpZXdTY3JvbGxTcGlubmVyJylcbiAgICAgICAgc3Bpbm5lci5pbm5lckhUTUwgPSBzcGlubmVySHRtbCgpXG4gICAgICAgIGFjdGl2YXRlU3Bpbm5lcihzcGlubmVyKVxuICAgICAgICByZXR1cm4gc3Bpbm5lclxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGF0dGFjaFNjcm9sbFBhZ2luYXRpb24oXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGxvYWRQYWdlOiAoc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+LFxuICAgICAgICB2aWV3VG9rZW46IG51bWJlcixcbiAgICAgICAgaW5pdGlhbFRvdGFsTG9hZGVkOiBudW1iZXIsXG4gICAgICAgIGluaXRpYWxUb3RhbFJlY29yZENvdW50OiBudW1iZXIsXG4gICAgICAgIGluaXRpYWxMb2FkZWRTdGFydEluZGV4OiBudW1iZXJcbiAgICApOiB2b2lkIHtcbiAgICAgICAgY29uc3QgU0NST0xMX1RSSUdHRVJfRElTVEFOQ0VfUFggPSAyMDBcblxuICAgICAgICBsZXQgdG90YWxMb2FkZWQgPSBpbml0aWFsVG90YWxMb2FkZWRcbiAgICAgICAgbGV0IHRvdGFsUmVjb3JkQ291bnQgPSBpbml0aWFsVG90YWxSZWNvcmRDb3VudFxuICAgICAgICBsZXQgbG9hZGVkU3RhcnRJbmRleCA9IGluaXRpYWxMb2FkZWRTdGFydEluZGV4XG4gICAgICAgIGxldCBsb2FkaW5nRm9yd2FyZCA9IGZhbHNlXG4gICAgICAgIGxldCBsb2FkaW5nQmFja3dhcmQgPSBmYWxzZVxuXG4gICAgICAgIGNvbnN0IGxvYWROZXh0UGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgIGxvYWRpbmdGb3J3YXJkID0gdHJ1ZVxuICAgICAgICAgICAgY29uc3Qgc3Bpbm5lciA9IHRoaXMuY3JlYXRlU3Bpbm5lckVsZW1lbnQoKVxuICAgICAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKHNwaW5uZXIpXG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpdGVtcywgdG90YWxSZWNvcmRDb3VudDogbmV3VG90YWxSZWNvcmRDb3VudCB9ID0gYXdhaXQgbG9hZFBhZ2UodG90YWxMb2FkZWQpXG4gICAgICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJdGVtRWxlbWVudHMoaXRlbXMsIHBhcmVudERpdiwgdG90YWxMb2FkZWQpXG4gICAgICAgICAgICAgICAgdG90YWxMb2FkZWQgKz0gaXRlbXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgdG90YWxSZWNvcmRDb3VudCA9IG5ld1RvdGFsUmVjb3JkQ291bnRcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBuZXdseSBsb2FkZWQgcGFnZSBtaWdodCBzdGlsbCBub3QgZmlsbCB0aGUgY29udGFpbmVyLCBzbyByZS1jaGVjayByaWdodCBhd2F5LlxuICAgICAgICAgICAgICAgIGNoZWNrU2Nyb2xsUG9zaXRpb24oKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCBuZXh0IHBhZ2Ugb2YgaXRlbXMgKHN0YXJ0SW5kZXggJHt0b3RhbExvYWRlZH0pYCwgZXgpXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5yZW1vdmUoKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nRm9yd2FyZCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkUHJldmlvdXNQYWdlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgbG9hZGluZ0JhY2t3YXJkID0gdHJ1ZVxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0QmVmb3JlU3Bpbm5lciA9IHBhcmVudERpdi5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgIGNvbnN0IHNwaW5uZXIgPSB0aGlzLmNyZWF0ZVNwaW5uZXJFbGVtZW50KClcbiAgICAgICAgICAgIHBhcmVudERpdi5pbnNlcnRCZWZvcmUoc3Bpbm5lciwgcGFyZW50RGl2LmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICBwYXJlbnREaXYuc2Nyb2xsVG9wICs9IHBhcmVudERpdi5zY3JvbGxIZWlnaHQgLSBzY3JvbGxIZWlnaHRCZWZvcmVTcGlubmVyXG5cbiAgICAgICAgICAgIGNvbnN0IHBhZ2VTaXplID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZVxuICAgICAgICAgICAgY29uc3QgbmV3U3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIGxvYWRlZFN0YXJ0SW5kZXggLSBwYWdlU2l6ZSlcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1zIH0gPSBhd2FpdCBsb2FkUGFnZShuZXdTdGFydEluZGV4KVxuICAgICAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0QmVmb3JlUHJlcGVuZCA9IHBhcmVudERpdi5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wcmVwZW5kSXRlbUVsZW1lbnRzKGl0ZW1zLCBwYXJlbnREaXYsIG5ld1N0YXJ0SW5kZXgpXG4gICAgICAgICAgICAgICAgcGFyZW50RGl2LnNjcm9sbFRvcCArPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsSGVpZ2h0QmVmb3JlUHJlcGVuZFxuICAgICAgICAgICAgICAgIGxvYWRlZFN0YXJ0SW5kZXggPSBuZXdTdGFydEluZGV4XG5cbiAgICAgICAgICAgICAgICBjaGVja1Njcm9sbFBvc2l0aW9uKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgcHJldmlvdXMgcGFnZSBvZiBpdGVtcyAoc3RhcnRJbmRleCAke25ld1N0YXJ0SW5kZXh9KWAsIGV4KVxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0JhY2t3YXJkID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoZWNrU2Nyb2xsUG9zaXRpb24gPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnREaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGxQb3NpdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmVhckJvdHRvbSA9IHBhcmVudERpdi5zY3JvbGxUb3AgKyBwYXJlbnREaXYuY2xpZW50SGVpZ2h0ID49IHBhcmVudERpdi5zY3JvbGxIZWlnaHQgLSBTQ1JPTExfVFJJR0dFUl9ESVNUQU5DRV9QWFxuICAgICAgICAgICAgaWYgKCFsb2FkaW5nRm9yd2FyZCAmJiB0b3RhbExvYWRlZCA8IHRvdGFsUmVjb3JkQ291bnQgJiYgbmVhckJvdHRvbSkge1xuICAgICAgICAgICAgICAgIGxvYWROZXh0UGFnZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5lYXJUb3AgPSBwYXJlbnREaXYuc2Nyb2xsVG9wIDw9IFNDUk9MTF9UUklHR0VSX0RJU1RBTkNFX1BYXG4gICAgICAgICAgICBpZiAoIWxvYWRpbmdCYWNrd2FyZCAmJiBsb2FkZWRTdGFydEluZGV4ID4gMCAmJiBuZWFyVG9wKSB7XG4gICAgICAgICAgICAgICAgbG9hZFByZXZpb3VzUGFnZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnREaXYuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGxQb3NpdGlvbilcbiAgICAgICAgY2hlY2tTY3JvbGxQb3NpdGlvbigpXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUxhenlJdGVtTGlzdChcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgbG9hZFBhZ2U6IChzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4sXG4gICAgICAgIHZpZXdUb2tlbjogbnVtYmVyLFxuICAgICAgICBpbml0aWFsUGFnZT86IEdyb3VwSXRlbXNSZXN1bHQsXG4gICAgICAgIGluaXRpYWxPZmZzZXQ6IG51bWJlciA9IDBcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZmlyc3RQYWdlID0gaW5pdGlhbFBhZ2UgPz8gYXdhaXQgbG9hZFBhZ2UoMClcbiAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbUVsZW1lbnRzKGZpcnN0UGFnZS5pdGVtcywgcGFyZW50RGl2LCBpbml0aWFsT2Zmc2V0KVxuXG4gICAgICAgIGNvbnN0IHRvdGFsTG9hZGVkID0gaW5pdGlhbE9mZnNldCArIGZpcnN0UGFnZS5pdGVtcy5sZW5ndGhcbiAgICAgICAgdGhpcy5hdHRhY2hTY3JvbGxQYWdpbmF0aW9uKHBhcmVudERpdiwgbG9hZFBhZ2UsIHZpZXdUb2tlbiwgdG90YWxMb2FkZWQsIGZpcnN0UGFnZS50b3RhbFJlY29yZENvdW50LCBpbml0aWFsT2Zmc2V0KVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZmV0Y2hHcm91cFdhdGNoZWRDb3VudChncm91cElkOiBzdHJpbmcpOiBQcm9taXNlPHsgcGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIsIHBsYXllZFJ1bnRpbWVUaWNrczogbnVtYmVyLCB0b3RhbFJ1bnRpbWVUaWNrczogbnVtYmVyIH0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfV0FUQ0hFRF9DT1VOVH1gXG4gICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAgICAgLnJlcGxhY2UoJ3tncm91cElkfScsIGdyb3VwSWQpKVxuICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBsYXllZEl0ZW1Db3VudDogcmF3LlBsYXllZEl0ZW1Db3VudCxcbiAgICAgICAgICAgIHRvdGFsSXRlbUNvdW50OiByYXcuVG90YWxJdGVtQ291bnQsXG4gICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IHJhdy5QbGF5ZWRSdW50aW1lVGlja3MsXG4gICAgICAgICAgICB0b3RhbFJ1bnRpbWVUaWNrczogcmF3LlRvdGFsUnVudGltZVRpY2tzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXA6IEdyb3VwKTogUHJvbWlzZTxHcm91cD4ge1xuICAgICAgICBpZiAoZ3JvdXAucGxheWVkSXRlbUNvdW50ICE9PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHJldHVybiBncm91cFxuXG4gICAgICAgIGNvbnN0IHsgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudCwgcGxheWVkUnVudGltZVRpY2tzLCB0b3RhbFJ1bnRpbWVUaWNrcyB9ID0gYXdhaXQgdGhpcy5mZXRjaEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwLmdyb3VwSWQpXG4gICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5zZXRHcm91cFdhdGNoZWRDb3VudChncm91cC5ncm91cElkLCBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50LCBwbGF5ZWRSdW50aW1lVGlja3MsIHRvdGFsUnVudGltZVRpY2tzKVxuICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudCwgcGxheWVkUnVudGltZVRpY2tzLCB0b3RhbFJ1bnRpbWVUaWNrcyB9XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZUdyb3VwRWxlbWVudHMoXG4gICAgICAgIGdyb3VwczogR3JvdXBbXSxcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgY3VycmVudEdyb3VwSW5kZXg6IG51bWJlcixcbiAgICAgICAgdGl0bGVDb250YWluZXI6IFBvcHVwVGl0bGVUZW1wbGF0ZSxcbiAgICAgICAgbG9hZEl0ZW1zOiAoZ3JvdXBJZDogc3RyaW5nLCBzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD5cbiAgICApOiB2b2lkIHtcbiAgICAgICAgZ3JvdXBzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXhOdW1iZXIgLSBiLmluZGV4TnVtYmVyKVxuXG4gICAgICAgIC8vIEludmFsaWRhdGVzIGFueSBpdGVtIGxvYWQgc3RpbGwgaW4gcHJvZ3Jlc3NzXG4gICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZShwYXJlbnREaXYsIGksIGdyb3Vwc1tpXSwgZ3JvdXBzW2ldLmluZGV4TnVtYmVyID09PSBjdXJyZW50R3JvdXBJbmRleCwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQsIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5XYXRjaENvdW50RGlzcGxheU1vZGUpXG4gICAgICAgICAgICBncm91cC5yZW5kZXIoYXN5bmMgKGU6IE1vdXNlRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCA9IGdyb3Vwc1tpXS5ncm91cElkXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0VGV4dChncm91cHNbaV0uZ3JvdXBOYW1lKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBzW2ldLnBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZUdyb3VwV2F0Y2hlZENvdW50KGdyb3Vwc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHRpdGxlQ29udGFpbmVyLnNldFdhdGNoZWRDb3VudCh1cGRhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCB3YXRjaGVkIGNvdW50IGZvciBncm91cCAke2dyb3Vwc1tpXS5ncm91cElkfWAsIGV4KSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpXG5cbiAgICAgICAgICAgICAgICBwYXJlbnREaXYuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3VG9rZW4gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZCA9ICF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWRcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmZpbmQoZyA9PiBnLmdyb3VwSWQgPT09IGdyb3Vwc1tpXS5ncm91cElkKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxQYWdlOiBHcm91cEl0ZW1zUmVzdWx0IHwgdW5kZWZpbmVkID0gY2FjaGVkPy5sb2FkZWRTdGFydEluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyB7IGl0ZW1zOiBbLi4uY2FjaGVkLml0ZW1zXSwgdG90YWxSZWNvcmRDb3VudDogY2FjaGVkLmxvYWRlZFRvdGFsUmVjb3JkQ291bnQgPz8gY2FjaGVkLml0ZW1zLmxlbmd0aCB9XG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbE9mZnNldCA9IGNhY2hlZD8ubG9hZGVkU3RhcnRJbmRleCA/PyAwXG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUxhenlJdGVtTGlzdChwYXJlbnREaXYsIChzdGFydEluZGV4KSA9PiBsb2FkSXRlbXMoZ3JvdXBzW2ldLmdyb3VwSWQsIHN0YXJ0SW5kZXgpLCB2aWV3VG9rZW4sIGluaXRpYWxQYWdlLCBpbml0aWFsT2Zmc2V0KVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIGl0ZW1zIGZvciBncm91cCAke2dyb3Vwc1tpXS5ncm91cElkfWAsIGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCAmJiBncm91cHNbaV0ucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZUdyb3VwV2F0Y2hlZENvdW50KGdyb3Vwc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odXBkYXRlZCA9PiB1cGRhdGVXYXRjaGVkQ291bnREb20odGhpcy5wcm9ncmFtRGF0YVN0b3JlLCB1cGRhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgd2F0Y2hlZCBjb3VudCBmb3IgZ3JvdXAgJHtncm91cHNbaV0uZ3JvdXBJZH1gLCBleCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBJdGVtVHlwZSB7XG4gICAgQWdncmVnYXRlRm9sZGVyLFxuICAgIEF1ZGlvLFxuICAgIEF1ZGlvQm9vayxcbiAgICBCYXNlUGx1Z2luRm9sZGVyLFxuICAgIEJvb2ssXG4gICAgQm94U2V0LFxuICAgIENoYW5uZWwsXG4gICAgQ2hhbm5lbEZvbGRlckl0ZW0sXG4gICAgQ29sbGVjdGlvbkZvbGRlcixcbiAgICBFcGlzb2RlLFxuICAgIEZvbGRlcixcbiAgICBHZW5yZSxcbiAgICBNYW51YWxQbGF5bGlzdHNGb2xkZXIsXG4gICAgTW92aWUsXG4gICAgTGl2ZVR2Q2hhbm5lbCxcbiAgICBMaXZlVHZQcm9ncmFtLFxuICAgIE11c2ljQWxidW0sXG4gICAgTXVzaWNBcnRpc3QsXG4gICAgTXVzaWNHZW5yZSxcbiAgICBNdXNpY1ZpZGVvLFxuICAgIFBlcnNvbixcbiAgICBQaG90byxcbiAgICBQaG90b0FsYnVtLFxuICAgIFBsYXlsaXN0LFxuICAgIFBsYXlsaXN0c0ZvbGRlcixcbiAgICBQcm9ncmFtLFxuICAgIFJlY29yZGluZyxcbiAgICBTZWFzb24sXG4gICAgU2VyaWVzLFxuICAgIFN0dWRpbyxcbiAgICBUcmFpbGVyLFxuICAgIFR2Q2hhbm5lbCxcbiAgICBUdlByb2dyYW0sXG4gICAgVXNlclJvb3RGb2xkZXIsXG4gICAgVXNlclZpZXcsXG4gICAgVmlkZW8sXG4gICAgWWVhclxufSIsImV4cG9ydCBlbnVtIExvZ0xldmVsIHtcbiAgICBOb25lID0gMCxcbiAgICBFcnJvciA9IDEsXG4gICAgSW5mb3JtYXRpb24gPSAyLFxuICAgIERlYnVnID0gMyxcbn1cbiIsImltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL0l0ZW1UeXBlXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4vV2F0Y2hDb3VudERpc3BsYXlNb2RlXCI7XG5pbXBvcnQge0xvZ0xldmVsfSBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xuXG5leHBvcnQgdHlwZSBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICBFbmFibGVkSXRlbVR5cGVzOiBJdGVtVHlwZVtdLFxuICAgIEJsdXJEZXNjcmlwdGlvbjogYm9vbGVhbixcbiAgICBCbHVyVGh1bWJuYWlsOiBib29sZWFuLFxuICAgIEVwaXNvZGVQYWdlU2l6ZTogbnVtYmVyLFxuICAgIFNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4sXG4gICAgV2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUsXG4gICAgU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zOiBib29sZWFuLFxuICAgIE9ubHlCbHVyVW53YXRjaGVkOiBib29sZWFuLFxuICAgIFNob3dXYXRjaFByb2dyZXNzOiBib29sZWFuLFxuICAgIExvZ0xldmVsOiBMb2dMZXZlbCxcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRQbHVnaW5TZXR0aW5nczogUGx1Z2luU2V0dGluZ3MgPSB7XG4gICAgRW5hYmxlZEl0ZW1UeXBlczogW0l0ZW1UeXBlLlNlcmllcywgSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5Nb3ZpZSwgSXRlbVR5cGUuVmlkZW9dLFxuICAgIEJsdXJEZXNjcmlwdGlvbjogZmFsc2UsXG4gICAgQmx1clRodW1ibmFpbDogZmFsc2UsXG4gICAgRXBpc29kZVBhZ2VTaXplOiAxMCxcbiAgICBTaG93V2F0Y2hlZENvdW50OiB0cnVlLFxuICAgIFdhdGNoQ291bnREaXNwbGF5TW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlLkhvdXJzTWludXRlcyxcbiAgICBTZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnM6IHRydWUsXG4gICAgT25seUJsdXJVbndhdGNoZWQ6IGZhbHNlLFxuICAgIFNob3dXYXRjaFByb2dyZXNzOiB0cnVlLFxuICAgIExvZ0xldmVsOiBMb2dMZXZlbC5JbmZvcm1hdGlvbixcbn0iLCJpbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi9QcmV2aWV3SXRlbVwiO1xuXG5leHBvcnQgdHlwZSBHcm91cCA9IHtcbiAgICBncm91cElkOiBzdHJpbmdcbiAgICBncm91cE5hbWU6IHN0cmluZ1xuICAgIGl0ZW1zOiBQcmV2aWV3SXRlbVtdXG4gICAgaW5kZXhOdW1iZXI6IG51bWJlclxuICAgIHBsYXllZEl0ZW1Db3VudDogbnVtYmVyXG4gICAgdG90YWxJdGVtQ291bnQ6IG51bWJlclxuICAgIHBsYXllZFJ1bnRpbWVUaWNrczogbnVtYmVyXG4gICAgdG90YWxSdW50aW1lVGlja3M6IG51bWJlclxuICAgIGxvYWRlZFN0YXJ0SW5kZXg/OiBudW1iZXJcbiAgICBsb2FkZWRFbmRJbmRleD86IG51bWJlclxuICAgIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ/OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IFVOS05PV05fV0FUQ0hFRF9DT1VOVCA9IC0xXG5cbmV4cG9ydCBjb25zdCBmb3JtYXRXYXRjaGVkQ291bnQgPSAocGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIpOiBzdHJpbmcgPT5cbiAgICBwbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCB8fCB0b3RhbEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UXG4gICAgICAgID8gJ+KApiB3YXRjaGVkJ1xuICAgICAgICA6IGAke3BsYXllZEl0ZW1Db3VudH0vJHt0b3RhbEl0ZW1Db3VudH0gd2F0Y2hlZGBcblxuIiwiaW1wb3J0IHtmb3JtYXRXYXRjaGVkQ291bnQsIEdyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuL0dyb3VwXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4uL1dhdGNoQ291bnREaXNwbGF5TW9kZVwiO1xuXG5jb25zdCBUSUNLU19QRVJfU0VDT05EID0gMTBfMDAwXzAwMFxuXG5jb25zdCBnZXRUaW1lU3RyaW5nID0gKHRpY2tzOiBudW1iZXIsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IHN0cmluZyA9PiB7XG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpY2tzIC8gVElDS1NfUEVSX1NFQ09ORFxuICAgIGNvbnN0IHRvdGFsTWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKVxuICAgIGNvbnN0IHRvdGFsSG91cnMgPSBNYXRoLmZsb29yKHRvdGFsTWludXRlcyAvIDYwKVxuICAgIGNvbnN0IHRvdGFsRGF5cyA9IE1hdGguZmxvb3IodG90YWxIb3VycyAvIDI0KVxuICAgIGNvbnN0IHRvdGFsTW9udGhzID0gTWF0aC5mbG9vcih0b3RhbERheXMgLyAzMClcbiAgICBjb25zdCB0b3RhbFllYXJzID0gTWF0aC5mbG9vcih0b3RhbERheXMgLyAzNjUpXG5cbiAgICBpZiAobW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkhvdXJzTWludXRlcykge1xuICAgICAgICBpZiAodG90YWxIb3VycyA+PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gdG90YWxNaW51dGVzICUgNjBcbiAgICAgICAgICAgIHJldHVybiBtaW51dGVzID4gMCA/IGAke3RvdGFsSG91cnN9aCAke21pbnV0ZXN9bWAgOiBgJHt0b3RhbEhvdXJzfWhgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdGFsTWludXRlcyA+IDAgPyBgJHt0b3RhbE1pbnV0ZXN9bWAgOiAnMG0nXG4gICAgfVxuXG4gICAgaWYgKHRvdGFsWWVhcnMgPj0gMSkge1xuICAgICAgICBjb25zdCBtb250aHMgPSBNYXRoLmZsb29yKCh0b3RhbERheXMgJSAzNjUpIC8gMzApXG4gICAgICAgIHJldHVybiBtb250aHMgPiAwID8gYCR7dG90YWxZZWFyc315ICR7bW9udGhzfW1vYCA6IGAke3RvdGFsWWVhcnN9eWBcbiAgICB9XG4gICAgaWYgKHRvdGFsTW9udGhzID49IDEpIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IHRvdGFsRGF5cyAlIDMwXG4gICAgICAgIHJldHVybiBkYXlzID4gMCA/IGAke3RvdGFsTW9udGhzfW1vICR7ZGF5c31kYCA6IGAke3RvdGFsTW9udGhzfW1vYFxuICAgIH1cbiAgICBpZiAodG90YWxEYXlzID49IDEpIHtcbiAgICAgICAgY29uc3QgaG91cnMgPSB0b3RhbEhvdXJzICUgMjRcbiAgICAgICAgcmV0dXJuIGhvdXJzID4gMCA/IGAke3RvdGFsRGF5c31kICR7aG91cnN9aGAgOiBgJHt0b3RhbERheXN9ZGBcbiAgICB9XG4gICAgaWYgKHRvdGFsSG91cnMgPj0gMSkge1xuICAgICAgICBjb25zdCBtaW51dGVzID0gdG90YWxNaW51dGVzICUgNjBcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXMgPiAwID8gYCR7dG90YWxIb3Vyc31oICR7bWludXRlc31tYCA6IGAke3RvdGFsSG91cnN9aGBcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsTWludXRlcyA+IDAgPyBgJHt0b3RhbE1pbnV0ZXN9bWAgOiAnMG0nXG59XG5cbmNvbnN0IGNsYW1wUHJvZ3Jlc3MgPSAocHJvZ3Jlc3M6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIE1hdGgucm91bmQocHJvZ3Jlc3MpKSlcblxuZXhwb3J0IGNvbnN0IGdldFdhdGNoUHJvZ3Jlc3NQZXJjZW50ID0gKGdyb3VwOiBHcm91cCwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogbnVtYmVyID0+IHtcbiAgICBpZiAobW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkNvdW50KSB7XG4gICAgICAgIGlmICghZ3JvdXAudG90YWxJdGVtQ291bnQpIHJldHVybiAwXG4gICAgICAgIHJldHVybiBjbGFtcFByb2dyZXNzKChncm91cC5wbGF5ZWRJdGVtQ291bnQgLyBncm91cC50b3RhbEl0ZW1Db3VudCkgKiAxMDApXG4gICAgfVxuXG4gICAgaWYgKCFncm91cC50b3RhbFJ1bnRpbWVUaWNrcykgcmV0dXJuIDBcbiAgICByZXR1cm4gY2xhbXBQcm9ncmVzcygoZ3JvdXAucGxheWVkUnVudGltZVRpY2tzIC8gZ3JvdXAudG90YWxSdW50aW1lVGlja3MpICogMTAwKVxufVxuXG5leHBvcnQgY29uc3QgaXNXYXRjaGVkQ291bnRVbmtub3duID0gKGdyb3VwOiBHcm91cCwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKGdyb3VwLnBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UIHx8IGdyb3VwLnRvdGFsSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpXG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgICByZXR1cm4gbW9kZSAhPT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkNvdW50XG4gICAgICAgICYmIChncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCB8fCBncm91cC50b3RhbFJ1bnRpbWVUaWNrcyA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0V2F0Y2hlZENvdW50VGV4dCA9IChncm91cDogR3JvdXAsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Db3VudClcbiAgICAgICAgcmV0dXJuIGZvcm1hdFdhdGNoZWRDb3VudChncm91cC5wbGF5ZWRJdGVtQ291bnQsIGdyb3VwLnRvdGFsSXRlbUNvdW50KVxuXG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5QZXJjZW50YWdlKVxuICAgICAgICByZXR1cm4gYCR7Z2V0V2F0Y2hQcm9ncmVzc1BlcmNlbnQoZ3JvdXAsIG1vZGUpfSVgXG5cbiAgICBjb25zdCBzYWZlVG90YWwgPSBNYXRoLm1heCgwLCBncm91cC50b3RhbFJ1bnRpbWVUaWNrcyB8fCAwKVxuICAgIGNvbnN0IHNhZmVQbGF5ZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzYWZlVG90YWwsIGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyB8fCAwKSlcbiAgICByZXR1cm4gYCR7Z2V0VGltZVN0cmluZyhzYWZlUGxheWVkLCBtb2RlKX0gLyAke2dldFRpbWVTdHJpbmcoc2FmZVRvdGFsLCBtb2RlKX1gXG59XG5cbi8vIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9uMDBiY29kci9KZWxseWZpbi1FbmhhbmNlZC9ibG9iL21haW4vSmVsbHlmaW4uUGx1Z2luLkplbGx5ZmluRW5oYW5jZWQvanMvZW5oYW5jZWQvaXRlbWRldGFpbHMvZmVhdHVyZXMtZGV0YWlscy1tZWRpYS1pbmZvLmpzXG5jb25zdCBnZXRXYXRjaFByb2dyZXNzSWNvbkh0bWwgPSAocHJvZ3Jlc3M6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogOCAvLyByYWRpdXMgPSA4XG4gICAgY29uc3Qgb2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAtIChwcm9ncmVzcyAvIDEwMCkgKiBjaXJjdW1mZXJlbmNlXG5cbiAgICBpZiAocHJvZ3Jlc3MgPj0gMTAwKSB7XG4gICAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwLjNlbTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBmbGV4LXNocmluazogMDtcIj5cbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS41IDE1LjVsLTMtMyAxLjQtMS40TDkuNSAxMi43bDUuNi01LjYgMS40IDEuNHpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8L3N2Zz5gXG4gICAgfVxuXG4gICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDAuM2VtOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGZsZXgtc2hyaW5rOiAwO1wiPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjhcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBvcGFjaXR5PVwiMC4yXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjhcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgICAgc3R5bGU9XCJzdHJva2UtZGFzaGFycmF5OiAke2NpcmN1bWZlcmVuY2V9OyBzdHJva2UtZGFzaG9mZnNldDogJHtvZmZzZXR9OyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1wiLz5cbiAgICA8L3N2Zz5gXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWwgPSAoZ3JvdXA6IEdyb3VwLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChpc1dhdGNoZWRDb3VudFVua25vd24oZ3JvdXAsIG1vZGUpKVxuICAgICAgICByZXR1cm4gYCR7Z2V0V2F0Y2hQcm9ncmVzc0ljb25IdG1sKDApfTxzcGFuIGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50VGV4dFwiPiwsLDwvc3Bhbj5gXG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IGdldFdhdGNoUHJvZ3Jlc3NQZXJjZW50KGdyb3VwLCBtb2RlKVxuICAgIHJldHVybiBgJHtnZXRXYXRjaFByb2dyZXNzSWNvbkh0bWwocHJvZ3Jlc3MpfTxzcGFuIGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50VGV4dFwiPiR7Zm9ybWF0V2F0Y2hlZENvdW50VGV4dChncm91cCwgbW9kZSl9PC9zcGFuPmBcbn1cbiIsImV4cG9ydCB0eXBlIFNlcnZlclNldHRpbmdzID0ge1xuICAgIE1pblJlc3VtZVBjdDogbnVtYmVyLCBcbiAgICBNYXhSZXN1bWVQY3Q6IG51bWJlciwgXG4gICAgTWluUmVzdW1lRHVyYXRpb25TZWNvbmRzOiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXJ2ZXJTZXR0aW5nczogU2VydmVyU2V0dGluZ3MgPSB7XG4gICAgTWluUmVzdW1lUGN0OiA1LFxuICAgIE1heFJlc3VtZVBjdDogOTAsXG4gICAgTWluUmVzdW1lRHVyYXRpb25TZWNvbmRzOiAzMDBcbn0iLCJleHBvcnQgZW51bSBXYXRjaENvdW50RGlzcGxheU1vZGUge1xuICAgIENvdW50ID0gMCxcbiAgICBIb3Vyc01pbnV0ZXMgPSAxLFxuICAgIEFsbFVuaXRzID0gMixcbiAgICBQZXJjZW50YWdlID0gMyxcbn1cbiIsImltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtyZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWx9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvV2F0Y2hQcm9ncmVzc1wiO1xuXG50eXBlIFVzZXJEYXRhQ2hhbmdlZEVudHJ5ID0ge1xuICAgIEl0ZW1JZDogc3RyaW5nXG4gICAgUGxheWVkOiBib29sZWFuXG4gICAgSXNGYXZvcml0ZTogYm9vbGVhblxuICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyXG4gICAgUGxheWVkUGVyY2VudGFnZT86IG51bWJlclxufVxuXG50eXBlIFdlYlNvY2tldE1lc3NhZ2UgPSB7XG4gICAgTWVzc2FnZVR5cGU6IHN0cmluZ1xuICAgIERhdGE6IGFueVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlV2F0Y2hlZENvdW50RG9tKHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGdyb3VwOiBHcm91cCk6IHZvaWQge1xuICAgIGNvbnN0IGh0bWwgPSByZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWwoZ3JvdXAsIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuV2F0Y2hDb3VudERpc3BsYXlNb2RlKVxuXG4gICAgaWYgKGdyb3VwLmdyb3VwSWQgPT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCkge1xuICAgICAgICBjb25zdCBwb3B1cFdhdGNoZWRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cFRpdGxlQ29udGFpbmVyJyk/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICAgICAgaWYgKHBvcHVwV2F0Y2hlZENvdW50KSBwb3B1cFdhdGNoZWRDb3VudC5pbm5lckhUTUwgPSBodG1sXG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBMaXN0V2F0Y2hlZENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGdyb3VwLSR7Z3JvdXAuZ3JvdXBJZH1gKT8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgIGlmIChncm91cExpc3RXYXRjaGVkQ291bnQpIGdyb3VwTGlzdFdhdGNoZWRDb3VudC5pbm5lckhUTUwgPSBodG1sXG59XG5cbmZ1bmN0aW9uIHBsYXllZFJ1bnRpbWVDb250cmlidXRpb24oaXRlbTogUHJldmlld0l0ZW0sIHBsYXllZDogYm9vbGVhbiwgcGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBwbGF5ZWQgPyAoaXRlbS5SdW5UaW1lVGlja3MgPz8gMCkgOiBwbGF5YmFja1Bvc2l0aW9uVGlja3Ncbn1cblxuZnVuY3Rpb24gYWRqdXN0V2F0Y2hlZENvdW50KFxuICAgIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsXG4gICAgaXRlbTogUHJldmlld0l0ZW0sXG4gICAgd2FzUGxheWVkOiBib29sZWFuLFxuICAgIGlzUGxheWVkOiBib29sZWFuLFxuICAgIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyLFxuICAgIG5ld1BsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyXG4pOiB2b2lkIHtcbiAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCkgcmV0dXJuXG4gICAgaWYgKHdhc1BsYXllZCA9PT0gaXNQbGF5ZWQpIHJldHVyblxuXG4gICAgY29uc3QgZGVsdGFQbGF5ZWRDb3VudCA9IGlzUGxheWVkID8gMSA6IC0xXG4gICAgY29uc3QgZGVsdGFQbGF5ZWRSdW50aW1lVGlja3MgPVxuICAgICAgICBwbGF5ZWRSdW50aW1lQ29udHJpYnV0aW9uKGl0ZW0sIGlzUGxheWVkLCBuZXdQbGF5YmFja1Bvc2l0aW9uVGlja3MpIC1cbiAgICAgICAgcGxheWVkUnVudGltZUNvbnRyaWJ1dGlvbihpdGVtLCB3YXNQbGF5ZWQsIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcylcblxuICAgIGNvbnN0IHVwZGF0ZWRHcm91cCA9IHByb2dyYW1EYXRhU3RvcmUuYWRqdXN0R3JvdXBXYXRjaFN0YXRzKGl0ZW0uSWQsIGRlbHRhUGxheWVkQ291bnQsIGRlbHRhUGxheWVkUnVudGltZVRpY2tzKVxuICAgIGlmICh1cGRhdGVkR3JvdXApIHVwZGF0ZVdhdGNoZWRDb3VudERvbShwcm9ncmFtRGF0YVN0b3JlLCB1cGRhdGVkR3JvdXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQbGF5ZWRTdGF0ZUxvY2FsbHkocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgaXRlbUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtOiBQcmV2aWV3SXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSkgcmV0dXJuXG5cbiAgICBjb25zdCB3YXNQbGF5ZWQgPSBpdGVtLlVzZXJEYXRhLlBsYXllZFxuICAgIGNvbnN0IGlzUGxheWVkID0gIXdhc1BsYXllZFxuICAgIGNvbnN0IG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcyA9IGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzXG4gICAgY29uc3QgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzID0gaXNQbGF5ZWQgPyAwIDogb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YTogeyAuLi5pdGVtLlVzZXJEYXRhLCBQbGF5ZWQ6IGlzUGxheWVkLCBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcyB9XG4gICAgfSlcbiAgICBhZGp1c3RXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZSwgaXRlbSwgd2FzUGxheWVkLCBpc1BsYXllZCwgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzLCBuZXdQbGF5YmFja1Bvc2l0aW9uVGlja3MpXG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhRmV0Y2hlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIEV2ZW50cy5vbihBcGlDbGllbnQsICdtZXNzYWdlJywgKF9ldmVudCwgbWVzc2FnZTogV2ViU29ja2V0TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuTWVzc2FnZVR5cGUgIT09ICdVc2VyRGF0YUNoYW5nZWQnKSByZXR1cm5cbiAgICAgICAgICAgIGlmIChtZXNzYWdlLkRhdGEuVXNlcklkICE9PSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGFMaXN0OiBVc2VyRGF0YUNoYW5nZWRFbnRyeVtdID0gbWVzc2FnZS5EYXRhLlVzZXJEYXRhTGlzdCA/PyBbXVxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGF0YSBvZiB1c2VyRGF0YUxpc3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtOiBQcmV2aWV3SXRlbSA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZCh1c2VyRGF0YS5JdGVtSWQpXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FzUGxheWVkID0gaXRlbS5Vc2VyRGF0YS5QbGF5ZWRcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3MgPSBpdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrc1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgVXNlckRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0uVXNlckRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZWQ6IHVzZXJEYXRhLlBsYXllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIElzRmF2b3JpdGU6IHVzZXJEYXRhLklzRmF2b3JpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IHVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IHVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBhZGp1c3RXYXRjaGVkQ291bnQodGhpcy5wcm9ncmFtRGF0YVN0b3JlLCBpdGVtLCB3YXNQbGF5ZWQsIHVzZXJEYXRhLlBsYXllZCwgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzLCB1c2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHtMb2dMZXZlbH0gZnJvbSBcIi4uL01vZGVscy9Mb2dMZXZlbFwiO1xuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgICBwcml2YXRlIGxvZ0xldmVsOiBMb2dMZXZlbCA9IExvZ0xldmVsLkluZm9ybWF0aW9uXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ19wcmVmaXg6IHN0cmluZyA9IFwiW0luUGxheWVyRXBpc29kZVByZXZpZXddXCIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9nTGV2ZWwobGV2ZWw6IExvZ0xldmVsKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTGV2ZWwgPSBsZXZlbFxuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPCBMb2dMZXZlbC5EZWJ1ZykgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxvZ0xldmVsIDwgTG9nTGV2ZWwuRXJyb3IpIHJldHVyblxuICAgICAgICBjb25zb2xlLmVycm9yKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxvZ0xldmVsIDwgTG9nTGV2ZWwuSW5mb3JtYXRpb24pIHJldHVyblxuICAgICAgICBjb25zb2xlLmluZm8oYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi4vRW5kcG9pbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5YmFja0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHsgfVxuXG4gICAgYXN5bmMgcGxheShpdGVtSWQ6IHN0cmluZywgc3RhcnRQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQgfCBSZXNwb25zZT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuUExBWV9NRURJQX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dGlja3N9Jywgc3RhcnRQb3NpdGlvblRpY2tzLnRvU3RyaW5nKCkpKVxuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsIH0pXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IHN0YXJ0IHRoZSBwbGF5YmFjayBvZiBhbiBpdGVtYCwgZXgpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtQcm9ncmFtRGF0YX0gZnJvbSBcIi4uL01vZGVscy9Qcm9ncmFtRGF0YVwiO1xuaW1wb3J0IHtHcm91cCwgVU5LTk9XTl9XQVRDSEVEX0NPVU5UfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge0RlZmF1bHRQbHVnaW5TZXR0aW5ncywgUGx1Z2luU2V0dGluZ3N9IGZyb20gXCIuLi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3NcIjtcbmltcG9ydCB7RGVmYXVsdFNlcnZlclNldHRpbmdzLCBTZXJ2ZXJTZXR0aW5nc30gZnJvbSBcIi4uL01vZGVscy9TZXJ2ZXJTZXR0aW5nc1wiO1xuXG5jb25zdCBHUk9VUFNfQ0FDSEVfVFRMID0gNSAqIDYwICogMTAwMFxuXG4vLyBJdGVtIFR5cGUgbWFwcGluZ3MgZm9yIHRoZSBUeXBlcyBzZWxlY3RhYmxlIGluIHRoZSBQbHVnaW4gQ29uZmlndXJhdGlvblxuY29uc3QgUFJFVklFV19UWVBFX0dST1VQUzogUGFydGlhbDxSZWNvcmQ8SXRlbVR5cGUsIEl0ZW1UeXBlW10+PiA9IHtcbiAgICBbSXRlbVR5cGUuU2VyaWVzXTogW0l0ZW1UeXBlLlNlcmllcywgSXRlbVR5cGUuU2Vhc29uLCBJdGVtVHlwZS5FcGlzb2RlXSxcbiAgICBbSXRlbVR5cGUuQm94U2V0XTogW0l0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuUGxheWxpc3RdLFxuICAgIFtJdGVtVHlwZS5WaWRlb106IFtJdGVtVHlwZS5WaWRlbywgSXRlbVR5cGUuRm9sZGVyXVxufVxuXG5leHBvcnQgY2xhc3MgUHJvZ3JhbURhdGFTdG9yZSB7XG4gICAgcHJpdmF0ZSBfcHJvZ3JhbURhdGE6IFByb2dyYW1EYXRhXG4gICAgcHJpdmF0ZSBfdmlld1Rva2VuOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBfZ3JvdXBzQ2FjaGVkQXQ6IG51bWJlciB8IG51bGwgPSBudWxsXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEgPSB7XG4gICAgICAgICAgICBhY3RpdmVNZWRpYVNvdXJjZUlkOiAnJyxcbiAgICAgICAgICAgIGFjdGl2ZUdyb3VwSWQ6ICcnLFxuICAgICAgICAgICAgYm94U2V0TmFtZTogJycsXG4gICAgICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgcGx1Z2luU2V0dGluZ3M6IERlZmF1bHRQbHVnaW5TZXR0aW5ncyxcbiAgICAgICAgICAgIHNlcnZlclNldHRpbmdzOiBEZWZhdWx0U2VydmVyU2V0dGluZ3NcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlTWVkaWFTb3VyY2VJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYWN0aXZlTWVkaWFTb3VyY2VJZChhY3RpdmVNZWRpYVNvdXJjZUlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlTWVkaWFTb3VyY2VJZCA9IGFjdGl2ZU1lZGlhU291cmNlSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZUdyb3VwSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZUdyb3VwSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZUdyb3VwSWQoYWN0aXZlR3JvdXBJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZUdyb3VwSWQgPSBhY3RpdmVHcm91cElkXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVHcm91cCgpOiBHcm91cCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwcy5maW5kKGdyb3VwID0+IGdyb3VwLmdyb3VwSWQgPT09IHRoaXMuYWN0aXZlR3JvdXBJZClcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogSXRlbVR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEudHlwZVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdHlwZSh0eXBlOiBJdGVtVHlwZSkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS50eXBlID0gdHlwZVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm94U2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYm94U2V0TmFtZVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYm94U2V0TmFtZShib3hTZXROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYm94U2V0TmFtZSA9IGJveFNldE5hbWVcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdyb3VwcygpOiBHcm91cFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3Vwc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZ3JvdXBzKGdyb3VwczogR3JvdXBbXSkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMgPSBncm91cHNcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBsdWdpblNldHRpbmdzKCk6IFBsdWdpblNldHRpbmdzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLnBsdWdpblNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbHVnaW5TZXR0aW5ncyhzZXR0aW5nczogUGx1Z2luU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEucGx1Z2luU2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VydmVyU2V0dGluZ3MoKTogU2VydmVyU2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuc2VydmVyU2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlcnZlclNldHRpbmdzKHNldHRpbmdzOiBTZXJ2ZXJTZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5zZXJ2ZXJTZXR0aW5ncyA9IHNldHRpbmdzXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBtYXJrR3JvdXBzRmV0Y2hlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPSBEYXRlLm5vdygpXG4gICAgfVxuXG4gICAgcHVibGljIGludmFsaWRhdGVHcm91cHNDYWNoZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPSBudWxsXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0dyb3Vwc0NhY2hlRXhwaXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID09PSBudWxsIHx8IERhdGUubm93KCkgLSB0aGlzLl9ncm91cHNDYWNoZWRBdCA+IEdST1VQU19DQUNIRV9UVExcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNUeXBlQWxsb3dlZEZvclByZXZpZXcodHlwZTogSXRlbVR5cGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZFByZXZpZXdUeXBlcy5zb21lKGNvbmZpZ3VyZWRUeXBlID0+IChQUkVWSUVXX1RZUEVfR1JPVVBTW2NvbmZpZ3VyZWRUeXBlXSA/PyBbY29uZmlndXJlZFR5cGVdKS5pbmNsdWRlcyh0eXBlKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFsbG93ZWRQcmV2aWV3VHlwZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpblNldHRpbmdzLkVuYWJsZWRJdGVtVHlwZXNcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXRlbUJ5SWQoaXRlbUlkOiBzdHJpbmcpOiBQcmV2aWV3SXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwc1xuICAgICAgICAgICAgLmZsYXRNYXAoZ3JvdXAgPT4gZ3JvdXAuaXRlbXMpXG4gICAgICAgICAgICAuZmluZChpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZClcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHJlY29yZExvYWRlZEl0ZW1zKGdyb3VwSWQ6IHN0cmluZywgaXRlbXM6IFByZXZpZXdJdGVtW10sIHN0YXJ0SW5kZXg6IG51bWJlciwgdG90YWxSZWNvcmRDb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3VwcyA9IHRoaXMuX3Byb2dyYW1EYXRhLmdyb3Vwcy5tYXAoZ3JvdXAgPT4ge1xuICAgICAgICAgICAgaWYgKGdyb3VwLmdyb3VwSWQgIT09IGdyb3VwSWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwXG5cbiAgICAgICAgICAgIGlmIChncm91cC5sb2FkZWRTdGFydEluZGV4ID09PSB1bmRlZmluZWQgfHwgZ3JvdXAubG9hZGVkRW5kSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBpdGVtcywgbG9hZGVkU3RhcnRJbmRleDogc3RhcnRJbmRleCwgbG9hZGVkRW5kSW5kZXg6IHN0YXJ0SW5kZXggKyBpdGVtcy5sZW5ndGgsIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ6IHRvdGFsUmVjb3JkQ291bnQgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA+PSBncm91cC5sb2FkZWRFbmRJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBpdGVtczogWy4uLmdyb3VwLml0ZW1zLCAuLi5pdGVtc10sIGxvYWRlZEVuZEluZGV4OiBzdGFydEluZGV4ICsgaXRlbXMubGVuZ3RoLCBsb2FkZWRUb3RhbFJlY29yZENvdW50OiB0b3RhbFJlY29yZENvdW50IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPCBncm91cC5sb2FkZWRTdGFydEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIGl0ZW1zOiBbLi4uaXRlbXMsIC4uLmdyb3VwLml0ZW1zXSwgbG9hZGVkU3RhcnRJbmRleDogc3RhcnRJbmRleCwgbG9hZGVkVG90YWxSZWNvcmRDb3VudDogdG90YWxSZWNvcmRDb3VudCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBncm91cFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0R3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBJZDogc3RyaW5nLCBwbGF5ZWRJdGVtQ291bnQ6IG51bWJlciwgdG90YWxJdGVtQ291bnQ6IG51bWJlciwgcGxheWVkUnVudGltZVRpY2tzOiBudW1iZXIsIHRvdGFsUnVudGltZVRpY2tzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLmdyb3Vwcy5tYXAoZyA9PiBnLmdyb3VwSWQgPT09IGdyb3VwSWQgPyB7IC4uLmcsIHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQsIHBsYXllZFJ1bnRpbWVUaWNrcywgdG90YWxSdW50aW1lVGlja3MgfSA6IGcpXG4gICAgfVxuXG4gICAgcHVibGljIGFkanVzdEdyb3VwV2F0Y2hTdGF0cyhpdGVtSWQ6IHN0cmluZywgZGVsdGFQbGF5ZWRDb3VudDogbnVtYmVyLCBkZWx0YVBsYXllZFJ1bnRpbWVUaWNrczogbnVtYmVyKTogR3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuZ3JvdXBzLmZpbmQoZyA9PiBnLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpKVxuICAgICAgICBpZiAoIWdyb3VwKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgICAgY29uc3QgdXBkYXRlZEdyb3VwOiBHcm91cCA9IHtcbiAgICAgICAgICAgIC4uLmdyb3VwLFxuICAgICAgICAgICAgcGxheWVkSXRlbUNvdW50OiBncm91cC5wbGF5ZWRJdGVtQ291bnQgKyBkZWx0YVBsYXllZENvdW50LFxuICAgICAgICAgICAgcGxheWVkUnVudGltZVRpY2tzOiBncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCA/IFVOS05PV05fV0FUQ0hFRF9DT1VOVCA6IGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyArIGRlbHRhUGxheWVkUnVudGltZVRpY2tzXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLmdyb3Vwcy5tYXAoZyA9PiBnLmdyb3VwSWQgPT09IGdyb3VwLmdyb3VwSWQgPyB1cGRhdGVkR3JvdXAgOiBnKVxuICAgICAgICByZXR1cm4gdXBkYXRlZEdyb3VwXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUl0ZW0oaXRlbVRvVXBkYXRlOiBQcmV2aWV3SXRlbSk6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuZ3JvdXBzLm1hcChncm91cCA9PlxuICAgICAgICAgICAgZ3JvdXAuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1Ub1VwZGF0ZS5JZClcbiAgICAgICAgICAgICAgICA/IHsgLi4uZ3JvdXAsIGl0ZW1zOiBncm91cC5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtVG9VcGRhdGUuSWQgPyBpdGVtVG9VcGRhdGUgOiBpdGVtKSB9XG4gICAgICAgICAgICAgICAgOiBncm91cFxuICAgICAgICApXG4gICAgfVxuXG4gICAgLy8gQ2FsbGVkIHdoZW5ldmVyIHRoZSBwb3B1cCBzd2l0Y2hlcyB3aGF0IGl0J3MgZGlzcGxheWluZyAob3BlbmluZywgc2VsZWN0aW5nIGEgZ3JvdXAsIGdvaW5nIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpXG4gICAgcHVibGljIGJlZ2luTmV3VmlldygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKyt0aGlzLl92aWV3VG9rZW5cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNDdXJyZW50Vmlldyh0b2tlbjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0b2tlbiA9PT0gdGhpcy5fdmlld1Rva2VuXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgY3VycmVudFZpZXdUb2tlbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlld1Rva2VuXG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vU2VydmljZXMvTG9nZ2VyXCI7XG5pbXBvcnQge1ByZXZpZXdCdXR0b25UZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtEaWFsb2dDb250YWluZXJUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtMaXN0RWxlbWVudEZhY3Rvcnl9IGZyb20gXCIuL0xpc3RFbGVtZW50RmFjdG9yeVwiO1xuaW1wb3J0IHtQb3B1cFRpdGxlVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlXCI7XG5pbXBvcnQge0RhdGFGZXRjaGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge1BsdWdpblNldHRpbmdzfSBmcm9tIFwiLi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3NcIjtcbmltcG9ydCB7U2VydmVyU2V0dGluZ3N9IGZyb20gXCIuL01vZGVscy9TZXJ2ZXJTZXR0aW5nc1wiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuL0VuZHBvaW50c1wiO1xuaW1wb3J0IHtHcm91cCwgVU5LTk9XTl9XQVRDSEVEX0NPVU5UfSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7R3JvdXBJdGVtc1Jlc3VsdH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwSXRlbXNSZXN1bHRcIjtcbmltcG9ydCB7YWN0aXZhdGVTcGlubmVyLCBzcGlubmVySHRtbH0gZnJvbSBcIi4vQ29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQge3NldEl0ZW1PdmVybGF5QWN0aXZlfSBmcm9tIFwiLi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7dXBkYXRlRW5kVGltZURpc3BsYXl9IGZyb20gXCIuL0NvbXBvbmVudHMvSXRlbURldGFpbHNcIjtcblxuLy8gbG9hZCBhbmQgaW5qZWN0IGluUGxheWVyUHJldmlldy5jc3MgaW50byB0aGUgcGFnZVxuLypcbiAqIEluamVjdCBzdHlsZSB0byBiZSB1c2VkIGZvciB0aGUgcHJldmlldyBwb3B1cFxuICovXG5sZXQgaW5QbGF5ZXJQcmV2aWV3U3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG5pblBsYXllclByZXZpZXdTdHlsZS5pZCA9ICdpblBsYXllclByZXZpZXdTdHlsZSdcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ID0gYFxuLnNlbGVjdGVkTGlzdEl0ZW0ge1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5wcmV2aWV3TGlzdEl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBtaW4taGVpZ2h0OiAxNS41dmg7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcmV2aWV3UG9wdXAge1xuICAgIGFuaW1hdGlvbjogMTQwbXMgZWFzZS1vdXQgMHMgMSBub3JtYWwgYm90aCBydW5uaW5nIHNjYWxldXA7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgbWFyZ2luOiAwcHg7IFxuICAgIGJvdHRvbTogMS41dmg7IFxuICAgIGxlZnQ6IDUwdnc7IFxuICAgIHdpZHRoOiA0OHZ3O1xufVxuLnByZXZpZXdQb3B1cFRpdGxlIHtcbiAgICBtYXgtaGVpZ2h0OiA0dmg7XG59XG4ucHJldmlld1BvcHVwVGl0bGUgaDEuYWN0aW9uU2hlZXRUaXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlciB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbn1cbi5wcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcbn1cbi5wcmV2aWV3SXRlbUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJldmlld0l0ZW1UaXRsZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucHJldmlld0l0ZW1JbWFnZUNhcmQge1xuICAgIG1heC13aWR0aDogMzAlO1xufVxuLnByZXZpZXdJdGVtQ29udGVudFJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbkNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xufVxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbi5leHBhbmRlZCB7XG4gICAgbWF4LWhlaWdodDogbm9uZTtcbn1cbi5wcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBvcGFjaXR5OiAwLjc1O1xufVxuLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG4ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLyogTG9jayB0aGUgcG9zaXRpb24gb2YgdGhpcyBkZXRhaWxzLCBzbyB0aGF0IG5vIHRoZW1lIGNhbiBjaGFuZ2UgaXQgKi9cbi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IC5pdGVtTWlzY0luZm8ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMWVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cig2cHgpO1xuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJsdXI6aG92ZXIge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbn1cbi5wcmV2aWV3SXRlbUltYWdlQ2FyZDpob3ZlciAuYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xufVxuLnByZXZpZXdTY3JvbGxTcGlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMWVtIDA7XG59XG4ucHJldmlld1Njcm9sbFNwaW5uZXIgLmRvY3NwaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMS45NWVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxLjk1ZW0gIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5gXG5kb2N1bWVudD8uaGVhZD8uYXBwZW5kQ2hpbGQoaW5QbGF5ZXJQcmV2aWV3U3R5bGUpXG5cbi8vIGluaXQgc2VydmljZXMgYW5kIGhlbHBlcnNcbmNvbnN0IGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcigpXG5jb25zdCBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlID0gbmV3IFByb2dyYW1EYXRhU3RvcmUoKVxuY29uc3QgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIgPSBuZXcgUGxheWJhY2tIYW5kbGVyKGxvZ2dlcilcbmNvbnN0IGxpc3RFbGVtZW50RmFjdG9yeSA9IG5ldyBMaXN0RWxlbWVudEZhY3RvcnkocGxheWJhY2tIYW5kbGVyLCBwcm9ncmFtRGF0YVN0b3JlLCBsb2dnZXIpXG5cbmNvbnN0IGNvbGxlY3Rpb25zQnlJdGVtSWQgPSBuZXcgTWFwPHN0cmluZywgUHJvbWlzZTxHcm91cFtdPj4oKVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8R3JvdXBbXT4ge1xuICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLkNPTlRBSU5JTkdfQ09MTEVDVElPTlN9YFxuICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpKVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJhdzogYW55W10gPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgcmV0dXJuIHJhdy5tYXAoKGc6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGdyb3VwSWQ6IGcuR3JvdXBJZCxcbiAgICAgICAgICAgIGdyb3VwTmFtZTogZy5Hcm91cE5hbWUsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICBpbmRleE51bWJlcjogZy5JbmRleE51bWJlcixcbiAgICAgICAgICAgIHBsYXllZEl0ZW1Db3VudDogZy5QbGF5ZWRJdGVtQ291bnQsXG4gICAgICAgICAgICB0b3RhbEl0ZW1Db3VudDogZy5Ub3RhbEl0ZW1Db3VudCxcbiAgICAgICAgICAgIHBsYXllZFJ1bnRpbWVUaWNrczogZy5QbGF5ZWRSdW50aW1lVGlja3MsXG4gICAgICAgICAgICB0b3RhbFJ1bnRpbWVUaWNrczogZy5Ub3RhbFJ1bnRpbWVUaWNrc1xuICAgICAgICB9KSlcbiAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBsb2FkIENvbGxlY3Rpb25zL1BsYXlsaXN0cyBjb250YWluaW5nIHRoaXMgbW92aWVcIiwgZXgpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0NvbGxlY3Rpb25zKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTxHcm91cFtdPiB7XG4gICAgbGV0IHByb21pc2UgPSBjb2xsZWN0aW9uc0J5SXRlbUlkLmdldChpdGVtSWQpXG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UgPSBmZXRjaENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQpXG4gICAgICAgIGNvbGxlY3Rpb25zQnlJdGVtSWQuc2V0KGl0ZW1JZCwgcHJvbWlzZSlcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBFbnN1cmUgQXBpQ2xpZW50L0V2ZW50cyBleGlzdCBhbmQgdXNlciBpcyBsb2dnZWQgaW5cbiAgICBpZiAodHlwZW9mIEFwaUNsaWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIEV2ZW50cyA9PT0gJ3VuZGVmaW5lZCcgfHwgIUFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkPy4oKSkge1xuICAgICAgICBzZXRUaW1lb3V0KGluaXRpYWxpemUsIDMwMClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbmV3IERhdGFGZXRjaGVyKHByb2dyYW1EYXRhU3RvcmUpXG5cbiAgICBjb25zdCBwbHVnaW5TZXR0aW5nc1VybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLlBMVUdJTl9TRVRUSU5HU31gKVxuICAgIEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybDogcGx1Z2luU2V0dGluZ3NVcmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgLnRoZW4oKGNvbmZpZzogUGx1Z2luU2V0dGluZ3MpID0+IHtcbiAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MgPSBjb25maWdcbiAgICAgICAgICAgIGxvZ2dlci5zZXRMb2dMZXZlbChjb25maWcuTG9nTGV2ZWwpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXg6IHVua25vd24pID0+IGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IGxvYWQgcGx1Z2luIHNldHRpbmdzLCBmYWxsaW5nIGJhY2sgdG8gZGVmYXVsdHNcIiwgZXgpKVxuXG4gICAgY29uc3Qgc2VydmVyU2V0dGluZ3NVcmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5TRVJWRVJfU0VUVElOR1N9YClcbiAgICBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmw6IHNlcnZlclNldHRpbmdzVXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIC50aGVuKChjb25maWc6IFNlcnZlclNldHRpbmdzKSA9PiBwcm9ncmFtRGF0YVN0b3JlLnNlcnZlclNldHRpbmdzID0gY29uZmlnKVxuICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBsb2FkIHNlcnZlciBzZXR0aW5ncywgZmFsbGluZyBiYWNrIHRvIGRlZmF1bHRzXCIsIGV4KSlcblxuICAgIGxvZ2dlci5pbmZvKFwiSW5QbGF5ZXJFcGlzb2RlUHJldmlldyBpbml0aWFsaXplZFwiKVxufVxuaW5pdGlhbGl6ZSgpXG5cbmNvbnN0IFNFQVJDSF9DT0xMRUNUSU9OU19HUk9VUF9OQU1FID0gJ1NlYXJjaCBDb2xsZWN0aW9ucy9QbGF5bGlzdHMnXG5cbmNvbnN0IHZpZGVvUGF0aHM6IHN0cmluZ1tdID0gWycvdmlkZW8nXVxubGV0IHByZXZpb3VzUm91dGVQYXRoOiBzdHJpbmcgPSBudWxsXG5sZXQgcHJldmlld0NvbnRhaW5lckxvYWRlZDogYm9vbGVhbiA9IGZhbHNlXG5cbmxldCBwZW5kaW5nUHJlbG9hZEl0ZW1JZDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbmxldCBwZW5kaW5nUHJlbG9hZDogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsXG5sZXQgcHJlbG9hZE9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGxcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlld3Nob3cnLCB2aWV3U2hvd0V2ZW50SGFuZGxlcilcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHZpZXdTaG93RXZlbnRIYW5kbGVyKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKSlcblxuLy8gU29tZXRpbWVzIHRoZWlyIGNhbiBiZSBzdGFsZSByYXRpbmcgYnV0dG9ucy4gdGhhdHMgd2h5IHdlIHRha2UgdGhlIGxhc3Qgb25lIGZyb20gdGhlIERPTSBmb3IgdGhlIGl0ZW1JZFxuZnVuY3Rpb24gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5Vc2VyUmF0aW5nLmF1dG9TaXplLnBhcGVyLWljb24tYnV0dG9uLWxpZ2h0JylcbiAgICByZXR1cm4gZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0/LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID8/IG51bGxcbn1cblxubGV0IGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQ6IG51bWJlciA9IC0xXG5mdW5jdGlvbiBvblZpZGVvVGltZVVwZGF0ZSh0aGlzOiBIVE1MVmlkZW9FbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgcG9zaXRpb25TZWNvbmQgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudFRpbWUpXG4gICAgaWYgKHBvc2l0aW9uU2Vjb25kID09PSBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kKSByZXR1cm5cbiAgICBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kID0gcG9zaXRpb25TZWNvbmRcblxuICAgIGNvbnN0IGl0ZW1JZCA9IGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKVxuICAgIGlmICghaXRlbUlkKSByZXR1cm5cblxuICAgIGlmIChpdGVtSWQgIT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCkge1xuICAgICAgICBjb25zdCBwcmV2aW91c0l0ZW1JZCA9IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBpdGVtSWRcbiAgICAgICAgc2V0SXRlbU92ZXJsYXlBY3RpdmUocHJldmlvdXNJdGVtSWQsIGZhbHNlKVxuICAgICAgICBzZXRJdGVtT3ZlcmxheUFjdGl2ZShpdGVtSWQsIHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSB8fCAhaXRlbS5SdW5UaW1lVGlja3MpIHJldHVyblxuXG4gICAgY29uc3QgcG9zaXRpb25UaWNrcyA9IHRoaXMuY3VycmVudFRpbWUgKiAxMF8wMDBfMDAwXG4gICAgY29uc3QgcGxheWVkUGVyY2VudGFnZSA9IChwb3NpdGlvblRpY2tzIC8gaXRlbS5SdW5UaW1lVGlja3MpICogMTAwXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YToge1xuICAgICAgICAgICAgLi4uaXRlbS5Vc2VyRGF0YSxcbiAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogcG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IHBsYXllZFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICBQbGF5ZWQ6IHBsYXllZFBlcmNlbnRhZ2UgPj0gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncy5NYXhSZXN1bWVQY3RcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG9uVmlkZW9SYXRlQ2hhbmdlKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuZW5kc0F0W2RhdGEtaXRlbS1pZF0nKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gcHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZChlbGVtZW50LmRhdGFzZXQuaXRlbUlkKVxuICAgICAgICBpZiAoaXRlbSkgdXBkYXRlRW5kVGltZURpc3BsYXkoaXRlbSlcbiAgICB9KVxufVxuXG4vLyBUcmFja3Mgd2hpY2ggQm94U2V0L1BsYXlsaXN0IGRldGFpbHMgcGFnZSAoaWYgYW55KSB3YXMgdmlzaXRlZCBpbW1lZGlhdGVseSBiZWZvcmUgbmF2aWdhdGluZyBpbnRvIHBsYXliYWNrXG5jb25zdCBERVRBSUxTX1JPVVRFX1BBVEg6IHN0cmluZyA9ICcvZGV0YWlscydcbmNvbnN0IERBU0hCT0FSRF9ST1VURV9QQVRIOiBzdHJpbmcgPSAnL2hvbWUnXG5jb25zdCBjb2xsZWN0aW9uTGlrZUl0ZW1UeXBlczogU2V0PEl0ZW1UeXBlPiA9IG5ldyBTZXQoW0l0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuUGxheWxpc3RdKVxubGV0IHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQ6IHN0cmluZyA9IG51bGxcbmNvbnN0IEVNUFRZX0dVSUQgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJ1xuXG5mdW5jdGlvbiByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNvbGxlY3Rpb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgcHJvZ3JhbURhdGFTdG9yZS5pbnZhbGlkYXRlR3JvdXBzQ2FjaGUoKVxuXG4gICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuU0VUX1NPVVJDRV9DT0xMRUNUSU9OfWBcbiAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tkZXZpY2VJZH0nLCBBcGlDbGllbnQuZGV2aWNlSWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tjb2xsZWN0aW9uSWR9JywgY29sbGVjdGlvbklkKSlcbiAgICBBcGlDbGllbnQuYWpheCh7dHlwZTogJ0dFVCcsIHVybH0pLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcmVjb3JkIHNvdXJjZSBjb2xsZWN0aW9uIGZvciBwbGF5YmFjayBzZXNzaW9uXCIsIGV4KSlcbn1cblxuZnVuY3Rpb24gY2xlYXJTb3VyY2VDb2xsZWN0aW9uKCk6IHZvaWQge1xuICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oRU1QVFlfR1VJRClcbn1cblxuZnVuY3Rpb24gY2FwdHVyZVNvdXJjZUNvbGxlY3Rpb24oY3VycmVudFJvdXRlUGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgW2N1cnJlbnRQYXRoLCBjdXJyZW50UXVlcnldID0gY3VycmVudFJvdXRlUGF0aC5zcGxpdCgnPycpXG4gICAgY29uc3QgcHJldmlvdXNQYXRoID0gcHJldmlvdXNSb3V0ZVBhdGg/LnNwbGl0KCc/JylbMF1cblxuICAgIGlmIChjdXJyZW50UGF0aCA9PT0gREFTSEJPQVJEX1JPVVRFX1BBVEgpIHtcbiAgICAgICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IG51bGxcbiAgICAgICAgY2xlYXJTb3VyY2VDb2xsZWN0aW9uKClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQYXRoID09PSBERVRBSUxTX1JPVVRFX1BBVEgpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0lkID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50UXVlcnkgPz8gJycpLmdldCgnaWQnKVxuICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxuICAgICAgICBpZiAoIWRldGFpbHNJZCkgcmV0dXJuXG5cbiAgICAgICAgQXBpQ2xpZW50LmdldEl0ZW0oQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSwgZGV0YWlsc0lkKS50aGVuKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVHlwZTogSXRlbVR5cGUgPSBJdGVtVHlwZVtpdGVtLlR5cGUgYXMgdW5rbm93biBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gY29sbGVjdGlvbkxpa2VJdGVtVHlwZXMuaGFzKGl0ZW1UeXBlKSA/IGRldGFpbHNJZCA6IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMoY3VycmVudFBhdGgpICYmIHByZXZpb3VzUGF0aCA9PT0gREVUQUlMU19ST1VURV9QQVRIKSB7XG4gICAgICAgIGlmIChwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkKVxuICAgICAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjbGVhclNvdXJjZUNvbGxlY3Rpb24oKVxuICAgIH1cblxuICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBudWxsXG59XG5cbi8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGNvbGxvZWN0aW9uL3BsYXlsaXN0IGlkIHRocm91Z2ggYSBwbGF5IGFjdGlvbiBvbiBhIGNhcmQgdGhlIHNhbWUgd2F5IGFzIGhlbGx5ZmluIGRvZXMgaXQgaXRzZWxmXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamVsbHlmaW4vamVsbHlmaW4td2ViL2Jsb2IvcmVsZWFzZS0xMC4xMS56L3NyYy9jb21wb25lbnRzL3Nob3J0Y3V0cy5qcyNMMjE2XG5jb25zdCBQTEFZQkFDS19UUklHR0VSX0FDVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbJ3BsYXknLCAncmVzdW1lJywgJ3BsYXlhbGxmcm9taGVyZSddKVxuZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrQ2FwdHVyZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGlvbkVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8uY2xvc2VzdD8uKCdbZGF0YS1hY3Rpb25dJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKCFhY3Rpb25FbGVtZW50IHx8ICFQTEFZQkFDS19UUklHR0VSX0FDVElPTlMuaGFzKGFjdGlvbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpKSkgcmV0dXJuXG5cbiAgICBjb25zdCBjYXJkID0gYWN0aW9uRWxlbWVudC5jbG9zZXN0KCdbZGF0YS1pZF0nKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcbiAgICBpZiAoIWNhcmQpIHJldHVyblxuXG4gICAgY29uc3QgY2hpbGRPZkNvbGxlY3Rpb25JZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxlY3Rpb25pZCcpID8/IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXBsYXlsaXN0aWQnKVxuICAgIGlmIChjaGlsZE9mQ29sbGVjdGlvbklkKSB7XG4gICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY2hpbGRPZkNvbGxlY3Rpb25JZClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY2FyZEl0ZW1UeXBlOiBJdGVtVHlwZSA9IEl0ZW1UeXBlW2NhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSBhcyB1bmtub3duIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICBjb25zdCBjYXJkSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgaWYgKGNhcmRJZCAmJiBjb2xsZWN0aW9uTGlrZUl0ZW1UeXBlcy5oYXMoY2FyZEl0ZW1UeXBlKSkge1xuICAgICAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNhcmRJZClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIGNsZWFyU291cmNlQ29sbGVjdGlvbigpXG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRG9jdW1lbnRDbGlja0NhcHR1cmUsIHRydWUpXG5cbmZ1bmN0aW9uIHZpZXdTaG93RXZlbnRIYW5kbGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZVBhdGg6IHN0cmluZyA9IGdldExvY2F0aW9uUGF0aCgpXG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhdGlvblBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb246IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZUluZGV4OiBudW1iZXIgPSBsb2NhdGlvbi5sYXN0SW5kZXhPZignLycpXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5zdWJzdHJpbmcoY3VycmVudFJvdXRlSW5kZXgpXG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbCBhdHRlbXB0IHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcgb3Igc2NoZWR1bGUgcmV0cmllcy5cbiAgICBjYXB0dXJlU291cmNlQ29sbGVjdGlvbihjdXJyZW50Um91dGVQYXRoKVxuICAgIGF0dGVtcHRMb2FkVmlkZW9WaWV3KClcbiAgICBwcmV2aW91c1JvdXRlUGF0aCA9IGN1cnJlbnRSb3V0ZVBhdGhcbiAgICBcbiAgICBmdW5jdGlvbiBhdHRlbXB0TG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMoY3VycmVudFJvdXRlUGF0aCkpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcmV2aWV3IGNvbnRhaW5lciBpcyBhbHJlYWR5IGxvYWRlZCBiZWZvcmUgbG9hZGluZ1xuICAgICAgICAgICAgaWYgKCFwcmV2aWV3Q29udGFpbmVyTG9hZGVkICYmICFpc1ByZXZpZXdCdXR0b25DcmVhdGVkKCkpIHtcbiAgICAgICAgICAgICAgICBsb2FkVmlkZW9WaWV3KClcbiAgICAgICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gdHJ1ZSAvLyBTZXQgZmxhZyB0byB0cnVlIGFmdGVyIGxvYWRpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKHByZXZpb3VzUm91dGVQYXRoKSkge1xuICAgICAgICAgICAgdW5sb2FkVmlkZW9WaWV3KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBsb2FkVmlkZW9WaWV3KCk6IHZvaWQge1xuICAgICAgICBsb2dnZXIuZGVidWcoXCJMb2FkaW5nIHZpZGVvIHZpZXdcIilcblxuICAgICAgICAvLyBhZGQgcHJldmlldyBidXR0b24gdG8gdGhlIHBhZ2VcbiAgICAgICAgY29uc3QgcGFyZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJykubGFzdEVsZW1lbnRDaGlsZC5wYXJlbnRFbGVtZW50OyAvLyBsYXN0RWxlbWVudENoaWxkLnBhcmVudEVsZW1lbnQgaXMgdXNlZCBmb3IgY2FzdGluZyBmcm9tIEVsZW1lbnQgdG8gSFRNTEVsZW1lbnRcbiAgICAgICAgXG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmRJbmRleCgoY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImJ0blVzZXJSYXRpbmdcIikpO1xuICAgICAgICAvLyBpZiBpbmRleCBpcyBpbnZhbGlkIHRyeSB0byB1c2UgdGhlIG9sZCBwb3NpdGlvbiAodXNlZCBpbiBKZWxseWZpbiAxMC44LjEyKVxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKVxuICAgICAgICAgICAgaW5kZXggPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikuZmluZEluZGV4KChjaGlsZDogRWxlbWVudCk6IGJvb2xlYW4gPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3NkVGltZVRleHRcIikpXG5cbiAgICAgICAgbGV0IHByZXZpZXdCdXR0b246IFByZXZpZXdCdXR0b25UZW1wbGF0ZSB8IG51bGwgPSBudWxsXG4gICAgICAgIGxldCBwcmV2aWV3QnV0dG9uTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICAgICAgLy8gT25seSBhY3R1YWxseSBpbnNlcnRlZCBpbnRvIHRoZSBPU0Qgb25jZSB0aGUgaXRlbSdzIHR5cGUgaXMgY29uZmlybWVkIGVuYWJsZWQgLSBzZWUgcHJlbG9hZFByZXZpZXdEYXRhLlxuICAgICAgICBmdW5jdGlvbiBpbnNlcnRQcmV2aWV3QnV0dG9uKCk6IHZvaWQge1xuICAgICAgICAgICAgaWYgKHByZXZpZXdCdXR0b24pIHJldHVyblxuICAgICAgICAgICAgcHJldmlld0J1dHRvbiA9IG5ldyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUocGFyZW50LCBpbmRleClcbiAgICAgICAgICAgIHByZXZpZXdCdXR0b24ucmVuZGVyKHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIpXG4gICAgICAgICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxWaWRlb0VsZW1lbnQ+KCd2aWRlby5odG1sdmlkZW9wbGF5ZXInKVxuICAgICAgICAgICAgdmlkZW9FbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgb25WaWRlb1RpbWVVcGRhdGUpXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3JhdGVjaGFuZ2UnLCBvblZpZGVvUmF0ZUNoYW5nZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZldGNoUHJldmlld0l0ZW1UeXBlID0gYXN5bmMgKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTxJdGVtVHlwZT4gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuSVRFTV9QUkVWSUVXX1RZUEV9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHVzZXJJZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW1JZCkpXG4gICAgICAgICAgICBjb25zdCByYXdUeXBlOiBzdHJpbmcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgIHJldHVybiBJdGVtVHlwZVtyYXdUeXBlIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRJdGVtUHJldmlld0RhdGEgPSBhc3luYyAoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPHtcbiAgICAgICAgICAgIGl0ZW1UeXBlOiBzdHJpbmcsIGNvbnRhaW5lck5hbWU6IHN0cmluZyB8IG51bGwsIGdyb3VwczogR3JvdXBbXSwgYWN0aXZlR3JvdXBJZDogc3RyaW5nLCBhY3RpdmVJdGVtSW5kZXg6IG51bWJlclxuICAgICAgICB9PiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX1BSRVZJRVdfREFUQX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9JywgQXBpQ2xpZW50LmRldmljZUlkKCkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpdGVtVHlwZTogcmF3Lkl0ZW1UeXBlLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck5hbWU6IHJhdy5Db250YWluZXJOYW1lLFxuICAgICAgICAgICAgICAgIGdyb3VwczogcmF3Lkdyb3Vwcy5tYXAoKGc6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogZy5Hcm91cElkLFxuICAgICAgICAgICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgIGluZGV4TnVtYmVyOiBnLkluZGV4TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1Db3VudDogZy5Ub3RhbEl0ZW1Db3VudCxcbiAgICAgICAgICAgICAgICAgICAgcGxheWVkUnVudGltZVRpY2tzOiBnLlBsYXllZFJ1bnRpbWVUaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IGcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogcmF3LkFjdGl2ZUdyb3VwSWQsXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbUluZGV4OiByYXcuQWN0aXZlSXRlbUluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkR3JvdXBJdGVtcyA9IGFzeW5jIChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciA9IDAsIGxpbWl0OiBudW1iZXIgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZSk6IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfSVRFTVN9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHVzZXJJZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2dyb3VwSWR9JywgZ3JvdXBJZCksXG4gICAgICAgICAgICAgICAgeyBzdGFydEluZGV4LCBsaW1pdCB9KVxuICAgICAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IEdyb3VwSXRlbXNSZXN1bHQgPSB7IGl0ZW1zOiByYXcuSXRlbXMsIHRvdGFsUmVjb3JkQ291bnQ6IHJhdy5Ub3RhbFJlY29yZENvdW50IH1cblxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5yZWNvcmRMb2FkZWRJdGVtcyhncm91cElkLCByZXN1bHQuaXRlbXMsIHN0YXJ0SW5kZXgsIHJlc3VsdC50b3RhbFJlY29yZENvdW50KVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBwcmVsb2FkUHJldmlld0RhdGEoaXRlbUlkOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1JZCkgcmV0dXJuXG4gICAgICAgICAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWQgJiYgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuc29tZShnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gQWxyZWFkeSBmZXRjaGVkIChhbmQgdGhlcmVmb3JlIGFscmVhZHkga25vd24tYWxsb3dlZCkgZWFybGllciB0aGlzIHNlc3Npb24gLSBqdXN0IHNob3cgdGhlIGJ1dHRvbi5cbiAgICAgICAgICAgICAgICBpbnNlcnRQcmV2aWV3QnV0dG9uKClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkKSByZXR1cm5cblxuICAgICAgICAgICAgcGVuZGluZ1ByZWxvYWRJdGVtSWQgPSBpdGVtSWRcbiAgICAgICAgICAgIHBlbmRpbmdQcmVsb2FkID0gKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aWV3VHlwZSA9IGF3YWl0IGZldGNoUHJldmlld0l0ZW1UeXBlKGl0ZW1JZClcbiAgICAgICAgICAgICAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUuaXNUeXBlQWxsb3dlZEZvclByZXZpZXcocHJldmlld1R5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJldmlldyBub3QgZW5hYmxlZCBmb3IgaXRlbSB0eXBlICcke3ByZXZpZXdUeXBlfScsIHNraXBwaW5nIGJ1dHRvbiBmb3IgaXRlbSAke2l0ZW1JZH1gKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnNlcnRQcmV2aWV3QnV0dG9uKClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbVR5cGUsIGNvbnRhaW5lck5hbWUsIGdyb3VwcywgYWN0aXZlR3JvdXBJZCwgYWN0aXZlSXRlbUluZGV4IH0gPSBhd2FpdCBsb2FkSXRlbVByZXZpZXdEYXRhKGl0ZW1JZClcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IGdyb3Vwc1xuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUubWFya0dyb3Vwc0ZldGNoZWQoKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUudHlwZSA9IEl0ZW1UeXBlW2l0ZW1UeXBlIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmJveFNldE5hbWUgPSBjb250YWluZXJOYW1lID8/ICcnXG5cbiAgICAgICAgICAgICAgICBjb25zdCBQQUdFX1NJWkUgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VPZkFjdGl2ZUVwaXNvZGUgPSBNYXRoLmZsb29yKGFjdGl2ZUl0ZW1JbmRleCAvIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93U3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIChwYWdlT2ZBY3RpdmVFcGlzb2RlIC0gMSkgKiBQQUdFX1NJWkUpXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFdpbmRvd0xpbWl0ID0gKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgKyAyKSAqIFBBR0VfU0laRSAtIGluaXRpYWxXaW5kb3dTdGFydEluZGV4XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBpbml0aWFsV2luZG93U3RhcnRJbmRleCwgaW5pdGlhbFdpbmRvd0xpbWl0KVxuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJlbG9hZGVkICR7Z3JvdXBzLmxlbmd0aH0gZ3JvdXAocykgZm9yIGl0ZW0gJHtpdGVtSWR9YClcbiAgICAgICAgICAgIH0pKCkuY2F0Y2goKGV4OiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcHJlbG9hZCBwcmV2aWV3IGRhdGFcIiwgZXgpXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ1ByZWxvYWRJdGVtSWQgPT09IGl0ZW1JZCkgcGVuZGluZ1ByZWxvYWRJdGVtSWQgPSBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2FpdCB0aGF0IGRhdGEtaWQgZ2V0cyBwb3B1bGF0ZWQgYnkgSmVsbHlmaW5cbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVQcmVsb2FkKCk6IHZvaWQge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG4gICAgICAgICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgcHJlbG9hZFByZXZpZXdEYXRhKGl0ZW1JZClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmF0aW5nQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5Vc2VyUmF0aW5nLmF1dG9TaXplLnBhcGVyLWljb24tYnV0dG9uLWxpZ2h0JylcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHJhdGluZ0J1dHRvbnNbcmF0aW5nQnV0dG9ucy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVyblxuXG4gICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgICAgICAgICAgICAgaWYgKCFpZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBudWxsXG4gICAgICAgICAgICAgICAgcHJlbG9hZFByZXZpZXdEYXRhKGlkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGF0YS1pZCddIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzY2hlZHVsZVByZWxvYWQoKVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBpZiAocHJldmlld0J1dHRvbkxvYWRpbmcpIHJldHVyblxuICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRvUHJldmlld0J1dHRvbkNsaWNrKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3Qgb3BlbiBwcmV2aWV3IHBvcHVwXCIsIGV4KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKClcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9QcmV2aWV3QnV0dG9uQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVyaW1lbnRhbCBhbmQgd2lsbCBtYXliZSBiZSB1c2VkIGluIGZ1dHVyZSByZWxlYXNlc1xuICAgICAgICAgICAgY29uc3QgZ2V0Tm93UGxheWluZ0l0ZW1JZEZyb21TZXNzaW9uID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLk5PV19QTEFZSU5HX0lURU19YClcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcmVzb2x2ZSBub3ctcGxheWluZyBpdGVtIGZyb20gc2Vzc2lvbiwgZmFsbGluZyBiYWNrIHRvIE9TRCByYXRpbmcgYnV0dG9uXCIsIGV4KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyOiBEaWFsb2dDb250YWluZXJUZW1wbGF0ZSA9IG5ldyBEaWFsb2dDb250YWluZXJUZW1wbGF0ZShkb2N1bWVudC5ib2R5LCBkb2N1bWVudC5ib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICBkaWFsb2dDb250YWluZXIucmVuZGVyKClcblxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJylcblxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHJlc3BvbnNlIG9mIHRoZSBPU0QncyBwcmVsb2FkIG9mIHRoaXMgc2FtZSBpdGVtLCB3YWl0IGZvciBpdCBpbnN0ZWFkIG9mIGZpcmluZyBhIGR1cGxpY2F0ZSBmZXRjaC5cbiAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkICYmIHBlbmRpbmdQcmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByZXZpZXdTY3JvbGxTcGlubmVyXCI+JHtzcGlubmVySHRtbCgpfTwvZGl2PmBcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoY29udGVudERpdilcbiAgICAgICAgICAgICAgICBhd2FpdCBwZW5kaW5nUHJlbG9hZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjYWNoZWRHcm91cCA9ICFwcm9ncmFtRGF0YVN0b3JlLmlzR3JvdXBzQ2FjaGVFeHBpcmVkXG4gICAgICAgICAgICAgICAgPyBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5maW5kKGcgPT4gZy5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKSlcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICAgICAgICBsZXQgYWN0aXZlR3JvdXBJZDogc3RyaW5nXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFBhZ2U6IEdyb3VwSXRlbXNSZXN1bHRcbiAgICAgICAgICAgIGxldCBpbml0aWFsV2luZG93U3RhcnRJbmRleDogbnVtYmVyXG5cbiAgICAgICAgICAgIGlmIChjYWNoZWRHcm91cCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgT3BlbmluZyBwcmV2aWV3IHBvcHVwIGZvciBpdGVtICR7aXRlbUlkfSB1c2luZyBjYWNoZWQgZ3JvdXAgZGF0YWApXG4gICAgICAgICAgICAgICAgYWN0aXZlR3JvdXBJZCA9IGNhY2hlZEdyb3VwLmdyb3VwSWRcbiAgICAgICAgICAgICAgICBpbml0aWFsV2luZG93U3RhcnRJbmRleCA9IGNhY2hlZEdyb3VwLmxvYWRlZFN0YXJ0SW5kZXggPz8gMFxuICAgICAgICAgICAgICAgIGluaXRpYWxQYWdlID0geyBpdGVtczogWy4uLmNhY2hlZEdyb3VwLml0ZW1zXSwgdG90YWxSZWNvcmRDb3VudDogY2FjaGVkR3JvdXAubG9hZGVkVG90YWxSZWNvcmRDb3VudCA/PyBjYWNoZWRHcm91cC5pdGVtcy5sZW5ndGggfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYE9wZW5pbmcgcHJldmlldyBwb3B1cCBmb3IgaXRlbSAke2l0ZW1JZH0sIGZldGNoaW5nIGdyb3VwIGRhdGFgKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcmV2aWV3U2Nyb2xsU3Bpbm5lclwiPiR7c3Bpbm5lckh0bWwoKX08L2Rpdj5gXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVTcGlubmVyKGNvbnRlbnREaXYpXG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1UeXBlLCBjb250YWluZXJOYW1lLCBncm91cHMsIGFjdGl2ZUdyb3VwSWQ6IGZldGNoZWRBY3RpdmVHcm91cElkLCBhY3RpdmVJdGVtSW5kZXggfSA9IGF3YWl0IGxvYWRJdGVtUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gZ3JvdXBzXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5tYXJrR3JvdXBzRmV0Y2hlZCgpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS50eXBlID0gSXRlbVR5cGVbaXRlbVR5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSA9IGNvbnRhaW5lck5hbWUgPz8gJydcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkID0gZmV0Y2hlZEFjdGl2ZUdyb3VwSWRcblxuICAgICAgICAgICAgICAgIC8vIExvYWQgYSAzLXBhZ2Ugd2luZG93IChwYWdlIG9mIHRoZSBhY3RpdmUgZXBpc29kZSwgcGx1cyBvbmUgcGFnZSBiZWZvcmUgYW5kIGFmdGVyKVxuICAgICAgICAgICAgICAgIGNvbnN0IFBBR0VfU0laRSA9IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZU9mQWN0aXZlRXBpc29kZSA9IE1hdGguZmxvb3IoYWN0aXZlSXRlbUluZGV4IC8gUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgLSAxKSAqIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93TGltaXQgPSAocGFnZU9mQWN0aXZlRXBpc29kZSArIDIpICogUEFHRV9TSVpFIC0gaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXhcblxuICAgICAgICAgICAgICAgIGluaXRpYWxQYWdlID0gYXdhaXQgbG9hZEdyb3VwSXRlbXMoYWN0aXZlR3JvdXBJZCwgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXgsIGluaXRpYWxXaW5kb3dMaW1pdClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gaXRlbUlkXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQgPSBhY3RpdmVHcm91cElkXG5cbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJycgLy8gcmVtb3ZlIHRoZSBsb2FkaW5nIHNwaW5uZXJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdUb2tlbiA9IHByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcblxuICAgICAgICAgICAgLy8gQSBzdGFuZGFsb25lIG1vdmllIGhhcyBubyBtZWFuaW5nZnVsIGdyb3VwIG5hbWUgb2YgaXRzIG93bjsgYW4gaXRlbSBzb3VyY2VkIGZyb20gYSBQbGF5bGlzdC9Cb3hTZXRcbiAgICAgICAgICAgIC8vIGFscmVhZHkgaGFzIHRoYXQgY29sbGVjdGlvbidzIHJlYWwgbmFtZSwgc28gb25seSB0aGUgc3RhbmRhbG9uZS1tb3ZpZSBjYXNlIGdldHMgcmVsYWJlbGVkLlxuICAgICAgICAgICAgY29uc3QgaXNTdGFuZGFsb25lTW92aWUgPSBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPT09IEl0ZW1UeXBlLk1vdmllXG4gICAgICAgICAgICBjb25zdCBpc1NvdXJjZWRGcm9tQ29sbGVjdGlvbiA9IHByb2dyYW1EYXRhU3RvcmUudHlwZSA9PT0gSXRlbVR5cGUuUGxheWxpc3QgfHwgcHJvZ3JhbURhdGFTdG9yZS50eXBlID09PSBJdGVtVHlwZS5Cb3hTZXRcblxuICAgICAgICAgICAgLy8gTGFiZWwgdGhlIG1vdmllJ3Mgb3duIGdyb3VwIGFzIHRoZSBjb2xsZWN0aW9uIHNlYXJjaCB1cCBmcm9udCwgZXZlbiBiZWZvcmUgYW55IHJlc3VsdHMgYXJlIGtub3duLlxuICAgICAgICAgICAgaWYgKGlzU3RhbmRhbG9uZU1vdmllICYmIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5tYXAoKGcsIGkpID0+IGkgPT09IDAgPyB7IC4uLmcsIGdyb3VwTmFtZTogU0VBUkNIX0NPTExFQ1RJT05TX0dST1VQX05BTUUgfSA6IGcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9ubHkgc2VhcmNoIG9uY2UgcGVyIGZyZXNoIGdyb3VwLWZldGNoIChub3Qgb24gZXZlcnkgcG9wdXAgcmVvcGVuIHdoaWxlIGNhY2hlZCBncm91cHMgYWxyZWFkeSBpbmNsdWRlIHRoZSBzZWFyY2ggcmVzdWx0cykuXG4gICAgICAgICAgICAvLyBnZXRDb250YWluaW5nQ29sbGVjdGlvbnMgaXRzZWxmIGlzIG1lbW9pemVkIHBlciBpdGVtIGZvciB0aGUgd2hvbGUgcGFnZSBzZXNzaW9uLCBzbyBldmVuIHRoaXMgY2FuJ3QgcmUtdHJpZ2dlciB0aGVcbiAgICAgICAgICAgIC8vIGV4cGVuc2l2ZSBiYWNrZW5kIHNjYW4gbW9yZSB0aGFuIG9uY2UgcGVyIGl0ZW0sIG5vIG1hdHRlciBob3cgb2Z0ZW4gdGhlIHBvcHVwIGlzIHJlb3BlbmVkIHdoaWxlIGl0J3MgcGVuZGluZy5cbiAgICAgICAgICAgIGNvbnN0IGlzU2VhcmNoaW5nQ29sbGVjdGlvbnMgPSAoaXNTdGFuZGFsb25lTW92aWUgfHwgaXNTb3VyY2VkRnJvbUNvbGxlY3Rpb24pICYmIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zICYmIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgbGV0IGNvbGxlY3Rpb25zU2VhcmNoRG9uZSA9ICFpc1NlYXJjaGluZ0NvbGxlY3Rpb25zXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uc1NlYXJjaDogUHJvbWlzZTx2b2lkPiA9IGlzU2VhcmNoaW5nQ29sbGVjdGlvbnNcbiAgICAgICAgICAgICAgICA/IGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQpLnRoZW4oY29sbGVjdGlvbkdyb3VwcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sbGVjdGlvbkdyb3Vwcy5sZW5ndGggfHwgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkICE9PSBpdGVtSWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxmR3JvdXAgPSBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwc1swXVxuICAgICAgICAgICAgICAgICAgICAvLyBFeGNsdWRlIHRoZSBjb2xsZWN0aW9uL3BsYXlsaXN0IHRoaXMgaXRlbSB3YXMgYWxyZWFkeSBwbGF5ZWQgZnJvbSAtIGl0J3MgYWxyZWFkeSB0aGUgYWN0aXZlL2RlZmF1bHQgZ3JvdXAuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dyb3VwcyA9IGNvbGxlY3Rpb25Hcm91cHMuZmlsdGVyKGcgPT4gZy5ncm91cElkICE9PSBzZWxmR3JvdXAuZ3JvdXBJZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdHcm91cHMubGVuZ3RoKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBbc2VsZkdyb3VwLCAuLi5uZXdHcm91cHNdLm1hcCgoZywgaSkgPT4gKHsgLi4uZywgaW5kZXhOdW1iZXI6IGkgfSkpXG4gICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7IGNvbGxlY3Rpb25zU2VhcmNoRG9uZSA9IHRydWUgfSlcbiAgICAgICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpXG5cbiAgICAgICAgICAgIGNvbnN0IGNhblN3aXRjaEdyb3VwcyA9ICgpOiBib29sZWFuID0+IHByb2dyYW1EYXRhU3RvcmUudHlwZSAhPT0gSXRlbVR5cGUuTW92aWUgfHwgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnNcblxuICAgICAgICAgICAgY29uc3QgcG9wdXBUaXRsZTogUG9wdXBUaXRsZVRlbXBsYXRlID0gbmV3IFBvcHVwVGl0bGVUZW1wbGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBGb2N1c0NvbnRhaW5lcicpLCAtMSwgcHJvZ3JhbURhdGFTdG9yZSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUucmVuZGVyKGFzeW5jIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIGlmICghY2FuU3dpdGNoR3JvdXBzKCkpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbnRlbnRDb250YWluZXInKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJydcblxuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVHcm91cEVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLCBjb250ZW50RGl2LCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwLmluZGV4TnVtYmVyLCBwb3B1cFRpdGxlLCBsb2FkR3JvdXBJdGVtcylcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cFZpZXdUb2tlbiA9IHByb2dyYW1EYXRhU3RvcmUuY3VycmVudFZpZXdUb2tlblxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25zU2VhcmNoRG9uZSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ3ByZXZpZXdTY3JvbGxTcGlubmVyJylcbiAgICAgICAgICAgICAgICBzcGlubmVyLmlubmVySFRNTCA9IHNwaW5uZXJIdG1sKClcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHNwaW5uZXIpXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVTcGlubmVyKHNwaW5uZXIpXG5cbiAgICAgICAgICAgICAgICBhd2FpdCBjb2xsZWN0aW9uc1NlYXJjaFxuICAgICAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGEgZ3JvdXAgd2FzIHNlbGVjdGVkLCBvciB0aGUgcG9wdXAgY2xvc2VkKSB3aGlsZSB0aGlzIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KGdyb3VwVmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVHcm91cEVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLCBjb250ZW50RGl2LCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwLmluZGV4TnVtYmVyLCBwb3B1cFRpdGxlLCBsb2FkR3JvdXBJdGVtcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFN3aXRjaGFibGUoY2FuU3dpdGNoR3JvdXBzKCkpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUoY2FuU3dpdGNoR3JvdXBzKCkpXG5cbiAgICAgICAgICAgIGF3YWl0IGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVMYXp5SXRlbUxpc3QoY29udGVudERpdiwgKHN0YXJ0SW5kZXgpID0+IGxvYWRHcm91cEl0ZW1zKGFjdGl2ZUdyb3VwSWQsIHN0YXJ0SW5kZXgpLCB2aWV3VG9rZW4sIGluaXRpYWxQYWdlLCBpbml0aWFsV2luZG93U3RhcnRJbmRleClcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VGV4dChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwPy5ncm91cE5hbWUgPz8gJycpXG4gICAgICAgICAgICBpZiAocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cCkgcG9wdXBUaXRsZS5zZXRXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cClcbiAgICAgICAgICAgIGlmIChwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgJiYgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8ucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odXBkYXRlZCA9PiBwb3B1cFRpdGxlLnNldFdhdGNoZWRDb3VudCh1cGRhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHdhdGNoZWQgY291bnQgZm9yIGdyb3VwICR7cHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8uZ3JvdXBJZH1gLCBleCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgaXRlbSB0aGF0IGlzIGN1cnJlbnRseSBwbGF5aW5nXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtID0gY29udGVudERpdi5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWRMaXN0SXRlbScpIFxuICAgICAgICAgICAgaWYgKCFhY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgZmluZCBhY3RpdmUgbWVkaWEgc291cmNlIGVsZW1lbnQgaW4gcHJldmlldyBsaXN0LiBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW5cIiwgcHJvZ3JhbURhdGFTdG9yZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0/LnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVubG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiVW5sb2FkaW5nIHZpZGVvIHZpZXdcIilcblxuICAgICAgICAvLyBDbGVhciBvbGQgZGF0YSBhbmQgcmVzZXQgcHJldmlld0NvbnRhaW5lckxvYWRlZCBmbGFnXG4gICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFZpZGVvRWxlbWVudD4oJ3ZpZGVvLmh0bWx2aWRlb3BsYXllcicpXG4gICAgICAgIHZpZGVvRWxlbWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIG9uVmlkZW9UaW1lVXBkYXRlKVxuICAgICAgICB2aWRlb0VsZW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JhdGVjaGFuZ2UnLCBvblZpZGVvUmF0ZUNoYW5nZSlcbiAgICAgICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IC0xXG5cbiAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgcHJlbG9hZE9ic2VydmVyID0gbnVsbFxuICAgICAgICBwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9IG51bGxcbiAgICAgICAgcGVuZGluZ1ByZWxvYWQgPSBudWxsXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKVxuXG4gICAgICAgIHByZXZpZXdDb250YWluZXJMb2FkZWQgPSBmYWxzZSAvLyBSZXNldCBmbGFnIHdoZW4gdW5sb2FkaW5nXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGlzUHJldmlld0J1dHRvbkNyZWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucycpLnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cFByZXZpZXdCdXR0b24nKSAhPT0gbnVsbFxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=