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
exports.ListElementTemplate = exports.setItemOverlayActive = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
const FavoriteIconTemplate_1 = __webpack_require__(/*! ./QuickActions/FavoriteIconTemplate */ "./Web/Components/QuickActions/FavoriteIconTemplate.ts");
const PlayStateIconTemplate_1 = __webpack_require__(/*! ./QuickActions/PlayStateIconTemplate */ "./Web/Components/QuickActions/PlayStateIconTemplate.ts");
const ItemDetails_1 = __webpack_require__(/*! ./ItemDetails */ "./Web/Components/ItemDetails.ts");
const ItemType_1 = __webpack_require__(/*! ../Models/ItemType */ "./Web/Models/ItemType.ts");
const DataFetcher_1 = __webpack_require__(/*! ../Services/DataFetcher */ "./Web/Services/DataFetcher.ts");
// Shows/hides the "start playback" overlay for a rendered list item
function setItemOverlayActive(itemId, isActive) {
    document.getElementById(`cardOverlay-${itemId}`)?.classList.toggle('hide', isActive);
}
exports.setItemOverlayActive = setItemOverlayActive;
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
                                    ${this.item.UserData.PlayedPercentage ?
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
    OnlyBlurUnwatched: false,
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
const ListElementTemplate_1 = __webpack_require__(/*! ./Components/ListElementTemplate */ "./Web/Components/ListElementTemplate.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5QbGF5ZXJQcmV2aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFzQixZQUFZO0lBTUE7SUFBZ0M7SUFMOUQ7O09BRUc7SUFDSyxTQUFTLENBQVM7SUFFMUIsWUFBOEIsU0FBc0IsRUFBVSxrQkFBMEI7UUFBMUQsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtJQUFJLENBQUM7SUFFdEYsWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0scUJBQXFCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLENBQUM7SUFFUyxZQUFZLENBQUMsU0FBaUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFNUyxxQkFBcUIsQ0FBQyxHQUFHLGFBQXlCO1FBQ3hELHlEQUF5RDtRQUN6RCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDekUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEcsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDNUI7UUFFRCxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztZQUNuRSxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM1QjtRQUVELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0I7UUFDdEQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDO1lBQ3ZHLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7UUFFN0UsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekUsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLFlBQVksQ0FBQyxjQUFzQjtRQUN2QyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELFdBQVcsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ3ZDLE9BQU8sV0FBVyxDQUFDLGlCQUFpQixDQUFDO0lBQ3pDLENBQUM7Q0FDSjtBQTNERCxvQ0EyREM7Ozs7Ozs7Ozs7Ozs7O0FDM0RELHFHQUE0QztBQUU1QyxNQUFhLHVCQUF3QixTQUFRLDJCQUFZO0lBQ3JELGdCQUFnQixHQUFHLGdCQUFnQjtJQUNuQyxpQkFBaUIsR0FBRyxpQkFBaUI7SUFDckMsdUJBQXVCLEdBQUcsdUJBQXVCO0lBQ2pELHFCQUFxQixHQUFHLHFCQUFxQjtJQUU3QyxZQUFZLFNBQXNCLEVBQUUsa0JBQTBCO1FBQzFELEtBQUssQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTzt1QkFDUSxJQUFJLENBQUMsWUFBWSxFQUFFOzJCQUNmLElBQUksQ0FBQyxnQkFBZ0I7MkJBQ3JCLElBQUksQ0FBQyxpQkFBaUI7K0JBQ2xCLElBQUksQ0FBQyxxQkFBcUI7Ozs7bUNBSXRCLElBQUksQ0FBQyx1QkFBdUI7Ozs7U0FJdEQsQ0FBQztJQUNOLENBQUM7SUFFTSxNQUFNO1FBQ1QsTUFBTSxlQUFlLEdBQWdCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2xFLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFhLEVBQU8sRUFBRTtZQUM3RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDakYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFqQ0QsMERBaUNDOzs7Ozs7Ozs7Ozs7OztBQ25DRCxxR0FBNEM7QUFDNUMsNEdBQXNFO0FBRXRFLE1BQWEsd0JBQXlCLFNBQVEsMkJBQVk7SUFDa0I7SUFBc0I7SUFBaUM7SUFBL0gsWUFBWSxTQUFzQixFQUFFLGtCQUEwQixFQUFVLEtBQVksRUFBVSxjQUF1QixFQUFVLGdCQUF5QjtRQUNwSixLQUFLLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFEK0IsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFTO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFTO1FBRXBKLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsV0FBVztRQUNQLGdCQUFnQjtRQUNoQixPQUFPO3VCQUNRLElBQUksQ0FBQyxZQUFZLEVBQUU7Ozs0QkFHZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87O21DQUVYLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFFOzs0REFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTOztzQkFFMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyx5Q0FBeUMsOEJBQWtCLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFOzs7U0FHcEssQ0FBQztJQUNOLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBc0I7UUFDaEMsTUFBTSxlQUFlLEdBQWdCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2xFLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFhLEVBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Q0FDSjtBQTVCRCw0REE0QkM7Ozs7Ozs7Ozs7Ozs7O0FDL0JELHFHQUE0QztBQUc1QyxNQUFhLG1CQUFvQixTQUFRLDJCQUFZO0lBQ3VCO0lBQXhFLFlBQVksU0FBc0IsRUFBRSxrQkFBMEIsRUFBVSxJQUFpQjtRQUNyRixLQUFLLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFEK0IsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUVyRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFdBQVc7UUFDUCxnQkFBZ0I7UUFDaEIsT0FBTzt1QkFDUSxJQUFJLENBQUMsWUFBWSxFQUFFO2tCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7c0JBQ3JCLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzt1QkFDdEUsQ0FBQyxDQUFDLENBQUMsRUFBRTs2Q0FDaUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztrQkFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDOztzQkFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt1QkFDbkMsQ0FBQyxDQUFDLENBQUMsRUFBRTtrQkFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsbURBQW1ELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtzQkFDbkssSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO3VCQUNyQixDQUFDLENBQUMsQ0FBQyxFQUFFO29EQUN3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDOztTQUUvSCxDQUFDO0lBQ04sQ0FBQztJQUVNLE1BQU07UUFDVCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU8sU0FBUztRQUNiLE9BQU8sU0FBUyxDQUFDLFNBQVM7WUFDdEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsaUZBQWlGO1lBQzFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyxhQUFhLENBQUMsS0FBYTtRQUMvQixzREFBc0Q7UUFDdEQsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLDRDQUE0QztRQUM1RCxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzRCxJQUFJLE9BQU8sR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzRCxJQUFJLFdBQVcsR0FBVyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEQsT0FBTyxHQUFHLFdBQVcsR0FBRyxPQUFPLEdBQUcsQ0FBQztJQUN2QyxDQUFDO0lBRU8sYUFBYSxDQUFDLFlBQW9CLEVBQUUscUJBQTZCO1FBQ3JFLDRDQUE0QztRQUM1QyxZQUFZLElBQUksS0FBSyxDQUFDO1FBQ3RCLHFCQUFxQixJQUFJLEtBQUssQ0FBQztRQUUvQixJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsc0JBQXNCO1FBQzdFLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxDQUFDLGlDQUFpQztRQUVqRSxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpFLE9BQU8sV0FBVyxLQUFLLElBQUksT0FBTyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVPLE9BQU8sQ0FBQyxHQUFXLEVBQUUsU0FBaUIsQ0FBQztRQUMzQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQS9ERCxrREErREM7Ozs7Ozs7Ozs7Ozs7O0FDbEVELHFHQUEyQztBQUMzQyx1SkFBd0U7QUFDeEUsMEpBQTBFO0FBRTFFLGtHQUFpRDtBQUdqRCw2RkFBMkM7QUFDM0MsMEdBQWdFO0FBRWhFLG9FQUFvRTtBQUNwRSxTQUFnQixvQkFBb0IsQ0FBQyxNQUFjLEVBQUUsUUFBaUI7SUFDbEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLE1BQU0sRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO0FBQ3hGLENBQUM7QUFGRCxvREFFQztBQUVELE1BQWEsbUJBQW9CLFNBQVEsMkJBQVk7SUFLdUI7SUFBMkI7SUFBMEM7SUFKNUgsb0JBQW9CLENBQWE7SUFDMUMsYUFBYSxDQUF1QjtJQUNwQyxZQUFZLENBQXNCO0lBRTFDLFlBQVksU0FBc0IsRUFBRSxrQkFBMEIsRUFBVSxJQUFpQixFQUFVLGVBQWdDLEVBQVUsZ0JBQWtDO1FBQzNLLEtBQUssQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUM7UUFEZ0MsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFM0ssSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUVwQyxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBRXpELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksNkNBQXFCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDJDQUFvQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6RixDQUFDO0lBRUQsV0FBVztRQUNQLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtRQUUxQix3QkFBd0I7UUFDeEIsTUFBTSxnQkFBZ0IsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDdEUsTUFBTSxPQUFPLEdBQXdCLElBQUksaUNBQW1CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3RixPQUFPLENBQUMsTUFBTSxFQUFFO1FBRWhCLE1BQU0sb0JBQW9CLEdBQVcsbUNBQW1DLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSx1QkFBdUIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUk7UUFFeEksTUFBTSxVQUFVLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRWxILGdCQUFnQjtRQUNoQixPQUFPO3VCQUNRLElBQUksQ0FBQyxZQUFZLEVBQUU7Ozs0QkFHZCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7OzswQkFHZCxDQUNNLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLG1CQUFRLENBQUMsS0FBSyxDQUNwRCxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2dFQUVSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7OzswQkFJcEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVM7Ozs7O3NCQUt2QyxnQkFBZ0IsQ0FBQyxTQUFTOzs7Ozs7Ozt1RUFRdUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3NJQUNtRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGFBQWEsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTs7cURBRS9KLG9CQUFvQjs7c0NBRW5DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbkM7OytEQUV1QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0I7OytDQUVuRCxDQUFDLENBQUMsQ0FBQyxFQUNkOzJEQUN1QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7a0ZBQ1csSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2lFQUV6RixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OztrRUFZWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGVBQWUsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtrQ0FDaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksWUFBWTs7Ozs7OztTQU85RDtJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBc0I7UUFDaEMsTUFBTSxlQUFlLEdBQWdCLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtRQUNqRSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakUsTUFBTSxlQUFlLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDL0YsZUFBZSxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQWEsRUFBRSxFQUFFO1lBQ3pELENBQUMsQ0FBQyxlQUFlLEVBQUU7WUFDbkIsMENBQXdCLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FBQztRQUVGLE1BQU0sYUFBYSxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN4RixhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDcEksQ0FBQztDQUNKO0FBaEhELGtEQWdIQzs7Ozs7Ozs7Ozs7Ozs7QUMvSEQscUdBQTRDO0FBRzVDLDRHQUErRDtBQUUvRCxNQUFhLGtCQUFtQixTQUFRLDJCQUFZO0lBQ3dCO0lBQXhFLFlBQVksU0FBc0IsRUFBRSxrQkFBMEIsRUFBVSxnQkFBa0M7UUFDdEcsS0FBSyxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQztRQURnQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRXRHLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUM7SUFDNUMsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPO3VCQUNRLElBQUksQ0FBQyxZQUFZLEVBQUU7eUpBQytHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNOztrQkFFNUwsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsOENBQThDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O1NBRXBIO0lBQ0wsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFzQjtRQUNoQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7UUFDcEQsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTSxPQUFPLENBQUMsSUFBWTtRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJO0lBQzFELENBQUM7SUFFTSxhQUFhLENBQUMsVUFBbUI7UUFDcEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBYyx1QkFBdUIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0lBQ2hILENBQUM7SUFFTSxlQUFlLENBQUMsZUFBdUIsRUFBRSxjQUFzQjtRQUNsRSxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQWMsMkJBQTJCLENBQUM7UUFDckcsSUFBSSxtQkFBbUI7WUFBRSxtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsOEJBQWtCLEVBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQztJQUNoSCxDQUFDO0lBRU0sVUFBVSxDQUFDLFNBQWtCO1FBQ2hDLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDekMsSUFBSSxTQUFTLEVBQUU7WUFDWCxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxPQUFNO1NBQ1Q7UUFFRCxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7QUEzQ0QsZ0RBMkNDOzs7Ozs7Ozs7Ozs7OztBQ2hERCxxR0FBNEM7QUFFNUMsTUFBYSxxQkFBc0IsU0FBUSwyQkFBWTtJQUNuRCxZQUFZLFNBQXNCLEVBQUUsa0JBQTBCO1FBQzFELEtBQUssQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFdBQVc7UUFDUCxnQkFBZ0I7UUFDaEIsT0FBTzswQkFDVyxJQUFJLENBQUMsWUFBWSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F3QnBDLENBQUM7SUFDTixDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQXNCO1FBQ2hDLE1BQU0sZUFBZSxHQUFnQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNsRSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVEsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUNKO0FBeENELHNEQXdDQzs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Qsc0dBQTRDO0FBRzVDLE1BQWEsb0JBQXFCLFNBQVEsMkJBQVk7SUFDc0I7SUFBeEUsWUFBWSxTQUFzQixFQUFFLGtCQUEwQixFQUFVLElBQWlCO1FBQ3JGLEtBQUssQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUM7UUFEZ0MsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUVyRixJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVc7UUFDUCxnQkFBZ0I7UUFDaEIsT0FBTzswQkFDVyxJQUFJLENBQUMsWUFBWSxFQUFFOzs7OzsrQkFLZCxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFO3FDQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxJQUFJLEVBQUU7Ozt1Q0FHdkIsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxJQUFJLEtBQUs7Ozs7U0FJdEU7SUFDTCxDQUFDO0lBRU0sTUFBTTtRQUNULElBQUksQ0FBQyxxQkFBcUIsRUFBRTtJQUNoQyxDQUFDO0NBQ0o7QUE1QkQsb0RBNEJDOzs7Ozs7Ozs7Ozs7OztBQy9CRCxzR0FBNEM7QUFHNUMsTUFBYSxxQkFBc0IsU0FBUSwyQkFBWTtJQUNxQjtJQUF4RSxZQUFZLFNBQXNCLEVBQUUsa0JBQTBCLEVBQVUsSUFBaUI7UUFDckYsS0FBSyxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQztRQURnQyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBRXJGLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELFdBQVc7UUFDUCxnQkFBZ0I7UUFDaEIsT0FBTzswQkFDVyxJQUFJLENBQUMsWUFBWSxFQUFFOzs7OzsrQkFLZCxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFO3FDQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxJQUFJLEVBQUU7OzttQ0FHM0IsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxJQUFJLEtBQUs7O3lFQUVFLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVOztTQUVuSDtJQUNMLENBQUM7SUFFTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLHFCQUFxQixFQUFFO0lBQ2hDLENBQUM7Q0FDSjtBQTVCRCxzREE0QkM7Ozs7Ozs7Ozs7Ozs7O0FDL0JELE1BQU0sbUJBQW1CLEdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDekQscURBQXFELEtBQUssSUFBSTtJQUMxRCw2REFBNkQ7SUFDekQsaUVBQWlFO0lBQ3JFLFFBQVE7SUFDUiw4REFBOEQ7SUFDMUQsa0VBQWtFO0lBQ3RFLFFBQVE7SUFDWixRQUFRLENBQ1gsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBRVYsU0FBZ0IsV0FBVyxDQUFDLGVBQXVCLEVBQUU7SUFDakQsT0FBTyxnREFBZ0QsWUFBWSxLQUFLLG1CQUFtQixRQUFRO0FBQ3ZHLENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxTQUFxQjtJQUNqRCxTQUFTLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7QUFDOUUsQ0FBQztBQUZELDBDQUVDOzs7Ozs7Ozs7Ozs7OztBQ2pCRCxJQUFZLFNBV1g7QUFYRCxXQUFZLFNBQVM7SUFDakIscUNBQXdCO0lBQ3hCLGlEQUFvQztJQUNwQyx3REFBMkM7SUFDM0MsaURBQW9DO0lBQ3BDLGdEQUFtQztJQUNuQyx3RkFBMkU7SUFDM0UsbUVBQXNEO0lBQ3RELGtGQUFxRTtJQUNyRSw0RkFBK0U7SUFDL0UsaUdBQW9GO0FBQ3hGLENBQUMsRUFYVyxTQUFTLHlCQUFULFNBQVMsUUFXcEI7Ozs7Ozs7Ozs7Ozs7O0FDWEQscUlBQXFFO0FBR3JFLDJHQUF3RTtBQUN4RSxvSkFBK0U7QUFHL0UsaUZBQXNDO0FBRXRDLDRGQUEyQztBQUMzQyxpR0FBa0U7QUFDbEUseUdBQTZEO0FBRTdELG9HQUFvRztBQUNwRyx1R0FBdUc7QUFDdkcsTUFBTSx5QkFBeUIsR0FBa0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxtQkFBUSxDQUFDLFFBQVEsRUFBRSxtQkFBUSxDQUFDLE1BQU0sRUFBRSxtQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRS9HLE1BQWEsa0JBQWtCO0lBQ1A7SUFBMEM7SUFBOUQsWUFBb0IsZUFBZ0MsRUFBVSxnQkFBa0M7UUFBNUUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFOUYsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQW9CLEVBQUUsU0FBc0IsRUFBRSxTQUFpQixDQUFDO1FBQzVGLE1BQU0sYUFBYSxHQUFHLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBQy9FLElBQUksQ0FBQyxhQUFhO1lBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUV2RCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyw2R0FBNkc7WUFDN0csTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDckQ7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLG1CQUFtQixDQUFDLEtBQW9CLEVBQUUsU0FBc0IsRUFBRSxNQUFjO1FBQ3pGLE1BQU0sYUFBYSxHQUFHLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBQy9FLElBQUksQ0FBQyxhQUFhO1lBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUV2RCxLQUFLLElBQUksQ0FBQyxHQUFXLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUVELDhEQUE4RDtJQUN0RCx3QkFBd0IsQ0FBQyxhQUFzQjtRQUNuRCxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFjLHlCQUF5QixDQUFDO1FBQ3ZGLE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQWMsNEJBQTRCLENBQUM7UUFDN0YsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLGNBQWM7WUFBRSxPQUFNO1FBRTNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxjQUFjLENBQUMsV0FBVyxHQUFHLFdBQVc7UUFFeEMsTUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsWUFBWTtRQUN6RSxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdkQsSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFNO1FBRTFCLGNBQWMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFhLEVBQVEsRUFBRTtZQUM3QyxDQUFDLENBQUMsZUFBZSxFQUFFO1lBQ25CLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN6RCxjQUFjLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXO1FBQ3JFLENBQUM7SUFDTCxDQUFDO0lBRU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFpQixFQUFFLFNBQXNCLEVBQUUsa0JBQTBCO1FBQzFGLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDMUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFhLEVBQUUsRUFBRTtZQUNuRCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFcEIsK0RBQStEO1lBQy9ELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQWdCLEVBQVEsRUFBRTtnQkFDcEYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLGFBQWEsR0FBWSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFFbkgsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNuQixNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUkscUJBQVMsQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtxQkFDekUsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxNQUFNLEdBQUcsTUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUMzRSxNQUFNLGNBQWMsR0FBVyxNQUFNLEVBQUUsV0FBVztnQkFFbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztvQkFDN0IsR0FBRyxJQUFJO29CQUNQLFdBQVcsRUFBRSxjQUFjO2lCQUM5QixDQUFDO2dCQUNGLGFBQWEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQyxXQUFXLEdBQUcsY0FBYzthQUN0RjtZQUVELDBDQUEwQztZQUMxQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUU3Qyw4QkFBOEI7WUFDOUIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUU7WUFDdkQsTUFBTSxRQUFRLEdBQVksUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBRTlHLHFEQUFxRDtZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbkIsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFTLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsZ0JBQWdCLEVBQUU7cUJBQ3pFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sTUFBTSxHQUFHLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDM0UsTUFBTSxjQUFjLEdBQVcsTUFBTSxFQUFFLFdBQVc7Z0JBRWxELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7b0JBQzdCLEdBQUcsSUFBSTtvQkFDUCxXQUFXLEVBQUUsY0FBYztpQkFDOUIsQ0FBQztnQkFDRixRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUMsV0FBVyxHQUFHLGNBQWM7YUFDakY7WUFFRCxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7SUFFRCxpR0FBaUc7SUFDekYsbUJBQW1CLENBQUMsUUFBcUI7UUFDN0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7UUFDOUMsUUFBUSxDQUFDLFNBQVMsR0FBRyx5QkFBVyxHQUFFO1FBQ2xDLDZCQUFlLEVBQUMsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCw4Q0FBOEM7SUFDdEMsaUJBQWlCLENBQ3JCLFNBQXNCLEVBQ3RCLFFBQTJELEVBQzNELGNBQXNCLEVBQ3RCLFdBQW1CLEVBQ25CLFNBQWlCO1FBRWpCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBRS9CLE1BQU0sUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWM7Z0JBQUUsT0FBTTtZQUNqQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7WUFFbEMsTUFBTSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLE1BQU0sUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNsRSx3RkFBd0Y7WUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO2dCQUFFLE9BQU07WUFFM0QsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQztZQUU1RCxNQUFNLGNBQWMsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU07WUFDakQsSUFBSSxjQUFjLEdBQUcsZ0JBQWdCO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFNBQVMsQ0FBQztRQUM5RixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUVyQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRUQsNENBQTRDO0lBQzVDLHlGQUF5RjtJQUNqRix5QkFBeUIsQ0FDN0IsU0FBc0IsRUFDdEIsUUFBMkQsRUFDM0QsaUJBQXlCLEVBQ3pCLFNBQWlCO1FBRWpCLElBQUksaUJBQWlCLElBQUksQ0FBQztZQUFFLE9BQU07UUFFbEMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDOUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUV0RCxNQUFNLFFBQVEsR0FBRyxJQUFJLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjO2dCQUFFLE9BQU07WUFDakMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUVyQixNQUFNLHlCQUF5QixHQUFHLFNBQVMsQ0FBQyxZQUFZO1lBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7WUFDbEMsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsWUFBWSxHQUFHLHlCQUF5QjtZQUV6RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGVBQWU7WUFDckUsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1lBQy9ELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDL0Msd0ZBQXdGO1lBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztnQkFBRSxPQUFNO1lBRTNELE1BQU0seUJBQXlCLEdBQUcsU0FBUyxDQUFDLFlBQVk7WUFDeEQsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQztZQUMvRCxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxZQUFZLEdBQUcseUJBQXlCO1lBRXpFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUM7UUFDakYsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFFckMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVNLEtBQUssQ0FBQyxrQkFBa0IsQ0FDM0IsU0FBc0IsRUFDdEIsUUFBMkQsRUFDM0QsU0FBaUIsRUFDakIsV0FBOEIsRUFDOUIsZ0JBQXdCLENBQUM7UUFFekIsTUFBTSxTQUFTLEdBQUcsV0FBVyxJQUFJLE1BQU0sUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsRCx3RkFBd0Y7UUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1lBQUUsT0FBTTtRQUUzRCxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUM7UUFFeEUsTUFBTSxXQUFXLEdBQUcsYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTTtRQUMxRCxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsZ0JBQWdCO1lBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDO1FBRXBGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUM7SUFDakYsQ0FBQztJQUVPLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxPQUFlO1FBQ2hELE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxxQkFBUyxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLG1CQUFtQixFQUFFO2FBQzVFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDakQsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxNQUFNLEdBQUcsR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYyxFQUFFO0lBQ3ZGLENBQUM7SUFFTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsS0FBWTtRQUM3QyxJQUFJLEtBQUssQ0FBQyxlQUFlLEtBQUssNkJBQXFCO1lBQUUsT0FBTyxLQUFLO1FBRWpFLE1BQU0sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM1RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDO1FBQzFGLE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFO0lBQ3hELENBQUM7SUFFTSxtQkFBbUIsQ0FDdEIsTUFBZSxFQUNmLFNBQXNCLEVBQ3RCLGlCQUF5QixFQUN6QixjQUFrQyxFQUNsQyxTQUE2RTtRQUU3RSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBRXBELCtDQUErQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO1FBRXBDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLE1BQU0sS0FBSyxHQUFHLElBQUksbURBQXdCLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZLLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQWEsRUFBaUIsRUFBRTtnQkFDaEQsQ0FBQyxDQUFDLGVBQWUsRUFBRTtnQkFFbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztnQkFDdkQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUMzQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3ZELGNBQWMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO29CQUNuRixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEtBQUssNkJBQXFCLEVBQUU7d0JBQ3JELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQ3hHO2lCQUNKO2dCQUNELGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUUvQixTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUU7Z0JBQ3hCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7Z0JBRXRELE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQjtvQkFDdEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO29CQUN6RSxDQUFDLENBQUMsU0FBUztnQkFDZixNQUFNLFdBQVcsR0FBaUMsTUFBTSxFQUFFLGdCQUFnQixLQUFLLFNBQVM7b0JBQ3BGLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxzQkFBc0IsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDdEcsQ0FBQyxDQUFDLFNBQVM7Z0JBQ2YsTUFBTSxhQUFhLEdBQUcsTUFBTSxFQUFFLGdCQUFnQixJQUFJLENBQUM7Z0JBRW5ELE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUM7WUFDN0ksQ0FBQyxDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGdCQUFnQixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEtBQUssNkJBQXFCLEVBQUU7Z0JBQzlHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLHVDQUFxQixFQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUM5RTtTQUNKO0lBQ0wsQ0FBQztDQUNKO0FBelFELGdEQXlRQzs7Ozs7Ozs7Ozs7Ozs7QUMxUkQsSUFBWSxRQXNDWDtBQXRDRCxXQUFZLFFBQVE7SUFDaEIsNkRBQWU7SUFDZix5Q0FBSztJQUNMLGlEQUFTO0lBQ1QsK0RBQWdCO0lBQ2hCLHVDQUFJO0lBQ0osMkNBQU07SUFDTiw2Q0FBTztJQUNQLGlFQUFpQjtJQUNqQiwrREFBZ0I7SUFDaEIsNkNBQU87SUFDUCw0Q0FBTTtJQUNOLDBDQUFLO0lBQ0wsMEVBQXFCO0lBQ3JCLDBDQUFLO0lBQ0wsMERBQWE7SUFDYiwwREFBYTtJQUNiLG9EQUFVO0lBQ1Ysc0RBQVc7SUFDWCxvREFBVTtJQUNWLG9EQUFVO0lBQ1YsNENBQU07SUFDTiwwQ0FBSztJQUNMLG9EQUFVO0lBQ1YsZ0RBQVE7SUFDUiw4REFBZTtJQUNmLDhDQUFPO0lBQ1Asa0RBQVM7SUFDVCw0Q0FBTTtJQUNOLDRDQUFNO0lBQ04sNENBQU07SUFDTiw4Q0FBTztJQUNQLGtEQUFTO0lBQ1Qsa0RBQVM7SUFDVCw0REFBYztJQUNkLGdEQUFRO0lBQ1IsMENBQUs7SUFDTCx3Q0FBSTtBQUNSLENBQUMsRUF0Q1csUUFBUSx3QkFBUixRQUFRLFFBc0NuQjs7Ozs7Ozs7Ozs7Ozs7QUN0Q0QscUZBQW9DO0FBWXZCLDZCQUFxQixHQUFtQjtJQUNqRCxnQkFBZ0IsRUFBRSxDQUFDLG1CQUFRLENBQUMsTUFBTSxFQUFFLG1CQUFRLENBQUMsTUFBTSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFFLG1CQUFRLENBQUMsTUFBTSxFQUFFLG1CQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3JHLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLGVBQWUsRUFBRSxFQUFFO0lBQ25CLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsMkJBQTJCLEVBQUUsSUFBSTtJQUNqQyxpQkFBaUIsRUFBRSxLQUFLO0NBQzNCOzs7Ozs7Ozs7Ozs7OztBQ05ZLDZCQUFxQixHQUFHLENBQUMsQ0FBQztBQUVoQyxNQUFNLGtCQUFrQixHQUFHLENBQUMsZUFBdUIsRUFBRSxjQUFzQixFQUFVLEVBQUUsQ0FDMUYsZUFBZSxLQUFLLDZCQUFxQixJQUFJLGNBQWMsS0FBSyw2QkFBcUI7SUFDakYsQ0FBQyxDQUFDLFdBQVc7SUFDYixDQUFDLENBQUMsR0FBRyxlQUFlLElBQUksY0FBYyxVQUFVO0FBSDNDLDBCQUFrQixzQkFHeUI7Ozs7Ozs7Ozs7Ozs7O0FDYjNDLDZCQUFxQixHQUFtQjtJQUNqRCxZQUFZLEVBQUUsQ0FBQztJQUNmLFlBQVksRUFBRSxFQUFFO0lBQ2hCLHdCQUF3QixFQUFFLEdBQUc7Q0FDaEM7Ozs7Ozs7Ozs7Ozs7O0FDUkQsNEdBQXNFO0FBZXRFLFNBQWdCLHFCQUFxQixDQUFDLGdCQUFrQyxFQUFFLEtBQVk7SUFDbEYsTUFBTSxJQUFJLEdBQUcsOEJBQWtCLEVBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDO0lBRTVFLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7UUFDbEQsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsYUFBYSxDQUFjLDJCQUEyQixDQUFDO1FBQ2pJLElBQUksaUJBQWlCO1lBQUUsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUk7S0FDNUQ7SUFFRCxNQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQWMsMkJBQTJCLENBQUM7SUFDeEksSUFBSSxxQkFBcUI7UUFBRSxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsSUFBSTtBQUNyRSxDQUFDO0FBVkQsc0RBVUM7QUFFRCxTQUFTLGtCQUFrQixDQUFDLGdCQUFrQyxFQUFFLE1BQWMsRUFBRSxTQUFrQixFQUFFLFFBQWlCO0lBQ2pILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCO1FBQUUsT0FBTTtJQUM3RCxJQUFJLFNBQVMsS0FBSyxRQUFRO1FBQUUsT0FBTTtJQUVsQyxNQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLElBQUksWUFBWTtRQUFFLHFCQUFxQixDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQztBQUMzRSxDQUFDO0FBRUQsU0FBZ0Isd0JBQXdCLENBQUMsZ0JBQWtDLEVBQUUsTUFBYztJQUN2RixNQUFNLElBQUksR0FBZ0IsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUM5RCxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU07SUFFakIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO0lBQ3RDLE1BQU0sUUFBUSxHQUFHLENBQUMsU0FBUztJQUUzQixnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7UUFDeEIsR0FBRyxJQUFJO1FBQ1AsUUFBUSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7S0FDbkQsQ0FBQztJQUNGLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0FBQ3JFLENBQUM7QUFaRCw0REFZQztBQUVELE1BQWEsV0FBVztJQUNBO0lBQXBCLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xELE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUF5QixFQUFRLEVBQUU7WUFDeEUsSUFBSSxPQUFPLENBQUMsV0FBVyxLQUFLLGlCQUFpQjtnQkFBRSxPQUFNO1lBQ3JELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLGdCQUFnQixFQUFFO2dCQUFFLE9BQU07WUFFaEUsTUFBTSxZQUFZLEdBQTJCLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUU7WUFDNUUsS0FBSyxNQUFNLFFBQVEsSUFBSSxZQUFZLEVBQUU7Z0JBQ2pDLE1BQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxJQUFJO29CQUFFLFNBQVE7Z0JBRW5CLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztvQkFDN0IsR0FBRyxJQUFJO29CQUNQLFFBQVEsRUFBRTt3QkFDTixHQUFHLElBQUksQ0FBQyxRQUFRO3dCQUNoQixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07d0JBQ3ZCLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTt3QkFDL0IscUJBQXFCLEVBQUUsUUFBUSxDQUFDLHFCQUFxQjt3QkFDckQsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQjtxQkFDOUM7aUJBQ0osQ0FBQztnQkFFRixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUN6RjtRQUNMLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQTNCRCxrQ0EyQkM7Ozs7Ozs7Ozs7Ozs7O0FDOUVELE1BQWEsTUFBTTtJQUNLO0lBQXBCLFlBQW9CLGFBQXFCLDBCQUEwQjtRQUEvQyxlQUFVLEdBQVYsVUFBVSxDQUFxQztJQUNuRSxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLE9BQWM7UUFDdkMsdURBQXVEO0lBQzNELENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsT0FBYztRQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLE9BQWM7UUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUVKO0FBaEJELHdCQWdCQzs7Ozs7Ozs7Ozs7Ozs7QUNmRCxrRkFBdUM7QUFFdkMsTUFBYSxlQUFlO0lBQ0o7SUFBcEIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSSxDQUFDO0lBRXZDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBYyxFQUFFLGtCQUEwQjtRQUNqRCxJQUFJO1lBQ0EsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFTLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsVUFBVSxFQUFFO2lCQUNuRSxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztpQkFDM0IsT0FBTyxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRXZELE9BQU8sTUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNwRDtRQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsRUFBRSxFQUFFLENBQUM7U0FDekU7SUFDTCxDQUFDO0NBQ0o7QUFkRCwwQ0FjQzs7Ozs7Ozs7Ozs7Ozs7QUNiRCwrR0FBK0U7QUFDL0UsK0dBQStFO0FBRS9FLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJO0FBRXRDLE1BQWEsZ0JBQWdCO0lBQ2pCLFlBQVksQ0FBYTtJQUN6QixVQUFVLEdBQVcsQ0FBQztJQUN0QixlQUFlLEdBQWtCLElBQUk7SUFFN0M7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2hCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsYUFBYSxFQUFFLEVBQUU7WUFDakIsVUFBVSxFQUFFLEVBQUU7WUFDZCxJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxFQUFFO1lBQ1YsY0FBYyxFQUFFLHNDQUFxQjtZQUNyQyxjQUFjLEVBQUUsc0NBQXFCO1NBQ3hDO0lBQ0wsQ0FBQztJQUVELElBQVcsbUJBQW1CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUI7SUFDaEQsQ0FBQztJQUVELElBQVcsbUJBQW1CLENBQUMsbUJBQTJCO1FBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CO0lBQy9ELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7SUFDMUMsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLGFBQXFCO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLGFBQWE7SUFDbkQsQ0FBQztJQUVELElBQVcsV0FBVztRQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzFFLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSTtJQUNqQyxDQUFDO0lBRUQsSUFBVyxJQUFJLENBQUMsSUFBYztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJO0lBQ2pDLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVU7SUFDdkMsQ0FBQztJQUVELElBQVcsVUFBVSxDQUFDLFVBQWtCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLFVBQVU7SUFDN0MsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO0lBQ25DLENBQUM7SUFFRCxJQUFXLE1BQU0sQ0FBQyxNQUFlO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU07SUFDckMsQ0FBQztJQUVELElBQVcsY0FBYztRQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYztJQUMzQyxDQUFDO0lBRUQsSUFBVyxjQUFjLENBQUMsUUFBd0I7UUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEdBQUcsUUFBUTtJQUMvQyxDQUFDO0lBRUQsSUFBVyxjQUFjO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjO0lBQzNDLENBQUM7SUFFRCxJQUFXLGNBQWMsQ0FBQyxRQUF3QjtRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxRQUFRO0lBQy9DLENBQUM7SUFFTSxpQkFBaUI7UUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ3JDLENBQUM7SUFFRCxJQUFXLG9CQUFvQjtRQUMzQixPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQjtJQUNoRyxDQUFDO0lBRUQsSUFBVyx1QkFBdUI7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3QyxPQUFPLEtBQUs7UUFFaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxtQkFBbUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQjtJQUMvQyxDQUFDO0lBRU0sV0FBVyxDQUFDLE1BQWM7UUFDN0IsT0FBTyxJQUFJLENBQUMsTUFBTTthQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUM7SUFDekMsQ0FBQztJQUVNLGlCQUFpQixDQUFDLE9BQWUsRUFBRSxLQUFvQixFQUFFLFVBQWtCLEVBQUUsZ0JBQXdCO1FBQ3hHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1RCxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTztnQkFDekIsT0FBTyxLQUFLO1lBRWhCLElBQUksS0FBSyxDQUFDLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsRUFBRTtnQkFDNUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFO2FBQ2hKO1lBRUQsSUFBSSxVQUFVLElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRTtnQkFDcEMsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLGNBQWMsRUFBRSxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRTthQUM5STtZQUVELElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDckMsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRTthQUNqSTtZQUVELE9BQU8sS0FBSztRQUNoQixDQUFDLENBQUM7SUFDTixDQUFDO0lBRU0sb0JBQW9CLENBQUMsT0FBZSxFQUFFLGVBQXVCLEVBQUUsY0FBc0I7UUFDeEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFFTSxzQkFBc0IsQ0FBQyxNQUFjLEVBQUUsS0FBYTtRQUN2RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sU0FBUztRQUU1QixNQUFNLFlBQVksR0FBVSxFQUFFLEdBQUcsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssRUFBRTtRQUN4RixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRixPQUFPLFlBQVk7SUFDdkIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxZQUF5QjtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqRyxDQUFDLENBQUMsS0FBSyxDQUNkO0lBQ0wsQ0FBQztJQUVELHFIQUFxSDtJQUM5RyxZQUFZO1FBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVO0lBQzVCLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBYTtRQUM5QixPQUFPLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVTtJQUNwQyxDQUFDO0lBRUQsSUFBVyxnQkFBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVTtJQUMxQixDQUFDO0NBQ0o7QUE1SkQsNENBNEpDOzs7Ozs7O1VDcktEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQzVCQSwwRkFBeUM7QUFDekMsMklBQXlFO0FBQ3pFLHdIQUE2RDtBQUM3RCxpSkFBNkU7QUFDN0UscUhBQTJEO0FBQzNELDRHQUF3RDtBQUN4RCxrSUFBbUU7QUFDbkUseUdBQW1EO0FBQ25ELDRGQUEyQztBQUczQyxpRkFBc0M7QUFDdEMsMkdBQXdFO0FBRXhFLGlHQUFrRTtBQUNsRSxxSUFBc0U7QUFFdEUsb0RBQW9EO0FBQ3BEOztHQUVHO0FBQ0gsSUFBSSxvQkFBb0IsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDNUUsb0JBQW9CLENBQUMsRUFBRSxHQUFHLHNCQUFzQjtBQUNoRCxvQkFBb0IsQ0FBQyxXQUFXLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWlJbEM7QUFDRCxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUVqRCw0QkFBNEI7QUFDNUIsTUFBTSxNQUFNLEdBQVcsSUFBSSxlQUFNLEVBQUU7QUFDbkMsTUFBTSxnQkFBZ0IsR0FBcUIsSUFBSSxtQ0FBZ0IsRUFBRTtBQUNqRSxNQUFNLGVBQWUsR0FBb0IsSUFBSSxpQ0FBZSxDQUFDLE1BQU0sQ0FBQztBQUNwRSxNQUFNLGtCQUFrQixHQUFHLElBQUksdUNBQWtCLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO0FBRXBGLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxHQUFHLEVBQTRCO0FBRS9ELEtBQUssVUFBVSwwQkFBMEIsQ0FBQyxNQUFjO0lBQ3BELE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxxQkFBUyxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHNCQUFzQixFQUFFO1NBQy9FLE9BQU8sQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDakQsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxJQUFJO1FBQ0EsTUFBTSxHQUFHLEdBQVUsTUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQy9FLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4QixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87WUFDbEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTO1lBQ3RCLEtBQUssRUFBRSxFQUFFO1lBQ1QsV0FBVyxFQUFFLENBQUMsQ0FBQyxXQUFXO1lBQzFCLGVBQWUsRUFBRSxDQUFDLENBQUMsZUFBZTtZQUNsQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLGNBQWM7U0FDbkMsQ0FBQyxDQUFDO0tBQ047SUFBQyxPQUFPLEVBQVcsRUFBRTtRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDLDJEQUEyRCxFQUFFLEVBQUUsQ0FBQztRQUM3RSxPQUFPLEVBQUU7S0FDWjtBQUNMLENBQUM7QUFFRCxTQUFTLHdCQUF3QixDQUFDLE1BQWM7SUFDNUMsSUFBSSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUM3QyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1YsT0FBTyxHQUFHLDBCQUEwQixDQUFDLE1BQU0sQ0FBQztRQUM1QyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztLQUMzQztJQUNELE9BQU8sT0FBTztBQUNsQixDQUFDO0FBRUQsU0FBUyxVQUFVO0lBQ2Ysc0RBQXNEO0lBQ3RELElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUU7UUFDdEcsVUFBVSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFBQyxpQ0FBaUM7UUFDN0QsT0FBTTtLQUNUO0lBRUQsSUFBSSx5QkFBVyxDQUFDLGdCQUFnQixDQUFDO0lBRWpDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxzQ0FBc0MsQ0FBQztTQUNuRSxJQUFJLENBQUMsQ0FBQyxNQUFzQixFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0lBRS9FLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFTLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDNUYsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUNwRSxJQUFJLENBQUMsQ0FBQyxNQUFzQixFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0FBQ25GLENBQUM7QUFDRCxVQUFVLEVBQUU7QUFFWixNQUFNLDZCQUE2QixHQUFHLDhCQUE4QjtBQUVwRSxNQUFNLFVBQVUsR0FBYSxDQUFDLFFBQVEsQ0FBQztBQUN2QyxJQUFJLGlCQUFpQixHQUFXLElBQUk7QUFDcEMsSUFBSSxzQkFBc0IsR0FBWSxLQUFLO0FBQzNDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsb0JBQW9CLENBQUM7QUFFM0QsMEdBQTBHO0FBQzFHLFNBQVMseUJBQXlCO0lBQzlCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxpREFBaUQsQ0FBQztJQUM3RixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJO0FBQ3pFLENBQUM7QUFFRCxJQUFJLHlCQUF5QixHQUFXLENBQUMsQ0FBQztBQUMxQyxTQUFTLGlCQUFpQjtJQUN0QixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDbkQsSUFBSSxjQUFjLEtBQUsseUJBQXlCO1FBQUUsT0FBTTtJQUN4RCx5QkFBeUIsR0FBRyxjQUFjO0lBRTFDLE1BQU0sTUFBTSxHQUFHLHlCQUF5QixFQUFFO0lBQzFDLElBQUksQ0FBQyxNQUFNO1FBQUUsT0FBTTtJQUVuQixJQUFJLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRTtRQUNqRCxNQUFNLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUI7UUFDM0QsZ0JBQWdCLENBQUMsbUJBQW1CLEdBQUcsTUFBTTtRQUM3Qyw4Q0FBb0IsRUFBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO1FBQzNDLDhDQUFvQixFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7S0FDckM7SUFFRCxNQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ2pELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtRQUFFLE9BQU07SUFFdkMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFVO0lBQ25ELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUc7SUFFbEUsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1FBQ3hCLEdBQUcsSUFBSTtRQUNQLFFBQVEsRUFBRTtZQUNOLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDaEIscUJBQXFCLEVBQUUsYUFBYTtZQUNwQyxnQkFBZ0IsRUFBRSxnQkFBZ0I7WUFDbEMsTUFBTSxFQUFFLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxZQUFZO1NBQzNFO0tBQ0osQ0FBQztBQUNOLENBQUM7QUFFRCw2R0FBNkc7QUFDN0csTUFBTSxrQkFBa0IsR0FBVyxVQUFVO0FBQzdDLE1BQU0sdUJBQXVCLEdBQWtCLElBQUksR0FBRyxDQUFDLENBQUMsbUJBQVEsQ0FBQyxNQUFNLEVBQUUsbUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1RixJQUFJLHlCQUF5QixHQUFXLElBQUk7QUFFNUMsU0FBUyxzQkFBc0IsQ0FBQyxZQUFvQjtJQUNoRCxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUkscUJBQVMsQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyxxQkFBcUIsRUFBRTtTQUM5RSxPQUFPLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ2pELE9BQU8sQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx3REFBd0QsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6SSxDQUFDO0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxnQkFBd0I7SUFDckQsTUFBTSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9ELE1BQU0sWUFBWSxHQUFHLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFckQsSUFBSSxXQUFXLEtBQUssa0JBQWtCLEVBQUU7UUFDcEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDbkUseUJBQXlCLEdBQUcsSUFBSTtRQUNoQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU07UUFFdEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNyRSxNQUFNLFFBQVEsR0FBYSxtQkFBUSxDQUFDLElBQUksQ0FBQyxJQUF3QyxDQUFDO1lBQ2xGLHlCQUF5QixHQUFHLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3hGLENBQUMsQ0FBQztRQUNGLE9BQU07S0FDVDtJQUVELElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxZQUFZLEtBQUssa0JBQWtCLElBQUkseUJBQXlCLEVBQUU7UUFDdEcsc0JBQXNCLENBQUMseUJBQXlCLENBQUM7S0FDcEQ7SUFFRCx5QkFBeUIsR0FBRyxJQUFJO0FBQ3BDLENBQUM7QUFFRCx1SEFBdUg7QUFDdkgsaUdBQWlHO0FBQ2pHLE1BQU0sd0JBQXdCLEdBQWdCLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzVGLFNBQVMsc0JBQXNCLENBQUMsS0FBaUI7SUFDN0MsTUFBTSxhQUFhLEdBQUksS0FBSyxDQUFDLE1BQXNCLEVBQUUsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUF1QjtJQUNyRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFBRSxPQUFNO0lBRXRHLE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUF1QjtJQUNyRSxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU07SUFFakIsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztJQUMxRyxJQUFJLG1CQUFtQixFQUFFO1FBQ3JCLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDO1FBQzNDLE9BQU07S0FDVDtJQUVELE1BQU0sWUFBWSxHQUFhLG1CQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQXFDLENBQUM7SUFDM0csTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7SUFDM0MsSUFBSSxNQUFNLElBQUksdUJBQXVCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ3JELHNCQUFzQixDQUFDLE1BQU0sQ0FBQztLQUNqQztBQUNMLENBQUM7QUFDRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQztBQUVoRSxTQUFTLG9CQUFvQjtJQUN6QixNQUFNLGdCQUFnQixHQUFXLGVBQWUsRUFBRTtJQUVsRCxTQUFTLGVBQWU7UUFDcEIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7UUFDbkQsTUFBTSxpQkFBaUIsR0FBVyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUMzRCxPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUM7SUFDaEQsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6QyxvQkFBb0IsRUFBRTtJQUN0QixpQkFBaUIsR0FBRyxnQkFBZ0I7SUFFcEMsd0VBQXdFO0lBQ3hFLFNBQVMsb0JBQW9CLENBQUMsVUFBVSxHQUFHLENBQUM7UUFDeEMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDdkMsa0RBQWtEO1lBQzlDLGtFQUFrRTtZQUNsRSxJQUFJLENBQUMsc0JBQXNCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFO2dCQUN0RCxhQUFhLEVBQUU7Z0JBQ2Ysc0JBQXNCLEdBQUcsSUFBSSxFQUFDLGlDQUFpQztnQkFDbkUsSUFBSTthQUNQO2lCQUFNLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxFQUFFLHNCQUFzQjtnQkFDL0MsVUFBVSxDQUFDLEdBQVMsRUFBRTtvQkFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDeEMsb0JBQW9CLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDeEMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFDLGlDQUFpQzthQUM5QztTQUNKO2FBQU0sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDL0MsZUFBZSxFQUFFO1NBQ3BCO0lBQ0wsQ0FBQztJQUVELFNBQVMsYUFBYTtRQUNsQixpQ0FBaUM7UUFDakMsTUFBTSxNQUFNLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsaUZBQWlGO1FBRWhMLElBQUksS0FBSyxHQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWMsRUFBVyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNsSSw2RUFBNkU7UUFDN0UsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO1lBQ1osS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWMsRUFBVyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFdkgsTUFBTSxhQUFhLEdBQTBCLElBQUksNkNBQXFCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztRQUNyRixJQUFJLG9CQUFvQixHQUFZLEtBQUs7UUFDekMsYUFBYSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztRQUUvQyxRQUFRLENBQUMsYUFBYSxDQUFtQix1QkFBdUIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQztRQUVwSCxLQUFLLFVBQVUseUJBQXlCO1lBQ3BDLElBQUksb0JBQW9CO2dCQUFFLE9BQU07WUFDaEMsb0JBQW9CLEdBQUcsSUFBSTtZQUMzQixJQUFJO2dCQUNBLE1BQU0sb0JBQW9CLEVBQUU7YUFDL0I7b0JBQVM7Z0JBQ04sb0JBQW9CLEdBQUcsS0FBSzthQUMvQjtRQUNMLENBQUM7UUFFRCxLQUFLLFVBQVUsb0JBQW9CO1lBQy9CLE1BQU0sbUJBQW1CLEdBQUcsS0FBSyxFQUFFLE1BQWMsRUFFOUMsRUFBRTtnQkFDRCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzNDLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxxQkFBUyxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLGlCQUFpQixFQUFFO3FCQUMxRSxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztxQkFDM0IsT0FBTyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQzNDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2pDLE1BQU0sR0FBRyxHQUFHLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDeEUsT0FBTztvQkFDSCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYTtvQkFDaEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87d0JBQ2xCLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUzt3QkFDdEIsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsV0FBVyxFQUFFLENBQUMsQ0FBQyxXQUFXO3dCQUMxQixlQUFlLEVBQUUsQ0FBQyxDQUFDLGVBQWU7d0JBQ2xDLGNBQWMsRUFBRSxDQUFDLENBQUMsY0FBYztxQkFDbkMsQ0FBQyxDQUFDO29CQUNILGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYTtvQkFDaEMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxlQUFlO2lCQUN2QztZQUNMLENBQUM7WUFFRCxNQUFNLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsZUFBZTtZQUVqRSxNQUFNLGNBQWMsR0FBRyxLQUFLLEVBQUUsT0FBZSxFQUFFLGFBQXFCLENBQUMsRUFBRSxRQUFnQixTQUFTLEVBQTZCLEVBQUU7Z0JBQzNILE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDM0MsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFTLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsV0FBVyxFQUFFO3FCQUNwRSxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztxQkFDM0IsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFDOUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQzFCLE1BQU0sR0FBRyxHQUFHLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDeEUsTUFBTSxNQUFNLEdBQXFCLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLGdCQUFnQixFQUFFO2dCQUU3RixnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2dCQUM5RixPQUFPLE1BQU07WUFDakIsQ0FBQztZQUVELGlFQUFpRTtZQUNqRSxNQUFNLDhCQUE4QixHQUFHLEtBQUssSUFBNEIsRUFBRTtnQkFDdEUsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFTLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0UsSUFBSTtvQkFDQSxPQUFPLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztpQkFDdEU7Z0JBQUMsT0FBTyxFQUFXLEVBQUU7b0JBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUZBQW1GLEVBQUUsRUFBRSxDQUFDO29CQUNyRyxPQUFPLElBQUk7aUJBQ2Q7WUFDTCxDQUFDO1lBRUQsTUFBTSxlQUFlLEdBQTRCLElBQUksaURBQXVCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzlILGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFFeEIsTUFBTSxVQUFVLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUM7WUFFaEYsTUFBTSxNQUFNLEdBQUcseUJBQXlCLEVBQUU7WUFDMUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0I7Z0JBQ3RELENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO2dCQUM3RSxDQUFDLENBQUMsU0FBUztZQUVmLElBQUksYUFBcUI7WUFDekIsSUFBSSxXQUE2QjtZQUNqQyxJQUFJLHVCQUErQjtZQUVuQyxJQUFJLFdBQVcsRUFBRTtnQkFDYixhQUFhLEdBQUcsV0FBVyxDQUFDLE9BQU87Z0JBQ25DLHVCQUF1QixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDO2dCQUMzRCxXQUFXLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsc0JBQXNCLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7YUFDcEk7aUJBQU07Z0JBQ0gsVUFBVSxDQUFDLFNBQVMsR0FBRyxxQ0FBcUMseUJBQVcsR0FBRSxRQUFRO2dCQUNqRiw2QkFBZSxFQUFDLFVBQVUsQ0FBQztnQkFFM0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsR0FBRyxNQUFNLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztnQkFDbkksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLE1BQU07Z0JBQ2hDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFO2dCQUNwQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsbUJBQVEsQ0FBQyxRQUFpQyxDQUFDO2dCQUNuRSxnQkFBZ0IsQ0FBQyxVQUFVLEdBQUcsYUFBYSxJQUFJLEVBQUU7Z0JBQ2pELGFBQWEsR0FBRyxvQkFBb0I7Z0JBRXBDLG9GQUFvRjtnQkFDcEYsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7Z0JBQ25FLHVCQUF1QixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUM1RSxNQUFNLGtCQUFrQixHQUFHLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLHVCQUF1QjtnQkFFMUYsV0FBVyxHQUFHLE1BQU0sY0FBYyxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsQ0FBQzthQUNqRztZQUVELGdCQUFnQixDQUFDLG1CQUFtQixHQUFHLE1BQU07WUFDN0MsZ0JBQWdCLENBQUMsYUFBYSxHQUFHLGFBQWE7WUFFOUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLEVBQUMsNkJBQTZCO1lBQ3ZELE1BQU0sU0FBUyxHQUFHLGdCQUFnQixDQUFDLFlBQVksRUFBRTtZQUVqRCxxR0FBcUc7WUFDckcsNkZBQTZGO1lBQzdGLE1BQU0saUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLG1CQUFRLENBQUMsS0FBSztZQUNsRSxNQUFNLHVCQUF1QixHQUFHLGdCQUFnQixDQUFDLElBQUksS0FBSyxtQkFBUSxDQUFDLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUssbUJBQVEsQ0FBQyxNQUFNO1lBRXhILG9HQUFvRztZQUNwRyxJQUFJLGlCQUFpQixJQUFJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQywyQkFBMkIsRUFBRTtnQkFDbEYsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSw2QkFBNkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEk7WUFFRCw2SEFBNkg7WUFDN0gscUhBQXFIO1lBQ3JILGdIQUFnSDtZQUNoSCxNQUFNLHNCQUFzQixHQUFHLENBQUMsaUJBQWlCLElBQUksdUJBQXVCLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsMkJBQTJCLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3BMLElBQUkscUJBQXFCLEdBQUcsQ0FBQyxzQkFBc0I7WUFDbkQsTUFBTSxpQkFBaUIsR0FBa0Isc0JBQXNCO2dCQUMzRCxDQUFDLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLElBQUksZ0JBQWdCLENBQUMsbUJBQW1CLEtBQUssTUFBTTt3QkFBRSxPQUFNO29CQUN2RixNQUFNLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUM1Qyw2R0FBNkc7b0JBQzdHLE1BQU0sU0FBUyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLE9BQU8sQ0FBQztvQkFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNO3dCQUFFLE9BQU07b0JBQzdCLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLHFCQUFxQixHQUFHLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBRXZCLE1BQU0sZUFBZSxHQUFHLEdBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSyxtQkFBUSxDQUFDLEtBQUssSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsMkJBQTJCO1lBRTlJLE1BQU0sVUFBVSxHQUF1QixJQUFJLHVDQUFrQixDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztZQUNuSSxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFhLEVBQUUsRUFBRTtnQkFDdEMsQ0FBQyxDQUFDLGVBQWUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFBRSxPQUFNO2dCQUU5QixVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixNQUFNLFVBQVUsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDaEYsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFO2dCQUV6QixrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQztnQkFDakosTUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCO2dCQUV4RCxJQUFJLHFCQUFxQjtvQkFBRSxPQUFNO2dCQUVqQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDN0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxTQUFTLEdBQUcseUJBQVcsR0FBRTtnQkFDakMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7Z0JBQy9CLDZCQUFlLEVBQUMsT0FBTyxDQUFDO2dCQUV4QixNQUFNLGlCQUFpQjtnQkFDdkIsc0dBQXNHO2dCQUN0RyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztvQkFBRSxPQUFNO2dCQUUzRCxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNoQixVQUFVLENBQUMsU0FBUyxHQUFHLEVBQUU7Z0JBQ3pCLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDO1lBQ3JKLENBQUMsQ0FBQztZQUNGLFVBQVUsQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDM0MsVUFBVSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUV4QyxNQUFNLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixDQUFDO1lBQ25LLFVBQVUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFNBQVMsSUFBSSxFQUFFLENBQUM7WUFDakUsVUFBVSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxJQUFJLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsY0FBYyxJQUFJLENBQUMsQ0FBQztZQUNqSSxJQUFJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxLQUFLLDZCQUFxQixFQUFFO2dCQUM3SCxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7cUJBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDcEc7WUFFRCwrQ0FBK0M7WUFDL0MsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztZQUNoRSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMscUZBQXFGLEVBQUUsZ0JBQWdCLENBQUM7YUFDeEg7WUFDRCxVQUFVLEVBQUUsYUFBYSxDQUFDLGNBQWMsRUFBRTtRQUM5QyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVMsZUFBZTtRQUNwQix1REFBdUQ7UUFDdkQsUUFBUSxDQUFDLGFBQWEsQ0FBbUIsdUJBQXVCLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7UUFDdkgseUJBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFO1FBRWpELHNCQUFzQixHQUFHLEtBQUssRUFBQyw0QkFBNEI7SUFDL0QsQ0FBQztJQUVELFNBQVMsc0JBQXNCO1FBQzNCLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsS0FBSyxJQUFJO0lBQzNGLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvQmFzZVRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0dyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9JdGVtRGV0YWlscy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9MaXN0RWxlbWVudFRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUXVpY2tBY3Rpb25zL0Zhdm9yaXRlSWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9QbGF5U3RhdGVJY29uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvU3Bpbm5lci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvRW5kcG9pbnRzLnRzIiwid2VicGFjazovLy8uL1dlYi9MaXN0RWxlbWVudEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9JdGVtVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1BsdWdpblNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9TZXJ2ZXJTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvRGF0YUZldGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvUGxheWJhY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9XZWIvSW5QbGF5ZXJQcmV2aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVGVtcGxhdGUge1xuICAgIC8qXG4gICAgICogdGhlIEhUTUwgYmFzZWQgSUQgb2YgdGhlIG5ldyBnZW5lcmF0ZWQgRWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZWxlbWVudElkOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50LCBwcml2YXRlIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7IH1cblxuICAgIHB1YmxpYyBnZXRDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkFmdGVySW5kZXg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEVsZW1lbnRJZChlbGVtZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRJZDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmdldEVsZW1lbnRJZCgpfWApO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBzdHJpbmc7XG5cbiAgICBhYnN0cmFjdCByZW5kZXIoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IHZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgYWRkRWxlbWVudFRvQ29udGFpbmVyKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIC8vIEFkZCBFbGVtZW50IGFzIHRoZSBmaXJzdCBjaGlsZCBpZiBwb3NpdGlvbiBpcyBuZWdhdGl2ZVxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSA8IDAgJiYgdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZmlyc3RFbGVtZW50Q2hpbGQuYmVmb3JlKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgaWYgY29udGFpbmVyIGlzIGVtcHR5XG4gICAgICAgIGlmICghdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuaW5uZXJIVE1MID0gdGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGlsZEJlZm9yZSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkubGFzdEVsZW1lbnRDaGlsZFxuICAgICAgICBpZiAodGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpICYmIHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgPj0gMClcbiAgICAgICAgICAgIGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlblt0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpXTtcbiAgICAgICAgXG4gICAgICAgIGNoaWxkQmVmb3JlLmFmdGVyKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgc3RyaW5nVG9Ob2RlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcpOiBOb2RlIHtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHRlbXBsYXRlU3RyaW5nO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBkaWFsb2dCYWNrZHJvcElkID0gJ2RpYWxvZ0JhY2tkcm9wJ1xuICAgIGRpYWxvZ0NvbnRhaW5lcklkID0gJ2RpYWxvZ0NvbnRhaW5lcidcbiAgICBwb3B1cENvbnRlbnRDb250YWluZXJJZCA9ICdwb3B1cENvbnRlbnRDb250YWluZXInXG4gICAgcG9wdXBGb2N1c0NvbnRhaW5lcklkID0gJ3BvcHVwRm9jdXNDb250YWluZXInXG4gICAgXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncHJldmlld1BvcHVwJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5kaWFsb2dCYWNrZHJvcElkfVwiIGNsYXNzPVwiZGlhbG9nQmFja2Ryb3AgZGlhbG9nQmFja2Ryb3BPcGVuZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmRpYWxvZ0NvbnRhaW5lcklkfVwiIGNsYXNzPVwiZGlhbG9nQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBGb2N1c0NvbnRhaW5lcklkfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb2N1c2NvbnRhaW5lciBkaWFsb2cgYWN0aW9uc2hlZXQtbm90LWZ1bGxzY3JlZW4gYWN0aW9uU2hlZXQgY2VudGVyZWREaWFsb2cgb3BlbmVkIHByZXZpZXdQb3B1cCBhY3Rpb25TaGVldENvbnRlbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlzdG9yeT1cInRydWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmVtb3Zlb25jbG9zZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBDb250ZW50Q29udGFpbmVySWR9XCIgY2xhc3M9XCJhY3Rpb25TaGVldFNjcm9sbGVyIHNjcm9sbFkgcHJldmlld1BvcHVwU2Nyb2xsZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRFbGVtZW50SWQoKSkpXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge2Zvcm1hdFdhdGNoZWRDb3VudCwgR3JvdXB9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZ3JvdXA6IEdyb3VwLCBwcml2YXRlIGlzQ3VycmVudEdyb3VwOiBib29sZWFuLCBwcml2YXRlIHNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgZ3JvdXAtJHtncm91cC5ncm91cElkfWApO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5ncm91cC5ncm91cElkfVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7dGhpcy5pc0N1cnJlbnRHcm91cCA/IFwibWF0ZXJpYWwtaWNvbnMgY2hlY2tcIiA6IFwiXCJ9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdEl0ZW1Cb2R5IGFjdGlvbnNoZWV0TGlzdEl0ZW1Cb2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuZ3JvdXAuZ3JvdXBOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5zaG93V2F0Y2hlZENvdW50ID8gYDxkaXYgY2xhc3M9XCJwcmV2aWV3R3JvdXBXYXRjaGVkQ291bnRcIj4ke2Zvcm1hdFdhdGNoZWRDb3VudCh0aGlzLmdyb3VwLnBsYXllZEl0ZW1Db3VudCwgdGhpcy5ncm91cC50b3RhbEl0ZW1Db3VudCl9PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4gY2xpY2tIYW5kbGVyKGUpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsc1RlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBpdGVtLSR7aXRlbS5JZH1gKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfS1kZXRhaWxzXCIgY2xhc3M9XCJpdGVtTWlzY0luZm8gaXRlbU1pc2NJbmZvLXByaW1hcnkgcHJldmlld0l0ZW1EZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uUHJlbWllcmVEYXRlID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICR7KG5ldyBEYXRlKHRoaXMuaXRlbS5QcmVtaWVyZURhdGUpKS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5nZXRMb2NhbGUoKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+JHt0aGlzLmZvcm1hdFJ1blRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ29tbXVuaXR5UmF0aW5nID8gYDxkaXYgY2xhc3M9XCJzdGFyUmF0aW5nQ29udGFpbmVyIG1lZGlhSW5mb0l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBzdGFySWNvbiBzdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Db21tdW5pdHlSYXRpbmcudG9GaXhlZCgxKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtIG1lZGlhSW5mb0NyaXRpY1JhdGluZyAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmcgPj0gNjAgPyAnbWVkaWFJbmZvQ3JpdGljUmF0aW5nRnJlc2gnIDogJ21lZGlhSW5mb0NyaXRpY1JhdGluZ1JvdHRlbid9XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZHNBdCBtZWRpYUluZm9JdGVtXCI+JHt0aGlzLmZvcm1hdEVuZFRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcywgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TG9jYWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubGFuZ3VhZ2VzXG4gICAgICAgICAgICA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gLy8gQHRzLWlnbm9yZSBmb3IgdXNlckxhbmd1YWdlICh0aGlzIGFkZHMgc3VwcG9ydCBmb3IgSUUpIFRPRE86IE1vdmUgdG8gaW50ZXJmYWNlXG4gICAgICAgICAgICA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRSdW5UaW1lKHRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBmb3JtYXQgdGhlIHRpY2tzIHRvIGEgc3RyaW5nIHdpdGggbWludXRlcyBhbmQgaG91cnNcbiAgICAgICAgdGlja3MgLz0gMTAwMDA7IC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCk7XG4gICAgICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgICAgIGxldCBob3Vyc1N0cmluZzogc3RyaW5nID0gaG91cnMgPiAwID8gYCR7aG91cnN9aCBgIDogJyc7XG4gICAgICAgIHJldHVybiBgJHtob3Vyc1N0cmluZ30ke21pbnV0ZXN9bWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRFbmRUaW1lKHJ1bnRpbWVUaWNrczogbnVtYmVyLCBwbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIHJ1bnRpbWVUaWNrcyAvPSAxMDAwMDtcbiAgICAgICAgcGxheWJhY2tQb3NpdGlvblRpY2tzIC89IDEwMDAwO1xuXG4gICAgICAgIGxldCB0aWNrczogbnVtYmVyID0gRGF0ZS5ub3coKSArIChydW50aW1lVGlja3MpO1xuICAgICAgICB0aWNrcyAtPSAobmV3IERhdGUoKSkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDsgLy8gYWRqdXN0IGZvciB0aW1lem9uZVxuICAgICAgICB0aWNrcyAtPSBwbGF5YmFja1Bvc2l0aW9uVGlja3M7IC8vIHN1YnRyYWN0IHRoZSBwbGF5YmFjayBwb3NpdGlvblxuXG4gICAgICAgIGxldCBob3Vyczogc3RyaW5nID0gdGhpcy56ZXJvUGFkKE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDM2MDApICUgMjQpKTtcbiAgICAgICAgbGV0IG1pbnV0ZXM6IHN0cmluZyA9IHRoaXMuemVyb1BhZChNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCkpO1xuXG4gICAgICAgIHJldHVybiBgRW5kcyBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHplcm9QYWQobnVtOiBudW1iZXIsIHBsYWNlczogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBTdHJpbmcobnVtKS5wYWRTdGFydChwbGFjZXMsICcwJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge0Zhdm9yaXRlSWNvblRlbXBsYXRlfSBmcm9tIFwiLi9RdWlja0FjdGlvbnMvRmF2b3JpdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5U3RhdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9QbGF5U3RhdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIlxuaW1wb3J0IHtJdGVtRGV0YWlsc1RlbXBsYXRlfSBmcm9tIFwiLi9JdGVtRGV0YWlsc1wiXG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiXG5pbXBvcnQge3RvZ2dsZVBsYXllZFN0YXRlTG9jYWxseX0gZnJvbSBcIi4uL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCJcblxuLy8gU2hvd3MvaGlkZXMgdGhlIFwic3RhcnQgcGxheWJhY2tcIiBvdmVybGF5IGZvciBhIHJlbmRlcmVkIGxpc3QgaXRlbVxuZXhwb3J0IGZ1bmN0aW9uIHNldEl0ZW1PdmVybGF5QWN0aXZlKGl0ZW1JZDogc3RyaW5nLCBpc0FjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJkT3ZlcmxheS0ke2l0ZW1JZH1gKT8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGlzQWN0aXZlKVxufVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBxdWlja0FjdGlvbkNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgICBwcml2YXRlIHBsYXlTdGF0ZUljb246IFBsYXlTdGF0ZUljb25UZW1wbGF0ZVxuICAgIHByaXZhdGUgZmF2b3JpdGVJY29uOiBGYXZvcml0ZUljb25UZW1wbGF0ZVxuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0sIHByaXZhdGUgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGl0ZW0tJHtpdGVtLklkfWApXG5cbiAgICAgICAgLy8gY3JlYXRlIHRlbXAgcXVpY2sgYWN0aW9uIGNvbnRhaW5lclxuICAgICAgICB0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICAvLyBjcmVhdGUgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24gPSBuZXcgUGxheVN0YXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIC0xLCB0aGlzLml0ZW0pXG4gICAgICAgIHRoaXMuZmF2b3JpdGVJY29uID0gbmV3IEZhdm9yaXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIDAsIHRoaXMuaXRlbSlcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBhZGQgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24ucmVuZGVyKClcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24ucmVuZGVyKClcblxuICAgICAgICAvLyBhZGQgaXRlbSBkZXRhaWxzL2luZm9cbiAgICAgICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBkZXRhaWxzOiBJdGVtRGV0YWlsc1RlbXBsYXRlID0gbmV3IEl0ZW1EZXRhaWxzVGVtcGxhdGUoZGV0YWlsc0NvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSlcbiAgICAgICAgZGV0YWlscy5yZW5kZXIoKVxuXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZVN0eWxlOiBzdHJpbmcgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9JdGVtcy8ke3RoaXMuaXRlbS5JZH0vSW1hZ2VzL1ByaW1hcnk/dGFnPSR7dGhpcy5pdGVtLlByaW1hcnlJbWFnZVRhZ30nKWBcblxuICAgICAgICBjb25zdCBzaG91bGRCbHVyOiBib29sZWFuID0gISh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuT25seUJsdXJVbndhdGNoZWQgJiYgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZClcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdEl0ZW0gbGlzdEl0ZW0tYnV0dG9uIGFjdGlvblNoZWV0TWVudUl0ZW0gZW1ieS1idXR0b24gcHJldmlld0xpc3RJdGVtXCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbS5JZH1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld0l0ZW1UaXRsZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0uSW5kZXhOdW1iZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUgIT09IEl0ZW1UeXBlLk1vdmllXG4gICAgICAgICAgICAgICAgICAgICAgICApID8gYDxzcGFuPiR7dGhpcy5pdGVtLkluZGV4TnVtYmVyfTwvc3Bhbj5gIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdEl0ZW1Cb2R5IGFjdGlvbnNoZWV0TGlzdEl0ZW1Cb2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25TaGVldEl0ZW1UZXh0XCI+JHt0aGlzLml0ZW0uTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0xpc3RJdGVtQ29udGVudCBoaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHByZXZpZXdJdGVtQ29udGVudFJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgb3ZlcmZsb3dCYWNrZHJvcENhcmQgY2FyZC1ob3ZlcmFibGUgY2FyZC13aXRodXNlcmRhdGEgcHJldmlld0l0ZW1JbWFnZUNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZEJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFNjYWxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFBhZGRlciBjYXJkUGFkZGVyLW92ZXJmbG93QmFja2Ryb3AgbGF6eS1oaWRkZW4tY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmRJbWFnZUljb24gbWF0ZXJpYWwtaWNvbnMgdHZcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwcmV2aWV3SXRlbUltYWdlQ2FyZC0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRJbWFnZUNvbnRhaW5lciBjYXJkQ29udGVudCBpdGVtQWN0aW9uIGxhenkgYmx1cmhhc2hlZCBsYXp5LWltYWdlLWZhZGVpbi1mYXN0ICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkJsdXJUaHVtYm5haWwgJiYgc2hvdWxkQmx1ciA/ICdibHVyJyA6ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiJHtiYWNrZ3JvdW5kSW1hZ2VTdHlsZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJpbm5lckNhcmRGb290ZXIgZnVsbElubmVyQ2FyZEZvb3RlciBpbm5lckNhcmRGb290ZXJDbGVhciBpdGVtUHJvZ3Jlc3NCYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1Qcm9ncmVzc0JhckZvcmVncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoke3RoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlfSU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmRPdmVybGF5LSR7dGhpcy5pdGVtLklkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZE92ZXJsYXlDb250YWluZXIgaXRlbUFjdGlvbiAke3RoaXMuaXRlbS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPyAnaGlkZScgOiAnJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3RhcnQtaXRlbS0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5QnV0dG9uIGNhcmRPdmVybGF5QnV0dG9uLWhvdmVyIGl0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgY2FyZE92ZXJsYXlGYWItcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cInJlc3VtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNhcmRPdmVybGF5QnV0dG9uSWNvbiBjYXJkT3ZlcmxheUJ1dHRvbkljb24taG92ZXIgcGxheV9hcnJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkJsdXJEZXNjcmlwdGlvbiAmJiBzaG91bGRCbHVyID8gJ2JsdXInIDogJyd9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkRlc2NyaXB0aW9uID8/ICdsb2FkaW5nLi4uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIGhpZGVcIj5SZWFkIG1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbGlja0hhbmRsZXIoZSkpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGF5U3RhdGVCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXlTdGF0ZUJ1dHRvbi0ke3RoaXMuaXRlbS5JZH1gKVxuICAgICAgICBwbGF5U3RhdGVCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHRvZ2dsZVBsYXllZFN0YXRlTG9jYWxseSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHRoaXMuaXRlbS5JZClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1JbWFnZUNhcmQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0YXJ0LWl0ZW0tJHt0aGlzLml0ZW0uSWR9YClcbiAgICAgICAgaXRlbUltYWdlQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucGxheWJhY2tIYW5kbGVyLnBsYXkodGhpcy5pdGVtLklkLCB0aGlzLml0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKSlcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge2Zvcm1hdFdhdGNoZWRDb3VudH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBUaXRsZVRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3UG9wdXBUaXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicG9wdXBUaXRsZVN3aXRjaEljb25cIiBjbGFzcz1cImFjdGlvbnNoZWV0TWVudUl0ZW1JY29uIGxpc3RJdGVtSWNvbiBsaXN0SXRlbUljb24tdHJhbnNwYXJlbnQgbWF0ZXJpYWwtaWNvbnMga2V5Ym9hcmRfYmFja3NwYWNlICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5sZW5ndGggPiAxID8gJycgOiAnaGlkZSd9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImFjdGlvblNoZWV0VGl0bGVcIj48L2gxPlxuICAgICAgICAgICAgICAgICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgPyAnPGRpdiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFwiPjwvZGl2PicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lclRleHQgPSB0ZXh0XG4gICAgfVxuXG4gICAgcHVibGljIHNldFN3aXRjaGFibGUoc3dpdGNoYWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI3BvcHVwVGl0bGVTd2l0Y2hJY29uJyk/LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhc3dpdGNoYWJsZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0V2F0Y2hlZENvdW50KHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHdhdGNoZWRDb3VudEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCcpXG4gICAgICAgIGlmICh3YXRjaGVkQ291bnRFbGVtZW50KSB3YXRjaGVkQ291bnRFbGVtZW50LmlubmVyVGV4dCA9IGZvcm1hdFdhdGNoZWRDb3VudChwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50KVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0VmlzaWJsZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KClcbiAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFByZXZpZXdCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBQcmV2aWV3QnV0dG9uJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImF1dG9TaXplIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCIgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXBpc29kZSBQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+XG4gICAgICAgICAgICAgICAgPHN2ZyBpZD1cInN2ZzFcIlxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYgNFwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwibGF5ZXIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3Q0N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NjQ2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzLjc1Njg2NzZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMi4xNjkzNjYxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIwLjIzODIzMzAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIxLjgyNTczMzVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc2NTk3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjAyOTE0MzcsMS4wMzIwNDgyIGggMy43NTI4OTkxIHYgMi4xNzIyMzk0IGwgMC4wMDY3NiwtMi4xNTcyNTk1IHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny04XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc3NDI3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjgyMjg2MTQsMC4yMzg3MTMzNiBoIDMuNzU5MjU5IFYgMi40MTAxMjExIGwgLTAuMDA2OCwtMi4xNzE0MDc3NCB6XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiBhbnkgPT4gY2xpY2tIYW5kbGVyKCkpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ2Zhdm9yaXRlQnV0dG9uLScgKyBpdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXJhdGluZ2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0/LklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuaXRlbT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pc2Zhdm9yaXRlPVwiJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5Jc0Zhdm9yaXRlID8/IGZhbHNlfVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZmF2b3JpdGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIFBsYXlTdGF0ZUljb25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwbGF5U3RhdGVCdXR0b24tJyArIHRoaXMuaXRlbS5JZClcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1wbGF5c3RhdGVidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5pdGVtPy5JZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNlcnZlcmlkPVwiJHt0aGlzLml0ZW0/LlNlcnZlcklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbXR5cGU9XCJFcGlzb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1saWtlcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGxheWVkPVwiJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5QbGF5ZWQgPz8gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNYXJrIHBsYXllZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2hlY2sgcGxheXN0YXRlYnV0dG9uLWljb24tJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5QbGF5ZWQgPyBcInBsYXllZFwiIDogXCJ1bnBsYXllZFwifVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn1cbiIsImNvbnN0IFNQSU5ORVJfTEFZRVJTX0hUTUw6IHN0cmluZyA9IFsxLCAyLCAzLCA0XS5tYXAobGF5ZXIgPT5cbiAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19sYXllciBtZGwtc3Bpbm5lcl9fbGF5ZXItJHtsYXllcn1cIj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXIgbWRsLXNwaW5uZXJfX2xlZnRcIj5gICtcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZSBtZGwtc3Bpbm5lcl9fY2lyY2xlTGVmdFwiPjwvZGl2PmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZS1jbGlwcGVyIG1kbC1zcGlubmVyX19yaWdodFwiPmAgK1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlIG1kbC1zcGlubmVyX19jaXJjbGVSaWdodFwiPjwvZGl2PmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgYDwvZGl2PmBcbikuam9pbignJylcblxuZXhwb3J0IGZ1bmN0aW9uIHNwaW5uZXJIdG1sKGV4dHJhQ2xhc3Nlczogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdiBkaXI9XCJsdHJcIiBjbGFzcz1cImRvY3NwaW5uZXIgbWRsLXNwaW5uZXIgJHtleHRyYUNsYXNzZXN9XCI+JHtTUElOTkVSX0xBWUVSU19IVE1MfTwvZGl2PmBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlU3Bpbm5lcihjb250YWluZXI6IFBhcmVudE5vZGUpOiB2b2lkIHtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm1kbC1zcGlubmVyJyk/LmNsYXNzTGlzdC5hZGQoJ21kbFNwaW5uZXJBY3RpdmUnKVxufSIsImV4cG9ydCBlbnVtIEVuZHBvaW50cyB7XG4gICAgQkFTRSA9IFwiSW5QbGF5ZXJQcmV2aWV3XCIsXG4gICAgSVRFTV9ERVNDUklQVElPTiA9IFwiL0l0ZW1zL3tpdGVtSWR9XCIsXG4gICAgUExBWV9NRURJQSA9IFwiL0l0ZW1zL3tpdGVtSWR9L1BsYXkve3RpY2tzfVwiLFxuICAgIE5PV19QTEFZSU5HX0lURU0gPSBcIi9Ob3dQbGF5aW5nSXRlbVwiLFxuICAgIFNFUlZFUl9TRVRUSU5HUyA9IFwiL1NlcnZlclNldHRpbmdzXCIsXG4gICAgSVRFTV9QUkVWSUVXX0RBVEEgPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L0l0ZW1zL3tpdGVtSWR9L1ByZXZpZXdEYXRhXCIsXG4gICAgR1JPVVBfSVRFTVMgPSBcIi9Vc2Vycy97dXNlcklkfS9Hcm91cHMve2dyb3VwSWR9L0l0ZW1zXCIsXG4gICAgR1JPVVBfV0FUQ0hFRF9DT1VOVCA9IFwiL1VzZXJzL3t1c2VySWR9L0dyb3Vwcy97Z3JvdXBJZH0vV2F0Y2hlZENvdW50XCIsXG4gICAgQ09OVEFJTklOR19DT0xMRUNUSU9OUyA9IFwiL1VzZXJzL3t1c2VySWR9L0l0ZW1zL3tpdGVtSWR9L0NvbnRhaW5pbmdDb2xsZWN0aW9uc1wiLFxuICAgIFNFVF9TT1VSQ0VfQ09MTEVDVElPTiA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vU291cmNlQ29sbGVjdGlvbi97Y29sbGVjdGlvbklkfVwiXG59IiwiaW1wb3J0IHtMaXN0RWxlbWVudFRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge0dyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtHcm91cExpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlXCI7XG5pbXBvcnQge1BvcHVwVGl0bGVUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGVcIjtcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi9FbmRwb2ludHNcIjtcbmltcG9ydCB7R3JvdXBJdGVtc1Jlc3VsdH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwSXRlbXNSZXN1bHRcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHthY3RpdmF0ZVNwaW5uZXIsIHNwaW5uZXJIdG1sfSBmcm9tIFwiLi9Db21wb25lbnRzL1NwaW5uZXJcIjtcbmltcG9ydCB7dXBkYXRlV2F0Y2hlZENvdW50RG9tfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiO1xuXG4vLyBUaGUgYmFja2VuZCBhbHJlYWR5IHJldHVybnMgUGxheWxpc3RzL0JveFNldHMgYW5kIEZvbGRlcnMgaW4gdGhlaXIgb3duIG1hbnVhbCBpdGVtL2Rpc3NwbGF5IG9yZGVyXG4vLyBzb3J0aW5nIHNob3VsZCBvbmx5IGFwcGx5IGZvciBzZWFzb24tYmFzZWQgKEVwaXNvZGUpIGdyb3Vwcywgd2hlcmUgaXQgcmVmbGVjdHMgYWN0dWFsIGVwaXNvZGUgb3JkZXIuXG5jb25zdCBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzOiBTZXQ8SXRlbVR5cGU+ID0gbmV3IFNldChbSXRlbVR5cGUuUGxheWxpc3QsIEl0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuRm9sZGVyXSlcblxuZXhwb3J0IGNsYXNzIExpc3RFbGVtZW50RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF5YmFja0hhbmRsZXI6IFBsYXliYWNrSGFuZGxlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7IH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVJdGVtRWxlbWVudHMoaXRlbXM6IFByZXZpZXdJdGVtW10sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIG9mZnNldDogbnVtYmVyID0gMCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBwcmVzZXJ2ZU9yZGVyID0gcHJlc2VydmVCYWNrZW5kT3JkZXJUeXBlcy5oYXModGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUpXG4gICAgICAgIGlmICghcHJlc2VydmVPcmRlcilcbiAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGEuSW5kZXhOdW1iZXIgLSBiLkluZGV4TnVtYmVyKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gRm9yIFBsYXlsaXN0cy9Cb3hTZXRzLCBzaG93IHRoZSBhY3R1YWwgbGlzdCBwb3NpdGlvbiBpbnN0ZWFkIG9mIHRoZSBJbmRleE51bWJlciBmcm9tIHRoZWlyIHNlYXNvbi9lcGlzb2RlLlxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHByZXNlcnZlT3JkZXIgPyB7IC4uLml0ZW1zW2ldLCBJbmRleE51bWJlcjogb2Zmc2V0ICsgaSArIDEgfSA6IGl0ZW1zW2ldXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlbmRlckl0ZW0oaXRlbSwgcGFyZW50RGl2LCBvZmZzZXQgKyBpKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBhc3luYyBwcmVwZW5kSXRlbUVsZW1lbnRzKGl0ZW1zOiBQcmV2aWV3SXRlbVtdLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50LCBvZmZzZXQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBwcmVzZXJ2ZU9yZGVyID0gcHJlc2VydmVCYWNrZW5kT3JkZXJUeXBlcy5oYXModGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUpXG4gICAgICAgIGlmICghcHJlc2VydmVPcmRlcilcbiAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGEuSW5kZXhOdW1iZXIgLSBiLkluZGV4TnVtYmVyKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcHJlc2VydmVPcmRlciA/IHsgLi4uaXRlbXNbaV0sIEluZGV4TnVtYmVyOiBvZmZzZXQgKyBpICsgMSB9IDogaXRlbXNbaV1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVySXRlbShpdGVtLCBwYXJlbnREaXYsIC0xKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2hvdyBhIFwiUmVhZCBtb3JlXCIgYnV0dG9uIGlmIGRlc2NyaXB0aW9uIGV4Y2VlZHMgbWF4IGhlaWdodFxuICAgIHByaXZhdGUgYXBwbHlEZXNjcmlwdGlvblJlYWRNb3JlKGl0ZW1Db250YWluZXI6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBpdGVtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0l0ZW1EZXNjcmlwdGlvbicpXG4gICAgICAgIGNvbnN0IHJlYWRNb3JlQnV0dG9uID0gaXRlbUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b24nKVxuICAgICAgICBpZiAoIWRlc2NyaXB0aW9uIHx8ICFyZWFkTW9yZUJ1dHRvbikgcmV0dXJuXG5cbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKVxuICAgICAgICByZWFkTW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZWFkIG1vcmUnXG5cbiAgICAgICAgY29uc3QgaXNPdmVyZmxvd2luZyA9IGRlc2NyaXB0aW9uLnNjcm9sbEhlaWdodCA+IGRlc2NyaXB0aW9uLmNsaWVudEhlaWdodFxuICAgICAgICByZWFkTW9yZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIWlzT3ZlcmZsb3dpbmcpXG4gICAgICAgIGlmICghaXNPdmVyZmxvd2luZykgcmV0dXJuXG5cbiAgICAgICAgcmVhZE1vcmVCdXR0b24ub25jbGljayA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBjb25zdCBleHBhbmRlZCA9IGRlc2NyaXB0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJylcbiAgICAgICAgICAgIHJlYWRNb3JlQnV0dG9uLnRleHRDb250ZW50ID0gZXhwYW5kZWQgPyAnUmVhZCBsZXNzJyA6ICdSZWFkIG1vcmUnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJlbmRlckl0ZW0oaXRlbTogUHJldmlld0l0ZW0sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGl0ZW1MaXN0RWxlbWVudFRlbXBsYXRlID0gbmV3IExpc3RFbGVtZW50VGVtcGxhdGUocGFyZW50RGl2LCBwb3NpdGlvbkFmdGVySW5kZXgsIGl0ZW0sIHRoaXMucGxheWJhY2tIYW5kbGVyLCB0aGlzLnByb2dyYW1EYXRhU3RvcmUpO1xuICAgICAgICBpdGVtTGlzdEVsZW1lbnRUZW1wbGF0ZS5yZW5kZXIoYXN5bmMgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIGhpZGUgaXRlbSBjb250ZW50IGZvciBhbGwgZXhpc3RpbmcgaXRlbXMgaW4gdGhlIHByZXZpZXcgbGlzdFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50XCIpLmZvckVhY2goKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyOiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tJHtpdGVtLklkfWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XG5cbiAgICAgICAgICAgIC8vIGxvYWQgaXRlbSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgaWYgKCFpdGVtLkRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuSVRFTV9ERVNDUklQVElPTn1gXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW0uSWQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbjogc3RyaW5nID0gcmVzdWx0Py5EZXNjcmlwdGlvblxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNob3cgaXRlbSBjb250ZW50IGZvciB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlEZXNjcmlwdGlvblJlYWRNb3JlKGl0ZW1Db250YWluZXIpO1xuXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpdGVtLklkID09PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCkge1xuICAgICAgICAgICAgY29uc3QgaXRlbU5vZGU6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS0ke2l0ZW0uSWR9YCkucXVlcnlTZWxlY3RvcignLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQnKTtcblxuICAgICAgICAgICAgLy8gcHJlbG9hZCBkZXNjcmlwdGlvbiBmb3IgdGhlIGN1cnJlbnRseSBwbGF5aW5nIGl0ZW1cbiAgICAgICAgICAgIGlmICghaXRlbS5EZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLklURU1fREVTQ1JJUFRJT059YFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtLklkKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb246IHN0cmluZyA9IHJlc3VsdD8uRGVzY3JpcHRpb25cblxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpdGVtTm9kZS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0l0ZW1EZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gbmV3RGVzY3JpcHRpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgaXRlbU5vZGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICAgICAgdGhpcy5hcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbU5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3dhcHMgYW4gaWRsZSBzZW50aW5lbCBtYXJrZXIgaW50byBhIHZpc2libGUgc3Bpbm5lciBvbmNlIGl0J3MgYWN0dWFsbHkgdHJpZ2dlcmVkIGEgcGFnZSBsb2FkLlxuICAgIHByaXZhdGUgc2hvd1NlbnRpbmVsU3Bpbm5lcihzZW50aW5lbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgc2VudGluZWwuY2xhc3NMaXN0LmFkZCgncHJldmlld1Njcm9sbFNwaW5uZXInKVxuICAgICAgICBzZW50aW5lbC5pbm5lckhUTUwgPSBzcGlubmVySHRtbCgpXG4gICAgICAgIGFjdGl2YXRlU3Bpbm5lcihzZW50aW5lbClcbiAgICB9XG5cbiAgICAvLyBBcHBlbmRzIHBhZ2VzIHdoZW4gc2Nyb2xsaW5nIHRvIHRoZSBib3R0b20uXG4gICAgcHJpdmF0ZSBhZGRTY3JvbGxTZW50aW5lbChcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgbG9hZFBhZ2U6IChzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4sXG4gICAgICAgIG5leHRTdGFydEluZGV4OiBudW1iZXIsXG4gICAgICAgIHRvdGFsTG9hZGVkOiBudW1iZXIsXG4gICAgICAgIHZpZXdUb2tlbjogbnVtYmVyXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNlbnRpbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKHNlbnRpbmVsKVxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGFzeW5jIChbZW50cnldKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSByZXR1cm5cbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgdGhpcy5zaG93U2VudGluZWxTcGlubmVyKHNlbnRpbmVsKVxuXG4gICAgICAgICAgICBjb25zdCB7IGl0ZW1zLCB0b3RhbFJlY29yZENvdW50IH0gPSBhd2FpdCBsb2FkUGFnZShuZXh0U3RhcnRJbmRleClcbiAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIHNlbnRpbmVsLnJlbW92ZSgpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtcywgcGFyZW50RGl2LCB0b3RhbExvYWRlZClcblxuICAgICAgICAgICAgY29uc3QgbmV3VG90YWxMb2FkZWQgPSB0b3RhbExvYWRlZCArIGl0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgaWYgKG5ld1RvdGFsTG9hZGVkIDwgdG90YWxSZWNvcmRDb3VudClcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNjcm9sbFNlbnRpbmVsKHBhcmVudERpdiwgbG9hZFBhZ2UsIG5ld1RvdGFsTG9hZGVkLCBuZXdUb3RhbExvYWRlZCwgdmlld1Rva2VuKVxuICAgICAgICB9LCB7IHJvb3Q6IHBhcmVudERpdiwgdGhyZXNob2xkOiAwIH0pXG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZW50aW5lbClcbiAgICB9XG5cbiAgICAvLyBQcmVwZW5kcyBwYWdlcyB3aGVuIHNjcm9sbGluZyB0byB0aGUgdG9wLlxuICAgIC8vIGN1cnJlbnRTdGFydEluZGV4IGlzIHRoZSBhYnNvbHV0ZSBpbmRleCBvZiB3aGF0ZXZlciBpcyBjdXJyZW50bHkgdGhlIGZpcnN0IGxvYWRlZCBpdGVtXG4gICAgcHJpdmF0ZSBhZGRTY3JvbGxTZW50aW5lbEJhY2t3YXJkKFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBsb2FkUGFnZTogKHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PixcbiAgICAgICAgY3VycmVudFN0YXJ0SW5kZXg6IG51bWJlcixcbiAgICAgICAgdmlld1Rva2VuOiBudW1iZXJcbiAgICApOiB2b2lkIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGFydEluZGV4IDw9IDApIHJldHVyblxuXG4gICAgICAgIGNvbnN0IHNlbnRpbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcGFyZW50RGl2Lmluc2VydEJlZm9yZShzZW50aW5lbCwgcGFyZW50RGl2LmZpcnN0Q2hpbGQpXG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoYXN5bmMgKFtlbnRyeV0pID0+IHtcbiAgICAgICAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHJldHVyblxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG5cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodEJlZm9yZVNwaW5uZXIgPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgICB0aGlzLnNob3dTZW50aW5lbFNwaW5uZXIoc2VudGluZWwpXG4gICAgICAgICAgICBwYXJlbnREaXYuc2Nyb2xsVG9wICs9IHBhcmVudERpdi5zY3JvbGxIZWlnaHQgLSBzY3JvbGxIZWlnaHRCZWZvcmVTcGlubmVyXG5cbiAgICAgICAgICAgIGNvbnN0IHBhZ2VTaXplID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZVxuICAgICAgICAgICAgY29uc3QgbmV3U3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIGN1cnJlbnRTdGFydEluZGV4IC0gcGFnZVNpemUpXG4gICAgICAgICAgICBjb25zdCB7IGl0ZW1zIH0gPSBhd2FpdCBsb2FkUGFnZShuZXdTdGFydEluZGV4KVxuICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0QmVmb3JlUHJlcGVuZCA9IHBhcmVudERpdi5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgIHNlbnRpbmVsLnJlbW92ZSgpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXMsIHBhcmVudERpdiwgbmV3U3RhcnRJbmRleClcbiAgICAgICAgICAgIHBhcmVudERpdi5zY3JvbGxUb3AgKz0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIHNjcm9sbEhlaWdodEJlZm9yZVByZXBlbmRcblxuICAgICAgICAgICAgdGhpcy5hZGRTY3JvbGxTZW50aW5lbEJhY2t3YXJkKHBhcmVudERpdiwgbG9hZFBhZ2UsIG5ld1N0YXJ0SW5kZXgsIHZpZXdUb2tlbilcbiAgICAgICAgfSwgeyByb290OiBwYXJlbnREaXYsIHRocmVzaG9sZDogMCB9KVxuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VudGluZWwpXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUxhenlJdGVtTGlzdChcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgbG9hZFBhZ2U6IChzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4sXG4gICAgICAgIHZpZXdUb2tlbjogbnVtYmVyLFxuICAgICAgICBpbml0aWFsUGFnZT86IEdyb3VwSXRlbXNSZXN1bHQsXG4gICAgICAgIGluaXRpYWxPZmZzZXQ6IG51bWJlciA9IDBcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZmlyc3RQYWdlID0gaW5pdGlhbFBhZ2UgPz8gYXdhaXQgbG9hZFBhZ2UoMClcbiAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbUVsZW1lbnRzKGZpcnN0UGFnZS5pdGVtcywgcGFyZW50RGl2LCBpbml0aWFsT2Zmc2V0KVxuXG4gICAgICAgIGNvbnN0IHRvdGFsTG9hZGVkID0gaW5pdGlhbE9mZnNldCArIGZpcnN0UGFnZS5pdGVtcy5sZW5ndGhcbiAgICAgICAgaWYgKHRvdGFsTG9hZGVkIDwgZmlyc3RQYWdlLnRvdGFsUmVjb3JkQ291bnQpXG4gICAgICAgICAgICB0aGlzLmFkZFNjcm9sbFNlbnRpbmVsKHBhcmVudERpdiwgbG9hZFBhZ2UsIHRvdGFsTG9hZGVkLCB0b3RhbExvYWRlZCwgdmlld1Rva2VuKVxuXG4gICAgICAgIHRoaXMuYWRkU2Nyb2xsU2VudGluZWxCYWNrd2FyZChwYXJlbnREaXYsIGxvYWRQYWdlLCBpbml0aWFsT2Zmc2V0LCB2aWV3VG9rZW4pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmZXRjaEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwSWQ6IHN0cmluZyk6IFByb21pc2U8eyBwbGF5ZWRJdGVtQ291bnQ6IG51bWJlciwgdG90YWxJdGVtQ291bnQ6IG51bWJlciB9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLkdST1VQX1dBVENIRURfQ09VTlR9YFxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7Z3JvdXBJZH0nLCBncm91cElkKSlcbiAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIHJldHVybiB7IHBsYXllZEl0ZW1Db3VudDogcmF3LlBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQ6IHJhdy5Ub3RhbEl0ZW1Db3VudCB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBhc3luYyBlbnN1cmVHcm91cFdhdGNoZWRDb3VudChncm91cDogR3JvdXApOiBQcm9taXNlPEdyb3VwPiB7XG4gICAgICAgIGlmIChncm91cC5wbGF5ZWRJdGVtQ291bnQgIT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkgcmV0dXJuIGdyb3VwXG5cbiAgICAgICAgY29uc3QgeyBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50IH0gPSBhd2FpdCB0aGlzLmZldGNoR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXAuZ3JvdXBJZClcbiAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnNldEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwLmdyb3VwSWQsIHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQpXG4gICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50IH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlR3JvdXBFbGVtZW50cyhcbiAgICAgICAgZ3JvdXBzOiBHcm91cFtdLFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBjdXJyZW50R3JvdXBJbmRleDogbnVtYmVyLFxuICAgICAgICB0aXRsZUNvbnRhaW5lcjogUG9wdXBUaXRsZVRlbXBsYXRlLFxuICAgICAgICBsb2FkSXRlbXM6IChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PlxuICAgICk6IHZvaWQge1xuICAgICAgICBncm91cHMuc29ydCgoYSwgYikgPT4gYS5pbmRleE51bWJlciAtIGIuaW5kZXhOdW1iZXIpXG5cbiAgICAgICAgLy8gSW52YWxpZGF0ZXMgYW55IGl0ZW0gbG9hZCBzdGlsbCBpbiBwcm9ncmVzc3NcbiAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmJlZ2luTmV3VmlldygpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlKHBhcmVudERpdiwgaSwgZ3JvdXBzW2ldLCBncm91cHNbaV0uaW5kZXhOdW1iZXIgPT09IGN1cnJlbnRHcm91cEluZGV4LCB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudClcbiAgICAgICAgICAgIGdyb3VwLnJlbmRlcihhc3luYyAoZTogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cElkID0gZ3JvdXBzW2ldLmdyb3VwSWRcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRUZXh0KGdyb3Vwc1tpXS5ncm91cE5hbWUpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFdhdGNoZWRDb3VudChncm91cHNbaV0ucGxheWVkSXRlbUNvdW50LCBncm91cHNbaV0udG90YWxJdGVtQ291bnQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cHNbaV0ucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHVwZGF0ZWQgPT4gdGl0bGVDb250YWluZXIuc2V0V2F0Y2hlZENvdW50KHVwZGF0ZWQucGxheWVkSXRlbUNvdW50LCB1cGRhdGVkLnRvdGFsSXRlbUNvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpXG5cbiAgICAgICAgICAgICAgICBwYXJlbnREaXYuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3VG9rZW4gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZCA9ICF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWRcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmZpbmQoZyA9PiBnLmdyb3VwSWQgPT09IGdyb3Vwc1tpXS5ncm91cElkKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxQYWdlOiBHcm91cEl0ZW1zUmVzdWx0IHwgdW5kZWZpbmVkID0gY2FjaGVkPy5sb2FkZWRTdGFydEluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyB7IGl0ZW1zOiBbLi4uY2FjaGVkLml0ZW1zXSwgdG90YWxSZWNvcmRDb3VudDogY2FjaGVkLmxvYWRlZFRvdGFsUmVjb3JkQ291bnQgPz8gY2FjaGVkLml0ZW1zLmxlbmd0aCB9XG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbE9mZnNldCA9IGNhY2hlZD8ubG9hZGVkU3RhcnRJbmRleCA/PyAwXG5cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUxhenlJdGVtTGlzdChwYXJlbnREaXYsIChzdGFydEluZGV4KSA9PiBsb2FkSXRlbXMoZ3JvdXBzW2ldLmdyb3VwSWQsIHN0YXJ0SW5kZXgpLCB2aWV3VG9rZW4sIGluaXRpYWxQYWdlLCBpbml0aWFsT2Zmc2V0KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50ICYmIGdyb3Vwc1tpXS5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHVwZGF0ZVdhdGNoZWRDb3VudERvbSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHVwZGF0ZWQpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gSXRlbVR5cGUge1xuICAgIEFnZ3JlZ2F0ZUZvbGRlcixcbiAgICBBdWRpbyxcbiAgICBBdWRpb0Jvb2ssXG4gICAgQmFzZVBsdWdpbkZvbGRlcixcbiAgICBCb29rLFxuICAgIEJveFNldCxcbiAgICBDaGFubmVsLFxuICAgIENoYW5uZWxGb2xkZXJJdGVtLFxuICAgIENvbGxlY3Rpb25Gb2xkZXIsXG4gICAgRXBpc29kZSxcbiAgICBGb2xkZXIsXG4gICAgR2VucmUsXG4gICAgTWFudWFsUGxheWxpc3RzRm9sZGVyLFxuICAgIE1vdmllLFxuICAgIExpdmVUdkNoYW5uZWwsXG4gICAgTGl2ZVR2UHJvZ3JhbSxcbiAgICBNdXNpY0FsYnVtLFxuICAgIE11c2ljQXJ0aXN0LFxuICAgIE11c2ljR2VucmUsXG4gICAgTXVzaWNWaWRlbyxcbiAgICBQZXJzb24sXG4gICAgUGhvdG8sXG4gICAgUGhvdG9BbGJ1bSxcbiAgICBQbGF5bGlzdCxcbiAgICBQbGF5bGlzdHNGb2xkZXIsXG4gICAgUHJvZ3JhbSxcbiAgICBSZWNvcmRpbmcsXG4gICAgU2Vhc29uLFxuICAgIFNlcmllcyxcbiAgICBTdHVkaW8sXG4gICAgVHJhaWxlcixcbiAgICBUdkNoYW5uZWwsXG4gICAgVHZQcm9ncmFtLFxuICAgIFVzZXJSb290Rm9sZGVyLFxuICAgIFVzZXJWaWV3LFxuICAgIFZpZGVvLFxuICAgIFllYXJcbn0iLCJpbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi9JdGVtVHlwZVwiO1xuXG5leHBvcnQgdHlwZSBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICBFbmFibGVkSXRlbVR5cGVzOiBJdGVtVHlwZVtdLFxuICAgIEJsdXJEZXNjcmlwdGlvbjogYm9vbGVhbixcbiAgICBCbHVyVGh1bWJuYWlsOiBib29sZWFuLFxuICAgIEVwaXNvZGVQYWdlU2l6ZTogbnVtYmVyLFxuICAgIFNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4sXG4gICAgU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zOiBib29sZWFuLFxuICAgIE9ubHlCbHVyVW53YXRjaGVkOiBib29sZWFuLFxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFBsdWdpblNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICBFbmFibGVkSXRlbVR5cGVzOiBbSXRlbVR5cGUuU2VyaWVzLCBJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLk1vdmllLCBJdGVtVHlwZS5Gb2xkZXIsIEl0ZW1UeXBlLlZpZGVvXSxcbiAgICBCbHVyRGVzY3JpcHRpb246IGZhbHNlLFxuICAgIEJsdXJUaHVtYm5haWw6IGZhbHNlLFxuICAgIEVwaXNvZGVQYWdlU2l6ZTogMTAsXG4gICAgU2hvd1dhdGNoZWRDb3VudDogdHJ1ZSxcbiAgICBTZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnM6IHRydWUsXG4gICAgT25seUJsdXJVbndhdGNoZWQ6IGZhbHNlLFxufSIsImltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuL1ByZXZpZXdJdGVtXCI7XG5cbmV4cG9ydCB0eXBlIEdyb3VwID0ge1xuICAgIGdyb3VwSWQ6IHN0cmluZ1xuICAgIGdyb3VwTmFtZTogc3RyaW5nXG4gICAgaXRlbXM6IFByZXZpZXdJdGVtW11cbiAgICBpbmRleE51bWJlcjogbnVtYmVyXG4gICAgcGxheWVkSXRlbUNvdW50OiBudW1iZXJcbiAgICB0b3RhbEl0ZW1Db3VudDogbnVtYmVyXG4gICAgbG9hZGVkU3RhcnRJbmRleD86IG51bWJlclxuICAgIGxvYWRlZEVuZEluZGV4PzogbnVtYmVyXG4gICAgbG9hZGVkVG90YWxSZWNvcmRDb3VudD86IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgVU5LTk9XTl9XQVRDSEVEX0NPVU5UID0gLTFcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFdhdGNoZWRDb3VudCA9IChwbGF5ZWRJdGVtQ291bnQ6IG51bWJlciwgdG90YWxJdGVtQ291bnQ6IG51bWJlcik6IHN0cmluZyA9PlxuICAgIHBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UIHx8IHRvdGFsSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlRcbiAgICAgICAgPyAn4oCmIHdhdGNoZWQnXG4gICAgICAgIDogYCR7cGxheWVkSXRlbUNvdW50fS8ke3RvdGFsSXRlbUNvdW50fSB3YXRjaGVkYFxuXG4iLCJleHBvcnQgdHlwZSBTZXJ2ZXJTZXR0aW5ncyA9IHtcbiAgICBNaW5SZXN1bWVQY3Q6IG51bWJlciwgXG4gICAgTWF4UmVzdW1lUGN0OiBudW1iZXIsIFxuICAgIE1pblJlc3VtZUR1cmF0aW9uU2Vjb25kczogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0U2VydmVyU2V0dGluZ3M6IFNlcnZlclNldHRpbmdzID0ge1xuICAgIE1pblJlc3VtZVBjdDogNSxcbiAgICBNYXhSZXN1bWVQY3Q6IDkwLFxuICAgIE1pblJlc3VtZUR1cmF0aW9uU2Vjb25kczogMzAwXG59IiwiaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge2Zvcm1hdFdhdGNoZWRDb3VudCwgR3JvdXB9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcblxudHlwZSBVc2VyRGF0YUNoYW5nZWRFbnRyeSA9IHtcbiAgICBJdGVtSWQ6IHN0cmluZ1xuICAgIFBsYXllZDogYm9vbGVhblxuICAgIElzRmF2b3JpdGU6IGJvb2xlYW5cbiAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlclxuICAgIFBsYXllZFBlcmNlbnRhZ2U/OiBudW1iZXJcbn1cblxudHlwZSBXZWJTb2NrZXRNZXNzYWdlID0ge1xuICAgIE1lc3NhZ2VUeXBlOiBzdHJpbmdcbiAgICBEYXRhOiBhbnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdhdGNoZWRDb3VudERvbShwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBncm91cDogR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCB0ZXh0ID0gZm9ybWF0V2F0Y2hlZENvdW50KGdyb3VwLnBsYXllZEl0ZW1Db3VudCwgZ3JvdXAudG90YWxJdGVtQ291bnQpXG5cbiAgICBpZiAoZ3JvdXAuZ3JvdXBJZCA9PT0gcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cElkKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwV2F0Y2hlZENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwVGl0bGVDb250YWluZXInKT8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgICAgICBpZiAocG9wdXBXYXRjaGVkQ291bnQpIHBvcHVwV2F0Y2hlZENvdW50LmlubmVyVGV4dCA9IHRleHRcbiAgICB9XG5cbiAgICBjb25zdCBncm91cExpc3RXYXRjaGVkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ3JvdXAtJHtncm91cC5ncm91cElkfWApPy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCcpXG4gICAgaWYgKGdyb3VwTGlzdFdhdGNoZWRDb3VudCkgZ3JvdXBMaXN0V2F0Y2hlZENvdW50LmlubmVyVGV4dCA9IHRleHRcbn1cblxuZnVuY3Rpb24gYWRqdXN0V2F0Y2hlZENvdW50KHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGl0ZW1JZDogc3RyaW5nLCB3YXNQbGF5ZWQ6IGJvb2xlYW4sIGlzUGxheWVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQpIHJldHVyblxuICAgIGlmICh3YXNQbGF5ZWQgPT09IGlzUGxheWVkKSByZXR1cm5cblxuICAgIGNvbnN0IHVwZGF0ZWRHcm91cCA9IHByb2dyYW1EYXRhU3RvcmUuYWRqdXN0R3JvdXBQbGF5ZWRDb3VudChpdGVtSWQsIGlzUGxheWVkID8gMSA6IC0xKVxuICAgIGlmICh1cGRhdGVkR3JvdXApIHVwZGF0ZVdhdGNoZWRDb3VudERvbShwcm9ncmFtRGF0YVN0b3JlLCB1cGRhdGVkR3JvdXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQbGF5ZWRTdGF0ZUxvY2FsbHkocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgaXRlbUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtOiBQcmV2aWV3SXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSkgcmV0dXJuXG5cbiAgICBjb25zdCB3YXNQbGF5ZWQgPSBpdGVtLlVzZXJEYXRhLlBsYXllZFxuICAgIGNvbnN0IGlzUGxheWVkID0gIXdhc1BsYXllZFxuXG4gICAgcHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgVXNlckRhdGE6IHsgLi4uaXRlbS5Vc2VyRGF0YSwgUGxheWVkOiBpc1BsYXllZCB9XG4gICAgfSlcbiAgICBhZGp1c3RXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZSwgaXRlbUlkLCB3YXNQbGF5ZWQsIGlzUGxheWVkKVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUZldGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBFdmVudHMub24oQXBpQ2xpZW50LCAnbWVzc2FnZScsIChfZXZlbnQsIG1lc3NhZ2U6IFdlYlNvY2tldE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLk1lc3NhZ2VUeXBlICE9PSAnVXNlckRhdGFDaGFuZ2VkJykgcmV0dXJuXG4gICAgICAgICAgICBpZiAobWVzc2FnZS5EYXRhLlVzZXJJZCAhPT0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhTGlzdDogVXNlckRhdGFDaGFuZ2VkRW50cnlbXSA9IG1lc3NhZ2UuRGF0YS5Vc2VyRGF0YUxpc3QgPz8gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgdXNlckRhdGEgb2YgdXNlckRhdGFMaXN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbTogUHJldmlld0l0ZW0gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQodXNlckRhdGEuSXRlbUlkKVxuICAgICAgICAgICAgICAgIGlmICghaXRlbSkgY29udGludWVcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdhc1BsYXllZCA9IGl0ZW0uVXNlckRhdGEuUGxheWVkXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICBVc2VyRGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbS5Vc2VyRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllZDogdXNlckRhdGEuUGxheWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgSXNGYXZvcml0ZTogdXNlckRhdGEuSXNGYXZvcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogdXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVkUGVyY2VudGFnZTogdXNlckRhdGEuUGxheWVkUGVyY2VudGFnZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGFkanVzdFdhdGNoZWRDb3VudCh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHVzZXJEYXRhLkl0ZW1JZCwgd2FzUGxheWVkLCB1c2VyRGF0YS5QbGF5ZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dfcHJlZml4OiBzdHJpbmcgPSBcIltJblBsYXllckVwaXNvZGVQcmV2aWV3XVwiKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmVycm9yKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuLi9FbmRwb2ludHNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXliYWNrSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikgeyB9XG5cbiAgICBhc3luYyBwbGF5KGl0ZW1JZDogc3RyaW5nLCBzdGFydFBvc2l0aW9uVGlja3M6IG51bWJlcik6IFByb21pc2U8dm9pZCB8IFJlc3BvbnNlPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5QTEFZX01FRElBfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t0aWNrc30nLCBzdGFydFBvc2l0aW9uVGlja3MudG9TdHJpbmcoKSkpXG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwgfSlcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3Qgc3RhcnQgdGhlIHBsYXliYWNrIG9mIGFuIGl0ZW1gLCBleClcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1Byb2dyYW1EYXRhfSBmcm9tIFwiLi4vTW9kZWxzL1Byb2dyYW1EYXRhXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge0RlZmF1bHRQbHVnaW5TZXR0aW5ncywgUGx1Z2luU2V0dGluZ3N9IGZyb20gXCIuLi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3NcIjtcbmltcG9ydCB7RGVmYXVsdFNlcnZlclNldHRpbmdzLCBTZXJ2ZXJTZXR0aW5nc30gZnJvbSBcIi4uL01vZGVscy9TZXJ2ZXJTZXR0aW5nc1wiO1xuXG5jb25zdCBHUk9VUFNfQ0FDSEVfVFRMID0gNSAqIDYwICogMTAwMFxuXG5leHBvcnQgY2xhc3MgUHJvZ3JhbURhdGFTdG9yZSB7XG4gICAgcHJpdmF0ZSBfcHJvZ3JhbURhdGE6IFByb2dyYW1EYXRhXG4gICAgcHJpdmF0ZSBfdmlld1Rva2VuOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBfZ3JvdXBzQ2FjaGVkQXQ6IG51bWJlciB8IG51bGwgPSBudWxsXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEgPSB7XG4gICAgICAgICAgICBhY3RpdmVNZWRpYVNvdXJjZUlkOiAnJyxcbiAgICAgICAgICAgIGFjdGl2ZUdyb3VwSWQ6ICcnLFxuICAgICAgICAgICAgYm94U2V0TmFtZTogJycsXG4gICAgICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgcGx1Z2luU2V0dGluZ3M6IERlZmF1bHRQbHVnaW5TZXR0aW5ncyxcbiAgICAgICAgICAgIHNlcnZlclNldHRpbmdzOiBEZWZhdWx0U2VydmVyU2V0dGluZ3NcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlTWVkaWFTb3VyY2VJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYWN0aXZlTWVkaWFTb3VyY2VJZChhY3RpdmVNZWRpYVNvdXJjZUlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlTWVkaWFTb3VyY2VJZCA9IGFjdGl2ZU1lZGlhU291cmNlSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZUdyb3VwSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZUdyb3VwSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZUdyb3VwSWQoYWN0aXZlR3JvdXBJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZUdyb3VwSWQgPSBhY3RpdmVHcm91cElkXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVHcm91cCgpOiBHcm91cCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwcy5maW5kKGdyb3VwID0+IGdyb3VwLmdyb3VwSWQgPT09IHRoaXMuYWN0aXZlR3JvdXBJZClcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogSXRlbVR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEudHlwZVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdHlwZSh0eXBlOiBJdGVtVHlwZSkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS50eXBlID0gdHlwZVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm94U2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYm94U2V0TmFtZVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYm94U2V0TmFtZShib3hTZXROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYm94U2V0TmFtZSA9IGJveFNldE5hbWVcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdyb3VwcygpOiBHcm91cFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3Vwc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZ3JvdXBzKGdyb3VwczogR3JvdXBbXSkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMgPSBncm91cHNcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBsdWdpblNldHRpbmdzKCk6IFBsdWdpblNldHRpbmdzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLnBsdWdpblNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbHVnaW5TZXR0aW5ncyhzZXR0aW5nczogUGx1Z2luU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEucGx1Z2luU2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VydmVyU2V0dGluZ3MoKTogU2VydmVyU2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuc2VydmVyU2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlcnZlclNldHRpbmdzKHNldHRpbmdzOiBTZXJ2ZXJTZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5zZXJ2ZXJTZXR0aW5ncyA9IHNldHRpbmdzXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBtYXJrR3JvdXBzRmV0Y2hlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPSBEYXRlLm5vdygpXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0dyb3Vwc0NhY2hlRXhwaXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID09PSBudWxsIHx8IERhdGUubm93KCkgLSB0aGlzLl9ncm91cHNDYWNoZWRBdCA+IEdST1VQU19DQUNIRV9UVExcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFJc0FsbG93ZWRGb3JQcmV2aWV3KCkge1xuICAgICAgICBpZiAoIXRoaXMuYWxsb3dlZFByZXZpZXdUeXBlcy5pbmNsdWRlcyh0aGlzLnR5cGUpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLnNvbWUoZ3JvdXAgPT4gZ3JvdXAuaXRlbXMubGVuZ3RoID49IDEpXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhbGxvd2VkUHJldmlld1R5cGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5TZXR0aW5ncy5FbmFibGVkSXRlbVR5cGVzXG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW1CeUlkKGl0ZW1JZDogc3RyaW5nKTogUHJldmlld0l0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHNcbiAgICAgICAgICAgIC5mbGF0TWFwKGdyb3VwID0+IGdyb3VwLml0ZW1zKVxuICAgICAgICAgICAgLmZpbmQoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyByZWNvcmRMb2FkZWRJdGVtcyhncm91cElkOiBzdHJpbmcsIGl0ZW1zOiBQcmV2aWV3SXRlbVtdLCBzdGFydEluZGV4OiBudW1iZXIsIHRvdGFsUmVjb3JkQ291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMgPSB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgICAgIGlmIChncm91cC5ncm91cElkICE9PSBncm91cElkKVxuICAgICAgICAgICAgICAgIHJldHVybiBncm91cFxuXG4gICAgICAgICAgICBpZiAoZ3JvdXAubG9hZGVkU3RhcnRJbmRleCA9PT0gdW5kZWZpbmVkIHx8IGdyb3VwLmxvYWRlZEVuZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgaXRlbXMsIGxvYWRlZFN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsIGxvYWRlZEVuZEluZGV4OiBzdGFydEluZGV4ICsgaXRlbXMubGVuZ3RoLCBsb2FkZWRUb3RhbFJlY29yZENvdW50OiB0b3RhbFJlY29yZENvdW50IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPj0gZ3JvdXAubG9hZGVkRW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgaXRlbXM6IFsuLi5ncm91cC5pdGVtcywgLi4uaXRlbXNdLCBsb2FkZWRFbmRJbmRleDogc3RhcnRJbmRleCArIGl0ZW1zLmxlbmd0aCwgbG9hZGVkVG90YWxSZWNvcmRDb3VudDogdG90YWxSZWNvcmRDb3VudCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFydEluZGV4IDwgZ3JvdXAubG9hZGVkU3RhcnRJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBpdGVtczogWy4uLml0ZW1zLCAuLi5ncm91cC5pdGVtc10sIGxvYWRlZFN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ6IHRvdGFsUmVjb3JkQ291bnQgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwSWQ6IHN0cmluZywgcGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLmdyb3Vwcy5tYXAoZyA9PiBnLmdyb3VwSWQgPT09IGdyb3VwSWQgPyB7IC4uLmcsIHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQgfSA6IGcpXG4gICAgfVxuXG4gICAgcHVibGljIGFkanVzdEdyb3VwUGxheWVkQ291bnQoaXRlbUlkOiBzdHJpbmcsIGRlbHRhOiBudW1iZXIpOiBHcm91cCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cHMuZmluZChnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpXG4gICAgICAgIGlmICghZ3JvdXApIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgICBjb25zdCB1cGRhdGVkR3JvdXA6IEdyb3VwID0geyAuLi5ncm91cCwgcGxheWVkSXRlbUNvdW50OiBncm91cC5wbGF5ZWRJdGVtQ291bnQgKyBkZWx0YSB9XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGcgPT4gZy5ncm91cElkID09PSBncm91cC5ncm91cElkID8gdXBkYXRlZEdyb3VwIDogZylcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRHcm91cFxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVJdGVtKGl0ZW1Ub1VwZGF0ZTogUHJldmlld0l0ZW0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLmdyb3Vwcy5tYXAoZ3JvdXAgPT5cbiAgICAgICAgICAgIGdyb3VwLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtVG9VcGRhdGUuSWQpXG4gICAgICAgICAgICAgICAgPyB7IC4uLmdyb3VwLCBpdGVtczogZ3JvdXAuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbVRvVXBkYXRlLklkID8gaXRlbVRvVXBkYXRlIDogaXRlbSkgfVxuICAgICAgICAgICAgICAgIDogZ3JvdXBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIENhbGxlZCB3aGVuZXZlciB0aGUgcG9wdXAgc3dpdGNoZXMgd2hhdCBpdCdzIGRpc3BsYXlpbmcgKG9wZW5pbmcsIHNlbGVjdGluZyBhIGdyb3VwLCBnb2luZyBiYWNrIHRvIHRoZSBncm91cCBsaXN0KVxuICAgIHB1YmxpYyBiZWdpbk5ld1ZpZXcoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICsrdGhpcy5fdmlld1Rva2VuXG4gICAgfVxuXG4gICAgcHVibGljIGlzQ3VycmVudFZpZXcodG9rZW46IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdG9rZW4gPT09IHRoaXMuX3ZpZXdUb2tlblxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRWaWV3VG9rZW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdUb2tlblxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL1NlcnZpY2VzL0xvZ2dlclwiO1xuaW1wb3J0IHtQcmV2aWV3QnV0dG9uVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7RGlhbG9nQ29udGFpbmVyVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvRGlhbG9nQ29udGFpbmVyVGVtcGxhdGVcIjtcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcbmltcG9ydCB7TGlzdEVsZW1lbnRGYWN0b3J5fSBmcm9tIFwiLi9MaXN0RWxlbWVudEZhY3RvcnlcIjtcbmltcG9ydCB7UG9wdXBUaXRsZVRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xuaW1wb3J0IHtEYXRhRmV0Y2hlcn0gZnJvbSBcIi4vU2VydmljZXMvRGF0YUZldGNoZXJcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHtQbHVnaW5TZXR0aW5nc30gZnJvbSBcIi4vTW9kZWxzL1BsdWdpblNldHRpbmdzXCI7XG5pbXBvcnQge1NlcnZlclNldHRpbmdzfSBmcm9tIFwiLi9Nb2RlbHMvU2VydmVyU2V0dGluZ3NcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi9FbmRwb2ludHNcIjtcbmltcG9ydCB7R3JvdXAsIFVOS05PV05fV0FUQ0hFRF9DT1VOVH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge0dyb3VwSXRlbXNSZXN1bHR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cEl0ZW1zUmVzdWx0XCI7XG5pbXBvcnQge2FjdGl2YXRlU3Bpbm5lciwgc3Bpbm5lckh0bWx9IGZyb20gXCIuL0NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IHtzZXRJdGVtT3ZlcmxheUFjdGl2ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9MaXN0RWxlbWVudFRlbXBsYXRlXCI7XG5cbi8vIGxvYWQgYW5kIGluamVjdCBpblBsYXllclByZXZpZXcuY3NzIGludG8gdGhlIHBhZ2Vcbi8qXG4gKiBJbmplY3Qgc3R5bGUgdG8gYmUgdXNlZCBmb3IgdGhlIHByZXZpZXcgcG9wdXBcbiAqL1xubGV0IGluUGxheWVyUHJldmlld1N0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUuaWQgPSAnaW5QbGF5ZXJQcmV2aWV3U3R5bGUnXG5pblBsYXllclByZXZpZXdTdHlsZS50ZXh0Q29udGVudCA9IGBcbi5zZWxlY3RlZExpc3RJdGVtIHtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4ucHJldmlld0xpc3RJdGVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IHtcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgbWluLWhlaWdodDogMTUuNXZoOyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJldmlld1BvcHVwIHtcbiAgICBhbmltYXRpb246IDE0MG1zIGVhc2Utb3V0IDBzIDEgbm9ybWFsIGJvdGggcnVubmluZyBzY2FsZXVwOyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIG1hcmdpbjogMHB4OyBcbiAgICBib3R0b206IDEuNXZoOyBcbiAgICBsZWZ0OiA1MHZ3OyBcbiAgICB3aWR0aDogNDh2dztcbn1cbi5wcmV2aWV3UG9wdXBUaXRsZSB7XG4gICAgbWF4LWhlaWdodDogNHZoO1xufVxuLnByZXZpZXdQb3B1cFRpdGxlIGgxLmFjdGlvblNoZWV0VGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4ucHJldmlld0dyb3VwV2F0Y2hlZENvdW50IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG9wYWNpdHk6IDAuNztcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlciB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbn1cbi5wcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcbn1cbi5wcmV2aWV3SXRlbUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJldmlld0l0ZW1UaXRsZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucHJldmlld0l0ZW1JbWFnZUNhcmQge1xuICAgIG1heC13aWR0aDogMzAlO1xufVxuLnByZXZpZXdJdGVtQ29udGVudFJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbkNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xufVxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbi5leHBhbmRlZCB7XG4gICAgbWF4LWhlaWdodDogbm9uZTtcbn1cbi5wcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBvcGFjaXR5OiAwLjc1O1xufVxuLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG4ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLyogTG9jayB0aGUgcG9zaXRpb24gb2YgdGhpcyBkZXRhaWxzLCBzbyB0aGF0IG5vIHRoZW1lIGNhbiBjaGFuZ2UgaXQgKi9cbi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IC5pdGVtTWlzY0luZm8ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMWVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cig2cHgpO1xuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJsdXI6aG92ZXIge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbn1cbi5wcmV2aWV3SXRlbUltYWdlQ2FyZDpob3ZlciAuYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xufVxuLnByZXZpZXdTY3JvbGxTcGlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMWVtIDA7XG59XG4ucHJldmlld1Njcm9sbFNwaW5uZXIgLmRvY3NwaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMS45NWVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxLjk1ZW0gIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5gXG5kb2N1bWVudD8uaGVhZD8uYXBwZW5kQ2hpbGQoaW5QbGF5ZXJQcmV2aWV3U3R5bGUpXG5cbi8vIGluaXQgc2VydmljZXMgYW5kIGhlbHBlcnNcbmNvbnN0IGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcigpXG5jb25zdCBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlID0gbmV3IFByb2dyYW1EYXRhU3RvcmUoKVxuY29uc3QgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIgPSBuZXcgUGxheWJhY2tIYW5kbGVyKGxvZ2dlcilcbmNvbnN0IGxpc3RFbGVtZW50RmFjdG9yeSA9IG5ldyBMaXN0RWxlbWVudEZhY3RvcnkocGxheWJhY2tIYW5kbGVyLCBwcm9ncmFtRGF0YVN0b3JlKVxuXG5jb25zdCBjb2xsZWN0aW9uc0J5SXRlbUlkID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8R3JvdXBbXT4+KClcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwW10+IHtcbiAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5DT05UQUlOSU5HX0NPTExFQ1RJT05TfWBcbiAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByYXc6IGFueVtdID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIHJldHVybiByYXcubWFwKChnOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXIsXG4gICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgdG90YWxJdGVtQ291bnQ6IGcuVG90YWxJdGVtQ291bnRcbiAgICAgICAgfSkpXG4gICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgbG9hZCBDb2xsZWN0aW9ucy9QbGF5bGlzdHMgY29udGFpbmluZyB0aGlzIG1vdmllXCIsIGV4KVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8R3JvdXBbXT4ge1xuICAgIGxldCBwcm9taXNlID0gY29sbGVjdGlvbnNCeUl0ZW1JZC5nZXQoaXRlbUlkKVxuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkKVxuICAgICAgICBjb2xsZWN0aW9uc0J5SXRlbUlkLnNldChpdGVtSWQsIHByb21pc2UpXG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgLy8gRW5zdXJlIEFwaUNsaWVudC9FdmVudHMgZXhpc3QgYW5kIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgaWYgKHR5cGVvZiBBcGlDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBFdmVudHMgPT09ICd1bmRlZmluZWQnIHx8ICFBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZD8uKCkpIHtcbiAgICAgICAgc2V0VGltZW91dChpbml0aWFsaXplLCAzMDApIC8vIEluY3JlYXNlZCByZXRyeSBkZWxheSBzbGlnaHRseVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBuZXcgRGF0YUZldGNoZXIocHJvZ3JhbURhdGFTdG9yZSlcblxuICAgIEFwaUNsaWVudC5nZXRQbHVnaW5Db25maWd1cmF0aW9uKCc3MzgzM2Q1Zi0wYmNiLTQ1ZGMtYWI4Yi03Y2U2NjhmNDM0NWQnKVxuICAgICAgICAudGhlbigoY29uZmlnOiBQbHVnaW5TZXR0aW5ncykgPT4gcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncyA9IGNvbmZpZylcblxuICAgIGNvbnN0IHNlcnZlclNldHRpbmdzVXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuU0VSVkVSX1NFVFRJTkdTfWApXG4gICAgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsOiBzZXJ2ZXJTZXR0aW5nc1VybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAudGhlbigoY29uZmlnOiBTZXJ2ZXJTZXR0aW5ncykgPT4gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncyA9IGNvbmZpZylcbn1cbmluaXRpYWxpemUoKVxuXG5jb25zdCBTRUFSQ0hfQ09MTEVDVElPTlNfR1JPVVBfTkFNRSA9ICdTZWFyY2ggQ29sbGVjdGlvbnMvUGxheWxpc3RzJ1xuXG5jb25zdCB2aWRlb1BhdGhzOiBzdHJpbmdbXSA9IFsnL3ZpZGVvJ11cbmxldCBwcmV2aW91c1JvdXRlUGF0aDogc3RyaW5nID0gbnVsbFxubGV0IHByZXZpZXdDb250YWluZXJMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlld3Nob3cnLCB2aWV3U2hvd0V2ZW50SGFuZGxlcilcblxuLy8gU29tZXRpbWVzIHRoZWlyIGNhbiBiZSBzdGFsZSByYXRpbmcgYnV0dG9ucy4gdGhhdHMgd2h5IHdlIHRha2UgdGhlIGxhc3Qgb25lIGZyb20gdGhlIERPTSBmb3IgdGhlIGl0ZW1JZFxuZnVuY3Rpb24gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5Vc2VyUmF0aW5nLmF1dG9TaXplLnBhcGVyLWljb24tYnV0dG9uLWxpZ2h0JylcbiAgICByZXR1cm4gZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0/LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID8/IG51bGxcbn1cblxubGV0IGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQ6IG51bWJlciA9IC0xXG5mdW5jdGlvbiBvblZpZGVvVGltZVVwZGF0ZSh0aGlzOiBIVE1MVmlkZW9FbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgcG9zaXRpb25TZWNvbmQgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudFRpbWUpXG4gICAgaWYgKHBvc2l0aW9uU2Vjb25kID09PSBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kKSByZXR1cm5cbiAgICBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kID0gcG9zaXRpb25TZWNvbmRcblxuICAgIGNvbnN0IGl0ZW1JZCA9IGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKVxuICAgIGlmICghaXRlbUlkKSByZXR1cm5cblxuICAgIGlmIChpdGVtSWQgIT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCkge1xuICAgICAgICBjb25zdCBwcmV2aW91c0l0ZW1JZCA9IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBpdGVtSWRcbiAgICAgICAgc2V0SXRlbU92ZXJsYXlBY3RpdmUocHJldmlvdXNJdGVtSWQsIGZhbHNlKVxuICAgICAgICBzZXRJdGVtT3ZlcmxheUFjdGl2ZShpdGVtSWQsIHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSB8fCAhaXRlbS5SdW5UaW1lVGlja3MpIHJldHVyblxuXG4gICAgY29uc3QgcG9zaXRpb25UaWNrcyA9IHRoaXMuY3VycmVudFRpbWUgKiAxMF8wMDBfMDAwXG4gICAgY29uc3QgcGxheWVkUGVyY2VudGFnZSA9IChwb3NpdGlvblRpY2tzIC8gaXRlbS5SdW5UaW1lVGlja3MpICogMTAwXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YToge1xuICAgICAgICAgICAgLi4uaXRlbS5Vc2VyRGF0YSxcbiAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogcG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IHBsYXllZFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICBQbGF5ZWQ6IHBsYXllZFBlcmNlbnRhZ2UgPj0gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncy5NYXhSZXN1bWVQY3RcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vIFRyYWNrcyB3aGljaCBCb3hTZXQvUGxheWxpc3QgZGV0YWlscyBwYWdlIChpZiBhbnkpIHdhcyB2aXNpdGVkIGltbWVkaWF0ZWx5IGJlZm9yZSBuYXZpZ2F0aW5nIGludG8gcGxheWJhY2tcbmNvbnN0IERFVEFJTFNfUk9VVEVfUEFUSDogc3RyaW5nID0gJy9kZXRhaWxzJ1xuY29uc3QgY29sbGVjdGlvbkxpa2VJdGVtVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLlBsYXlsaXN0XSlcbmxldCBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkOiBzdHJpbmcgPSBudWxsXG5cbmZ1bmN0aW9uIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY29sbGVjdGlvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5TRVRfU09VUkNFX0NPTExFQ1RJT059YFxuICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2NvbGxlY3Rpb25JZH0nLCBjb2xsZWN0aW9uSWQpKVxuICAgIEFwaUNsaWVudC5hamF4KHt0eXBlOiAnR0VUJywgdXJsfSkuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCByZWNvcmQgc291cmNlIGNvbGxlY3Rpb24gZm9yIHBsYXliYWNrIHNlc3Npb25cIiwgZXgpKVxufVxuXG5mdW5jdGlvbiBjYXB0dXJlU291cmNlQ29sbGVjdGlvbihjdXJyZW50Um91dGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbY3VycmVudFBhdGgsIGN1cnJlbnRRdWVyeV0gPSBjdXJyZW50Um91dGVQYXRoLnNwbGl0KCc/JylcbiAgICBjb25zdCBwcmV2aW91c1BhdGggPSBwcmV2aW91c1JvdXRlUGF0aD8uc3BsaXQoJz8nKVswXVxuXG4gICAgaWYgKGN1cnJlbnRQYXRoID09PSBERVRBSUxTX1JPVVRFX1BBVEgpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0lkID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50UXVlcnkgPz8gJycpLmdldCgnaWQnKVxuICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxuICAgICAgICBpZiAoIWRldGFpbHNJZCkgcmV0dXJuXG5cbiAgICAgICAgQXBpQ2xpZW50LmdldEl0ZW0oQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSwgZGV0YWlsc0lkKS50aGVuKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVHlwZTogSXRlbVR5cGUgPSBJdGVtVHlwZVtpdGVtLlR5cGUgYXMgdW5rbm93biBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gY29sbGVjdGlvbkxpa2VJdGVtVHlwZXMuaGFzKGl0ZW1UeXBlKSA/IGRldGFpbHNJZCA6IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMoY3VycmVudFBhdGgpICYmIHByZXZpb3VzUGF0aCA9PT0gREVUQUlMU19ST1VURV9QQVRIICYmIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQpIHtcbiAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkKVxuICAgIH1cblxuICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBudWxsXG59XG5cbi8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGNvbGxvZWN0aW9uL3BsYXlsaXN0IGlkIHRob3J1Z2ggYSBwbGF5IGFjdGlvbiBvbiBhIGNhcmQgdGhlIHNhbWUgd2F5IGFzIGhlbGx5ZmluIGRvZXMgaXQgaXRzZWxmXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamVsbHlmaW4vamVsbHlmaW4td2ViL2Jsb2IvcmVsZWFzZS0xMC4xMS56L3NyYy9jb21wb25lbnRzL3Nob3J0Y3V0cy5qcyNMMjE2XG5jb25zdCBQTEFZQkFDS19UUklHR0VSX0FDVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbJ3BsYXknLCAncmVzdW1lJywgJ3BsYXlhbGxmcm9taGVyZSddKVxuZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrQ2FwdHVyZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGlvbkVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8uY2xvc2VzdD8uKCdbZGF0YS1hY3Rpb25dJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKCFhY3Rpb25FbGVtZW50IHx8ICFQTEFZQkFDS19UUklHR0VSX0FDVElPTlMuaGFzKGFjdGlvbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpKSkgcmV0dXJuXG5cbiAgICBjb25zdCBjYXJkID0gYWN0aW9uRWxlbWVudC5jbG9zZXN0KCdbZGF0YS1pZF0nKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcbiAgICBpZiAoIWNhcmQpIHJldHVyblxuXG4gICAgY29uc3QgY2hpbGRPZkNvbGxlY3Rpb25JZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxlY3Rpb25pZCcpID8/IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXBsYXlsaXN0aWQnKVxuICAgIGlmIChjaGlsZE9mQ29sbGVjdGlvbklkKSB7XG4gICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY2hpbGRPZkNvbGxlY3Rpb25JZClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY2FyZEl0ZW1UeXBlOiBJdGVtVHlwZSA9IEl0ZW1UeXBlW2NhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSBhcyB1bmtub3duIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICBjb25zdCBjYXJkSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgaWYgKGNhcmRJZCAmJiBjb2xsZWN0aW9uTGlrZUl0ZW1UeXBlcy5oYXMoY2FyZEl0ZW1UeXBlKSkge1xuICAgICAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNhcmRJZClcbiAgICB9XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRG9jdW1lbnRDbGlja0NhcHR1cmUsIHRydWUpXG5cbmZ1bmN0aW9uIHZpZXdTaG93RXZlbnRIYW5kbGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZVBhdGg6IHN0cmluZyA9IGdldExvY2F0aW9uUGF0aCgpXG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhdGlvblBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb246IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZUluZGV4OiBudW1iZXIgPSBsb2NhdGlvbi5sYXN0SW5kZXhPZignLycpXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5zdWJzdHJpbmcoY3VycmVudFJvdXRlSW5kZXgpXG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbCBhdHRlbXB0IHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcgb3Igc2NoZWR1bGUgcmV0cmllcy5cbiAgICBjYXB0dXJlU291cmNlQ29sbGVjdGlvbihjdXJyZW50Um91dGVQYXRoKVxuICAgIGF0dGVtcHRMb2FkVmlkZW9WaWV3KClcbiAgICBwcmV2aW91c1JvdXRlUGF0aCA9IGN1cnJlbnRSb3V0ZVBhdGhcblxuICAgIC8vIEF0dGVtcHRzIHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcsIHJldHJ5aW5nIHVwIHRvIDMgdGltZXMgaWYgbmVjZXNzYXJ5LlxuICAgIGZ1bmN0aW9uIGF0dGVtcHRMb2FkVmlkZW9WaWV3KHJldHJ5Q291bnQgPSAwKTogdm9pZCB7XG4gICAgICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRSb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICAvLyBpZiAocHJvZ3JhbURhdGFTdG9yZS5kYXRhSXNBbGxvd2VkRm9yUHJldmlldykge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcmV2aWV3IGNvbnRhaW5lciBpcyBhbHJlYWR5IGxvYWRlZCBiZWZvcmUgbG9hZGluZ1xuICAgICAgICAgICAgICAgIGlmICghcHJldmlld0NvbnRhaW5lckxvYWRlZCAmJiAhaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRWaWRlb1ZpZXcoKVxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gdHJ1ZSAvLyBTZXQgZmxhZyB0byB0cnVlIGFmdGVyIGxvYWRpbmdcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJldHJ5Q291bnQgPCAzKSB7IC8vIFJldHJ5IHVwIHRvIDMgdGltZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBSZXRyeSAjJHtyZXRyeUNvdW50ICsgMX1gKVxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0TG9hZFZpZGVvVmlldyhyZXRyeUNvdW50ICsgMSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwMCkgLy8gV2FpdCAxMCBzZWNvbmRzIGZvciBlYWNoIHJldHJ5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhwcmV2aW91c1JvdXRlUGF0aCkpIHtcbiAgICAgICAgICAgIHVubG9hZFZpZGVvVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgLy8gYWRkIHByZXZpZXcgYnV0dG9uIHRvIHRoZSBwYWdlXG4gICAgICAgIGNvbnN0IHBhcmVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucycpLmxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudDsgLy8gbGFzdEVsZW1lbnRDaGlsZC5wYXJlbnRFbGVtZW50IGlzIHVzZWQgZm9yIGNhc3RpbmcgZnJvbSBFbGVtZW50IHRvIEhUTUxFbGVtZW50XG4gICAgICAgIFxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5Vc2VyUmF0aW5nXCIpKTtcbiAgICAgICAgLy8gaWYgaW5kZXggaXMgaW52YWxpZCB0cnkgdG8gdXNlIHRoZSBvbGQgcG9zaXRpb24gKHVzZWQgaW4gSmVsbHlmaW4gMTAuOC4xMilcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSlcbiAgICAgICAgICAgIGluZGV4ID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmRJbmRleCgoY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9zZFRpbWVUZXh0XCIpKVxuXG4gICAgICAgIGNvbnN0IHByZXZpZXdCdXR0b246IFByZXZpZXdCdXR0b25UZW1wbGF0ZSA9IG5ldyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUocGFyZW50LCBpbmRleClcbiAgICAgICAgbGV0IHByZXZpZXdCdXR0b25Mb2FkaW5nOiBib29sZWFuID0gZmFsc2VcbiAgICAgICAgcHJldmlld0J1dHRvbi5yZW5kZXIocHJldmlld0J1dHRvbkNsaWNrSGFuZGxlcilcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxWaWRlb0VsZW1lbnQ+KCd2aWRlby5odG1sdmlkZW9wbGF5ZXInKT8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIG9uVmlkZW9UaW1lVXBkYXRlKVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBpZiAocHJldmlld0J1dHRvbkxvYWRpbmcpIHJldHVyblxuICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRvUHJldmlld0J1dHRvbkNsaWNrKClcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9QcmV2aWV3QnV0dG9uQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBjb25zdCBsb2FkSXRlbVByZXZpZXdEYXRhID0gYXN5bmMgKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTx7XG4gICAgICAgICAgICAgICAgaXRlbVR5cGU6IHN0cmluZywgY29udGFpbmVyTmFtZTogc3RyaW5nIHwgbnVsbCwgZ3JvdXBzOiBHcm91cFtdLCBhY3RpdmVHcm91cElkOiBzdHJpbmcsIGFjdGl2ZUl0ZW1JbmRleDogbnVtYmVyXG4gICAgICAgICAgICB9PiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLklURU1fUFJFVklFV19EQVRBfWBcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiByYXcuSXRlbVR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lck5hbWU6IHJhdy5Db250YWluZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICBncm91cHM6IHJhdy5Hcm91cHMubWFwKChnOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxJdGVtQ291bnQ6IGcuVG90YWxJdGVtQ291bnRcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkOiByYXcuQWN0aXZlR3JvdXBJZCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbUluZGV4OiByYXcuQWN0aXZlSXRlbUluZGV4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBQQUdFX1NJWkUgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZVxuXG4gICAgICAgICAgICBjb25zdCBsb2FkR3JvdXBJdGVtcyA9IGFzeW5jIChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciA9IDAsIGxpbWl0OiBudW1iZXIgPSBQQUdFX1NJWkUpOiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfSVRFTVN9YFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCB1c2VySWQpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7Z3JvdXBJZH0nLCBncm91cElkKSxcbiAgICAgICAgICAgICAgICAgICAgeyBzdGFydEluZGV4LCBsaW1pdCB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogR3JvdXBJdGVtc1Jlc3VsdCA9IHsgaXRlbXM6IHJhdy5JdGVtcywgdG90YWxSZWNvcmRDb3VudDogcmF3LlRvdGFsUmVjb3JkQ291bnQgfVxuXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5yZWNvcmRMb2FkZWRJdGVtcyhncm91cElkLCByZXN1bHQuaXRlbXMsIHN0YXJ0SW5kZXgsIHJlc3VsdC50b3RhbFJlY29yZENvdW50KVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGhpcyBpcyBleHBlcmltZW50YWwgYW5kIHdpbGwgbWF5YmUgYmUgdXNlZCBpbiBmdXR1cmUgcmVsZWFzZXNcbiAgICAgICAgICAgIGNvbnN0IGdldE5vd1BsYXlpbmdJdGVtSWRGcm9tU2Vzc2lvbiA9IGFzeW5jICgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5OT1dfUExBWUlOR19JVEVNfWApXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IHJlc29sdmUgbm93LXBsYXlpbmcgaXRlbSBmcm9tIHNlc3Npb24sIGZhbGxpbmcgYmFjayB0byBPU0QgcmF0aW5nIGJ1dHRvblwiLCBleClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lcjogRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUgPSBuZXcgRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUoZG9jdW1lbnQuYm9keSwgZG9jdW1lbnQuYm9keS5jaGlsZHJlbi5sZW5ndGggLSAxKVxuICAgICAgICAgICAgZGlhbG9nQ29udGFpbmVyLnJlbmRlcigpXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpXG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkR3JvdXAgPSAhcHJvZ3JhbURhdGFTdG9yZS5pc0dyb3Vwc0NhY2hlRXhwaXJlZFxuICAgICAgICAgICAgICAgID8gcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuZmluZChnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcblxuICAgICAgICAgICAgbGV0IGFjdGl2ZUdyb3VwSWQ6IHN0cmluZ1xuICAgICAgICAgICAgbGV0IGluaXRpYWxQYWdlOiBHcm91cEl0ZW1zUmVzdWx0XG4gICAgICAgICAgICBsZXQgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXg6IG51bWJlclxuXG4gICAgICAgICAgICBpZiAoY2FjaGVkR3JvdXApIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkID0gY2FjaGVkR3JvdXAuZ3JvdXBJZFxuICAgICAgICAgICAgICAgIGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gY2FjaGVkR3JvdXAubG9hZGVkU3RhcnRJbmRleCA/PyAwXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2UgPSB7IGl0ZW1zOiBbLi4uY2FjaGVkR3JvdXAuaXRlbXNdLCB0b3RhbFJlY29yZENvdW50OiBjYWNoZWRHcm91cC5sb2FkZWRUb3RhbFJlY29yZENvdW50ID8/IGNhY2hlZEdyb3VwLml0ZW1zLmxlbmd0aCB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcmV2aWV3U2Nyb2xsU3Bpbm5lclwiPiR7c3Bpbm5lckh0bWwoKX08L2Rpdj5gXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVTcGlubmVyKGNvbnRlbnREaXYpXG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1UeXBlLCBjb250YWluZXJOYW1lLCBncm91cHMsIGFjdGl2ZUdyb3VwSWQ6IGZldGNoZWRBY3RpdmVHcm91cElkLCBhY3RpdmVJdGVtSW5kZXggfSA9IGF3YWl0IGxvYWRJdGVtUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gZ3JvdXBzXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5tYXJrR3JvdXBzRmV0Y2hlZCgpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS50eXBlID0gSXRlbVR5cGVbaXRlbVR5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSA9IGNvbnRhaW5lck5hbWUgPz8gJydcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkID0gZmV0Y2hlZEFjdGl2ZUdyb3VwSWRcblxuICAgICAgICAgICAgICAgIC8vIExvYWQgYSAzLXBhZ2Ugd2luZG93IChwYWdlIG9mIHRoZSBhY3RpdmUgZXBpc29kZSwgcGx1cyBvbmUgcGFnZSBiZWZvcmUgYW5kIGFmdGVyKVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VPZkFjdGl2ZUVwaXNvZGUgPSBNYXRoLmZsb29yKGFjdGl2ZUl0ZW1JbmRleCAvIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBpbml0aWFsV2luZG93U3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIChwYWdlT2ZBY3RpdmVFcGlzb2RlIC0gMSkgKiBQQUdFX1NJWkUpXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFdpbmRvd0xpbWl0ID0gKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgKyAyKSAqIFBBR0VfU0laRSAtIGluaXRpYWxXaW5kb3dTdGFydEluZGV4XG5cbiAgICAgICAgICAgICAgICBpbml0aWFsUGFnZSA9IGF3YWl0IGxvYWRHcm91cEl0ZW1zKGFjdGl2ZUdyb3VwSWQsIGluaXRpYWxXaW5kb3dTdGFydEluZGV4LCBpbml0aWFsV2luZG93TGltaXQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCA9IGl0ZW1JZFxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cElkID0gYWN0aXZlR3JvdXBJZFxuXG4gICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnIC8vIHJlbW92ZSB0aGUgbG9hZGluZyBzcGlubmVyXG4gICAgICAgICAgICBjb25zdCB2aWV3VG9rZW4gPSBwcm9ncmFtRGF0YVN0b3JlLmJlZ2luTmV3VmlldygpXG5cbiAgICAgICAgICAgIC8vIEEgc3RhbmRhbG9uZSBtb3ZpZSBoYXMgbm8gbWVhbmluZ2Z1bCBncm91cCBuYW1lIG9mIGl0cyBvd247IGFuIGl0ZW0gc291cmNlZCBmcm9tIGEgUGxheWxpc3QvQm94U2V0XG4gICAgICAgICAgICAvLyBhbHJlYWR5IGhhcyB0aGF0IGNvbGxlY3Rpb24ncyByZWFsIG5hbWUsIHNvIG9ubHkgdGhlIHN0YW5kYWxvbmUtbW92aWUgY2FzZSBnZXRzIHJlbGFiZWxlZC5cbiAgICAgICAgICAgIGNvbnN0IGlzU3RhbmRhbG9uZU1vdmllID0gcHJvZ3JhbURhdGFTdG9yZS50eXBlID09PSBJdGVtVHlwZS5Nb3ZpZVxuICAgICAgICAgICAgY29uc3QgaXNTb3VyY2VkRnJvbUNvbGxlY3Rpb24gPSBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPT09IEl0ZW1UeXBlLlBsYXlsaXN0IHx8IHByb2dyYW1EYXRhU3RvcmUudHlwZSA9PT0gSXRlbVR5cGUuQm94U2V0XG5cbiAgICAgICAgICAgIC8vIExhYmVsIHRoZSBtb3ZpZSdzIG93biBncm91cCBhcyB0aGUgY29sbGVjdGlvbiBzZWFyY2ggdXAgZnJvbnQsIGV2ZW4gYmVmb3JlIGFueSByZXN1bHRzIGFyZSBrbm93bi5cbiAgICAgICAgICAgIGlmIChpc1N0YW5kYWxvbmVNb3ZpZSAmJiBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMubWFwKChnLCBpKSA9PiBpID09PSAwID8geyAuLi5nLCBncm91cE5hbWU6IFNFQVJDSF9DT0xMRUNUSU9OU19HUk9VUF9OQU1FIH0gOiBnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPbmx5IHNlYXJjaCBvbmNlIHBlciBmcmVzaCBncm91cC1mZXRjaCAobm90IG9uIGV2ZXJ5IHBvcHVwIHJlb3BlbiB3aGlsZSBjYWNoZWQgZ3JvdXBzIGFscmVhZHkgaW5jbHVkZSB0aGUgc2VhcmNoIHJlc3VsdHMpLlxuICAgICAgICAgICAgLy8gZ2V0Q29udGFpbmluZ0NvbGxlY3Rpb25zIGl0c2VsZiBpcyBtZW1vaXplZCBwZXIgaXRlbSBmb3IgdGhlIHdob2xlIHBhZ2Ugc2Vzc2lvbiwgc28gZXZlbiB0aGlzIGNhbid0IHJlLXRyaWdnZXIgdGhlXG4gICAgICAgICAgICAvLyBleHBlbnNpdmUgYmFja2VuZCBzY2FuIG1vcmUgdGhhbiBvbmNlIHBlciBpdGVtLCBubyBtYXR0ZXIgaG93IG9mdGVuIHRoZSBwb3B1cCBpcyByZW9wZW5lZCB3aGlsZSBpdCdzIHBlbmRpbmcuXG4gICAgICAgICAgICBjb25zdCBpc1NlYXJjaGluZ0NvbGxlY3Rpb25zID0gKGlzU3RhbmRhbG9uZU1vdmllIHx8IGlzU291cmNlZEZyb21Db2xsZWN0aW9uKSAmJiBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9ucyAmJiBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgIGxldCBjb2xsZWN0aW9uc1NlYXJjaERvbmUgPSAhaXNTZWFyY2hpbmdDb2xsZWN0aW9uc1xuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbnNTZWFyY2g6IFByb21pc2U8dm9pZD4gPSBpc1NlYXJjaGluZ0NvbGxlY3Rpb25zXG4gICAgICAgICAgICAgICAgPyBnZXRDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkKS50aGVuKGNvbGxlY3Rpb25Hcm91cHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbGxlY3Rpb25Hcm91cHMubGVuZ3RoIHx8IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCAhPT0gaXRlbUlkKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZkdyb3VwID0gcHJvZ3JhbURhdGFTdG9yZS5ncm91cHNbMF1cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhjbHVkZSB0aGUgY29sbGVjdGlvbi9wbGF5bGlzdCB0aGlzIGl0ZW0gd2FzIGFscmVhZHkgcGxheWVkIGZyb20gLSBpdCdzIGFscmVhZHkgdGhlIGFjdGl2ZS9kZWZhdWx0IGdyb3VwLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdHcm91cHMgPSBjb2xsZWN0aW9uR3JvdXBzLmZpbHRlcihnID0+IGcuZ3JvdXBJZCAhPT0gc2VsZkdyb3VwLmdyb3VwSWQpXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV3R3JvdXBzLmxlbmd0aCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gW3NlbGZHcm91cCwgLi4ubmV3R3JvdXBzXS5tYXAoKGcsIGkpID0+ICh7IC4uLmcsIGluZGV4TnVtYmVyOiBpIH0pKVxuICAgICAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4geyBjb2xsZWN0aW9uc1NlYXJjaERvbmUgPSB0cnVlIH0pXG4gICAgICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKVxuXG4gICAgICAgICAgICBjb25zdCBjYW5Td2l0Y2hHcm91cHMgPSAoKTogYm9vbGVhbiA9PiBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgIT09IEl0ZW1UeXBlLk1vdmllIHx8IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zXG5cbiAgICAgICAgICAgIGNvbnN0IHBvcHVwVGl0bGU6IFBvcHVwVGl0bGVUZW1wbGF0ZSA9IG5ldyBQb3B1cFRpdGxlVGVtcGxhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwRm9jdXNDb250YWluZXInKSwgLTEsIHByb2dyYW1EYXRhU3RvcmUpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnJlbmRlcihhc3luYyAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICBpZiAoIWNhblN3aXRjaEdyb3VwcygpKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJylcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlR3JvdXBFbGVtZW50cyhwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcywgY29udGVudERpdiwgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cC5pbmRleE51bWJlciwgcG9wdXBUaXRsZSwgbG9hZEdyb3VwSXRlbXMpXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBWaWV3VG9rZW4gPSBwcm9ncmFtRGF0YVN0b3JlLmN1cnJlbnRWaWV3VG9rZW5cblxuICAgICAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uc1NlYXJjaERvbmUpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdwcmV2aWV3U2Nyb2xsU3Bpbm5lcicpXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5pbm5lckhUTUwgPSBzcGlubmVySHRtbCgpXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChzcGlubmVyKVxuICAgICAgICAgICAgICAgIGFjdGl2YXRlU3Bpbm5lcihzcGlubmVyKVxuXG4gICAgICAgICAgICAgICAgYXdhaXQgY29sbGVjdGlvbnNTZWFyY2hcbiAgICAgICAgICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBhIGdyb3VwIHdhcyBzZWxlY3RlZCwgb3IgdGhlIHBvcHVwIGNsb3NlZCkgd2hpbGUgdGhpcyB3YXMgbG9hZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyhncm91cFZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlR3JvdXBFbGVtZW50cyhwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcywgY29udGVudERpdiwgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cC5pbmRleE51bWJlciwgcG9wdXBUaXRsZSwgbG9hZEdyb3VwSXRlbXMpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRTd2l0Y2hhYmxlKGNhblN3aXRjaEdyb3VwcygpKVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRWaXNpYmxlKGNhblN3aXRjaEdyb3VwcygpKVxuXG4gICAgICAgICAgICBhd2FpdCBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlTGF6eUl0ZW1MaXN0KGNvbnRlbnREaXYsIChzdGFydEluZGV4KSA9PiBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBzdGFydEluZGV4KSwgdmlld1Rva2VuLCBpbml0aWFsUGFnZSwgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXgpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFRleHQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8uZ3JvdXBOYW1lID8/ICcnKVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8ucGxheWVkSXRlbUNvdW50ID8/IDAsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXA/LnRvdGFsSXRlbUNvdW50ID8/IDApXG4gICAgICAgICAgICBpZiAocHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50ICYmIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXA/LnBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmVuc3VyZUdyb3VwV2F0Y2hlZENvdW50KHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHVwZGF0ZWQgPT4gcG9wdXBUaXRsZS5zZXRXYXRjaGVkQ291bnQodXBkYXRlZC5wbGF5ZWRJdGVtQ291bnQsIHVwZGF0ZWQudG90YWxJdGVtQ291bnQpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIGl0ZW0gdGhhdCBpcyBjdXJyZW50bHkgcGxheWluZ1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlSXRlbSA9IGNvbnRlbnREaXYucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkTGlzdEl0ZW0nKSBcbiAgICAgICAgICAgIGlmICghYWN0aXZlSXRlbSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IGZpbmQgYWN0aXZlIG1lZGlhIHNvdXJjZSBlbGVtZW50IGluIHByZXZpZXcgbGlzdC4gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuXCIsIHByb2dyYW1EYXRhU3RvcmUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3RpdmVJdGVtPy5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1bmxvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XG4gICAgICAgIC8vIENsZWFyIG9sZCBkYXRhIGFuZCByZXNldCBwcmV2aWV3Q29udGFpbmVyTG9hZGVkIGZsYWdcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBvblZpZGVvVGltZVVwZGF0ZSlcbiAgICAgICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IC0xXG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlld1BvcHVwJyk/LnJlbW92ZSgpXG5cbiAgICAgICAgcHJldmlld0NvbnRhaW5lckxvYWRlZCA9IGZhbHNlIC8vIFJlc2V0IGZsYWcgd2hlbiB1bmxvYWRpbmdcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJykucXVlcnlTZWxlY3RvcignI3BvcHVwUHJldmlld0J1dHRvbicpICE9PSBudWxsXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==