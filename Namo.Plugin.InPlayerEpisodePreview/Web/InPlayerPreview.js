/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./Web/Styles/Styles.css"
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./Web/Styles/Styles.css ***!
  \*********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.selectedListItem {
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
.previewListItem-sideBySide .previewListItemContent .itemMiscInfo.previewItemDetails {
    margin-left: 0.5em !important;
}
.previewPopup {
    animation: 140ms ease-out 0s 1 normal both running scaleup;
    position: fixed;
    margin: 0;
    bottom: 1.5vh;
    left: 50vw;
    width: 48vw;
}
.previewPopupTitle {
    max-height: 4vh;
}
.previewPopupTitle h1.actionSheetTitle {
    margin-left: 0 !important;
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.previewGroupWatchedCount {
    cursor: pointer;
    pointer-events: auto;
    margin-left: auto;
    margin-right: 0.4em;
    padding: 0.2em 0.6em;
    border-radius: 0.3em;
    white-space: nowrap;
    opacity: 0.7;
    display: flex;
    align-items: center;
    transition: opacity 0.15s, background-color 0.15s;
}
.previewGroupWatchedCount:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.12);
}
/* Remove button highlighting when hovering over the group statistics */
.previewGroupListItemTitle:has(.previewGroupWatchedCount:hover) {
    background: none !important;
    box-shadow: none !important;
}
.previewPopupScroller {
    max-height: 60vh;
    scrollbar-width: thin !important;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent !important;
}
.previewPopupScroller::-webkit-scrollbar {
    width: 8px;
}
.previewPopupScroller::-webkit-scrollbar-track {
    background: transparent;
}
.previewPopupScroller::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
}
.previewPopupScroller::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.6);
}
.previewQuickActionContainer {
    margin-left: auto;
}
.previewQuickActionContainer button:disabled {
    opacity: 0.3;
    cursor: default;
}
.previewItemContainer {
    width: 100%;
}
.previewItemTitle {
    pointer-events: none;
}
.previewItemTitle.previewItemTitle-noIndex .actionsheetListItemBody {
    padding-inline-start: 0 !important;
}
.previewGroupListItemTitle {
    width: 100%;
}
.previewGroupListItemTitle .listItemBody {
    min-width: 0;
}
.previewGroupListItemTitle .actionSheetItemText {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
.previewItemImageCard .blur {
    filter: blur(32px);
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
.previewVersionRow {
    align-items: center;
    margin-left: auto;
    gap: 0.3em;
}
/* Row sits in the details row. Default icon button/select sizes would make it taller than the text. */
.previewVersionSelect {
    width: auto;
    max-width: 14em;
    height: auto;
    line-height: normal;
    padding: 0 0.4em;
    border-radius: 0.2em;
    font-size: inherit;
    font-family: inherit;
    text-overflow: ellipsis;
    cursor: pointer;
}
/* Right margin/padding match paper-icon-button-light, aligns icon with the favorite quick action above */
.previewVersionPlayButton.paper-icon-button-light {
    margin: 0 0.29em 0 0;
    padding: 0.1em 0.556em 0.1em 0.1em;
}
.previewVersionPlayButton.paper-icon-button-light > .material-icons {
    font-size: 1.3em;
}
.previewVersionPlayButton:disabled {
    opacity: 0.3;
    cursor: default;
}
`, "",{"version":3,"sources":["webpack://./Web/Styles/Styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,0DAA0D;IAC1D,eAAe;IACf,SAAS;IACT,aAAa;IACb,UAAU;IACV,WAAW;AACf;AACA;IACI,eAAe;AACnB;AACA;IACI,yBAAyB;IACzB,OAAO;IACP,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;IACpB,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,iDAAiD;AACrD;AACA;IACI,UAAU;IACV,2CAA2C;AAC/C;AACA,uEAAuE;AACvE;IACI,2BAA2B;IAC3B,2BAA2B;AAC/B;AACA;IACI,gBAAgB;IAChB,gCAAgC;IAChC,gEAAgE;AACpE;AACA;IACI,UAAU;AACd;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,0CAA0C;IAC1C,kBAAkB;AACtB;AACA;IACI,0CAA0C;AAC9C;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,eAAe;AACnB;AACA;IACI,WAAW;AACf;AACA;IACI,oBAAoB;AACxB;AACA;IACI,kCAAkC;AACtC;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,cAAc;AAClB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,0BAA0B;IAC1B,eAAe;IACf,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA,sEAAsE;AACtE;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,2BAA2B;IAC3B,wBAAwB;AAC5B;AACA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,qBAAqB;AACzB;AACA;IACI,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,qBAAqB;IACrB,oBAAoB;IACpB,wBAAwB;IACxB,yBAAyB;IACzB,wBAAwB;AAC5B;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,UAAU;AACd;AACA,sGAAsG;AACtG;IACI,WAAW;IACX,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB;IACpB,uBAAuB;IACvB,eAAe;AACnB;AACA,yGAAyG;AACzG;IACI,oBAAoB;IACpB,kCAAkC;AACtC;AACA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,eAAe;AACnB","sourcesContent":[".selectedListItem {\n    height: auto;\n}\n.previewListItem {\n    flex-direction: column;\n    align-items: flex-start;\n}\n.previewListItemContent {\n    width: 100%;\n    min-height: 15.5vh;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n}\n.previewListItem-sideBySide {\n    margin-bottom: 1em;\n}\n.previewListItem-sideBySide .previewItemTitle .actionSheetItemText {\n    font-size: 1.3em;\n}\n.previewListItem-sideBySide .previewListItemContent .itemMiscInfo.previewItemDetails {\n    margin-left: 0.5em !important;\n}\n.previewPopup {\n    animation: 140ms ease-out 0s 1 normal both running scaleup;\n    position: fixed;\n    margin: 0;\n    bottom: 1.5vh;\n    left: 50vw;\n    width: 48vw;\n}\n.previewPopupTitle {\n    max-height: 4vh;\n}\n.previewPopupTitle h1.actionSheetTitle {\n    margin-left: 0 !important;\n    flex: 1;\n    min-width: 0;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.previewGroupWatchedCount {\n    cursor: pointer;\n    pointer-events: auto;\n    margin-left: auto;\n    margin-right: 0.4em;\n    padding: 0.2em 0.6em;\n    border-radius: 0.3em;\n    white-space: nowrap;\n    opacity: 0.7;\n    display: flex;\n    align-items: center;\n    transition: opacity 0.15s, background-color 0.15s;\n}\n.previewGroupWatchedCount:hover {\n    opacity: 1;\n    background-color: rgba(255, 255, 255, 0.12);\n}\n/* Remove button highlighting when hovering over the group statistics */\n.previewGroupListItemTitle:has(.previewGroupWatchedCount:hover) {\n    background: none !important;\n    box-shadow: none !important;\n}\n.previewPopupScroller {\n    max-height: 60vh;\n    scrollbar-width: thin !important;\n    scrollbar-color: rgba(255, 255, 255, 0.4) transparent !important;\n}\n.previewPopupScroller::-webkit-scrollbar {\n    width: 8px;\n}\n.previewPopupScroller::-webkit-scrollbar-track {\n    background: transparent;\n}\n.previewPopupScroller::-webkit-scrollbar-thumb {\n    background-color: rgba(255, 255, 255, 0.4);\n    border-radius: 4px;\n}\n.previewPopupScroller::-webkit-scrollbar-thumb:hover {\n    background-color: rgba(255, 255, 255, 0.6);\n}\n.previewQuickActionContainer {\n    margin-left: auto;\n}\n.previewQuickActionContainer button:disabled {\n    opacity: 0.3;\n    cursor: default;\n}\n.previewItemContainer {\n    width: 100%;\n}\n.previewItemTitle {\n    pointer-events: none;\n}\n.previewItemTitle.previewItemTitle-noIndex .actionsheetListItemBody {\n    padding-inline-start: 0 !important;\n}\n.previewGroupListItemTitle {\n    width: 100%;\n}\n.previewGroupListItemTitle .listItemBody {\n    min-width: 0;\n}\n.previewGroupListItemTitle .actionSheetItemText {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.previewItemImageCard {\n    max-width: 30%;\n}\n.previewItemContentRow {\n    align-items: flex-start;\n}\n.previewItemDescriptionColumn {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    min-width: 0;\n}\n.previewItemDescription {\n    margin-left: 0.5em;\n    margin-top: 0.5em;\n    display: block;\n    overflow: hidden;\n    max-height: 150px;\n}\n.previewItemDescription.expanded {\n    max-height: none;\n}\n.previewItemReadMoreButton {\n    align-self: flex-start;\n    margin-left: 0.5em;\n    margin-top: 0.25em;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n    font-size: 0.9em;\n    opacity: 0.75;\n}\n.previewItemReadMoreButton:hover {\n    opacity: 1;\n}\n.previewItemDetails {\n    margin-left: 1em;\n    justify-content: start !important;\n}\n\n/* Lock the position of this details, so that no theme can change it */\n.previewListItemContent .itemMiscInfo.previewItemDetails {\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    right: auto !important;\n    bottom: auto !important;\n    transform: none !important;\n    margin-left: 1em !important;\n    margin-top: 0 !important;\n}\n.blur {\n    filter: blur(6px);\n    transition: filter 0.3s ease;\n    display: inline-block;\n}\n.blur:hover {\n    filter: blur(0);\n}\n.previewItemImageCard .blur {\n    filter: blur(32px);\n}\n.previewItemImageCard:hover .blur {\n    filter: blur(0);\n}\n.previewScrollSpinner {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1em 0;\n}\n.previewScrollSpinner .docspinner {\n    position: relative !important;\n    top: auto !important;\n    left: auto !important;\n    margin: 0 !important;\n    width: 1.95em !important;\n    height: 1.95em !important;\n    z-index: auto !important;\n}\n.previewVersionRow {\n    align-items: center;\n    margin-left: auto;\n    gap: 0.3em;\n}\n/* Row sits in the details row. Default icon button/select sizes would make it taller than the text. */\n.previewVersionSelect {\n    width: auto;\n    max-width: 14em;\n    height: auto;\n    line-height: normal;\n    padding: 0 0.4em;\n    border-radius: 0.2em;\n    font-size: inherit;\n    font-family: inherit;\n    text-overflow: ellipsis;\n    cursor: pointer;\n}\n/* Right margin/padding match paper-icon-button-light, aligns icon with the favorite quick action above */\n.previewVersionPlayButton.paper-icon-button-light {\n    margin: 0 0.29em 0 0;\n    padding: 0.1em 0.556em 0.1em 0.1em;\n}\n.previewVersionPlayButton.paper-icon-button-light > .material-icons {\n    font-size: 1.3em;\n}\n.previewVersionPlayButton:disabled {\n    opacity: 0.3;\n    cursor: default;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./Web/Styles/Styles.css"
/*!*******************************!*\
  !*** ./Web/Styles/Styles.css ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Styles.css */ "./node_modules/css-loader/dist/cjs.js!./Web/Styles/Styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

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
                <button class="listItem previewItemTitle previewGroupListItemTitle" type="button">
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
        renderedElement.querySelector('.actionSheetItemText').title = this.group.groupName;
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
exports.formatEndTime = formatEndTime;
exports.updateEndTimeDisplay = updateEndTimeDisplay;
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
function updateEndTimeDisplay(item) {
    const element = document.querySelector(`.endsAt[data-item-id="${item.Id}"]`);
    if (!element || !item.RunTimeTicks)
        return;
    element.textContent = formatEndTime(item.RunTimeTicks, item.UserData.PlaybackPositionTicks);
}
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
exports.ListElementTemplate = exports.applyDescriptionReadMore = exports.updateItemProgressDom = exports.setItemOverlayActive = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
const FavoriteIconTemplate_1 = __webpack_require__(/*! ./QuickActions/FavoriteIconTemplate */ "./Web/Components/QuickActions/FavoriteIconTemplate.ts");
const PlayStateIconTemplate_1 = __webpack_require__(/*! ./QuickActions/PlayStateIconTemplate */ "./Web/Components/QuickActions/PlayStateIconTemplate.ts");
const PlayIconTemplate_1 = __webpack_require__(/*! ./QuickActions/PlayIconTemplate */ "./Web/Components/QuickActions/PlayIconTemplate.ts");
const ItemDetails_1 = __webpack_require__(/*! ./ItemDetails */ "./Web/Components/ItemDetails.ts");
const ItemType_1 = __webpack_require__(/*! ../Models/ItemType */ "./Web/Models/ItemType.ts");
const DataFetcher_1 = __webpack_require__(/*! ../Services/DataFetcher */ "./Web/Services/DataFetcher.ts");
const ExpandedItemLayout_1 = __webpack_require__(/*! ../Models/ExpandedItemLayout */ "./Web/Models/ExpandedItemLayout.ts");
const VersionSelectTemplate_1 = __webpack_require__(/*! ./VersionSelectTemplate */ "./Web/Components/VersionSelectTemplate.ts");
// Shows/hides the "start playback" overlay for a rendered list item
const setItemOverlayActive = (itemId, isActive) => {
    var _a, _b;
    (_a = document.getElementById(`cardOverlay-${itemId}`)) === null || _a === void 0 ? void 0 : _a.classList.toggle('hide', isActive);
    (_b = document.getElementById(`playButton-${itemId}`)) === null || _b === void 0 ? void 0 : _b.toggleAttribute('disabled', isActive);
};
exports.setItemOverlayActive = setItemOverlayActive;
// Updates or creates the progress bar of a rendered list item
const updateItemProgressDom = (itemId, percentage) => {
    var _a, _b, _c;
    const foreground = (_a = document.getElementById(`item-${itemId}`)) === null || _a === void 0 ? void 0 : _a.querySelector('.itemProgressBarForeground');
    if (foreground) {
        foreground.style.width = `${percentage}%`;
        return;
    }
    const scalable = (_b = document.getElementById(`previewItemImageCard-${itemId}`)) === null || _b === void 0 ? void 0 : _b.parentElement;
    if (!scalable || !percentage)
        return;
    (_c = scalable.querySelector('#cardOverlay-' + itemId)) === null || _c === void 0 ? void 0 : _c.insertAdjacentHTML('beforebegin', `<div class="innerCardFooter fullInnerCardFooter innerCardFooterClear itemProgressBar">
            <div class="itemProgressBarForeground" style="width:${percentage}%;"></div>
        </div>`);
};
exports.updateItemProgressDom = updateItemProgressDom;
// Show a "Show more" button if description exceeds max height
const applyDescriptionReadMore = (itemContainer) => {
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
};
exports.applyDescriptionReadMore = applyDescriptionReadMore;
// Index number span for the title row, e.g. "<span>1</span>" or "<span>1-2</span>" for a multi-episode file.
// Empty for Movies, or items without an IndexNumber.
const indexNumberHtml = (item, groupType) => {
    if (!item.IndexNumber || groupType === ItemType_1.ItemType.Movie)
        return '';
    if (item.IndexNumberEnd && item.IndexNumberEnd !== item.IndexNumber) {
        return `<span>${item.IndexNumber}-${item.IndexNumberEnd}</span>`;
    }
    return `<span>${item.IndexNumber}</span>`;
};
class ListElementTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex, item, playbackHandler, programDataStore) {
        super(container, positionAfterIndex);
        this.item = item;
        this.playbackHandler = playbackHandler;
        this.programDataStore = programDataStore;
        this.versions = [];
        this.hasUserDataPerVersion = false;
        this.setElementId(`item-${item.Id}`);
        // create temp quick action container
        this.quickActionContainer = document.createElement('div');
        // create quick actions
        this.playStateIcon = new PlayStateIconTemplate_1.PlayStateIconTemplate(this.quickActionContainer, -1, this.item);
        this.favoriteIcon = new FavoriteIconTemplate_1.FavoriteIconTemplate(this.quickActionContainer, 0, this.item);
        if (!this.programDataStore.pluginSettings.ExpandAllItems)
            this.playIcon = new PlayIconTemplate_1.PlayIconTemplate(this.quickActionContainer, -1, this.item, this.item.Id === this.programDataStore.activeMediaSourceId);
    }
    getTemplate() {
        var _a, _b;
        // add quick actions
        this.playStateIcon.render();
        this.favoriteIcon.render();
        (_a = this.playIcon) === null || _a === void 0 ? void 0 : _a.render();
        // add item details/info
        const detailsContainer = document.createElement('div');
        const details = new ItemDetails_1.ItemDetailsTemplate(detailsContainer, -1, this.item);
        details.render();
        const backgroundImageStyle = `background-image: url('../Items/${this.item.Id}/Images/Primary?tag=${this.item.PrimaryImageTag}')`;
        const shouldBlur = !(this.programDataStore.pluginSettings.OnlyBlurUnwatched && this.item.UserData.Played);
        // Only takes effect while every item is force-expanded
        const useSideBySideLayout = this.programDataStore.pluginSettings.ExpandAllItems
            && this.programDataStore.pluginSettings.ExpandedItemLayout === ExpandedItemLayout_1.ExpandedItemLayout.SideBySide;
        const indexNumber = indexNumberHtml(this.item, this.programDataStore.type);
        // language=HTML
        const titleRow = `
            <div class="previewItemContainer flex">
                <button class="listItem previewItemTitle${indexNumber ? '' : ' previewItemTitle-noIndex'}" type="button">
                    ${indexNumber}
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
                ${(_b = this.item.Description) !== null && _b !== void 0 ? _b : ''}
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
        var _a, _b, _c;
        const renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
        const playStateButton = document.getElementById(`playStateButton-${this.item.Id}`);
        playStateButton === null || playStateButton === void 0 ? void 0 : playStateButton.addEventListener('click', (e) => {
            e.stopPropagation();
            (0, DataFetcher_1.togglePlayedStateLocally)(this.programDataStore, this.item.Id);
        });
        (_a = renderedElement.querySelector('.previewItemDescription')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => e.stopPropagation());
        const startPlayback = (e) => {
            var _a;
            e.stopPropagation();
            if (this.versions.length) {
                this.playSelectedVersion();
                return;
            }
            void this.playbackHandler.play(this.item.Id, this.item.UserData.PlaybackPositionTicks);
            if (this.programDataStore.pluginSettings.AutoClosePreview)
                (_a = document.getElementById('previewPopup')) === null || _a === void 0 ? void 0 : _a.remove();
        };
        document.getElementById(`start-item-${this.item.Id}`).addEventListener('click', startPlayback);
        (_b = document.getElementById(`playButton-${this.item.Id}`)) === null || _b === void 0 ? void 0 : _b.addEventListener('click', startPlayback);
        if (((_c = this.item.MediaSourceCount) !== null && _c !== void 0 ? _c : 0) > 1)
            this.renderVersionSelect();
    }
    // Versions load once the item gets expanded, not for every listed item
    ensureVersionsLoaded() {
        if (!this.versionSelect || this.versionsLoad)
            return;
        this.versionsLoad = this.loadVersions();
    }
    get isPlaying() {
        return this.item.Id === this.programDataStore.activeMediaSourceId;
    }
    renderVersionSelect() {
        const detailsElement = document.getElementById(`item-${this.item.Id}-details`);
        if (!detailsElement)
            return;
        this.versionSelect = new VersionSelectTemplate_1.VersionSelectTemplate(detailsElement, detailsElement.children.length - 1, this.item.Id, this.item.MediaSourceCount);
        this.versionSelect.render((versionId) => this.showVersion(versionId), () => this.playSelectedVersion());
    }
    async loadVersions() {
        const result = await this.playbackHandler.getVersions(this.item.Id);
        if (!result || result.Versions.length < 2) {
            this.versionSelect.remove();
            return;
        }
        this.versions = result.Versions;
        this.hasUserDataPerVersion = result.HasUserDataPerVersion;
        // Unknown playing version: first one is the server's default pick
        const selectedVersion = (this.isPlaying && this.versions.find(v => v.Id === result.ActiveVersionId)) || this.versions[0];
        this.versionSelect.setVersions(this.versions, selectedVersion.Id);
        if (this.isPlaying) {
            const item = this.programDataStore.getItemById(this.item.Id);
            if (item)
                this.setPlayingVersion(selectedVersion, item.UserData.PlaybackPositionTicks);
        }
        this.showVersion(selectedVersion.Id);
    }
    playSelectedVersion() {
        var _a;
        const version = this.versions.find(v => v.Id === this.versionSelect.selectedVersionId);
        if (!version)
            return;
        const isPlaying = this.isPlaying;
        if (isPlaying && version.Id === this.playingVersionId)
            return;
        const videoElement = document.querySelector('video.htmlvideoplayer');
        const positionTicks = isPlaying && videoElement
            ? Math.floor(videoElement.currentTime * 10000000)
            : version.Item.UserData.PlaybackPositionTicks;
        // Item becomes the playing one, its store data must match the started version for progress tracking
        this.setPlayingVersion(version, positionTicks);
        this.showVersion(version.Id);
        void this.playbackHandler.play(this.item.Id, positionTicks, version.Id);
        if (this.programDataStore.pluginSettings.AutoClosePreview)
            (_a = document.getElementById('previewPopup')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    // Stores runtime, progress and played state of the playing version on this item
    setPlayingVersion(version, positionTicks) {
        this.playingVersionId = version.Id;
        this.versionSelect.setPlayingVersion(version.Id);
        const item = this.programDataStore.getItemById(this.item.Id);
        if (!item)
            return;
        const runTimeTicks = version.Item.RunTimeTicks || item.RunTimeTicks;
        const played = version.Item.UserData.Played;
        this.programDataStore.updateItem(Object.assign(Object.assign({}, item), { RunTimeTicks: runTimeTicks, UserData: Object.assign(Object.assign({}, item.UserData), { PlaybackPositionTicks: positionTicks, PlayedPercentage: runTimeTicks ? (positionTicks / runTimeTicks) * 100 : item.UserData.PlayedPercentage, Played: played }) }));
        (0, DataFetcher_1.adjustWatchedCount)(this.programDataStore, item, item.UserData.Played, played, item.UserData.PlaybackPositionTicks, positionTicks);
    }
    // Renders the given version's data into this item. Display only, playback stays untouched.
    showVersion(versionId) {
        var _a, _b, _c, _d, _e;
        const version = this.versions.find(v => v.Id === versionId);
        const element = document.getElementById(`item-${this.item.Id}`);
        if (!version || !element)
            return;
        const isPlayingVersion = this.isPlaying && version.Id === this.playingVersionId;
        const storeItem = (_a = this.programDataStore.getItemById(this.item.Id)) !== null && _a !== void 0 ? _a : this.item;
        // Element ids and live progress tracking use the listed item's id
        // Switching carries the current position over, so the playing item shows it for every version
        const displayItem = isPlayingVersion
            ? Object.assign(Object.assign({}, version.Item), { Id: this.item.Id, RunTimeTicks: storeItem.RunTimeTicks, UserData: storeItem.UserData }) : this.isPlaying
            ? (0, VersionSelectTemplate_1.carryPositionOver)(Object.assign(Object.assign({}, version.Item), { Id: this.item.Id }), storeItem.UserData.PlaybackPositionTicks)
            : Object.assign(Object.assign({}, version.Item), { Id: this.item.Id });
        const title = element.querySelector('.previewItemTitle .actionSheetItemText');
        if (title)
            title.textContent = (_b = displayItem.Name) !== null && _b !== void 0 ? _b : '';
        // Replace the details around the version row. Moving the row would drop the select's focus.
        const detailsElement = document.getElementById(`item-${this.item.Id}-details`);
        const versionRow = this.versionSelect.getElement();
        if (detailsElement && versionRow) {
            const detailsContainer = document.createElement('div');
            new ItemDetails_1.ItemDetailsTemplate(detailsContainer, -1, displayItem).render();
            Array.from(detailsElement.children).filter(child => child !== versionRow).forEach(child => child.remove());
            versionRow.before(...Array.from(detailsContainer.firstElementChild.children));
        }
        // Version without own image keeps the listed item's image
        const [imageItemId, imageTag] = version.Item.PrimaryImageTag
            ? [version.Item.Id, version.Item.PrimaryImageTag]
            : [this.item.Id, this.item.PrimaryImageTag];
        const imageCard = document.getElementById(`previewItemImageCard-${this.item.Id}`);
        if (imageCard)
            imageCard.style.backgroundImage = `url('../Items/${imageItemId}/Images/Primary?tag=${imageTag}')`;
        const description = element.querySelector('.previewItemDescription');
        const content = element.querySelector('.previewListItemContent');
        if (description && content) {
            description.innerHTML = (_c = displayItem.Description) !== null && _c !== void 0 ? _c : '';
            (0, exports.applyDescriptionReadMore)(content);
        }
        if (this.programDataStore.pluginSettings.ShowWatchProgress)
            (0, exports.updateItemProgressDom)(this.item.Id, (_d = displayItem.UserData.PlayedPercentage) !== null && _d !== void 0 ? _d : 0);
        (0, DataFetcher_1.updateBlurDom)(this.programDataStore, this.item.Id, displayItem.UserData.Played);
        // Played/favorite buttons act on the listed item. With separate user data per version they don't match another version.
        const quickActionsMatchVersion = !this.hasUserDataPerVersion || version.Id === this.item.Id;
        for (const buttonId of [`playStateButton-${this.item.Id}`, `favoriteButton-${this.item.Id}`])
            (_e = document.getElementById(buttonId)) === null || _e === void 0 ? void 0 : _e.toggleAttribute('disabled', !quickActionsMatchVersion);
        this.versionSelect.setButtonEnabled(!isPlayingVersion);
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
const DataFetcher_1 = __webpack_require__(/*! ../Services/DataFetcher */ "./Web/Services/DataFetcher.ts");
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
        const title = this.getElement().querySelector('h1');
        title.innerText = text;
        title.title = text;
    }
    setSwitchable(switchable) {
        var _a;
        (_a = this.getElement().querySelector('#popupTitleSwitchIcon')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hide', !switchable);
    }
    setWatchedCount(group) {
        const watchedCountElement = this.getElement().querySelector('.previewGroupWatchedCount');
        if (watchedCountElement)
            (0, DataFetcher_1.renderWatchedCountInto)(this.programDataStore, watchedCountElement, group);
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

/***/ "./Web/Components/QuickActions/PlayIconTemplate.ts"
/*!*********************************************************!*\
  !*** ./Web/Components/QuickActions/PlayIconTemplate.ts ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayIconTemplate = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ../BaseTemplate */ "./Web/Components/BaseTemplate.ts");
class PlayIconTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex, item, isActive) {
        super(container, positionAfterIndex);
        this.item = item;
        this.isActive = isActive;
        this.setElementId('playButton-' + this.item.Id);
    }
    getTemplate() {
        // language=HTML
        return `
            <button id="${this.getElementId()}"
                    is="paper-icon-button-light"
                    type="button"
                    data-action="none"
                    class="itemAction paper-icon-button-light emby-button"
                    ${this.isActive ? 'disabled' : ''}
                    title="Play">
                <span class="material-icons play_arrow" aria-hidden="true"></span>
            </button>
        `;
    }
    render() {
        this.addElementToContainer();
    }
}
exports.PlayIconTemplate = PlayIconTemplate;


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
exports.spinnerHtml = spinnerHtml;
exports.activateSpinner = activateSpinner;
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
function activateSpinner(container) {
    var _a;
    (_a = container.querySelector('.mdl-spinner')) === null || _a === void 0 ? void 0 : _a.classList.add('mdlSpinnerActive');
}


/***/ },

/***/ "./Web/Components/VersionSelectTemplate.ts"
/*!*************************************************!*\
  !*** ./Web/Components/VersionSelectTemplate.ts ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VersionSelectTemplate = exports.carryPositionOver = exports.getSelectedVersionRunTimeTicks = exports.isPreviewingOtherVersion = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
// True while the playing item shows a version other than the playing one
const isPreviewingOtherVersion = (itemId) => {
    const select = document.getElementById(`versionSelect-${itemId}`);
    const playingVersionId = select === null || select === void 0 ? void 0 : select.dataset.playingVersionId;
    return !!playingVersionId && select.value !== playingVersionId;
};
exports.isPreviewingOtherVersion = isPreviewingOtherVersion;
const getSelectedVersionRunTimeTicks = (itemId) => {
    var _a;
    const select = document.getElementById(`versionSelect-${itemId}`);
    return Number((_a = select === null || select === void 0 ? void 0 : select.selectedOptions[0]) === null || _a === void 0 ? void 0 : _a.dataset.runTimeTicks) || undefined;
};
exports.getSelectedVersionRunTimeTicks = getSelectedVersionRunTimeTicks;
// Switching keeps the playback position. Position is clamped to the item's runtime.
const carryPositionOver = (item, positionTicks) => {
    const clampedPositionTicks = item.RunTimeTicks ? Math.min(Math.max(positionTicks, 0), item.RunTimeTicks) : positionTicks;
    return Object.assign(Object.assign({}, item), { UserData: Object.assign(Object.assign({}, item.UserData), { PlaybackPositionTicks: clampedPositionTicks, PlayedPercentage: item.RunTimeTicks ? (clampedPositionTicks / item.RunTimeTicks) * 100 : item.UserData.PlayedPercentage }) });
};
exports.carryPositionOver = carryPositionOver;
class VersionSelectTemplate extends BaseTemplate_1.BaseTemplate {
    constructor(container, positionAfterIndex, itemId, versionCount) {
        super(container, positionAfterIndex);
        this.versionCount = versionCount;
        this.setElementId(`versionRow-${itemId}`);
        this.selectId = `versionSelect-${itemId}`;
        this.buttonId = `versionPlayButton-${itemId}`;
    }
    getTemplate() {
        // Plain select instead of is="emby-select". emby-select adds its own label and opens an action sheet on TV layouts.
        // language=HTML
        return `
            <div id="${this.getElementId()}" class="flex previewVersionRow">
                <select id="${this.selectId}" class="emby-select-withcolor previewVersionSelect" title="Version" disabled>
                    <option>${this.versionCount} versions</option>
                </select>
                <button id="${this.buttonId}"
                        is="paper-icon-button-light"
                        type="button"
                        class="paper-icon-button-light emby-button previewVersionPlayButton"
                        disabled
                        title="Switch to this version">
                    <span class="material-icons swap_horiz" aria-hidden="true"></span>
                </button>
            </div>
        `;
    }
    render(changeHandler, playHandler) {
        this.addElementToContainer();
        // Keep the list item's click handler from collapsing/scrolling the list
        this.select.addEventListener('click', (e) => e.stopPropagation());
        this.select.addEventListener('change', (e) => {
            e.stopPropagation();
            changeHandler(this.select.value);
        });
        this.button.addEventListener('click', (e) => {
            e.stopPropagation();
            playHandler();
        });
    }
    setVersions(versions, selectedVersionId) {
        // Option constructor escapes names taken from file names
        this.select.replaceChildren(...versions.map((version, i) => {
            var _a;
            const option = new Option(version.Name || `Version ${i + 1}`, version.Id);
            option.dataset.runTimeTicks = String((_a = version.Item.RunTimeTicks) !== null && _a !== void 0 ? _a : '');
            return option;
        }));
        this.select.value = selectedVersionId;
        this.select.disabled = false;
    }
    get selectedVersionId() {
        return this.select.value;
    }
    setPlayingVersion(versionId) {
        this.select.dataset.playingVersionId = versionId;
    }
    setButtonEnabled(enabled) {
        this.button.disabled = !enabled;
    }
    remove() {
        var _a;
        (_a = this.getElement()) === null || _a === void 0 ? void 0 : _a.remove();
    }
    get select() {
        return document.getElementById(this.selectId);
    }
    get button() {
        return document.getElementById(this.buttonId);
    }
}
exports.VersionSelectTemplate = VersionSelectTemplate;


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
    Endpoints["ITEM_VERSIONS"] = "/Users/{userId}/Items/{itemId}/Versions";
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
const preserveBackendOrderTypes = new Set([ItemType_1.ItemType.Playlist, ItemType_1.ItemType.BoxSet, ItemType_1.ItemType.Folder, ItemType_1.ItemType.Movie]);
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
            const item = preserveOrder ? Object.assign(Object.assign({}, items[i]), { IndexNumber: offset + i + 1, IndexNumberEnd: undefined }) : items[i];
            await this.renderItem(item, parentDiv, offset + i);
        }
    }
    async prependItemElements(items, parentDiv, offset) {
        const preserveOrder = preserveBackendOrderTypes.has(this.programDataStore.type);
        if (!preserveOrder)
            items.sort((a, b) => a.IndexNumber - b.IndexNumber);
        for (let i = items.length - 1; i >= 0; i--) {
            const item = preserveOrder ? Object.assign(Object.assign({}, items[i]), { IndexNumber: offset + i + 1, IndexNumberEnd: undefined }) : items[i];
            await this.renderItem(item, parentDiv, -1);
        }
    }
    // Reveals an item's content
    expandItem(itemContainer, markSelected, template) {
        itemContainer.classList.remove('hide');
        if (markSelected)
            itemContainer.classList.add('selectedListItem');
        (0, ListElementTemplate_1.applyDescriptionReadMore)(itemContainer);
        template.ensureVersionsLoaded();
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
            this.expandItem(itemContainer, true, itemListElementTemplate);
            // scroll to the selected item
            itemContainer.parentElement.scrollIntoView({ block: "start" });
        });
        const itemNode = document.getElementById(`item-${item.Id}`).querySelector('.previewListItemContent');
        if (this.programDataStore.pluginSettings.ExpandAllItems) {
            this.expandItem(itemNode, item.Id === this.programDataStore.activeMediaSourceId, itemListElementTemplate);
        }
        else if (item.Id === this.programDataStore.activeMediaSourceId) {
            this.expandItem(itemNode, true, itemListElementTemplate);
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
    DisplayMovieFolderSiblings: false,
    OnlyBlurUnwatched: false,
    ShowWatchProgress: true,
    ExpandAllItems: false,
    ExpandedItemLayout: ExpandedItemLayout_1.ExpandedItemLayout.Default,
    AutoClosePreview: true,
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
exports.nextWatchCountDisplayMode = exports.renderWatchedCountInnerHtml = exports.formatWatchedCountText = exports.isWatchedCountUnknown = exports.getWatchProgressPercent = void 0;
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
// Cycles Count -> Time -> Percentage. The time format follows the plugin setting, HoursMinutes unless it is AllUnits.
const nextWatchCountDisplayMode = (mode, defaultMode) => {
    const timeMode = defaultMode === WatchCountDisplayMode_1.WatchCountDisplayMode.AllUnits ? WatchCountDisplayMode_1.WatchCountDisplayMode.AllUnits : WatchCountDisplayMode_1.WatchCountDisplayMode.HoursMinutes;
    switch (mode) {
        case WatchCountDisplayMode_1.WatchCountDisplayMode.Count: return timeMode;
        case WatchCountDisplayMode_1.WatchCountDisplayMode.Percentage: return WatchCountDisplayMode_1.WatchCountDisplayMode.Count;
        default: return WatchCountDisplayMode_1.WatchCountDisplayMode.Percentage;
    }
};
exports.nextWatchCountDisplayMode = nextWatchCountDisplayMode;


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
exports.DataFetcher = void 0;
exports.renderWatchedCountInto = renderWatchedCountInto;
exports.cycleWatchedCountMode = cycleWatchedCountMode;
exports.updateWatchedCountDom = updateWatchedCountDom;
exports.updateBlurDom = updateBlurDom;
exports.adjustWatchedCount = adjustWatchedCount;
exports.togglePlayedStateLocally = togglePlayedStateLocally;
const WatchProgress_1 = __webpack_require__(/*! ../Models/PreviewData/WatchProgress */ "./Web/Models/PreviewData/WatchProgress.ts");
function renderWatchedCountInto(programDataStore, element, group) {
    const mode = element.dataset.mode !== undefined ? Number(element.dataset.mode) : programDataStore.pluginSettings.WatchCountDisplayMode;
    element.innerHTML = (0, WatchProgress_1.renderWatchedCountInnerHtml)(group, mode);
}
function cycleWatchedCountMode(programDataStore, element, group) {
    const current = element.dataset.mode !== undefined ? Number(element.dataset.mode) : programDataStore.pluginSettings.WatchCountDisplayMode;
    element.dataset.mode = String((0, WatchProgress_1.nextWatchCountDisplayMode)(current, programDataStore.pluginSettings.WatchCountDisplayMode));
    renderWatchedCountInto(programDataStore, element, group);
}
function updateWatchedCountDom(programDataStore, group) {
    var _a, _b;
    if (group.groupId === programDataStore.activeGroupId) {
        const popupWatchedCount = (_a = document.getElementById('popupTitleContainer')) === null || _a === void 0 ? void 0 : _a.querySelector('.previewGroupWatchedCount');
        if (popupWatchedCount)
            renderWatchedCountInto(programDataStore, popupWatchedCount, group);
    }
    const groupListWatchedCount = (_b = document.getElementById(`group-${group.groupId}`)) === null || _b === void 0 ? void 0 : _b.querySelector('.previewGroupWatchedCount');
    if (groupListWatchedCount)
        renderWatchedCountInto(programDataStore, groupListWatchedCount, group);
}
function updateBlurDom(programDataStore, itemId, played) {
    var _a, _b, _c;
    const settings = programDataStore.pluginSettings;
    const shouldBlur = !(settings.OnlyBlurUnwatched && played);
    (_a = document.getElementById(`previewItemImageCard-${itemId}`)) === null || _a === void 0 ? void 0 : _a.classList.toggle('blur', settings.BlurThumbnail && shouldBlur);
    (_c = (_b = document.getElementById(`item-${itemId}`)) === null || _b === void 0 ? void 0 : _b.querySelector('.previewItemDescription')) === null || _c === void 0 ? void 0 : _c.classList.toggle('blur', settings.BlurDescription && shouldBlur);
}
function playedRuntimeContribution(item, played, playbackPositionTicks) {
    var _a;
    return played ? ((_a = item.RunTimeTicks) !== null && _a !== void 0 ? _a : 0) : playbackPositionTicks;
}
function adjustWatchedCount(programDataStore, item, wasPlayed, isPlayed, oldPlaybackPositionTicks, newPlaybackPositionTicks) {
    if (!programDataStore.pluginSettings.ShowWatchedCount)
        return;
    const deltaPlayedCount = Number(isPlayed) - Number(wasPlayed);
    const deltaPlayedRuntimeTicks = playedRuntimeContribution(item, isPlayed, newPlaybackPositionTicks) -
        playedRuntimeContribution(item, wasPlayed, oldPlaybackPositionTicks);
    if (deltaPlayedCount === 0 && deltaPlayedRuntimeTicks === 0)
        return;
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
    updateBlurDom(programDataStore, itemId, isPlayed);
    adjustWatchedCount(programDataStore, item, wasPlayed, isPlayed, oldPlaybackPositionTicks, newPlaybackPositionTicks);
}
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
                updateBlurDom(this.programDataStore, userData.ItemId, userData.Played);
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
    async play(itemId, startPositionTicks, mediaSourceId) {
        try {
            const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.PLAY_MEDIA}`
                .replace('{itemId}', itemId)
                .replace('{ticks}', startPositionTicks.toString()), mediaSourceId ? { mediaSourceId } : undefined);
            return await ApiClient.ajax({ type: 'GET', url });
        }
        catch (ex) {
            return this.logger.error(`Couldn't start the playback of an item`, ex);
        }
    }
    async getVersions(itemId) {
        try {
            const url = ApiClient.getUrl(`/${Endpoints_1.Endpoints.BASE}${Endpoints_1.Endpoints.ITEM_VERSIONS}`
                .replace('{userId}', ApiClient.getCurrentUserId())
                .replace('{itemId}', itemId));
            return await ApiClient.ajax({ type: 'GET', url, dataType: 'json' });
        }
        catch (ex) {
            this.logger.error(`Couldn't load the versions of item ${itemId}`, ex);
            return null;
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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
const ItemDetails_1 = __webpack_require__(/*! ./Components/ItemDetails */ "./Web/Components/ItemDetails.ts");
const VersionSelectTemplate_1 = __webpack_require__(/*! ./Components/VersionSelectTemplate */ "./Web/Components/VersionSelectTemplate.ts");
__webpack_require__(/*! ./Styles/Styles.css */ "./Web/Styles/Styles.css");
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
let pendingItemSwitchButton = null;
let itemSwitchObserver = null;
function onVideoEmptied() {
    lastTrackedPositionSecond = -1;
    itemSwitchObserver === null || itemSwitchObserver === void 0 ? void 0 : itemSwitchObserver.disconnect();
    pendingItemSwitchButton = getActiveRatingButton();
    if (!pendingItemSwitchButton)
        return;
    itemSwitchObserver = new MutationObserver(() => stopWaitingForItemSwitch());
    itemSwitchObserver.observe(pendingItemSwitchButton, { attributes: true, attributeFilter: ['data-id'] });
}
function stopWaitingForItemSwitch() {
    itemSwitchObserver === null || itemSwitchObserver === void 0 ? void 0 : itemSwitchObserver.disconnect();
    itemSwitchObserver = null;
    pendingItemSwitchButton = null;
}
let lastTrackedPositionSecond = -1;
function onVideoTimeUpdate() {
    var _a;
    if (pendingItemSwitchButton) {
        // A recreated OSD has a new button. The observed one never updates.
        if (pendingItemSwitchButton === getActiveRatingButton())
            return;
        stopWaitingForItemSwitch();
    }
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
    const played = item.UserData.Played || playedPercentage >= programDataStore.serverSettings.MaxResumePct;
    const updatedItem = Object.assign(Object.assign({}, item), { UserData: Object.assign(Object.assign({}, item.UserData), { PlaybackPositionTicks: positionTicks, PlayedPercentage: playedPercentage, Played: played }) });
    programDataStore.updateItem(updatedItem);
    // Entry shows another version's data. A switch keeps the position, so progress and "Ends at" follow playback on it.
    if ((0, VersionSelectTemplate_1.isPreviewingOtherVersion)(itemId)) {
        const previewedItem = (0, VersionSelectTemplate_1.carryPositionOver)(Object.assign(Object.assign({}, updatedItem), { RunTimeTicks: (_a = (0, VersionSelectTemplate_1.getSelectedVersionRunTimeTicks)(itemId)) !== null && _a !== void 0 ? _a : updatedItem.RunTimeTicks }), positionTicks);
        (0, ListElementTemplate_1.updateItemProgressDom)(itemId, previewedItem.UserData.PlayedPercentage);
        (0, ItemDetails_1.updateEndTimeDisplay)(previewedItem);
    }
    else {
        (0, ListElementTemplate_1.updateItemProgressDom)(itemId, playedPercentage);
        (0, ItemDetails_1.updateEndTimeDisplay)(updatedItem);
        if (played !== item.UserData.Played)
            (0, DataFetcher_1.updateBlurDom)(programDataStore, itemId, played);
    }
    (0, DataFetcher_1.adjustWatchedCount)(programDataStore, item, item.UserData.Played, played, item.UserData.PlaybackPositionTicks, positionTicks);
}
function onVideoRateChange() {
    document.querySelectorAll('.endsAt[data-item-id]').forEach(element => {
        var _a;
        const item = programDataStore.getItemById(element.dataset.itemId);
        if (!item)
            return;
        (0, ItemDetails_1.updateEndTimeDisplay)((0, VersionSelectTemplate_1.isPreviewingOtherVersion)(item.Id)
            ? (0, VersionSelectTemplate_1.carryPositionOver)(Object.assign(Object.assign({}, item), { RunTimeTicks: (_a = (0, VersionSelectTemplate_1.getSelectedVersionRunTimeTicks)(item.Id)) !== null && _a !== void 0 ? _a : item.RunTimeTicks }), item.UserData.PlaybackPositionTicks)
            : item);
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
    var _a, _b, _c, _d, _e, _f, _g;
    // Cycle group stat display mode
    const watchedCountElement = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, '#previewPopup .previewGroupWatchedCount');
    if (watchedCountElement) {
        event.stopPropagation();
        const groupElement = watchedCountElement.closest('[id^="group-"]');
        const group = groupElement ? programDataStore.groups.find(g => `group-${g.groupId}` === groupElement.id) : programDataStore.activeGroup;
        if (group)
            (0, DataFetcher_1.cycleWatchedCountMode)(programDataStore, watchedCountElement, group);
        return;
    }
    // Only capture native events and ignore any from the Preview List
    if ((_d = (_c = event.target) === null || _c === void 0 ? void 0 : _c.closest) === null || _d === void 0 ? void 0 : _d.call(_c, '#previewPopup'))
        return;
    const actionElement = (_f = (_e = event.target) === null || _e === void 0 ? void 0 : _e.closest) === null || _f === void 0 ? void 0 : _f.call(_e, '[data-action]');
    if (!actionElement || !PLAYBACK_TRIGGER_ACTIONS.has(actionElement.getAttribute('data-action')))
        return;
    const card = actionElement.closest('[data-id]');
    if (!card)
        return;
    const childOfCollectionId = (_g = card.getAttribute('data-collectionid')) !== null && _g !== void 0 ? _g : card.getAttribute('data-playlistid');
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
            videoElement === null || videoElement === void 0 ? void 0 : videoElement.addEventListener('emptied', onVideoEmptied);
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
            const isStandaloneMovie = programDataStore.type === ItemType_1.ItemType.Movie;
            const isSourcedFromCollection = programDataStore.type === ItemType_1.ItemType.Playlist || programDataStore.type === ItemType_1.ItemType.BoxSet;
            if (isStandaloneMovie && programDataStore.pluginSettings.SearchContainingCollections) {
                programDataStore.groups = programDataStore.groups.map((g, i) => i === 0 && g.groupId === itemId ? Object.assign(Object.assign({}, g), { groupName: SEARCH_COLLECTIONS_GROUP_NAME }) : g);
            }
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
        videoElement === null || videoElement === void 0 ? void 0 : videoElement.removeEventListener('emptied', onVideoEmptied);
        stopWaitingForItemSwitch();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5QbGF5ZXJQcmV2aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxL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Q0FBQyxxQkFBcUIsQ0FBQyxLQUFJLElBQUk7SUFDOUUsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9XZWIvU3R5bGVzL1N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9XZWIvU3R5bGVzL1N0eWxlcy5jc3M/ODQwZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0Jhc2VUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Hcm91cExpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvSXRlbURldGFpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvUGxheUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvUGxheVN0YXRlSWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1NwaW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvVmVyc2lvblNlbGVjdFRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9FbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0xpc3RFbGVtZW50RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL0V4cGFuZGVkSXRlbUxheW91dC50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL0l0ZW1UeXBlLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvTG9nTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9QbHVnaW5TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvUHJldmlld0RhdGEvV2F0Y2hQcm9ncmVzcy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1NlcnZlclNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvV2F0Y2hDb3VudERpc3BsYXlNb2RlLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9EYXRhRmV0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vV2ViL0luUGxheWVyUHJldmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlbGVjdGVkTGlzdEl0ZW0ge1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5wcmV2aWV3TGlzdEl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucHJldmlld0xpc3RJdGVtQ29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTUuNXZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0l0ZW1UaXRsZSAuYWN0aW9uU2hlZXRJdGVtVGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbn1cbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0xpc3RJdGVtQ29udGVudCAuaXRlbU1pc2NJbmZvLnByZXZpZXdJdGVtRGV0YWlscyB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtICFpbXBvcnRhbnQ7XG59XG4ucHJldmlld1BvcHVwIHtcbiAgICBhbmltYXRpb246IDE0MG1zIGVhc2Utb3V0IDBzIDEgbm9ybWFsIGJvdGggcnVubmluZyBzY2FsZXVwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm90dG9tOiAxLjV2aDtcbiAgICBsZWZ0OiA1MHZ3O1xuICAgIHdpZHRoOiA0OHZ3O1xufVxuLnByZXZpZXdQb3B1cFRpdGxlIHtcbiAgICBtYXgtaGVpZ2h0OiA0dmg7XG59XG4ucHJldmlld1BvcHVwVGl0bGUgaDEuYWN0aW9uU2hlZXRUaXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ucHJldmlld0dyb3VwV2F0Y2hlZENvdW50IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRlbTtcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjZlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cywgYmFja2dyb3VuZC1jb2xvciAwLjE1cztcbn1cbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQ6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cbi8qIFJlbW92ZSBidXR0b24gaGlnaGxpZ2h0aW5nIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgZ3JvdXAgc3RhdGlzdGljcyAqL1xuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGU6aGFzKC5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQ6aG92ZXIpIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLnByZXZpZXdQb3B1cFNjcm9sbGVyIHtcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xuICAgIHNjcm9sbGJhci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4ucHJldmlld1BvcHVwU2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4O1xufVxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucHJldmlld1BvcHVwU2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuLnByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4ucHJldmlld1F1aWNrQWN0aW9uQ29udGFpbmVyIGJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5wcmV2aWV3SXRlbUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJldmlld0l0ZW1UaXRsZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucHJldmlld0l0ZW1UaXRsZS5wcmV2aWV3SXRlbVRpdGxlLW5vSW5kZXggLmFjdGlvbnNoZWV0TGlzdEl0ZW1Cb2R5IHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50O1xufVxuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGUgLmxpc3RJdGVtQm9keSB7XG4gICAgbWluLXdpZHRoOiAwO1xufVxuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGUgLmFjdGlvblNoZWV0SXRlbVRleHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5wcmV2aWV3SXRlbUltYWdlQ2FyZCB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG59XG4ucHJldmlld0l0ZW1Db250ZW50Um93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbi5leHBhbmRlZCB7XG4gICAgbWF4LWhlaWdodDogbm9uZTtcbn1cbi5wcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBvcGFjaXR5OiAwLjc1O1xufVxuLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG4ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLyogTG9jayB0aGUgcG9zaXRpb24gb2YgdGhpcyBkZXRhaWxzLCBzbyB0aGF0IG5vIHRoZW1lIGNhbiBjaGFuZ2UgaXQgKi9cbi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IC5pdGVtTWlzY0luZm8ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMWVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cig2cHgpO1xuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJsdXI6aG92ZXIge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbn1cbi5wcmV2aWV3SXRlbUltYWdlQ2FyZCAuYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDMycHgpO1xufVxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkOmhvdmVyIC5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG59XG4ucHJldmlld1Njcm9sbFNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbn1cbi5wcmV2aWV3U2Nyb2xsU3Bpbm5lciAuZG9jc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxLjk1ZW0gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEuOTVlbSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5wcmV2aWV3VmVyc2lvblJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBnYXA6IDAuM2VtO1xufVxuLyogUm93IHNpdHMgaW4gdGhlIGRldGFpbHMgcm93LiBEZWZhdWx0IGljb24gYnV0dG9uL3NlbGVjdCBzaXplcyB3b3VsZCBtYWtlIGl0IHRhbGxlciB0aGFuIHRoZSB0ZXh0LiAqL1xuLnByZXZpZXdWZXJzaW9uU2VsZWN0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDE0ZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgcGFkZGluZzogMCAwLjRlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLyogUmlnaHQgbWFyZ2luL3BhZGRpbmcgbWF0Y2ggcGFwZXItaWNvbi1idXR0b24tbGlnaHQsIGFsaWducyBpY29uIHdpdGggdGhlIGZhdm9yaXRlIHF1aWNrIGFjdGlvbiBhYm92ZSAqL1xuLnByZXZpZXdWZXJzaW9uUGxheUJ1dHRvbi5wYXBlci1pY29uLWJ1dHRvbi1saWdodCB7XG4gICAgbWFyZ2luOiAwIDAuMjllbSAwIDA7XG4gICAgcGFkZGluZzogMC4xZW0gMC41NTZlbSAwLjFlbSAwLjFlbTtcbn1cbi5wcmV2aWV3VmVyc2lvblBsYXlCdXR0b24ucGFwZXItaWNvbi1idXR0b24tbGlnaHQgPiAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG59XG4ucHJldmlld1ZlcnNpb25QbGF5QnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9XZWIvU3R5bGVzL1N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwwREFBMEQ7SUFDMUQsZUFBZTtJQUNmLFNBQVM7SUFDVCxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLE9BQU87SUFDUCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpREFBaUQ7QUFDckQ7QUFDQTtJQUNJLFVBQVU7SUFDViwyQ0FBMkM7QUFDL0M7QUFDQSx1RUFBdUU7QUFDdkU7SUFDSSwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGdFQUFnRTtBQUNwRTtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBLHNFQUFzRTtBQUN0RTtJQUNJLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQSxzR0FBc0c7QUFDdEc7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBQ0EseUdBQXlHO0FBQ3pHO0lBQ0ksb0JBQW9CO0lBQ3BCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VsZWN0ZWRMaXN0SXRlbSB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLnByZXZpZXdMaXN0SXRlbSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ucHJldmlld0xpc3RJdGVtQ29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxNS41dmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUgLnByZXZpZXdJdGVtVGl0bGUgLmFjdGlvblNoZWV0SXRlbVRleHQge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUgLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQgLml0ZW1NaXNjSW5mby5wcmV2aWV3SXRlbURldGFpbHMge1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW0gIWltcG9ydGFudDtcXG59XFxuLnByZXZpZXdQb3B1cCB7XFxuICAgIGFuaW1hdGlvbjogMTQwbXMgZWFzZS1vdXQgMHMgMSBub3JtYWwgYm90aCBydW5uaW5nIHNjYWxldXA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3R0b206IDEuNXZoO1xcbiAgICBsZWZ0OiA1MHZ3O1xcbiAgICB3aWR0aDogNDh2dztcXG59XFxuLnByZXZpZXdQb3B1cFRpdGxlIHtcXG4gICAgbWF4LWhlaWdodDogNHZoO1xcbn1cXG4ucHJldmlld1BvcHVwVGl0bGUgaDEuYWN0aW9uU2hlZXRUaXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRlbTtcXG4gICAgcGFkZGluZzogMC4yZW0gMC42ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMsIGJhY2tncm91bmQtY29sb3IgMC4xNXM7XFxufVxcbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQ6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xcbn1cXG4vKiBSZW1vdmUgYnV0dG9uIGhpZ2hsaWdodGluZyB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIGdyb3VwIHN0YXRpc3RpY3MgKi9cXG4ucHJldmlld0dyb3VwTGlzdEl0ZW1UaXRsZTpoYXMoLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudDpob3Zlcikge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLnByZXZpZXdQb3B1cFNjcm9sbGVyIHtcXG4gICAgbWF4LWhlaWdodDogNjB2aDtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbGJhci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogOHB4O1xcbn1cXG4ucHJldmlld1BvcHVwU2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuLnByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ucHJldmlld1F1aWNrQWN0aW9uQ29udGFpbmVyIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4ucHJldmlld0l0ZW1Db250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnByZXZpZXdJdGVtVGl0bGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnByZXZpZXdJdGVtVGl0bGUucHJldmlld0l0ZW1UaXRsZS1ub0luZGV4IC5hY3Rpb25zaGVldExpc3RJdGVtQm9keSB7XFxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV2aWV3R3JvdXBMaXN0SXRlbVRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5wcmV2aWV3R3JvdXBMaXN0SXRlbVRpdGxlIC5saXN0SXRlbUJvZHkge1xcbiAgICBtaW4td2lkdGg6IDA7XFxufVxcbi5wcmV2aWV3R3JvdXBMaXN0SXRlbVRpdGxlIC5hY3Rpb25TaGVldEl0ZW1UZXh0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4ucHJldmlld0l0ZW1JbWFnZUNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDMwJTtcXG59XFxuLnByZXZpZXdJdGVtQ29udGVudFJvdyB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbkNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMDtcXG59XFxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxufVxcbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uLmV4cGFuZGVkIHtcXG4gICAgbWF4LWhlaWdodDogbm9uZTtcXG59XFxuLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b24ge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldmlld0l0ZW1EZXRhaWxzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBMb2NrIHRoZSBwb3NpdGlvbiBvZiB0aGlzIGRldGFpbHMsIHNvIHRoYXQgbm8gdGhlbWUgY2FuIGNoYW5nZSBpdCAqL1xcbi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IC5pdGVtTWlzY0luZm8ucHJldmlld0l0ZW1EZXRhaWxzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XFxuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICAgIHJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIGJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxufVxcbi5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDZweCk7XFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJsdXI6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XFxufVxcbi5wcmV2aWV3SXRlbUltYWdlQ2FyZCAuYmx1ciB7XFxuICAgIGZpbHRlcjogYmx1cigzMnB4KTtcXG59XFxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkOmhvdmVyIC5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDApO1xcbn1cXG4ucHJldmlld1Njcm9sbFNwaW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMWVtIDA7XFxufVxcbi5wcmV2aWV3U2Nyb2xsU3Bpbm5lciAuZG9jc3Bpbm5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDEuOTVlbSAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDEuOTVlbSAhaW1wb3J0YW50O1xcbiAgICB6LWluZGV4OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV2aWV3VmVyc2lvblJvdyB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBnYXA6IDAuM2VtO1xcbn1cXG4vKiBSb3cgc2l0cyBpbiB0aGUgZGV0YWlscyByb3cuIERlZmF1bHQgaWNvbiBidXR0b24vc2VsZWN0IHNpemVzIHdvdWxkIG1ha2UgaXQgdGFsbGVyIHRoYW4gdGhlIHRleHQuICovXFxuLnByZXZpZXdWZXJzaW9uU2VsZWN0IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMTRlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBwYWRkaW5nOiAwIDAuNGVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogUmlnaHQgbWFyZ2luL3BhZGRpbmcgbWF0Y2ggcGFwZXItaWNvbi1idXR0b24tbGlnaHQsIGFsaWducyBpY29uIHdpdGggdGhlIGZhdm9yaXRlIHF1aWNrIGFjdGlvbiBhYm92ZSAqL1xcbi5wcmV2aWV3VmVyc2lvblBsYXlCdXR0b24ucGFwZXItaWNvbi1idXR0b24tbGlnaHQge1xcbiAgICBtYXJnaW46IDAgMC4yOWVtIDAgMDtcXG4gICAgcGFkZGluZzogMC4xZW0gMC41NTZlbSAwLjFlbSAwLjFlbTtcXG59XFxuLnByZXZpZXdWZXJzaW9uUGxheUJ1dHRvbi5wYXBlci1pY29uLWJ1dHRvbi1saWdodCA+IC5tYXRlcmlhbC1pY29ucyB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcbi5wcmV2aWV3VmVyc2lvblBsYXlCdXR0b246ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVGVtcGxhdGUge1xuICAgIC8qXG4gICAgICogdGhlIEhUTUwgYmFzZWQgSUQgb2YgdGhlIG5ldyBnZW5lcmF0ZWQgRWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZWxlbWVudElkOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50LCBwcml2YXRlIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7IH1cblxuICAgIHB1YmxpYyBnZXRDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkFmdGVySW5kZXg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEVsZW1lbnRJZChlbGVtZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRJZDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmdldEVsZW1lbnRJZCgpfWApO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBzdHJpbmc7XG5cbiAgICBhYnN0cmFjdCByZW5kZXIoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IHZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgYWRkRWxlbWVudFRvQ29udGFpbmVyKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIC8vIEFkZCBFbGVtZW50IGFzIHRoZSBmaXJzdCBjaGlsZCBpZiBwb3NpdGlvbiBpcyBuZWdhdGl2ZVxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSA8IDAgJiYgdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZmlyc3RFbGVtZW50Q2hpbGQuYmVmb3JlKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgaWYgY29udGFpbmVyIGlzIGVtcHR5XG4gICAgICAgIGlmICghdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuaW5uZXJIVE1MID0gdGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGlsZEJlZm9yZSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkubGFzdEVsZW1lbnRDaGlsZFxuICAgICAgICBpZiAodGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpICYmIHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgPj0gMClcbiAgICAgICAgICAgIGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlblt0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpXTtcbiAgICAgICAgXG4gICAgICAgIGNoaWxkQmVmb3JlLmFmdGVyKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgc3RyaW5nVG9Ob2RlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcpOiBOb2RlIHtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHRlbXBsYXRlU3RyaW5nO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBkaWFsb2dCYWNrZHJvcElkID0gJ2RpYWxvZ0JhY2tkcm9wJ1xuICAgIGRpYWxvZ0NvbnRhaW5lcklkID0gJ2RpYWxvZ0NvbnRhaW5lcidcbiAgICBwb3B1cENvbnRlbnRDb250YWluZXJJZCA9ICdwb3B1cENvbnRlbnRDb250YWluZXInXG4gICAgcG9wdXBGb2N1c0NvbnRhaW5lcklkID0gJ3BvcHVwRm9jdXNDb250YWluZXInXG4gICAgXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncHJldmlld1BvcHVwJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5kaWFsb2dCYWNrZHJvcElkfVwiIGNsYXNzPVwiZGlhbG9nQmFja2Ryb3AgZGlhbG9nQmFja2Ryb3BPcGVuZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmRpYWxvZ0NvbnRhaW5lcklkfVwiIGNsYXNzPVwiZGlhbG9nQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBGb2N1c0NvbnRhaW5lcklkfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb2N1c2NvbnRhaW5lciBkaWFsb2cgYWN0aW9uc2hlZXQtbm90LWZ1bGxzY3JlZW4gYWN0aW9uU2hlZXQgY2VudGVyZWREaWFsb2cgb3BlbmVkIHByZXZpZXdQb3B1cCBhY3Rpb25TaGVldENvbnRlbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlzdG9yeT1cInRydWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmVtb3Zlb25jbG9zZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBDb250ZW50Q29udGFpbmVySWR9XCIgY2xhc3M9XCJhY3Rpb25TaGVldFNjcm9sbGVyIHNjcm9sbFkgcHJldmlld1BvcHVwU2Nyb2xsZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRFbGVtZW50SWQoKSkpXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge3JlbmRlcldhdGNoZWRDb3VudElubmVySHRtbH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4uL01vZGVscy9XYXRjaENvdW50RGlzcGxheU1vZGVcIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZ3JvdXA6IEdyb3VwLCBwcml2YXRlIGlzQ3VycmVudEdyb3VwOiBib29sZWFuLCBwcml2YXRlIHNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4sIHByaXZhdGUgd2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgZ3JvdXAtJHtncm91cC5ncm91cElkfWApO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5ncm91cC5ncm91cElkfVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlIHByZXZpZXdHcm91cExpc3RJdGVtVGl0bGVcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiJHt0aGlzLmlzQ3VycmVudEdyb3VwID8gXCJtYXRlcmlhbC1pY29ucyBjaGVja1wiIDogXCJcIn1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uU2hlZXRJdGVtVGV4dFwiPiR7dGhpcy5ncm91cC5ncm91cE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnNob3dXYXRjaGVkQ291bnQgPyBgPGRpdiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFwiPiR7cmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sKHRoaXMuZ3JvdXAsIHRoaXMud2F0Y2hDb3VudERpc3BsYXlNb2RlKX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmFjdGlvblNoZWV0SXRlbVRleHQnKS50aXRsZSA9IHRoaXMuZ3JvdXAuZ3JvdXBOYW1lO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4gY2xpY2tIYW5kbGVyKGUpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5YmFja1JhdGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJyk/LnBsYXliYWNrUmF0ZSB8fCAxO1xufVxuXG5mdW5jdGlvbiB6ZXJvUGFkKG51bTogbnVtYmVyLCBwbGFjZXM6IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgIHJldHVybiBTdHJpbmcobnVtKS5wYWRTdGFydChwbGFjZXMsICcwJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFbmRUaW1lKHJ1bnRpbWVUaWNrczogbnVtYmVyLCBwbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gY29udmVydCBmcm9tIHRpY2tzICgxMDBucyB1bml0cykgdG8gbWlsbGlzZWNvbmRzXG4gICAgcnVudGltZVRpY2tzIC89IDEwMDAwO1xuICAgIHBsYXliYWNrUG9zaXRpb25UaWNrcyAvPSAxMDAwMDtcblxuICAgIGNvbnN0IHJlbWFpbmluZ01zOiBudW1iZXIgPSAocnVudGltZVRpY2tzIC0gcGxheWJhY2tQb3NpdGlvblRpY2tzKSAvIGdldEN1cnJlbnRQbGF5YmFja1JhdGUoKTtcblxuICAgIGxldCB0aWNrczogbnVtYmVyID0gRGF0ZS5ub3coKSArIHJlbWFpbmluZ01zO1xuICAgIHRpY2tzIC09IChuZXcgRGF0ZSgpKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAgKiAxMDAwOyAvLyBhZGp1c3QgZm9yIHRpbWV6b25lXG5cbiAgICBsZXQgaG91cnM6IHN0cmluZyA9IHplcm9QYWQoTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCkpO1xuICAgIGxldCBtaW51dGVzOiBzdHJpbmcgPSB6ZXJvUGFkKE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDYwKSAlIDYwKSk7XG5cbiAgICByZXR1cm4gYEVuZHMgYXQgJHtob3Vyc306JHttaW51dGVzfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbmRUaW1lRGlzcGxheShpdGVtOiBQcmV2aWV3SXRlbSk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZW5kc0F0W2RhdGEtaXRlbS1pZD1cIiR7aXRlbS5JZH1cIl1gKVxuICAgIGlmICghZWxlbWVudCB8fCAhaXRlbS5SdW5UaW1lVGlja3MpIHJldHVyblxuXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGZvcm1hdEVuZFRpbWUoaXRlbS5SdW5UaW1lVGlja3MsIGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKVxufVxuXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbHNUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgaXRlbS0ke2l0ZW0uSWR9YCk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX0tZGV0YWlsc1wiIGNsYXNzPVwiaXRlbU1pc2NJbmZvIGl0ZW1NaXNjSW5mby1wcmltYXJ5IHByZXZpZXdJdGVtRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLlByZW1pZXJlRGF0ZSA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAkeyhuZXcgRGF0ZSh0aGlzLml0ZW0uUHJlbWllcmVEYXRlKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuZ2V0TG9jYWxlKCkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPiR7dGhpcy5mb3JtYXRSdW5UaW1lKHRoaXMuaXRlbS5SdW5UaW1lVGlja3MpfTwvZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNvbW11bml0eVJhdGluZyA/IGA8ZGl2IGNsYXNzPVwic3RhclJhdGluZ0NvbnRhaW5lciBtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgc3Rhckljb24gc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ29tbXVuaXR5UmF0aW5nLnRvRml4ZWQoMSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZyA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbSBtZWRpYUluZm9Dcml0aWNSYXRpbmcgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nID49IDYwID8gJ21lZGlhSW5mb0NyaXRpY1JhdGluZ0ZyZXNoJyA6ICdtZWRpYUluZm9Dcml0aWNSYXRpbmdSb3R0ZW4nfVwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmd9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmRzQXQgbWVkaWFJbmZvSXRlbVwiIGRhdGEtaXRlbS1pZD1cIiR7dGhpcy5pdGVtLklkfVwiPiR7Zm9ybWF0RW5kVGltZSh0aGlzLml0ZW0uUnVuVGltZVRpY2tzLCB0aGlzLml0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMb2NhbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5sYW5ndWFnZXNcbiAgICAgICAgICAgID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXSAvLyBAdHMtaWdub3JlIGZvciB1c2VyTGFuZ3VhZ2UgKHRoaXMgYWRkcyBzdXBwb3J0IGZvciBJRSkgVE9ETzogTW92ZSB0byBpbnRlcmZhY2VcbiAgICAgICAgICAgIDogKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvcm1hdFJ1blRpbWUodGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIGZvcm1hdCB0aGUgdGlja3MgdG8gYSBzdHJpbmcgd2l0aCBtaW51dGVzIGFuZCBob3Vyc1xuICAgICAgICB0aWNrcyAvPSAxMDAwMDsgLy8gY29udmVydCBmcm9tIG1pY3Jvc2Vjb25kcyB0byBtaWxsaXNlY29uZHNcbiAgICAgICAgbGV0IGhvdXJzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyAzNjAwKSAlIDI0KTtcbiAgICAgICAgbGV0IG1pbnV0ZXM6IG51bWJlciA9IE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDYwKSAlIDYwKTtcbiAgICAgICAgbGV0IGhvdXJzU3RyaW5nOiBzdHJpbmcgPSBob3VycyA+IDAgPyBgJHtob3Vyc31oIGAgOiAnJztcbiAgICAgICAgcmV0dXJuIGAke2hvdXJzU3RyaW5nfSR7bWludXRlc31tYDtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7RmF2b3JpdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZVwiXG5pbXBvcnQge1BsYXlTdGF0ZUljb25UZW1wbGF0ZX0gZnJvbSBcIi4vUXVpY2tBY3Rpb25zL1BsYXlTdGF0ZUljb25UZW1wbGF0ZVwiXG5pbXBvcnQge1BsYXlJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9QbGF5SWNvblRlbXBsYXRlXCJcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi4vU2VydmljZXMvUGxheWJhY2tIYW5kbGVyXCJcbmltcG9ydCB7SXRlbURldGFpbHNUZW1wbGF0ZX0gZnJvbSBcIi4vSXRlbURldGFpbHNcIlxuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIlxuaW1wb3J0IHthZGp1c3RXYXRjaGVkQ291bnQsIHRvZ2dsZVBsYXllZFN0YXRlTG9jYWxseSwgdXBkYXRlQmx1ckRvbX0gZnJvbSBcIi4uL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCJcbmltcG9ydCB7RXhwYW5kZWRJdGVtTGF5b3V0fSBmcm9tIFwiLi4vTW9kZWxzL0V4cGFuZGVkSXRlbUxheW91dFwiXG5pbXBvcnQge2NhcnJ5UG9zaXRpb25PdmVyLCBWZXJzaW9uU2VsZWN0VGVtcGxhdGV9IGZyb20gXCIuL1ZlcnNpb25TZWxlY3RUZW1wbGF0ZVwiXG5pbXBvcnQge0l0ZW1WZXJzaW9ufSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0l0ZW1WZXJzaW9uXCJcblxuLy8gU2hvd3MvaGlkZXMgdGhlIFwic3RhcnQgcGxheWJhY2tcIiBvdmVybGF5IGZvciBhIHJlbmRlcmVkIGxpc3QgaXRlbVxuZXhwb3J0IGNvbnN0IHNldEl0ZW1PdmVybGF5QWN0aXZlID0gKGl0ZW1JZDogc3RyaW5nLCBpc0FjdGl2ZTogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJkT3ZlcmxheS0ke2l0ZW1JZH1gKT8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGlzQWN0aXZlKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGF5QnV0dG9uLSR7aXRlbUlkfWApPy50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgaXNBY3RpdmUpXG59XG5cbi8vIFVwZGF0ZXMgb3IgY3JlYXRlcyB0aGUgcHJvZ3Jlc3MgYmFyIG9mIGEgcmVuZGVyZWQgbGlzdCBpdGVtXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbVByb2dyZXNzRG9tID0gKGl0ZW1JZDogc3RyaW5nLCBwZXJjZW50YWdlOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmb3JlZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tJHtpdGVtSWR9YCk/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuaXRlbVByb2dyZXNzQmFyRm9yZWdyb3VuZCcpXG4gICAgaWYgKGZvcmVncm91bmQpIHtcbiAgICAgICAgZm9yZWdyb3VuZC5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnRhZ2V9JWBcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2NhbGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJldmlld0l0ZW1JbWFnZUNhcmQtJHtpdGVtSWR9YCk/LnBhcmVudEVsZW1lbnRcbiAgICBpZiAoIXNjYWxhYmxlIHx8ICFwZXJjZW50YWdlKSByZXR1cm5cbiAgICBzY2FsYWJsZS5xdWVyeVNlbGVjdG9yKCcjY2FyZE92ZXJsYXktJyArIGl0ZW1JZCk/Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLFxuICAgICAgICBgPGRpdiBjbGFzcz1cImlubmVyQ2FyZEZvb3RlciBmdWxsSW5uZXJDYXJkRm9vdGVyIGlubmVyQ2FyZEZvb3RlckNsZWFyIGl0ZW1Qcm9ncmVzc0JhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1Qcm9ncmVzc0JhckZvcmVncm91bmRcIiBzdHlsZT1cIndpZHRoOiR7cGVyY2VudGFnZX0lO1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5gKVxufVxuXG4vLyBTaG93IGEgXCJTaG93IG1vcmVcIiBidXR0b24gaWYgZGVzY3JpcHRpb24gZXhjZWVkcyBtYXggaGVpZ2h0XG5leHBvcnQgY29uc3QgYXBwbHlEZXNjcmlwdGlvblJlYWRNb3JlID0gKGl0ZW1Db250YWluZXI6IEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJylcbiAgICBjb25zdCByZWFkTW9yZUJ1dHRvbiA9IGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uJylcbiAgICBpZiAoIWRlc2NyaXB0aW9uIHx8ICFyZWFkTW9yZUJ1dHRvbikgcmV0dXJuXG5cbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpXG4gICAgcmVhZE1vcmVCdXR0b24udGV4dENvbnRlbnQgPSAnU2hvdyBtb3JlJ1xuXG4gICAgY29uc3QgaXNPdmVyZmxvd2luZyA9IGRlc2NyaXB0aW9uLnNjcm9sbEhlaWdodCA+IGRlc2NyaXB0aW9uLmNsaWVudEhlaWdodFxuICAgIHJlYWRNb3JlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaXNPdmVyZmxvd2luZylcbiAgICBpZiAoIWlzT3ZlcmZsb3dpbmcpIHJldHVyblxuXG4gICAgcmVhZE1vcmVCdXR0b24ub25jbGljayA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpXG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLnRleHRDb250ZW50ID0gZXhwYW5kZWQgPyAnU2hvdyBsZXNzJyA6ICdTaG93IG1vcmUnXG4gICAgfVxufVxuXG4vLyBJbmRleCBudW1iZXIgc3BhbiBmb3IgdGhlIHRpdGxlIHJvdywgZS5nLiBcIjxzcGFuPjE8L3NwYW4+XCIgb3IgXCI8c3Bhbj4xLTI8L3NwYW4+XCIgZm9yIGEgbXVsdGktZXBpc29kZSBmaWxlLlxuLy8gRW1wdHkgZm9yIE1vdmllcywgb3IgaXRlbXMgd2l0aG91dCBhbiBJbmRleE51bWJlci5cbmNvbnN0IGluZGV4TnVtYmVySHRtbCA9IChpdGVtOiBQcmV2aWV3SXRlbSwgZ3JvdXBUeXBlOiBJdGVtVHlwZSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFpdGVtLkluZGV4TnVtYmVyIHx8IGdyb3VwVHlwZSA9PT0gSXRlbVR5cGUuTW92aWUpIHJldHVybiAnJ1xuICAgIFxuICAgIGlmIChpdGVtLkluZGV4TnVtYmVyRW5kICYmIGl0ZW0uSW5kZXhOdW1iZXJFbmQgIT09IGl0ZW0uSW5kZXhOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj4ke2l0ZW0uSW5kZXhOdW1iZXJ9LSR7aXRlbS5JbmRleE51bWJlckVuZH08L3NwYW4+YFxuICAgIH1cblxuICAgIHJldHVybiBgPHNwYW4+JHtpdGVtLkluZGV4TnVtYmVyfTwvc3Bhbj5gXG59XG5cbmV4cG9ydCBjbGFzcyBMaXN0RWxlbWVudFRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHF1aWNrQWN0aW9uQ29udGFpbmVyOiBIVE1MRWxlbWVudFxuICAgIHByaXZhdGUgcGxheVN0YXRlSWNvbjogUGxheVN0YXRlSWNvblRlbXBsYXRlXG4gICAgcHJpdmF0ZSBmYXZvcml0ZUljb246IEZhdm9yaXRlSWNvblRlbXBsYXRlXG4gICAgcHJpdmF0ZSBwbGF5SWNvbj86IFBsYXlJY29uVGVtcGxhdGVcbiAgICBwcml2YXRlIHZlcnNpb25TZWxlY3Q/OiBWZXJzaW9uU2VsZWN0VGVtcGxhdGVcbiAgICBwcml2YXRlIHZlcnNpb25zOiBJdGVtVmVyc2lvbltdID0gW11cbiAgICBwcml2YXRlIGhhc1VzZXJEYXRhUGVyVmVyc2lvbjogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSB2ZXJzaW9uc0xvYWQ/OiBQcm9taXNlPHZvaWQ+XG4gICAgLy8gVmVyc2lvbiB0aGlzIGl0ZW0gcGxheXMgaW4gdGhlIGN1cnJlbnQgc2Vzc2lvbiwgaWYga25vd25cbiAgICBwcml2YXRlIHBsYXlpbmdWZXJzaW9uSWQ/OiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtLCBwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBpdGVtLSR7aXRlbS5JZH1gKVxuXG4gICAgICAgIC8vIGNyZWF0ZSB0ZW1wIHF1aWNrIGFjdGlvbiBjb250YWluZXJcbiAgICAgICAgdGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgLy8gY3JlYXRlIHF1aWNrIGFjdGlvbnNcbiAgICAgICAgdGhpcy5wbGF5U3RhdGVJY29uID0gbmV3IFBsYXlTdGF0ZUljb25UZW1wbGF0ZSh0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLCAtMSwgdGhpcy5pdGVtKVxuICAgICAgICB0aGlzLmZhdm9yaXRlSWNvbiA9IG5ldyBGYXZvcml0ZUljb25UZW1wbGF0ZSh0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLCAwLCB0aGlzLml0ZW0pXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkV4cGFuZEFsbEl0ZW1zKVxuICAgICAgICAgICAgdGhpcy5wbGF5SWNvbiA9IG5ldyBQbGF5SWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIC0xLCB0aGlzLml0ZW0sIHRoaXMuaXRlbS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gYWRkIHF1aWNrIGFjdGlvbnNcbiAgICAgICAgdGhpcy5wbGF5U3RhdGVJY29uLnJlbmRlcigpXG4gICAgICAgIHRoaXMuZmF2b3JpdGVJY29uLnJlbmRlcigpXG4gICAgICAgIHRoaXMucGxheUljb24/LnJlbmRlcigpXG5cbiAgICAgICAgLy8gYWRkIGl0ZW0gZGV0YWlscy9pbmZvXG4gICAgICAgIGNvbnN0IGRldGFpbHNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgZGV0YWlsczogSXRlbURldGFpbHNUZW1wbGF0ZSA9IG5ldyBJdGVtRGV0YWlsc1RlbXBsYXRlKGRldGFpbHNDb250YWluZXIsIC0xLCB0aGlzLml0ZW0pXG4gICAgICAgIGRldGFpbHMucmVuZGVyKClcblxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2VTdHlsZTogc3RyaW5nID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vSXRlbXMvJHt0aGlzLml0ZW0uSWR9L0ltYWdlcy9QcmltYXJ5P3RhZz0ke3RoaXMuaXRlbS5QcmltYXJ5SW1hZ2VUYWd9JylgXG5cbiAgICAgICAgY29uc3Qgc2hvdWxkQmx1cjogYm9vbGVhbiA9ICEodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLk9ubHlCbHVyVW53YXRjaGVkICYmIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWQpXG5cbiAgICAgICAgLy8gT25seSB0YWtlcyBlZmZlY3Qgd2hpbGUgZXZlcnkgaXRlbSBpcyBmb3JjZS1leHBhbmRlZFxuICAgICAgICBjb25zdCB1c2VTaWRlQnlTaWRlTGF5b3V0OiBib29sZWFuID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkV4cGFuZEFsbEl0ZW1zXG4gICAgICAgICAgICAmJiB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXhwYW5kZWRJdGVtTGF5b3V0ID09PSBFeHBhbmRlZEl0ZW1MYXlvdXQuU2lkZUJ5U2lkZVxuXG4gICAgICAgIGNvbnN0IGluZGV4TnVtYmVyOiBzdHJpbmcgPSBpbmRleE51bWJlckh0bWwodGhpcy5pdGVtLCB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIGNvbnN0IHRpdGxlUm93OiBzdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlJHtpbmRleE51bWJlciA/ICcnIDogJyBwcmV2aWV3SXRlbVRpdGxlLW5vSW5kZXgnfVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgJHtpbmRleE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RJdGVtQm9keSBhY3Rpb25zaGVldExpc3RJdGVtQm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25TaGVldEl0ZW1UZXh0XCI+JHt0aGlzLml0ZW0uTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMucXVpY2tBY3Rpb25Db250YWluZXIuaW5uZXJIVE1MfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIGNvbnN0IGltYWdlQ2FyZDogc3RyaW5nID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgb3ZlcmZsb3dCYWNrZHJvcENhcmQgY2FyZC1ob3ZlcmFibGUgY2FyZC13aXRodXNlcmRhdGEgcHJldmlld0l0ZW1JbWFnZUNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZEJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFNjYWxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFBhZGRlciBjYXJkUGFkZGVyLW92ZXJmbG93QmFja2Ryb3AgbGF6eS1oaWRkZW4tY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmRJbWFnZUljb24gbWF0ZXJpYWwtaWNvbnMgdHZcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwcmV2aWV3SXRlbUltYWdlQ2FyZC0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRJbWFnZUNvbnRhaW5lciBjYXJkQ29udGVudCBpdGVtQWN0aW9uIGxhenkgYmx1cmhhc2hlZCBsYXp5LWltYWdlLWZhZGVpbi1mYXN0ICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkJsdXJUaHVtYm5haWwgJiYgc2hvdWxkQmx1ciA/ICdibHVyJyA6ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiJHtiYWNrZ3JvdW5kSW1hZ2VTdHlsZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoUHJvZ3Jlc3MgJiYgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiaW5uZXJDYXJkRm9vdGVyIGZ1bGxJbm5lckNhcmRGb290ZXIgaW5uZXJDYXJkRm9vdGVyQ2xlYXIgaXRlbVByb2dyZXNzQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtUHJvZ3Jlc3NCYXJGb3JlZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6JHt0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZX0lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkT3ZlcmxheS0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5Q29udGFpbmVyIGl0ZW1BY3Rpb24gJHt0aGlzLml0ZW0uSWQgPT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID8gJ2hpZGUnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0LWl0ZW0tJHt0aGlzLml0ZW0uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzPVwicGFwZXItaWNvbi1idXR0b24tbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkT3ZlcmxheUJ1dHRvbiBjYXJkT3ZlcmxheUJ1dHRvbi1ob3ZlciBpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGNhcmRPdmVybGF5RmFiLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJyZXN1bWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjYXJkT3ZlcmxheUJ1dHRvbkljb24gY2FyZE92ZXJsYXlCdXR0b25JY29uLWhvdmVyIHBsYXlfYXJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQmxvY2s6IHN0cmluZyA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJldmlld0l0ZW1EZXNjcmlwdGlvbiAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5CbHVyRGVzY3JpcHRpb24gJiYgc2hvdWxkQmx1ciA/ICdibHVyJyA6ICcnfVwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkRlc2NyaXB0aW9uID8/ICcnfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIGhpZGVcIj5TaG93IG1vcmU8L2J1dHRvbj5cbiAgICAgICAgYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgY29uc3QgY29udGVudFJvdzogc3RyaW5nID0gdXNlU2lkZUJ5U2lkZUxheW91dCA/IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHByZXZpZXdJdGVtQ29udGVudFJvd1wiPlxuICAgICAgICAgICAgICAgICR7aW1hZ2VDYXJkfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGl0bGVSb3d9XG4gICAgICAgICAgICAgICAgICAgICR7ZGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb25CbG9ja31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgIDogYFxuICAgICAgICAgICAgJHtkZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHByZXZpZXdJdGVtQ29udGVudFJvd1wiPlxuICAgICAgICAgICAgICAgICR7aW1hZ2VDYXJkfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb25CbG9ja31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3RJdGVtIGxpc3RJdGVtLWJ1dHRvbiBhY3Rpb25TaGVldE1lbnVJdGVtIGVtYnktYnV0dG9uIHByZXZpZXdMaXN0SXRlbSR7dXNlU2lkZUJ5U2lkZUxheW91dCA/ICcgcHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbS5JZH1cIj5cbiAgICAgICAgICAgICAgICAke3VzZVNpZGVCeVNpZGVMYXlvdXQgPyAnJyA6IHRpdGxlUm93fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3TGlzdEl0ZW1Db250ZW50IGhpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtjb250ZW50Um93fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYXlTdGF0ZUJ1dHRvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheVN0YXRlQnV0dG9uLSR7dGhpcy5pdGVtLklkfWApXG4gICAgICAgIHBsYXlTdGF0ZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgdG9nZ2xlUGxheWVkU3RhdGVMb2NhbGx5KHRoaXMucHJvZ3JhbURhdGFTdG9yZSwgdGhpcy5pdGVtLklkKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJylcbiAgICAgICAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSlcblxuICAgICAgICBjb25zdCBzdGFydFBsYXliYWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnNpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheVNlbGVjdGVkVmVyc2lvbigpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZvaWQgdGhpcy5wbGF5YmFja0hhbmRsZXIucGxheSh0aGlzLml0ZW0uSWQsIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkF1dG9DbG9zZVByZXZpZXcpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFydC1pdGVtLSR7dGhpcy5pdGVtLklkfWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRQbGF5YmFjaylcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXlCdXR0b24tJHt0aGlzLml0ZW0uSWR9YCk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRQbGF5YmFjaylcblxuICAgICAgICBpZiAoKHRoaXMuaXRlbS5NZWRpYVNvdXJjZUNvdW50ID8/IDApID4gMSlcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVmVyc2lvblNlbGVjdCgpXG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbnMgbG9hZCBvbmNlIHRoZSBpdGVtIGdldHMgZXhwYW5kZWQsIG5vdCBmb3IgZXZlcnkgbGlzdGVkIGl0ZW1cbiAgICBwdWJsaWMgZW5zdXJlVmVyc2lvbnNMb2FkZWQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy52ZXJzaW9uU2VsZWN0IHx8IHRoaXMudmVyc2lvbnNMb2FkKSByZXR1cm5cbiAgICAgICAgdGhpcy52ZXJzaW9uc0xvYWQgPSB0aGlzLmxvYWRWZXJzaW9ucygpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgaXNQbGF5aW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLklkID09PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyVmVyc2lvblNlbGVjdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS0ke3RoaXMuaXRlbS5JZH0tZGV0YWlsc2ApXG4gICAgICAgIGlmICghZGV0YWlsc0VsZW1lbnQpIHJldHVyblxuXG4gICAgICAgIHRoaXMudmVyc2lvblNlbGVjdCA9IG5ldyBWZXJzaW9uU2VsZWN0VGVtcGxhdGUoZGV0YWlsc0VsZW1lbnQsIGRldGFpbHNFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCAtIDEsIHRoaXMuaXRlbS5JZCwgdGhpcy5pdGVtLk1lZGlhU291cmNlQ291bnQpXG4gICAgICAgIHRoaXMudmVyc2lvblNlbGVjdC5yZW5kZXIoXG4gICAgICAgICAgICAodmVyc2lvbklkOiBzdHJpbmcpID0+IHRoaXMuc2hvd1ZlcnNpb24odmVyc2lvbklkKSxcbiAgICAgICAgICAgICgpID0+IHRoaXMucGxheVNlbGVjdGVkVmVyc2lvbigpKVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9hZFZlcnNpb25zKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnBsYXliYWNrSGFuZGxlci5nZXRWZXJzaW9ucyh0aGlzLml0ZW0uSWQpXG4gICAgICAgIGlmICghcmVzdWx0IHx8IHJlc3VsdC5WZXJzaW9ucy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb25TZWxlY3QucmVtb3ZlKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52ZXJzaW9ucyA9IHJlc3VsdC5WZXJzaW9uc1xuICAgICAgICB0aGlzLmhhc1VzZXJEYXRhUGVyVmVyc2lvbiA9IHJlc3VsdC5IYXNVc2VyRGF0YVBlclZlcnNpb25cbiAgICAgICAgLy8gVW5rbm93biBwbGF5aW5nIHZlcnNpb246IGZpcnN0IG9uZSBpcyB0aGUgc2VydmVyJ3MgZGVmYXVsdCBwaWNrXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmVyc2lvbiA9ICh0aGlzLmlzUGxheWluZyAmJiB0aGlzLnZlcnNpb25zLmZpbmQodiA9PiB2LklkID09PSByZXN1bHQuQWN0aXZlVmVyc2lvbklkKSkgfHwgdGhpcy52ZXJzaW9uc1swXVxuICAgICAgICB0aGlzLnZlcnNpb25TZWxlY3Quc2V0VmVyc2lvbnModGhpcy52ZXJzaW9ucywgc2VsZWN0ZWRWZXJzaW9uLklkKVxuXG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZCh0aGlzLml0ZW0uSWQpXG4gICAgICAgICAgICBpZiAoaXRlbSkgdGhpcy5zZXRQbGF5aW5nVmVyc2lvbihzZWxlY3RlZFZlcnNpb24sIGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1ZlcnNpb24oc2VsZWN0ZWRWZXJzaW9uLklkKVxuICAgIH1cblxuICAgIHByaXZhdGUgcGxheVNlbGVjdGVkVmVyc2lvbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IHRoaXMudmVyc2lvbnMuZmluZCh2ID0+IHYuSWQgPT09IHRoaXMudmVyc2lvblNlbGVjdC5zZWxlY3RlZFZlcnNpb25JZClcbiAgICAgICAgaWYgKCF2ZXJzaW9uKSByZXR1cm5cblxuICAgICAgICBjb25zdCBpc1BsYXlpbmcgPSB0aGlzLmlzUGxheWluZ1xuICAgICAgICBpZiAoaXNQbGF5aW5nICYmIHZlcnNpb24uSWQgPT09IHRoaXMucGxheWluZ1ZlcnNpb25JZCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJylcbiAgICAgICAgY29uc3QgcG9zaXRpb25UaWNrcyA9IGlzUGxheWluZyAmJiB2aWRlb0VsZW1lbnRcbiAgICAgICAgICAgID8gTWF0aC5mbG9vcih2aWRlb0VsZW1lbnQuY3VycmVudFRpbWUgKiAxMF8wMDBfMDAwKVxuICAgICAgICAgICAgOiB2ZXJzaW9uLkl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzXG5cbiAgICAgICAgLy8gSXRlbSBiZWNvbWVzIHRoZSBwbGF5aW5nIG9uZSwgaXRzIHN0b3JlIGRhdGEgbXVzdCBtYXRjaCB0aGUgc3RhcnRlZCB2ZXJzaW9uIGZvciBwcm9ncmVzcyB0cmFja2luZ1xuICAgICAgICB0aGlzLnNldFBsYXlpbmdWZXJzaW9uKHZlcnNpb24sIHBvc2l0aW9uVGlja3MpXG4gICAgICAgIHRoaXMuc2hvd1ZlcnNpb24odmVyc2lvbi5JZClcblxuICAgICAgICB2b2lkIHRoaXMucGxheWJhY2tIYW5kbGVyLnBsYXkodGhpcy5pdGVtLklkLCBwb3NpdGlvblRpY2tzLCB2ZXJzaW9uLklkKVxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkF1dG9DbG9zZVByZXZpZXcpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlld1BvcHVwJyk/LnJlbW92ZSgpXG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHJ1bnRpbWUsIHByb2dyZXNzIGFuZCBwbGF5ZWQgc3RhdGUgb2YgdGhlIHBsYXlpbmcgdmVyc2lvbiBvbiB0aGlzIGl0ZW1cbiAgICBwcml2YXRlIHNldFBsYXlpbmdWZXJzaW9uKHZlcnNpb246IEl0ZW1WZXJzaW9uLCBwb3NpdGlvblRpY2tzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5aW5nVmVyc2lvbklkID0gdmVyc2lvbi5JZFxuICAgICAgICB0aGlzLnZlcnNpb25TZWxlY3Quc2V0UGxheWluZ1ZlcnNpb24odmVyc2lvbi5JZClcblxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKHRoaXMuaXRlbS5JZClcbiAgICAgICAgaWYgKCFpdGVtKSByZXR1cm5cblxuICAgICAgICBjb25zdCBydW5UaW1lVGlja3MgPSB2ZXJzaW9uLkl0ZW0uUnVuVGltZVRpY2tzIHx8IGl0ZW0uUnVuVGltZVRpY2tzXG4gICAgICAgIGNvbnN0IHBsYXllZCA9IHZlcnNpb24uSXRlbS5Vc2VyRGF0YS5QbGF5ZWRcbiAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIFJ1blRpbWVUaWNrczogcnVuVGltZVRpY2tzLFxuICAgICAgICAgICAgVXNlckRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5pdGVtLlVzZXJEYXRhLFxuICAgICAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogcG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgICAgICBQbGF5ZWRQZXJjZW50YWdlOiBydW5UaW1lVGlja3MgPyAocG9zaXRpb25UaWNrcyAvIHJ1blRpbWVUaWNrcykgKiAxMDAgOiBpdGVtLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICAgICAgUGxheWVkOiBwbGF5ZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYWRqdXN0V2F0Y2hlZENvdW50KHRoaXMucHJvZ3JhbURhdGFTdG9yZSwgaXRlbSwgaXRlbS5Vc2VyRGF0YS5QbGF5ZWQsIHBsYXllZCwgaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MsIHBvc2l0aW9uVGlja3MpXG4gICAgfVxuXG4gICAgLy8gUmVuZGVycyB0aGUgZ2l2ZW4gdmVyc2lvbidzIGRhdGEgaW50byB0aGlzIGl0ZW0uIERpc3BsYXkgb25seSwgcGxheWJhY2sgc3RheXMgdW50b3VjaGVkLlxuICAgIHByaXZhdGUgc2hvd1ZlcnNpb24odmVyc2lvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IHRoaXMudmVyc2lvbnMuZmluZCh2ID0+IHYuSWQgPT09IHZlcnNpb25JZClcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLSR7dGhpcy5pdGVtLklkfWApXG4gICAgICAgIGlmICghdmVyc2lvbiB8fCAhZWxlbWVudCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgaXNQbGF5aW5nVmVyc2lvbiA9IHRoaXMuaXNQbGF5aW5nICYmIHZlcnNpb24uSWQgPT09IHRoaXMucGxheWluZ1ZlcnNpb25JZFxuICAgICAgICBjb25zdCBzdG9yZUl0ZW0gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQodGhpcy5pdGVtLklkKSA/PyB0aGlzLml0ZW1cbiAgICAgICAgLy8gRWxlbWVudCBpZHMgYW5kIGxpdmUgcHJvZ3Jlc3MgdHJhY2tpbmcgdXNlIHRoZSBsaXN0ZWQgaXRlbSdzIGlkXG4gICAgICAgIC8vIFN3aXRjaGluZyBjYXJyaWVzIHRoZSBjdXJyZW50IHBvc2l0aW9uIG92ZXIsIHNvIHRoZSBwbGF5aW5nIGl0ZW0gc2hvd3MgaXQgZm9yIGV2ZXJ5IHZlcnNpb25cbiAgICAgICAgY29uc3QgZGlzcGxheUl0ZW06IFByZXZpZXdJdGVtID0gaXNQbGF5aW5nVmVyc2lvblxuICAgICAgICAgICAgPyB7IC4uLnZlcnNpb24uSXRlbSwgSWQ6IHRoaXMuaXRlbS5JZCwgUnVuVGltZVRpY2tzOiBzdG9yZUl0ZW0uUnVuVGltZVRpY2tzLCBVc2VyRGF0YTogc3RvcmVJdGVtLlVzZXJEYXRhIH1cbiAgICAgICAgICAgIDogdGhpcy5pc1BsYXlpbmdcbiAgICAgICAgICAgICAgICA/IGNhcnJ5UG9zaXRpb25PdmVyKHsgLi4udmVyc2lvbi5JdGVtLCBJZDogdGhpcy5pdGVtLklkIH0sIHN0b3JlSXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpXG4gICAgICAgICAgICAgICAgOiB7IC4uLnZlcnNpb24uSXRlbSwgSWQ6IHRoaXMuaXRlbS5JZCB9XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3SXRlbVRpdGxlIC5hY3Rpb25TaGVldEl0ZW1UZXh0JylcbiAgICAgICAgaWYgKHRpdGxlKSB0aXRsZS50ZXh0Q29udGVudCA9IGRpc3BsYXlJdGVtLk5hbWUgPz8gJydcblxuICAgICAgICAvLyBSZXBsYWNlIHRoZSBkZXRhaWxzIGFyb3VuZCB0aGUgdmVyc2lvbiByb3cuIE1vdmluZyB0aGUgcm93IHdvdWxkIGRyb3AgdGhlIHNlbGVjdCdzIGZvY3VzLlxuICAgICAgICBjb25zdCBkZXRhaWxzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLSR7dGhpcy5pdGVtLklkfS1kZXRhaWxzYClcbiAgICAgICAgY29uc3QgdmVyc2lvblJvdyA9IHRoaXMudmVyc2lvblNlbGVjdC5nZXRFbGVtZW50KClcbiAgICAgICAgaWYgKGRldGFpbHNFbGVtZW50ICYmIHZlcnNpb25Sb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgbmV3IEl0ZW1EZXRhaWxzVGVtcGxhdGUoZGV0YWlsc0NvbnRhaW5lciwgLTEsIGRpc3BsYXlJdGVtKS5yZW5kZXIoKVxuICAgICAgICAgICAgQXJyYXkuZnJvbShkZXRhaWxzRWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IGNoaWxkICE9PSB2ZXJzaW9uUm93KS5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnJlbW92ZSgpKVxuICAgICAgICAgICAgdmVyc2lvblJvdy5iZWZvcmUoLi4uQXJyYXkuZnJvbShkZXRhaWxzQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuKSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFZlcnNpb24gd2l0aG91dCBvd24gaW1hZ2Uga2VlcHMgdGhlIGxpc3RlZCBpdGVtJ3MgaW1hZ2VcbiAgICAgICAgY29uc3QgW2ltYWdlSXRlbUlkLCBpbWFnZVRhZ10gPSB2ZXJzaW9uLkl0ZW0uUHJpbWFyeUltYWdlVGFnXG4gICAgICAgICAgICA/IFt2ZXJzaW9uLkl0ZW0uSWQsIHZlcnNpb24uSXRlbS5QcmltYXJ5SW1hZ2VUYWddXG4gICAgICAgICAgICA6IFt0aGlzLml0ZW0uSWQsIHRoaXMuaXRlbS5QcmltYXJ5SW1hZ2VUYWddXG4gICAgICAgIGNvbnN0IGltYWdlQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmV2aWV3SXRlbUltYWdlQ2FyZC0ke3RoaXMuaXRlbS5JZH1gKVxuICAgICAgICBpZiAoaW1hZ2VDYXJkKSBpbWFnZUNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi4vSXRlbXMvJHtpbWFnZUl0ZW1JZH0vSW1hZ2VzL1ByaW1hcnk/dGFnPSR7aW1hZ2VUYWd9JylgXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJylcbiAgICAgICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQnKVxuICAgICAgICBpZiAoZGVzY3JpcHRpb24gJiYgY29udGVudCkge1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGlzcGxheUl0ZW0uRGVzY3JpcHRpb24gPz8gJydcbiAgICAgICAgICAgIGFwcGx5RGVzY3JpcHRpb25SZWFkTW9yZShjb250ZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hQcm9ncmVzcylcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW1Qcm9ncmVzc0RvbSh0aGlzLml0ZW0uSWQsIGRpc3BsYXlJdGVtLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2UgPz8gMClcbiAgICAgICAgdXBkYXRlQmx1ckRvbSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHRoaXMuaXRlbS5JZCwgZGlzcGxheUl0ZW0uVXNlckRhdGEuUGxheWVkKVxuXG4gICAgICAgIC8vIFBsYXllZC9mYXZvcml0ZSBidXR0b25zIGFjdCBvbiB0aGUgbGlzdGVkIGl0ZW0uIFdpdGggc2VwYXJhdGUgdXNlciBkYXRhIHBlciB2ZXJzaW9uIHRoZXkgZG9uJ3QgbWF0Y2ggYW5vdGhlciB2ZXJzaW9uLlxuICAgICAgICBjb25zdCBxdWlja0FjdGlvbnNNYXRjaFZlcnNpb24gPSAhdGhpcy5oYXNVc2VyRGF0YVBlclZlcnNpb24gfHwgdmVyc2lvbi5JZCA9PT0gdGhpcy5pdGVtLklkXG4gICAgICAgIGZvciAoY29uc3QgYnV0dG9uSWQgb2YgW2BwbGF5U3RhdGVCdXR0b24tJHt0aGlzLml0ZW0uSWR9YCwgYGZhdm9yaXRlQnV0dG9uLSR7dGhpcy5pdGVtLklkfWBdKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uSWQpPy50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgIXF1aWNrQWN0aW9uc01hdGNoVmVyc2lvbilcblxuICAgICAgICB0aGlzLnZlcnNpb25TZWxlY3Quc2V0QnV0dG9uRW5hYmxlZCghaXNQbGF5aW5nVmVyc2lvbilcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge3JlbmRlcldhdGNoZWRDb3VudEludG99IGZyb20gXCIuLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBUaXRsZVRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3UG9wdXBUaXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicG9wdXBUaXRsZVN3aXRjaEljb25cIiBjbGFzcz1cImFjdGlvbnNoZWV0TWVudUl0ZW1JY29uIGxpc3RJdGVtSWNvbiBsaXN0SXRlbUljb24tdHJhbnNwYXJlbnQgbWF0ZXJpYWwtaWNvbnMga2V5Ym9hcmRfYmFja3NwYWNlICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5sZW5ndGggPiAxID8gJycgOiAnaGlkZSd9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImFjdGlvblNoZWV0VGl0bGVcIj48L2gxPlxuICAgICAgICAgICAgICAgICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgPyAnPGRpdiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFwiPjwvZGl2PicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdoMScpXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHRleHRcbiAgICAgICAgdGl0bGUudGl0bGUgPSB0ZXh0XG4gICAgfVxuXG4gICAgcHVibGljIHNldFN3aXRjaGFibGUoc3dpdGNoYWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI3BvcHVwVGl0bGVTd2l0Y2hJY29uJyk/LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhc3dpdGNoYWJsZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0V2F0Y2hlZENvdW50KGdyb3VwOiBHcm91cCkge1xuICAgICAgICBjb25zdCB3YXRjaGVkQ291bnRFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgICAgICBpZiAod2F0Y2hlZENvdW50RWxlbWVudCkgcmVuZGVyV2F0Y2hlZENvdW50SW50byh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHdhdGNoZWRDb3VudEVsZW1lbnQsIGdyb3VwKVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0VmlzaWJsZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KClcbiAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFByZXZpZXdCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBQcmV2aWV3QnV0dG9uJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImF1dG9TaXplIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCIgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXBpc29kZSBQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+XG4gICAgICAgICAgICAgICAgPHN2ZyBpZD1cInN2ZzFcIlxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYgNFwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwibGF5ZXIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3Q0N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NjQ2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzLjc1Njg2NzZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMi4xNjkzNjYxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIwLjIzODIzMzAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIxLjgyNTczMzVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc2NTk3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjAyOTE0MzcsMS4wMzIwNDgyIGggMy43NTI4OTkxIHYgMi4xNzIyMzk0IGwgMC4wMDY3NiwtMi4xNTcyNTk1IHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny04XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc3NDI3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjgyMjg2MTQsMC4yMzg3MTMzNiBoIDMuNzU5MjU5IFYgMi40MTAxMjExIGwgLTAuMDA2OCwtMi4xNzE0MDc3NCB6XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiBhbnkgPT4gY2xpY2tIYW5kbGVyKCkpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ2Zhdm9yaXRlQnV0dG9uLScgKyBpdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXJhdGluZ2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0/LklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuaXRlbT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pc2Zhdm9yaXRlPVwiJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5Jc0Zhdm9yaXRlID8/IGZhbHNlfVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZmF2b3JpdGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIFBsYXlJY29uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtLCBwcml2YXRlIGlzQWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncGxheUJ1dHRvbi0nICsgdGhpcy5pdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXNBY3RpdmUgPyAnZGlzYWJsZWQnIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxheVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgcGxheV9hcnJvd1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi8uLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuXG5leHBvcnQgY2xhc3MgUGxheVN0YXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BsYXlTdGF0ZUJ1dHRvbi0nICsgdGhpcy5pdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXBsYXlzdGF0ZWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0/LklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuaXRlbT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGF5ZWQ9XCIke3RoaXMuaXRlbT8uVXNlckRhdGE/LlBsYXllZCA/PyBmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1hcmsgcGxheWVkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjaGVjayBwbGF5c3RhdGVidXR0b24taWNvbi0ke3RoaXMuaXRlbT8uVXNlckRhdGE/LlBsYXllZCA/IFwicGxheWVkXCIgOiBcInVucGxheWVkXCJ9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgfVxufVxuIiwiY29uc3QgU1BJTk5FUl9MQVlFUlNfSFRNTDogc3RyaW5nID0gWzEsIDIsIDMsIDRdLm1hcChsYXllciA9PlxuICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2xheWVyIG1kbC1zcGlubmVyX19sYXllci0ke2xheWVyfVwiPmAgK1xuICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUtY2xpcHBlciBtZGwtc3Bpbm5lcl9fbGVmdFwiPmAgK1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlIG1kbC1zcGlubmVyX19jaXJjbGVMZWZ0XCI+PC9kaXY+YCArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXIgbWRsLXNwaW5uZXJfX3JpZ2h0XCI+YCArXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUgbWRsLXNwaW5uZXJfX2NpcmNsZVJpZ2h0XCI+PC9kaXY+YCArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICBgPC9kaXY+YFxuKS5qb2luKCcnKVxuXG5leHBvcnQgZnVuY3Rpb24gc3Bpbm5lckh0bWwoZXh0cmFDbGFzc2VzOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8ZGl2IGRpcj1cImx0clwiIGNsYXNzPVwiZG9jc3Bpbm5lciBtZGwtc3Bpbm5lciAke2V4dHJhQ2xhc3Nlc31cIj4ke1NQSU5ORVJfTEFZRVJTX0hUTUx9PC9kaXY+YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVTcGlubmVyKGNvbnRhaW5lcjogUGFyZW50Tm9kZSk6IHZvaWQge1xuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWRsLXNwaW5uZXInKT8uY2xhc3NMaXN0LmFkZCgnbWRsU3Bpbm5lckFjdGl2ZScpXG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge0l0ZW1WZXJzaW9ufSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0l0ZW1WZXJzaW9uXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuXG4vLyBUcnVlIHdoaWxlIHRoZSBwbGF5aW5nIGl0ZW0gc2hvd3MgYSB2ZXJzaW9uIG90aGVyIHRoYW4gdGhlIHBsYXlpbmcgb25lXG5leHBvcnQgY29uc3QgaXNQcmV2aWV3aW5nT3RoZXJWZXJzaW9uID0gKGl0ZW1JZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHZlcnNpb25TZWxlY3QtJHtpdGVtSWR9YCkgYXMgSFRNTFNlbGVjdEVsZW1lbnQgfCBudWxsXG4gICAgY29uc3QgcGxheWluZ1ZlcnNpb25JZCA9IHNlbGVjdD8uZGF0YXNldC5wbGF5aW5nVmVyc2lvbklkXG4gICAgcmV0dXJuICEhcGxheWluZ1ZlcnNpb25JZCAmJiBzZWxlY3QudmFsdWUgIT09IHBsYXlpbmdWZXJzaW9uSWRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkVmVyc2lvblJ1blRpbWVUaWNrcyA9IChpdGVtSWQ6IHN0cmluZyk6IG51bWJlciB8IHVuZGVmaW5lZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHZlcnNpb25TZWxlY3QtJHtpdGVtSWR9YCkgYXMgSFRNTFNlbGVjdEVsZW1lbnQgfCBudWxsXG4gICAgcmV0dXJuIE51bWJlcihzZWxlY3Q/LnNlbGVjdGVkT3B0aW9uc1swXT8uZGF0YXNldC5ydW5UaW1lVGlja3MpIHx8IHVuZGVmaW5lZFxufVxuXG4vLyBTd2l0Y2hpbmcga2VlcHMgdGhlIHBsYXliYWNrIHBvc2l0aW9uLiBQb3NpdGlvbiBpcyBjbGFtcGVkIHRvIHRoZSBpdGVtJ3MgcnVudGltZS5cbmV4cG9ydCBjb25zdCBjYXJyeVBvc2l0aW9uT3ZlciA9IChpdGVtOiBQcmV2aWV3SXRlbSwgcG9zaXRpb25UaWNrczogbnVtYmVyKTogUHJldmlld0l0ZW0gPT4ge1xuICAgIGNvbnN0IGNsYW1wZWRQb3NpdGlvblRpY2tzID0gaXRlbS5SdW5UaW1lVGlja3MgPyBNYXRoLm1pbihNYXRoLm1heChwb3NpdGlvblRpY2tzLCAwKSwgaXRlbS5SdW5UaW1lVGlja3MpIDogcG9zaXRpb25UaWNrc1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLml0ZW0sXG4gICAgICAgIFVzZXJEYXRhOiB7XG4gICAgICAgICAgICAuLi5pdGVtLlVzZXJEYXRhLFxuICAgICAgICAgICAgUGxheWJhY2tQb3NpdGlvblRpY2tzOiBjbGFtcGVkUG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IGl0ZW0uUnVuVGltZVRpY2tzID8gKGNsYW1wZWRQb3NpdGlvblRpY2tzIC8gaXRlbS5SdW5UaW1lVGlja3MpICogMTAwIDogaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWZXJzaW9uU2VsZWN0VGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0SWQ6IHN0cmluZ1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYnV0dG9uSWQ6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIGl0ZW1JZDogc3RyaW5nLCBwcml2YXRlIHZlcnNpb25Db3VudDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgdmVyc2lvblJvdy0ke2l0ZW1JZH1gKVxuICAgICAgICB0aGlzLnNlbGVjdElkID0gYHZlcnNpb25TZWxlY3QtJHtpdGVtSWR9YFxuICAgICAgICB0aGlzLmJ1dHRvbklkID0gYHZlcnNpb25QbGF5QnV0dG9uLSR7aXRlbUlkfWBcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBQbGFpbiBzZWxlY3QgaW5zdGVhZCBvZiBpcz1cImVtYnktc2VsZWN0XCIuIGVtYnktc2VsZWN0IGFkZHMgaXRzIG93biBsYWJlbCBhbmQgb3BlbnMgYW4gYWN0aW9uIHNoZWV0IG9uIFRWIGxheW91dHMuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJmbGV4IHByZXZpZXdWZXJzaW9uUm93XCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIiR7dGhpcy5zZWxlY3RJZH1cIiBjbGFzcz1cImVtYnktc2VsZWN0LXdpdGhjb2xvciBwcmV2aWV3VmVyc2lvblNlbGVjdFwiIHRpdGxlPVwiVmVyc2lvblwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiR7dGhpcy52ZXJzaW9uQ291bnR9IHZlcnNpb25zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5idXR0b25JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b24gcHJldmlld1ZlcnNpb25QbGF5QnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlN3aXRjaCB0byB0aGlzIHZlcnNpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBzd2FwX2hvcml6XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNoYW5nZUhhbmRsZXI6ICh2ZXJzaW9uSWQ6IHN0cmluZykgPT4gdm9pZCwgcGxheUhhbmRsZXI6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuXG4gICAgICAgIC8vIEtlZXAgdGhlIGxpc3QgaXRlbSdzIGNsaWNrIGhhbmRsZXIgZnJvbSBjb2xsYXBzaW5nL3Njcm9sbGluZyB0aGUgbGlzdFxuICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKVxuICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNoYW5nZUhhbmRsZXIodGhpcy5zZWxlY3QudmFsdWUpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHBsYXlIYW5kbGVyKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmVyc2lvbnModmVyc2lvbnM6IEl0ZW1WZXJzaW9uW10sIHNlbGVjdGVkVmVyc2lvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgLy8gT3B0aW9uIGNvbnN0cnVjdG9yIGVzY2FwZXMgbmFtZXMgdGFrZW4gZnJvbSBmaWxlIG5hbWVzXG4gICAgICAgIHRoaXMuc2VsZWN0LnJlcGxhY2VDaGlsZHJlbiguLi52ZXJzaW9ucy5tYXAoKHZlcnNpb24sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG5ldyBPcHRpb24odmVyc2lvbi5OYW1lIHx8IGBWZXJzaW9uICR7aSArIDF9YCwgdmVyc2lvbi5JZClcbiAgICAgICAgICAgIG9wdGlvbi5kYXRhc2V0LnJ1blRpbWVUaWNrcyA9IFN0cmluZyh2ZXJzaW9uLkl0ZW0uUnVuVGltZVRpY2tzID8/ICcnKVxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvblxuICAgICAgICB9KSlcbiAgICAgICAgdGhpcy5zZWxlY3QudmFsdWUgPSBzZWxlY3RlZFZlcnNpb25JZFxuICAgICAgICB0aGlzLnNlbGVjdC5kaXNhYmxlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZFZlcnNpb25JZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3QudmFsdWVcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGxheWluZ1ZlcnNpb24odmVyc2lvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuZGF0YXNldC5wbGF5aW5nVmVyc2lvbklkID0gdmVyc2lvbklkXG4gICAgfVxuXG4gICAgcHVibGljIHNldEJ1dHRvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmJ1dHRvbi5kaXNhYmxlZCA9ICFlbmFibGVkXG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCk/LnJlbW92ZSgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgc2VsZWN0KCk6IEhUTUxTZWxlY3RFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2VsZWN0SWQpIGFzIEhUTUxTZWxlY3RFbGVtZW50XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgYnV0dG9uKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYnV0dG9uSWQpIGFzIEhUTUxCdXR0b25FbGVtZW50XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gRW5kcG9pbnRzIHtcbiAgICBCQVNFID0gXCJJblBsYXllclByZXZpZXdcIixcbiAgICBQTEFZX01FRElBID0gXCIvSXRlbXMve2l0ZW1JZH0vUGxheS97dGlja3N9XCIsXG4gICAgTk9XX1BMQVlJTkdfSVRFTSA9IFwiL05vd1BsYXlpbmdJdGVtXCIsXG4gICAgU0VSVkVSX1NFVFRJTkdTID0gXCIvU2VydmVyU2V0dGluZ3NcIixcbiAgICBJVEVNX1BSRVZJRVdfVFlQRSA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vSXRlbXMve2l0ZW1JZH0vUHJldmlld0l0ZW1UeXBlXCIsXG4gICAgSVRFTV9QUkVWSUVXX0RBVEEgPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L0l0ZW1zL3tpdGVtSWR9L1ByZXZpZXdEYXRhXCIsXG4gICAgR1JPVVBfSVRFTVMgPSBcIi9Vc2Vycy97dXNlcklkfS9Hcm91cHMve2dyb3VwSWR9L0l0ZW1zXCIsXG4gICAgR1JPVVBfV0FUQ0hFRF9DT1VOVCA9IFwiL1VzZXJzL3t1c2VySWR9L0dyb3Vwcy97Z3JvdXBJZH0vV2F0Y2hlZENvdW50XCIsXG4gICAgQ09OVEFJTklOR19DT0xMRUNUSU9OUyA9IFwiL1VzZXJzL3t1c2VySWR9L0l0ZW1zL3tpdGVtSWR9L0NvbnRhaW5pbmdDb2xsZWN0aW9uc1wiLFxuICAgIElURU1fVkVSU0lPTlMgPSBcIi9Vc2Vycy97dXNlcklkfS9JdGVtcy97aXRlbUlkfS9WZXJzaW9uc1wiLFxuICAgIFNFVF9TT1VSQ0VfQ09MTEVDVElPTiA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vU291cmNlQ29sbGVjdGlvbi97Y29sbGVjdGlvbklkfVwiLFxuICAgIFBMVUdJTl9TRVRUSU5HUyA9IFwiL1BsdWdpblNldHRpbmdzXCJcbn0iLCJpbXBvcnQge2FwcGx5RGVzY3JpcHRpb25SZWFkTW9yZSwgTGlzdEVsZW1lbnRUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9MaXN0RWxlbWVudFRlbXBsYXRlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtHcm91cCwgVU5LTk9XTl9XQVRDSEVEX0NPVU5UfSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7R3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL0dyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQb3B1cFRpdGxlVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlXCI7XG5pbXBvcnQge1BsYXliYWNrSGFuZGxlcn0gZnJvbSBcIi4vU2VydmljZXMvUGxheWJhY2tIYW5kbGVyXCI7XG5pbXBvcnQge0VuZHBvaW50c30gZnJvbSBcIi4vRW5kcG9pbnRzXCI7XG5pbXBvcnQge0dyb3VwSXRlbXNSZXN1bHR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cEl0ZW1zUmVzdWx0XCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7YWN0aXZhdGVTcGlubmVyLCBzcGlubmVySHRtbH0gZnJvbSBcIi4vQ29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQge3VwZGF0ZVdhdGNoZWRDb3VudERvbX0gZnJvbSBcIi4vU2VydmljZXMvRGF0YUZldGNoZXJcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9TZXJ2aWNlcy9Mb2dnZXJcIjtcblxuLy8gVGhlIGJhY2tlbmQgYWxyZWFkeSByZXR1cm5zIFBsYXlsaXN0cy9Cb3hTZXRzIGFuZCBGb2xkZXJzIGluIHRoZWlyIG93biBtYW51YWwgaXRlbS9kaXNzcGxheSBvcmRlclxuLy8gc29ydGluZyBzaG91bGQgb25seSBhcHBseSBmb3Igc2Vhc29uLWJhc2VkIChFcGlzb2RlKSBncm91cHMsIHdoZXJlIGl0IHJlZmxlY3RzIGFjdHVhbCBlcGlzb2RlIG9yZGVyLlxuY29uc3QgcHJlc2VydmVCYWNrZW5kT3JkZXJUeXBlczogU2V0PEl0ZW1UeXBlPiA9IG5ldyBTZXQoW0l0ZW1UeXBlLlBsYXlsaXN0LCBJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLkZvbGRlciwgSXRlbVR5cGUuTW92aWVdKVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHsgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtczogUHJldmlld0l0ZW1bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIgPSAwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBGb3IgUGxheWxpc3RzL0JveFNldHMsIHNob3cgdGhlIGFjdHVhbCBsaXN0IHBvc2l0aW9uIGluc3RlYWQgb2YgdGhlIEluZGV4TnVtYmVyIGZyb20gdGhlaXIgc2Vhc29uL2VwaXNvZGUuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcHJlc2VydmVPcmRlciA/IHsgLi4uaXRlbXNbaV0sIEluZGV4TnVtYmVyOiBvZmZzZXQgKyBpICsgMSwgSW5kZXhOdW1iZXJFbmQ6IHVuZGVmaW5lZCB9IDogaXRlbXNbaV1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVySXRlbShpdGVtLCBwYXJlbnREaXYsIG9mZnNldCArIGkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIHByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXM6IFByZXZpZXdJdGVtW10sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIG9mZnNldDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcmVzZXJ2ZU9yZGVyID8geyAuLi5pdGVtc1tpXSwgSW5kZXhOdW1iZXI6IG9mZnNldCArIGkgKyAxLCBJbmRleE51bWJlckVuZDogdW5kZWZpbmVkIH0gOiBpdGVtc1tpXVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIHBhcmVudERpdiwgLTEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXZlYWxzIGFuIGl0ZW0ncyBjb250ZW50XG4gICAgcHJpdmF0ZSBleHBhbmRJdGVtKGl0ZW1Db250YWluZXI6IEVsZW1lbnQsIG1hcmtTZWxlY3RlZDogYm9vbGVhbiwgdGVtcGxhdGU6IExpc3RFbGVtZW50VGVtcGxhdGUpOiB2b2lkIHtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGlmIChtYXJrU2VsZWN0ZWQpIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICBhcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbUNvbnRhaW5lcik7XG4gICAgICAgIHRlbXBsYXRlLmVuc3VyZVZlcnNpb25zTG9hZGVkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByZW5kZXJJdGVtKGl0ZW06IFByZXZpZXdJdGVtLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBpdGVtTGlzdEVsZW1lbnRUZW1wbGF0ZSA9IG5ldyBMaXN0RWxlbWVudFRlbXBsYXRlKHBhcmVudERpdiwgcG9zaXRpb25BZnRlckluZGV4LCBpdGVtLCB0aGlzLnBsYXliYWNrSGFuZGxlciwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlKTtcbiAgICAgICAgaXRlbUxpc3RFbGVtZW50VGVtcGxhdGUucmVuZGVyKChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAvLyB3aGVuIGV2ZXJ5IGl0ZW0gaXMgYWxyZWFkeSBleHBhbmRlZCwgdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gdG9nZ2xlXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkV4cGFuZEFsbEl0ZW1zKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGhpZGUgaXRlbSBjb250ZW50IGZvciBhbGwgZXhpc3RpbmcgaXRlbXMgaW4gdGhlIHByZXZpZXcgbGlzdFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50XCIpLmZvckVhY2goKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyOiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tJHtpdGVtLklkfWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZEl0ZW0oaXRlbUNvbnRhaW5lciwgdHJ1ZSwgaXRlbUxpc3RFbGVtZW50VGVtcGxhdGUpO1xuXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1Ob2RlOiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tJHtpdGVtLklkfWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XG4gICAgICAgIGlmICh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXhwYW5kQWxsSXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbShpdGVtTm9kZSwgaXRlbS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQsIGl0ZW1MaXN0RWxlbWVudFRlbXBsYXRlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLklkID09PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRJdGVtKGl0ZW1Ob2RlLCB0cnVlLCBpdGVtTGlzdEVsZW1lbnRUZW1wbGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVNwaW5uZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgncHJldmlld1Njcm9sbFNwaW5uZXInKVxuICAgICAgICBzcGlubmVyLmlubmVySFRNTCA9IHNwaW5uZXJIdG1sKClcbiAgICAgICAgYWN0aXZhdGVTcGlubmVyKHNwaW5uZXIpXG4gICAgICAgIHJldHVybiBzcGlubmVyXG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgYXR0YWNoU2Nyb2xsUGFnaW5hdGlvbihcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgbG9hZFBhZ2U6IChzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4sXG4gICAgICAgIHZpZXdUb2tlbjogbnVtYmVyLFxuICAgICAgICBpbml0aWFsVG90YWxMb2FkZWQ6IG51bWJlcixcbiAgICAgICAgaW5pdGlhbFRvdGFsUmVjb3JkQ291bnQ6IG51bWJlcixcbiAgICAgICAgaW5pdGlhbExvYWRlZFN0YXJ0SW5kZXg6IG51bWJlclxuICAgICk6IHZvaWQge1xuICAgICAgICBjb25zdCBTQ1JPTExfVFJJR0dFUl9ESVNUQU5DRV9QWCA9IDIwMFxuXG4gICAgICAgIGxldCB0b3RhbExvYWRlZCA9IGluaXRpYWxUb3RhbExvYWRlZFxuICAgICAgICBsZXQgdG90YWxSZWNvcmRDb3VudCA9IGluaXRpYWxUb3RhbFJlY29yZENvdW50XG4gICAgICAgIGxldCBsb2FkZWRTdGFydEluZGV4ID0gaW5pdGlhbExvYWRlZFN0YXJ0SW5kZXhcbiAgICAgICAgbGV0IGxvYWRpbmdGb3J3YXJkID0gZmFsc2VcbiAgICAgICAgbGV0IGxvYWRpbmdCYWNrd2FyZCA9IGZhbHNlXG5cbiAgICAgICAgY29uc3QgbG9hZE5leHRQYWdlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgbG9hZGluZ0ZvcndhcmQgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCBzcGlubmVyID0gdGhpcy5jcmVhdGVTcGlubmVyRWxlbWVudCgpXG4gICAgICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoc3Bpbm5lcilcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1zLCB0b3RhbFJlY29yZENvdW50OiBuZXdUb3RhbFJlY29yZENvdW50IH0gPSBhd2FpdCBsb2FkUGFnZSh0b3RhbExvYWRlZClcbiAgICAgICAgICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtcywgcGFyZW50RGl2LCB0b3RhbExvYWRlZClcbiAgICAgICAgICAgICAgICB0b3RhbExvYWRlZCArPSBpdGVtcy5sZW5ndGhcbiAgICAgICAgICAgICAgICB0b3RhbFJlY29yZENvdW50ID0gbmV3VG90YWxSZWNvcmRDb3VudFxuXG4gICAgICAgICAgICAgICAgLy8gVGhlIG5ld2x5IGxvYWRlZCBwYWdlIG1pZ2h0IHN0aWxsIG5vdCBmaWxsIHRoZSBjb250YWluZXIsIHNvIHJlLWNoZWNrIHJpZ2h0IGF3YXkuXG4gICAgICAgICAgICAgICAgY2hlY2tTY3JvbGxQb3NpdGlvbigpXG4gICAgICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIG5leHQgcGFnZSBvZiBpdGVtcyAoc3RhcnRJbmRleCAke3RvdGFsTG9hZGVkfSlgLCBleClcbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdGb3J3YXJkID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRQcmV2aW91c1BhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBsb2FkaW5nQmFja3dhcmQgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHRCZWZvcmVTcGlubmVyID0gcGFyZW50RGl2LnNjcm9sbEhlaWdodFxuICAgICAgICAgICAgY29uc3Qgc3Bpbm5lciA9IHRoaXMuY3JlYXRlU3Bpbm5lckVsZW1lbnQoKVxuICAgICAgICAgICAgcGFyZW50RGl2Lmluc2VydEJlZm9yZShzcGlubmVyLCBwYXJlbnREaXYuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIHBhcmVudERpdi5zY3JvbGxUb3AgKz0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIHNjcm9sbEhlaWdodEJlZm9yZVNwaW5uZXJcblxuICAgICAgICAgICAgY29uc3QgcGFnZVNpemUgPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICBjb25zdCBuZXdTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgbG9hZGVkU3RhcnRJbmRleCAtIHBhZ2VTaXplKVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IGxvYWRQYWdlKG5ld1N0YXJ0SW5kZXgpXG4gICAgICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHRCZWZvcmVQcmVwZW5kID0gcGFyZW50RGl2LnNjcm9sbEhlaWdodFxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXMsIHBhcmVudERpdiwgbmV3U3RhcnRJbmRleClcbiAgICAgICAgICAgICAgICBwYXJlbnREaXYuc2Nyb2xsVG9wICs9IHBhcmVudERpdi5zY3JvbGxIZWlnaHQgLSBzY3JvbGxIZWlnaHRCZWZvcmVQcmVwZW5kXG4gICAgICAgICAgICAgICAgbG9hZGVkU3RhcnRJbmRleCA9IG5ld1N0YXJ0SW5kZXhcblxuICAgICAgICAgICAgICAgIGNoZWNrU2Nyb2xsUG9zaXRpb24oKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCBwcmV2aW91cyBwYWdlIG9mIGl0ZW1zIChzdGFydEluZGV4ICR7bmV3U3RhcnRJbmRleH0pYCwgZXgpXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5yZW1vdmUoKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nQmFja3dhcmQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tTY3JvbGxQb3NpdGlvbiA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkge1xuICAgICAgICAgICAgICAgIHBhcmVudERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbFBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZWFyQm90dG9tID0gcGFyZW50RGl2LnNjcm9sbFRvcCArIHBhcmVudERpdi5jbGllbnRIZWlnaHQgPj0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIFNDUk9MTF9UUklHR0VSX0RJU1RBTkNFX1BYXG4gICAgICAgICAgICBpZiAoIWxvYWRpbmdGb3J3YXJkICYmIHRvdGFsTG9hZGVkIDwgdG90YWxSZWNvcmRDb3VudCAmJiBuZWFyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgbG9hZE5leHRQYWdlKClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmVhclRvcCA9IHBhcmVudERpdi5zY3JvbGxUb3AgPD0gU0NST0xMX1RSSUdHRVJfRElTVEFOQ0VfUFhcbiAgICAgICAgICAgIGlmICghbG9hZGluZ0JhY2t3YXJkICYmIGxvYWRlZFN0YXJ0SW5kZXggPiAwICYmIG5lYXJUb3ApIHtcbiAgICAgICAgICAgICAgICBsb2FkUHJldmlvdXNQYWdlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudERpdi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbFBvc2l0aW9uKVxuICAgICAgICBjaGVja1Njcm9sbFBvc2l0aW9uKClcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlTGF6eUl0ZW1MaXN0KFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBsb2FkUGFnZTogKHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PixcbiAgICAgICAgdmlld1Rva2VuOiBudW1iZXIsXG4gICAgICAgIGluaXRpYWxQYWdlPzogR3JvdXBJdGVtc1Jlc3VsdCxcbiAgICAgICAgaW5pdGlhbE9mZnNldDogbnVtYmVyID0gMFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBmaXJzdFBhZ2UgPSBpbml0aWFsUGFnZSA/PyBhd2FpdCBsb2FkUGFnZSgwKVxuICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJdGVtRWxlbWVudHMoZmlyc3RQYWdlLml0ZW1zLCBwYXJlbnREaXYsIGluaXRpYWxPZmZzZXQpXG5cbiAgICAgICAgY29uc3QgdG90YWxMb2FkZWQgPSBpbml0aWFsT2Zmc2V0ICsgZmlyc3RQYWdlLml0ZW1zLmxlbmd0aFxuICAgICAgICB0aGlzLmF0dGFjaFNjcm9sbFBhZ2luYXRpb24ocGFyZW50RGl2LCBsb2FkUGFnZSwgdmlld1Rva2VuLCB0b3RhbExvYWRlZCwgZmlyc3RQYWdlLnRvdGFsUmVjb3JkQ291bnQsIGluaXRpYWxPZmZzZXQpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmZXRjaEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwSWQ6IHN0cmluZyk6IFByb21pc2U8eyBwbGF5ZWRJdGVtQ291bnQ6IG51bWJlciwgdG90YWxJdGVtQ291bnQ6IG51bWJlciwgcGxheWVkUnVudGltZVRpY2tzOiBudW1iZXIsIHRvdGFsUnVudGltZVRpY2tzOiBudW1iZXIgfT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5HUk9VUF9XQVRDSEVEX0NPVU5UfWBcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgne2dyb3VwSWR9JywgZ3JvdXBJZCkpXG4gICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGxheWVkSXRlbUNvdW50OiByYXcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgdG90YWxJdGVtQ291bnQ6IHJhdy5Ub3RhbEl0ZW1Db3VudCxcbiAgICAgICAgICAgIHBsYXllZFJ1bnRpbWVUaWNrczogcmF3LlBsYXllZFJ1bnRpbWVUaWNrcyxcbiAgICAgICAgICAgIHRvdGFsUnVudGltZVRpY2tzOiByYXcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBlbnN1cmVHcm91cFdhdGNoZWRDb3VudChncm91cDogR3JvdXApOiBQcm9taXNlPEdyb3VwPiB7XG4gICAgICAgIGlmIChncm91cC5wbGF5ZWRJdGVtQ291bnQgIT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkgcmV0dXJuIGdyb3VwXG5cbiAgICAgICAgY29uc3QgeyBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50LCBwbGF5ZWRSdW50aW1lVGlja3MsIHRvdGFsUnVudGltZVRpY2tzIH0gPSBhd2FpdCB0aGlzLmZldGNoR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXAuZ3JvdXBJZClcbiAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnNldEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwLmdyb3VwSWQsIHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQsIHBsYXllZFJ1bnRpbWVUaWNrcywgdG90YWxSdW50aW1lVGlja3MpXG4gICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50LCBwbGF5ZWRSdW50aW1lVGlja3MsIHRvdGFsUnVudGltZVRpY2tzIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlR3JvdXBFbGVtZW50cyhcbiAgICAgICAgZ3JvdXBzOiBHcm91cFtdLFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBjdXJyZW50R3JvdXBJbmRleDogbnVtYmVyLFxuICAgICAgICB0aXRsZUNvbnRhaW5lcjogUG9wdXBUaXRsZVRlbXBsYXRlLFxuICAgICAgICBsb2FkSXRlbXM6IChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PlxuICAgICk6IHZvaWQge1xuICAgICAgICBncm91cHMuc29ydCgoYSwgYikgPT4gYS5pbmRleE51bWJlciAtIGIuaW5kZXhOdW1iZXIpXG5cbiAgICAgICAgLy8gSW52YWxpZGF0ZXMgYW55IGl0ZW0gbG9hZCBzdGlsbCBpbiBwcm9ncmVzc3NcbiAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmJlZ2luTmV3VmlldygpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlKHBhcmVudERpdiwgaSwgZ3JvdXBzW2ldLCBncm91cHNbaV0uaW5kZXhOdW1iZXIgPT09IGN1cnJlbnRHcm91cEluZGV4LCB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLldhdGNoQ291bnREaXNwbGF5TW9kZSlcbiAgICAgICAgICAgIGdyb3VwLnJlbmRlcihhc3luYyAoZTogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cElkID0gZ3JvdXBzW2ldLmdyb3VwSWRcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRUZXh0KGdyb3Vwc1tpXS5ncm91cE5hbWUpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFdhdGNoZWRDb3VudChncm91cHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cHNbaV0ucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHVwZGF0ZWQgPT4gdGl0bGVDb250YWluZXIuc2V0V2F0Y2hlZENvdW50KHVwZGF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXg6IHVua25vd24pID0+IHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHdhdGNoZWQgY291bnQgZm9yIGdyb3VwICR7Z3JvdXBzW2ldLmdyb3VwSWR9YCwgZXgpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFZpc2libGUodHJ1ZSlcblxuICAgICAgICAgICAgICAgIHBhcmVudERpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdUb2tlbiA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkID0gIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0dyb3Vwc0NhY2hlRXhwaXJlZFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuZmluZChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXBzW2ldLmdyb3VwSWQpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFBhZ2U6IEdyb3VwSXRlbXNSZXN1bHQgfCB1bmRlZmluZWQgPSBjYWNoZWQ/LmxvYWRlZFN0YXJ0SW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IHsgaXRlbXM6IFsuLi5jYWNoZWQuaXRlbXNdLCB0b3RhbFJlY29yZENvdW50OiBjYWNoZWQubG9hZGVkVG90YWxSZWNvcmRDb3VudCA/PyBjYWNoZWQuaXRlbXMubGVuZ3RoIH1cbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsT2Zmc2V0ID0gY2FjaGVkPy5sb2FkZWRTdGFydEluZGV4ID8/IDBcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlTGF6eUl0ZW1MaXN0KHBhcmVudERpdiwgKHN0YXJ0SW5kZXgpID0+IGxvYWRJdGVtcyhncm91cHNbaV0uZ3JvdXBJZCwgc3RhcnRJbmRleCksIHZpZXdUb2tlbiwgaW5pdGlhbFBhZ2UsIGluaXRpYWxPZmZzZXQpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgaXRlbXMgZm9yIGdyb3VwICR7Z3JvdXBzW2ldLmdyb3VwSWR9YCwgZXgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50ICYmIGdyb3Vwc1tpXS5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHVwZGF0ZVdhdGNoZWRDb3VudERvbSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHVwZGF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCB3YXRjaGVkIGNvdW50IGZvciBncm91cCAke2dyb3Vwc1tpXS5ncm91cElkfWAsIGV4KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBlbnVtIEV4cGFuZGVkSXRlbUxheW91dCB7XG4gICAgRGVmYXVsdCA9IDAsXG4gICAgU2lkZUJ5U2lkZSA9IDEsXG59XG4iLCJleHBvcnQgZW51bSBJdGVtVHlwZSB7XG4gICAgQWdncmVnYXRlRm9sZGVyLFxuICAgIEF1ZGlvLFxuICAgIEF1ZGlvQm9vayxcbiAgICBCYXNlUGx1Z2luRm9sZGVyLFxuICAgIEJvb2ssXG4gICAgQm94U2V0LFxuICAgIENoYW5uZWwsXG4gICAgQ2hhbm5lbEZvbGRlckl0ZW0sXG4gICAgQ29sbGVjdGlvbkZvbGRlcixcbiAgICBFcGlzb2RlLFxuICAgIEZvbGRlcixcbiAgICBHZW5yZSxcbiAgICBNYW51YWxQbGF5bGlzdHNGb2xkZXIsXG4gICAgTW92aWUsXG4gICAgTGl2ZVR2Q2hhbm5lbCxcbiAgICBMaXZlVHZQcm9ncmFtLFxuICAgIE11c2ljQWxidW0sXG4gICAgTXVzaWNBcnRpc3QsXG4gICAgTXVzaWNHZW5yZSxcbiAgICBNdXNpY1ZpZGVvLFxuICAgIFBlcnNvbixcbiAgICBQaG90byxcbiAgICBQaG90b0FsYnVtLFxuICAgIFBsYXlsaXN0LFxuICAgIFBsYXlsaXN0c0ZvbGRlcixcbiAgICBQcm9ncmFtLFxuICAgIFJlY29yZGluZyxcbiAgICBTZWFzb24sXG4gICAgU2VyaWVzLFxuICAgIFN0dWRpbyxcbiAgICBUcmFpbGVyLFxuICAgIFR2Q2hhbm5lbCxcbiAgICBUdlByb2dyYW0sXG4gICAgVXNlclJvb3RGb2xkZXIsXG4gICAgVXNlclZpZXcsXG4gICAgVmlkZW8sXG4gICAgWWVhclxufSIsImV4cG9ydCBlbnVtIExvZ0xldmVsIHtcbiAgICBOb25lID0gMCxcbiAgICBFcnJvciA9IDEsXG4gICAgSW5mb3JtYXRpb24gPSAyLFxuICAgIERlYnVnID0gMyxcbn1cbiIsImltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL0l0ZW1UeXBlXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4vV2F0Y2hDb3VudERpc3BsYXlNb2RlXCI7XG5pbXBvcnQge0xvZ0xldmVsfSBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xuaW1wb3J0IHtFeHBhbmRlZEl0ZW1MYXlvdXR9IGZyb20gXCIuL0V4cGFuZGVkSXRlbUxheW91dFwiO1xuXG5leHBvcnQgdHlwZSBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICBFbmFibGVkSXRlbVR5cGVzOiBJdGVtVHlwZVtdLFxuICAgIEJsdXJEZXNjcmlwdGlvbjogYm9vbGVhbixcbiAgICBCbHVyVGh1bWJuYWlsOiBib29sZWFuLFxuICAgIEVwaXNvZGVQYWdlU2l6ZTogbnVtYmVyLFxuICAgIFNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4sXG4gICAgV2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUsXG4gICAgU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zOiBib29sZWFuLFxuICAgIERpc3BsYXlNb3ZpZUZvbGRlclNpYmxpbmdzOiBib29sZWFuLFxuICAgIE9ubHlCbHVyVW53YXRjaGVkOiBib29sZWFuLFxuICAgIFNob3dXYXRjaFByb2dyZXNzOiBib29sZWFuLFxuICAgIEV4cGFuZEFsbEl0ZW1zOiBib29sZWFuLFxuICAgIEV4cGFuZGVkSXRlbUxheW91dDogRXhwYW5kZWRJdGVtTGF5b3V0LFxuICAgIEF1dG9DbG9zZVByZXZpZXc6IGJvb2xlYW4sXG4gICAgTG9nTGV2ZWw6IExvZ0xldmVsLFxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFBsdWdpblNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICBFbmFibGVkSXRlbVR5cGVzOiBbSXRlbVR5cGUuU2VyaWVzLCBJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLk1vdmllLCBJdGVtVHlwZS5WaWRlb10sXG4gICAgQmx1ckRlc2NyaXB0aW9uOiBmYWxzZSxcbiAgICBCbHVyVGh1bWJuYWlsOiBmYWxzZSxcbiAgICBFcGlzb2RlUGFnZVNpemU6IDEwLFxuICAgIFNob3dXYXRjaGVkQ291bnQ6IHRydWUsXG4gICAgV2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUuSG91cnNNaW51dGVzLFxuICAgIFNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9uczogdHJ1ZSxcbiAgICBEaXNwbGF5TW92aWVGb2xkZXJTaWJsaW5nczogZmFsc2UsXG4gICAgT25seUJsdXJVbndhdGNoZWQ6IGZhbHNlLFxuICAgIFNob3dXYXRjaFByb2dyZXNzOiB0cnVlLFxuICAgIEV4cGFuZEFsbEl0ZW1zOiBmYWxzZSxcbiAgICBFeHBhbmRlZEl0ZW1MYXlvdXQ6IEV4cGFuZGVkSXRlbUxheW91dC5EZWZhdWx0LFxuICAgIEF1dG9DbG9zZVByZXZpZXc6IHRydWUsXG4gICAgTG9nTGV2ZWw6IExvZ0xldmVsLkluZm9ybWF0aW9uLFxufSIsImltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuL1ByZXZpZXdJdGVtXCI7XG5cbmV4cG9ydCB0eXBlIEdyb3VwID0ge1xuICAgIGdyb3VwSWQ6IHN0cmluZ1xuICAgIGdyb3VwTmFtZTogc3RyaW5nXG4gICAgaXRlbXM6IFByZXZpZXdJdGVtW11cbiAgICBpbmRleE51bWJlcjogbnVtYmVyXG4gICAgcGxheWVkSXRlbUNvdW50OiBudW1iZXJcbiAgICB0b3RhbEl0ZW1Db3VudDogbnVtYmVyXG4gICAgcGxheWVkUnVudGltZVRpY2tzOiBudW1iZXJcbiAgICB0b3RhbFJ1bnRpbWVUaWNrczogbnVtYmVyXG4gICAgbG9hZGVkU3RhcnRJbmRleD86IG51bWJlclxuICAgIGxvYWRlZEVuZEluZGV4PzogbnVtYmVyXG4gICAgbG9hZGVkVG90YWxSZWNvcmRDb3VudD86IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgVU5LTk9XTl9XQVRDSEVEX0NPVU5UID0gLTFcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFdhdGNoZWRDb3VudCA9IChwbGF5ZWRJdGVtQ291bnQ6IG51bWJlciwgdG90YWxJdGVtQ291bnQ6IG51bWJlcik6IHN0cmluZyA9PlxuICAgIHBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UIHx8IHRvdGFsSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlRcbiAgICAgICAgPyAn4oCmIHdhdGNoZWQnXG4gICAgICAgIDogYCR7cGxheWVkSXRlbUNvdW50fS8ke3RvdGFsSXRlbUNvdW50fSB3YXRjaGVkYFxuXG4iLCJpbXBvcnQge2Zvcm1hdFdhdGNoZWRDb3VudCwgR3JvdXAsIFVOS05PV05fV0FUQ0hFRF9DT1VOVH0gZnJvbSBcIi4vR3JvdXBcIjtcbmltcG9ydCB7V2F0Y2hDb3VudERpc3BsYXlNb2RlfSBmcm9tIFwiLi4vV2F0Y2hDb3VudERpc3BsYXlNb2RlXCI7XG5cbmNvbnN0IFRJQ0tTX1BFUl9TRUNPTkQgPSAxMF8wMDBfMDAwXG5cbmNvbnN0IGdldFRpbWVTdHJpbmcgPSAodGlja3M6IG51bWJlciwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBzZWNvbmRzID0gdGlja3MgLyBUSUNLU19QRVJfU0VDT05EXG4gICAgY29uc3QgdG90YWxNaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApXG4gICAgY29uc3QgdG90YWxIb3VycyA9IE1hdGguZmxvb3IodG90YWxNaW51dGVzIC8gNjApXG4gICAgY29uc3QgdG90YWxEYXlzID0gTWF0aC5mbG9vcih0b3RhbEhvdXJzIC8gMjQpXG4gICAgY29uc3QgdG90YWxNb250aHMgPSBNYXRoLmZsb29yKHRvdGFsRGF5cyAvIDMwKVxuICAgIGNvbnN0IHRvdGFsWWVhcnMgPSBNYXRoLmZsb29yKHRvdGFsRGF5cyAvIDM2NSlcblxuICAgIGlmIChtb2RlID09PSBXYXRjaENvdW50RGlzcGxheU1vZGUuSG91cnNNaW51dGVzKSB7XG4gICAgICAgIGlmICh0b3RhbEhvdXJzID49IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSB0b3RhbE1pbnV0ZXMgJSA2MFxuICAgICAgICAgICAgcmV0dXJuIG1pbnV0ZXMgPiAwID8gYCR7dG90YWxIb3Vyc31oICR7bWludXRlc31tYCA6IGAke3RvdGFsSG91cnN9aGBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG90YWxNaW51dGVzID4gMCA/IGAke3RvdGFsTWludXRlc31tYCA6ICcwbSdcbiAgICB9XG5cbiAgICBpZiAodG90YWxZZWFycyA+PSAxKSB7XG4gICAgICAgIGNvbnN0IG1vbnRocyA9IE1hdGguZmxvb3IoKHRvdGFsRGF5cyAlIDM2NSkgLyAzMClcbiAgICAgICAgcmV0dXJuIG1vbnRocyA+IDAgPyBgJHt0b3RhbFllYXJzfXkgJHttb250aHN9bW9gIDogYCR7dG90YWxZZWFyc315YFxuICAgIH1cbiAgICBpZiAodG90YWxNb250aHMgPj0gMSkge1xuICAgICAgICBjb25zdCBkYXlzID0gdG90YWxEYXlzICUgMzBcbiAgICAgICAgcmV0dXJuIGRheXMgPiAwID8gYCR7dG90YWxNb250aHN9bW8gJHtkYXlzfWRgIDogYCR7dG90YWxNb250aHN9bW9gXG4gICAgfVxuICAgIGlmICh0b3RhbERheXMgPj0gMSkge1xuICAgICAgICBjb25zdCBob3VycyA9IHRvdGFsSG91cnMgJSAyNFxuICAgICAgICByZXR1cm4gaG91cnMgPiAwID8gYCR7dG90YWxEYXlzfWQgJHtob3Vyc31oYCA6IGAke3RvdGFsRGF5c31kYFxuICAgIH1cbiAgICBpZiAodG90YWxIb3VycyA+PSAxKSB7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSB0b3RhbE1pbnV0ZXMgJSA2MFxuICAgICAgICByZXR1cm4gbWludXRlcyA+IDAgPyBgJHt0b3RhbEhvdXJzfWggJHttaW51dGVzfW1gIDogYCR7dG90YWxIb3Vyc31oYFxuICAgIH1cbiAgICByZXR1cm4gdG90YWxNaW51dGVzID4gMCA/IGAke3RvdGFsTWludXRlc31tYCA6ICcwbSdcbn1cblxuY29uc3QgY2xhbXBQcm9ncmVzcyA9IChwcm9ncmVzczogbnVtYmVyKTogbnVtYmVyID0+IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgTWF0aC5yb3VuZChwcm9ncmVzcykpKVxuXG5leHBvcnQgY29uc3QgZ2V0V2F0Y2hQcm9ncmVzc1BlcmNlbnQgPSAoZ3JvdXA6IEdyb3VwLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBudW1iZXIgPT4ge1xuICAgIGlmIChtb2RlID09PSBXYXRjaENvdW50RGlzcGxheU1vZGUuQ291bnQpIHtcbiAgICAgICAgaWYgKCFncm91cC50b3RhbEl0ZW1Db3VudCkgcmV0dXJuIDBcbiAgICAgICAgcmV0dXJuIGNsYW1wUHJvZ3Jlc3MoKGdyb3VwLnBsYXllZEl0ZW1Db3VudCAvIGdyb3VwLnRvdGFsSXRlbUNvdW50KSAqIDEwMClcbiAgICB9XG5cbiAgICBpZiAoIWdyb3VwLnRvdGFsUnVudGltZVRpY2tzKSByZXR1cm4gMFxuICAgIHJldHVybiBjbGFtcFByb2dyZXNzKChncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgLyBncm91cC50b3RhbFJ1bnRpbWVUaWNrcykgKiAxMDApXG59XG5cbmV4cG9ydCBjb25zdCBpc1dhdGNoZWRDb3VudFVua25vd24gPSAoZ3JvdXA6IEdyb3VwLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBib29sZWFuID0+IHtcbiAgICBpZiAoZ3JvdXAucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQgfHwgZ3JvdXAudG90YWxJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVClcbiAgICAgICAgcmV0dXJuIHRydWVcblxuICAgIHJldHVybiBtb2RlICE9PSBXYXRjaENvdW50RGlzcGxheU1vZGUuQ291bnRcbiAgICAgICAgJiYgKGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UIHx8IGdyb3VwLnRvdGFsUnVudGltZVRpY2tzID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRXYXRjaGVkQ291bnRUZXh0ID0gKGdyb3VwOiBHcm91cCwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogc3RyaW5nID0+IHtcbiAgICBpZiAobW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkNvdW50KVxuICAgICAgICByZXR1cm4gZm9ybWF0V2F0Y2hlZENvdW50KGdyb3VwLnBsYXllZEl0ZW1Db3VudCwgZ3JvdXAudG90YWxJdGVtQ291bnQpXG5cbiAgICBpZiAobW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLlBlcmNlbnRhZ2UpXG4gICAgICAgIHJldHVybiBgJHtnZXRXYXRjaFByb2dyZXNzUGVyY2VudChncm91cCwgbW9kZSl9JWBcblxuICAgIGNvbnN0IHNhZmVUb3RhbCA9IE1hdGgubWF4KDAsIGdyb3VwLnRvdGFsUnVudGltZVRpY2tzIHx8IDApXG4gICAgY29uc3Qgc2FmZVBsYXllZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHNhZmVUb3RhbCwgZ3JvdXAucGxheWVkUnVudGltZVRpY2tzIHx8IDApKVxuICAgIHJldHVybiBgJHtnZXRUaW1lU3RyaW5nKHNhZmVQbGF5ZWQsIG1vZGUpfSAvICR7Z2V0VGltZVN0cmluZyhzYWZlVG90YWwsIG1vZGUpfWBcbn1cblxuLy8gUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL24wMGJjb2RyL0plbGx5ZmluLUVuaGFuY2VkL2Jsb2IvbWFpbi9KZWxseWZpbi5QbHVnaW4uSmVsbHlmaW5FbmhhbmNlZC9qcy9lbmhhbmNlZC9pdGVtZGV0YWlscy9mZWF0dXJlcy1kZXRhaWxzLW1lZGlhLWluZm8uanNcbmNvbnN0IGdldFdhdGNoUHJvZ3Jlc3NJY29uSHRtbCA9IChwcm9ncmVzczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiA4IC8vIHJhZGl1cyA9IDhcbiAgICBjb25zdCBvZmZzZXQgPSBjaXJjdW1mZXJlbmNlIC0gKHByb2dyZXNzIC8gMTAwKSAqIGNpcmN1bWZlcmVuY2VcblxuICAgIGlmIChwcm9ncmVzcyA+PSAxMDApIHtcbiAgICAgICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDAuM2VtOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGZsZXgtc2hyaW5rOiAwO1wiPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk05LjUgMTUuNWwtMy0zIDEuNC0xLjRMOS41IDEyLjdsNS42LTUuNiAxLjQgMS40elwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgICAgIDwvc3ZnPmBcbiAgICB9XG5cbiAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMC4zZW07IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgZmxleC1zaHJpbms6IDA7XCI+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIG9wYWNpdHk9XCIwLjJcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICBzdHlsZT1cInN0cm9rZS1kYXNoYXJyYXk6ICR7Y2lyY3VtZmVyZW5jZX07IHN0cm9rZS1kYXNob2Zmc2V0OiAke29mZnNldH07IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XCIvPlxuICAgIDwvc3ZnPmBcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlcldhdGNoZWRDb3VudElubmVySHRtbCA9IChncm91cDogR3JvdXAsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKGlzV2F0Y2hlZENvdW50VW5rbm93bihncm91cCwgbW9kZSkpXG4gICAgICAgIHJldHVybiBgJHtnZXRXYXRjaFByb2dyZXNzSWNvbkh0bWwoMCl9PHNwYW4gY2xhc3M9XCJwcmV2aWV3R3JvdXBXYXRjaGVkQ291bnRUZXh0XCI+LCwsPC9zcGFuPmBcblxuICAgIGNvbnN0IHByb2dyZXNzID0gZ2V0V2F0Y2hQcm9ncmVzc1BlcmNlbnQoZ3JvdXAsIG1vZGUpXG4gICAgcmV0dXJuIGAke2dldFdhdGNoUHJvZ3Jlc3NJY29uSHRtbChwcm9ncmVzcyl9PHNwYW4gY2xhc3M9XCJwcmV2aWV3R3JvdXBXYXRjaGVkQ291bnRUZXh0XCI+JHtmb3JtYXRXYXRjaGVkQ291bnRUZXh0KGdyb3VwLCBtb2RlKX08L3NwYW4+YFxufVxuXG4vLyBDeWNsZXMgQ291bnQgLT4gVGltZSAtPiBQZXJjZW50YWdlLiBUaGUgdGltZSBmb3JtYXQgZm9sbG93cyB0aGUgcGx1Z2luIHNldHRpbmcsIEhvdXJzTWludXRlcyB1bmxlc3MgaXQgaXMgQWxsVW5pdHMuXG5leHBvcnQgY29uc3QgbmV4dFdhdGNoQ291bnREaXNwbGF5TW9kZSA9IChtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUsIGRlZmF1bHRNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBXYXRjaENvdW50RGlzcGxheU1vZGUgPT4ge1xuICAgIGNvbnN0IHRpbWVNb2RlID0gZGVmYXVsdE1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5BbGxVbml0cyA/IFdhdGNoQ291bnREaXNwbGF5TW9kZS5BbGxVbml0cyA6IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Ib3Vyc01pbnV0ZXNcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgY2FzZSBXYXRjaENvdW50RGlzcGxheU1vZGUuQ291bnQ6IHJldHVybiB0aW1lTW9kZVxuICAgICAgICBjYXNlIFdhdGNoQ291bnREaXNwbGF5TW9kZS5QZXJjZW50YWdlOiByZXR1cm4gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkNvdW50XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBXYXRjaENvdW50RGlzcGxheU1vZGUuUGVyY2VudGFnZVxuICAgIH1cbn1cbiIsImV4cG9ydCB0eXBlIFNlcnZlclNldHRpbmdzID0ge1xuICAgIE1pblJlc3VtZVBjdDogbnVtYmVyLCBcbiAgICBNYXhSZXN1bWVQY3Q6IG51bWJlciwgXG4gICAgTWluUmVzdW1lRHVyYXRpb25TZWNvbmRzOiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXJ2ZXJTZXR0aW5nczogU2VydmVyU2V0dGluZ3MgPSB7XG4gICAgTWluUmVzdW1lUGN0OiA1LFxuICAgIE1heFJlc3VtZVBjdDogOTAsXG4gICAgTWluUmVzdW1lRHVyYXRpb25TZWNvbmRzOiAzMDBcbn0iLCJleHBvcnQgZW51bSBXYXRjaENvdW50RGlzcGxheU1vZGUge1xuICAgIENvdW50ID0gMCxcbiAgICBIb3Vyc01pbnV0ZXMgPSAxLFxuICAgIEFsbFVuaXRzID0gMixcbiAgICBQZXJjZW50YWdlID0gMyxcbn1cbiIsImltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtuZXh0V2F0Y2hDb3VudERpc3BsYXlNb2RlLCByZW5kZXJXYXRjaGVkQ291bnRJbm5lckh0bWx9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvV2F0Y2hQcm9ncmVzc1wiO1xuXG50eXBlIFVzZXJEYXRhQ2hhbmdlZEVudHJ5ID0ge1xuICAgIEl0ZW1JZDogc3RyaW5nXG4gICAgUGxheWVkOiBib29sZWFuXG4gICAgSXNGYXZvcml0ZTogYm9vbGVhblxuICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyXG4gICAgUGxheWVkUGVyY2VudGFnZT86IG51bWJlclxufVxuXG50eXBlIFdlYlNvY2tldE1lc3NhZ2UgPSB7XG4gICAgTWVzc2FnZVR5cGU6IHN0cmluZ1xuICAgIERhdGE6IGFueVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2F0Y2hlZENvdW50SW50byhwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBlbGVtZW50OiBIVE1MRWxlbWVudCwgZ3JvdXA6IEdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgbW9kZSA9IGVsZW1lbnQuZGF0YXNldC5tb2RlICE9PSB1bmRlZmluZWQgPyBOdW1iZXIoZWxlbWVudC5kYXRhc2V0Lm1vZGUpIDogcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5XYXRjaENvdW50RGlzcGxheU1vZGVcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHJlbmRlcldhdGNoZWRDb3VudElubmVySHRtbChncm91cCwgbW9kZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN5Y2xlV2F0Y2hlZENvdW50TW9kZShwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBlbGVtZW50OiBIVE1MRWxlbWVudCwgZ3JvdXA6IEdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudCA9IGVsZW1lbnQuZGF0YXNldC5tb2RlICE9PSB1bmRlZmluZWQgPyBOdW1iZXIoZWxlbWVudC5kYXRhc2V0Lm1vZGUpIDogcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5XYXRjaENvdW50RGlzcGxheU1vZGVcbiAgICBlbGVtZW50LmRhdGFzZXQubW9kZSA9IFN0cmluZyhuZXh0V2F0Y2hDb3VudERpc3BsYXlNb2RlKGN1cnJlbnQsIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuV2F0Y2hDb3VudERpc3BsYXlNb2RlKSlcbiAgICByZW5kZXJXYXRjaGVkQ291bnRJbnRvKHByb2dyYW1EYXRhU3RvcmUsIGVsZW1lbnQsIGdyb3VwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlV2F0Y2hlZENvdW50RG9tKHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGdyb3VwOiBHcm91cCk6IHZvaWQge1xuICAgIGlmIChncm91cC5ncm91cElkID09PSBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQpIHtcbiAgICAgICAgY29uc3QgcG9wdXBXYXRjaGVkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpPy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCcpXG4gICAgICAgIGlmIChwb3B1cFdhdGNoZWRDb3VudCkgcmVuZGVyV2F0Y2hlZENvdW50SW50byhwcm9ncmFtRGF0YVN0b3JlLCBwb3B1cFdhdGNoZWRDb3VudCwgZ3JvdXApXG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBMaXN0V2F0Y2hlZENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGdyb3VwLSR7Z3JvdXAuZ3JvdXBJZH1gKT8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgIGlmIChncm91cExpc3RXYXRjaGVkQ291bnQpIHJlbmRlcldhdGNoZWRDb3VudEludG8ocHJvZ3JhbURhdGFTdG9yZSwgZ3JvdXBMaXN0V2F0Y2hlZENvdW50LCBncm91cClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJsdXJEb20ocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgaXRlbUlkOiBzdHJpbmcsIHBsYXllZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHNldHRpbmdzID0gcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5nc1xuICAgIGNvbnN0IHNob3VsZEJsdXIgPSAhKHNldHRpbmdzLk9ubHlCbHVyVW53YXRjaGVkICYmIHBsYXllZClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJldmlld0l0ZW1JbWFnZUNhcmQtJHtpdGVtSWR9YCk/LmNsYXNzTGlzdC50b2dnbGUoJ2JsdXInLCBzZXR0aW5ncy5CbHVyVGh1bWJuYWlsICYmIHNob3VsZEJsdXIpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tJHtpdGVtSWR9YCk/LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJyk/LmNsYXNzTGlzdC50b2dnbGUoJ2JsdXInLCBzZXR0aW5ncy5CbHVyRGVzY3JpcHRpb24gJiYgc2hvdWxkQmx1cilcbn1cblxuZnVuY3Rpb24gcGxheWVkUnVudGltZUNvbnRyaWJ1dGlvbihpdGVtOiBQcmV2aWV3SXRlbSwgcGxheWVkOiBib29sZWFuLCBwbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHBsYXllZCA/IChpdGVtLlJ1blRpbWVUaWNrcyA/PyAwKSA6IHBsYXliYWNrUG9zaXRpb25UaWNrc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0V2F0Y2hlZENvdW50KFxuICAgIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsXG4gICAgaXRlbTogUHJldmlld0l0ZW0sXG4gICAgd2FzUGxheWVkOiBib29sZWFuLFxuICAgIGlzUGxheWVkOiBib29sZWFuLFxuICAgIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyLFxuICAgIG5ld1BsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyXG4pOiB2b2lkIHtcbiAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCkgcmV0dXJuXG5cbiAgICBjb25zdCBkZWx0YVBsYXllZENvdW50ID0gTnVtYmVyKGlzUGxheWVkKSAtIE51bWJlcih3YXNQbGF5ZWQpXG4gICAgY29uc3QgZGVsdGFQbGF5ZWRSdW50aW1lVGlja3MgPVxuICAgICAgICBwbGF5ZWRSdW50aW1lQ29udHJpYnV0aW9uKGl0ZW0sIGlzUGxheWVkLCBuZXdQbGF5YmFja1Bvc2l0aW9uVGlja3MpIC1cbiAgICAgICAgcGxheWVkUnVudGltZUNvbnRyaWJ1dGlvbihpdGVtLCB3YXNQbGF5ZWQsIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcylcbiAgICBpZiAoZGVsdGFQbGF5ZWRDb3VudCA9PT0gMCAmJiBkZWx0YVBsYXllZFJ1bnRpbWVUaWNrcyA9PT0gMCkgcmV0dXJuXG5cbiAgICBjb25zdCB1cGRhdGVkR3JvdXAgPSBwcm9ncmFtRGF0YVN0b3JlLmFkanVzdEdyb3VwV2F0Y2hTdGF0cyhpdGVtLklkLCBkZWx0YVBsYXllZENvdW50LCBkZWx0YVBsYXllZFJ1bnRpbWVUaWNrcylcbiAgICBpZiAodXBkYXRlZEdyb3VwKSB1cGRhdGVXYXRjaGVkQ291bnREb20ocHJvZ3JhbURhdGFTdG9yZSwgdXBkYXRlZEdyb3VwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUGxheWVkU3RhdGVMb2NhbGx5KHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGl0ZW1JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaXRlbTogUHJldmlld0l0ZW0gPSBwcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKGl0ZW1JZClcbiAgICBpZiAoIWl0ZW0pIHJldHVyblxuXG4gICAgY29uc3Qgd2FzUGxheWVkID0gaXRlbS5Vc2VyRGF0YS5QbGF5ZWRcbiAgICBjb25zdCBpc1BsYXllZCA9ICF3YXNQbGF5ZWRcbiAgICBjb25zdCBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3MgPSBpdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrc1xuICAgIGNvbnN0IG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcyA9IGlzUGxheWVkID8gMCA6IG9sZFBsYXliYWNrUG9zaXRpb25UaWNrc1xuXG4gICAgcHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgVXNlckRhdGE6IHsgLi4uaXRlbS5Vc2VyRGF0YSwgUGxheWVkOiBpc1BsYXllZCwgUGxheWJhY2tQb3NpdGlvblRpY2tzOiBuZXdQbGF5YmFja1Bvc2l0aW9uVGlja3MgfVxuICAgIH0pXG4gICAgdXBkYXRlQmx1ckRvbShwcm9ncmFtRGF0YVN0b3JlLCBpdGVtSWQsIGlzUGxheWVkKVxuICAgIGFkanVzdFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLCBpdGVtLCB3YXNQbGF5ZWQsIGlzUGxheWVkLCBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3MsIG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcylcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFGZXRjaGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUpIHtcbiAgICAgICAgRXZlbnRzLm9uKEFwaUNsaWVudCwgJ21lc3NhZ2UnLCAoX2V2ZW50LCBtZXNzYWdlOiBXZWJTb2NrZXRNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5NZXNzYWdlVHlwZSAhPT0gJ1VzZXJEYXRhQ2hhbmdlZCcpIHJldHVyblxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuRGF0YS5Vc2VySWQgIT09IEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCkpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YUxpc3Q6IFVzZXJEYXRhQ2hhbmdlZEVudHJ5W10gPSBtZXNzYWdlLkRhdGEuVXNlckRhdGFMaXN0ID8/IFtdXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVzZXJEYXRhIG9mIHVzZXJEYXRhTGlzdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW06IFByZXZpZXdJdGVtID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKHVzZXJEYXRhLkl0ZW1JZClcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB3YXNQbGF5ZWQgPSBpdGVtLlVzZXJEYXRhLlBsYXllZFxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcyA9IGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICBVc2VyRGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbS5Vc2VyRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllZDogdXNlckRhdGEuUGxheWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgSXNGYXZvcml0ZTogdXNlckRhdGEuSXNGYXZvcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogdXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVkUGVyY2VudGFnZTogdXNlckRhdGEuUGxheWVkUGVyY2VudGFnZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHVwZGF0ZUJsdXJEb20odGhpcy5wcm9ncmFtRGF0YVN0b3JlLCB1c2VyRGF0YS5JdGVtSWQsIHVzZXJEYXRhLlBsYXllZClcbiAgICAgICAgICAgICAgICBhZGp1c3RXYXRjaGVkQ291bnQodGhpcy5wcm9ncmFtRGF0YVN0b3JlLCBpdGVtLCB3YXNQbGF5ZWQsIHVzZXJEYXRhLlBsYXllZCwgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzLCB1c2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHtMb2dMZXZlbH0gZnJvbSBcIi4uL01vZGVscy9Mb2dMZXZlbFwiO1xuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgICBwcml2YXRlIGxvZ0xldmVsOiBMb2dMZXZlbCA9IExvZ0xldmVsLkluZm9ybWF0aW9uXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ19wcmVmaXg6IHN0cmluZyA9IFwiW0luUGxheWVyRXBpc29kZVByZXZpZXddXCIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9nTGV2ZWwobGV2ZWw6IExvZ0xldmVsKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTGV2ZWwgPSBsZXZlbFxuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPCBMb2dMZXZlbC5EZWJ1ZykgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxvZ0xldmVsIDwgTG9nTGV2ZWwuRXJyb3IpIHJldHVyblxuICAgICAgICBjb25zb2xlLmVycm9yKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxvZ0xldmVsIDwgTG9nTGV2ZWwuSW5mb3JtYXRpb24pIHJldHVyblxuICAgICAgICBjb25zb2xlLmluZm8oYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi4vRW5kcG9pbnRzXCI7XG5pbXBvcnQge0l0ZW1WZXJzaW9uc1Jlc3VsdH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9JdGVtVmVyc2lvblwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWJhY2tIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7IH1cblxuICAgIGFzeW5jIHBsYXkoaXRlbUlkOiBzdHJpbmcsIHN0YXJ0UG9zaXRpb25UaWNrczogbnVtYmVyLCBtZWRpYVNvdXJjZUlkPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkIHwgUmVzcG9uc2U+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLlBMQVlfTUVESUF9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW1JZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3RpY2tzfScsIHN0YXJ0UG9zaXRpb25UaWNrcy50b1N0cmluZygpKSxcbiAgICAgICAgICAgICAgICBtZWRpYVNvdXJjZUlkID8geyBtZWRpYVNvdXJjZUlkIH0gOiB1bmRlZmluZWQpXG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwgfSlcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3Qgc3RhcnQgdGhlIHBsYXliYWNrIG9mIGFuIGl0ZW1gLCBleClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFZlcnNpb25zKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTxJdGVtVmVyc2lvbnNSZXN1bHQgfCBudWxsPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX1ZFUlNJT05TfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW1JZCkpXG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHRoZSB2ZXJzaW9ucyBvZiBpdGVtICR7aXRlbUlkfWAsIGV4KVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7UHJvZ3JhbURhdGF9IGZyb20gXCIuLi9Nb2RlbHMvUHJvZ3JhbURhdGFcIjtcbmltcG9ydCB7R3JvdXAsIFVOS05PV05fV0FUQ0hFRF9DT1VOVH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHtEZWZhdWx0UGx1Z2luU2V0dGluZ3MsIFBsdWdpblNldHRpbmdzfSBmcm9tIFwiLi4vTW9kZWxzL1BsdWdpblNldHRpbmdzXCI7XG5pbXBvcnQge0RlZmF1bHRTZXJ2ZXJTZXR0aW5ncywgU2VydmVyU2V0dGluZ3N9IGZyb20gXCIuLi9Nb2RlbHMvU2VydmVyU2V0dGluZ3NcIjtcblxuY29uc3QgR1JPVVBTX0NBQ0hFX1RUTCA9IDUgKiA2MCAqIDEwMDBcblxuLy8gSXRlbSBUeXBlIG1hcHBpbmdzIGZvciB0aGUgVHlwZXMgc2VsZWN0YWJsZSBpbiB0aGUgUGx1Z2luIENvbmZpZ3VyYXRpb25cbmNvbnN0IFBSRVZJRVdfVFlQRV9HUk9VUFM6IFBhcnRpYWw8UmVjb3JkPEl0ZW1UeXBlLCBJdGVtVHlwZVtdPj4gPSB7XG4gICAgW0l0ZW1UeXBlLlNlcmllc106IFtJdGVtVHlwZS5TZXJpZXMsIEl0ZW1UeXBlLlNlYXNvbiwgSXRlbVR5cGUuRXBpc29kZV0sXG4gICAgW0l0ZW1UeXBlLkJveFNldF06IFtJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLlBsYXlsaXN0XSxcbiAgICBbSXRlbVR5cGUuVmlkZW9dOiBbSXRlbVR5cGUuVmlkZW8sIEl0ZW1UeXBlLkZvbGRlcl1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2dyYW1EYXRhU3RvcmUge1xuICAgIHByaXZhdGUgX3Byb2dyYW1EYXRhOiBQcm9ncmFtRGF0YVxuICAgIHByaXZhdGUgX3ZpZXdUb2tlbjogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgX2dyb3Vwc0NhY2hlZEF0OiBudW1iZXIgfCBudWxsID0gbnVsbFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhID0ge1xuICAgICAgICAgICAgYWN0aXZlTWVkaWFTb3VyY2VJZDogJycsXG4gICAgICAgICAgICBhY3RpdmVHcm91cElkOiAnJyxcbiAgICAgICAgICAgIGJveFNldE5hbWU6ICcnLFxuICAgICAgICAgICAgdHlwZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIHBsdWdpblNldHRpbmdzOiBEZWZhdWx0UGx1Z2luU2V0dGluZ3MsXG4gICAgICAgICAgICBzZXJ2ZXJTZXR0aW5nczogRGVmYXVsdFNlcnZlclNldHRpbmdzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZU1lZGlhU291cmNlSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZU1lZGlhU291cmNlSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZU1lZGlhU291cmNlSWQoYWN0aXZlTWVkaWFTb3VyY2VJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBhY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVHcm91cElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVHcm91cElkXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhY3RpdmVHcm91cElkKGFjdGl2ZUdyb3VwSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVHcm91cElkID0gYWN0aXZlR3JvdXBJZFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlR3JvdXAoKTogR3JvdXAge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHMuZmluZChncm91cCA9PiBncm91cC5ncm91cElkID09PSB0aGlzLmFjdGl2ZUdyb3VwSWQpXG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0eXBlKCk6IEl0ZW1UeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLnR5cGVcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHR5cGUodHlwZTogSXRlbVR5cGUpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEudHlwZSA9IHR5cGVcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJveFNldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmJveFNldE5hbWVcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJveFNldE5hbWUoYm94U2V0TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmJveFNldE5hbWUgPSBib3hTZXROYW1lXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBncm91cHMoKTogR3JvdXBbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHNcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGdyb3Vwcyhncm91cHM6IEdyb3VwW10pIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzID0gZ3JvdXBzXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwbHVnaW5TZXR0aW5ncygpOiBQbHVnaW5TZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5wbHVnaW5TZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGx1Z2luU2V0dGluZ3Moc2V0dGluZ3M6IFBsdWdpblNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnBsdWdpblNldHRpbmdzID0gc2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlcnZlclNldHRpbmdzKCk6IFNlcnZlclNldHRpbmdzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLnNlcnZlclNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXJ2ZXJTZXR0aW5ncyhzZXR0aW5nczogU2VydmVyU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuc2VydmVyU2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgbWFya0dyb3Vwc0ZldGNoZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID0gRGF0ZS5ub3coKVxuICAgIH1cblxuICAgIHB1YmxpYyBpbnZhbGlkYXRlR3JvdXBzQ2FjaGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNHcm91cHNDYWNoZUV4cGlyZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cHNDYWNoZWRBdCA9PT0gbnVsbCB8fCBEYXRlLm5vdygpIC0gdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPiBHUk9VUFNfQ0FDSEVfVFRMXG4gICAgfVxuXG4gICAgcHVibGljIGlzVHlwZUFsbG93ZWRGb3JQcmV2aWV3KHR5cGU6IEl0ZW1UeXBlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRQcmV2aWV3VHlwZXMuc29tZShjb25maWd1cmVkVHlwZSA9PiAoUFJFVklFV19UWVBFX0dST1VQU1tjb25maWd1cmVkVHlwZV0gPz8gW2NvbmZpZ3VyZWRUeXBlXSkuaW5jbHVkZXModHlwZSkpXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhbGxvd2VkUHJldmlld1R5cGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5TZXR0aW5ncy5FbmFibGVkSXRlbVR5cGVzXG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW1CeUlkKGl0ZW1JZDogc3RyaW5nKTogUHJldmlld0l0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHNcbiAgICAgICAgICAgIC5mbGF0TWFwKGdyb3VwID0+IGdyb3VwLml0ZW1zKVxuICAgICAgICAgICAgLmZpbmQoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyByZWNvcmRMb2FkZWRJdGVtcyhncm91cElkOiBzdHJpbmcsIGl0ZW1zOiBQcmV2aWV3SXRlbVtdLCBzdGFydEluZGV4OiBudW1iZXIsIHRvdGFsUmVjb3JkQ291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMgPSB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgICAgIGlmIChncm91cC5ncm91cElkICE9PSBncm91cElkKVxuICAgICAgICAgICAgICAgIHJldHVybiBncm91cFxuXG4gICAgICAgICAgICBpZiAoZ3JvdXAubG9hZGVkU3RhcnRJbmRleCA9PT0gdW5kZWZpbmVkIHx8IGdyb3VwLmxvYWRlZEVuZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgaXRlbXMsIGxvYWRlZFN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsIGxvYWRlZEVuZEluZGV4OiBzdGFydEluZGV4ICsgaXRlbXMubGVuZ3RoLCBsb2FkZWRUb3RhbFJlY29yZENvdW50OiB0b3RhbFJlY29yZENvdW50IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPj0gZ3JvdXAubG9hZGVkRW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgaXRlbXM6IFsuLi5ncm91cC5pdGVtcywgLi4uaXRlbXNdLCBsb2FkZWRFbmRJbmRleDogc3RhcnRJbmRleCArIGl0ZW1zLmxlbmd0aCwgbG9hZGVkVG90YWxSZWNvcmRDb3VudDogdG90YWxSZWNvcmRDb3VudCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFydEluZGV4IDwgZ3JvdXAubG9hZGVkU3RhcnRJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBpdGVtczogWy4uLml0ZW1zLCAuLi5ncm91cC5pdGVtc10sIGxvYWRlZFN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ6IHRvdGFsUmVjb3JkQ291bnQgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwSWQ6IHN0cmluZywgcGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIsIHBsYXllZFJ1bnRpbWVUaWNrczogbnVtYmVyLCB0b3RhbFJ1bnRpbWVUaWNrczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGcgPT4gZy5ncm91cElkID09PSBncm91cElkID8geyAuLi5nLCBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50LCBwbGF5ZWRSdW50aW1lVGlja3MsIHRvdGFsUnVudGltZVRpY2tzIH0gOiBnKVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGp1c3RHcm91cFdhdGNoU3RhdHMoaXRlbUlkOiBzdHJpbmcsIGRlbHRhUGxheWVkQ291bnQ6IG51bWJlciwgZGVsdGFQbGF5ZWRSdW50aW1lVGlja3M6IG51bWJlcik6IEdyb3VwIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdyb3Vwcy5maW5kKGcgPT4gZy5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKSlcbiAgICAgICAgaWYgKCFncm91cCkgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRHcm91cDogR3JvdXAgPSB7XG4gICAgICAgICAgICAuLi5ncm91cCxcbiAgICAgICAgICAgIHBsYXllZEl0ZW1Db3VudDogZ3JvdXAucGxheWVkSXRlbUNvdW50ICsgZGVsdGFQbGF5ZWRDb3VudCxcbiAgICAgICAgICAgIHBsYXllZFJ1bnRpbWVUaWNrczogZ3JvdXAucGxheWVkUnVudGltZVRpY2tzID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQgPyBVTktOT1dOX1dBVENIRURfQ09VTlQgOiBncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgKyBkZWx0YVBsYXllZFJ1bnRpbWVUaWNrc1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGcgPT4gZy5ncm91cElkID09PSBncm91cC5ncm91cElkID8gdXBkYXRlZEdyb3VwIDogZylcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRHcm91cFxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVJdGVtKGl0ZW1Ub1VwZGF0ZTogUHJldmlld0l0ZW0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLmdyb3Vwcy5tYXAoZ3JvdXAgPT5cbiAgICAgICAgICAgIGdyb3VwLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtVG9VcGRhdGUuSWQpXG4gICAgICAgICAgICAgICAgPyB7IC4uLmdyb3VwLCBpdGVtczogZ3JvdXAuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbVRvVXBkYXRlLklkID8gaXRlbVRvVXBkYXRlIDogaXRlbSkgfVxuICAgICAgICAgICAgICAgIDogZ3JvdXBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIENhbGxlZCB3aGVuZXZlciB0aGUgcG9wdXAgc3dpdGNoZXMgd2hhdCBpdCdzIGRpc3BsYXlpbmcgKG9wZW5pbmcsIHNlbGVjdGluZyBhIGdyb3VwLCBnb2luZyBiYWNrIHRvIHRoZSBncm91cCBsaXN0KVxuICAgIHB1YmxpYyBiZWdpbk5ld1ZpZXcoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICsrdGhpcy5fdmlld1Rva2VuXG4gICAgfVxuXG4gICAgcHVibGljIGlzQ3VycmVudFZpZXcodG9rZW46IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdG9rZW4gPT09IHRoaXMuX3ZpZXdUb2tlblxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRWaWV3VG9rZW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdUb2tlblxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0Y29uc3QgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vU2VydmljZXMvTG9nZ2VyXCI7XG5pbXBvcnQge1ByZXZpZXdCdXR0b25UZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtEaWFsb2dDb250YWluZXJUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtMaXN0RWxlbWVudEZhY3Rvcnl9IGZyb20gXCIuL0xpc3RFbGVtZW50RmFjdG9yeVwiO1xuaW1wb3J0IHtQb3B1cFRpdGxlVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlXCI7XG5pbXBvcnQge2FkanVzdFdhdGNoZWRDb3VudCwgRGF0YUZldGNoZXIsIGN5Y2xlV2F0Y2hlZENvdW50TW9kZSwgdXBkYXRlQmx1ckRvbX0gZnJvbSBcIi4vU2VydmljZXMvRGF0YUZldGNoZXJcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHtQbHVnaW5TZXR0aW5nc30gZnJvbSBcIi4vTW9kZWxzL1BsdWdpblNldHRpbmdzXCI7XG5pbXBvcnQge1NlcnZlclNldHRpbmdzfSBmcm9tIFwiLi9Nb2RlbHMvU2VydmVyU2V0dGluZ3NcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi9FbmRwb2ludHNcIjtcbmltcG9ydCB7R3JvdXAsIFVOS05PV05fV0FUQ0hFRF9DT1VOVH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge0dyb3VwSXRlbXNSZXN1bHR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cEl0ZW1zUmVzdWx0XCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcbmltcG9ydCB7YWN0aXZhdGVTcGlubmVyLCBzcGlubmVySHRtbH0gZnJvbSBcIi4vQ29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQge3NldEl0ZW1PdmVybGF5QWN0aXZlLCB1cGRhdGVJdGVtUHJvZ3Jlc3NEb219IGZyb20gXCIuL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHt1cGRhdGVFbmRUaW1lRGlzcGxheX0gZnJvbSBcIi4vQ29tcG9uZW50cy9JdGVtRGV0YWlsc1wiO1xuaW1wb3J0IHtjYXJyeVBvc2l0aW9uT3ZlciwgZ2V0U2VsZWN0ZWRWZXJzaW9uUnVuVGltZVRpY2tzLCBpc1ByZXZpZXdpbmdPdGhlclZlcnNpb259IGZyb20gXCIuL0NvbXBvbmVudHMvVmVyc2lvblNlbGVjdFRlbXBsYXRlXCI7XG5cbmltcG9ydCAnLi9TdHlsZXMvU3R5bGVzLmNzcydcblxuLy8gaW5pdCBzZXJ2aWNlcyBhbmQgaGVscGVyc1xuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKClcbmNvbnN0IHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUgPSBuZXcgUHJvZ3JhbURhdGFTdG9yZSgpXG5jb25zdCBwbGF5YmFja0hhbmRsZXI6IFBsYXliYWNrSGFuZGxlciA9IG5ldyBQbGF5YmFja0hhbmRsZXIobG9nZ2VyKVxuY29uc3QgbGlzdEVsZW1lbnRGYWN0b3J5ID0gbmV3IExpc3RFbGVtZW50RmFjdG9yeShwbGF5YmFja0hhbmRsZXIsIHByb2dyYW1EYXRhU3RvcmUsIGxvZ2dlcilcblxuY29uc3QgY29sbGVjdGlvbnNCeUl0ZW1JZCA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPEdyb3VwW10+PigpXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udGFpbmluZ0NvbGxlY3Rpb25zKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTxHcm91cFtdPiB7XG4gICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuQ09OVEFJTklOR19DT0xMRUNUSU9OU31gXG4gICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCkpXG4gICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW1JZCkpXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmF3OiBhbnlbXSA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICByZXR1cm4gcmF3Lm1hcCgoZzogYW55KSA9PiAoe1xuICAgICAgICAgICAgZ3JvdXBJZDogZy5Hcm91cElkLFxuICAgICAgICAgICAgZ3JvdXBOYW1lOiBnLkdyb3VwTmFtZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIGluZGV4TnVtYmVyOiBnLkluZGV4TnVtYmVyLFxuICAgICAgICAgICAgcGxheWVkSXRlbUNvdW50OiBnLlBsYXllZEl0ZW1Db3VudCxcbiAgICAgICAgICAgIHRvdGFsSXRlbUNvdW50OiBnLlRvdGFsSXRlbUNvdW50LFxuICAgICAgICAgICAgcGxheWVkUnVudGltZVRpY2tzOiBnLlBsYXllZFJ1bnRpbWVUaWNrcyxcbiAgICAgICAgICAgIHRvdGFsUnVudGltZVRpY2tzOiBnLlRvdGFsUnVudGltZVRpY2tzXG4gICAgICAgIH0pKVxuICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IGxvYWQgQ29sbGVjdGlvbnMvUGxheWxpc3RzIGNvbnRhaW5pbmcgdGhpcyBtb3ZpZVwiLCBleClcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwW10+IHtcbiAgICBsZXQgcHJvbWlzZSA9IGNvbGxlY3Rpb25zQnlJdGVtSWQuZ2V0KGl0ZW1JZClcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IGZldGNoQ29udGFpbmluZ0NvbGxlY3Rpb25zKGl0ZW1JZClcbiAgICAgICAgY29sbGVjdGlvbnNCeUl0ZW1JZC5zZXQoaXRlbUlkLCBwcm9taXNlKVxuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIC8vIEVuc3VyZSBBcGlDbGllbnQvRXZlbnRzIGV4aXN0IGFuZCB1c2VyIGlzIGxvZ2dlZCBpblxuICAgIGlmICh0eXBlb2YgQXBpQ2xpZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgRXZlbnRzID09PSAndW5kZWZpbmVkJyB8fCAhQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQ/LigpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoaW5pdGlhbGl6ZSwgMzAwKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBuZXcgRGF0YUZldGNoZXIocHJvZ3JhbURhdGFTdG9yZSlcblxuICAgIGNvbnN0IHBsdWdpblNldHRpbmdzVXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuUExVR0lOX1NFVFRJTkdTfWApXG4gICAgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsOiBwbHVnaW5TZXR0aW5nc1VybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAudGhlbigoY29uZmlnOiBQbHVnaW5TZXR0aW5ncykgPT4ge1xuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncyA9IGNvbmZpZ1xuICAgICAgICAgICAgbG9nZ2VyLnNldExvZ0xldmVsKGNvbmZpZy5Mb2dMZXZlbClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgbG9hZCBwbHVnaW4gc2V0dGluZ3MsIGZhbGxpbmcgYmFjayB0byBkZWZhdWx0c1wiLCBleCkpXG5cbiAgICBjb25zdCBzZXJ2ZXJTZXR0aW5nc1VybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLlNFUlZFUl9TRVRUSU5HU31gKVxuICAgIEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybDogc2VydmVyU2V0dGluZ3NVcmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgLnRoZW4oKGNvbmZpZzogU2VydmVyU2V0dGluZ3MpID0+IHByb2dyYW1EYXRhU3RvcmUuc2VydmVyU2V0dGluZ3MgPSBjb25maWcpXG4gICAgICAgIC5jYXRjaCgoZXg6IHVua25vd24pID0+IGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IGxvYWQgc2VydmVyIHNldHRpbmdzLCBmYWxsaW5nIGJhY2sgdG8gZGVmYXVsdHNcIiwgZXgpKVxuXG4gICAgbG9nZ2VyLmluZm8oXCJJblBsYXllckVwaXNvZGVQcmV2aWV3IGluaXRpYWxpemVkXCIpXG59XG5pbml0aWFsaXplKClcblxuY29uc3QgU0VBUkNIX0NPTExFQ1RJT05TX0dST1VQX05BTUUgPSAnU2VhcmNoIENvbGxlY3Rpb25zL1BsYXlsaXN0cydcblxuY29uc3QgdmlkZW9QYXRoczogc3RyaW5nW10gPSBbJy92aWRlbyddXG5sZXQgcHJldmlvdXNSb3V0ZVBhdGg6IHN0cmluZyA9IG51bGxcbmxldCBwcmV2aWV3Q29udGFpbmVyTG9hZGVkOiBib29sZWFuID0gZmFsc2VcblxubGV0IHBlbmRpbmdQcmVsb2FkSXRlbUlkOiBzdHJpbmcgfCBudWxsID0gbnVsbFxubGV0IHBlbmRpbmdQcmVsb2FkOiBQcm9taXNlPHZvaWQ+IHwgbnVsbCA9IG51bGxcbmxldCBwcmVsb2FkT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsID0gbnVsbFxubGV0IGJ1dHRvbnNDb250YWluZXJPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsXG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUJ1dHRvbnNCYXIoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLXR5cGU9XCJ2aWRlby1vc2RcIl06bm90KC5oaWRlKSAuYnV0dG9ucycpXG59XG5cbi8vIFdhaXQgZm9yIHRoZSBPU0QncyBgLmJ1dHRvbnNgIGNvbnRhaW5lciB0byBleGlzdFxuZnVuY3Rpb24gd2FpdEZvckJ1dHRvbnNDb250YWluZXIob25SZWFkeTogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmIChnZXRBY3RpdmVCdXR0b25zQmFyKCkpIHtcbiAgICAgICAgb25SZWFkeSgpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGJ1dHRvbnNDb250YWluZXJPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICBpZiAoIWdldEFjdGl2ZUJ1dHRvbnNCYXIoKSkgcmV0dXJuXG4gICAgICAgIGJ1dHRvbnNDb250YWluZXJPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgICAgIGJ1dHRvbnNDb250YWluZXJPYnNlcnZlciA9IG51bGxcbiAgICAgICAgb25SZWFkeSgpXG4gICAgfSlcbiAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aWV3c2hvdycsIHZpZXdTaG93RXZlbnRIYW5kbGVyKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdmlld1Nob3dFdmVudEhhbmRsZXIpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlld1BvcHVwJyk/LnJlbW92ZSgpKVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVSYXRpbmdCdXR0b24oKTogRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiBnZXRBY3RpdmVCdXR0b25zQmFyKCk/LnF1ZXJ5U2VsZWN0b3IoJy5idG5Vc2VyUmF0aW5nLmF1dG9TaXplLnBhcGVyLWljb24tYnV0dG9uLWxpZ2h0JykgPz8gbnVsbFxufVxuXG5mdW5jdGlvbiBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBnZXRBY3RpdmVSYXRpbmdCdXR0b24oKT8uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPz8gbnVsbFxufVxuXG5sZXQgcGVuZGluZ0l0ZW1Td2l0Y2hCdXR0b246IEVsZW1lbnQgfCBudWxsID0gbnVsbFxubGV0IGl0ZW1Td2l0Y2hPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsXG5cbmZ1bmN0aW9uIG9uVmlkZW9FbXB0aWVkKCk6IHZvaWQge1xuICAgIGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQgPSAtMVxuICAgIGl0ZW1Td2l0Y2hPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgcGVuZGluZ0l0ZW1Td2l0Y2hCdXR0b24gPSBnZXRBY3RpdmVSYXRpbmdCdXR0b24oKVxuICAgIGlmICghcGVuZGluZ0l0ZW1Td2l0Y2hCdXR0b24pIHJldHVyblxuICAgIFxuICAgIGl0ZW1Td2l0Y2hPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHN0b3BXYWl0aW5nRm9ySXRlbVN3aXRjaCgpKVxuICAgIGl0ZW1Td2l0Y2hPYnNlcnZlci5vYnNlcnZlKHBlbmRpbmdJdGVtU3dpdGNoQnV0dG9uLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLWlkJ10gfSlcbn1cblxuZnVuY3Rpb24gc3RvcFdhaXRpbmdGb3JJdGVtU3dpdGNoKCk6IHZvaWQge1xuICAgIGl0ZW1Td2l0Y2hPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgaXRlbVN3aXRjaE9ic2VydmVyID0gbnVsbFxuICAgIHBlbmRpbmdJdGVtU3dpdGNoQnV0dG9uID0gbnVsbFxufVxuXG5sZXQgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZDogbnVtYmVyID0gLTFcbmZ1bmN0aW9uIG9uVmlkZW9UaW1lVXBkYXRlKHRoaXM6IEhUTUxWaWRlb0VsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAocGVuZGluZ0l0ZW1Td2l0Y2hCdXR0b24pIHtcbiAgICAgICAgLy8gQSByZWNyZWF0ZWQgT1NEIGhhcyBhIG5ldyBidXR0b24uIFRoZSBvYnNlcnZlZCBvbmUgbmV2ZXIgdXBkYXRlcy5cbiAgICAgICAgaWYgKHBlbmRpbmdJdGVtU3dpdGNoQnV0dG9uID09PSBnZXRBY3RpdmVSYXRpbmdCdXR0b24oKSkgcmV0dXJuXG4gICAgICAgIHN0b3BXYWl0aW5nRm9ySXRlbVN3aXRjaCgpXG4gICAgfVxuXG4gICAgY29uc3QgcG9zaXRpb25TZWNvbmQgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudFRpbWUpXG4gICAgaWYgKHBvc2l0aW9uU2Vjb25kID09PSBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kKSByZXR1cm5cbiAgICBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kID0gcG9zaXRpb25TZWNvbmRcblxuICAgIGNvbnN0IGl0ZW1JZCA9IGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKVxuICAgIGlmICghaXRlbUlkKSByZXR1cm5cblxuICAgIGlmIChpdGVtSWQgIT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCkge1xuICAgICAgICBjb25zdCBwcmV2aW91c0l0ZW1JZCA9IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBpdGVtSWRcbiAgICAgICAgc2V0SXRlbU92ZXJsYXlBY3RpdmUocHJldmlvdXNJdGVtSWQsIGZhbHNlKVxuICAgICAgICBzZXRJdGVtT3ZlcmxheUFjdGl2ZShpdGVtSWQsIHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSB8fCAhaXRlbS5SdW5UaW1lVGlja3MpIHJldHVyblxuXG4gICAgY29uc3QgcG9zaXRpb25UaWNrcyA9IHRoaXMuY3VycmVudFRpbWUgKiAxMF8wMDBfMDAwXG4gICAgY29uc3QgcGxheWVkUGVyY2VudGFnZSA9IChwb3NpdGlvblRpY2tzIC8gaXRlbS5SdW5UaW1lVGlja3MpICogMTAwXG5cbiAgICBjb25zdCBwbGF5ZWQgPSBpdGVtLlVzZXJEYXRhLlBsYXllZCB8fCBwbGF5ZWRQZXJjZW50YWdlID49IHByb2dyYW1EYXRhU3RvcmUuc2VydmVyU2V0dGluZ3MuTWF4UmVzdW1lUGN0XG4gICAgY29uc3QgdXBkYXRlZEl0ZW06IFByZXZpZXdJdGVtID0ge1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YToge1xuICAgICAgICAgICAgLi4uaXRlbS5Vc2VyRGF0YSxcbiAgICAgICAgICAgIFBsYXliYWNrUG9zaXRpb25UaWNrczogcG9zaXRpb25UaWNrcyxcbiAgICAgICAgICAgIFBsYXllZFBlcmNlbnRhZ2U6IHBsYXllZFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICBQbGF5ZWQ6IHBsYXllZFxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh1cGRhdGVkSXRlbSlcblxuICAgIC8vIEVudHJ5IHNob3dzIGFub3RoZXIgdmVyc2lvbidzIGRhdGEuIEEgc3dpdGNoIGtlZXBzIHRoZSBwb3NpdGlvbiwgc28gcHJvZ3Jlc3MgYW5kIFwiRW5kcyBhdFwiIGZvbGxvdyBwbGF5YmFjayBvbiBpdC5cbiAgICBpZiAoaXNQcmV2aWV3aW5nT3RoZXJWZXJzaW9uKGl0ZW1JZCkpIHtcbiAgICAgICAgY29uc3QgcHJldmlld2VkSXRlbSA9IGNhcnJ5UG9zaXRpb25PdmVyKHsgLi4udXBkYXRlZEl0ZW0sIFJ1blRpbWVUaWNrczogZ2V0U2VsZWN0ZWRWZXJzaW9uUnVuVGltZVRpY2tzKGl0ZW1JZCkgPz8gdXBkYXRlZEl0ZW0uUnVuVGltZVRpY2tzIH0sIHBvc2l0aW9uVGlja3MpXG4gICAgICAgIHVwZGF0ZUl0ZW1Qcm9ncmVzc0RvbShpdGVtSWQsIHByZXZpZXdlZEl0ZW0uVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZSlcbiAgICAgICAgdXBkYXRlRW5kVGltZURpc3BsYXkocHJldmlld2VkSXRlbSlcbiAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVJdGVtUHJvZ3Jlc3NEb20oaXRlbUlkLCBwbGF5ZWRQZXJjZW50YWdlKVxuICAgICAgICB1cGRhdGVFbmRUaW1lRGlzcGxheSh1cGRhdGVkSXRlbSlcbiAgICAgICAgaWYgKHBsYXllZCAhPT0gaXRlbS5Vc2VyRGF0YS5QbGF5ZWQpIHVwZGF0ZUJsdXJEb20ocHJvZ3JhbURhdGFTdG9yZSwgaXRlbUlkLCBwbGF5ZWQpXG4gICAgfVxuICAgIGFkanVzdFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLCBpdGVtLCBpdGVtLlVzZXJEYXRhLlBsYXllZCwgcGxheWVkLCBpdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcywgcG9zaXRpb25UaWNrcylcbn1cblxuZnVuY3Rpb24gb25WaWRlb1JhdGVDaGFuZ2UoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5lbmRzQXRbZGF0YS1pdGVtLWlkXScpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBwcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKGVsZW1lbnQuZGF0YXNldC5pdGVtSWQpXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuXG4gICAgICAgIHVwZGF0ZUVuZFRpbWVEaXNwbGF5KGlzUHJldmlld2luZ090aGVyVmVyc2lvbihpdGVtLklkKVxuICAgICAgICAgICAgPyBjYXJyeVBvc2l0aW9uT3Zlcih7IC4uLml0ZW0sIFJ1blRpbWVUaWNrczogZ2V0U2VsZWN0ZWRWZXJzaW9uUnVuVGltZVRpY2tzKGl0ZW0uSWQpID8/IGl0ZW0uUnVuVGltZVRpY2tzIH0sIGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKVxuICAgICAgICAgICAgOiBpdGVtKVxuICAgIH0pXG59XG5cbi8vIFRyYWNrcyB3aGljaCBCb3hTZXQvUGxheWxpc3QgZGV0YWlscyBwYWdlIChpZiBhbnkpIHdhcyB2aXNpdGVkIGltbWVkaWF0ZWx5IGJlZm9yZSBuYXZpZ2F0aW5nIGludG8gcGxheWJhY2tcbmNvbnN0IERFVEFJTFNfUk9VVEVfUEFUSDogc3RyaW5nID0gJy9kZXRhaWxzJ1xuY29uc3QgREFTSEJPQVJEX1JPVVRFX1BBVEg6IHN0cmluZyA9ICcvaG9tZSdcbmNvbnN0IGNvbGxlY3Rpb25MaWtlSXRlbVR5cGVzOiBTZXQ8SXRlbVR5cGU+ID0gbmV3IFNldChbSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5QbGF5bGlzdF0pXG5sZXQgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZDogc3RyaW5nID0gbnVsbFxuY29uc3QgRU1QVFlfR1VJRCA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnXG5cbmZ1bmN0aW9uIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY29sbGVjdGlvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBwcm9ncmFtRGF0YVN0b3JlLmludmFsaWRhdGVHcm91cHNDYWNoZSgpXG5cbiAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5TRVRfU09VUkNFX0NPTExFQ1RJT059YFxuICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAucmVwbGFjZSgne2NvbGxlY3Rpb25JZH0nLCBjb2xsZWN0aW9uSWQpKVxuICAgIEFwaUNsaWVudC5hamF4KHt0eXBlOiAnR0VUJywgdXJsfSkuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCByZWNvcmQgc291cmNlIGNvbGxlY3Rpb24gZm9yIHBsYXliYWNrIHNlc3Npb25cIiwgZXgpKVxufVxuXG5mdW5jdGlvbiBjbGVhclNvdXJjZUNvbGxlY3Rpb24oKTogdm9pZCB7XG4gICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihFTVBUWV9HVUlEKVxufVxuXG5mdW5jdGlvbiBjYXB0dXJlU291cmNlQ29sbGVjdGlvbihjdXJyZW50Um91dGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbY3VycmVudFBhdGgsIGN1cnJlbnRRdWVyeV0gPSBjdXJyZW50Um91dGVQYXRoLnNwbGl0KCc/JylcbiAgICBjb25zdCBwcmV2aW91c1BhdGggPSBwcmV2aW91c1JvdXRlUGF0aD8uc3BsaXQoJz8nKVswXVxuXG4gICAgaWYgKGN1cnJlbnRQYXRoID09PSBEQVNIQk9BUkRfUk9VVEVfUEFUSCkge1xuICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxuICAgICAgICBjbGVhclNvdXJjZUNvbGxlY3Rpb24oKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFBhdGggPT09IERFVEFJTFNfUk9VVEVfUEFUSCkge1xuICAgICAgICBjb25zdCBkZXRhaWxzSWQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGN1cnJlbnRRdWVyeSA/PyAnJykuZ2V0KCdpZCcpXG4gICAgICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBudWxsXG4gICAgICAgIGlmICghZGV0YWlsc0lkKSByZXR1cm5cblxuICAgICAgICBBcGlDbGllbnQuZ2V0SXRlbShBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpLCBkZXRhaWxzSWQpLnRoZW4oKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UeXBlOiBJdGVtVHlwZSA9IEl0ZW1UeXBlW2l0ZW0uVHlwZSBhcyB1bmtub3duIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICAgICAgICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBjb2xsZWN0aW9uTGlrZUl0ZW1UeXBlcy5oYXMoaXRlbVR5cGUpID8gZGV0YWlsc0lkIDogbnVsbFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhjdXJyZW50UGF0aCkgJiYgcHJldmlvdXNQYXRoID09PSBERVRBSUxTX1JPVVRFX1BBVEgpIHtcbiAgICAgICAgaWYgKHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQpXG4gICAgICAgICAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNsZWFyU291cmNlQ29sbGVjdGlvbigpXG4gICAgfVxuXG4gICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IG51bGxcbn1cblxuLy8gUmV0cmlldmUgdGhlIGN1cnJlbnQgY29sbGVjdGlvbi9wbGF5bGlzdCBpZCB0aHJvdWdoIGEgcGxheSBhY3Rpb24gb24gYSBjYXJkIHRoZSBzYW1lIHdheSBhcyBoZWxseWZpbiBkb2VzIGl0IGl0c2VsZlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2plbGx5ZmluL2plbGx5ZmluLXdlYi9ibG9iL3JlbGVhc2UtMTAuMTEuei9zcmMvY29tcG9uZW50cy9zaG9ydGN1dHMuanMjTDIxNlxuY29uc3QgUExBWUJBQ0tfVFJJR0dFUl9BQ1RJT05TOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoWydwbGF5JywgJ3Jlc3VtZScsICdwbGF5YWxsZnJvbWhlcmUnXSlcbmZ1bmN0aW9uIG9uRG9jdW1lbnRDbGlja0NhcHR1cmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBDeWNsZSBncm91cCBzdGF0IGRpc3BsYXkgbW9kZVxuICAgIGNvbnN0IHdhdGNoZWRDb3VudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8uY2xvc2VzdD8uPEhUTUxFbGVtZW50PignI3ByZXZpZXdQb3B1cCAucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICBpZiAod2F0Y2hlZENvdW50RWxlbWVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zdCBncm91cEVsZW1lbnQgPSB3YXRjaGVkQ291bnRFbGVtZW50LmNsb3Nlc3Q8SFRNTEVsZW1lbnQ+KCdbaWRePVwiZ3JvdXAtXCJdJylcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBncm91cEVsZW1lbnQgPyBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5maW5kKGcgPT4gYGdyb3VwLSR7Zy5ncm91cElkfWAgPT09IGdyb3VwRWxlbWVudC5pZCkgOiBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwXG4gICAgICAgIGlmIChncm91cCkgY3ljbGVXYXRjaGVkQ291bnRNb2RlKHByb2dyYW1EYXRhU3RvcmUsIHdhdGNoZWRDb3VudEVsZW1lbnQsIGdyb3VwKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBPbmx5IGNhcHR1cmUgbmF0aXZlIGV2ZW50cyBhbmQgaWdub3JlIGFueSBmcm9tIHRoZSBQcmV2aWV3IExpc3RcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LmNsb3Nlc3Q/LignI3ByZXZpZXdQb3B1cCcpKSByZXR1cm5cblxuICAgIGNvbnN0IGFjdGlvbkVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8uY2xvc2VzdD8uKCdbZGF0YS1hY3Rpb25dJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKCFhY3Rpb25FbGVtZW50IHx8ICFQTEFZQkFDS19UUklHR0VSX0FDVElPTlMuaGFzKGFjdGlvbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpKSkgcmV0dXJuXG5cbiAgICBjb25zdCBjYXJkID0gYWN0aW9uRWxlbWVudC5jbG9zZXN0KCdbZGF0YS1pZF0nKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcbiAgICBpZiAoIWNhcmQpIHJldHVyblxuXG4gICAgY29uc3QgY2hpbGRPZkNvbGxlY3Rpb25JZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxlY3Rpb25pZCcpID8/IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXBsYXlsaXN0aWQnKVxuICAgIGlmIChjaGlsZE9mQ29sbGVjdGlvbklkKSB7XG4gICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY2hpbGRPZkNvbGxlY3Rpb25JZClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY2FyZEl0ZW1UeXBlOiBJdGVtVHlwZSA9IEl0ZW1UeXBlW2NhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSBhcyB1bmtub3duIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICBjb25zdCBjYXJkSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgaWYgKGNhcmRJZCAmJiBjb2xsZWN0aW9uTGlrZUl0ZW1UeXBlcy5oYXMoY2FyZEl0ZW1UeXBlKSkge1xuICAgICAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNhcmRJZClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIGNsZWFyU291cmNlQ29sbGVjdGlvbigpXG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRG9jdW1lbnRDbGlja0NhcHR1cmUsIHRydWUpXG5cbmZ1bmN0aW9uIHZpZXdTaG93RXZlbnRIYW5kbGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZVBhdGg6IHN0cmluZyA9IGdldExvY2F0aW9uUGF0aCgpXG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhdGlvblBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb246IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZUluZGV4OiBudW1iZXIgPSBsb2NhdGlvbi5sYXN0SW5kZXhPZignLycpXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5zdWJzdHJpbmcoY3VycmVudFJvdXRlSW5kZXgpXG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbCBhdHRlbXB0IHRvIGxvYWQgdGhlIHZpZGVvIHZpZXcgb3Igc2NoZWR1bGUgcmV0cmllcy5cbiAgICBjYXB0dXJlU291cmNlQ29sbGVjdGlvbihjdXJyZW50Um91dGVQYXRoKVxuICAgIGF0dGVtcHRMb2FkVmlkZW9WaWV3KClcbiAgICBwcmV2aW91c1JvdXRlUGF0aCA9IGN1cnJlbnRSb3V0ZVBhdGhcbiAgICBcbiAgICBmdW5jdGlvbiBhdHRlbXB0TG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMoY3VycmVudFJvdXRlUGF0aCkpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcmV2aWV3IGNvbnRhaW5lciBpcyBhbHJlYWR5IGxvYWRlZCBiZWZvcmUgbG9hZGluZ1xuICAgICAgICAgICAgaWYgKHByZXZpZXdDb250YWluZXJMb2FkZWQgfHwgaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpKSByZXR1cm5cblxuICAgICAgICAgICAgLy8gUmVzZXJ2ZSBpbW1lZGlhdGVseSBzbyBhIHNlY29uZCB2aWV3c2hvdyBkb2Vzbid0IHF1ZXVlIGFub3RoZXIgd2FpdFxuICAgICAgICAgICAgcHJldmlld0NvbnRhaW5lckxvYWRlZCA9IHRydWVcbiAgICAgICAgICAgIHdhaXRGb3JCdXR0b25zQ29udGFpbmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBuYXZpZ2F0ZWQgYmFjayBvdXQgb2YgdGhlIHBsYXllcikgd2hpbGUgd2Ugd2VyZSB3YWl0aW5nXG4gICAgICAgICAgICAgICAgaWYgKCF2aWRlb1BhdGhzLmluY2x1ZGVzKGdldExvY2F0aW9uUGF0aCgpKSB8fCBpc1ByZXZpZXdCdXR0b25DcmVhdGVkKCkpIHJldHVyblxuICAgICAgICAgICAgICAgIGxvYWRWaWRlb1ZpZXcoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKHByZXZpb3VzUm91dGVQYXRoKSkge1xuICAgICAgICAgICAgdW5sb2FkVmlkZW9WaWV3KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBsb2FkVmlkZW9WaWV3KCk6IHZvaWQge1xuICAgICAgICBsb2dnZXIuZGVidWcoXCJMb2FkaW5nIHZpZGVvIHZpZXdcIilcblxuICAgICAgICBsZXQgcHJldmlld0J1dHRvbjogUHJldmlld0J1dHRvblRlbXBsYXRlIHwgbnVsbCA9IG51bGxcbiAgICAgICAgbGV0IHByZXZpZXdCdXR0b25Mb2FkaW5nOiBib29sZWFuID0gZmFsc2VcblxuICAgICAgICAvLyBPbmx5IGFjdHVhbGx5IGluc2VydGVkIGludG8gdGhlIE9TRCBvbmNlIHRoZSBpdGVtJ3MgdHlwZSBpcyBjb25maXJtZWQgZW5hYmxlZCAtIHNlZSBwcmVsb2FkUHJldmlld0RhdGEuXG4gICAgICAgIGZ1bmN0aW9uIGluc2VydFByZXZpZXdCdXR0b24oKTogdm9pZCB7XG4gICAgICAgICAgICBpZiAocHJldmlld0J1dHRvbikgcmV0dXJuXG4gICAgICAgICAgICBpZiAoIXZpZGVvUGF0aHMuaW5jbHVkZXMoZ2V0TG9jYXRpb25QYXRoKCkpKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgYnV0dG9uc0JhciA9IGdldEFjdGl2ZUJ1dHRvbnNCYXIoKVxuICAgICAgICAgICAgaWYgKCFidXR0b25zQmFyKSB7XG4gICAgICAgICAgICAgICAgd2FpdEZvckJ1dHRvbnNDb250YWluZXIoaW5zZXJ0UHJldmlld0J1dHRvbilcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbGFzdEVsZW1lbnRDaGlsZC5wYXJlbnRFbGVtZW50IGlzIHVzZWQgZm9yIGNhc3RpbmcgZnJvbSBFbGVtZW50IHRvIEhUTUxFbGVtZW50XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQ6IEhUTUxFbGVtZW50ID0gYnV0dG9uc0Jhci5sYXN0RWxlbWVudENoaWxkLnBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmRJbmRleCgoY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImJ0blVzZXJSYXRpbmdcIikpO1xuICAgICAgICAgICAgLy8gaWYgaW5kZXggaXMgaW52YWxpZCB0cnkgdG8gdXNlIHRoZSBvbGQgcG9zaXRpb24gKHVzZWQgaW4gSmVsbHlmaW4gMTAuOC4xMilcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpXG4gICAgICAgICAgICAgICAgaW5kZXggPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikuZmluZEluZGV4KChjaGlsZDogRWxlbWVudCk6IGJvb2xlYW4gPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3NkVGltZVRleHRcIikpXG5cbiAgICAgICAgICAgIHByZXZpZXdCdXR0b24gPSBuZXcgUHJldmlld0J1dHRvblRlbXBsYXRlKHBhcmVudCwgaW5kZXgpXG4gICAgICAgICAgICBwcmV2aWV3QnV0dG9uLnJlbmRlcihwcmV2aWV3QnV0dG9uQ2xpY2tIYW5kbGVyKVxuICAgICAgICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJylcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIG9uVmlkZW9UaW1lVXBkYXRlKVxuICAgICAgICAgICAgdmlkZW9FbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdyYXRlY2hhbmdlJywgb25WaWRlb1JhdGVDaGFuZ2UpXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2VtcHRpZWQnLCBvblZpZGVvRW1wdGllZClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZldGNoUHJldmlld0l0ZW1UeXBlID0gYXN5bmMgKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTxJdGVtVHlwZT4gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuSVRFTV9QUkVWSUVXX1RZUEV9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHVzZXJJZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW1JZCkpXG4gICAgICAgICAgICBjb25zdCByYXdUeXBlOiBzdHJpbmcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgIHJldHVybiBJdGVtVHlwZVtyYXdUeXBlIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRJdGVtUHJldmlld0RhdGEgPSBhc3luYyAoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPHtcbiAgICAgICAgICAgIGl0ZW1UeXBlOiBzdHJpbmcsIGNvbnRhaW5lck5hbWU6IHN0cmluZyB8IG51bGwsIGdyb3VwczogR3JvdXBbXSwgYWN0aXZlR3JvdXBJZDogc3RyaW5nLCBhY3RpdmVJdGVtSW5kZXg6IG51bWJlclxuICAgICAgICB9PiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX1BSRVZJRVdfREFUQX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9JywgQXBpQ2xpZW50LmRldmljZUlkKCkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpdGVtVHlwZTogcmF3Lkl0ZW1UeXBlLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck5hbWU6IHJhdy5Db250YWluZXJOYW1lLFxuICAgICAgICAgICAgICAgIGdyb3VwczogcmF3Lkdyb3Vwcy5tYXAoKGc6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogZy5Hcm91cElkLFxuICAgICAgICAgICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgIGluZGV4TnVtYmVyOiBnLkluZGV4TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1Db3VudDogZy5Ub3RhbEl0ZW1Db3VudCxcbiAgICAgICAgICAgICAgICAgICAgcGxheWVkUnVudGltZVRpY2tzOiBnLlBsYXllZFJ1bnRpbWVUaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IGcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogcmF3LkFjdGl2ZUdyb3VwSWQsXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbUluZGV4OiByYXcuQWN0aXZlSXRlbUluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkR3JvdXBJdGVtcyA9IGFzeW5jIChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciA9IDAsIGxpbWl0OiBudW1iZXIgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZSk6IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfSVRFTVN9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHVzZXJJZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2dyb3VwSWR9JywgZ3JvdXBJZCksXG4gICAgICAgICAgICAgICAgeyBzdGFydEluZGV4LCBsaW1pdCB9KVxuICAgICAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IEdyb3VwSXRlbXNSZXN1bHQgPSB7IGl0ZW1zOiByYXcuSXRlbXMsIHRvdGFsUmVjb3JkQ291bnQ6IHJhdy5Ub3RhbFJlY29yZENvdW50IH1cblxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5yZWNvcmRMb2FkZWRJdGVtcyhncm91cElkLCByZXN1bHQuaXRlbXMsIHN0YXJ0SW5kZXgsIHJlc3VsdC50b3RhbFJlY29yZENvdW50KVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBwcmVsb2FkUHJldmlld0RhdGEoaXRlbUlkOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1JZCkgcmV0dXJuXG4gICAgICAgICAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWQgJiYgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuc29tZShnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gQWxyZWFkeSBmZXRjaGVkIChhbmQgdGhlcmVmb3JlIGFscmVhZHkga25vd24tYWxsb3dlZCkgZWFybGllciB0aGlzIHNlc3Npb24gLSBqdXN0IHNob3cgdGhlIGJ1dHRvbi5cbiAgICAgICAgICAgICAgICBpbnNlcnRQcmV2aWV3QnV0dG9uKClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkKSByZXR1cm5cblxuICAgICAgICAgICAgcGVuZGluZ1ByZWxvYWRJdGVtSWQgPSBpdGVtSWRcbiAgICAgICAgICAgIHBlbmRpbmdQcmVsb2FkID0gKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aWV3VHlwZSA9IGF3YWl0IGZldGNoUHJldmlld0l0ZW1UeXBlKGl0ZW1JZClcbiAgICAgICAgICAgICAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUuaXNUeXBlQWxsb3dlZEZvclByZXZpZXcocHJldmlld1R5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJldmlldyBub3QgZW5hYmxlZCBmb3IgaXRlbSB0eXBlICcke3ByZXZpZXdUeXBlfScsIHNraXBwaW5nIGJ1dHRvbiBmb3IgaXRlbSAke2l0ZW1JZH1gKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnNlcnRQcmV2aWV3QnV0dG9uKClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbVR5cGUsIGNvbnRhaW5lck5hbWUsIGdyb3VwcywgYWN0aXZlR3JvdXBJZCwgYWN0aXZlSXRlbUluZGV4IH0gPSBhd2FpdCBsb2FkSXRlbVByZXZpZXdEYXRhKGl0ZW1JZClcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IGdyb3Vwc1xuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUubWFya0dyb3Vwc0ZldGNoZWQoKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUudHlwZSA9IEl0ZW1UeXBlW2l0ZW1UeXBlIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmJveFNldE5hbWUgPSBjb250YWluZXJOYW1lID8/ICcnXG5cbiAgICAgICAgICAgICAgICBjb25zdCBQQUdFX1NJWkUgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VPZkFjdGl2ZUVwaXNvZGUgPSBNYXRoLmZsb29yKGFjdGl2ZUl0ZW1JbmRleCAvIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93U3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIChwYWdlT2ZBY3RpdmVFcGlzb2RlIC0gMSkgKiBQQUdFX1NJWkUpXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFdpbmRvd0xpbWl0ID0gKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgKyAyKSAqIFBBR0VfU0laRSAtIGluaXRpYWxXaW5kb3dTdGFydEluZGV4XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBpbml0aWFsV2luZG93U3RhcnRJbmRleCwgaW5pdGlhbFdpbmRvd0xpbWl0KVxuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJlbG9hZGVkICR7Z3JvdXBzLmxlbmd0aH0gZ3JvdXAocykgZm9yIGl0ZW0gJHtpdGVtSWR9YClcbiAgICAgICAgICAgIH0pKCkuY2F0Y2goKGV4OiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcHJlbG9hZCBwcmV2aWV3IGRhdGFcIiwgZXgpXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ1ByZWxvYWRJdGVtSWQgPT09IGl0ZW1JZCkgcGVuZGluZ1ByZWxvYWRJdGVtSWQgPSBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2FpdCB0aGF0IGRhdGEtaWQgZ2V0cyBwb3B1bGF0ZWQgYnkgSmVsbHlmaW5cbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVQcmVsb2FkKCk6IHZvaWQge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG4gICAgICAgICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgcHJlbG9hZFByZXZpZXdEYXRhKGl0ZW1JZClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0QWN0aXZlUmF0aW5nQnV0dG9uKClcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHJhdGluZyBidXR0b24gaXRzZWxmIGhhc24ndCBiZWVuIGNyZWF0ZWQgeWV0IC0gd2FpdCBmb3IgdGhlIE9TRCB0byBmaW5pc2ggYnVpbGRpbmcgaXQsIHRoZW4gcmV0cnkuXG4gICAgICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2V0QWN0aXZlUmF0aW5nQnV0dG9uKCkpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUHJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgICAgICAgICAgICAgaWYgKCFpZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBudWxsXG4gICAgICAgICAgICAgICAgcHJlbG9hZFByZXZpZXdEYXRhKGlkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGF0YS1pZCddIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzY2hlZHVsZVByZWxvYWQoKVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBpZiAocHJldmlld0J1dHRvbkxvYWRpbmcpIHJldHVyblxuICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRvUHJldmlld0J1dHRvbkNsaWNrKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3Qgb3BlbiBwcmV2aWV3IHBvcHVwXCIsIGV4KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKClcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9QcmV2aWV3QnV0dG9uQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVyaW1lbnRhbCBhbmQgd2lsbCBtYXliZSBiZSB1c2VkIGluIGZ1dHVyZSByZWxlYXNlc1xuICAgICAgICAgICAgY29uc3QgZ2V0Tm93UGxheWluZ0l0ZW1JZEZyb21TZXNzaW9uID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLk5PV19QTEFZSU5HX0lURU19YClcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcmVzb2x2ZSBub3ctcGxheWluZyBpdGVtIGZyb20gc2Vzc2lvbiwgZmFsbGluZyBiYWNrIHRvIE9TRCByYXRpbmcgYnV0dG9uXCIsIGV4KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyOiBEaWFsb2dDb250YWluZXJUZW1wbGF0ZSA9IG5ldyBEaWFsb2dDb250YWluZXJUZW1wbGF0ZShkb2N1bWVudC5ib2R5LCBkb2N1bWVudC5ib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICBkaWFsb2dDb250YWluZXIucmVuZGVyKClcblxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJylcblxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHJlc3BvbnNlIG9mIHRoZSBPU0QncyBwcmVsb2FkIG9mIHRoaXMgc2FtZSBpdGVtLCB3YWl0IGZvciBpdCBpbnN0ZWFkIG9mIGZpcmluZyBhIGR1cGxpY2F0ZSBmZXRjaC5cbiAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkICYmIHBlbmRpbmdQcmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByZXZpZXdTY3JvbGxTcGlubmVyXCI+JHtzcGlubmVySHRtbCgpfTwvZGl2PmBcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoY29udGVudERpdilcbiAgICAgICAgICAgICAgICBhd2FpdCBwZW5kaW5nUHJlbG9hZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjYWNoZWRHcm91cCA9ICFwcm9ncmFtRGF0YVN0b3JlLmlzR3JvdXBzQ2FjaGVFeHBpcmVkXG4gICAgICAgICAgICAgICAgPyBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5maW5kKGcgPT4gZy5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKSlcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICAgICAgICBsZXQgYWN0aXZlR3JvdXBJZDogc3RyaW5nXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFBhZ2U6IEdyb3VwSXRlbXNSZXN1bHRcbiAgICAgICAgICAgIGxldCBpbml0aWFsV2luZG93U3RhcnRJbmRleDogbnVtYmVyXG5cbiAgICAgICAgICAgIGlmIChjYWNoZWRHcm91cCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgT3BlbmluZyBwcmV2aWV3IHBvcHVwIGZvciBpdGVtICR7aXRlbUlkfSB1c2luZyBjYWNoZWQgZ3JvdXAgZGF0YWApXG4gICAgICAgICAgICAgICAgYWN0aXZlR3JvdXBJZCA9IGNhY2hlZEdyb3VwLmdyb3VwSWRcbiAgICAgICAgICAgICAgICBpbml0aWFsV2luZG93U3RhcnRJbmRleCA9IGNhY2hlZEdyb3VwLmxvYWRlZFN0YXJ0SW5kZXggPz8gMFxuICAgICAgICAgICAgICAgIGluaXRpYWxQYWdlID0geyBpdGVtczogWy4uLmNhY2hlZEdyb3VwLml0ZW1zXSwgdG90YWxSZWNvcmRDb3VudDogY2FjaGVkR3JvdXAubG9hZGVkVG90YWxSZWNvcmRDb3VudCA/PyBjYWNoZWRHcm91cC5pdGVtcy5sZW5ndGggfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYE9wZW5pbmcgcHJldmlldyBwb3B1cCBmb3IgaXRlbSAke2l0ZW1JZH0sIGZldGNoaW5nIGdyb3VwIGRhdGFgKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcmV2aWV3U2Nyb2xsU3Bpbm5lclwiPiR7c3Bpbm5lckh0bWwoKX08L2Rpdj5gXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVTcGlubmVyKGNvbnRlbnREaXYpXG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1UeXBlLCBjb250YWluZXJOYW1lLCBncm91cHMsIGFjdGl2ZUdyb3VwSWQ6IGZldGNoZWRBY3RpdmVHcm91cElkLCBhY3RpdmVJdGVtSW5kZXggfSA9IGF3YWl0IGxvYWRJdGVtUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gZ3JvdXBzXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5tYXJrR3JvdXBzRmV0Y2hlZCgpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS50eXBlID0gSXRlbVR5cGVbaXRlbVR5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSA9IGNvbnRhaW5lck5hbWUgPz8gJydcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkID0gZmV0Y2hlZEFjdGl2ZUdyb3VwSWRcblxuICAgICAgICAgICAgICAgIC8vIExvYWQgYSAzLXBhZ2Ugd2luZG93IChwYWdlIG9mIHRoZSBhY3RpdmUgZXBpc29kZSwgcGx1cyBvbmUgcGFnZSBiZWZvcmUgYW5kIGFmdGVyKVxuICAgICAgICAgICAgICAgIGNvbnN0IFBBR0VfU0laRSA9IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZU9mQWN0aXZlRXBpc29kZSA9IE1hdGguZmxvb3IoYWN0aXZlSXRlbUluZGV4IC8gUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgLSAxKSAqIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93TGltaXQgPSAocGFnZU9mQWN0aXZlRXBpc29kZSArIDIpICogUEFHRV9TSVpFIC0gaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXhcblxuICAgICAgICAgICAgICAgIGluaXRpYWxQYWdlID0gYXdhaXQgbG9hZEdyb3VwSXRlbXMoYWN0aXZlR3JvdXBJZCwgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXgsIGluaXRpYWxXaW5kb3dMaW1pdClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gaXRlbUlkXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQgPSBhY3RpdmVHcm91cElkXG5cbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJycgLy8gcmVtb3ZlIHRoZSBsb2FkaW5nIHNwaW5uZXJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdUb2tlbiA9IHByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaXNTdGFuZGFsb25lTW92aWUgPSBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPT09IEl0ZW1UeXBlLk1vdmllXG4gICAgICAgICAgICBjb25zdCBpc1NvdXJjZWRGcm9tQ29sbGVjdGlvbiA9IHByb2dyYW1EYXRhU3RvcmUudHlwZSA9PT0gSXRlbVR5cGUuUGxheWxpc3QgfHwgcHJvZ3JhbURhdGFTdG9yZS50eXBlID09PSBJdGVtVHlwZS5Cb3hTZXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGlzU3RhbmRhbG9uZU1vdmllICYmIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5tYXAoKGcsIGkpID0+IGkgPT09IDAgJiYgZy5ncm91cElkID09PSBpdGVtSWQgPyB7IC4uLmcsIGdyb3VwTmFtZTogU0VBUkNIX0NPTExFQ1RJT05TX0dST1VQX05BTUUgfSA6IGcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGlzU2VhcmNoaW5nQ29sbGVjdGlvbnMgPSAoaXNTdGFuZGFsb25lTW92aWUgfHwgaXNTb3VyY2VkRnJvbUNvbGxlY3Rpb24pICYmIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zICYmIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgbGV0IGNvbGxlY3Rpb25zU2VhcmNoRG9uZSA9ICFpc1NlYXJjaGluZ0NvbGxlY3Rpb25zXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uc1NlYXJjaDogUHJvbWlzZTx2b2lkPiA9IGlzU2VhcmNoaW5nQ29sbGVjdGlvbnNcbiAgICAgICAgICAgICAgICA/IGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQpLnRoZW4oY29sbGVjdGlvbkdyb3VwcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sbGVjdGlvbkdyb3Vwcy5sZW5ndGggfHwgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkICE9PSBpdGVtSWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxmR3JvdXAgPSBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwc1swXVxuICAgICAgICAgICAgICAgICAgICAvLyBFeGNsdWRlIHRoZSBjb2xsZWN0aW9uL3BsYXlsaXN0IHRoaXMgaXRlbSB3YXMgYWxyZWFkeSBwbGF5ZWQgZnJvbSAtIGl0J3MgYWxyZWFkeSB0aGUgYWN0aXZlL2RlZmF1bHQgZ3JvdXAuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dyb3VwcyA9IGNvbGxlY3Rpb25Hcm91cHMuZmlsdGVyKGcgPT4gZy5ncm91cElkICE9PSBzZWxmR3JvdXAuZ3JvdXBJZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdHcm91cHMubGVuZ3RoKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBbc2VsZkdyb3VwLCAuLi5uZXdHcm91cHNdLm1hcCgoZywgaSkgPT4gKHsgLi4uZywgaW5kZXhOdW1iZXI6IGkgfSkpXG4gICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7IGNvbGxlY3Rpb25zU2VhcmNoRG9uZSA9IHRydWUgfSlcbiAgICAgICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpXG5cbiAgICAgICAgICAgIGNvbnN0IGNhblN3aXRjaEdyb3VwcyA9ICgpOiBib29sZWFuID0+IHByb2dyYW1EYXRhU3RvcmUudHlwZSAhPT0gSXRlbVR5cGUuTW92aWUgfHwgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnNcblxuICAgICAgICAgICAgY29uc3QgcG9wdXBUaXRsZTogUG9wdXBUaXRsZVRlbXBsYXRlID0gbmV3IFBvcHVwVGl0bGVUZW1wbGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBGb2N1c0NvbnRhaW5lcicpLCAtMSwgcHJvZ3JhbURhdGFTdG9yZSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUucmVuZGVyKGFzeW5jIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIGlmICghY2FuU3dpdGNoR3JvdXBzKCkpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbnRlbnRDb250YWluZXInKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJydcblxuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVHcm91cEVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLCBjb250ZW50RGl2LCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwLmluZGV4TnVtYmVyLCBwb3B1cFRpdGxlLCBsb2FkR3JvdXBJdGVtcylcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cFZpZXdUb2tlbiA9IHByb2dyYW1EYXRhU3RvcmUuY3VycmVudFZpZXdUb2tlblxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25zU2VhcmNoRG9uZSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ3ByZXZpZXdTY3JvbGxTcGlubmVyJylcbiAgICAgICAgICAgICAgICBzcGlubmVyLmlubmVySFRNTCA9IHNwaW5uZXJIdG1sKClcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHNwaW5uZXIpXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVTcGlubmVyKHNwaW5uZXIpXG5cbiAgICAgICAgICAgICAgICBhd2FpdCBjb2xsZWN0aW9uc1NlYXJjaFxuICAgICAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGEgZ3JvdXAgd2FzIHNlbGVjdGVkLCBvciB0aGUgcG9wdXAgY2xvc2VkKSB3aGlsZSB0aGlzIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KGdyb3VwVmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVHcm91cEVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLCBjb250ZW50RGl2LCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwLmluZGV4TnVtYmVyLCBwb3B1cFRpdGxlLCBsb2FkR3JvdXBJdGVtcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFN3aXRjaGFibGUoY2FuU3dpdGNoR3JvdXBzKCkpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUoY2FuU3dpdGNoR3JvdXBzKCkpXG5cbiAgICAgICAgICAgIGF3YWl0IGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVMYXp5SXRlbUxpc3QoY29udGVudERpdiwgKHN0YXJ0SW5kZXgpID0+IGxvYWRHcm91cEl0ZW1zKGFjdGl2ZUdyb3VwSWQsIHN0YXJ0SW5kZXgpLCB2aWV3VG9rZW4sIGluaXRpYWxQYWdlLCBpbml0aWFsV2luZG93U3RhcnRJbmRleClcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VGV4dChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwPy5ncm91cE5hbWUgPz8gJycpXG4gICAgICAgICAgICBpZiAocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cCkgcG9wdXBUaXRsZS5zZXRXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cClcbiAgICAgICAgICAgIGlmIChwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgJiYgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8ucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odXBkYXRlZCA9PiBwb3B1cFRpdGxlLnNldFdhdGNoZWRDb3VudCh1cGRhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHdhdGNoZWQgY291bnQgZm9yIGdyb3VwICR7cHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8uZ3JvdXBJZH1gLCBleCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgaXRlbSB0aGF0IGlzIGN1cnJlbnRseSBwbGF5aW5nXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtID0gY29udGVudERpdi5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWRMaXN0SXRlbScpIFxuICAgICAgICAgICAgaWYgKCFhY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgZmluZCBhY3RpdmUgbWVkaWEgc291cmNlIGVsZW1lbnQgaW4gcHJldmlldyBsaXN0LiBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW5cIiwgcHJvZ3JhbURhdGFTdG9yZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0/LnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVubG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiVW5sb2FkaW5nIHZpZGVvIHZpZXdcIilcblxuICAgICAgICAvLyBDbGVhciBvbGQgZGF0YSBhbmQgcmVzZXQgcHJldmlld0NvbnRhaW5lckxvYWRlZCBmbGFnXG4gICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFZpZGVvRWxlbWVudD4oJ3ZpZGVvLmh0bWx2aWRlb3BsYXllcicpXG4gICAgICAgIHZpZGVvRWxlbWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIG9uVmlkZW9UaW1lVXBkYXRlKVxuICAgICAgICB2aWRlb0VsZW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JhdGVjaGFuZ2UnLCBvblZpZGVvUmF0ZUNoYW5nZSlcbiAgICAgICAgdmlkZW9FbGVtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKCdlbXB0aWVkJywgb25WaWRlb0VtcHRpZWQpXG4gICAgICAgIHN0b3BXYWl0aW5nRm9ySXRlbVN3aXRjaCgpXG4gICAgICAgIGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQgPSAtMVxuXG4gICAgICAgIHByZWxvYWRPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgICAgIHByZWxvYWRPYnNlcnZlciA9IG51bGxcbiAgICAgICAgcGVuZGluZ1ByZWxvYWRJdGVtSWQgPSBudWxsXG4gICAgICAgIHBlbmRpbmdQcmVsb2FkID0gbnVsbFxuXG4gICAgICAgIGJ1dHRvbnNDb250YWluZXJPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgICAgIGJ1dHRvbnNDb250YWluZXJPYnNlcnZlciA9IG51bGxcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlld1BvcHVwJyk/LnJlbW92ZSgpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwb3B1cFByZXZpZXdCdXR0b24nKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5yZW1vdmUoKSlcblxuICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gZmFsc2UgLy8gUmVzZXQgZmxhZyB3aGVuIHVubG9hZGluZ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzUHJldmlld0J1dHRvbkNyZWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBnZXRBY3RpdmVCdXR0b25zQmFyKCk/LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cFByZXZpZXdCdXR0b24nKSAhPSBudWxsXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==