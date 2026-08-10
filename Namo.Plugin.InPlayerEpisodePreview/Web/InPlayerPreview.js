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
const WatchProgress_1 = __webpack_require__(/*! ../Models/PreviewData/WatchProgress */ "./Web/Models/PreviewData/WatchProgress.ts");
class GroupListElementTemplate extends BaseTemplate_1.BaseTemplate {
    group;
    isCurrentGroup;
    showWatchedCount;
    watchCountDisplayMode;
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
                            <button type="button" class="previewItemReadMoreButton hide">Show more</button>
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
        renderedElement.querySelector('.previewItemDescription')
            ?.addEventListener('click', (e) => e.stopPropagation());
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
            const { items, totalRecordCount: newTotalRecordCount } = await loadPage(totalLoaded);
            // The view may have moved on (e.g. back to the group list) while this page was loading.
            if (!this.programDataStore.isCurrentView(viewToken))
                return;
            spinner.remove();
            await this.createItemElements(items, parentDiv, totalLoaded);
            totalLoaded += items.length;
            totalRecordCount = newTotalRecordCount;
            loadingForward = false;
            // The newly loaded page might still not fill the container, so re-check right away.
            checkScrollPosition();
        };
        const loadPreviousPage = async () => {
            loadingBackward = true;
            const scrollHeightBeforeSpinner = parentDiv.scrollHeight;
            const spinner = this.createSpinnerElement();
            parentDiv.insertBefore(spinner, parentDiv.firstChild);
            parentDiv.scrollTop += parentDiv.scrollHeight - scrollHeightBeforeSpinner;
            const pageSize = this.programDataStore.pluginSettings.EpisodePageSize;
            const newStartIndex = Math.max(0, loadedStartIndex - pageSize);
            const { items } = await loadPage(newStartIndex);
            // The view may have moved on (e.g. back to the group list) while this page was loading.
            if (!this.programDataStore.isCurrentView(viewToken))
                return;
            const scrollHeightBeforePrepend = parentDiv.scrollHeight;
            spinner.remove();
            await this.prependItemElements(items, parentDiv, newStartIndex);
            parentDiv.scrollTop += parentDiv.scrollHeight - scrollHeightBeforePrepend;
            loadedStartIndex = newStartIndex;
            loadingBackward = false;
            checkScrollPosition();
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
        const firstPage = initialPage ?? await loadPage(0);
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
        return { ...group, playedItemCount, totalItemCount, playedRuntimeTicks, totalRuntimeTicks };
    }
    createGroupElements(groups, parentDiv, currentGroupIndex, titleContainer, loadItems) {
        groups.sort((a, b) => a.indexNumber - b.indexNumber);
        // Invalidates any item load still in progresss
        this.programDataStore.beginNewView();
        for (let i = 0; i < groups.length; i++) {
            const group = new GroupListElementTemplate_1.GroupListElementTemplate(parentDiv, i, groups[i], groups[i].indexNumber === currentGroupIndex, this.programDataStore.pluginSettings.ShowWatchedCount, this.programDataStore.pluginSettings.WatchCountDisplayMode);
            group.render(async (e) => {
                e.stopPropagation();
                this.programDataStore.activeGroupId = groups[i].groupId;
                titleContainer.setText(groups[i].groupName);
                if (this.programDataStore.pluginSettings.ShowWatchedCount) {
                    titleContainer.setWatchedCount(groups[i]);
                    if (groups[i].playedItemCount === Group_1.UNKNOWN_WATCHED_COUNT) {
                        this.ensureGroupWatchedCount(groups[i])
                            .then(updated => titleContainer.setWatchedCount(updated));
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
const WatchCountDisplayMode_1 = __webpack_require__(/*! ./WatchCountDisplayMode */ "./Web/Models/WatchCountDisplayMode.ts");
exports.DefaultPluginSettings = {
    EnabledItemTypes: [ItemType_1.ItemType.Series, ItemType_1.ItemType.BoxSet, ItemType_1.ItemType.Movie, ItemType_1.ItemType.Folder, ItemType_1.ItemType.Video],
    BlurDescription: false,
    BlurThumbnail: false,
    EpisodePageSize: 10,
    ShowWatchedCount: true,
    WatchCountDisplayMode: WatchCountDisplayMode_1.WatchCountDisplayMode.HoursMinutes,
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
    const html = (0, WatchProgress_1.renderWatchedCountInnerHtml)(group, programDataStore.pluginSettings.WatchCountDisplayMode);
    if (group.groupId === programDataStore.activeGroupId) {
        const popupWatchedCount = document.getElementById('popupTitleContainer')?.querySelector('.previewGroupWatchedCount');
        if (popupWatchedCount)
            popupWatchedCount.innerHTML = html;
    }
    const groupListWatchedCount = document.getElementById(`group-${group.groupId}`)?.querySelector('.previewGroupWatchedCount');
    if (groupListWatchedCount)
        groupListWatchedCount.innerHTML = html;
}
exports.updateWatchedCountDom = updateWatchedCountDom;
function playedRuntimeContribution(item, played, playbackPositionTicks) {
    return played ? (item.RunTimeTicks ?? 0) : playbackPositionTicks;
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
    programDataStore.updateItem({
        ...item,
        UserData: { ...item.UserData, Played: isPlayed, PlaybackPositionTicks: newPlaybackPositionTicks }
    });
    adjustWatchedCount(programDataStore, item, wasPlayed, isPlayed, oldPlaybackPositionTicks, newPlaybackPositionTicks);
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
                const oldPlaybackPositionTicks = item.UserData.PlaybackPositionTicks;
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
const Group_1 = __webpack_require__(/*! ../Models/PreviewData/Group */ "./Web/Models/PreviewData/Group.ts");
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
    setGroupWatchedCount(groupId, playedItemCount, totalItemCount, playedRuntimeTicks, totalRuntimeTicks) {
        this.groups = this.groups.map(g => g.groupId === groupId ? { ...g, playedItemCount, totalItemCount, playedRuntimeTicks, totalRuntimeTicks } : g);
    }
    adjustGroupWatchStats(itemId, deltaPlayedCount, deltaPlayedRuntimeTicks) {
        const group = this.groups.find(g => g.items.some(item => item.Id === itemId));
        if (!group)
            return undefined;
        const updatedGroup = {
            ...group,
            playedItemCount: group.playedItemCount + deltaPlayedCount,
            playedRuntimeTicks: group.playedRuntimeTicks === Group_1.UNKNOWN_WATCHED_COUNT ? Group_1.UNKNOWN_WATCHED_COUNT : group.playedRuntimeTicks + deltaPlayedRuntimeTicks
        };
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
    // Ensure ApiClient/Events exist and user is logged in
    if (typeof ApiClient === 'undefined' || typeof Events === 'undefined' || !ApiClient.getCurrentUserId?.()) {
        setTimeout(initialize, 300); // Increased retry delay slightly
        return;
    }
    new DataFetcher_1.DataFetcher(programDataStore);
    const pluginSettingsUrl = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.PLUGIN_SETTINGS}`);
    ApiClient.ajax({ type: 'GET', url: pluginSettingsUrl, dataType: 'json' })
        .then((config) => programDataStore.pluginSettings = config)
        .catch((ex) => logger.error("Couldn't load plugin settings, falling back to defaults", ex));
    const serverSettingsUrl = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.SERVER_SETTINGS}`);
    ApiClient.ajax({ type: 'GET', url: serverSettingsUrl, dataType: 'json' })
        .then((config) => programDataStore.serverSettings = config);
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
window.addEventListener('popstate', () => document.getElementById('previewPopup')?.remove());
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
            if (!programDataStore.isGroupsCacheExpired && programDataStore.groups.some(g => g.items.some(item => item.Id === itemId)))
                return;
            if (pendingPreloadItemId === itemId)
                return;
            pendingPreloadItemId = itemId;
            pendingPreload = (async () => {
                const { itemType, containerName, groups, activeGroupId, activeItemIndex } = await loadItemPreviewData(itemId);
                programDataStore.groups = groups;
                programDataStore.markGroupsFetched();
                programDataStore.type = ItemType_1.ItemType[itemType];
                programDataStore.boxSetName = containerName ?? '';
                const PAGE_SIZE = programDataStore.pluginSettings.EpisodePageSize;
                const pageOfActiveEpisode = Math.floor(activeItemIndex / PAGE_SIZE);
                const initialWindowStartIndex = Math.max(0, (pageOfActiveEpisode - 1) * PAGE_SIZE);
                const initialWindowLimit = (pageOfActiveEpisode + 2) * PAGE_SIZE - initialWindowStartIndex;
                await loadGroupItems(activeGroupId, initialWindowStartIndex, initialWindowLimit);
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
            preloadObserver?.disconnect();
            preloadObserver = new MutationObserver(() => {
                const id = target.getAttribute('data-id');
                if (!id)
                    return;
                preloadObserver?.disconnect();
                preloadObserver = null;
                preloadPreviewData(id);
            });
            preloadObserver.observe(target, { attributes: true, attributeFilter: ['data-id'] });
        }
        const previewButton = new PreviewButtonTemplate_1.PreviewButtonTemplate(parent, index);
        let previewButtonLoading = false;
        previewButton.render(previewButtonClickHandler);
        document.querySelector('video.htmlvideoplayer')?.addEventListener('timeupdate', onVideoTimeUpdate);
        schedulePreload();
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
            if (programDataStore.activeGroup)
                popupTitle.setWatchedCount(programDataStore.activeGroup);
            if (programDataStore.pluginSettings.ShowWatchedCount && programDataStore.activeGroup?.playedItemCount === Group_1.UNKNOWN_WATCHED_COUNT) {
                listElementFactory.ensureGroupWatchedCount(programDataStore.activeGroup)
                    .then(updated => popupTitle.setWatchedCount(updated));
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
        preloadObserver?.disconnect();
        preloadObserver = null;
        pendingPreloadItemId = null;
        pendingPreload = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDRCxTQUFTLGVBQWU7UUFDcEIsdURBQXVEO1FBQ3ZELFFBQVEsQ0FBQyxhQUFhLENBQW1CLHVCQUF1QixDQUFDLEVBQUUsbUJBQW1CLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO1FBQ3ZILHlCQUF5QixHQUFHLENBQUMsQ0FBQztRQUU5QixlQUFlLEVBQUUsVUFBVSxFQUFFO1FBQzdCLGVBQWUsR0FBRyxJQUFJO1FBQ3RCLG9CQUFvQixHQUFHLElBQUk7UUFDM0IsY0FBYyxHQUFHLElBQUk7UUFFckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUU7UUFFakQsc0JBQXNCLEdBQUcsS0FBSyxFQUFDLDRCQUE0QjtJQUMvRCxDQUFDO0lBRUQsU0FBUyxzQkFBc0I7UUFDM0IsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLElBQUk7SUFDM0YsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9CYXNlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0l0ZW1EZXRhaWxzLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1ByZXZpZXdCdXR0b25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvRmF2b3JpdGVJY29uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUXVpY2tBY3Rpb25zL1BsYXlTdGF0ZUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9TcGlubmVyLnRzIiwid2VicGFjazovLy8uL1dlYi9FbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0xpc3RFbGVtZW50RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL0l0ZW1UeXBlLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cC50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1ByZXZpZXdEYXRhL1dhdGNoUHJvZ3Jlc3MudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9TZXJ2ZXJTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1dhdGNoQ291bnREaXNwbGF5TW9kZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvRGF0YUZldGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvUGxheWJhY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9XZWIvSW5QbGF5ZXJQcmV2aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVGVtcGxhdGUge1xuICAgIC8qXG4gICAgICogdGhlIEhUTUwgYmFzZWQgSUQgb2YgdGhlIG5ldyBnZW5lcmF0ZWQgRWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZWxlbWVudElkOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50LCBwcml2YXRlIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7IH1cblxuICAgIHB1YmxpYyBnZXRDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkFmdGVySW5kZXg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEVsZW1lbnRJZChlbGVtZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRJZDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmdldEVsZW1lbnRJZCgpfWApO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBzdHJpbmc7XG5cbiAgICBhYnN0cmFjdCByZW5kZXIoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IHZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgYWRkRWxlbWVudFRvQ29udGFpbmVyKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIC8vIEFkZCBFbGVtZW50IGFzIHRoZSBmaXJzdCBjaGlsZCBpZiBwb3NpdGlvbiBpcyBuZWdhdGl2ZVxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSA8IDAgJiYgdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZmlyc3RFbGVtZW50Q2hpbGQuYmVmb3JlKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgaWYgY29udGFpbmVyIGlzIGVtcHR5XG4gICAgICAgIGlmICghdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuaW5uZXJIVE1MID0gdGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGlsZEJlZm9yZSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkubGFzdEVsZW1lbnRDaGlsZFxuICAgICAgICBpZiAodGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpICYmIHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgPj0gMClcbiAgICAgICAgICAgIGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlblt0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpXTtcbiAgICAgICAgXG4gICAgICAgIGNoaWxkQmVmb3JlLmFmdGVyKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgc3RyaW5nVG9Ob2RlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcpOiBOb2RlIHtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHRlbXBsYXRlU3RyaW5nO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBkaWFsb2dCYWNrZHJvcElkID0gJ2RpYWxvZ0JhY2tkcm9wJ1xuICAgIGRpYWxvZ0NvbnRhaW5lcklkID0gJ2RpYWxvZ0NvbnRhaW5lcidcbiAgICBwb3B1cENvbnRlbnRDb250YWluZXJJZCA9ICdwb3B1cENvbnRlbnRDb250YWluZXInXG4gICAgcG9wdXBGb2N1c0NvbnRhaW5lcklkID0gJ3BvcHVwRm9jdXNDb250YWluZXInXG4gICAgXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncHJldmlld1BvcHVwJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5kaWFsb2dCYWNrZHJvcElkfVwiIGNsYXNzPVwiZGlhbG9nQmFja2Ryb3AgZGlhbG9nQmFja2Ryb3BPcGVuZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmRpYWxvZ0NvbnRhaW5lcklkfVwiIGNsYXNzPVwiZGlhbG9nQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBGb2N1c0NvbnRhaW5lcklkfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb2N1c2NvbnRhaW5lciBkaWFsb2cgYWN0aW9uc2hlZXQtbm90LWZ1bGxzY3JlZW4gYWN0aW9uU2hlZXQgY2VudGVyZWREaWFsb2cgb3BlbmVkIHByZXZpZXdQb3B1cCBhY3Rpb25TaGVldENvbnRlbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlzdG9yeT1cInRydWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmVtb3Zlb25jbG9zZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBDb250ZW50Q29udGFpbmVySWR9XCIgY2xhc3M9XCJhY3Rpb25TaGVldFNjcm9sbGVyIHNjcm9sbFkgcHJldmlld1BvcHVwU2Nyb2xsZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRFbGVtZW50SWQoKSkpXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge3JlbmRlcldhdGNoZWRDb3VudElubmVySHRtbH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4uL01vZGVscy9XYXRjaENvdW50RGlzcGxheU1vZGVcIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZ3JvdXA6IEdyb3VwLCBwcml2YXRlIGlzQ3VycmVudEdyb3VwOiBib29sZWFuLCBwcml2YXRlIHNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4sIHByaXZhdGUgd2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgZ3JvdXAtJHtncm91cC5ncm91cElkfWApO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5ncm91cC5ncm91cElkfVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7dGhpcy5pc0N1cnJlbnRHcm91cCA/IFwibWF0ZXJpYWwtaWNvbnMgY2hlY2tcIiA6IFwiXCJ9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdEl0ZW1Cb2R5IGFjdGlvbnNoZWV0TGlzdEl0ZW1Cb2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuZ3JvdXAuZ3JvdXBOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5zaG93V2F0Y2hlZENvdW50ID8gYDxkaXYgY2xhc3M9XCJwcmV2aWV3R3JvdXBXYXRjaGVkQ291bnRcIj4ke3JlbmRlcldhdGNoZWRDb3VudElubmVySHRtbCh0aGlzLmdyb3VwLCB0aGlzLndhdGNoQ291bnREaXNwbGF5TW9kZSl9PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4gY2xpY2tIYW5kbGVyKGUpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsc1RlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBpdGVtLSR7aXRlbS5JZH1gKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfS1kZXRhaWxzXCIgY2xhc3M9XCJpdGVtTWlzY0luZm8gaXRlbU1pc2NJbmZvLXByaW1hcnkgcHJldmlld0l0ZW1EZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uUHJlbWllcmVEYXRlID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICR7KG5ldyBEYXRlKHRoaXMuaXRlbS5QcmVtaWVyZURhdGUpKS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5nZXRMb2NhbGUoKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+JHt0aGlzLmZvcm1hdFJ1blRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ29tbXVuaXR5UmF0aW5nID8gYDxkaXYgY2xhc3M9XCJzdGFyUmF0aW5nQ29udGFpbmVyIG1lZGlhSW5mb0l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBzdGFySWNvbiBzdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Db21tdW5pdHlSYXRpbmcudG9GaXhlZCgxKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtIG1lZGlhSW5mb0NyaXRpY1JhdGluZyAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmcgPj0gNjAgPyAnbWVkaWFJbmZvQ3JpdGljUmF0aW5nRnJlc2gnIDogJ21lZGlhSW5mb0NyaXRpY1JhdGluZ1JvdHRlbid9XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZHNBdCBtZWRpYUluZm9JdGVtXCI+JHt0aGlzLmZvcm1hdEVuZFRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcywgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TG9jYWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubGFuZ3VhZ2VzXG4gICAgICAgICAgICA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gLy8gQHRzLWlnbm9yZSBmb3IgdXNlckxhbmd1YWdlICh0aGlzIGFkZHMgc3VwcG9ydCBmb3IgSUUpIFRPRE86IE1vdmUgdG8gaW50ZXJmYWNlXG4gICAgICAgICAgICA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRSdW5UaW1lKHRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBmb3JtYXQgdGhlIHRpY2tzIHRvIGEgc3RyaW5nIHdpdGggbWludXRlcyBhbmQgaG91cnNcbiAgICAgICAgdGlja3MgLz0gMTAwMDA7IC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCk7XG4gICAgICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgICAgIGxldCBob3Vyc1N0cmluZzogc3RyaW5nID0gaG91cnMgPiAwID8gYCR7aG91cnN9aCBgIDogJyc7XG4gICAgICAgIHJldHVybiBgJHtob3Vyc1N0cmluZ30ke21pbnV0ZXN9bWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRFbmRUaW1lKHJ1bnRpbWVUaWNrczogbnVtYmVyLCBwbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIHJ1bnRpbWVUaWNrcyAvPSAxMDAwMDtcbiAgICAgICAgcGxheWJhY2tQb3NpdGlvblRpY2tzIC89IDEwMDAwO1xuXG4gICAgICAgIGxldCB0aWNrczogbnVtYmVyID0gRGF0ZS5ub3coKSArIChydW50aW1lVGlja3MpO1xuICAgICAgICB0aWNrcyAtPSAobmV3IERhdGUoKSkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDsgLy8gYWRqdXN0IGZvciB0aW1lem9uZVxuICAgICAgICB0aWNrcyAtPSBwbGF5YmFja1Bvc2l0aW9uVGlja3M7IC8vIHN1YnRyYWN0IHRoZSBwbGF5YmFjayBwb3NpdGlvblxuXG4gICAgICAgIGxldCBob3Vyczogc3RyaW5nID0gdGhpcy56ZXJvUGFkKE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDM2MDApICUgMjQpKTtcbiAgICAgICAgbGV0IG1pbnV0ZXM6IHN0cmluZyA9IHRoaXMuemVyb1BhZChNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCkpO1xuXG4gICAgICAgIHJldHVybiBgRW5kcyBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHplcm9QYWQobnVtOiBudW1iZXIsIHBsYWNlczogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBTdHJpbmcobnVtKS5wYWRTdGFydChwbGFjZXMsICcwJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge0Zhdm9yaXRlSWNvblRlbXBsYXRlfSBmcm9tIFwiLi9RdWlja0FjdGlvbnMvRmF2b3JpdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5U3RhdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9QbGF5U3RhdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIlxuaW1wb3J0IHtJdGVtRGV0YWlsc1RlbXBsYXRlfSBmcm9tIFwiLi9JdGVtRGV0YWlsc1wiXG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiXG5pbXBvcnQge3RvZ2dsZVBsYXllZFN0YXRlTG9jYWxseX0gZnJvbSBcIi4uL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCJcblxuLy8gU2hvd3MvaGlkZXMgdGhlIFwic3RhcnQgcGxheWJhY2tcIiBvdmVybGF5IGZvciBhIHJlbmRlcmVkIGxpc3QgaXRlbVxuZXhwb3J0IGZ1bmN0aW9uIHNldEl0ZW1PdmVybGF5QWN0aXZlKGl0ZW1JZDogc3RyaW5nLCBpc0FjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJkT3ZlcmxheS0ke2l0ZW1JZH1gKT8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGlzQWN0aXZlKVxufVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBxdWlja0FjdGlvbkNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgICBwcml2YXRlIHBsYXlTdGF0ZUljb246IFBsYXlTdGF0ZUljb25UZW1wbGF0ZVxuICAgIHByaXZhdGUgZmF2b3JpdGVJY29uOiBGYXZvcml0ZUljb25UZW1wbGF0ZVxuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0sIHByaXZhdGUgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGl0ZW0tJHtpdGVtLklkfWApXG5cbiAgICAgICAgLy8gY3JlYXRlIHRlbXAgcXVpY2sgYWN0aW9uIGNvbnRhaW5lclxuICAgICAgICB0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICAvLyBjcmVhdGUgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24gPSBuZXcgUGxheVN0YXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIC0xLCB0aGlzLml0ZW0pXG4gICAgICAgIHRoaXMuZmF2b3JpdGVJY29uID0gbmV3IEZhdm9yaXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIDAsIHRoaXMuaXRlbSlcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBhZGQgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24ucmVuZGVyKClcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24ucmVuZGVyKClcblxuICAgICAgICAvLyBhZGQgaXRlbSBkZXRhaWxzL2luZm9cbiAgICAgICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBkZXRhaWxzOiBJdGVtRGV0YWlsc1RlbXBsYXRlID0gbmV3IEl0ZW1EZXRhaWxzVGVtcGxhdGUoZGV0YWlsc0NvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSlcbiAgICAgICAgZGV0YWlscy5yZW5kZXIoKVxuXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZVN0eWxlOiBzdHJpbmcgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9JdGVtcy8ke3RoaXMuaXRlbS5JZH0vSW1hZ2VzL1ByaW1hcnk/dGFnPSR7dGhpcy5pdGVtLlByaW1hcnlJbWFnZVRhZ30nKWBcblxuICAgICAgICBjb25zdCBzaG91bGRCbHVyOiBib29sZWFuID0gISh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuT25seUJsdXJVbndhdGNoZWQgJiYgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZClcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdEl0ZW0gbGlzdEl0ZW0tYnV0dG9uIGFjdGlvblNoZWV0TWVudUl0ZW0gZW1ieS1idXR0b24gcHJldmlld0xpc3RJdGVtXCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbS5JZH1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld0l0ZW1UaXRsZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0uSW5kZXhOdW1iZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUgIT09IEl0ZW1UeXBlLk1vdmllXG4gICAgICAgICAgICAgICAgICAgICAgICApID8gYDxzcGFuPiR7dGhpcy5pdGVtLkluZGV4TnVtYmVyfTwvc3Bhbj5gIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdEl0ZW1Cb2R5IGFjdGlvbnNoZWV0TGlzdEl0ZW1Cb2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25TaGVldEl0ZW1UZXh0XCI+JHt0aGlzLml0ZW0uTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0xpc3RJdGVtQ29udGVudCBoaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHByZXZpZXdJdGVtQ29udGVudFJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgb3ZlcmZsb3dCYWNrZHJvcENhcmQgY2FyZC1ob3ZlcmFibGUgY2FyZC13aXRodXNlcmRhdGEgcHJldmlld0l0ZW1JbWFnZUNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZEJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFNjYWxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFBhZGRlciBjYXJkUGFkZGVyLW92ZXJmbG93QmFja2Ryb3AgbGF6eS1oaWRkZW4tY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmRJbWFnZUljb24gbWF0ZXJpYWwtaWNvbnMgdHZcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwcmV2aWV3SXRlbUltYWdlQ2FyZC0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRJbWFnZUNvbnRhaW5lciBjYXJkQ29udGVudCBpdGVtQWN0aW9uIGxhenkgYmx1cmhhc2hlZCBsYXp5LWltYWdlLWZhZGVpbi1mYXN0ICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkJsdXJUaHVtYm5haWwgJiYgc2hvdWxkQmx1ciA/ICdibHVyJyA6ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiJHtiYWNrZ3JvdW5kSW1hZ2VTdHlsZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJpbm5lckNhcmRGb290ZXIgZnVsbElubmVyQ2FyZEZvb3RlciBpbm5lckNhcmRGb290ZXJDbGVhciBpdGVtUHJvZ3Jlc3NCYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1Qcm9ncmVzc0JhckZvcmVncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoke3RoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlfSU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmRPdmVybGF5LSR7dGhpcy5pdGVtLklkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZE92ZXJsYXlDb250YWluZXIgaXRlbUFjdGlvbiAke3RoaXMuaXRlbS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPyAnaGlkZScgOiAnJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3RhcnQtaXRlbS0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5QnV0dG9uIGNhcmRPdmVybGF5QnV0dG9uLWhvdmVyIGl0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgY2FyZE92ZXJsYXlGYWItcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cInJlc3VtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNhcmRPdmVybGF5QnV0dG9uSWNvbiBjYXJkT3ZlcmxheUJ1dHRvbkljb24taG92ZXIgcGxheV9hcnJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkJsdXJEZXNjcmlwdGlvbiAmJiBzaG91bGRCbHVyID8gJ2JsdXInIDogJyd9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkRlc2NyaXB0aW9uID8/ICdsb2FkaW5nLi4uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIGhpZGVcIj5TaG93IG1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbGlja0hhbmRsZXIoZSkpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGF5U3RhdGVCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXlTdGF0ZUJ1dHRvbi0ke3RoaXMuaXRlbS5JZH1gKVxuICAgICAgICBwbGF5U3RhdGVCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHRvZ2dsZVBsYXllZFN0YXRlTG9jYWxseSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHRoaXMuaXRlbS5JZClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlld0l0ZW1EZXNjcmlwdGlvbicpXG4gICAgICAgICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpXG5cbiAgICAgICAgY29uc3QgaXRlbUltYWdlQ2FyZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnQtaXRlbS0ke3RoaXMuaXRlbS5JZH1gKVxuICAgICAgICBpdGVtSW1hZ2VDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wbGF5YmFja0hhbmRsZXIucGxheSh0aGlzLml0ZW0uSWQsIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpKVxuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7cmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1dhdGNoUHJvZ3Jlc3NcIjtcblxuZXhwb3J0IGNsYXNzIFBvcHVwVGl0bGVUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BvcHVwVGl0bGVDb250YWluZXInKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld1BvcHVwVGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInBvcHVwVGl0bGVTd2l0Y2hJY29uXCIgY2xhc3M9XCJhY3Rpb25zaGVldE1lbnVJdGVtSWNvbiBsaXN0SXRlbUljb24gbGlzdEl0ZW1JY29uLXRyYW5zcGFyZW50IG1hdGVyaWFsLWljb25zIGtleWJvYXJkX2JhY2tzcGFjZSAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5ncm91cHMubGVuZ3RoID4gMSA/ICcnIDogJ2hpZGUnfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJhY3Rpb25TaGVldFRpdGxlXCI+PC9oMT5cbiAgICAgICAgICAgICAgICAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50ID8gJzxkaXYgY2xhc3M9XCJwcmV2aWV3R3JvdXBXYXRjaGVkQ291bnRcIj48L2Rpdj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbikge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbGlja0hhbmRsZXIoZSkpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFRleHQodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJUZXh0ID0gdGV4dFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTd2l0Y2hhYmxlKHN3aXRjaGFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJyNwb3B1cFRpdGxlU3dpdGNoSWNvbicpPy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIXN3aXRjaGFibGUpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFdhdGNoZWRDb3VudChncm91cDogR3JvdXApIHtcbiAgICAgICAgY29uc3Qgd2F0Y2hlZENvdW50RWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICAgICAgaWYgKHdhdGNoZWRDb3VudEVsZW1lbnQpIHdhdGNoZWRDb3VudEVsZW1lbnQuaW5uZXJIVE1MID0gcmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sKGdyb3VwLCB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuV2F0Y2hDb3VudERpc3BsYXlNb2RlKVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0VmlzaWJsZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KClcbiAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFByZXZpZXdCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBQcmV2aWV3QnV0dG9uJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImF1dG9TaXplIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCIgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXBpc29kZSBQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+XG4gICAgICAgICAgICAgICAgPHN2ZyBpZD1cInN2ZzFcIlxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYgNFwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwibGF5ZXIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3Q0N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NjQ2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzLjc1Njg2NzZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMi4xNjkzNjYxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIwLjIzODIzMzAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIxLjgyNTczMzVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc2NTk3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjAyOTE0MzcsMS4wMzIwNDgyIGggMy43NTI4OTkxIHYgMi4xNzIyMzk0IGwgMC4wMDY3NiwtMi4xNTcyNTk1IHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny04XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc3NDI3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjgyMjg2MTQsMC4yMzg3MTMzNiBoIDMuNzU5MjU5IFYgMi40MTAxMjExIGwgLTAuMDA2OCwtMi4xNzE0MDc3NCB6XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiBhbnkgPT4gY2xpY2tIYW5kbGVyKCkpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ2Zhdm9yaXRlQnV0dG9uLScgKyBpdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXJhdGluZ2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0/LklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuaXRlbT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pc2Zhdm9yaXRlPVwiJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5Jc0Zhdm9yaXRlID8/IGZhbHNlfVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZmF2b3JpdGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIFBsYXlTdGF0ZUljb25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwbGF5U3RhdGVCdXR0b24tJyArIHRoaXMuaXRlbS5JZClcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1wbGF5c3RhdGVidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5pdGVtPy5JZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNlcnZlcmlkPVwiJHt0aGlzLml0ZW0/LlNlcnZlcklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbXR5cGU9XCJFcGlzb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1saWtlcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGxheWVkPVwiJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5QbGF5ZWQgPz8gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNYXJrIHBsYXllZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2hlY2sgcGxheXN0YXRlYnV0dG9uLWljb24tJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5QbGF5ZWQgPyBcInBsYXllZFwiIDogXCJ1bnBsYXllZFwifVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn1cbiIsImNvbnN0IFNQSU5ORVJfTEFZRVJTX0hUTUw6IHN0cmluZyA9IFsxLCAyLCAzLCA0XS5tYXAobGF5ZXIgPT5cbiAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19sYXllciBtZGwtc3Bpbm5lcl9fbGF5ZXItJHtsYXllcn1cIj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXIgbWRsLXNwaW5uZXJfX2xlZnRcIj5gICtcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZSBtZGwtc3Bpbm5lcl9fY2lyY2xlTGVmdFwiPjwvZGl2PmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZS1jbGlwcGVyIG1kbC1zcGlubmVyX19yaWdodFwiPmAgK1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlIG1kbC1zcGlubmVyX19jaXJjbGVSaWdodFwiPjwvZGl2PmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgYDwvZGl2PmBcbikuam9pbignJylcblxuZXhwb3J0IGZ1bmN0aW9uIHNwaW5uZXJIdG1sKGV4dHJhQ2xhc3Nlczogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdiBkaXI9XCJsdHJcIiBjbGFzcz1cImRvY3NwaW5uZXIgbWRsLXNwaW5uZXIgJHtleHRyYUNsYXNzZXN9XCI+JHtTUElOTkVSX0xBWUVSU19IVE1MfTwvZGl2PmBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlU3Bpbm5lcihjb250YWluZXI6IFBhcmVudE5vZGUpOiB2b2lkIHtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm1kbC1zcGlubmVyJyk/LmNsYXNzTGlzdC5hZGQoJ21kbFNwaW5uZXJBY3RpdmUnKVxufSIsImV4cG9ydCBlbnVtIEVuZHBvaW50cyB7XG4gICAgQkFTRSA9IFwiSW5QbGF5ZXJQcmV2aWV3XCIsXG4gICAgSVRFTV9ERVNDUklQVElPTiA9IFwiL0l0ZW1zL3tpdGVtSWR9XCIsXG4gICAgUExBWV9NRURJQSA9IFwiL0l0ZW1zL3tpdGVtSWR9L1BsYXkve3RpY2tzfVwiLFxuICAgIE5PV19QTEFZSU5HX0lURU0gPSBcIi9Ob3dQbGF5aW5nSXRlbVwiLFxuICAgIFNFUlZFUl9TRVRUSU5HUyA9IFwiL1NlcnZlclNldHRpbmdzXCIsXG4gICAgSVRFTV9QUkVWSUVXX0RBVEEgPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L0l0ZW1zL3tpdGVtSWR9L1ByZXZpZXdEYXRhXCIsXG4gICAgR1JPVVBfSVRFTVMgPSBcIi9Vc2Vycy97dXNlcklkfS9Hcm91cHMve2dyb3VwSWR9L0l0ZW1zXCIsXG4gICAgR1JPVVBfV0FUQ0hFRF9DT1VOVCA9IFwiL1VzZXJzL3t1c2VySWR9L0dyb3Vwcy97Z3JvdXBJZH0vV2F0Y2hlZENvdW50XCIsXG4gICAgQ09OVEFJTklOR19DT0xMRUNUSU9OUyA9IFwiL1VzZXJzL3t1c2VySWR9L0l0ZW1zL3tpdGVtSWR9L0NvbnRhaW5pbmdDb2xsZWN0aW9uc1wiLFxuICAgIFNFVF9TT1VSQ0VfQ09MTEVDVElPTiA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vU291cmNlQ29sbGVjdGlvbi97Y29sbGVjdGlvbklkfVwiLFxuICAgIFBMVUdJTl9TRVRUSU5HUyA9IFwiL1BsdWdpblNldHRpbmdzXCJcbn0iLCJpbXBvcnQge0xpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7R3JvdXAsIFVOS05PV05fV0FUQ0hFRF9DT1VOVH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge0dyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Hcm91cExpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7UG9wdXBUaXRsZVRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuL0VuZHBvaW50c1wiO1xuaW1wb3J0IHtHcm91cEl0ZW1zUmVzdWx0fSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBJdGVtc1Jlc3VsdFwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge2FjdGl2YXRlU3Bpbm5lciwgc3Bpbm5lckh0bWx9IGZyb20gXCIuL0NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IHt1cGRhdGVXYXRjaGVkQ291bnREb219IGZyb20gXCIuL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCI7XG5cbi8vIFRoZSBiYWNrZW5kIGFscmVhZHkgcmV0dXJucyBQbGF5bGlzdHMvQm94U2V0cyBhbmQgRm9sZGVycyBpbiB0aGVpciBvd24gbWFudWFsIGl0ZW0vZGlzc3BsYXkgb3JkZXJcbi8vIHNvcnRpbmcgc2hvdWxkIG9ubHkgYXBwbHkgZm9yIHNlYXNvbi1iYXNlZCAoRXBpc29kZSkgZ3JvdXBzLCB3aGVyZSBpdCByZWZsZWN0cyBhY3R1YWwgZXBpc29kZSBvcmRlci5cbmNvbnN0IHByZXNlcnZlQmFja2VuZE9yZGVyVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5QbGF5bGlzdCwgSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5Gb2xkZXJdKVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHsgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtczogUHJldmlld0l0ZW1bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIgPSAwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBGb3IgUGxheWxpc3RzL0JveFNldHMsIHNob3cgdGhlIGFjdHVhbCBsaXN0IHBvc2l0aW9uIGluc3RlYWQgb2YgdGhlIEluZGV4TnVtYmVyIGZyb20gdGhlaXIgc2Vhc29uL2VwaXNvZGUuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcHJlc2VydmVPcmRlciA/IHsgLi4uaXRlbXNbaV0sIEluZGV4TnVtYmVyOiBvZmZzZXQgKyBpICsgMSB9IDogaXRlbXNbaV1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVySXRlbShpdGVtLCBwYXJlbnREaXYsIG9mZnNldCArIGkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIHByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXM6IFByZXZpZXdJdGVtW10sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIG9mZnNldDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcmVzZXJ2ZU9yZGVyID8geyAuLi5pdGVtc1tpXSwgSW5kZXhOdW1iZXI6IG9mZnNldCArIGkgKyAxIH0gOiBpdGVtc1tpXVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIHBhcmVudERpdiwgLTEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaG93IGEgXCJTaG93IG1vcmVcIiBidXR0b24gaWYgZGVzY3JpcHRpb24gZXhjZWVkcyBtYXggaGVpZ2h0XG4gICAgcHJpdmF0ZSBhcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbUNvbnRhaW5lcjogRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJylcbiAgICAgICAgY29uc3QgcmVhZE1vcmVCdXR0b24gPSBpdGVtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbicpXG4gICAgICAgIGlmICghZGVzY3JpcHRpb24gfHwgIXJlYWRNb3JlQnV0dG9uKSByZXR1cm5cblxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpXG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLnRleHRDb250ZW50ID0gJ1Nob3cgbW9yZSdcblxuICAgICAgICBjb25zdCBpc092ZXJmbG93aW5nID0gZGVzY3JpcHRpb24uc2Nyb2xsSGVpZ2h0ID4gZGVzY3JpcHRpb24uY2xpZW50SGVpZ2h0XG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaXNPdmVyZmxvd2luZylcbiAgICAgICAgaWYgKCFpc092ZXJmbG93aW5nKSByZXR1cm5cblxuICAgICAgICByZWFkTW9yZUJ1dHRvbi5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkID0gZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKVxuICAgICAgICAgICAgcmVhZE1vcmVCdXR0b24udGV4dENvbnRlbnQgPSBleHBhbmRlZCA/ICdTaG93IGxlc3MnIDogJ1Nob3cgbW9yZSdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgcmVuZGVySXRlbShpdGVtOiBQcmV2aWV3SXRlbSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgaXRlbUxpc3RFbGVtZW50VGVtcGxhdGUgPSBuZXcgTGlzdEVsZW1lbnRUZW1wbGF0ZShwYXJlbnREaXYsIHBvc2l0aW9uQWZ0ZXJJbmRleCwgaXRlbSwgdGhpcy5wbGF5YmFja0hhbmRsZXIsIHRoaXMucHJvZ3JhbURhdGFTdG9yZSk7XG4gICAgICAgIGl0ZW1MaXN0RWxlbWVudFRlbXBsYXRlLnJlbmRlcihhc3luYyAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgLy8gaGlkZSBpdGVtIGNvbnRlbnQgZm9yIGFsbCBleGlzdGluZyBpdGVtcyBpbiB0aGUgcHJldmlldyBsaXN0XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXZpZXdMaXN0SXRlbUNvbnRlbnRcIikuZm9yRWFjaCgoZWxlbWVudDogRWxlbWVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXI6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS0ke2l0ZW0uSWR9YCkucXVlcnlTZWxlY3RvcignLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQnKTtcblxuICAgICAgICAgICAgLy8gbG9hZCBpdGVtIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBpZiAoIWl0ZW0uRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX0RFU0NSSVBUSU9OfWBcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbS5JZCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uOiBzdHJpbmcgPSByZXN1bHQ/LkRlc2NyaXB0aW9uXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJldmlld0l0ZW1EZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gbmV3RGVzY3JpcHRpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2hvdyBpdGVtIGNvbnRlbnQgZm9yIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICAgICAgdGhpcy5hcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGl0ZW0uSWQgPT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtTm9kZTogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLSR7aXRlbS5JZH1gKS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0xpc3RJdGVtQ29udGVudCcpO1xuXG4gICAgICAgICAgICAvLyBwcmVsb2FkIGRlc2NyaXB0aW9uIGZvciB0aGUgY3VycmVudGx5IHBsYXlpbmcgaXRlbVxuICAgICAgICAgICAgaWYgKCFpdGVtLkRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuSVRFTV9ERVNDUklQVElPTn1gXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW0uSWQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbjogc3RyaW5nID0gcmVzdWx0Py5EZXNjcmlwdGlvblxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGl0ZW1Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBuZXdEZXNjcmlwdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICBpdGVtTm9kZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZExpc3RJdGVtJyk7XG4gICAgICAgICAgICB0aGlzLmFwcGx5RGVzY3JpcHRpb25SZWFkTW9yZShpdGVtTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVNwaW5uZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgncHJldmlld1Njcm9sbFNwaW5uZXInKVxuICAgICAgICBzcGlubmVyLmlubmVySFRNTCA9IHNwaW5uZXJIdG1sKClcbiAgICAgICAgYWN0aXZhdGVTcGlubmVyKHNwaW5uZXIpXG4gICAgICAgIHJldHVybiBzcGlubmVyXG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgYXR0YWNoU2Nyb2xsUGFnaW5hdGlvbihcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgbG9hZFBhZ2U6IChzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4sXG4gICAgICAgIHZpZXdUb2tlbjogbnVtYmVyLFxuICAgICAgICBpbml0aWFsVG90YWxMb2FkZWQ6IG51bWJlcixcbiAgICAgICAgaW5pdGlhbFRvdGFsUmVjb3JkQ291bnQ6IG51bWJlcixcbiAgICAgICAgaW5pdGlhbExvYWRlZFN0YXJ0SW5kZXg6IG51bWJlclxuICAgICk6IHZvaWQge1xuICAgICAgICBjb25zdCBTQ1JPTExfVFJJR0dFUl9ESVNUQU5DRV9QWCA9IDIwMFxuXG4gICAgICAgIGxldCB0b3RhbExvYWRlZCA9IGluaXRpYWxUb3RhbExvYWRlZFxuICAgICAgICBsZXQgdG90YWxSZWNvcmRDb3VudCA9IGluaXRpYWxUb3RhbFJlY29yZENvdW50XG4gICAgICAgIGxldCBsb2FkZWRTdGFydEluZGV4ID0gaW5pdGlhbExvYWRlZFN0YXJ0SW5kZXhcbiAgICAgICAgbGV0IGxvYWRpbmdGb3J3YXJkID0gZmFsc2VcbiAgICAgICAgbGV0IGxvYWRpbmdCYWNrd2FyZCA9IGZhbHNlXG5cbiAgICAgICAgY29uc3QgbG9hZE5leHRQYWdlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgbG9hZGluZ0ZvcndhcmQgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCBzcGlubmVyID0gdGhpcy5jcmVhdGVTcGlubmVyRWxlbWVudCgpXG4gICAgICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoc3Bpbm5lcilcblxuICAgICAgICAgICAgY29uc3QgeyBpdGVtcywgdG90YWxSZWNvcmRDb3VudDogbmV3VG90YWxSZWNvcmRDb3VudCB9ID0gYXdhaXQgbG9hZFBhZ2UodG90YWxMb2FkZWQpXG4gICAgICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtcywgcGFyZW50RGl2LCB0b3RhbExvYWRlZClcbiAgICAgICAgICAgIHRvdGFsTG9hZGVkICs9IGl0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgdG90YWxSZWNvcmRDb3VudCA9IG5ld1RvdGFsUmVjb3JkQ291bnRcbiAgICAgICAgICAgIGxvYWRpbmdGb3J3YXJkID0gZmFsc2VcblxuICAgICAgICAgICAgLy8gVGhlIG5ld2x5IGxvYWRlZCBwYWdlIG1pZ2h0IHN0aWxsIG5vdCBmaWxsIHRoZSBjb250YWluZXIsIHNvIHJlLWNoZWNrIHJpZ2h0IGF3YXkuXG4gICAgICAgICAgICBjaGVja1Njcm9sbFBvc2l0aW9uKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRQcmV2aW91c1BhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBsb2FkaW5nQmFja3dhcmQgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHRCZWZvcmVTcGlubmVyID0gcGFyZW50RGl2LnNjcm9sbEhlaWdodFxuICAgICAgICAgICAgY29uc3Qgc3Bpbm5lciA9IHRoaXMuY3JlYXRlU3Bpbm5lckVsZW1lbnQoKVxuICAgICAgICAgICAgcGFyZW50RGl2Lmluc2VydEJlZm9yZShzcGlubmVyLCBwYXJlbnREaXYuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIHBhcmVudERpdi5zY3JvbGxUb3AgKz0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIHNjcm9sbEhlaWdodEJlZm9yZVNwaW5uZXJcblxuICAgICAgICAgICAgY29uc3QgcGFnZVNpemUgPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICBjb25zdCBuZXdTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgbG9hZGVkU3RhcnRJbmRleCAtIHBhZ2VTaXplKVxuICAgICAgICAgICAgY29uc3QgeyBpdGVtcyB9ID0gYXdhaXQgbG9hZFBhZ2UobmV3U3RhcnRJbmRleClcbiAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodEJlZm9yZVByZXBlbmQgPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXMsIHBhcmVudERpdiwgbmV3U3RhcnRJbmRleClcbiAgICAgICAgICAgIHBhcmVudERpdi5zY3JvbGxUb3AgKz0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIHNjcm9sbEhlaWdodEJlZm9yZVByZXBlbmRcbiAgICAgICAgICAgIGxvYWRlZFN0YXJ0SW5kZXggPSBuZXdTdGFydEluZGV4XG4gICAgICAgICAgICBsb2FkaW5nQmFja3dhcmQgPSBmYWxzZVxuXG4gICAgICAgICAgICBjaGVja1Njcm9sbFBvc2l0aW9uKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoZWNrU2Nyb2xsUG9zaXRpb24gPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnREaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGxQb3NpdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmVhckJvdHRvbSA9IHBhcmVudERpdi5zY3JvbGxUb3AgKyBwYXJlbnREaXYuY2xpZW50SGVpZ2h0ID49IHBhcmVudERpdi5zY3JvbGxIZWlnaHQgLSBTQ1JPTExfVFJJR0dFUl9ESVNUQU5DRV9QWFxuICAgICAgICAgICAgaWYgKCFsb2FkaW5nRm9yd2FyZCAmJiB0b3RhbExvYWRlZCA8IHRvdGFsUmVjb3JkQ291bnQgJiYgbmVhckJvdHRvbSkge1xuICAgICAgICAgICAgICAgIGxvYWROZXh0UGFnZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5lYXJUb3AgPSBwYXJlbnREaXYuc2Nyb2xsVG9wIDw9IFNDUk9MTF9UUklHR0VSX0RJU1RBTkNFX1BYXG4gICAgICAgICAgICBpZiAoIWxvYWRpbmdCYWNrd2FyZCAmJiBsb2FkZWRTdGFydEluZGV4ID4gMCAmJiBuZWFyVG9wKSB7XG4gICAgICAgICAgICAgICAgbG9hZFByZXZpb3VzUGFnZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnREaXYuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGxQb3NpdGlvbilcbiAgICAgICAgY2hlY2tTY3JvbGxQb3NpdGlvbigpXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUxhenlJdGVtTGlzdChcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgbG9hZFBhZ2U6IChzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4sXG4gICAgICAgIHZpZXdUb2tlbjogbnVtYmVyLFxuICAgICAgICBpbml0aWFsUGFnZT86IEdyb3VwSXRlbXNSZXN1bHQsXG4gICAgICAgIGluaXRpYWxPZmZzZXQ6IG51bWJlciA9IDBcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZmlyc3RQYWdlID0gaW5pdGlhbFBhZ2UgPz8gYXdhaXQgbG9hZFBhZ2UoMClcbiAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbUVsZW1lbnRzKGZpcnN0UGFnZS5pdGVtcywgcGFyZW50RGl2LCBpbml0aWFsT2Zmc2V0KVxuXG4gICAgICAgIGNvbnN0IHRvdGFsTG9hZGVkID0gaW5pdGlhbE9mZnNldCArIGZpcnN0UGFnZS5pdGVtcy5sZW5ndGhcbiAgICAgICAgdGhpcy5hdHRhY2hTY3JvbGxQYWdpbmF0aW9uKHBhcmVudERpdiwgbG9hZFBhZ2UsIHZpZXdUb2tlbiwgdG90YWxMb2FkZWQsIGZpcnN0UGFnZS50b3RhbFJlY29yZENvdW50LCBpbml0aWFsT2Zmc2V0KVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZmV0Y2hHcm91cFdhdGNoZWRDb3VudChncm91cElkOiBzdHJpbmcpOiBQcm9taXNlPHsgcGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIsIHBsYXllZFJ1bnRpbWVUaWNrczogbnVtYmVyLCB0b3RhbFJ1bnRpbWVUaWNrczogbnVtYmVyIH0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfV0FUQ0hFRF9DT1VOVH1gXG4gICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAgICAgLnJlcGxhY2UoJ3tncm91cElkfScsIGdyb3VwSWQpKVxuICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBsYXllZEl0ZW1Db3VudDogcmF3LlBsYXllZEl0ZW1Db3VudCxcbiAgICAgICAgICAgIHRvdGFsSXRlbUNvdW50OiByYXcuVG90YWxJdGVtQ291bnQsXG4gICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IHJhdy5QbGF5ZWRSdW50aW1lVGlja3MsXG4gICAgICAgICAgICB0b3RhbFJ1bnRpbWVUaWNrczogcmF3LlRvdGFsUnVudGltZVRpY2tzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXA6IEdyb3VwKTogUHJvbWlzZTxHcm91cD4ge1xuICAgICAgICBpZiAoZ3JvdXAucGxheWVkSXRlbUNvdW50ICE9PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHJldHVybiBncm91cFxuXG4gICAgICAgIGNvbnN0IHsgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudCwgcGxheWVkUnVudGltZVRpY2tzLCB0b3RhbFJ1bnRpbWVUaWNrcyB9ID0gYXdhaXQgdGhpcy5mZXRjaEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwLmdyb3VwSWQpXG4gICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5zZXRHcm91cFdhdGNoZWRDb3VudChncm91cC5ncm91cElkLCBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50LCBwbGF5ZWRSdW50aW1lVGlja3MsIHRvdGFsUnVudGltZVRpY2tzKVxuICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudCwgcGxheWVkUnVudGltZVRpY2tzLCB0b3RhbFJ1bnRpbWVUaWNrcyB9XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZUdyb3VwRWxlbWVudHMoXG4gICAgICAgIGdyb3VwczogR3JvdXBbXSxcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgY3VycmVudEdyb3VwSW5kZXg6IG51bWJlcixcbiAgICAgICAgdGl0bGVDb250YWluZXI6IFBvcHVwVGl0bGVUZW1wbGF0ZSxcbiAgICAgICAgbG9hZEl0ZW1zOiAoZ3JvdXBJZDogc3RyaW5nLCBzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD5cbiAgICApOiB2b2lkIHtcbiAgICAgICAgZ3JvdXBzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXhOdW1iZXIgLSBiLmluZGV4TnVtYmVyKVxuXG4gICAgICAgIC8vIEludmFsaWRhdGVzIGFueSBpdGVtIGxvYWQgc3RpbGwgaW4gcHJvZ3Jlc3NzXG4gICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZShwYXJlbnREaXYsIGksIGdyb3Vwc1tpXSwgZ3JvdXBzW2ldLmluZGV4TnVtYmVyID09PSBjdXJyZW50R3JvdXBJbmRleCwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQsIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5XYXRjaENvdW50RGlzcGxheU1vZGUpXG4gICAgICAgICAgICBncm91cC5yZW5kZXIoYXN5bmMgKGU6IE1vdXNlRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCA9IGdyb3Vwc1tpXS5ncm91cElkXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0VGV4dChncm91cHNbaV0uZ3JvdXBOYW1lKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBzW2ldLnBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZUdyb3VwV2F0Y2hlZENvdW50KGdyb3Vwc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHRpdGxlQ29udGFpbmVyLnNldFdhdGNoZWRDb3VudCh1cGRhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpXG5cbiAgICAgICAgICAgICAgICBwYXJlbnREaXYuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3VG9rZW4gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZCA9ICF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWRcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmZpbmQoZyA9PiBnLmdyb3VwSWQgPT09IGdyb3Vwc1tpXS5ncm91cElkKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxQYWdlOiBHcm91cEl0ZW1zUmVzdWx0IHwgdW5kZWZpbmVkID0gY2FjaGVkPy5sb2FkZWRTdGFydEluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyB7IGl0ZW1zOiBbLi4uY2FjaGVkLml0ZW1zXSwgdG90YWxSZWNvcmRDb3VudDogY2FjaGVkLmxvYWRlZFRvdGFsUmVjb3JkQ291bnQgPz8gY2FjaGVkLml0ZW1zLmxlbmd0aCB9XG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbE9mZnNldCA9IGNhY2hlZD8ubG9hZGVkU3RhcnRJbmRleCA/PyAwXG5cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUxhenlJdGVtTGlzdChwYXJlbnREaXYsIChzdGFydEluZGV4KSA9PiBsb2FkSXRlbXMoZ3JvdXBzW2ldLmdyb3VwSWQsIHN0YXJ0SW5kZXgpLCB2aWV3VG9rZW4sIGluaXRpYWxQYWdlLCBpbml0aWFsT2Zmc2V0KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50ICYmIGdyb3Vwc1tpXS5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHVwZGF0ZVdhdGNoZWRDb3VudERvbSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHVwZGF0ZWQpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gSXRlbVR5cGUge1xuICAgIEFnZ3JlZ2F0ZUZvbGRlcixcbiAgICBBdWRpbyxcbiAgICBBdWRpb0Jvb2ssXG4gICAgQmFzZVBsdWdpbkZvbGRlcixcbiAgICBCb29rLFxuICAgIEJveFNldCxcbiAgICBDaGFubmVsLFxuICAgIENoYW5uZWxGb2xkZXJJdGVtLFxuICAgIENvbGxlY3Rpb25Gb2xkZXIsXG4gICAgRXBpc29kZSxcbiAgICBGb2xkZXIsXG4gICAgR2VucmUsXG4gICAgTWFudWFsUGxheWxpc3RzRm9sZGVyLFxuICAgIE1vdmllLFxuICAgIExpdmVUdkNoYW5uZWwsXG4gICAgTGl2ZVR2UHJvZ3JhbSxcbiAgICBNdXNpY0FsYnVtLFxuICAgIE11c2ljQXJ0aXN0LFxuICAgIE11c2ljR2VucmUsXG4gICAgTXVzaWNWaWRlbyxcbiAgICBQZXJzb24sXG4gICAgUGhvdG8sXG4gICAgUGhvdG9BbGJ1bSxcbiAgICBQbGF5bGlzdCxcbiAgICBQbGF5bGlzdHNGb2xkZXIsXG4gICAgUHJvZ3JhbSxcbiAgICBSZWNvcmRpbmcsXG4gICAgU2Vhc29uLFxuICAgIFNlcmllcyxcbiAgICBTdHVkaW8sXG4gICAgVHJhaWxlcixcbiAgICBUdkNoYW5uZWwsXG4gICAgVHZQcm9ncmFtLFxuICAgIFVzZXJSb290Rm9sZGVyLFxuICAgIFVzZXJWaWV3LFxuICAgIFZpZGVvLFxuICAgIFllYXJcbn0iLCJpbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi9JdGVtVHlwZVwiO1xuaW1wb3J0IHtXYXRjaENvdW50RGlzcGxheU1vZGV9IGZyb20gXCIuL1dhdGNoQ291bnREaXNwbGF5TW9kZVwiO1xuXG5leHBvcnQgdHlwZSBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICBFbmFibGVkSXRlbVR5cGVzOiBJdGVtVHlwZVtdLFxuICAgIEJsdXJEZXNjcmlwdGlvbjogYm9vbGVhbixcbiAgICBCbHVyVGh1bWJuYWlsOiBib29sZWFuLFxuICAgIEVwaXNvZGVQYWdlU2l6ZTogbnVtYmVyLFxuICAgIFNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4sXG4gICAgV2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUsXG4gICAgU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zOiBib29sZWFuLFxuICAgIE9ubHlCbHVyVW53YXRjaGVkOiBib29sZWFuLFxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFBsdWdpblNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICBFbmFibGVkSXRlbVR5cGVzOiBbSXRlbVR5cGUuU2VyaWVzLCBJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLk1vdmllLCBJdGVtVHlwZS5Gb2xkZXIsIEl0ZW1UeXBlLlZpZGVvXSxcbiAgICBCbHVyRGVzY3JpcHRpb246IGZhbHNlLFxuICAgIEJsdXJUaHVtYm5haWw6IGZhbHNlLFxuICAgIEVwaXNvZGVQYWdlU2l6ZTogMTAsXG4gICAgU2hvd1dhdGNoZWRDb3VudDogdHJ1ZSxcbiAgICBXYXRjaENvdW50RGlzcGxheU1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Ib3Vyc01pbnV0ZXMsXG4gICAgU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zOiB0cnVlLFxuICAgIE9ubHlCbHVyVW53YXRjaGVkOiBmYWxzZSxcbn0iLCJpbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi9QcmV2aWV3SXRlbVwiO1xuXG5leHBvcnQgdHlwZSBHcm91cCA9IHtcbiAgICBncm91cElkOiBzdHJpbmdcbiAgICBncm91cE5hbWU6IHN0cmluZ1xuICAgIGl0ZW1zOiBQcmV2aWV3SXRlbVtdXG4gICAgaW5kZXhOdW1iZXI6IG51bWJlclxuICAgIHBsYXllZEl0ZW1Db3VudDogbnVtYmVyXG4gICAgdG90YWxJdGVtQ291bnQ6IG51bWJlclxuICAgIHBsYXllZFJ1bnRpbWVUaWNrczogbnVtYmVyXG4gICAgdG90YWxSdW50aW1lVGlja3M6IG51bWJlclxuICAgIGxvYWRlZFN0YXJ0SW5kZXg/OiBudW1iZXJcbiAgICBsb2FkZWRFbmRJbmRleD86IG51bWJlclxuICAgIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ/OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IFVOS05PV05fV0FUQ0hFRF9DT1VOVCA9IC0xXG5cbmV4cG9ydCBjb25zdCBmb3JtYXRXYXRjaGVkQ291bnQgPSAocGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIpOiBzdHJpbmcgPT5cbiAgICBwbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCB8fCB0b3RhbEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UXG4gICAgICAgID8gJ+KApiB3YXRjaGVkJ1xuICAgICAgICA6IGAke3BsYXllZEl0ZW1Db3VudH0vJHt0b3RhbEl0ZW1Db3VudH0gd2F0Y2hlZGBcblxuIiwiaW1wb3J0IHtmb3JtYXRXYXRjaGVkQ291bnQsIEdyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuL0dyb3VwXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4uL1dhdGNoQ291bnREaXNwbGF5TW9kZVwiO1xuXG5jb25zdCBUSUNLU19QRVJfU0VDT05EID0gMTBfMDAwXzAwMFxuXG5jb25zdCBnZXRUaW1lU3RyaW5nID0gKHRpY2tzOiBudW1iZXIsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IHN0cmluZyA9PiB7XG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpY2tzIC8gVElDS1NfUEVSX1NFQ09ORFxuICAgIGNvbnN0IHRvdGFsTWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKVxuICAgIGNvbnN0IHRvdGFsSG91cnMgPSBNYXRoLmZsb29yKHRvdGFsTWludXRlcyAvIDYwKVxuICAgIGNvbnN0IHRvdGFsRGF5cyA9IE1hdGguZmxvb3IodG90YWxIb3VycyAvIDI0KVxuICAgIGNvbnN0IHRvdGFsTW9udGhzID0gTWF0aC5mbG9vcih0b3RhbERheXMgLyAzMClcbiAgICBjb25zdCB0b3RhbFllYXJzID0gTWF0aC5mbG9vcih0b3RhbERheXMgLyAzNjUpXG5cbiAgICBpZiAobW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkhvdXJzTWludXRlcykge1xuICAgICAgICBpZiAodG90YWxIb3VycyA+PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gdG90YWxNaW51dGVzICUgNjBcbiAgICAgICAgICAgIHJldHVybiBtaW51dGVzID4gMCA/IGAke3RvdGFsSG91cnN9aCAke21pbnV0ZXN9bWAgOiBgJHt0b3RhbEhvdXJzfWhgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdGFsTWludXRlcyA+IDAgPyBgJHt0b3RhbE1pbnV0ZXN9bWAgOiAnMG0nXG4gICAgfVxuXG4gICAgaWYgKHRvdGFsWWVhcnMgPj0gMSkge1xuICAgICAgICBjb25zdCBtb250aHMgPSBNYXRoLmZsb29yKCh0b3RhbERheXMgJSAzNjUpIC8gMzApXG4gICAgICAgIHJldHVybiBtb250aHMgPiAwID8gYCR7dG90YWxZZWFyc315ICR7bW9udGhzfW1vYCA6IGAke3RvdGFsWWVhcnN9eWBcbiAgICB9XG4gICAgaWYgKHRvdGFsTW9udGhzID49IDEpIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IHRvdGFsRGF5cyAlIDMwXG4gICAgICAgIHJldHVybiBkYXlzID4gMCA/IGAke3RvdGFsTW9udGhzfW1vICR7ZGF5c31kYCA6IGAke3RvdGFsTW9udGhzfW1vYFxuICAgIH1cbiAgICBpZiAodG90YWxEYXlzID49IDEpIHtcbiAgICAgICAgY29uc3QgaG91cnMgPSB0b3RhbEhvdXJzICUgMjRcbiAgICAgICAgcmV0dXJuIGhvdXJzID4gMCA/IGAke3RvdGFsRGF5c31kICR7aG91cnN9aGAgOiBgJHt0b3RhbERheXN9ZGBcbiAgICB9XG4gICAgaWYgKHRvdGFsSG91cnMgPj0gMSkge1xuICAgICAgICBjb25zdCBtaW51dGVzID0gdG90YWxNaW51dGVzICUgNjBcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXMgPiAwID8gYCR7dG90YWxIb3Vyc31oICR7bWludXRlc31tYCA6IGAke3RvdGFsSG91cnN9aGBcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsTWludXRlcyA+IDAgPyBgJHt0b3RhbE1pbnV0ZXN9bWAgOiAnMG0nXG59XG5cbmNvbnN0IGNsYW1wUHJvZ3Jlc3MgPSAocHJvZ3Jlc3M6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIE1hdGgucm91bmQocHJvZ3Jlc3MpKSlcblxuZXhwb3J0IGNvbnN0IGdldFdhdGNoUHJvZ3Jlc3NQZXJjZW50ID0gKGdyb3VwOiBHcm91cCwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogbnVtYmVyID0+IHtcbiAgICBpZiAobW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkNvdW50KSB7XG4gICAgICAgIGlmICghZ3JvdXAudG90YWxJdGVtQ291bnQpIHJldHVybiAwXG4gICAgICAgIHJldHVybiBjbGFtcFByb2dyZXNzKChncm91cC5wbGF5ZWRJdGVtQ291bnQgLyBncm91cC50b3RhbEl0ZW1Db3VudCkgKiAxMDApXG4gICAgfVxuXG4gICAgaWYgKCFncm91cC50b3RhbFJ1bnRpbWVUaWNrcykgcmV0dXJuIDBcbiAgICByZXR1cm4gY2xhbXBQcm9ncmVzcygoZ3JvdXAucGxheWVkUnVudGltZVRpY2tzIC8gZ3JvdXAudG90YWxSdW50aW1lVGlja3MpICogMTAwKVxufVxuXG5leHBvcnQgY29uc3QgaXNXYXRjaGVkQ291bnRVbmtub3duID0gKGdyb3VwOiBHcm91cCwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKGdyb3VwLnBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UIHx8IGdyb3VwLnRvdGFsSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpXG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgICByZXR1cm4gbW9kZSAhPT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkNvdW50XG4gICAgICAgICYmIChncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCB8fCBncm91cC50b3RhbFJ1bnRpbWVUaWNrcyA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0V2F0Y2hlZENvdW50VGV4dCA9IChncm91cDogR3JvdXAsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Db3VudClcbiAgICAgICAgcmV0dXJuIGZvcm1hdFdhdGNoZWRDb3VudChncm91cC5wbGF5ZWRJdGVtQ291bnQsIGdyb3VwLnRvdGFsSXRlbUNvdW50KVxuXG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5QZXJjZW50YWdlKVxuICAgICAgICByZXR1cm4gYCR7Z2V0V2F0Y2hQcm9ncmVzc1BlcmNlbnQoZ3JvdXAsIG1vZGUpfSVgXG5cbiAgICBjb25zdCBzYWZlVG90YWwgPSBNYXRoLm1heCgwLCBncm91cC50b3RhbFJ1bnRpbWVUaWNrcyB8fCAwKVxuICAgIGNvbnN0IHNhZmVQbGF5ZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzYWZlVG90YWwsIGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyB8fCAwKSlcbiAgICByZXR1cm4gYCR7Z2V0VGltZVN0cmluZyhzYWZlUGxheWVkLCBtb2RlKX0gLyAke2dldFRpbWVTdHJpbmcoc2FmZVRvdGFsLCBtb2RlKX1gXG59XG5cbi8vIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9uMDBiY29kci9KZWxseWZpbi1FbmhhbmNlZC9ibG9iL21haW4vSmVsbHlmaW4uUGx1Z2luLkplbGx5ZmluRW5oYW5jZWQvanMvZW5oYW5jZWQvaXRlbWRldGFpbHMvZmVhdHVyZXMtZGV0YWlscy1tZWRpYS1pbmZvLmpzXG5jb25zdCBnZXRXYXRjaFByb2dyZXNzSWNvbkh0bWwgPSAocHJvZ3Jlc3M6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogOCAvLyByYWRpdXMgPSA4XG4gICAgY29uc3Qgb2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAtIChwcm9ncmVzcyAvIDEwMCkgKiBjaXJjdW1mZXJlbmNlXG5cbiAgICBpZiAocHJvZ3Jlc3MgPj0gMTAwKSB7XG4gICAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwLjNlbTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBmbGV4LXNocmluazogMDtcIj5cbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS41IDE1LjVsLTMtMyAxLjQtMS40TDkuNSAxMi43bDUuNi01LjYgMS40IDEuNHpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8L3N2Zz5gXG4gICAgfVxuXG4gICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDAuM2VtOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGZsZXgtc2hyaW5rOiAwO1wiPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjhcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBvcGFjaXR5PVwiMC4yXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjhcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgICAgc3R5bGU9XCJzdHJva2UtZGFzaGFycmF5OiAke2NpcmN1bWZlcmVuY2V9OyBzdHJva2UtZGFzaG9mZnNldDogJHtvZmZzZXR9OyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1wiLz5cbiAgICA8L3N2Zz5gXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWwgPSAoZ3JvdXA6IEdyb3VwLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChpc1dhdGNoZWRDb3VudFVua25vd24oZ3JvdXAsIG1vZGUpKVxuICAgICAgICByZXR1cm4gYCR7Z2V0V2F0Y2hQcm9ncmVzc0ljb25IdG1sKDApfTxzcGFuIGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50VGV4dFwiPiwsLDwvc3Bhbj5gXG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IGdldFdhdGNoUHJvZ3Jlc3NQZXJjZW50KGdyb3VwLCBtb2RlKVxuICAgIHJldHVybiBgJHtnZXRXYXRjaFByb2dyZXNzSWNvbkh0bWwocHJvZ3Jlc3MpfTxzcGFuIGNsYXNzPVwicHJldmlld0dyb3VwV2F0Y2hlZENvdW50VGV4dFwiPiR7Zm9ybWF0V2F0Y2hlZENvdW50VGV4dChncm91cCwgbW9kZSl9PC9zcGFuPmBcbn1cbiIsImV4cG9ydCB0eXBlIFNlcnZlclNldHRpbmdzID0ge1xuICAgIE1pblJlc3VtZVBjdDogbnVtYmVyLCBcbiAgICBNYXhSZXN1bWVQY3Q6IG51bWJlciwgXG4gICAgTWluUmVzdW1lRHVyYXRpb25TZWNvbmRzOiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXJ2ZXJTZXR0aW5nczogU2VydmVyU2V0dGluZ3MgPSB7XG4gICAgTWluUmVzdW1lUGN0OiA1LFxuICAgIE1heFJlc3VtZVBjdDogOTAsXG4gICAgTWluUmVzdW1lRHVyYXRpb25TZWNvbmRzOiAzMDBcbn0iLCJleHBvcnQgZW51bSBXYXRjaENvdW50RGlzcGxheU1vZGUge1xuICAgIENvdW50ID0gMCxcbiAgICBIb3Vyc01pbnV0ZXMgPSAxLFxuICAgIEFsbFVuaXRzID0gMixcbiAgICBQZXJjZW50YWdlID0gMyxcbn1cbiIsImltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtyZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWx9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvV2F0Y2hQcm9ncmVzc1wiO1xuXG50eXBlIFVzZXJEYXRhQ2hhbmdlZEVudHJ5ID0ge1xuICAgIEl0ZW1JZDogc3RyaW5nXG4gICAgUGxheWVkOiBib29sZWFuXG4gICAgSXNGYXZvcml0ZTogYm9vbGVhblxuICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyXG4gICAgUGxheWVkUGVyY2VudGFnZT86IG51bWJlclxufVxuXG50eXBlIFdlYlNvY2tldE1lc3NhZ2UgPSB7XG4gICAgTWVzc2FnZVR5cGU6IHN0cmluZ1xuICAgIERhdGE6IGFueVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlV2F0Y2hlZENvdW50RG9tKHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGdyb3VwOiBHcm91cCk6IHZvaWQge1xuICAgIGNvbnN0IGh0bWwgPSByZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWwoZ3JvdXAsIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuV2F0Y2hDb3VudERpc3BsYXlNb2RlKVxuXG4gICAgaWYgKGdyb3VwLmdyb3VwSWQgPT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCkge1xuICAgICAgICBjb25zdCBwb3B1cFdhdGNoZWRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cFRpdGxlQ29udGFpbmVyJyk/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICAgICAgaWYgKHBvcHVwV2F0Y2hlZENvdW50KSBwb3B1cFdhdGNoZWRDb3VudC5pbm5lckhUTUwgPSBodG1sXG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBMaXN0V2F0Y2hlZENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGdyb3VwLSR7Z3JvdXAuZ3JvdXBJZH1gKT8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgIGlmIChncm91cExpc3RXYXRjaGVkQ291bnQpIGdyb3VwTGlzdFdhdGNoZWRDb3VudC5pbm5lckhUTUwgPSBodG1sXG59XG5cbmZ1bmN0aW9uIHBsYXllZFJ1bnRpbWVDb250cmlidXRpb24oaXRlbTogUHJldmlld0l0ZW0sIHBsYXllZDogYm9vbGVhbiwgcGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBwbGF5ZWQgPyAoaXRlbS5SdW5UaW1lVGlja3MgPz8gMCkgOiBwbGF5YmFja1Bvc2l0aW9uVGlja3Ncbn1cblxuZnVuY3Rpb24gYWRqdXN0V2F0Y2hlZENvdW50KFxuICAgIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsXG4gICAgaXRlbTogUHJldmlld0l0ZW0sXG4gICAgd2FzUGxheWVkOiBib29sZWFuLFxuICAgIGlzUGxheWVkOiBib29sZWFuLFxuICAgIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyLFxuICAgIG5ld1BsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyXG4pOiB2b2lkIHtcbiAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCkgcmV0dXJuXG4gICAgaWYgKHdhc1BsYXllZCA9PT0gaXNQbGF5ZWQpIHJldHVyblxuXG4gICAgY29uc3QgZGVsdGFQbGF5ZWRDb3VudCA9IGlzUGxheWVkID8gMSA6IC0xXG4gICAgY29uc3QgZGVsdGFQbGF5ZWRSdW50aW1lVGlja3MgPVxuICAgICAgICBwbGF5ZWRSdW50aW1lQ29udHJpYnV0aW9uKGl0ZW0sIGlzUGxheWVkLCBuZXdQbGF5YmFja1Bvc2l0aW9uVGlja3MpIC1cbiAgICAgICAgcGxheWVkUnVudGltZUNvbnRyaWJ1dGlvbihpdGVtLCB3YXNQbGF5ZWQsIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcylcblxuICAgIGNvbnN0IHVwZGF0ZWRHcm91cCA9IHByb2dyYW1EYXRhU3RvcmUuYWRqdXN0R3JvdXBXYXRjaFN0YXRzKGl0ZW0uSWQsIGRlbHRhUGxheWVkQ291bnQsIGRlbHRhUGxheWVkUnVudGltZVRpY2tzKVxuICAgIGlmICh1cGRhdGVkR3JvdXApIHVwZGF0ZVdhdGNoZWRDb3VudERvbShwcm9ncmFtRGF0YVN0b3JlLCB1cGRhdGVkR3JvdXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQbGF5ZWRTdGF0ZUxvY2FsbHkocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgaXRlbUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtOiBQcmV2aWV3SXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSkgcmV0dXJuXG5cbiAgICBjb25zdCB3YXNQbGF5ZWQgPSBpdGVtLlVzZXJEYXRhLlBsYXllZFxuICAgIGNvbnN0IGlzUGxheWVkID0gIXdhc1BsYXllZFxuICAgIGNvbnN0IG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcyA9IGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzXG4gICAgY29uc3QgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzID0gaXNQbGF5ZWQgPyAwIDogb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YTogeyAuLi5pdGVtLlVzZXJEYXRhLCBQbGF5ZWQ6IGlzUGxheWVkLCBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcyB9XG4gICAgfSlcbiAgICBhZGp1c3RXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZSwgaXRlbSwgd2FzUGxheWVkLCBpc1BsYXllZCwgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzLCBuZXdQbGF5YmFja1Bvc2l0aW9uVGlja3MpXG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhRmV0Y2hlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIEV2ZW50cy5vbihBcGlDbGllbnQsICdtZXNzYWdlJywgKF9ldmVudCwgbWVzc2FnZTogV2ViU29ja2V0TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuTWVzc2FnZVR5cGUgIT09ICdVc2VyRGF0YUNoYW5nZWQnKSByZXR1cm5cbiAgICAgICAgICAgIGlmIChtZXNzYWdlLkRhdGEuVXNlcklkICE9PSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGFMaXN0OiBVc2VyRGF0YUNoYW5nZWRFbnRyeVtdID0gbWVzc2FnZS5EYXRhLlVzZXJEYXRhTGlzdCA/PyBbXVxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGF0YSBvZiB1c2VyRGF0YUxpc3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtOiBQcmV2aWV3SXRlbSA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZCh1c2VyRGF0YS5JdGVtSWQpXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FzUGxheWVkID0gaXRlbS5Vc2VyRGF0YS5QbGF5ZWRcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3MgPSBpdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrc1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgVXNlckRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0uVXNlckRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZWQ6IHVzZXJEYXRhLlBsYXllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIElzRmF2b3JpdGU6IHVzZXJEYXRhLklzRmF2b3JpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IHVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IHVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBhZGp1c3RXYXRjaGVkQ291bnQodGhpcy5wcm9ncmFtRGF0YVN0b3JlLCBpdGVtLCB3YXNQbGF5ZWQsIHVzZXJEYXRhLlBsYXllZCwgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzLCB1c2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dfcHJlZml4OiBzdHJpbmcgPSBcIltJblBsYXllckVwaXNvZGVQcmV2aWV3XVwiKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmVycm9yKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuLi9FbmRwb2ludHNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXliYWNrSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikgeyB9XG5cbiAgICBhc3luYyBwbGF5KGl0ZW1JZDogc3RyaW5nLCBzdGFydFBvc2l0aW9uVGlja3M6IG51bWJlcik6IFByb21pc2U8dm9pZCB8IFJlc3BvbnNlPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5QTEFZX01FRElBfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t0aWNrc30nLCBzdGFydFBvc2l0aW9uVGlja3MudG9TdHJpbmcoKSkpXG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwgfSlcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3Qgc3RhcnQgdGhlIHBsYXliYWNrIG9mIGFuIGl0ZW1gLCBleClcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1Byb2dyYW1EYXRhfSBmcm9tIFwiLi4vTW9kZWxzL1Byb2dyYW1EYXRhXCI7XG5pbXBvcnQge0dyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7RGVmYXVsdFBsdWdpblNldHRpbmdzLCBQbHVnaW5TZXR0aW5nc30gZnJvbSBcIi4uL01vZGVscy9QbHVnaW5TZXR0aW5nc1wiO1xuaW1wb3J0IHtEZWZhdWx0U2VydmVyU2V0dGluZ3MsIFNlcnZlclNldHRpbmdzfSBmcm9tIFwiLi4vTW9kZWxzL1NlcnZlclNldHRpbmdzXCI7XG5cbmNvbnN0IEdST1VQU19DQUNIRV9UVEwgPSA1ICogNjAgKiAxMDAwXG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtRGF0YVN0b3JlIHtcbiAgICBwcml2YXRlIF9wcm9ncmFtRGF0YTogUHJvZ3JhbURhdGFcbiAgICBwcml2YXRlIF92aWV3VG9rZW46IG51bWJlciA9IDBcbiAgICBwcml2YXRlIF9ncm91cHNDYWNoZWRBdDogbnVtYmVyIHwgbnVsbCA9IG51bGxcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZU1lZGlhU291cmNlSWQ6ICcnLFxuICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogJycsXG4gICAgICAgICAgICBib3hTZXROYW1lOiAnJyxcbiAgICAgICAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICBwbHVnaW5TZXR0aW5nczogRGVmYXVsdFBsdWdpblNldHRpbmdzLFxuICAgICAgICAgICAgc2VydmVyU2V0dGluZ3M6IERlZmF1bHRTZXJ2ZXJTZXR0aW5nc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVNZWRpYVNvdXJjZUlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhY3RpdmVNZWRpYVNvdXJjZUlkKGFjdGl2ZU1lZGlhU291cmNlSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlR3JvdXBJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYWN0aXZlR3JvdXBJZChhY3RpdmVHcm91cElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZCA9IGFjdGl2ZUdyb3VwSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZUdyb3VwKCk6IEdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAuZ3JvdXBJZCA9PT0gdGhpcy5hY3RpdmVHcm91cElkKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBJdGVtVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS50eXBlXG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0eXBlKHR5cGU6IEl0ZW1UeXBlKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnR5cGUgPSB0eXBlXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib3hTZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3hTZXROYW1lKGJveFNldE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lID0gYm94U2V0TmFtZVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ3JvdXBzKCk6IEdyb3VwW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBncm91cHMoZ3JvdXBzOiBHcm91cFtdKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3VwcyA9IGdyb3Vwc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGx1Z2luU2V0dGluZ3MoKTogUGx1Z2luU2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEucGx1Z2luU2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsdWdpblNldHRpbmdzKHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5wbHVnaW5TZXR0aW5ncyA9IHNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZXJ2ZXJTZXR0aW5ncygpOiBTZXJ2ZXJTZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5zZXJ2ZXJTZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmVyU2V0dGluZ3Moc2V0dGluZ3M6IFNlcnZlclNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnNlcnZlclNldHRpbmdzID0gc2V0dGluZ3NcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG1hcmtHcm91cHNGZXRjaGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ncm91cHNDYWNoZWRBdCA9IERhdGUubm93KClcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzR3JvdXBzQ2FjaGVFeHBpcmVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPT09IG51bGwgfHwgRGF0ZS5ub3coKSAtIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID4gR1JPVVBTX0NBQ0hFX1RUTFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGF0YUlzQWxsb3dlZEZvclByZXZpZXcoKSB7XG4gICAgICAgIGlmICghdGhpcy5hbGxvd2VkUHJldmlld1R5cGVzLmluY2x1ZGVzKHRoaXMudHlwZSkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHMuc29tZShncm91cCA9PiBncm91cC5pdGVtcy5sZW5ndGggPj0gMSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFsbG93ZWRQcmV2aWV3VHlwZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpblNldHRpbmdzLkVuYWJsZWRJdGVtVHlwZXNcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXRlbUJ5SWQoaXRlbUlkOiBzdHJpbmcpOiBQcmV2aWV3SXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwc1xuICAgICAgICAgICAgLmZsYXRNYXAoZ3JvdXAgPT4gZ3JvdXAuaXRlbXMpXG4gICAgICAgICAgICAuZmluZChpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZClcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHJlY29yZExvYWRlZEl0ZW1zKGdyb3VwSWQ6IHN0cmluZywgaXRlbXM6IFByZXZpZXdJdGVtW10sIHN0YXJ0SW5kZXg6IG51bWJlciwgdG90YWxSZWNvcmRDb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3VwcyA9IHRoaXMuX3Byb2dyYW1EYXRhLmdyb3Vwcy5tYXAoZ3JvdXAgPT4ge1xuICAgICAgICAgICAgaWYgKGdyb3VwLmdyb3VwSWQgIT09IGdyb3VwSWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwXG5cbiAgICAgICAgICAgIGlmIChncm91cC5sb2FkZWRTdGFydEluZGV4ID09PSB1bmRlZmluZWQgfHwgZ3JvdXAubG9hZGVkRW5kSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBpdGVtcywgbG9hZGVkU3RhcnRJbmRleDogc3RhcnRJbmRleCwgbG9hZGVkRW5kSW5kZXg6IHN0YXJ0SW5kZXggKyBpdGVtcy5sZW5ndGgsIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ6IHRvdGFsUmVjb3JkQ291bnQgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA+PSBncm91cC5sb2FkZWRFbmRJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBpdGVtczogWy4uLmdyb3VwLml0ZW1zLCAuLi5pdGVtc10sIGxvYWRlZEVuZEluZGV4OiBzdGFydEluZGV4ICsgaXRlbXMubGVuZ3RoLCBsb2FkZWRUb3RhbFJlY29yZENvdW50OiB0b3RhbFJlY29yZENvdW50IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPCBncm91cC5sb2FkZWRTdGFydEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIGl0ZW1zOiBbLi4uaXRlbXMsIC4uLmdyb3VwLml0ZW1zXSwgbG9hZGVkU3RhcnRJbmRleDogc3RhcnRJbmRleCwgbG9hZGVkVG90YWxSZWNvcmRDb3VudDogdG90YWxSZWNvcmRDb3VudCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBncm91cFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0R3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBJZDogc3RyaW5nLCBwbGF5ZWRJdGVtQ291bnQ6IG51bWJlciwgdG90YWxJdGVtQ291bnQ6IG51bWJlciwgcGxheWVkUnVudGltZVRpY2tzOiBudW1iZXIsIHRvdGFsUnVudGltZVRpY2tzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLmdyb3Vwcy5tYXAoZyA9PiBnLmdyb3VwSWQgPT09IGdyb3VwSWQgPyB7IC4uLmcsIHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQsIHBsYXllZFJ1bnRpbWVUaWNrcywgdG90YWxSdW50aW1lVGlja3MgfSA6IGcpXG4gICAgfVxuXG4gICAgcHVibGljIGFkanVzdEdyb3VwV2F0Y2hTdGF0cyhpdGVtSWQ6IHN0cmluZywgZGVsdGFQbGF5ZWRDb3VudDogbnVtYmVyLCBkZWx0YVBsYXllZFJ1bnRpbWVUaWNrczogbnVtYmVyKTogR3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuZ3JvdXBzLmZpbmQoZyA9PiBnLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpKVxuICAgICAgICBpZiAoIWdyb3VwKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgICAgY29uc3QgdXBkYXRlZEdyb3VwOiBHcm91cCA9IHtcbiAgICAgICAgICAgIC4uLmdyb3VwLFxuICAgICAgICAgICAgcGxheWVkSXRlbUNvdW50OiBncm91cC5wbGF5ZWRJdGVtQ291bnQgKyBkZWx0YVBsYXllZENvdW50LFxuICAgICAgICAgICAgcGxheWVkUnVudGltZVRpY2tzOiBncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCA/IFVOS05PV05fV0FUQ0hFRF9DT1VOVCA6IGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyArIGRlbHRhUGxheWVkUnVudGltZVRpY2tzXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLmdyb3Vwcy5tYXAoZyA9PiBnLmdyb3VwSWQgPT09IGdyb3VwLmdyb3VwSWQgPyB1cGRhdGVkR3JvdXAgOiBnKVxuICAgICAgICByZXR1cm4gdXBkYXRlZEdyb3VwXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUl0ZW0oaXRlbVRvVXBkYXRlOiBQcmV2aWV3SXRlbSk6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuZ3JvdXBzLm1hcChncm91cCA9PlxuICAgICAgICAgICAgZ3JvdXAuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1Ub1VwZGF0ZS5JZClcbiAgICAgICAgICAgICAgICA/IHsgLi4uZ3JvdXAsIGl0ZW1zOiBncm91cC5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtVG9VcGRhdGUuSWQgPyBpdGVtVG9VcGRhdGUgOiBpdGVtKSB9XG4gICAgICAgICAgICAgICAgOiBncm91cFxuICAgICAgICApXG4gICAgfVxuXG4gICAgLy8gQ2FsbGVkIHdoZW5ldmVyIHRoZSBwb3B1cCBzd2l0Y2hlcyB3aGF0IGl0J3MgZGlzcGxheWluZyAob3BlbmluZywgc2VsZWN0aW5nIGEgZ3JvdXAsIGdvaW5nIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpXG4gICAgcHVibGljIGJlZ2luTmV3VmlldygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKyt0aGlzLl92aWV3VG9rZW5cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNDdXJyZW50Vmlldyh0b2tlbjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0b2tlbiA9PT0gdGhpcy5fdmlld1Rva2VuXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgY3VycmVudFZpZXdUb2tlbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlld1Rva2VuXG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vU2VydmljZXMvTG9nZ2VyXCI7XG5pbXBvcnQge1ByZXZpZXdCdXR0b25UZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtEaWFsb2dDb250YWluZXJUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtMaXN0RWxlbWVudEZhY3Rvcnl9IGZyb20gXCIuL0xpc3RFbGVtZW50RmFjdG9yeVwiO1xuaW1wb3J0IHtQb3B1cFRpdGxlVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlXCI7XG5pbXBvcnQge0RhdGFGZXRjaGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge1BsdWdpblNldHRpbmdzfSBmcm9tIFwiLi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3NcIjtcbmltcG9ydCB7U2VydmVyU2V0dGluZ3N9IGZyb20gXCIuL01vZGVscy9TZXJ2ZXJTZXR0aW5nc1wiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuL0VuZHBvaW50c1wiO1xuaW1wb3J0IHtHcm91cCwgVU5LTk9XTl9XQVRDSEVEX0NPVU5UfSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7R3JvdXBJdGVtc1Jlc3VsdH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwSXRlbXNSZXN1bHRcIjtcbmltcG9ydCB7YWN0aXZhdGVTcGlubmVyLCBzcGlubmVySHRtbH0gZnJvbSBcIi4vQ29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQge3NldEl0ZW1PdmVybGF5QWN0aXZlfSBmcm9tIFwiLi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGVcIjtcblxuLy8gbG9hZCBhbmQgaW5qZWN0IGluUGxheWVyUHJldmlldy5jc3MgaW50byB0aGUgcGFnZVxuLypcbiAqIEluamVjdCBzdHlsZSB0byBiZSB1c2VkIGZvciB0aGUgcHJldmlldyBwb3B1cFxuICovXG5sZXQgaW5QbGF5ZXJQcmV2aWV3U3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG5pblBsYXllclByZXZpZXdTdHlsZS5pZCA9ICdpblBsYXllclByZXZpZXdTdHlsZSdcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ID0gYFxuLnNlbGVjdGVkTGlzdEl0ZW0ge1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5wcmV2aWV3TGlzdEl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBtaW4taGVpZ2h0OiAxNS41dmg7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcmV2aWV3UG9wdXAge1xuICAgIGFuaW1hdGlvbjogMTQwbXMgZWFzZS1vdXQgMHMgMSBub3JtYWwgYm90aCBydW5uaW5nIHNjYWxldXA7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgbWFyZ2luOiAwcHg7IFxuICAgIGJvdHRvbTogMS41dmg7IFxuICAgIGxlZnQ6IDUwdnc7IFxuICAgIHdpZHRoOiA0OHZ3O1xufVxuLnByZXZpZXdQb3B1cFRpdGxlIHtcbiAgICBtYXgtaGVpZ2h0OiA0dmg7XG59XG4ucHJldmlld1BvcHVwVGl0bGUgaDEuYWN0aW9uU2hlZXRUaXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlciB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbn1cbi5wcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcbn1cbi5wcmV2aWV3SXRlbUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJldmlld0l0ZW1UaXRsZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucHJldmlld0l0ZW1JbWFnZUNhcmQge1xuICAgIG1heC13aWR0aDogMzAlO1xufVxuLnByZXZpZXdJdGVtQ29udGVudFJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbkNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xufVxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbi5leHBhbmRlZCB7XG4gICAgbWF4LWhlaWdodDogbm9uZTtcbn1cbi5wcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBvcGFjaXR5OiAwLjc1O1xufVxuLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG4ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLyogTG9jayB0aGUgcG9zaXRpb24gb2YgdGhpcyBkZXRhaWxzLCBzbyB0aGF0IG5vIHRoZW1lIGNhbiBjaGFuZ2UgaXQgKi9cbi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IC5pdGVtTWlzY0luZm8ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMWVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cig2cHgpO1xuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJsdXI6aG92ZXIge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbn1cbi5wcmV2aWV3SXRlbUltYWdlQ2FyZDpob3ZlciAuYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xufVxuLnByZXZpZXdTY3JvbGxTcGlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMWVtIDA7XG59XG4ucHJldmlld1Njcm9sbFNwaW5uZXIgLmRvY3NwaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMS45NWVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxLjk1ZW0gIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5gXG5kb2N1bWVudD8uaGVhZD8uYXBwZW5kQ2hpbGQoaW5QbGF5ZXJQcmV2aWV3U3R5bGUpXG5cbi8vIGluaXQgc2VydmljZXMgYW5kIGhlbHBlcnNcbmNvbnN0IGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcigpXG5jb25zdCBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlID0gbmV3IFByb2dyYW1EYXRhU3RvcmUoKVxuY29uc3QgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIgPSBuZXcgUGxheWJhY2tIYW5kbGVyKGxvZ2dlcilcbmNvbnN0IGxpc3RFbGVtZW50RmFjdG9yeSA9IG5ldyBMaXN0RWxlbWVudEZhY3RvcnkocGxheWJhY2tIYW5kbGVyLCBwcm9ncmFtRGF0YVN0b3JlKVxuXG5jb25zdCBjb2xsZWN0aW9uc0J5SXRlbUlkID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8R3JvdXBbXT4+KClcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwW10+IHtcbiAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5DT05UQUlOSU5HX0NPTExFQ1RJT05TfWBcbiAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByYXc6IGFueVtdID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIHJldHVybiByYXcubWFwKChnOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXIsXG4gICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgdG90YWxJdGVtQ291bnQ6IGcuVG90YWxJdGVtQ291bnQsXG4gICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IGcuUGxheWVkUnVudGltZVRpY2tzLFxuICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IGcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgfSkpXG4gICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgbG9hZCBDb2xsZWN0aW9ucy9QbGF5bGlzdHMgY29udGFpbmluZyB0aGlzIG1vdmllXCIsIGV4KVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8R3JvdXBbXT4ge1xuICAgIGxldCBwcm9taXNlID0gY29sbGVjdGlvbnNCeUl0ZW1JZC5nZXQoaXRlbUlkKVxuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkKVxuICAgICAgICBjb2xsZWN0aW9uc0J5SXRlbUlkLnNldChpdGVtSWQsIHByb21pc2UpXG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgLy8gRW5zdXJlIEFwaUNsaWVudC9FdmVudHMgZXhpc3QgYW5kIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgaWYgKHR5cGVvZiBBcGlDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBFdmVudHMgPT09ICd1bmRlZmluZWQnIHx8ICFBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZD8uKCkpIHtcbiAgICAgICAgc2V0VGltZW91dChpbml0aWFsaXplLCAzMDApIC8vIEluY3JlYXNlZCByZXRyeSBkZWxheSBzbGlnaHRseVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBuZXcgRGF0YUZldGNoZXIocHJvZ3JhbURhdGFTdG9yZSlcbiAgICBcbiAgICBjb25zdCBwbHVnaW5TZXR0aW5nc1VybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLlBMVUdJTl9TRVRUSU5HU31gKVxuICAgIEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybDogcGx1Z2luU2V0dGluZ3NVcmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgLnRoZW4oKGNvbmZpZzogUGx1Z2luU2V0dGluZ3MpID0+IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MgPSBjb25maWcpXG4gICAgICAgIC5jYXRjaCgoZXg6IHVua25vd24pID0+IGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IGxvYWQgcGx1Z2luIHNldHRpbmdzLCBmYWxsaW5nIGJhY2sgdG8gZGVmYXVsdHNcIiwgZXgpKVxuXG4gICAgY29uc3Qgc2VydmVyU2V0dGluZ3NVcmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5TRVJWRVJfU0VUVElOR1N9YClcbiAgICBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmw6IHNlcnZlclNldHRpbmdzVXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIC50aGVuKChjb25maWc6IFNlcnZlclNldHRpbmdzKSA9PiBwcm9ncmFtRGF0YVN0b3JlLnNlcnZlclNldHRpbmdzID0gY29uZmlnKVxufVxuaW5pdGlhbGl6ZSgpXG5cbmNvbnN0IFNFQVJDSF9DT0xMRUNUSU9OU19HUk9VUF9OQU1FID0gJ1NlYXJjaCBDb2xsZWN0aW9ucy9QbGF5bGlzdHMnXG5cbmNvbnN0IHZpZGVvUGF0aHM6IHN0cmluZ1tdID0gWycvdmlkZW8nXVxubGV0IHByZXZpb3VzUm91dGVQYXRoOiBzdHJpbmcgPSBudWxsXG5sZXQgcHJldmlld0NvbnRhaW5lckxvYWRlZDogYm9vbGVhbiA9IGZhbHNlXG5cbmxldCBwZW5kaW5nUHJlbG9hZEl0ZW1JZDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbmxldCBwZW5kaW5nUHJlbG9hZDogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsXG5sZXQgcHJlbG9hZE9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGxcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlld3Nob3cnLCB2aWV3U2hvd0V2ZW50SGFuZGxlcilcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHZpZXdTaG93RXZlbnRIYW5kbGVyKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKSlcblxuLy8gU29tZXRpbWVzIHRoZWlyIGNhbiBiZSBzdGFsZSByYXRpbmcgYnV0dG9ucy4gdGhhdHMgd2h5IHdlIHRha2UgdGhlIGxhc3Qgb25lIGZyb20gdGhlIERPTSBmb3IgdGhlIGl0ZW1JZFxuZnVuY3Rpb24gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5Vc2VyUmF0aW5nLmF1dG9TaXplLnBhcGVyLWljb24tYnV0dG9uLWxpZ2h0JylcbiAgICByZXR1cm4gZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0/LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID8/IG51bGxcbn1cblxubGV0IGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQ6IG51bWJlciA9IC0xXG5mdW5jdGlvbiBvblZpZGVvVGltZVVwZGF0ZSh0aGlzOiBIVE1MVmlkZW9FbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgcG9zaXRpb25TZWNvbmQgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudFRpbWUpXG4gICAgaWYgKHBvc2l0aW9uU2Vjb25kID09PSBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kKSByZXR1cm5cbiAgICBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kID0gcG9zaXRpb25TZWNvbmRcblxuICAgIGNvbnN0IGl0ZW1JZCA9IGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKVxuICAgIGlmICghaXRlbUlkKSByZXR1cm5cblxuICAgIGlmIChpdGVtSWQgIT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCkge1xuICAgICAgICBjb25zdCBwcmV2aW91c0l0ZW1JZCA9IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBpdGVtSWRcbiAgICAgICAgc2V0SXRlbU92ZXJsYXlBY3RpdmUocHJldmlvdXNJdGVtSWQsIGZhbHNlKVxuICAgICAgICBzZXRJdGVtT3ZlcmxheUFjdGl2ZShpdGVtSWQsIHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSB8fCAhaXRlbS5SdW5UaW1lVGlja3MpIHJldHVyblxuXG4gICAgY29uc3QgcG9zaXRpb25UaWNrcyA9IHRoaXMuY3VycmVudFRpbWUgKiAxMF8wMDBfMDAwXG4gICAgY29uc3QgcGxheWVkUGVyY2VudGFnZSA9IChwb3NpdGlvblRpY2tzIC8gaXRlbS5SdW5UaW1lVGlja3MpICogMTAwXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YToge1xuICAgICAgICAgICAgLi4uaXRlbS5Vc2VyRGF0YSxcbiAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogcG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IHBsYXllZFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICBQbGF5ZWQ6IHBsYXllZFBlcmNlbnRhZ2UgPj0gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncy5NYXhSZXN1bWVQY3RcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vIFRyYWNrcyB3aGljaCBCb3hTZXQvUGxheWxpc3QgZGV0YWlscyBwYWdlIChpZiBhbnkpIHdhcyB2aXNpdGVkIGltbWVkaWF0ZWx5IGJlZm9yZSBuYXZpZ2F0aW5nIGludG8gcGxheWJhY2tcbmNvbnN0IERFVEFJTFNfUk9VVEVfUEFUSDogc3RyaW5nID0gJy9kZXRhaWxzJ1xuY29uc3QgY29sbGVjdGlvbkxpa2VJdGVtVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLlBsYXlsaXN0XSlcbmxldCBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkOiBzdHJpbmcgPSBudWxsXG5cbmZ1bmN0aW9uIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY29sbGVjdGlvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5TRVRfU09VUkNFX0NPTExFQ1RJT059YFxuICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2NvbGxlY3Rpb25JZH0nLCBjb2xsZWN0aW9uSWQpKVxuICAgIEFwaUNsaWVudC5hamF4KHt0eXBlOiAnR0VUJywgdXJsfSkuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCByZWNvcmQgc291cmNlIGNvbGxlY3Rpb24gZm9yIHBsYXliYWNrIHNlc3Npb25cIiwgZXgpKVxufVxuXG5mdW5jdGlvbiBjYXB0dXJlU291cmNlQ29sbGVjdGlvbihjdXJyZW50Um91dGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbY3VycmVudFBhdGgsIGN1cnJlbnRRdWVyeV0gPSBjdXJyZW50Um91dGVQYXRoLnNwbGl0KCc/JylcbiAgICBjb25zdCBwcmV2aW91c1BhdGggPSBwcmV2aW91c1JvdXRlUGF0aD8uc3BsaXQoJz8nKVswXVxuXG4gICAgaWYgKGN1cnJlbnRQYXRoID09PSBERVRBSUxTX1JPVVRFX1BBVEgpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0lkID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50UXVlcnkgPz8gJycpLmdldCgnaWQnKVxuICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxuICAgICAgICBpZiAoIWRldGFpbHNJZCkgcmV0dXJuXG5cbiAgICAgICAgQXBpQ2xpZW50LmdldEl0ZW0oQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSwgZGV0YWlsc0lkKS50aGVuKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVHlwZTogSXRlbVR5cGUgPSBJdGVtVHlwZVtpdGVtLlR5cGUgYXMgdW5rbm93biBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gY29sbGVjdGlvbkxpa2VJdGVtVHlwZXMuaGFzKGl0ZW1UeXBlKSA/IGRldGFpbHNJZCA6IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMoY3VycmVudFBhdGgpICYmIHByZXZpb3VzUGF0aCA9PT0gREVUQUlMU19ST1VURV9QQVRIICYmIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQpIHtcbiAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkKVxuICAgIH1cblxuICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBudWxsXG59XG5cbi8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGNvbGxvZWN0aW9uL3BsYXlsaXN0IGlkIHRob3J1Z2ggYSBwbGF5IGFjdGlvbiBvbiBhIGNhcmQgdGhlIHNhbWUgd2F5IGFzIGhlbGx5ZmluIGRvZXMgaXQgaXRzZWxmXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamVsbHlmaW4vamVsbHlmaW4td2ViL2Jsb2IvcmVsZWFzZS0xMC4xMS56L3NyYy9jb21wb25lbnRzL3Nob3J0Y3V0cy5qcyNMMjE2XG5jb25zdCBQTEFZQkFDS19UUklHR0VSX0FDVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbJ3BsYXknLCAncmVzdW1lJywgJ3BsYXlhbGxmcm9taGVyZSddKVxuZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrQ2FwdHVyZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGlvbkVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8uY2xvc2VzdD8uKCdbZGF0YS1hY3Rpb25dJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKCFhY3Rpb25FbGVtZW50IHx8ICFQTEFZQkFDS19UUklHR0VSX0FDVElPTlMuaGFzKGFjdGlvbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpKSkgcmV0dXJuXG5cbiAgICBjb25zdCBjYXJkID0gYWN0aW9uRWxlbWVudC5jbG9zZXN0KCdbZGF0YS1pZF0nKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcbiAgICBpZiAoIWNhcmQpIHJldHVyblxuXG4gICAgY29uc3QgY2hpbGRPZkNvbGxlY3Rpb25JZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxlY3Rpb25pZCcpID8/IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXBsYXlsaXN0aWQnKVxuICAgIGlmIChjaGlsZE9mQ29sbGVjdGlvbklkKSB7XG4gICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY2hpbGRPZkNvbGxlY3Rpb25JZClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY2FyZEl0ZW1UeXBlOiBJdGVtVHlwZSA9IEl0ZW1UeXBlW2NhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSBhcyB1bmtub3duIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICBjb25zdCBjYXJkSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgaWYgKGNhcmRJZCAmJiBjb2xsZWN0aW9uTGlrZUl0ZW1UeXBlcy5oYXMoY2FyZEl0ZW1UeXBlKSkge1xuICAgICAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNhcmRJZClcbiAgICB9XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRG9jdW1lbnRDbGlja0NhcHR1cmUsIHRydWUpXG5cbmZ1bmN0aW9uIHZpZXdTaG93RXZlbnRIYW5kbGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZVBhdGg6IHN0cmluZyA9IGdldExvY2F0aW9uUGF0aCgpXG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhdGlvblBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb246IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZUluZGV4OiBudW1iZXIgPSBsb2NhdGlvbi5sYXN0SW5kZXhPZignLycpXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5zdWJzdHJpbmcoY3VycmVudFJvdXRlSW5kZXgpXG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbCBhdHRlbXB0IHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcgb3Igc2NoZWR1bGUgcmV0cmllcy5cbiAgICBjYXB0dXJlU291cmNlQ29sbGVjdGlvbihjdXJyZW50Um91dGVQYXRoKVxuICAgIGF0dGVtcHRMb2FkVmlkZW9WaWV3KClcbiAgICBwcmV2aW91c1JvdXRlUGF0aCA9IGN1cnJlbnRSb3V0ZVBhdGhcblxuICAgIC8vIEF0dGVtcHRzIHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcsIHJldHJ5aW5nIHVwIHRvIDMgdGltZXMgaWYgbmVjZXNzYXJ5LlxuICAgIGZ1bmN0aW9uIGF0dGVtcHRMb2FkVmlkZW9WaWV3KHJldHJ5Q291bnQgPSAwKTogdm9pZCB7XG4gICAgICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRSb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICAvLyBpZiAocHJvZ3JhbURhdGFTdG9yZS5kYXRhSXNBbGxvd2VkRm9yUHJldmlldykge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcmV2aWV3IGNvbnRhaW5lciBpcyBhbHJlYWR5IGxvYWRlZCBiZWZvcmUgbG9hZGluZ1xuICAgICAgICAgICAgICAgIGlmICghcHJldmlld0NvbnRhaW5lckxvYWRlZCAmJiAhaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRWaWRlb1ZpZXcoKVxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gdHJ1ZSAvLyBTZXQgZmxhZyB0byB0cnVlIGFmdGVyIGxvYWRpbmdcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJldHJ5Q291bnQgPCAzKSB7IC8vIFJldHJ5IHVwIHRvIDMgdGltZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBSZXRyeSAjJHtyZXRyeUNvdW50ICsgMX1gKVxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0TG9hZFZpZGVvVmlldyhyZXRyeUNvdW50ICsgMSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwMCkgLy8gV2FpdCAxMCBzZWNvbmRzIGZvciBlYWNoIHJldHJ5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhwcmV2aW91c1JvdXRlUGF0aCkpIHtcbiAgICAgICAgICAgIHVubG9hZFZpZGVvVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgLy8gYWRkIHByZXZpZXcgYnV0dG9uIHRvIHRoZSBwYWdlXG4gICAgICAgIGNvbnN0IHBhcmVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucycpLmxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudDsgLy8gbGFzdEVsZW1lbnRDaGlsZC5wYXJlbnRFbGVtZW50IGlzIHVzZWQgZm9yIGNhc3RpbmcgZnJvbSBFbGVtZW50IHRvIEhUTUxFbGVtZW50XG4gICAgICAgIFxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5Vc2VyUmF0aW5nXCIpKTtcbiAgICAgICAgLy8gaWYgaW5kZXggaXMgaW52YWxpZCB0cnkgdG8gdXNlIHRoZSBvbGQgcG9zaXRpb24gKHVzZWQgaW4gSmVsbHlmaW4gMTAuOC4xMilcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSlcbiAgICAgICAgICAgIGluZGV4ID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmRJbmRleCgoY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9zZFRpbWVUZXh0XCIpKVxuXG4gICAgICAgIGNvbnN0IGxvYWRJdGVtUHJldmlld0RhdGEgPSBhc3luYyAoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPHtcbiAgICAgICAgICAgIGl0ZW1UeXBlOiBzdHJpbmcsIGNvbnRhaW5lck5hbWU6IHN0cmluZyB8IG51bGwsIGdyb3VwczogR3JvdXBbXSwgYWN0aXZlR3JvdXBJZDogc3RyaW5nLCBhY3RpdmVJdGVtSW5kZXg6IG51bWJlclxuICAgICAgICB9PiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX1BSRVZJRVdfREFUQX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9JywgQXBpQ2xpZW50LmRldmljZUlkKCkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpdGVtVHlwZTogcmF3Lkl0ZW1UeXBlLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck5hbWU6IHJhdy5Db250YWluZXJOYW1lLFxuICAgICAgICAgICAgICAgIGdyb3VwczogcmF3Lkdyb3Vwcy5tYXAoKGc6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogZy5Hcm91cElkLFxuICAgICAgICAgICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgIGluZGV4TnVtYmVyOiBnLkluZGV4TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1Db3VudDogZy5Ub3RhbEl0ZW1Db3VudCxcbiAgICAgICAgICAgICAgICAgICAgcGxheWVkUnVudGltZVRpY2tzOiBnLlBsYXllZFJ1bnRpbWVUaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IGcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogcmF3LkFjdGl2ZUdyb3VwSWQsXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbUluZGV4OiByYXcuQWN0aXZlSXRlbUluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkR3JvdXBJdGVtcyA9IGFzeW5jIChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciA9IDAsIGxpbWl0OiBudW1iZXIgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZSk6IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfSVRFTVN9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHVzZXJJZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2dyb3VwSWR9JywgZ3JvdXBJZCksXG4gICAgICAgICAgICAgICAgeyBzdGFydEluZGV4LCBsaW1pdCB9KVxuICAgICAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IEdyb3VwSXRlbXNSZXN1bHQgPSB7IGl0ZW1zOiByYXcuSXRlbXMsIHRvdGFsUmVjb3JkQ291bnQ6IHJhdy5Ub3RhbFJlY29yZENvdW50IH1cblxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5yZWNvcmRMb2FkZWRJdGVtcyhncm91cElkLCByZXN1bHQuaXRlbXMsIHN0YXJ0SW5kZXgsIHJlc3VsdC50b3RhbFJlY29yZENvdW50KVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBwcmVsb2FkUHJldmlld0RhdGEoaXRlbUlkOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1JZCkgcmV0dXJuXG4gICAgICAgICAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWQgJiYgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuc29tZShnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpKSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkKSByZXR1cm5cblxuICAgICAgICAgICAgcGVuZGluZ1ByZWxvYWRJdGVtSWQgPSBpdGVtSWRcbiAgICAgICAgICAgIHBlbmRpbmdQcmVsb2FkID0gKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1UeXBlLCBjb250YWluZXJOYW1lLCBncm91cHMsIGFjdGl2ZUdyb3VwSWQsIGFjdGl2ZUl0ZW1JbmRleCB9ID0gYXdhaXQgbG9hZEl0ZW1QcmV2aWV3RGF0YShpdGVtSWQpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBncm91cHNcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLm1hcmtHcm91cHNGZXRjaGVkKClcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPSBJdGVtVHlwZVtpdGVtVHlwZSBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ib3hTZXROYW1lID0gY29udGFpbmVyTmFtZSA/PyAnJ1xuXG4gICAgICAgICAgICAgICAgY29uc3QgUEFHRV9TSVpFID0gcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FcGlzb2RlUGFnZVNpemVcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlT2ZBY3RpdmVFcGlzb2RlID0gTWF0aC5mbG9vcihhY3RpdmVJdGVtSW5kZXggLyBQQUdFX1NJWkUpXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXggPSBNYXRoLm1heCgwLCAocGFnZU9mQWN0aXZlRXBpc29kZSAtIDEpICogUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxXaW5kb3dMaW1pdCA9IChwYWdlT2ZBY3RpdmVFcGlzb2RlICsgMikgKiBQQUdFX1NJWkUgLSBpbml0aWFsV2luZG93U3RhcnRJbmRleFxuXG4gICAgICAgICAgICAgICAgYXdhaXQgbG9hZEdyb3VwSXRlbXMoYWN0aXZlR3JvdXBJZCwgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXgsIGluaXRpYWxXaW5kb3dMaW1pdClcbiAgICAgICAgICAgIH0pKCkuY2F0Y2goKGV4OiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcHJlbG9hZCBwcmV2aWV3IGRhdGFcIiwgZXgpXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ1ByZWxvYWRJdGVtSWQgPT09IGl0ZW1JZCkgcGVuZGluZ1ByZWxvYWRJdGVtSWQgPSBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2FpdCB0aGF0IGRhdGEtaWQgZ2V0cyBwb3B1bGF0ZWQgYnkgSmVsbHlmaW5cbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVQcmVsb2FkKCk6IHZvaWQge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG4gICAgICAgICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgcHJlbG9hZFByZXZpZXdEYXRhKGl0ZW1JZClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmF0aW5nQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5Vc2VyUmF0aW5nLmF1dG9TaXplLnBhcGVyLWljb24tYnV0dG9uLWxpZ2h0JylcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHJhdGluZ0J1dHRvbnNbcmF0aW5nQnV0dG9ucy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVyblxuXG4gICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgICAgICAgICAgICAgaWYgKCFpZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBudWxsXG4gICAgICAgICAgICAgICAgcHJlbG9hZFByZXZpZXdEYXRhKGlkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGF0YS1pZCddIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2aWV3QnV0dG9uOiBQcmV2aWV3QnV0dG9uVGVtcGxhdGUgPSBuZXcgUHJldmlld0J1dHRvblRlbXBsYXRlKHBhcmVudCwgaW5kZXgpXG4gICAgICAgIGxldCBwcmV2aWV3QnV0dG9uTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlXG4gICAgICAgIHByZXZpZXdCdXR0b24ucmVuZGVyKHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBvblZpZGVvVGltZVVwZGF0ZSlcblxuICAgICAgICBzY2hlZHVsZVByZWxvYWQoKVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBpZiAocHJldmlld0J1dHRvbkxvYWRpbmcpIHJldHVyblxuICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRvUHJldmlld0J1dHRvbkNsaWNrKClcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9QcmV2aWV3QnV0dG9uQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVyaW1lbnRhbCBhbmQgd2lsbCBtYXliZSBiZSB1c2VkIGluIGZ1dHVyZSByZWxlYXNlc1xuICAgICAgICAgICAgY29uc3QgZ2V0Tm93UGxheWluZ0l0ZW1JZEZyb21TZXNzaW9uID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLk5PV19QTEFZSU5HX0lURU19YClcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcmVzb2x2ZSBub3ctcGxheWluZyBpdGVtIGZyb20gc2Vzc2lvbiwgZmFsbGluZyBiYWNrIHRvIE9TRCByYXRpbmcgYnV0dG9uXCIsIGV4KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyOiBEaWFsb2dDb250YWluZXJUZW1wbGF0ZSA9IG5ldyBEaWFsb2dDb250YWluZXJUZW1wbGF0ZShkb2N1bWVudC5ib2R5LCBkb2N1bWVudC5ib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICBkaWFsb2dDb250YWluZXIucmVuZGVyKClcblxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJylcblxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHJlc3BvbnNlIG9mIHRoZSBPU0QncyBwcmVsb2FkIG9mIHRoaXMgc2FtZSBpdGVtLCB3YWl0IGZvciBpdCBpbnN0ZWFkIG9mIGZpcmluZyBhIGR1cGxpY2F0ZSBmZXRjaC5cbiAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkICYmIHBlbmRpbmdQcmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByZXZpZXdTY3JvbGxTcGlubmVyXCI+JHtzcGlubmVySHRtbCgpfTwvZGl2PmBcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoY29udGVudERpdilcbiAgICAgICAgICAgICAgICBhd2FpdCBwZW5kaW5nUHJlbG9hZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjYWNoZWRHcm91cCA9ICFwcm9ncmFtRGF0YVN0b3JlLmlzR3JvdXBzQ2FjaGVFeHBpcmVkXG4gICAgICAgICAgICAgICAgPyBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5maW5kKGcgPT4gZy5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKSlcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICAgICAgICBsZXQgYWN0aXZlR3JvdXBJZDogc3RyaW5nXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFBhZ2U6IEdyb3VwSXRlbXNSZXN1bHRcbiAgICAgICAgICAgIGxldCBpbml0aWFsV2luZG93U3RhcnRJbmRleDogbnVtYmVyXG5cbiAgICAgICAgICAgIGlmIChjYWNoZWRHcm91cCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUdyb3VwSWQgPSBjYWNoZWRHcm91cC5ncm91cElkXG4gICAgICAgICAgICAgICAgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXggPSBjYWNoZWRHcm91cC5sb2FkZWRTdGFydEluZGV4ID8/IDBcbiAgICAgICAgICAgICAgICBpbml0aWFsUGFnZSA9IHsgaXRlbXM6IFsuLi5jYWNoZWRHcm91cC5pdGVtc10sIHRvdGFsUmVjb3JkQ291bnQ6IGNhY2hlZEdyb3VwLmxvYWRlZFRvdGFsUmVjb3JkQ291bnQgPz8gY2FjaGVkR3JvdXAuaXRlbXMubGVuZ3RoIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByZXZpZXdTY3JvbGxTcGlubmVyXCI+JHtzcGlubmVySHRtbCgpfTwvZGl2PmBcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoY29udGVudERpdilcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbVR5cGUsIGNvbnRhaW5lck5hbWUsIGdyb3VwcywgYWN0aXZlR3JvdXBJZDogZmV0Y2hlZEFjdGl2ZUdyb3VwSWQsIGFjdGl2ZUl0ZW1JbmRleCB9ID0gYXdhaXQgbG9hZEl0ZW1QcmV2aWV3RGF0YShpdGVtSWQpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBncm91cHNcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLm1hcmtHcm91cHNGZXRjaGVkKClcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPSBJdGVtVHlwZVtpdGVtVHlwZSBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ib3hTZXROYW1lID0gY29udGFpbmVyTmFtZSA/PyAnJ1xuICAgICAgICAgICAgICAgIGFjdGl2ZUdyb3VwSWQgPSBmZXRjaGVkQWN0aXZlR3JvdXBJZFxuXG4gICAgICAgICAgICAgICAgLy8gTG9hZCBhIDMtcGFnZSB3aW5kb3cgKHBhZ2Ugb2YgdGhlIGFjdGl2ZSBlcGlzb2RlLCBwbHVzIG9uZSBwYWdlIGJlZm9yZSBhbmQgYWZ0ZXIpXG4gICAgICAgICAgICAgICAgY29uc3QgUEFHRV9TSVpFID0gcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FcGlzb2RlUGFnZVNpemVcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlT2ZBY3RpdmVFcGlzb2RlID0gTWF0aC5mbG9vcihhY3RpdmVJdGVtSW5kZXggLyBQQUdFX1NJWkUpXG4gICAgICAgICAgICAgICAgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXggPSBNYXRoLm1heCgwLCAocGFnZU9mQWN0aXZlRXBpc29kZSAtIDEpICogUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxXaW5kb3dMaW1pdCA9IChwYWdlT2ZBY3RpdmVFcGlzb2RlICsgMikgKiBQQUdFX1NJWkUgLSBpbml0aWFsV2luZG93U3RhcnRJbmRleFxuXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2UgPSBhd2FpdCBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBpbml0aWFsV2luZG93U3RhcnRJbmRleCwgaW5pdGlhbFdpbmRvd0xpbWl0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBpdGVtSWRcbiAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCA9IGFjdGl2ZUdyb3VwSWRcblxuICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJyAvLyByZW1vdmUgdGhlIGxvYWRpbmcgc3Bpbm5lclxuICAgICAgICAgICAgY29uc3Qgdmlld1Rva2VuID0gcHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuXG4gICAgICAgICAgICAvLyBBIHN0YW5kYWxvbmUgbW92aWUgaGFzIG5vIG1lYW5pbmdmdWwgZ3JvdXAgbmFtZSBvZiBpdHMgb3duOyBhbiBpdGVtIHNvdXJjZWQgZnJvbSBhIFBsYXlsaXN0L0JveFNldFxuICAgICAgICAgICAgLy8gYWxyZWFkeSBoYXMgdGhhdCBjb2xsZWN0aW9uJ3MgcmVhbCBuYW1lLCBzbyBvbmx5IHRoZSBzdGFuZGFsb25lLW1vdmllIGNhc2UgZ2V0cyByZWxhYmVsZWQuXG4gICAgICAgICAgICBjb25zdCBpc1N0YW5kYWxvbmVNb3ZpZSA9IHByb2dyYW1EYXRhU3RvcmUudHlwZSA9PT0gSXRlbVR5cGUuTW92aWVcbiAgICAgICAgICAgIGNvbnN0IGlzU291cmNlZEZyb21Db2xsZWN0aW9uID0gcHJvZ3JhbURhdGFTdG9yZS50eXBlID09PSBJdGVtVHlwZS5QbGF5bGlzdCB8fCBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPT09IEl0ZW1UeXBlLkJveFNldFxuXG4gICAgICAgICAgICAvLyBMYWJlbCB0aGUgbW92aWUncyBvd24gZ3JvdXAgYXMgdGhlIGNvbGxlY3Rpb24gc2VhcmNoIHVwIGZyb250LCBldmVuIGJlZm9yZSBhbnkgcmVzdWx0cyBhcmUga25vd24uXG4gICAgICAgICAgICBpZiAoaXNTdGFuZGFsb25lTW92aWUgJiYgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLm1hcCgoZywgaSkgPT4gaSA9PT0gMCA/IHsgLi4uZywgZ3JvdXBOYW1lOiBTRUFSQ0hfQ09MTEVDVElPTlNfR1JPVVBfTkFNRSB9IDogZylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT25seSBzZWFyY2ggb25jZSBwZXIgZnJlc2ggZ3JvdXAtZmV0Y2ggKG5vdCBvbiBldmVyeSBwb3B1cCByZW9wZW4gd2hpbGUgY2FjaGVkIGdyb3VwcyBhbHJlYWR5IGluY2x1ZGUgdGhlIHNlYXJjaCByZXN1bHRzKS5cbiAgICAgICAgICAgIC8vIGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyBpdHNlbGYgaXMgbWVtb2l6ZWQgcGVyIGl0ZW0gZm9yIHRoZSB3aG9sZSBwYWdlIHNlc3Npb24sIHNvIGV2ZW4gdGhpcyBjYW4ndCByZS10cmlnZ2VyIHRoZVxuICAgICAgICAgICAgLy8gZXhwZW5zaXZlIGJhY2tlbmQgc2NhbiBtb3JlIHRoYW4gb25jZSBwZXIgaXRlbSwgbm8gbWF0dGVyIGhvdyBvZnRlbiB0aGUgcG9wdXAgaXMgcmVvcGVuZWQgd2hpbGUgaXQncyBwZW5kaW5nLlxuICAgICAgICAgICAgY29uc3QgaXNTZWFyY2hpbmdDb2xsZWN0aW9ucyA9IChpc1N0YW5kYWxvbmVNb3ZpZSB8fCBpc1NvdXJjZWRGcm9tQ29sbGVjdGlvbikgJiYgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnMgJiYgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICBsZXQgY29sbGVjdGlvbnNTZWFyY2hEb25lID0gIWlzU2VhcmNoaW5nQ29sbGVjdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zU2VhcmNoOiBQcm9taXNlPHZvaWQ+ID0gaXNTZWFyY2hpbmdDb2xsZWN0aW9uc1xuICAgICAgICAgICAgICAgID8gZ2V0Q29udGFpbmluZ0NvbGxlY3Rpb25zKGl0ZW1JZCkudGhlbihjb2xsZWN0aW9uR3JvdXBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2xsZWN0aW9uR3JvdXBzLmxlbmd0aCB8fCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgIT09IGl0ZW1JZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGZHcm91cCA9IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzWzBdXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4Y2x1ZGUgdGhlIGNvbGxlY3Rpb24vcGxheWxpc3QgdGhpcyBpdGVtIHdhcyBhbHJlYWR5IHBsYXllZCBmcm9tIC0gaXQncyBhbHJlYWR5IHRoZSBhY3RpdmUvZGVmYXVsdCBncm91cC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R3JvdXBzID0gY29sbGVjdGlvbkdyb3Vwcy5maWx0ZXIoZyA9PiBnLmdyb3VwSWQgIT09IHNlbGZHcm91cC5ncm91cElkKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld0dyb3Vwcy5sZW5ndGgpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IFtzZWxmR3JvdXAsIC4uLm5ld0dyb3Vwc10ubWFwKChnLCBpKSA9PiAoeyAuLi5nLCBpbmRleE51bWJlcjogaSB9KSlcbiAgICAgICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHsgY29sbGVjdGlvbnNTZWFyY2hEb25lID0gdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKClcblxuICAgICAgICAgICAgY29uc3QgY2FuU3dpdGNoR3JvdXBzID0gKCk6IGJvb2xlYW4gPT4gcHJvZ3JhbURhdGFTdG9yZS50eXBlICE9PSBJdGVtVHlwZS5Nb3ZpZSB8fCBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9uc1xuXG4gICAgICAgICAgICBjb25zdCBwb3B1cFRpdGxlOiBQb3B1cFRpdGxlVGVtcGxhdGUgPSBuZXcgUG9wdXBUaXRsZVRlbXBsYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cEZvY3VzQ29udGFpbmVyJyksIC0xLCBwcm9ncmFtRGF0YVN0b3JlKVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5yZW5kZXIoYXN5bmMgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgaWYgKCFjYW5Td2l0Y2hHcm91cHMoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUdyb3VwRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5ncm91cHMsIGNvbnRlbnREaXYsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXAuaW5kZXhOdW1iZXIsIHBvcHVwVGl0bGUsIGxvYWRHcm91cEl0ZW1zKVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwVmlld1Rva2VuID0gcHJvZ3JhbURhdGFTdG9yZS5jdXJyZW50Vmlld1Rva2VuXG5cbiAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbnNTZWFyY2hEb25lKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgncHJldmlld1Njcm9sbFNwaW5uZXInKVxuICAgICAgICAgICAgICAgIHNwaW5uZXIuaW5uZXJIVE1MID0gc3Bpbm5lckh0bWwoKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoc3Bpbm5lcilcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoc3Bpbm5lcilcblxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbGxlY3Rpb25zU2VhcmNoXG4gICAgICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYSBncm91cCB3YXMgc2VsZWN0ZWQsIG9yIHRoZSBwb3B1cCBjbG9zZWQpIHdoaWxlIHRoaXMgd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcoZ3JvdXBWaWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUdyb3VwRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5ncm91cHMsIGNvbnRlbnREaXYsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXAuaW5kZXhOdW1iZXIsIHBvcHVwVGl0bGUsIGxvYWRHcm91cEl0ZW1zKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0U3dpdGNoYWJsZShjYW5Td2l0Y2hHcm91cHMoKSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShjYW5Td2l0Y2hHcm91cHMoKSlcblxuICAgICAgICAgICAgYXdhaXQgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUxhenlJdGVtTGlzdChjb250ZW50RGl2LCAoc3RhcnRJbmRleCkgPT4gbG9hZEdyb3VwSXRlbXMoYWN0aXZlR3JvdXBJZCwgc3RhcnRJbmRleCksIHZpZXdUb2tlbiwgaW5pdGlhbFBhZ2UsIGluaXRpYWxXaW5kb3dTdGFydEluZGV4KVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRUZXh0KHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXA/Lmdyb3VwTmFtZSA/PyAnJylcbiAgICAgICAgICAgIGlmIChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKSBwb3B1cFRpdGxlLnNldFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKVxuICAgICAgICAgICAgaWYgKHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCAmJiBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwPy5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5lbnN1cmVHcm91cFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKVxuICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHBvcHVwVGl0bGUuc2V0V2F0Y2hlZENvdW50KHVwZGF0ZWQpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIGl0ZW0gdGhhdCBpcyBjdXJyZW50bHkgcGxheWluZ1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlSXRlbSA9IGNvbnRlbnREaXYucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkTGlzdEl0ZW0nKSBcbiAgICAgICAgICAgIGlmICghYWN0aXZlSXRlbSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IGZpbmQgYWN0aXZlIG1lZGlhIHNvdXJjZSBlbGVtZW50IGluIHByZXZpZXcgbGlzdC4gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuXCIsIHByb2dyYW1EYXRhU3RvcmUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3RpdmVJdGVtPy5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1bmxvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XG4gICAgICAgIC8vIENsZWFyIG9sZCBkYXRhIGFuZCByZXNldCBwcmV2aWV3Q29udGFpbmVyTG9hZGVkIGZsYWdcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBvblZpZGVvVGltZVVwZGF0ZSlcbiAgICAgICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IC0xXG5cbiAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgcHJlbG9hZE9ic2VydmVyID0gbnVsbFxuICAgICAgICBwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9IG51bGxcbiAgICAgICAgcGVuZGluZ1ByZWxvYWQgPSBudWxsXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKVxuXG4gICAgICAgIHByZXZpZXdDb250YWluZXJMb2FkZWQgPSBmYWxzZSAvLyBSZXNldCBmbGFnIHdoZW4gdW5sb2FkaW5nXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGlzUHJldmlld0J1dHRvbkNyZWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucycpLnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cFByZXZpZXdCdXR0b24nKSAhPT0gbnVsbFxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=