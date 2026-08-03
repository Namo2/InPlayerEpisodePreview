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
        this.getElement().querySelector('#popupTitleSwitchIcon')?.classList.toggle('hide', !switchable);
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
    Endpoints["GROUP_WATCHED_COUNT"] = "/Users/{userId}/Groups/{groupId}/WatchedCount";
    Endpoints["CONTAINING_COLLECTIONS"] = "/Users/{userId}/Items/{itemId}/ContainingCollections";
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
    async fetchGroupWatchedCount(groupId) {
        const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.GROUP_WATCHED_COUNT}`
            .replace('{userId}', ApiClient.getCurrentUserId())
            .replace('{groupId}', groupId));
        const raw = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
        return { playedItemCount: raw.PlayedItemCount, totalItemCount: raw.TotalItemCount };
    }
    async ensureGroupWatchedCount(group) {
        if (group.playedItemCount !== Group_1.UNKNOWN_WATCHED_COUNT)
            return group;
        const { playedItemCount, totalItemCount } = await this.fetchGroupWatchedCount(group.groupId);
        this.programDataStore.setGroupWatchedCount(group.groupId, playedItemCount, totalItemCount);
        return { ...group, playedItemCount, totalItemCount };
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
                if (this.programDataStore.pluginSettings.ShowWatchedCount) {
                    titleContainer.setWatchedCount(groups[i].playedItemCount, groups[i].totalItemCount);
                    if (groups[i].playedItemCount === Group_1.UNKNOWN_WATCHED_COUNT) {
                        this.ensureGroupWatchedCount(groups[i])
                            .then(updated => titleContainer.setWatchedCount(updated.playedItemCount, updated.totalItemCount));
                    }
                }
                titleContainer.setVisible(true);
                parentDiv.innerHTML = '';
                const viewToken = this.programDataStore.beginNewView();
                const cached = !this.programDataStore.isGroupsCacheExpired
                    ? this.programDataStore.groups.find(g => g.groupId === groups[i].groupId)
                    : undefined;
                const initialPage = cached?.loadedStartIndex !== undefined
                    ? { items: [...cached.items], totalRecordCount: cached.loadedTotalRecordCount ?? cached.items.length }
                    : undefined;
                const initialOffset = cached?.loadedStartIndex ?? 0;
                await this.createLazyItemList(parentDiv, (startIndex) => loadItems(groups[i].groupId, startIndex), viewToken, initialPage, initialOffset);
            });
            if (this.programDataStore.pluginSettings.ShowWatchedCount && groups[i].playedItemCount === Group_1.UNKNOWN_WATCHED_COUNT) {
                this.ensureGroupWatchedCount(groups[i])
                    .then(updated => (0, DataFetcher_1.updateWatchedCountDom)(this.programDataStore, updated));
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
    ShowWatchedCount: true,
    SearchContainingCollections: true,
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
exports.DataFetcher = exports.togglePlayedStateLocally = exports.updateWatchedCountDom = void 0;
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
exports.updateWatchedCountDom = updateWatchedCountDom;
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
const GROUPS_CACHE_TTL = 5 * 60 * 1000;
class ProgramDataStore {
    _programData;
    _viewToken = 0;
    _groupsCachedAt = null;
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
    markGroupsFetched() {
        this._groupsCachedAt = Date.now();
    }
    get isGroupsCacheExpired() {
        return this._groupsCachedAt === null || Date.now() - this._groupsCachedAt > GROUPS_CACHE_TTL;
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
    recordLoadedItems(groupId, items, startIndex, totalRecordCount) {
        this._programData.groups = this._programData.groups.map(group => {
            if (group.groupId !== groupId)
                return group;
            if (group.loadedStartIndex === undefined || group.loadedEndIndex === undefined) {
                return { ...group, items, loadedStartIndex: startIndex, loadedEndIndex: startIndex + items.length, loadedTotalRecordCount: totalRecordCount };
            }
            if (startIndex >= group.loadedEndIndex) {
                return { ...group, items: [...group.items, ...items], loadedEndIndex: startIndex + items.length, loadedTotalRecordCount: totalRecordCount };
            }
            if (startIndex < group.loadedStartIndex) {
                return { ...group, items: [...items, ...group.items], loadedStartIndex: startIndex, loadedTotalRecordCount: totalRecordCount };
            }
            return group;
        });
    }
    setGroupWatchedCount(groupId, playedItemCount, totalItemCount) {
        this.groups = this.groups.map(g => g.groupId === groupId ? { ...g, playedItemCount, totalItemCount } : g);
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
            ? { ...group, items: group.items.map(item => item.Id === itemToUpdate.Id ? itemToUpdate : item) }
            : group);
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
// Cached for the whole page session per item (Collections/Playlists rarely change), since scanning every
// Collection/Playlist in the library is comparatively expensive - without this, reopening the same standalone
// movie's popup (or leaving one open while its search is still pending) would re-trigger the full scan every time.
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
            totalItemCount: g.TotalItemCount
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
const SEARCH_COLLECTIONS_GROUP_NAME = 'Search Collections/Playlists';
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
                programDataStore.recordLoadedItems(groupId, result.items, startIndex, result.totalRecordCount);
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
            const itemId = getLatestUserRatingItemId();
            const cachedGroup = !programDataStore.isGroupsCacheExpired
                ? programDataStore.groups.find(g => g.items.some(item => item.Id === itemId))
                : undefined;
            let activeGroupId;
            let initialPage;
            let initialWindowStartIndex;
            if (cachedGroup) {
                activeGroupId = cachedGroup.groupId;
                initialWindowStartIndex = cachedGroup.loadedStartIndex ?? 0;
                initialPage = { items: [...cachedGroup.items], totalRecordCount: cachedGroup.loadedTotalRecordCount ?? cachedGroup.items.length };
            }
            else {
                contentDiv.innerHTML = `<div class="previewScrollSpinner">${(0, Spinner_1.spinnerHtml)()}</div>`;
                (0, Spinner_1.activateSpinner)(contentDiv);
                const { itemType, containerName, groups, activeGroupId: fetchedActiveGroupId, activeItemIndex } = await loadItemPreviewData(itemId);
                programDataStore.groups = groups;
                programDataStore.markGroupsFetched();
                programDataStore.type = ItemType_1.ItemType[itemType];
                programDataStore.boxSetName = containerName ?? '';
                activeGroupId = fetchedActiveGroupId;
                // Load a 3-page window (page of the active episode, plus one page before and after)
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
                programDataStore.groups = programDataStore.groups.map((g, i) => i === 0 ? { ...g, groupName: SEARCH_COLLECTIONS_GROUP_NAME } : g);
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
                    programDataStore.groups = [selfGroup, ...newGroups].map((g, i) => ({ ...g, indexNumber: i }));
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
            popupTitle.setText(programDataStore.activeGroup?.groupName ?? '');
            popupTitle.setWatchedCount(programDataStore.activeGroup?.playedItemCount ?? 0, programDataStore.activeGroup?.totalItemCount ?? 0);
            if (programDataStore.pluginSettings.ShowWatchedCount && programDataStore.activeGroup?.playedItemCount === Group_1.UNKNOWN_WATCHED_COUNT) {
                listElementFactory.ensureGroupWatchedCount(programDataStore.activeGroup)
                    .then(updated => popupTitle.setWatchedCount(updated.playedItemCount, updated.totalItemCount));
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDcEc7WUFFRCwrQ0FBK0M7WUFDL0MsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztZQUNoRSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMscUZBQXFGLEVBQUUsZ0JBQWdCLENBQUM7YUFDeEg7WUFDRCxVQUFVLEVBQUUsYUFBYSxDQUFDLGNBQWMsRUFBRTtRQUM5QyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVMsZUFBZTtRQUNwQix1REFBdUQ7UUFDdkQsUUFBUSxDQUFDLGFBQWEsQ0FBbUIsdUJBQXVCLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7UUFDdkgseUJBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFO1FBRWpELHNCQUFzQixHQUFHLEtBQUssRUFBQyw0QkFBNEI7SUFDL0QsQ0FBQztJQUVELFNBQVMsc0JBQXNCO1FBQzNCLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsS0FBSyxJQUFJO0lBQzNGLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvQmFzZVRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0dyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9JdGVtRGV0YWlscy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9MaXN0RWxlbWVudFRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUXVpY2tBY3Rpb25zL0Zhdm9yaXRlSWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9QbGF5U3RhdGVJY29uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvU3Bpbm5lci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvRW5kcG9pbnRzLnRzIiwid2VicGFjazovLy8uL1dlYi9MaXN0RWxlbWVudEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9JdGVtVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1BsdWdpblNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9TZXJ2ZXJTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvRGF0YUZldGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvUGxheWJhY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9XZWIvSW5QbGF5ZXJQcmV2aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVGVtcGxhdGUge1xuICAgIC8qXG4gICAgICogdGhlIEhUTUwgYmFzZWQgSUQgb2YgdGhlIG5ldyBnZW5lcmF0ZWQgRWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZWxlbWVudElkOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50LCBwcml2YXRlIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7IH1cblxuICAgIHB1YmxpYyBnZXRDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkFmdGVySW5kZXg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEVsZW1lbnRJZChlbGVtZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRJZDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmdldEVsZW1lbnRJZCgpfWApO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBzdHJpbmc7XG5cbiAgICBhYnN0cmFjdCByZW5kZXIoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IHZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgYWRkRWxlbWVudFRvQ29udGFpbmVyKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIC8vIEFkZCBFbGVtZW50IGFzIHRoZSBmaXJzdCBjaGlsZCBpZiBwb3NpdGlvbiBpcyBuZWdhdGl2ZVxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSA8IDAgJiYgdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZmlyc3RFbGVtZW50Q2hpbGQuYmVmb3JlKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgaWYgY29udGFpbmVyIGlzIGVtcHR5XG4gICAgICAgIGlmICghdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuaW5uZXJIVE1MID0gdGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGlsZEJlZm9yZSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkubGFzdEVsZW1lbnRDaGlsZFxuICAgICAgICBpZiAodGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpICYmIHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgPj0gMClcbiAgICAgICAgICAgIGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlblt0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpXTtcbiAgICAgICAgXG4gICAgICAgIGNoaWxkQmVmb3JlLmFmdGVyKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgc3RyaW5nVG9Ob2RlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcpOiBOb2RlIHtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHRlbXBsYXRlU3RyaW5nO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBkaWFsb2dCYWNrZHJvcElkID0gJ2RpYWxvZ0JhY2tkcm9wJ1xuICAgIGRpYWxvZ0NvbnRhaW5lcklkID0gJ2RpYWxvZ0NvbnRhaW5lcidcbiAgICBwb3B1cENvbnRlbnRDb250YWluZXJJZCA9ICdwb3B1cENvbnRlbnRDb250YWluZXInXG4gICAgcG9wdXBGb2N1c0NvbnRhaW5lcklkID0gJ3BvcHVwRm9jdXNDb250YWluZXInXG4gICAgXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncHJldmlld1BvcHVwJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5kaWFsb2dCYWNrZHJvcElkfVwiIGNsYXNzPVwiZGlhbG9nQmFja2Ryb3AgZGlhbG9nQmFja2Ryb3BPcGVuZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmRpYWxvZ0NvbnRhaW5lcklkfVwiIGNsYXNzPVwiZGlhbG9nQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBGb2N1c0NvbnRhaW5lcklkfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb2N1c2NvbnRhaW5lciBkaWFsb2cgYWN0aW9uc2hlZXQtbm90LWZ1bGxzY3JlZW4gYWN0aW9uU2hlZXQgY2VudGVyZWREaWFsb2cgb3BlbmVkIHByZXZpZXdQb3B1cCBhY3Rpb25TaGVldENvbnRlbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlzdG9yeT1cInRydWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmVtb3Zlb25jbG9zZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBDb250ZW50Q29udGFpbmVySWR9XCIgY2xhc3M9XCJhY3Rpb25TaGVldFNjcm9sbGVyIHNjcm9sbFkgcHJldmlld1BvcHVwU2Nyb2xsZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRFbGVtZW50SWQoKSkpXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge2Zvcm1hdFdhdGNoZWRDb3VudCwgR3JvdXB9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZ3JvdXA6IEdyb3VwLCBwcml2YXRlIGlzQ3VycmVudEdyb3VwOiBib29sZWFuLCBwcml2YXRlIHNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgZ3JvdXAtJHtncm91cC5ncm91cElkfWApO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5ncm91cC5ncm91cElkfVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7dGhpcy5pc0N1cnJlbnRHcm91cCA/IFwibWF0ZXJpYWwtaWNvbnMgY2hlY2tcIiA6IFwiXCJ9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdEl0ZW1Cb2R5IGFjdGlvbnNoZWV0TGlzdEl0ZW1Cb2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuZ3JvdXAuZ3JvdXBOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5zaG93V2F0Y2hlZENvdW50ID8gYDxkaXYgY2xhc3M9XCJwcmV2aWV3R3JvdXBXYXRjaGVkQ291bnRcIj4ke2Zvcm1hdFdhdGNoZWRDb3VudCh0aGlzLmdyb3VwLnBsYXllZEl0ZW1Db3VudCwgdGhpcy5ncm91cC50b3RhbEl0ZW1Db3VudCl9PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4gY2xpY2tIYW5kbGVyKGUpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsc1RlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBpdGVtLSR7aXRlbS5JZH1gKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfS1kZXRhaWxzXCIgY2xhc3M9XCJpdGVtTWlzY0luZm8gaXRlbU1pc2NJbmZvLXByaW1hcnkgcHJldmlld0l0ZW1EZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uUHJlbWllcmVEYXRlID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICR7KG5ldyBEYXRlKHRoaXMuaXRlbS5QcmVtaWVyZURhdGUpKS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5nZXRMb2NhbGUoKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+JHt0aGlzLmZvcm1hdFJ1blRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ29tbXVuaXR5UmF0aW5nID8gYDxkaXYgY2xhc3M9XCJzdGFyUmF0aW5nQ29udGFpbmVyIG1lZGlhSW5mb0l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBzdGFySWNvbiBzdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Db21tdW5pdHlSYXRpbmcudG9GaXhlZCgxKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtIG1lZGlhSW5mb0NyaXRpY1JhdGluZyAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmcgPj0gNjAgPyAnbWVkaWFJbmZvQ3JpdGljUmF0aW5nRnJlc2gnIDogJ21lZGlhSW5mb0NyaXRpY1JhdGluZ1JvdHRlbid9XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZHNBdCBtZWRpYUluZm9JdGVtXCI+JHt0aGlzLmZvcm1hdEVuZFRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcywgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TG9jYWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubGFuZ3VhZ2VzXG4gICAgICAgICAgICA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gLy8gQHRzLWlnbm9yZSBmb3IgdXNlckxhbmd1YWdlICh0aGlzIGFkZHMgc3VwcG9ydCBmb3IgSUUpIFRPRE86IE1vdmUgdG8gaW50ZXJmYWNlXG4gICAgICAgICAgICA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRSdW5UaW1lKHRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBmb3JtYXQgdGhlIHRpY2tzIHRvIGEgc3RyaW5nIHdpdGggbWludXRlcyBhbmQgaG91cnNcbiAgICAgICAgdGlja3MgLz0gMTAwMDA7IC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCk7XG4gICAgICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgICAgIGxldCBob3Vyc1N0cmluZzogc3RyaW5nID0gaG91cnMgPiAwID8gYCR7aG91cnN9aCBgIDogJyc7XG4gICAgICAgIHJldHVybiBgJHtob3Vyc1N0cmluZ30ke21pbnV0ZXN9bWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRFbmRUaW1lKHJ1bnRpbWVUaWNrczogbnVtYmVyLCBwbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIHJ1bnRpbWVUaWNrcyAvPSAxMDAwMDtcbiAgICAgICAgcGxheWJhY2tQb3NpdGlvblRpY2tzIC89IDEwMDAwO1xuXG4gICAgICAgIGxldCB0aWNrczogbnVtYmVyID0gRGF0ZS5ub3coKSArIChydW50aW1lVGlja3MpO1xuICAgICAgICB0aWNrcyAtPSAobmV3IERhdGUoKSkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDsgLy8gYWRqdXN0IGZvciB0aW1lem9uZVxuICAgICAgICB0aWNrcyAtPSBwbGF5YmFja1Bvc2l0aW9uVGlja3M7IC8vIHN1YnRyYWN0IHRoZSBwbGF5YmFjayBwb3NpdGlvblxuXG4gICAgICAgIGxldCBob3Vyczogc3RyaW5nID0gdGhpcy56ZXJvUGFkKE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDM2MDApICUgMjQpKTtcbiAgICAgICAgbGV0IG1pbnV0ZXM6IHN0cmluZyA9IHRoaXMuemVyb1BhZChNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCkpO1xuXG4gICAgICAgIHJldHVybiBgRW5kcyBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHplcm9QYWQobnVtOiBudW1iZXIsIHBsYWNlczogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBTdHJpbmcobnVtKS5wYWRTdGFydChwbGFjZXMsICcwJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge0Zhdm9yaXRlSWNvblRlbXBsYXRlfSBmcm9tIFwiLi9RdWlja0FjdGlvbnMvRmF2b3JpdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5U3RhdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9QbGF5U3RhdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIlxuaW1wb3J0IHtJdGVtRGV0YWlsc1RlbXBsYXRlfSBmcm9tIFwiLi9JdGVtRGV0YWlsc1wiXG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiXG5pbXBvcnQge3RvZ2dsZVBsYXllZFN0YXRlTG9jYWxseX0gZnJvbSBcIi4uL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCJcblxuZXhwb3J0IGNsYXNzIExpc3RFbGVtZW50VGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcXVpY2tBY3Rpb25Db250YWluZXI6IEhUTUxFbGVtZW50XG4gICAgcHJpdmF0ZSBwbGF5U3RhdGVJY29uOiBQbGF5U3RhdGVJY29uVGVtcGxhdGVcbiAgICBwcml2YXRlIGZhdm9yaXRlSWNvbjogRmF2b3JpdGVJY29uVGVtcGxhdGVcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtLCBwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBpdGVtLSR7aXRlbS5JZH1gKVxuXG4gICAgICAgIC8vIGNyZWF0ZSB0ZW1wIHF1aWNrIGFjdGlvbiBjb250YWluZXJcbiAgICAgICAgdGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgLy8gY3JlYXRlIHF1aWNrIGFjdGlvbnNcbiAgICAgICAgdGhpcy5wbGF5U3RhdGVJY29uID0gbmV3IFBsYXlTdGF0ZUljb25UZW1wbGF0ZSh0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLCAtMSwgdGhpcy5pdGVtKVxuICAgICAgICB0aGlzLmZhdm9yaXRlSWNvbiA9IG5ldyBGYXZvcml0ZUljb25UZW1wbGF0ZSh0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLCAwLCB0aGlzLml0ZW0pXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gYWRkIHF1aWNrIGFjdGlvbnNcbiAgICAgICAgdGhpcy5wbGF5U3RhdGVJY29uLnJlbmRlcigpXG4gICAgICAgIHRoaXMuZmF2b3JpdGVJY29uLnJlbmRlcigpXG5cbiAgICAgICAgLy8gYWRkIGl0ZW0gZGV0YWlscy9pbmZvXG4gICAgICAgIGNvbnN0IGRldGFpbHNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgZGV0YWlsczogSXRlbURldGFpbHNUZW1wbGF0ZSA9IG5ldyBJdGVtRGV0YWlsc1RlbXBsYXRlKGRldGFpbHNDb250YWluZXIsIC0xLCB0aGlzLml0ZW0pXG4gICAgICAgIGRldGFpbHMucmVuZGVyKClcblxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2VTdHlsZTogc3RyaW5nID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vSXRlbXMvJHt0aGlzLml0ZW0uSWR9L0ltYWdlcy9QcmltYXJ5P3RhZz0ke3RoaXMuaXRlbS5QcmltYXJ5SW1hZ2VUYWd9JylgXG5cbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3RJdGVtIGxpc3RJdGVtLWJ1dHRvbiBhY3Rpb25TaGVldE1lbnVJdGVtIGVtYnktYnV0dG9uIHByZXZpZXdMaXN0SXRlbVwiXG4gICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0uSWR9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdJdGVtQ29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpc3RJdGVtIHByZXZpZXdJdGVtVGl0bGVcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLkluZGV4TnVtYmVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlICE9PSBJdGVtVHlwZS5Nb3ZpZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSA/IGA8c3Bhbj4ke3RoaXMuaXRlbS5JbmRleE51bWJlcn08L3NwYW4+YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RJdGVtQm9keSBhY3Rpb25zaGVldExpc3RJdGVtQm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uU2hlZXRJdGVtVGV4dFwiPiR7dGhpcy5pdGVtLk5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld1F1aWNrQWN0aW9uQ29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdMaXN0SXRlbUNvbnRlbnQgaGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAke2RldGFpbHNDb250YWluZXIuaW5uZXJIVE1MfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBwcmV2aWV3SXRlbUNvbnRlbnRSb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG92ZXJmbG93QmFja2Ryb3BDYXJkIGNhcmQtaG92ZXJhYmxlIGNhcmQtd2l0aHVzZXJkYXRhIHByZXZpZXdJdGVtSW1hZ2VDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRCb3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRTY2FsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRQYWRkZXIgY2FyZFBhZGRlci1vdmVyZmxvd0JhY2tkcm9wIGxhenktaGlkZGVuLWNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkSW1hZ2VJY29uIG1hdGVyaWFsLWljb25zIHR2XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlld0l0ZW1JbWFnZUNhcmQtJHt0aGlzLml0ZW0uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkSW1hZ2VDb250YWluZXIgY2FyZENvbnRlbnQgaXRlbUFjdGlvbiBsYXp5IGJsdXJoYXNoZWQgbGF6eS1pbWFnZS1mYWRlaW4tZmFzdCAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5CbHVyVGh1bWJuYWlsID8gJ2JsdXInIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCIke2JhY2tncm91bmRJbWFnZVN0eWxlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImlubmVyQ2FyZEZvb3RlciBmdWxsSW5uZXJDYXJkRm9vdGVyIGlubmVyQ2FyZEZvb3RlckNsZWFyIGl0ZW1Qcm9ncmVzc0JhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByb2dyZXNzQmFyRm9yZWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiR7dGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2V9JTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5JZCAhPT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiY2FyZE92ZXJsYXlDb250YWluZXIgaXRlbUFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0LWl0ZW0tJHt0aGlzLml0ZW0uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcz1cInBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5QnV0dG9uIGNhcmRPdmVybGF5QnV0dG9uLWhvdmVyIGl0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgY2FyZE92ZXJsYXlGYWItcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJyZXN1bWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2FyZE92ZXJsYXlCdXR0b25JY29uIGNhcmRPdmVybGF5QnV0dG9uSWNvbi1ob3ZlciBwbGF5X2Fycm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdJdGVtRGVzY3JpcHRpb25Db2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZXZpZXdJdGVtRGVzY3JpcHRpb24gJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuQmx1ckRlc2NyaXB0aW9uID8gJ2JsdXInIDogJyd9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkRlc2NyaXB0aW9uID8/ICdsb2FkaW5nLi4uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIGhpZGVcIj5SZWFkIG1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbGlja0hhbmRsZXIoZSkpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGF5U3RhdGVCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXlTdGF0ZUJ1dHRvbi0ke3RoaXMuaXRlbS5JZH1gKVxuICAgICAgICBwbGF5U3RhdGVCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHRvZ2dsZVBsYXllZFN0YXRlTG9jYWxseSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHRoaXMuaXRlbS5JZClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy5pdGVtLklkICE9PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCkge1xuICAgICAgICAgICAgLy8gYWRkIGV2ZW50IGhhbmRsZXIgdG8gc3RhcnQgdGhlIHBsYXliYWNrIG9mIHRoaXMgaXRlbVxuICAgICAgICAgICAgY29uc3QgaXRlbUltYWdlQ2FyZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnQtaXRlbS0ke3RoaXMuaXRlbS5JZH1gKVxuICAgICAgICAgICAgaXRlbUltYWdlQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucGxheWJhY2tIYW5kbGVyLnBsYXkodGhpcy5pdGVtLklkLCB0aGlzLml0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7Zm9ybWF0V2F0Y2hlZENvdW50fSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cFRpdGxlVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwb3B1cFRpdGxlQ29udGFpbmVyJylcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImxpc3RJdGVtIHByZXZpZXdQb3B1cFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwb3B1cFRpdGxlU3dpdGNoSWNvblwiIGNsYXNzPVwiYWN0aW9uc2hlZXRNZW51SXRlbUljb24gbGlzdEl0ZW1JY29uIGxpc3RJdGVtSWNvbi10cmFuc3BhcmVudCBtYXRlcmlhbC1pY29ucyBrZXlib2FyZF9iYWNrc3BhY2UgJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmxlbmd0aCA+IDEgPyAnJyA6ICdoaWRlJ31cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiYWN0aW9uU2hlZXRUaXRsZVwiPjwvaDE+XG4gICAgICAgICAgICAgICAgJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCA/ICc8ZGl2IGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50XCI+PC9kaXY+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xpY2tIYW5kbGVyKGUpKVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVyVGV4dCA9IHRleHRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U3dpdGNoYWJsZShzd2l0Y2hhYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjcG9wdXBUaXRsZVN3aXRjaEljb24nKT8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFzd2l0Y2hhYmxlKVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRXYXRjaGVkQ291bnQocGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgd2F0Y2hlZENvdW50RWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICAgICAgaWYgKHdhdGNoZWRDb3VudEVsZW1lbnQpIHdhdGNoZWRDb3VudEVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0V2F0Y2hlZENvdW50KHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQpXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXRWaXNpYmxlKGlzVmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKVxuICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICByZW5kZXJlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgUHJldmlld0J1dHRvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwb3B1cFByZXZpZXdCdXR0b24nKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwiYXV0b1NpemUgcGFwZXItaWNvbi1idXR0b24tbGlnaHRcIiBpcz1cInBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFcGlzb2RlIFByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICA8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT5cbiAgICAgICAgICAgICAgICA8c3ZnIGlkPVwic3ZnMVwiXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNiA0XCJcbiAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJsYXllcjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdDQ3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc2NDY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMuNzU2ODY3NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyLjE2OTM2NjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjAuMjM4MjMzMDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjEuODI1NzMzNVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwicmVjdDQ3LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40NzY1OTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtIDEuMDI5MTQzNywxLjAzMjA0ODIgaCAzLjc1Mjg5OTEgdiAyLjE3MjIzOTQgbCAwLjAwNjc2LC0yLjE1NzI1OTUgelwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwicmVjdDQ3LThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40Nzc0Mjc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtIDEuODIyODYxNCwwLjIzODcxMzM2IGggMy43NTkyNTkgViAyLjQxMDEyMTEgbCAtMC4wMDY4LC0yLjE3MTQwNzc0IHpcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IGFueSA9PiBjbGlja0hhbmRsZXIoKSk7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi8uLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVJY29uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgnZmF2b3JpdGVCdXR0b24tJyArIGl0ZW0uSWQpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICAgICBpcz1cImVtYnktcmF0aW5nYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbUFjdGlvbiBwYXBlci1pY29uLWJ1dHRvbi1saWdodCBlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbT8uSWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zZXJ2ZXJpZD1cIiR7dGhpcy5pdGVtPy5TZXJ2ZXJJZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWl0ZW10eXBlPVwiRXBpc29kZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbGlrZXM9XCJcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlzZmF2b3JpdGU9XCIke3RoaXMuaXRlbT8uVXNlckRhdGE/LklzRmF2b3JpdGUgPz8gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBmYXZvcml0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi8uLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuXG5leHBvcnQgY2xhc3MgUGxheVN0YXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BsYXlTdGF0ZUJ1dHRvbi0nICsgdGhpcy5pdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXBsYXlzdGF0ZWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0/LklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuaXRlbT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGF5ZWQ9XCIke3RoaXMuaXRlbT8uVXNlckRhdGE/LlBsYXllZCA/PyBmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1hcmsgcGxheWVkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjaGVjayBwbGF5c3RhdGVidXR0b24taWNvbi0ke3RoaXMuaXRlbT8uVXNlckRhdGE/LlBsYXllZCA/IFwicGxheWVkXCIgOiBcInVucGxheWVkXCJ9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgfVxufVxuIiwiY29uc3QgU1BJTk5FUl9MQVlFUlNfSFRNTDogc3RyaW5nID0gWzEsIDIsIDMsIDRdLm1hcChsYXllciA9PlxuICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2xheWVyIG1kbC1zcGlubmVyX19sYXllci0ke2xheWVyfVwiPmAgK1xuICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUtY2xpcHBlciBtZGwtc3Bpbm5lcl9fbGVmdFwiPmAgK1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlIG1kbC1zcGlubmVyX19jaXJjbGVMZWZ0XCI+PC9kaXY+YCArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXIgbWRsLXNwaW5uZXJfX3JpZ2h0XCI+YCArXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUgbWRsLXNwaW5uZXJfX2NpcmNsZVJpZ2h0XCI+PC9kaXY+YCArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICBgPC9kaXY+YFxuKS5qb2luKCcnKVxuXG5leHBvcnQgZnVuY3Rpb24gc3Bpbm5lckh0bWwoZXh0cmFDbGFzc2VzOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8ZGl2IGRpcj1cImx0clwiIGNsYXNzPVwiZG9jc3Bpbm5lciBtZGwtc3Bpbm5lciAke2V4dHJhQ2xhc3Nlc31cIj4ke1NQSU5ORVJfTEFZRVJTX0hUTUx9PC9kaXY+YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVTcGlubmVyKGNvbnRhaW5lcjogUGFyZW50Tm9kZSk6IHZvaWQge1xuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWRsLXNwaW5uZXInKT8uY2xhc3NMaXN0LmFkZCgnbWRsU3Bpbm5lckFjdGl2ZScpXG59IiwiZXhwb3J0IGVudW0gRW5kcG9pbnRzIHtcbiAgICBCQVNFID0gXCJJblBsYXllclByZXZpZXdcIixcbiAgICBJVEVNX0RFU0NSSVBUSU9OID0gXCIvSXRlbXMve2l0ZW1JZH1cIixcbiAgICBQTEFZX01FRElBID0gXCIvSXRlbXMve2l0ZW1JZH0vUGxheS97dGlja3N9XCIsXG4gICAgTk9XX1BMQVlJTkdfSVRFTSA9IFwiL05vd1BsYXlpbmdJdGVtXCIsXG4gICAgU0VSVkVSX1NFVFRJTkdTID0gXCIvU2VydmVyU2V0dGluZ3NcIixcbiAgICBJVEVNX1BSRVZJRVdfREFUQSA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vSXRlbXMve2l0ZW1JZH0vUHJldmlld0RhdGFcIixcbiAgICBHUk9VUF9JVEVNUyA9IFwiL1VzZXJzL3t1c2VySWR9L0dyb3Vwcy97Z3JvdXBJZH0vSXRlbXNcIixcbiAgICBHUk9VUF9XQVRDSEVEX0NPVU5UID0gXCIvVXNlcnMve3VzZXJJZH0vR3JvdXBzL3tncm91cElkfS9XYXRjaGVkQ291bnRcIixcbiAgICBDT05UQUlOSU5HX0NPTExFQ1RJT05TID0gXCIvVXNlcnMve3VzZXJJZH0vSXRlbXMve2l0ZW1JZH0vQ29udGFpbmluZ0NvbGxlY3Rpb25zXCIsXG4gICAgU0VUX1NPVVJDRV9DT0xMRUNUSU9OID0gXCIvVXNlcnMve3VzZXJJZH0ve2RldmljZUlkfS9Tb3VyY2VDb2xsZWN0aW9uL3tjb2xsZWN0aW9uSWR9XCJcbn0iLCJpbXBvcnQge0xpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7R3JvdXAsIFVOS05PV05fV0FUQ0hFRF9DT1VOVH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge0dyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Hcm91cExpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7UG9wdXBUaXRsZVRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuL0VuZHBvaW50c1wiO1xuaW1wb3J0IHtHcm91cEl0ZW1zUmVzdWx0fSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBJdGVtc1Jlc3VsdFwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge2FjdGl2YXRlU3Bpbm5lciwgc3Bpbm5lckh0bWx9IGZyb20gXCIuL0NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IHt1cGRhdGVXYXRjaGVkQ291bnREb219IGZyb20gXCIuL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCI7XG5cbi8vIFRoZSBiYWNrZW5kIGFscmVhZHkgcmV0dXJucyBQbGF5bGlzdHMvQm94U2V0cyBhbmQgRm9sZGVycyBpbiB0aGVpciBvd24gbWFudWFsIGl0ZW0vZGlzc3BsYXkgb3JkZXJcbi8vIHNvcnRpbmcgc2hvdWxkIG9ubHkgYXBwbHkgZm9yIHNlYXNvbi1iYXNlZCAoRXBpc29kZSkgZ3JvdXBzLCB3aGVyZSBpdCByZWZsZWN0cyBhY3R1YWwgZXBpc29kZSBvcmRlci5cbmNvbnN0IHByZXNlcnZlQmFja2VuZE9yZGVyVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5QbGF5bGlzdCwgSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5Gb2xkZXJdKVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHsgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtczogUHJldmlld0l0ZW1bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIgPSAwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBGb3IgUGxheWxpc3RzL0JveFNldHMsIHNob3cgdGhlIGFjdHVhbCBsaXN0IHBvc2l0aW9uIGluc3RlYWQgb2YgdGhlIEluZGV4TnVtYmVyIGZyb20gdGhlaXIgc2Vhc29uL2VwaXNvZGUuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcHJlc2VydmVPcmRlciA/IHsgLi4uaXRlbXNbaV0sIEluZGV4TnVtYmVyOiBvZmZzZXQgKyBpICsgMSB9IDogaXRlbXNbaV1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVySXRlbShpdGVtLCBwYXJlbnREaXYsIG9mZnNldCArIGkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIHByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXM6IFByZXZpZXdJdGVtW10sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIG9mZnNldDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcmVzZXJ2ZU9yZGVyID8geyAuLi5pdGVtc1tpXSwgSW5kZXhOdW1iZXI6IG9mZnNldCArIGkgKyAxIH0gOiBpdGVtc1tpXVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIHBhcmVudERpdiwgLTEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaG93IGEgXCJSZWFkIG1vcmVcIiBidXR0b24gaWYgZGVzY3JpcHRpb24gZXhjZWVkcyBtYXggaGVpZ2h0XG4gICAgcHJpdmF0ZSBhcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbUNvbnRhaW5lcjogRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJylcbiAgICAgICAgY29uc3QgcmVhZE1vcmVCdXR0b24gPSBpdGVtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbicpXG4gICAgICAgIGlmICghZGVzY3JpcHRpb24gfHwgIXJlYWRNb3JlQnV0dG9uKSByZXR1cm5cblxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpXG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLnRleHRDb250ZW50ID0gJ1JlYWQgbW9yZSdcblxuICAgICAgICBjb25zdCBpc092ZXJmbG93aW5nID0gZGVzY3JpcHRpb24uc2Nyb2xsSGVpZ2h0ID4gZGVzY3JpcHRpb24uY2xpZW50SGVpZ2h0XG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaXNPdmVyZmxvd2luZylcbiAgICAgICAgaWYgKCFpc092ZXJmbG93aW5nKSByZXR1cm5cblxuICAgICAgICByZWFkTW9yZUJ1dHRvbi5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkID0gZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKVxuICAgICAgICAgICAgcmVhZE1vcmVCdXR0b24udGV4dENvbnRlbnQgPSBleHBhbmRlZCA/ICdSZWFkIGxlc3MnIDogJ1JlYWQgbW9yZSdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgcmVuZGVySXRlbShpdGVtOiBQcmV2aWV3SXRlbSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgaXRlbUxpc3RFbGVtZW50VGVtcGxhdGUgPSBuZXcgTGlzdEVsZW1lbnRUZW1wbGF0ZShwYXJlbnREaXYsIHBvc2l0aW9uQWZ0ZXJJbmRleCwgaXRlbSwgdGhpcy5wbGF5YmFja0hhbmRsZXIsIHRoaXMucHJvZ3JhbURhdGFTdG9yZSk7XG4gICAgICAgIGl0ZW1MaXN0RWxlbWVudFRlbXBsYXRlLnJlbmRlcihhc3luYyAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgLy8gaGlkZSBpdGVtIGNvbnRlbnQgZm9yIGFsbCBleGlzdGluZyBpdGVtcyBpbiB0aGUgcHJldmlldyBsaXN0XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXZpZXdMaXN0SXRlbUNvbnRlbnRcIikuZm9yRWFjaCgoZWxlbWVudDogRWxlbWVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXI6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS0ke2l0ZW0uSWR9YCkucXVlcnlTZWxlY3RvcignLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQnKTtcblxuICAgICAgICAgICAgLy8gbG9hZCBpdGVtIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBpZiAoIWl0ZW0uRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX0RFU0NSSVBUSU9OfWBcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbS5JZCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uOiBzdHJpbmcgPSByZXN1bHQ/LkRlc2NyaXB0aW9uXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJldmlld0l0ZW1EZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gbmV3RGVzY3JpcHRpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2hvdyBpdGVtIGNvbnRlbnQgZm9yIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICAgICAgdGhpcy5hcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGl0ZW0uSWQgPT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtTm9kZTogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLSR7aXRlbS5JZH1gKS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0xpc3RJdGVtQ29udGVudCcpO1xuXG4gICAgICAgICAgICAvLyBwcmVsb2FkIGRlc2NyaXB0aW9uIGZvciB0aGUgY3VycmVudGx5IHBsYXlpbmcgaXRlbVxuICAgICAgICAgICAgaWYgKCFpdGVtLkRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuSVRFTV9ERVNDUklQVElPTn1gXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW0uSWQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbjogc3RyaW5nID0gcmVzdWx0Py5EZXNjcmlwdGlvblxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGl0ZW1Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBuZXdEZXNjcmlwdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICBpdGVtTm9kZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZExpc3RJdGVtJyk7XG4gICAgICAgICAgICB0aGlzLmFwcGx5RGVzY3JpcHRpb25SZWFkTW9yZShpdGVtTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTd2FwcyBhbiBpZGxlIHNlbnRpbmVsIG1hcmtlciBpbnRvIGEgdmlzaWJsZSBzcGlubmVyIG9uY2UgaXQncyBhY3R1YWxseSB0cmlnZ2VyZWQgYSBwYWdlIGxvYWQuXG4gICAgcHJpdmF0ZSBzaG93U2VudGluZWxTcGlubmVyKHNlbnRpbmVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBzZW50aW5lbC5jbGFzc0xpc3QuYWRkKCdwcmV2aWV3U2Nyb2xsU3Bpbm5lcicpXG4gICAgICAgIHNlbnRpbmVsLmlubmVySFRNTCA9IHNwaW5uZXJIdG1sKClcbiAgICAgICAgYWN0aXZhdGVTcGlubmVyKHNlbnRpbmVsKVxuICAgIH1cblxuICAgIC8vIEFwcGVuZHMgcGFnZXMgd2hlbiBzY3JvbGxpbmcgdG8gdGhlIGJvdHRvbS5cbiAgICBwcml2YXRlIGFkZFNjcm9sbFNlbnRpbmVsKFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBsb2FkUGFnZTogKHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PixcbiAgICAgICAgbmV4dFN0YXJ0SW5kZXg6IG51bWJlcixcbiAgICAgICAgdG90YWxMb2FkZWQ6IG51bWJlcixcbiAgICAgICAgdmlld1Rva2VuOiBudW1iZXJcbiAgICApOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VudGluZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoc2VudGluZWwpXG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoYXN5bmMgKFtlbnRyeV0pID0+IHtcbiAgICAgICAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHJldHVyblxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICAgICAgICB0aGlzLnNob3dTZW50aW5lbFNwaW5uZXIoc2VudGluZWwpXG5cbiAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMsIHRvdGFsUmVjb3JkQ291bnQgfSA9IGF3YWl0IGxvYWRQYWdlKG5leHRTdGFydEluZGV4KVxuICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgc2VudGluZWwucmVtb3ZlKClcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbUVsZW1lbnRzKGl0ZW1zLCBwYXJlbnREaXYsIHRvdGFsTG9hZGVkKVxuXG4gICAgICAgICAgICBjb25zdCBuZXdUb3RhbExvYWRlZCA9IHRvdGFsTG9hZGVkICsgaXRlbXMubGVuZ3RoXG4gICAgICAgICAgICBpZiAobmV3VG90YWxMb2FkZWQgPCB0b3RhbFJlY29yZENvdW50KVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsU2VudGluZWwocGFyZW50RGl2LCBsb2FkUGFnZSwgbmV3VG90YWxMb2FkZWQsIG5ld1RvdGFsTG9hZGVkLCB2aWV3VG9rZW4pXG4gICAgICAgIH0sIHsgcm9vdDogcGFyZW50RGl2LCB0aHJlc2hvbGQ6IDAgfSlcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNlbnRpbmVsKVxuICAgIH1cblxuICAgIC8vIFByZXBlbmRzIHBhZ2VzIHdoZW4gc2Nyb2xsaW5nIHRvIHRoZSB0b3AuXG4gICAgLy8gY3VycmVudFN0YXJ0SW5kZXggaXMgdGhlIGFic29sdXRlIGluZGV4IG9mIHdoYXRldmVyIGlzIGN1cnJlbnRseSB0aGUgZmlyc3QgbG9hZGVkIGl0ZW1cbiAgICBwcml2YXRlIGFkZFNjcm9sbFNlbnRpbmVsQmFja3dhcmQoXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGxvYWRQYWdlOiAoc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+LFxuICAgICAgICBjdXJyZW50U3RhcnRJbmRleDogbnVtYmVyLFxuICAgICAgICB2aWV3VG9rZW46IG51bWJlclxuICAgICk6IHZvaWQge1xuICAgICAgICBpZiAoY3VycmVudFN0YXJ0SW5kZXggPD0gMCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3Qgc2VudGluZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwYXJlbnREaXYuaW5zZXJ0QmVmb3JlKHNlbnRpbmVsLCBwYXJlbnREaXYuZmlyc3RDaGlsZClcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihhc3luYyAoW2VudHJ5XSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykgcmV0dXJuXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcblxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0QmVmb3JlU3Bpbm5lciA9IHBhcmVudERpdi5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgIHRoaXMuc2hvd1NlbnRpbmVsU3Bpbm5lcihzZW50aW5lbClcbiAgICAgICAgICAgIHBhcmVudERpdi5zY3JvbGxUb3AgKz0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIHNjcm9sbEhlaWdodEJlZm9yZVNwaW5uZXJcblxuICAgICAgICAgICAgY29uc3QgcGFnZVNpemUgPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICBjb25zdCBuZXdTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgY3VycmVudFN0YXJ0SW5kZXggLSBwYWdlU2l6ZSlcbiAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IGxvYWRQYWdlKG5ld1N0YXJ0SW5kZXgpXG4gICAgICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHRCZWZvcmVQcmVwZW5kID0gcGFyZW50RGl2LnNjcm9sbEhlaWdodFxuICAgICAgICAgICAgc2VudGluZWwucmVtb3ZlKClcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJlcGVuZEl0ZW1FbGVtZW50cyhpdGVtcywgcGFyZW50RGl2LCBuZXdTdGFydEluZGV4KVxuICAgICAgICAgICAgcGFyZW50RGl2LnNjcm9sbFRvcCArPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsSGVpZ2h0QmVmb3JlUHJlcGVuZFxuXG4gICAgICAgICAgICB0aGlzLmFkZFNjcm9sbFNlbnRpbmVsQmFja3dhcmQocGFyZW50RGl2LCBsb2FkUGFnZSwgbmV3U3RhcnRJbmRleCwgdmlld1Rva2VuKVxuICAgICAgICB9LCB7IHJvb3Q6IHBhcmVudERpdiwgdGhyZXNob2xkOiAwIH0pXG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZW50aW5lbClcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlTGF6eUl0ZW1MaXN0KFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBsb2FkUGFnZTogKHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PixcbiAgICAgICAgdmlld1Rva2VuOiBudW1iZXIsXG4gICAgICAgIGluaXRpYWxQYWdlPzogR3JvdXBJdGVtc1Jlc3VsdCxcbiAgICAgICAgaW5pdGlhbE9mZnNldDogbnVtYmVyID0gMFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBmaXJzdFBhZ2UgPSBpbml0aWFsUGFnZSA/PyBhd2FpdCBsb2FkUGFnZSgwKVxuICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJdGVtRWxlbWVudHMoZmlyc3RQYWdlLml0ZW1zLCBwYXJlbnREaXYsIGluaXRpYWxPZmZzZXQpXG5cbiAgICAgICAgY29uc3QgdG90YWxMb2FkZWQgPSBpbml0aWFsT2Zmc2V0ICsgZmlyc3RQYWdlLml0ZW1zLmxlbmd0aFxuICAgICAgICBpZiAodG90YWxMb2FkZWQgPCBmaXJzdFBhZ2UudG90YWxSZWNvcmRDb3VudClcbiAgICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsU2VudGluZWwocGFyZW50RGl2LCBsb2FkUGFnZSwgdG90YWxMb2FkZWQsIHRvdGFsTG9hZGVkLCB2aWV3VG9rZW4pXG5cbiAgICAgICAgdGhpcy5hZGRTY3JvbGxTZW50aW5lbEJhY2t3YXJkKHBhcmVudERpdiwgbG9hZFBhZ2UsIGluaXRpYWxPZmZzZXQsIHZpZXdUb2tlbilcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGZldGNoR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBJZDogc3RyaW5nKTogUHJvbWlzZTx7IHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyIH0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfV0FUQ0hFRF9DT1VOVH1gXG4gICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAgICAgLnJlcGxhY2UoJ3tncm91cElkfScsIGdyb3VwSWQpKVxuICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgcmV0dXJuIHsgcGxheWVkSXRlbUNvdW50OiByYXcuUGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudDogcmF3LlRvdGFsSXRlbUNvdW50IH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIGVuc3VyZUdyb3VwV2F0Y2hlZENvdW50KGdyb3VwOiBHcm91cCk6IFByb21pc2U8R3JvdXA+IHtcbiAgICAgICAgaWYgKGdyb3VwLnBsYXllZEl0ZW1Db3VudCAhPT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKSByZXR1cm4gZ3JvdXBcblxuICAgICAgICBjb25zdCB7IHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hHcm91cFdhdGNoZWRDb3VudChncm91cC5ncm91cElkKVxuICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuc2V0R3JvdXBXYXRjaGVkQ291bnQoZ3JvdXAuZ3JvdXBJZCwgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudClcbiAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVHcm91cEVsZW1lbnRzKFxuICAgICAgICBncm91cHM6IEdyb3VwW10sXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGN1cnJlbnRHcm91cEluZGV4OiBudW1iZXIsXG4gICAgICAgIHRpdGxlQ29udGFpbmVyOiBQb3B1cFRpdGxlVGVtcGxhdGUsXG4gICAgICAgIGxvYWRJdGVtczogKGdyb3VwSWQ6IHN0cmluZywgc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+XG4gICAgKTogdm9pZCB7XG4gICAgICAgIGdyb3Vwcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4TnVtYmVyIC0gYi5pbmRleE51bWJlcilcblxuICAgICAgICAvLyBJbnZhbGlkYXRlcyBhbnkgaXRlbSBsb2FkIHN0aWxsIGluIHByb2dyZXNzc1xuICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IG5ldyBHcm91cExpc3RFbGVtZW50VGVtcGxhdGUocGFyZW50RGl2LCBpLCBncm91cHNbaV0sIGdyb3Vwc1tpXS5pbmRleE51bWJlciA9PT0gY3VycmVudEdyb3VwSW5kZXgsIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50KVxuICAgICAgICAgICAgZ3JvdXAucmVuZGVyKGFzeW5jIChlOiBNb3VzZUV2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQgPSBncm91cHNbaV0uZ3JvdXBJZFxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFRleHQoZ3JvdXBzW2ldLmdyb3VwTmFtZSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0V2F0Y2hlZENvdW50KGdyb3Vwc1tpXS5wbGF5ZWRJdGVtQ291bnQsIGdyb3Vwc1tpXS50b3RhbEl0ZW1Db3VudClcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3Vwc1tpXS5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVHcm91cFdhdGNoZWRDb3VudChncm91cHNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4odXBkYXRlZCA9PiB0aXRsZUNvbnRhaW5lci5zZXRXYXRjaGVkQ291bnQodXBkYXRlZC5wbGF5ZWRJdGVtQ291bnQsIHVwZGF0ZWQudG90YWxJdGVtQ291bnQpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFZpc2libGUodHJ1ZSlcblxuICAgICAgICAgICAgICAgIHBhcmVudERpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdUb2tlbiA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkID0gIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0dyb3Vwc0NhY2hlRXhwaXJlZFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuZmluZChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXBzW2ldLmdyb3VwSWQpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFBhZ2U6IEdyb3VwSXRlbXNSZXN1bHQgfCB1bmRlZmluZWQgPSBjYWNoZWQ/LmxvYWRlZFN0YXJ0SW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IHsgaXRlbXM6IFsuLi5jYWNoZWQuaXRlbXNdLCB0b3RhbFJlY29yZENvdW50OiBjYWNoZWQubG9hZGVkVG90YWxSZWNvcmRDb3VudCA/PyBjYWNoZWQuaXRlbXMubGVuZ3RoIH1cbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsT2Zmc2V0ID0gY2FjaGVkPy5sb2FkZWRTdGFydEluZGV4ID8/IDBcblxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlTGF6eUl0ZW1MaXN0KHBhcmVudERpdiwgKHN0YXJ0SW5kZXgpID0+IGxvYWRJdGVtcyhncm91cHNbaV0uZ3JvdXBJZCwgc3RhcnRJbmRleCksIHZpZXdUb2tlbiwgaW5pdGlhbFBhZ2UsIGluaXRpYWxPZmZzZXQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgJiYgZ3JvdXBzW2ldLnBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVHcm91cFdhdGNoZWRDb3VudChncm91cHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHVwZGF0ZWQgPT4gdXBkYXRlV2F0Y2hlZENvdW50RG9tKHRoaXMucHJvZ3JhbURhdGFTdG9yZSwgdXBkYXRlZCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBJdGVtVHlwZSB7XG4gICAgQWdncmVnYXRlRm9sZGVyLFxuICAgIEF1ZGlvLFxuICAgIEF1ZGlvQm9vayxcbiAgICBCYXNlUGx1Z2luRm9sZGVyLFxuICAgIEJvb2ssXG4gICAgQm94U2V0LFxuICAgIENoYW5uZWwsXG4gICAgQ2hhbm5lbEZvbGRlckl0ZW0sXG4gICAgQ29sbGVjdGlvbkZvbGRlcixcbiAgICBFcGlzb2RlLFxuICAgIEZvbGRlcixcbiAgICBHZW5yZSxcbiAgICBNYW51YWxQbGF5bGlzdHNGb2xkZXIsXG4gICAgTW92aWUsXG4gICAgTGl2ZVR2Q2hhbm5lbCxcbiAgICBMaXZlVHZQcm9ncmFtLFxuICAgIE11c2ljQWxidW0sXG4gICAgTXVzaWNBcnRpc3QsXG4gICAgTXVzaWNHZW5yZSxcbiAgICBNdXNpY1ZpZGVvLFxuICAgIFBlcnNvbixcbiAgICBQaG90byxcbiAgICBQaG90b0FsYnVtLFxuICAgIFBsYXlsaXN0LFxuICAgIFBsYXlsaXN0c0ZvbGRlcixcbiAgICBQcm9ncmFtLFxuICAgIFJlY29yZGluZyxcbiAgICBTZWFzb24sXG4gICAgU2VyaWVzLFxuICAgIFN0dWRpbyxcbiAgICBUcmFpbGVyLFxuICAgIFR2Q2hhbm5lbCxcbiAgICBUdlByb2dyYW0sXG4gICAgVXNlclJvb3RGb2xkZXIsXG4gICAgVXNlclZpZXcsXG4gICAgVmlkZW8sXG4gICAgWWVhclxufSIsImltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL0l0ZW1UeXBlXCI7XG5cbmV4cG9ydCB0eXBlIFBsdWdpblNldHRpbmdzID0ge1xuICAgIEVuYWJsZWRJdGVtVHlwZXM6IEl0ZW1UeXBlW10sXG4gICAgQmx1ckRlc2NyaXB0aW9uOiBib29sZWFuLFxuICAgIEJsdXJUaHVtYm5haWw6IGJvb2xlYW4sXG4gICAgRXBpc29kZVBhZ2VTaXplOiBudW1iZXIsXG4gICAgU2hvd1dhdGNoZWRDb3VudDogYm9vbGVhbixcbiAgICBTZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnM6IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0UGx1Z2luU2V0dGluZ3M6IFBsdWdpblNldHRpbmdzID0ge1xuICAgIEVuYWJsZWRJdGVtVHlwZXM6IFtJdGVtVHlwZS5TZXJpZXMsIEl0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuTW92aWUsIEl0ZW1UeXBlLkZvbGRlciwgSXRlbVR5cGUuVmlkZW9dLFxuICAgIEJsdXJEZXNjcmlwdGlvbjogZmFsc2UsXG4gICAgQmx1clRodW1ibmFpbDogZmFsc2UsXG4gICAgRXBpc29kZVBhZ2VTaXplOiAxMCxcbiAgICBTaG93V2F0Y2hlZENvdW50OiB0cnVlLFxuICAgIFNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9uczogdHJ1ZSxcbn0iLCJpbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi9QcmV2aWV3SXRlbVwiO1xuXG5leHBvcnQgdHlwZSBHcm91cCA9IHtcbiAgICBncm91cElkOiBzdHJpbmdcbiAgICBncm91cE5hbWU6IHN0cmluZ1xuICAgIGl0ZW1zOiBQcmV2aWV3SXRlbVtdXG4gICAgaW5kZXhOdW1iZXI6IG51bWJlclxuICAgIHBsYXllZEl0ZW1Db3VudDogbnVtYmVyXG4gICAgdG90YWxJdGVtQ291bnQ6IG51bWJlclxuICAgIGxvYWRlZFN0YXJ0SW5kZXg/OiBudW1iZXJcbiAgICBsb2FkZWRFbmRJbmRleD86IG51bWJlclxuICAgIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ/OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IFVOS05PV05fV0FUQ0hFRF9DT1VOVCA9IC0xXG5cbmV4cG9ydCBjb25zdCBmb3JtYXRXYXRjaGVkQ291bnQgPSAocGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIpOiBzdHJpbmcgPT5cbiAgICBwbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCB8fCB0b3RhbEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UXG4gICAgICAgID8gJ+KApiB3YXRjaGVkJ1xuICAgICAgICA6IGAke3BsYXllZEl0ZW1Db3VudH0vJHt0b3RhbEl0ZW1Db3VudH0gd2F0Y2hlZGBcblxuIiwiZXhwb3J0IHR5cGUgU2VydmVyU2V0dGluZ3MgPSB7XG4gICAgTWluUmVzdW1lUGN0OiBudW1iZXIsIFxuICAgIE1heFJlc3VtZVBjdDogbnVtYmVyLCBcbiAgICBNaW5SZXN1bWVEdXJhdGlvblNlY29uZHM6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNlcnZlclNldHRpbmdzOiBTZXJ2ZXJTZXR0aW5ncyA9IHtcbiAgICBNaW5SZXN1bWVQY3Q6IDUsXG4gICAgTWF4UmVzdW1lUGN0OiA5MCxcbiAgICBNaW5SZXN1bWVEdXJhdGlvblNlY29uZHM6IDMwMFxufSIsImltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuaW1wb3J0IHtmb3JtYXRXYXRjaGVkQ291bnQsIEdyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5cbnR5cGUgVXNlckRhdGFDaGFuZ2VkRW50cnkgPSB7XG4gICAgSXRlbUlkOiBzdHJpbmdcbiAgICBQbGF5ZWQ6IGJvb2xlYW5cbiAgICBJc0Zhdm9yaXRlOiBib29sZWFuXG4gICAgUGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXJcbiAgICBQbGF5ZWRQZXJjZW50YWdlPzogbnVtYmVyXG59XG5cbnR5cGUgV2ViU29ja2V0TWVzc2FnZSA9IHtcbiAgICBNZXNzYWdlVHlwZTogc3RyaW5nXG4gICAgRGF0YTogYW55XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXYXRjaGVkQ291bnREb20ocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgZ3JvdXA6IEdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgdGV4dCA9IGZvcm1hdFdhdGNoZWRDb3VudChncm91cC5wbGF5ZWRJdGVtQ291bnQsIGdyb3VwLnRvdGFsSXRlbUNvdW50KVxuXG4gICAgaWYgKGdyb3VwLmdyb3VwSWQgPT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCkge1xuICAgICAgICBjb25zdCBwb3B1cFdhdGNoZWRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cFRpdGxlQ29udGFpbmVyJyk/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICAgICAgaWYgKHBvcHVwV2F0Y2hlZENvdW50KSBwb3B1cFdhdGNoZWRDb3VudC5pbm5lclRleHQgPSB0ZXh0XG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBMaXN0V2F0Y2hlZENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGdyb3VwLSR7Z3JvdXAuZ3JvdXBJZH1gKT8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgIGlmIChncm91cExpc3RXYXRjaGVkQ291bnQpIGdyb3VwTGlzdFdhdGNoZWRDb3VudC5pbm5lclRleHQgPSB0ZXh0XG59XG5cbmZ1bmN0aW9uIGFkanVzdFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBpdGVtSWQ6IHN0cmluZywgd2FzUGxheWVkOiBib29sZWFuLCBpc1BsYXllZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50KSByZXR1cm5cbiAgICBpZiAod2FzUGxheWVkID09PSBpc1BsYXllZCkgcmV0dXJuXG5cbiAgICBjb25zdCB1cGRhdGVkR3JvdXAgPSBwcm9ncmFtRGF0YVN0b3JlLmFkanVzdEdyb3VwUGxheWVkQ291bnQoaXRlbUlkLCBpc1BsYXllZCA/IDEgOiAtMSlcbiAgICBpZiAodXBkYXRlZEdyb3VwKSB1cGRhdGVXYXRjaGVkQ291bnREb20ocHJvZ3JhbURhdGFTdG9yZSwgdXBkYXRlZEdyb3VwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUGxheWVkU3RhdGVMb2NhbGx5KHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGl0ZW1JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaXRlbTogUHJldmlld0l0ZW0gPSBwcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKGl0ZW1JZClcbiAgICBpZiAoIWl0ZW0pIHJldHVyblxuXG4gICAgY29uc3Qgd2FzUGxheWVkID0gaXRlbS5Vc2VyRGF0YS5QbGF5ZWRcbiAgICBjb25zdCBpc1BsYXllZCA9ICF3YXNQbGF5ZWRcblxuICAgIHByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgIC4uLml0ZW0sXG4gICAgICAgIFVzZXJEYXRhOiB7IC4uLml0ZW0uVXNlckRhdGEsIFBsYXllZDogaXNQbGF5ZWQgfVxuICAgIH0pXG4gICAgYWRqdXN0V2F0Y2hlZENvdW50KHByb2dyYW1EYXRhU3RvcmUsIGl0ZW1JZCwgd2FzUGxheWVkLCBpc1BsYXllZClcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFGZXRjaGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcbiAgICAgICAgRXZlbnRzLm9uKEFwaUNsaWVudCwgJ21lc3NhZ2UnLCAoX2V2ZW50LCBtZXNzYWdlOiBXZWJTb2NrZXRNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5NZXNzYWdlVHlwZSAhPT0gJ1VzZXJEYXRhQ2hhbmdlZCcpIHJldHVyblxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuRGF0YS5Vc2VySWQgIT09IEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCkpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YUxpc3Q6IFVzZXJEYXRhQ2hhbmdlZEVudHJ5W10gPSBtZXNzYWdlLkRhdGEuVXNlckRhdGFMaXN0ID8/IFtdXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVzZXJEYXRhIG9mIHVzZXJEYXRhTGlzdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW06IFByZXZpZXdJdGVtID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKHVzZXJEYXRhLkl0ZW1JZClcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB3YXNQbGF5ZWQgPSBpdGVtLlVzZXJEYXRhLlBsYXllZFxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgVXNlckRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0uVXNlckRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZWQ6IHVzZXJEYXRhLlBsYXllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIElzRmF2b3JpdGU6IHVzZXJEYXRhLklzRmF2b3JpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IHVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IHVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBhZGp1c3RXYXRjaGVkQ291bnQodGhpcy5wcm9ncmFtRGF0YVN0b3JlLCB1c2VyRGF0YS5JdGVtSWQsIHdhc1BsYXllZCwgdXNlckRhdGEuUGxheWVkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nX3ByZWZpeDogc3RyaW5nID0gXCJbSW5QbGF5ZXJFcGlzb2RlUHJldmlld11cIikge1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmluZm8oYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi4vRW5kcG9pbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5YmFja0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHsgfVxuXG4gICAgYXN5bmMgcGxheShpdGVtSWQ6IHN0cmluZywgc3RhcnRQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQgfCBSZXNwb25zZT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuUExBWV9NRURJQX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dGlja3N9Jywgc3RhcnRQb3NpdGlvblRpY2tzLnRvU3RyaW5nKCkpKVxuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsIH0pXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IHN0YXJ0IHRoZSBwbGF5YmFjayBvZiBhbiBpdGVtYCwgZXgpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtQcm9ncmFtRGF0YX0gZnJvbSBcIi4uL01vZGVscy9Qcm9ncmFtRGF0YVwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHtEZWZhdWx0UGx1Z2luU2V0dGluZ3MsIFBsdWdpblNldHRpbmdzfSBmcm9tIFwiLi4vTW9kZWxzL1BsdWdpblNldHRpbmdzXCI7XG5pbXBvcnQge0RlZmF1bHRTZXJ2ZXJTZXR0aW5ncywgU2VydmVyU2V0dGluZ3N9IGZyb20gXCIuLi9Nb2RlbHMvU2VydmVyU2V0dGluZ3NcIjtcblxuY29uc3QgR1JPVVBTX0NBQ0hFX1RUTCA9IDUgKiA2MCAqIDEwMDBcblxuZXhwb3J0IGNsYXNzIFByb2dyYW1EYXRhU3RvcmUge1xuICAgIHByaXZhdGUgX3Byb2dyYW1EYXRhOiBQcm9ncmFtRGF0YVxuICAgIHByaXZhdGUgX3ZpZXdUb2tlbjogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgX2dyb3Vwc0NhY2hlZEF0OiBudW1iZXIgfCBudWxsID0gbnVsbFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhID0ge1xuICAgICAgICAgICAgYWN0aXZlTWVkaWFTb3VyY2VJZDogJycsXG4gICAgICAgICAgICBhY3RpdmVHcm91cElkOiAnJyxcbiAgICAgICAgICAgIGJveFNldE5hbWU6ICcnLFxuICAgICAgICAgICAgdHlwZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIHBsdWdpblNldHRpbmdzOiBEZWZhdWx0UGx1Z2luU2V0dGluZ3MsXG4gICAgICAgICAgICBzZXJ2ZXJTZXR0aW5nczogRGVmYXVsdFNlcnZlclNldHRpbmdzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZU1lZGlhU291cmNlSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZU1lZGlhU291cmNlSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZU1lZGlhU291cmNlSWQoYWN0aXZlTWVkaWFTb3VyY2VJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBhY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVHcm91cElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVHcm91cElkXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhY3RpdmVHcm91cElkKGFjdGl2ZUdyb3VwSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVHcm91cElkID0gYWN0aXZlR3JvdXBJZFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlR3JvdXAoKTogR3JvdXAge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHMuZmluZChncm91cCA9PiBncm91cC5ncm91cElkID09PSB0aGlzLmFjdGl2ZUdyb3VwSWQpXG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0eXBlKCk6IEl0ZW1UeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLnR5cGVcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHR5cGUodHlwZTogSXRlbVR5cGUpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEudHlwZSA9IHR5cGVcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJveFNldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmJveFNldE5hbWVcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJveFNldE5hbWUoYm94U2V0TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmJveFNldE5hbWUgPSBib3hTZXROYW1lXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBncm91cHMoKTogR3JvdXBbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHNcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGdyb3Vwcyhncm91cHM6IEdyb3VwW10pIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzID0gZ3JvdXBzXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwbHVnaW5TZXR0aW5ncygpOiBQbHVnaW5TZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5wbHVnaW5TZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGx1Z2luU2V0dGluZ3Moc2V0dGluZ3M6IFBsdWdpblNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnBsdWdpblNldHRpbmdzID0gc2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlcnZlclNldHRpbmdzKCk6IFNlcnZlclNldHRpbmdzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLnNlcnZlclNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXJ2ZXJTZXR0aW5ncyhzZXR0aW5nczogU2VydmVyU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuc2VydmVyU2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgbWFya0dyb3Vwc0ZldGNoZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID0gRGF0ZS5ub3coKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNHcm91cHNDYWNoZUV4cGlyZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cHNDYWNoZWRBdCA9PT0gbnVsbCB8fCBEYXRlLm5vdygpIC0gdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPiBHUk9VUFNfQ0FDSEVfVFRMXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhSXNBbGxvd2VkRm9yUHJldmlldygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93ZWRQcmV2aWV3VHlwZXMuaW5jbHVkZXModGhpcy50eXBlKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwcy5zb21lKGdyb3VwID0+IGdyb3VwLml0ZW1zLmxlbmd0aCA+PSAxKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWxsb3dlZFByZXZpZXdUeXBlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luU2V0dGluZ3MuRW5hYmxlZEl0ZW1UeXBlc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtQnlJZChpdGVtSWQ6IHN0cmluZyk6IFByZXZpZXdJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzXG4gICAgICAgICAgICAuZmxhdE1hcChncm91cCA9PiBncm91cC5pdGVtcylcbiAgICAgICAgICAgIC5maW5kKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgcmVjb3JkTG9hZGVkSXRlbXMoZ3JvdXBJZDogc3RyaW5nLCBpdGVtczogUHJldmlld0l0ZW1bXSwgc3RhcnRJbmRleDogbnVtYmVyLCB0b3RhbFJlY29yZENvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzID0gdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzLm1hcChncm91cCA9PiB7XG4gICAgICAgICAgICBpZiAoZ3JvdXAuZ3JvdXBJZCAhPT0gZ3JvdXBJZClcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBcblxuICAgICAgICAgICAgaWYgKGdyb3VwLmxvYWRlZFN0YXJ0SW5kZXggPT09IHVuZGVmaW5lZCB8fCBncm91cC5sb2FkZWRFbmRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIGl0ZW1zLCBsb2FkZWRTdGFydEluZGV4OiBzdGFydEluZGV4LCBsb2FkZWRFbmRJbmRleDogc3RhcnRJbmRleCArIGl0ZW1zLmxlbmd0aCwgbG9hZGVkVG90YWxSZWNvcmRDb3VudDogdG90YWxSZWNvcmRDb3VudCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFydEluZGV4ID49IGdyb3VwLmxvYWRlZEVuZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIGl0ZW1zOiBbLi4uZ3JvdXAuaXRlbXMsIC4uLml0ZW1zXSwgbG9hZGVkRW5kSW5kZXg6IHN0YXJ0SW5kZXggKyBpdGVtcy5sZW5ndGgsIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ6IHRvdGFsUmVjb3JkQ291bnQgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA8IGdyb3VwLmxvYWRlZFN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgaXRlbXM6IFsuLi5pdGVtcywgLi4uZ3JvdXAuaXRlbXNdLCBsb2FkZWRTdGFydEluZGV4OiBzdGFydEluZGV4LCBsb2FkZWRUb3RhbFJlY29yZENvdW50OiB0b3RhbFJlY29yZENvdW50IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXRHcm91cFdhdGNoZWRDb3VudChncm91cElkOiBzdHJpbmcsIHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGcgPT4gZy5ncm91cElkID09PSBncm91cElkID8geyAuLi5nLCBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50IH0gOiBnKVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGp1c3RHcm91cFBsYXllZENvdW50KGl0ZW1JZDogc3RyaW5nLCBkZWx0YTogbnVtYmVyKTogR3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuZ3JvdXBzLmZpbmQoZyA9PiBnLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpKVxuICAgICAgICBpZiAoIWdyb3VwKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgICAgY29uc3QgdXBkYXRlZEdyb3VwOiBHcm91cCA9IHsgLi4uZ3JvdXAsIHBsYXllZEl0ZW1Db3VudDogZ3JvdXAucGxheWVkSXRlbUNvdW50ICsgZGVsdGEgfVxuICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuZ3JvdXBzLm1hcChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXAuZ3JvdXBJZCA/IHVwZGF0ZWRHcm91cCA6IGcpXG4gICAgICAgIHJldHVybiB1cGRhdGVkR3JvdXBcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlSXRlbShpdGVtVG9VcGRhdGU6IFByZXZpZXdJdGVtKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGdyb3VwID0+XG4gICAgICAgICAgICBncm91cC5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbVRvVXBkYXRlLklkKVxuICAgICAgICAgICAgICAgID8geyAuLi5ncm91cCwgaXRlbXM6IGdyb3VwLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1Ub1VwZGF0ZS5JZCA/IGl0ZW1Ub1VwZGF0ZSA6IGl0ZW0pIH1cbiAgICAgICAgICAgICAgICA6IGdyb3VwXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbmV2ZXIgdGhlIHBvcHVwIHN3aXRjaGVzIHdoYXQgaXQncyBkaXNwbGF5aW5nIChvcGVuaW5nLCBzZWxlY3RpbmcgYSBncm91cCwgZ29pbmcgYmFjayB0byB0aGUgZ3JvdXAgbGlzdClcbiAgICBwdWJsaWMgYmVnaW5OZXdWaWV3KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiArK3RoaXMuX3ZpZXdUb2tlblxuICAgIH1cblxuICAgIHB1YmxpYyBpc0N1cnJlbnRWaWV3KHRva2VuOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRva2VuID09PSB0aGlzLl92aWV3VG9rZW5cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBjdXJyZW50Vmlld1Rva2VuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3VG9rZW5cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9TZXJ2aWNlcy9Mb2dnZXJcIjtcbmltcG9ydCB7UHJldmlld0J1dHRvblRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1ByZXZpZXdCdXR0b25UZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlXCI7XG5pbXBvcnQge1BsYXliYWNrSGFuZGxlcn0gZnJvbSBcIi4vU2VydmljZXMvUGxheWJhY2tIYW5kbGVyXCI7XG5pbXBvcnQge0xpc3RFbGVtZW50RmFjdG9yeX0gZnJvbSBcIi4vTGlzdEVsZW1lbnRGYWN0b3J5XCI7XG5pbXBvcnQge1BvcHVwVGl0bGVUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGVcIjtcbmltcG9ydCB7RGF0YUZldGNoZXJ9IGZyb20gXCIuL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7UGx1Z2luU2V0dGluZ3N9IGZyb20gXCIuL01vZGVscy9QbHVnaW5TZXR0aW5nc1wiO1xuaW1wb3J0IHtTZXJ2ZXJTZXR0aW5nc30gZnJvbSBcIi4vTW9kZWxzL1NlcnZlclNldHRpbmdzXCI7XG5pbXBvcnQge0VuZHBvaW50c30gZnJvbSBcIi4vRW5kcG9pbnRzXCI7XG5pbXBvcnQge0dyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtHcm91cEl0ZW1zUmVzdWx0fSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBJdGVtc1Jlc3VsdFwiO1xuaW1wb3J0IHthY3RpdmF0ZVNwaW5uZXIsIHNwaW5uZXJIdG1sfSBmcm9tIFwiLi9Db21wb25lbnRzL1NwaW5uZXJcIjtcblxuLy8gbG9hZCBhbmQgaW5qZWN0IGluUGxheWVyUHJldmlldy5jc3MgaW50byB0aGUgcGFnZVxuLypcbiAqIEluamVjdCBzdHlsZSB0byBiZSB1c2VkIGZvciB0aGUgcHJldmlldyBwb3B1cFxuICovXG5sZXQgaW5QbGF5ZXJQcmV2aWV3U3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG5pblBsYXllclByZXZpZXdTdHlsZS5pZCA9ICdpblBsYXllclByZXZpZXdTdHlsZSdcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ID0gYFxuLnNlbGVjdGVkTGlzdEl0ZW0ge1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5wcmV2aWV3TGlzdEl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBtaW4taGVpZ2h0OiAxNS41dmg7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcmV2aWV3UG9wdXAge1xuICAgIGFuaW1hdGlvbjogMTQwbXMgZWFzZS1vdXQgMHMgMSBub3JtYWwgYm90aCBydW5uaW5nIHNjYWxldXA7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgbWFyZ2luOiAwcHg7IFxuICAgIGJvdHRvbTogMS41dmg7IFxuICAgIGxlZnQ6IDUwdnc7IFxuICAgIHdpZHRoOiA0OHZ3O1xufVxuLnByZXZpZXdQb3B1cFRpdGxlIHtcbiAgICBtYXgtaGVpZ2h0OiA0dmg7XG59XG4ucHJldmlld1BvcHVwVGl0bGUgaDEuYWN0aW9uU2hlZXRUaXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3BhY2l0eTogMC43O1xufVxuLnByZXZpZXdQb3B1cFNjcm9sbGVyIHtcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xufVxuLnByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxufVxuLnByZXZpZXdJdGVtQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5wcmV2aWV3SXRlbVRpdGxlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5wcmV2aWV3SXRlbUltYWdlQ2FyZCB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG59XG4ucHJldmlld0l0ZW1Db250ZW50Um93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uLmV4cGFuZGVkIHtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xufVxuLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b24ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5wcmV2aWV3SXRlbURldGFpbHMge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydCAhaW1wb3J0YW50O1xufVxuXG4vKiBMb2NrIHRoZSBwb3NpdGlvbiBvZiB0aGlzIGRldGFpbHMsIHNvIHRoYXQgbm8gdGhlbWUgY2FuIGNoYW5nZSBpdCAqL1xuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQgLml0ZW1NaXNjSW5mby5wcmV2aWV3SXRlbURldGFpbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4uYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDZweCk7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYmx1cjpob3ZlciB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xufVxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkOmhvdmVyIC5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG59XG4ucHJldmlld1Njcm9sbFNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbn1cbi5wcmV2aWV3U2Nyb2xsU3Bpbm5lciAuZG9jc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxLjk1ZW0gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEuOTVlbSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IGF1dG8gIWltcG9ydGFudDtcbn1cbmBcbmRvY3VtZW50Py5oZWFkPy5hcHBlbmRDaGlsZChpblBsYXllclByZXZpZXdTdHlsZSlcblxuLy8gaW5pdCBzZXJ2aWNlcyBhbmQgaGVscGVyc1xuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKClcbmNvbnN0IHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUgPSBuZXcgUHJvZ3JhbURhdGFTdG9yZSgpXG5jb25zdCBwbGF5YmFja0hhbmRsZXI6IFBsYXliYWNrSGFuZGxlciA9IG5ldyBQbGF5YmFja0hhbmRsZXIobG9nZ2VyKVxuY29uc3QgbGlzdEVsZW1lbnRGYWN0b3J5ID0gbmV3IExpc3RFbGVtZW50RmFjdG9yeShwbGF5YmFja0hhbmRsZXIsIHByb2dyYW1EYXRhU3RvcmUpXG5cbi8vIENhY2hlZCBmb3IgdGhlIHdob2xlIHBhZ2Ugc2Vzc2lvbiBwZXIgaXRlbSAoQ29sbGVjdGlvbnMvUGxheWxpc3RzIHJhcmVseSBjaGFuZ2UpLCBzaW5jZSBzY2FubmluZyBldmVyeVxuLy8gQ29sbGVjdGlvbi9QbGF5bGlzdCBpbiB0aGUgbGlicmFyeSBpcyBjb21wYXJhdGl2ZWx5IGV4cGVuc2l2ZSAtIHdpdGhvdXQgdGhpcywgcmVvcGVuaW5nIHRoZSBzYW1lIHN0YW5kYWxvbmVcbi8vIG1vdmllJ3MgcG9wdXAgKG9yIGxlYXZpbmcgb25lIG9wZW4gd2hpbGUgaXRzIHNlYXJjaCBpcyBzdGlsbCBwZW5kaW5nKSB3b3VsZCByZS10cmlnZ2VyIHRoZSBmdWxsIHNjYW4gZXZlcnkgdGltZS5cbmNvbnN0IGNvbGxlY3Rpb25zQnlJdGVtSWQgPSBuZXcgTWFwPHN0cmluZywgUHJvbWlzZTxHcm91cFtdPj4oKVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8R3JvdXBbXT4ge1xuICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLkNPTlRBSU5JTkdfQ09MTEVDVElPTlN9YFxuICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpKVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJhdzogYW55W10gPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgcmV0dXJuIHJhdy5tYXAoKGc6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGdyb3VwSWQ6IGcuR3JvdXBJZCxcbiAgICAgICAgICAgIGdyb3VwTmFtZTogZy5Hcm91cE5hbWUsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICBpbmRleE51bWJlcjogZy5JbmRleE51bWJlcixcbiAgICAgICAgICAgIHBsYXllZEl0ZW1Db3VudDogZy5QbGF5ZWRJdGVtQ291bnQsXG4gICAgICAgICAgICB0b3RhbEl0ZW1Db3VudDogZy5Ub3RhbEl0ZW1Db3VudFxuICAgICAgICB9KSlcbiAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBsb2FkIENvbGxlY3Rpb25zL1BsYXlsaXN0cyBjb250YWluaW5nIHRoaXMgbW92aWVcIiwgZXgpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0NvbGxlY3Rpb25zKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTxHcm91cFtdPiB7XG4gICAgbGV0IHByb21pc2UgPSBjb2xsZWN0aW9uc0J5SXRlbUlkLmdldChpdGVtSWQpXG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UgPSBmZXRjaENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQpXG4gICAgICAgIGNvbGxlY3Rpb25zQnlJdGVtSWQuc2V0KGl0ZW1JZCwgcHJvbWlzZSlcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBFbnN1cmUgQXBpQ2xpZW50L0V2ZW50cyBleGlzdCBhbmQgdXNlciBpcyBsb2dnZWQgaW5cbiAgICBpZiAodHlwZW9mIEFwaUNsaWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIEV2ZW50cyA9PT0gJ3VuZGVmaW5lZCcgfHwgIUFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkPy4oKSkge1xuICAgICAgICBzZXRUaW1lb3V0KGluaXRpYWxpemUsIDMwMCkgLy8gSW5jcmVhc2VkIHJldHJ5IGRlbGF5IHNsaWdodGx5XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG5ldyBEYXRhRmV0Y2hlcihwcm9ncmFtRGF0YVN0b3JlKVxuXG4gICAgQXBpQ2xpZW50LmdldFBsdWdpbkNvbmZpZ3VyYXRpb24oJzczODMzZDVmLTBiY2ItNDVkYy1hYjhiLTdjZTY2OGY0MzQ1ZCcpXG4gICAgICAgIC50aGVuKChjb25maWc6IFBsdWdpblNldHRpbmdzKSA9PiBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzID0gY29uZmlnKVxuXG4gICAgY29uc3Qgc2VydmVyU2V0dGluZ3NVcmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5TRVJWRVJfU0VUVElOR1N9YClcbiAgICBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmw6IHNlcnZlclNldHRpbmdzVXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIC50aGVuKChjb25maWc6IFNlcnZlclNldHRpbmdzKSA9PiBwcm9ncmFtRGF0YVN0b3JlLnNlcnZlclNldHRpbmdzID0gY29uZmlnKVxufVxuaW5pdGlhbGl6ZSgpXG5cbmNvbnN0IFNFQVJDSF9DT0xMRUNUSU9OU19HUk9VUF9OQU1FID0gJ1NlYXJjaCBDb2xsZWN0aW9ucy9QbGF5bGlzdHMnXG5cbmNvbnN0IHZpZGVvUGF0aHM6IHN0cmluZ1tdID0gWycvdmlkZW8nXVxubGV0IHByZXZpb3VzUm91dGVQYXRoOiBzdHJpbmcgPSBudWxsXG5sZXQgcHJldmlld0NvbnRhaW5lckxvYWRlZDogYm9vbGVhbiA9IGZhbHNlXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aWV3c2hvdycsIHZpZXdTaG93RXZlbnRIYW5kbGVyKVxuXG4vLyBTb21ldGltZXMgdGhlaXIgY2FuIGJlIHN0YWxlIHJhdGluZyBidXR0b25zLiB0aGF0cyB3aHkgd2UgdGFrZSB0aGUgbGFzdCBvbmUgZnJvbSB0aGUgRE9NIGZvciB0aGUgaXRlbUlkXG5mdW5jdGlvbiBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKCk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0blVzZXJSYXRpbmcuYXV0b1NpemUucGFwZXItaWNvbi1idXR0b24tbGlnaHQnKVxuICAgIHJldHVybiBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXT8uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPz8gbnVsbFxufVxuXG5sZXQgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZDogbnVtYmVyID0gLTFcbmZ1bmN0aW9uIG9uVmlkZW9UaW1lVXBkYXRlKHRoaXM6IEhUTUxWaWRlb0VsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBwb3NpdGlvblNlY29uZCA9IE1hdGguZmxvb3IodGhpcy5jdXJyZW50VGltZSlcbiAgICBpZiAocG9zaXRpb25TZWNvbmQgPT09IGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQpIHJldHVyblxuICAgIGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQgPSBwb3NpdGlvblNlY29uZFxuXG4gICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG4gICAgaWYgKCFpdGVtSWQpIHJldHVyblxuICAgIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCA9IGl0ZW1JZFxuXG4gICAgY29uc3QgaXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSB8fCAhaXRlbS5SdW5UaW1lVGlja3MpIHJldHVyblxuXG4gICAgY29uc3QgcG9zaXRpb25UaWNrcyA9IHRoaXMuY3VycmVudFRpbWUgKiAxMF8wMDBfMDAwXG4gICAgY29uc3QgcGxheWVkUGVyY2VudGFnZSA9IChwb3NpdGlvblRpY2tzIC8gaXRlbS5SdW5UaW1lVGlja3MpICogMTAwXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YToge1xuICAgICAgICAgICAgLi4uaXRlbS5Vc2VyRGF0YSxcbiAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogcG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IHBsYXllZFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICBQbGF5ZWQ6IHBsYXllZFBlcmNlbnRhZ2UgPj0gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncy5NYXhSZXN1bWVQY3RcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vIFRyYWNrcyB3aGljaCBCb3hTZXQvUGxheWxpc3QgZGV0YWlscyBwYWdlIChpZiBhbnkpIHdhcyB2aXNpdGVkIGltbWVkaWF0ZWx5IGJlZm9yZSBuYXZpZ2F0aW5nIGludG8gcGxheWJhY2tcbmNvbnN0IERFVEFJTFNfUk9VVEVfUEFUSDogc3RyaW5nID0gJy9kZXRhaWxzJ1xuY29uc3QgY29sbGVjdGlvbkxpa2VJdGVtVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLlBsYXlsaXN0XSlcbmxldCBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkOiBzdHJpbmcgPSBudWxsXG5cbmZ1bmN0aW9uIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY29sbGVjdGlvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5TRVRfU09VUkNFX0NPTExFQ1RJT059YFxuICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2NvbGxlY3Rpb25JZH0nLCBjb2xsZWN0aW9uSWQpKVxuICAgIEFwaUNsaWVudC5hamF4KHt0eXBlOiAnR0VUJywgdXJsfSkuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCByZWNvcmQgc291cmNlIGNvbGxlY3Rpb24gZm9yIHBsYXliYWNrIHNlc3Npb25cIiwgZXgpKVxufVxuXG5mdW5jdGlvbiBjYXB0dXJlU291cmNlQ29sbGVjdGlvbihjdXJyZW50Um91dGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbY3VycmVudFBhdGgsIGN1cnJlbnRRdWVyeV0gPSBjdXJyZW50Um91dGVQYXRoLnNwbGl0KCc/JylcbiAgICBjb25zdCBwcmV2aW91c1BhdGggPSBwcmV2aW91c1JvdXRlUGF0aD8uc3BsaXQoJz8nKVswXVxuXG4gICAgaWYgKGN1cnJlbnRQYXRoID09PSBERVRBSUxTX1JPVVRFX1BBVEgpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0lkID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50UXVlcnkgPz8gJycpLmdldCgnaWQnKVxuICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxuICAgICAgICBpZiAoIWRldGFpbHNJZCkgcmV0dXJuXG5cbiAgICAgICAgQXBpQ2xpZW50LmdldEl0ZW0oQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSwgZGV0YWlsc0lkKS50aGVuKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVHlwZTogSXRlbVR5cGUgPSBJdGVtVHlwZVtpdGVtLlR5cGUgYXMgdW5rbm93biBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gY29sbGVjdGlvbkxpa2VJdGVtVHlwZXMuaGFzKGl0ZW1UeXBlKSA/IGRldGFpbHNJZCA6IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMoY3VycmVudFBhdGgpICYmIHByZXZpb3VzUGF0aCA9PT0gREVUQUlMU19ST1VURV9QQVRIICYmIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQpIHtcbiAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkKVxuICAgIH1cblxuICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBudWxsXG59XG5cbi8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGNvbGxvZWN0aW9uL3BsYXlsaXN0IGlkIHRob3J1Z2ggYSBwbGF5IGFjdGlvbiBvbiBhIGNhcmQgdGhlIHNhbWUgd2F5IGFzIGhlbGx5ZmluIGRvZXMgaXQgaXRzZWxmXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamVsbHlmaW4vamVsbHlmaW4td2ViL2Jsb2IvcmVsZWFzZS0xMC4xMS56L3NyYy9jb21wb25lbnRzL3Nob3J0Y3V0cy5qcyNMMjE2XG5jb25zdCBQTEFZQkFDS19UUklHR0VSX0FDVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbJ3BsYXknLCAncmVzdW1lJywgJ3BsYXlhbGxmcm9taGVyZSddKVxuZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrQ2FwdHVyZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGlvbkVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8uY2xvc2VzdD8uKCdbZGF0YS1hY3Rpb25dJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKCFhY3Rpb25FbGVtZW50IHx8ICFQTEFZQkFDS19UUklHR0VSX0FDVElPTlMuaGFzKGFjdGlvbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpKSkgcmV0dXJuXG5cbiAgICBjb25zdCBjYXJkID0gYWN0aW9uRWxlbWVudC5jbG9zZXN0KCdbZGF0YS1pZF0nKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcbiAgICBpZiAoIWNhcmQpIHJldHVyblxuXG4gICAgY29uc3QgY2hpbGRPZkNvbGxlY3Rpb25JZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxlY3Rpb25pZCcpID8/IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXBsYXlsaXN0aWQnKVxuICAgIGlmIChjaGlsZE9mQ29sbGVjdGlvbklkKSB7XG4gICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY2hpbGRPZkNvbGxlY3Rpb25JZClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY2FyZEl0ZW1UeXBlOiBJdGVtVHlwZSA9IEl0ZW1UeXBlW2NhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSBhcyB1bmtub3duIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICBjb25zdCBjYXJkSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgaWYgKGNhcmRJZCAmJiBjb2xsZWN0aW9uTGlrZUl0ZW1UeXBlcy5oYXMoY2FyZEl0ZW1UeXBlKSkge1xuICAgICAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNhcmRJZClcbiAgICB9XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRG9jdW1lbnRDbGlja0NhcHR1cmUsIHRydWUpXG5cbmZ1bmN0aW9uIHZpZXdTaG93RXZlbnRIYW5kbGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZVBhdGg6IHN0cmluZyA9IGdldExvY2F0aW9uUGF0aCgpXG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhdGlvblBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb246IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZUluZGV4OiBudW1iZXIgPSBsb2NhdGlvbi5sYXN0SW5kZXhPZignLycpXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5zdWJzdHJpbmcoY3VycmVudFJvdXRlSW5kZXgpXG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbCBhdHRlbXB0IHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcgb3Igc2NoZWR1bGUgcmV0cmllcy5cbiAgICBjYXB0dXJlU291cmNlQ29sbGVjdGlvbihjdXJyZW50Um91dGVQYXRoKVxuICAgIGF0dGVtcHRMb2FkVmlkZW9WaWV3KClcbiAgICBwcmV2aW91c1JvdXRlUGF0aCA9IGN1cnJlbnRSb3V0ZVBhdGhcblxuICAgIC8vIEF0dGVtcHRzIHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcsIHJldHJ5aW5nIHVwIHRvIDMgdGltZXMgaWYgbmVjZXNzYXJ5LlxuICAgIGZ1bmN0aW9uIGF0dGVtcHRMb2FkVmlkZW9WaWV3KHJldHJ5Q291bnQgPSAwKTogdm9pZCB7XG4gICAgICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRSb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICAvLyBpZiAocHJvZ3JhbURhdGFTdG9yZS5kYXRhSXNBbGxvd2VkRm9yUHJldmlldykge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcmV2aWV3IGNvbnRhaW5lciBpcyBhbHJlYWR5IGxvYWRlZCBiZWZvcmUgbG9hZGluZ1xuICAgICAgICAgICAgICAgIGlmICghcHJldmlld0NvbnRhaW5lckxvYWRlZCAmJiAhaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRWaWRlb1ZpZXcoKVxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gdHJ1ZSAvLyBTZXQgZmxhZyB0byB0cnVlIGFmdGVyIGxvYWRpbmdcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJldHJ5Q291bnQgPCAzKSB7IC8vIFJldHJ5IHVwIHRvIDMgdGltZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBSZXRyeSAjJHtyZXRyeUNvdW50ICsgMX1gKVxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0TG9hZFZpZGVvVmlldyhyZXRyeUNvdW50ICsgMSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwMCkgLy8gV2FpdCAxMCBzZWNvbmRzIGZvciBlYWNoIHJldHJ5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhwcmV2aW91c1JvdXRlUGF0aCkpIHtcbiAgICAgICAgICAgIHVubG9hZFZpZGVvVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgLy8gYWRkIHByZXZpZXcgYnV0dG9uIHRvIHRoZSBwYWdlXG4gICAgICAgIGNvbnN0IHBhcmVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucycpLmxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudDsgLy8gbGFzdEVsZW1lbnRDaGlsZC5wYXJlbnRFbGVtZW50IGlzIHVzZWQgZm9yIGNhc3RpbmcgZnJvbSBFbGVtZW50IHRvIEhUTUxFbGVtZW50XG4gICAgICAgIFxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5Vc2VyUmF0aW5nXCIpKTtcbiAgICAgICAgLy8gaWYgaW5kZXggaXMgaW52YWxpZCB0cnkgdG8gdXNlIHRoZSBvbGQgcG9zaXRpb24gKHVzZWQgaW4gSmVsbHlmaW4gMTAuOC4xMilcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSlcbiAgICAgICAgICAgIGluZGV4ID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmRJbmRleCgoY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9zZFRpbWVUZXh0XCIpKVxuXG4gICAgICAgIGNvbnN0IHByZXZpZXdCdXR0b246IFByZXZpZXdCdXR0b25UZW1wbGF0ZSA9IG5ldyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUocGFyZW50LCBpbmRleClcbiAgICAgICAgbGV0IHByZXZpZXdCdXR0b25Mb2FkaW5nOiBib29sZWFuID0gZmFsc2VcbiAgICAgICAgcHJldmlld0J1dHRvbi5yZW5kZXIocHJldmlld0J1dHRvbkNsaWNrSGFuZGxlcilcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxWaWRlb0VsZW1lbnQ+KCd2aWRlby5odG1sdmlkZW9wbGF5ZXInKT8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIG9uVmlkZW9UaW1lVXBkYXRlKVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBpZiAocHJldmlld0J1dHRvbkxvYWRpbmcpIHJldHVyblxuICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRvUHJldmlld0J1dHRvbkNsaWNrKClcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9QcmV2aWV3QnV0dG9uQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBjb25zdCBsb2FkSXRlbVByZXZpZXdEYXRhID0gYXN5bmMgKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTx7XG4gICAgICAgICAgICAgICAgaXRlbVR5cGU6IHN0cmluZywgY29udGFpbmVyTmFtZTogc3RyaW5nIHwgbnVsbCwgZ3JvdXBzOiBHcm91cFtdLCBhY3RpdmVHcm91cElkOiBzdHJpbmcsIGFjdGl2ZUl0ZW1JbmRleDogbnVtYmVyXG4gICAgICAgICAgICB9PiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLklURU1fUFJFVklFV19EQVRBfWBcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiByYXcuSXRlbVR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lck5hbWU6IHJhdy5Db250YWluZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICBncm91cHM6IHJhdy5Hcm91cHMubWFwKChnOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxJdGVtQ291bnQ6IGcuVG90YWxJdGVtQ291bnRcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkOiByYXcuQWN0aXZlR3JvdXBJZCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbUluZGV4OiByYXcuQWN0aXZlSXRlbUluZGV4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBQQUdFX1NJWkUgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZVxuXG4gICAgICAgICAgICBjb25zdCBsb2FkR3JvdXBJdGVtcyA9IGFzeW5jIChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciA9IDAsIGxpbWl0OiBudW1iZXIgPSBQQUdFX1NJWkUpOiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfSVRFTVN9YFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCB1c2VySWQpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7Z3JvdXBJZH0nLCBncm91cElkKSxcbiAgICAgICAgICAgICAgICAgICAgeyBzdGFydEluZGV4LCBsaW1pdCB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogR3JvdXBJdGVtc1Jlc3VsdCA9IHsgaXRlbXM6IHJhdy5JdGVtcywgdG90YWxSZWNvcmRDb3VudDogcmF3LlRvdGFsUmVjb3JkQ291bnQgfVxuXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5yZWNvcmRMb2FkZWRJdGVtcyhncm91cElkLCByZXN1bHQuaXRlbXMsIHN0YXJ0SW5kZXgsIHJlc3VsdC50b3RhbFJlY29yZENvdW50KVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGhpcyBpcyBleHBlcmltZW50YWwgYW5kIHdpbGwgbWF5YmUgYmUgdXNlZCBpbiBmdXR1cmUgcmVsZWFzZXNcbiAgICAgICAgICAgIGNvbnN0IGdldE5vd1BsYXlpbmdJdGVtSWRGcm9tU2Vzc2lvbiA9IGFzeW5jICgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5OT1dfUExBWUlOR19JVEVNfWApXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IHJlc29sdmUgbm93LXBsYXlpbmcgaXRlbSBmcm9tIHNlc3Npb24sIGZhbGxpbmcgYmFjayB0byBPU0QgcmF0aW5nIGJ1dHRvblwiLCBleClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lcjogRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUgPSBuZXcgRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUoZG9jdW1lbnQuYm9keSwgZG9jdW1lbnQuYm9keS5jaGlsZHJlbi5sZW5ndGggLSAxKVxuICAgICAgICAgICAgZGlhbG9nQ29udGFpbmVyLnJlbmRlcigpXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpXG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkR3JvdXAgPSAhcHJvZ3JhbURhdGFTdG9yZS5pc0dyb3Vwc0NhY2hlRXhwaXJlZFxuICAgICAgICAgICAgICAgID8gcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuZmluZChnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcblxuICAgICAgICAgICAgbGV0IGFjdGl2ZUdyb3VwSWQ6IHN0cmluZ1xuICAgICAgICAgICAgbGV0IGluaXRpYWxQYWdlOiBHcm91cEl0ZW1zUmVzdWx0XG4gICAgICAgICAgICBsZXQgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXg6IG51bWJlclxuXG4gICAgICAgICAgICBpZiAoY2FjaGVkR3JvdXApIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkID0gY2FjaGVkR3JvdXAuZ3JvdXBJZFxuICAgICAgICAgICAgICAgIGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gY2FjaGVkR3JvdXAubG9hZGVkU3RhcnRJbmRleCA/PyAwXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2UgPSB7IGl0ZW1zOiBbLi4uY2FjaGVkR3JvdXAuaXRlbXNdLCB0b3RhbFJlY29yZENvdW50OiBjYWNoZWRHcm91cC5sb2FkZWRUb3RhbFJlY29yZENvdW50ID8/IGNhY2hlZEdyb3VwLml0ZW1zLmxlbmd0aCB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcmV2aWV3U2Nyb2xsU3Bpbm5lclwiPiR7c3Bpbm5lckh0bWwoKX08L2Rpdj5gXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVTcGlubmVyKGNvbnRlbnREaXYpXG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1UeXBlLCBjb250YWluZXJOYW1lLCBncm91cHMsIGFjdGl2ZUdyb3VwSWQ6IGZldGNoZWRBY3RpdmVHcm91cElkLCBhY3RpdmVJdGVtSW5kZXggfSA9IGF3YWl0IGxvYWRJdGVtUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gZ3JvdXBzXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5tYXJrR3JvdXBzRmV0Y2hlZCgpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS50eXBlID0gSXRlbVR5cGVbaXRlbVR5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSA9IGNvbnRhaW5lck5hbWUgPz8gJydcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkID0gZmV0Y2hlZEFjdGl2ZUdyb3VwSWRcblxuICAgICAgICAgICAgICAgIC8vIExvYWQgYSAzLXBhZ2Ugd2luZG93IChwYWdlIG9mIHRoZSBhY3RpdmUgZXBpc29kZSwgcGx1cyBvbmUgcGFnZSBiZWZvcmUgYW5kIGFmdGVyKVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VPZkFjdGl2ZUVwaXNvZGUgPSBNYXRoLmZsb29yKGFjdGl2ZUl0ZW1JbmRleCAvIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBpbml0aWFsV2luZG93U3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIChwYWdlT2ZBY3RpdmVFcGlzb2RlIC0gMSkgKiBQQUdFX1NJWkUpXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFdpbmRvd0xpbWl0ID0gKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgKyAyKSAqIFBBR0VfU0laRSAtIGluaXRpYWxXaW5kb3dTdGFydEluZGV4XG5cbiAgICAgICAgICAgICAgICBpbml0aWFsUGFnZSA9IGF3YWl0IGxvYWRHcm91cEl0ZW1zKGFjdGl2ZUdyb3VwSWQsIGluaXRpYWxXaW5kb3dTdGFydEluZGV4LCBpbml0aWFsV2luZG93TGltaXQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCA9IGl0ZW1JZFxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cElkID0gYWN0aXZlR3JvdXBJZFxuXG4gICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnIC8vIHJlbW92ZSB0aGUgbG9hZGluZyBzcGlubmVyXG4gICAgICAgICAgICBjb25zdCB2aWV3VG9rZW4gPSBwcm9ncmFtRGF0YVN0b3JlLmJlZ2luTmV3VmlldygpXG5cbiAgICAgICAgICAgIC8vIEEgc3RhbmRhbG9uZSBtb3ZpZSBoYXMgbm8gbWVhbmluZ2Z1bCBncm91cCBuYW1lIG9mIGl0cyBvd247IGFuIGl0ZW0gc291cmNlZCBmcm9tIGEgUGxheWxpc3QvQm94U2V0XG4gICAgICAgICAgICAvLyBhbHJlYWR5IGhhcyB0aGF0IGNvbGxlY3Rpb24ncyByZWFsIG5hbWUsIHNvIG9ubHkgdGhlIHN0YW5kYWxvbmUtbW92aWUgY2FzZSBnZXRzIHJlbGFiZWxlZC5cbiAgICAgICAgICAgIGNvbnN0IGlzU3RhbmRhbG9uZU1vdmllID0gcHJvZ3JhbURhdGFTdG9yZS50eXBlID09PSBJdGVtVHlwZS5Nb3ZpZVxuICAgICAgICAgICAgY29uc3QgaXNTb3VyY2VkRnJvbUNvbGxlY3Rpb24gPSBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPT09IEl0ZW1UeXBlLlBsYXlsaXN0IHx8IHByb2dyYW1EYXRhU3RvcmUudHlwZSA9PT0gSXRlbVR5cGUuQm94U2V0XG5cbiAgICAgICAgICAgIC8vIExhYmVsIHRoZSBtb3ZpZSdzIG93biBncm91cCBhcyB0aGUgY29sbGVjdGlvbiBzZWFyY2ggdXAgZnJvbnQsIGV2ZW4gYmVmb3JlIGFueSByZXN1bHRzIGFyZSBrbm93bi5cbiAgICAgICAgICAgIGlmIChpc1N0YW5kYWxvbmVNb3ZpZSAmJiBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMubWFwKChnLCBpKSA9PiBpID09PSAwID8geyAuLi5nLCBncm91cE5hbWU6IFNFQVJDSF9DT0xMRUNUSU9OU19HUk9VUF9OQU1FIH0gOiBnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPbmx5IHNlYXJjaCBvbmNlIHBlciBmcmVzaCBncm91cC1mZXRjaCAobm90IG9uIGV2ZXJ5IHBvcHVwIHJlb3BlbiB3aGlsZSBjYWNoZWQgZ3JvdXBzIGFscmVhZHkgaW5jbHVkZSB0aGUgc2VhcmNoIHJlc3VsdHMpLlxuICAgICAgICAgICAgLy8gZ2V0Q29udGFpbmluZ0NvbGxlY3Rpb25zIGl0c2VsZiBpcyBtZW1vaXplZCBwZXIgaXRlbSBmb3IgdGhlIHdob2xlIHBhZ2Ugc2Vzc2lvbiwgc28gZXZlbiB0aGlzIGNhbid0IHJlLXRyaWdnZXIgdGhlXG4gICAgICAgICAgICAvLyBleHBlbnNpdmUgYmFja2VuZCBzY2FuIG1vcmUgdGhhbiBvbmNlIHBlciBpdGVtLCBubyBtYXR0ZXIgaG93IG9mdGVuIHRoZSBwb3B1cCBpcyByZW9wZW5lZCB3aGlsZSBpdCdzIHBlbmRpbmcuXG4gICAgICAgICAgICBjb25zdCBpc1NlYXJjaGluZ0NvbGxlY3Rpb25zID0gKGlzU3RhbmRhbG9uZU1vdmllIHx8IGlzU291cmNlZEZyb21Db2xsZWN0aW9uKSAmJiBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9ucyAmJiBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgIGxldCBjb2xsZWN0aW9uc1NlYXJjaERvbmUgPSAhaXNTZWFyY2hpbmdDb2xsZWN0aW9uc1xuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbnNTZWFyY2g6IFByb21pc2U8dm9pZD4gPSBpc1NlYXJjaGluZ0NvbGxlY3Rpb25zXG4gICAgICAgICAgICAgICAgPyBnZXRDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkKS50aGVuKGNvbGxlY3Rpb25Hcm91cHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbGxlY3Rpb25Hcm91cHMubGVuZ3RoIHx8IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCAhPT0gaXRlbUlkKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZkdyb3VwID0gcHJvZ3JhbURhdGFTdG9yZS5ncm91cHNbMF1cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhjbHVkZSB0aGUgY29sbGVjdGlvbi9wbGF5bGlzdCB0aGlzIGl0ZW0gd2FzIGFscmVhZHkgcGxheWVkIGZyb20gLSBpdCdzIGFscmVhZHkgdGhlIGFjdGl2ZS9kZWZhdWx0IGdyb3VwLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdHcm91cHMgPSBjb2xsZWN0aW9uR3JvdXBzLmZpbHRlcihnID0+IGcuZ3JvdXBJZCAhPT0gc2VsZkdyb3VwLmdyb3VwSWQpXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV3R3JvdXBzLmxlbmd0aCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gW3NlbGZHcm91cCwgLi4ubmV3R3JvdXBzXS5tYXAoKGcsIGkpID0+ICh7IC4uLmcsIGluZGV4TnVtYmVyOiBpIH0pKVxuICAgICAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4geyBjb2xsZWN0aW9uc1NlYXJjaERvbmUgPSB0cnVlIH0pXG4gICAgICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKVxuXG4gICAgICAgICAgICBjb25zdCBjYW5Td2l0Y2hHcm91cHMgPSAoKTogYm9vbGVhbiA9PiBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgIT09IEl0ZW1UeXBlLk1vdmllIHx8IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zXG5cbiAgICAgICAgICAgIGNvbnN0IHBvcHVwVGl0bGU6IFBvcHVwVGl0bGVUZW1wbGF0ZSA9IG5ldyBQb3B1cFRpdGxlVGVtcGxhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwRm9jdXNDb250YWluZXInKSwgLTEsIHByb2dyYW1EYXRhU3RvcmUpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnJlbmRlcihhc3luYyAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICBpZiAoIWNhblN3aXRjaEdyb3VwcygpKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJylcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlR3JvdXBFbGVtZW50cyhwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcywgY29udGVudERpdiwgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cC5pbmRleE51bWJlciwgcG9wdXBUaXRsZSwgbG9hZEdyb3VwSXRlbXMpXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBWaWV3VG9rZW4gPSBwcm9ncmFtRGF0YVN0b3JlLmN1cnJlbnRWaWV3VG9rZW5cblxuICAgICAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uc1NlYXJjaERvbmUpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdwcmV2aWV3U2Nyb2xsU3Bpbm5lcicpXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5pbm5lckhUTUwgPSBzcGlubmVySHRtbCgpXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChzcGlubmVyKVxuICAgICAgICAgICAgICAgIGFjdGl2YXRlU3Bpbm5lcihzcGlubmVyKVxuXG4gICAgICAgICAgICAgICAgYXdhaXQgY29sbGVjdGlvbnNTZWFyY2hcbiAgICAgICAgICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBhIGdyb3VwIHdhcyBzZWxlY3RlZCwgb3IgdGhlIHBvcHVwIGNsb3NlZCkgd2hpbGUgdGhpcyB3YXMgbG9hZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyhncm91cFZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlR3JvdXBFbGVtZW50cyhwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcywgY29udGVudERpdiwgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cC5pbmRleE51bWJlciwgcG9wdXBUaXRsZSwgbG9hZEdyb3VwSXRlbXMpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRTd2l0Y2hhYmxlKGNhblN3aXRjaEdyb3VwcygpKVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRWaXNpYmxlKGNhblN3aXRjaEdyb3VwcygpKVxuXG4gICAgICAgICAgICBhd2FpdCBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlTGF6eUl0ZW1MaXN0KGNvbnRlbnREaXYsIChzdGFydEluZGV4KSA9PiBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBzdGFydEluZGV4KSwgdmlld1Rva2VuLCBpbml0aWFsUGFnZSwgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXgpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFRleHQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8uZ3JvdXBOYW1lID8/ICcnKVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8ucGxheWVkSXRlbUNvdW50ID8/IDAsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXA/LnRvdGFsSXRlbUNvdW50ID8/IDApXG4gICAgICAgICAgICBpZiAocHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50ICYmIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXA/LnBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmVuc3VyZUdyb3VwV2F0Y2hlZENvdW50KHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHVwZGF0ZWQgPT4gcG9wdXBUaXRsZS5zZXRXYXRjaGVkQ291bnQodXBkYXRlZC5wbGF5ZWRJdGVtQ291bnQsIHVwZGF0ZWQudG90YWxJdGVtQ291bnQpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIGl0ZW0gdGhhdCBpcyBjdXJyZW50bHkgcGxheWluZ1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlSXRlbSA9IGNvbnRlbnREaXYucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkTGlzdEl0ZW0nKSBcbiAgICAgICAgICAgIGlmICghYWN0aXZlSXRlbSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IGZpbmQgYWN0aXZlIG1lZGlhIHNvdXJjZSBlbGVtZW50IGluIHByZXZpZXcgbGlzdC4gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuXCIsIHByb2dyYW1EYXRhU3RvcmUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3RpdmVJdGVtPy5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1bmxvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XG4gICAgICAgIC8vIENsZWFyIG9sZCBkYXRhIGFuZCByZXNldCBwcmV2aWV3Q29udGFpbmVyTG9hZGVkIGZsYWdcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBvblZpZGVvVGltZVVwZGF0ZSlcbiAgICAgICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IC0xXG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlld1BvcHVwJyk/LnJlbW92ZSgpXG5cbiAgICAgICAgcHJldmlld0NvbnRhaW5lckxvYWRlZCA9IGZhbHNlIC8vIFJlc2V0IGZsYWcgd2hlbiB1bmxvYWRpbmdcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJykucXVlcnlTZWxlY3RvcignI3BvcHVwUHJldmlld0J1dHRvbicpICE9PSBudWxsXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==