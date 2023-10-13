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
var BaseTemplate = /** @class */ (function () {
    function BaseTemplate(container, positionAfterIndex) {
        this.container = container;
        this.positionAfterIndex = positionAfterIndex;
    }
    BaseTemplate.prototype.getContainer = function () {
        return this.container;
    };
    BaseTemplate.prototype.getPositionAfterIndex = function () {
        return this.positionAfterIndex;
    };
    BaseTemplate.prototype.setElementId = function (elementId) {
        this.elementId = elementId;
    };
    BaseTemplate.prototype.getElementId = function () {
        return this.elementId;
    };
    BaseTemplate.prototype.addElementToContainer = function () {
        if (!this.getContainer().hasChildNodes()) {
            this.getContainer().innerHTML = this.getTemplate();
            return this.getContainer().querySelector("#".concat(this.getElementId()));
        }
        var childBefore = this.getContainer().lastElementChild;
        if (this.getContainer().children.length > this.getPositionAfterIndex() && this.getPositionAfterIndex() >= 0)
            childBefore = this.getContainer().children[this.getPositionAfterIndex()];
        childBefore.after(this.stringToNode(this.getTemplate()));
        return this.getContainer().querySelector("#".concat(this.getElementId()));
    };
    BaseTemplate.prototype.stringToNode = function (templateString) {
        var placeholder = document.createElement('div');
        placeholder.innerHTML = templateString;
        return placeholder.firstElementChild;
    };
    return BaseTemplate;
}());
exports.BaseTemplate = BaseTemplate;


/***/ }),

/***/ "./Web/Components/DialogBackdropContainerTemplate.ts":
/*!***********************************************************!*\
  !*** ./Web/Components/DialogBackdropContainerTemplate.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DialogBackdropContainerTemplate = void 0;
var BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
var DialogBackdropContainerTemplate = /** @class */ (function (_super) {
    __extends(DialogBackdropContainerTemplate, _super);
    function DialogBackdropContainerTemplate(container, positionAfterIndex) {
        var _this = _super.call(this, container, positionAfterIndex) || this;
        _this.setElementId('dialogBackdropContainer');
        return _this;
    }
    DialogBackdropContainerTemplate.prototype.getTemplate = function () {
        return "\n            <div  id=\"".concat(this.getElementId(), "\" class=\"dialogBackdrop dialogBackdropOpened\"/>\n        ");
    };
    DialogBackdropContainerTemplate.prototype.render = function (clickHandler) {
        var renderedElement = this.addElementToContainer();
    };
    return DialogBackdropContainerTemplate;
}(BaseTemplate_1.BaseTemplate));
exports.DialogBackdropContainerTemplate = DialogBackdropContainerTemplate;


/***/ }),

/***/ "./Web/Components/DialogContainerTemplate.ts":
/*!***************************************************!*\
  !*** ./Web/Components/DialogContainerTemplate.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DialogContainerTemplate = void 0;
var BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
var PopupFocusContainer_1 = __webpack_require__(/*! ./PopupFocusContainer */ "./Web/Components/PopupFocusContainer.ts");
var DialogContainerTemplate = /** @class */ (function (_super) {
    __extends(DialogContainerTemplate, _super);
    function DialogContainerTemplate(container, positionAfterIndex) {
        var _this = _super.call(this, container, positionAfterIndex) || this;
        _this.setElementId('dialogContainer');
        return _this;
    }
    DialogContainerTemplate.prototype.getTemplate = function () {
        var tempContainerDiv = document.createElement('div');
        var focusContainerDiv = new PopupFocusContainer_1.PopupFocusContainer(tempContainerDiv, -1);
        focusContainerDiv.render(function () { });
        return "\n            <div id=\"".concat(this.getElementId(), "\" class=\"dialogContainer\">\n                ").concat(tempContainerDiv.innerHTML, "\n            <div>\n        ");
    };
    DialogContainerTemplate.prototype.render = function (clickHandler) {
        var renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', function (e) { return clickHandler(e); });
    };
    return DialogContainerTemplate;
}(BaseTemplate_1.BaseTemplate));
exports.DialogContainerTemplate = DialogContainerTemplate;


/***/ }),

/***/ "./Web/Components/EpisodeElementTemplate.ts":
/*!**************************************************!*\
  !*** ./Web/Components/EpisodeElementTemplate.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EpisodeElementTemplate = void 0;
var BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
var EpisodeElementTemplate = /** @class */ (function (_super) {
    __extends(EpisodeElementTemplate, _super);
    function EpisodeElementTemplate(container, positionAfterIndex, episode) {
        var _this = _super.call(this, container, positionAfterIndex) || this;
        _this.episode = episode;
        _this.setElementId("episode-".concat(episode.IndexNumber));
        return _this;
    }
    EpisodeElementTemplate.prototype.getTemplate = function () {
        return "\n            <div id=\"".concat(this.getElementId(), "\" \n                class=\"listItem listItem-button actionSheetMenuItem emby-button previewListItem\" \n                is=\"emby-button\" \n                data-id=\"").concat(this.episode.IndexNumber, "\">\n                <button class=\"listItem\" type=\"button\">\n                    <span>").concat(this.episode.IndexNumber, "</span>\n                    <div class=\"listItemBody actionsheetListItemBody\">\n                        <span class=\"actionSheetItemText\">").concat(this.episode.Name, "</span>\n                    </div>\n                </button>\n                <div class=\"previewListItemContent hide\">\n                    <button class=\"cardImageContainer cardContent itemAction lazy blurhashed lazy-image-fadein-fast previewEpisodeImageCard\" \n                            data-action=\"link\" \n                            style=\"background-image: url('../Items/").concat(this.episode.Id, "/Images/Primary?tag=").concat(this.episode.ImageTags.Primary, "');\">\n                    </button>\n                    <span class=\"previewEpisodeDescription\">").concat(this.episode.Description, "</span>\n                </div>\n            </div>\n        ");
    };
    EpisodeElementTemplate.prototype.render = function (clickHandler) {
        var renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', function (e) { return clickHandler(e); });
    };
    return EpisodeElementTemplate;
}(BaseTemplate_1.BaseTemplate));
exports.EpisodeElementTemplate = EpisodeElementTemplate;


/***/ }),

/***/ "./Web/Components/PopupContentContainerTemplate.ts":
/*!*********************************************************!*\
  !*** ./Web/Components/PopupContentContainerTemplate.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupContentContainerTemplate = void 0;
var BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
var PopupContentContainerTemplate = /** @class */ (function (_super) {
    __extends(PopupContentContainerTemplate, _super);
    function PopupContentContainerTemplate(container, positionAfterIndex) {
        var _this = _super.call(this, container, positionAfterIndex) || this;
        _this.setElementId('popupContentContainer');
        return _this;
    }
    PopupContentContainerTemplate.prototype.getTemplate = function () {
        return "\n            <div id=\"".concat(this.getElementId(), "\" class=\"actionSheetScroller scrollY previewPopupScroller\"/>\n        ");
    };
    PopupContentContainerTemplate.prototype.render = function (clickHandler) {
        var renderedElement = this.addElementToContainer();
    };
    return PopupContentContainerTemplate;
}(BaseTemplate_1.BaseTemplate));
exports.PopupContentContainerTemplate = PopupContentContainerTemplate;


/***/ }),

/***/ "./Web/Components/PopupFocusContainer.ts":
/*!***********************************************!*\
  !*** ./Web/Components/PopupFocusContainer.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupFocusContainer = void 0;
var BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
var PopupTitleTemplate_1 = __webpack_require__(/*! ./PopupTitleTemplate */ "./Web/Components/PopupTitleTemplate.ts");
var PopupContentContainerTemplate_1 = __webpack_require__(/*! ./PopupContentContainerTemplate */ "./Web/Components/PopupContentContainerTemplate.ts");
var PopupFocusContainer = /** @class */ (function (_super) {
    __extends(PopupFocusContainer, _super);
    function PopupFocusContainer(container, positionAfterIndex) {
        var _this = _super.call(this, container, positionAfterIndex) || this;
        _this.setElementId('popupFocusContainer');
        return _this;
    }
    PopupFocusContainer.prototype.getTemplate = function () {
        var tempContainerDiv = document.createElement('div');
        var popupTitle = new PopupTitleTemplate_1.PopupTitleTemplate(tempContainerDiv, -1);
        var popupContentContainer = new PopupContentContainerTemplate_1.PopupContentContainerTemplate(tempContainerDiv, -1);
        popupTitle.render(function () { });
        popupContentContainer.render(function () { });
        return "\n            <div id=\"".concat(this.getElementId(), "\" class=\"focuscontainer dialog actionsheet-not-fullscreen actionSheet centeredDialog opened previewPopup actionSheetContent\" data-history=\"true\" data-removeonclose=\"true\">\n                ").concat(tempContainerDiv.innerHTML, "\n            </div>\n        ");
    };
    PopupFocusContainer.prototype.render = function (clickHandler) {
        var renderedElement = this.addElementToContainer();
    };
    return PopupFocusContainer;
}(BaseTemplate_1.BaseTemplate));
exports.PopupFocusContainer = PopupFocusContainer;


/***/ }),

/***/ "./Web/Components/PopupTitleTemplate.ts":
/*!**********************************************!*\
  !*** ./Web/Components/PopupTitleTemplate.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupTitleTemplate = void 0;
var BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
var PopupTitleTemplate = /** @class */ (function (_super) {
    __extends(PopupTitleTemplate, _super);
    function PopupTitleTemplate(container, positionAfterIndex) {
        var _this = _super.call(this, container, positionAfterIndex) || this;
        _this.setElementId('popupTitleContainer');
        return _this;
    }
    PopupTitleTemplate.prototype.getTemplate = function () {
        return "\n            <div id=\"".concat(this.getElementId(), "\" class=\"actionSheetTitle listItem previewPopupTitle\">\n                <span class=\"actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons keyboard_backspace\"></span>\n                <h1 class=\"actionSheetTitle\">Not implemented</h1>\n            </div>\n        ");
    };
    PopupTitleTemplate.prototype.render = function (clickHandler) {
        var renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    };
    return PopupTitleTemplate;
}(BaseTemplate_1.BaseTemplate));
exports.PopupTitleTemplate = PopupTitleTemplate;


/***/ }),

/***/ "./Web/Components/PreviewButtonTemplate.ts":
/*!*************************************************!*\
  !*** ./Web/Components/PreviewButtonTemplate.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PreviewButtonTemplate = void 0;
var BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
var PreviewButtonTemplate = /** @class */ (function (_super) {
    __extends(PreviewButtonTemplate, _super);
    function PreviewButtonTemplate(container, positionAfterIndex) {
        var _this = _super.call(this, container, positionAfterIndex) || this;
        _this.setElementId('popupPreviewButton');
        return _this;
    }
    PreviewButtonTemplate.prototype.getTemplate = function () {
        return "\n            <button id=\"".concat(this.getElementId(), "\" class=\"autoSize paper-icon-button-light\" is=\"paper-icon-button-light\" title=\"Episode Preview\">\n                <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n                    <path fill-rule=\"evenodd\"\n                        clip-rule=\"evenodd\"\n                        fill=\"currentColor\"\n                        d=\"M8 5H22V13H24V5C24 3.89543 23.1046 3 22 3H8V5ZM18 9H4V7H18C19.1046 7 20 7.89543 20 9V17H18V9ZM0 13C0 11.8954 0.895431 11 2 11H14C15.1046 11 16 11.8954 16 13V19C16 20.1046 15.1046 21 14 21H2C0.895431 21 0 20.1046 0 19V13ZM14 19V13H2V19H14Z\" >\n                    </path>\n                </svg>\n            </button>\n        ");
    };
    PreviewButtonTemplate.prototype.render = function (clickHandler) {
        var renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', function () { return clickHandler(); });
    };
    return PreviewButtonTemplate;
}(BaseTemplate_1.BaseTemplate));
exports.PreviewButtonTemplate = PreviewButtonTemplate;


/***/ }),

/***/ "./Web/Services/AuthService/JMPAuthService.ts":
/*!****************************************************!*\
  !*** ./Web/Services/AuthService/JMPAuthService.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JMPAuthService = void 0;
var JMPAuthService = /** @class */ (function () {
    function JMPAuthService(serverConnections, window) {
        this._authHeader = 'Authorization';
        this._apiClient = serverConnections
            ? serverConnections.currentApiClient()
            : window.ApiClient;
        this.setAuthHeaderValue("MediaBrowser Token=".concat(this._apiClient.accessToken()));
    }
    JMPAuthService.prototype.getAuthHeader = function () {
        return this._authHeader;
    };
    JMPAuthService.prototype.getAuthHeaderValue = function () {
        return this._authHeaderValue;
    };
    JMPAuthService.prototype.setAuthHeaderValue = function (value) {
        this._authHeaderValue = value;
    };
    JMPAuthService.prototype.addAuthHeaderIntoHttpRequest = function (request) {
        request.setRequestHeader(this._authHeader, this.getAuthHeaderValue());
    };
    JMPAuthService.prototype.getApiClient = function () {
        return this._apiClient;
    };
    return JMPAuthService;
}());
exports.JMPAuthService = JMPAuthService;


/***/ }),

/***/ "./Web/Services/AuthService/WebAuthService.ts":
/*!****************************************************!*\
  !*** ./Web/Services/AuthService/WebAuthService.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebAuthService = void 0;
var WebAuthService = /** @class */ (function () {
    function WebAuthService() {
        this._authHeader = 'X-Emby-Authorization';
        this._authHeaderValue = '';
    }
    WebAuthService.prototype.getAuthHeader = function () {
        return this._authHeader;
    };
    WebAuthService.prototype.getAuthHeaderValue = function () {
        return this._authHeaderValue;
    };
    WebAuthService.prototype.setAuthHeaderValue = function (value) {
        this._authHeaderValue = value;
    };
    WebAuthService.prototype.addAuthHeaderIntoHttpRequest = function (request) {
        request.setRequestHeader(this._authHeader, this.getAuthHeaderValue());
    };
    return WebAuthService;
}());
exports.WebAuthService = WebAuthService;


/***/ }),

/***/ "./Web/Services/DataFetcher/DataFetcher.ts":
/*!*************************************************!*\
  !*** ./Web/Services/DataFetcher/DataFetcher.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataFetcher = void 0;
/**
 * The classes which derives from this interface, will provide the functionality to handle the data input from the server if the PlaybackState is changed.
 */
var DataFetcher = /** @class */ (function () {
    function DataFetcher(programDataStore, dataLoader) {
        this.programDataStore = programDataStore;
        this.dataLoader = dataLoader;
    }
    DataFetcher.prototype.getProgramDataStore = function () {
        return this.programDataStore;
    };
    DataFetcher.prototype.saveEpisodeData = function (episodeData) {
        var _this = this;
        // get all different seasonIds
        var seasonIds = new Set(episodeData.Items.map(function (episode) { return episode.SeasonId; }));
        // group the episodes by seasonId
        var group = groupBy(episodeData.Items, function (episode) { return episode.SeasonId; });
        var seasons = [];
        var iterator = seasonIds.values();
        var value = iterator.next();
        while (!value.done) {
            var seasonId = value.value;
            var season = {
                seasonId: seasonId,
                seasonName: group[seasonId][0].SeasonName,
                episodes: group[seasonId]
            };
            season.episodes.map(function (episode) {
                var request = _this.dataLoader.loadEpisodeDescription(episode.Id, function () { });
                request.onloadend = function () {
                    episode.Description = request.response.Overview;
                };
                return episode;
            });
            seasons.push(season);
            value = iterator.next();
        }
        this.programDataStore.setSeasons(seasons);
        function groupBy(arr, fn) {
            return arr.reduce(function (prev, curr) {
                var _a;
                var groupKey = fn(curr);
                var group = prev[groupKey] || [];
                group.push(curr);
                return __assign(__assign({}, prev), (_a = {}, _a[groupKey] = group, _a));
            }, {});
        }
    };
    return DataFetcher;
}());
exports.DataFetcher = DataFetcher;


/***/ }),

/***/ "./Web/Services/DataFetcher/JMPDataFetcher.ts":
/*!****************************************************!*\
  !*** ./Web/Services/DataFetcher/JMPDataFetcher.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JMPDataFetcher = void 0;
var DataFetcher_1 = __webpack_require__(/*! ./DataFetcher */ "./Web/Services/DataFetcher/DataFetcher.ts");
var JMPDataFetcher = /** @class */ (function (_super) {
    __extends(JMPDataFetcher, _super);
    function JMPDataFetcher(programDataStore, dataLoader, events, playbackManager) {
        var _this = _super.call(this, programDataStore, dataLoader) || this;
        events.on(playbackManager, 'playbackstart', _this.onPlayback);
        return _this;
    }
    JMPDataFetcher.prototype.onPlayback = function (e, player, state) {
        if (!state.NowPlayingItem)
            return;
        this.getProgramDataStore().setActiveMediaSourceId(state.NowPlayingItem.Id);
        // @ts-ignore
        this.getProgramDataStore().setUserId(window.ApiClient._currentUser.Id);
        // load the Episodes. This Data is actually already loaded in the background by the JMP client but couldn't be accessed
        // TODO: find a way to access the already loaded data
        // @ts-ignore
        window.ApiClient.getEpisodes(state.NowPlayingItem.SeriesId, {
            IsVirtualUnaired: !1,
            IsMissing: !1,
            UserId: this.getProgramDataStore().getUserId(),
            Fields: "Chapters"
        }).then(this.saveEpisodeData);
    };
    return JMPDataFetcher;
}(DataFetcher_1.DataFetcher));
exports.JMPDataFetcher = JMPDataFetcher;


/***/ }),

/***/ "./Web/Services/DataFetcher/WebDataFetcher.ts":
/*!****************************************************!*\
  !*** ./Web/Services/DataFetcher/WebDataFetcher.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebDataFetcher = void 0;
var DataFetcher_1 = __webpack_require__(/*! ./DataFetcher */ "./Web/Services/DataFetcher/DataFetcher.ts");
var WebDataFetcher = /** @class */ (function (_super) {
    __extends(WebDataFetcher, _super);
    function WebDataFetcher(programDataStore, dataLoader, authService, logger) {
        var _this = _super.call(this, programDataStore, dataLoader) || this;
        _this.authService = authService;
        _this.logger = logger;
        var originalFetch = window.fetch;
        window.fetch = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(_this, void 0, void 0, function () {
                function sortUrlPartsIntoDictionary(urlParts) {
                    var urlPartsDictionary = {};
                    for (var i = 0; i < urlParts.length; i++) {
                        if (i % 2 === 0)
                            urlPartsDictionary[urlParts[i]] = urlParts[i + 1];
                    }
                    return urlPartsDictionary;
                }
                function handleItemResponse(data) {
                    if (data.Type === 'Movie') {
                        document.getElementById('popupPreviewButton').classList.add('hide');
                        logger.debug("Found movie -- hiding preview button");
                    }
                    else if (data.Type === 'Series') {
                        document.getElementById('popupPreviewButton').classList.remove('hide');
                        logger.debug("Found series -- showing preview button");
                    }
                }
                var resource, config, auth, response, url, urlParts, urlDictionary, _a, _b, key, handleResponseFunction;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            resource = args[0];
                            config = args[1];
                            if (config) {
                                auth = config.headers[this.authService.getAuthHeader()];
                                this.authService.setAuthHeaderValue(auth ? auth : '');
                            }
                            this.logger.debug("Fetching data");
                            return [4 /*yield*/, originalFetch(resource, config)];
                        case 1:
                            response = _c.sent();
                            url = new URL(resource);
                            urlParts = url.pathname.split('/');
                            urlDictionary = sortUrlPartsIntoDictionary(urlParts.slice(1));
                            for (_a = 0, _b = Object.keys(urlDictionary); _a < _b.length; _a++) {
                                key = _b[_a];
                                // save the userId for later use
                                if (!this.getProgramDataStore().getUserId() && key === 'Users') {
                                    this.getProgramDataStore().setUserId(urlDictionary[key]);
                                }
                                if (key === 'PlaybackInfo') {
                                    this.getProgramDataStore().setActiveMediaSourceId(urlDictionary['Items']);
                                    continue;
                                }
                                if (key === 'Items') {
                                    handleResponseFunction = function (data) { return handleItemResponse(data); };
                                    if (!urlDictionary[key])
                                        handleResponseFunction = function (data) { return _this.saveEpisodeData(data); };
                                    response.clone().json().then(handleResponseFunction);
                                    continue;
                                }
                                if (key === 'Episodes') {
                                    response.clone().json().then(function (data) { return _this.saveEpisodeData(data); });
                                }
                            }
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        return _this;
    }
    return WebDataFetcher;
}(DataFetcher_1.DataFetcher));
exports.WebDataFetcher = WebDataFetcher;


/***/ }),

/***/ "./Web/Services/DataLoader/DataLoader.ts":
/*!***********************************************!*\
  !*** ./Web/Services/DataLoader/DataLoader.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataLoader = void 0;
var Endpoints_1 = __webpack_require__(/*! ./Endpoints */ "./Web/Services/DataLoader/Endpoints.ts");
var DataLoader = /** @class */ (function () {
    function DataLoader(authService, programDataStore) {
        this.authService = authService;
        this.programDataStore = programDataStore;
        this._baseUrl = '';
    }
    DataLoader.prototype.loadEpisodeDescription = function (episodeId, onloadend) {
        var requestUrl = (this._baseUrl + Endpoints_1.Endpoints.EPISODE_INFO)
            .replace('{userId}', this.programDataStore.getUserId())
            .replace('{episodeId}', episodeId);
        var episodeDescriptionRequest = new XMLHttpRequest();
        episodeDescriptionRequest.responseType = 'json';
        episodeDescriptionRequest.open('GET', requestUrl);
        this.authService.addAuthHeaderIntoHttpRequest(episodeDescriptionRequest);
        episodeDescriptionRequest.send();
        episodeDescriptionRequest.onloadend = function () { return onloadend(); };
        return episodeDescriptionRequest;
    };
    return DataLoader;
}());
exports.DataLoader = DataLoader;


/***/ }),

/***/ "./Web/Services/DataLoader/Endpoints.ts":
/*!**********************************************!*\
  !*** ./Web/Services/DataLoader/Endpoints.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Endpoints = void 0;
var Endpoints = /** @class */ (function () {
    function Endpoints() {
    }
    Endpoints.EPISODE_INFO = "/Users/{userId}/Items/{episodeId}";
    return Endpoints;
}());
exports.Endpoints = Endpoints;


/***/ }),

/***/ "./Web/Services/DataLoader/JMPDataLoader.ts":
/*!**************************************************!*\
  !*** ./Web/Services/DataLoader/JMPDataLoader.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JMPDataLoader = void 0;
var DataLoader_1 = __webpack_require__(/*! ./DataLoader */ "./Web/Services/DataLoader/DataLoader.ts");
var JMPDataLoader = /** @class */ (function (_super) {
    __extends(JMPDataLoader, _super);
    function JMPDataLoader(authService, programDataStore, serverConnections, window) {
        var _this = _super.call(this, authService, programDataStore) || this;
        _this.authService = authService;
        _this.programDataStore = programDataStore;
        _this._apiClient = serverConnections
            ? serverConnections.currentApiClient()
            : window.ApiClient;
        _this._baseUrl = _this.getServerUrl();
        return _this;
    }
    /*
     * retrieves the server url, while using local Jellyfin Media Player (JMP) client
     */
    JMPDataLoader.prototype.getServerUrl = function () {
        var _a;
        return (_a = this._apiClient.serverAddress()) !== null && _a !== void 0 ? _a : '';
    };
    return JMPDataLoader;
}(DataLoader_1.DataLoader));
exports.JMPDataLoader = JMPDataLoader;


/***/ }),

/***/ "./Web/Services/DataLoader/WebDataLoader.ts":
/*!**************************************************!*\
  !*** ./Web/Services/DataLoader/WebDataLoader.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebDataLoader = void 0;
var DataLoader_1 = __webpack_require__(/*! ./DataLoader */ "./Web/Services/DataLoader/DataLoader.ts");
var WebDataLoader = /** @class */ (function (_super) {
    __extends(WebDataLoader, _super);
    function WebDataLoader(authService, programDataStore) {
        var _this = _super.call(this, authService, programDataStore) || this;
        _this.authService = authService;
        _this.programDataStore = programDataStore;
        return _this;
    }
    return WebDataLoader;
}(DataLoader_1.DataLoader));
exports.WebDataLoader = WebDataLoader;


/***/ }),

/***/ "./Web/Services/Logger.ts":
/*!********************************!*\
  !*** ./Web/Services/Logger.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger(log_prefix) {
        if (log_prefix === void 0) { log_prefix = "[InPlayerEpisodePreview]"; }
        this.log_prefix = log_prefix;
    }
    Logger.prototype.debug = function (msg) {
        console.debug("".concat(this.log_prefix, " ").concat(msg));
    };
    Logger.prototype.error = function (msg) {
        console.error("".concat(this.log_prefix, " ").concat(msg));
    };
    Logger.prototype.info = function (msg) {
        console.info("".concat(this.log_prefix, " ").concat(msg));
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),

/***/ "./Web/Services/ProgramDataStore.ts":
/*!******************************************!*\
  !*** ./Web/Services/ProgramDataStore.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgramDataStore = void 0;
var ProgramDataStore = /** @class */ (function () {
    function ProgramDataStore() {
        // init the _programData field with empty values
        this.clear();
    }
    ProgramDataStore.prototype.getUserId = function () {
        return this._programData.userId;
    };
    ProgramDataStore.prototype.getActiveMediaSourceId = function () {
        return this._programData.activeMediaSourceId;
    };
    ProgramDataStore.prototype.getActiveSeasonIndex = function () {
        return this._programData.activeSeasonIndex;
    };
    ProgramDataStore.prototype.getSeasons = function () {
        return this._programData.seasons;
    };
    ProgramDataStore.prototype.setUserId = function (userId) {
        this._programData.userId = userId;
    };
    ProgramDataStore.prototype.setActiveMediaSourceId = function (activeMediaSourceId) {
        this._programData.activeMediaSourceId = activeMediaSourceId;
    };
    ProgramDataStore.prototype.setActiveSeasonIndex = function (activeSeasonIndex) {
        this._programData.activeSeasonIndex = activeSeasonIndex;
    };
    ProgramDataStore.prototype.setSeasons = function (seasons) {
        this._programData.seasons = seasons;
    };
    ProgramDataStore.prototype.clear = function () {
        this._programData = {
            userId: '',
            activeMediaSourceId: '',
            activeSeasonIndex: 0,
            seasons: [],
        };
    };
    return ProgramDataStore;
}());
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./Web/inPlayerPreview.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Logger_1 = __webpack_require__(/*! ./Services/Logger */ "./Web/Services/Logger.ts");
var JMPAuthService_1 = __webpack_require__(/*! ./Services/AuthService/JMPAuthService */ "./Web/Services/AuthService/JMPAuthService.ts");
var WebAuthService_1 = __webpack_require__(/*! ./Services/AuthService/WebAuthService */ "./Web/Services/AuthService/WebAuthService.ts");
var PreviewButtonTemplate_1 = __webpack_require__(/*! ./Components/PreviewButtonTemplate */ "./Web/Components/PreviewButtonTemplate.ts");
var JMPDataFetcher_1 = __webpack_require__(/*! ./Services/DataFetcher/JMPDataFetcher */ "./Web/Services/DataFetcher/JMPDataFetcher.ts");
var WebDataFetcher_1 = __webpack_require__(/*! ./Services/DataFetcher/WebDataFetcher */ "./Web/Services/DataFetcher/WebDataFetcher.ts");
var ProgramDataStore_1 = __webpack_require__(/*! ./Services/ProgramDataStore */ "./Web/Services/ProgramDataStore.ts");
var JMPDataLoader_1 = __webpack_require__(/*! ./Services/DataLoader/JMPDataLoader */ "./Web/Services/DataLoader/JMPDataLoader.ts");
var WebDataLoader_1 = __webpack_require__(/*! ./Services/DataLoader/WebDataLoader */ "./Web/Services/DataLoader/WebDataLoader.ts");
var DialogBackdropContainerTemplate_1 = __webpack_require__(/*! ./Components/DialogBackdropContainerTemplate */ "./Web/Components/DialogBackdropContainerTemplate.ts");
var DialogContainerTemplate_1 = __webpack_require__(/*! ./Components/DialogContainerTemplate */ "./Web/Components/DialogContainerTemplate.ts");
var EpisodeElementTemplate_1 = __webpack_require__(/*! ./Components/EpisodeElementTemplate */ "./Web/Components/EpisodeElementTemplate.ts");
var isJMPClient = false;
// logger
var logger = new Logger_1.Logger();
// load and inject inPlayerPreview.css into the page
/*
 * Inject style to be used for the preview popup
 */
var inPlayerPreviewStyle = document.createElement('style');
inPlayerPreviewStyle.id = 'inPlayerPreviewStyle';
inPlayerPreviewStyle.textContent += '.selectedListItem {height: 22vh;}';
inPlayerPreviewStyle.textContent += '.previewListItem {flex-direction: column; align-items: flex-start;}';
inPlayerPreviewStyle.textContent += '.previewListItemContent {width: 100%; height: 16.5vh; position: relative; top: 0.5em}';
inPlayerPreviewStyle.textContent += '.previewPopup {animation: 140ms ease-out 0s 1 normal both running scaleup; position: fixed; margin: 0px; bottom: 1.5vh; left: 68vw; width: 30vw;}';
inPlayerPreviewStyle.textContent += '.previewPopupTitle {height: 4vh;}';
inPlayerPreviewStyle.textContent += '.previewPopupScroller {height: 60vh;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeImageCard {width: 12vw; height: 15vh; left: 1em;}';
inPlayerPreviewStyle.textContent += '.previewEpisodeDescription {position: absolute; right: 1em; left: 13.5vw;}';
document.body.appendChild(inPlayerPreviewStyle);
// const cssInjector: CssInjector = new CssInjector();
// cssInjector.injectCss('/Web/inPlayerPreviewStyle.css', document.body);
// authService
// @ts-ignore: ServerConnections is defined by JMP
var authService = isJMPClient ? new JMPAuthService_1.JMPAuthService(ServerConnections, window) : new WebAuthService_1.WebAuthService();
var programDataStore = new ProgramDataStore_1.ProgramDataStore();
// @ts-ignore
var dataLoader = isJMPClient ? new JMPDataLoader_1.JMPDataLoader(authService, programDataStore, ServerConnections, window) : new WebDataLoader_1.WebDataLoader(authService, programDataStore);
// @ts-ignore
isJMPClient ? new JMPDataFetcher_1.JMPDataFetcher(programDataStore, dataLoader, events, playbackManager) : new WebDataFetcher_1.WebDataFetcher(programDataStore, dataLoader, authService, logger);
var videoPaths = ['playback/video/index.html', '/video'];
var previousRoutePath = null;
document.addEventListener('viewshow', viewShowEventHandler);
function viewShowEventHandler() {
    // @ts-ignore
    var currentRoutePath = Emby.Page.currentRouteInfo.route.path;
    if (currentRoutePath)
        // @ts-ignore
        currentRoutePath = Emby.Page.currentRouteInfo.path;
    if (videoPaths.includes(currentRoutePath))
        loadVideoView();
    else if (videoPaths.includes(previousRoutePath))
        unloadVideoView();
    previousRoutePath = currentRoutePath;
    function loadVideoView() {
        // add preview button to the page
        // let previewButtonContainer = document.createElement('div');
        // document.getElementsByClassName('buttons')[0].querySelector('.osdTimeText').after(previewButtonContainer);
        var parent = document.querySelector('.buttons').lastElementChild.parentElement;
        var index = Array.prototype.indexOf.call(parent.children, document.querySelector('.osdTimeText'));
        var previewButton = new PreviewButtonTemplate_1.PreviewButtonTemplate(parent, index);
        previewButton.render(function () {
            var dialogBackdrop = new DialogBackdropContainerTemplate_1.DialogBackdropContainerTemplate(document.body, -1);
            dialogBackdrop.render(function () { });
            var dialogContainer = new DialogContainerTemplate_1.DialogContainerTemplate(document.body, -1);
            dialogContainer.render(function () {
                document.body.removeChild(document.getElementById(dialogBackdrop.getElementId()));
                document.body.removeChild(document.getElementById(dialogContainer.getElementId()));
            });
            var contentDiv = document.getElementById('popupContentContainer');
            contentDiv.innerHTML = ""; // remove old content
            document.getElementById('popupTitleContainer').querySelector('.actionSheetTitle').textContent = programDataStore.getSeasons()[programDataStore.getActiveSeasonIndex()].seasonName;
            var episodesForCurrentSeason = programDataStore.getSeasons()[programDataStore.getActiveSeasonIndex()].episodes;
            var _loop_1 = function (i) {
                var episode = new EpisodeElementTemplate_1.EpisodeElementTemplate(contentDiv, i, episodesForCurrentSeason[i]);
                episode.render(function (e) {
                    // hide episode content for all existing episodes in the preview list
                    document.querySelectorAll(".previewListItemContent").forEach(function (element) {
                        element.classList.add('hide');
                        element.classList.remove('selectedListItem');
                    });
                    // show episode content for the selected episode
                    var episodeContainer = document.querySelector("[data-id=\"".concat(episodesForCurrentSeason[i].IndexNumber, "\"]")).querySelector('.previewListItemContent');
                    episodeContainer.classList.remove('hide');
                    episodeContainer.classList.add('selectedListItem');
                    e.stopPropagation();
                });
                if (episodesForCurrentSeason[i].Id === programDataStore.getActiveMediaSourceId()) {
                    var episodeNode = document.querySelector("[data-id=\"".concat(episodesForCurrentSeason[i].IndexNumber, "\"]")).querySelector('.previewListItemContent');
                    episodeNode.classList.remove('hide');
                    episodeNode.classList.add('selectedListItem');
                }
            };
            for (var i = 0; i < episodesForCurrentSeason.length; i++) {
                _loop_1(i);
            }
            var seasons = programDataStore.getSeasons();
            seasons[programDataStore.getActiveSeasonIndex()].episodes = episodesForCurrentSeason;
            programDataStore.setSeasons(seasons);
            // scroll to the episode that is currently playing
            contentDiv.querySelector('.selectedListItem').parentElement.scrollIntoView();
        });
    }
    function unloadVideoView() {
        // clear old data
        authService.setAuthHeaderValue("");
        programDataStore.clear();
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yi9Db21wb25lbnRzL0Jhc2VUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9EaWFsb2dCYWNrZHJvcENvbnRhaW5lclRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0VwaXNvZGVFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUG9wdXBDb250ZW50Q29udGFpbmVyVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUG9wdXBGb2N1c0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9BdXRoU2VydmljZS9KTVBBdXRoU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvQXV0aFNlcnZpY2UvV2ViQXV0aFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0RhdGFGZXRjaGVyL0RhdGFGZXRjaGVyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9EYXRhRmV0Y2hlci9KTVBEYXRhRmV0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvRGF0YUZldGNoZXIvV2ViRGF0YUZldGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0RhdGFMb2FkZXIvRGF0YUxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvRGF0YUxvYWRlci9FbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0RhdGFMb2FkZXIvSk1QRGF0YUxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvRGF0YUxvYWRlci9XZWJEYXRhTG9hZGVyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL1dlYi9pblBsYXllclByZXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VUZW1wbGF0ZSB7XHJcbiAgICAvKlxyXG4gICAgICogdGhlIEhUTUwgYmFzZWQgSUQgb2YgdGhlIG5ldyBnZW5lcmF0ZWQgRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGVsZW1lbnRJZDogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHByaXZhdGUgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UG9zaXRpb25BZnRlckluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25BZnRlckluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRFbGVtZW50SWQoZWxlbWVudElkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RWxlbWVudElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudElkO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGdldFRlbXBsYXRlKCk6IHN0cmluZztcclxuXHJcbiAgICBhYnN0cmFjdCByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIGFkZEVsZW1lbnRUb0NvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdldENvbnRhaW5lcigpLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmlubmVySFRNTCA9IHRoaXMuZ2V0VGVtcGxhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5nZXRFbGVtZW50SWQoKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5sYXN0RWxlbWVudENoaWxkXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29udGFpbmVyKCkuY2hpbGRyZW4ubGVuZ3RoID4gdGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSAmJiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpID49IDApXHJcbiAgICAgICAgICAgIGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlblt0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpXTtcclxuXHJcbiAgICAgICAgY2hpbGRCZWZvcmUuYWZ0ZXIodGhpcy5zdHJpbmdUb05vZGUodGhpcy5nZXRUZW1wbGF0ZSgpKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuZ2V0RWxlbWVudElkKCl9YCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RyaW5nVG9Ob2RlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcpOiBOb2RlIHtcclxuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSB0ZW1wbGF0ZVN0cmluZztcclxuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nQmFja2Ryb3BDb250YWluZXJUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcclxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgnZGlhbG9nQmFja2Ryb3BDb250YWluZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwiZGlhbG9nQmFja2Ryb3AgZGlhbG9nQmFja2Ryb3BPcGVuZWRcIi8+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcclxuaW1wb3J0IHtQb3B1cEZvY3VzQ29udGFpbmVyfSBmcm9tIFwiLi9Qb3B1cEZvY3VzQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ2RpYWxvZ0NvbnRhaW5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHRlbXBDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgZm9jdXNDb250YWluZXJEaXYgPSBuZXcgUG9wdXBGb2N1c0NvbnRhaW5lcih0ZW1wQ29udGFpbmVyRGl2LCAtMSk7XHJcbiAgICAgICAgZm9jdXNDb250YWluZXJEaXYucmVuZGVyKCgpID0+IHt9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImRpYWxvZ0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgJHt0ZW1wQ29udGFpbmVyRGl2LmlubmVySFRNTH1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGxldCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xyXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xyXG5pbXBvcnQge0VwaXNvZGV9IGZyb20gXCIuLi9Nb2RlbHMvRXBpc29kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGVFbGVtZW50VGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZXBpc29kZTogRXBpc29kZSkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcclxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgZXBpc29kZS0ke2VwaXNvZGUuSW5kZXhOdW1iZXJ9YCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdEl0ZW0gbGlzdEl0ZW0tYnV0dG9uIGFjdGlvblNoZWV0TWVudUl0ZW0gZW1ieS1idXR0b24gcHJldmlld0xpc3RJdGVtXCIgXHJcbiAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLmVwaXNvZGUuSW5kZXhOdW1iZXJ9XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW1cIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHt0aGlzLmVwaXNvZGUuSW5kZXhOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25TaGVldEl0ZW1UZXh0XCI+JHt0aGlzLmVwaXNvZGUuTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3TGlzdEl0ZW1Db250ZW50IGhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FyZEltYWdlQ29udGFpbmVyIGNhcmRDb250ZW50IGl0ZW1BY3Rpb24gbGF6eSBibHVyaGFzaGVkIGxhenktaW1hZ2UtZmFkZWluLWZhc3QgcHJldmlld0VwaXNvZGVJbWFnZUNhcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibGlua1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL0l0ZW1zLyR7dGhpcy5lcGlzb2RlLklkfS9JbWFnZXMvUHJpbWFyeT90YWc9JHt0aGlzLmVwaXNvZGUuSW1hZ2VUYWdzLlByaW1hcnl9Jyk7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aWV3RXBpc29kZURlc2NyaXB0aW9uXCI+JHt0aGlzLmVwaXNvZGUuRGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XHJcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBDb250ZW50Q29udGFpbmVyVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImFjdGlvblNoZWV0U2Nyb2xsZXIgc2Nyb2xsWSBwcmV2aWV3UG9wdXBTY3JvbGxlclwiLz5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGxldCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcclxuaW1wb3J0IHtQb3B1cFRpdGxlVGVtcGxhdGV9IGZyb20gXCIuL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xyXG5pbXBvcnQge1BvcHVwQ29udGVudENvbnRhaW5lclRlbXBsYXRlfSBmcm9tIFwiLi9Qb3B1cENvbnRlbnRDb250YWluZXJUZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwRm9jdXNDb250YWluZXIgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BvcHVwRm9jdXNDb250YWluZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB0ZW1wQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IHBvcHVwVGl0bGUgPSBuZXcgUG9wdXBUaXRsZVRlbXBsYXRlKHRlbXBDb250YWluZXJEaXYsIC0xKTtcclxuICAgICAgICBsZXQgcG9wdXBDb250ZW50Q29udGFpbmVyID0gbmV3IFBvcHVwQ29udGVudENvbnRhaW5lclRlbXBsYXRlKHRlbXBDb250YWluZXJEaXYsIC0xKTtcclxuXHJcbiAgICAgICAgcG9wdXBUaXRsZS5yZW5kZXIoKCkgPT4ge30pO1xyXG4gICAgICAgIHBvcHVwQ29udGVudENvbnRhaW5lci5yZW5kZXIoKCkgPT4ge30pO1xyXG5cclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwiZm9jdXNjb250YWluZXIgZGlhbG9nIGFjdGlvbnNoZWV0LW5vdC1mdWxsc2NyZWVuIGFjdGlvblNoZWV0IGNlbnRlcmVkRGlhbG9nIG9wZW5lZCBwcmV2aWV3UG9wdXAgYWN0aW9uU2hlZXRDb250ZW50XCIgZGF0YS1oaXN0b3J5PVwidHJ1ZVwiIGRhdGEtcmVtb3Zlb25jbG9zZT1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICR7dGVtcENvbnRhaW5lckRpdi5pbm5lckhUTUx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBUaXRsZVRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwb3B1cFRpdGxlQ29udGFpbmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwiYWN0aW9uU2hlZXRUaXRsZSBsaXN0SXRlbSBwcmV2aWV3UG9wdXBUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25zaGVldE1lbnVJdGVtSWNvbiBsaXN0SXRlbUljb24gbGlzdEl0ZW1JY29uLXRyYW5zcGFyZW50IG1hdGVyaWFsLWljb25zIGtleWJvYXJkX2JhY2tzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImFjdGlvblNoZWV0VGl0bGVcIj5Ob3QgaW1wbGVtZW50ZWQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xyXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByZXZpZXdCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcclxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBQcmV2aWV3QnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImF1dG9TaXplIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCIgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiIHRpdGxlPVwiRXBpc29kZSBQcmV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTggNUgyMlYxM0gyNFY1QzI0IDMuODk1NDMgMjMuMTA0NiAzIDIyIDNIOFY1Wk0xOCA5SDRWN0gxOEMxOS4xMDQ2IDcgMjAgNy44OTU0MyAyMCA5VjE3SDE4VjlaTTAgMTNDMCAxMS44OTU0IDAuODk1NDMxIDExIDIgMTFIMTRDMTUuMTA0NiAxMSAxNiAxMS44OTU0IDE2IDEzVjE5QzE2IDIwLjEwNDYgMTUuMTA0NiAyMSAxNCAyMUgyQzAuODk1NDMxIDIxIDAgMjAuMTA0NiAwIDE5VjEzWk0xNCAxOVYxM0gyVjE5SDE0WlwiID5cclxuICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcclxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbGlja0hhbmRsZXIoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9BdXRoU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEpNUEF1dGhTZXJ2aWNlIGltcGxlbWVudHMgQXV0aFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXV0aEhlYWRlcjogc3RyaW5nID0gJ0F1dGhvcml6YXRpb24nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXBpQ2xpZW50OiBhbnk7XHJcbiAgICBwcml2YXRlIF9hdXRoSGVhZGVyVmFsdWU6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3Ioc2VydmVyQ29ubmVjdGlvbnM6IGFueSwgd2luZG93OiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9hcGlDbGllbnQgPSBzZXJ2ZXJDb25uZWN0aW9uc1xyXG4gICAgICAgICAgICA/IHNlcnZlckNvbm5lY3Rpb25zLmN1cnJlbnRBcGlDbGllbnQoKVxyXG4gICAgICAgICAgICA6IHdpbmRvdy5BcGlDbGllbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRBdXRoSGVhZGVyVmFsdWUoYE1lZGlhQnJvd3NlciBUb2tlbj0ke3RoaXMuX2FwaUNsaWVudC5hY2Nlc3NUb2tlbigpfWApXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF1dGhIZWFkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aEhlYWRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBnZXRBdXRoSGVhZGVyVmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aEhlYWRlclZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0QXV0aEhlYWRlclZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hdXRoSGVhZGVyVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQXV0aEhlYWRlckludG9IdHRwUmVxdWVzdChyZXF1ZXN0OiBYTUxIdHRwUmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcih0aGlzLl9hdXRoSGVhZGVyLCB0aGlzLmdldEF1dGhIZWFkZXJWYWx1ZSgpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldEFwaUNsaWVudCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlDbGllbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vQXV0aFNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJBdXRoU2VydmljZSBpbXBsZW1lbnRzIEF1dGhTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F1dGhIZWFkZXI6IHN0cmluZyA9ICdYLUVtYnktQXV0aG9yaXphdGlvbic7XHJcbiAgICBwcml2YXRlIF9hdXRoSGVhZGVyVmFsdWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBdXRoSGVhZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhIZWFkZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgZ2V0QXV0aEhlYWRlclZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhIZWFkZXJWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QXV0aEhlYWRlclZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hdXRoSGVhZGVyVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQXV0aEhlYWRlckludG9IdHRwUmVxdWVzdChyZXF1ZXN0OiBYTUxIdHRwUmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcih0aGlzLl9hdXRoSGVhZGVyLCB0aGlzLmdldEF1dGhIZWFkZXJWYWx1ZSgpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9Qcm9ncmFtRGF0YVN0b3JlXCI7XHJcbmltcG9ydCB7RXBpc29kZSwgRXBpc29kZUR0b30gZnJvbSBcIi4uLy4uL01vZGVscy9FcGlzb2RlXCI7XHJcbmltcG9ydCB7U2Vhc29ufSBmcm9tIFwiLi4vLi4vTW9kZWxzL1NlYXNvblwiO1xyXG5pbXBvcnQge0RhdGFMb2FkZXJ9IGZyb20gXCIuLi9EYXRhTG9hZGVyL0RhdGFMb2FkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgY2xhc3NlcyB3aGljaCBkZXJpdmVzIGZyb20gdGhpcyBpbnRlcmZhY2UsIHdpbGwgcHJvdmlkZSB0aGUgZnVuY3Rpb25hbGl0eSB0byBoYW5kbGUgdGhlIGRhdGEgaW5wdXQgZnJvbSB0aGUgc2VydmVyIGlmIHRoZSBQbGF5YmFja1N0YXRlIGlzIGNoYW5nZWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGF0YUZldGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBwcml2YXRlIGRhdGFMb2FkZXI6IERhdGFMb2FkZXIpIHt9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBnZXRQcm9ncmFtRGF0YVN0b3JlKCk6IFByb2dyYW1EYXRhU3RvcmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2dyYW1EYXRhU3RvcmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzYXZlRXBpc29kZURhdGEoZXBpc29kZURhdGE6IEVwaXNvZGVEdG8pOiB2b2lkIHtcclxuICAgICAgICAvLyBnZXQgYWxsIGRpZmZlcmVudCBzZWFzb25JZHNcclxuICAgICAgICBsZXQgc2Vhc29uSWRzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPiAoZXBpc29kZURhdGEuSXRlbXMubWFwKChlcGlzb2RlOiBFcGlzb2RlKSA9PiBlcGlzb2RlLlNlYXNvbklkKSlcclxuXHJcbiAgICAgICAgLy8gZ3JvdXAgdGhlIGVwaXNvZGVzIGJ5IHNlYXNvbklkXHJcbiAgICAgICAgbGV0IGdyb3VwOiBSZWNvcmQ8c3RyaW5nLCBFcGlzb2RlW10+ID0gZ3JvdXBCeShlcGlzb2RlRGF0YS5JdGVtcywgKGVwaXNvZGU6IEVwaXNvZGUpID0+IGVwaXNvZGUuU2Vhc29uSWQpO1xyXG5cclxuICAgICAgICBsZXQgc2Vhc29uczogU2Vhc29uW10gPSBbXTtcclxuICAgICAgICBsZXQgaXRlcmF0b3IgPSBzZWFzb25JZHMudmFsdWVzKCk7XHJcbiAgICAgICAgbGV0IHZhbHVlOiBJdGVyYXRvclJlc3VsdDxzdHJpbmcsIGFueT4gPSBpdGVyYXRvci5uZXh0KCk7XHJcbiAgICAgICAgd2hpbGUgKCF2YWx1ZS5kb25lKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWFzb25JZCA9IHZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgc2Vhc29uOiBTZWFzb24gPSB7XHJcbiAgICAgICAgICAgICAgICBzZWFzb25JZDogc2Vhc29uSWQsXHJcbiAgICAgICAgICAgICAgICBzZWFzb25OYW1lOiBncm91cFtzZWFzb25JZF1bMF0uU2Vhc29uTmFtZSxcclxuICAgICAgICAgICAgICAgIGVwaXNvZGVzOiBncm91cFtzZWFzb25JZF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNlYXNvbi5lcGlzb2Rlcy5tYXAoKGVwaXNvZGU6IEVwaXNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gdGhpcy5kYXRhTG9hZGVyLmxvYWRFcGlzb2RlRGVzY3JpcHRpb24oZXBpc29kZS5JZCwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXBpc29kZS5EZXNjcmlwdGlvbiA9IHJlcXVlc3QucmVzcG9uc2UuT3ZlcnZpZXc7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXBpc29kZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZWFzb25zLnB1c2goc2Vhc29uKTtcclxuICAgICAgICAgICAgdmFsdWUgPSBpdGVyYXRvci5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5zZXRTZWFzb25zKHNlYXNvbnMpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBncm91cEJ5PFQ+KGFycjogVFtdLCBmbjogKGl0ZW06IFQpID0+IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBUW10+PigocHJldiwgY3VycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBLZXkgPSBmbihjdXJyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gcHJldltncm91cEtleV0gfHwgW107XHJcbiAgICAgICAgICAgICAgICBncm91cC5wdXNoKGN1cnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2dyb3VwS2V5XTogZ3JvdXAgfTtcclxuICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7RGF0YUZldGNoZXJ9IGZyb20gXCIuL0RhdGFGZXRjaGVyXCI7XHJcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4uL1Byb2dyYW1EYXRhU3RvcmVcIjtcclxuaW1wb3J0IHtEYXRhTG9hZGVyfSBmcm9tIFwiLi4vRGF0YUxvYWRlci9EYXRhTG9hZGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSk1QRGF0YUZldGNoZXIgZXh0ZW5kcyBEYXRhRmV0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBkYXRhTG9hZGVyOiBEYXRhTG9hZGVyLCBldmVudHM6IGFueSwgcGxheWJhY2tNYW5hZ2VyOiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9ncmFtRGF0YVN0b3JlLCBkYXRhTG9hZGVyKTtcclxuICAgICAgICBldmVudHMub24ocGxheWJhY2tNYW5hZ2VyLCAncGxheWJhY2tzdGFydCcsIHRoaXMub25QbGF5YmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblBsYXliYWNrKGUsIHBsYXllciwgc3RhdGUpIHtcclxuICAgICAgICBpZiAoIXN0YXRlLk5vd1BsYXlpbmdJdGVtKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nZXRQcm9ncmFtRGF0YVN0b3JlKCkuc2V0QWN0aXZlTWVkaWFTb3VyY2VJZChzdGF0ZS5Ob3dQbGF5aW5nSXRlbS5JZCk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuZ2V0UHJvZ3JhbURhdGFTdG9yZSgpLnNldFVzZXJJZCh3aW5kb3cuQXBpQ2xpZW50Ll9jdXJyZW50VXNlci5JZCk7XHJcblxyXG4gICAgICAgIC8vIGxvYWQgdGhlIEVwaXNvZGVzLiBUaGlzIERhdGEgaXMgYWN0dWFsbHkgYWxyZWFkeSBsb2FkZWQgaW4gdGhlIGJhY2tncm91bmQgYnkgdGhlIEpNUCBjbGllbnQgYnV0IGNvdWxkbid0IGJlIGFjY2Vzc2VkXHJcbiAgICAgICAgLy8gVE9ETzogZmluZCBhIHdheSB0byBhY2Nlc3MgdGhlIGFscmVhZHkgbG9hZGVkIGRhdGFcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgd2luZG93LkFwaUNsaWVudC5nZXRFcGlzb2RlcyhzdGF0ZS5Ob3dQbGF5aW5nSXRlbS5TZXJpZXNJZCwge1xyXG4gICAgICAgICAgICAgICAgSXNWaXJ0dWFsVW5haXJlZDogITEsXHJcbiAgICAgICAgICAgICAgICBJc01pc3Npbmc6ICExLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOiB0aGlzLmdldFByb2dyYW1EYXRhU3RvcmUoKS5nZXRVc2VySWQoKSxcclxuICAgICAgICAgICAgICAgIEZpZWxkczogXCJDaGFwdGVyc1wiXHJcbiAgICAgICAgfSkudGhlbih0aGlzLnNhdmVFcGlzb2RlRGF0YSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0RhdGFGZXRjaGVyfSBmcm9tIFwiLi9EYXRhRmV0Y2hlclwiO1xyXG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9Qcm9ncmFtRGF0YVN0b3JlXCI7XHJcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi4vTG9nZ2VyXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9BdXRoU2VydmljZS9BdXRoU2VydmljZVwiO1xyXG5pbXBvcnQge0RhdGFMb2FkZXJ9IGZyb20gXCIuLi9EYXRhTG9hZGVyL0RhdGFMb2FkZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJEYXRhRmV0Y2hlciBleHRlbmRzIERhdGFGZXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGRhdGFMb2FkZXI6IERhdGFMb2FkZXIsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7XHJcbiAgICAgICAgc3VwZXIocHJvZ3JhbURhdGFTdG9yZSwgZGF0YUxvYWRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHtmZXRjaDogb3JpZ2luYWxGZXRjaH0gPSB3aW5kb3c7XHJcbiAgICAgICAgd2luZG93LmZldGNoID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgLy8gbGV0IFtyZXNvdXJjZSwgY29uZmlnXSA9IGFyZ3M7XHJcbiAgICAgICAgICAgIGxldCByZXNvdXJjZTogVVJMID0gYXJnc1swXSBhcyBVUkw7XHJcbiAgICAgICAgICAgIGxldCBjb25maWc6IFJlcXVlc3RJbml0ID0gYXJnc1sxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhdXRoID0gY29uZmlnLmhlYWRlcnNbdGhpcy5hdXRoU2VydmljZS5nZXRBdXRoSGVhZGVyKCldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRBdXRoSGVhZGVyVmFsdWUoYXV0aCA/IGF1dGggOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBGZXRjaGluZyBkYXRhYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3JpZ2luYWxGZXRjaChyZXNvdXJjZSwgY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHJlc291cmNlKTtcclxuICAgICAgICAgICAgbGV0IHVybFBhcnRzID0gdXJsLnBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgIGxldCB1cmxEaWN0aW9uYXJ5ID0gc29ydFVybFBhcnRzSW50b0RpY3Rpb25hcnkodXJsUGFydHMuc2xpY2UoMSkpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModXJsRGljdGlvbmFyeSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIHVzZXJJZCBmb3IgbGF0ZXIgdXNlXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0UHJvZ3JhbURhdGFTdG9yZSgpLmdldFVzZXJJZCgpICYmIGtleSA9PT0gJ1VzZXJzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZ3JhbURhdGFTdG9yZSgpLnNldFVzZXJJZCh1cmxEaWN0aW9uYXJ5W2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdQbGF5YmFja0luZm8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9ncmFtRGF0YVN0b3JlKCkuc2V0QWN0aXZlTWVkaWFTb3VyY2VJZCh1cmxEaWN0aW9uYXJ5WydJdGVtcyddKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnSXRlbXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmRsZVJlc3BvbnNlRnVuY3Rpb24gPSAoZGF0YSkgPT4gaGFuZGxlSXRlbVJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdXJsRGljdGlvbmFyeVtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZXNwb25zZUZ1bmN0aW9uID0gKGRhdGEpID0+IHRoaXMuc2F2ZUVwaXNvZGVEYXRhKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5jbG9uZSgpLmpzb24oKS50aGVuKGhhbmRsZVJlc3BvbnNlRnVuY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdFcGlzb2RlcycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5jbG9uZSgpLmpzb24oKS50aGVuKChkYXRhKSA9PiB0aGlzLnNhdmVFcGlzb2RlRGF0YShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNvcnRVcmxQYXJ0c0ludG9EaWN0aW9uYXJ5KHVybFBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsUGFydHNEaWN0aW9uYXJ5ID0ge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVybFBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxQYXJ0c0RpY3Rpb25hcnlbdXJsUGFydHNbaV1dID0gdXJsUGFydHNbaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB1cmxQYXJ0c0RpY3Rpb25hcnk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUl0ZW1SZXNwb25zZShkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5UeXBlID09PSAnTW92aWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwUHJldmlld0J1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYEZvdW5kIG1vdmllIC0tIGhpZGluZyBwcmV2aWV3IGJ1dHRvbmApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuVHlwZSA9PT0gJ1NlcmllcycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBQcmV2aWV3QnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgRm91bmQgc2VyaWVzIC0tIHNob3dpbmcgcHJldmlldyBidXR0b25gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9BdXRoU2VydmljZS9BdXRoU2VydmljZVwiO1xyXG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9Qcm9ncmFtRGF0YVN0b3JlXCI7XHJcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi9FbmRwb2ludHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhTG9hZGVyIHtcclxuICAgIHByb3RlY3RlZCBfYmFzZVVybDogc3RyaW5nID0gJyc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByb3RlY3RlZCBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRFcGlzb2RlRGVzY3JpcHRpb24oZXBpc29kZUlkOiBzdHJpbmcsIG9ubG9hZGVuZDogRnVuY3Rpb24pOiBYTUxIdHRwUmVxdWVzdCB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3RVcmwgPSAodGhpcy5fYmFzZVVybCArIEVuZHBvaW50cy5FUElTT0RFX0lORk8pXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5nZXRVc2VySWQoKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3tlcGlzb2RlSWR9JywgZXBpc29kZUlkKTtcclxuXHJcbiAgICAgICAgbGV0IGVwaXNvZGVEZXNjcmlwdGlvblJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICBlcGlzb2RlRGVzY3JpcHRpb25SZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuXHJcbiAgICAgICAgZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdC5vcGVuKCdHRVQnLCByZXF1ZXN0VXJsKTtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmFkZEF1dGhIZWFkZXJJbnRvSHR0cFJlcXVlc3QoZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdCk7XHJcbiAgICAgICAgZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdC5zZW5kKCk7XHJcbiAgICAgICAgZXBpc29kZURlc2NyaXB0aW9uUmVxdWVzdC5vbmxvYWRlbmQgPSAoKSA9PiBvbmxvYWRlbmQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVwaXNvZGVEZXNjcmlwdGlvblJlcXVlc3Q7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgRW5kcG9pbnRzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVBJU09ERV9JTkZPOiBzdHJpbmcgPSBcIi9Vc2Vycy97dXNlcklkfS9JdGVtcy97ZXBpc29kZUlkfVwiO1xyXG59IiwiaW1wb3J0IHtEYXRhTG9hZGVyfSBmcm9tIFwiLi9EYXRhTG9hZGVyXCI7XHJcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4uL1Byb2dyYW1EYXRhU3RvcmVcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL0F1dGhTZXJ2aWNlL0F1dGhTZXJ2aWNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEpNUERhdGFMb2FkZXIgZXh0ZW5kcyBEYXRhTG9hZGVyIHtcclxuICAgIHByaXZhdGUgX2FwaUNsaWVudDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByb3RlY3RlZCBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBzZXJ2ZXJDb25uZWN0aW9uczogYW55LCB3aW5kb3c6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKGF1dGhTZXJ2aWNlLCBwcm9ncmFtRGF0YVN0b3JlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYXBpQ2xpZW50ID0gc2VydmVyQ29ubmVjdGlvbnNcclxuICAgICAgICAgICAgPyBzZXJ2ZXJDb25uZWN0aW9ucy5jdXJyZW50QXBpQ2xpZW50KClcclxuICAgICAgICAgICAgOiB3aW5kb3cuQXBpQ2xpZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2Jhc2VVcmwgPSB0aGlzLmdldFNlcnZlclVybCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiByZXRyaWV2ZXMgdGhlIHNlcnZlciB1cmwsIHdoaWxlIHVzaW5nIGxvY2FsIEplbGx5ZmluIE1lZGlhIFBsYXllciAoSk1QKSBjbGllbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRTZXJ2ZXJVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaUNsaWVudC5zZXJ2ZXJBZGRyZXNzKCkgPz8gJyc7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0RhdGFMb2FkZXJ9IGZyb20gXCIuL0RhdGFMb2FkZXJcIjtcclxuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vUHJvZ3JhbURhdGFTdG9yZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vQXV0aFNlcnZpY2UvQXV0aFNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJEYXRhTG9hZGVyIGV4dGVuZHMgRGF0YUxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcm90ZWN0ZWQgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xyXG4gICAgICAgIHN1cGVyKGF1dGhTZXJ2aWNlLCBwcm9ncmFtRGF0YVN0b3JlKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBMb2dnZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dfcHJlZml4OiBzdHJpbmcgPSBcIltJblBsYXllckVwaXNvZGVQcmV2aWV3XVwiKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlYnVnKG1zZykge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXJyb3IobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmZvKG1zZykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1Byb2dyYW1EYXRhfSBmcm9tIFwiLi4vTW9kZWxzL1Byb2dyYW1EYXRhXCI7XHJcbmltcG9ydCB7U2Vhc29ufSBmcm9tIFwiLi4vTW9kZWxzL1NlYXNvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyYW1EYXRhU3RvcmUge1xyXG4gICAgcHJpdmF0ZSBfcHJvZ3JhbURhdGE6IFByb2dyYW1EYXRhO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBpbml0IHRoZSBfcHJvZ3JhbURhdGEgZmllbGQgd2l0aCBlbXB0eSB2YWx1ZXNcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXRVc2VySWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEudXNlcklkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0QWN0aXZlTWVkaWFTb3VyY2VJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0QWN0aXZlU2Vhc29uSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlU2Vhc29uSW5kZXg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXRTZWFzb25zKCk6IFNlYXNvbltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuc2Vhc29ucztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldEFjdGl2ZU1lZGlhU291cmNlSWQoYWN0aXZlTWVkaWFTb3VyY2VJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlTWVkaWFTb3VyY2VJZCA9IGFjdGl2ZU1lZGlhU291cmNlSWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXRBY3RpdmVTZWFzb25JbmRleChhY3RpdmVTZWFzb25JbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlU2Vhc29uSW5kZXggPSBhY3RpdmVTZWFzb25JbmRleDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldFNlYXNvbnMoc2Vhc29uczogU2Vhc29uW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5zZWFzb25zID0gc2Vhc29ucztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogJycsXHJcbiAgICAgICAgICAgIGFjdGl2ZU1lZGlhU291cmNlSWQ6ICcnLFxyXG4gICAgICAgICAgICBhY3RpdmVTZWFzb25JbmRleDogMCxcclxuICAgICAgICAgICAgc2Vhc29uczogW10sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vU2VydmljZXMvTG9nZ2VyXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL1NlcnZpY2VzL0F1dGhTZXJ2aWNlL0F1dGhTZXJ2aWNlXCI7XHJcbmltcG9ydCB7Sk1QQXV0aFNlcnZpY2V9IGZyb20gXCIuL1NlcnZpY2VzL0F1dGhTZXJ2aWNlL0pNUEF1dGhTZXJ2aWNlXCI7XHJcbmltcG9ydCB7V2ViQXV0aFNlcnZpY2V9IGZyb20gXCIuL1NlcnZpY2VzL0F1dGhTZXJ2aWNlL1dlYkF1dGhTZXJ2aWNlXCI7XHJcbmltcG9ydCB7UHJldmlld0J1dHRvblRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1ByZXZpZXdCdXR0b25UZW1wbGF0ZVwiO1xyXG5pbXBvcnQge0pNUERhdGFGZXRjaGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlci9KTVBEYXRhRmV0Y2hlclwiO1xyXG5pbXBvcnQge1dlYkRhdGFGZXRjaGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlci9XZWJEYXRhRmV0Y2hlclwiO1xyXG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcclxuaW1wb3J0IHtEYXRhTG9hZGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhTG9hZGVyL0RhdGFMb2FkZXJcIjtcclxuaW1wb3J0IHtKTVBEYXRhTG9hZGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhTG9hZGVyL0pNUERhdGFMb2FkZXJcIjtcclxuaW1wb3J0IHtXZWJEYXRhTG9hZGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhTG9hZGVyL1dlYkRhdGFMb2FkZXJcIjtcclxuaW1wb3J0IHtEaWFsb2dCYWNrZHJvcENvbnRhaW5lclRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL0RpYWxvZ0JhY2tkcm9wQ29udGFpbmVyVGVtcGxhdGVcIjtcclxuaW1wb3J0IHtEaWFsb2dDb250YWluZXJUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZVwiO1xyXG5pbXBvcnQge0VwaXNvZGVFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvRXBpc29kZUVsZW1lbnRUZW1wbGF0ZVwiO1xyXG5cclxubGV0IGlzSk1QQ2xpZW50ID0gZmFsc2U7XHJcblxyXG4vLyBsb2dnZXJcclxuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XHJcblxyXG4vLyBsb2FkIGFuZCBpbmplY3QgaW5QbGF5ZXJQcmV2aWV3LmNzcyBpbnRvIHRoZSBwYWdlXHJcbi8qXHJcbiAqIEluamVjdCBzdHlsZSB0byBiZSB1c2VkIGZvciB0aGUgcHJldmlldyBwb3B1cFxyXG4gKi9cclxubGV0IGluUGxheWVyUHJldmlld1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUuaWQgPSAnaW5QbGF5ZXJQcmV2aWV3U3R5bGUnO1xyXG5pblBsYXllclByZXZpZXdTdHlsZS50ZXh0Q29udGVudCArPSAnLnNlbGVjdGVkTGlzdEl0ZW0ge2hlaWdodDogMjJ2aDt9JztcclxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3TGlzdEl0ZW0ge2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O30nO1xyXG5pblBsYXllclByZXZpZXdTdHlsZS50ZXh0Q29udGVudCArPSAnLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQge3dpZHRoOiAxMDAlOyBoZWlnaHQ6IDE2LjV2aDsgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IDAuNWVtfSc7XHJcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ICs9ICcucHJldmlld1BvcHVwIHthbmltYXRpb246IDE0MG1zIGVhc2Utb3V0IDBzIDEgbm9ybWFsIGJvdGggcnVubmluZyBzY2FsZXVwOyBwb3NpdGlvbjogZml4ZWQ7IG1hcmdpbjogMHB4OyBib3R0b206IDEuNXZoOyBsZWZ0OiA2OHZ3OyB3aWR0aDogMzB2dzt9JztcclxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3UG9wdXBUaXRsZSB7aGVpZ2h0OiA0dmg7fSc7XHJcbmluUGxheWVyUHJldmlld1N0eWxlLnRleHRDb250ZW50ICs9ICcucHJldmlld1BvcHVwU2Nyb2xsZXIge2hlaWdodDogNjB2aDt9JztcclxuaW5QbGF5ZXJQcmV2aWV3U3R5bGUudGV4dENvbnRlbnQgKz0gJy5wcmV2aWV3RXBpc29kZUltYWdlQ2FyZCB7d2lkdGg6IDEydnc7IGhlaWdodDogMTV2aDsgbGVmdDogMWVtO30nO1xyXG5pblBsYXllclByZXZpZXdTdHlsZS50ZXh0Q29udGVudCArPSAnLnByZXZpZXdFcGlzb2RlRGVzY3JpcHRpb24ge3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDFlbTsgbGVmdDogMTMuNXZ3O30nO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluUGxheWVyUHJldmlld1N0eWxlKTtcclxuLy8gY29uc3QgY3NzSW5qZWN0b3I6IENzc0luamVjdG9yID0gbmV3IENzc0luamVjdG9yKCk7XHJcbi8vIGNzc0luamVjdG9yLmluamVjdENzcygnL1dlYi9pblBsYXllclByZXZpZXdTdHlsZS5jc3MnLCBkb2N1bWVudC5ib2R5KTtcclxuXHJcbi8vIGF1dGhTZXJ2aWNlXHJcbi8vIEB0cy1pZ25vcmU6IFNlcnZlckNvbm5lY3Rpb25zIGlzIGRlZmluZWQgYnkgSk1QXHJcbmNvbnN0IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSA9IGlzSk1QQ2xpZW50ID8gbmV3IEpNUEF1dGhTZXJ2aWNlKFNlcnZlckNvbm5lY3Rpb25zLCB3aW5kb3cpIDogbmV3IFdlYkF1dGhTZXJ2aWNlKCk7XHJcbmNvbnN0IHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUgPSBuZXcgUHJvZ3JhbURhdGFTdG9yZSgpO1xyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IGRhdGFMb2FkZXI6IERhdGFMb2FkZXIgPSBpc0pNUENsaWVudCA/IG5ldyBKTVBEYXRhTG9hZGVyKGF1dGhTZXJ2aWNlLCBwcm9ncmFtRGF0YVN0b3JlLCBTZXJ2ZXJDb25uZWN0aW9ucywgd2luZG93KSA6IG5ldyBXZWJEYXRhTG9hZGVyKGF1dGhTZXJ2aWNlLCBwcm9ncmFtRGF0YVN0b3JlKTtcclxuLy8gQHRzLWlnbm9yZVxyXG5pc0pNUENsaWVudCA/IG5ldyBKTVBEYXRhRmV0Y2hlcihwcm9ncmFtRGF0YVN0b3JlLCBkYXRhTG9hZGVyLCBldmVudHMsIHBsYXliYWNrTWFuYWdlcikgOiBuZXcgV2ViRGF0YUZldGNoZXIocHJvZ3JhbURhdGFTdG9yZSwgZGF0YUxvYWRlciwgYXV0aFNlcnZpY2UsIGxvZ2dlcilcclxuXHJcbmNvbnN0IHZpZGVvUGF0aHMgPSBbJ3BsYXliYWNrL3ZpZGVvL2luZGV4Lmh0bWwnLCAnL3ZpZGVvJ107XHJcbmxldCBwcmV2aW91c1JvdXRlUGF0aCA9IG51bGw7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdzaG93Jywgdmlld1Nob3dFdmVudEhhbmRsZXIpO1xyXG5cclxuZnVuY3Rpb24gdmlld1Nob3dFdmVudEhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgY3VycmVudFJvdXRlUGF0aCA9IEVtYnkuUGFnZS5jdXJyZW50Um91dGVJbmZvLnJvdXRlLnBhdGg7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRSb3V0ZVBhdGgpXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGN1cnJlbnRSb3V0ZVBhdGggPSBFbWJ5LlBhZ2UuY3VycmVudFJvdXRlSW5mby5wYXRoO1xyXG5cclxuICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRSb3V0ZVBhdGgpKVxyXG4gICAgICAgIGxvYWRWaWRlb1ZpZXcoKTtcclxuICAgIGVsc2UgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMocHJldmlvdXNSb3V0ZVBhdGgpKVxyXG4gICAgICAgIHVubG9hZFZpZGVvVmlldygpO1xyXG5cclxuICAgIHByZXZpb3VzUm91dGVQYXRoID0gY3VycmVudFJvdXRlUGF0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkVmlkZW9WaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGFkZCBwcmV2aWV3IGJ1dHRvbiB0byB0aGUgcGFnZVxyXG4gICAgICAgIC8vIGxldCBwcmV2aWV3QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9ucycpWzBdLnF1ZXJ5U2VsZWN0b3IoJy5vc2RUaW1lVGV4dCcpLmFmdGVyKHByZXZpZXdCdXR0b25Db250YWluZXIpO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucycpLmxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBsZXQgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9zZFRpbWVUZXh0JykpO1xyXG4gICAgICAgIGxldCBwcmV2aWV3QnV0dG9uOiBQcmV2aWV3QnV0dG9uVGVtcGxhdGUgPSBuZXcgUHJldmlld0J1dHRvblRlbXBsYXRlKHBhcmVudCwgaW5kZXgpO1xyXG4gICAgICAgIHByZXZpZXdCdXR0b24ucmVuZGVyKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpYWxvZ0JhY2tkcm9wID0gbmV3IERpYWxvZ0JhY2tkcm9wQ29udGFpbmVyVGVtcGxhdGUoZG9jdW1lbnQuYm9keSwgLTEpO1xyXG4gICAgICAgICAgICBkaWFsb2dCYWNrZHJvcC5yZW5kZXIoKCkgPT4ge30pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGRpYWxvZ0NvbnRhaW5lciA9IG5ldyBEaWFsb2dDb250YWluZXJUZW1wbGF0ZShkb2N1bWVudC5ib2R5LCAtMSk7XHJcbiAgICAgICAgICAgIGRpYWxvZ0NvbnRhaW5lci5yZW5kZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWFsb2dCYWNrZHJvcC5nZXRFbGVtZW50SWQoKSkpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWFsb2dDb250YWluZXIuZ2V0RWxlbWVudElkKCkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbnRlbnRDb250YWluZXInKTtcclxuICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiOyAvLyByZW1vdmUgb2xkIGNvbnRlbnRcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cFRpdGxlQ29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmFjdGlvblNoZWV0VGl0bGUnKS50ZXh0Q29udGVudCA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0U2Vhc29ucygpW3Byb2dyYW1EYXRhU3RvcmUuZ2V0QWN0aXZlU2Vhc29uSW5kZXgoKV0uc2Vhc29uTmFtZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBlcGlzb2Rlc0ZvckN1cnJlbnRTZWFzb24gPSBwcm9ncmFtRGF0YVN0b3JlLmdldFNlYXNvbnMoKVtwcm9ncmFtRGF0YVN0b3JlLmdldEFjdGl2ZVNlYXNvbkluZGV4KCldLmVwaXNvZGVzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVwaXNvZGVzRm9yQ3VycmVudFNlYXNvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVwaXNvZGUgPSBuZXcgRXBpc29kZUVsZW1lbnRUZW1wbGF0ZShjb250ZW50RGl2LCBpLCBlcGlzb2Rlc0ZvckN1cnJlbnRTZWFzb25baV0pO1xyXG4gICAgICAgICAgICAgICAgZXBpc29kZS5yZW5kZXIoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIGVwaXNvZGUgY29udGVudCBmb3IgYWxsIGV4aXN0aW5nIGVwaXNvZGVzIGluIHRoZSBwcmV2aWV3IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXZpZXdMaXN0SXRlbUNvbnRlbnRcIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZExpc3RJdGVtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgZXBpc29kZSBjb250ZW50IGZvciB0aGUgc2VsZWN0ZWQgZXBpc29kZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlcGlzb2RlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2VwaXNvZGVzRm9yQ3VycmVudFNlYXNvbltpXS5JbmRleE51bWJlcn1cIl1gKS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0xpc3RJdGVtQ29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVwaXNvZGVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVwaXNvZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRMaXN0SXRlbScpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGVwaXNvZGVzRm9yQ3VycmVudFNlYXNvbltpXS5JZCA9PT0gcHJvZ3JhbURhdGFTdG9yZS5nZXRBY3RpdmVNZWRpYVNvdXJjZUlkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXBpc29kZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7ZXBpc29kZXNGb3JDdXJyZW50U2Vhc29uW2ldLkluZGV4TnVtYmVyfVwiXWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXBpc29kZU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVwaXNvZGVOb2RlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHNlYXNvbnMgPSBwcm9ncmFtRGF0YVN0b3JlLmdldFNlYXNvbnMoKTtcclxuICAgICAgICAgICAgc2Vhc29uc1twcm9ncmFtRGF0YVN0b3JlLmdldEFjdGl2ZVNlYXNvbkluZGV4KCldLmVwaXNvZGVzID0gZXBpc29kZXNGb3JDdXJyZW50U2Vhc29uO1xyXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnNldFNlYXNvbnMoc2Vhc29ucyk7XHJcblxyXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIGVwaXNvZGUgdGhhdCBpcyBjdXJyZW50bHkgcGxheWluZ1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZExpc3RJdGVtJykucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVubG9hZFZpZGVvVmlldygpOiB2b2lkIHtcclxuICAgICAgICAvLyBjbGVhciBvbGQgZGF0YVxyXG4gICAgICAgIGF1dGhTZXJ2aWNlLnNldEF1dGhIZWFkZXJWYWx1ZShcIlwiKTtcclxuICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmNsZWFyKCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=