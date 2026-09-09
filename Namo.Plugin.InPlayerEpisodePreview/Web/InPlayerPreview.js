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
        // Only takes effect while every item is force-expanded
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
    // Reveals an item's content
    expandItem(itemContainer, markSelected) {
        itemContainer.classList.remove('hide');
        if (markSelected)
            itemContainer.classList.add('selectedListItem');
        this.applyDescriptionReadMore(itemContainer);
    }
    async renderItem(item, parentDiv, positionAfterIndex) {
        const itemListElementTemplate = new ListElementTemplate_1.ListElementTemplate(parentDiv, positionAfterIndex, item, this.playbackHandler, this.programDataStore);
        itemListElementTemplate.render((e) => {
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
            this.expandItem(itemContainer, true);
            // scroll to the selected item
            itemContainer.parentElement.scrollIntoView({ block: "start" });
        });
        const itemNode = document.getElementById(`item-${item.Id}`).querySelector('.previewListItemContent');
        if (this.programDataStore.pluginSettings.ExpandAllItems) {
            this.expandItem(itemNode, item.Id === this.programDataStore.activeMediaSourceId);
        }
        else if (item.Id === this.programDataStore.activeMediaSourceId) {
            this.expandItem(itemNode, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDakIsTUFBTSxPQUFPLEdBQUcsWUFBWSxHQUFHLEVBQUU7WUFDakMsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsS0FBSyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUc7U0FDdkU7UUFDRCxPQUFPLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7S0FDdEQ7SUFFRCxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7UUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakQsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsS0FBSyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUc7S0FDdEU7SUFDRCxJQUFJLFdBQVcsSUFBSSxDQUFDLEVBQUU7UUFDbEIsTUFBTSxJQUFJLEdBQUcsU0FBUyxHQUFHLEVBQUU7UUFDM0IsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLElBQUk7S0FDckU7SUFDRCxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDaEIsTUFBTSxLQUFLLEdBQUcsVUFBVSxHQUFHLEVBQUU7UUFDN0IsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUc7S0FDakU7SUFDRCxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7UUFDakIsTUFBTSxPQUFPLEdBQUcsWUFBWSxHQUFHLEVBQUU7UUFDakMsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FB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QUU7UUFDdEMsd0JBQXdCLEdBQUcsSUFBSTtRQUUvQixjQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQywwQ0FBRSxNQUFNLEVBQUU7UUFDakQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXJGLHNCQUFzQixHQUFHLEtBQUssRUFBQyw0QkFBNEI7SUFDL0QsQ0FBQztJQUVELFNBQVMsc0JBQXNCOztRQUMzQixPQUFPLDBCQUFtQixFQUFFLDBDQUFFLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFJLElBQUk7SUFDOUUsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9CYXNlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0l0ZW1EZXRhaWxzLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1ByZXZpZXdCdXR0b25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvRmF2b3JpdGVJY29uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUXVpY2tBY3Rpb25zL1BsYXlTdGF0ZUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9TcGlubmVyLnRzIiwid2VicGFjazovLy8uL1dlYi9FbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0xpc3RFbGVtZW50RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL0V4cGFuZGVkSXRlbUxheW91dC50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL0l0ZW1UeXBlLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvTG9nTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9QbHVnaW5TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvUHJldmlld0RhdGEvV2F0Y2hQcm9ncmVzcy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1NlcnZlclNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvV2F0Y2hDb3VudERpc3BsYXlNb2RlLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9EYXRhRmV0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL1dlYi9JblBsYXllclByZXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VUZW1wbGF0ZSB7XG4gICAgLypcbiAgICAgKiB0aGUgSFRNTCBiYXNlZCBJRCBvZiB0aGUgbmV3IGdlbmVyYXRlZCBFbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBlbGVtZW50SWQ6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHByaXZhdGUgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHsgfVxuXG4gICAgcHVibGljIGdldENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb25BZnRlckluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uQWZ0ZXJJbmRleDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0RWxlbWVudElkKGVsZW1lbnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbGVtZW50SWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudElkO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuZ2V0RWxlbWVudElkKCl9YCk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IHN0cmluZztcblxuICAgIGFic3RyYWN0IHJlbmRlciguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogdm9pZDtcblxuICAgIHByb3RlY3RlZCBhZGRFbGVtZW50VG9Db250YWluZXIoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIGlmIHBvc2l0aW9uIGlzIG5lZ2F0aXZlXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpIDwgMCAmJiB0aGlzLmdldENvbnRhaW5lcigpLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5maXJzdEVsZW1lbnRDaGlsZC5iZWZvcmUodGhpcy5zdHJpbmdUb05vZGUodGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgRWxlbWVudCBpZiBjb250YWluZXIgaXMgZW1wdHlcbiAgICAgICAgaWYgKCF0aGlzLmdldENvbnRhaW5lcigpLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5pbm5lckhUTUwgPSB0aGlzLmdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5sYXN0RWxlbWVudENoaWxkXG4gICAgICAgIGlmICh0aGlzLmdldENvbnRhaW5lcigpLmNoaWxkcmVuLmxlbmd0aCA+IHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgJiYgdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSA+PSAwKVxuICAgICAgICAgICAgY2hpbGRCZWZvcmUgPSB0aGlzLmdldENvbnRhaW5lcigpLmNoaWxkcmVuW3RoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCldO1xuICAgICAgICBcbiAgICAgICAgY2hpbGRCZWZvcmUuYWZ0ZXIodGhpcy5zdHJpbmdUb05vZGUodGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKSkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBzdHJpbmdUb05vZGUodGVtcGxhdGVTdHJpbmc6IHN0cmluZyk6IE5vZGUge1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gdGVtcGxhdGVTdHJpbmc7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGRpYWxvZ0JhY2tkcm9wSWQgPSAnZGlhbG9nQmFja2Ryb3AnXG4gICAgZGlhbG9nQ29udGFpbmVySWQgPSAnZGlhbG9nQ29udGFpbmVyJ1xuICAgIHBvcHVwQ29udGVudENvbnRhaW5lcklkID0gJ3BvcHVwQ29udGVudENvbnRhaW5lcidcbiAgICBwb3B1cEZvY3VzQ29udGFpbmVySWQgPSAncG9wdXBGb2N1c0NvbnRhaW5lcidcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwcmV2aWV3UG9wdXAnKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmRpYWxvZ0JhY2tkcm9wSWR9XCIgY2xhc3M9XCJkaWFsb2dCYWNrZHJvcCBkaWFsb2dCYWNrZHJvcE9wZW5lZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZGlhbG9nQ29udGFpbmVySWR9XCIgY2xhc3M9XCJkaWFsb2dDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5wb3B1cEZvY3VzQ29udGFpbmVySWR9XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvY3VzY29udGFpbmVyIGRpYWxvZyBhY3Rpb25zaGVldC1ub3QtZnVsbHNjcmVlbiBhY3Rpb25TaGVldCBjZW50ZXJlZERpYWxvZyBvcGVuZWQgcHJldmlld1BvcHVwIGFjdGlvblNoZWV0Q29udGVudFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oaXN0b3J5PVwidHJ1ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1yZW1vdmVvbmNsb3NlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5wb3B1cENvbnRlbnRDb250YWluZXJJZH1cIiBjbGFzcz1cImFjdGlvblNoZWV0U2Nyb2xsZXIgc2Nyb2xsWSBwcmV2aWV3UG9wdXBTY3JvbGxlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmdldEVsZW1lbnRJZCgpKSlcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7cmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1dhdGNoUHJvZ3Jlc3NcIjtcbmltcG9ydCB7V2F0Y2hDb3VudERpc3BsYXlNb2RlfSBmcm9tIFwiLi4vTW9kZWxzL1dhdGNoQ291bnREaXNwbGF5TW9kZVwiO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBncm91cDogR3JvdXAsIHByaXZhdGUgaXNDdXJyZW50R3JvdXA6IGJvb2xlYW4sIHByaXZhdGUgc2hvd1dhdGNoZWRDb3VudDogYm9vbGVhbiwgcHJpdmF0ZSB3YXRjaENvdW50RGlzcGxheU1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBncm91cC0ke2dyb3VwLmdyb3VwSWR9YCk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3RJdGVtIGxpc3RJdGVtLWJ1dHRvbiBhY3Rpb25TaGVldE1lbnVJdGVtIGVtYnktYnV0dG9uIHByZXZpZXdMaXN0SXRlbVwiXG4gICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLmdyb3VwLmdyb3VwSWR9XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpc3RJdGVtIHByZXZpZXdJdGVtVGl0bGVcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiJHt0aGlzLmlzQ3VycmVudEdyb3VwID8gXCJtYXRlcmlhbC1pY29ucyBjaGVja1wiIDogXCJcIn1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uU2hlZXRJdGVtVGV4dFwiPiR7dGhpcy5ncm91cC5ncm91cE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnNob3dXYXRjaGVkQ291bnQgPyBgPGRpdiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFwiPiR7cmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sKHRoaXMuZ3JvdXAsIHRoaXMud2F0Y2hDb3VudERpc3BsYXlNb2RlKX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiBjbGlja0hhbmRsZXIoZSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXliYWNrUmF0ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxWaWRlb0VsZW1lbnQ+KCd2aWRlby5odG1sdmlkZW9wbGF5ZXInKT8ucGxheWJhY2tSYXRlIHx8IDE7XG59XG5cbmZ1bmN0aW9uIHplcm9QYWQobnVtOiBudW1iZXIsIHBsYWNlczogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgcmV0dXJuIFN0cmluZyhudW0pLnBhZFN0YXJ0KHBsYWNlcywgJzAnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEVuZFRpbWUocnVudGltZVRpY2tzOiBudW1iZXIsIHBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyBjb252ZXJ0IGZyb20gdGlja3MgKDEwMG5zIHVuaXRzKSB0byBtaWxsaXNlY29uZHNcbiAgICBydW50aW1lVGlja3MgLz0gMTAwMDA7XG4gICAgcGxheWJhY2tQb3NpdGlvblRpY2tzIC89IDEwMDAwO1xuXG4gICAgY29uc3QgcmVtYWluaW5nTXM6IG51bWJlciA9IChydW50aW1lVGlja3MgLSBwbGF5YmFja1Bvc2l0aW9uVGlja3MpIC8gZ2V0Q3VycmVudFBsYXliYWNrUmF0ZSgpO1xuXG4gICAgbGV0IHRpY2tzOiBudW1iZXIgPSBEYXRlLm5vdygpICsgcmVtYWluaW5nTXM7XG4gICAgdGlja3MgLT0gKG5ldyBEYXRlKCkpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7IC8vIGFkanVzdCBmb3IgdGltZXpvbmVcblxuICAgIGxldCBob3Vyczogc3RyaW5nID0gemVyb1BhZChNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyAzNjAwKSAlIDI0KSk7XG4gICAgbGV0IG1pbnV0ZXM6IHN0cmluZyA9IHplcm9QYWQoTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gNjApICUgNjApKTtcblxuICAgIHJldHVybiBgRW5kcyBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVuZFRpbWVEaXNwbGF5KGl0ZW06IFByZXZpZXdJdGVtKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lbmRzQXRbZGF0YS1pdGVtLWlkPVwiJHtpdGVtLklkfVwiXWApXG4gICAgaWYgKCFlbGVtZW50IHx8ICFpdGVtLlJ1blRpbWVUaWNrcykgcmV0dXJuXG5cbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gZm9ybWF0RW5kVGltZShpdGVtLlJ1blRpbWVUaWNrcywgaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpXG59XG5cbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsc1RlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBpdGVtLSR7aXRlbS5JZH1gKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfS1kZXRhaWxzXCIgY2xhc3M9XCJpdGVtTWlzY0luZm8gaXRlbU1pc2NJbmZvLXByaW1hcnkgcHJldmlld0l0ZW1EZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uUHJlbWllcmVEYXRlID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICR7KG5ldyBEYXRlKHRoaXMuaXRlbS5QcmVtaWVyZURhdGUpKS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5nZXRMb2NhbGUoKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+JHt0aGlzLmZvcm1hdFJ1blRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ29tbXVuaXR5UmF0aW5nID8gYDxkaXYgY2xhc3M9XCJzdGFyUmF0aW5nQ29udGFpbmVyIG1lZGlhSW5mb0l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBzdGFySWNvbiBzdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Db21tdW5pdHlSYXRpbmcudG9GaXhlZCgxKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtIG1lZGlhSW5mb0NyaXRpY1JhdGluZyAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmcgPj0gNjAgPyAnbWVkaWFJbmZvQ3JpdGljUmF0aW5nRnJlc2gnIDogJ21lZGlhSW5mb0NyaXRpY1JhdGluZ1JvdHRlbid9XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZHNBdCBtZWRpYUluZm9JdGVtXCIgZGF0YS1pdGVtLWlkPVwiJHt0aGlzLml0ZW0uSWR9XCI+JHtmb3JtYXRFbmRUaW1lKHRoaXMuaXRlbS5SdW5UaW1lVGlja3MsIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExvY2FsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmxhbmd1YWdlc1xuICAgICAgICAgICAgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIC8vIEB0cy1pZ25vcmUgZm9yIHVzZXJMYW5ndWFnZSAodGhpcyBhZGRzIHN1cHBvcnQgZm9yIElFKSBUT0RPOiBNb3ZlIHRvIGludGVyZmFjZVxuICAgICAgICAgICAgOiAobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9ybWF0UnVuVGltZSh0aWNrczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgLy8gZm9ybWF0IHRoZSB0aWNrcyB0byBhIHN0cmluZyB3aXRoIG1pbnV0ZXMgYW5kIGhvdXJzXG4gICAgICAgIHRpY2tzIC89IDEwMDAwOyAvLyBjb252ZXJ0IGZyb20gbWljcm9zZWNvbmRzIHRvIG1pbGxpc2Vjb25kc1xuICAgICAgICBsZXQgaG91cnM6IG51bWJlciA9IE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDM2MDApICUgMjQpO1xuICAgICAgICBsZXQgbWludXRlczogbnVtYmVyID0gTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gNjApICUgNjApO1xuICAgICAgICBsZXQgaG91cnNTdHJpbmc6IHN0cmluZyA9IGhvdXJzID4gMCA/IGAke2hvdXJzfWggYCA6ICcnO1xuICAgICAgICByZXR1cm4gYCR7aG91cnNTdHJpbmd9JHttaW51dGVzfW1gO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIlxuaW1wb3J0IHtGYXZvcml0ZUljb25UZW1wbGF0ZX0gZnJvbSBcIi4vUXVpY2tBY3Rpb25zL0Zhdm9yaXRlSWNvblRlbXBsYXRlXCJcbmltcG9ydCB7UGxheVN0YXRlSWNvblRlbXBsYXRlfSBmcm9tIFwiLi9RdWlja0FjdGlvbnMvUGxheVN0YXRlSWNvblRlbXBsYXRlXCJcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi4vU2VydmljZXMvUGxheWJhY2tIYW5kbGVyXCJcbmltcG9ydCB7SXRlbURldGFpbHNUZW1wbGF0ZX0gZnJvbSBcIi4vSXRlbURldGFpbHNcIlxuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIlxuaW1wb3J0IHt0b2dnbGVQbGF5ZWRTdGF0ZUxvY2FsbHl9IGZyb20gXCIuLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiXG5pbXBvcnQge0V4cGFuZGVkSXRlbUxheW91dH0gZnJvbSBcIi4uL01vZGVscy9FeHBhbmRlZEl0ZW1MYXlvdXRcIlxuXG4vLyBTaG93cy9oaWRlcyB0aGUgXCJzdGFydCBwbGF5YmFja1wiIG92ZXJsYXkgZm9yIGEgcmVuZGVyZWQgbGlzdCBpdGVtXG5leHBvcnQgZnVuY3Rpb24gc2V0SXRlbU92ZXJsYXlBY3RpdmUoaXRlbUlkOiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhcmRPdmVybGF5LSR7aXRlbUlkfWApPy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgaXNBY3RpdmUpXG59XG5cbmV4cG9ydCBjbGFzcyBMaXN0RWxlbWVudFRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHF1aWNrQWN0aW9uQ29udGFpbmVyOiBIVE1MRWxlbWVudFxuICAgIHByaXZhdGUgcGxheVN0YXRlSWNvbjogUGxheVN0YXRlSWNvblRlbXBsYXRlXG4gICAgcHJpdmF0ZSBmYXZvcml0ZUljb246IEZhdm9yaXRlSWNvblRlbXBsYXRlXG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSwgcHJpdmF0ZSBwbGF5YmFja0hhbmRsZXI6IFBsYXliYWNrSGFuZGxlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgaXRlbS0ke2l0ZW0uSWR9YClcblxuICAgICAgICAvLyBjcmVhdGUgdGVtcCBxdWljayBhY3Rpb24gY29udGFpbmVyXG4gICAgICAgIHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIC8vIGNyZWF0ZSBxdWljayBhY3Rpb25zXG4gICAgICAgIHRoaXMucGxheVN0YXRlSWNvbiA9IG5ldyBQbGF5U3RhdGVJY29uVGVtcGxhdGUodGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSlcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24gPSBuZXcgRmF2b3JpdGVJY29uVGVtcGxhdGUodGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciwgMCwgdGhpcy5pdGVtKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGFkZCBxdWljayBhY3Rpb25zXG4gICAgICAgIHRoaXMucGxheVN0YXRlSWNvbi5yZW5kZXIoKVxuICAgICAgICB0aGlzLmZhdm9yaXRlSWNvbi5yZW5kZXIoKVxuXG4gICAgICAgIC8vIGFkZCBpdGVtIGRldGFpbHMvaW5mb1xuICAgICAgICBjb25zdCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IGRldGFpbHM6IEl0ZW1EZXRhaWxzVGVtcGxhdGUgPSBuZXcgSXRlbURldGFpbHNUZW1wbGF0ZShkZXRhaWxzQ29udGFpbmVyLCAtMSwgdGhpcy5pdGVtKVxuICAgICAgICBkZXRhaWxzLnJlbmRlcigpXG5cbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEltYWdlU3R5bGU6IHN0cmluZyA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL0l0ZW1zLyR7dGhpcy5pdGVtLklkfS9JbWFnZXMvUHJpbWFyeT90YWc9JHt0aGlzLml0ZW0uUHJpbWFyeUltYWdlVGFnfScpYFxuXG4gICAgICAgIGNvbnN0IHNob3VsZEJsdXI6IGJvb2xlYW4gPSAhKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5Pbmx5Qmx1clVud2F0Y2hlZCAmJiB0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkKVxuXG4gICAgICAgIC8vIE9ubHkgdGFrZXMgZWZmZWN0IHdoaWxlIGV2ZXJ5IGl0ZW0gaXMgZm9yY2UtZXhwYW5kZWRcbiAgICAgICAgY29uc3QgdXNlU2lkZUJ5U2lkZUxheW91dDogYm9vbGVhbiA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FeHBhbmRBbGxJdGVtc1xuICAgICAgICAgICAgJiYgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkV4cGFuZGVkSXRlbUxheW91dCA9PT0gRXhwYW5kZWRJdGVtTGF5b3V0LlNpZGVCeVNpZGVcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIGNvbnN0IHRpdGxlUm93OiBzdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAkeyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0uSW5kZXhOdW1iZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSAhPT0gSXRlbVR5cGUuTW92aWVcbiAgICAgICAgICAgICAgICAgICAgKSA/IGA8c3Bhbj4ke3RoaXMuaXRlbS5JbmRleE51bWJlcn08L3NwYW4+YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdEl0ZW1Cb2R5IGFjdGlvbnNoZWV0TGlzdEl0ZW1Cb2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuaXRlbS5OYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgY29uc3QgaW1hZ2VDYXJkOiBzdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBvdmVyZmxvd0JhY2tkcm9wQ2FyZCBjYXJkLWhvdmVyYWJsZSBjYXJkLXdpdGh1c2VyZGF0YSBwcmV2aWV3SXRlbUltYWdlQ2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkQm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkU2NhbGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkUGFkZGVyIGNhcmRQYWRkZXItb3ZlcmZsb3dCYWNrZHJvcCBsYXp5LWhpZGRlbi1jaGlsZHJlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZEltYWdlSWNvbiBtYXRlcmlhbC1pY29ucyB0dlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInByZXZpZXdJdGVtSW1hZ2VDYXJkLSR7dGhpcy5pdGVtLklkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZEltYWdlQ29udGFpbmVyIGNhcmRDb250ZW50IGl0ZW1BY3Rpb24gbGF6eSBibHVyaGFzaGVkIGxhenktaW1hZ2UtZmFkZWluLWZhc3QgJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuQmx1clRodW1ibmFpbCAmJiBzaG91bGRCbHVyID8gJ2JsdXInIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCIke2JhY2tncm91bmRJbWFnZVN0eWxlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hQcm9ncmVzcyAmJiB0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJpbm5lckNhcmRGb290ZXIgZnVsbElubmVyQ2FyZEZvb3RlciBpbm5lckNhcmRGb290ZXJDbGVhciBpdGVtUHJvZ3Jlc3NCYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1Qcm9ncmVzc0JhckZvcmVncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoke3RoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlfSU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmRPdmVybGF5LSR7dGhpcy5pdGVtLklkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZE92ZXJsYXlDb250YWluZXIgaXRlbUFjdGlvbiAke3RoaXMuaXRlbS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPyAnaGlkZScgOiAnJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3RhcnQtaXRlbS0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5QnV0dG9uIGNhcmRPdmVybGF5QnV0dG9uLWhvdmVyIGl0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgY2FyZE92ZXJsYXlGYWItcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cInJlc3VtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNhcmRPdmVybGF5QnV0dG9uSWNvbiBjYXJkT3ZlcmxheUJ1dHRvbkljb24taG92ZXIgcGxheV9hcnJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25CbG9jazogc3RyaW5nID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkJsdXJEZXNjcmlwdGlvbiAmJiBzaG91bGRCbHVyID8gJ2JsdXInIDogJyd9XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uRGVzY3JpcHRpb24gPz8gJ2xvYWRpbmcuLi4nfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIGhpZGVcIj5TaG93IG1vcmU8L2J1dHRvbj5cbiAgICAgICAgYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgY29uc3QgY29udGVudFJvdzogc3RyaW5nID0gdXNlU2lkZUJ5U2lkZUxheW91dCA/IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHByZXZpZXdJdGVtQ29udGVudFJvd1wiPlxuICAgICAgICAgICAgICAgICR7aW1hZ2VDYXJkfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGl0bGVSb3d9XG4gICAgICAgICAgICAgICAgICAgICR7ZGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb25CbG9ja31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgIDogYFxuICAgICAgICAgICAgJHtkZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHByZXZpZXdJdGVtQ29udGVudFJvd1wiPlxuICAgICAgICAgICAgICAgICR7aW1hZ2VDYXJkfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb25CbG9ja31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3RJdGVtIGxpc3RJdGVtLWJ1dHRvbiBhY3Rpb25TaGVldE1lbnVJdGVtIGVtYnktYnV0dG9uIHByZXZpZXdMaXN0SXRlbSR7dXNlU2lkZUJ5U2lkZUxheW91dCA/ICcgcHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbS5JZH1cIj5cbiAgICAgICAgICAgICAgICAke3VzZVNpZGVCeVNpZGVMYXlvdXQgPyAnJyA6IHRpdGxlUm93fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3TGlzdEl0ZW1Db250ZW50IGhpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtjb250ZW50Um93fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYXlTdGF0ZUJ1dHRvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheVN0YXRlQnV0dG9uLSR7dGhpcy5pdGVtLklkfWApXG4gICAgICAgIHBsYXlTdGF0ZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgdG9nZ2xlUGxheWVkU3RhdGVMb2NhbGx5KHRoaXMucHJvZ3JhbURhdGFTdG9yZSwgdGhpcy5pdGVtLklkKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJylcbiAgICAgICAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSlcblxuICAgICAgICBjb25zdCBpdGVtSW1hZ2VDYXJkOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFydC1pdGVtLSR7dGhpcy5pdGVtLklkfWApXG4gICAgICAgIGl0ZW1JbWFnZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnBsYXliYWNrSGFuZGxlci5wbGF5KHRoaXMuaXRlbS5JZCwgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcykpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtyZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWx9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvV2F0Y2hQcm9ncmVzc1wiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBUaXRsZVRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3UG9wdXBUaXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicG9wdXBUaXRsZVN3aXRjaEljb25cIiBjbGFzcz1cImFjdGlvbnNoZWV0TWVudUl0ZW1JY29uIGxpc3RJdGVtSWNvbiBsaXN0SXRlbUljb24tdHJhbnNwYXJlbnQgbWF0ZXJpYWwtaWNvbnMga2V5Ym9hcmRfYmFja3NwYWNlICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5sZW5ndGggPiAxID8gJycgOiAnaGlkZSd9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImFjdGlvblNoZWV0VGl0bGVcIj48L2gxPlxuICAgICAgICAgICAgICAgICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgPyAnPGRpdiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFwiPjwvZGl2PicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lclRleHQgPSB0ZXh0XG4gICAgfVxuXG4gICAgcHVibGljIHNldFN3aXRjaGFibGUoc3dpdGNoYWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI3BvcHVwVGl0bGVTd2l0Y2hJY29uJyk/LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhc3dpdGNoYWJsZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0V2F0Y2hlZENvdW50KGdyb3VwOiBHcm91cCkge1xuICAgICAgICBjb25zdCB3YXRjaGVkQ291bnRFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgICAgICBpZiAod2F0Y2hlZENvdW50RWxlbWVudCkgd2F0Y2hlZENvdW50RWxlbWVudC5pbm5lckhUTUwgPSByZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWwoZ3JvdXAsIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5XYXRjaENvdW50RGlzcGxheU1vZGUpXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXRWaXNpYmxlKGlzVmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKVxuICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICByZW5kZXJlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgUHJldmlld0J1dHRvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwb3B1cFByZXZpZXdCdXR0b24nKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwiYXV0b1NpemUgcGFwZXItaWNvbi1idXR0b24tbGlnaHRcIiBpcz1cInBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFcGlzb2RlIFByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICA8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT5cbiAgICAgICAgICAgICAgICA8c3ZnIGlkPVwic3ZnMVwiXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNiA0XCJcbiAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJsYXllcjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdDQ3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc2NDY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMuNzU2ODY3NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyLjE2OTM2NjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjAuMjM4MjMzMDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjEuODI1NzMzNVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwicmVjdDQ3LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40NzY1OTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtIDEuMDI5MTQzNywxLjAzMjA0ODIgaCAzLjc1Mjg5OTEgdiAyLjE3MjIzOTQgbCAwLjAwNjc2LC0yLjE1NzI1OTUgelwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwicmVjdDQ3LThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40Nzc0Mjc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtIDEuODIyODYxNCwwLjIzODcxMzM2IGggMy43NTkyNTkgViAyLjQxMDEyMTEgbCAtMC4wMDY4LC0yLjE3MTQwNzc0IHpcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IGFueSA9PiBjbGlja0hhbmRsZXIoKSk7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi8uLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVJY29uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgnZmF2b3JpdGVCdXR0b24tJyArIGl0ZW0uSWQpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICAgICBpcz1cImVtYnktcmF0aW5nYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbUFjdGlvbiBwYXBlci1pY29uLWJ1dHRvbi1saWdodCBlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbT8uSWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zZXJ2ZXJpZD1cIiR7dGhpcy5pdGVtPy5TZXJ2ZXJJZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWl0ZW10eXBlPVwiRXBpc29kZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbGlrZXM9XCJcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlzZmF2b3JpdGU9XCIke3RoaXMuaXRlbT8uVXNlckRhdGE/LklzRmF2b3JpdGUgPz8gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBmYXZvcml0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi8uLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuXG5leHBvcnQgY2xhc3MgUGxheVN0YXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BsYXlTdGF0ZUJ1dHRvbi0nICsgdGhpcy5pdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXBsYXlzdGF0ZWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0/LklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuaXRlbT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGF5ZWQ9XCIke3RoaXMuaXRlbT8uVXNlckRhdGE/LlBsYXllZCA/PyBmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1hcmsgcGxheWVkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjaGVjayBwbGF5c3RhdGVidXR0b24taWNvbi0ke3RoaXMuaXRlbT8uVXNlckRhdGE/LlBsYXllZCA/IFwicGxheWVkXCIgOiBcInVucGxheWVkXCJ9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgfVxufVxuIiwiY29uc3QgU1BJTk5FUl9MQVlFUlNfSFRNTDogc3RyaW5nID0gWzEsIDIsIDMsIDRdLm1hcChsYXllciA9PlxuICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2xheWVyIG1kbC1zcGlubmVyX19sYXllci0ke2xheWVyfVwiPmAgK1xuICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUtY2xpcHBlciBtZGwtc3Bpbm5lcl9fbGVmdFwiPmAgK1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlIG1kbC1zcGlubmVyX19jaXJjbGVMZWZ0XCI+PC9kaXY+YCArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXIgbWRsLXNwaW5uZXJfX3JpZ2h0XCI+YCArXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUgbWRsLXNwaW5uZXJfX2NpcmNsZVJpZ2h0XCI+PC9kaXY+YCArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICBgPC9kaXY+YFxuKS5qb2luKCcnKVxuXG5leHBvcnQgZnVuY3Rpb24gc3Bpbm5lckh0bWwoZXh0cmFDbGFzc2VzOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8ZGl2IGRpcj1cImx0clwiIGNsYXNzPVwiZG9jc3Bpbm5lciBtZGwtc3Bpbm5lciAke2V4dHJhQ2xhc3Nlc31cIj4ke1NQSU5ORVJfTEFZRVJTX0hUTUx9PC9kaXY+YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVTcGlubmVyKGNvbnRhaW5lcjogUGFyZW50Tm9kZSk6IHZvaWQge1xuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWRsLXNwaW5uZXInKT8uY2xhc3NMaXN0LmFkZCgnbWRsU3Bpbm5lckFjdGl2ZScpXG59IiwiZXhwb3J0IGVudW0gRW5kcG9pbnRzIHtcbiAgICBCQVNFID0gXCJJblBsYXllclByZXZpZXdcIixcbiAgICBQTEFZX01FRElBID0gXCIvSXRlbXMve2l0ZW1JZH0vUGxheS97dGlja3N9XCIsXG4gICAgTk9XX1BMQVlJTkdfSVRFTSA9IFwiL05vd1BsYXlpbmdJdGVtXCIsXG4gICAgU0VSVkVSX1NFVFRJTkdTID0gXCIvU2VydmVyU2V0dGluZ3NcIixcbiAgICBJVEVNX1BSRVZJRVdfVFlQRSA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vSXRlbXMve2l0ZW1JZH0vUHJldmlld0l0ZW1UeXBlXCIsXG4gICAgSVRFTV9QUkVWSUVXX0RBVEEgPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L0l0ZW1zL3tpdGVtSWR9L1ByZXZpZXdEYXRhXCIsXG4gICAgR1JPVVBfSVRFTVMgPSBcIi9Vc2Vycy97dXNlcklkfS9Hcm91cHMve2dyb3VwSWR9L0l0ZW1zXCIsXG4gICAgR1JPVVBfV0FUQ0hFRF9DT1VOVCA9IFwiL1VzZXJzL3t1c2VySWR9L0dyb3Vwcy97Z3JvdXBJZH0vV2F0Y2hlZENvdW50XCIsXG4gICAgQ09OVEFJTklOR19DT0xMRUNUSU9OUyA9IFwiL1VzZXJzL3t1c2VySWR9L0l0ZW1zL3tpdGVtSWR9L0NvbnRhaW5pbmdDb2xsZWN0aW9uc1wiLFxuICAgIFNFVF9TT1VSQ0VfQ09MTEVDVElPTiA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vU291cmNlQ29sbGVjdGlvbi97Y29sbGVjdGlvbklkfVwiLFxuICAgIFBMVUdJTl9TRVRUSU5HUyA9IFwiL1BsdWdpblNldHRpbmdzXCJcbn0iLCJpbXBvcnQge0xpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7R3JvdXAsIFVOS05PV05fV0FUQ0hFRF9DT1VOVH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge0dyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Hcm91cExpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7UG9wdXBUaXRsZVRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuL0VuZHBvaW50c1wiO1xuaW1wb3J0IHtHcm91cEl0ZW1zUmVzdWx0fSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBJdGVtc1Jlc3VsdFwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge2FjdGl2YXRlU3Bpbm5lciwgc3Bpbm5lckh0bWx9IGZyb20gXCIuL0NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IHt1cGRhdGVXYXRjaGVkQ291bnREb219IGZyb20gXCIuL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vU2VydmljZXMvTG9nZ2VyXCI7XG5cbi8vIFRoZSBiYWNrZW5kIGFscmVhZHkgcmV0dXJucyBQbGF5bGlzdHMvQm94U2V0cyBhbmQgRm9sZGVycyBpbiB0aGVpciBvd24gbWFudWFsIGl0ZW0vZGlzc3BsYXkgb3JkZXJcbi8vIHNvcnRpbmcgc2hvdWxkIG9ubHkgYXBwbHkgZm9yIHNlYXNvbi1iYXNlZCAoRXBpc29kZSkgZ3JvdXBzLCB3aGVyZSBpdCByZWZsZWN0cyBhY3R1YWwgZXBpc29kZSBvcmRlci5cbmNvbnN0IHByZXNlcnZlQmFja2VuZE9yZGVyVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5QbGF5bGlzdCwgSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5Gb2xkZXJdKVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHsgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtczogUHJldmlld0l0ZW1bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIgPSAwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBGb3IgUGxheWxpc3RzL0JveFNldHMsIHNob3cgdGhlIGFjdHVhbCBsaXN0IHBvc2l0aW9uIGluc3RlYWQgb2YgdGhlIEluZGV4TnVtYmVyIGZyb20gdGhlaXIgc2Vhc29uL2VwaXNvZGUuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcHJlc2VydmVPcmRlciA/IHsgLi4uaXRlbXNbaV0sIEluZGV4TnVtYmVyOiBvZmZzZXQgKyBpICsgMSB9IDogaXRlbXNbaV1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVySXRlbShpdGVtLCBwYXJlbnREaXYsIG9mZnNldCArIGkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIHByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXM6IFByZXZpZXdJdGVtW10sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIG9mZnNldDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcmVzZXJ2ZU9yZGVyID8geyAuLi5pdGVtc1tpXSwgSW5kZXhOdW1iZXI6IG9mZnNldCArIGkgKyAxIH0gOiBpdGVtc1tpXVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIHBhcmVudERpdiwgLTEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaG93IGEgXCJTaG93IG1vcmVcIiBidXR0b24gaWYgZGVzY3JpcHRpb24gZXhjZWVkcyBtYXggaGVpZ2h0XG4gICAgcHJpdmF0ZSBhcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbUNvbnRhaW5lcjogRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJylcbiAgICAgICAgY29uc3QgcmVhZE1vcmVCdXR0b24gPSBpdGVtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbicpXG4gICAgICAgIGlmICghZGVzY3JpcHRpb24gfHwgIXJlYWRNb3JlQnV0dG9uKSByZXR1cm5cblxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpXG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLnRleHRDb250ZW50ID0gJ1Nob3cgbW9yZSdcblxuICAgICAgICBjb25zdCBpc092ZXJmbG93aW5nID0gZGVzY3JpcHRpb24uc2Nyb2xsSGVpZ2h0ID4gZGVzY3JpcHRpb24uY2xpZW50SGVpZ2h0XG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaXNPdmVyZmxvd2luZylcbiAgICAgICAgaWYgKCFpc092ZXJmbG93aW5nKSByZXR1cm5cblxuICAgICAgICByZWFkTW9yZUJ1dHRvbi5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkID0gZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKVxuICAgICAgICAgICAgcmVhZE1vcmVCdXR0b24udGV4dENvbnRlbnQgPSBleHBhbmRlZCA/ICdTaG93IGxlc3MnIDogJ1Nob3cgbW9yZSdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldmVhbHMgYW4gaXRlbSdzIGNvbnRlbnRcbiAgICBwcml2YXRlIGV4cGFuZEl0ZW0oaXRlbUNvbnRhaW5lcjogRWxlbWVudCwgbWFya1NlbGVjdGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBpZiAobWFya1NlbGVjdGVkKSBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcbiAgICAgICAgdGhpcy5hcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbUNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByZW5kZXJJdGVtKGl0ZW06IFByZXZpZXdJdGVtLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBpdGVtTGlzdEVsZW1lbnRUZW1wbGF0ZSA9IG5ldyBMaXN0RWxlbWVudFRlbXBsYXRlKHBhcmVudERpdiwgcG9zaXRpb25BZnRlckluZGV4LCBpdGVtLCB0aGlzLnBsYXliYWNrSGFuZGxlciwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlKTtcbiAgICAgICAgaXRlbUxpc3RFbGVtZW50VGVtcGxhdGUucmVuZGVyKChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAvLyB3aGVuIGV2ZXJ5IGl0ZW0gaXMgYWxyZWFkeSBleHBhbmRlZCwgdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gdG9nZ2xlXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkV4cGFuZEFsbEl0ZW1zKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGhpZGUgaXRlbSBjb250ZW50IGZvciBhbGwgZXhpc3RpbmcgaXRlbXMgaW4gdGhlIHByZXZpZXcgbGlzdFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50XCIpLmZvckVhY2goKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyOiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tJHtpdGVtLklkfWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZEl0ZW0oaXRlbUNvbnRhaW5lciwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5vZGU6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS0ke2l0ZW0uSWR9YCkucXVlcnlTZWxlY3RvcignLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQnKTtcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FeHBhbmRBbGxJdGVtcykge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRJdGVtKGl0ZW1Ob2RlLCBpdGVtLklkID09PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbShpdGVtTm9kZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVNwaW5uZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgncHJldmlld1Njcm9sbFNwaW5uZXInKVxuICAgICAgICBzcGlubmVyLmlubmVySFRNTCA9IHNwaW5uZXJIdG1sKClcbiAgICAgICAgYWN0aXZhdGVTcGlubmVyKHNwaW5uZXIpXG4gICAgICAgIHJldHVybiBzcGlubmVyXG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgYXR0YWNoU2Nyb2xsUGFnaW5hdGlvbihcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgbG9hZFBhZ2U6IChzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4sXG4gICAgICAgIHZpZXdUb2tlbjogbnVtYmVyLFxuICAgICAgICBpbml0aWFsVG90YWxMb2FkZWQ6IG51bWJlcixcbiAgICAgICAgaW5pdGlhbFRvdGFsUmVjb3JkQ291bnQ6IG51bWJlcixcbiAgICAgICAgaW5pdGlhbExvYWRlZFN0YXJ0SW5kZXg6IG51bWJlclxuICAgICk6IHZvaWQge1xuICAgICAgICBjb25zdCBTQ1JPTExfVFJJR0dFUl9ESVNUQU5DRV9QWCA9IDIwMFxuXG4gICAgICAgIGxldCB0b3RhbExvYWRlZCA9IGluaXRpYWxUb3RhbExvYWRlZFxuICAgICAgICBsZXQgdG90YWxSZWNvcmRDb3VudCA9IGluaXRpYWxUb3RhbFJlY29yZENvdW50XG4gICAgICAgIGxldCBsb2FkZWRTdGFydEluZGV4ID0gaW5pdGlhbExvYWRlZFN0YXJ0SW5kZXhcbiAgICAgICAgbGV0IGxvYWRpbmdGb3J3YXJkID0gZmFsc2VcbiAgICAgICAgbGV0IGxvYWRpbmdCYWNrd2FyZCA9IGZhbHNlXG5cbiAgICAgICAgY29uc3QgbG9hZE5leHRQYWdlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgbG9hZGluZ0ZvcndhcmQgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCBzcGlubmVyID0gdGhpcy5jcmVhdGVTcGlubmVyRWxlbWVudCgpXG4gICAgICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoc3Bpbm5lcilcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1zLCB0b3RhbFJlY29yZENvdW50OiBuZXdUb3RhbFJlY29yZENvdW50IH0gPSBhd2FpdCBsb2FkUGFnZSh0b3RhbExvYWRlZClcbiAgICAgICAgICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtcywgcGFyZW50RGl2LCB0b3RhbExvYWRlZClcbiAgICAgICAgICAgICAgICB0b3RhbExvYWRlZCArPSBpdGVtcy5sZW5ndGhcbiAgICAgICAgICAgICAgICB0b3RhbFJlY29yZENvdW50ID0gbmV3VG90YWxSZWNvcmRDb3VudFxuXG4gICAgICAgICAgICAgICAgLy8gVGhlIG5ld2x5IGxvYWRlZCBwYWdlIG1pZ2h0IHN0aWxsIG5vdCBmaWxsIHRoZSBjb250YWluZXIsIHNvIHJlLWNoZWNrIHJpZ2h0IGF3YXkuXG4gICAgICAgICAgICAgICAgY2hlY2tTY3JvbGxQb3NpdGlvbigpXG4gICAgICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIG5leHQgcGFnZSBvZiBpdGVtcyAoc3RhcnRJbmRleCAke3RvdGFsTG9hZGVkfSlgLCBleClcbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdGb3J3YXJkID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRQcmV2aW91c1BhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBsb2FkaW5nQmFja3dhcmQgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHRCZWZvcmVTcGlubmVyID0gcGFyZW50RGl2LnNjcm9sbEhlaWdodFxuICAgICAgICAgICAgY29uc3Qgc3Bpbm5lciA9IHRoaXMuY3JlYXRlU3Bpbm5lckVsZW1lbnQoKVxuICAgICAgICAgICAgcGFyZW50RGl2Lmluc2VydEJlZm9yZShzcGlubmVyLCBwYXJlbnREaXYuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIHBhcmVudERpdi5zY3JvbGxUb3AgKz0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIHNjcm9sbEhlaWdodEJlZm9yZVNwaW5uZXJcblxuICAgICAgICAgICAgY29uc3QgcGFnZVNpemUgPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICBjb25zdCBuZXdTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgbG9hZGVkU3RhcnRJbmRleCAtIHBhZ2VTaXplKVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IGxvYWRQYWdlKG5ld1N0YXJ0SW5kZXgpXG4gICAgICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHRCZWZvcmVQcmVwZW5kID0gcGFyZW50RGl2LnNjcm9sbEhlaWdodFxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXMsIHBhcmVudERpdiwgbmV3U3RhcnRJbmRleClcbiAgICAgICAgICAgICAgICBwYXJlbnREaXYuc2Nyb2xsVG9wICs9IHBhcmVudERpdi5zY3JvbGxIZWlnaHQgLSBzY3JvbGxIZWlnaHRCZWZvcmVQcmVwZW5kXG4gICAgICAgICAgICAgICAgbG9hZGVkU3RhcnRJbmRleCA9IG5ld1N0YXJ0SW5kZXhcblxuICAgICAgICAgICAgICAgIGNoZWNrU2Nyb2xsUG9zaXRpb24oKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCBwcmV2aW91cyBwYWdlIG9mIGl0ZW1zIChzdGFydEluZGV4ICR7bmV3U3RhcnRJbmRleH0pYCwgZXgpXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5yZW1vdmUoKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nQmFja3dhcmQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tTY3JvbGxQb3NpdGlvbiA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkge1xuICAgICAgICAgICAgICAgIHBhcmVudERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbFBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZWFyQm90dG9tID0gcGFyZW50RGl2LnNjcm9sbFRvcCArIHBhcmVudERpdi5jbGllbnRIZWlnaHQgPj0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIFNDUk9MTF9UUklHR0VSX0RJU1RBTkNFX1BYXG4gICAgICAgICAgICBpZiAoIWxvYWRpbmdGb3J3YXJkICYmIHRvdGFsTG9hZGVkIDwgdG90YWxSZWNvcmRDb3VudCAmJiBuZWFyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgbG9hZE5leHRQYWdlKClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmVhclRvcCA9IHBhcmVudERpdi5zY3JvbGxUb3AgPD0gU0NST0xMX1RSSUdHRVJfRElTVEFOQ0VfUFhcbiAgICAgICAgICAgIGlmICghbG9hZGluZ0JhY2t3YXJkICYmIGxvYWRlZFN0YXJ0SW5kZXggPiAwICYmIG5lYXJUb3ApIHtcbiAgICAgICAgICAgICAgICBsb2FkUHJldmlvdXNQYWdlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudERpdi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbFBvc2l0aW9uKVxuICAgICAgICBjaGVja1Njcm9sbFBvc2l0aW9uKClcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlTGF6eUl0ZW1MaXN0KFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBsb2FkUGFnZTogKHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PixcbiAgICAgICAgdmlld1Rva2VuOiBudW1iZXIsXG4gICAgICAgIGluaXRpYWxQYWdlPzogR3JvdXBJdGVtc1Jlc3VsdCxcbiAgICAgICAgaW5pdGlhbE9mZnNldDogbnVtYmVyID0gMFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBmaXJzdFBhZ2UgPSBpbml0aWFsUGFnZSA/PyBhd2FpdCBsb2FkUGFnZSgwKVxuICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJdGVtRWxlbWVudHMoZmlyc3RQYWdlLml0ZW1zLCBwYXJlbnREaXYsIGluaXRpYWxPZmZzZXQpXG5cbiAgICAgICAgY29uc3QgdG90YWxMb2FkZWQgPSBpbml0aWFsT2Zmc2V0ICsgZmlyc3RQYWdlLml0ZW1zLmxlbmd0aFxuICAgICAgICB0aGlzLmF0dGFjaFNjcm9sbFBhZ2luYXRpb24ocGFyZW50RGl2LCBsb2FkUGFnZSwgdmlld1Rva2VuLCB0b3RhbExvYWRlZCwgZmlyc3RQYWdlLnRvdGFsUmVjb3JkQ291bnQsIGluaXRpYWxPZmZzZXQpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmZXRjaEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwSWQ6IHN0cmluZyk6IFByb21pc2U8eyBwbGF5ZWRJdGVtQ291bnQ6IG51bWJlciwgdG90YWxJdGVtQ291bnQ6IG51bWJlciwgcGxheWVkUnVudGltZVRpY2tzOiBudW1iZXIsIHRvdGFsUnVudGltZVRpY2tzOiBudW1iZXIgfT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5HUk9VUF9XQVRDSEVEX0NPVU5UfWBcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgne2dyb3VwSWR9JywgZ3JvdXBJZCkpXG4gICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGxheWVkSXRlbUNvdW50OiByYXcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgdG90YWxJdGVtQ291bnQ6IHJhdy5Ub3RhbEl0ZW1Db3VudCxcbiAgICAgICAgICAgIHBsYXllZFJ1bnRpbWVUaWNrczogcmF3LlBsYXllZFJ1bnRpbWVUaWNrcyxcbiAgICAgICAgICAgIHRvdGFsUnVudGltZVRpY2tzOiByYXcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBlbnN1cmVHcm91cFdhdGNoZWRDb3VudChncm91cDogR3JvdXApOiBQcm9taXNlPEdyb3VwPiB7XG4gICAgICAgIGlmIChncm91cC5wbGF5ZWRJdGVtQ291bnQgIT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkgcmV0dXJuIGdyb3VwXG5cbiAgICAgICAgY29uc3QgeyBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50LCBwbGF5ZWRSdW50aW1lVGlja3MsIHRvdGFsUnVudGltZVRpY2tzIH0gPSBhd2FpdCB0aGlzLmZldGNoR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXAuZ3JvdXBJZClcbiAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnNldEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwLmdyb3VwSWQsIHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQsIHBsYXllZFJ1bnRpbWVUaWNrcywgdG90YWxSdW50aW1lVGlja3MpXG4gICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50LCBwbGF5ZWRSdW50aW1lVGlja3MsIHRvdGFsUnVudGltZVRpY2tzIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlR3JvdXBFbGVtZW50cyhcbiAgICAgICAgZ3JvdXBzOiBHcm91cFtdLFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBjdXJyZW50R3JvdXBJbmRleDogbnVtYmVyLFxuICAgICAgICB0aXRsZUNvbnRhaW5lcjogUG9wdXBUaXRsZVRlbXBsYXRlLFxuICAgICAgICBsb2FkSXRlbXM6IChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PlxuICAgICk6IHZvaWQge1xuICAgICAgICBncm91cHMuc29ydCgoYSwgYikgPT4gYS5pbmRleE51bWJlciAtIGIuaW5kZXhOdW1iZXIpXG5cbiAgICAgICAgLy8gSW52YWxpZGF0ZXMgYW55IGl0ZW0gbG9hZCBzdGlsbCBpbiBwcm9ncmVzc3NcbiAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmJlZ2luTmV3VmlldygpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlKHBhcmVudERpdiwgaSwgZ3JvdXBzW2ldLCBncm91cHNbaV0uaW5kZXhOdW1iZXIgPT09IGN1cnJlbnRHcm91cEluZGV4LCB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLldhdGNoQ291bnREaXNwbGF5TW9kZSlcbiAgICAgICAgICAgIGdyb3VwLnJlbmRlcihhc3luYyAoZTogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cElkID0gZ3JvdXBzW2ldLmdyb3VwSWRcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRUZXh0KGdyb3Vwc1tpXS5ncm91cE5hbWUpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFdhdGNoZWRDb3VudChncm91cHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cHNbaV0ucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHVwZGF0ZWQgPT4gdGl0bGVDb250YWluZXIuc2V0V2F0Y2hlZENvdW50KHVwZGF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXg6IHVua25vd24pID0+IHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHdhdGNoZWQgY291bnQgZm9yIGdyb3VwICR7Z3JvdXBzW2ldLmdyb3VwSWR9YCwgZXgpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFZpc2libGUodHJ1ZSlcblxuICAgICAgICAgICAgICAgIHBhcmVudERpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdUb2tlbiA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkID0gIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0dyb3Vwc0NhY2hlRXhwaXJlZFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuZmluZChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXBzW2ldLmdyb3VwSWQpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFBhZ2U6IEdyb3VwSXRlbXNSZXN1bHQgfCB1bmRlZmluZWQgPSBjYWNoZWQ/LmxvYWRlZFN0YXJ0SW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IHsgaXRlbXM6IFsuLi5jYWNoZWQuaXRlbXNdLCB0b3RhbFJlY29yZENvdW50OiBjYWNoZWQubG9hZGVkVG90YWxSZWNvcmRDb3VudCA/PyBjYWNoZWQuaXRlbXMubGVuZ3RoIH1cbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsT2Zmc2V0ID0gY2FjaGVkPy5sb2FkZWRTdGFydEluZGV4ID8/IDBcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlTGF6eUl0ZW1MaXN0KHBhcmVudERpdiwgKHN0YXJ0SW5kZXgpID0+IGxvYWRJdGVtcyhncm91cHNbaV0uZ3JvdXBJZCwgc3RhcnRJbmRleCksIHZpZXdUb2tlbiwgaW5pdGlhbFBhZ2UsIGluaXRpYWxPZmZzZXQpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgaXRlbXMgZm9yIGdyb3VwICR7Z3JvdXBzW2ldLmdyb3VwSWR9YCwgZXgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50ICYmIGdyb3Vwc1tpXS5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHVwZGF0ZVdhdGNoZWRDb3VudERvbSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHVwZGF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCB3YXRjaGVkIGNvdW50IGZvciBncm91cCAke2dyb3Vwc1tpXS5ncm91cElkfWAsIGV4KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBlbnVtIEV4cGFuZGVkSXRlbUxheW91dCB7XG4gICAgRGVmYXVsdCA9IDAsXG4gICAgU2lkZUJ5U2lkZSA9IDEsXG59XG4iLCJleHBvcnQgZW51bSBJdGVtVHlwZSB7XG4gICAgQWdncmVnYXRlRm9sZGVyLFxuICAgIEF1ZGlvLFxuICAgIEF1ZGlvQm9vayxcbiAgICBCYXNlUGx1Z2luRm9sZGVyLFxuICAgIEJvb2ssXG4gICAgQm94U2V0LFxuICAgIENoYW5uZWwsXG4gICAgQ2hhbm5lbEZvbGRlckl0ZW0sXG4gICAgQ29sbGVjdGlvbkZvbGRlcixcbiAgICBFcGlzb2RlLFxuICAgIEZvbGRlcixcbiAgICBHZW5yZSxcbiAgICBNYW51YWxQbGF5bGlzdHNGb2xkZXIsXG4gICAgTW92aWUsXG4gICAgTGl2ZVR2Q2hhbm5lbCxcbiAgICBMaXZlVHZQcm9ncmFtLFxuICAgIE11c2ljQWxidW0sXG4gICAgTXVzaWNBcnRpc3QsXG4gICAgTXVzaWNHZW5yZSxcbiAgICBNdXNpY1ZpZGVvLFxuICAgIFBlcnNvbixcbiAgICBQaG90byxcbiAgICBQaG90b0FsYnVtLFxuICAgIFBsYXlsaXN0LFxuICAgIFBsYXlsaXN0c0ZvbGRlcixcbiAgICBQcm9ncmFtLFxuICAgIFJlY29yZGluZyxcbiAgICBTZWFzb24sXG4gICAgU2VyaWVzLFxuICAgIFN0dWRpbyxcbiAgICBUcmFpbGVyLFxuICAgIFR2Q2hhbm5lbCxcbiAgICBUdlByb2dyYW0sXG4gICAgVXNlclJvb3RGb2xkZXIsXG4gICAgVXNlclZpZXcsXG4gICAgVmlkZW8sXG4gICAgWWVhclxufSIsImV4cG9ydCBlbnVtIExvZ0xldmVsIHtcbiAgICBOb25lID0gMCxcbiAgICBFcnJvciA9IDEsXG4gICAgSW5mb3JtYXRpb24gPSAyLFxuICAgIERlYnVnID0gMyxcbn1cbiIsImltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL0l0ZW1UeXBlXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4vV2F0Y2hDb3VudERpc3BsYXlNb2RlXCI7XG5pbXBvcnQge0xvZ0xldmVsfSBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xuaW1wb3J0IHtFeHBhbmRlZEl0ZW1MYXlvdXR9IGZyb20gXCIuL0V4cGFuZGVkSXRlbUxheW91dFwiO1xuXG5leHBvcnQgdHlwZSBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICBFbmFibGVkSXRlbVR5cGVzOiBJdGVtVHlwZVtdLFxuICAgIEJsdXJEZXNjcmlwdGlvbjogYm9vbGVhbixcbiAgICBCbHVyVGh1bWJuYWlsOiBib29sZWFuLFxuICAgIEVwaXNvZGVQYWdlU2l6ZTogbnVtYmVyLFxuICAgIFNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4sXG4gICAgV2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUsXG4gICAgU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zOiBib29sZWFuLFxuICAgIE9ubHlCbHVyVW53YXRjaGVkOiBib29sZWFuLFxuICAgIFNob3dXYXRjaFByb2dyZXNzOiBib29sZWFuLFxuICAgIEV4cGFuZEFsbEl0ZW1zOiBib29sZWFuLFxuICAgIEV4cGFuZGVkSXRlbUxheW91dDogRXhwYW5kZWRJdGVtTGF5b3V0LFxuICAgIExvZ0xldmVsOiBMb2dMZXZlbCxcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRQbHVnaW5TZXR0aW5nczogUGx1Z2luU2V0dGluZ3MgPSB7XG4gICAgRW5hYmxlZEl0ZW1UeXBlczogW0l0ZW1UeXBlLlNlcmllcywgSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5Nb3ZpZSwgSXRlbVR5cGUuVmlkZW9dLFxuICAgIEJsdXJEZXNjcmlwdGlvbjogZmFsc2UsXG4gICAgQmx1clRodW1ibmFpbDogZmFsc2UsXG4gICAgRXBpc29kZVBhZ2VTaXplOiAxMCxcbiAgICBTaG93V2F0Y2hlZENvdW50OiB0cnVlLFxuICAgIFdhdGNoQ291bnREaXNwbGF5TW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlLkhvdXJzTWludXRlcyxcbiAgICBTZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnM6IHRydWUsXG4gICAgT25seUJsdXJVbndhdGNoZWQ6IGZhbHNlLFxuICAgIFNob3dXYXRjaFByb2dyZXNzOiB0cnVlLFxuICAgIEV4cGFuZEFsbEl0ZW1zOiBmYWxzZSxcbiAgICBFeHBhbmRlZEl0ZW1MYXlvdXQ6IEV4cGFuZGVkSXRlbUxheW91dC5EZWZhdWx0LFxuICAgIExvZ0xldmVsOiBMb2dMZXZlbC5JbmZvcm1hdGlvbixcbn0iLCJpbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi9QcmV2aWV3SXRlbVwiO1xuXG5leHBvcnQgdHlwZSBHcm91cCA9IHtcbiAgICBncm91cElkOiBzdHJpbmdcbiAgICBncm91cE5hbWU6IHN0cmluZ1xuICAgIGl0ZW1zOiBQcmV2aWV3SXRlbVtdXG4gICAgaW5kZXhOdW1iZXI6IG51bWJlclxuICAgIHBsYXllZEl0ZW1Db3VudDogbnVtYmVyXG4gICAgdG90YWxJdGVtQ291bnQ6IG51bWJlclxuICAgIHBsYXllZFJ1bnRpbWVUaWNrczogbnVtYmVyXG4gICAgdG90YWxSdW50aW1lVGlja3M6IG51bWJlclxuICAgIGxvYWRlZFN0YXJ0SW5kZXg/OiBudW1iZXJcbiAgICBsb2FkZWRFbmRJbmRleD86IG51bWJlclxuICAgIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ/OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IFVOS05PV05fV0FUQ0hFRF9DT1VOVCA9IC0xXG5cbmV4cG9ydCBjb25zdCBmb3JtYXRXYXRjaGVkQ291bnQgPSAocGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIpOiBzdHJpbmcgPT5cbiAgICBwbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCB8fCB0b3RhbEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UXG4gICAgICAgID8gJ+KApiB3YXRjaGVkJ1xuICAgICAgICA6IGAke3BsYXllZEl0ZW1Db3VudH0vJHt0b3RhbEl0ZW1Db3VudH0gd2F0Y2hlZGBcblxuIiwiaW1wb3J0IHtmb3JtYXRXYXRjaGVkQ291bnQsIEdyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuL0dyb3VwXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4uL1dhdGNoQ291bnREaXNwbGF5TW9kZVwiO1xuXG5jb25zdCBUSUNLU19QRVJfU0VDT05EID0gMTBfMDAwXzAwMFxuXG5jb25zdCBnZXRUaW1lU3RyaW5nID0gKHRpY2tzOiBudW1iZXIsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IHN0cmluZyA9PiB7XG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpY2tzIC8gVElDS1NfUEVSX1NFQ09ORFxuICAgIGNvbnN0IHRvdGFsTWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKVxuICAgIGNvbnN0IHRvdGFsSG91cnMgPSBNYXRoLmZsb29yKHRvdGFsTWludXRlcyAvIDYwKVxuICAgIGNvbnN0IHRvdGFsRGF5cyA9IE1hdGguZmxvb3IodG90YWxIb3VycyAvIDI0KVxuICAgIGNvbnN0IHRvdGFsTW9udGhzID0gTWF0aC5mbG9vcih0b3RhbERheXMgLyAzMClcbiAgICBjb25zdCB0b3RhbFllYXJzID0gTWF0aC5mbG9vcih0b3RhbERheXMgLyAzNjUpXG5cbiAgICBpZiAobW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkhvdXJzTWludXRlcykge1xuICAgICAgICBpZiAodG90YWxIb3VycyA+PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gdG90YWxNaW51dGVzICUgNjBcbiAgICAgICAgICAgIHJldHVybiBtaW51dGVzID4gMCA/IGAke3RvdGFsSG91cnN9aCAke21pbnV0ZXN9bWAgOiBgJHt0b3RhbEhvdXJzfWhgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdGFsTWludXRlcyA+IDAgPyBgJHt0b3RhbE1pbnV0ZXN9bWAgOiAnMG0nXG4gICAgfVxuXG4gICAgaWYgKHRvdGFsWWVhcnMgPj0gMSkge1xuICAgICAgICBjb25zdCBtb250aHMgPSBNYXRoLmZsb29yKCh0b3RhbERheXMgJSAzNjUpIC8gMzApXG4gICAgICAgIHJldHVybiBtb250aHMgPiAwID8gYCR7dG90YWxZZWFyc315ICR7bW9udGhzfW1vYCA6IGAke3RvdGFsWWVhcnN9eWBcbiAgICB9XG4gICAgaWYgKHRvdGFsTW9udGhzID49IDEpIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IHRvdGFsRGF5cyAlIDMwXG4gICAgICAgIHJldHVybiBkYXlzID4gMCA/IGAke3RvdGFsTW9udGhzfW1vICR7ZGF5c31kYCA6IGAke3RvdGFsTW9udGhzfW1vYFxuICAgIH1cbiAgICBpZiAodG90YWxEYXlzID49IDEpIHtcbiAgICAgICAgY29uc3QgaG91cnMgPSB0b3RhbEhvdXJzICUgMjRcbiAgICAgICAgcmV0dXJuIGhvdXJzID4gMCA/IGAke3RvdGFsRGF5c31kICR7aG91cnN9aGAgOiBgJHt0b3RhbERheXN9ZGBcbiAgICB9XG4gICAgaWYgKHRvdGFsSG91cnMgPj0gMSkge1xuICAgICAgICBjb25zdCBtaW51dGVzID0gdG90YWxNaW51dGVzICUgNjBcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXMgPiAwID8gYCR7dG90YWxIb3Vyc31oICR7bWludXRlc31tYCA6IGAke3RvdGFsSG91cnN9aGBcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsTWludXRlcyA+IDAgPyBgJHt0b3RhbE1pbnV0ZXN9bWAgOiAnMG0nXG59XG5cbmNvbnN0IGNsYW1wUHJvZ3Jlc3MgPSAocHJvZ3Jlc3M6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIE1hdGgucm91bmQocHJvZ3Jlc3MpKSlcblxuZXhwb3J0IGNvbnN0IGdldFdhdGNoUHJvZ3Jlc3NQZXJjZW50ID0gKGdyb3VwOiBHcm91cCwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogbnVtYmVyID0+IHtcbiAgICBpZiAobW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkNvdW50KSB7XG4gICAgICAgIGlmICghZ3JvdXAudG90YWxJdGVtQ291bnQpIHJldHVybiAwXG4gICAgICAgIHJldHVybiBjbGFtcFByb2dyZXNzKChncm91cC5wbGF5ZWRJdGVtQ291bnQgLyBncm91cC50b3RhbEl0ZW1Db3VudCkgKiAxMDApXG4gICAgfVxuXG4gICAgaWYgKCFncm91cC50b3RhbFJ1bnRpbWVUaWNrcykgcmV0dXJuIDBcbiAgICByZXR1cm4gY2xhbXBQcm9ncmVzcygoZ3JvdXAucGxheWVkUnVudGltZVRpY2tzIC8gZ3JvdXAudG90YWxSdW50aW1lVGlja3MpICogMTAwKVxufVxuXG5leHBvcnQgY29uc3QgaXNXYXRjaGVkQ291bnRVbmtub3duID0gKGdyb3VwOiBHcm91cCwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKGdyb3VwLnBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UIHx8IGdyb3VwLnRvdGFsSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpXG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgICByZXR1cm4gbW9kZSAhPT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkNvdW50XG4gICAgICAgICYmIChncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCB8fCBncm91cC50b3RhbFJ1bnRpbWVUaWNrcyA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0V2F0Y2hlZENvdW50VGV4dCA9IChncm91cDogR3JvdXAsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Db3VudClcbiAgICAgICAgcmV0dXJuIGZvcm1hdFdhdGNoZWRDb3VudChncm91cC5wbGF5ZWRJdGVtQ291bnQsIGdyb3VwLnRvdGFsSXRlbUNvdW50KVxuXG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5QZXJjZW50YWdlKVxuICAgICAgICByZXR1cm4gYCR7Z2V0V2F0Y2hQcm9ncmVzc1BlcmNlbnQoZ3JvdXAsIG1vZGUpfSVgXG5cbiAgICBjb25zdCBzYWZlVG90YWwgPSBNYXRoLm1heCgwLCBncm91cC50b3RhbFJ1bnRpbWVUaWNrcyB8fCAwKVxuICAgIGNvbnN0IHNhZmVQbGF5ZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzYWZlVG90YWwsIGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyB8fCAwKSlcbiAgICByZXR1cm4gYCR7Z2V0VGltZVN0cmluZyhzYWZlUGxheWVkLCBtb2RlKX0gLyAke2dldFRpbWVTdHJpbmcoc2FmZVRvdGFsLCBtb2RlKX1gXG59XG5cbi8vIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9uMDBiY29kci9KZWxseWZpbi1FbmhhbmNlZC9ibG9iL21haW4vSmVsbHlmaW4uUGx1Z2luLkplbGx5ZmluRW5oYW5jZWQvanMvZW5oYW5jZWQvaXRlbWRldGFpbHMvZmVhdHVyZXMtZGV0YWlscy1tZWRpYS1pbmZvLmpzXG5jb25zdCBnZXRXYXRjaFByb2dyZXNzSWNvbkh0bWwgPSAocHJvZ3Jlc3M6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogOCAvLyByYWRpdXMgPSA4XG4gICAgY29uc3Qgb2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAtIChwcm9ncmVzcyAvIDEwMCkgKiBjaXJjdW1mZXJlbmNlXG5cbiAgICBpZiAocHJvZ3Jlc3MgPj0gMTAwKSB7XG4gICAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwLjNlbTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBmbGV4LXNocmluazogMDtcIj5cbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS41IDE1LjVsLTMtMyAxLjQtMS40TDkuNSAxMi43bDUuNi01LjYgMS40IDEuNHpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8L3N2Zz5gXG4gICAgfVxuXG4gICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDAuM2VtOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGZsZXgtc2hyaW5rOiAwO1wiPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjhcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBvcGFjaXR5PVwiMC4yXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjhcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgICAgc3R5bGU9XCJzdHJva2UtZGFzaGFycmF5OiAke2NpcmN1bWZlcmVuY2V9OyBzdHJva2UtZGFzaG9mZnNldDogJHtvZmZzZXR9OyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1wiLz5cbiAgICA8L3N2Zz5gXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWwgPSAoZ3JvdXA6IEdyb3VwLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChpc1dhdGNoZWRDb3VudFVua25vd24oZ3JvdXAsIG1vZGUpKVxuICAgICAgICByZXR1cm4gYCR7Z2V0V2F0Y2hQcm9ncmVzc0ljb25IdG1sKDApfTxzcGFuIGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50VGV4dFwiPiwsLDwvc3Bhbj5gXG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IGdldFdhdGNoUHJvZ3Jlc3NQZXJjZW50KGdyb3VwLCBtb2RlKVxuICAgIHJldHVybiBgJHtnZXRXYXRjaFByb2dyZXNzSWNvbkh0bWwocHJvZ3Jlc3MpfTxzcGFuIGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50VGV4dFwiPiR7Zm9ybWF0V2F0Y2hlZENvdW50VGV4dChncm91cCwgbW9kZSl9PC9zcGFuPmBcbn1cbiIsImV4cG9ydCB0eXBlIFNlcnZlclNldHRpbmdzID0ge1xuICAgIE1pblJlc3VtZVBjdDogbnVtYmVyLCBcbiAgICBNYXhSZXN1bWVQY3Q6IG51bWJlciwgXG4gICAgTWluUmVzdW1lRHVyYXRpb25TZWNvbmRzOiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXJ2ZXJTZXR0aW5nczogU2VydmVyU2V0dGluZ3MgPSB7XG4gICAgTWluUmVzdW1lUGN0OiA1LFxuICAgIE1heFJlc3VtZVBjdDogOTAsXG4gICAgTWluUmVzdW1lRHVyYXRpb25TZWNvbmRzOiAzMDBcbn0iLCJleHBvcnQgZW51bSBXYXRjaENvdW50RGlzcGxheU1vZGUge1xuICAgIENvdW50ID0gMCxcbiAgICBIb3Vyc01pbnV0ZXMgPSAxLFxuICAgIEFsbFVuaXRzID0gMixcbiAgICBQZXJjZW50YWdlID0gMyxcbn1cbiIsImltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtyZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWx9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvV2F0Y2hQcm9ncmVzc1wiO1xuXG50eXBlIFVzZXJEYXRhQ2hhbmdlZEVudHJ5ID0ge1xuICAgIEl0ZW1JZDogc3RyaW5nXG4gICAgUGxheWVkOiBib29sZWFuXG4gICAgSXNGYXZvcml0ZTogYm9vbGVhblxuICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyXG4gICAgUGxheWVkUGVyY2VudGFnZT86IG51bWJlclxufVxuXG50eXBlIFdlYlNvY2tldE1lc3NhZ2UgPSB7XG4gICAgTWVzc2FnZVR5cGU6IHN0cmluZ1xuICAgIERhdGE6IGFueVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlV2F0Y2hlZENvdW50RG9tKHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGdyb3VwOiBHcm91cCk6IHZvaWQge1xuICAgIGNvbnN0IGh0bWwgPSByZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWwoZ3JvdXAsIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuV2F0Y2hDb3VudERpc3BsYXlNb2RlKVxuXG4gICAgaWYgKGdyb3VwLmdyb3VwSWQgPT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCkge1xuICAgICAgICBjb25zdCBwb3B1cFdhdGNoZWRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cFRpdGxlQ29udGFpbmVyJyk/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICAgICAgaWYgKHBvcHVwV2F0Y2hlZENvdW50KSBwb3B1cFdhdGNoZWRDb3VudC5pbm5lckhUTUwgPSBodG1sXG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBMaXN0V2F0Y2hlZENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGdyb3VwLSR7Z3JvdXAuZ3JvdXBJZH1gKT8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgIGlmIChncm91cExpc3RXYXRjaGVkQ291bnQpIGdyb3VwTGlzdFdhdGNoZWRDb3VudC5pbm5lckhUTUwgPSBodG1sXG59XG5cbmZ1bmN0aW9uIHBsYXllZFJ1bnRpbWVDb250cmlidXRpb24oaXRlbTogUHJldmlld0l0ZW0sIHBsYXllZDogYm9vbGVhbiwgcGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBwbGF5ZWQgPyAoaXRlbS5SdW5UaW1lVGlja3MgPz8gMCkgOiBwbGF5YmFja1Bvc2l0aW9uVGlja3Ncbn1cblxuZnVuY3Rpb24gYWRqdXN0V2F0Y2hlZENvdW50KFxuICAgIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsXG4gICAgaXRlbTogUHJldmlld0l0ZW0sXG4gICAgd2FzUGxheWVkOiBib29sZWFuLFxuICAgIGlzUGxheWVkOiBib29sZWFuLFxuICAgIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyLFxuICAgIG5ld1BsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyXG4pOiB2b2lkIHtcbiAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCkgcmV0dXJuXG4gICAgaWYgKHdhc1BsYXllZCA9PT0gaXNQbGF5ZWQpIHJldHVyblxuXG4gICAgY29uc3QgZGVsdGFQbGF5ZWRDb3VudCA9IGlzUGxheWVkID8gMSA6IC0xXG4gICAgY29uc3QgZGVsdGFQbGF5ZWRSdW50aW1lVGlja3MgPVxuICAgICAgICBwbGF5ZWRSdW50aW1lQ29udHJpYnV0aW9uKGl0ZW0sIGlzUGxheWVkLCBuZXdQbGF5YmFja1Bvc2l0aW9uVGlja3MpIC1cbiAgICAgICAgcGxheWVkUnVudGltZUNvbnRyaWJ1dGlvbihpdGVtLCB3YXNQbGF5ZWQsIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcylcblxuICAgIGNvbnN0IHVwZGF0ZWRHcm91cCA9IHByb2dyYW1EYXRhU3RvcmUuYWRqdXN0R3JvdXBXYXRjaFN0YXRzKGl0ZW0uSWQsIGRlbHRhUGxheWVkQ291bnQsIGRlbHRhUGxheWVkUnVudGltZVRpY2tzKVxuICAgIGlmICh1cGRhdGVkR3JvdXApIHVwZGF0ZVdhdGNoZWRDb3VudERvbShwcm9ncmFtRGF0YVN0b3JlLCB1cGRhdGVkR3JvdXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQbGF5ZWRTdGF0ZUxvY2FsbHkocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgaXRlbUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtOiBQcmV2aWV3SXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSkgcmV0dXJuXG5cbiAgICBjb25zdCB3YXNQbGF5ZWQgPSBpdGVtLlVzZXJEYXRhLlBsYXllZFxuICAgIGNvbnN0IGlzUGxheWVkID0gIXdhc1BsYXllZFxuICAgIGNvbnN0IG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcyA9IGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzXG4gICAgY29uc3QgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzID0gaXNQbGF5ZWQgPyAwIDogb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YTogeyAuLi5pdGVtLlVzZXJEYXRhLCBQbGF5ZWQ6IGlzUGxheWVkLCBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcyB9XG4gICAgfSlcbiAgICBhZGp1c3RXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZSwgaXRlbSwgd2FzUGxheWVkLCBpc1BsYXllZCwgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzLCBuZXdQbGF5YmFja1Bvc2l0aW9uVGlja3MpXG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhRmV0Y2hlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIEV2ZW50cy5vbihBcGlDbGllbnQsICdtZXNzYWdlJywgKF9ldmVudCwgbWVzc2FnZTogV2ViU29ja2V0TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuTWVzc2FnZVR5cGUgIT09ICdVc2VyRGF0YUNoYW5nZWQnKSByZXR1cm5cbiAgICAgICAgICAgIGlmIChtZXNzYWdlLkRhdGEuVXNlcklkICE9PSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGFMaXN0OiBVc2VyRGF0YUNoYW5nZWRFbnRyeVtdID0gbWVzc2FnZS5EYXRhLlVzZXJEYXRhTGlzdCA/PyBbXVxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGF0YSBvZiB1c2VyRGF0YUxpc3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtOiBQcmV2aWV3SXRlbSA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZCh1c2VyRGF0YS5JdGVtSWQpXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FzUGxheWVkID0gaXRlbS5Vc2VyRGF0YS5QbGF5ZWRcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3MgPSBpdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrc1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgVXNlckRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0uVXNlckRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZWQ6IHVzZXJEYXRhLlBsYXllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIElzRmF2b3JpdGU6IHVzZXJEYXRhLklzRmF2b3JpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IHVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IHVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBhZGp1c3RXYXRjaGVkQ291bnQodGhpcy5wcm9ncmFtRGF0YVN0b3JlLCBpdGVtLCB3YXNQbGF5ZWQsIHVzZXJEYXRhLlBsYXllZCwgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzLCB1c2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHtMb2dMZXZlbH0gZnJvbSBcIi4uL01vZGVscy9Mb2dMZXZlbFwiO1xuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgICBwcml2YXRlIGxvZ0xldmVsOiBMb2dMZXZlbCA9IExvZ0xldmVsLkluZm9ybWF0aW9uXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ19wcmVmaXg6IHN0cmluZyA9IFwiW0luUGxheWVyRXBpc29kZVByZXZpZXddXCIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9nTGV2ZWwobGV2ZWw6IExvZ0xldmVsKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTGV2ZWwgPSBsZXZlbFxuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPCBMb2dMZXZlbC5EZWJ1ZykgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxvZ0xldmVsIDwgTG9nTGV2ZWwuRXJyb3IpIHJldHVyblxuICAgICAgICBjb25zb2xlLmVycm9yKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxvZ0xldmVsIDwgTG9nTGV2ZWwuSW5mb3JtYXRpb24pIHJldHVyblxuICAgICAgICBjb25zb2xlLmluZm8oYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi4vRW5kcG9pbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5YmFja0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHsgfVxuXG4gICAgYXN5bmMgcGxheShpdGVtSWQ6IHN0cmluZywgc3RhcnRQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQgfCBSZXNwb25zZT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuUExBWV9NRURJQX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dGlja3N9Jywgc3RhcnRQb3NpdGlvblRpY2tzLnRvU3RyaW5nKCkpKVxuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsIH0pXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IHN0YXJ0IHRoZSBwbGF5YmFjayBvZiBhbiBpdGVtYCwgZXgpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtQcm9ncmFtRGF0YX0gZnJvbSBcIi4uL01vZGVscy9Qcm9ncmFtRGF0YVwiO1xuaW1wb3J0IHtHcm91cCwgVU5LTk9XTl9XQVRDSEVEX0NPVU5UfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge0RlZmF1bHRQbHVnaW5TZXR0aW5ncywgUGx1Z2luU2V0dGluZ3N9IGZyb20gXCIuLi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3NcIjtcbmltcG9ydCB7RGVmYXVsdFNlcnZlclNldHRpbmdzLCBTZXJ2ZXJTZXR0aW5nc30gZnJvbSBcIi4uL01vZGVscy9TZXJ2ZXJTZXR0aW5nc1wiO1xuXG5jb25zdCBHUk9VUFNfQ0FDSEVfVFRMID0gNSAqIDYwICogMTAwMFxuXG4vLyBJdGVtIFR5cGUgbWFwcGluZ3MgZm9yIHRoZSBUeXBlcyBzZWxlY3RhYmxlIGluIHRoZSBQbHVnaW4gQ29uZmlndXJhdGlvblxuY29uc3QgUFJFVklFV19UWVBFX0dST1VQUzogUGFydGlhbDxSZWNvcmQ8SXRlbVR5cGUsIEl0ZW1UeXBlW10+PiA9IHtcbiAgICBbSXRlbVR5cGUuU2VyaWVzXTogW0l0ZW1UeXBlLlNlcmllcywgSXRlbVR5cGUuU2Vhc29uLCBJdGVtVHlwZS5FcGlzb2RlXSxcbiAgICBbSXRlbVR5cGUuQm94U2V0XTogW0l0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuUGxheWxpc3RdLFxuICAgIFtJdGVtVHlwZS5WaWRlb106IFtJdGVtVHlwZS5WaWRlbywgSXRlbVR5cGUuRm9sZGVyXVxufVxuXG5leHBvcnQgY2xhc3MgUHJvZ3JhbURhdGFTdG9yZSB7XG4gICAgcHJpdmF0ZSBfcHJvZ3JhbURhdGE6IFByb2dyYW1EYXRhXG4gICAgcHJpdmF0ZSBfdmlld1Rva2VuOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBfZ3JvdXBzQ2FjaGVkQXQ6IG51bWJlciB8IG51bGwgPSBudWxsXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEgPSB7XG4gICAgICAgICAgICBhY3RpdmVNZWRpYVNvdXJjZUlkOiAnJyxcbiAgICAgICAgICAgIGFjdGl2ZUdyb3VwSWQ6ICcnLFxuICAgICAgICAgICAgYm94U2V0TmFtZTogJycsXG4gICAgICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgcGx1Z2luU2V0dGluZ3M6IERlZmF1bHRQbHVnaW5TZXR0aW5ncyxcbiAgICAgICAgICAgIHNlcnZlclNldHRpbmdzOiBEZWZhdWx0U2VydmVyU2V0dGluZ3NcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlTWVkaWFTb3VyY2VJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYWN0aXZlTWVkaWFTb3VyY2VJZChhY3RpdmVNZWRpYVNvdXJjZUlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlTWVkaWFTb3VyY2VJZCA9IGFjdGl2ZU1lZGlhU291cmNlSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZUdyb3VwSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZUdyb3VwSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZUdyb3VwSWQoYWN0aXZlR3JvdXBJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZUdyb3VwSWQgPSBhY3RpdmVHcm91cElkXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVHcm91cCgpOiBHcm91cCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwcy5maW5kKGdyb3VwID0+IGdyb3VwLmdyb3VwSWQgPT09IHRoaXMuYWN0aXZlR3JvdXBJZClcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogSXRlbVR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEudHlwZVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdHlwZSh0eXBlOiBJdGVtVHlwZSkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS50eXBlID0gdHlwZVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm94U2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYm94U2V0TmFtZVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYm94U2V0TmFtZShib3hTZXROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYm94U2V0TmFtZSA9IGJveFNldE5hbWVcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdyb3VwcygpOiBHcm91cFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3Vwc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZ3JvdXBzKGdyb3VwczogR3JvdXBbXSkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMgPSBncm91cHNcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBsdWdpblNldHRpbmdzKCk6IFBsdWdpblNldHRpbmdzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLnBsdWdpblNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbHVnaW5TZXR0aW5ncyhzZXR0aW5nczogUGx1Z2luU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEucGx1Z2luU2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VydmVyU2V0dGluZ3MoKTogU2VydmVyU2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuc2VydmVyU2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlcnZlclNldHRpbmdzKHNldHRpbmdzOiBTZXJ2ZXJTZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5zZXJ2ZXJTZXR0aW5ncyA9IHNldHRpbmdzXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBtYXJrR3JvdXBzRmV0Y2hlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPSBEYXRlLm5vdygpXG4gICAgfVxuXG4gICAgcHVibGljIGludmFsaWRhdGVHcm91cHNDYWNoZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPSBudWxsXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0dyb3Vwc0NhY2hlRXhwaXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID09PSBudWxsIHx8IERhdGUubm93KCkgLSB0aGlzLl9ncm91cHNDYWNoZWRBdCA+IEdST1VQU19DQUNIRV9UVExcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNUeXBlQWxsb3dlZEZvclByZXZpZXcodHlwZTogSXRlbVR5cGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZFByZXZpZXdUeXBlcy5zb21lKGNvbmZpZ3VyZWRUeXBlID0+IChQUkVWSUVXX1RZUEVfR1JPVVBTW2NvbmZpZ3VyZWRUeXBlXSA/PyBbY29uZmlndXJlZFR5cGVdKS5pbmNsdWRlcyh0eXBlKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFsbG93ZWRQcmV2aWV3VHlwZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpblNldHRpbmdzLkVuYWJsZWRJdGVtVHlwZXNcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXRlbUJ5SWQoaXRlbUlkOiBzdHJpbmcpOiBQcmV2aWV3SXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwc1xuICAgICAgICAgICAgLmZsYXRNYXAoZ3JvdXAgPT4gZ3JvdXAuaXRlbXMpXG4gICAgICAgICAgICAuZmluZChpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZClcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHJlY29yZExvYWRlZEl0ZW1zKGdyb3VwSWQ6IHN0cmluZywgaXRlbXM6IFByZXZpZXdJdGVtW10sIHN0YXJ0SW5kZXg6IG51bWJlciwgdG90YWxSZWNvcmRDb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3VwcyA9IHRoaXMuX3Byb2dyYW1EYXRhLmdyb3Vwcy5tYXAoZ3JvdXAgPT4ge1xuICAgICAgICAgICAgaWYgKGdyb3VwLmdyb3VwSWQgIT09IGdyb3VwSWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwXG5cbiAgICAgICAgICAgIGlmIChncm91cC5sb2FkZWRTdGFydEluZGV4ID09PSB1bmRlZmluZWQgfHwgZ3JvdXAubG9hZGVkRW5kSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBpdGVtcywgbG9hZGVkU3RhcnRJbmRleDogc3RhcnRJbmRleCwgbG9hZGVkRW5kSW5kZXg6IHN0YXJ0SW5kZXggKyBpdGVtcy5sZW5ndGgsIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ6IHRvdGFsUmVjb3JkQ291bnQgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA+PSBncm91cC5sb2FkZWRFbmRJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBpdGVtczogWy4uLmdyb3VwLml0ZW1zLCAuLi5pdGVtc10sIGxvYWRlZEVuZEluZGV4OiBzdGFydEluZGV4ICsgaXRlbXMubGVuZ3RoLCBsb2FkZWRUb3RhbFJlY29yZENvdW50OiB0b3RhbFJlY29yZENvdW50IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPCBncm91cC5sb2FkZWRTdGFydEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIGl0ZW1zOiBbLi4uaXRlbXMsIC4uLmdyb3VwLml0ZW1zXSwgbG9hZGVkU3RhcnRJbmRleDogc3RhcnRJbmRleCwgbG9hZGVkVG90YWxSZWNvcmRDb3VudDogdG90YWxSZWNvcmRDb3VudCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBncm91cFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0R3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBJZDogc3RyaW5nLCBwbGF5ZWRJdGVtQ291bnQ6IG51bWJlciwgdG90YWxJdGVtQ291bnQ6IG51bWJlciwgcGxheWVkUnVudGltZVRpY2tzOiBudW1iZXIsIHRvdGFsUnVudGltZVRpY2tzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLmdyb3Vwcy5tYXAoZyA9PiBnLmdyb3VwSWQgPT09IGdyb3VwSWQgPyB7IC4uLmcsIHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQsIHBsYXllZFJ1bnRpbWVUaWNrcywgdG90YWxSdW50aW1lVGlja3MgfSA6IGcpXG4gICAgfVxuXG4gICAgcHVibGljIGFkanVzdEdyb3VwV2F0Y2hTdGF0cyhpdGVtSWQ6IHN0cmluZywgZGVsdGFQbGF5ZWRDb3VudDogbnVtYmVyLCBkZWx0YVBsYXllZFJ1bnRpbWVUaWNrczogbnVtYmVyKTogR3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuZ3JvdXBzLmZpbmQoZyA9PiBnLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpKVxuICAgICAgICBpZiAoIWdyb3VwKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgICAgY29uc3QgdXBkYXRlZEdyb3VwOiBHcm91cCA9IHtcbiAgICAgICAgICAgIC4uLmdyb3VwLFxuICAgICAgICAgICAgcGxheWVkSXRlbUNvdW50OiBncm91cC5wbGF5ZWRJdGVtQ291bnQgKyBkZWx0YVBsYXllZENvdW50LFxuICAgICAgICAgICAgcGxheWVkUnVudGltZVRpY2tzOiBncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCA/IFVOS05PV05fV0FUQ0hFRF9DT1VOVCA6IGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyArIGRlbHRhUGxheWVkUnVudGltZVRpY2tzXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLmdyb3Vwcy5tYXAoZyA9PiBnLmdyb3VwSWQgPT09IGdyb3VwLmdyb3VwSWQgPyB1cGRhdGVkR3JvdXAgOiBnKVxuICAgICAgICByZXR1cm4gdXBkYXRlZEdyb3VwXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUl0ZW0oaXRlbVRvVXBkYXRlOiBQcmV2aWV3SXRlbSk6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuZ3JvdXBzLm1hcChncm91cCA9PlxuICAgICAgICAgICAgZ3JvdXAuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1Ub1VwZGF0ZS5JZClcbiAgICAgICAgICAgICAgICA/IHsgLi4uZ3JvdXAsIGl0ZW1zOiBncm91cC5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtVG9VcGRhdGUuSWQgPyBpdGVtVG9VcGRhdGUgOiBpdGVtKSB9XG4gICAgICAgICAgICAgICAgOiBncm91cFxuICAgICAgICApXG4gICAgfVxuXG4gICAgLy8gQ2FsbGVkIHdoZW5ldmVyIHRoZSBwb3B1cCBzd2l0Y2hlcyB3aGF0IGl0J3MgZGlzcGxheWluZyAob3BlbmluZywgc2VsZWN0aW5nIGEgZ3JvdXAsIGdvaW5nIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpXG4gICAgcHVibGljIGJlZ2luTmV3VmlldygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKyt0aGlzLl92aWV3VG9rZW5cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNDdXJyZW50Vmlldyh0b2tlbjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0b2tlbiA9PT0gdGhpcy5fdmlld1Rva2VuXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgY3VycmVudFZpZXdUb2tlbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlld1Rva2VuXG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vU2VydmljZXMvTG9nZ2VyXCI7XG5pbXBvcnQge1ByZXZpZXdCdXR0b25UZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtEaWFsb2dDb250YWluZXJUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtMaXN0RWxlbWVudEZhY3Rvcnl9IGZyb20gXCIuL0xpc3RFbGVtZW50RmFjdG9yeVwiO1xuaW1wb3J0IHtQb3B1cFRpdGxlVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlXCI7XG5pbXBvcnQge0RhdGFGZXRjaGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge1BsdWdpblNldHRpbmdzfSBmcm9tIFwiLi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3NcIjtcbmltcG9ydCB7U2VydmVyU2V0dGluZ3N9IGZyb20gXCIuL01vZGVscy9TZXJ2ZXJTZXR0aW5nc1wiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuL0VuZHBvaW50c1wiO1xuaW1wb3J0IHtHcm91cCwgVU5LTk9XTl9XQVRDSEVEX0NPVU5UfSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7R3JvdXBJdGVtc1Jlc3VsdH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwSXRlbXNSZXN1bHRcIjtcbmltcG9ydCB7YWN0aXZhdGVTcGlubmVyLCBzcGlubmVySHRtbH0gZnJvbSBcIi4vQ29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQge3NldEl0ZW1PdmVybGF5QWN0aXZlfSBmcm9tIFwiLi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7dXBkYXRlRW5kVGltZURpc3BsYXl9IGZyb20gXCIuL0NvbXBvbmVudHMvSXRlbURldGFpbHNcIjtcblxuLy8gbG9hZCBhbmQgaW5qZWN0IGluUGxheWVyUHJldmlldy5jc3MgaW50byB0aGUgcGFnZVxuLypcbiAqIEluamVjdCBzdHlsZSB0byBiZSB1c2VkIGZvciB0aGUgcHJldmlldyBwb3B1cFxuICovXG5sZXQgaW5QbGF5ZXJQcmV2aWV3U3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG5pblBsYXllclByZXZpZXdTdHlsZS5pZCA9ICdpblBsYXllclByZXZpZXdTdHlsZSdcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ID0gYFxuLnNlbGVjdGVkTGlzdEl0ZW0ge1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5wcmV2aWV3TGlzdEl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDE1LjV2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUgLnByZXZpZXdJdGVtVGl0bGUgLmFjdGlvblNoZWV0SXRlbVRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG59XG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUgLnByZXZpZXdJdGVtRGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0xpc3RJdGVtQ29udGVudCAuaXRlbU1pc2NJbmZvLnByZXZpZXdJdGVtRGV0YWlscyB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtICFpbXBvcnRhbnQ7XG59XG4ucHJldmlld1BvcHVwIHtcbiAgICBhbmltYXRpb246IDE0MG1zIGVhc2Utb3V0IDBzIDEgbm9ybWFsIGJvdGggcnVubmluZyBzY2FsZXVwOyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIG1hcmdpbjogMHB4OyBcbiAgICBib3R0b206IDEuNXZoOyBcbiAgICBsZWZ0OiA1MHZ3OyBcbiAgICB3aWR0aDogNDh2dztcbn1cbi5wcmV2aWV3UG9wdXBUaXRsZSB7XG4gICAgbWF4LWhlaWdodDogNHZoO1xufVxuLnByZXZpZXdQb3B1cFRpdGxlIGgxLmFjdGlvblNoZWV0VGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4ucHJldmlld0dyb3VwV2F0Y2hlZENvdW50IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJldmlld1BvcHVwU2Nyb2xsZXIge1xuICAgIG1heC1oZWlnaHQ6IDYwdmg7XG59XG4ucHJldmlld1F1aWNrQWN0aW9uQ29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXG59XG4ucHJldmlld0l0ZW1Db250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnByZXZpZXdJdGVtVGl0bGUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkIHtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbn1cbi5wcmV2aWV3SXRlbUNvbnRlbnRSb3cge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb25Db2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb24uZXhwYW5kZWQge1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG59XG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgbWFyZ2luLXRvcDogMC4yNWVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgb3BhY2l0eTogMC43NTtcbn1cbi5wcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuLnByZXZpZXdJdGVtRGV0YWlscyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi8qIExvY2sgdGhlIHBvc2l0aW9uIG9mIHRoaXMgZGV0YWlscywgc28gdGhhdCBubyB0aGVtZSBjYW4gY2hhbmdlIGl0ICovXG4ucHJldmlld0xpc3RJdGVtQ29udGVudCAuaXRlbU1pc2NJbmZvLnByZXZpZXdJdGVtRGV0YWlscyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cbi5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4zcyBlYXNlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5ibHVyOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG59XG4ucHJldmlld0l0ZW1JbWFnZUNhcmQ6aG92ZXIgLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbn1cbi5wcmV2aWV3U2Nyb2xsU3Bpbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFlbSAwO1xufVxuLnByZXZpZXdTY3JvbGxTcGlubmVyIC5kb2NzcGlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEuOTVlbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMS45NWVtICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogYXV0byAhaW1wb3J0YW50O1xufVxuYFxuZG9jdW1lbnQ/LmhlYWQ/LmFwcGVuZENoaWxkKGluUGxheWVyUHJldmlld1N0eWxlKVxuXG4vLyBpbml0IHNlcnZpY2VzIGFuZCBoZWxwZXJzXG5jb25zdCBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoKVxuY29uc3QgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSA9IG5ldyBQcm9ncmFtRGF0YVN0b3JlKClcbmNvbnN0IHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyID0gbmV3IFBsYXliYWNrSGFuZGxlcihsb2dnZXIpXG5jb25zdCBsaXN0RWxlbWVudEZhY3RvcnkgPSBuZXcgTGlzdEVsZW1lbnRGYWN0b3J5KHBsYXliYWNrSGFuZGxlciwgcHJvZ3JhbURhdGFTdG9yZSwgbG9nZ2VyKVxuXG5jb25zdCBjb2xsZWN0aW9uc0J5SXRlbUlkID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8R3JvdXBbXT4+KClcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwW10+IHtcbiAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5DT05UQUlOSU5HX0NPTExFQ1RJT05TfWBcbiAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByYXc6IGFueVtdID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIHJldHVybiByYXcubWFwKChnOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXIsXG4gICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgdG90YWxJdGVtQ291bnQ6IGcuVG90YWxJdGVtQ291bnQsXG4gICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IGcuUGxheWVkUnVudGltZVRpY2tzLFxuICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IGcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgfSkpXG4gICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgbG9hZCBDb2xsZWN0aW9ucy9QbGF5bGlzdHMgY29udGFpbmluZyB0aGlzIG1vdmllXCIsIGV4KVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8R3JvdXBbXT4ge1xuICAgIGxldCBwcm9taXNlID0gY29sbGVjdGlvbnNCeUl0ZW1JZC5nZXQoaXRlbUlkKVxuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkKVxuICAgICAgICBjb2xsZWN0aW9uc0J5SXRlbUlkLnNldChpdGVtSWQsIHByb21pc2UpXG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgLy8gRW5zdXJlIEFwaUNsaWVudC9FdmVudHMgZXhpc3QgYW5kIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgaWYgKHR5cGVvZiBBcGlDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBFdmVudHMgPT09ICd1bmRlZmluZWQnIHx8ICFBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZD8uKCkpIHtcbiAgICAgICAgc2V0VGltZW91dChpbml0aWFsaXplLCAzMDApXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG5ldyBEYXRhRmV0Y2hlcihwcm9ncmFtRGF0YVN0b3JlKVxuXG4gICAgY29uc3QgcGx1Z2luU2V0dGluZ3NVcmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5QTFVHSU5fU0VUVElOR1N9YClcbiAgICBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmw6IHBsdWdpblNldHRpbmdzVXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIC50aGVuKChjb25maWc6IFBsdWdpblNldHRpbmdzKSA9PiB7XG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzID0gY29uZmlnXG4gICAgICAgICAgICBsb2dnZXIuc2V0TG9nTGV2ZWwoY29uZmlnLkxvZ0xldmVsKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBsb2FkIHBsdWdpbiBzZXR0aW5ncywgZmFsbGluZyBiYWNrIHRvIGRlZmF1bHRzXCIsIGV4KSlcblxuICAgIGNvbnN0IHNlcnZlclNldHRpbmdzVXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuU0VSVkVSX1NFVFRJTkdTfWApXG4gICAgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsOiBzZXJ2ZXJTZXR0aW5nc1VybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAudGhlbigoY29uZmlnOiBTZXJ2ZXJTZXR0aW5ncykgPT4gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncyA9IGNvbmZpZylcbiAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgbG9hZCBzZXJ2ZXIgc2V0dGluZ3MsIGZhbGxpbmcgYmFjayB0byBkZWZhdWx0c1wiLCBleCkpXG5cbiAgICBsb2dnZXIuaW5mbyhcIkluUGxheWVyRXBpc29kZVByZXZpZXcgaW5pdGlhbGl6ZWRcIilcbn1cbmluaXRpYWxpemUoKVxuXG5jb25zdCBTRUFSQ0hfQ09MTEVDVElPTlNfR1JPVVBfTkFNRSA9ICdTZWFyY2ggQ29sbGVjdGlvbnMvUGxheWxpc3RzJ1xuXG5jb25zdCB2aWRlb1BhdGhzOiBzdHJpbmdbXSA9IFsnL3ZpZGVvJ11cbmxldCBwcmV2aW91c1JvdXRlUGF0aDogc3RyaW5nID0gbnVsbFxubGV0IHByZXZpZXdDb250YWluZXJMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG5sZXQgcGVuZGluZ1ByZWxvYWRJdGVtSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG5sZXQgcGVuZGluZ1ByZWxvYWQ6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbFxubGV0IHByZWxvYWRPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsXG5sZXQgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGxcblxuZnVuY3Rpb24gZ2V0QWN0aXZlQnV0dG9uc0JhcigpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtdHlwZT1cInZpZGVvLW9zZFwiXTpub3QoLmhpZGUpIC5idXR0b25zJylcbn1cblxuLy8gV2FpdCBmb3IgdGhlIE9TRCdzIGAuYnV0dG9uc2AgY29udGFpbmVyIHRvIGV4aXN0XG5mdW5jdGlvbiB3YWl0Rm9yQnV0dG9uc0NvbnRhaW5lcihvblJlYWR5OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKGdldEFjdGl2ZUJ1dHRvbnNCYXIoKSkge1xuICAgICAgICBvblJlYWR5KClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGlmICghZ2V0QWN0aXZlQnV0dG9uc0JhcigpKSByZXR1cm5cbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyID0gbnVsbFxuICAgICAgICBvblJlYWR5KClcbiAgICB9KVxuICAgIGJ1dHRvbnNDb250YWluZXJPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdzaG93Jywgdmlld1Nob3dFdmVudEhhbmRsZXIpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB2aWV3U2hvd0V2ZW50SGFuZGxlcilcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKCkpXG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVJhdGluZ0J1dHRvbigpOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIGdldEFjdGl2ZUJ1dHRvbnNCYXIoKT8ucXVlcnlTZWxlY3RvcignLmJ0blVzZXJSYXRpbmcuYXV0b1NpemUucGFwZXItaWNvbi1idXR0b24tbGlnaHQnKSA/PyBudWxsXG59XG5cbmZ1bmN0aW9uIGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGdldEFjdGl2ZVJhdGluZ0J1dHRvbigpPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA/PyBudWxsXG59XG5cbmxldCBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kOiBudW1iZXIgPSAtMVxuZnVuY3Rpb24gb25WaWRlb1RpbWVVcGRhdGUodGhpczogSFRNTFZpZGVvRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uU2Vjb25kID0gTWF0aC5mbG9vcih0aGlzLmN1cnJlbnRUaW1lKVxuICAgIGlmIChwb3NpdGlvblNlY29uZCA9PT0gbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCkgcmV0dXJuXG4gICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IHBvc2l0aW9uU2Vjb25kXG5cbiAgICBjb25zdCBpdGVtSWQgPSBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKClcbiAgICBpZiAoIWl0ZW1JZCkgcmV0dXJuXG5cbiAgICBpZiAoaXRlbUlkICE9PSBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNJdGVtSWQgPSBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWRcbiAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gaXRlbUlkXG4gICAgICAgIHNldEl0ZW1PdmVybGF5QWN0aXZlKHByZXZpb3VzSXRlbUlkLCBmYWxzZSlcbiAgICAgICAgc2V0SXRlbU92ZXJsYXlBY3RpdmUoaXRlbUlkLCB0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSBwcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKGl0ZW1JZClcbiAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0uUnVuVGltZVRpY2tzKSByZXR1cm5cblxuICAgIGNvbnN0IHBvc2l0aW9uVGlja3MgPSB0aGlzLmN1cnJlbnRUaW1lICogMTBfMDAwXzAwMFxuICAgIGNvbnN0IHBsYXllZFBlcmNlbnRhZ2UgPSAocG9zaXRpb25UaWNrcyAvIGl0ZW0uUnVuVGltZVRpY2tzKSAqIDEwMFxuXG4gICAgcHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgVXNlckRhdGE6IHtcbiAgICAgICAgICAgIC4uLml0ZW0uVXNlckRhdGEsXG4gICAgICAgICAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IHBvc2l0aW9uVGlja3MsXG4gICAgICAgICAgICBQbGF5ZWRQZXJjZW50YWdlOiBwbGF5ZWRQZXJjZW50YWdlLFxuICAgICAgICAgICAgUGxheWVkOiBwbGF5ZWRQZXJjZW50YWdlID49IHByb2dyYW1EYXRhU3RvcmUuc2VydmVyU2V0dGluZ3MuTWF4UmVzdW1lUGN0XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBvblZpZGVvUmF0ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLmVuZHNBdFtkYXRhLWl0ZW0taWRdJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoZWxlbWVudC5kYXRhc2V0Lml0ZW1JZClcbiAgICAgICAgaWYgKGl0ZW0pIHVwZGF0ZUVuZFRpbWVEaXNwbGF5KGl0ZW0pXG4gICAgfSlcbn1cblxuLy8gVHJhY2tzIHdoaWNoIEJveFNldC9QbGF5bGlzdCBkZXRhaWxzIHBhZ2UgKGlmIGFueSkgd2FzIHZpc2l0ZWQgaW1tZWRpYXRlbHkgYmVmb3JlIG5hdmlnYXRpbmcgaW50byBwbGF5YmFja1xuY29uc3QgREVUQUlMU19ST1VURV9QQVRIOiBzdHJpbmcgPSAnL2RldGFpbHMnXG5jb25zdCBEQVNIQk9BUkRfUk9VVEVfUEFUSDogc3RyaW5nID0gJy9ob21lJ1xuY29uc3QgY29sbGVjdGlvbkxpa2VJdGVtVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLlBsYXlsaXN0XSlcbmxldCBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkOiBzdHJpbmcgPSBudWxsXG5jb25zdCBFTVBUWV9HVUlEID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCdcblxuZnVuY3Rpb24gcmVjb3JkU291cmNlQ29sbGVjdGlvbihjb2xsZWN0aW9uSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHByb2dyYW1EYXRhU3RvcmUuaW52YWxpZGF0ZUdyb3Vwc0NhY2hlKClcblxuICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLlNFVF9TT1VSQ0VfQ09MTEVDVElPTn1gXG4gICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCkpXG4gICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9JywgQXBpQ2xpZW50LmRldmljZUlkKCkpXG4gICAgICAgIC5yZXBsYWNlKCd7Y29sbGVjdGlvbklkfScsIGNvbGxlY3Rpb25JZCkpXG4gICAgQXBpQ2xpZW50LmFqYXgoe3R5cGU6ICdHRVQnLCB1cmx9KS5jYXRjaCgoZXg6IHVua25vd24pID0+IGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IHJlY29yZCBzb3VyY2UgY29sbGVjdGlvbiBmb3IgcGxheWJhY2sgc2Vzc2lvblwiLCBleCkpXG59XG5cbmZ1bmN0aW9uIGNsZWFyU291cmNlQ29sbGVjdGlvbigpOiB2b2lkIHtcbiAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKEVNUFRZX0dVSUQpXG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVTb3VyY2VDb2xsZWN0aW9uKGN1cnJlbnRSb3V0ZVBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFtjdXJyZW50UGF0aCwgY3VycmVudFF1ZXJ5XSA9IGN1cnJlbnRSb3V0ZVBhdGguc3BsaXQoJz8nKVxuICAgIGNvbnN0IHByZXZpb3VzUGF0aCA9IHByZXZpb3VzUm91dGVQYXRoPy5zcGxpdCgnPycpWzBdXG5cbiAgICBpZiAoY3VycmVudFBhdGggPT09IERBU0hCT0FSRF9ST1VURV9QQVRIKSB7XG4gICAgICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBudWxsXG4gICAgICAgIGNsZWFyU291cmNlQ29sbGVjdGlvbigpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjdXJyZW50UGF0aCA9PT0gREVUQUlMU19ST1VURV9QQVRIKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNJZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoY3VycmVudFF1ZXJ5ID8/ICcnKS5nZXQoJ2lkJylcbiAgICAgICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IG51bGxcbiAgICAgICAgaWYgKCFkZXRhaWxzSWQpIHJldHVyblxuXG4gICAgICAgIEFwaUNsaWVudC5nZXRJdGVtKEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCksIGRldGFpbHNJZCkudGhlbigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVR5cGU6IEl0ZW1UeXBlID0gSXRlbVR5cGVbaXRlbS5UeXBlIGFzIHVua25vd24gYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IGNvbGxlY3Rpb25MaWtlSXRlbVR5cGVzLmhhcyhpdGVtVHlwZSkgPyBkZXRhaWxzSWQgOiBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRQYXRoKSAmJiBwcmV2aW91c1BhdGggPT09IERFVEFJTFNfUk9VVEVfUEFUSCkge1xuICAgICAgICBpZiAocGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZClcbiAgICAgICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24ocGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2xlYXJTb3VyY2VDb2xsZWN0aW9uKClcbiAgICB9XG5cbiAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxufVxuXG4vLyBSZXRyaWV2ZSB0aGUgY3VycmVudCBjb2xsZWN0aW9uL3BsYXlsaXN0IGlkIHRocm91Z2ggYSBwbGF5IGFjdGlvbiBvbiBhIGNhcmQgdGhlIHNhbWUgd2F5IGFzIGhlbGx5ZmluIGRvZXMgaXQgaXRzZWxmXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamVsbHlmaW4vamVsbHlmaW4td2ViL2Jsb2IvcmVsZWFzZS0xMC4xMS56L3NyYy9jb21wb25lbnRzL3Nob3J0Y3V0cy5qcyNMMjE2XG5jb25zdCBQTEFZQkFDS19UUklHR0VSX0FDVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbJ3BsYXknLCAncmVzdW1lJywgJ3BsYXlhbGxmcm9taGVyZSddKVxuZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrQ2FwdHVyZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8vIE9ubHkgY2FwdHVyZSBuYXRpdmUgZXZlbnRzIGFuZCBpZ25vcmUgYW55IGZyb20gdGhlIFByZXZpZXcgTGlzdFxuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8uY2xvc2VzdD8uKCcjcHJldmlld1BvcHVwJykpIHJldHVyblxuXG4gICAgY29uc3QgYWN0aW9uRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5jbG9zZXN0Py4oJ1tkYXRhLWFjdGlvbl0nKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcbiAgICBpZiAoIWFjdGlvbkVsZW1lbnQgfHwgIVBMQVlCQUNLX1RSSUdHRVJfQUNUSU9OUy5oYXMoYWN0aW9uRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJykpKSByZXR1cm5cblxuICAgIGNvbnN0IGNhcmQgPSBhY3Rpb25FbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLWlkXScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgIGlmICghY2FyZCkgcmV0dXJuXG5cbiAgICBjb25zdCBjaGlsZE9mQ29sbGVjdGlvbklkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGVjdGlvbmlkJykgPz8gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWxpc3RpZCcpXG4gICAgaWYgKGNoaWxkT2ZDb2xsZWN0aW9uSWQpIHtcbiAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihjaGlsZE9mQ29sbGVjdGlvbklkKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjYXJkSXRlbVR5cGU6IEl0ZW1UeXBlID0gSXRlbVR5cGVbY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpIGFzIHVua25vd24gYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgIGNvbnN0IGNhcmRJZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcbiAgICBpZiAoY2FyZElkICYmIGNvbGxlY3Rpb25MaWtlSXRlbVR5cGVzLmhhcyhjYXJkSXRlbVR5cGUpKSB7XG4gICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY2FyZElkKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgY2xlYXJTb3VyY2VDb2xsZWN0aW9uKClcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Eb2N1bWVudENsaWNrQ2FwdHVyZSwgdHJ1ZSlcblxuZnVuY3Rpb24gdmlld1Nob3dFdmVudEhhbmRsZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFJvdXRlUGF0aDogc3RyaW5nID0gZ2V0TG9jYXRpb25QYXRoKClcblxuICAgIGZ1bmN0aW9uIGdldExvY2F0aW9uUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsb2NhdGlvbjogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlSW5kZXg6IG51bWJlciA9IGxvY2F0aW9uLmxhc3RJbmRleE9mKCcvJylcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnN1YnN0cmluZyhjdXJyZW50Um91dGVJbmRleClcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsIGF0dGVtcHQgdG8gbG9hZCB0aGUgdmlkZW8gdmlldyBvciBzY2hlZHVsZSByZXRyaWVzLlxuICAgIGNhcHR1cmVTb3VyY2VDb2xsZWN0aW9uKGN1cnJlbnRSb3V0ZVBhdGgpXG4gICAgYXR0ZW1wdExvYWRWaWRlb1ZpZXcoKVxuICAgIHByZXZpb3VzUm91dGVQYXRoID0gY3VycmVudFJvdXRlUGF0aFxuICAgIFxuICAgIGZ1bmN0aW9uIGF0dGVtcHRMb2FkVmlkZW9WaWV3KCk6IHZvaWQge1xuICAgICAgICBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhjdXJyZW50Um91dGVQYXRoKSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByZXZpZXcgY29udGFpbmVyIGlzIGFscmVhZHkgbG9hZGVkIGJlZm9yZSBsb2FkaW5nXG4gICAgICAgICAgICBpZiAocHJldmlld0NvbnRhaW5lckxvYWRlZCB8fCBpc1ByZXZpZXdCdXR0b25DcmVhdGVkKCkpIHJldHVyblxuXG4gICAgICAgICAgICAvLyBSZXNlcnZlIGltbWVkaWF0ZWx5IHNvIGEgc2Vjb25kIHZpZXdzaG93IGRvZXNuJ3QgcXVldWUgYW5vdGhlciB3YWl0XG4gICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gdHJ1ZVxuICAgICAgICAgICAgd2FpdEZvckJ1dHRvbnNDb250YWluZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIG5hdmlnYXRlZCBiYWNrIG91dCBvZiB0aGUgcGxheWVyKSB3aGlsZSB3ZSB3ZXJlIHdhaXRpbmdcbiAgICAgICAgICAgICAgICBpZiAoIXZpZGVvUGF0aHMuaW5jbHVkZXMoZ2V0TG9jYXRpb25QYXRoKCkpIHx8IGlzUHJldmlld0J1dHRvbkNyZWF0ZWQoKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgbG9hZFZpZGVvVmlldygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMocHJldmlvdXNSb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICB1bmxvYWRWaWRlb1ZpZXcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGxvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIkxvYWRpbmcgdmlkZW8gdmlld1wiKVxuXG4gICAgICAgIGxldCBwcmV2aWV3QnV0dG9uOiBQcmV2aWV3QnV0dG9uVGVtcGxhdGUgfCBudWxsID0gbnVsbFxuICAgICAgICBsZXQgcHJldmlld0J1dHRvbkxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgICAgIC8vIE9ubHkgYWN0dWFsbHkgaW5zZXJ0ZWQgaW50byB0aGUgT1NEIG9uY2UgdGhlIGl0ZW0ncyB0eXBlIGlzIGNvbmZpcm1lZCBlbmFibGVkIC0gc2VlIHByZWxvYWRQcmV2aWV3RGF0YS5cbiAgICAgICAgZnVuY3Rpb24gaW5zZXJ0UHJldmlld0J1dHRvbigpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmIChwcmV2aWV3QnV0dG9uKSByZXR1cm5cbiAgICAgICAgICAgIGlmICghdmlkZW9QYXRocy5pbmNsdWRlcyhnZXRMb2NhdGlvblBhdGgoKSkpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBidXR0b25zQmFyID0gZ2V0QWN0aXZlQnV0dG9uc0JhcigpXG4gICAgICAgICAgICBpZiAoIWJ1dHRvbnNCYXIpIHtcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQnV0dG9uc0NvbnRhaW5lcihpbnNlcnRQcmV2aWV3QnV0dG9uKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsYXN0RWxlbWVudENoaWxkLnBhcmVudEVsZW1lbnQgaXMgdXNlZCBmb3IgY2FzdGluZyBmcm9tIEVsZW1lbnQgdG8gSFRNTEVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudDogSFRNTEVsZW1lbnQgPSBidXR0b25zQmFyLmxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikuZmluZEluZGV4KChjaGlsZDogRWxlbWVudCk6IGJvb2xlYW4gPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuVXNlclJhdGluZ1wiKSk7XG4gICAgICAgICAgICAvLyBpZiBpbmRleCBpcyBpbnZhbGlkIHRyeSB0byB1c2UgdGhlIG9sZCBwb3NpdGlvbiAodXNlZCBpbiBKZWxseWZpbiAxMC44LjEyKVxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSlcbiAgICAgICAgICAgICAgICBpbmRleCA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvc2RUaW1lVGV4dFwiKSlcblxuICAgICAgICAgICAgcHJldmlld0J1dHRvbiA9IG5ldyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUocGFyZW50LCBpbmRleClcbiAgICAgICAgICAgIHByZXZpZXdCdXR0b24ucmVuZGVyKHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIpXG4gICAgICAgICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxWaWRlb0VsZW1lbnQ+KCd2aWRlby5odG1sdmlkZW9wbGF5ZXInKVxuICAgICAgICAgICAgdmlkZW9FbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgb25WaWRlb1RpbWVVcGRhdGUpXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3JhdGVjaGFuZ2UnLCBvblZpZGVvUmF0ZUNoYW5nZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZldGNoUHJldmlld0l0ZW1UeXBlID0gYXN5bmMgKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTxJdGVtVHlwZT4gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuSVRFTV9QUkVWSUVXX1RZUEV9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHVzZXJJZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW1JZCkpXG4gICAgICAgICAgICBjb25zdCByYXdUeXBlOiBzdHJpbmcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgIHJldHVybiBJdGVtVHlwZVtyYXdUeXBlIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRJdGVtUHJldmlld0RhdGEgPSBhc3luYyAoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPHtcbiAgICAgICAgICAgIGl0ZW1UeXBlOiBzdHJpbmcsIGNvbnRhaW5lck5hbWU6IHN0cmluZyB8IG51bGwsIGdyb3VwczogR3JvdXBbXSwgYWN0aXZlR3JvdXBJZDogc3RyaW5nLCBhY3RpdmVJdGVtSW5kZXg6IG51bWJlclxuICAgICAgICB9PiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX1BSRVZJRVdfREFUQX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9JywgQXBpQ2xpZW50LmRldmljZUlkKCkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpdGVtVHlwZTogcmF3Lkl0ZW1UeXBlLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck5hbWU6IHJhdy5Db250YWluZXJOYW1lLFxuICAgICAgICAgICAgICAgIGdyb3VwczogcmF3Lkdyb3Vwcy5tYXAoKGc6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogZy5Hcm91cElkLFxuICAgICAgICAgICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgIGluZGV4TnVtYmVyOiBnLkluZGV4TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1Db3VudDogZy5Ub3RhbEl0ZW1Db3VudCxcbiAgICAgICAgICAgICAgICAgICAgcGxheWVkUnVudGltZVRpY2tzOiBnLlBsYXllZFJ1bnRpbWVUaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IGcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogcmF3LkFjdGl2ZUdyb3VwSWQsXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbUluZGV4OiByYXcuQWN0aXZlSXRlbUluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkR3JvdXBJdGVtcyA9IGFzeW5jIChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciA9IDAsIGxpbWl0OiBudW1iZXIgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZSk6IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfSVRFTVN9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHVzZXJJZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2dyb3VwSWR9JywgZ3JvdXBJZCksXG4gICAgICAgICAgICAgICAgeyBzdGFydEluZGV4LCBsaW1pdCB9KVxuICAgICAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IEdyb3VwSXRlbXNSZXN1bHQgPSB7IGl0ZW1zOiByYXcuSXRlbXMsIHRvdGFsUmVjb3JkQ291bnQ6IHJhdy5Ub3RhbFJlY29yZENvdW50IH1cblxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5yZWNvcmRMb2FkZWRJdGVtcyhncm91cElkLCByZXN1bHQuaXRlbXMsIHN0YXJ0SW5kZXgsIHJlc3VsdC50b3RhbFJlY29yZENvdW50KVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBwcmVsb2FkUHJldmlld0RhdGEoaXRlbUlkOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1JZCkgcmV0dXJuXG4gICAgICAgICAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWQgJiYgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuc29tZShnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gQWxyZWFkeSBmZXRjaGVkIChhbmQgdGhlcmVmb3JlIGFscmVhZHkga25vd24tYWxsb3dlZCkgZWFybGllciB0aGlzIHNlc3Npb24gLSBqdXN0IHNob3cgdGhlIGJ1dHRvbi5cbiAgICAgICAgICAgICAgICBpbnNlcnRQcmV2aWV3QnV0dG9uKClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkKSByZXR1cm5cblxuICAgICAgICAgICAgcGVuZGluZ1ByZWxvYWRJdGVtSWQgPSBpdGVtSWRcbiAgICAgICAgICAgIHBlbmRpbmdQcmVsb2FkID0gKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aWV3VHlwZSA9IGF3YWl0IGZldGNoUHJldmlld0l0ZW1UeXBlKGl0ZW1JZClcbiAgICAgICAgICAgICAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUuaXNUeXBlQWxsb3dlZEZvclByZXZpZXcocHJldmlld1R5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJldmlldyBub3QgZW5hYmxlZCBmb3IgaXRlbSB0eXBlICcke3ByZXZpZXdUeXBlfScsIHNraXBwaW5nIGJ1dHRvbiBmb3IgaXRlbSAke2l0ZW1JZH1gKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnNlcnRQcmV2aWV3QnV0dG9uKClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbVR5cGUsIGNvbnRhaW5lck5hbWUsIGdyb3VwcywgYWN0aXZlR3JvdXBJZCwgYWN0aXZlSXRlbUluZGV4IH0gPSBhd2FpdCBsb2FkSXRlbVByZXZpZXdEYXRhKGl0ZW1JZClcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IGdyb3Vwc1xuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUubWFya0dyb3Vwc0ZldGNoZWQoKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUudHlwZSA9IEl0ZW1UeXBlW2l0ZW1UeXBlIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmJveFNldE5hbWUgPSBjb250YWluZXJOYW1lID8/ICcnXG5cbiAgICAgICAgICAgICAgICBjb25zdCBQQUdFX1NJWkUgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VPZkFjdGl2ZUVwaXNvZGUgPSBNYXRoLmZsb29yKGFjdGl2ZUl0ZW1JbmRleCAvIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93U3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIChwYWdlT2ZBY3RpdmVFcGlzb2RlIC0gMSkgKiBQQUdFX1NJWkUpXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFdpbmRvd0xpbWl0ID0gKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgKyAyKSAqIFBBR0VfU0laRSAtIGluaXRpYWxXaW5kb3dTdGFydEluZGV4XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBpbml0aWFsV2luZG93U3RhcnRJbmRleCwgaW5pdGlhbFdpbmRvd0xpbWl0KVxuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJlbG9hZGVkICR7Z3JvdXBzLmxlbmd0aH0gZ3JvdXAocykgZm9yIGl0ZW0gJHtpdGVtSWR9YClcbiAgICAgICAgICAgIH0pKCkuY2F0Y2goKGV4OiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcHJlbG9hZCBwcmV2aWV3IGRhdGFcIiwgZXgpXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ1ByZWxvYWRJdGVtSWQgPT09IGl0ZW1JZCkgcGVuZGluZ1ByZWxvYWRJdGVtSWQgPSBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2FpdCB0aGF0IGRhdGEtaWQgZ2V0cyBwb3B1bGF0ZWQgYnkgSmVsbHlmaW5cbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVQcmVsb2FkKCk6IHZvaWQge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG4gICAgICAgICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgcHJlbG9hZFByZXZpZXdEYXRhKGl0ZW1JZClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0QWN0aXZlUmF0aW5nQnV0dG9uKClcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHJhdGluZyBidXR0b24gaXRzZWxmIGhhc24ndCBiZWVuIGNyZWF0ZWQgeWV0IC0gd2FpdCBmb3IgdGhlIE9TRCB0byBmaW5pc2ggYnVpbGRpbmcgaXQsIHRoZW4gcmV0cnkuXG4gICAgICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2V0QWN0aXZlUmF0aW5nQnV0dG9uKCkpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUHJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgICAgICAgICAgICAgaWYgKCFpZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBudWxsXG4gICAgICAgICAgICAgICAgcHJlbG9hZFByZXZpZXdEYXRhKGlkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGF0YS1pZCddIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzY2hlZHVsZVByZWxvYWQoKVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBpZiAocHJldmlld0J1dHRvbkxvYWRpbmcpIHJldHVyblxuICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRvUHJldmlld0J1dHRvbkNsaWNrKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3Qgb3BlbiBwcmV2aWV3IHBvcHVwXCIsIGV4KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKClcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9QcmV2aWV3QnV0dG9uQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVyaW1lbnRhbCBhbmQgd2lsbCBtYXliZSBiZSB1c2VkIGluIGZ1dHVyZSByZWxlYXNlc1xuICAgICAgICAgICAgY29uc3QgZ2V0Tm93UGxheWluZ0l0ZW1JZEZyb21TZXNzaW9uID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLk5PV19QTEFZSU5HX0lURU19YClcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcmVzb2x2ZSBub3ctcGxheWluZyBpdGVtIGZyb20gc2Vzc2lvbiwgZmFsbGluZyBiYWNrIHRvIE9TRCByYXRpbmcgYnV0dG9uXCIsIGV4KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyOiBEaWFsb2dDb250YWluZXJUZW1wbGF0ZSA9IG5ldyBEaWFsb2dDb250YWluZXJUZW1wbGF0ZShkb2N1bWVudC5ib2R5LCBkb2N1bWVudC5ib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICBkaWFsb2dDb250YWluZXIucmVuZGVyKClcblxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJylcblxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHJlc3BvbnNlIG9mIHRoZSBPU0QncyBwcmVsb2FkIG9mIHRoaXMgc2FtZSBpdGVtLCB3YWl0IGZvciBpdCBpbnN0ZWFkIG9mIGZpcmluZyBhIGR1cGxpY2F0ZSBmZXRjaC5cbiAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkICYmIHBlbmRpbmdQcmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByZXZpZXdTY3JvbGxTcGlubmVyXCI+JHtzcGlubmVySHRtbCgpfTwvZGl2PmBcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoY29udGVudERpdilcbiAgICAgICAgICAgICAgICBhd2FpdCBwZW5kaW5nUHJlbG9hZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjYWNoZWRHcm91cCA9ICFwcm9ncmFtRGF0YVN0b3JlLmlzR3JvdXBzQ2FjaGVFeHBpcmVkXG4gICAgICAgICAgICAgICAgPyBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5maW5kKGcgPT4gZy5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKSlcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICAgICAgICBsZXQgYWN0aXZlR3JvdXBJZDogc3RyaW5nXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFBhZ2U6IEdyb3VwSXRlbXNSZXN1bHRcbiAgICAgICAgICAgIGxldCBpbml0aWFsV2luZG93U3RhcnRJbmRleDogbnVtYmVyXG5cbiAgICAgICAgICAgIGlmIChjYWNoZWRHcm91cCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgT3BlbmluZyBwcmV2aWV3IHBvcHVwIGZvciBpdGVtICR7aXRlbUlkfSB1c2luZyBjYWNoZWQgZ3JvdXAgZGF0YWApXG4gICAgICAgICAgICAgICAgYWN0aXZlR3JvdXBJZCA9IGNhY2hlZEdyb3VwLmdyb3VwSWRcbiAgICAgICAgICAgICAgICBpbml0aWFsV2luZG93U3RhcnRJbmRleCA9IGNhY2hlZEdyb3VwLmxvYWRlZFN0YXJ0SW5kZXggPz8gMFxuICAgICAgICAgICAgICAgIGluaXRpYWxQYWdlID0geyBpdGVtczogWy4uLmNhY2hlZEdyb3VwLml0ZW1zXSwgdG90YWxSZWNvcmRDb3VudDogY2FjaGVkR3JvdXAubG9hZGVkVG90YWxSZWNvcmRDb3VudCA/PyBjYWNoZWRHcm91cC5pdGVtcy5sZW5ndGggfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYE9wZW5pbmcgcHJldmlldyBwb3B1cCBmb3IgaXRlbSAke2l0ZW1JZH0sIGZldGNoaW5nIGdyb3VwIGRhdGFgKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcmV2aWV3U2Nyb2xsU3Bpbm5lclwiPiR7c3Bpbm5lckh0bWwoKX08L2Rpdj5gXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVTcGlubmVyKGNvbnRlbnREaXYpXG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1UeXBlLCBjb250YWluZXJOYW1lLCBncm91cHMsIGFjdGl2ZUdyb3VwSWQ6IGZldGNoZWRBY3RpdmVHcm91cElkLCBhY3RpdmVJdGVtSW5kZXggfSA9IGF3YWl0IGxvYWRJdGVtUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gZ3JvdXBzXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5tYXJrR3JvdXBzRmV0Y2hlZCgpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS50eXBlID0gSXRlbVR5cGVbaXRlbVR5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSA9IGNvbnRhaW5lck5hbWUgPz8gJydcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkID0gZmV0Y2hlZEFjdGl2ZUdyb3VwSWRcblxuICAgICAgICAgICAgICAgIC8vIExvYWQgYSAzLXBhZ2Ugd2luZG93IChwYWdlIG9mIHRoZSBhY3RpdmUgZXBpc29kZSwgcGx1cyBvbmUgcGFnZSBiZWZvcmUgYW5kIGFmdGVyKVxuICAgICAgICAgICAgICAgIGNvbnN0IFBBR0VfU0laRSA9IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZU9mQWN0aXZlRXBpc29kZSA9IE1hdGguZmxvb3IoYWN0aXZlSXRlbUluZGV4IC8gUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgLSAxKSAqIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93TGltaXQgPSAocGFnZU9mQWN0aXZlRXBpc29kZSArIDIpICogUEFHRV9TSVpFIC0gaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXhcblxuICAgICAgICAgICAgICAgIGluaXRpYWxQYWdlID0gYXdhaXQgbG9hZEdyb3VwSXRlbXMoYWN0aXZlR3JvdXBJZCwgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXgsIGluaXRpYWxXaW5kb3dMaW1pdClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gaXRlbUlkXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQgPSBhY3RpdmVHcm91cElkXG5cbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJycgLy8gcmVtb3ZlIHRoZSBsb2FkaW5nIHNwaW5uZXJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdUb2tlbiA9IHByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcblxuICAgICAgICAgICAgLy8gQSBzdGFuZGFsb25lIG1vdmllIGhhcyBubyBtZWFuaW5nZnVsIGdyb3VwIG5hbWUgb2YgaXRzIG93bjsgYW4gaXRlbSBzb3VyY2VkIGZyb20gYSBQbGF5bGlzdC9Cb3hTZXRcbiAgICAgICAgICAgIC8vIGFscmVhZHkgaGFzIHRoYXQgY29sbGVjdGlvbidzIHJlYWwgbmFtZSwgc28gb25seSB0aGUgc3RhbmRhbG9uZS1tb3ZpZSBjYXNlIGdldHMgcmVsYWJlbGVkLlxuICAgICAgICAgICAgY29uc3QgaXNTdGFuZGFsb25lTW92aWUgPSBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPT09IEl0ZW1UeXBlLk1vdmllXG4gICAgICAgICAgICBjb25zdCBpc1NvdXJjZWRGcm9tQ29sbGVjdGlvbiA9IHByb2dyYW1EYXRhU3RvcmUudHlwZSA9PT0gSXRlbVR5cGUuUGxheWxpc3QgfHwgcHJvZ3JhbURhdGFTdG9yZS50eXBlID09PSBJdGVtVHlwZS5Cb3hTZXRcblxuICAgICAgICAgICAgLy8gTGFiZWwgdGhlIG1vdmllJ3Mgb3duIGdyb3VwIGFzIHRoZSBjb2xsZWN0aW9uIHNlYXJjaCB1cCBmcm9udCwgZXZlbiBiZWZvcmUgYW55IHJlc3VsdHMgYXJlIGtub3duLlxuICAgICAgICAgICAgaWYgKGlzU3RhbmRhbG9uZU1vdmllICYmIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5tYXAoKGcsIGkpID0+IGkgPT09IDAgPyB7IC4uLmcsIGdyb3VwTmFtZTogU0VBUkNIX0NPTExFQ1RJT05TX0dST1VQX05BTUUgfSA6IGcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9ubHkgc2VhcmNoIG9uY2UgcGVyIGZyZXNoIGdyb3VwLWZldGNoIChub3Qgb24gZXZlcnkgcG9wdXAgcmVvcGVuIHdoaWxlIGNhY2hlZCBncm91cHMgYWxyZWFkeSBpbmNsdWRlIHRoZSBzZWFyY2ggcmVzdWx0cykuXG4gICAgICAgICAgICAvLyBnZXRDb250YWluaW5nQ29sbGVjdGlvbnMgaXRzZWxmIGlzIG1lbW9pemVkIHBlciBpdGVtIGZvciB0aGUgd2hvbGUgcGFnZSBzZXNzaW9uLCBzbyBldmVuIHRoaXMgY2FuJ3QgcmUtdHJpZ2dlciB0aGVcbiAgICAgICAgICAgIC8vIGV4cGVuc2l2ZSBiYWNrZW5kIHNjYW4gbW9yZSB0aGFuIG9uY2UgcGVyIGl0ZW0sIG5vIG1hdHRlciBob3cgb2Z0ZW4gdGhlIHBvcHVwIGlzIHJlb3BlbmVkIHdoaWxlIGl0J3MgcGVuZGluZy5cbiAgICAgICAgICAgIGNvbnN0IGlzU2VhcmNoaW5nQ29sbGVjdGlvbnMgPSAoaXNTdGFuZGFsb25lTW92aWUgfHwgaXNTb3VyY2VkRnJvbUNvbGxlY3Rpb24pICYmIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zICYmIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgbGV0IGNvbGxlY3Rpb25zU2VhcmNoRG9uZSA9ICFpc1NlYXJjaGluZ0NvbGxlY3Rpb25zXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uc1NlYXJjaDogUHJvbWlzZTx2b2lkPiA9IGlzU2VhcmNoaW5nQ29sbGVjdGlvbnNcbiAgICAgICAgICAgICAgICA/IGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQpLnRoZW4oY29sbGVjdGlvbkdyb3VwcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sbGVjdGlvbkdyb3Vwcy5sZW5ndGggfHwgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkICE9PSBpdGVtSWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxmR3JvdXAgPSBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwc1swXVxuICAgICAgICAgICAgICAgICAgICAvLyBFeGNsdWRlIHRoZSBjb2xsZWN0aW9uL3BsYXlsaXN0IHRoaXMgaXRlbSB3YXMgYWxyZWFkeSBwbGF5ZWQgZnJvbSAtIGl0J3MgYWxyZWFkeSB0aGUgYWN0aXZlL2RlZmF1bHQgZ3JvdXAuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dyb3VwcyA9IGNvbGxlY3Rpb25Hcm91cHMuZmlsdGVyKGcgPT4gZy5ncm91cElkICE9PSBzZWxmR3JvdXAuZ3JvdXBJZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdHcm91cHMubGVuZ3RoKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBbc2VsZkdyb3VwLCAuLi5uZXdHcm91cHNdLm1hcCgoZywgaSkgPT4gKHsgLi4uZywgaW5kZXhOdW1iZXI6IGkgfSkpXG4gICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7IGNvbGxlY3Rpb25zU2VhcmNoRG9uZSA9IHRydWUgfSlcbiAgICAgICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpXG5cbiAgICAgICAgICAgIGNvbnN0IGNhblN3aXRjaEdyb3VwcyA9ICgpOiBib29sZWFuID0+IHByb2dyYW1EYXRhU3RvcmUudHlwZSAhPT0gSXRlbVR5cGUuTW92aWUgfHwgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnNcblxuICAgICAgICAgICAgY29uc3QgcG9wdXBUaXRsZTogUG9wdXBUaXRsZVRlbXBsYXRlID0gbmV3IFBvcHVwVGl0bGVUZW1wbGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBGb2N1c0NvbnRhaW5lcicpLCAtMSwgcHJvZ3JhbURhdGFTdG9yZSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUucmVuZGVyKGFzeW5jIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIGlmICghY2FuU3dpdGNoR3JvdXBzKCkpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbnRlbnRDb250YWluZXInKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJydcblxuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVHcm91cEVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLCBjb250ZW50RGl2LCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwLmluZGV4TnVtYmVyLCBwb3B1cFRpdGxlLCBsb2FkR3JvdXBJdGVtcylcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cFZpZXdUb2tlbiA9IHByb2dyYW1EYXRhU3RvcmUuY3VycmVudFZpZXdUb2tlblxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25zU2VhcmNoRG9uZSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ3ByZXZpZXdTY3JvbGxTcGlubmVyJylcbiAgICAgICAgICAgICAgICBzcGlubmVyLmlubmVySFRNTCA9IHNwaW5uZXJIdG1sKClcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHNwaW5uZXIpXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVTcGlubmVyKHNwaW5uZXIpXG5cbiAgICAgICAgICAgICAgICBhd2FpdCBjb2xsZWN0aW9uc1NlYXJjaFxuICAgICAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGEgZ3JvdXAgd2FzIHNlbGVjdGVkLCBvciB0aGUgcG9wdXAgY2xvc2VkKSB3aGlsZSB0aGlzIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KGdyb3VwVmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVHcm91cEVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLCBjb250ZW50RGl2LCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwLmluZGV4TnVtYmVyLCBwb3B1cFRpdGxlLCBsb2FkR3JvdXBJdGVtcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFN3aXRjaGFibGUoY2FuU3dpdGNoR3JvdXBzKCkpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUoY2FuU3dpdGNoR3JvdXBzKCkpXG5cbiAgICAgICAgICAgIGF3YWl0IGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVMYXp5SXRlbUxpc3QoY29udGVudERpdiwgKHN0YXJ0SW5kZXgpID0+IGxvYWRHcm91cEl0ZW1zKGFjdGl2ZUdyb3VwSWQsIHN0YXJ0SW5kZXgpLCB2aWV3VG9rZW4sIGluaXRpYWxQYWdlLCBpbml0aWFsV2luZG93U3RhcnRJbmRleClcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VGV4dChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwPy5ncm91cE5hbWUgPz8gJycpXG4gICAgICAgICAgICBpZiAocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cCkgcG9wdXBUaXRsZS5zZXRXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cClcbiAgICAgICAgICAgIGlmIChwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgJiYgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8ucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odXBkYXRlZCA9PiBwb3B1cFRpdGxlLnNldFdhdGNoZWRDb3VudCh1cGRhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHdhdGNoZWQgY291bnQgZm9yIGdyb3VwICR7cHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8uZ3JvdXBJZH1gLCBleCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgaXRlbSB0aGF0IGlzIGN1cnJlbnRseSBwbGF5aW5nXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtID0gY29udGVudERpdi5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWRMaXN0SXRlbScpIFxuICAgICAgICAgICAgaWYgKCFhY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgZmluZCBhY3RpdmUgbWVkaWEgc291cmNlIGVsZW1lbnQgaW4gcHJldmlldyBsaXN0LiBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW5cIiwgcHJvZ3JhbURhdGFTdG9yZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0/LnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVubG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiVW5sb2FkaW5nIHZpZGVvIHZpZXdcIilcblxuICAgICAgICAvLyBDbGVhciBvbGQgZGF0YSBhbmQgcmVzZXQgcHJldmlld0NvbnRhaW5lckxvYWRlZCBmbGFnXG4gICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFZpZGVvRWxlbWVudD4oJ3ZpZGVvLmh0bWx2aWRlb3BsYXllcicpXG4gICAgICAgIHZpZGVvRWxlbWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIG9uVmlkZW9UaW1lVXBkYXRlKVxuICAgICAgICB2aWRlb0VsZW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JhdGVjaGFuZ2UnLCBvblZpZGVvUmF0ZUNoYW5nZSlcbiAgICAgICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IC0xXG5cbiAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgcHJlbG9hZE9ic2VydmVyID0gbnVsbFxuICAgICAgICBwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9IG51bGxcbiAgICAgICAgcGVuZGluZ1ByZWxvYWQgPSBudWxsXG5cbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyID0gbnVsbFxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BvcHVwUHJldmlld0J1dHRvbicpLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZSgpKVxuXG4gICAgICAgIHByZXZpZXdDb250YWluZXJMb2FkZWQgPSBmYWxzZSAvLyBSZXNldCBmbGFnIHdoZW4gdW5sb2FkaW5nXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGdldEFjdGl2ZUJ1dHRvbnNCYXIoKT8ucXVlcnlTZWxlY3RvcignI3BvcHVwUHJldmlld0J1dHRvbicpICE9IG51bGxcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9