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
    dialogBackdropId = 'dialogBackdrop';
    dialogContainerId = 'dialogContainer';
    popupContentContainerId = 'popupContentContainer';
    popupFocusContainerId = 'popupFocusContainer';
    constructor(container, positionAfterIndex) {
        super(container, positionAfterIndex);
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
const Group_1 = __webpack_require__(/*! ../Models/PreviewData/Group */ "./Web/Models/PreviewData/Group.ts");
class GroupListElementTemplate extends BaseTemplate_1.BaseTemplate {
    group;
    isCurrentGroup;
    showWatchedCount;
    constructor(container, positionAfterIndex, group, isCurrentGroup, showWatchedCount) {
        super(container, positionAfterIndex);
        this.group = group;
        this.isCurrentGroup = isCurrentGroup;
        this.showWatchedCount = showWatchedCount;
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
                    ${this.showWatchedCount ? `<div class="previewGroupWatchedCount">${(0, Group_1.formatWatchedCount)(this.group.playedItemCount, this.group.totalItemCount)}</div>` : ''}
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
exports.ItemDetailsTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class ItemDetailsTemplate extends BaseTemplate_1.BaseTemplate {
    item;
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
                <div class="endsAt mediaInfoItem">${this.formatEndTime(this.item.RunTimeTicks, this.item.UserData.PlaybackPositionTicks)}</div>
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
exports.ItemDetailsTemplate = ItemDetailsTemplate;


/***/ },

/***/ "./Web/Components/ListElementTemplate.ts"
/*!***********************************************!*\
  !*** ./Web/Components/ListElementTemplate.ts ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListElementTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
const FavoriteIconTemplate_1 = __webpack_require__(/*! ./QuickActions/FavoriteIconTemplate */ "./Web/Components/QuickActions/FavoriteIconTemplate.ts");
const PlayStateIconTemplate_1 = __webpack_require__(/*! ./QuickActions/PlayStateIconTemplate */ "./Web/Components/QuickActions/PlayStateIconTemplate.ts");
const ItemDetails_1 = __webpack_require__(/*! ./ItemDetails */ "./Web/Components/ItemDetails.ts");
const ItemType_1 = __webpack_require__(/*! ../Models/ItemType */ "./Web/Models/ItemType.ts");
const DataFetcher_1 = __webpack_require__(/*! ../Services/DataFetcher */ "./Web/Services/DataFetcher.ts");
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
        this.setElementId(`item-${item.Id}`);
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
        // add item details/info
        const detailsContainer = document.createElement('div');
        const details = new ItemDetails_1.ItemDetailsTemplate(detailsContainer, -1, this.item);
        details.render();
        const backgroundImageStyle = `background-image: url('../Items/${this.item.Id}/Images/Primary?tag=${this.item.PrimaryImageTag}')`;
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
                                            class="cardImageContainer cardContent itemAction lazy blurhashed lazy-image-fadein-fast ${this.programDataStore.pluginSettings.BlurThumbnail ? 'blur' : ''}"
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
                                            <button id="start-item-${this.item.Id}"
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
                        <div class="previewItemDescriptionColumn">
                            <span class="previewItemDescription ${this.programDataStore.pluginSettings.BlurDescription ? 'blur' : ''}">
                                ${this.item.Description ?? 'loading...'}
                            </span>
                            <button type="button" class="previewItemReadMoreButton hide">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    render(clickHandler) {
        const renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
        const playStateButton = document.getElementById(`playStateButton-${this.item.Id}`);
        playStateButton?.addEventListener('click', (e) => {
            e.stopPropagation();
            (0, DataFetcher_1.togglePlayedStateLocally)(this.programDataStore, this.item.Id);
        });
        if (this.item.Id !== this.programDataStore.activeMediaSourceId) {
            // add event handler to start the playback of this item
            const itemImageCard = document.getElementById(`start-item-${this.item.Id}`);
            itemImageCard.addEventListener('click', () => this.playbackHandler.play(this.item.Id, this.item.UserData.PlaybackPositionTicks));
        }
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
const Group_1 = __webpack_require__(/*! ../Models/PreviewData/Group */ "./Web/Models/PreviewData/Group.ts");
class PopupTitleTemplate extends BaseTemplate_1.BaseTemplate {
    programDataStore;
    constructor(container, positionAfterIndex, programDataStore) {
        super(container, positionAfterIndex);
        this.programDataStore = programDataStore;
        this.setElementId('popupTitleContainer');
    }
    getTemplate() {
        return `
            <div id="${this.getElementId()}" class="listItem previewPopupTitle">
                ${this.programDataStore.groups.length > 1 ?
            '<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons keyboard_backspace"></span>' :
            ''}
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
    setWatchedCount(playedItemCount, totalItemCount) {
        const watchedCountElement = this.getElement().querySelector('.previewGroupWatchedCount');
        if (watchedCountElement)
            watchedCountElement.innerText = (0, Group_1.formatWatchedCount)(playedItemCount, totalItemCount);
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
    item;
    constructor(container, positionAfterIndex, item) {
        super(container, positionAfterIndex);
        this.item = item;
        this.setElementId('favoriteButton-' + item.Id);
    }
    getTemplate() {
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="emby-ratingbutton"
                    type="button"
                    class="itemAction paper-icon-button-light emby-button"
                    data-action="none"
                    data-id="${this.item?.Id ?? ''}"
                    data-serverid="${this.item?.ServerId ?? ''}"
                    data-itemtype="Episode"
                    data-likes=""
                    data-isfavorite="${this.item?.UserData?.IsFavorite ?? false}"
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
    item;
    constructor(container, positionAfterIndex, item) {
        super(container, positionAfterIndex);
        this.item = item;
        this.setElementId('playStateButton-' + this.item.Id);
    }
    getTemplate() {
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="emby-playstatebutton"
                    type="button"
                    data-action="none"
                    class="itemAction paper-icon-button-light emby-button"
                    data-id="${this.item?.Id ?? ''}"
                    data-serverid="${this.item?.ServerId ?? ''}"
                    data-itemtype="Episode"
                    data-likes=""
                    data-played="${this.item?.UserData?.Played ?? false}"
                    title="Mark played">
                <span class="material-icons check playstatebutton-icon-${this.item?.UserData?.Played ? "played" : "unplayed"}"></span>
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
    container.querySelector('.mdl-spinner')?.classList.add('mdlSpinnerActive');
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
    Endpoints["ITEM_PREVIEW_DATA"] = "/Users/{userId}/{deviceId}/Items/{itemId}/PreviewData";
    Endpoints["GROUP_ITEMS"] = "/Users/{userId}/Groups/{groupId}/Items";
    Endpoints["SET_SOURCE_COLLECTION"] = "/Users/{userId}/{deviceId}/SourceCollection/{collectionId}";
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
const GroupListElementTemplate_1 = __webpack_require__(/*! ./Components/GroupListElementTemplate */ "./Web/Components/GroupListElementTemplate.ts");
const Endpoints_1 = __webpack_require__(/*! ./Endpoints */ "./Web/Endpoints.ts");
const ItemType_1 = __webpack_require__(/*! ./Models/ItemType */ "./Web/Models/ItemType.ts");
const Spinner_1 = __webpack_require__(/*! ./Components/Spinner */ "./Web/Components/Spinner.ts");
// The backend already returns Playlists/BoxSets and Folders in their own manual item/dissplay order
// sorting should only apply for season-based (Episode) groups, where it reflects actual episode order.
const preserveBackendOrderTypes = new Set([ItemType_1.ItemType.Playlist, ItemType_1.ItemType.BoxSet, ItemType_1.ItemType.Folder]);
class ListElementFactory {
    playbackHandler;
    programDataStore;
    constructor(playbackHandler, programDataStore) {
        this.playbackHandler = playbackHandler;
        this.programDataStore = programDataStore;
    }
    async createItemElements(items, parentDiv, offset = 0) {
        const preserveOrder = preserveBackendOrderTypes.has(this.programDataStore.type);
        if (!preserveOrder)
            items.sort((a, b) => a.IndexNumber - b.IndexNumber);
        for (let i = 0; i < items.length; i++) {
            // For Playlists/BoxSets, show the actual list position instead of the IndexNumber from their season/episode.
            const item = preserveOrder ? { ...items[i], IndexNumber: offset + i + 1 } : items[i];
            await this.renderItem(item, parentDiv, offset + i);
        }
    }
    async prependItemElements(items, parentDiv, offset) {
        const preserveOrder = preserveBackendOrderTypes.has(this.programDataStore.type);
        if (!preserveOrder)
            items.sort((a, b) => a.IndexNumber - b.IndexNumber);
        for (let i = items.length - 1; i >= 0; i--) {
            const item = preserveOrder ? { ...items[i], IndexNumber: offset + i + 1 } : items[i];
            await this.renderItem(item, parentDiv, -1);
        }
    }
    // Show a "Read more" button if description exceeds max height
    applyDescriptionReadMore(itemContainer) {
        const description = itemContainer.querySelector('.previewItemDescription');
        const readMoreButton = itemContainer.querySelector('.previewItemReadMoreButton');
        if (!description || !readMoreButton)
            return;
        description.classList.remove('expanded');
        readMoreButton.textContent = 'Read more';
        const isOverflowing = description.scrollHeight > description.clientHeight;
        readMoreButton.classList.toggle('hide', !isOverflowing);
        if (!isOverflowing)
            return;
        readMoreButton.onclick = (e) => {
            e.stopPropagation();
            const expanded = description.classList.toggle('expanded');
            readMoreButton.textContent = expanded ? 'Read less' : 'Read more';
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
                const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.ITEM_DESCRIPTION}`
                    .replace('{itemId}', item.Id));
                const result = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
                const newDescription = result?.Description;
                this.programDataStore.updateItem({
                    ...item,
                    Description: newDescription
                });
                itemContainer.querySelector('.previewItemDescription').textContent = newDescription;
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
                const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.ITEM_DESCRIPTION}`
                    .replace('{itemId}', item.Id));
                const result = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
                const newDescription = result?.Description;
                this.programDataStore.updateItem({
                    ...item,
                    Description: newDescription
                });
                itemNode.querySelector('.previewItemDescription').textContent = newDescription;
            }
            itemNode.classList.remove('hide');
            itemNode.classList.add('selectedListItem');
            this.applyDescriptionReadMore(itemNode);
        }
    }
    // Swaps an idle sentinel marker into a visible spinner once it's actually triggered a page load.
    showSentinelSpinner(sentinel) {
        sentinel.classList.add('previewScrollSpinner');
        sentinel.innerHTML = (0, Spinner_1.spinnerHtml)();
        (0, Spinner_1.activateSpinner)(sentinel);
    }
    // Appends pages when scrolling to the bottom.
    addScrollSentinel(parentDiv, loadPage, nextStartIndex, totalLoaded, viewToken) {
        const sentinel = document.createElement('div');
        parentDiv.appendChild(sentinel);
        const observer = new IntersectionObserver(async ([entry]) => {
            if (!entry.isIntersecting)
                return;
            observer.disconnect();
            this.showSentinelSpinner(sentinel);
            const { items, totalRecordCount } = await loadPage(nextStartIndex);
            // The view may have moved on (e.g. back to the group list) while this page was loading.
            if (!this.programDataStore.isCurrentView(viewToken))
                return;
            sentinel.remove();
            await this.createItemElements(items, parentDiv, totalLoaded);
            const newTotalLoaded = totalLoaded + items.length;
            if (newTotalLoaded < totalRecordCount)
                this.addScrollSentinel(parentDiv, loadPage, newTotalLoaded, newTotalLoaded, viewToken);
        }, { root: parentDiv, threshold: 0 });
        observer.observe(sentinel);
    }
    // Prepends pages when scrolling to the top.
    // currentStartIndex is the absolute index of whatever is currently the first loaded item
    addScrollSentinelBackward(parentDiv, loadPage, currentStartIndex, viewToken) {
        if (currentStartIndex <= 0)
            return;
        const sentinel = document.createElement('div');
        parentDiv.insertBefore(sentinel, parentDiv.firstChild);
        const observer = new IntersectionObserver(async ([entry]) => {
            if (!entry.isIntersecting)
                return;
            observer.disconnect();
            const scrollHeightBeforeSpinner = parentDiv.scrollHeight;
            this.showSentinelSpinner(sentinel);
            parentDiv.scrollTop += parentDiv.scrollHeight - scrollHeightBeforeSpinner;
            const pageSize = this.programDataStore.pluginSettings.EpisodePageSize;
            const newStartIndex = Math.max(0, currentStartIndex - pageSize);
            const { items } = await loadPage(newStartIndex);
            // The view may have moved on (e.g. back to the group list) while this page was loading.
            if (!this.programDataStore.isCurrentView(viewToken))
                return;
            const scrollHeightBeforePrepend = parentDiv.scrollHeight;
            sentinel.remove();
            await this.prependItemElements(items, parentDiv, newStartIndex);
            parentDiv.scrollTop += parentDiv.scrollHeight - scrollHeightBeforePrepend;
            this.addScrollSentinelBackward(parentDiv, loadPage, newStartIndex, viewToken);
        }, { root: parentDiv, threshold: 0 });
        observer.observe(sentinel);
    }
    async createLazyItemList(parentDiv, loadPage, viewToken, initialPage, initialOffset = 0) {
        const firstPage = initialPage ?? await loadPage(0);
        // The view may have moved on (e.g. back to the group list) while this page was loading.
        if (!this.programDataStore.isCurrentView(viewToken))
            return;
        await this.createItemElements(firstPage.items, parentDiv, initialOffset);
        const totalLoaded = initialOffset + firstPage.items.length;
        if (totalLoaded < firstPage.totalRecordCount)
            this.addScrollSentinel(parentDiv, loadPage, totalLoaded, totalLoaded, viewToken);
        this.addScrollSentinelBackward(parentDiv, loadPage, initialOffset, viewToken);
    }
    createGroupElements(groups, parentDiv, currentGroupIndex, titleContainer, loadItems) {
        groups.sort((a, b) => a.indexNumber - b.indexNumber);
        // Invalidates any item load still in progresss
        this.programDataStore.beginNewView();
        for (let i = 0; i < groups.length; i++) {
            const group = new GroupListElementTemplate_1.GroupListElementTemplate(parentDiv, i, groups[i], groups[i].indexNumber === currentGroupIndex, this.programDataStore.pluginSettings.ShowWatchedCount);
            group.render(async (e) => {
                e.stopPropagation();
                this.programDataStore.activeGroupId = groups[i].groupId;
                titleContainer.setText(groups[i].groupName);
                if (this.programDataStore.pluginSettings.ShowWatchedCount)
                    titleContainer.setWatchedCount(groups[i].playedItemCount, groups[i].totalItemCount);
                titleContainer.setVisible(true);
                parentDiv.innerHTML = '';
                // Reset in case this group was already loaded earlier in the same popup session,
                // so re-fetching page 0 doesn't duplicate items already sitting in the store.
                this.programDataStore.updateGroupItems(groups[i].groupId, []);
                const viewToken = this.programDataStore.beginNewView();
                await this.createLazyItemList(parentDiv, (startIndex) => loadItems(groups[i].groupId, startIndex), viewToken);
            });
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

/***/ "./Web/Models/PluginSettings.ts"
/*!**************************************!*\
  !*** ./Web/Models/PluginSettings.ts ***!
  \**************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultPluginSettings = void 0;
const ItemType_1 = __webpack_require__(/*! ./ItemType */ "./Web/Models/ItemType.ts");
exports.DefaultPluginSettings = {
    EnabledItemTypes: [ItemType_1.ItemType.Series, ItemType_1.ItemType.BoxSet, ItemType_1.ItemType.Movie, ItemType_1.ItemType.Folder, ItemType_1.ItemType.Video],
    BlurDescription: false,
    BlurThumbnail: false,
    EpisodePageSize: 10,
    ShowWatchedCount: false,
};


/***/ },

/***/ "./Web/Models/PreviewData/Group.ts"
/*!*****************************************!*\
  !*** ./Web/Models/PreviewData/Group.ts ***!
  \*****************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatWatchedCount = void 0;
const formatWatchedCount = (playedItemCount, totalItemCount) => `${playedItemCount}/${totalItemCount} watched`;
exports.formatWatchedCount = formatWatchedCount;


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

/***/ "./Web/Services/DataFetcher.ts"
/*!*************************************!*\
  !*** ./Web/Services/DataFetcher.ts ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataFetcher = exports.togglePlayedStateLocally = void 0;
const Group_1 = __webpack_require__(/*! ../Models/PreviewData/Group */ "./Web/Models/PreviewData/Group.ts");
function updateWatchedCountDom(programDataStore, group) {
    const text = (0, Group_1.formatWatchedCount)(group.playedItemCount, group.totalItemCount);
    if (group.groupId === programDataStore.activeGroupId) {
        const popupWatchedCount = document.getElementById('popupTitleContainer')?.querySelector('.previewGroupWatchedCount');
        if (popupWatchedCount)
            popupWatchedCount.innerText = text;
    }
    const groupListWatchedCount = document.getElementById(`group-${group.groupId}`)?.querySelector('.previewGroupWatchedCount');
    if (groupListWatchedCount)
        groupListWatchedCount.innerText = text;
}
function adjustWatchedCount(programDataStore, itemId, wasPlayed, isPlayed) {
    if (!programDataStore.pluginSettings.ShowWatchedCount)
        return;
    if (wasPlayed === isPlayed)
        return;
    const updatedGroup = programDataStore.adjustGroupPlayedCount(itemId, isPlayed ? 1 : -1);
    if (updatedGroup)
        updateWatchedCountDom(programDataStore, updatedGroup);
}
function togglePlayedStateLocally(programDataStore, itemId) {
    const item = programDataStore.getItemById(itemId);
    if (!item)
        return;
    const wasPlayed = item.UserData.Played;
    const isPlayed = !wasPlayed;
    programDataStore.updateItem({
        ...item,
        UserData: { ...item.UserData, Played: isPlayed }
    });
    adjustWatchedCount(programDataStore, itemId, wasPlayed, isPlayed);
}
exports.togglePlayedStateLocally = togglePlayedStateLocally;
class DataFetcher {
    programDataStore;
    constructor(programDataStore) {
        this.programDataStore = programDataStore;
        Events.on(ApiClient, 'message', (_event, message) => {
            if (message.MessageType !== 'UserDataChanged')
                return;
            if (message.Data.UserId !== ApiClient.getCurrentUserId())
                return;
            const userDataList = message.Data.UserDataList ?? [];
            for (const userData of userDataList) {
                const item = this.programDataStore.getItemById(userData.ItemId);
                if (!item)
                    continue;
                const wasPlayed = item.UserData.Played;
                this.programDataStore.updateItem({
                    ...item,
                    UserData: {
                        ...item.UserData,
                        Played: userData.Played,
                        IsFavorite: userData.IsFavorite,
                        PlaybackPositionTicks: userData.PlaybackPositionTicks,
                        PlayedPercentage: userData.PlayedPercentage
                    }
                });
                adjustWatchedCount(this.programDataStore, userData.ItemId, wasPlayed, userData.Played);
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
(__unused_webpack_module, exports) {


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
    logger;
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
const PluginSettings_1 = __webpack_require__(/*! ../Models/PluginSettings */ "./Web/Models/PluginSettings.ts");
const ServerSettings_1 = __webpack_require__(/*! ../Models/ServerSettings */ "./Web/Models/ServerSettings.ts");
class ProgramDataStore {
    _programData;
    _viewToken = 0;
    constructor() {
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
    get dataIsAllowedForPreview() {
        if (!this.allowedPreviewTypes.includes(this.type))
            return false;
        return this.groups.some(group => group.items.length >= 1);
    }
    get allowedPreviewTypes() {
        return this.pluginSettings.EnabledItemTypes;
    }
    getItemById(itemId) {
        return this.groups
            .flatMap(group => group.items)
            .find(item => item.Id === itemId);
    }
    updateGroupItems(groupId, items) {
        this._programData.groups = this._programData.groups.map(group => group.groupId === groupId ? { ...group, items } : group);
    }
    adjustGroupPlayedCount(itemId, delta) {
        const group = this.groups.find(g => g.items.some(item => item.Id === itemId));
        if (!group)
            return undefined;
        const updatedGroup = { ...group, playedItemCount: group.playedItemCount + delta };
        this.groups = this.groups.map(g => g.groupId === group.groupId ? updatedGroup : g);
        return updatedGroup;
    }
    updateItem(itemToUpdate) {
        this.groups = this.groups.map(group => group.items.some(item => item.Id === itemToUpdate.Id)
            ? { ...group, items: [...group.items.filter(item => item.Id !== itemToUpdate.Id), itemToUpdate] }
            : group);
    }
    // Called whenever the popup switches what it's displaying (opening, selecting a group, going back to the group list)
    beginNewView() {
        return ++this._viewToken;
    }
    isCurrentView(token) {
        return token === this._viewToken;
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
const Spinner_1 = __webpack_require__(/*! ./Components/Spinner */ "./Web/Components/Spinner.ts");
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
document?.head?.appendChild(inPlayerPreviewStyle);
// init services and helpers
const logger = new Logger_1.Logger();
const programDataStore = new ProgramDataStore_1.ProgramDataStore();
const playbackHandler = new PlaybackHandler_1.PlaybackHandler(logger);
const listElementFactory = new ListElementFactory_1.ListElementFactory(playbackHandler, programDataStore);
function initialize() {
    // Ensure ApiClient/Events exist and user is logged in
    if (typeof ApiClient === 'undefined' || typeof Events === 'undefined' || !ApiClient.getCurrentUserId?.()) {
        setTimeout(initialize, 300); // Increased retry delay slightly
        return;
    }
    new DataFetcher_1.DataFetcher(programDataStore);
    ApiClient.getPluginConfiguration('73833d5f-0bcb-45dc-ab8b-7ce668f4345d')
        .then((config) => programDataStore.pluginSettings = config);
    const serverSettingsUrl = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.SERVER_SETTINGS}`);
    ApiClient.ajax({ type: 'GET', url: serverSettingsUrl, dataType: 'json' })
        .then((config) => programDataStore.serverSettings = config);
}
initialize();
const videoPaths = ['/video'];
let previousRoutePath = null;
let previewContainerLoaded = false;
document.addEventListener('viewshow', viewShowEventHandler);
// Sometimes their can be stale rating buttons. thats why we take the last one from the DOM for the itemId
function getLatestUserRatingItemId() {
    const elements = document.querySelectorAll('.btnUserRating.autoSize.paper-icon-button-light');
    return elements[elements.length - 1]?.getAttribute('data-id') ?? null;
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
    programDataStore.activeMediaSourceId = itemId;
    const item = programDataStore.getItemById(itemId);
    if (!item || !item.RunTimeTicks)
        return;
    const positionTicks = this.currentTime * 10000000;
    const playedPercentage = (positionTicks / item.RunTimeTicks) * 100;
    programDataStore.updateItem({
        ...item,
        UserData: {
            ...item.UserData,
            PlaybackPositionTicks: positionTicks,
            PlayedPercentage: playedPercentage,
            Played: playedPercentage >= programDataStore.serverSettings.MaxResumePct
        }
    });
}
// Tracks which BoxSet/Playlist details page (if any) was visited immediately before navigating into playback
const DETAILS_ROUTE_PATH = '/details';
const collectionLikeItemTypes = new Set([ItemType_1.ItemType.BoxSet, ItemType_1.ItemType.Playlist]);
let pendingSourceCollectionId = null;
function recordSourceCollection(collectionId) {
    const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.SET_SOURCE_COLLECTION}`
        .replace('{userId}', ApiClient.getCurrentUserId())
        .replace('{deviceId}', ApiClient.deviceId())
        .replace('{collectionId}', collectionId));
    ApiClient.ajax({ type: 'GET', url }).catch((ex) => logger.error("Couldn't record source collection for playback session", ex));
}
function captureSourceCollection(currentRoutePath) {
    const [currentPath, currentQuery] = currentRoutePath.split('?');
    const previousPath = previousRoutePath?.split('?')[0];
    if (currentPath === DETAILS_ROUTE_PATH) {
        const detailsId = new URLSearchParams(currentQuery ?? '').get('id');
        pendingSourceCollectionId = null;
        if (!detailsId)
            return;
        ApiClient.getItem(ApiClient.getCurrentUserId(), detailsId).then((item) => {
            const itemType = ItemType_1.ItemType[item.Type];
            pendingSourceCollectionId = collectionLikeItemTypes.has(itemType) ? detailsId : null;
        });
        return;
    }
    if (videoPaths.includes(currentPath) && previousPath === DETAILS_ROUTE_PATH && pendingSourceCollectionId) {
        recordSourceCollection(pendingSourceCollectionId);
    }
    pendingSourceCollectionId = null;
}
// Retrieve the current colloection/playlist id thorugh a play action on a card the same way as hellyfin does it itself
// https://github.com/jellyfin/jellyfin-web/blob/release-10.11.z/src/components/shortcuts.js#L216
const PLAYBACK_TRIGGER_ACTIONS = new Set(['play', 'resume', 'playallfromhere']);
function onDocumentClickCapture(event) {
    const actionElement = event.target?.closest?.('[data-action]');
    if (!actionElement || !PLAYBACK_TRIGGER_ACTIONS.has(actionElement.getAttribute('data-action')))
        return;
    const card = actionElement.closest('[data-id]');
    if (!card)
        return;
    const childOfCollectionId = card.getAttribute('data-collectionid') ?? card.getAttribute('data-playlistid');
    if (childOfCollectionId) {
        recordSourceCollection(childOfCollectionId);
        return;
    }
    const cardItemType = ItemType_1.ItemType[card.getAttribute('data-type')];
    const cardId = card.getAttribute('data-id');
    if (cardId && collectionLikeItemTypes.has(cardItemType)) {
        recordSourceCollection(cardId);
    }
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
    // Attempts to load the video view, retrying up to 3 times if necessary.
    function attemptLoadVideoView(retryCount = 0) {
        if (videoPaths.includes(currentRoutePath)) {
            // if (programDataStore.dataIsAllowedForPreview) {
            // Check if the preview container is already loaded before loading
            if (!previewContainerLoaded && !isPreviewButtonCreated()) {
                loadVideoView();
                previewContainerLoaded = true; // Set flag to true after loading
                // }
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
        let previewButtonLoading = false;
        previewButton.render(previewButtonClickHandler);
        document.querySelector('video.htmlvideoplayer')?.addEventListener('timeupdate', onVideoTimeUpdate);
        async function previewButtonClickHandler() {
            if (previewButtonLoading)
                return;
            previewButtonLoading = true;
            try {
                await doPreviewButtonClick();
            }
            finally {
                previewButtonLoading = false;
            }
        }
        async function doPreviewButtonClick() {
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
                        totalItemCount: g.TotalItemCount
                    })),
                    activeGroupId: raw.ActiveGroupId,
                    activeItemIndex: raw.ActiveItemIndex
                };
            };
            const PAGE_SIZE = programDataStore.pluginSettings.EpisodePageSize;
            const loadGroupItems = async (groupId, startIndex = 0, limit = PAGE_SIZE) => {
                const userId = ApiClient.getCurrentUserId();
                const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.GROUP_ITEMS}`
                    .replace('{userId}', userId)
                    .replace('{groupId}', groupId), { startIndex, limit });
                const raw = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
                const result = { items: raw.Items, totalRecordCount: raw.TotalRecordCount };
                const existing = programDataStore.groups.find(g => g.groupId === groupId)?.items ?? [];
                programDataStore.updateGroupItems(groupId, [...existing, ...result.items]);
                return result;
            };
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
            contentDiv.innerHTML = `<div class="previewScrollSpinner">${(0, Spinner_1.spinnerHtml)()}</div>`;
            (0, Spinner_1.activateSpinner)(contentDiv);
            const itemId = getLatestUserRatingItemId();
            const { itemType, containerName, groups, activeGroupId, activeItemIndex } = await loadItemPreviewData(itemId);
            programDataStore.groups = groups;
            // Load a 3-page window (page of the active episode, plus one page before and after)
            const pageOfActiveEpisode = Math.floor(activeItemIndex / PAGE_SIZE);
            const initialWindowStartIndex = Math.max(0, (pageOfActiveEpisode - 1) * PAGE_SIZE);
            const initialWindowLimit = (pageOfActiveEpisode + 2) * PAGE_SIZE - initialWindowStartIndex;
            const initialPage = await loadGroupItems(activeGroupId, initialWindowStartIndex, initialWindowLimit);
            programDataStore.activeMediaSourceId = itemId;
            programDataStore.activeGroupId = activeGroupId;
            programDataStore.type = ItemType_1.ItemType[itemType];
            programDataStore.boxSetName = containerName ?? '';
            contentDiv.innerHTML = ''; // remove the loading spinner
            const viewToken = programDataStore.beginNewView();
            const hasSelectableGroups = programDataStore.type !== ItemType_1.ItemType.Movie;
            const popupTitle = new PopupTitleTemplate_1.PopupTitleTemplate(document.getElementById('popupFocusContainer'), -1, programDataStore);
            popupTitle.render((e) => {
                e.stopPropagation();
                if (!hasSelectableGroups)
                    return;
                popupTitle.setVisible(false);
                const contentDiv = document.getElementById('popupContentContainer');
                contentDiv.innerHTML = '';
                listElementFactory.createGroupElements(programDataStore.groups, contentDiv, programDataStore.activeGroup.indexNumber, popupTitle, loadGroupItems);
            });
            popupTitle.setVisible(hasSelectableGroups);
            await listElementFactory.createLazyItemList(contentDiv, (startIndex) => loadGroupItems(activeGroupId, startIndex), viewToken, initialPage, initialWindowStartIndex);
            popupTitle.setText(programDataStore.activeGroup?.groupName ?? '');
            popupTitle.setWatchedCount(programDataStore.activeGroup?.playedItemCount ?? 0, programDataStore.activeGroup?.totalItemCount ?? 0);
            // scroll to the item that is currently playing
            const activeItem = contentDiv.querySelector('.selectedListItem');
            if (!activeItem) {
                logger.error("Couldn't find active media source element in preview list. This should never happen", programDataStore);
            }
            activeItem?.parentElement.scrollIntoView();
        }
    }
    function unloadVideoView() {
        // Clear old data and reset previewContainerLoaded flag
        document.querySelector('video.htmlvideoplayer')?.removeEventListener('timeupdate', onVideoTimeUpdate);
        lastTrackedPositionSecond = -1;
        document.getElementById('previewPopup')?.remove();
        previewContainerLoaded = false; // Reset flag when unloading
    }
    function isPreviewButtonCreated() {
        return document.querySelector('.buttons').querySelector('#popupPreviewButton') !== null;
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBc0IsR0FBRyxLQUFLLEVBQUMsNEJBQTRCO0lBQy9ELENBQUM7SUFFRCxTQUFTLHNCQUFzQjtRQUMzQixPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEtBQUssSUFBSTtJQUMzRixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0Jhc2VUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Hcm91cExpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvSXRlbURldGFpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvUGxheVN0YXRlSWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1NwaW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0VuZHBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTGlzdEVsZW1lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvSXRlbVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9QbHVnaW5TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvU2VydmVyU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0RhdGFGZXRjaGVyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vV2ViL0luUGxheWVyUHJldmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVRlbXBsYXRlIHtcbiAgICAvKlxuICAgICAqIHRoZSBIVE1MIGJhc2VkIElEIG9mIHRoZSBuZXcgZ2VuZXJhdGVkIEVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGVsZW1lbnRJZDogc3RyaW5nO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcHJpdmF0ZSBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikgeyB9XG5cbiAgICBwdWJsaWMgZ2V0Q29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbkFmdGVySW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25BZnRlckluZGV4O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRFbGVtZW50SWQoZWxlbWVudElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEVsZW1lbnRJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50SWQ7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5nZXRFbGVtZW50SWQoKX1gKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogc3RyaW5nO1xuXG4gICAgYWJzdHJhY3QgcmVuZGVyKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiB2b2lkO1xuXG4gICAgcHJvdGVjdGVkIGFkZEVsZW1lbnRUb0NvbnRhaW5lciguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogSFRNTEVsZW1lbnQge1xuICAgICAgICAvLyBBZGQgRWxlbWVudCBhcyB0aGUgZmlyc3QgY2hpbGQgaWYgcG9zaXRpb24gaXMgbmVnYXRpdmVcbiAgICAgICAgaWYgKHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgPCAwICYmIHRoaXMuZ2V0Q29udGFpbmVyKCkuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmZpcnN0RWxlbWVudENoaWxkLmJlZm9yZSh0aGlzLnN0cmluZ1RvTm9kZSh0aGlzLmdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnMpKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBFbGVtZW50IGlmIGNvbnRhaW5lciBpcyBlbXB0eVxuICAgICAgICBpZiAoIXRoaXMuZ2V0Q29udGFpbmVyKCkuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmlubmVySFRNTCA9IHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2hpbGRCZWZvcmUgPSB0aGlzLmdldENvbnRhaW5lcigpLmxhc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29udGFpbmVyKCkuY2hpbGRyZW4ubGVuZ3RoID4gdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSAmJiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpID49IDApXG4gICAgICAgICAgICBjaGlsZEJlZm9yZSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuY2hpbGRyZW5bdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKV07XG4gICAgICAgIFxuICAgICAgICBjaGlsZEJlZm9yZS5hZnRlcih0aGlzLnN0cmluZ1RvTm9kZSh0aGlzLmdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnMpKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIHN0cmluZ1RvTm9kZSh0ZW1wbGF0ZVN0cmluZzogc3RyaW5nKTogTm9kZSB7XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSB0ZW1wbGF0ZVN0cmluZztcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2dDb250YWluZXJUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgZGlhbG9nQmFja2Ryb3BJZCA9ICdkaWFsb2dCYWNrZHJvcCdcbiAgICBkaWFsb2dDb250YWluZXJJZCA9ICdkaWFsb2dDb250YWluZXInXG4gICAgcG9wdXBDb250ZW50Q29udGFpbmVySWQgPSAncG9wdXBDb250ZW50Q29udGFpbmVyJ1xuICAgIHBvcHVwRm9jdXNDb250YWluZXJJZCA9ICdwb3B1cEZvY3VzQ29udGFpbmVyJ1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3ByZXZpZXdQb3B1cCcpO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZGlhbG9nQmFja2Ryb3BJZH1cIiBjbGFzcz1cImRpYWxvZ0JhY2tkcm9wIGRpYWxvZ0JhY2tkcm9wT3BlbmVkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5kaWFsb2dDb250YWluZXJJZH1cIiBjbGFzcz1cImRpYWxvZ0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLnBvcHVwRm9jdXNDb250YWluZXJJZH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9jdXNjb250YWluZXIgZGlhbG9nIGFjdGlvbnNoZWV0LW5vdC1mdWxsc2NyZWVuIGFjdGlvblNoZWV0IGNlbnRlcmVkRGlhbG9nIG9wZW5lZCBwcmV2aWV3UG9wdXAgYWN0aW9uU2hlZXRDb250ZW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhpc3Rvcnk9XCJ0cnVlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJlbW92ZW9uY2xvc2U9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLnBvcHVwQ29udGVudENvbnRhaW5lcklkfVwiIGNsYXNzPVwiYWN0aW9uU2hlZXRTY3JvbGxlciBzY3JvbGxZIHByZXZpZXdQb3B1cFNjcm9sbGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCk6IGFueSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZ2V0RWxlbWVudElkKCkpKVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuaW1wb3J0IHtmb3JtYXRXYXRjaGVkQ291bnQsIEdyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cExpc3RFbGVtZW50VGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGdyb3VwOiBHcm91cCwgcHJpdmF0ZSBpc0N1cnJlbnRHcm91cDogYm9vbGVhbiwgcHJpdmF0ZSBzaG93V2F0Y2hlZENvdW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGdyb3VwLSR7Z3JvdXAuZ3JvdXBJZH1gKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdEl0ZW0gbGlzdEl0ZW0tYnV0dG9uIGFjdGlvblNoZWV0TWVudUl0ZW0gZW1ieS1idXR0b24gcHJldmlld0xpc3RJdGVtXCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuZ3JvdXAuZ3JvdXBJZH1cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld0l0ZW1UaXRsZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuaXNDdXJyZW50R3JvdXAgPyBcIm1hdGVyaWFsLWljb25zIGNoZWNrXCIgOiBcIlwifVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RJdGVtQm9keSBhY3Rpb25zaGVldExpc3RJdGVtQm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25TaGVldEl0ZW1UZXh0XCI+JHt0aGlzLmdyb3VwLmdyb3VwTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuc2hvd1dhdGNoZWRDb3VudCA/IGA8ZGl2IGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50XCI+JHtmb3JtYXRXYXRjaGVkQ291bnQodGhpcy5ncm91cC5wbGF5ZWRJdGVtQ291bnQsIHRoaXMuZ3JvdXAudG90YWxJdGVtQ291bnQpfTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IGNsaWNrSGFuZGxlcihlKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbHNUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgaXRlbS0ke2l0ZW0uSWR9YCk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX0tZGV0YWlsc1wiIGNsYXNzPVwiaXRlbU1pc2NJbmZvIGl0ZW1NaXNjSW5mby1wcmltYXJ5IHByZXZpZXdJdGVtRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLlByZW1pZXJlRGF0ZSA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAkeyhuZXcgRGF0ZSh0aGlzLml0ZW0uUHJlbWllcmVEYXRlKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuZ2V0TG9jYWxlKCkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPiR7dGhpcy5mb3JtYXRSdW5UaW1lKHRoaXMuaXRlbS5SdW5UaW1lVGlja3MpfTwvZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNvbW11bml0eVJhdGluZyA/IGA8ZGl2IGNsYXNzPVwic3RhclJhdGluZ0NvbnRhaW5lciBtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgc3Rhckljb24gc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ29tbXVuaXR5UmF0aW5nLnRvRml4ZWQoMSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZyA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbSBtZWRpYUluZm9Dcml0aWNSYXRpbmcgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nID49IDYwID8gJ21lZGlhSW5mb0NyaXRpY1JhdGluZ0ZyZXNoJyA6ICdtZWRpYUluZm9Dcml0aWNSYXRpbmdSb3R0ZW4nfVwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmd9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmRzQXQgbWVkaWFJbmZvSXRlbVwiPiR7dGhpcy5mb3JtYXRFbmRUaW1lKHRoaXMuaXRlbS5SdW5UaW1lVGlja3MsIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExvY2FsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmxhbmd1YWdlc1xuICAgICAgICAgICAgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIC8vIEB0cy1pZ25vcmUgZm9yIHVzZXJMYW5ndWFnZSAodGhpcyBhZGRzIHN1cHBvcnQgZm9yIElFKSBUT0RPOiBNb3ZlIHRvIGludGVyZmFjZVxuICAgICAgICAgICAgOiAobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9ybWF0UnVuVGltZSh0aWNrczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgLy8gZm9ybWF0IHRoZSB0aWNrcyB0byBhIHN0cmluZyB3aXRoIG1pbnV0ZXMgYW5kIGhvdXJzXG4gICAgICAgIHRpY2tzIC89IDEwMDAwOyAvLyBjb252ZXJ0IGZyb20gbWljcm9zZWNvbmRzIHRvIG1pbGxpc2Vjb25kc1xuICAgICAgICBsZXQgaG91cnM6IG51bWJlciA9IE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDM2MDApICUgMjQpO1xuICAgICAgICBsZXQgbWludXRlczogbnVtYmVyID0gTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gNjApICUgNjApO1xuICAgICAgICBsZXQgaG91cnNTdHJpbmc6IHN0cmluZyA9IGhvdXJzID4gMCA/IGAke2hvdXJzfWggYCA6ICcnO1xuICAgICAgICByZXR1cm4gYCR7aG91cnNTdHJpbmd9JHttaW51dGVzfW1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9ybWF0RW5kVGltZShydW50aW1lVGlja3M6IG51bWJlciwgcGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBjb252ZXJ0IGZyb20gbWljcm9zZWNvbmRzIHRvIG1pbGxpc2Vjb25kc1xuICAgICAgICBydW50aW1lVGlja3MgLz0gMTAwMDA7XG4gICAgICAgIHBsYXliYWNrUG9zaXRpb25UaWNrcyAvPSAxMDAwMDtcblxuICAgICAgICBsZXQgdGlja3M6IG51bWJlciA9IERhdGUubm93KCkgKyAocnVudGltZVRpY2tzKTtcbiAgICAgICAgdGlja3MgLT0gKG5ldyBEYXRlKCkpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7IC8vIGFkanVzdCBmb3IgdGltZXpvbmVcbiAgICAgICAgdGlja3MgLT0gcGxheWJhY2tQb3NpdGlvblRpY2tzOyAvLyBzdWJ0cmFjdCB0aGUgcGxheWJhY2sgcG9zaXRpb25cblxuICAgICAgICBsZXQgaG91cnM6IHN0cmluZyA9IHRoaXMuemVyb1BhZChNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyAzNjAwKSAlIDI0KSk7XG4gICAgICAgIGxldCBtaW51dGVzOiBzdHJpbmcgPSB0aGlzLnplcm9QYWQoTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gNjApICUgNjApKTtcblxuICAgICAgICByZXR1cm4gYEVuZHMgYXQgJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB6ZXJvUGFkKG51bTogbnVtYmVyLCBwbGFjZXM6IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gU3RyaW5nKG51bSkucGFkU3RhcnQocGxhY2VzLCAnMCcpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIlxuaW1wb3J0IHtGYXZvcml0ZUljb25UZW1wbGF0ZX0gZnJvbSBcIi4vUXVpY2tBY3Rpb25zL0Zhdm9yaXRlSWNvblRlbXBsYXRlXCJcbmltcG9ydCB7UGxheVN0YXRlSWNvblRlbXBsYXRlfSBmcm9tIFwiLi9RdWlja0FjdGlvbnMvUGxheVN0YXRlSWNvblRlbXBsYXRlXCJcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi4vU2VydmljZXMvUGxheWJhY2tIYW5kbGVyXCJcbmltcG9ydCB7SXRlbURldGFpbHNUZW1wbGF0ZX0gZnJvbSBcIi4vSXRlbURldGFpbHNcIlxuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIlxuaW1wb3J0IHt0b2dnbGVQbGF5ZWRTdGF0ZUxvY2FsbHl9IGZyb20gXCIuLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiXG5cbmV4cG9ydCBjbGFzcyBMaXN0RWxlbWVudFRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHF1aWNrQWN0aW9uQ29udGFpbmVyOiBIVE1MRWxlbWVudFxuICAgIHByaXZhdGUgcGxheVN0YXRlSWNvbjogUGxheVN0YXRlSWNvblRlbXBsYXRlXG4gICAgcHJpdmF0ZSBmYXZvcml0ZUljb246IEZhdm9yaXRlSWNvblRlbXBsYXRlXG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSwgcHJpdmF0ZSBwbGF5YmFja0hhbmRsZXI6IFBsYXliYWNrSGFuZGxlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgaXRlbS0ke2l0ZW0uSWR9YClcblxuICAgICAgICAvLyBjcmVhdGUgdGVtcCBxdWljayBhY3Rpb24gY29udGFpbmVyXG4gICAgICAgIHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIC8vIGNyZWF0ZSBxdWljayBhY3Rpb25zXG4gICAgICAgIHRoaXMucGxheVN0YXRlSWNvbiA9IG5ldyBQbGF5U3RhdGVJY29uVGVtcGxhdGUodGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSlcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24gPSBuZXcgRmF2b3JpdGVJY29uVGVtcGxhdGUodGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciwgMCwgdGhpcy5pdGVtKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGFkZCBxdWljayBhY3Rpb25zXG4gICAgICAgIHRoaXMucGxheVN0YXRlSWNvbi5yZW5kZXIoKVxuICAgICAgICB0aGlzLmZhdm9yaXRlSWNvbi5yZW5kZXIoKVxuXG4gICAgICAgIC8vIGFkZCBpdGVtIGRldGFpbHMvaW5mb1xuICAgICAgICBjb25zdCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IGRldGFpbHM6IEl0ZW1EZXRhaWxzVGVtcGxhdGUgPSBuZXcgSXRlbURldGFpbHNUZW1wbGF0ZShkZXRhaWxzQ29udGFpbmVyLCAtMSwgdGhpcy5pdGVtKVxuICAgICAgICBkZXRhaWxzLnJlbmRlcigpXG5cbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEltYWdlU3R5bGU6IHN0cmluZyA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL0l0ZW1zLyR7dGhpcy5pdGVtLklkfS9JbWFnZXMvUHJpbWFyeT90YWc9JHt0aGlzLml0ZW0uUHJpbWFyeUltYWdlVGFnfScpYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5pdGVtLklkfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbUNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5JbmRleE51bWJlciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSAhPT0gSXRlbVR5cGUuTW92aWVcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPyBgPHNwYW4+JHt0aGlzLml0ZW0uSW5kZXhOdW1iZXJ9PC9zcGFuPmAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuaXRlbS5OYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMucXVpY2tBY3Rpb25Db250YWluZXIuaW5uZXJIVE1MfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3TGlzdEl0ZW1Db250ZW50IGhpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtkZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcHJldmlld0l0ZW1Db250ZW50Um93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBvdmVyZmxvd0JhY2tkcm9wQ2FyZCBjYXJkLWhvdmVyYWJsZSBjYXJkLXdpdGh1c2VyZGF0YSBwcmV2aWV3SXRlbUltYWdlQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkQm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkU2NhbGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkUGFkZGVyIGNhcmRQYWRkZXItb3ZlcmZsb3dCYWNrZHJvcCBsYXp5LWhpZGRlbi1jaGlsZHJlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZEltYWdlSWNvbiBtYXRlcmlhbC1pY29ucyB0dlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInByZXZpZXdJdGVtSW1hZ2VDYXJkLSR7dGhpcy5pdGVtLklkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZEltYWdlQ29udGFpbmVyIGNhcmRDb250ZW50IGl0ZW1BY3Rpb24gbGF6eSBibHVyaGFzaGVkIGxhenktaW1hZ2UtZmFkZWluLWZhc3QgJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuQmx1clRodW1ibmFpbCA/ICdibHVyJyA6ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiJHtiYWNrZ3JvdW5kSW1hZ2VTdHlsZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJpbm5lckNhcmRGb290ZXIgZnVsbElubmVyQ2FyZEZvb3RlciBpbm5lckNhcmRGb290ZXJDbGVhciBpdGVtUHJvZ3Jlc3NCYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1Qcm9ncmVzc0JhckZvcmVncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoke3RoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlfSU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uSWQgIT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImNhcmRPdmVybGF5Q29udGFpbmVyIGl0ZW1BY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydC1pdGVtLSR7dGhpcy5pdGVtLklkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkT3ZlcmxheUJ1dHRvbiBjYXJkT3ZlcmxheUJ1dHRvbi1ob3ZlciBpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGNhcmRPdmVybGF5RmFiLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwicmVzdW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNhcmRPdmVybGF5QnV0dG9uSWNvbiBjYXJkT3ZlcmxheUJ1dHRvbkljb24taG92ZXIgcGxheV9hcnJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkJsdXJEZXNjcmlwdGlvbiA/ICdibHVyJyA6ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5EZXNjcmlwdGlvbiA/PyAnbG9hZGluZy4uLid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbiBoaWRlXCI+UmVhZCBtb3JlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xpY2tIYW5kbGVyKGUpKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcGxheVN0YXRlQnV0dG9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGF5U3RhdGVCdXR0b24tJHt0aGlzLml0ZW0uSWR9YClcbiAgICAgICAgcGxheVN0YXRlQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB0b2dnbGVQbGF5ZWRTdGF0ZUxvY2FsbHkodGhpcy5wcm9ncmFtRGF0YVN0b3JlLCB0aGlzLml0ZW0uSWQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHRoaXMuaXRlbS5JZCAhPT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQpIHtcbiAgICAgICAgICAgIC8vIGFkZCBldmVudCBoYW5kbGVyIHRvIHN0YXJ0IHRoZSBwbGF5YmFjayBvZiB0aGlzIGl0ZW1cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JbWFnZUNhcmQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0YXJ0LWl0ZW0tJHt0aGlzLml0ZW0uSWR9YClcbiAgICAgICAgICAgIGl0ZW1JbWFnZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnBsYXliYWNrSGFuZGxlci5wbGF5KHRoaXMuaXRlbS5JZCwgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcykpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge2Zvcm1hdFdhdGNoZWRDb3VudH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBUaXRsZVRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3UG9wdXBUaXRsZVwiPlxuICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5ncm91cHMubGVuZ3RoID4gMSA/XG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImFjdGlvbnNoZWV0TWVudUl0ZW1JY29uIGxpc3RJdGVtSWNvbiBsaXN0SXRlbUljb24tdHJhbnNwYXJlbnQgbWF0ZXJpYWwtaWNvbnMga2V5Ym9hcmRfYmFja3NwYWNlXCI+PC9zcGFuPicgOiBcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiYWN0aW9uU2hlZXRUaXRsZVwiPjwvaDE+XG4gICAgICAgICAgICAgICAgJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCA/ICc8ZGl2IGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50XCI+PC9kaXY+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xpY2tIYW5kbGVyKGUpKVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVyVGV4dCA9IHRleHRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0V2F0Y2hlZENvdW50KHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHdhdGNoZWRDb3VudEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCcpXG4gICAgICAgIGlmICh3YXRjaGVkQ291bnRFbGVtZW50KSB3YXRjaGVkQ291bnRFbGVtZW50LmlubmVyVGV4dCA9IGZvcm1hdFdhdGNoZWRDb3VudChwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50KVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0VmlzaWJsZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KClcbiAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFByZXZpZXdCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBQcmV2aWV3QnV0dG9uJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImF1dG9TaXplIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCIgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXBpc29kZSBQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+XG4gICAgICAgICAgICAgICAgPHN2ZyBpZD1cInN2ZzFcIlxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYgNFwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwibGF5ZXIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3Q0N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NjQ2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzLjc1Njg2NzZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMi4xNjkzNjYxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIwLjIzODIzMzAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIxLjgyNTczMzVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc2NTk3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjAyOTE0MzcsMS4wMzIwNDgyIGggMy43NTI4OTkxIHYgMi4xNzIyMzk0IGwgMC4wMDY3NiwtMi4xNTcyNTk1IHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny04XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc3NDI3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjgyMjg2MTQsMC4yMzg3MTMzNiBoIDMuNzU5MjU5IFYgMi40MTAxMjExIGwgLTAuMDA2OCwtMi4xNzE0MDc3NCB6XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiBhbnkgPT4gY2xpY2tIYW5kbGVyKCkpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ2Zhdm9yaXRlQnV0dG9uLScgKyBpdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXJhdGluZ2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0/LklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuaXRlbT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pc2Zhdm9yaXRlPVwiJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5Jc0Zhdm9yaXRlID8/IGZhbHNlfVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZmF2b3JpdGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIFBsYXlTdGF0ZUljb25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwbGF5U3RhdGVCdXR0b24tJyArIHRoaXMuaXRlbS5JZClcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1wbGF5c3RhdGVidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5pdGVtPy5JZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNlcnZlcmlkPVwiJHt0aGlzLml0ZW0/LlNlcnZlcklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbXR5cGU9XCJFcGlzb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1saWtlcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGxheWVkPVwiJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5QbGF5ZWQgPz8gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNYXJrIHBsYXllZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2hlY2sgcGxheXN0YXRlYnV0dG9uLWljb24tJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5QbGF5ZWQgPyBcInBsYXllZFwiIDogXCJ1bnBsYXllZFwifVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn1cbiIsImNvbnN0IFNQSU5ORVJfTEFZRVJTX0hUTUw6IHN0cmluZyA9IFsxLCAyLCAzLCA0XS5tYXAobGF5ZXIgPT5cbiAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19sYXllciBtZGwtc3Bpbm5lcl9fbGF5ZXItJHtsYXllcn1cIj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXIgbWRsLXNwaW5uZXJfX2xlZnRcIj5gICtcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZSBtZGwtc3Bpbm5lcl9fY2lyY2xlTGVmdFwiPjwvZGl2PmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZS1jbGlwcGVyIG1kbC1zcGlubmVyX19yaWdodFwiPmAgK1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlIG1kbC1zcGlubmVyX19jaXJjbGVSaWdodFwiPjwvZGl2PmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgYDwvZGl2PmBcbikuam9pbignJylcblxuZXhwb3J0IGZ1bmN0aW9uIHNwaW5uZXJIdG1sKGV4dHJhQ2xhc3Nlczogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdiBkaXI9XCJsdHJcIiBjbGFzcz1cImRvY3NwaW5uZXIgbWRsLXNwaW5uZXIgJHtleHRyYUNsYXNzZXN9XCI+JHtTUElOTkVSX0xBWUVSU19IVE1MfTwvZGl2PmBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlU3Bpbm5lcihjb250YWluZXI6IFBhcmVudE5vZGUpOiB2b2lkIHtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm1kbC1zcGlubmVyJyk/LmNsYXNzTGlzdC5hZGQoJ21kbFNwaW5uZXJBY3RpdmUnKVxufSIsImV4cG9ydCBlbnVtIEVuZHBvaW50cyB7XG4gICAgQkFTRSA9IFwiSW5QbGF5ZXJQcmV2aWV3XCIsXG4gICAgSVRFTV9ERVNDUklQVElPTiA9IFwiL0l0ZW1zL3tpdGVtSWR9XCIsXG4gICAgUExBWV9NRURJQSA9IFwiL0l0ZW1zL3tpdGVtSWR9L1BsYXkve3RpY2tzfVwiLFxuICAgIE5PV19QTEFZSU5HX0lURU0gPSBcIi9Ob3dQbGF5aW5nSXRlbVwiLFxuICAgIFNFUlZFUl9TRVRUSU5HUyA9IFwiL1NlcnZlclNldHRpbmdzXCIsXG4gICAgSVRFTV9QUkVWSUVXX0RBVEEgPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L0l0ZW1zL3tpdGVtSWR9L1ByZXZpZXdEYXRhXCIsXG4gICAgR1JPVVBfSVRFTVMgPSBcIi9Vc2Vycy97dXNlcklkfS9Hcm91cHMve2dyb3VwSWR9L0l0ZW1zXCIsXG4gICAgU0VUX1NPVVJDRV9DT0xMRUNUSU9OID0gXCIvVXNlcnMve3VzZXJJZH0ve2RldmljZUlkfS9Tb3VyY2VDb2xsZWN0aW9uL3tjb2xsZWN0aW9uSWR9XCJcbn0iLCJpbXBvcnQge0xpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtHcm91cExpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlXCI7XG5pbXBvcnQge1BvcHVwVGl0bGVUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGVcIjtcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi9FbmRwb2ludHNcIjtcbmltcG9ydCB7R3JvdXBJdGVtc1Jlc3VsdH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwSXRlbXNSZXN1bHRcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHthY3RpdmF0ZVNwaW5uZXIsIHNwaW5uZXJIdG1sfSBmcm9tIFwiLi9Db21wb25lbnRzL1NwaW5uZXJcIjtcblxuLy8gVGhlIGJhY2tlbmQgYWxyZWFkeSByZXR1cm5zIFBsYXlsaXN0cy9Cb3hTZXRzIGFuZCBGb2xkZXJzIGluIHRoZWlyIG93biBtYW51YWwgaXRlbS9kaXNzcGxheSBvcmRlclxuLy8gc29ydGluZyBzaG91bGQgb25seSBhcHBseSBmb3Igc2Vhc29uLWJhc2VkIChFcGlzb2RlKSBncm91cHMsIHdoZXJlIGl0IHJlZmxlY3RzIGFjdHVhbCBlcGlzb2RlIG9yZGVyLlxuY29uc3QgcHJlc2VydmVCYWNrZW5kT3JkZXJUeXBlczogU2V0PEl0ZW1UeXBlPiA9IG5ldyBTZXQoW0l0ZW1UeXBlLlBsYXlsaXN0LCBJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLkZvbGRlcl0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0RWxlbWVudEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkgeyB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlSXRlbUVsZW1lbnRzKGl0ZW1zOiBQcmV2aWV3SXRlbVtdLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50LCBvZmZzZXQ6IG51bWJlciA9IDApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcHJlc2VydmVPcmRlciA9IHByZXNlcnZlQmFja2VuZE9yZGVyVHlwZXMuaGFzKHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlKVxuICAgICAgICBpZiAoIXByZXNlcnZlT3JkZXIpXG4gICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLkluZGV4TnVtYmVyIC0gYi5JbmRleE51bWJlcilcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEZvciBQbGF5bGlzdHMvQm94U2V0cywgc2hvdyB0aGUgYWN0dWFsIGxpc3QgcG9zaXRpb24gaW5zdGVhZCBvZiB0aGUgSW5kZXhOdW1iZXIgZnJvbSB0aGVpciBzZWFzb24vZXBpc29kZS5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcmVzZXJ2ZU9yZGVyID8geyAuLi5pdGVtc1tpXSwgSW5kZXhOdW1iZXI6IG9mZnNldCArIGkgKyAxIH0gOiBpdGVtc1tpXVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIHBhcmVudERpdiwgb2Zmc2V0ICsgaSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgYXN5bmMgcHJlcGVuZEl0ZW1FbGVtZW50cyhpdGVtczogUHJldmlld0l0ZW1bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcHJlc2VydmVPcmRlciA9IHByZXNlcnZlQmFja2VuZE9yZGVyVHlwZXMuaGFzKHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlKVxuICAgICAgICBpZiAoIXByZXNlcnZlT3JkZXIpXG4gICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLkluZGV4TnVtYmVyIC0gYi5JbmRleE51bWJlcilcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHByZXNlcnZlT3JkZXIgPyB7IC4uLml0ZW1zW2ldLCBJbmRleE51bWJlcjogb2Zmc2V0ICsgaSArIDEgfSA6IGl0ZW1zW2ldXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlbmRlckl0ZW0oaXRlbSwgcGFyZW50RGl2LCAtMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3cgYSBcIlJlYWQgbW9yZVwiIGJ1dHRvbiBpZiBkZXNjcmlwdGlvbiBleGNlZWRzIG1heCBoZWlnaHRcbiAgICBwcml2YXRlIGFwcGx5RGVzY3JpcHRpb25SZWFkTW9yZShpdGVtQ29udGFpbmVyOiBFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaXRlbUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKVxuICAgICAgICBjb25zdCByZWFkTW9yZUJ1dHRvbiA9IGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uJylcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbiB8fCAhcmVhZE1vcmVCdXR0b24pIHJldHVyblxuXG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJylcbiAgICAgICAgcmVhZE1vcmVCdXR0b24udGV4dENvbnRlbnQgPSAnUmVhZCBtb3JlJ1xuXG4gICAgICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSBkZXNjcmlwdGlvbi5zY3JvbGxIZWlnaHQgPiBkZXNjcmlwdGlvbi5jbGllbnRIZWlnaHRcbiAgICAgICAgcmVhZE1vcmVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFpc092ZXJmbG93aW5nKVxuICAgICAgICBpZiAoIWlzT3ZlcmZsb3dpbmcpIHJldHVyblxuXG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLm9uY2xpY2sgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpXG4gICAgICAgICAgICByZWFkTW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9IGV4cGFuZGVkID8gJ1JlYWQgbGVzcycgOiAnUmVhZCBtb3JlJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByZW5kZXJJdGVtKGl0ZW06IFByZXZpZXdJdGVtLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBpdGVtTGlzdEVsZW1lbnRUZW1wbGF0ZSA9IG5ldyBMaXN0RWxlbWVudFRlbXBsYXRlKHBhcmVudERpdiwgcG9zaXRpb25BZnRlckluZGV4LCBpdGVtLCB0aGlzLnBsYXliYWNrSGFuZGxlciwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlKTtcbiAgICAgICAgaXRlbUxpc3RFbGVtZW50VGVtcGxhdGUucmVuZGVyKGFzeW5jIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBoaWRlIGl0ZW0gY29udGVudCBmb3IgYWxsIGV4aXN0aW5nIGl0ZW1zIGluIHRoZSBwcmV2aWV3IGxpc3RcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJldmlld0xpc3RJdGVtQ29udGVudFwiKS5mb3JFYWNoKChlbGVtZW50OiBFbGVtZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZExpc3RJdGVtJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lcjogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLSR7aXRlbS5JZH1gKS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0xpc3RJdGVtQ29udGVudCcpO1xuXG4gICAgICAgICAgICAvLyBsb2FkIGl0ZW0gZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGlmICghaXRlbS5EZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLklURU1fREVTQ1JJUFRJT059YFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtLklkKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb246IHN0cmluZyA9IHJlc3VsdD8uRGVzY3JpcHRpb25cblxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpdGVtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBuZXdEZXNjcmlwdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzaG93IGl0ZW0gY29udGVudCBmb3IgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZExpc3RJdGVtJyk7XG4gICAgICAgICAgICB0aGlzLmFwcGx5RGVzY3JpcHRpb25SZWFkTW9yZShpdGVtQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJzdGFydFwiIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXRlbS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Ob2RlOiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tJHtpdGVtLklkfWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XG5cbiAgICAgICAgICAgIC8vIHByZWxvYWQgZGVzY3JpcHRpb24gZm9yIHRoZSBjdXJyZW50bHkgcGxheWluZyBpdGVtXG4gICAgICAgICAgICBpZiAoIWl0ZW0uRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX0RFU0NSSVBUSU9OfWBcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbS5JZCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uOiBzdHJpbmcgPSByZXN1bHQ/LkRlc2NyaXB0aW9uXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaXRlbU5vZGUucXVlcnlTZWxlY3RvcignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW1Ob2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGl0ZW1Ob2RlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlEZXNjcmlwdGlvblJlYWRNb3JlKGl0ZW1Ob2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3YXBzIGFuIGlkbGUgc2VudGluZWwgbWFya2VyIGludG8gYSB2aXNpYmxlIHNwaW5uZXIgb25jZSBpdCdzIGFjdHVhbGx5IHRyaWdnZXJlZCBhIHBhZ2UgbG9hZC5cbiAgICBwcml2YXRlIHNob3dTZW50aW5lbFNwaW5uZXIoc2VudGluZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHNlbnRpbmVsLmNsYXNzTGlzdC5hZGQoJ3ByZXZpZXdTY3JvbGxTcGlubmVyJylcbiAgICAgICAgc2VudGluZWwuaW5uZXJIVE1MID0gc3Bpbm5lckh0bWwoKVxuICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoc2VudGluZWwpXG4gICAgfVxuXG4gICAgLy8gQXBwZW5kcyBwYWdlcyB3aGVuIHNjcm9sbGluZyB0byB0aGUgYm90dG9tLlxuICAgIHByaXZhdGUgYWRkU2Nyb2xsU2VudGluZWwoXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGxvYWRQYWdlOiAoc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+LFxuICAgICAgICBuZXh0U3RhcnRJbmRleDogbnVtYmVyLFxuICAgICAgICB0b3RhbExvYWRlZDogbnVtYmVyLFxuICAgICAgICB2aWV3VG9rZW46IG51bWJlclxuICAgICk6IHZvaWQge1xuICAgICAgICBjb25zdCBzZW50aW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChzZW50aW5lbClcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihhc3luYyAoW2VudHJ5XSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykgcmV0dXJuXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgICAgICAgIHRoaXMuc2hvd1NlbnRpbmVsU3Bpbm5lcihzZW50aW5lbClcblxuICAgICAgICAgICAgY29uc3QgeyBpdGVtcywgdG90YWxSZWNvcmRDb3VudCB9ID0gYXdhaXQgbG9hZFBhZ2UobmV4dFN0YXJ0SW5kZXgpXG4gICAgICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgICAgICBzZW50aW5lbC5yZW1vdmUoKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJdGVtRWxlbWVudHMoaXRlbXMsIHBhcmVudERpdiwgdG90YWxMb2FkZWQpXG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1RvdGFsTG9hZGVkID0gdG90YWxMb2FkZWQgKyBpdGVtcy5sZW5ndGhcbiAgICAgICAgICAgIGlmIChuZXdUb3RhbExvYWRlZCA8IHRvdGFsUmVjb3JkQ291bnQpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTY3JvbGxTZW50aW5lbChwYXJlbnREaXYsIGxvYWRQYWdlLCBuZXdUb3RhbExvYWRlZCwgbmV3VG90YWxMb2FkZWQsIHZpZXdUb2tlbilcbiAgICAgICAgfSwgeyByb290OiBwYXJlbnREaXYsIHRocmVzaG9sZDogMCB9KVxuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VudGluZWwpXG4gICAgfVxuXG4gICAgLy8gUHJlcGVuZHMgcGFnZXMgd2hlbiBzY3JvbGxpbmcgdG8gdGhlIHRvcC5cbiAgICAvLyBjdXJyZW50U3RhcnRJbmRleCBpcyB0aGUgYWJzb2x1dGUgaW5kZXggb2Ygd2hhdGV2ZXIgaXMgY3VycmVudGx5IHRoZSBmaXJzdCBsb2FkZWQgaXRlbVxuICAgIHByaXZhdGUgYWRkU2Nyb2xsU2VudGluZWxCYWNrd2FyZChcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgbG9hZFBhZ2U6IChzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4sXG4gICAgICAgIGN1cnJlbnRTdGFydEluZGV4OiBudW1iZXIsXG4gICAgICAgIHZpZXdUb2tlbjogbnVtYmVyXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGlmIChjdXJyZW50U3RhcnRJbmRleCA8PSAwKSByZXR1cm5cblxuICAgICAgICBjb25zdCBzZW50aW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHBhcmVudERpdi5pbnNlcnRCZWZvcmUoc2VudGluZWwsIHBhcmVudERpdi5maXJzdENoaWxkKVxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGFzeW5jIChbZW50cnldKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSByZXR1cm5cbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHRCZWZvcmVTcGlubmVyID0gcGFyZW50RGl2LnNjcm9sbEhlaWdodFxuICAgICAgICAgICAgdGhpcy5zaG93U2VudGluZWxTcGlubmVyKHNlbnRpbmVsKVxuICAgICAgICAgICAgcGFyZW50RGl2LnNjcm9sbFRvcCArPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsSGVpZ2h0QmVmb3JlU3Bpbm5lclxuXG4gICAgICAgICAgICBjb25zdCBwYWdlU2l6ZSA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FcGlzb2RlUGFnZVNpemVcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXJ0SW5kZXggPSBNYXRoLm1heCgwLCBjdXJyZW50U3RhcnRJbmRleCAtIHBhZ2VTaXplKVxuICAgICAgICAgICAgY29uc3QgeyBpdGVtcyB9ID0gYXdhaXQgbG9hZFBhZ2UobmV3U3RhcnRJbmRleClcbiAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodEJlZm9yZVByZXBlbmQgPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgICBzZW50aW5lbC5yZW1vdmUoKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wcmVwZW5kSXRlbUVsZW1lbnRzKGl0ZW1zLCBwYXJlbnREaXYsIG5ld1N0YXJ0SW5kZXgpXG4gICAgICAgICAgICBwYXJlbnREaXYuc2Nyb2xsVG9wICs9IHBhcmVudERpdi5zY3JvbGxIZWlnaHQgLSBzY3JvbGxIZWlnaHRCZWZvcmVQcmVwZW5kXG5cbiAgICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsU2VudGluZWxCYWNrd2FyZChwYXJlbnREaXYsIGxvYWRQYWdlLCBuZXdTdGFydEluZGV4LCB2aWV3VG9rZW4pXG4gICAgICAgIH0sIHsgcm9vdDogcGFyZW50RGl2LCB0aHJlc2hvbGQ6IDAgfSlcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNlbnRpbmVsKVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVMYXp5SXRlbUxpc3QoXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGxvYWRQYWdlOiAoc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+LFxuICAgICAgICB2aWV3VG9rZW46IG51bWJlcixcbiAgICAgICAgaW5pdGlhbFBhZ2U/OiBHcm91cEl0ZW1zUmVzdWx0LFxuICAgICAgICBpbml0aWFsT2Zmc2V0OiBudW1iZXIgPSAwXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGZpcnN0UGFnZSA9IGluaXRpYWxQYWdlID8/IGF3YWl0IGxvYWRQYWdlKDApXG4gICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUl0ZW1FbGVtZW50cyhmaXJzdFBhZ2UuaXRlbXMsIHBhcmVudERpdiwgaW5pdGlhbE9mZnNldClcblxuICAgICAgICBjb25zdCB0b3RhbExvYWRlZCA9IGluaXRpYWxPZmZzZXQgKyBmaXJzdFBhZ2UuaXRlbXMubGVuZ3RoXG4gICAgICAgIGlmICh0b3RhbExvYWRlZCA8IGZpcnN0UGFnZS50b3RhbFJlY29yZENvdW50KVxuICAgICAgICAgICAgdGhpcy5hZGRTY3JvbGxTZW50aW5lbChwYXJlbnREaXYsIGxvYWRQYWdlLCB0b3RhbExvYWRlZCwgdG90YWxMb2FkZWQsIHZpZXdUb2tlbilcblxuICAgICAgICB0aGlzLmFkZFNjcm9sbFNlbnRpbmVsQmFja3dhcmQocGFyZW50RGl2LCBsb2FkUGFnZSwgaW5pdGlhbE9mZnNldCwgdmlld1Rva2VuKVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVHcm91cEVsZW1lbnRzKFxuICAgICAgICBncm91cHM6IEdyb3VwW10sXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGN1cnJlbnRHcm91cEluZGV4OiBudW1iZXIsXG4gICAgICAgIHRpdGxlQ29udGFpbmVyOiBQb3B1cFRpdGxlVGVtcGxhdGUsXG4gICAgICAgIGxvYWRJdGVtczogKGdyb3VwSWQ6IHN0cmluZywgc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+XG4gICAgKTogdm9pZCB7XG4gICAgICAgIGdyb3Vwcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4TnVtYmVyIC0gYi5pbmRleE51bWJlcilcblxuICAgICAgICAvLyBJbnZhbGlkYXRlcyBhbnkgaXRlbSBsb2FkIHN0aWxsIGluIHByb2dyZXNzc1xuICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IG5ldyBHcm91cExpc3RFbGVtZW50VGVtcGxhdGUocGFyZW50RGl2LCBpLCBncm91cHNbaV0sIGdyb3Vwc1tpXS5pbmRleE51bWJlciA9PT0gY3VycmVudEdyb3VwSW5kZXgsIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50KVxuICAgICAgICAgICAgZ3JvdXAucmVuZGVyKGFzeW5jIChlOiBNb3VzZUV2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQgPSBncm91cHNbaV0uZ3JvdXBJZFxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFRleHQoZ3JvdXBzW2ldLmdyb3VwTmFtZSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQpXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFdhdGNoZWRDb3VudChncm91cHNbaV0ucGxheWVkSXRlbUNvdW50LCBncm91cHNbaV0udG90YWxJdGVtQ291bnQpXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKVxuXG4gICAgICAgICAgICAgICAgcGFyZW50RGl2LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgaW4gY2FzZSB0aGlzIGdyb3VwIHdhcyBhbHJlYWR5IGxvYWRlZCBlYXJsaWVyIGluIHRoZSBzYW1lIHBvcHVwIHNlc3Npb24sXG4gICAgICAgICAgICAgICAgLy8gc28gcmUtZmV0Y2hpbmcgcGFnZSAwIGRvZXNuJ3QgZHVwbGljYXRlIGl0ZW1zIGFscmVhZHkgc2l0dGluZyBpbiB0aGUgc3RvcmUuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUdyb3VwSXRlbXMoZ3JvdXBzW2ldLmdyb3VwSWQsIFtdKVxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdUb2tlbiA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlTGF6eUl0ZW1MaXN0KHBhcmVudERpdiwgKHN0YXJ0SW5kZXgpID0+IGxvYWRJdGVtcyhncm91cHNbaV0uZ3JvdXBJZCwgc3RhcnRJbmRleCksIHZpZXdUb2tlbilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBJdGVtVHlwZSB7XG4gICAgQWdncmVnYXRlRm9sZGVyLFxuICAgIEF1ZGlvLFxuICAgIEF1ZGlvQm9vayxcbiAgICBCYXNlUGx1Z2luRm9sZGVyLFxuICAgIEJvb2ssXG4gICAgQm94U2V0LFxuICAgIENoYW5uZWwsXG4gICAgQ2hhbm5lbEZvbGRlckl0ZW0sXG4gICAgQ29sbGVjdGlvbkZvbGRlcixcbiAgICBFcGlzb2RlLFxuICAgIEZvbGRlcixcbiAgICBHZW5yZSxcbiAgICBNYW51YWxQbGF5bGlzdHNGb2xkZXIsXG4gICAgTW92aWUsXG4gICAgTGl2ZVR2Q2hhbm5lbCxcbiAgICBMaXZlVHZQcm9ncmFtLFxuICAgIE11c2ljQWxidW0sXG4gICAgTXVzaWNBcnRpc3QsXG4gICAgTXVzaWNHZW5yZSxcbiAgICBNdXNpY1ZpZGVvLFxuICAgIFBlcnNvbixcbiAgICBQaG90byxcbiAgICBQaG90b0FsYnVtLFxuICAgIFBsYXlsaXN0LFxuICAgIFBsYXlsaXN0c0ZvbGRlcixcbiAgICBQcm9ncmFtLFxuICAgIFJlY29yZGluZyxcbiAgICBTZWFzb24sXG4gICAgU2VyaWVzLFxuICAgIFN0dWRpbyxcbiAgICBUcmFpbGVyLFxuICAgIFR2Q2hhbm5lbCxcbiAgICBUdlByb2dyYW0sXG4gICAgVXNlclJvb3RGb2xkZXIsXG4gICAgVXNlclZpZXcsXG4gICAgVmlkZW8sXG4gICAgWWVhclxufSIsImltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL0l0ZW1UeXBlXCI7XG5cbmV4cG9ydCB0eXBlIFBsdWdpblNldHRpbmdzID0ge1xuICAgIEVuYWJsZWRJdGVtVHlwZXM6IEl0ZW1UeXBlW10sXG4gICAgQmx1ckRlc2NyaXB0aW9uOiBib29sZWFuLFxuICAgIEJsdXJUaHVtYm5haWw6IGJvb2xlYW4sXG4gICAgRXBpc29kZVBhZ2VTaXplOiBudW1iZXIsXG4gICAgU2hvd1dhdGNoZWRDb3VudDogYm9vbGVhbixcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRQbHVnaW5TZXR0aW5nczogUGx1Z2luU2V0dGluZ3MgPSB7XG4gICAgRW5hYmxlZEl0ZW1UeXBlczogW0l0ZW1UeXBlLlNlcmllcywgSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5Nb3ZpZSwgSXRlbVR5cGUuRm9sZGVyLCBJdGVtVHlwZS5WaWRlb10sXG4gICAgQmx1ckRlc2NyaXB0aW9uOiBmYWxzZSxcbiAgICBCbHVyVGh1bWJuYWlsOiBmYWxzZSxcbiAgICBFcGlzb2RlUGFnZVNpemU6IDEwLFxuICAgIFNob3dXYXRjaGVkQ291bnQ6IGZhbHNlLFxufSIsImltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuL1ByZXZpZXdJdGVtXCI7XG5cbmV4cG9ydCB0eXBlIEdyb3VwID0ge1xuICAgIGdyb3VwSWQ6IHN0cmluZ1xuICAgIGdyb3VwTmFtZTogc3RyaW5nXG4gICAgaXRlbXM6IFByZXZpZXdJdGVtW11cbiAgICBpbmRleE51bWJlcjogbnVtYmVyXG4gICAgcGxheWVkSXRlbUNvdW50OiBudW1iZXJcbiAgICB0b3RhbEl0ZW1Db3VudDogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRXYXRjaGVkQ291bnQgPSAocGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIpOiBzdHJpbmcgPT4gXG4gICAgYCR7cGxheWVkSXRlbUNvdW50fS8ke3RvdGFsSXRlbUNvdW50fSB3YXRjaGVkYFxuXG4iLCJleHBvcnQgdHlwZSBTZXJ2ZXJTZXR0aW5ncyA9IHtcbiAgICBNaW5SZXN1bWVQY3Q6IG51bWJlciwgXG4gICAgTWF4UmVzdW1lUGN0OiBudW1iZXIsIFxuICAgIE1pblJlc3VtZUR1cmF0aW9uU2Vjb25kczogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0U2VydmVyU2V0dGluZ3M6IFNlcnZlclNldHRpbmdzID0ge1xuICAgIE1pblJlc3VtZVBjdDogNSxcbiAgICBNYXhSZXN1bWVQY3Q6IDkwLFxuICAgIE1pblJlc3VtZUR1cmF0aW9uU2Vjb25kczogMzAwXG59IiwiaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge2Zvcm1hdFdhdGNoZWRDb3VudCwgR3JvdXB9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcblxudHlwZSBVc2VyRGF0YUNoYW5nZWRFbnRyeSA9IHtcbiAgICBJdGVtSWQ6IHN0cmluZ1xuICAgIFBsYXllZDogYm9vbGVhblxuICAgIElzRmF2b3JpdGU6IGJvb2xlYW5cbiAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlclxuICAgIFBsYXllZFBlcmNlbnRhZ2U/OiBudW1iZXJcbn1cblxudHlwZSBXZWJTb2NrZXRNZXNzYWdlID0ge1xuICAgIE1lc3NhZ2VUeXBlOiBzdHJpbmdcbiAgICBEYXRhOiBhbnlcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2F0Y2hlZENvdW50RG9tKHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGdyb3VwOiBHcm91cCk6IHZvaWQge1xuICAgIGNvbnN0IHRleHQgPSBmb3JtYXRXYXRjaGVkQ291bnQoZ3JvdXAucGxheWVkSXRlbUNvdW50LCBncm91cC50b3RhbEl0ZW1Db3VudClcblxuICAgIGlmIChncm91cC5ncm91cElkID09PSBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQpIHtcbiAgICAgICAgY29uc3QgcG9wdXBXYXRjaGVkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpPy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCcpXG4gICAgICAgIGlmIChwb3B1cFdhdGNoZWRDb3VudCkgcG9wdXBXYXRjaGVkQ291bnQuaW5uZXJUZXh0ID0gdGV4dFxuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwTGlzdFdhdGNoZWRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBncm91cC0ke2dyb3VwLmdyb3VwSWR9YCk/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICBpZiAoZ3JvdXBMaXN0V2F0Y2hlZENvdW50KSBncm91cExpc3RXYXRjaGVkQ291bnQuaW5uZXJUZXh0ID0gdGV4dFxufVxuXG5mdW5jdGlvbiBhZGp1c3RXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgaXRlbUlkOiBzdHJpbmcsIHdhc1BsYXllZDogYm9vbGVhbiwgaXNQbGF5ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCkgcmV0dXJuXG4gICAgaWYgKHdhc1BsYXllZCA9PT0gaXNQbGF5ZWQpIHJldHVyblxuXG4gICAgY29uc3QgdXBkYXRlZEdyb3VwID0gcHJvZ3JhbURhdGFTdG9yZS5hZGp1c3RHcm91cFBsYXllZENvdW50KGl0ZW1JZCwgaXNQbGF5ZWQgPyAxIDogLTEpXG4gICAgaWYgKHVwZGF0ZWRHcm91cCkgdXBkYXRlV2F0Y2hlZENvdW50RG9tKHByb2dyYW1EYXRhU3RvcmUsIHVwZGF0ZWRHcm91cClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVBsYXllZFN0YXRlTG9jYWxseShwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBpdGVtSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW06IFByZXZpZXdJdGVtID0gcHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZChpdGVtSWQpXG4gICAgaWYgKCFpdGVtKSByZXR1cm5cblxuICAgIGNvbnN0IHdhc1BsYXllZCA9IGl0ZW0uVXNlckRhdGEuUGxheWVkXG4gICAgY29uc3QgaXNQbGF5ZWQgPSAhd2FzUGxheWVkXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YTogeyAuLi5pdGVtLlVzZXJEYXRhLCBQbGF5ZWQ6IGlzUGxheWVkIH1cbiAgICB9KVxuICAgIGFkanVzdFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLCBpdGVtSWQsIHdhc1BsYXllZCwgaXNQbGF5ZWQpXG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhRmV0Y2hlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIEV2ZW50cy5vbihBcGlDbGllbnQsICdtZXNzYWdlJywgKF9ldmVudCwgbWVzc2FnZTogV2ViU29ja2V0TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuTWVzc2FnZVR5cGUgIT09ICdVc2VyRGF0YUNoYW5nZWQnKSByZXR1cm5cbiAgICAgICAgICAgIGlmIChtZXNzYWdlLkRhdGEuVXNlcklkICE9PSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGFMaXN0OiBVc2VyRGF0YUNoYW5nZWRFbnRyeVtdID0gbWVzc2FnZS5EYXRhLlVzZXJEYXRhTGlzdCA/PyBbXVxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGF0YSBvZiB1c2VyRGF0YUxpc3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtOiBQcmV2aWV3SXRlbSA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZCh1c2VyRGF0YS5JdGVtSWQpXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FzUGxheWVkID0gaXRlbS5Vc2VyRGF0YS5QbGF5ZWRcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIFVzZXJEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLlVzZXJEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVkOiB1c2VyRGF0YS5QbGF5ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBJc0Zhdm9yaXRlOiB1c2VyRGF0YS5Jc0Zhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWJhY2tQb3NpdGlvblRpY2tzOiB1c2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZWRQZXJjZW50YWdlOiB1c2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgYWRqdXN0V2F0Y2hlZENvdW50KHRoaXMucHJvZ3JhbURhdGFTdG9yZSwgdXNlckRhdGEuSXRlbUlkLCB3YXNQbGF5ZWQsIHVzZXJEYXRhLlBsYXllZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ19wcmVmaXg6IHN0cmluZyA9IFwiW0luUGxheWVyRXBpc29kZVByZXZpZXddXCIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vTG9nZ2VyXCI7XG5pbXBvcnQge0VuZHBvaW50c30gZnJvbSBcIi4uL0VuZHBvaW50c1wiO1xuXG5leHBvcnQgY2xhc3MgUGxheWJhY2tIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7IH1cblxuICAgIGFzeW5jIHBsYXkoaXRlbUlkOiBzdHJpbmcsIHN0YXJ0UG9zaXRpb25UaWNrczogbnVtYmVyKTogUHJvbWlzZTx2b2lkIHwgUmVzcG9uc2U+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLlBMQVlfTUVESUF9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW1JZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3RpY2tzfScsIHN0YXJ0UG9zaXRpb25UaWNrcy50b1N0cmluZygpKSlcblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCB9KVxuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBzdGFydCB0aGUgcGxheWJhY2sgb2YgYW4gaXRlbWAsIGV4KVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7UHJvZ3JhbURhdGF9IGZyb20gXCIuLi9Nb2RlbHMvUHJvZ3JhbURhdGFcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7RGVmYXVsdFBsdWdpblNldHRpbmdzLCBQbHVnaW5TZXR0aW5nc30gZnJvbSBcIi4uL01vZGVscy9QbHVnaW5TZXR0aW5nc1wiO1xuaW1wb3J0IHtEZWZhdWx0U2VydmVyU2V0dGluZ3MsIFNlcnZlclNldHRpbmdzfSBmcm9tIFwiLi4vTW9kZWxzL1NlcnZlclNldHRpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtRGF0YVN0b3JlIHtcbiAgICBwcml2YXRlIF9wcm9ncmFtRGF0YTogUHJvZ3JhbURhdGFcbiAgICBwcml2YXRlIF92aWV3VG9rZW46IG51bWJlciA9IDBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZU1lZGlhU291cmNlSWQ6ICcnLFxuICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogJycsXG4gICAgICAgICAgICBib3hTZXROYW1lOiAnJyxcbiAgICAgICAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICBwbHVnaW5TZXR0aW5nczogRGVmYXVsdFBsdWdpblNldHRpbmdzLFxuICAgICAgICAgICAgc2VydmVyU2V0dGluZ3M6IERlZmF1bHRTZXJ2ZXJTZXR0aW5nc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVNZWRpYVNvdXJjZUlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhY3RpdmVNZWRpYVNvdXJjZUlkKGFjdGl2ZU1lZGlhU291cmNlSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlR3JvdXBJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYWN0aXZlR3JvdXBJZChhY3RpdmVHcm91cElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZCA9IGFjdGl2ZUdyb3VwSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZUdyb3VwKCk6IEdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAuZ3JvdXBJZCA9PT0gdGhpcy5hY3RpdmVHcm91cElkKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBJdGVtVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS50eXBlXG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0eXBlKHR5cGU6IEl0ZW1UeXBlKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnR5cGUgPSB0eXBlXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib3hTZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3hTZXROYW1lKGJveFNldE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lID0gYm94U2V0TmFtZVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ3JvdXBzKCk6IEdyb3VwW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBncm91cHMoZ3JvdXBzOiBHcm91cFtdKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3VwcyA9IGdyb3Vwc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGx1Z2luU2V0dGluZ3MoKTogUGx1Z2luU2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEucGx1Z2luU2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsdWdpblNldHRpbmdzKHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5wbHVnaW5TZXR0aW5ncyA9IHNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZXJ2ZXJTZXR0aW5ncygpOiBTZXJ2ZXJTZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5zZXJ2ZXJTZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmVyU2V0dGluZ3Moc2V0dGluZ3M6IFNlcnZlclNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnNlcnZlclNldHRpbmdzID0gc2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFJc0FsbG93ZWRGb3JQcmV2aWV3KCkge1xuICAgICAgICBpZiAoIXRoaXMuYWxsb3dlZFByZXZpZXdUeXBlcy5pbmNsdWRlcyh0aGlzLnR5cGUpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLnNvbWUoZ3JvdXAgPT4gZ3JvdXAuaXRlbXMubGVuZ3RoID49IDEpXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhbGxvd2VkUHJldmlld1R5cGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5TZXR0aW5ncy5FbmFibGVkSXRlbVR5cGVzXG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW1CeUlkKGl0ZW1JZDogc3RyaW5nKTogUHJldmlld0l0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHNcbiAgICAgICAgICAgIC5mbGF0TWFwKGdyb3VwID0+IGdyb3VwLml0ZW1zKVxuICAgICAgICAgICAgLmZpbmQoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUdyb3VwSXRlbXMoZ3JvdXBJZDogc3RyaW5nLCBpdGVtczogUHJldmlld0l0ZW1bXSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMgPSB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMubWFwKGdyb3VwID0+XG4gICAgICAgICAgICBncm91cC5ncm91cElkID09PSBncm91cElkID8geyAuLi5ncm91cCwgaXRlbXMgfSA6IGdyb3VwXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFkanVzdEdyb3VwUGxheWVkQ291bnQoaXRlbUlkOiBzdHJpbmcsIGRlbHRhOiBudW1iZXIpOiBHcm91cCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cHMuZmluZChnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpXG4gICAgICAgIGlmICghZ3JvdXApIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgICBjb25zdCB1cGRhdGVkR3JvdXA6IEdyb3VwID0geyAuLi5ncm91cCwgcGxheWVkSXRlbUNvdW50OiBncm91cC5wbGF5ZWRJdGVtQ291bnQgKyBkZWx0YSB9XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGcgPT4gZy5ncm91cElkID09PSBncm91cC5ncm91cElkID8gdXBkYXRlZEdyb3VwIDogZylcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRHcm91cFxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVJdGVtKGl0ZW1Ub1VwZGF0ZTogUHJldmlld0l0ZW0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLmdyb3Vwcy5tYXAoZ3JvdXAgPT5cbiAgICAgICAgICAgIGdyb3VwLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtVG9VcGRhdGUuSWQpXG4gICAgICAgICAgICAgICAgPyB7IC4uLmdyb3VwLCBpdGVtczogWy4uLmdyb3VwLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uSWQgIT09IGl0ZW1Ub1VwZGF0ZS5JZCksIGl0ZW1Ub1VwZGF0ZV0gfVxuICAgICAgICAgICAgICAgIDogZ3JvdXBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIENhbGxlZCB3aGVuZXZlciB0aGUgcG9wdXAgc3dpdGNoZXMgd2hhdCBpdCdzIGRpc3BsYXlpbmcgKG9wZW5pbmcsIHNlbGVjdGluZyBhIGdyb3VwLCBnb2luZyBiYWNrIHRvIHRoZSBncm91cCBsaXN0KVxuICAgIHB1YmxpYyBiZWdpbk5ld1ZpZXcoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICsrdGhpcy5fdmlld1Rva2VuXG4gICAgfVxuXG4gICAgcHVibGljIGlzQ3VycmVudFZpZXcodG9rZW46IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdG9rZW4gPT09IHRoaXMuX3ZpZXdUb2tlblxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL1NlcnZpY2VzL0xvZ2dlclwiO1xuaW1wb3J0IHtQcmV2aWV3QnV0dG9uVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7RGlhbG9nQ29udGFpbmVyVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvRGlhbG9nQ29udGFpbmVyVGVtcGxhdGVcIjtcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcbmltcG9ydCB7TGlzdEVsZW1lbnRGYWN0b3J5fSBmcm9tIFwiLi9MaXN0RWxlbWVudEZhY3RvcnlcIjtcbmltcG9ydCB7UG9wdXBUaXRsZVRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xuaW1wb3J0IHtEYXRhRmV0Y2hlcn0gZnJvbSBcIi4vU2VydmljZXMvRGF0YUZldGNoZXJcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHtQbHVnaW5TZXR0aW5nc30gZnJvbSBcIi4vTW9kZWxzL1BsdWdpblNldHRpbmdzXCI7XG5pbXBvcnQge1NlcnZlclNldHRpbmdzfSBmcm9tIFwiLi9Nb2RlbHMvU2VydmVyU2V0dGluZ3NcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi9FbmRwb2ludHNcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtHcm91cEl0ZW1zUmVzdWx0fSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBJdGVtc1Jlc3VsdFwiO1xuaW1wb3J0IHthY3RpdmF0ZVNwaW5uZXIsIHNwaW5uZXJIdG1sfSBmcm9tIFwiLi9Db21wb25lbnRzL1NwaW5uZXJcIjtcblxuLy8gbG9hZCBhbmQgaW5qZWN0IGluUGxheWVyUHJldmlldy5jc3MgaW50byB0aGUgcGFnZVxuLypcbiAqIEluamVjdCBzdHlsZSB0byBiZSB1c2VkIGZvciB0aGUgcHJldmlldyBwb3B1cFxuICovXG5sZXQgaW5QbGF5ZXJQcmV2aWV3U3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG5pblBsYXllclByZXZpZXdTdHlsZS5pZCA9ICdpblBsYXllclByZXZpZXdTdHlsZSdcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ID0gYFxuLnNlbGVjdGVkTGlzdEl0ZW0ge1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5wcmV2aWV3TGlzdEl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBtaW4taGVpZ2h0OiAxNS41dmg7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcmV2aWV3UG9wdXAge1xuICAgIGFuaW1hdGlvbjogMTQwbXMgZWFzZS1vdXQgMHMgMSBub3JtYWwgYm90aCBydW5uaW5nIHNjYWxldXA7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgbWFyZ2luOiAwcHg7IFxuICAgIGJvdHRvbTogMS41dmg7IFxuICAgIGxlZnQ6IDUwdnc7IFxuICAgIHdpZHRoOiA0OHZ3O1xufVxuLnByZXZpZXdQb3B1cFRpdGxlIHtcbiAgICBtYXgtaGVpZ2h0OiA0dmg7XG59XG4ucHJldmlld1BvcHVwVGl0bGUgaDEuYWN0aW9uU2hlZXRUaXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3BhY2l0eTogMC43O1xufVxuLnByZXZpZXdQb3B1cFNjcm9sbGVyIHtcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xufVxuLnByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxufVxuLnByZXZpZXdJdGVtQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5wcmV2aWV3SXRlbVRpdGxlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5wcmV2aWV3SXRlbUltYWdlQ2FyZCB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG59XG4ucHJldmlld0l0ZW1Db250ZW50Um93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uLmV4cGFuZGVkIHtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xufVxuLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b24ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5wcmV2aWV3SXRlbURldGFpbHMge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydCAhaW1wb3J0YW50O1xufVxuXG4vKiBMb2NrIHRoZSBwb3NpdGlvbiBvZiB0aGlzIGRldGFpbHMsIHNvIHRoYXQgbm8gdGhlbWUgY2FuIGNoYW5nZSBpdCAqL1xuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQgLml0ZW1NaXNjSW5mby5wcmV2aWV3SXRlbURldGFpbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4uYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDZweCk7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYmx1cjpob3ZlciB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xufVxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkOmhvdmVyIC5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG59XG4ucHJldmlld1Njcm9sbFNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbn1cbi5wcmV2aWV3U2Nyb2xsU3Bpbm5lciAuZG9jc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxLjk1ZW0gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEuOTVlbSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IGF1dG8gIWltcG9ydGFudDtcbn1cbmBcbmRvY3VtZW50Py5oZWFkPy5hcHBlbmRDaGlsZChpblBsYXllclByZXZpZXdTdHlsZSlcblxuLy8gaW5pdCBzZXJ2aWNlcyBhbmQgaGVscGVyc1xuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKClcbmNvbnN0IHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUgPSBuZXcgUHJvZ3JhbURhdGFTdG9yZSgpXG5jb25zdCBwbGF5YmFja0hhbmRsZXI6IFBsYXliYWNrSGFuZGxlciA9IG5ldyBQbGF5YmFja0hhbmRsZXIobG9nZ2VyKVxuY29uc3QgbGlzdEVsZW1lbnRGYWN0b3J5ID0gbmV3IExpc3RFbGVtZW50RmFjdG9yeShwbGF5YmFja0hhbmRsZXIsIHByb2dyYW1EYXRhU3RvcmUpXG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgLy8gRW5zdXJlIEFwaUNsaWVudC9FdmVudHMgZXhpc3QgYW5kIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgaWYgKHR5cGVvZiBBcGlDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBFdmVudHMgPT09ICd1bmRlZmluZWQnIHx8ICFBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZD8uKCkpIHtcbiAgICAgICAgc2V0VGltZW91dChpbml0aWFsaXplLCAzMDApIC8vIEluY3JlYXNlZCByZXRyeSBkZWxheSBzbGlnaHRseVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBuZXcgRGF0YUZldGNoZXIocHJvZ3JhbURhdGFTdG9yZSlcblxuICAgIEFwaUNsaWVudC5nZXRQbHVnaW5Db25maWd1cmF0aW9uKCc3MzgzM2Q1Zi0wYmNiLTQ1ZGMtYWI4Yi03Y2U2NjhmNDM0NWQnKVxuICAgICAgICAudGhlbigoY29uZmlnOiBQbHVnaW5TZXR0aW5ncykgPT4gcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncyA9IGNvbmZpZylcblxuICAgIGNvbnN0IHNlcnZlclNldHRpbmdzVXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuU0VSVkVSX1NFVFRJTkdTfWApXG4gICAgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsOiBzZXJ2ZXJTZXR0aW5nc1VybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAudGhlbigoY29uZmlnOiBTZXJ2ZXJTZXR0aW5ncykgPT4gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncyA9IGNvbmZpZylcbn1cbmluaXRpYWxpemUoKVxuXG5jb25zdCB2aWRlb1BhdGhzOiBzdHJpbmdbXSA9IFsnL3ZpZGVvJ11cbmxldCBwcmV2aW91c1JvdXRlUGF0aDogc3RyaW5nID0gbnVsbFxubGV0IHByZXZpZXdDb250YWluZXJMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlld3Nob3cnLCB2aWV3U2hvd0V2ZW50SGFuZGxlcilcblxuLy8gU29tZXRpbWVzIHRoZWlyIGNhbiBiZSBzdGFsZSByYXRpbmcgYnV0dG9ucy4gdGhhdHMgd2h5IHdlIHRha2UgdGhlIGxhc3Qgb25lIGZyb20gdGhlIERPTSBmb3IgdGhlIGl0ZW1JZFxuZnVuY3Rpb24gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5Vc2VyUmF0aW5nLmF1dG9TaXplLnBhcGVyLWljb24tYnV0dG9uLWxpZ2h0JylcbiAgICByZXR1cm4gZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0/LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID8/IG51bGxcbn1cblxubGV0IGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQ6IG51bWJlciA9IC0xXG5mdW5jdGlvbiBvblZpZGVvVGltZVVwZGF0ZSh0aGlzOiBIVE1MVmlkZW9FbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgcG9zaXRpb25TZWNvbmQgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudFRpbWUpXG4gICAgaWYgKHBvc2l0aW9uU2Vjb25kID09PSBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kKSByZXR1cm5cbiAgICBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kID0gcG9zaXRpb25TZWNvbmRcblxuICAgIGNvbnN0IGl0ZW1JZCA9IGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKVxuICAgIGlmICghaXRlbUlkKSByZXR1cm5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBpdGVtSWRcblxuICAgIGNvbnN0IGl0ZW0gPSBwcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKGl0ZW1JZClcbiAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0uUnVuVGltZVRpY2tzKSByZXR1cm5cblxuICAgIGNvbnN0IHBvc2l0aW9uVGlja3MgPSB0aGlzLmN1cnJlbnRUaW1lICogMTBfMDAwXzAwMFxuICAgIGNvbnN0IHBsYXllZFBlcmNlbnRhZ2UgPSAocG9zaXRpb25UaWNrcyAvIGl0ZW0uUnVuVGltZVRpY2tzKSAqIDEwMFxuXG4gICAgcHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgVXNlckRhdGE6IHtcbiAgICAgICAgICAgIC4uLml0ZW0uVXNlckRhdGEsXG4gICAgICAgICAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IHBvc2l0aW9uVGlja3MsXG4gICAgICAgICAgICBQbGF5ZWRQZXJjZW50YWdlOiBwbGF5ZWRQZXJjZW50YWdlLFxuICAgICAgICAgICAgUGxheWVkOiBwbGF5ZWRQZXJjZW50YWdlID49IHByb2dyYW1EYXRhU3RvcmUuc2VydmVyU2V0dGluZ3MuTWF4UmVzdW1lUGN0XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4vLyBUcmFja3Mgd2hpY2ggQm94U2V0L1BsYXlsaXN0IGRldGFpbHMgcGFnZSAoaWYgYW55KSB3YXMgdmlzaXRlZCBpbW1lZGlhdGVseSBiZWZvcmUgbmF2aWdhdGluZyBpbnRvIHBsYXliYWNrXG5jb25zdCBERVRBSUxTX1JPVVRFX1BBVEg6IHN0cmluZyA9ICcvZGV0YWlscydcbmNvbnN0IGNvbGxlY3Rpb25MaWtlSXRlbVR5cGVzOiBTZXQ8SXRlbVR5cGU+ID0gbmV3IFNldChbSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5QbGF5bGlzdF0pXG5sZXQgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZDogc3RyaW5nID0gbnVsbFxuXG5mdW5jdGlvbiByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNvbGxlY3Rpb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuU0VUX1NPVVJDRV9DT0xMRUNUSU9OfWBcbiAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tkZXZpY2VJZH0nLCBBcGlDbGllbnQuZGV2aWNlSWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tjb2xsZWN0aW9uSWR9JywgY29sbGVjdGlvbklkKSlcbiAgICBBcGlDbGllbnQuYWpheCh7dHlwZTogJ0dFVCcsIHVybH0pLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcmVjb3JkIHNvdXJjZSBjb2xsZWN0aW9uIGZvciBwbGF5YmFjayBzZXNzaW9uXCIsIGV4KSlcbn1cblxuZnVuY3Rpb24gY2FwdHVyZVNvdXJjZUNvbGxlY3Rpb24oY3VycmVudFJvdXRlUGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgW2N1cnJlbnRQYXRoLCBjdXJyZW50UXVlcnldID0gY3VycmVudFJvdXRlUGF0aC5zcGxpdCgnPycpXG4gICAgY29uc3QgcHJldmlvdXNQYXRoID0gcHJldmlvdXNSb3V0ZVBhdGg/LnNwbGl0KCc/JylbMF1cblxuICAgIGlmIChjdXJyZW50UGF0aCA9PT0gREVUQUlMU19ST1VURV9QQVRIKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNJZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoY3VycmVudFF1ZXJ5ID8/ICcnKS5nZXQoJ2lkJylcbiAgICAgICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IG51bGxcbiAgICAgICAgaWYgKCFkZXRhaWxzSWQpIHJldHVyblxuXG4gICAgICAgIEFwaUNsaWVudC5nZXRJdGVtKEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCksIGRldGFpbHNJZCkudGhlbigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVR5cGU6IEl0ZW1UeXBlID0gSXRlbVR5cGVbaXRlbS5UeXBlIGFzIHVua25vd24gYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IGNvbGxlY3Rpb25MaWtlSXRlbVR5cGVzLmhhcyhpdGVtVHlwZSkgPyBkZXRhaWxzSWQgOiBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRQYXRoKSAmJiBwcmV2aW91c1BhdGggPT09IERFVEFJTFNfUk9VVEVfUEFUSCAmJiBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkKSB7XG4gICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24ocGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZClcbiAgICB9XG5cbiAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxufVxuXG4vLyBSZXRyaWV2ZSB0aGUgY3VycmVudCBjb2xsb2VjdGlvbi9wbGF5bGlzdCBpZCB0aG9ydWdoIGEgcGxheSBhY3Rpb24gb24gYSBjYXJkIHRoZSBzYW1lIHdheSBhcyBoZWxseWZpbiBkb2VzIGl0IGl0c2VsZlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2plbGx5ZmluL2plbGx5ZmluLXdlYi9ibG9iL3JlbGVhc2UtMTAuMTEuei9zcmMvY29tcG9uZW50cy9zaG9ydGN1dHMuanMjTDIxNlxuY29uc3QgUExBWUJBQ0tfVFJJR0dFUl9BQ1RJT05TOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoWydwbGF5JywgJ3Jlc3VtZScsICdwbGF5YWxsZnJvbWhlcmUnXSlcbmZ1bmN0aW9uIG9uRG9jdW1lbnRDbGlja0NhcHR1cmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBhY3Rpb25FbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LmNsb3Nlc3Q/LignW2RhdGEtYWN0aW9uXScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgIGlmICghYWN0aW9uRWxlbWVudCB8fCAhUExBWUJBQ0tfVFJJR0dFUl9BQ1RJT05TLmhhcyhhY3Rpb25FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSkpIHJldHVyblxuXG4gICAgY29uc3QgY2FyZCA9IGFjdGlvbkVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtaWRdJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKCFjYXJkKSByZXR1cm5cblxuICAgIGNvbnN0IGNoaWxkT2ZDb2xsZWN0aW9uSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xsZWN0aW9uaWQnKSA/PyBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1wbGF5bGlzdGlkJylcbiAgICBpZiAoY2hpbGRPZkNvbGxlY3Rpb25JZCkge1xuICAgICAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNoaWxkT2ZDb2xsZWN0aW9uSWQpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNhcmRJdGVtVHlwZTogSXRlbVR5cGUgPSBJdGVtVHlwZVtjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgYXMgdW5rbm93biBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgY29uc3QgY2FyZElkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuICAgIGlmIChjYXJkSWQgJiYgY29sbGVjdGlvbkxpa2VJdGVtVHlwZXMuaGFzKGNhcmRJdGVtVHlwZSkpIHtcbiAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihjYXJkSWQpXG4gICAgfVxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkRvY3VtZW50Q2xpY2tDYXB0dXJlLCB0cnVlKVxuXG5mdW5jdGlvbiB2aWV3U2hvd0V2ZW50SGFuZGxlcigpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50Um91dGVQYXRoOiBzdHJpbmcgPSBnZXRMb2NhdGlvblBhdGgoKVxuXG4gICAgZnVuY3Rpb24gZ2V0TG9jYXRpb25QYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxuICAgICAgICBjb25zdCBjdXJyZW50Um91dGVJbmRleDogbnVtYmVyID0gbG9jYXRpb24ubGFzdEluZGV4T2YoJy8nKVxuICAgICAgICByZXR1cm4gbG9jYXRpb24uc3Vic3RyaW5nKGN1cnJlbnRSb3V0ZUluZGV4KVxuICAgIH1cblxuICAgIC8vIEluaXRpYWwgYXR0ZW1wdCB0byBsb2FkIHRoZSB2aWRlbyB2aWV3IG9yIHNjaGVkdWxlIHJldHJpZXMuXG4gICAgY2FwdHVyZVNvdXJjZUNvbGxlY3Rpb24oY3VycmVudFJvdXRlUGF0aClcbiAgICBhdHRlbXB0TG9hZFZpZGVvVmlldygpXG4gICAgcHJldmlvdXNSb3V0ZVBhdGggPSBjdXJyZW50Um91dGVQYXRoXG5cbiAgICAvLyBBdHRlbXB0cyB0byBsb2FkIHRoZSB2aWRlbyB2aWV3LCByZXRyeWluZyB1cCB0byAzIHRpbWVzIGlmIG5lY2Vzc2FyeS5cbiAgICBmdW5jdGlvbiBhdHRlbXB0TG9hZFZpZGVvVmlldyhyZXRyeUNvdW50ID0gMCk6IHZvaWQge1xuICAgICAgICBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhjdXJyZW50Um91dGVQYXRoKSkge1xuICAgICAgICAgICAgLy8gaWYgKHByb2dyYW1EYXRhU3RvcmUuZGF0YUlzQWxsb3dlZEZvclByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcHJldmlldyBjb250YWluZXIgaXMgYWxyZWFkeSBsb2FkZWQgYmVmb3JlIGxvYWRpbmdcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZpZXdDb250YWluZXJMb2FkZWQgJiYgIWlzUHJldmlld0J1dHRvbkNyZWF0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkVmlkZW9WaWV3KClcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld0NvbnRhaW5lckxvYWRlZCA9IHRydWUgLy8gU2V0IGZsYWcgdG8gdHJ1ZSBhZnRlciBsb2FkaW5nXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXRyeUNvdW50IDwgMykgeyAvLyBSZXRyeSB1cCB0byAzIHRpbWVzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUmV0cnkgIyR7cmV0cnlDb3VudCArIDF9YClcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdExvYWRWaWRlb1ZpZXcocmV0cnlDb3VudCArIDEpXG4gICAgICAgICAgICAgICAgfSwgMTAwMDApIC8vIFdhaXQgMTAgc2Vjb25kcyBmb3IgZWFjaCByZXRyeVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMocHJldmlvdXNSb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICB1bmxvYWRWaWRlb1ZpZXcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGxvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XG4gICAgICAgIC8vIGFkZCBwcmV2aWV3IGJ1dHRvbiB0byB0aGUgcGFnZVxuICAgICAgICBjb25zdCBwYXJlbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKS5sYXN0RWxlbWVudENoaWxkLnBhcmVudEVsZW1lbnQ7IC8vIGxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudCBpcyB1c2VkIGZvciBjYXN0aW5nIGZyb20gRWxlbWVudCB0byBIVE1MRWxlbWVudFxuICAgICAgICBcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikuZmluZEluZGV4KChjaGlsZDogRWxlbWVudCk6IGJvb2xlYW4gPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuVXNlclJhdGluZ1wiKSk7XG4gICAgICAgIC8vIGlmIGluZGV4IGlzIGludmFsaWQgdHJ5IHRvIHVzZSB0aGUgb2xkIHBvc2l0aW9uICh1c2VkIGluIEplbGx5ZmluIDEwLjguMTIpXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpXG4gICAgICAgICAgICBpbmRleCA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvc2RUaW1lVGV4dFwiKSlcblxuICAgICAgICBjb25zdCBwcmV2aWV3QnV0dG9uOiBQcmV2aWV3QnV0dG9uVGVtcGxhdGUgPSBuZXcgUHJldmlld0J1dHRvblRlbXBsYXRlKHBhcmVudCwgaW5kZXgpXG4gICAgICAgIGxldCBwcmV2aWV3QnV0dG9uTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlXG4gICAgICAgIHByZXZpZXdCdXR0b24ucmVuZGVyKHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBvblZpZGVvVGltZVVwZGF0ZSlcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBwcmV2aWV3QnV0dG9uQ2xpY2tIYW5kbGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAgICAgaWYgKHByZXZpZXdCdXR0b25Mb2FkaW5nKSByZXR1cm5cbiAgICAgICAgICAgIHByZXZpZXdCdXR0b25Mb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBkb1ByZXZpZXdCdXR0b25DbGljaygpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHByZXZpZXdCdXR0b25Mb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRvUHJldmlld0J1dHRvbkNsaWNrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAgICAgY29uc3QgbG9hZEl0ZW1QcmV2aWV3RGF0YSA9IGFzeW5jIChpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8e1xuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiBzdHJpbmcsIGNvbnRhaW5lck5hbWU6IHN0cmluZyB8IG51bGwsIGdyb3VwczogR3JvdXBbXSwgYWN0aXZlR3JvdXBJZDogc3RyaW5nLCBhY3RpdmVJdGVtSW5kZXg6IG51bWJlclxuICAgICAgICAgICAgfT4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKClcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX1BSRVZJRVdfREFUQX1gXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tkZXZpY2VJZH0nLCBBcGlDbGllbnQuZGV2aWNlSWQoKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICAgICAgICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtVHlwZTogcmF3Lkl0ZW1UeXBlLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOYW1lOiByYXcuQ29udGFpbmVyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiByYXcuR3JvdXBzLm1hcCgoZzogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogZy5Hcm91cElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lOiBnLkdyb3VwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4TnVtYmVyOiBnLkluZGV4TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVkSXRlbUNvdW50OiBnLlBsYXllZEl0ZW1Db3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbUNvdW50OiBnLlRvdGFsSXRlbUNvdW50XG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogcmF3LkFjdGl2ZUdyb3VwSWQsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW1JbmRleDogcmF3LkFjdGl2ZUl0ZW1JbmRleFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgUEFHRV9TSVpFID0gcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FcGlzb2RlUGFnZVNpemVcblxuICAgICAgICAgICAgY29uc3QgbG9hZEdyb3VwSXRlbXMgPSBhc3luYyAoZ3JvdXBJZDogc3RyaW5nLCBzdGFydEluZGV4OiBudW1iZXIgPSAwLCBsaW1pdDogbnVtYmVyID0gUEFHRV9TSVpFKTogUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLkdST1VQX0lURU1TfWBcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne2dyb3VwSWR9JywgZ3JvdXBJZCksXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhcnRJbmRleCwgbGltaXQgfSlcbiAgICAgICAgICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IEdyb3VwSXRlbXNSZXN1bHQgPSB7IGl0ZW1zOiByYXcuSXRlbXMsIHRvdGFsUmVjb3JkQ291bnQ6IHJhdy5Ub3RhbFJlY29yZENvdW50IH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuZmluZChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXBJZCk/Lml0ZW1zID8/IFtdXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS51cGRhdGVHcm91cEl0ZW1zKGdyb3VwSWQsIFsuLi5leGlzdGluZywgLi4ucmVzdWx0Lml0ZW1zXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwZXJpbWVudGFsIGFuZCB3aWxsIG1heWJlIGJlIHVzZWQgaW4gZnV0dXJlIHJlbGVhc2VzXG4gICAgICAgICAgICBjb25zdCBnZXROb3dQbGF5aW5nSXRlbUlkRnJvbVNlc3Npb24gPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuTk9XX1BMQVlJTkdfSVRFTX1gKVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCByZXNvbHZlIG5vdy1wbGF5aW5nIGl0ZW0gZnJvbSBzZXNzaW9uLCBmYWxsaW5nIGJhY2sgdG8gT1NEIHJhdGluZyBidXR0b25cIiwgZXgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dDb250YWluZXI6IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlID0gbmV3IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlKGRvY3VtZW50LmJvZHksIGRvY3VtZW50LmJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIGRpYWxvZ0NvbnRhaW5lci5yZW5kZXIoKVxuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbnRlbnRDb250YWluZXInKVxuICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByZXZpZXdTY3JvbGxTcGlubmVyXCI+JHtzcGlubmVySHRtbCgpfTwvZGl2PmBcbiAgICAgICAgICAgIGFjdGl2YXRlU3Bpbm5lcihjb250ZW50RGl2KVxuXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKClcbiAgICAgICAgICAgIGNvbnN0IHsgaXRlbVR5cGUsIGNvbnRhaW5lck5hbWUsIGdyb3VwcywgYWN0aXZlR3JvdXBJZCwgYWN0aXZlSXRlbUluZGV4IH0gPSBhd2FpdCBsb2FkSXRlbVByZXZpZXdEYXRhKGl0ZW1JZClcblxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBncm91cHNcblxuICAgICAgICAgICAgLy8gTG9hZCBhIDMtcGFnZSB3aW5kb3cgKHBhZ2Ugb2YgdGhlIGFjdGl2ZSBlcGlzb2RlLCBwbHVzIG9uZSBwYWdlIGJlZm9yZSBhbmQgYWZ0ZXIpXG4gICAgICAgICAgICBjb25zdCBwYWdlT2ZBY3RpdmVFcGlzb2RlID0gTWF0aC5mbG9vcihhY3RpdmVJdGVtSW5kZXggLyBQQUdFX1NJWkUpXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93U3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIChwYWdlT2ZBY3RpdmVFcGlzb2RlIC0gMSkgKiBQQUdFX1NJWkUpXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93TGltaXQgPSAocGFnZU9mQWN0aXZlRXBpc29kZSArIDIpICogUEFHRV9TSVpFIC0gaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXhcblxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFBhZ2U6IEdyb3VwSXRlbXNSZXN1bHQgPSBhd2FpdCBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBpbml0aWFsV2luZG93U3RhcnRJbmRleCwgaW5pdGlhbFdpbmRvd0xpbWl0KVxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gaXRlbUlkXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQgPSBhY3RpdmVHcm91cElkXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPSBJdGVtVHlwZVtpdGVtVHlwZSBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmJveFNldE5hbWUgPSBjb250YWluZXJOYW1lID8/ICcnXG5cbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJycgLy8gcmVtb3ZlIHRoZSBsb2FkaW5nIHNwaW5uZXJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdUb2tlbiA9IHByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaGFzU2VsZWN0YWJsZUdyb3VwcyA9IHByb2dyYW1EYXRhU3RvcmUudHlwZSAhPT0gSXRlbVR5cGUuTW92aWVcblxuICAgICAgICAgICAgY29uc3QgcG9wdXBUaXRsZTogUG9wdXBUaXRsZVRlbXBsYXRlID0gbmV3IFBvcHVwVGl0bGVUZW1wbGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBGb2N1c0NvbnRhaW5lcicpLCAtMSwgcHJvZ3JhbURhdGFTdG9yZSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUucmVuZGVyKChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIGlmICghaGFzU2VsZWN0YWJsZUdyb3VwcykgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUdyb3VwRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5ncm91cHMsIGNvbnRlbnREaXYsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXAuaW5kZXhOdW1iZXIsIHBvcHVwVGl0bGUsIGxvYWRHcm91cEl0ZW1zKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShoYXNTZWxlY3RhYmxlR3JvdXBzKVxuXG4gICAgICAgICAgICBhd2FpdCBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlTGF6eUl0ZW1MaXN0KGNvbnRlbnREaXYsIChzdGFydEluZGV4KSA9PiBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBzdGFydEluZGV4KSwgdmlld1Rva2VuLCBpbml0aWFsUGFnZSwgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXgpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFRleHQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8uZ3JvdXBOYW1lID8/ICcnKVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8ucGxheWVkSXRlbUNvdW50ID8/IDAsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXA/LnRvdGFsSXRlbUNvdW50ID8/IDApXG5cbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgaXRlbSB0aGF0IGlzIGN1cnJlbnRseSBwbGF5aW5nXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtID0gY29udGVudERpdi5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWRMaXN0SXRlbScpIFxuICAgICAgICAgICAgaWYgKCFhY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgZmluZCBhY3RpdmUgbWVkaWEgc291cmNlIGVsZW1lbnQgaW4gcHJldmlldyBsaXN0LiBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW5cIiwgcHJvZ3JhbURhdGFTdG9yZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0/LnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVubG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgLy8gQ2xlYXIgb2xkIGRhdGEgYW5kIHJlc2V0IHByZXZpZXdDb250YWluZXJMb2FkZWQgZmxhZ1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxWaWRlb0VsZW1lbnQ+KCd2aWRlby5odG1sdmlkZW9wbGF5ZXInKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIG9uVmlkZW9UaW1lVXBkYXRlKVxuICAgICAgICBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kID0gLTFcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKClcblxuICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gZmFsc2UgLy8gUmVzZXQgZmxhZyB3aGVuIHVubG9hZGluZ1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBpc1ByZXZpZXdCdXR0b25DcmVhdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKS5xdWVyeVNlbGVjdG9yKCcjcG9wdXBQcmV2aWV3QnV0dG9uJykgIT09IG51bGxcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9