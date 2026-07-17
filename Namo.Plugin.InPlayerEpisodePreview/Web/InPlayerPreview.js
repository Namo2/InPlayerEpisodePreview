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

/***/ "./Web/Components/DialogContainerTemplate.ts":
/*!***************************************************!*\
  !*** ./Web/Components/DialogContainerTemplate.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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


/***/ }),

/***/ "./Web/Components/GroupListElementTemplate.ts":
/*!****************************************************!*\
  !*** ./Web/Components/GroupListElementTemplate.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupListElementTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class GroupListElementTemplate extends BaseTemplate_1.BaseTemplate {
    group;
    isCurrentGroup;
    constructor(container, positionAfterIndex, group, isCurrentGroup) {
        super(container, positionAfterIndex);
        this.group = group;
        this.isCurrentGroup = isCurrentGroup;
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


/***/ }),

/***/ "./Web/Components/ItemDetails.ts":
/*!***************************************!*\
  !*** ./Web/Components/ItemDetails.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
const ItemDetails_1 = __webpack_require__(/*! ./ItemDetails */ "./Web/Components/ItemDetails.ts");
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
                    <div class="flex">
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
                        <span class="previewItemDescription ${this.programDataStore.pluginSettings.BlurDescription ? 'blur' : ''}">
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
            // add event handler to start the playback of this item
            const itemImageCard = document.getElementById(`start-item-${this.item.Id}`);
            itemImageCard.addEventListener('click', () => this.playbackHandler.play(this.item.Id, this.item.UserData.PlaybackPositionTicks));
        }
    }
}
exports.ListElementTemplate = ListElementTemplate;


/***/ }),

/***/ "./Web/Components/PopupTitleTemplate.ts":
/*!**********************************************!*\
  !*** ./Web/Components/PopupTitleTemplate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupTitleTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
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
        const renderedElement = this.addElementToContainer();
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
    Endpoints["ITEM_DESCRIPTION"] = "/Items/{itemId}";
    Endpoints["PLAY_MEDIA"] = "/Users/{userId}/{deviceId}/Items/{itemId}/Play/{ticks}";
    Endpoints["SERVER_SETTINGS"] = "/ServerSettings";
    Endpoints["ITEM_PREVIEW_DATA"] = "/Users/{userId}/{deviceId}/Items/{itemId}/PreviewData";
    Endpoints["GROUP_ITEMS"] = "/Users/{userId}/Groups/{groupId}/Items";
    Endpoints["SET_SOURCE_COLLECTION"] = "/Users/{userId}/{deviceId}/SourceCollection/{collectionId}";
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
const GroupListElementTemplate_1 = __webpack_require__(/*! ./Components/GroupListElementTemplate */ "./Web/Components/GroupListElementTemplate.ts");
const Endpoints_1 = __webpack_require__(/*! ./Endpoints */ "./Web/Endpoints.ts");
const ItemType_1 = __webpack_require__(/*! ./Models/ItemType */ "./Web/Models/ItemType.ts");
// The backend already returns Playlists/BoxSets in their own manual item order.
// sorting should only apply for season-based (Episode) groups, where it reflects actual episode order.
const preserveBackendOrderTypes = new Set([ItemType_1.ItemType.Playlist, ItemType_1.ItemType.BoxSet]);
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
        }
    }
    // Appends pages when scrolling to the bottom.
    addScrollSentinel(parentDiv, loadPage, nextStartIndex, totalLoaded, viewToken) {
        const sentinel = document.createElement('div');
        parentDiv.appendChild(sentinel);
        const observer = new IntersectionObserver(async ([entry]) => {
            if (!entry.isIntersecting)
                return;
            observer.disconnect();
            sentinel.remove();
            const { items, totalRecordCount } = await loadPage(nextStartIndex);
            // The view may have moved on (e.g. back to the group list) while this page was loading.
            if (!this.programDataStore.isCurrentView(viewToken))
                return;
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
            sentinel.remove();
            const pageSize = this.programDataStore.pluginSettings.EpisodePageSize;
            const newStartIndex = Math.max(0, currentStartIndex - pageSize);
            const { items } = await loadPage(newStartIndex);
            // The view may have moved on (e.g. back to the group list) while this page was loading.
            if (!this.programDataStore.isCurrentView(viewToken))
                return;
            await this.prependItemElements(items, parentDiv, newStartIndex);
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
        // Selecting the group list itself is a view switch: it invalidates any item load still in
        // flight for a group the user has already navigated away from.
        this.programDataStore.beginNewView();
        for (let i = 0; i < groups.length; i++) {
            const group = new GroupListElementTemplate_1.GroupListElementTemplate(parentDiv, i, groups[i], groups[i].indexNumber === currentGroupIndex);
            group.render(async (e) => {
                e.stopPropagation();
                titleContainer.setText(groups[i].groupName);
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
    EpisodePageSize: 10,
};


/***/ }),

/***/ "./Web/Models/ServerSettings.ts":
/*!**************************************!*\
  !*** ./Web/Models/ServerSettings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultServerSettings = void 0;
exports.DefaultServerSettings = {
    MinResumePct: 5,
    MaxResumePct: 90,
    MinResumeDurationSeconds: 300
};


/***/ }),

/***/ "./Web/Services/DataFetcher.ts":
/*!*************************************!*\
  !*** ./Web/Services/DataFetcher.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataFetcher = void 0;
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
            }
        });
    }
}
exports.DataFetcher = DataFetcher;


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
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async play(itemId, startPositionTicks) {
        try {
            const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.PLAY_MEDIA}`
                .replace('{userId}', ApiClient.getCurrentUserId())
                .replace('{deviceId}', ApiClient.deviceId())
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


/***/ }),

/***/ "./Web/Services/ProgramDataStore.ts":
/*!******************************************!*\
  !*** ./Web/Services/ProgramDataStore.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
    updateItem(itemToUpdate) {
        this.groups = this.groups.map(group => group.items.some(item => item.Id === itemToUpdate.Id)
            ? { ...group, items: [...group.items.filter(item => item.Id !== itemToUpdate.Id), itemToUpdate] }
            : group);
    }
    // Called whenever the popup switches what it's displaying (opening, selecting a group, going back to
    // the group list). Any in-flight item load started before the switch can check isCurrentView() before
    // touching the DOM/state, so it doesn't render into a view it no longer belongs to.
    beginNewView() {
        return ++this._viewToken;
    }
    isCurrentView(token) {
        return token === this._viewToken;
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
const PreviewButtonTemplate_1 = __webpack_require__(/*! ./Components/PreviewButtonTemplate */ "./Web/Components/PreviewButtonTemplate.ts");
const ProgramDataStore_1 = __webpack_require__(/*! ./Services/ProgramDataStore */ "./Web/Services/ProgramDataStore.ts");
const DialogContainerTemplate_1 = __webpack_require__(/*! ./Components/DialogContainerTemplate */ "./Web/Components/DialogContainerTemplate.ts");
const PlaybackHandler_1 = __webpack_require__(/*! ./Services/PlaybackHandler */ "./Web/Services/PlaybackHandler.ts");
const ListElementFactory_1 = __webpack_require__(/*! ./ListElementFactory */ "./Web/ListElementFactory.ts");
const PopupTitleTemplate_1 = __webpack_require__(/*! ./Components/PopupTitleTemplate */ "./Web/Components/PopupTitleTemplate.ts");
const DataFetcher_1 = __webpack_require__(/*! ./Services/DataFetcher */ "./Web/Services/DataFetcher.ts");
const ItemType_1 = __webpack_require__(/*! ./Models/ItemType */ "./Web/Models/ItemType.ts");
const Endpoints_1 = __webpack_require__(/*! ./Endpoints */ "./Web/Endpoints.ts");
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
.previewPopupScroller {
    max-height: 60vh;
}
.previewQuickActionContainer {
    margin-left: auto; 
    margin-right: 1em;
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
.previewItemDescription {
    margin-left: 0.5em;
    margin-top: 1em;
    margin-right: 1.5em;
    display: block;
}
.previewItemDetails {
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
.previewItemImageCard:hover .blur {
    filter: blur(0);
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
let lastTrackedPositionSecond = -1;
function onVideoTimeUpdate() {
    const positionSecond = Math.floor(this.currentTime);
    if (positionSecond === lastTrackedPositionSecond)
        return;
    lastTrackedPositionSecond = positionSecond;
    const itemId = document.querySelector('.btnUserRating')?.getAttribute('data-id');
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
        previewButton.render(previewButtonClickHandler);
        document.querySelector('video.htmlvideoplayer')?.addEventListener('timeupdate', onVideoTimeUpdate);
        async function previewButtonClickHandler() {
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
                        indexNumber: g.IndexNumber
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
            const itemId = document.querySelector('.btnUserRating').getAttribute('data-id');
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
            const dialogContainer = new DialogContainerTemplate_1.DialogContainerTemplate(document.body, document.body.children.length - 1);
            dialogContainer.render();
            const contentDiv = document.getElementById('popupContentContainer');
            contentDiv.innerHTML = ''; // remove old content
            const viewToken = programDataStore.beginNewView();
            const popupTitle = new PopupTitleTemplate_1.PopupTitleTemplate(document.getElementById('popupFocusContainer'), -1, programDataStore);
            popupTitle.render((e) => {
                e.stopPropagation();
                popupTitle.setVisible(false);
                const contentDiv = document.getElementById('popupContentContainer');
                contentDiv.innerHTML = '';
                listElementFactory.createGroupElements(programDataStore.groups, contentDiv, programDataStore.activeGroup.indexNumber, popupTitle, loadGroupItems);
            });
            await listElementFactory.createLazyItemList(contentDiv, (startIndex) => loadGroupItems(activeGroupId, startIndex), viewToken, initialPage, initialWindowStartIndex);
            popupTitle.setText(programDataStore.activeGroup?.groupName ?? '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDO1lBQ3JKLENBQUMsQ0FBQztZQUVGLE1BQU0sa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsdUJBQXVCLENBQUM7WUFDbkssVUFBVSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQztZQUVqRSwrQ0FBK0M7WUFDL0MsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztZQUNoRSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMscUZBQXFGLEVBQUUsZ0JBQWdCLENBQUM7YUFDeEg7WUFDRCxVQUFVLEVBQUUsYUFBYSxDQUFDLGNBQWMsRUFBRTtRQUM5QyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVMsZUFBZTtRQUNwQix1REFBdUQ7UUFDdkQsUUFBUSxDQUFDLGFBQWEsQ0FBbUIsdUJBQXVCLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7UUFDdkgseUJBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFO1FBRWpELHNCQUFzQixHQUFHLEtBQUssRUFBQyw0QkFBNEI7SUFDL0QsQ0FBQztJQUVELFNBQVMsc0JBQXNCO1FBQzNCLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsS0FBSyxJQUFJO0lBQzNGLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvQmFzZVRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0dyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9JdGVtRGV0YWlscy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9MaXN0RWxlbWVudFRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUXVpY2tBY3Rpb25zL0Zhdm9yaXRlSWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9QbGF5U3RhdGVJY29uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0VuZHBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTGlzdEVsZW1lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvSXRlbVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9QbHVnaW5TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1NlcnZlclNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9EYXRhRmV0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL1dlYi9JblBsYXllclByZXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VUZW1wbGF0ZSB7XG4gICAgLypcbiAgICAgKiB0aGUgSFRNTCBiYXNlZCBJRCBvZiB0aGUgbmV3IGdlbmVyYXRlZCBFbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBlbGVtZW50SWQ6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHByaXZhdGUgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHsgfVxuXG4gICAgcHVibGljIGdldENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb25BZnRlckluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uQWZ0ZXJJbmRleDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0RWxlbWVudElkKGVsZW1lbnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbGVtZW50SWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudElkO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuZ2V0RWxlbWVudElkKCl9YCk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IHN0cmluZztcblxuICAgIGFic3RyYWN0IHJlbmRlciguLi5jbGlja0hhbmRsZXJzOiBGdW5jdGlvbltdKTogdm9pZDtcblxuICAgIHByb3RlY3RlZCBhZGRFbGVtZW50VG9Db250YWluZXIoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIGlmIHBvc2l0aW9uIGlzIG5lZ2F0aXZlXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpIDwgMCAmJiB0aGlzLmdldENvbnRhaW5lcigpLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5maXJzdEVsZW1lbnRDaGlsZC5iZWZvcmUodGhpcy5zdHJpbmdUb05vZGUodGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgRWxlbWVudCBpZiBjb250YWluZXIgaXMgZW1wdHlcbiAgICAgICAgaWYgKCF0aGlzLmdldENvbnRhaW5lcigpLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5pbm5lckhUTUwgPSB0aGlzLmdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5sYXN0RWxlbWVudENoaWxkXG4gICAgICAgIGlmICh0aGlzLmdldENvbnRhaW5lcigpLmNoaWxkcmVuLmxlbmd0aCA+IHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgJiYgdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSA+PSAwKVxuICAgICAgICAgICAgY2hpbGRCZWZvcmUgPSB0aGlzLmdldENvbnRhaW5lcigpLmNoaWxkcmVuW3RoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCldO1xuICAgICAgICBcbiAgICAgICAgY2hpbGRCZWZvcmUuYWZ0ZXIodGhpcy5zdHJpbmdUb05vZGUodGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKSkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBzdHJpbmdUb05vZGUodGVtcGxhdGVTdHJpbmc6IHN0cmluZyk6IE5vZGUge1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gdGVtcGxhdGVTdHJpbmc7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGRpYWxvZ0JhY2tkcm9wSWQgPSAnZGlhbG9nQmFja2Ryb3AnXG4gICAgZGlhbG9nQ29udGFpbmVySWQgPSAnZGlhbG9nQ29udGFpbmVyJ1xuICAgIHBvcHVwQ29udGVudENvbnRhaW5lcklkID0gJ3BvcHVwQ29udGVudENvbnRhaW5lcidcbiAgICBwb3B1cEZvY3VzQ29udGFpbmVySWQgPSAncG9wdXBGb2N1c0NvbnRhaW5lcidcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwcmV2aWV3UG9wdXAnKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmRpYWxvZ0JhY2tkcm9wSWR9XCIgY2xhc3M9XCJkaWFsb2dCYWNrZHJvcCBkaWFsb2dCYWNrZHJvcE9wZW5lZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZGlhbG9nQ29udGFpbmVySWR9XCIgY2xhc3M9XCJkaWFsb2dDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5wb3B1cEZvY3VzQ29udGFpbmVySWR9XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvY3VzY29udGFpbmVyIGRpYWxvZyBhY3Rpb25zaGVldC1ub3QtZnVsbHNjcmVlbiBhY3Rpb25TaGVldCBjZW50ZXJlZERpYWxvZyBvcGVuZWQgcHJldmlld1BvcHVwIGFjdGlvblNoZWV0Q29udGVudFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oaXN0b3J5PVwidHJ1ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1yZW1vdmVvbmNsb3NlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5wb3B1cENvbnRlbnRDb250YWluZXJJZH1cIiBjbGFzcz1cImFjdGlvblNoZWV0U2Nyb2xsZXIgc2Nyb2xsWSBwcmV2aWV3UG9wdXBTY3JvbGxlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmdldEVsZW1lbnRJZCgpKSlcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZ3JvdXA6IEdyb3VwLCBwcml2YXRlIGlzQ3VycmVudEdyb3VwOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGdyb3VwLSR7Z3JvdXAuZ3JvdXBJZH1gKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdEl0ZW0gbGlzdEl0ZW0tYnV0dG9uIGFjdGlvblNoZWV0TWVudUl0ZW0gZW1ieS1idXR0b24gcHJldmlld0xpc3RJdGVtXCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuZ3JvdXAuZ3JvdXBJZH1cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld0l0ZW1UaXRsZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuaXNDdXJyZW50R3JvdXAgPyBcIm1hdGVyaWFsLWljb25zIGNoZWNrXCIgOiBcIlwifVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RJdGVtQm9keSBhY3Rpb25zaGVldExpc3RJdGVtQm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25TaGVldEl0ZW1UZXh0XCI+JHt0aGlzLmdyb3VwLmdyb3VwTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4gY2xpY2tIYW5kbGVyKGUpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsc1RlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBpdGVtLSR7aXRlbS5JZH1gKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfS1kZXRhaWxzXCIgY2xhc3M9XCJpdGVtTWlzY0luZm8gaXRlbU1pc2NJbmZvLXByaW1hcnkgcHJldmlld0l0ZW1EZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uUHJlbWllcmVEYXRlID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICR7KG5ldyBEYXRlKHRoaXMuaXRlbS5QcmVtaWVyZURhdGUpKS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5nZXRMb2NhbGUoKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+JHt0aGlzLmZvcm1hdFJ1blRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ29tbXVuaXR5UmF0aW5nID8gYDxkaXYgY2xhc3M9XCJzdGFyUmF0aW5nQ29udGFpbmVyIG1lZGlhSW5mb0l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBzdGFySWNvbiBzdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Db21tdW5pdHlSYXRpbmcudG9GaXhlZCgxKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtIG1lZGlhSW5mb0NyaXRpY1JhdGluZyAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmcgPj0gNjAgPyAnbWVkaWFJbmZvQ3JpdGljUmF0aW5nRnJlc2gnIDogJ21lZGlhSW5mb0NyaXRpY1JhdGluZ1JvdHRlbid9XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZHNBdCBtZWRpYUluZm9JdGVtXCI+JHt0aGlzLmZvcm1hdEVuZFRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcywgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TG9jYWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubGFuZ3VhZ2VzXG4gICAgICAgICAgICA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gLy8gQHRzLWlnbm9yZSBmb3IgdXNlckxhbmd1YWdlICh0aGlzIGFkZHMgc3VwcG9ydCBmb3IgSUUpIFRPRE86IE1vdmUgdG8gaW50ZXJmYWNlXG4gICAgICAgICAgICA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRSdW5UaW1lKHRpY2tzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBmb3JtYXQgdGhlIHRpY2tzIHRvIGEgc3RyaW5nIHdpdGggbWludXRlcyBhbmQgaG91cnNcbiAgICAgICAgdGlja3MgLz0gMTAwMDA7IC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCk7XG4gICAgICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgICAgIGxldCBob3Vyc1N0cmluZzogc3RyaW5nID0gaG91cnMgPiAwID8gYCR7aG91cnN9aCBgIDogJyc7XG4gICAgICAgIHJldHVybiBgJHtob3Vyc1N0cmluZ30ke21pbnV0ZXN9bWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRFbmRUaW1lKHJ1bnRpbWVUaWNrczogbnVtYmVyLCBwbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIGNvbnZlcnQgZnJvbSBtaWNyb3NlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIHJ1bnRpbWVUaWNrcyAvPSAxMDAwMDtcbiAgICAgICAgcGxheWJhY2tQb3NpdGlvblRpY2tzIC89IDEwMDAwO1xuXG4gICAgICAgIGxldCB0aWNrczogbnVtYmVyID0gRGF0ZS5ub3coKSArIChydW50aW1lVGlja3MpO1xuICAgICAgICB0aWNrcyAtPSAobmV3IERhdGUoKSkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDsgLy8gYWRqdXN0IGZvciB0aW1lem9uZVxuICAgICAgICB0aWNrcyAtPSBwbGF5YmFja1Bvc2l0aW9uVGlja3M7IC8vIHN1YnRyYWN0IHRoZSBwbGF5YmFjayBwb3NpdGlvblxuXG4gICAgICAgIGxldCBob3Vyczogc3RyaW5nID0gdGhpcy56ZXJvUGFkKE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDM2MDApICUgMjQpKTtcbiAgICAgICAgbGV0IG1pbnV0ZXM6IHN0cmluZyA9IHRoaXMuemVyb1BhZChNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyA2MCkgJSA2MCkpO1xuXG4gICAgICAgIHJldHVybiBgRW5kcyBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHplcm9QYWQobnVtOiBudW1iZXIsIHBsYWNlczogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBTdHJpbmcobnVtKS5wYWRTdGFydChwbGFjZXMsICcwJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge0Zhdm9yaXRlSWNvblRlbXBsYXRlfSBmcm9tIFwiLi9RdWlja0FjdGlvbnMvRmF2b3JpdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5U3RhdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9QbGF5U3RhdGVJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIlxuaW1wb3J0IHtJdGVtRGV0YWlsc1RlbXBsYXRlfSBmcm9tIFwiLi9JdGVtRGV0YWlsc1wiXG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiXG5cbmV4cG9ydCBjbGFzcyBMaXN0RWxlbWVudFRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHF1aWNrQWN0aW9uQ29udGFpbmVyOiBIVE1MRWxlbWVudFxuICAgIHByaXZhdGUgcGxheVN0YXRlSWNvbjogUGxheVN0YXRlSWNvblRlbXBsYXRlXG4gICAgcHJpdmF0ZSBmYXZvcml0ZUljb246IEZhdm9yaXRlSWNvblRlbXBsYXRlXG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSwgcHJpdmF0ZSBwbGF5YmFja0hhbmRsZXI6IFBsYXliYWNrSGFuZGxlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgaXRlbS0ke2l0ZW0uSWR9YClcblxuICAgICAgICAvLyBjcmVhdGUgdGVtcCBxdWljayBhY3Rpb24gY29udGFpbmVyXG4gICAgICAgIHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIC8vIGNyZWF0ZSBxdWljayBhY3Rpb25zXG4gICAgICAgIHRoaXMucGxheVN0YXRlSWNvbiA9IG5ldyBQbGF5U3RhdGVJY29uVGVtcGxhdGUodGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSlcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24gPSBuZXcgRmF2b3JpdGVJY29uVGVtcGxhdGUodGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciwgMCwgdGhpcy5pdGVtKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGFkZCBxdWljayBhY3Rpb25zXG4gICAgICAgIHRoaXMucGxheVN0YXRlSWNvbi5yZW5kZXIoKVxuICAgICAgICB0aGlzLmZhdm9yaXRlSWNvbi5yZW5kZXIoKVxuXG4gICAgICAgIC8vIGFkZCBpdGVtIGRldGFpbHMvaW5mb1xuICAgICAgICBjb25zdCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IGRldGFpbHM6IEl0ZW1EZXRhaWxzVGVtcGxhdGUgPSBuZXcgSXRlbURldGFpbHNUZW1wbGF0ZShkZXRhaWxzQ29udGFpbmVyLCAtMSwgdGhpcy5pdGVtKVxuICAgICAgICBkZXRhaWxzLnJlbmRlcigpXG5cbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEltYWdlU3R5bGU6IHN0cmluZyA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL0l0ZW1zLyR7dGhpcy5pdGVtLklkfS9JbWFnZXMvUHJpbWFyeT90YWc9JHt0aGlzLml0ZW0uUHJpbWFyeUltYWdlVGFnfScpYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5pdGVtLklkfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbUNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5JbmRleE51bWJlciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSAhPT0gSXRlbVR5cGUuTW92aWVcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPyBgPHNwYW4+JHt0aGlzLml0ZW0uSW5kZXhOdW1iZXJ9PC9zcGFuPmAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuaXRlbS5OYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMucXVpY2tBY3Rpb25Db250YWluZXIuaW5uZXJIVE1MfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3TGlzdEl0ZW1Db250ZW50IGhpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtkZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG92ZXJmbG93QmFja2Ryb3BDYXJkIGNhcmQtaG92ZXJhYmxlIGNhcmQtd2l0aHVzZXJkYXRhIHByZXZpZXdJdGVtSW1hZ2VDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRCb3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRTY2FsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRQYWRkZXIgY2FyZFBhZGRlci1vdmVyZmxvd0JhY2tkcm9wIGxhenktaGlkZGVuLWNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkSW1hZ2VJY29uIG1hdGVyaWFsLWljb25zIHR2XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlld0l0ZW1JbWFnZUNhcmQtJHt0aGlzLml0ZW0uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkSW1hZ2VDb250YWluZXIgY2FyZENvbnRlbnQgaXRlbUFjdGlvbiBsYXp5IGJsdXJoYXNoZWQgbGF6eS1pbWFnZS1mYWRlaW4tZmFzdCAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5CbHVyVGh1bWJuYWlsID8gJ2JsdXInIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCIke2JhY2tncm91bmRJbWFnZVN0eWxlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImlubmVyQ2FyZEZvb3RlciBmdWxsSW5uZXJDYXJkRm9vdGVyIGlubmVyQ2FyZEZvb3RlckNsZWFyIGl0ZW1Qcm9ncmVzc0JhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByb2dyZXNzQmFyRm9yZWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiR7dGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2V9JTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5JZCAhPT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiY2FyZE92ZXJsYXlDb250YWluZXIgaXRlbUFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0LWl0ZW0tJHt0aGlzLml0ZW0uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcz1cInBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5QnV0dG9uIGNhcmRPdmVybGF5QnV0dG9uLWhvdmVyIGl0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgY2FyZE92ZXJsYXlGYWItcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJyZXN1bWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2FyZE92ZXJsYXlCdXR0b25JY29uIGNhcmRPdmVybGF5QnV0dG9uSWNvbi1ob3ZlciBwbGF5X2Fycm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkJsdXJEZXNjcmlwdGlvbiA/ICdibHVyJyA6ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkRlc2NyaXB0aW9uID8/ICdsb2FkaW5nLi4uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2xpY2tIYW5kbGVyKGUpKVxuXG4gICAgICAgIGlmICh0aGlzLml0ZW0uSWQgIT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKSB7XG4gICAgICAgICAgICAvLyBhZGQgZXZlbnQgaGFuZGxlciB0byBzdGFydCB0aGUgcGxheWJhY2sgb2YgdGhpcyBpdGVtXG4gICAgICAgICAgICBjb25zdCBpdGVtSW1hZ2VDYXJkOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFydC1pdGVtLSR7dGhpcy5pdGVtLklkfWApXG4gICAgICAgICAgICBpdGVtSW1hZ2VDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wbGF5YmFja0hhbmRsZXIucGxheSh0aGlzLml0ZW0uSWQsIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBUaXRsZVRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3UG9wdXBUaXRsZVwiPlxuICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5ncm91cHMubGVuZ3RoID4gMSA/XG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImFjdGlvbnNoZWV0TWVudUl0ZW1JY29uIGxpc3RJdGVtSWNvbiBsaXN0SXRlbUljb24tdHJhbnNwYXJlbnQgbWF0ZXJpYWwtaWNvbnMga2V5Ym9hcmRfYmFja3NwYWNlXCI+PC9zcGFuPicgOiBcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiYWN0aW9uU2hlZXRUaXRsZVwiPjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbikge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbGlja0hhbmRsZXIoZSkpXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVyVGV4dCA9IHRleHRcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldFZpc2libGUoaXNWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpXG4gICAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BvcHVwUHJldmlld0J1dHRvbicpO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJhdXRvU2l6ZSBwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiIGlzPVwicGFwZXItaWNvbi1idXR0b24tbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVwaXNvZGUgUHJldmlld1wiPlxuICAgICAgICAgICAgICAgIDwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPlxuICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJzdmcxXCJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2IDRcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImxheWVyMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0NDdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40NzY0Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMy43NTY4Njc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIuMTY5MzY2MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMC4yMzgyMzMwM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PVwiMS44MjU3MzM1XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJyZWN0NDctNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NjU5NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gMS4wMjkxNDM3LDEuMDMyMDQ4MiBoIDMuNzUyODk5MSB2IDIuMTcyMjM5NCBsIDAuMDA2NzYsLTIuMTU3MjU5NSB6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJyZWN0NDctOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NzQyNztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gMS44MjI4NjE0LDAuMjM4NzEzMzYgaCAzLjc1OTI1OSBWIDIuNDEwMTIxMSBsIC0wLjAwNjgsLTIuMTcxNDA3NzQgelwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogYW55ID0+IGNsaWNrSGFuZGxlcigpKTtcbiAgICB9XG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuLi9CYXNlVGVtcGxhdGVcIlxuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uLy4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiXG5cbmV4cG9ydCBjbGFzcyBGYXZvcml0ZUljb25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdmYXZvcml0ZUJ1dHRvbi0nICsgaXRlbS5JZClcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1yYXRpbmdidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5pdGVtPy5JZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNlcnZlcmlkPVwiJHt0aGlzLml0ZW0/LlNlcnZlcklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbXR5cGU9XCJFcGlzb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1saWtlcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXNmYXZvcml0ZT1cIiR7dGhpcy5pdGVtPy5Vc2VyRGF0YT8uSXNGYXZvcml0ZSA/PyBmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGZhdm9yaXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuLi9CYXNlVGVtcGxhdGVcIlxuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uLy4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiXG5cbmV4cG9ydCBjbGFzcyBQbGF5U3RhdGVJY29uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncGxheVN0YXRlQnV0dG9uLScgKyB0aGlzLml0ZW0uSWQpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICAgICBpcz1cImVtYnktcGxheXN0YXRlYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbUFjdGlvbiBwYXBlci1pY29uLWJ1dHRvbi1saWdodCBlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbT8uSWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zZXJ2ZXJpZD1cIiR7dGhpcy5pdGVtPy5TZXJ2ZXJJZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWl0ZW10eXBlPVwiRXBpc29kZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbGlrZXM9XCJcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYXllZD1cIiR7dGhpcy5pdGVtPy5Vc2VyRGF0YT8uUGxheWVkID8/IGZhbHNlfVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTWFyayBwbGF5ZWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNoZWNrIHBsYXlzdGF0ZWJ1dHRvbi1pY29uLSR7dGhpcy5pdGVtPy5Vc2VyRGF0YT8uUGxheWVkID8gXCJwbGF5ZWRcIiA6IFwidW5wbGF5ZWRcIn1cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBFbmRwb2ludHMge1xuICAgIEJBU0UgPSBcIkluUGxheWVyUHJldmlld1wiLFxuICAgIElURU1fREVTQ1JJUFRJT04gPSBcIi9JdGVtcy97aXRlbUlkfVwiLFxuICAgIFBMQVlfTUVESUEgPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L0l0ZW1zL3tpdGVtSWR9L1BsYXkve3RpY2tzfVwiLFxuICAgIFNFUlZFUl9TRVRUSU5HUyA9IFwiL1NlcnZlclNldHRpbmdzXCIsXG4gICAgSVRFTV9QUkVWSUVXX0RBVEEgPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L0l0ZW1zL3tpdGVtSWR9L1ByZXZpZXdEYXRhXCIsXG4gICAgR1JPVVBfSVRFTVMgPSBcIi9Vc2Vycy97dXNlcklkfS9Hcm91cHMve2dyb3VwSWR9L0l0ZW1zXCIsXG4gICAgU0VUX1NPVVJDRV9DT0xMRUNUSU9OID0gXCIvVXNlcnMve3VzZXJJZH0ve2RldmljZUlkfS9Tb3VyY2VDb2xsZWN0aW9uL3tjb2xsZWN0aW9uSWR9XCJcbn0iLCJpbXBvcnQge0xpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtHcm91cExpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlXCI7XG5pbXBvcnQge1BvcHVwVGl0bGVUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGVcIjtcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi9FbmRwb2ludHNcIjtcbmltcG9ydCB7R3JvdXBJdGVtc1Jlc3VsdH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwSXRlbXNSZXN1bHRcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL01vZGVscy9JdGVtVHlwZVwiO1xuXG4vLyBUaGUgYmFja2VuZCBhbHJlYWR5IHJldHVybnMgUGxheWxpc3RzL0JveFNldHMgaW4gdGhlaXIgb3duIG1hbnVhbCBpdGVtIG9yZGVyLlxuLy8gc29ydGluZyBzaG91bGQgb25seSBhcHBseSBmb3Igc2Vhc29uLWJhc2VkIChFcGlzb2RlKSBncm91cHMsIHdoZXJlIGl0IHJlZmxlY3RzIGFjdHVhbCBlcGlzb2RlIG9yZGVyLlxuY29uc3QgcHJlc2VydmVCYWNrZW5kT3JkZXJUeXBlczogU2V0PEl0ZW1UeXBlPiA9IG5ldyBTZXQoW0l0ZW1UeXBlLlBsYXlsaXN0LCBJdGVtVHlwZS5Cb3hTZXRdKVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHsgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtczogUHJldmlld0l0ZW1bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIgPSAwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBGb3IgUGxheWxpc3RzL0JveFNldHMsIHNob3cgdGhlIGFjdHVhbCBsaXN0IHBvc2l0aW9uIGluc3RlYWQgb2YgdGhlIEluZGV4TnVtYmVyIGZyb20gdGhlaXIgc2Vhc29uL2VwaXNvZGUuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcHJlc2VydmVPcmRlciA/IHsgLi4uaXRlbXNbaV0sIEluZGV4TnVtYmVyOiBvZmZzZXQgKyBpICsgMSB9IDogaXRlbXNbaV1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVySXRlbShpdGVtLCBwYXJlbnREaXYsIG9mZnNldCArIGkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIHByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXM6IFByZXZpZXdJdGVtW10sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIG9mZnNldDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcmVzZXJ2ZU9yZGVyID8geyAuLi5pdGVtc1tpXSwgSW5kZXhOdW1iZXI6IG9mZnNldCArIGkgKyAxIH0gOiBpdGVtc1tpXVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIHBhcmVudERpdiwgLTEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJlbmRlckl0ZW0oaXRlbTogUHJldmlld0l0ZW0sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGl0ZW1MaXN0RWxlbWVudFRlbXBsYXRlID0gbmV3IExpc3RFbGVtZW50VGVtcGxhdGUocGFyZW50RGl2LCBwb3NpdGlvbkFmdGVySW5kZXgsIGl0ZW0sIHRoaXMucGxheWJhY2tIYW5kbGVyLCB0aGlzLnByb2dyYW1EYXRhU3RvcmUpO1xuICAgICAgICBpdGVtTGlzdEVsZW1lbnRUZW1wbGF0ZS5yZW5kZXIoYXN5bmMgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIGhpZGUgaXRlbSBjb250ZW50IGZvciBhbGwgZXhpc3RpbmcgaXRlbXMgaW4gdGhlIHByZXZpZXcgbGlzdFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50XCIpLmZvckVhY2goKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyOiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tJHtpdGVtLklkfWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XG5cbiAgICAgICAgICAgIC8vIGxvYWQgaXRlbSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgaWYgKCFpdGVtLkRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuSVRFTV9ERVNDUklQVElPTn1gXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW0uSWQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbjogc3RyaW5nID0gcmVzdWx0Py5EZXNjcmlwdGlvblxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNob3cgaXRlbSBjb250ZW50IGZvciB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcblxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJzdGFydFwiIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXRlbS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Ob2RlOiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tJHtpdGVtLklkfWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XG5cbiAgICAgICAgICAgIC8vIHByZWxvYWQgZGVzY3JpcHRpb24gZm9yIHRoZSBjdXJyZW50bHkgcGxheWluZyBpdGVtXG4gICAgICAgICAgICBpZiAoIWl0ZW0uRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX0RFU0NSSVBUSU9OfWBcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbS5JZCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uOiBzdHJpbmcgPSByZXN1bHQ/LkRlc2NyaXB0aW9uXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaXRlbU5vZGUucXVlcnlTZWxlY3RvcignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW1Ob2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGl0ZW1Ob2RlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGVuZHMgcGFnZXMgd2hlbiBzY3JvbGxpbmcgdG8gdGhlIGJvdHRvbS5cbiAgICBwcml2YXRlIGFkZFNjcm9sbFNlbnRpbmVsKFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBsb2FkUGFnZTogKHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PixcbiAgICAgICAgbmV4dFN0YXJ0SW5kZXg6IG51bWJlcixcbiAgICAgICAgdG90YWxMb2FkZWQ6IG51bWJlcixcbiAgICAgICAgdmlld1Rva2VuOiBudW1iZXJcbiAgICApOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VudGluZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoc2VudGluZWwpXG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoYXN5bmMgKFtlbnRyeV0pID0+IHtcbiAgICAgICAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHJldHVyblxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICAgICAgICBzZW50aW5lbC5yZW1vdmUoKVxuXG4gICAgICAgICAgICBjb25zdCB7IGl0ZW1zLCB0b3RhbFJlY29yZENvdW50IH0gPSBhd2FpdCBsb2FkUGFnZShuZXh0U3RhcnRJbmRleClcbiAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbUVsZW1lbnRzKGl0ZW1zLCBwYXJlbnREaXYsIHRvdGFsTG9hZGVkKVxuXG4gICAgICAgICAgICBjb25zdCBuZXdUb3RhbExvYWRlZCA9IHRvdGFsTG9hZGVkICsgaXRlbXMubGVuZ3RoXG4gICAgICAgICAgICBpZiAobmV3VG90YWxMb2FkZWQgPCB0b3RhbFJlY29yZENvdW50KVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsU2VudGluZWwocGFyZW50RGl2LCBsb2FkUGFnZSwgbmV3VG90YWxMb2FkZWQsIG5ld1RvdGFsTG9hZGVkLCB2aWV3VG9rZW4pXG4gICAgICAgIH0sIHsgcm9vdDogcGFyZW50RGl2LCB0aHJlc2hvbGQ6IDAgfSlcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNlbnRpbmVsKVxuICAgIH1cblxuICAgIC8vIFByZXBlbmRzIHBhZ2VzIHdoZW4gc2Nyb2xsaW5nIHRvIHRoZSB0b3AuXG4gICAgLy8gY3VycmVudFN0YXJ0SW5kZXggaXMgdGhlIGFic29sdXRlIGluZGV4IG9mIHdoYXRldmVyIGlzIGN1cnJlbnRseSB0aGUgZmlyc3QgbG9hZGVkIGl0ZW1cbiAgICBwcml2YXRlIGFkZFNjcm9sbFNlbnRpbmVsQmFja3dhcmQoXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGxvYWRQYWdlOiAoc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+LFxuICAgICAgICBjdXJyZW50U3RhcnRJbmRleDogbnVtYmVyLFxuICAgICAgICB2aWV3VG9rZW46IG51bWJlclxuICAgICk6IHZvaWQge1xuICAgICAgICBpZiAoY3VycmVudFN0YXJ0SW5kZXggPD0gMCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3Qgc2VudGluZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwYXJlbnREaXYuaW5zZXJ0QmVmb3JlKHNlbnRpbmVsLCBwYXJlbnREaXYuZmlyc3RDaGlsZClcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihhc3luYyAoW2VudHJ5XSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykgcmV0dXJuXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgICAgICAgIHNlbnRpbmVsLnJlbW92ZSgpXG5cbiAgICAgICAgICAgIGNvbnN0IHBhZ2VTaXplID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZVxuICAgICAgICAgICAgY29uc3QgbmV3U3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIGN1cnJlbnRTdGFydEluZGV4IC0gcGFnZVNpemUpXG4gICAgICAgICAgICBjb25zdCB7IGl0ZW1zIH0gPSBhd2FpdCBsb2FkUGFnZShuZXdTdGFydEluZGV4KVxuICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wcmVwZW5kSXRlbUVsZW1lbnRzKGl0ZW1zLCBwYXJlbnREaXYsIG5ld1N0YXJ0SW5kZXgpXG5cbiAgICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsU2VudGluZWxCYWNrd2FyZChwYXJlbnREaXYsIGxvYWRQYWdlLCBuZXdTdGFydEluZGV4LCB2aWV3VG9rZW4pXG4gICAgICAgIH0sIHsgcm9vdDogcGFyZW50RGl2LCB0aHJlc2hvbGQ6IDAgfSlcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNlbnRpbmVsKVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVMYXp5SXRlbUxpc3QoXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGxvYWRQYWdlOiAoc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+LFxuICAgICAgICB2aWV3VG9rZW46IG51bWJlcixcbiAgICAgICAgaW5pdGlhbFBhZ2U/OiBHcm91cEl0ZW1zUmVzdWx0LFxuICAgICAgICBpbml0aWFsT2Zmc2V0OiBudW1iZXIgPSAwXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGZpcnN0UGFnZSA9IGluaXRpYWxQYWdlID8/IGF3YWl0IGxvYWRQYWdlKDApXG4gICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUl0ZW1FbGVtZW50cyhmaXJzdFBhZ2UuaXRlbXMsIHBhcmVudERpdiwgaW5pdGlhbE9mZnNldClcblxuICAgICAgICBjb25zdCB0b3RhbExvYWRlZCA9IGluaXRpYWxPZmZzZXQgKyBmaXJzdFBhZ2UuaXRlbXMubGVuZ3RoXG4gICAgICAgIGlmICh0b3RhbExvYWRlZCA8IGZpcnN0UGFnZS50b3RhbFJlY29yZENvdW50KVxuICAgICAgICAgICAgdGhpcy5hZGRTY3JvbGxTZW50aW5lbChwYXJlbnREaXYsIGxvYWRQYWdlLCB0b3RhbExvYWRlZCwgdG90YWxMb2FkZWQsIHZpZXdUb2tlbilcblxuICAgICAgICB0aGlzLmFkZFNjcm9sbFNlbnRpbmVsQmFja3dhcmQocGFyZW50RGl2LCBsb2FkUGFnZSwgaW5pdGlhbE9mZnNldCwgdmlld1Rva2VuKVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVHcm91cEVsZW1lbnRzKFxuICAgICAgICBncm91cHM6IEdyb3VwW10sXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGN1cnJlbnRHcm91cEluZGV4OiBudW1iZXIsXG4gICAgICAgIHRpdGxlQ29udGFpbmVyOiBQb3B1cFRpdGxlVGVtcGxhdGUsXG4gICAgICAgIGxvYWRJdGVtczogKGdyb3VwSWQ6IHN0cmluZywgc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+XG4gICAgKTogdm9pZCB7XG4gICAgICAgIGdyb3Vwcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4TnVtYmVyIC0gYi5pbmRleE51bWJlcilcblxuICAgICAgICAvLyBTZWxlY3RpbmcgdGhlIGdyb3VwIGxpc3QgaXRzZWxmIGlzIGEgdmlldyBzd2l0Y2g6IGl0IGludmFsaWRhdGVzIGFueSBpdGVtIGxvYWQgc3RpbGwgaW5cbiAgICAgICAgLy8gZmxpZ2h0IGZvciBhIGdyb3VwIHRoZSB1c2VyIGhhcyBhbHJlYWR5IG5hdmlnYXRlZCBhd2F5IGZyb20uXG4gICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZShwYXJlbnREaXYsIGksIGdyb3Vwc1tpXSwgZ3JvdXBzW2ldLmluZGV4TnVtYmVyID09PSBjdXJyZW50R3JvdXBJbmRleClcbiAgICAgICAgICAgIGdyb3VwLnJlbmRlcihhc3luYyAoZTogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFRleHQoZ3JvdXBzW2ldLmdyb3VwTmFtZSlcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpXG5cbiAgICAgICAgICAgICAgICBwYXJlbnREaXYuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBpbiBjYXNlIHRoaXMgZ3JvdXAgd2FzIGFscmVhZHkgbG9hZGVkIGVhcmxpZXIgaW4gdGhlIHNhbWUgcG9wdXAgc2Vzc2lvbixcbiAgICAgICAgICAgICAgICAvLyBzbyByZS1mZXRjaGluZyBwYWdlIDAgZG9lc24ndCBkdXBsaWNhdGUgaXRlbXMgYWxyZWFkeSBzaXR0aW5nIGluIHRoZSBzdG9yZS5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlR3JvdXBJdGVtcyhncm91cHNbaV0uZ3JvdXBJZCwgW10pXG4gICAgICAgICAgICAgICAgY29uc3Qgdmlld1Rva2VuID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmJlZ2luTmV3VmlldygpXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVMYXp5SXRlbUxpc3QocGFyZW50RGl2LCAoc3RhcnRJbmRleCkgPT4gbG9hZEl0ZW1zKGdyb3Vwc1tpXS5ncm91cElkLCBzdGFydEluZGV4KSwgdmlld1Rva2VuKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBlbnVtIEl0ZW1UeXBlIHtcbiAgICBBZ2dyZWdhdGVGb2xkZXIsXG4gICAgQXVkaW8sXG4gICAgQXVkaW9Cb29rLFxuICAgIEJhc2VQbHVnaW5Gb2xkZXIsXG4gICAgQm9vayxcbiAgICBCb3hTZXQsXG4gICAgQ2hhbm5lbCxcbiAgICBDaGFubmVsRm9sZGVySXRlbSxcbiAgICBDb2xsZWN0aW9uRm9sZGVyLFxuICAgIEVwaXNvZGUsXG4gICAgRm9sZGVyLFxuICAgIEdlbnJlLFxuICAgIE1hbnVhbFBsYXlsaXN0c0ZvbGRlcixcbiAgICBNb3ZpZSxcbiAgICBMaXZlVHZDaGFubmVsLFxuICAgIExpdmVUdlByb2dyYW0sXG4gICAgTXVzaWNBbGJ1bSxcbiAgICBNdXNpY0FydGlzdCxcbiAgICBNdXNpY0dlbnJlLFxuICAgIE11c2ljVmlkZW8sXG4gICAgUGVyc29uLFxuICAgIFBob3RvLFxuICAgIFBob3RvQWxidW0sXG4gICAgUGxheWxpc3QsXG4gICAgUGxheWxpc3RzRm9sZGVyLFxuICAgIFByb2dyYW0sXG4gICAgUmVjb3JkaW5nLFxuICAgIFNlYXNvbixcbiAgICBTZXJpZXMsXG4gICAgU3R1ZGlvLFxuICAgIFRyYWlsZXIsXG4gICAgVHZDaGFubmVsLFxuICAgIFR2UHJvZ3JhbSxcbiAgICBVc2VyUm9vdEZvbGRlcixcbiAgICBVc2VyVmlldyxcbiAgICBWaWRlbyxcbiAgICBZZWFyXG59IiwiaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vSXRlbVR5cGVcIjtcblxuZXhwb3J0IHR5cGUgUGx1Z2luU2V0dGluZ3MgPSB7XG4gICAgRW5hYmxlZEl0ZW1UeXBlczogSXRlbVR5cGVbXSxcbiAgICBCbHVyRGVzY3JpcHRpb246IGJvb2xlYW4sXG4gICAgQmx1clRodW1ibmFpbDogYm9vbGVhbixcbiAgICBFcGlzb2RlUGFnZVNpemU6IG51bWJlcixcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRQbHVnaW5TZXR0aW5nczogUGx1Z2luU2V0dGluZ3MgPSB7XG4gICAgRW5hYmxlZEl0ZW1UeXBlczogW0l0ZW1UeXBlLlNlcmllcywgSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5Nb3ZpZSwgSXRlbVR5cGUuRm9sZGVyLCBJdGVtVHlwZS5WaWRlb10sXG4gICAgQmx1ckRlc2NyaXB0aW9uOiBmYWxzZSxcbiAgICBCbHVyVGh1bWJuYWlsOiBmYWxzZSxcbiAgICBFcGlzb2RlUGFnZVNpemU6IDEwLFxufSIsImV4cG9ydCB0eXBlIFNlcnZlclNldHRpbmdzID0ge1xuICAgIE1pblJlc3VtZVBjdDogbnVtYmVyLCBcbiAgICBNYXhSZXN1bWVQY3Q6IG51bWJlciwgXG4gICAgTWluUmVzdW1lRHVyYXRpb25TZWNvbmRzOiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXJ2ZXJTZXR0aW5nczogU2VydmVyU2V0dGluZ3MgPSB7XG4gICAgTWluUmVzdW1lUGN0OiA1LFxuICAgIE1heFJlc3VtZVBjdDogOTAsXG4gICAgTWluUmVzdW1lRHVyYXRpb25TZWNvbmRzOiAzMDBcbn0iLCJpbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcblxudHlwZSBVc2VyRGF0YUNoYW5nZWRFbnRyeSA9IHtcbiAgICBJdGVtSWQ6IHN0cmluZ1xuICAgIFBsYXllZDogYm9vbGVhblxuICAgIElzRmF2b3JpdGU6IGJvb2xlYW5cbiAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlclxuICAgIFBsYXllZFBlcmNlbnRhZ2U/OiBudW1iZXJcbn1cblxudHlwZSBXZWJTb2NrZXRNZXNzYWdlID0ge1xuICAgIE1lc3NhZ2VUeXBlOiBzdHJpbmdcbiAgICBEYXRhOiBhbnlcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFGZXRjaGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcbiAgICAgICAgRXZlbnRzLm9uKEFwaUNsaWVudCwgJ21lc3NhZ2UnLCAoX2V2ZW50LCBtZXNzYWdlOiBXZWJTb2NrZXRNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5NZXNzYWdlVHlwZSAhPT0gJ1VzZXJEYXRhQ2hhbmdlZCcpIHJldHVyblxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuRGF0YS5Vc2VySWQgIT09IEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCkpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YUxpc3Q6IFVzZXJEYXRhQ2hhbmdlZEVudHJ5W10gPSBtZXNzYWdlLkRhdGEuVXNlckRhdGFMaXN0ID8/IFtdXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVzZXJEYXRhIG9mIHVzZXJEYXRhTGlzdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW06IFByZXZpZXdJdGVtID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKHVzZXJEYXRhLkl0ZW1JZClcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIFVzZXJEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLlVzZXJEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVkOiB1c2VyRGF0YS5QbGF5ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBJc0Zhdm9yaXRlOiB1c2VyRGF0YS5Jc0Zhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWJhY2tQb3NpdGlvblRpY2tzOiB1c2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZWRQZXJjZW50YWdlOiB1c2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nX3ByZWZpeDogc3RyaW5nID0gXCJbSW5QbGF5ZXJFcGlzb2RlUHJldmlld11cIikge1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmluZm8oYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi4vRW5kcG9pbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5YmFja0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHsgfVxuXG4gICAgYXN5bmMgcGxheShpdGVtSWQ6IHN0cmluZywgc3RhcnRQb3NpdGlvblRpY2tzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQgfCBSZXNwb25zZT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuUExBWV9NRURJQX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW1JZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3RpY2tzfScsIHN0YXJ0UG9zaXRpb25UaWNrcy50b1N0cmluZygpKSlcblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCB9KVxuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBzdGFydCB0aGUgcGxheWJhY2sgb2YgYW4gaXRlbWAsIGV4KVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7UHJvZ3JhbURhdGF9IGZyb20gXCIuLi9Nb2RlbHMvUHJvZ3JhbURhdGFcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7RGVmYXVsdFBsdWdpblNldHRpbmdzLCBQbHVnaW5TZXR0aW5nc30gZnJvbSBcIi4uL01vZGVscy9QbHVnaW5TZXR0aW5nc1wiO1xuaW1wb3J0IHtEZWZhdWx0U2VydmVyU2V0dGluZ3MsIFNlcnZlclNldHRpbmdzfSBmcm9tIFwiLi4vTW9kZWxzL1NlcnZlclNldHRpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtRGF0YVN0b3JlIHtcbiAgICBwcml2YXRlIF9wcm9ncmFtRGF0YTogUHJvZ3JhbURhdGFcbiAgICBwcml2YXRlIF92aWV3VG9rZW46IG51bWJlciA9IDBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZU1lZGlhU291cmNlSWQ6ICcnLFxuICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogJycsXG4gICAgICAgICAgICBib3hTZXROYW1lOiAnJyxcbiAgICAgICAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICBwbHVnaW5TZXR0aW5nczogRGVmYXVsdFBsdWdpblNldHRpbmdzLFxuICAgICAgICAgICAgc2VydmVyU2V0dGluZ3M6IERlZmF1bHRTZXJ2ZXJTZXR0aW5nc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVNZWRpYVNvdXJjZUlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhY3RpdmVNZWRpYVNvdXJjZUlkKGFjdGl2ZU1lZGlhU291cmNlSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlR3JvdXBJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYWN0aXZlR3JvdXBJZChhY3RpdmVHcm91cElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZCA9IGFjdGl2ZUdyb3VwSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZUdyb3VwKCk6IEdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAuZ3JvdXBJZCA9PT0gdGhpcy5hY3RpdmVHcm91cElkKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBJdGVtVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS50eXBlXG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0eXBlKHR5cGU6IEl0ZW1UeXBlKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnR5cGUgPSB0eXBlXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib3hTZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3hTZXROYW1lKGJveFNldE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lID0gYm94U2V0TmFtZVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ3JvdXBzKCk6IEdyb3VwW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBncm91cHMoZ3JvdXBzOiBHcm91cFtdKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3VwcyA9IGdyb3Vwc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGx1Z2luU2V0dGluZ3MoKTogUGx1Z2luU2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEucGx1Z2luU2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsdWdpblNldHRpbmdzKHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5wbHVnaW5TZXR0aW5ncyA9IHNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZXJ2ZXJTZXR0aW5ncygpOiBTZXJ2ZXJTZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5zZXJ2ZXJTZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmVyU2V0dGluZ3Moc2V0dGluZ3M6IFNlcnZlclNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnNlcnZlclNldHRpbmdzID0gc2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFJc0FsbG93ZWRGb3JQcmV2aWV3KCkge1xuICAgICAgICBpZiAoIXRoaXMuYWxsb3dlZFByZXZpZXdUeXBlcy5pbmNsdWRlcyh0aGlzLnR5cGUpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLnNvbWUoZ3JvdXAgPT4gZ3JvdXAuaXRlbXMubGVuZ3RoID49IDEpXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhbGxvd2VkUHJldmlld1R5cGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5TZXR0aW5ncy5FbmFibGVkSXRlbVR5cGVzXG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW1CeUlkKGl0ZW1JZDogc3RyaW5nKTogUHJldmlld0l0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHNcbiAgICAgICAgICAgIC5mbGF0TWFwKGdyb3VwID0+IGdyb3VwLml0ZW1zKVxuICAgICAgICAgICAgLmZpbmQoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUdyb3VwSXRlbXMoZ3JvdXBJZDogc3RyaW5nLCBpdGVtczogUHJldmlld0l0ZW1bXSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMgPSB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMubWFwKGdyb3VwID0+XG4gICAgICAgICAgICBncm91cC5ncm91cElkID09PSBncm91cElkID8geyAuLi5ncm91cCwgaXRlbXMgfSA6IGdyb3VwXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlSXRlbShpdGVtVG9VcGRhdGU6IFByZXZpZXdJdGVtKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGdyb3VwID0+XG4gICAgICAgICAgICBncm91cC5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbVRvVXBkYXRlLklkKVxuICAgICAgICAgICAgICAgID8geyAuLi5ncm91cCwgaXRlbXM6IFsuLi5ncm91cC5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLklkICE9PSBpdGVtVG9VcGRhdGUuSWQpLCBpdGVtVG9VcGRhdGVdIH1cbiAgICAgICAgICAgICAgICA6IGdyb3VwXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbmV2ZXIgdGhlIHBvcHVwIHN3aXRjaGVzIHdoYXQgaXQncyBkaXNwbGF5aW5nIChvcGVuaW5nLCBzZWxlY3RpbmcgYSBncm91cCwgZ29pbmcgYmFjayB0b1xuICAgIC8vIHRoZSBncm91cCBsaXN0KS4gQW55IGluLWZsaWdodCBpdGVtIGxvYWQgc3RhcnRlZCBiZWZvcmUgdGhlIHN3aXRjaCBjYW4gY2hlY2sgaXNDdXJyZW50VmlldygpIGJlZm9yZVxuICAgIC8vIHRvdWNoaW5nIHRoZSBET00vc3RhdGUsIHNvIGl0IGRvZXNuJ3QgcmVuZGVyIGludG8gYSB2aWV3IGl0IG5vIGxvbmdlciBiZWxvbmdzIHRvLlxuICAgIHB1YmxpYyBiZWdpbk5ld1ZpZXcoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICsrdGhpcy5fdmlld1Rva2VuXG4gICAgfVxuXG4gICAgcHVibGljIGlzQ3VycmVudFZpZXcodG9rZW46IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdG9rZW4gPT09IHRoaXMuX3ZpZXdUb2tlblxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vU2VydmljZXMvTG9nZ2VyXCI7XG5pbXBvcnQge1ByZXZpZXdCdXR0b25UZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtEaWFsb2dDb250YWluZXJUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtMaXN0RWxlbWVudEZhY3Rvcnl9IGZyb20gXCIuL0xpc3RFbGVtZW50RmFjdG9yeVwiO1xuaW1wb3J0IHtQb3B1cFRpdGxlVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlXCI7XG5pbXBvcnQge0RhdGFGZXRjaGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge1BsdWdpblNldHRpbmdzfSBmcm9tIFwiLi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3NcIjtcbmltcG9ydCB7U2VydmVyU2V0dGluZ3N9IGZyb20gXCIuL01vZGVscy9TZXJ2ZXJTZXR0aW5nc1wiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuL0VuZHBvaW50c1wiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge0dyb3VwSXRlbXNSZXN1bHR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cEl0ZW1zUmVzdWx0XCI7XG5cbi8vIGxvYWQgYW5kIGluamVjdCBpblBsYXllclByZXZpZXcuY3NzIGludG8gdGhlIHBhZ2Vcbi8qXG4gKiBJbmplY3Qgc3R5bGUgdG8gYmUgdXNlZCBmb3IgdGhlIHByZXZpZXcgcG9wdXBcbiAqL1xubGV0IGluUGxheWVyUHJldmlld1N0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUuaWQgPSAnaW5QbGF5ZXJQcmV2aWV3U3R5bGUnXG5pblBsYXllclByZXZpZXdTdHlsZS50ZXh0Q29udGVudCA9IGBcbi5zZWxlY3RlZExpc3RJdGVtIHtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4ucHJldmlld0xpc3RJdGVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IHtcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgbWluLWhlaWdodDogMTUuNXZoOyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJldmlld1BvcHVwIHtcbiAgICBhbmltYXRpb246IDE0MG1zIGVhc2Utb3V0IDBzIDEgbm9ybWFsIGJvdGggcnVubmluZyBzY2FsZXVwOyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIG1hcmdpbjogMHB4OyBcbiAgICBib3R0b206IDEuNXZoOyBcbiAgICBsZWZ0OiA1MHZ3OyBcbiAgICB3aWR0aDogNDh2dztcbn1cbi5wcmV2aWV3UG9wdXBUaXRsZSB7XG4gICAgbWF4LWhlaWdodDogNHZoO1xufVxuLnByZXZpZXdQb3B1cFRpdGxlIGgxLmFjdGlvblNoZWV0VGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4ucHJldmlld1BvcHVwU2Nyb2xsZXIge1xuICAgIG1heC1oZWlnaHQ6IDYwdmg7XG59XG4ucHJldmlld1F1aWNrQWN0aW9uQ29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4ucHJldmlld0l0ZW1Db250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnByZXZpZXdJdGVtVGl0bGUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkIHtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcbn1cbi5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4zcyBlYXNlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5ibHVyOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG59XG4ucHJldmlld0l0ZW1JbWFnZUNhcmQ6aG92ZXIgLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbn1cbmBcbmRvY3VtZW50Py5oZWFkPy5hcHBlbmRDaGlsZChpblBsYXllclByZXZpZXdTdHlsZSlcblxuLy8gaW5pdCBzZXJ2aWNlcyBhbmQgaGVscGVyc1xuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKClcbmNvbnN0IHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUgPSBuZXcgUHJvZ3JhbURhdGFTdG9yZSgpXG5jb25zdCBwbGF5YmFja0hhbmRsZXI6IFBsYXliYWNrSGFuZGxlciA9IG5ldyBQbGF5YmFja0hhbmRsZXIobG9nZ2VyKVxuY29uc3QgbGlzdEVsZW1lbnRGYWN0b3J5ID0gbmV3IExpc3RFbGVtZW50RmFjdG9yeShwbGF5YmFja0hhbmRsZXIsIHByb2dyYW1EYXRhU3RvcmUpXG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgLy8gRW5zdXJlIEFwaUNsaWVudC9FdmVudHMgZXhpc3QgYW5kIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgaWYgKHR5cGVvZiBBcGlDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBFdmVudHMgPT09ICd1bmRlZmluZWQnIHx8ICFBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZD8uKCkpIHtcbiAgICAgICAgc2V0VGltZW91dChpbml0aWFsaXplLCAzMDApIC8vIEluY3JlYXNlZCByZXRyeSBkZWxheSBzbGlnaHRseVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBuZXcgRGF0YUZldGNoZXIocHJvZ3JhbURhdGFTdG9yZSlcblxuICAgIEFwaUNsaWVudC5nZXRQbHVnaW5Db25maWd1cmF0aW9uKCc3MzgzM2Q1Zi0wYmNiLTQ1ZGMtYWI4Yi03Y2U2NjhmNDM0NWQnKVxuICAgICAgICAudGhlbigoY29uZmlnOiBQbHVnaW5TZXR0aW5ncykgPT4gcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncyA9IGNvbmZpZylcblxuICAgIGNvbnN0IHNlcnZlclNldHRpbmdzVXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuU0VSVkVSX1NFVFRJTkdTfWApXG4gICAgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsOiBzZXJ2ZXJTZXR0aW5nc1VybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAudGhlbigoY29uZmlnOiBTZXJ2ZXJTZXR0aW5ncykgPT4gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncyA9IGNvbmZpZylcbn1cbmluaXRpYWxpemUoKVxuXG5jb25zdCB2aWRlb1BhdGhzOiBzdHJpbmdbXSA9IFsnL3ZpZGVvJ11cbmxldCBwcmV2aW91c1JvdXRlUGF0aDogc3RyaW5nID0gbnVsbFxubGV0IHByZXZpZXdDb250YWluZXJMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlld3Nob3cnLCB2aWV3U2hvd0V2ZW50SGFuZGxlcilcblxubGV0IGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQ6IG51bWJlciA9IC0xXG5mdW5jdGlvbiBvblZpZGVvVGltZVVwZGF0ZSh0aGlzOiBIVE1MVmlkZW9FbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgcG9zaXRpb25TZWNvbmQgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudFRpbWUpXG4gICAgaWYgKHBvc2l0aW9uU2Vjb25kID09PSBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kKSByZXR1cm5cbiAgICBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kID0gcG9zaXRpb25TZWNvbmRcblxuICAgIGNvbnN0IGl0ZW1JZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5Vc2VyUmF0aW5nJyk/LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgaWYgKCFpdGVtSWQpIHJldHVyblxuICAgIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCA9IGl0ZW1JZFxuXG4gICAgY29uc3QgaXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSB8fCAhaXRlbS5SdW5UaW1lVGlja3MpIHJldHVyblxuXG4gICAgY29uc3QgcG9zaXRpb25UaWNrcyA9IHRoaXMuY3VycmVudFRpbWUgKiAxMF8wMDBfMDAwXG4gICAgY29uc3QgcGxheWVkUGVyY2VudGFnZSA9IChwb3NpdGlvblRpY2tzIC8gaXRlbS5SdW5UaW1lVGlja3MpICogMTAwXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YToge1xuICAgICAgICAgICAgLi4uaXRlbS5Vc2VyRGF0YSxcbiAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogcG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IHBsYXllZFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICBQbGF5ZWQ6IHBsYXllZFBlcmNlbnRhZ2UgPj0gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncy5NYXhSZXN1bWVQY3RcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vIFRyYWNrcyB3aGljaCBCb3hTZXQvUGxheWxpc3QgZGV0YWlscyBwYWdlIChpZiBhbnkpIHdhcyB2aXNpdGVkIGltbWVkaWF0ZWx5IGJlZm9yZSBuYXZpZ2F0aW5nIGludG8gcGxheWJhY2tcbmNvbnN0IERFVEFJTFNfUk9VVEVfUEFUSDogc3RyaW5nID0gJy9kZXRhaWxzJ1xuY29uc3QgY29sbGVjdGlvbkxpa2VJdGVtVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLlBsYXlsaXN0XSlcbmxldCBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkOiBzdHJpbmcgPSBudWxsXG5cbmZ1bmN0aW9uIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY29sbGVjdGlvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5TRVRfU09VUkNFX0NPTExFQ1RJT059YFxuICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2NvbGxlY3Rpb25JZH0nLCBjb2xsZWN0aW9uSWQpKVxuICAgIEFwaUNsaWVudC5hamF4KHt0eXBlOiAnR0VUJywgdXJsfSkuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCByZWNvcmQgc291cmNlIGNvbGxlY3Rpb24gZm9yIHBsYXliYWNrIHNlc3Npb25cIiwgZXgpKVxufVxuXG5mdW5jdGlvbiBjYXB0dXJlU291cmNlQ29sbGVjdGlvbihjdXJyZW50Um91dGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbY3VycmVudFBhdGgsIGN1cnJlbnRRdWVyeV0gPSBjdXJyZW50Um91dGVQYXRoLnNwbGl0KCc/JylcbiAgICBjb25zdCBwcmV2aW91c1BhdGggPSBwcmV2aW91c1JvdXRlUGF0aD8uc3BsaXQoJz8nKVswXVxuXG4gICAgaWYgKGN1cnJlbnRQYXRoID09PSBERVRBSUxTX1JPVVRFX1BBVEgpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0lkID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50UXVlcnkgPz8gJycpLmdldCgnaWQnKVxuICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxuICAgICAgICBpZiAoIWRldGFpbHNJZCkgcmV0dXJuXG5cbiAgICAgICAgQXBpQ2xpZW50LmdldEl0ZW0oQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSwgZGV0YWlsc0lkKS50aGVuKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVHlwZTogSXRlbVR5cGUgPSBJdGVtVHlwZVtpdGVtLlR5cGUgYXMgdW5rbm93biBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gY29sbGVjdGlvbkxpa2VJdGVtVHlwZXMuaGFzKGl0ZW1UeXBlKSA/IGRldGFpbHNJZCA6IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMoY3VycmVudFBhdGgpICYmIHByZXZpb3VzUGF0aCA9PT0gREVUQUlMU19ST1VURV9QQVRIICYmIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQpIHtcbiAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkKVxuICAgIH1cblxuICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBudWxsXG59XG5cbi8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGNvbGxvZWN0aW9uL3BsYXlsaXN0IGlkIHRob3J1Z2ggYSBwbGF5IGFjdGlvbiBvbiBhIGNhcmQgdGhlIHNhbWUgd2F5IGFzIGhlbGx5ZmluIGRvZXMgaXQgaXRzZWxmXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamVsbHlmaW4vamVsbHlmaW4td2ViL2Jsb2IvcmVsZWFzZS0xMC4xMS56L3NyYy9jb21wb25lbnRzL3Nob3J0Y3V0cy5qcyNMMjE2XG5jb25zdCBQTEFZQkFDS19UUklHR0VSX0FDVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbJ3BsYXknLCAncmVzdW1lJywgJ3BsYXlhbGxmcm9taGVyZSddKVxuZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrQ2FwdHVyZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGlvbkVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8uY2xvc2VzdD8uKCdbZGF0YS1hY3Rpb25dJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKCFhY3Rpb25FbGVtZW50IHx8ICFQTEFZQkFDS19UUklHR0VSX0FDVElPTlMuaGFzKGFjdGlvbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpKSkgcmV0dXJuXG5cbiAgICBjb25zdCBjYXJkID0gYWN0aW9uRWxlbWVudC5jbG9zZXN0KCdbZGF0YS1pZF0nKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcbiAgICBpZiAoIWNhcmQpIHJldHVyblxuXG4gICAgY29uc3QgY2hpbGRPZkNvbGxlY3Rpb25JZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxlY3Rpb25pZCcpID8/IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXBsYXlsaXN0aWQnKVxuICAgIGlmIChjaGlsZE9mQ29sbGVjdGlvbklkKSB7XG4gICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY2hpbGRPZkNvbGxlY3Rpb25JZClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY2FyZEl0ZW1UeXBlOiBJdGVtVHlwZSA9IEl0ZW1UeXBlW2NhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSBhcyB1bmtub3duIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICBjb25zdCBjYXJkSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgaWYgKGNhcmRJZCAmJiBjb2xsZWN0aW9uTGlrZUl0ZW1UeXBlcy5oYXMoY2FyZEl0ZW1UeXBlKSkge1xuICAgICAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNhcmRJZClcbiAgICB9XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRG9jdW1lbnRDbGlja0NhcHR1cmUsIHRydWUpXG5cbmZ1bmN0aW9uIHZpZXdTaG93RXZlbnRIYW5kbGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZVBhdGg6IHN0cmluZyA9IGdldExvY2F0aW9uUGF0aCgpXG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhdGlvblBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb246IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZUluZGV4OiBudW1iZXIgPSBsb2NhdGlvbi5sYXN0SW5kZXhPZignLycpXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5zdWJzdHJpbmcoY3VycmVudFJvdXRlSW5kZXgpXG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbCBhdHRlbXB0IHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcgb3Igc2NoZWR1bGUgcmV0cmllcy5cbiAgICBjYXB0dXJlU291cmNlQ29sbGVjdGlvbihjdXJyZW50Um91dGVQYXRoKVxuICAgIGF0dGVtcHRMb2FkVmlkZW9WaWV3KClcbiAgICBwcmV2aW91c1JvdXRlUGF0aCA9IGN1cnJlbnRSb3V0ZVBhdGhcblxuICAgIC8vIEF0dGVtcHRzIHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcsIHJldHJ5aW5nIHVwIHRvIDMgdGltZXMgaWYgbmVjZXNzYXJ5LlxuICAgIGZ1bmN0aW9uIGF0dGVtcHRMb2FkVmlkZW9WaWV3KHJldHJ5Q291bnQgPSAwKTogdm9pZCB7XG4gICAgICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRSb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICAvLyBpZiAocHJvZ3JhbURhdGFTdG9yZS5kYXRhSXNBbGxvd2VkRm9yUHJldmlldykge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcmV2aWV3IGNvbnRhaW5lciBpcyBhbHJlYWR5IGxvYWRlZCBiZWZvcmUgbG9hZGluZ1xuICAgICAgICAgICAgICAgIGlmICghcHJldmlld0NvbnRhaW5lckxvYWRlZCAmJiAhaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRWaWRlb1ZpZXcoKVxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gdHJ1ZSAvLyBTZXQgZmxhZyB0byB0cnVlIGFmdGVyIGxvYWRpbmdcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJldHJ5Q291bnQgPCAzKSB7IC8vIFJldHJ5IHVwIHRvIDMgdGltZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBSZXRyeSAjJHtyZXRyeUNvdW50ICsgMX1gKVxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0TG9hZFZpZGVvVmlldyhyZXRyeUNvdW50ICsgMSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwMCkgLy8gV2FpdCAxMCBzZWNvbmRzIGZvciBlYWNoIHJldHJ5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhwcmV2aW91c1JvdXRlUGF0aCkpIHtcbiAgICAgICAgICAgIHVubG9hZFZpZGVvVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgLy8gYWRkIHByZXZpZXcgYnV0dG9uIHRvIHRoZSBwYWdlXG4gICAgICAgIGNvbnN0IHBhcmVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucycpLmxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudDsgLy8gbGFzdEVsZW1lbnRDaGlsZC5wYXJlbnRFbGVtZW50IGlzIHVzZWQgZm9yIGNhc3RpbmcgZnJvbSBFbGVtZW50IHRvIEhUTUxFbGVtZW50XG4gICAgICAgIFxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5Vc2VyUmF0aW5nXCIpKTtcbiAgICAgICAgLy8gaWYgaW5kZXggaXMgaW52YWxpZCB0cnkgdG8gdXNlIHRoZSBvbGQgcG9zaXRpb24gKHVzZWQgaW4gSmVsbHlmaW4gMTAuOC4xMilcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSlcbiAgICAgICAgICAgIGluZGV4ID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmRJbmRleCgoY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9zZFRpbWVUZXh0XCIpKVxuXG4gICAgICAgIGNvbnN0IHByZXZpZXdCdXR0b246IFByZXZpZXdCdXR0b25UZW1wbGF0ZSA9IG5ldyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUocGFyZW50LCBpbmRleClcbiAgICAgICAgcHJldmlld0J1dHRvbi5yZW5kZXIocHJldmlld0J1dHRvbkNsaWNrSGFuZGxlcilcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxWaWRlb0VsZW1lbnQ+KCd2aWRlby5odG1sdmlkZW9wbGF5ZXInKT8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIG9uVmlkZW9UaW1lVXBkYXRlKVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBjb25zdCBsb2FkSXRlbVByZXZpZXdEYXRhID0gYXN5bmMgKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTx7XG4gICAgICAgICAgICAgICAgaXRlbVR5cGU6IHN0cmluZywgY29udGFpbmVyTmFtZTogc3RyaW5nIHwgbnVsbCwgZ3JvdXBzOiBHcm91cFtdLCBhY3RpdmVHcm91cElkOiBzdHJpbmcsIGFjdGl2ZUl0ZW1JbmRleDogbnVtYmVyXG4gICAgICAgICAgICB9PiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLklURU1fUFJFVklFV19EQVRBfWBcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiByYXcuSXRlbVR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lck5hbWU6IHJhdy5Db250YWluZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICBncm91cHM6IHJhdy5Hcm91cHMubWFwKChnOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkOiByYXcuQWN0aXZlR3JvdXBJZCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbUluZGV4OiByYXcuQWN0aXZlSXRlbUluZGV4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBQQUdFX1NJWkUgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZVxuXG4gICAgICAgICAgICBjb25zdCBsb2FkR3JvdXBJdGVtcyA9IGFzeW5jIChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciA9IDAsIGxpbWl0OiBudW1iZXIgPSBQQUdFX1NJWkUpOiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfSVRFTVN9YFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCB1c2VySWQpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7Z3JvdXBJZH0nLCBncm91cElkKSxcbiAgICAgICAgICAgICAgICAgICAgeyBzdGFydEluZGV4LCBsaW1pdCB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogR3JvdXBJdGVtc1Jlc3VsdCA9IHsgaXRlbXM6IHJhdy5JdGVtcywgdG90YWxSZWNvcmRDb3VudDogcmF3LlRvdGFsUmVjb3JkQ291bnQgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5maW5kKGcgPT4gZy5ncm91cElkID09PSBncm91cElkKT8uaXRlbXMgPz8gW11cbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUdyb3VwSXRlbXMoZ3JvdXBJZCwgWy4uLmV4aXN0aW5nLCAuLi5yZXN1bHQuaXRlbXNdKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blVzZXJSYXRpbmcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuICAgICAgICAgICAgY29uc3QgeyBpdGVtVHlwZSwgY29udGFpbmVyTmFtZSwgZ3JvdXBzLCBhY3RpdmVHcm91cElkLCBhY3RpdmVJdGVtSW5kZXggfSA9IGF3YWl0IGxvYWRJdGVtUHJldmlld0RhdGEoaXRlbUlkKVxuXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IGdyb3Vwc1xuXG4gICAgICAgICAgICAvLyBMb2FkIGEgMy1wYWdlIHdpbmRvdyAocGFnZSBvZiB0aGUgYWN0aXZlIGVwaXNvZGUsIHBsdXMgb25lIHBhZ2UgYmVmb3JlIGFuZCBhZnRlcilcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VPZkFjdGl2ZUVwaXNvZGUgPSBNYXRoLmZsb29yKGFjdGl2ZUl0ZW1JbmRleCAvIFBBR0VfU0laRSlcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgLSAxKSAqIFBBR0VfU0laRSlcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxXaW5kb3dMaW1pdCA9IChwYWdlT2ZBY3RpdmVFcGlzb2RlICsgMikgKiBQQUdFX1NJWkUgLSBpbml0aWFsV2luZG93U3RhcnRJbmRleFxuXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsUGFnZTogR3JvdXBJdGVtc1Jlc3VsdCA9IGF3YWl0IGxvYWRHcm91cEl0ZW1zKGFjdGl2ZUdyb3VwSWQsIGluaXRpYWxXaW5kb3dTdGFydEluZGV4LCBpbml0aWFsV2luZG93TGltaXQpXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBpdGVtSWRcbiAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCA9IGFjdGl2ZUdyb3VwSWRcbiAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUudHlwZSA9IEl0ZW1UeXBlW2l0ZW1UeXBlIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSA9IGNvbnRhaW5lck5hbWUgPz8gJydcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyOiBEaWFsb2dDb250YWluZXJUZW1wbGF0ZSA9IG5ldyBEaWFsb2dDb250YWluZXJUZW1wbGF0ZShkb2N1bWVudC5ib2R5LCBkb2N1bWVudC5ib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICBkaWFsb2dDb250YWluZXIucmVuZGVyKClcblxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJylcbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJycgLy8gcmVtb3ZlIG9sZCBjb250ZW50XG4gICAgICAgICAgICBjb25zdCB2aWV3VG9rZW4gPSBwcm9ncmFtRGF0YVN0b3JlLmJlZ2luTmV3VmlldygpXG5cbiAgICAgICAgICAgIGNvbnN0IHBvcHVwVGl0bGU6IFBvcHVwVGl0bGVUZW1wbGF0ZSA9IG5ldyBQb3B1cFRpdGxlVGVtcGxhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwRm9jdXNDb250YWluZXInKSwgLTEsIHByb2dyYW1EYXRhU3RvcmUpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnJlbmRlcigoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJylcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlR3JvdXBFbGVtZW50cyhwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcywgY29udGVudERpdiwgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cC5pbmRleE51bWJlciwgcG9wdXBUaXRsZSwgbG9hZEdyb3VwSXRlbXMpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBhd2FpdCBsaXN0RWxlbWVudEZhY3RvcnkuY3JlYXRlTGF6eUl0ZW1MaXN0KGNvbnRlbnREaXYsIChzdGFydEluZGV4KSA9PiBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBzdGFydEluZGV4KSwgdmlld1Rva2VuLCBpbml0aWFsUGFnZSwgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXgpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFRleHQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8uZ3JvdXBOYW1lID8/ICcnKVxuXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIGl0ZW0gdGhhdCBpcyBjdXJyZW50bHkgcGxheWluZ1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlSXRlbSA9IGNvbnRlbnREaXYucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkTGlzdEl0ZW0nKSBcbiAgICAgICAgICAgIGlmICghYWN0aXZlSXRlbSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IGZpbmQgYWN0aXZlIG1lZGlhIHNvdXJjZSBlbGVtZW50IGluIHByZXZpZXcgbGlzdC4gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuXCIsIHByb2dyYW1EYXRhU3RvcmUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3RpdmVJdGVtPy5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1bmxvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XG4gICAgICAgIC8vIENsZWFyIG9sZCBkYXRhIGFuZCByZXNldCBwcmV2aWV3Q29udGFpbmVyTG9hZGVkIGZsYWdcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBvblZpZGVvVGltZVVwZGF0ZSlcbiAgICAgICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IC0xXG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlld1BvcHVwJyk/LnJlbW92ZSgpXG5cbiAgICAgICAgcHJldmlld0NvbnRhaW5lckxvYWRlZCA9IGZhbHNlIC8vIFJlc2V0IGZsYWcgd2hlbiB1bmxvYWRpbmdcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJykucXVlcnlTZWxlY3RvcignI3BvcHVwUHJldmlld0J1dHRvbicpICE9PSBudWxsXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==