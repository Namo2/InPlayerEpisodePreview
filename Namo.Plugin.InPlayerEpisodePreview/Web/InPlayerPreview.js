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
const ExpandedItemLayout_1 = __webpack_require__(/*! ../Models/ExpandedItemLayout */ "./Web/Models/ExpandedItemLayout.ts");
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
        // Only takes effect while every item is force-expanded - a single clicked-open item always keeps
        // the title as its own row, since side-by-side needs the title to sit inside the always-visible content.
        const useSideBySideLayout = this.programDataStore.pluginSettings.ExpandAllItems
            && this.programDataStore.pluginSettings.ExpandedItemLayout === ExpandedItemLayout_1.ExpandedItemLayout.SideBySide;
        // language=HTML
        const titleRow = `
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
        `;
        // language=HTML
        const imageCard = `
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
        `;
        // language=HTML
        const descriptionBlock = `
            <span class="previewItemDescription ${this.programDataStore.pluginSettings.BlurDescription && shouldBlur ? 'blur' : ''}">
                ${(_a = this.item.Description) !== null && _a !== void 0 ? _a : 'loading...'}
            </span>
            <button type="button" class="previewItemReadMoreButton hide">Show more</button>
        `;
        // language=HTML
        const contentRow = useSideBySideLayout ? `
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
        `;
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
    // Loads an item's description (if not already loaded) and reveals its content
    async expandItem(item, itemContainer, markSelected) {
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
        itemContainer.classList.remove('hide');
        if (markSelected)
            itemContainer.classList.add('selectedListItem');
        this.applyDescriptionReadMore(itemContainer);
    }
    async renderItem(item, parentDiv, positionAfterIndex) {
        const itemListElementTemplate = new ListElementTemplate_1.ListElementTemplate(parentDiv, positionAfterIndex, item, this.playbackHandler, this.programDataStore);
        itemListElementTemplate.render(async (e) => {
            e.stopPropagation();
            // when every item is already expanded, there's nothing left to toggle
            if (this.programDataStore.pluginSettings.ExpandAllItems)
                return;
            // hide item content for all existing items in the preview list
            document.querySelectorAll(".previewListItemContent").forEach((element) => {
                element.classList.add('hide');
                element.classList.remove('selectedListItem');
            });
            const itemContainer = document.getElementById(`item-${item.Id}`).querySelector('.previewListItemContent');
            await this.expandItem(item, itemContainer, true);
            // scroll to the selected item
            itemContainer.parentElement.scrollIntoView({ block: "start" });
        });
        const itemNode = document.getElementById(`item-${item.Id}`).querySelector('.previewListItemContent');
        if (this.programDataStore.pluginSettings.ExpandAllItems) {
            await this.expandItem(item, itemNode, item.Id === this.programDataStore.activeMediaSourceId);
        }
        else if (item.Id === this.programDataStore.activeMediaSourceId) {
            await this.expandItem(item, itemNode, true);
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

/***/ "./Web/Models/ExpandedItemLayout.ts"
/*!******************************************!*\
  !*** ./Web/Models/ExpandedItemLayout.ts ***!
  \******************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpandedItemLayout = void 0;
var ExpandedItemLayout;
(function (ExpandedItemLayout) {
    ExpandedItemLayout[ExpandedItemLayout["Default"] = 0] = "Default";
    ExpandedItemLayout[ExpandedItemLayout["SideBySide"] = 1] = "SideBySide";
})(ExpandedItemLayout || (exports.ExpandedItemLayout = ExpandedItemLayout = {}));


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
const ExpandedItemLayout_1 = __webpack_require__(/*! ./ExpandedItemLayout */ "./Web/Models/ExpandedItemLayout.ts");
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
    ExpandAllItems: false,
    ExpandedItemLayout: ExpandedItemLayout_1.ExpandedItemLayout.Default,
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
.previewListItem-sideBySide {
    margin-bottom: 1em;
}
.previewListItem-sideBySide .previewItemTitle .actionSheetItemText {
    font-size: 1.3em;
}
.previewListItem-sideBySide .previewItemDescription {
    margin-top: 1em;
}
.previewListItem-sideBySide .previewListItemContent .itemMiscInfo.previewItemDetails {
    margin-left: 0.5em !important;
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
let buttonsContainerObserver = null;
function getActiveButtonsBar() {
    return document.querySelector('[data-type="video-osd"]:not(.hide) .buttons');
}
// Wait for the OSD's `.buttons` container to exist
function waitForButtonsContainer(onReady) {
    if (getActiveButtonsBar()) {
        onReady();
        return;
    }
    buttonsContainerObserver === null || buttonsContainerObserver === void 0 ? void 0 : buttonsContainerObserver.disconnect();
    buttonsContainerObserver = new MutationObserver(() => {
        if (!getActiveButtonsBar())
            return;
        buttonsContainerObserver === null || buttonsContainerObserver === void 0 ? void 0 : buttonsContainerObserver.disconnect();
        buttonsContainerObserver = null;
        onReady();
    });
    buttonsContainerObserver.observe(document.body, { childList: true, subtree: true });
}
document.addEventListener('viewshow', viewShowEventHandler);
window.addEventListener('popstate', viewShowEventHandler);
window.addEventListener('popstate', () => { var _a; return (_a = document.getElementById('previewPopup')) === null || _a === void 0 ? void 0 : _a.remove(); });
function getActiveRatingButton() {
    var _a, _b;
    return (_b = (_a = getActiveButtonsBar()) === null || _a === void 0 ? void 0 : _a.querySelector('.btnUserRating.autoSize.paper-icon-button-light')) !== null && _b !== void 0 ? _b : null;
}
function getLatestUserRatingItemId() {
    var _a, _b;
    return (_b = (_a = getActiveRatingButton()) === null || _a === void 0 ? void 0 : _a.getAttribute('data-id')) !== null && _b !== void 0 ? _b : null;
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
// Retrieve the current collection/playlist id through a play action on a card the same way as hellyfin does it itself
// https://github.com/jellyfin/jellyfin-web/blob/release-10.11.z/src/components/shortcuts.js#L216
const PLAYBACK_TRIGGER_ACTIONS = new Set(['play', 'resume', 'playallfromhere']);
function onDocumentClickCapture(event) {
    var _a, _b, _c, _d, _e;
    // Only capture native events and ignore any from the Preview List
    if ((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, '#previewPopup'))
        return;
    const actionElement = (_d = (_c = event.target) === null || _c === void 0 ? void 0 : _c.closest) === null || _d === void 0 ? void 0 : _d.call(_c, '[data-action]');
    if (!actionElement || !PLAYBACK_TRIGGER_ACTIONS.has(actionElement.getAttribute('data-action')))
        return;
    const card = actionElement.closest('[data-id]');
    if (!card)
        return;
    const childOfCollectionId = (_e = card.getAttribute('data-collectionid')) !== null && _e !== void 0 ? _e : card.getAttribute('data-playlistid');
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
            if (previewContainerLoaded || isPreviewButtonCreated())
                return;
            // Reserve immediately so a second viewshow doesn't queue another wait
            previewContainerLoaded = true;
            waitForButtonsContainer(() => {
                // The view may have moved on (e.g. navigated back out of the player) while we were waiting
                if (!videoPaths.includes(getLocationPath()) || isPreviewButtonCreated())
                    return;
                loadVideoView();
            });
        }
        else if (videoPaths.includes(previousRoutePath)) {
            unloadVideoView();
        }
    }
    function loadVideoView() {
        logger.debug("Loading video view");
        let previewButton = null;
        let previewButtonLoading = false;
        // Only actually inserted into the OSD once the item's type is confirmed enabled - see preloadPreviewData.
        function insertPreviewButton() {
            if (previewButton)
                return;
            if (!videoPaths.includes(getLocationPath()))
                return;
            const buttonsBar = getActiveButtonsBar();
            if (!buttonsBar) {
                waitForButtonsContainer(insertPreviewButton);
                return;
            }
            // lastElementChild.parentElement is used for casting from Element to HTMLElement
            const parent = buttonsBar.lastElementChild.parentElement;
            let index = Array.from(parent.children).findIndex((child) => child.classList.contains("btnUserRating"));
            // if index is invalid try to use the old position (used in Jellyfin 10.8.12)
            if (index === -1)
                index = Array.from(parent.children).findIndex((child) => child.classList.contains("osdTimeText"));
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
            const target = getActiveRatingButton();
            if (!target) {
                // The rating button itself hasn't been created yet - wait for the OSD to finish building it, then retry.
                preloadObserver === null || preloadObserver === void 0 ? void 0 : preloadObserver.disconnect();
                preloadObserver = new MutationObserver(() => {
                    if (!getActiveRatingButton())
                        return;
                    preloadObserver === null || preloadObserver === void 0 ? void 0 : preloadObserver.disconnect();
                    preloadObserver = null;
                    schedulePreload();
                });
                preloadObserver.observe(document.body, { childList: true, subtree: true });
                return;
            }
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
        buttonsContainerObserver === null || buttonsContainerObserver === void 0 ? void 0 : buttonsContainerObserver.disconnect();
        buttonsContainerObserver = null;
        (_a = document.getElementById('previewPopup')) === null || _a === void 0 ? void 0 : _a.remove();
        document.querySelectorAll('#popupPreviewButton').forEach(element => element.remove());
        previewContainerLoaded = false; // Reset flag when unloading
    }
    function isPreviewButtonCreated() {
        var _a;
        return ((_a = getActiveButtonsBar()) === null || _a === void 0 ? void 0 : _a.querySelector('#popupPreviewButton')) != null;
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxFQUFDLDRCQUE0QjtJQUMvRCxDQUFDO0lBRUQsU0FBUyxzQkFBc0I7O1FBQzNCLE9BQU8sMEJBQW1CLEVBQUUsMENBQUUsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEtBQUksSUFBSTtJQUM5RSxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0Jhc2VUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Hcm91cExpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvSXRlbURldGFpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvUGxheVN0YXRlSWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1NwaW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0VuZHBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTGlzdEVsZW1lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvRXhwYW5kZWRJdGVtTGF5b3V0LnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvSXRlbVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9Mb2dMZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1BsdWdpblNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvU2VydmVyU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9XYXRjaENvdW50RGlzcGxheU1vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0RhdGFGZXRjaGVyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vV2ViL0luUGxheWVyUHJldmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVRlbXBsYXRlIHtcbiAgICAvKlxuICAgICAqIHRoZSBIVE1MIGJhc2VkIElEIG9mIHRoZSBuZXcgZ2VuZXJhdGVkIEVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGVsZW1lbnRJZDogc3RyaW5nO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcHJpdmF0ZSBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikgeyB9XG5cbiAgICBwdWJsaWMgZ2V0Q29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbkFmdGVySW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25BZnRlckluZGV4O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRFbGVtZW50SWQoZWxlbWVudElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEVsZW1lbnRJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50SWQ7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5nZXRFbGVtZW50SWQoKX1gKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogc3RyaW5nO1xuXG4gICAgYWJzdHJhY3QgcmVuZGVyKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiB2b2lkO1xuXG4gICAgcHJvdGVjdGVkIGFkZEVsZW1lbnRUb0NvbnRhaW5lciguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogSFRNTEVsZW1lbnQge1xuICAgICAgICAvLyBBZGQgRWxlbWVudCBhcyB0aGUgZmlyc3QgY2hpbGQgaWYgcG9zaXRpb24gaXMgbmVnYXRpdmVcbiAgICAgICAgaWYgKHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgPCAwICYmIHRoaXMuZ2V0Q29udGFpbmVyKCkuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmZpcnN0RWxlbWVudENoaWxkLmJlZm9yZSh0aGlzLnN0cmluZ1RvTm9kZSh0aGlzLmdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnMpKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBFbGVtZW50IGlmIGNvbnRhaW5lciBpcyBlbXB0eVxuICAgICAgICBpZiAoIXRoaXMuZ2V0Q29udGFpbmVyKCkuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmlubmVySFRNTCA9IHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2hpbGRCZWZvcmUgPSB0aGlzLmdldENvbnRhaW5lcigpLmxhc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29udGFpbmVyKCkuY2hpbGRyZW4ubGVuZ3RoID4gdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSAmJiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpID49IDApXG4gICAgICAgICAgICBjaGlsZEJlZm9yZSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuY2hpbGRyZW5bdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKV07XG4gICAgICAgIFxuICAgICAgICBjaGlsZEJlZm9yZS5hZnRlcih0aGlzLnN0cmluZ1RvTm9kZSh0aGlzLmdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnMpKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIHN0cmluZ1RvTm9kZSh0ZW1wbGF0ZVN0cmluZzogc3RyaW5nKTogTm9kZSB7XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSB0ZW1wbGF0ZVN0cmluZztcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2dDb250YWluZXJUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgZGlhbG9nQmFja2Ryb3BJZCA9ICdkaWFsb2dCYWNrZHJvcCdcbiAgICBkaWFsb2dDb250YWluZXJJZCA9ICdkaWFsb2dDb250YWluZXInXG4gICAgcG9wdXBDb250ZW50Q29udGFpbmVySWQgPSAncG9wdXBDb250ZW50Q29udGFpbmVyJ1xuICAgIHBvcHVwRm9jdXNDb250YWluZXJJZCA9ICdwb3B1cEZvY3VzQ29udGFpbmVyJ1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3ByZXZpZXdQb3B1cCcpO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZGlhbG9nQmFja2Ryb3BJZH1cIiBjbGFzcz1cImRpYWxvZ0JhY2tkcm9wIGRpYWxvZ0JhY2tkcm9wT3BlbmVkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5kaWFsb2dDb250YWluZXJJZH1cIiBjbGFzcz1cImRpYWxvZ0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLnBvcHVwRm9jdXNDb250YWluZXJJZH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9jdXNjb250YWluZXIgZGlhbG9nIGFjdGlvbnNoZWV0LW5vdC1mdWxsc2NyZWVuIGFjdGlvblNoZWV0IGNlbnRlcmVkRGlhbG9nIG9wZW5lZCBwcmV2aWV3UG9wdXAgYWN0aW9uU2hlZXRDb250ZW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhpc3Rvcnk9XCJ0cnVlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJlbW92ZW9uY2xvc2U9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLnBvcHVwQ29udGVudENvbnRhaW5lcklkfVwiIGNsYXNzPVwiYWN0aW9uU2hlZXRTY3JvbGxlciBzY3JvbGxZIHByZXZpZXdQb3B1cFNjcm9sbGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCk6IGFueSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZ2V0RWxlbWVudElkKCkpKVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtyZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWx9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvV2F0Y2hQcm9ncmVzc1wiO1xuaW1wb3J0IHtXYXRjaENvdW50RGlzcGxheU1vZGV9IGZyb20gXCIuLi9Nb2RlbHMvV2F0Y2hDb3VudERpc3BsYXlNb2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cExpc3RFbGVtZW50VGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGdyb3VwOiBHcm91cCwgcHJpdmF0ZSBpc0N1cnJlbnRHcm91cDogYm9vbGVhbiwgcHJpdmF0ZSBzaG93V2F0Y2hlZENvdW50OiBib29sZWFuLCBwcml2YXRlIHdhdGNoQ291bnREaXNwbGF5TW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGdyb3VwLSR7Z3JvdXAuZ3JvdXBJZH1gKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdEl0ZW0gbGlzdEl0ZW0tYnV0dG9uIGFjdGlvblNoZWV0TWVudUl0ZW0gZW1ieS1idXR0b24gcHJldmlld0xpc3RJdGVtXCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuZ3JvdXAuZ3JvdXBJZH1cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld0l0ZW1UaXRsZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuaXNDdXJyZW50R3JvdXAgPyBcIm1hdGVyaWFsLWljb25zIGNoZWNrXCIgOiBcIlwifVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RJdGVtQm9keSBhY3Rpb25zaGVldExpc3RJdGVtQm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25TaGVldEl0ZW1UZXh0XCI+JHt0aGlzLmdyb3VwLmdyb3VwTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuc2hvd1dhdGNoZWRDb3VudCA/IGA8ZGl2IGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50XCI+JHtyZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWwodGhpcy5ncm91cCwgdGhpcy53YXRjaENvdW50RGlzcGxheU1vZGUpfTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IGNsaWNrSGFuZGxlcihlKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50UGxheWJhY2tSYXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFZpZGVvRWxlbWVudD4oJ3ZpZGVvLmh0bWx2aWRlb3BsYXllcicpPy5wbGF5YmFja1JhdGUgfHwgMTtcbn1cblxuZnVuY3Rpb24gemVyb1BhZChudW06IG51bWJlciwgcGxhY2VzOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU3RyaW5nKG51bSkucGFkU3RhcnQocGxhY2VzLCAnMCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RW5kVGltZShydW50aW1lVGlja3M6IG51bWJlciwgcGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIC8vIGNvbnZlcnQgZnJvbSB0aWNrcyAoMTAwbnMgdW5pdHMpIHRvIG1pbGxpc2Vjb25kc1xuICAgIHJ1bnRpbWVUaWNrcyAvPSAxMDAwMDtcbiAgICBwbGF5YmFja1Bvc2l0aW9uVGlja3MgLz0gMTAwMDA7XG5cbiAgICBjb25zdCByZW1haW5pbmdNczogbnVtYmVyID0gKHJ1bnRpbWVUaWNrcyAtIHBsYXliYWNrUG9zaXRpb25UaWNrcykgLyBnZXRDdXJyZW50UGxheWJhY2tSYXRlKCk7XG5cbiAgICBsZXQgdGlja3M6IG51bWJlciA9IERhdGUubm93KCkgKyByZW1haW5pbmdNcztcbiAgICB0aWNrcyAtPSAobmV3IERhdGUoKSkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDsgLy8gYWRqdXN0IGZvciB0aW1lem9uZVxuXG4gICAgbGV0IGhvdXJzOiBzdHJpbmcgPSB6ZXJvUGFkKE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDM2MDApICUgMjQpKTtcbiAgICBsZXQgbWludXRlczogc3RyaW5nID0gemVyb1BhZChNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCkpO1xuXG4gICAgcmV0dXJuIGBFbmRzIGF0ICR7aG91cnN9OiR7bWludXRlc31gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRW5kVGltZURpc3BsYXkoaXRlbTogUHJldmlld0l0ZW0pOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVuZHNBdFtkYXRhLWl0ZW0taWQ9XCIke2l0ZW0uSWR9XCJdYClcbiAgICBpZiAoIWVsZW1lbnQgfHwgIWl0ZW0uUnVuVGltZVRpY2tzKSByZXR1cm5cblxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBmb3JtYXRFbmRUaW1lKGl0ZW0uUnVuVGltZVRpY2tzLCBpdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcylcbn1cblxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxzVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGl0ZW0tJHtpdGVtLklkfWApO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9LWRldGFpbHNcIiBjbGFzcz1cIml0ZW1NaXNjSW5mbyBpdGVtTWlzY0luZm8tcHJpbWFyeSBwcmV2aWV3SXRlbURldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5QcmVtaWVyZURhdGUgPyBgPGRpdiBjbGFzcz1cIm1lZGlhSW5mb0l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgJHsobmV3IERhdGUodGhpcy5pdGVtLlByZW1pZXJlRGF0ZSkpLnRvTG9jYWxlRGF0ZVN0cmluZyh0aGlzLmdldExvY2FsZSgpKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhSW5mb0l0ZW1cIj4ke3RoaXMuZm9ybWF0UnVuVGltZSh0aGlzLml0ZW0uUnVuVGltZVRpY2tzKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Db21tdW5pdHlSYXRpbmcgPyBgPGRpdiBjbGFzcz1cInN0YXJSYXRpbmdDb250YWluZXIgbWVkaWFJbmZvSXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHN0YXJJY29uIHN0YXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNvbW11bml0eVJhdGluZy50b0ZpeGVkKDEpfVxuICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmcgPyBgPGRpdiBjbGFzcz1cIm1lZGlhSW5mb0l0ZW0gbWVkaWFJbmZvQ3JpdGljUmF0aW5nICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZyA+PSA2MCA/ICdtZWRpYUluZm9Dcml0aWNSYXRpbmdGcmVzaCcgOiAnbWVkaWFJbmZvQ3JpdGljUmF0aW5nUm90dGVuJ31cIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nfVxuICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW5kc0F0IG1lZGlhSW5mb0l0ZW1cIiBkYXRhLWl0ZW0taWQ9XCIke3RoaXMuaXRlbS5JZH1cIj4ke2Zvcm1hdEVuZFRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcywgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TG9jYWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubGFuZ3VhZ2VzXG4gICAgICAgICAgICA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gLy8gQHRzLWlnbm9yZSBmb3IgdXNlckxhbmd1YWdlICh0aGlzIGFkZHMgc3VwcG9ydCBmb3IgSUUpIFRPRE86IE1vdmUgdG8gaW50ZXJmYWNlXG4gICAgICAgICAgICA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRSdW5UaW1lKHRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBmb3JtYXQgdGhlIHRpY2tzIHRvIGEgc3RyaW5nIHdpdGggbWludXRlcyBhbmQgaG91cnNcbiAgICAgICAgdGlja3MgLz0gMTAwMDA7IC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCk7XG4gICAgICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgICAgIGxldCBob3Vyc1N0cmluZzogc3RyaW5nID0gaG91cnMgPiAwID8gYCR7aG91cnN9aCBgIDogJyc7XG4gICAgICAgIHJldHVybiBgJHtob3Vyc1N0cmluZ30ke21pbnV0ZXN9bWA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge0Zhdm9yaXRlSWNvblRlbXBsYXRlfSBmcm9tIFwiLi9RdWlja0FjdGlvbnMvRmF2b3JpdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5U3RhdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9QbGF5U3RhdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIlxuaW1wb3J0IHtJdGVtRGV0YWlsc1RlbXBsYXRlfSBmcm9tIFwiLi9JdGVtRGV0YWlsc1wiXG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiXG5pbXBvcnQge3RvZ2dsZVBsYXllZFN0YXRlTG9jYWxseX0gZnJvbSBcIi4uL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCJcbmltcG9ydCB7RXhwYW5kZWRJdGVtTGF5b3V0fSBmcm9tIFwiLi4vTW9kZWxzL0V4cGFuZGVkSXRlbUxheW91dFwiXG5cbi8vIFNob3dzL2hpZGVzIHRoZSBcInN0YXJ0IHBsYXliYWNrXCIgb3ZlcmxheSBmb3IgYSByZW5kZXJlZCBsaXN0IGl0ZW1cbmV4cG9ydCBmdW5jdGlvbiBzZXRJdGVtT3ZlcmxheUFjdGl2ZShpdGVtSWQ6IHN0cmluZywgaXNBY3RpdmU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2FyZE92ZXJsYXktJHtpdGVtSWR9YCk/LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBpc0FjdGl2ZSlcbn1cblxuZXhwb3J0IGNsYXNzIExpc3RFbGVtZW50VGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcXVpY2tBY3Rpb25Db250YWluZXI6IEhUTUxFbGVtZW50XG4gICAgcHJpdmF0ZSBwbGF5U3RhdGVJY29uOiBQbGF5U3RhdGVJY29uVGVtcGxhdGVcbiAgICBwcml2YXRlIGZhdm9yaXRlSWNvbjogRmF2b3JpdGVJY29uVGVtcGxhdGVcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtLCBwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBpdGVtLSR7aXRlbS5JZH1gKVxuXG4gICAgICAgIC8vIGNyZWF0ZSB0ZW1wIHF1aWNrIGFjdGlvbiBjb250YWluZXJcbiAgICAgICAgdGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgLy8gY3JlYXRlIHF1aWNrIGFjdGlvbnNcbiAgICAgICAgdGhpcy5wbGF5U3RhdGVJY29uID0gbmV3IFBsYXlTdGF0ZUljb25UZW1wbGF0ZSh0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLCAtMSwgdGhpcy5pdGVtKVxuICAgICAgICB0aGlzLmZhdm9yaXRlSWNvbiA9IG5ldyBGYXZvcml0ZUljb25UZW1wbGF0ZSh0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLCAwLCB0aGlzLml0ZW0pXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gYWRkIHF1aWNrIGFjdGlvbnNcbiAgICAgICAgdGhpcy5wbGF5U3RhdGVJY29uLnJlbmRlcigpXG4gICAgICAgIHRoaXMuZmF2b3JpdGVJY29uLnJlbmRlcigpXG5cbiAgICAgICAgLy8gYWRkIGl0ZW0gZGV0YWlscy9pbmZvXG4gICAgICAgIGNvbnN0IGRldGFpbHNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgZGV0YWlsczogSXRlbURldGFpbHNUZW1wbGF0ZSA9IG5ldyBJdGVtRGV0YWlsc1RlbXBsYXRlKGRldGFpbHNDb250YWluZXIsIC0xLCB0aGlzLml0ZW0pXG4gICAgICAgIGRldGFpbHMucmVuZGVyKClcblxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2VTdHlsZTogc3RyaW5nID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vSXRlbXMvJHt0aGlzLml0ZW0uSWR9L0ltYWdlcy9QcmltYXJ5P3RhZz0ke3RoaXMuaXRlbS5QcmltYXJ5SW1hZ2VUYWd9JylgXG5cbiAgICAgICAgY29uc3Qgc2hvdWxkQmx1cjogYm9vbGVhbiA9ICEodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLk9ubHlCbHVyVW53YXRjaGVkICYmIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWQpXG5cbiAgICAgICAgLy8gT25seSB0YWtlcyBlZmZlY3Qgd2hpbGUgZXZlcnkgaXRlbSBpcyBmb3JjZS1leHBhbmRlZCAtIGEgc2luZ2xlIGNsaWNrZWQtb3BlbiBpdGVtIGFsd2F5cyBrZWVwc1xuICAgICAgICAvLyB0aGUgdGl0bGUgYXMgaXRzIG93biByb3csIHNpbmNlIHNpZGUtYnktc2lkZSBuZWVkcyB0aGUgdGl0bGUgdG8gc2l0IGluc2lkZSB0aGUgYWx3YXlzLXZpc2libGUgY29udGVudC5cbiAgICAgICAgY29uc3QgdXNlU2lkZUJ5U2lkZUxheW91dDogYm9vbGVhbiA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FeHBhbmRBbGxJdGVtc1xuICAgICAgICAgICAgJiYgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkV4cGFuZGVkSXRlbUxheW91dCA9PT0gRXhwYW5kZWRJdGVtTGF5b3V0LlNpZGVCeVNpZGVcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIGNvbnN0IHRpdGxlUm93OiBzdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAkeyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0uSW5kZXhOdW1iZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSAhPT0gSXRlbVR5cGUuTW92aWVcbiAgICAgICAgICAgICAgICAgICAgKSA/IGA8c3Bhbj4ke3RoaXMuaXRlbS5JbmRleE51bWJlcn08L3NwYW4+YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdEl0ZW1Cb2R5IGFjdGlvbnNoZWV0TGlzdEl0ZW1Cb2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuaXRlbS5OYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgY29uc3QgaW1hZ2VDYXJkOiBzdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBvdmVyZmxvd0JhY2tkcm9wQ2FyZCBjYXJkLWhvdmVyYWJsZSBjYXJkLXdpdGh1c2VyZGF0YSBwcmV2aWV3SXRlbUltYWdlQ2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkQm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkU2NhbGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkUGFkZGVyIGNhcmRQYWRkZXItb3ZlcmZsb3dCYWNrZHJvcCBsYXp5LWhpZGRlbi1jaGlsZHJlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZEltYWdlSWNvbiBtYXRlcmlhbC1pY29ucyB0dlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInByZXZpZXdJdGVtSW1hZ2VDYXJkLSR7dGhpcy5pdGVtLklkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZEltYWdlQ29udGFpbmVyIGNhcmRDb250ZW50IGl0ZW1BY3Rpb24gbGF6eSBibHVyaGFzaGVkIGxhenktaW1hZ2UtZmFkZWluLWZhc3QgJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuQmx1clRodW1ibmFpbCAmJiBzaG91bGRCbHVyID8gJ2JsdXInIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCIke2JhY2tncm91bmRJbWFnZVN0eWxlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hQcm9ncmVzcyAmJiB0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJpbm5lckNhcmRGb290ZXIgZnVsbElubmVyQ2FyZEZvb3RlciBpbm5lckNhcmRGb290ZXJDbGVhciBpdGVtUHJvZ3Jlc3NCYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1Qcm9ncmVzc0JhckZvcmVncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoke3RoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlfSU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmRPdmVybGF5LSR7dGhpcy5pdGVtLklkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZE92ZXJsYXlDb250YWluZXIgaXRlbUFjdGlvbiAke3RoaXMuaXRlbS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPyAnaGlkZScgOiAnJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3RhcnQtaXRlbS0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5QnV0dG9uIGNhcmRPdmVybGF5QnV0dG9uLWhvdmVyIGl0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgY2FyZE92ZXJsYXlGYWItcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cInJlc3VtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNhcmRPdmVybGF5QnV0dG9uSWNvbiBjYXJkT3ZlcmxheUJ1dHRvbkljb24taG92ZXIgcGxheV9hcnJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25CbG9jazogc3RyaW5nID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkJsdXJEZXNjcmlwdGlvbiAmJiBzaG91bGRCbHVyID8gJ2JsdXInIDogJyd9XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uRGVzY3JpcHRpb24gPz8gJ2xvYWRpbmcuLi4nfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIGhpZGVcIj5TaG93IG1vcmU8L2J1dHRvbj5cbiAgICAgICAgYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgY29uc3QgY29udGVudFJvdzogc3RyaW5nID0gdXNlU2lkZUJ5U2lkZUxheW91dCA/IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHByZXZpZXdJdGVtQ29udGVudFJvd1wiPlxuICAgICAgICAgICAgICAgICR7aW1hZ2VDYXJkfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGl0bGVSb3d9XG4gICAgICAgICAgICAgICAgICAgICR7ZGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb25CbG9ja31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgIDogYFxuICAgICAgICAgICAgJHtkZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHByZXZpZXdJdGVtQ29udGVudFJvd1wiPlxuICAgICAgICAgICAgICAgICR7aW1hZ2VDYXJkfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb25CbG9ja31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3RJdGVtIGxpc3RJdGVtLWJ1dHRvbiBhY3Rpb25TaGVldE1lbnVJdGVtIGVtYnktYnV0dG9uIHByZXZpZXdMaXN0SXRlbSR7dXNlU2lkZUJ5U2lkZUxheW91dCA/ICcgcHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbS5JZH1cIj5cbiAgICAgICAgICAgICAgICAke3VzZVNpZGVCeVNpZGVMYXlvdXQgPyAnJyA6IHRpdGxlUm93fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3TGlzdEl0ZW1Db250ZW50IGhpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtjb250ZW50Um93fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYXlTdGF0ZUJ1dHRvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheVN0YXRlQnV0dG9uLSR7dGhpcy5pdGVtLklkfWApXG4gICAgICAgIHBsYXlTdGF0ZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgdG9nZ2xlUGxheWVkU3RhdGVMb2NhbGx5KHRoaXMucHJvZ3JhbURhdGFTdG9yZSwgdGhpcy5pdGVtLklkKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJylcbiAgICAgICAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSlcblxuICAgICAgICBjb25zdCBpdGVtSW1hZ2VDYXJkOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFydC1pdGVtLSR7dGhpcy5pdGVtLklkfWApXG4gICAgICAgIGl0ZW1JbWFnZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnBsYXliYWNrSGFuZGxlci5wbGF5KHRoaXMuaXRlbS5JZCwgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcykpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtyZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWx9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvV2F0Y2hQcm9ncmVzc1wiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBUaXRsZVRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3UG9wdXBUaXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicG9wdXBUaXRsZVN3aXRjaEljb25cIiBjbGFzcz1cImFjdGlvbnNoZWV0TWVudUl0ZW1JY29uIGxpc3RJdGVtSWNvbiBsaXN0SXRlbUljb24tdHJhbnNwYXJlbnQgbWF0ZXJpYWwtaWNvbnMga2V5Ym9hcmRfYmFja3NwYWNlICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5sZW5ndGggPiAxID8gJycgOiAnaGlkZSd9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImFjdGlvblNoZWV0VGl0bGVcIj48L2gxPlxuICAgICAgICAgICAgICAgICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgPyAnPGRpdiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFwiPjwvZGl2PicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lclRleHQgPSB0ZXh0XG4gICAgfVxuXG4gICAgcHVibGljIHNldFN3aXRjaGFibGUoc3dpdGNoYWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI3BvcHVwVGl0bGVTd2l0Y2hJY29uJyk/LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhc3dpdGNoYWJsZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0V2F0Y2hlZENvdW50KGdyb3VwOiBHcm91cCkge1xuICAgICAgICBjb25zdCB3YXRjaGVkQ291bnRFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgICAgICBpZiAod2F0Y2hlZENvdW50RWxlbWVudCkgd2F0Y2hlZENvdW50RWxlbWVudC5pbm5lckhUTUwgPSByZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWwoZ3JvdXAsIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5XYXRjaENvdW50RGlzcGxheU1vZGUpXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXRWaXNpYmxlKGlzVmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKVxuICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICByZW5kZXJlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgUHJldmlld0J1dHRvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwb3B1cFByZXZpZXdCdXR0b24nKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwiYXV0b1NpemUgcGFwZXItaWNvbi1idXR0b24tbGlnaHRcIiBpcz1cInBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFcGlzb2RlIFByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICA8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT5cbiAgICAgICAgICAgICAgICA8c3ZnIGlkPVwic3ZnMVwiXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNiA0XCJcbiAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJsYXllcjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdDQ3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc2NDY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMuNzU2ODY3NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyLjE2OTM2NjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjAuMjM4MjMzMDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjEuODI1NzMzNVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwicmVjdDQ3LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40NzY1OTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtIDEuMDI5MTQzNywxLjAzMjA0ODIgaCAzLjc1Mjg5OTEgdiAyLjE3MjIzOTQgbCAwLjAwNjc2LC0yLjE1NzI1OTUgelwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwicmVjdDQ3LThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40Nzc0Mjc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtIDEuODIyODYxNCwwLjIzODcxMzM2IGggMy43NTkyNTkgViAyLjQxMDEyMTEgbCAtMC4wMDY4LC0yLjE3MTQwNzc0IHpcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IGFueSA9PiBjbGlja0hhbmRsZXIoKSk7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi8uLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVJY29uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgnZmF2b3JpdGVCdXR0b24tJyArIGl0ZW0uSWQpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICAgICBpcz1cImVtYnktcmF0aW5nYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbUFjdGlvbiBwYXBlci1pY29uLWJ1dHRvbi1saWdodCBlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbT8uSWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zZXJ2ZXJpZD1cIiR7dGhpcy5pdGVtPy5TZXJ2ZXJJZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWl0ZW10eXBlPVwiRXBpc29kZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbGlrZXM9XCJcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlzZmF2b3JpdGU9XCIke3RoaXMuaXRlbT8uVXNlckRhdGE/LklzRmF2b3JpdGUgPz8gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBmYXZvcml0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi8uLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuXG5leHBvcnQgY2xhc3MgUGxheVN0YXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BsYXlTdGF0ZUJ1dHRvbi0nICsgdGhpcy5pdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXBsYXlzdGF0ZWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0/LklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuaXRlbT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGF5ZWQ9XCIke3RoaXMuaXRlbT8uVXNlckRhdGE/LlBsYXllZCA/PyBmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1hcmsgcGxheWVkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjaGVjayBwbGF5c3RhdGVidXR0b24taWNvbi0ke3RoaXMuaXRlbT8uVXNlckRhdGE/LlBsYXllZCA/IFwicGxheWVkXCIgOiBcInVucGxheWVkXCJ9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgfVxufVxuIiwiY29uc3QgU1BJTk5FUl9MQVlFUlNfSFRNTDogc3RyaW5nID0gWzEsIDIsIDMsIDRdLm1hcChsYXllciA9PlxuICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2xheWVyIG1kbC1zcGlubmVyX19sYXllci0ke2xheWVyfVwiPmAgK1xuICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUtY2xpcHBlciBtZGwtc3Bpbm5lcl9fbGVmdFwiPmAgK1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlIG1kbC1zcGlubmVyX19jaXJjbGVMZWZ0XCI+PC9kaXY+YCArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXIgbWRsLXNwaW5uZXJfX3JpZ2h0XCI+YCArXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUgbWRsLXNwaW5uZXJfX2NpcmNsZVJpZ2h0XCI+PC9kaXY+YCArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICBgPC9kaXY+YFxuKS5qb2luKCcnKVxuXG5leHBvcnQgZnVuY3Rpb24gc3Bpbm5lckh0bWwoZXh0cmFDbGFzc2VzOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8ZGl2IGRpcj1cImx0clwiIGNsYXNzPVwiZG9jc3Bpbm5lciBtZGwtc3Bpbm5lciAke2V4dHJhQ2xhc3Nlc31cIj4ke1NQSU5ORVJfTEFZRVJTX0hUTUx9PC9kaXY+YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVTcGlubmVyKGNvbnRhaW5lcjogUGFyZW50Tm9kZSk6IHZvaWQge1xuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWRsLXNwaW5uZXInKT8uY2xhc3NMaXN0LmFkZCgnbWRsU3Bpbm5lckFjdGl2ZScpXG59IiwiZXhwb3J0IGVudW0gRW5kcG9pbnRzIHtcbiAgICBCQVNFID0gXCJJblBsYXllclByZXZpZXdcIixcbiAgICBJVEVNX0RFU0NSSVBUSU9OID0gXCIvSXRlbXMve2l0ZW1JZH1cIixcbiAgICBQTEFZX01FRElBID0gXCIvSXRlbXMve2l0ZW1JZH0vUGxheS97dGlja3N9XCIsXG4gICAgTk9XX1BMQVlJTkdfSVRFTSA9IFwiL05vd1BsYXlpbmdJdGVtXCIsXG4gICAgU0VSVkVSX1NFVFRJTkdTID0gXCIvU2VydmVyU2V0dGluZ3NcIixcbiAgICBJVEVNX1BSRVZJRVdfVFlQRSA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vSXRlbXMve2l0ZW1JZH0vUHJldmlld0l0ZW1UeXBlXCIsXG4gICAgSVRFTV9QUkVWSUVXX0RBVEEgPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L0l0ZW1zL3tpdGVtSWR9L1ByZXZpZXdEYXRhXCIsXG4gICAgR1JPVVBfSVRFTVMgPSBcIi9Vc2Vycy97dXNlcklkfS9Hcm91cHMve2dyb3VwSWR9L0l0ZW1zXCIsXG4gICAgR1JPVVBfV0FUQ0hFRF9DT1VOVCA9IFwiL1VzZXJzL3t1c2VySWR9L0dyb3Vwcy97Z3JvdXBJZH0vV2F0Y2hlZENvdW50XCIsXG4gICAgQ09OVEFJTklOR19DT0xMRUNUSU9OUyA9IFwiL1VzZXJzL3t1c2VySWR9L0l0ZW1zL3tpdGVtSWR9L0NvbnRhaW5pbmdDb2xsZWN0aW9uc1wiLFxuICAgIFNFVF9TT1VSQ0VfQ09MTEVDVElPTiA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vU291cmNlQ29sbGVjdGlvbi97Y29sbGVjdGlvbklkfVwiLFxuICAgIFBMVUdJTl9TRVRUSU5HUyA9IFwiL1BsdWdpblNldHRpbmdzXCJcbn0iLCJpbXBvcnQge0xpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7R3JvdXAsIFVOS05PV05fV0FUQ0hFRF9DT1VOVH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge0dyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Hcm91cExpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7UG9wdXBUaXRsZVRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuL0VuZHBvaW50c1wiO1xuaW1wb3J0IHtHcm91cEl0ZW1zUmVzdWx0fSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBJdGVtc1Jlc3VsdFwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge2FjdGl2YXRlU3Bpbm5lciwgc3Bpbm5lckh0bWx9IGZyb20gXCIuL0NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IHt1cGRhdGVXYXRjaGVkQ291bnREb219IGZyb20gXCIuL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vU2VydmljZXMvTG9nZ2VyXCI7XG5cbi8vIFRoZSBiYWNrZW5kIGFscmVhZHkgcmV0dXJucyBQbGF5bGlzdHMvQm94U2V0cyBhbmQgRm9sZGVycyBpbiB0aGVpciBvd24gbWFudWFsIGl0ZW0vZGlzc3BsYXkgb3JkZXJcbi8vIHNvcnRpbmcgc2hvdWxkIG9ubHkgYXBwbHkgZm9yIHNlYXNvbi1iYXNlZCAoRXBpc29kZSkgZ3JvdXBzLCB3aGVyZSBpdCByZWZsZWN0cyBhY3R1YWwgZXBpc29kZSBvcmRlci5cbmNvbnN0IHByZXNlcnZlQmFja2VuZE9yZGVyVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5QbGF5bGlzdCwgSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5Gb2xkZXJdKVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHsgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtczogUHJldmlld0l0ZW1bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIgPSAwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBGb3IgUGxheWxpc3RzL0JveFNldHMsIHNob3cgdGhlIGFjdHVhbCBsaXN0IHBvc2l0aW9uIGluc3RlYWQgb2YgdGhlIEluZGV4TnVtYmVyIGZyb20gdGhlaXIgc2Vhc29uL2VwaXNvZGUuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcHJlc2VydmVPcmRlciA/IHsgLi4uaXRlbXNbaV0sIEluZGV4TnVtYmVyOiBvZmZzZXQgKyBpICsgMSB9IDogaXRlbXNbaV1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVySXRlbShpdGVtLCBwYXJlbnREaXYsIG9mZnNldCArIGkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIHByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXM6IFByZXZpZXdJdGVtW10sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIG9mZnNldDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcmVzZXJ2ZU9yZGVyID8geyAuLi5pdGVtc1tpXSwgSW5kZXhOdW1iZXI6IG9mZnNldCArIGkgKyAxIH0gOiBpdGVtc1tpXVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIHBhcmVudERpdiwgLTEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaG93IGEgXCJTaG93IG1vcmVcIiBidXR0b24gaWYgZGVzY3JpcHRpb24gZXhjZWVkcyBtYXggaGVpZ2h0XG4gICAgcHJpdmF0ZSBhcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbUNvbnRhaW5lcjogRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJylcbiAgICAgICAgY29uc3QgcmVhZE1vcmVCdXR0b24gPSBpdGVtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbicpXG4gICAgICAgIGlmICghZGVzY3JpcHRpb24gfHwgIXJlYWRNb3JlQnV0dG9uKSByZXR1cm5cblxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpXG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLnRleHRDb250ZW50ID0gJ1Nob3cgbW9yZSdcblxuICAgICAgICBjb25zdCBpc092ZXJmbG93aW5nID0gZGVzY3JpcHRpb24uc2Nyb2xsSGVpZ2h0ID4gZGVzY3JpcHRpb24uY2xpZW50SGVpZ2h0XG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaXNPdmVyZmxvd2luZylcbiAgICAgICAgaWYgKCFpc092ZXJmbG93aW5nKSByZXR1cm5cblxuICAgICAgICByZWFkTW9yZUJ1dHRvbi5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkID0gZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKVxuICAgICAgICAgICAgcmVhZE1vcmVCdXR0b24udGV4dENvbnRlbnQgPSBleHBhbmRlZCA/ICdTaG93IGxlc3MnIDogJ1Nob3cgbW9yZSdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExvYWRzIGFuIGl0ZW0ncyBkZXNjcmlwdGlvbiAoaWYgbm90IGFscmVhZHkgbG9hZGVkKSBhbmQgcmV2ZWFscyBpdHMgY29udGVudFxuICAgIHByaXZhdGUgYXN5bmMgZXhwYW5kSXRlbShpdGVtOiBQcmV2aWV3SXRlbSwgaXRlbUNvbnRhaW5lcjogRWxlbWVudCwgbWFya1NlbGVjdGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghaXRlbS5EZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX0RFU0NSSVBUSU9OfWBcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbS5JZCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uOiBzdHJpbmcgPSByZXN1bHQ/LkRlc2NyaXB0aW9uXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJldmlld0l0ZW1EZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gbmV3RGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgZGVzY3JpcHRpb24gZm9yIGl0ZW0gJHtpdGVtLklkfWAsIGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGlmIChtYXJrU2VsZWN0ZWQpIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICB0aGlzLmFwcGx5RGVzY3JpcHRpb25SZWFkTW9yZShpdGVtQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJlbmRlckl0ZW0oaXRlbTogUHJldmlld0l0ZW0sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGl0ZW1MaXN0RWxlbWVudFRlbXBsYXRlID0gbmV3IExpc3RFbGVtZW50VGVtcGxhdGUocGFyZW50RGl2LCBwb3NpdGlvbkFmdGVySW5kZXgsIGl0ZW0sIHRoaXMucGxheWJhY2tIYW5kbGVyLCB0aGlzLnByb2dyYW1EYXRhU3RvcmUpO1xuICAgICAgICBpdGVtTGlzdEVsZW1lbnRUZW1wbGF0ZS5yZW5kZXIoYXN5bmMgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIHdoZW4gZXZlcnkgaXRlbSBpcyBhbHJlYWR5IGV4cGFuZGVkLCB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB0b2dnbGVcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXhwYW5kQWxsSXRlbXMpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gaGlkZSBpdGVtIGNvbnRlbnQgZm9yIGFsbCBleGlzdGluZyBpdGVtcyBpbiB0aGUgcHJldmlldyBsaXN0XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXZpZXdMaXN0SXRlbUNvbnRlbnRcIikuZm9yRWFjaCgoZWxlbWVudDogRWxlbWVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXI6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS0ke2l0ZW0uSWR9YCkucXVlcnlTZWxlY3RvcignLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQnKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZXhwYW5kSXRlbShpdGVtLCBpdGVtQ29udGFpbmVyLCB0cnVlKTtcblxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJzdGFydFwiIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpdGVtTm9kZTogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLSR7aXRlbS5JZH1gKS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0xpc3RJdGVtQ29udGVudCcpO1xuICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkV4cGFuZEFsbEl0ZW1zKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmV4cGFuZEl0ZW0oaXRlbSwgaXRlbU5vZGUsIGl0ZW0uSWQgPT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLklkID09PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5leHBhbmRJdGVtKGl0ZW0sIGl0ZW1Ob2RlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlU3Bpbm5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdwcmV2aWV3U2Nyb2xsU3Bpbm5lcicpXG4gICAgICAgIHNwaW5uZXIuaW5uZXJIVE1MID0gc3Bpbm5lckh0bWwoKVxuICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoc3Bpbm5lcilcbiAgICAgICAgcmV0dXJuIHNwaW5uZXJcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBhdHRhY2hTY3JvbGxQYWdpbmF0aW9uKFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBsb2FkUGFnZTogKHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PixcbiAgICAgICAgdmlld1Rva2VuOiBudW1iZXIsXG4gICAgICAgIGluaXRpYWxUb3RhbExvYWRlZDogbnVtYmVyLFxuICAgICAgICBpbml0aWFsVG90YWxSZWNvcmRDb3VudDogbnVtYmVyLFxuICAgICAgICBpbml0aWFsTG9hZGVkU3RhcnRJbmRleDogbnVtYmVyXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IFNDUk9MTF9UUklHR0VSX0RJU1RBTkNFX1BYID0gMjAwXG5cbiAgICAgICAgbGV0IHRvdGFsTG9hZGVkID0gaW5pdGlhbFRvdGFsTG9hZGVkXG4gICAgICAgIGxldCB0b3RhbFJlY29yZENvdW50ID0gaW5pdGlhbFRvdGFsUmVjb3JkQ291bnRcbiAgICAgICAgbGV0IGxvYWRlZFN0YXJ0SW5kZXggPSBpbml0aWFsTG9hZGVkU3RhcnRJbmRleFxuICAgICAgICBsZXQgbG9hZGluZ0ZvcndhcmQgPSBmYWxzZVxuICAgICAgICBsZXQgbG9hZGluZ0JhY2t3YXJkID0gZmFsc2VcblxuICAgICAgICBjb25zdCBsb2FkTmV4dFBhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBsb2FkaW5nRm9yd2FyZCA9IHRydWVcbiAgICAgICAgICAgIGNvbnN0IHNwaW5uZXIgPSB0aGlzLmNyZWF0ZVNwaW5uZXJFbGVtZW50KClcbiAgICAgICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChzcGlubmVyKVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMsIHRvdGFsUmVjb3JkQ291bnQ6IG5ld1RvdGFsUmVjb3JkQ291bnQgfSA9IGF3YWl0IGxvYWRQYWdlKHRvdGFsTG9hZGVkKVxuICAgICAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbUVsZW1lbnRzKGl0ZW1zLCBwYXJlbnREaXYsIHRvdGFsTG9hZGVkKVxuICAgICAgICAgICAgICAgIHRvdGFsTG9hZGVkICs9IGl0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICAgIHRvdGFsUmVjb3JkQ291bnQgPSBuZXdUb3RhbFJlY29yZENvdW50XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgbmV3bHkgbG9hZGVkIHBhZ2UgbWlnaHQgc3RpbGwgbm90IGZpbGwgdGhlIGNvbnRhaW5lciwgc28gcmUtY2hlY2sgcmlnaHQgYXdheS5cbiAgICAgICAgICAgICAgICBjaGVja1Njcm9sbFBvc2l0aW9uKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgbmV4dCBwYWdlIG9mIGl0ZW1zIChzdGFydEluZGV4ICR7dG90YWxMb2FkZWR9KWAsIGV4KVxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0ZvcndhcmQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9hZFByZXZpb3VzUGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgIGxvYWRpbmdCYWNrd2FyZCA9IHRydWVcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodEJlZm9yZVNwaW5uZXIgPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgICBjb25zdCBzcGlubmVyID0gdGhpcy5jcmVhdGVTcGlubmVyRWxlbWVudCgpXG4gICAgICAgICAgICBwYXJlbnREaXYuaW5zZXJ0QmVmb3JlKHNwaW5uZXIsIHBhcmVudERpdi5maXJzdENoaWxkKVxuICAgICAgICAgICAgcGFyZW50RGl2LnNjcm9sbFRvcCArPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsSGVpZ2h0QmVmb3JlU3Bpbm5lclxuXG4gICAgICAgICAgICBjb25zdCBwYWdlU2l6ZSA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FcGlzb2RlUGFnZVNpemVcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXJ0SW5kZXggPSBNYXRoLm1heCgwLCBsb2FkZWRTdGFydEluZGV4IC0gcGFnZVNpemUpXG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpdGVtcyB9ID0gYXdhaXQgbG9hZFBhZ2UobmV3U3RhcnRJbmRleClcbiAgICAgICAgICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodEJlZm9yZVByZXBlbmQgPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgICAgICAgc3Bpbm5lci5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHJlcGVuZEl0ZW1FbGVtZW50cyhpdGVtcywgcGFyZW50RGl2LCBuZXdTdGFydEluZGV4KVxuICAgICAgICAgICAgICAgIHBhcmVudERpdi5zY3JvbGxUb3AgKz0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIHNjcm9sbEhlaWdodEJlZm9yZVByZXBlbmRcbiAgICAgICAgICAgICAgICBsb2FkZWRTdGFydEluZGV4ID0gbmV3U3RhcnRJbmRleFxuXG4gICAgICAgICAgICAgICAgY2hlY2tTY3JvbGxQb3NpdGlvbigpXG4gICAgICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHByZXZpb3VzIHBhZ2Ugb2YgaXRlbXMgKHN0YXJ0SW5kZXggJHtuZXdTdGFydEluZGV4fSlgLCBleClcbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdCYWNrd2FyZCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGVja1Njcm9sbFBvc2l0aW9uID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsUG9zaXRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5lYXJCb3R0b20gPSBwYXJlbnREaXYuc2Nyb2xsVG9wICsgcGFyZW50RGl2LmNsaWVudEhlaWdodCA+PSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0IC0gU0NST0xMX1RSSUdHRVJfRElTVEFOQ0VfUFhcbiAgICAgICAgICAgIGlmICghbG9hZGluZ0ZvcndhcmQgJiYgdG90YWxMb2FkZWQgPCB0b3RhbFJlY29yZENvdW50ICYmIG5lYXJCb3R0b20pIHtcbiAgICAgICAgICAgICAgICBsb2FkTmV4dFBhZ2UoKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZWFyVG9wID0gcGFyZW50RGl2LnNjcm9sbFRvcCA8PSBTQ1JPTExfVFJJR0dFUl9ESVNUQU5DRV9QWFxuICAgICAgICAgICAgaWYgKCFsb2FkaW5nQmFja3dhcmQgJiYgbG9hZGVkU3RhcnRJbmRleCA+IDAgJiYgbmVhclRvcCkge1xuICAgICAgICAgICAgICAgIGxvYWRQcmV2aW91c1BhZ2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsUG9zaXRpb24pXG4gICAgICAgIGNoZWNrU2Nyb2xsUG9zaXRpb24oKVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVMYXp5SXRlbUxpc3QoXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGxvYWRQYWdlOiAoc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+LFxuICAgICAgICB2aWV3VG9rZW46IG51bWJlcixcbiAgICAgICAgaW5pdGlhbFBhZ2U/OiBHcm91cEl0ZW1zUmVzdWx0LFxuICAgICAgICBpbml0aWFsT2Zmc2V0OiBudW1iZXIgPSAwXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGZpcnN0UGFnZSA9IGluaXRpYWxQYWdlID8/IGF3YWl0IGxvYWRQYWdlKDApXG4gICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUl0ZW1FbGVtZW50cyhmaXJzdFBhZ2UuaXRlbXMsIHBhcmVudERpdiwgaW5pdGlhbE9mZnNldClcblxuICAgICAgICBjb25zdCB0b3RhbExvYWRlZCA9IGluaXRpYWxPZmZzZXQgKyBmaXJzdFBhZ2UuaXRlbXMubGVuZ3RoXG4gICAgICAgIHRoaXMuYXR0YWNoU2Nyb2xsUGFnaW5hdGlvbihwYXJlbnREaXYsIGxvYWRQYWdlLCB2aWV3VG9rZW4sIHRvdGFsTG9hZGVkLCBmaXJzdFBhZ2UudG90YWxSZWNvcmRDb3VudCwgaW5pdGlhbE9mZnNldClcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGZldGNoR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBJZDogc3RyaW5nKTogUHJvbWlzZTx7IHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyLCBwbGF5ZWRSdW50aW1lVGlja3M6IG51bWJlciwgdG90YWxSdW50aW1lVGlja3M6IG51bWJlciB9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLkdST1VQX1dBVENIRURfQ09VTlR9YFxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7Z3JvdXBJZH0nLCBncm91cElkKSlcbiAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IHJhdy5QbGF5ZWRJdGVtQ291bnQsXG4gICAgICAgICAgICB0b3RhbEl0ZW1Db3VudDogcmF3LlRvdGFsSXRlbUNvdW50LFxuICAgICAgICAgICAgcGxheWVkUnVudGltZVRpY2tzOiByYXcuUGxheWVkUnVudGltZVRpY2tzLFxuICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IHJhdy5Ub3RhbFJ1bnRpbWVUaWNrc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGVuc3VyZUdyb3VwV2F0Y2hlZENvdW50KGdyb3VwOiBHcm91cCk6IFByb21pc2U8R3JvdXA+IHtcbiAgICAgICAgaWYgKGdyb3VwLnBsYXllZEl0ZW1Db3VudCAhPT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKSByZXR1cm4gZ3JvdXBcblxuICAgICAgICBjb25zdCB7IHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQsIHBsYXllZFJ1bnRpbWVUaWNrcywgdG90YWxSdW50aW1lVGlja3MgfSA9IGF3YWl0IHRoaXMuZmV0Y2hHcm91cFdhdGNoZWRDb3VudChncm91cC5ncm91cElkKVxuICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuc2V0R3JvdXBXYXRjaGVkQ291bnQoZ3JvdXAuZ3JvdXBJZCwgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudCwgcGxheWVkUnVudGltZVRpY2tzLCB0b3RhbFJ1bnRpbWVUaWNrcylcbiAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQsIHBsYXllZFJ1bnRpbWVUaWNrcywgdG90YWxSdW50aW1lVGlja3MgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVHcm91cEVsZW1lbnRzKFxuICAgICAgICBncm91cHM6IEdyb3VwW10sXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGN1cnJlbnRHcm91cEluZGV4OiBudW1iZXIsXG4gICAgICAgIHRpdGxlQ29udGFpbmVyOiBQb3B1cFRpdGxlVGVtcGxhdGUsXG4gICAgICAgIGxvYWRJdGVtczogKGdyb3VwSWQ6IHN0cmluZywgc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+XG4gICAgKTogdm9pZCB7XG4gICAgICAgIGdyb3Vwcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4TnVtYmVyIC0gYi5pbmRleE51bWJlcilcblxuICAgICAgICAvLyBJbnZhbGlkYXRlcyBhbnkgaXRlbSBsb2FkIHN0aWxsIGluIHByb2dyZXNzc1xuICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IG5ldyBHcm91cExpc3RFbGVtZW50VGVtcGxhdGUocGFyZW50RGl2LCBpLCBncm91cHNbaV0sIGdyb3Vwc1tpXS5pbmRleE51bWJlciA9PT0gY3VycmVudEdyb3VwSW5kZXgsIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50LCB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuV2F0Y2hDb3VudERpc3BsYXlNb2RlKVxuICAgICAgICAgICAgZ3JvdXAucmVuZGVyKGFzeW5jIChlOiBNb3VzZUV2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQgPSBncm91cHNbaV0uZ3JvdXBJZFxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFRleHQoZ3JvdXBzW2ldLmdyb3VwTmFtZSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0V2F0Y2hlZENvdW50KGdyb3Vwc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3Vwc1tpXS5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVHcm91cFdhdGNoZWRDb3VudChncm91cHNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4odXBkYXRlZCA9PiB0aXRsZUNvbnRhaW5lci5zZXRXYXRjaGVkQ291bnQodXBkYXRlZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgd2F0Y2hlZCBjb3VudCBmb3IgZ3JvdXAgJHtncm91cHNbaV0uZ3JvdXBJZH1gLCBleCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKVxuXG4gICAgICAgICAgICAgICAgcGFyZW50RGl2LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgY29uc3Qgdmlld1Rva2VuID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmJlZ2luTmV3VmlldygpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWQgPSAhdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzR3JvdXBzQ2FjaGVFeHBpcmVkXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5maW5kKGcgPT4gZy5ncm91cElkID09PSBncm91cHNbaV0uZ3JvdXBJZClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsUGFnZTogR3JvdXBJdGVtc1Jlc3VsdCB8IHVuZGVmaW5lZCA9IGNhY2hlZD8ubG9hZGVkU3RhcnRJbmRleCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8geyBpdGVtczogWy4uLmNhY2hlZC5pdGVtc10sIHRvdGFsUmVjb3JkQ291bnQ6IGNhY2hlZC5sb2FkZWRUb3RhbFJlY29yZENvdW50ID8/IGNhY2hlZC5pdGVtcy5sZW5ndGggfVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxPZmZzZXQgPSBjYWNoZWQ/LmxvYWRlZFN0YXJ0SW5kZXggPz8gMFxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVMYXp5SXRlbUxpc3QocGFyZW50RGl2LCAoc3RhcnRJbmRleCkgPT4gbG9hZEl0ZW1zKGdyb3Vwc1tpXS5ncm91cElkLCBzdGFydEluZGV4KSwgdmlld1Rva2VuLCBpbml0aWFsUGFnZSwgaW5pdGlhbE9mZnNldClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCBpdGVtcyBmb3IgZ3JvdXAgJHtncm91cHNbaV0uZ3JvdXBJZH1gLCBleClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgJiYgZ3JvdXBzW2ldLnBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVHcm91cFdhdGNoZWRDb3VudChncm91cHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHVwZGF0ZWQgPT4gdXBkYXRlV2F0Y2hlZENvdW50RG9tKHRoaXMucHJvZ3JhbURhdGFTdG9yZSwgdXBkYXRlZCkpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXg6IHVua25vd24pID0+IHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHdhdGNoZWQgY291bnQgZm9yIGdyb3VwICR7Z3JvdXBzW2ldLmdyb3VwSWR9YCwgZXgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gRXhwYW5kZWRJdGVtTGF5b3V0IHtcbiAgICBEZWZhdWx0ID0gMCxcbiAgICBTaWRlQnlTaWRlID0gMSxcbn1cbiIsImV4cG9ydCBlbnVtIEl0ZW1UeXBlIHtcbiAgICBBZ2dyZWdhdGVGb2xkZXIsXG4gICAgQXVkaW8sXG4gICAgQXVkaW9Cb29rLFxuICAgIEJhc2VQbHVnaW5Gb2xkZXIsXG4gICAgQm9vayxcbiAgICBCb3hTZXQsXG4gICAgQ2hhbm5lbCxcbiAgICBDaGFubmVsRm9sZGVySXRlbSxcbiAgICBDb2xsZWN0aW9uRm9sZGVyLFxuICAgIEVwaXNvZGUsXG4gICAgRm9sZGVyLFxuICAgIEdlbnJlLFxuICAgIE1hbnVhbFBsYXlsaXN0c0ZvbGRlcixcbiAgICBNb3ZpZSxcbiAgICBMaXZlVHZDaGFubmVsLFxuICAgIExpdmVUdlByb2dyYW0sXG4gICAgTXVzaWNBbGJ1bSxcbiAgICBNdXNpY0FydGlzdCxcbiAgICBNdXNpY0dlbnJlLFxuICAgIE11c2ljVmlkZW8sXG4gICAgUGVyc29uLFxuICAgIFBob3RvLFxuICAgIFBob3RvQWxidW0sXG4gICAgUGxheWxpc3QsXG4gICAgUGxheWxpc3RzRm9sZGVyLFxuICAgIFByb2dyYW0sXG4gICAgUmVjb3JkaW5nLFxuICAgIFNlYXNvbixcbiAgICBTZXJpZXMsXG4gICAgU3R1ZGlvLFxuICAgIFRyYWlsZXIsXG4gICAgVHZDaGFubmVsLFxuICAgIFR2UHJvZ3JhbSxcbiAgICBVc2VyUm9vdEZvbGRlcixcbiAgICBVc2VyVmlldyxcbiAgICBWaWRlbyxcbiAgICBZZWFyXG59IiwiZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICAgIE5vbmUgPSAwLFxuICAgIEVycm9yID0gMSxcbiAgICBJbmZvcm1hdGlvbiA9IDIsXG4gICAgRGVidWcgPSAzLFxufVxuIiwiaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vSXRlbVR5cGVcIjtcbmltcG9ydCB7V2F0Y2hDb3VudERpc3BsYXlNb2RlfSBmcm9tIFwiLi9XYXRjaENvdW50RGlzcGxheU1vZGVcIjtcbmltcG9ydCB7TG9nTGV2ZWx9IGZyb20gXCIuL0xvZ0xldmVsXCI7XG5pbXBvcnQge0V4cGFuZGVkSXRlbUxheW91dH0gZnJvbSBcIi4vRXhwYW5kZWRJdGVtTGF5b3V0XCI7XG5cbmV4cG9ydCB0eXBlIFBsdWdpblNldHRpbmdzID0ge1xuICAgIEVuYWJsZWRJdGVtVHlwZXM6IEl0ZW1UeXBlW10sXG4gICAgQmx1ckRlc2NyaXB0aW9uOiBib29sZWFuLFxuICAgIEJsdXJUaHVtYm5haWw6IGJvb2xlYW4sXG4gICAgRXBpc29kZVBhZ2VTaXplOiBudW1iZXIsXG4gICAgU2hvd1dhdGNoZWRDb3VudDogYm9vbGVhbixcbiAgICBXYXRjaENvdW50RGlzcGxheU1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSxcbiAgICBTZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnM6IGJvb2xlYW4sXG4gICAgT25seUJsdXJVbndhdGNoZWQ6IGJvb2xlYW4sXG4gICAgU2hvd1dhdGNoUHJvZ3Jlc3M6IGJvb2xlYW4sXG4gICAgRXhwYW5kQWxsSXRlbXM6IGJvb2xlYW4sXG4gICAgRXhwYW5kZWRJdGVtTGF5b3V0OiBFeHBhbmRlZEl0ZW1MYXlvdXQsXG4gICAgTG9nTGV2ZWw6IExvZ0xldmVsLFxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFBsdWdpblNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICBFbmFibGVkSXRlbVR5cGVzOiBbSXRlbVR5cGUuU2VyaWVzLCBJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLk1vdmllLCBJdGVtVHlwZS5WaWRlb10sXG4gICAgQmx1ckRlc2NyaXB0aW9uOiBmYWxzZSxcbiAgICBCbHVyVGh1bWJuYWlsOiBmYWxzZSxcbiAgICBFcGlzb2RlUGFnZVNpemU6IDEwLFxuICAgIFNob3dXYXRjaGVkQ291bnQ6IHRydWUsXG4gICAgV2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUuSG91cnNNaW51dGVzLFxuICAgIFNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9uczogdHJ1ZSxcbiAgICBPbmx5Qmx1clVud2F0Y2hlZDogZmFsc2UsXG4gICAgU2hvd1dhdGNoUHJvZ3Jlc3M6IHRydWUsXG4gICAgRXhwYW5kQWxsSXRlbXM6IGZhbHNlLFxuICAgIEV4cGFuZGVkSXRlbUxheW91dDogRXhwYW5kZWRJdGVtTGF5b3V0LkRlZmF1bHQsXG4gICAgTG9nTGV2ZWw6IExvZ0xldmVsLkluZm9ybWF0aW9uLFxufSIsImltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuL1ByZXZpZXdJdGVtXCI7XG5cbmV4cG9ydCB0eXBlIEdyb3VwID0ge1xuICAgIGdyb3VwSWQ6IHN0cmluZ1xuICAgIGdyb3VwTmFtZTogc3RyaW5nXG4gICAgaXRlbXM6IFByZXZpZXdJdGVtW11cbiAgICBpbmRleE51bWJlcjogbnVtYmVyXG4gICAgcGxheWVkSXRlbUNvdW50OiBudW1iZXJcbiAgICB0b3RhbEl0ZW1Db3VudDogbnVtYmVyXG4gICAgcGxheWVkUnVudGltZVRpY2tzOiBudW1iZXJcbiAgICB0b3RhbFJ1bnRpbWVUaWNrczogbnVtYmVyXG4gICAgbG9hZGVkU3RhcnRJbmRleD86IG51bWJlclxuICAgIGxvYWRlZEVuZEluZGV4PzogbnVtYmVyXG4gICAgbG9hZGVkVG90YWxSZWNvcmRDb3VudD86IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgVU5LTk9XTl9XQVRDSEVEX0NPVU5UID0gLTFcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFdhdGNoZWRDb3VudCA9IChwbGF5ZWRJdGVtQ291bnQ6IG51bWJlciwgdG90YWxJdGVtQ291bnQ6IG51bWJlcik6IHN0cmluZyA9PlxuICAgIHBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UIHx8IHRvdGFsSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlRcbiAgICAgICAgPyAn4oCmIHdhdGNoZWQnXG4gICAgICAgIDogYCR7cGxheWVkSXRlbUNvdW50fS8ke3RvdGFsSXRlbUNvdW50fSB3YXRjaGVkYFxuXG4iLCJpbXBvcnQge2Zvcm1hdFdhdGNoZWRDb3VudCwgR3JvdXAsIFVOS05PV05fV0FUQ0hFRF9DT1VOVH0gZnJvbSBcIi4vR3JvdXBcIjtcbmltcG9ydCB7V2F0Y2hDb3VudERpc3BsYXlNb2RlfSBmcm9tIFwiLi4vV2F0Y2hDb3VudERpc3BsYXlNb2RlXCI7XG5cbmNvbnN0IFRJQ0tTX1BFUl9TRUNPTkQgPSAxMF8wMDBfMDAwXG5cbmNvbnN0IGdldFRpbWVTdHJpbmcgPSAodGlja3M6IG51bWJlciwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBzZWNvbmRzID0gdGlja3MgLyBUSUNLU19QRVJfU0VDT05EXG4gICAgY29uc3QgdG90YWxNaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApXG4gICAgY29uc3QgdG90YWxIb3VycyA9IE1hdGguZmxvb3IodG90YWxNaW51dGVzIC8gNjApXG4gICAgY29uc3QgdG90YWxEYXlzID0gTWF0aC5mbG9vcih0b3RhbEhvdXJzIC8gMjQpXG4gICAgY29uc3QgdG90YWxNb250aHMgPSBNYXRoLmZsb29yKHRvdGFsRGF5cyAvIDMwKVxuICAgIGNvbnN0IHRvdGFsWWVhcnMgPSBNYXRoLmZsb29yKHRvdGFsRGF5cyAvIDM2NSlcblxuICAgIGlmIChtb2RlID09PSBXYXRjaENvdW50RGlzcGxheU1vZGUuSG91cnNNaW51dGVzKSB7XG4gICAgICAgIGlmICh0b3RhbEhvdXJzID49IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSB0b3RhbE1pbnV0ZXMgJSA2MFxuICAgICAgICAgICAgcmV0dXJuIG1pbnV0ZXMgPiAwID8gYCR7dG90YWxIb3Vyc31oICR7bWludXRlc31tYCA6IGAke3RvdGFsSG91cnN9aGBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG90YWxNaW51dGVzID4gMCA/IGAke3RvdGFsTWludXRlc31tYCA6ICcwbSdcbiAgICB9XG5cbiAgICBpZiAodG90YWxZZWFycyA+PSAxKSB7XG4gICAgICAgIGNvbnN0IG1vbnRocyA9IE1hdGguZmxvb3IoKHRvdGFsRGF5cyAlIDM2NSkgLyAzMClcbiAgICAgICAgcmV0dXJuIG1vbnRocyA+IDAgPyBgJHt0b3RhbFllYXJzfXkgJHttb250aHN9bW9gIDogYCR7dG90YWxZZWFyc315YFxuICAgIH1cbiAgICBpZiAodG90YWxNb250aHMgPj0gMSkge1xuICAgICAgICBjb25zdCBkYXlzID0gdG90YWxEYXlzICUgMzBcbiAgICAgICAgcmV0dXJuIGRheXMgPiAwID8gYCR7dG90YWxNb250aHN9bW8gJHtkYXlzfWRgIDogYCR7dG90YWxNb250aHN9bW9gXG4gICAgfVxuICAgIGlmICh0b3RhbERheXMgPj0gMSkge1xuICAgICAgICBjb25zdCBob3VycyA9IHRvdGFsSG91cnMgJSAyNFxuICAgICAgICByZXR1cm4gaG91cnMgPiAwID8gYCR7dG90YWxEYXlzfWQgJHtob3Vyc31oYCA6IGAke3RvdGFsRGF5c31kYFxuICAgIH1cbiAgICBpZiAodG90YWxIb3VycyA+PSAxKSB7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSB0b3RhbE1pbnV0ZXMgJSA2MFxuICAgICAgICByZXR1cm4gbWludXRlcyA+IDAgPyBgJHt0b3RhbEhvdXJzfWggJHttaW51dGVzfW1gIDogYCR7dG90YWxIb3Vyc31oYFxuICAgIH1cbiAgICByZXR1cm4gdG90YWxNaW51dGVzID4gMCA/IGAke3RvdGFsTWludXRlc31tYCA6ICcwbSdcbn1cblxuY29uc3QgY2xhbXBQcm9ncmVzcyA9IChwcm9ncmVzczogbnVtYmVyKTogbnVtYmVyID0+IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgTWF0aC5yb3VuZChwcm9ncmVzcykpKVxuXG5leHBvcnQgY29uc3QgZ2V0V2F0Y2hQcm9ncmVzc1BlcmNlbnQgPSAoZ3JvdXA6IEdyb3VwLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBudW1iZXIgPT4ge1xuICAgIGlmIChtb2RlID09PSBXYXRjaENvdW50RGlzcGxheU1vZGUuQ291bnQpIHtcbiAgICAgICAgaWYgKCFncm91cC50b3RhbEl0ZW1Db3VudCkgcmV0dXJuIDBcbiAgICAgICAgcmV0dXJuIGNsYW1wUHJvZ3Jlc3MoKGdyb3VwLnBsYXllZEl0ZW1Db3VudCAvIGdyb3VwLnRvdGFsSXRlbUNvdW50KSAqIDEwMClcbiAgICB9XG5cbiAgICBpZiAoIWdyb3VwLnRvdGFsUnVudGltZVRpY2tzKSByZXR1cm4gMFxuICAgIHJldHVybiBjbGFtcFByb2dyZXNzKChncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgLyBncm91cC50b3RhbFJ1bnRpbWVUaWNrcykgKiAxMDApXG59XG5cbmV4cG9ydCBjb25zdCBpc1dhdGNoZWRDb3VudFVua25vd24gPSAoZ3JvdXA6IEdyb3VwLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBib29sZWFuID0+IHtcbiAgICBpZiAoZ3JvdXAucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQgfHwgZ3JvdXAudG90YWxJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVClcbiAgICAgICAgcmV0dXJuIHRydWVcblxuICAgIHJldHVybiBtb2RlICE9PSBXYXRjaENvdW50RGlzcGxheU1vZGUuQ291bnRcbiAgICAgICAgJiYgKGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UIHx8IGdyb3VwLnRvdGFsUnVudGltZVRpY2tzID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRXYXRjaGVkQ291bnRUZXh0ID0gKGdyb3VwOiBHcm91cCwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogc3RyaW5nID0+IHtcbiAgICBpZiAobW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkNvdW50KVxuICAgICAgICByZXR1cm4gZm9ybWF0V2F0Y2hlZENvdW50KGdyb3VwLnBsYXllZEl0ZW1Db3VudCwgZ3JvdXAudG90YWxJdGVtQ291bnQpXG5cbiAgICBpZiAobW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLlBlcmNlbnRhZ2UpXG4gICAgICAgIHJldHVybiBgJHtnZXRXYXRjaFByb2dyZXNzUGVyY2VudChncm91cCwgbW9kZSl9JWBcblxuICAgIGNvbnN0IHNhZmVUb3RhbCA9IE1hdGgubWF4KDAsIGdyb3VwLnRvdGFsUnVudGltZVRpY2tzIHx8IDApXG4gICAgY29uc3Qgc2FmZVBsYXllZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHNhZmVUb3RhbCwgZ3JvdXAucGxheWVkUnVudGltZVRpY2tzIHx8IDApKVxuICAgIHJldHVybiBgJHtnZXRUaW1lU3RyaW5nKHNhZmVQbGF5ZWQsIG1vZGUpfSAvICR7Z2V0VGltZVN0cmluZyhzYWZlVG90YWwsIG1vZGUpfWBcbn1cblxuLy8gUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL24wMGJjb2RyL0plbGx5ZmluLUVuaGFuY2VkL2Jsb2IvbWFpbi9KZWxseWZpbi5QbHVnaW4uSmVsbHlmaW5FbmhhbmNlZC9qcy9lbmhhbmNlZC9pdGVtZGV0YWlscy9mZWF0dXJlcy1kZXRhaWxzLW1lZGlhLWluZm8uanNcbmNvbnN0IGdldFdhdGNoUHJvZ3Jlc3NJY29uSHRtbCA9IChwcm9ncmVzczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiA4IC8vIHJhZGl1cyA9IDhcbiAgICBjb25zdCBvZmZzZXQgPSBjaXJjdW1mZXJlbmNlIC0gKHByb2dyZXNzIC8gMTAwKSAqIGNpcmN1bWZlcmVuY2VcblxuICAgIGlmIChwcm9ncmVzcyA+PSAxMDApIHtcbiAgICAgICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDAuM2VtOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGZsZXgtc2hyaW5rOiAwO1wiPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk05LjUgMTUuNWwtMy0zIDEuNC0xLjRMOS41IDEyLjdsNS42LTUuNiAxLjQgMS40elwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgICAgIDwvc3ZnPmBcbiAgICB9XG5cbiAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMC4zZW07IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgZmxleC1zaHJpbms6IDA7XCI+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIG9wYWNpdHk9XCIwLjJcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICBzdHlsZT1cInN0cm9rZS1kYXNoYXJyYXk6ICR7Y2lyY3VtZmVyZW5jZX07IHN0cm9rZS1kYXNob2Zmc2V0OiAke29mZnNldH07IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XCIvPlxuICAgIDwvc3ZnPmBcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlcldhdGNoZWRDb3VudElubmVySHRtbCA9IChncm91cDogR3JvdXAsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKGlzV2F0Y2hlZENvdW50VW5rbm93bihncm91cCwgbW9kZSkpXG4gICAgICAgIHJldHVybiBgJHtnZXRXYXRjaFByb2dyZXNzSWNvbkh0bWwoMCl9PHNwYW4gY2xhc3M9XCJwcmV2aWV3R3JvdXBXYXRjaGVkQ291bnRUZXh0XCI+LCwsPC9zcGFuPmBcblxuICAgIGNvbnN0IHByb2dyZXNzID0gZ2V0V2F0Y2hQcm9ncmVzc1BlcmNlbnQoZ3JvdXAsIG1vZGUpXG4gICAgcmV0dXJuIGAke2dldFdhdGNoUHJvZ3Jlc3NJY29uSHRtbChwcm9ncmVzcyl9PHNwYW4gY2xhc3M9XCJwcmV2aWV3R3JvdXBXYXRjaGVkQ291bnRUZXh0XCI+JHtmb3JtYXRXYXRjaGVkQ291bnRUZXh0KGdyb3VwLCBtb2RlKX08L3NwYW4+YFxufVxuIiwiZXhwb3J0IHR5cGUgU2VydmVyU2V0dGluZ3MgPSB7XG4gICAgTWluUmVzdW1lUGN0OiBudW1iZXIsIFxuICAgIE1heFJlc3VtZVBjdDogbnVtYmVyLCBcbiAgICBNaW5SZXN1bWVEdXJhdGlvblNlY29uZHM6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNlcnZlclNldHRpbmdzOiBTZXJ2ZXJTZXR0aW5ncyA9IHtcbiAgICBNaW5SZXN1bWVQY3Q6IDUsXG4gICAgTWF4UmVzdW1lUGN0OiA5MCxcbiAgICBNaW5SZXN1bWVEdXJhdGlvblNlY29uZHM6IDMwMFxufSIsImV4cG9ydCBlbnVtIFdhdGNoQ291bnREaXNwbGF5TW9kZSB7XG4gICAgQ291bnQgPSAwLFxuICAgIEhvdXJzTWludXRlcyA9IDEsXG4gICAgQWxsVW5pdHMgPSAyLFxuICAgIFBlcmNlbnRhZ2UgPSAzLFxufVxuIiwiaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge3JlbmRlcldhdGNoZWRDb3VudElubmVySHRtbH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzXCI7XG5cbnR5cGUgVXNlckRhdGFDaGFuZ2VkRW50cnkgPSB7XG4gICAgSXRlbUlkOiBzdHJpbmdcbiAgICBQbGF5ZWQ6IGJvb2xlYW5cbiAgICBJc0Zhdm9yaXRlOiBib29sZWFuXG4gICAgUGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXJcbiAgICBQbGF5ZWRQZXJjZW50YWdlPzogbnVtYmVyXG59XG5cbnR5cGUgV2ViU29ja2V0TWVzc2FnZSA9IHtcbiAgICBNZXNzYWdlVHlwZTogc3RyaW5nXG4gICAgRGF0YTogYW55XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXYXRjaGVkQ291bnREb20ocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgZ3JvdXA6IEdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgaHRtbCA9IHJlbmRlcldhdGNoZWRDb3VudElubmVySHRtbChncm91cCwgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5XYXRjaENvdW50RGlzcGxheU1vZGUpXG5cbiAgICBpZiAoZ3JvdXAuZ3JvdXBJZCA9PT0gcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cElkKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwV2F0Y2hlZENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwVGl0bGVDb250YWluZXInKT8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgICAgICBpZiAocG9wdXBXYXRjaGVkQ291bnQpIHBvcHVwV2F0Y2hlZENvdW50LmlubmVySFRNTCA9IGh0bWxcbiAgICB9XG5cbiAgICBjb25zdCBncm91cExpc3RXYXRjaGVkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ3JvdXAtJHtncm91cC5ncm91cElkfWApPy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCcpXG4gICAgaWYgKGdyb3VwTGlzdFdhdGNoZWRDb3VudCkgZ3JvdXBMaXN0V2F0Y2hlZENvdW50LmlubmVySFRNTCA9IGh0bWxcbn1cblxuZnVuY3Rpb24gcGxheWVkUnVudGltZUNvbnRyaWJ1dGlvbihpdGVtOiBQcmV2aWV3SXRlbSwgcGxheWVkOiBib29sZWFuLCBwbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHBsYXllZCA/IChpdGVtLlJ1blRpbWVUaWNrcyA/PyAwKSA6IHBsYXliYWNrUG9zaXRpb25UaWNrc1xufVxuXG5mdW5jdGlvbiBhZGp1c3RXYXRjaGVkQ291bnQoXG4gICAgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSxcbiAgICBpdGVtOiBQcmV2aWV3SXRlbSxcbiAgICB3YXNQbGF5ZWQ6IGJvb2xlYW4sXG4gICAgaXNQbGF5ZWQ6IGJvb2xlYW4sXG4gICAgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXIsXG4gICAgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXJcbik6IHZvaWQge1xuICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50KSByZXR1cm5cbiAgICBpZiAod2FzUGxheWVkID09PSBpc1BsYXllZCkgcmV0dXJuXG5cbiAgICBjb25zdCBkZWx0YVBsYXllZENvdW50ID0gaXNQbGF5ZWQgPyAxIDogLTFcbiAgICBjb25zdCBkZWx0YVBsYXllZFJ1bnRpbWVUaWNrcyA9XG4gICAgICAgIHBsYXllZFJ1bnRpbWVDb250cmlidXRpb24oaXRlbSwgaXNQbGF5ZWQsIG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcykgLVxuICAgICAgICBwbGF5ZWRSdW50aW1lQ29udHJpYnV0aW9uKGl0ZW0sIHdhc1BsYXllZCwgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzKVxuXG4gICAgY29uc3QgdXBkYXRlZEdyb3VwID0gcHJvZ3JhbURhdGFTdG9yZS5hZGp1c3RHcm91cFdhdGNoU3RhdHMoaXRlbS5JZCwgZGVsdGFQbGF5ZWRDb3VudCwgZGVsdGFQbGF5ZWRSdW50aW1lVGlja3MpXG4gICAgaWYgKHVwZGF0ZWRHcm91cCkgdXBkYXRlV2F0Y2hlZENvdW50RG9tKHByb2dyYW1EYXRhU3RvcmUsIHVwZGF0ZWRHcm91cClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVBsYXllZFN0YXRlTG9jYWxseShwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBpdGVtSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW06IFByZXZpZXdJdGVtID0gcHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZChpdGVtSWQpXG4gICAgaWYgKCFpdGVtKSByZXR1cm5cblxuICAgIGNvbnN0IHdhc1BsYXllZCA9IGl0ZW0uVXNlckRhdGEuUGxheWVkXG4gICAgY29uc3QgaXNQbGF5ZWQgPSAhd2FzUGxheWVkXG4gICAgY29uc3Qgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzID0gaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3NcbiAgICBjb25zdCBuZXdQbGF5YmFja1Bvc2l0aW9uVGlja3MgPSBpc1BsYXllZCA/IDAgOiBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3NcblxuICAgIHByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgIC4uLml0ZW0sXG4gICAgICAgIFVzZXJEYXRhOiB7IC4uLml0ZW0uVXNlckRhdGEsIFBsYXllZDogaXNQbGF5ZWQsIFBsYXliYWNrUG9zaXRpb25UaWNrczogbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzIH1cbiAgICB9KVxuICAgIGFkanVzdFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLCBpdGVtLCB3YXNQbGF5ZWQsIGlzUGxheWVkLCBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3MsIG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcylcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFGZXRjaGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcbiAgICAgICAgRXZlbnRzLm9uKEFwaUNsaWVudCwgJ21lc3NhZ2UnLCAoX2V2ZW50LCBtZXNzYWdlOiBXZWJTb2NrZXRNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5NZXNzYWdlVHlwZSAhPT0gJ1VzZXJEYXRhQ2hhbmdlZCcpIHJldHVyblxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuRGF0YS5Vc2VySWQgIT09IEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCkpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YUxpc3Q6IFVzZXJEYXRhQ2hhbmdlZEVudHJ5W10gPSBtZXNzYWdlLkRhdGEuVXNlckRhdGFMaXN0ID8/IFtdXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVzZXJEYXRhIG9mIHVzZXJEYXRhTGlzdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW06IFByZXZpZXdJdGVtID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKHVzZXJEYXRhLkl0ZW1JZClcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB3YXNQbGF5ZWQgPSBpdGVtLlVzZXJEYXRhLlBsYXllZFxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcyA9IGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICBVc2VyRGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbS5Vc2VyRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllZDogdXNlckRhdGEuUGxheWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgSXNGYXZvcml0ZTogdXNlckRhdGEuSXNGYXZvcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogdXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVkUGVyY2VudGFnZTogdXNlckRhdGEuUGxheWVkUGVyY2VudGFnZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGFkanVzdFdhdGNoZWRDb3VudCh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIGl0ZW0sIHdhc1BsYXllZCwgdXNlckRhdGEuUGxheWVkLCBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3MsIHVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQge0xvZ0xldmVsfSBmcm9tIFwiLi4vTW9kZWxzL0xvZ0xldmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAgIHByaXZhdGUgbG9nTGV2ZWw6IExvZ0xldmVsID0gTG9nTGV2ZWwuSW5mb3JtYXRpb25cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nX3ByZWZpeDogc3RyaW5nID0gXCJbSW5QbGF5ZXJFcGlzb2RlUHJldmlld11cIikge1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMb2dMZXZlbChsZXZlbDogTG9nTGV2ZWwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dMZXZlbCA9IGxldmVsXG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA8IExvZ0xldmVsLkRlYnVnKSByZXR1cm5cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPCBMb2dMZXZlbC5FcnJvcikgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPCBMb2dMZXZlbC5JbmZvcm1hdGlvbikgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuLi9FbmRwb2ludHNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXliYWNrSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikgeyB9XG5cbiAgICBhc3luYyBwbGF5KGl0ZW1JZDogc3RyaW5nLCBzdGFydFBvc2l0aW9uVGlja3M6IG51bWJlcik6IFByb21pc2U8dm9pZCB8IFJlc3BvbnNlPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5QTEFZX01FRElBfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t0aWNrc30nLCBzdGFydFBvc2l0aW9uVGlja3MudG9TdHJpbmcoKSkpXG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwgfSlcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3Qgc3RhcnQgdGhlIHBsYXliYWNrIG9mIGFuIGl0ZW1gLCBleClcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1Byb2dyYW1EYXRhfSBmcm9tIFwiLi4vTW9kZWxzL1Byb2dyYW1EYXRhXCI7XG5pbXBvcnQge0dyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7RGVmYXVsdFBsdWdpblNldHRpbmdzLCBQbHVnaW5TZXR0aW5nc30gZnJvbSBcIi4uL01vZGVscy9QbHVnaW5TZXR0aW5nc1wiO1xuaW1wb3J0IHtEZWZhdWx0U2VydmVyU2V0dGluZ3MsIFNlcnZlclNldHRpbmdzfSBmcm9tIFwiLi4vTW9kZWxzL1NlcnZlclNldHRpbmdzXCI7XG5cbmNvbnN0IEdST1VQU19DQUNIRV9UVEwgPSA1ICogNjAgKiAxMDAwXG5cbi8vIEl0ZW0gVHlwZSBtYXBwaW5ncyBmb3IgdGhlIFR5cGVzIHNlbGVjdGFibGUgaW4gdGhlIFBsdWdpbiBDb25maWd1cmF0aW9uXG5jb25zdCBQUkVWSUVXX1RZUEVfR1JPVVBTOiBQYXJ0aWFsPFJlY29yZDxJdGVtVHlwZSwgSXRlbVR5cGVbXT4+ID0ge1xuICAgIFtJdGVtVHlwZS5TZXJpZXNdOiBbSXRlbVR5cGUuU2VyaWVzLCBJdGVtVHlwZS5TZWFzb24sIEl0ZW1UeXBlLkVwaXNvZGVdLFxuICAgIFtJdGVtVHlwZS5Cb3hTZXRdOiBbSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5QbGF5bGlzdF0sXG4gICAgW0l0ZW1UeXBlLlZpZGVvXTogW0l0ZW1UeXBlLlZpZGVvLCBJdGVtVHlwZS5Gb2xkZXJdXG59XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtRGF0YVN0b3JlIHtcbiAgICBwcml2YXRlIF9wcm9ncmFtRGF0YTogUHJvZ3JhbURhdGFcbiAgICBwcml2YXRlIF92aWV3VG9rZW46IG51bWJlciA9IDBcbiAgICBwcml2YXRlIF9ncm91cHNDYWNoZWRBdDogbnVtYmVyIHwgbnVsbCA9IG51bGxcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZU1lZGlhU291cmNlSWQ6ICcnLFxuICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogJycsXG4gICAgICAgICAgICBib3hTZXROYW1lOiAnJyxcbiAgICAgICAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICBwbHVnaW5TZXR0aW5nczogRGVmYXVsdFBsdWdpblNldHRpbmdzLFxuICAgICAgICAgICAgc2VydmVyU2V0dGluZ3M6IERlZmF1bHRTZXJ2ZXJTZXR0aW5nc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVNZWRpYVNvdXJjZUlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhY3RpdmVNZWRpYVNvdXJjZUlkKGFjdGl2ZU1lZGlhU291cmNlSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlR3JvdXBJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYWN0aXZlR3JvdXBJZChhY3RpdmVHcm91cElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZCA9IGFjdGl2ZUdyb3VwSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZUdyb3VwKCk6IEdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAuZ3JvdXBJZCA9PT0gdGhpcy5hY3RpdmVHcm91cElkKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBJdGVtVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS50eXBlXG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0eXBlKHR5cGU6IEl0ZW1UeXBlKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnR5cGUgPSB0eXBlXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib3hTZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3hTZXROYW1lKGJveFNldE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lID0gYm94U2V0TmFtZVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ3JvdXBzKCk6IEdyb3VwW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBncm91cHMoZ3JvdXBzOiBHcm91cFtdKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3VwcyA9IGdyb3Vwc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGx1Z2luU2V0dGluZ3MoKTogUGx1Z2luU2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEucGx1Z2luU2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsdWdpblNldHRpbmdzKHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5wbHVnaW5TZXR0aW5ncyA9IHNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZXJ2ZXJTZXR0aW5ncygpOiBTZXJ2ZXJTZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5zZXJ2ZXJTZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmVyU2V0dGluZ3Moc2V0dGluZ3M6IFNlcnZlclNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnNlcnZlclNldHRpbmdzID0gc2V0dGluZ3NcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG1hcmtHcm91cHNGZXRjaGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ncm91cHNDYWNoZWRBdCA9IERhdGUubm93KClcbiAgICB9XG5cbiAgICBwdWJsaWMgaW52YWxpZGF0ZUdyb3Vwc0NhY2hlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ncm91cHNDYWNoZWRBdCA9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzR3JvdXBzQ2FjaGVFeHBpcmVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPT09IG51bGwgfHwgRGF0ZS5ub3coKSAtIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID4gR1JPVVBTX0NBQ0hFX1RUTFxuICAgIH1cblxuICAgIHB1YmxpYyBpc1R5cGVBbGxvd2VkRm9yUHJldmlldyh0eXBlOiBJdGVtVHlwZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxvd2VkUHJldmlld1R5cGVzLnNvbWUoY29uZmlndXJlZFR5cGUgPT4gKFBSRVZJRVdfVFlQRV9HUk9VUFNbY29uZmlndXJlZFR5cGVdID8/IFtjb25maWd1cmVkVHlwZV0pLmluY2x1ZGVzKHR5cGUpKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWxsb3dlZFByZXZpZXdUeXBlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luU2V0dGluZ3MuRW5hYmxlZEl0ZW1UeXBlc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtQnlJZChpdGVtSWQ6IHN0cmluZyk6IFByZXZpZXdJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzXG4gICAgICAgICAgICAuZmxhdE1hcChncm91cCA9PiBncm91cC5pdGVtcylcbiAgICAgICAgICAgIC5maW5kKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgcmVjb3JkTG9hZGVkSXRlbXMoZ3JvdXBJZDogc3RyaW5nLCBpdGVtczogUHJldmlld0l0ZW1bXSwgc3RhcnRJbmRleDogbnVtYmVyLCB0b3RhbFJlY29yZENvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzID0gdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzLm1hcChncm91cCA9PiB7XG4gICAgICAgICAgICBpZiAoZ3JvdXAuZ3JvdXBJZCAhPT0gZ3JvdXBJZClcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBcblxuICAgICAgICAgICAgaWYgKGdyb3VwLmxvYWRlZFN0YXJ0SW5kZXggPT09IHVuZGVmaW5lZCB8fCBncm91cC5sb2FkZWRFbmRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIGl0ZW1zLCBsb2FkZWRTdGFydEluZGV4OiBzdGFydEluZGV4LCBsb2FkZWRFbmRJbmRleDogc3RhcnRJbmRleCArIGl0ZW1zLmxlbmd0aCwgbG9hZGVkVG90YWxSZWNvcmRDb3VudDogdG90YWxSZWNvcmRDb3VudCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFydEluZGV4ID49IGdyb3VwLmxvYWRlZEVuZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIGl0ZW1zOiBbLi4uZ3JvdXAuaXRlbXMsIC4uLml0ZW1zXSwgbG9hZGVkRW5kSW5kZXg6IHN0YXJ0SW5kZXggKyBpdGVtcy5sZW5ndGgsIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ6IHRvdGFsUmVjb3JkQ291bnQgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA8IGdyb3VwLmxvYWRlZFN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgaXRlbXM6IFsuLi5pdGVtcywgLi4uZ3JvdXAuaXRlbXNdLCBsb2FkZWRTdGFydEluZGV4OiBzdGFydEluZGV4LCBsb2FkZWRUb3RhbFJlY29yZENvdW50OiB0b3RhbFJlY29yZENvdW50IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXRHcm91cFdhdGNoZWRDb3VudChncm91cElkOiBzdHJpbmcsIHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyLCBwbGF5ZWRSdW50aW1lVGlja3M6IG51bWJlciwgdG90YWxSdW50aW1lVGlja3M6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuZ3JvdXBzLm1hcChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXBJZCA/IHsgLi4uZywgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudCwgcGxheWVkUnVudGltZVRpY2tzLCB0b3RhbFJ1bnRpbWVUaWNrcyB9IDogZylcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRqdXN0R3JvdXBXYXRjaFN0YXRzKGl0ZW1JZDogc3RyaW5nLCBkZWx0YVBsYXllZENvdW50OiBudW1iZXIsIGRlbHRhUGxheWVkUnVudGltZVRpY2tzOiBudW1iZXIpOiBHcm91cCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cHMuZmluZChnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpXG4gICAgICAgIGlmICghZ3JvdXApIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgICBjb25zdCB1cGRhdGVkR3JvdXA6IEdyb3VwID0ge1xuICAgICAgICAgICAgLi4uZ3JvdXAsXG4gICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGdyb3VwLnBsYXllZEl0ZW1Db3VudCArIGRlbHRhUGxheWVkQ291bnQsXG4gICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UID8gVU5LTk9XTl9XQVRDSEVEX0NPVU5UIDogZ3JvdXAucGxheWVkUnVudGltZVRpY2tzICsgZGVsdGFQbGF5ZWRSdW50aW1lVGlja3NcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuZ3JvdXBzLm1hcChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXAuZ3JvdXBJZCA/IHVwZGF0ZWRHcm91cCA6IGcpXG4gICAgICAgIHJldHVybiB1cGRhdGVkR3JvdXBcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlSXRlbShpdGVtVG9VcGRhdGU6IFByZXZpZXdJdGVtKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGdyb3VwID0+XG4gICAgICAgICAgICBncm91cC5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbVRvVXBkYXRlLklkKVxuICAgICAgICAgICAgICAgID8geyAuLi5ncm91cCwgaXRlbXM6IGdyb3VwLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1Ub1VwZGF0ZS5JZCA/IGl0ZW1Ub1VwZGF0ZSA6IGl0ZW0pIH1cbiAgICAgICAgICAgICAgICA6IGdyb3VwXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbmV2ZXIgdGhlIHBvcHVwIHN3aXRjaGVzIHdoYXQgaXQncyBkaXNwbGF5aW5nIChvcGVuaW5nLCBzZWxlY3RpbmcgYSBncm91cCwgZ29pbmcgYmFjayB0byB0aGUgZ3JvdXAgbGlzdClcbiAgICBwdWJsaWMgYmVnaW5OZXdWaWV3KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiArK3RoaXMuX3ZpZXdUb2tlblxuICAgIH1cblxuICAgIHB1YmxpYyBpc0N1cnJlbnRWaWV3KHRva2VuOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRva2VuID09PSB0aGlzLl92aWV3VG9rZW5cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBjdXJyZW50Vmlld1Rva2VuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3VG9rZW5cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9TZXJ2aWNlcy9Mb2dnZXJcIjtcbmltcG9ydCB7UHJldmlld0J1dHRvblRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1ByZXZpZXdCdXR0b25UZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlXCI7XG5pbXBvcnQge1BsYXliYWNrSGFuZGxlcn0gZnJvbSBcIi4vU2VydmljZXMvUGxheWJhY2tIYW5kbGVyXCI7XG5pbXBvcnQge0xpc3RFbGVtZW50RmFjdG9yeX0gZnJvbSBcIi4vTGlzdEVsZW1lbnRGYWN0b3J5XCI7XG5pbXBvcnQge1BvcHVwVGl0bGVUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGVcIjtcbmltcG9ydCB7RGF0YUZldGNoZXJ9IGZyb20gXCIuL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7UGx1Z2luU2V0dGluZ3N9IGZyb20gXCIuL01vZGVscy9QbHVnaW5TZXR0aW5nc1wiO1xuaW1wb3J0IHtTZXJ2ZXJTZXR0aW5nc30gZnJvbSBcIi4vTW9kZWxzL1NlcnZlclNldHRpbmdzXCI7XG5pbXBvcnQge0VuZHBvaW50c30gZnJvbSBcIi4vRW5kcG9pbnRzXCI7XG5pbXBvcnQge0dyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtHcm91cEl0ZW1zUmVzdWx0fSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBJdGVtc1Jlc3VsdFwiO1xuaW1wb3J0IHthY3RpdmF0ZVNwaW5uZXIsIHNwaW5uZXJIdG1sfSBmcm9tIFwiLi9Db21wb25lbnRzL1NwaW5uZXJcIjtcbmltcG9ydCB7c2V0SXRlbU92ZXJsYXlBY3RpdmV9IGZyb20gXCIuL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHt1cGRhdGVFbmRUaW1lRGlzcGxheX0gZnJvbSBcIi4vQ29tcG9uZW50cy9JdGVtRGV0YWlsc1wiO1xuXG4vLyBsb2FkIGFuZCBpbmplY3QgaW5QbGF5ZXJQcmV2aWV3LmNzcyBpbnRvIHRoZSBwYWdlXG4vKlxuICogSW5qZWN0IHN0eWxlIHRvIGJlIHVzZWQgZm9yIHRoZSBwcmV2aWV3IHBvcHVwXG4gKi9cbmxldCBpblBsYXllclByZXZpZXdTdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbmluUGxheWVyUHJldmlld1N0eWxlLmlkID0gJ2luUGxheWVyUHJldmlld1N0eWxlJ1xuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgPSBgXG4uc2VsZWN0ZWRMaXN0SXRlbSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLnByZXZpZXdMaXN0SXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucHJldmlld0xpc3RJdGVtQ29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTUuNXZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0l0ZW1UaXRsZSAuYWN0aW9uU2hlZXRJdGVtVGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbn1cbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuLnByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlIC5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IC5pdGVtTWlzY0luZm8ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW0gIWltcG9ydGFudDtcbn1cbi5wcmV2aWV3UG9wdXAge1xuICAgIGFuaW1hdGlvbjogMTQwbXMgZWFzZS1vdXQgMHMgMSBub3JtYWwgYm90aCBydW5uaW5nIHNjYWxldXA7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgbWFyZ2luOiAwcHg7IFxuICAgIGJvdHRvbTogMS41dmg7IFxuICAgIGxlZnQ6IDUwdnc7IFxuICAgIHdpZHRoOiA0OHZ3O1xufVxuLnByZXZpZXdQb3B1cFRpdGxlIHtcbiAgICBtYXgtaGVpZ2h0OiA0dmg7XG59XG4ucHJldmlld1BvcHVwVGl0bGUgaDEuYWN0aW9uU2hlZXRUaXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlciB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbn1cbi5wcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcbn1cbi5wcmV2aWV3SXRlbUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJldmlld0l0ZW1UaXRsZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucHJldmlld0l0ZW1JbWFnZUNhcmQge1xuICAgIG1heC13aWR0aDogMzAlO1xufVxuLnByZXZpZXdJdGVtQ29udGVudFJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbkNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xufVxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbi5leHBhbmRlZCB7XG4gICAgbWF4LWhlaWdodDogbm9uZTtcbn1cbi5wcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBvcGFjaXR5OiAwLjc1O1xufVxuLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG4ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLyogTG9jayB0aGUgcG9zaXRpb24gb2YgdGhpcyBkZXRhaWxzLCBzbyB0aGF0IG5vIHRoZW1lIGNhbiBjaGFuZ2UgaXQgKi9cbi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IC5pdGVtTWlzY0luZm8ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMWVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cig2cHgpO1xuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJsdXI6aG92ZXIge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbn1cbi5wcmV2aWV3SXRlbUltYWdlQ2FyZDpob3ZlciAuYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xufVxuLnByZXZpZXdTY3JvbGxTcGlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMWVtIDA7XG59XG4ucHJldmlld1Njcm9sbFNwaW5uZXIgLmRvY3NwaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMS45NWVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxLjk1ZW0gIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5gXG5kb2N1bWVudD8uaGVhZD8uYXBwZW5kQ2hpbGQoaW5QbGF5ZXJQcmV2aWV3U3R5bGUpXG5cbi8vIGluaXQgc2VydmljZXMgYW5kIGhlbHBlcnNcbmNvbnN0IGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcigpXG5jb25zdCBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlID0gbmV3IFByb2dyYW1EYXRhU3RvcmUoKVxuY29uc3QgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIgPSBuZXcgUGxheWJhY2tIYW5kbGVyKGxvZ2dlcilcbmNvbnN0IGxpc3RFbGVtZW50RmFjdG9yeSA9IG5ldyBMaXN0RWxlbWVudEZhY3RvcnkocGxheWJhY2tIYW5kbGVyLCBwcm9ncmFtRGF0YVN0b3JlLCBsb2dnZXIpXG5cbmNvbnN0IGNvbGxlY3Rpb25zQnlJdGVtSWQgPSBuZXcgTWFwPHN0cmluZywgUHJvbWlzZTxHcm91cFtdPj4oKVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8R3JvdXBbXT4ge1xuICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLkNPTlRBSU5JTkdfQ09MTEVDVElPTlN9YFxuICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpKVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJhdzogYW55W10gPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgcmV0dXJuIHJhdy5tYXAoKGc6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGdyb3VwSWQ6IGcuR3JvdXBJZCxcbiAgICAgICAgICAgIGdyb3VwTmFtZTogZy5Hcm91cE5hbWUsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICBpbmRleE51bWJlcjogZy5JbmRleE51bWJlcixcbiAgICAgICAgICAgIHBsYXllZEl0ZW1Db3VudDogZy5QbGF5ZWRJdGVtQ291bnQsXG4gICAgICAgICAgICB0b3RhbEl0ZW1Db3VudDogZy5Ub3RhbEl0ZW1Db3VudCxcbiAgICAgICAgICAgIHBsYXllZFJ1bnRpbWVUaWNrczogZy5QbGF5ZWRSdW50aW1lVGlja3MsXG4gICAgICAgICAgICB0b3RhbFJ1bnRpbWVUaWNrczogZy5Ub3RhbFJ1bnRpbWVUaWNrc1xuICAgICAgICB9KSlcbiAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBsb2FkIENvbGxlY3Rpb25zL1BsYXlsaXN0cyBjb250YWluaW5nIHRoaXMgbW92aWVcIiwgZXgpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0NvbGxlY3Rpb25zKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTxHcm91cFtdPiB7XG4gICAgbGV0IHByb21pc2UgPSBjb2xsZWN0aW9uc0J5SXRlbUlkLmdldChpdGVtSWQpXG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UgPSBmZXRjaENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQpXG4gICAgICAgIGNvbGxlY3Rpb25zQnlJdGVtSWQuc2V0KGl0ZW1JZCwgcHJvbWlzZSlcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBFbnN1cmUgQXBpQ2xpZW50L0V2ZW50cyBleGlzdCBhbmQgdXNlciBpcyBsb2dnZWQgaW5cbiAgICBpZiAodHlwZW9mIEFwaUNsaWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIEV2ZW50cyA9PT0gJ3VuZGVmaW5lZCcgfHwgIUFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkPy4oKSkge1xuICAgICAgICBzZXRUaW1lb3V0KGluaXRpYWxpemUsIDMwMClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbmV3IERhdGFGZXRjaGVyKHByb2dyYW1EYXRhU3RvcmUpXG5cbiAgICBjb25zdCBwbHVnaW5TZXR0aW5nc1VybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLlBMVUdJTl9TRVRUSU5HU31gKVxuICAgIEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybDogcGx1Z2luU2V0dGluZ3NVcmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgLnRoZW4oKGNvbmZpZzogUGx1Z2luU2V0dGluZ3MpID0+IHtcbiAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MgPSBjb25maWdcbiAgICAgICAgICAgIGxvZ2dlci5zZXRMb2dMZXZlbChjb25maWcuTG9nTGV2ZWwpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXg6IHVua25vd24pID0+IGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IGxvYWQgcGx1Z2luIHNldHRpbmdzLCBmYWxsaW5nIGJhY2sgdG8gZGVmYXVsdHNcIiwgZXgpKVxuXG4gICAgY29uc3Qgc2VydmVyU2V0dGluZ3NVcmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5TRVJWRVJfU0VUVElOR1N9YClcbiAgICBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmw6IHNlcnZlclNldHRpbmdzVXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIC50aGVuKChjb25maWc6IFNlcnZlclNldHRpbmdzKSA9PiBwcm9ncmFtRGF0YVN0b3JlLnNlcnZlclNldHRpbmdzID0gY29uZmlnKVxuICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBsb2FkIHNlcnZlciBzZXR0aW5ncywgZmFsbGluZyBiYWNrIHRvIGRlZmF1bHRzXCIsIGV4KSlcblxuICAgIGxvZ2dlci5pbmZvKFwiSW5QbGF5ZXJFcGlzb2RlUHJldmlldyBpbml0aWFsaXplZFwiKVxufVxuaW5pdGlhbGl6ZSgpXG5cbmNvbnN0IFNFQVJDSF9DT0xMRUNUSU9OU19HUk9VUF9OQU1FID0gJ1NlYXJjaCBDb2xsZWN0aW9ucy9QbGF5bGlzdHMnXG5cbmNvbnN0IHZpZGVvUGF0aHM6IHN0cmluZ1tdID0gWycvdmlkZW8nXVxubGV0IHByZXZpb3VzUm91dGVQYXRoOiBzdHJpbmcgPSBudWxsXG5sZXQgcHJldmlld0NvbnRhaW5lckxvYWRlZDogYm9vbGVhbiA9IGZhbHNlXG5cbmxldCBwZW5kaW5nUHJlbG9hZEl0ZW1JZDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbmxldCBwZW5kaW5nUHJlbG9hZDogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsXG5sZXQgcHJlbG9hZE9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGxcbmxldCBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsID0gbnVsbFxuXG5mdW5jdGlvbiBnZXRBY3RpdmVCdXR0b25zQmFyKCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS10eXBlPVwidmlkZW8tb3NkXCJdOm5vdCguaGlkZSkgLmJ1dHRvbnMnKVxufVxuXG4vLyBXYWl0IGZvciB0aGUgT1NEJ3MgYC5idXR0b25zYCBjb250YWluZXIgdG8gZXhpc3RcbmZ1bmN0aW9uIHdhaXRGb3JCdXR0b25zQ29udGFpbmVyKG9uUmVhZHk6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAoZ2V0QWN0aXZlQnV0dG9uc0JhcigpKSB7XG4gICAgICAgIG9uUmVhZHkoKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgIGJ1dHRvbnNDb250YWluZXJPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgaWYgKCFnZXRBY3RpdmVCdXR0b25zQmFyKCkpIHJldHVyblxuICAgICAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXIgPSBudWxsXG4gICAgICAgIG9uUmVhZHkoKVxuICAgIH0pXG4gICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlld3Nob3cnLCB2aWV3U2hvd0V2ZW50SGFuZGxlcilcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHZpZXdTaG93RXZlbnRIYW5kbGVyKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKSlcblxuZnVuY3Rpb24gZ2V0QWN0aXZlUmF0aW5nQnV0dG9uKCk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gZ2V0QWN0aXZlQnV0dG9uc0JhcigpPy5xdWVyeVNlbGVjdG9yKCcuYnRuVXNlclJhdGluZy5hdXRvU2l6ZS5wYXBlci1pY29uLWJ1dHRvbi1saWdodCcpID8/IG51bGxcbn1cblxuZnVuY3Rpb24gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gZ2V0QWN0aXZlUmF0aW5nQnV0dG9uKCk/LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID8/IG51bGxcbn1cblxubGV0IGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQ6IG51bWJlciA9IC0xXG5mdW5jdGlvbiBvblZpZGVvVGltZVVwZGF0ZSh0aGlzOiBIVE1MVmlkZW9FbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgcG9zaXRpb25TZWNvbmQgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudFRpbWUpXG4gICAgaWYgKHBvc2l0aW9uU2Vjb25kID09PSBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kKSByZXR1cm5cbiAgICBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kID0gcG9zaXRpb25TZWNvbmRcblxuICAgIGNvbnN0IGl0ZW1JZCA9IGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKVxuICAgIGlmICghaXRlbUlkKSByZXR1cm5cblxuICAgIGlmIChpdGVtSWQgIT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCkge1xuICAgICAgICBjb25zdCBwcmV2aW91c0l0ZW1JZCA9IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBpdGVtSWRcbiAgICAgICAgc2V0SXRlbU92ZXJsYXlBY3RpdmUocHJldmlvdXNJdGVtSWQsIGZhbHNlKVxuICAgICAgICBzZXRJdGVtT3ZlcmxheUFjdGl2ZShpdGVtSWQsIHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSB8fCAhaXRlbS5SdW5UaW1lVGlja3MpIHJldHVyblxuXG4gICAgY29uc3QgcG9zaXRpb25UaWNrcyA9IHRoaXMuY3VycmVudFRpbWUgKiAxMF8wMDBfMDAwXG4gICAgY29uc3QgcGxheWVkUGVyY2VudGFnZSA9IChwb3NpdGlvblRpY2tzIC8gaXRlbS5SdW5UaW1lVGlja3MpICogMTAwXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YToge1xuICAgICAgICAgICAgLi4uaXRlbS5Vc2VyRGF0YSxcbiAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogcG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IHBsYXllZFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICBQbGF5ZWQ6IHBsYXllZFBlcmNlbnRhZ2UgPj0gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncy5NYXhSZXN1bWVQY3RcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG9uVmlkZW9SYXRlQ2hhbmdlKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuZW5kc0F0W2RhdGEtaXRlbS1pZF0nKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gcHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZChlbGVtZW50LmRhdGFzZXQuaXRlbUlkKVxuICAgICAgICBpZiAoaXRlbSkgdXBkYXRlRW5kVGltZURpc3BsYXkoaXRlbSlcbiAgICB9KVxufVxuXG4vLyBUcmFja3Mgd2hpY2ggQm94U2V0L1BsYXlsaXN0IGRldGFpbHMgcGFnZSAoaWYgYW55KSB3YXMgdmlzaXRlZCBpbW1lZGlhdGVseSBiZWZvcmUgbmF2aWdhdGluZyBpbnRvIHBsYXliYWNrXG5jb25zdCBERVRBSUxTX1JPVVRFX1BBVEg6IHN0cmluZyA9ICcvZGV0YWlscydcbmNvbnN0IERBU0hCT0FSRF9ST1VURV9QQVRIOiBzdHJpbmcgPSAnL2hvbWUnXG5jb25zdCBjb2xsZWN0aW9uTGlrZUl0ZW1UeXBlczogU2V0PEl0ZW1UeXBlPiA9IG5ldyBTZXQoW0l0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuUGxheWxpc3RdKVxubGV0IHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQ6IHN0cmluZyA9IG51bGxcbmNvbnN0IEVNUFRZX0dVSUQgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJ1xuXG5mdW5jdGlvbiByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNvbGxlY3Rpb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgcHJvZ3JhbURhdGFTdG9yZS5pbnZhbGlkYXRlR3JvdXBzQ2FjaGUoKVxuXG4gICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuU0VUX1NPVVJDRV9DT0xMRUNUSU9OfWBcbiAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tkZXZpY2VJZH0nLCBBcGlDbGllbnQuZGV2aWNlSWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tjb2xsZWN0aW9uSWR9JywgY29sbGVjdGlvbklkKSlcbiAgICBBcGlDbGllbnQuYWpheCh7dHlwZTogJ0dFVCcsIHVybH0pLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcmVjb3JkIHNvdXJjZSBjb2xsZWN0aW9uIGZvciBwbGF5YmFjayBzZXNzaW9uXCIsIGV4KSlcbn1cblxuZnVuY3Rpb24gY2xlYXJTb3VyY2VDb2xsZWN0aW9uKCk6IHZvaWQge1xuICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oRU1QVFlfR1VJRClcbn1cblxuZnVuY3Rpb24gY2FwdHVyZVNvdXJjZUNvbGxlY3Rpb24oY3VycmVudFJvdXRlUGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgW2N1cnJlbnRQYXRoLCBjdXJyZW50UXVlcnldID0gY3VycmVudFJvdXRlUGF0aC5zcGxpdCgnPycpXG4gICAgY29uc3QgcHJldmlvdXNQYXRoID0gcHJldmlvdXNSb3V0ZVBhdGg/LnNwbGl0KCc/JylbMF1cblxuICAgIGlmIChjdXJyZW50UGF0aCA9PT0gREFTSEJPQVJEX1JPVVRFX1BBVEgpIHtcbiAgICAgICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IG51bGxcbiAgICAgICAgY2xlYXJTb3VyY2VDb2xsZWN0aW9uKClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQYXRoID09PSBERVRBSUxTX1JPVVRFX1BBVEgpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0lkID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50UXVlcnkgPz8gJycpLmdldCgnaWQnKVxuICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxuICAgICAgICBpZiAoIWRldGFpbHNJZCkgcmV0dXJuXG5cbiAgICAgICAgQXBpQ2xpZW50LmdldEl0ZW0oQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSwgZGV0YWlsc0lkKS50aGVuKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVHlwZTogSXRlbVR5cGUgPSBJdGVtVHlwZVtpdGVtLlR5cGUgYXMgdW5rbm93biBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gY29sbGVjdGlvbkxpa2VJdGVtVHlwZXMuaGFzKGl0ZW1UeXBlKSA/IGRldGFpbHNJZCA6IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMoY3VycmVudFBhdGgpICYmIHByZXZpb3VzUGF0aCA9PT0gREVUQUlMU19ST1VURV9QQVRIKSB7XG4gICAgICAgIGlmIChwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkKVxuICAgICAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjbGVhclNvdXJjZUNvbGxlY3Rpb24oKVxuICAgIH1cblxuICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBudWxsXG59XG5cbi8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGNvbGxlY3Rpb24vcGxheWxpc3QgaWQgdGhyb3VnaCBhIHBsYXkgYWN0aW9uIG9uIGEgY2FyZCB0aGUgc2FtZSB3YXkgYXMgaGVsbHlmaW4gZG9lcyBpdCBpdHNlbGZcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qZWxseWZpbi9qZWxseWZpbi13ZWIvYmxvYi9yZWxlYXNlLTEwLjExLnovc3JjL2NvbXBvbmVudHMvc2hvcnRjdXRzLmpzI0wyMTZcbmNvbnN0IFBMQVlCQUNLX1RSSUdHRVJfQUNUSU9OUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KFsncGxheScsICdyZXN1bWUnLCAncGxheWFsbGZyb21oZXJlJ10pXG5mdW5jdGlvbiBvbkRvY3VtZW50Q2xpY2tDYXB0dXJlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLy8gT25seSBjYXB0dXJlIG5hdGl2ZSBldmVudHMgYW5kIGlnbm9yZSBhbnkgZnJvbSB0aGUgUHJldmlldyBMaXN0XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5jbG9zZXN0Py4oJyNwcmV2aWV3UG9wdXAnKSkgcmV0dXJuXG5cbiAgICBjb25zdCBhY3Rpb25FbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LmNsb3Nlc3Q/LignW2RhdGEtYWN0aW9uXScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgIGlmICghYWN0aW9uRWxlbWVudCB8fCAhUExBWUJBQ0tfVFJJR0dFUl9BQ1RJT05TLmhhcyhhY3Rpb25FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSkpIHJldHVyblxuXG4gICAgY29uc3QgY2FyZCA9IGFjdGlvbkVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtaWRdJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKCFjYXJkKSByZXR1cm5cblxuICAgIGNvbnN0IGNoaWxkT2ZDb2xsZWN0aW9uSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xsZWN0aW9uaWQnKSA/PyBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1wbGF5bGlzdGlkJylcbiAgICBpZiAoY2hpbGRPZkNvbGxlY3Rpb25JZCkge1xuICAgICAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNoaWxkT2ZDb2xsZWN0aW9uSWQpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNhcmRJdGVtVHlwZTogSXRlbVR5cGUgPSBJdGVtVHlwZVtjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgYXMgdW5rbm93biBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgY29uc3QgY2FyZElkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuICAgIGlmIChjYXJkSWQgJiYgY29sbGVjdGlvbkxpa2VJdGVtVHlwZXMuaGFzKGNhcmRJdGVtVHlwZSkpIHtcbiAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihjYXJkSWQpXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBcbiAgICBjbGVhclNvdXJjZUNvbGxlY3Rpb24oKVxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkRvY3VtZW50Q2xpY2tDYXB0dXJlLCB0cnVlKVxuXG5mdW5jdGlvbiB2aWV3U2hvd0V2ZW50SGFuZGxlcigpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50Um91dGVQYXRoOiBzdHJpbmcgPSBnZXRMb2NhdGlvblBhdGgoKVxuXG4gICAgZnVuY3Rpb24gZ2V0TG9jYXRpb25QYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxuICAgICAgICBjb25zdCBjdXJyZW50Um91dGVJbmRleDogbnVtYmVyID0gbG9jYXRpb24ubGFzdEluZGV4T2YoJy8nKVxuICAgICAgICByZXR1cm4gbG9jYXRpb24uc3Vic3RyaW5nKGN1cnJlbnRSb3V0ZUluZGV4KVxuICAgIH1cblxuICAgIC8vIEluaXRpYWwgYXR0ZW1wdCB0byBsb2FkIHRoZSB2aWRlbyB2aWV3IG9yIHNjaGVkdWxlIHJldHJpZXMuXG4gICAgY2FwdHVyZVNvdXJjZUNvbGxlY3Rpb24oY3VycmVudFJvdXRlUGF0aClcbiAgICBhdHRlbXB0TG9hZFZpZGVvVmlldygpXG4gICAgcHJldmlvdXNSb3V0ZVBhdGggPSBjdXJyZW50Um91dGVQYXRoXG4gICAgXG4gICAgZnVuY3Rpb24gYXR0ZW1wdExvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XG4gICAgICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRSb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcHJldmlldyBjb250YWluZXIgaXMgYWxyZWFkeSBsb2FkZWQgYmVmb3JlIGxvYWRpbmdcbiAgICAgICAgICAgIGlmIChwcmV2aWV3Q29udGFpbmVyTG9hZGVkIHx8IGlzUHJldmlld0J1dHRvbkNyZWF0ZWQoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIC8vIFJlc2VydmUgaW1tZWRpYXRlbHkgc28gYSBzZWNvbmQgdmlld3Nob3cgZG9lc24ndCBxdWV1ZSBhbm90aGVyIHdhaXRcbiAgICAgICAgICAgIHByZXZpZXdDb250YWluZXJMb2FkZWQgPSB0cnVlXG4gICAgICAgICAgICB3YWl0Rm9yQnV0dG9uc0NvbnRhaW5lcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gbmF2aWdhdGVkIGJhY2sgb3V0IG9mIHRoZSBwbGF5ZXIpIHdoaWxlIHdlIHdlcmUgd2FpdGluZ1xuICAgICAgICAgICAgICAgIGlmICghdmlkZW9QYXRocy5pbmNsdWRlcyhnZXRMb2NhdGlvblBhdGgoKSkgfHwgaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpKSByZXR1cm5cbiAgICAgICAgICAgICAgICBsb2FkVmlkZW9WaWV3KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhwcmV2aW91c1JvdXRlUGF0aCkpIHtcbiAgICAgICAgICAgIHVubG9hZFZpZGVvVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiTG9hZGluZyB2aWRlbyB2aWV3XCIpXG5cbiAgICAgICAgbGV0IHByZXZpZXdCdXR0b246IFByZXZpZXdCdXR0b25UZW1wbGF0ZSB8IG51bGwgPSBudWxsXG4gICAgICAgIGxldCBwcmV2aWV3QnV0dG9uTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICAgICAgLy8gT25seSBhY3R1YWxseSBpbnNlcnRlZCBpbnRvIHRoZSBPU0Qgb25jZSB0aGUgaXRlbSdzIHR5cGUgaXMgY29uZmlybWVkIGVuYWJsZWQgLSBzZWUgcHJlbG9hZFByZXZpZXdEYXRhLlxuICAgICAgICBmdW5jdGlvbiBpbnNlcnRQcmV2aWV3QnV0dG9uKCk6IHZvaWQge1xuICAgICAgICAgICAgaWYgKHByZXZpZXdCdXR0b24pIHJldHVyblxuICAgICAgICAgICAgaWYgKCF2aWRlb1BhdGhzLmluY2x1ZGVzKGdldExvY2F0aW9uUGF0aCgpKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNCYXIgPSBnZXRBY3RpdmVCdXR0b25zQmFyKClcbiAgICAgICAgICAgIGlmICghYnV0dG9uc0Jhcikge1xuICAgICAgICAgICAgICAgIHdhaXRGb3JCdXR0b25zQ29udGFpbmVyKGluc2VydFByZXZpZXdCdXR0b24pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudCBpcyB1c2VkIGZvciBjYXN0aW5nIGZyb20gRWxlbWVudCB0byBIVE1MRWxlbWVudFxuICAgICAgICAgICAgY29uc3QgcGFyZW50OiBIVE1MRWxlbWVudCA9IGJ1dHRvbnNCYXIubGFzdEVsZW1lbnRDaGlsZC5wYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5Vc2VyUmF0aW5nXCIpKTtcbiAgICAgICAgICAgIC8vIGlmIGluZGV4IGlzIGludmFsaWQgdHJ5IHRvIHVzZSB0aGUgb2xkIHBvc2l0aW9uICh1c2VkIGluIEplbGx5ZmluIDEwLjguMTIpXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKVxuICAgICAgICAgICAgICAgIGluZGV4ID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmRJbmRleCgoY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9zZFRpbWVUZXh0XCIpKVxuXG4gICAgICAgICAgICBwcmV2aWV3QnV0dG9uID0gbmV3IFByZXZpZXdCdXR0b25UZW1wbGF0ZShwYXJlbnQsIGluZGV4KVxuICAgICAgICAgICAgcHJldmlld0J1dHRvbi5yZW5kZXIocHJldmlld0J1dHRvbkNsaWNrSGFuZGxlcilcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFZpZGVvRWxlbWVudD4oJ3ZpZGVvLmh0bWx2aWRlb3BsYXllcicpXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBvblZpZGVvVGltZVVwZGF0ZSlcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcigncmF0ZWNoYW5nZScsIG9uVmlkZW9SYXRlQ2hhbmdlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmV0Y2hQcmV2aWV3SXRlbVR5cGUgPSBhc3luYyAoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPEl0ZW1UeXBlPiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX1BSRVZJRVdfVFlQRX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9JywgQXBpQ2xpZW50LmRldmljZUlkKCkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICAgICAgICAgIGNvbnN0IHJhd1R5cGU6IHN0cmluZyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgcmV0dXJuIEl0ZW1UeXBlW3Jhd1R5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9hZEl0ZW1QcmV2aWV3RGF0YSA9IGFzeW5jIChpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8e1xuICAgICAgICAgICAgaXRlbVR5cGU6IHN0cmluZywgY29udGFpbmVyTmFtZTogc3RyaW5nIHwgbnVsbCwgZ3JvdXBzOiBHcm91cFtdLCBhY3RpdmVHcm91cElkOiBzdHJpbmcsIGFjdGl2ZUl0ZW1JbmRleDogbnVtYmVyXG4gICAgICAgIH0+ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKClcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLklURU1fUFJFVklFV19EQVRBfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCB1c2VySWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tkZXZpY2VJZH0nLCBBcGlDbGllbnQuZGV2aWNlSWQoKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpKVxuICAgICAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiByYXcuSXRlbVR5cGUsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyTmFtZTogcmF3LkNvbnRhaW5lck5hbWUsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiByYXcuR3JvdXBzLm1hcCgoZzogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZTogZy5Hcm91cE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHBsYXllZEl0ZW1Db3VudDogZy5QbGF5ZWRJdGVtQ291bnQsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbUNvdW50OiBnLlRvdGFsSXRlbUNvdW50LFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IGcuUGxheWVkUnVudGltZVRpY2tzLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbFJ1bnRpbWVUaWNrczogZy5Ub3RhbFJ1bnRpbWVUaWNrc1xuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkOiByYXcuQWN0aXZlR3JvdXBJZCxcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtSW5kZXg6IHJhdy5BY3RpdmVJdGVtSW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRHcm91cEl0ZW1zID0gYXN5bmMgKGdyb3VwSWQ6IHN0cmluZywgc3RhcnRJbmRleDogbnVtYmVyID0gMCwgbGltaXQ6IG51bWJlciA9IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplKTogUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5HUk9VUF9JVEVNU31gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7Z3JvdXBJZH0nLCBncm91cElkKSxcbiAgICAgICAgICAgICAgICB7IHN0YXJ0SW5kZXgsIGxpbWl0IH0pXG4gICAgICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogR3JvdXBJdGVtc1Jlc3VsdCA9IHsgaXRlbXM6IHJhdy5JdGVtcywgdG90YWxSZWNvcmRDb3VudDogcmF3LlRvdGFsUmVjb3JkQ291bnQgfVxuXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnJlY29yZExvYWRlZEl0ZW1zKGdyb3VwSWQsIHJlc3VsdC5pdGVtcywgc3RhcnRJbmRleCwgcmVzdWx0LnRvdGFsUmVjb3JkQ291bnQpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHByZWxvYWRQcmV2aWV3RGF0YShpdGVtSWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmICghaXRlbUlkKSByZXR1cm5cbiAgICAgICAgICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5pc0dyb3Vwc0NhY2hlRXhwaXJlZCAmJiBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5zb21lKGcgPT4gZy5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBBbHJlYWR5IGZldGNoZWQgKGFuZCB0aGVyZWZvcmUgYWxyZWFkeSBrbm93bi1hbGxvd2VkKSBlYXJsaWVyIHRoaXMgc2Vzc2lvbiAtIGp1c3Qgc2hvdyB0aGUgYnV0dG9uLlxuICAgICAgICAgICAgICAgIGluc2VydFByZXZpZXdCdXR0b24oKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBlbmRpbmdQcmVsb2FkSXRlbUlkID09PSBpdGVtSWQpIHJldHVyblxuXG4gICAgICAgICAgICBwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9IGl0ZW1JZFxuICAgICAgICAgICAgcGVuZGluZ1ByZWxvYWQgPSAoYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpZXdUeXBlID0gYXdhaXQgZmV0Y2hQcmV2aWV3SXRlbVR5cGUoaXRlbUlkKVxuICAgICAgICAgICAgICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5pc1R5cGVBbGxvd2VkRm9yUHJldmlldyhwcmV2aWV3VHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBQcmV2aWV3IG5vdCBlbmFibGVkIGZvciBpdGVtIHR5cGUgJyR7cHJldmlld1R5cGV9Jywgc2tpcHBpbmcgYnV0dG9uIGZvciBpdGVtICR7aXRlbUlkfWApXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGluc2VydFByZXZpZXdCdXR0b24oKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpdGVtVHlwZSwgY29udGFpbmVyTmFtZSwgZ3JvdXBzLCBhY3RpdmVHcm91cElkLCBhY3RpdmVJdGVtSW5kZXggfSA9IGF3YWl0IGxvYWRJdGVtUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gZ3JvdXBzXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5tYXJrR3JvdXBzRmV0Y2hlZCgpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS50eXBlID0gSXRlbVR5cGVbaXRlbVR5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSA9IGNvbnRhaW5lck5hbWUgPz8gJydcblxuICAgICAgICAgICAgICAgIGNvbnN0IFBBR0VfU0laRSA9IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZU9mQWN0aXZlRXBpc29kZSA9IE1hdGguZmxvb3IoYWN0aXZlSXRlbUluZGV4IC8gUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgLSAxKSAqIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93TGltaXQgPSAocGFnZU9mQWN0aXZlRXBpc29kZSArIDIpICogUEFHRV9TSVpFIC0gaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXhcblxuICAgICAgICAgICAgICAgIGF3YWl0IGxvYWRHcm91cEl0ZW1zKGFjdGl2ZUdyb3VwSWQsIGluaXRpYWxXaW5kb3dTdGFydEluZGV4LCBpbml0aWFsV2luZG93TGltaXQpXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBQcmVsb2FkZWQgJHtncm91cHMubGVuZ3RofSBncm91cChzKSBmb3IgaXRlbSAke2l0ZW1JZH1gKVxuICAgICAgICAgICAgfSkoKS5jYXRjaCgoZXg6IHVua25vd24pID0+IHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBwcmVsb2FkIHByZXZpZXcgZGF0YVwiLCBleClcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkKSBwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9IG51bGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBXYWl0IHRoYXQgZGF0YS1pZCBnZXRzIHBvcHVsYXRlZCBieSBKZWxseWZpblxuICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVByZWxvYWQoKTogdm9pZCB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKClcbiAgICAgICAgICAgIGlmIChpdGVtSWQpIHtcbiAgICAgICAgICAgICAgICBwcmVsb2FkUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBnZXRBY3RpdmVSYXRpbmdCdXR0b24oKVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgcmF0aW5nIGJ1dHRvbiBpdHNlbGYgaGFzbid0IGJlZW4gY3JlYXRlZCB5ZXQgLSB3YWl0IGZvciB0aGUgT1NEIHRvIGZpbmlzaCBidWlsZGluZyBpdCwgdGhlbiByZXRyeS5cbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXRBY3RpdmVSYXRpbmdCdXR0b24oKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlciA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVQcmVsb2FkKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcbiAgICAgICAgICAgICAgICBpZiAoIWlkKSByZXR1cm5cbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlciA9IG51bGxcbiAgICAgICAgICAgICAgICBwcmVsb2FkUHJldmlld0RhdGEoaWQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLWlkJ10gfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNjaGVkdWxlUHJlbG9hZCgpXG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcHJldmlld0J1dHRvbkNsaWNrSGFuZGxlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGlmIChwcmV2aWV3QnV0dG9uTG9hZGluZykgcmV0dXJuXG4gICAgICAgICAgICBwcmV2aWV3QnV0dG9uTG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZG9QcmV2aWV3QnV0dG9uQ2xpY2soKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBvcGVuIHByZXZpZXcgcG9wdXBcIiwgZXgpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3QnV0dG9uTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkb1ByZXZpZXdCdXR0b25DbGljaygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwZXJpbWVudGFsIGFuZCB3aWxsIG1heWJlIGJlIHVzZWQgaW4gZnV0dXJlIHJlbGVhc2VzXG4gICAgICAgICAgICBjb25zdCBnZXROb3dQbGF5aW5nSXRlbUlkRnJvbVNlc3Npb24gPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuTk9XX1BMQVlJTkdfSVRFTX1gKVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCByZXNvbHZlIG5vdy1wbGF5aW5nIGl0ZW0gZnJvbSBzZXNzaW9uLCBmYWxsaW5nIGJhY2sgdG8gT1NEIHJhdGluZyBidXR0b25cIiwgZXgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dDb250YWluZXI6IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlID0gbmV3IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlKGRvY3VtZW50LmJvZHksIGRvY3VtZW50LmJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIGRpYWxvZ0NvbnRhaW5lci5yZW5kZXIoKVxuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbnRlbnRDb250YWluZXInKVxuXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKClcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gcmVzcG9uc2Ugb2YgdGhlIE9TRCdzIHByZWxvYWQgb2YgdGhpcyBzYW1lIGl0ZW0sIHdhaXQgZm9yIGl0IGluc3RlYWQgb2YgZmlyaW5nIGEgZHVwbGljYXRlIGZldGNoLlxuICAgICAgICAgICAgaWYgKHBlbmRpbmdQcmVsb2FkSXRlbUlkID09PSBpdGVtSWQgJiYgcGVuZGluZ1ByZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicHJldmlld1Njcm9sbFNwaW5uZXJcIj4ke3NwaW5uZXJIdG1sKCl9PC9kaXY+YFxuICAgICAgICAgICAgICAgIGFjdGl2YXRlU3Bpbm5lcihjb250ZW50RGl2KVxuICAgICAgICAgICAgICAgIGF3YWl0IHBlbmRpbmdQcmVsb2FkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZEdyb3VwID0gIXByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWRcbiAgICAgICAgICAgICAgICA/IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmZpbmQoZyA9PiBnLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpKVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgICAgICAgIGxldCBhY3RpdmVHcm91cElkOiBzdHJpbmdcbiAgICAgICAgICAgIGxldCBpbml0aWFsUGFnZTogR3JvdXBJdGVtc1Jlc3VsdFxuICAgICAgICAgICAgbGV0IGluaXRpYWxXaW5kb3dTdGFydEluZGV4OiBudW1iZXJcblxuICAgICAgICAgICAgaWYgKGNhY2hlZEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBPcGVuaW5nIHByZXZpZXcgcG9wdXAgZm9yIGl0ZW0gJHtpdGVtSWR9IHVzaW5nIGNhY2hlZCBncm91cCBkYXRhYClcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkID0gY2FjaGVkR3JvdXAuZ3JvdXBJZFxuICAgICAgICAgICAgICAgIGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gY2FjaGVkR3JvdXAubG9hZGVkU3RhcnRJbmRleCA/PyAwXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2UgPSB7IGl0ZW1zOiBbLi4uY2FjaGVkR3JvdXAuaXRlbXNdLCB0b3RhbFJlY29yZENvdW50OiBjYWNoZWRHcm91cC5sb2FkZWRUb3RhbFJlY29yZENvdW50ID8/IGNhY2hlZEdyb3VwLml0ZW1zLmxlbmd0aCB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgT3BlbmluZyBwcmV2aWV3IHBvcHVwIGZvciBpdGVtICR7aXRlbUlkfSwgZmV0Y2hpbmcgZ3JvdXAgZGF0YWApXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByZXZpZXdTY3JvbGxTcGlubmVyXCI+JHtzcGlubmVySHRtbCgpfTwvZGl2PmBcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoY29udGVudERpdilcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbVR5cGUsIGNvbnRhaW5lck5hbWUsIGdyb3VwcywgYWN0aXZlR3JvdXBJZDogZmV0Y2hlZEFjdGl2ZUdyb3VwSWQsIGFjdGl2ZUl0ZW1JbmRleCB9ID0gYXdhaXQgbG9hZEl0ZW1QcmV2aWV3RGF0YShpdGVtSWQpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBncm91cHNcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLm1hcmtHcm91cHNGZXRjaGVkKClcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPSBJdGVtVHlwZVtpdGVtVHlwZSBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ib3hTZXROYW1lID0gY29udGFpbmVyTmFtZSA/PyAnJ1xuICAgICAgICAgICAgICAgIGFjdGl2ZUdyb3VwSWQgPSBmZXRjaGVkQWN0aXZlR3JvdXBJZFxuXG4gICAgICAgICAgICAgICAgLy8gTG9hZCBhIDMtcGFnZSB3aW5kb3cgKHBhZ2Ugb2YgdGhlIGFjdGl2ZSBlcGlzb2RlLCBwbHVzIG9uZSBwYWdlIGJlZm9yZSBhbmQgYWZ0ZXIpXG4gICAgICAgICAgICAgICAgY29uc3QgUEFHRV9TSVpFID0gcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FcGlzb2RlUGFnZVNpemVcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlT2ZBY3RpdmVFcGlzb2RlID0gTWF0aC5mbG9vcihhY3RpdmVJdGVtSW5kZXggLyBQQUdFX1NJWkUpXG4gICAgICAgICAgICAgICAgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXggPSBNYXRoLm1heCgwLCAocGFnZU9mQWN0aXZlRXBpc29kZSAtIDEpICogUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxXaW5kb3dMaW1pdCA9IChwYWdlT2ZBY3RpdmVFcGlzb2RlICsgMikgKiBQQUdFX1NJWkUgLSBpbml0aWFsV2luZG93U3RhcnRJbmRleFxuXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2UgPSBhd2FpdCBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBpbml0aWFsV2luZG93U3RhcnRJbmRleCwgaW5pdGlhbFdpbmRvd0xpbWl0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBpdGVtSWRcbiAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCA9IGFjdGl2ZUdyb3VwSWRcblxuICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJyAvLyByZW1vdmUgdGhlIGxvYWRpbmcgc3Bpbm5lclxuICAgICAgICAgICAgY29uc3Qgdmlld1Rva2VuID0gcHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuXG4gICAgICAgICAgICAvLyBBIHN0YW5kYWxvbmUgbW92aWUgaGFzIG5vIG1lYW5pbmdmdWwgZ3JvdXAgbmFtZSBvZiBpdHMgb3duOyBhbiBpdGVtIHNvdXJjZWQgZnJvbSBhIFBsYXlsaXN0L0JveFNldFxuICAgICAgICAgICAgLy8gYWxyZWFkeSBoYXMgdGhhdCBjb2xsZWN0aW9uJ3MgcmVhbCBuYW1lLCBzbyBvbmx5IHRoZSBzdGFuZGFsb25lLW1vdmllIGNhc2UgZ2V0cyByZWxhYmVsZWQuXG4gICAgICAgICAgICBjb25zdCBpc1N0YW5kYWxvbmVNb3ZpZSA9IHByb2dyYW1EYXRhU3RvcmUudHlwZSA9PT0gSXRlbVR5cGUuTW92aWVcbiAgICAgICAgICAgIGNvbnN0IGlzU291cmNlZEZyb21Db2xsZWN0aW9uID0gcHJvZ3JhbURhdGFTdG9yZS50eXBlID09PSBJdGVtVHlwZS5QbGF5bGlzdCB8fCBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPT09IEl0ZW1UeXBlLkJveFNldFxuXG4gICAgICAgICAgICAvLyBMYWJlbCB0aGUgbW92aWUncyBvd24gZ3JvdXAgYXMgdGhlIGNvbGxlY3Rpb24gc2VhcmNoIHVwIGZyb250LCBldmVuIGJlZm9yZSBhbnkgcmVzdWx0cyBhcmUga25vd24uXG4gICAgICAgICAgICBpZiAoaXNTdGFuZGFsb25lTW92aWUgJiYgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLm1hcCgoZywgaSkgPT4gaSA9PT0gMCA/IHsgLi4uZywgZ3JvdXBOYW1lOiBTRUFSQ0hfQ09MTEVDVElPTlNfR1JPVVBfTkFNRSB9IDogZylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT25seSBzZWFyY2ggb25jZSBwZXIgZnJlc2ggZ3JvdXAtZmV0Y2ggKG5vdCBvbiBldmVyeSBwb3B1cCByZW9wZW4gd2hpbGUgY2FjaGVkIGdyb3VwcyBhbHJlYWR5IGluY2x1ZGUgdGhlIHNlYXJjaCByZXN1bHRzKS5cbiAgICAgICAgICAgIC8vIGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyBpdHNlbGYgaXMgbWVtb2l6ZWQgcGVyIGl0ZW0gZm9yIHRoZSB3aG9sZSBwYWdlIHNlc3Npb24sIHNvIGV2ZW4gdGhpcyBjYW4ndCByZS10cmlnZ2VyIHRoZVxuICAgICAgICAgICAgLy8gZXhwZW5zaXZlIGJhY2tlbmQgc2NhbiBtb3JlIHRoYW4gb25jZSBwZXIgaXRlbSwgbm8gbWF0dGVyIGhvdyBvZnRlbiB0aGUgcG9wdXAgaXMgcmVvcGVuZWQgd2hpbGUgaXQncyBwZW5kaW5nLlxuICAgICAgICAgICAgY29uc3QgaXNTZWFyY2hpbmdDb2xsZWN0aW9ucyA9IChpc1N0YW5kYWxvbmVNb3ZpZSB8fCBpc1NvdXJjZWRGcm9tQ29sbGVjdGlvbikgJiYgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnMgJiYgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICBsZXQgY29sbGVjdGlvbnNTZWFyY2hEb25lID0gIWlzU2VhcmNoaW5nQ29sbGVjdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zU2VhcmNoOiBQcm9taXNlPHZvaWQ+ID0gaXNTZWFyY2hpbmdDb2xsZWN0aW9uc1xuICAgICAgICAgICAgICAgID8gZ2V0Q29udGFpbmluZ0NvbGxlY3Rpb25zKGl0ZW1JZCkudGhlbihjb2xsZWN0aW9uR3JvdXBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2xsZWN0aW9uR3JvdXBzLmxlbmd0aCB8fCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgIT09IGl0ZW1JZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGZHcm91cCA9IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzWzBdXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4Y2x1ZGUgdGhlIGNvbGxlY3Rpb24vcGxheWxpc3QgdGhpcyBpdGVtIHdhcyBhbHJlYWR5IHBsYXllZCBmcm9tIC0gaXQncyBhbHJlYWR5IHRoZSBhY3RpdmUvZGVmYXVsdCBncm91cC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R3JvdXBzID0gY29sbGVjdGlvbkdyb3Vwcy5maWx0ZXIoZyA9PiBnLmdyb3VwSWQgIT09IHNlbGZHcm91cC5ncm91cElkKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld0dyb3Vwcy5sZW5ndGgpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IFtzZWxmR3JvdXAsIC4uLm5ld0dyb3Vwc10ubWFwKChnLCBpKSA9PiAoeyAuLi5nLCBpbmRleE51bWJlcjogaSB9KSlcbiAgICAgICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHsgY29sbGVjdGlvbnNTZWFyY2hEb25lID0gdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKClcblxuICAgICAgICAgICAgY29uc3QgY2FuU3dpdGNoR3JvdXBzID0gKCk6IGJvb2xlYW4gPT4gcHJvZ3JhbURhdGFTdG9yZS50eXBlICE9PSBJdGVtVHlwZS5Nb3ZpZSB8fCBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9uc1xuXG4gICAgICAgICAgICBjb25zdCBwb3B1cFRpdGxlOiBQb3B1cFRpdGxlVGVtcGxhdGUgPSBuZXcgUG9wdXBUaXRsZVRlbXBsYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cEZvY3VzQ29udGFpbmVyJyksIC0xLCBwcm9ncmFtRGF0YVN0b3JlKVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5yZW5kZXIoYXN5bmMgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgaWYgKCFjYW5Td2l0Y2hHcm91cHMoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUdyb3VwRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5ncm91cHMsIGNvbnRlbnREaXYsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXAuaW5kZXhOdW1iZXIsIHBvcHVwVGl0bGUsIGxvYWRHcm91cEl0ZW1zKVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwVmlld1Rva2VuID0gcHJvZ3JhbURhdGFTdG9yZS5jdXJyZW50Vmlld1Rva2VuXG5cbiAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbnNTZWFyY2hEb25lKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgncHJldmlld1Njcm9sbFNwaW5uZXInKVxuICAgICAgICAgICAgICAgIHNwaW5uZXIuaW5uZXJIVE1MID0gc3Bpbm5lckh0bWwoKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoc3Bpbm5lcilcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoc3Bpbm5lcilcblxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbGxlY3Rpb25zU2VhcmNoXG4gICAgICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYSBncm91cCB3YXMgc2VsZWN0ZWQsIG9yIHRoZSBwb3B1cCBjbG9zZWQpIHdoaWxlIHRoaXMgd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcoZ3JvdXBWaWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUdyb3VwRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5ncm91cHMsIGNvbnRlbnREaXYsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXAuaW5kZXhOdW1iZXIsIHBvcHVwVGl0bGUsIGxvYWRHcm91cEl0ZW1zKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0U3dpdGNoYWJsZShjYW5Td2l0Y2hHcm91cHMoKSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShjYW5Td2l0Y2hHcm91cHMoKSlcblxuICAgICAgICAgICAgYXdhaXQgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUxhenlJdGVtTGlzdChjb250ZW50RGl2LCAoc3RhcnRJbmRleCkgPT4gbG9hZEdyb3VwSXRlbXMoYWN0aXZlR3JvdXBJZCwgc3RhcnRJbmRleCksIHZpZXdUb2tlbiwgaW5pdGlhbFBhZ2UsIGluaXRpYWxXaW5kb3dTdGFydEluZGV4KVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRUZXh0KHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXA/Lmdyb3VwTmFtZSA/PyAnJylcbiAgICAgICAgICAgIGlmIChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKSBwb3B1cFRpdGxlLnNldFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKVxuICAgICAgICAgICAgaWYgKHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCAmJiBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwPy5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5lbnN1cmVHcm91cFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKVxuICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHBvcHVwVGl0bGUuc2V0V2F0Y2hlZENvdW50KHVwZGF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgd2F0Y2hlZCBjb3VudCBmb3IgZ3JvdXAgJHtwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwPy5ncm91cElkfWAsIGV4KSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRoZSBpdGVtIHRoYXQgaXMgY3VycmVudGx5IHBsYXlpbmdcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSBjb250ZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZExpc3RJdGVtJykgXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBmaW5kIGFjdGl2ZSBtZWRpYSBzb3VyY2UgZWxlbWVudCBpbiBwcmV2aWV3IGxpc3QuIFRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlblwiLCBwcm9ncmFtRGF0YVN0b3JlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aXZlSXRlbT8ucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdW5sb2FkVmlkZW9WaWV3KCk6IHZvaWQge1xuICAgICAgICBsb2dnZXIuZGVidWcoXCJVbmxvYWRpbmcgdmlkZW8gdmlld1wiKVxuXG4gICAgICAgIC8vIENsZWFyIG9sZCBkYXRhIGFuZCByZXNldCBwcmV2aWV3Q29udGFpbmVyTG9hZGVkIGZsYWdcbiAgICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJylcbiAgICAgICAgdmlkZW9FbGVtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgb25WaWRlb1RpbWVVcGRhdGUpXG4gICAgICAgIHZpZGVvRWxlbWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmF0ZWNoYW5nZScsIG9uVmlkZW9SYXRlQ2hhbmdlKVxuICAgICAgICBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kID0gLTFcblxuICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBudWxsXG4gICAgICAgIHBlbmRpbmdQcmVsb2FkSXRlbUlkID0gbnVsbFxuICAgICAgICBwZW5kaW5nUHJlbG9hZCA9IG51bGxcblxuICAgICAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXIgPSBudWxsXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9wdXBQcmV2aWV3QnV0dG9uJykuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQucmVtb3ZlKCkpXG5cbiAgICAgICAgcHJldmlld0NvbnRhaW5lckxvYWRlZCA9IGZhbHNlIC8vIFJlc2V0IGZsYWcgd2hlbiB1bmxvYWRpbmdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1ByZXZpZXdCdXR0b25DcmVhdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZ2V0QWN0aXZlQnV0dG9uc0JhcigpPy5xdWVyeVNlbGVjdG9yKCcjcG9wdXBQcmV2aWV3QnV0dG9uJykgIT0gbnVsbFxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=