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
.previewGroupListItemTitle {
    width: 100%;
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
`, "",{"version":3,"sources":["webpack://./Web/Styles/Styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,0DAA0D;IAC1D,eAAe;IACf,WAAW;IACX,aAAa;IACb,UAAU;IACV,WAAW;AACf;AACA;IACI,eAAe;AACnB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;IACpB,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,iDAAiD;AACrD;AACA;IACI,UAAU;IACV,2CAA2C;AAC/C;AACA,uEAAuE;AACvE;IACI,2BAA2B;IAC3B,2BAA2B;AAC/B;AACA;IACI,gBAAgB;IAChB,gCAAgC;IAChC,gEAAgE;AACpE;AACA;IACI,UAAU;AACd;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,0CAA0C;IAC1C,kBAAkB;AACtB;AACA;IACI,0CAA0C;AAC9C;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,eAAe;AACnB;AACA;IACI,WAAW;AACf;AACA;IACI,oBAAoB;AACxB;AACA;IACI,WAAW;AACf;AACA;IACI,cAAc;AAClB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,0BAA0B;IAC1B,eAAe;IACf,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA,sEAAsE;AACtE;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,2BAA2B;IAC3B,wBAAwB;AAC5B;AACA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,qBAAqB;AACzB;AACA;IACI,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,qBAAqB;IACrB,oBAAoB;IACpB,wBAAwB;IACxB,yBAAyB;IACzB,wBAAwB;AAC5B","sourcesContent":[".selectedListItem {\n    height: auto;\n}\n.previewListItem {\n    flex-direction: column;\n    align-items: flex-start;\n}\n.previewListItemContent {\n    width: 100%;\n    min-height: 15.5vh;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n}\n.previewListItem-sideBySide {\n    margin-bottom: 1em;\n}\n.previewListItem-sideBySide .previewItemTitle .actionSheetItemText {\n    font-size: 1.3em;\n}\n.previewListItem-sideBySide .previewItemDescription {\n    margin-top: 1em;\n}\n.previewListItem-sideBySide .previewListItemContent .itemMiscInfo.previewItemDetails {\n    margin-left: 0.5em !important;\n}\n.previewPopup {\n    animation: 140ms ease-out 0s 1 normal both running scaleup;\n    position: fixed;\n    margin: 0px;\n    bottom: 1.5vh;\n    left: 50vw;\n    width: 48vw;\n}\n.previewPopupTitle {\n    max-height: 4vh;\n}\n.previewPopupTitle h1.actionSheetTitle {\n    margin-left: 0 !important;\n}\n.previewGroupWatchedCount {\n    cursor: pointer;\n    pointer-events: auto;\n    margin-left: auto;\n    margin-right: 0.4em;\n    padding: 0.2em 0.6em;\n    border-radius: 0.3em;\n    white-space: nowrap;\n    opacity: 0.7;\n    display: flex;\n    align-items: center;\n    transition: opacity 0.15s, background-color 0.15s;\n}\n.previewGroupWatchedCount:hover {\n    opacity: 1;\n    background-color: rgba(255, 255, 255, 0.12);\n}\n/* Remove button highlighting when hovering over the group statistics */\n.previewGroupListItemTitle:has(.previewGroupWatchedCount:hover) {\n    background: none !important;\n    box-shadow: none !important;\n}\n.previewPopupScroller {\n    max-height: 60vh;\n    scrollbar-width: thin !important;\n    scrollbar-color: rgba(255, 255, 255, 0.4) transparent !important;\n}\n.previewPopupScroller::-webkit-scrollbar {\n    width: 8px;\n}\n.previewPopupScroller::-webkit-scrollbar-track {\n    background: transparent;\n}\n.previewPopupScroller::-webkit-scrollbar-thumb {\n    background-color: rgba(255, 255, 255, 0.4);\n    border-radius: 4px;\n}\n.previewPopupScroller::-webkit-scrollbar-thumb:hover {\n    background-color: rgba(255, 255, 255, 0.6);\n}\n.previewQuickActionContainer {\n    margin-left: auto;\n}\n.previewQuickActionContainer button:disabled {\n    opacity: 0.3;\n    cursor: default;\n}\n.previewItemContainer {\n    width: 100%;\n}\n.previewItemTitle {\n    pointer-events: none;\n}\n.previewGroupListItemTitle {\n    width: 100%;\n}\n.previewItemImageCard {\n    max-width: 30%;\n}\n.previewItemContentRow {\n    align-items: flex-start;\n}\n.previewItemDescriptionColumn {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    min-width: 0;\n}\n.previewItemDescription {\n    margin-left: 0.5em;\n    margin-top: 0.5em;\n    margin-right: 1.5em;\n    display: block;\n    overflow: hidden;\n    max-height: 150px;\n}\n.previewItemDescription.expanded {\n    max-height: none;\n}\n.previewItemReadMoreButton {\n    align-self: flex-start;\n    margin-left: 0.5em;\n    margin-top: 0.25em;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n    font-size: 0.9em;\n    opacity: 0.75;\n}\n.previewItemReadMoreButton:hover {\n    opacity: 1;\n}\n.previewItemDetails {\n    margin-left: 1em;\n    justify-content: start !important;\n}\n\n/* Lock the position of this details, so that no theme can change it */\n.previewListItemContent .itemMiscInfo.previewItemDetails {\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    right: auto !important;\n    bottom: auto !important;\n    transform: none !important;\n    margin-left: 1em !important;\n    margin-top: 0 !important;\n}\n.blur {\n    filter: blur(6px);\n    transition: filter 0.3s ease;\n    display: inline-block;\n}\n.blur:hover {\n    filter: blur(0);\n}\n.previewItemImageCard .blur {\n    filter: blur(32px);\n}\n.previewItemImageCard:hover .blur {\n    filter: blur(0);\n}\n.previewScrollSpinner {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1em 0;\n}\n.previewScrollSpinner .docspinner {\n    position: relative !important;\n    top: auto !important;\n    left: auto !important;\n    margin: 0 !important;\n    width: 1.95em !important;\n    height: 1.95em !important;\n    z-index: auto !important;\n}\n"],"sourceRoot":""}]);
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
exports.ListElementTemplate = exports.updateItemProgressDom = exports.setItemOverlayActive = void 0;
const BaseTemplate_1 = __webpack_require__(/*! ./BaseTemplate */ "./Web/Components/BaseTemplate.ts");
const FavoriteIconTemplate_1 = __webpack_require__(/*! ./QuickActions/FavoriteIconTemplate */ "./Web/Components/QuickActions/FavoriteIconTemplate.ts");
const PlayStateIconTemplate_1 = __webpack_require__(/*! ./QuickActions/PlayStateIconTemplate */ "./Web/Components/QuickActions/PlayStateIconTemplate.ts");
const PlayIconTemplate_1 = __webpack_require__(/*! ./QuickActions/PlayIconTemplate */ "./Web/Components/QuickActions/PlayIconTemplate.ts");
const ItemDetails_1 = __webpack_require__(/*! ./ItemDetails */ "./Web/Components/ItemDetails.ts");
const ItemType_1 = __webpack_require__(/*! ../Models/ItemType */ "./Web/Models/ItemType.ts");
const DataFetcher_1 = __webpack_require__(/*! ../Services/DataFetcher */ "./Web/Services/DataFetcher.ts");
const ExpandedItemLayout_1 = __webpack_require__(/*! ../Models/ExpandedItemLayout */ "./Web/Models/ExpandedItemLayout.ts");
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
        // language=HTML
        const titleRow = `
            <div class="previewItemContainer flex">
                <button class="listItem previewItemTitle" type="button">
                    ${indexNumberHtml(this.item, this.programDataStore.type)}
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
        var _a, _b;
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
            void this.playbackHandler.play(this.item.Id, this.item.UserData.PlaybackPositionTicks);
            if (this.programDataStore.pluginSettings.AutoClosePreview)
                (_a = document.getElementById('previewPopup')) === null || _a === void 0 ? void 0 : _a.remove();
        };
        document.getElementById(`start-item-${this.item.Id}`).addEventListener('click', startPlayback);
        (_b = document.getElementById(`playButton-${this.item.Id}`)) === null || _b === void 0 ? void 0 : _b.addEventListener('click', startPlayback);
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
        this.getElement().querySelector('h1').innerText = text;
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
exports.DataFetcher = exports.togglePlayedStateLocally = exports.adjustWatchedCount = exports.updateBlurDom = exports.updateWatchedCountDom = exports.cycleWatchedCountMode = exports.renderWatchedCountInto = void 0;
const WatchProgress_1 = __webpack_require__(/*! ../Models/PreviewData/WatchProgress */ "./Web/Models/PreviewData/WatchProgress.ts");
function renderWatchedCountInto(programDataStore, element, group) {
    const mode = element.dataset.mode !== undefined ? Number(element.dataset.mode) : programDataStore.pluginSettings.WatchCountDisplayMode;
    element.innerHTML = (0, WatchProgress_1.renderWatchedCountInnerHtml)(group, mode);
}
exports.renderWatchedCountInto = renderWatchedCountInto;
function cycleWatchedCountMode(programDataStore, element, group) {
    const current = element.dataset.mode !== undefined ? Number(element.dataset.mode) : programDataStore.pluginSettings.WatchCountDisplayMode;
    element.dataset.mode = String((0, WatchProgress_1.nextWatchCountDisplayMode)(current, programDataStore.pluginSettings.WatchCountDisplayMode));
    renderWatchedCountInto(programDataStore, element, group);
}
exports.cycleWatchedCountMode = cycleWatchedCountMode;
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
exports.updateWatchedCountDom = updateWatchedCountDom;
function updateBlurDom(programDataStore, itemId, played) {
    var _a, _b, _c;
    const settings = programDataStore.pluginSettings;
    const shouldBlur = !(settings.OnlyBlurUnwatched && played);
    (_a = document.getElementById(`previewItemImageCard-${itemId}`)) === null || _a === void 0 ? void 0 : _a.classList.toggle('blur', settings.BlurThumbnail && shouldBlur);
    (_c = (_b = document.getElementById(`item-${itemId}`)) === null || _b === void 0 ? void 0 : _b.querySelector('.previewItemDescription')) === null || _c === void 0 ? void 0 : _c.classList.toggle('blur', settings.BlurDescription && shouldBlur);
}
exports.updateBlurDom = updateBlurDom;
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
exports.adjustWatchedCount = adjustWatchedCount;
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
    const played = item.UserData.Played || playedPercentage >= programDataStore.serverSettings.MaxResumePct;
    const updatedItem = Object.assign(Object.assign({}, item), { UserData: Object.assign(Object.assign({}, item.UserData), { PlaybackPositionTicks: positionTicks, PlayedPercentage: playedPercentage, Played: played }) });
    programDataStore.updateItem(updatedItem);
    (0, ListElementTemplate_1.updateItemProgressDom)(itemId, playedPercentage);
    (0, ItemDetails_1.updateEndTimeDisplay)(updatedItem);
    if (played !== item.UserData.Played)
        (0, DataFetcher_1.updateBlurDom)(programDataStore, itemId, played);
    (0, DataFetcher_1.adjustWatchedCount)(programDataStore, item, item.UserData.Played, played, item.UserData.PlaybackPositionTicks, positionTicks);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5QbGF5ZXJQcmV2aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxh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N0MsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ2pCLE1BQU0sT0FBTyxHQUFHLFlBQVksR0FBRyxFQUFFO1lBQ2pDLE9BQU8sT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEtBQUssT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHO1NBQ3ZFO1FBQ0QsT0FBTyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO0tBQ3REO0lBRUQsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pELE9BQU8sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEtBQUssTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHO0tBQ3RFO0lBQ0QsSUFBSSxXQUFXLElBQUksQ0FBQyxFQUFFO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLFNBQVMsR0FBRyxFQUFFO1FBQzNCLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxJQUFJO0tBQ3JFO0lBQ0QsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO1FBQ2hCLE1BQU0sS0FBSyxHQUFHLFVBQVUsR0FBRyxFQUFFO1FBQzdCLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHO0tBQ2pFO0lBQ0QsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLFlBQVksR0FBRyxFQUFFO1FBQ2pDLE9BQU8sT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENB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LHFCQUFxQixDQUFDLEtBQUksSUFBSTtJQUM5RSxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1dlYi9TdHlsZXMvU3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL1dlYi9TdHlsZXMvU3R5bGVzLmNzcz84NDBlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvQmFzZVRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0RpYWxvZ0NvbnRhaW5lclRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0dyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9JdGVtRGV0YWlscy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9MaXN0RWxlbWVudFRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUXVpY2tBY3Rpb25zL0Zhdm9yaXRlSWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9QbGF5SWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9QbGF5U3RhdGVJY29uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvU3Bpbm5lci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvRW5kcG9pbnRzLnRzIiwid2VicGFjazovLy8uL1dlYi9MaXN0RWxlbWVudEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9FeHBhbmRlZEl0ZW1MYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9JdGVtVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL0xvZ0xldmVsLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cC50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1ByZXZpZXdEYXRhL1dhdGNoUHJvZ3Jlc3MudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9TZXJ2ZXJTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1dhdGNoQ291bnREaXNwbGF5TW9kZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvRGF0YUZldGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvUGxheWJhY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL1dlYi9JblBsYXllclByZXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWxlY3RlZExpc3RJdGVtIHtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4ucHJldmlld0xpc3RJdGVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDE1LjV2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUgLnByZXZpZXdJdGVtVGl0bGUgLmFjdGlvblNoZWV0SXRlbVRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG59XG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUgLnByZXZpZXdJdGVtRGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0xpc3RJdGVtQ29udGVudCAuaXRlbU1pc2NJbmZvLnByZXZpZXdJdGVtRGV0YWlscyB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtICFpbXBvcnRhbnQ7XG59XG4ucHJldmlld1BvcHVwIHtcbiAgICBhbmltYXRpb246IDE0MG1zIGVhc2Utb3V0IDBzIDEgbm9ybWFsIGJvdGggcnVubmluZyBzY2FsZXVwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3R0b206IDEuNXZoO1xuICAgIGxlZnQ6IDUwdnc7XG4gICAgd2lkdGg6IDQ4dnc7XG59XG4ucHJldmlld1BvcHVwVGl0bGUge1xuICAgIG1heC1oZWlnaHQ6IDR2aDtcbn1cbi5wcmV2aWV3UG9wdXBUaXRsZSBoMS5hY3Rpb25TaGVldFRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMC40ZW07XG4gICAgcGFkZGluZzogMC4yZW0gMC42ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMsIGJhY2tncm91bmQtY29sb3IgMC4xNXM7XG59XG4ucHJldmlld0dyb3VwV2F0Y2hlZENvdW50OmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4vKiBSZW1vdmUgYnV0dG9uIGhpZ2hsaWdodGluZyB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIGdyb3VwIHN0YXRpc3RpY3MgKi9cbi5wcmV2aWV3R3JvdXBMaXN0SXRlbVRpdGxlOmhhcygucHJldmlld0dyb3VwV2F0Y2hlZENvdW50OmhvdmVyKSB7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlciB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcbiAgICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi5wcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciBidXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ucHJldmlld0l0ZW1Db250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnByZXZpZXdJdGVtVGl0bGUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkIHtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbn1cbi5wcmV2aWV3SXRlbUNvbnRlbnRSb3cge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb25Db2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb24uZXhwYW5kZWQge1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG59XG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgbWFyZ2luLXRvcDogMC4yNWVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgb3BhY2l0eTogMC43NTtcbn1cbi5wcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuLnByZXZpZXdJdGVtRGV0YWlscyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi8qIExvY2sgdGhlIHBvc2l0aW9uIG9mIHRoaXMgZGV0YWlscywgc28gdGhhdCBubyB0aGVtZSBjYW4gY2hhbmdlIGl0ICovXG4ucHJldmlld0xpc3RJdGVtQ29udGVudCAuaXRlbU1pc2NJbmZvLnByZXZpZXdJdGVtRGV0YWlscyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cbi5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4zcyBlYXNlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5ibHVyOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG59XG4ucHJldmlld0l0ZW1JbWFnZUNhcmQgLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cigzMnB4KTtcbn1cbi5wcmV2aWV3SXRlbUltYWdlQ2FyZDpob3ZlciAuYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xufVxuLnByZXZpZXdTY3JvbGxTcGlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMWVtIDA7XG59XG4ucHJldmlld1Njcm9sbFNwaW5uZXIgLmRvY3NwaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMS45NWVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxLjk1ZW0gIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL1dlYi9TdHlsZXMvU3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDBEQUEwRDtJQUMxRCxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpREFBaUQ7QUFDckQ7QUFDQTtJQUNJLFVBQVU7SUFDViwyQ0FBMkM7QUFDL0M7QUFDQSx1RUFBdUU7QUFDdkU7SUFDSSwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGdFQUFnRTtBQUNwRTtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBLHNFQUFzRTtBQUN0RTtJQUNJLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VsZWN0ZWRMaXN0SXRlbSB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLnByZXZpZXdMaXN0SXRlbSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ucHJldmlld0xpc3RJdGVtQ29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxNS41dmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUgLnByZXZpZXdJdGVtVGl0bGUgLmFjdGlvblNoZWV0SXRlbVRleHQge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUgLnByZXZpZXdJdGVtRGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxufVxcbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0xpc3RJdGVtQ29udGVudCAuaXRlbU1pc2NJbmZvLnByZXZpZXdJdGVtRGV0YWlscyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldmlld1BvcHVwIHtcXG4gICAgYW5pbWF0aW9uOiAxNDBtcyBlYXNlLW91dCAwcyAxIG5vcm1hbCBib3RoIHJ1bm5pbmcgc2NhbGV1cDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm90dG9tOiAxLjV2aDtcXG4gICAgbGVmdDogNTB2dztcXG4gICAgd2lkdGg6IDQ4dnc7XFxufVxcbi5wcmV2aWV3UG9wdXBUaXRsZSB7XFxuICAgIG1heC1oZWlnaHQ6IDR2aDtcXG59XFxuLnByZXZpZXdQb3B1cFRpdGxlIGgxLmFjdGlvblNoZWV0VGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG4ucHJldmlld0dyb3VwV2F0Y2hlZENvdW50IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMC40ZW07XFxuICAgIHBhZGRpbmc6IDAuMmVtIDAuNmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzO1xcbn1cXG4ucHJldmlld0dyb3VwV2F0Y2hlZENvdW50OmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcXG59XFxuLyogUmVtb3ZlIGJ1dHRvbiBoaWdobGlnaHRpbmcgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSBncm91cCBzdGF0aXN0aWNzICovXFxuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGU6aGFzKC5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQ6aG92ZXIpIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV2aWV3UG9wdXBTY3JvbGxlciB7XFxuICAgIG1heC1oZWlnaHQ6IDYwdmg7XFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG4ucHJldmlld1BvcHVwU2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHJldmlld1BvcHVwU2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcbi5wcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciBidXR0b246ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLnByZXZpZXdJdGVtQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5wcmV2aWV3SXRlbVRpdGxlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5wcmV2aWV3R3JvdXBMaXN0SXRlbVRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5wcmV2aWV3SXRlbUltYWdlQ2FyZCB7XFxuICAgIG1heC13aWR0aDogMzAlO1xcbn1cXG4ucHJldmlld0l0ZW1Db250ZW50Um93IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAwO1xcbn1cXG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG59XFxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb24uZXhwYW5kZWQge1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbn1cXG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMC4yNWVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cXG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5wcmV2aWV3SXRlbURldGFpbHMge1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIExvY2sgdGhlIHBvc2l0aW9uIG9mIHRoaXMgZGV0YWlscywgc28gdGhhdCBubyB0aGVtZSBjYW4gY2hhbmdlIGl0ICovXFxuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQgLml0ZW1NaXNjSW5mby5wcmV2aWV3SXRlbURldGFpbHMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcXG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMWVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG59XFxuLmJsdXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYmx1cjpob3ZlciB7XFxuICAgIGZpbHRlcjogYmx1cigwKTtcXG59XFxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkIC5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDMycHgpO1xcbn1cXG4ucHJldmlld0l0ZW1JbWFnZUNhcmQ6aG92ZXIgLmJsdXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XFxufVxcbi5wcmV2aWV3U2Nyb2xsU3Bpbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG59XFxuLnByZXZpZXdTY3JvbGxTcGlubmVyIC5kb2NzcGlubmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XFxuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMS45NWVtICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMS45NWVtICFpbXBvcnRhbnQ7XFxuICAgIHotaW5kZXg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVGVtcGxhdGUge1xuICAgIC8qXG4gICAgICogdGhlIEhUTUwgYmFzZWQgSUQgb2YgdGhlIG5ldyBnZW5lcmF0ZWQgRWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZWxlbWVudElkOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50LCBwcml2YXRlIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7IH1cblxuICAgIHB1YmxpYyBnZXRDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkFmdGVySW5kZXg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEVsZW1lbnRJZChlbGVtZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRJZDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmdldEVsZW1lbnRJZCgpfWApO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBzdHJpbmc7XG5cbiAgICBhYnN0cmFjdCByZW5kZXIoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IHZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgYWRkRWxlbWVudFRvQ29udGFpbmVyKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIC8vIEFkZCBFbGVtZW50IGFzIHRoZSBmaXJzdCBjaGlsZCBpZiBwb3NpdGlvbiBpcyBuZWdhdGl2ZVxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSA8IDAgJiYgdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZmlyc3RFbGVtZW50Q2hpbGQuYmVmb3JlKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgaWYgY29udGFpbmVyIGlzIGVtcHR5XG4gICAgICAgIGlmICghdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuaW5uZXJIVE1MID0gdGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGlsZEJlZm9yZSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkubGFzdEVsZW1lbnRDaGlsZFxuICAgICAgICBpZiAodGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpICYmIHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgPj0gMClcbiAgICAgICAgICAgIGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlblt0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpXTtcbiAgICAgICAgXG4gICAgICAgIGNoaWxkQmVmb3JlLmFmdGVyKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgc3RyaW5nVG9Ob2RlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcpOiBOb2RlIHtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHRlbXBsYXRlU3RyaW5nO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBkaWFsb2dCYWNrZHJvcElkID0gJ2RpYWxvZ0JhY2tkcm9wJ1xuICAgIGRpYWxvZ0NvbnRhaW5lcklkID0gJ2RpYWxvZ0NvbnRhaW5lcidcbiAgICBwb3B1cENvbnRlbnRDb250YWluZXJJZCA9ICdwb3B1cENvbnRlbnRDb250YWluZXInXG4gICAgcG9wdXBGb2N1c0NvbnRhaW5lcklkID0gJ3BvcHVwRm9jdXNDb250YWluZXInXG4gICAgXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncHJldmlld1BvcHVwJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5kaWFsb2dCYWNrZHJvcElkfVwiIGNsYXNzPVwiZGlhbG9nQmFja2Ryb3AgZGlhbG9nQmFja2Ryb3BPcGVuZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmRpYWxvZ0NvbnRhaW5lcklkfVwiIGNsYXNzPVwiZGlhbG9nQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBGb2N1c0NvbnRhaW5lcklkfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb2N1c2NvbnRhaW5lciBkaWFsb2cgYWN0aW9uc2hlZXQtbm90LWZ1bGxzY3JlZW4gYWN0aW9uU2hlZXQgY2VudGVyZWREaWFsb2cgb3BlbmVkIHByZXZpZXdQb3B1cCBhY3Rpb25TaGVldENvbnRlbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlzdG9yeT1cInRydWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmVtb3Zlb25jbG9zZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBDb250ZW50Q29udGFpbmVySWR9XCIgY2xhc3M9XCJhY3Rpb25TaGVldFNjcm9sbGVyIHNjcm9sbFkgcHJldmlld1BvcHVwU2Nyb2xsZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRFbGVtZW50SWQoKSkpXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge3JlbmRlcldhdGNoZWRDb3VudElubmVySHRtbH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4uL01vZGVscy9XYXRjaENvdW50RGlzcGxheU1vZGVcIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZ3JvdXA6IEdyb3VwLCBwcml2YXRlIGlzQ3VycmVudEdyb3VwOiBib29sZWFuLCBwcml2YXRlIHNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4sIHByaXZhdGUgd2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgZ3JvdXAtJHtncm91cC5ncm91cElkfWApO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5ncm91cC5ncm91cElkfVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlIHByZXZpZXdHcm91cExpc3RJdGVtVGl0bGVcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiJHt0aGlzLmlzQ3VycmVudEdyb3VwID8gXCJtYXRlcmlhbC1pY29ucyBjaGVja1wiIDogXCJcIn1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uU2hlZXRJdGVtVGV4dFwiPiR7dGhpcy5ncm91cC5ncm91cE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnNob3dXYXRjaGVkQ291bnQgPyBgPGRpdiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFwiPiR7cmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sKHRoaXMuZ3JvdXAsIHRoaXMud2F0Y2hDb3VudERpc3BsYXlNb2RlKX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiBjbGlja0hhbmRsZXIoZSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXliYWNrUmF0ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxWaWRlb0VsZW1lbnQ+KCd2aWRlby5odG1sdmlkZW9wbGF5ZXInKT8ucGxheWJhY2tSYXRlIHx8IDE7XG59XG5cbmZ1bmN0aW9uIHplcm9QYWQobnVtOiBudW1iZXIsIHBsYWNlczogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgcmV0dXJuIFN0cmluZyhudW0pLnBhZFN0YXJ0KHBsYWNlcywgJzAnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEVuZFRpbWUocnVudGltZVRpY2tzOiBudW1iZXIsIHBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyBjb252ZXJ0IGZyb20gdGlja3MgKDEwMG5zIHVuaXRzKSB0byBtaWxsaXNlY29uZHNcbiAgICBydW50aW1lVGlja3MgLz0gMTAwMDA7XG4gICAgcGxheWJhY2tQb3NpdGlvblRpY2tzIC89IDEwMDAwO1xuXG4gICAgY29uc3QgcmVtYWluaW5nTXM6IG51bWJlciA9IChydW50aW1lVGlja3MgLSBwbGF5YmFja1Bvc2l0aW9uVGlja3MpIC8gZ2V0Q3VycmVudFBsYXliYWNrUmF0ZSgpO1xuXG4gICAgbGV0IHRpY2tzOiBudW1iZXIgPSBEYXRlLm5vdygpICsgcmVtYWluaW5nTXM7XG4gICAgdGlja3MgLT0gKG5ldyBEYXRlKCkpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7IC8vIGFkanVzdCBmb3IgdGltZXpvbmVcblxuICAgIGxldCBob3Vyczogc3RyaW5nID0gemVyb1BhZChNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyAzNjAwKSAlIDI0KSk7XG4gICAgbGV0IG1pbnV0ZXM6IHN0cmluZyA9IHplcm9QYWQoTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gNjApICUgNjApKTtcblxuICAgIHJldHVybiBgRW5kcyBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVuZFRpbWVEaXNwbGF5KGl0ZW06IFByZXZpZXdJdGVtKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lbmRzQXRbZGF0YS1pdGVtLWlkPVwiJHtpdGVtLklkfVwiXWApXG4gICAgaWYgKCFlbGVtZW50IHx8ICFpdGVtLlJ1blRpbWVUaWNrcykgcmV0dXJuXG5cbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gZm9ybWF0RW5kVGltZShpdGVtLlJ1blRpbWVUaWNrcywgaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpXG59XG5cbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsc1RlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKGBpdGVtLSR7aXRlbS5JZH1gKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfS1kZXRhaWxzXCIgY2xhc3M9XCJpdGVtTWlzY0luZm8gaXRlbU1pc2NJbmZvLXByaW1hcnkgcHJldmlld0l0ZW1EZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uUHJlbWllcmVEYXRlID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICR7KG5ldyBEYXRlKHRoaXMuaXRlbS5QcmVtaWVyZURhdGUpKS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5nZXRMb2NhbGUoKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtXCI+JHt0aGlzLmZvcm1hdFJ1blRpbWUodGhpcy5pdGVtLlJ1blRpbWVUaWNrcyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ29tbXVuaXR5UmF0aW5nID8gYDxkaXYgY2xhc3M9XCJzdGFyUmF0aW5nQ29udGFpbmVyIG1lZGlhSW5mb0l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBzdGFySWNvbiBzdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Db21tdW5pdHlSYXRpbmcudG9GaXhlZCgxKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nID8gYDxkaXYgY2xhc3M9XCJtZWRpYUluZm9JdGVtIG1lZGlhSW5mb0NyaXRpY1JhdGluZyAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmcgPj0gNjAgPyAnbWVkaWFJbmZvQ3JpdGljUmF0aW5nRnJlc2gnIDogJ21lZGlhSW5mb0NyaXRpY1JhdGluZ1JvdHRlbid9XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZHNBdCBtZWRpYUluZm9JdGVtXCIgZGF0YS1pdGVtLWlkPVwiJHt0aGlzLml0ZW0uSWR9XCI+JHtmb3JtYXRFbmRUaW1lKHRoaXMuaXRlbS5SdW5UaW1lVGlja3MsIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExvY2FsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmxhbmd1YWdlc1xuICAgICAgICAgICAgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIC8vIEB0cy1pZ25vcmUgZm9yIHVzZXJMYW5ndWFnZSAodGhpcyBhZGRzIHN1cHBvcnQgZm9yIElFKSBUT0RPOiBNb3ZlIHRvIGludGVyZmFjZVxuICAgICAgICAgICAgOiAobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9ybWF0UnVuVGltZSh0aWNrczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgLy8gZm9ybWF0IHRoZSB0aWNrcyB0byBhIHN0cmluZyB3aXRoIG1pbnV0ZXMgYW5kIGhvdXJzXG4gICAgICAgIHRpY2tzIC89IDEwMDAwOyAvLyBjb252ZXJ0IGZyb20gbWljcm9zZWNvbmRzIHRvIG1pbGxpc2Vjb25kc1xuICAgICAgICBsZXQgaG91cnM6IG51bWJlciA9IE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDM2MDApICUgMjQpO1xuICAgICAgICBsZXQgbWludXRlczogbnVtYmVyID0gTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gNjApICUgNjApO1xuICAgICAgICBsZXQgaG91cnNTdHJpbmc6IHN0cmluZyA9IGhvdXJzID4gMCA/IGAke2hvdXJzfWggYCA6ICcnO1xuICAgICAgICByZXR1cm4gYCR7aG91cnNTdHJpbmd9JHttaW51dGVzfW1gO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIlxuaW1wb3J0IHtGYXZvcml0ZUljb25UZW1wbGF0ZX0gZnJvbSBcIi4vUXVpY2tBY3Rpb25zL0Zhdm9yaXRlSWNvblRlbXBsYXRlXCJcbmltcG9ydCB7UGxheVN0YXRlSWNvblRlbXBsYXRlfSBmcm9tIFwiLi9RdWlja0FjdGlvbnMvUGxheVN0YXRlSWNvblRlbXBsYXRlXCJcbmltcG9ydCB7UGxheUljb25UZW1wbGF0ZX0gZnJvbSBcIi4vUXVpY2tBY3Rpb25zL1BsYXlJY29uVGVtcGxhdGVcIlxuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIlxuaW1wb3J0IHtJdGVtRGV0YWlsc1RlbXBsYXRlfSBmcm9tIFwiLi9JdGVtRGV0YWlsc1wiXG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiXG5pbXBvcnQge3RvZ2dsZVBsYXllZFN0YXRlTG9jYWxseX0gZnJvbSBcIi4uL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCJcbmltcG9ydCB7RXhwYW5kZWRJdGVtTGF5b3V0fSBmcm9tIFwiLi4vTW9kZWxzL0V4cGFuZGVkSXRlbUxheW91dFwiXG5cbi8vIFNob3dzL2hpZGVzIHRoZSBcInN0YXJ0IHBsYXliYWNrXCIgb3ZlcmxheSBmb3IgYSByZW5kZXJlZCBsaXN0IGl0ZW1cbmV4cG9ydCBjb25zdCBzZXRJdGVtT3ZlcmxheUFjdGl2ZSA9IChpdGVtSWQ6IHN0cmluZywgaXNBY3RpdmU6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2FyZE92ZXJsYXktJHtpdGVtSWR9YCk/LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBpc0FjdGl2ZSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheUJ1dHRvbi0ke2l0ZW1JZH1gKT8udG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcsIGlzQWN0aXZlKVxufVxuXG4vLyBVcGRhdGVzIG9yIGNyZWF0ZXMgdGhlIHByb2dyZXNzIGJhciBvZiBhIHJlbmRlcmVkIGxpc3QgaXRlbVxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW1Qcm9ncmVzc0RvbSA9IChpdGVtSWQ6IHN0cmluZywgcGVyY2VudGFnZTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZm9yZWdyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLSR7aXRlbUlkfWApPy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLml0ZW1Qcm9ncmVzc0JhckZvcmVncm91bmQnKVxuICAgIGlmIChmb3JlZ3JvdW5kKSB7XG4gICAgICAgIGZvcmVncm91bmQuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50YWdlfSVgXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNjYWxhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByZXZpZXdJdGVtSW1hZ2VDYXJkLSR7aXRlbUlkfWApPy5wYXJlbnRFbGVtZW50XG4gICAgaWYgKCFzY2FsYWJsZSB8fCAhcGVyY2VudGFnZSkgcmV0dXJuXG4gICAgc2NhbGFibGUucXVlcnlTZWxlY3RvcignI2NhcmRPdmVybGF5LScgKyBpdGVtSWQpPy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJyxcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJpbm5lckNhcmRGb290ZXIgZnVsbElubmVyQ2FyZEZvb3RlciBpbm5lckNhcmRGb290ZXJDbGVhciBpdGVtUHJvZ3Jlc3NCYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtUHJvZ3Jlc3NCYXJGb3JlZ3JvdW5kXCIgc3R5bGU9XCJ3aWR0aDoke3BlcmNlbnRhZ2V9JTtcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+YClcbn1cblxuLy8gSW5kZXggbnVtYmVyIHNwYW4gZm9yIHRoZSB0aXRsZSByb3csIGUuZy4gXCI8c3Bhbj4xPC9zcGFuPlwiIG9yIFwiPHNwYW4+MS0yPC9zcGFuPlwiIGZvciBhIG11bHRpLWVwaXNvZGUgZmlsZS5cbi8vIEVtcHR5IGZvciBNb3ZpZXMsIG9yIGl0ZW1zIHdpdGhvdXQgYW4gSW5kZXhOdW1iZXIuXG5jb25zdCBpbmRleE51bWJlckh0bWwgPSAoaXRlbTogUHJldmlld0l0ZW0sIGdyb3VwVHlwZTogSXRlbVR5cGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmICghaXRlbS5JbmRleE51bWJlciB8fCBncm91cFR5cGUgPT09IEl0ZW1UeXBlLk1vdmllKSByZXR1cm4gJydcbiAgICBcbiAgICBpZiAoaXRlbS5JbmRleE51bWJlckVuZCAmJiBpdGVtLkluZGV4TnVtYmVyRW5kICE9PSBpdGVtLkluZGV4TnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBgPHNwYW4+JHtpdGVtLkluZGV4TnVtYmVyfS0ke2l0ZW0uSW5kZXhOdW1iZXJFbmR9PC9zcGFuPmBcbiAgICB9XG5cbiAgICByZXR1cm4gYDxzcGFuPiR7aXRlbS5JbmRleE51bWJlcn08L3NwYW4+YFxufVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBxdWlja0FjdGlvbkNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgICBwcml2YXRlIHBsYXlTdGF0ZUljb246IFBsYXlTdGF0ZUljb25UZW1wbGF0ZVxuICAgIHByaXZhdGUgZmF2b3JpdGVJY29uOiBGYXZvcml0ZUljb25UZW1wbGF0ZVxuICAgIHByaXZhdGUgcGxheUljb24/OiBQbGF5SWNvblRlbXBsYXRlXG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSwgcHJpdmF0ZSBwbGF5YmFja0hhbmRsZXI6IFBsYXliYWNrSGFuZGxlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgaXRlbS0ke2l0ZW0uSWR9YClcblxuICAgICAgICAvLyBjcmVhdGUgdGVtcCBxdWljayBhY3Rpb24gY29udGFpbmVyXG4gICAgICAgIHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIC8vIGNyZWF0ZSBxdWljayBhY3Rpb25zXG4gICAgICAgIHRoaXMucGxheVN0YXRlSWNvbiA9IG5ldyBQbGF5U3RhdGVJY29uVGVtcGxhdGUodGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSlcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24gPSBuZXcgRmF2b3JpdGVJY29uVGVtcGxhdGUodGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciwgMCwgdGhpcy5pdGVtKVxuICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FeHBhbmRBbGxJdGVtcylcbiAgICAgICAgICAgIHRoaXMucGxheUljb24gPSBuZXcgUGxheUljb25UZW1wbGF0ZSh0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLCAtMSwgdGhpcy5pdGVtLCB0aGlzLml0ZW0uSWQgPT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGFkZCBxdWljayBhY3Rpb25zXG4gICAgICAgIHRoaXMucGxheVN0YXRlSWNvbi5yZW5kZXIoKVxuICAgICAgICB0aGlzLmZhdm9yaXRlSWNvbi5yZW5kZXIoKVxuICAgICAgICB0aGlzLnBsYXlJY29uPy5yZW5kZXIoKVxuXG4gICAgICAgIC8vIGFkZCBpdGVtIGRldGFpbHMvaW5mb1xuICAgICAgICBjb25zdCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IGRldGFpbHM6IEl0ZW1EZXRhaWxzVGVtcGxhdGUgPSBuZXcgSXRlbURldGFpbHNUZW1wbGF0ZShkZXRhaWxzQ29udGFpbmVyLCAtMSwgdGhpcy5pdGVtKVxuICAgICAgICBkZXRhaWxzLnJlbmRlcigpXG5cbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEltYWdlU3R5bGU6IHN0cmluZyA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL0l0ZW1zLyR7dGhpcy5pdGVtLklkfS9JbWFnZXMvUHJpbWFyeT90YWc9JHt0aGlzLml0ZW0uUHJpbWFyeUltYWdlVGFnfScpYFxuXG4gICAgICAgIGNvbnN0IHNob3VsZEJsdXI6IGJvb2xlYW4gPSAhKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5Pbmx5Qmx1clVud2F0Y2hlZCAmJiB0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkKVxuXG4gICAgICAgIC8vIE9ubHkgdGFrZXMgZWZmZWN0IHdoaWxlIGV2ZXJ5IGl0ZW0gaXMgZm9yY2UtZXhwYW5kZWRcbiAgICAgICAgY29uc3QgdXNlU2lkZUJ5U2lkZUxheW91dDogYm9vbGVhbiA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FeHBhbmRBbGxJdGVtc1xuICAgICAgICAgICAgJiYgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkV4cGFuZGVkSXRlbUxheW91dCA9PT0gRXhwYW5kZWRJdGVtTGF5b3V0LlNpZGVCeVNpZGVcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIGNvbnN0IHRpdGxlUm93OiBzdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAke2luZGV4TnVtYmVySHRtbCh0aGlzLml0ZW0sIHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RJdGVtQm9keSBhY3Rpb25zaGVldExpc3RJdGVtQm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rpb25TaGVldEl0ZW1UZXh0XCI+JHt0aGlzLml0ZW0uTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMucXVpY2tBY3Rpb25Db250YWluZXIuaW5uZXJIVE1MfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIGNvbnN0IGltYWdlQ2FyZDogc3RyaW5nID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgb3ZlcmZsb3dCYWNrZHJvcENhcmQgY2FyZC1ob3ZlcmFibGUgY2FyZC13aXRodXNlcmRhdGEgcHJldmlld0l0ZW1JbWFnZUNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZEJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFNjYWxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFBhZGRlciBjYXJkUGFkZGVyLW92ZXJmbG93QmFja2Ryb3AgbGF6eS1oaWRkZW4tY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmRJbWFnZUljb24gbWF0ZXJpYWwtaWNvbnMgdHZcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwcmV2aWV3SXRlbUltYWdlQ2FyZC0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRJbWFnZUNvbnRhaW5lciBjYXJkQ29udGVudCBpdGVtQWN0aW9uIGxhenkgYmx1cmhhc2hlZCBsYXp5LWltYWdlLWZhZGVpbi1mYXN0ICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkJsdXJUaHVtYm5haWwgJiYgc2hvdWxkQmx1ciA/ICdibHVyJyA6ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiJHtiYWNrZ3JvdW5kSW1hZ2VTdHlsZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoUHJvZ3Jlc3MgJiYgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiaW5uZXJDYXJkRm9vdGVyIGZ1bGxJbm5lckNhcmRGb290ZXIgaW5uZXJDYXJkRm9vdGVyQ2xlYXIgaXRlbVByb2dyZXNzQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtUHJvZ3Jlc3NCYXJGb3JlZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6JHt0aGlzLml0ZW0uVXNlckRhdGEuUGxheWVkUGVyY2VudGFnZX0lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkT3ZlcmxheS0ke3RoaXMuaXRlbS5JZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRPdmVybGF5Q29udGFpbmVyIGl0ZW1BY3Rpb24gJHt0aGlzLml0ZW0uSWQgPT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID8gJ2hpZGUnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0LWl0ZW0tJHt0aGlzLml0ZW0uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzPVwicGFwZXItaWNvbi1idXR0b24tbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkT3ZlcmxheUJ1dHRvbiBjYXJkT3ZlcmxheUJ1dHRvbi1ob3ZlciBpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGNhcmRPdmVybGF5RmFiLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJyZXN1bWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjYXJkT3ZlcmxheUJ1dHRvbkljb24gY2FyZE92ZXJsYXlCdXR0b25JY29uLWhvdmVyIHBsYXlfYXJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQmxvY2s6IHN0cmluZyA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJldmlld0l0ZW1EZXNjcmlwdGlvbiAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5CbHVyRGVzY3JpcHRpb24gJiYgc2hvdWxkQmx1ciA/ICdibHVyJyA6ICcnfVwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkRlc2NyaXB0aW9uID8/ICcnfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uIGhpZGVcIj5TaG93IG1vcmU8L2J1dHRvbj5cbiAgICAgICAgYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgY29uc3QgY29udGVudFJvdzogc3RyaW5nID0gdXNlU2lkZUJ5U2lkZUxheW91dCA/IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHByZXZpZXdJdGVtQ29udGVudFJvd1wiPlxuICAgICAgICAgICAgICAgICR7aW1hZ2VDYXJkfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGl0bGVSb3d9XG4gICAgICAgICAgICAgICAgICAgICR7ZGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb25CbG9ja31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgIDogYFxuICAgICAgICAgICAgJHtkZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHByZXZpZXdJdGVtQ29udGVudFJvd1wiPlxuICAgICAgICAgICAgICAgICR7aW1hZ2VDYXJkfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb25CbG9ja31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3RJdGVtIGxpc3RJdGVtLWJ1dHRvbiBhY3Rpb25TaGVldE1lbnVJdGVtIGVtYnktYnV0dG9uIHByZXZpZXdMaXN0SXRlbSR7dXNlU2lkZUJ5U2lkZUxheW91dCA/ICcgcHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RoaXMuaXRlbS5JZH1cIj5cbiAgICAgICAgICAgICAgICAke3VzZVNpZGVCeVNpZGVMYXlvdXQgPyAnJyA6IHRpdGxlUm93fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3TGlzdEl0ZW1Db250ZW50IGhpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtjb250ZW50Um93fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYXlTdGF0ZUJ1dHRvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheVN0YXRlQnV0dG9uLSR7dGhpcy5pdGVtLklkfWApXG4gICAgICAgIHBsYXlTdGF0ZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgdG9nZ2xlUGxheWVkU3RhdGVMb2NhbGx5KHRoaXMucHJvZ3JhbURhdGFTdG9yZSwgdGhpcy5pdGVtLklkKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJylcbiAgICAgICAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSlcblxuICAgICAgICBjb25zdCBzdGFydFBsYXliYWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHZvaWQgdGhpcy5wbGF5YmFja0hhbmRsZXIucGxheSh0aGlzLml0ZW0uSWQsIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkF1dG9DbG9zZVByZXZpZXcpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFydC1pdGVtLSR7dGhpcy5pdGVtLklkfWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRQbGF5YmFjaylcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXlCdXR0b24tJHt0aGlzLml0ZW0uSWR9YCk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRQbGF5YmFjaylcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge3JlbmRlcldhdGNoZWRDb3VudEludG99IGZyb20gXCIuLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBUaXRsZVRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3UG9wdXBUaXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicG9wdXBUaXRsZVN3aXRjaEljb25cIiBjbGFzcz1cImFjdGlvbnNoZWV0TWVudUl0ZW1JY29uIGxpc3RJdGVtSWNvbiBsaXN0SXRlbUljb24tdHJhbnNwYXJlbnQgbWF0ZXJpYWwtaWNvbnMga2V5Ym9hcmRfYmFja3NwYWNlICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5sZW5ndGggPiAxID8gJycgOiAnaGlkZSd9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImFjdGlvblNoZWV0VGl0bGVcIj48L2gxPlxuICAgICAgICAgICAgICAgICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgPyAnPGRpdiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFwiPjwvZGl2PicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNsaWNrSGFuZGxlcihlKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lclRleHQgPSB0ZXh0XG4gICAgfVxuXG4gICAgcHVibGljIHNldFN3aXRjaGFibGUoc3dpdGNoYWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI3BvcHVwVGl0bGVTd2l0Y2hJY29uJyk/LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhc3dpdGNoYWJsZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0V2F0Y2hlZENvdW50KGdyb3VwOiBHcm91cCkge1xuICAgICAgICBjb25zdCB3YXRjaGVkQ291bnRFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgICAgICBpZiAod2F0Y2hlZENvdW50RWxlbWVudCkgcmVuZGVyV2F0Y2hlZENvdW50SW50byh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHdhdGNoZWRDb3VudEVsZW1lbnQsIGdyb3VwKVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0VmlzaWJsZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KClcbiAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFByZXZpZXdCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBQcmV2aWV3QnV0dG9uJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImF1dG9TaXplIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCIgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXBpc29kZSBQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+XG4gICAgICAgICAgICAgICAgPHN2ZyBpZD1cInN2ZzFcIlxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYgNFwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwibGF5ZXIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3Q0N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NjQ2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzLjc1Njg2NzZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMi4xNjkzNjYxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIwLjIzODIzMzAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIxLjgyNTczMzVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc2NTk3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjAyOTE0MzcsMS4wMzIwNDgyIGggMy43NTI4OTkxIHYgMi4xNzIyMzk0IGwgMC4wMDY3NiwtMi4xNTcyNTk1IHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny04XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc3NDI3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjgyMjg2MTQsMC4yMzg3MTMzNiBoIDMuNzU5MjU5IFYgMi40MTAxMjExIGwgLTAuMDA2OCwtMi4xNzE0MDc3NCB6XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiBhbnkgPT4gY2xpY2tIYW5kbGVyKCkpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ2Zhdm9yaXRlQnV0dG9uLScgKyBpdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXJhdGluZ2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0/LklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuaXRlbT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pc2Zhdm9yaXRlPVwiJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5Jc0Zhdm9yaXRlID8/IGZhbHNlfVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZmF2b3JpdGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIFBsYXlJY29uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyLCBwcml2YXRlIGl0ZW06IFByZXZpZXdJdGVtLCBwcml2YXRlIGlzQWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncGxheUJ1dHRvbi0nICsgdGhpcy5pdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXNBY3RpdmUgPyAnZGlzYWJsZWQnIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxheVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgcGxheV9hcnJvd1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi8uLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIlxuXG5leHBvcnQgY2xhc3MgUGxheVN0YXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BsYXlTdGF0ZUJ1dHRvbi0nICsgdGhpcy5pdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXBsYXlzdGF0ZWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0/LklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuaXRlbT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGF5ZWQ9XCIke3RoaXMuaXRlbT8uVXNlckRhdGE/LlBsYXllZCA/PyBmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1hcmsgcGxheWVkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjaGVjayBwbGF5c3RhdGVidXR0b24taWNvbi0ke3RoaXMuaXRlbT8uVXNlckRhdGE/LlBsYXllZCA/IFwicGxheWVkXCIgOiBcInVucGxheWVkXCJ9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgfVxufVxuIiwiY29uc3QgU1BJTk5FUl9MQVlFUlNfSFRNTDogc3RyaW5nID0gWzEsIDIsIDMsIDRdLm1hcChsYXllciA9PlxuICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2xheWVyIG1kbC1zcGlubmVyX19sYXllci0ke2xheWVyfVwiPmAgK1xuICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUtY2xpcHBlciBtZGwtc3Bpbm5lcl9fbGVmdFwiPmAgK1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlIG1kbC1zcGlubmVyX19jaXJjbGVMZWZ0XCI+PC9kaXY+YCArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXIgbWRsLXNwaW5uZXJfX3JpZ2h0XCI+YCArXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19jaXJjbGUgbWRsLXNwaW5uZXJfX2NpcmNsZVJpZ2h0XCI+PC9kaXY+YCArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICBgPC9kaXY+YFxuKS5qb2luKCcnKVxuXG5leHBvcnQgZnVuY3Rpb24gc3Bpbm5lckh0bWwoZXh0cmFDbGFzc2VzOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8ZGl2IGRpcj1cImx0clwiIGNsYXNzPVwiZG9jc3Bpbm5lciBtZGwtc3Bpbm5lciAke2V4dHJhQ2xhc3Nlc31cIj4ke1NQSU5ORVJfTEFZRVJTX0hUTUx9PC9kaXY+YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVTcGlubmVyKGNvbnRhaW5lcjogUGFyZW50Tm9kZSk6IHZvaWQge1xuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWRsLXNwaW5uZXInKT8uY2xhc3NMaXN0LmFkZCgnbWRsU3Bpbm5lckFjdGl2ZScpXG59IiwiZXhwb3J0IGVudW0gRW5kcG9pbnRzIHtcbiAgICBCQVNFID0gXCJJblBsYXllclByZXZpZXdcIixcbiAgICBQTEFZX01FRElBID0gXCIvSXRlbXMve2l0ZW1JZH0vUGxheS97dGlja3N9XCIsXG4gICAgTk9XX1BMQVlJTkdfSVRFTSA9IFwiL05vd1BsYXlpbmdJdGVtXCIsXG4gICAgU0VSVkVSX1NFVFRJTkdTID0gXCIvU2VydmVyU2V0dGluZ3NcIixcbiAgICBJVEVNX1BSRVZJRVdfVFlQRSA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vSXRlbXMve2l0ZW1JZH0vUHJldmlld0l0ZW1UeXBlXCIsXG4gICAgSVRFTV9QUkVWSUVXX0RBVEEgPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L0l0ZW1zL3tpdGVtSWR9L1ByZXZpZXdEYXRhXCIsXG4gICAgR1JPVVBfSVRFTVMgPSBcIi9Vc2Vycy97dXNlcklkfS9Hcm91cHMve2dyb3VwSWR9L0l0ZW1zXCIsXG4gICAgR1JPVVBfV0FUQ0hFRF9DT1VOVCA9IFwiL1VzZXJzL3t1c2VySWR9L0dyb3Vwcy97Z3JvdXBJZH0vV2F0Y2hlZENvdW50XCIsXG4gICAgQ09OVEFJTklOR19DT0xMRUNUSU9OUyA9IFwiL1VzZXJzL3t1c2VySWR9L0l0ZW1zL3tpdGVtSWR9L0NvbnRhaW5pbmdDb2xsZWN0aW9uc1wiLFxuICAgIFNFVF9TT1VSQ0VfQ09MTEVDVElPTiA9IFwiL1VzZXJzL3t1c2VySWR9L3tkZXZpY2VJZH0vU291cmNlQ29sbGVjdGlvbi97Y29sbGVjdGlvbklkfVwiLFxuICAgIFBMVUdJTl9TRVRUSU5HUyA9IFwiL1BsdWdpblNldHRpbmdzXCJcbn0iLCJpbXBvcnQge0xpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7R3JvdXAsIFVOS05PV05fV0FUQ0hFRF9DT1VOVH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge0dyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Hcm91cExpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7UG9wdXBUaXRsZVRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuL0VuZHBvaW50c1wiO1xuaW1wb3J0IHtHcm91cEl0ZW1zUmVzdWx0fSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBJdGVtc1Jlc3VsdFwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge2FjdGl2YXRlU3Bpbm5lciwgc3Bpbm5lckh0bWx9IGZyb20gXCIuL0NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IHt1cGRhdGVXYXRjaGVkQ291bnREb219IGZyb20gXCIuL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vU2VydmljZXMvTG9nZ2VyXCI7XG5cbi8vIFRoZSBiYWNrZW5kIGFscmVhZHkgcmV0dXJucyBQbGF5bGlzdHMvQm94U2V0cyBhbmQgRm9sZGVycyBpbiB0aGVpciBvd24gbWFudWFsIGl0ZW0vZGlzc3BsYXkgb3JkZXJcbi8vIHNvcnRpbmcgc2hvdWxkIG9ubHkgYXBwbHkgZm9yIHNlYXNvbi1iYXNlZCAoRXBpc29kZSkgZ3JvdXBzLCB3aGVyZSBpdCByZWZsZWN0cyBhY3R1YWwgZXBpc29kZSBvcmRlci5cbmNvbnN0IHByZXNlcnZlQmFja2VuZE9yZGVyVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5QbGF5bGlzdCwgSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5Gb2xkZXJdKVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyLCBwcml2YXRlIHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHsgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtczogUHJldmlld0l0ZW1bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIgPSAwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBGb3IgUGxheWxpc3RzL0JveFNldHMsIHNob3cgdGhlIGFjdHVhbCBsaXN0IHBvc2l0aW9uIGluc3RlYWQgb2YgdGhlIEluZGV4TnVtYmVyIGZyb20gdGhlaXIgc2Vhc29uL2VwaXNvZGUuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcHJlc2VydmVPcmRlciA/IHsgLi4uaXRlbXNbaV0sIEluZGV4TnVtYmVyOiBvZmZzZXQgKyBpICsgMSwgSW5kZXhOdW1iZXJFbmQ6IHVuZGVmaW5lZCB9IDogaXRlbXNbaV1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVySXRlbShpdGVtLCBwYXJlbnREaXYsIG9mZnNldCArIGkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIHByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXM6IFByZXZpZXdJdGVtW10sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIG9mZnNldDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlT3JkZXIgPSBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzLmhhcyh0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSlcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU9yZGVyKVxuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5JbmRleE51bWJlciAtIGIuSW5kZXhOdW1iZXIpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcmVzZXJ2ZU9yZGVyID8geyAuLi5pdGVtc1tpXSwgSW5kZXhOdW1iZXI6IG9mZnNldCArIGkgKyAxLCBJbmRleE51bWJlckVuZDogdW5kZWZpbmVkIH0gOiBpdGVtc1tpXVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIHBhcmVudERpdiwgLTEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaG93IGEgXCJTaG93IG1vcmVcIiBidXR0b24gaWYgZGVzY3JpcHRpb24gZXhjZWVkcyBtYXggaGVpZ2h0XG4gICAgcHJpdmF0ZSBhcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbUNvbnRhaW5lcjogRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3SXRlbURlc2NyaXB0aW9uJylcbiAgICAgICAgY29uc3QgcmVhZE1vcmVCdXR0b24gPSBpdGVtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbicpXG4gICAgICAgIGlmICghZGVzY3JpcHRpb24gfHwgIXJlYWRNb3JlQnV0dG9uKSByZXR1cm5cblxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpXG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLnRleHRDb250ZW50ID0gJ1Nob3cgbW9yZSdcblxuICAgICAgICBjb25zdCBpc092ZXJmbG93aW5nID0gZGVzY3JpcHRpb24uc2Nyb2xsSGVpZ2h0ID4gZGVzY3JpcHRpb24uY2xpZW50SGVpZ2h0XG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaXNPdmVyZmxvd2luZylcbiAgICAgICAgaWYgKCFpc092ZXJmbG93aW5nKSByZXR1cm5cblxuICAgICAgICByZWFkTW9yZUJ1dHRvbi5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkID0gZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKVxuICAgICAgICAgICAgcmVhZE1vcmVCdXR0b24udGV4dENvbnRlbnQgPSBleHBhbmRlZCA/ICdTaG93IGxlc3MnIDogJ1Nob3cgbW9yZSdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldmVhbHMgYW4gaXRlbSdzIGNvbnRlbnRcbiAgICBwcml2YXRlIGV4cGFuZEl0ZW0oaXRlbUNvbnRhaW5lcjogRWxlbWVudCwgbWFya1NlbGVjdGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBpZiAobWFya1NlbGVjdGVkKSBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcbiAgICAgICAgdGhpcy5hcHBseURlc2NyaXB0aW9uUmVhZE1vcmUoaXRlbUNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByZW5kZXJJdGVtKGl0ZW06IFByZXZpZXdJdGVtLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBpdGVtTGlzdEVsZW1lbnRUZW1wbGF0ZSA9IG5ldyBMaXN0RWxlbWVudFRlbXBsYXRlKHBhcmVudERpdiwgcG9zaXRpb25BZnRlckluZGV4LCBpdGVtLCB0aGlzLnBsYXliYWNrSGFuZGxlciwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlKTtcbiAgICAgICAgaXRlbUxpc3RFbGVtZW50VGVtcGxhdGUucmVuZGVyKChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAvLyB3aGVuIGV2ZXJ5IGl0ZW0gaXMgYWxyZWFkeSBleHBhbmRlZCwgdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gdG9nZ2xlXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkV4cGFuZEFsbEl0ZW1zKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGhpZGUgaXRlbSBjb250ZW50IGZvciBhbGwgZXhpc3RpbmcgaXRlbXMgaW4gdGhlIHByZXZpZXcgbGlzdFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50XCIpLmZvckVhY2goKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkTGlzdEl0ZW0nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyOiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tJHtpdGVtLklkfWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZEl0ZW0oaXRlbUNvbnRhaW5lciwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5vZGU6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS0ke2l0ZW0uSWR9YCkucXVlcnlTZWxlY3RvcignLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQnKTtcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FeHBhbmRBbGxJdGVtcykge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRJdGVtKGl0ZW1Ob2RlLCBpdGVtLklkID09PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbShpdGVtTm9kZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVNwaW5uZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgncHJldmlld1Njcm9sbFNwaW5uZXInKVxuICAgICAgICBzcGlubmVyLmlubmVySFRNTCA9IHNwaW5uZXJIdG1sKClcbiAgICAgICAgYWN0aXZhdGVTcGlubmVyKHNwaW5uZXIpXG4gICAgICAgIHJldHVybiBzcGlubmVyXG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgYXR0YWNoU2Nyb2xsUGFnaW5hdGlvbihcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgbG9hZFBhZ2U6IChzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4sXG4gICAgICAgIHZpZXdUb2tlbjogbnVtYmVyLFxuICAgICAgICBpbml0aWFsVG90YWxMb2FkZWQ6IG51bWJlcixcbiAgICAgICAgaW5pdGlhbFRvdGFsUmVjb3JkQ291bnQ6IG51bWJlcixcbiAgICAgICAgaW5pdGlhbExvYWRlZFN0YXJ0SW5kZXg6IG51bWJlclxuICAgICk6IHZvaWQge1xuICAgICAgICBjb25zdCBTQ1JPTExfVFJJR0dFUl9ESVNUQU5DRV9QWCA9IDIwMFxuXG4gICAgICAgIGxldCB0b3RhbExvYWRlZCA9IGluaXRpYWxUb3RhbExvYWRlZFxuICAgICAgICBsZXQgdG90YWxSZWNvcmRDb3VudCA9IGluaXRpYWxUb3RhbFJlY29yZENvdW50XG4gICAgICAgIGxldCBsb2FkZWRTdGFydEluZGV4ID0gaW5pdGlhbExvYWRlZFN0YXJ0SW5kZXhcbiAgICAgICAgbGV0IGxvYWRpbmdGb3J3YXJkID0gZmFsc2VcbiAgICAgICAgbGV0IGxvYWRpbmdCYWNrd2FyZCA9IGZhbHNlXG5cbiAgICAgICAgY29uc3QgbG9hZE5leHRQYWdlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgbG9hZGluZ0ZvcndhcmQgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCBzcGlubmVyID0gdGhpcy5jcmVhdGVTcGlubmVyRWxlbWVudCgpXG4gICAgICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoc3Bpbm5lcilcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1zLCB0b3RhbFJlY29yZENvdW50OiBuZXdUb3RhbFJlY29yZENvdW50IH0gPSBhd2FpdCBsb2FkUGFnZSh0b3RhbExvYWRlZClcbiAgICAgICAgICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUl0ZW1FbGVtZW50cyhpdGVtcywgcGFyZW50RGl2LCB0b3RhbExvYWRlZClcbiAgICAgICAgICAgICAgICB0b3RhbExvYWRlZCArPSBpdGVtcy5sZW5ndGhcbiAgICAgICAgICAgICAgICB0b3RhbFJlY29yZENvdW50ID0gbmV3VG90YWxSZWNvcmRDb3VudFxuXG4gICAgICAgICAgICAgICAgLy8gVGhlIG5ld2x5IGxvYWRlZCBwYWdlIG1pZ2h0IHN0aWxsIG5vdCBmaWxsIHRoZSBjb250YWluZXIsIHNvIHJlLWNoZWNrIHJpZ2h0IGF3YXkuXG4gICAgICAgICAgICAgICAgY2hlY2tTY3JvbGxQb3NpdGlvbigpXG4gICAgICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIG5leHQgcGFnZSBvZiBpdGVtcyAoc3RhcnRJbmRleCAke3RvdGFsTG9hZGVkfSlgLCBleClcbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdGb3J3YXJkID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRQcmV2aW91c1BhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBsb2FkaW5nQmFja3dhcmQgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHRCZWZvcmVTcGlubmVyID0gcGFyZW50RGl2LnNjcm9sbEhlaWdodFxuICAgICAgICAgICAgY29uc3Qgc3Bpbm5lciA9IHRoaXMuY3JlYXRlU3Bpbm5lckVsZW1lbnQoKVxuICAgICAgICAgICAgcGFyZW50RGl2Lmluc2VydEJlZm9yZShzcGlubmVyLCBwYXJlbnREaXYuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIHBhcmVudERpdi5zY3JvbGxUb3AgKz0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIHNjcm9sbEhlaWdodEJlZm9yZVNwaW5uZXJcblxuICAgICAgICAgICAgY29uc3QgcGFnZVNpemUgPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICBjb25zdCBuZXdTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgbG9hZGVkU3RhcnRJbmRleCAtIHBhZ2VTaXplKVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IGxvYWRQYWdlKG5ld1N0YXJ0SW5kZXgpXG4gICAgICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHRCZWZvcmVQcmVwZW5kID0gcGFyZW50RGl2LnNjcm9sbEhlaWdodFxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByZXBlbmRJdGVtRWxlbWVudHMoaXRlbXMsIHBhcmVudERpdiwgbmV3U3RhcnRJbmRleClcbiAgICAgICAgICAgICAgICBwYXJlbnREaXYuc2Nyb2xsVG9wICs9IHBhcmVudERpdi5zY3JvbGxIZWlnaHQgLSBzY3JvbGxIZWlnaHRCZWZvcmVQcmVwZW5kXG4gICAgICAgICAgICAgICAgbG9hZGVkU3RhcnRJbmRleCA9IG5ld1N0YXJ0SW5kZXhcblxuICAgICAgICAgICAgICAgIGNoZWNrU2Nyb2xsUG9zaXRpb24oKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCBwcmV2aW91cyBwYWdlIG9mIGl0ZW1zIChzdGFydEluZGV4ICR7bmV3U3RhcnRJbmRleH0pYCwgZXgpXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5yZW1vdmUoKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nQmFja3dhcmQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tTY3JvbGxQb3NpdGlvbiA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkge1xuICAgICAgICAgICAgICAgIHBhcmVudERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbFBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZWFyQm90dG9tID0gcGFyZW50RGl2LnNjcm9sbFRvcCArIHBhcmVudERpdi5jbGllbnRIZWlnaHQgPj0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIFNDUk9MTF9UUklHR0VSX0RJU1RBTkNFX1BYXG4gICAgICAgICAgICBpZiAoIWxvYWRpbmdGb3J3YXJkICYmIHRvdGFsTG9hZGVkIDwgdG90YWxSZWNvcmRDb3VudCAmJiBuZWFyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgbG9hZE5leHRQYWdlKClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmVhclRvcCA9IHBhcmVudERpdi5zY3JvbGxUb3AgPD0gU0NST0xMX1RSSUdHRVJfRElTVEFOQ0VfUFhcbiAgICAgICAgICAgIGlmICghbG9hZGluZ0JhY2t3YXJkICYmIGxvYWRlZFN0YXJ0SW5kZXggPiAwICYmIG5lYXJUb3ApIHtcbiAgICAgICAgICAgICAgICBsb2FkUHJldmlvdXNQYWdlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudERpdi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbFBvc2l0aW9uKVxuICAgICAgICBjaGVja1Njcm9sbFBvc2l0aW9uKClcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlTGF6eUl0ZW1MaXN0KFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBsb2FkUGFnZTogKHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PixcbiAgICAgICAgdmlld1Rva2VuOiBudW1iZXIsXG4gICAgICAgIGluaXRpYWxQYWdlPzogR3JvdXBJdGVtc1Jlc3VsdCxcbiAgICAgICAgaW5pdGlhbE9mZnNldDogbnVtYmVyID0gMFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBmaXJzdFBhZ2UgPSBpbml0aWFsUGFnZSA/PyBhd2FpdCBsb2FkUGFnZSgwKVxuICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJdGVtRWxlbWVudHMoZmlyc3RQYWdlLml0ZW1zLCBwYXJlbnREaXYsIGluaXRpYWxPZmZzZXQpXG5cbiAgICAgICAgY29uc3QgdG90YWxMb2FkZWQgPSBpbml0aWFsT2Zmc2V0ICsgZmlyc3RQYWdlLml0ZW1zLmxlbmd0aFxuICAgICAgICB0aGlzLmF0dGFjaFNjcm9sbFBhZ2luYXRpb24ocGFyZW50RGl2LCBsb2FkUGFnZSwgdmlld1Rva2VuLCB0b3RhbExvYWRlZCwgZmlyc3RQYWdlLnRvdGFsUmVjb3JkQ291bnQsIGluaXRpYWxPZmZzZXQpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmZXRjaEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwSWQ6IHN0cmluZyk6IFByb21pc2U8eyBwbGF5ZWRJdGVtQ291bnQ6IG51bWJlciwgdG90YWxJdGVtQ291bnQ6IG51bWJlciwgcGxheWVkUnVudGltZVRpY2tzOiBudW1iZXIsIHRvdGFsUnVudGltZVRpY2tzOiBudW1iZXIgfT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5HUk9VUF9XQVRDSEVEX0NPVU5UfWBcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgne2dyb3VwSWR9JywgZ3JvdXBJZCkpXG4gICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGxheWVkSXRlbUNvdW50OiByYXcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgdG90YWxJdGVtQ291bnQ6IHJhdy5Ub3RhbEl0ZW1Db3VudCxcbiAgICAgICAgICAgIHBsYXllZFJ1bnRpbWVUaWNrczogcmF3LlBsYXllZFJ1bnRpbWVUaWNrcyxcbiAgICAgICAgICAgIHRvdGFsUnVudGltZVRpY2tzOiByYXcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBlbnN1cmVHcm91cFdhdGNoZWRDb3VudChncm91cDogR3JvdXApOiBQcm9taXNlPEdyb3VwPiB7XG4gICAgICAgIGlmIChncm91cC5wbGF5ZWRJdGVtQ291bnQgIT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkgcmV0dXJuIGdyb3VwXG5cbiAgICAgICAgY29uc3QgeyBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50LCBwbGF5ZWRSdW50aW1lVGlja3MsIHRvdGFsUnVudGltZVRpY2tzIH0gPSBhd2FpdCB0aGlzLmZldGNoR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXAuZ3JvdXBJZClcbiAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnNldEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwLmdyb3VwSWQsIHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQsIHBsYXllZFJ1bnRpbWVUaWNrcywgdG90YWxSdW50aW1lVGlja3MpXG4gICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50LCBwbGF5ZWRSdW50aW1lVGlja3MsIHRvdGFsUnVudGltZVRpY2tzIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlR3JvdXBFbGVtZW50cyhcbiAgICAgICAgZ3JvdXBzOiBHcm91cFtdLFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBjdXJyZW50R3JvdXBJbmRleDogbnVtYmVyLFxuICAgICAgICB0aXRsZUNvbnRhaW5lcjogUG9wdXBUaXRsZVRlbXBsYXRlLFxuICAgICAgICBsb2FkSXRlbXM6IChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PlxuICAgICk6IHZvaWQge1xuICAgICAgICBncm91cHMuc29ydCgoYSwgYikgPT4gYS5pbmRleE51bWJlciAtIGIuaW5kZXhOdW1iZXIpXG5cbiAgICAgICAgLy8gSW52YWxpZGF0ZXMgYW55IGl0ZW0gbG9hZCBzdGlsbCBpbiBwcm9ncmVzc3NcbiAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmJlZ2luTmV3VmlldygpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlKHBhcmVudERpdiwgaSwgZ3JvdXBzW2ldLCBncm91cHNbaV0uaW5kZXhOdW1iZXIgPT09IGN1cnJlbnRHcm91cEluZGV4LCB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLldhdGNoQ291bnREaXNwbGF5TW9kZSlcbiAgICAgICAgICAgIGdyb3VwLnJlbmRlcihhc3luYyAoZTogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cElkID0gZ3JvdXBzW2ldLmdyb3VwSWRcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRUZXh0KGdyb3Vwc1tpXS5ncm91cE5hbWUpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFdhdGNoZWRDb3VudChncm91cHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cHNbaV0ucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHVwZGF0ZWQgPT4gdGl0bGVDb250YWluZXIuc2V0V2F0Y2hlZENvdW50KHVwZGF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXg6IHVua25vd24pID0+IHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHdhdGNoZWQgY291bnQgZm9yIGdyb3VwICR7Z3JvdXBzW2ldLmdyb3VwSWR9YCwgZXgpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFZpc2libGUodHJ1ZSlcblxuICAgICAgICAgICAgICAgIHBhcmVudERpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdUb2tlbiA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkID0gIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0dyb3Vwc0NhY2hlRXhwaXJlZFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuZmluZChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXBzW2ldLmdyb3VwSWQpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFBhZ2U6IEdyb3VwSXRlbXNSZXN1bHQgfCB1bmRlZmluZWQgPSBjYWNoZWQ/LmxvYWRlZFN0YXJ0SW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IHsgaXRlbXM6IFsuLi5jYWNoZWQuaXRlbXNdLCB0b3RhbFJlY29yZENvdW50OiBjYWNoZWQubG9hZGVkVG90YWxSZWNvcmRDb3VudCA/PyBjYWNoZWQuaXRlbXMubGVuZ3RoIH1cbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsT2Zmc2V0ID0gY2FjaGVkPy5sb2FkZWRTdGFydEluZGV4ID8/IDBcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlTGF6eUl0ZW1MaXN0KHBhcmVudERpdiwgKHN0YXJ0SW5kZXgpID0+IGxvYWRJdGVtcyhncm91cHNbaV0uZ3JvdXBJZCwgc3RhcnRJbmRleCksIHZpZXdUb2tlbiwgaW5pdGlhbFBhZ2UsIGluaXRpYWxPZmZzZXQpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgaXRlbXMgZm9yIGdyb3VwICR7Z3JvdXBzW2ldLmdyb3VwSWR9YCwgZXgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50ICYmIGdyb3Vwc1tpXS5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHVwZGF0ZVdhdGNoZWRDb3VudERvbSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHVwZGF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCB3YXRjaGVkIGNvdW50IGZvciBncm91cCAke2dyb3Vwc1tpXS5ncm91cElkfWAsIGV4KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBlbnVtIEV4cGFuZGVkSXRlbUxheW91dCB7XG4gICAgRGVmYXVsdCA9IDAsXG4gICAgU2lkZUJ5U2lkZSA9IDEsXG59XG4iLCJleHBvcnQgZW51bSBJdGVtVHlwZSB7XG4gICAgQWdncmVnYXRlRm9sZGVyLFxuICAgIEF1ZGlvLFxuICAgIEF1ZGlvQm9vayxcbiAgICBCYXNlUGx1Z2luRm9sZGVyLFxuICAgIEJvb2ssXG4gICAgQm94U2V0LFxuICAgIENoYW5uZWwsXG4gICAgQ2hhbm5lbEZvbGRlckl0ZW0sXG4gICAgQ29sbGVjdGlvbkZvbGRlcixcbiAgICBFcGlzb2RlLFxuICAgIEZvbGRlcixcbiAgICBHZW5yZSxcbiAgICBNYW51YWxQbGF5bGlzdHNGb2xkZXIsXG4gICAgTW92aWUsXG4gICAgTGl2ZVR2Q2hhbm5lbCxcbiAgICBMaXZlVHZQcm9ncmFtLFxuICAgIE11c2ljQWxidW0sXG4gICAgTXVzaWNBcnRpc3QsXG4gICAgTXVzaWNHZW5yZSxcbiAgICBNdXNpY1ZpZGVvLFxuICAgIFBlcnNvbixcbiAgICBQaG90byxcbiAgICBQaG90b0FsYnVtLFxuICAgIFBsYXlsaXN0LFxuICAgIFBsYXlsaXN0c0ZvbGRlcixcbiAgICBQcm9ncmFtLFxuICAgIFJlY29yZGluZyxcbiAgICBTZWFzb24sXG4gICAgU2VyaWVzLFxuICAgIFN0dWRpbyxcbiAgICBUcmFpbGVyLFxuICAgIFR2Q2hhbm5lbCxcbiAgICBUdlByb2dyYW0sXG4gICAgVXNlclJvb3RGb2xkZXIsXG4gICAgVXNlclZpZXcsXG4gICAgVmlkZW8sXG4gICAgWWVhclxufSIsImV4cG9ydCBlbnVtIExvZ0xldmVsIHtcbiAgICBOb25lID0gMCxcbiAgICBFcnJvciA9IDEsXG4gICAgSW5mb3JtYXRpb24gPSAyLFxuICAgIERlYnVnID0gMyxcbn1cbiIsImltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL0l0ZW1UeXBlXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4vV2F0Y2hDb3VudERpc3BsYXlNb2RlXCI7XG5pbXBvcnQge0xvZ0xldmVsfSBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xuaW1wb3J0IHtFeHBhbmRlZEl0ZW1MYXlvdXR9IGZyb20gXCIuL0V4cGFuZGVkSXRlbUxheW91dFwiO1xuXG5leHBvcnQgdHlwZSBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICBFbmFibGVkSXRlbVR5cGVzOiBJdGVtVHlwZVtdLFxuICAgIEJsdXJEZXNjcmlwdGlvbjogYm9vbGVhbixcbiAgICBCbHVyVGh1bWJuYWlsOiBib29sZWFuLFxuICAgIEVwaXNvZGVQYWdlU2l6ZTogbnVtYmVyLFxuICAgIFNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4sXG4gICAgV2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUsXG4gICAgU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zOiBib29sZWFuLFxuICAgIE9ubHlCbHVyVW53YXRjaGVkOiBib29sZWFuLFxuICAgIFNob3dXYXRjaFByb2dyZXNzOiBib29sZWFuLFxuICAgIEV4cGFuZEFsbEl0ZW1zOiBib29sZWFuLFxuICAgIEV4cGFuZGVkSXRlbUxheW91dDogRXhwYW5kZWRJdGVtTGF5b3V0LFxuICAgIEF1dG9DbG9zZVByZXZpZXc6IGJvb2xlYW4sXG4gICAgTG9nTGV2ZWw6IExvZ0xldmVsLFxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFBsdWdpblNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICBFbmFibGVkSXRlbVR5cGVzOiBbSXRlbVR5cGUuU2VyaWVzLCBJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLk1vdmllLCBJdGVtVHlwZS5WaWRlb10sXG4gICAgQmx1ckRlc2NyaXB0aW9uOiBmYWxzZSxcbiAgICBCbHVyVGh1bWJuYWlsOiBmYWxzZSxcbiAgICBFcGlzb2RlUGFnZVNpemU6IDEwLFxuICAgIFNob3dXYXRjaGVkQ291bnQ6IHRydWUsXG4gICAgV2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUuSG91cnNNaW51dGVzLFxuICAgIFNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9uczogdHJ1ZSxcbiAgICBPbmx5Qmx1clVud2F0Y2hlZDogZmFsc2UsXG4gICAgU2hvd1dhdGNoUHJvZ3Jlc3M6IHRydWUsXG4gICAgRXhwYW5kQWxsSXRlbXM6IGZhbHNlLFxuICAgIEV4cGFuZGVkSXRlbUxheW91dDogRXhwYW5kZWRJdGVtTGF5b3V0LkRlZmF1bHQsXG4gICAgQXV0b0Nsb3NlUHJldmlldzogdHJ1ZSxcbiAgICBMb2dMZXZlbDogTG9nTGV2ZWwuSW5mb3JtYXRpb24sXG59IiwiaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vUHJldmlld0l0ZW1cIjtcblxuZXhwb3J0IHR5cGUgR3JvdXAgPSB7XG4gICAgZ3JvdXBJZDogc3RyaW5nXG4gICAgZ3JvdXBOYW1lOiBzdHJpbmdcbiAgICBpdGVtczogUHJldmlld0l0ZW1bXVxuICAgIGluZGV4TnVtYmVyOiBudW1iZXJcbiAgICBwbGF5ZWRJdGVtQ291bnQ6IG51bWJlclxuICAgIHRvdGFsSXRlbUNvdW50OiBudW1iZXJcbiAgICBwbGF5ZWRSdW50aW1lVGlja3M6IG51bWJlclxuICAgIHRvdGFsUnVudGltZVRpY2tzOiBudW1iZXJcbiAgICBsb2FkZWRTdGFydEluZGV4PzogbnVtYmVyXG4gICAgbG9hZGVkRW5kSW5kZXg/OiBudW1iZXJcbiAgICBsb2FkZWRUb3RhbFJlY29yZENvdW50PzogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBVTktOT1dOX1dBVENIRURfQ09VTlQgPSAtMVxuXG5leHBvcnQgY29uc3QgZm9ybWF0V2F0Y2hlZENvdW50ID0gKHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyKTogc3RyaW5nID0+XG4gICAgcGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQgfHwgdG90YWxJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVFxuICAgICAgICA/ICfigKYgd2F0Y2hlZCdcbiAgICAgICAgOiBgJHtwbGF5ZWRJdGVtQ291bnR9LyR7dG90YWxJdGVtQ291bnR9IHdhdGNoZWRgXG5cbiIsImltcG9ydCB7Zm9ybWF0V2F0Y2hlZENvdW50LCBHcm91cCwgVU5LTk9XTl9XQVRDSEVEX0NPVU5UfSBmcm9tIFwiLi9Hcm91cFwiO1xuaW1wb3J0IHtXYXRjaENvdW50RGlzcGxheU1vZGV9IGZyb20gXCIuLi9XYXRjaENvdW50RGlzcGxheU1vZGVcIjtcblxuY29uc3QgVElDS1NfUEVSX1NFQ09ORCA9IDEwXzAwMF8wMDBcblxuY29uc3QgZ2V0VGltZVN0cmluZyA9ICh0aWNrczogbnVtYmVyLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHNlY29uZHMgPSB0aWNrcyAvIFRJQ0tTX1BFUl9TRUNPTkRcbiAgICBjb25zdCB0b3RhbE1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MClcbiAgICBjb25zdCB0b3RhbEhvdXJzID0gTWF0aC5mbG9vcih0b3RhbE1pbnV0ZXMgLyA2MClcbiAgICBjb25zdCB0b3RhbERheXMgPSBNYXRoLmZsb29yKHRvdGFsSG91cnMgLyAyNClcbiAgICBjb25zdCB0b3RhbE1vbnRocyA9IE1hdGguZmxvb3IodG90YWxEYXlzIC8gMzApXG4gICAgY29uc3QgdG90YWxZZWFycyA9IE1hdGguZmxvb3IodG90YWxEYXlzIC8gMzY1KVxuXG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Ib3Vyc01pbnV0ZXMpIHtcbiAgICAgICAgaWYgKHRvdGFsSG91cnMgPj0gMSkge1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IHRvdGFsTWludXRlcyAlIDYwXG4gICAgICAgICAgICByZXR1cm4gbWludXRlcyA+IDAgPyBgJHt0b3RhbEhvdXJzfWggJHttaW51dGVzfW1gIDogYCR7dG90YWxIb3Vyc31oYFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbE1pbnV0ZXMgPiAwID8gYCR7dG90YWxNaW51dGVzfW1gIDogJzBtJ1xuICAgIH1cblxuICAgIGlmICh0b3RhbFllYXJzID49IDEpIHtcbiAgICAgICAgY29uc3QgbW9udGhzID0gTWF0aC5mbG9vcigodG90YWxEYXlzICUgMzY1KSAvIDMwKVxuICAgICAgICByZXR1cm4gbW9udGhzID4gMCA/IGAke3RvdGFsWWVhcnN9eSAke21vbnRoc31tb2AgOiBgJHt0b3RhbFllYXJzfXlgXG4gICAgfVxuICAgIGlmICh0b3RhbE1vbnRocyA+PSAxKSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0b3RhbERheXMgJSAzMFxuICAgICAgICByZXR1cm4gZGF5cyA+IDAgPyBgJHt0b3RhbE1vbnRoc31tbyAke2RheXN9ZGAgOiBgJHt0b3RhbE1vbnRoc31tb2BcbiAgICB9XG4gICAgaWYgKHRvdGFsRGF5cyA+PSAxKSB7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gdG90YWxIb3VycyAlIDI0XG4gICAgICAgIHJldHVybiBob3VycyA+IDAgPyBgJHt0b3RhbERheXN9ZCAke2hvdXJzfWhgIDogYCR7dG90YWxEYXlzfWRgXG4gICAgfVxuICAgIGlmICh0b3RhbEhvdXJzID49IDEpIHtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IHRvdGFsTWludXRlcyAlIDYwXG4gICAgICAgIHJldHVybiBtaW51dGVzID4gMCA/IGAke3RvdGFsSG91cnN9aCAke21pbnV0ZXN9bWAgOiBgJHt0b3RhbEhvdXJzfWhgXG4gICAgfVxuICAgIHJldHVybiB0b3RhbE1pbnV0ZXMgPiAwID8gYCR7dG90YWxNaW51dGVzfW1gIDogJzBtJ1xufVxuXG5jb25zdCBjbGFtcFByb2dyZXNzID0gKHByb2dyZXNzOiBudW1iZXIpOiBudW1iZXIgPT4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBNYXRoLnJvdW5kKHByb2dyZXNzKSkpXG5cbmV4cG9ydCBjb25zdCBnZXRXYXRjaFByb2dyZXNzUGVyY2VudCA9IChncm91cDogR3JvdXAsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IG51bWJlciA9PiB7XG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Db3VudCkge1xuICAgICAgICBpZiAoIWdyb3VwLnRvdGFsSXRlbUNvdW50KSByZXR1cm4gMFxuICAgICAgICByZXR1cm4gY2xhbXBQcm9ncmVzcygoZ3JvdXAucGxheWVkSXRlbUNvdW50IC8gZ3JvdXAudG90YWxJdGVtQ291bnQpICogMTAwKVxuICAgIH1cblxuICAgIGlmICghZ3JvdXAudG90YWxSdW50aW1lVGlja3MpIHJldHVybiAwXG4gICAgcmV0dXJuIGNsYW1wUHJvZ3Jlc3MoKGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyAvIGdyb3VwLnRvdGFsUnVudGltZVRpY2tzKSAqIDEwMClcbn1cblxuZXhwb3J0IGNvbnN0IGlzV2F0Y2hlZENvdW50VW5rbm93biA9IChncm91cDogR3JvdXAsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IGJvb2xlYW4gPT4ge1xuICAgIGlmIChncm91cC5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCB8fCBncm91cC50b3RhbEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgcmV0dXJuIG1vZGUgIT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Db3VudFxuICAgICAgICAmJiAoZ3JvdXAucGxheWVkUnVudGltZVRpY2tzID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQgfHwgZ3JvdXAudG90YWxSdW50aW1lVGlja3MgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVClcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdFdhdGNoZWRDb3VudFRleHQgPSAoZ3JvdXA6IEdyb3VwLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChtb2RlID09PSBXYXRjaENvdW50RGlzcGxheU1vZGUuQ291bnQpXG4gICAgICAgIHJldHVybiBmb3JtYXRXYXRjaGVkQ291bnQoZ3JvdXAucGxheWVkSXRlbUNvdW50LCBncm91cC50b3RhbEl0ZW1Db3VudClcblxuICAgIGlmIChtb2RlID09PSBXYXRjaENvdW50RGlzcGxheU1vZGUuUGVyY2VudGFnZSlcbiAgICAgICAgcmV0dXJuIGAke2dldFdhdGNoUHJvZ3Jlc3NQZXJjZW50KGdyb3VwLCBtb2RlKX0lYFxuXG4gICAgY29uc3Qgc2FmZVRvdGFsID0gTWF0aC5tYXgoMCwgZ3JvdXAudG90YWxSdW50aW1lVGlja3MgfHwgMClcbiAgICBjb25zdCBzYWZlUGxheWVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc2FmZVRvdGFsLCBncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgfHwgMCkpXG4gICAgcmV0dXJuIGAke2dldFRpbWVTdHJpbmcoc2FmZVBsYXllZCwgbW9kZSl9IC8gJHtnZXRUaW1lU3RyaW5nKHNhZmVUb3RhbCwgbW9kZSl9YFxufVxuXG4vLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbjAwYmNvZHIvSmVsbHlmaW4tRW5oYW5jZWQvYmxvYi9tYWluL0plbGx5ZmluLlBsdWdpbi5KZWxseWZpbkVuaGFuY2VkL2pzL2VuaGFuY2VkL2l0ZW1kZXRhaWxzL2ZlYXR1cmVzLWRldGFpbHMtbWVkaWEtaW5mby5qc1xuY29uc3QgZ2V0V2F0Y2hQcm9ncmVzc0ljb25IdG1sID0gKHByb2dyZXNzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGNpcmN1bWZlcmVuY2UgPSAyICogTWF0aC5QSSAqIDggLy8gcmFkaXVzID0gOFxuICAgIGNvbnN0IG9mZnNldCA9IGNpcmN1bWZlcmVuY2UgLSAocHJvZ3Jlc3MgLyAxMDApICogY2lyY3VtZmVyZW5jZVxuXG4gICAgaWYgKHByb2dyZXNzID49IDEwMCkge1xuICAgICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMC4zZW07IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgZmxleC1zaHJpbms6IDA7XCI+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjhcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkuNSAxNS41bC0zLTMgMS40LTEuNEw5LjUgMTIuN2w1LjYtNS42IDEuNCAxLjR6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgPC9zdmc+YFxuICAgIH1cblxuICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwLjNlbTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBmbGV4LXNocmluazogMDtcIj5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgb3BhY2l0eT1cIjAuMlwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCJcbiAgICAgICAgICAgIHN0eWxlPVwic3Ryb2tlLWRhc2hhcnJheTogJHtjaXJjdW1mZXJlbmNlfTsgc3Ryb2tlLWRhc2hvZmZzZXQ6ICR7b2Zmc2V0fTsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcIi8+XG4gICAgPC9zdmc+YFxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sID0gKGdyb3VwOiBHcm91cCwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogc3RyaW5nID0+IHtcbiAgICBpZiAoaXNXYXRjaGVkQ291bnRVbmtub3duKGdyb3VwLCBtb2RlKSlcbiAgICAgICAgcmV0dXJuIGAke2dldFdhdGNoUHJvZ3Jlc3NJY29uSHRtbCgwKX08c3BhbiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFRleHRcIj4sLCw8L3NwYW4+YFxuXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRXYXRjaFByb2dyZXNzUGVyY2VudChncm91cCwgbW9kZSlcbiAgICByZXR1cm4gYCR7Z2V0V2F0Y2hQcm9ncmVzc0ljb25IdG1sKHByb2dyZXNzKX08c3BhbiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFRleHRcIj4ke2Zvcm1hdFdhdGNoZWRDb3VudFRleHQoZ3JvdXAsIG1vZGUpfTwvc3Bhbj5gXG59XG5cbi8vIEN5Y2xlcyBDb3VudCAtPiBUaW1lIC0+IFBlcmNlbnRhZ2UuIFRoZSB0aW1lIGZvcm1hdCBmb2xsb3dzIHRoZSBwbHVnaW4gc2V0dGluZywgSG91cnNNaW51dGVzIHVubGVzcyBpdCBpcyBBbGxVbml0cy5cbmV4cG9ydCBjb25zdCBuZXh0V2F0Y2hDb3VudERpc3BsYXlNb2RlID0gKG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSwgZGVmYXVsdE1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IFdhdGNoQ291bnREaXNwbGF5TW9kZSA9PiB7XG4gICAgY29uc3QgdGltZU1vZGUgPSBkZWZhdWx0TW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkFsbFVuaXRzID8gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkFsbFVuaXRzIDogV2F0Y2hDb3VudERpc3BsYXlNb2RlLkhvdXJzTWludXRlc1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICBjYXNlIFdhdGNoQ291bnREaXNwbGF5TW9kZS5Db3VudDogcmV0dXJuIHRpbWVNb2RlXG4gICAgICAgIGNhc2UgV2F0Y2hDb3VudERpc3BsYXlNb2RlLlBlcmNlbnRhZ2U6IHJldHVybiBXYXRjaENvdW50RGlzcGxheU1vZGUuQ291bnRcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIFdhdGNoQ291bnREaXNwbGF5TW9kZS5QZXJjZW50YWdlXG4gICAgfVxufVxuIiwiZXhwb3J0IHR5cGUgU2VydmVyU2V0dGluZ3MgPSB7XG4gICAgTWluUmVzdW1lUGN0OiBudW1iZXIsIFxuICAgIE1heFJlc3VtZVBjdDogbnVtYmVyLCBcbiAgICBNaW5SZXN1bWVEdXJhdGlvblNlY29uZHM6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNlcnZlclNldHRpbmdzOiBTZXJ2ZXJTZXR0aW5ncyA9IHtcbiAgICBNaW5SZXN1bWVQY3Q6IDUsXG4gICAgTWF4UmVzdW1lUGN0OiA5MCxcbiAgICBNaW5SZXN1bWVEdXJhdGlvblNlY29uZHM6IDMwMFxufSIsImV4cG9ydCBlbnVtIFdhdGNoQ291bnREaXNwbGF5TW9kZSB7XG4gICAgQ291bnQgPSAwLFxuICAgIEhvdXJzTWludXRlcyA9IDEsXG4gICAgQWxsVW5pdHMgPSAyLFxuICAgIFBlcmNlbnRhZ2UgPSAzLFxufVxuIiwiaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge25leHRXYXRjaENvdW50RGlzcGxheU1vZGUsIHJlbmRlcldhdGNoZWRDb3VudElubmVySHRtbH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzXCI7XG5cbnR5cGUgVXNlckRhdGFDaGFuZ2VkRW50cnkgPSB7XG4gICAgSXRlbUlkOiBzdHJpbmdcbiAgICBQbGF5ZWQ6IGJvb2xlYW5cbiAgICBJc0Zhdm9yaXRlOiBib29sZWFuXG4gICAgUGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXJcbiAgICBQbGF5ZWRQZXJjZW50YWdlPzogbnVtYmVyXG59XG5cbnR5cGUgV2ViU29ja2V0TWVzc2FnZSA9IHtcbiAgICBNZXNzYWdlVHlwZTogc3RyaW5nXG4gICAgRGF0YTogYW55XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXYXRjaGVkQ291bnRJbnRvKHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBncm91cDogR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBtb2RlID0gZWxlbWVudC5kYXRhc2V0Lm1vZGUgIT09IHVuZGVmaW5lZCA/IE51bWJlcihlbGVtZW50LmRhdGFzZXQubW9kZSkgOiBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLldhdGNoQ291bnREaXNwbGF5TW9kZVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sKGdyb3VwLCBtb2RlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ljbGVXYXRjaGVkQ291bnRNb2RlKHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBncm91cDogR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZWxlbWVudC5kYXRhc2V0Lm1vZGUgIT09IHVuZGVmaW5lZCA/IE51bWJlcihlbGVtZW50LmRhdGFzZXQubW9kZSkgOiBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLldhdGNoQ291bnREaXNwbGF5TW9kZVxuICAgIGVsZW1lbnQuZGF0YXNldC5tb2RlID0gU3RyaW5nKG5leHRXYXRjaENvdW50RGlzcGxheU1vZGUoY3VycmVudCwgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5XYXRjaENvdW50RGlzcGxheU1vZGUpKVxuICAgIHJlbmRlcldhdGNoZWRDb3VudEludG8ocHJvZ3JhbURhdGFTdG9yZSwgZWxlbWVudCwgZ3JvdXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXYXRjaGVkQ291bnREb20ocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgZ3JvdXA6IEdyb3VwKTogdm9pZCB7XG4gICAgaWYgKGdyb3VwLmdyb3VwSWQgPT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCkge1xuICAgICAgICBjb25zdCBwb3B1cFdhdGNoZWRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cFRpdGxlQ29udGFpbmVyJyk/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICAgICAgaWYgKHBvcHVwV2F0Y2hlZENvdW50KSByZW5kZXJXYXRjaGVkQ291bnRJbnRvKHByb2dyYW1EYXRhU3RvcmUsIHBvcHVwV2F0Y2hlZENvdW50LCBncm91cClcbiAgICB9XG5cbiAgICBjb25zdCBncm91cExpc3RXYXRjaGVkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ3JvdXAtJHtncm91cC5ncm91cElkfWApPy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCcpXG4gICAgaWYgKGdyb3VwTGlzdFdhdGNoZWRDb3VudCkgcmVuZGVyV2F0Y2hlZENvdW50SW50byhwcm9ncmFtRGF0YVN0b3JlLCBncm91cExpc3RXYXRjaGVkQ291bnQsIGdyb3VwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQmx1ckRvbShwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBpdGVtSWQ6IHN0cmluZywgcGxheWVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzXG4gICAgY29uc3Qgc2hvdWxkQmx1ciA9ICEoc2V0dGluZ3MuT25seUJsdXJVbndhdGNoZWQgJiYgcGxheWVkKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmV2aWV3SXRlbUltYWdlQ2FyZC0ke2l0ZW1JZH1gKT8uY2xhc3NMaXN0LnRvZ2dsZSgnYmx1cicsIHNldHRpbmdzLkJsdXJUaHVtYm5haWwgJiYgc2hvdWxkQmx1cilcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS0ke2l0ZW1JZH1gKT8ucXVlcnlTZWxlY3RvcignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKT8uY2xhc3NMaXN0LnRvZ2dsZSgnYmx1cicsIHNldHRpbmdzLkJsdXJEZXNjcmlwdGlvbiAmJiBzaG91bGRCbHVyKVxufVxuXG5mdW5jdGlvbiBwbGF5ZWRSdW50aW1lQ29udHJpYnV0aW9uKGl0ZW06IFByZXZpZXdJdGVtLCBwbGF5ZWQ6IGJvb2xlYW4sIHBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGxheWVkID8gKGl0ZW0uUnVuVGltZVRpY2tzID8/IDApIDogcGxheWJhY2tQb3NpdGlvblRpY2tzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RXYXRjaGVkQ291bnQoXG4gICAgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSxcbiAgICBpdGVtOiBQcmV2aWV3SXRlbSxcbiAgICB3YXNQbGF5ZWQ6IGJvb2xlYW4sXG4gICAgaXNQbGF5ZWQ6IGJvb2xlYW4sXG4gICAgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXIsXG4gICAgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXJcbik6IHZvaWQge1xuICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50KSByZXR1cm5cblxuICAgIGNvbnN0IGRlbHRhUGxheWVkQ291bnQgPSBOdW1iZXIoaXNQbGF5ZWQpIC0gTnVtYmVyKHdhc1BsYXllZClcbiAgICBjb25zdCBkZWx0YVBsYXllZFJ1bnRpbWVUaWNrcyA9XG4gICAgICAgIHBsYXllZFJ1bnRpbWVDb250cmlidXRpb24oaXRlbSwgaXNQbGF5ZWQsIG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcykgLVxuICAgICAgICBwbGF5ZWRSdW50aW1lQ29udHJpYnV0aW9uKGl0ZW0sIHdhc1BsYXllZCwgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzKVxuICAgIGlmIChkZWx0YVBsYXllZENvdW50ID09PSAwICYmIGRlbHRhUGxheWVkUnVudGltZVRpY2tzID09PSAwKSByZXR1cm5cblxuICAgIGNvbnN0IHVwZGF0ZWRHcm91cCA9IHByb2dyYW1EYXRhU3RvcmUuYWRqdXN0R3JvdXBXYXRjaFN0YXRzKGl0ZW0uSWQsIGRlbHRhUGxheWVkQ291bnQsIGRlbHRhUGxheWVkUnVudGltZVRpY2tzKVxuICAgIGlmICh1cGRhdGVkR3JvdXApIHVwZGF0ZVdhdGNoZWRDb3VudERvbShwcm9ncmFtRGF0YVN0b3JlLCB1cGRhdGVkR3JvdXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQbGF5ZWRTdGF0ZUxvY2FsbHkocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgaXRlbUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtOiBQcmV2aWV3SXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSkgcmV0dXJuXG5cbiAgICBjb25zdCB3YXNQbGF5ZWQgPSBpdGVtLlVzZXJEYXRhLlBsYXllZFxuICAgIGNvbnN0IGlzUGxheWVkID0gIXdhc1BsYXllZFxuICAgIGNvbnN0IG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcyA9IGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzXG4gICAgY29uc3QgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzID0gaXNQbGF5ZWQgPyAwIDogb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YTogeyAuLi5pdGVtLlVzZXJEYXRhLCBQbGF5ZWQ6IGlzUGxheWVkLCBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcyB9XG4gICAgfSlcbiAgICB1cGRhdGVCbHVyRG9tKHByb2dyYW1EYXRhU3RvcmUsIGl0ZW1JZCwgaXNQbGF5ZWQpXG4gICAgYWRqdXN0V2F0Y2hlZENvdW50KHByb2dyYW1EYXRhU3RvcmUsIGl0ZW0sIHdhc1BsYXllZCwgaXNQbGF5ZWQsIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcywgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzKVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUZldGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBFdmVudHMub24oQXBpQ2xpZW50LCAnbWVzc2FnZScsIChfZXZlbnQsIG1lc3NhZ2U6IFdlYlNvY2tldE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLk1lc3NhZ2VUeXBlICE9PSAnVXNlckRhdGFDaGFuZ2VkJykgcmV0dXJuXG4gICAgICAgICAgICBpZiAobWVzc2FnZS5EYXRhLlVzZXJJZCAhPT0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhTGlzdDogVXNlckRhdGFDaGFuZ2VkRW50cnlbXSA9IG1lc3NhZ2UuRGF0YS5Vc2VyRGF0YUxpc3QgPz8gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgdXNlckRhdGEgb2YgdXNlckRhdGFMaXN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbTogUHJldmlld0l0ZW0gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQodXNlckRhdGEuSXRlbUlkKVxuICAgICAgICAgICAgICAgIGlmICghaXRlbSkgY29udGludWVcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdhc1BsYXllZCA9IGl0ZW0uVXNlckRhdGEuUGxheWVkXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzID0gaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3NcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIFVzZXJEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLlVzZXJEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVkOiB1c2VyRGF0YS5QbGF5ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBJc0Zhdm9yaXRlOiB1c2VyRGF0YS5Jc0Zhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWJhY2tQb3NpdGlvblRpY2tzOiB1c2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZWRQZXJjZW50YWdlOiB1c2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlQmx1ckRvbSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHVzZXJEYXRhLkl0ZW1JZCwgdXNlckRhdGEuUGxheWVkKVxuICAgICAgICAgICAgICAgIGFkanVzdFdhdGNoZWRDb3VudCh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIGl0ZW0sIHdhc1BsYXllZCwgdXNlckRhdGEuUGxheWVkLCBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3MsIHVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQge0xvZ0xldmVsfSBmcm9tIFwiLi4vTW9kZWxzL0xvZ0xldmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAgIHByaXZhdGUgbG9nTGV2ZWw6IExvZ0xldmVsID0gTG9nTGV2ZWwuSW5mb3JtYXRpb25cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nX3ByZWZpeDogc3RyaW5nID0gXCJbSW5QbGF5ZXJFcGlzb2RlUHJldmlld11cIikge1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMb2dMZXZlbChsZXZlbDogTG9nTGV2ZWwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dMZXZlbCA9IGxldmVsXG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA8IExvZ0xldmVsLkRlYnVnKSByZXR1cm5cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPCBMb2dMZXZlbC5FcnJvcikgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPCBMb2dMZXZlbC5JbmZvcm1hdGlvbikgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuLi9FbmRwb2ludHNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXliYWNrSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikgeyB9XG5cbiAgICBhc3luYyBwbGF5KGl0ZW1JZDogc3RyaW5nLCBzdGFydFBvc2l0aW9uVGlja3M6IG51bWJlcik6IFByb21pc2U8dm9pZCB8IFJlc3BvbnNlPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5QTEFZX01FRElBfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t0aWNrc30nLCBzdGFydFBvc2l0aW9uVGlja3MudG9TdHJpbmcoKSkpXG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwgfSlcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3Qgc3RhcnQgdGhlIHBsYXliYWNrIG9mIGFuIGl0ZW1gLCBleClcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1Byb2dyYW1EYXRhfSBmcm9tIFwiLi4vTW9kZWxzL1Byb2dyYW1EYXRhXCI7XG5pbXBvcnQge0dyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7RGVmYXVsdFBsdWdpblNldHRpbmdzLCBQbHVnaW5TZXR0aW5nc30gZnJvbSBcIi4uL01vZGVscy9QbHVnaW5TZXR0aW5nc1wiO1xuaW1wb3J0IHtEZWZhdWx0U2VydmVyU2V0dGluZ3MsIFNlcnZlclNldHRpbmdzfSBmcm9tIFwiLi4vTW9kZWxzL1NlcnZlclNldHRpbmdzXCI7XG5cbmNvbnN0IEdST1VQU19DQUNIRV9UVEwgPSA1ICogNjAgKiAxMDAwXG5cbi8vIEl0ZW0gVHlwZSBtYXBwaW5ncyBmb3IgdGhlIFR5cGVzIHNlbGVjdGFibGUgaW4gdGhlIFBsdWdpbiBDb25maWd1cmF0aW9uXG5jb25zdCBQUkVWSUVXX1RZUEVfR1JPVVBTOiBQYXJ0aWFsPFJlY29yZDxJdGVtVHlwZSwgSXRlbVR5cGVbXT4+ID0ge1xuICAgIFtJdGVtVHlwZS5TZXJpZXNdOiBbSXRlbVR5cGUuU2VyaWVzLCBJdGVtVHlwZS5TZWFzb24sIEl0ZW1UeXBlLkVwaXNvZGVdLFxuICAgIFtJdGVtVHlwZS5Cb3hTZXRdOiBbSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5QbGF5bGlzdF0sXG4gICAgW0l0ZW1UeXBlLlZpZGVvXTogW0l0ZW1UeXBlLlZpZGVvLCBJdGVtVHlwZS5Gb2xkZXJdXG59XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtRGF0YVN0b3JlIHtcbiAgICBwcml2YXRlIF9wcm9ncmFtRGF0YTogUHJvZ3JhbURhdGFcbiAgICBwcml2YXRlIF92aWV3VG9rZW46IG51bWJlciA9IDBcbiAgICBwcml2YXRlIF9ncm91cHNDYWNoZWRBdDogbnVtYmVyIHwgbnVsbCA9IG51bGxcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZU1lZGlhU291cmNlSWQ6ICcnLFxuICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogJycsXG4gICAgICAgICAgICBib3hTZXROYW1lOiAnJyxcbiAgICAgICAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICBwbHVnaW5TZXR0aW5nczogRGVmYXVsdFBsdWdpblNldHRpbmdzLFxuICAgICAgICAgICAgc2VydmVyU2V0dGluZ3M6IERlZmF1bHRTZXJ2ZXJTZXR0aW5nc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVNZWRpYVNvdXJjZUlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhY3RpdmVNZWRpYVNvdXJjZUlkKGFjdGl2ZU1lZGlhU291cmNlSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlR3JvdXBJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYWN0aXZlR3JvdXBJZChhY3RpdmVHcm91cElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZCA9IGFjdGl2ZUdyb3VwSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZUdyb3VwKCk6IEdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAuZ3JvdXBJZCA9PT0gdGhpcy5hY3RpdmVHcm91cElkKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBJdGVtVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS50eXBlXG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0eXBlKHR5cGU6IEl0ZW1UeXBlKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnR5cGUgPSB0eXBlXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib3hTZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3hTZXROYW1lKGJveFNldE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lID0gYm94U2V0TmFtZVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ3JvdXBzKCk6IEdyb3VwW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBncm91cHMoZ3JvdXBzOiBHcm91cFtdKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3VwcyA9IGdyb3Vwc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGx1Z2luU2V0dGluZ3MoKTogUGx1Z2luU2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEucGx1Z2luU2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsdWdpblNldHRpbmdzKHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5wbHVnaW5TZXR0aW5ncyA9IHNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZXJ2ZXJTZXR0aW5ncygpOiBTZXJ2ZXJTZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5zZXJ2ZXJTZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmVyU2V0dGluZ3Moc2V0dGluZ3M6IFNlcnZlclNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnNlcnZlclNldHRpbmdzID0gc2V0dGluZ3NcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG1hcmtHcm91cHNGZXRjaGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ncm91cHNDYWNoZWRBdCA9IERhdGUubm93KClcbiAgICB9XG5cbiAgICBwdWJsaWMgaW52YWxpZGF0ZUdyb3Vwc0NhY2hlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ncm91cHNDYWNoZWRBdCA9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzR3JvdXBzQ2FjaGVFeHBpcmVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPT09IG51bGwgfHwgRGF0ZS5ub3coKSAtIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID4gR1JPVVBTX0NBQ0hFX1RUTFxuICAgIH1cblxuICAgIHB1YmxpYyBpc1R5cGVBbGxvd2VkRm9yUHJldmlldyh0eXBlOiBJdGVtVHlwZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxvd2VkUHJldmlld1R5cGVzLnNvbWUoY29uZmlndXJlZFR5cGUgPT4gKFBSRVZJRVdfVFlQRV9HUk9VUFNbY29uZmlndXJlZFR5cGVdID8/IFtjb25maWd1cmVkVHlwZV0pLmluY2x1ZGVzKHR5cGUpKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWxsb3dlZFByZXZpZXdUeXBlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luU2V0dGluZ3MuRW5hYmxlZEl0ZW1UeXBlc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtQnlJZChpdGVtSWQ6IHN0cmluZyk6IFByZXZpZXdJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzXG4gICAgICAgICAgICAuZmxhdE1hcChncm91cCA9PiBncm91cC5pdGVtcylcbiAgICAgICAgICAgIC5maW5kKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgcmVjb3JkTG9hZGVkSXRlbXMoZ3JvdXBJZDogc3RyaW5nLCBpdGVtczogUHJldmlld0l0ZW1bXSwgc3RhcnRJbmRleDogbnVtYmVyLCB0b3RhbFJlY29yZENvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzID0gdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzLm1hcChncm91cCA9PiB7XG4gICAgICAgICAgICBpZiAoZ3JvdXAuZ3JvdXBJZCAhPT0gZ3JvdXBJZClcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBcblxuICAgICAgICAgICAgaWYgKGdyb3VwLmxvYWRlZFN0YXJ0SW5kZXggPT09IHVuZGVmaW5lZCB8fCBncm91cC5sb2FkZWRFbmRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIGl0ZW1zLCBsb2FkZWRTdGFydEluZGV4OiBzdGFydEluZGV4LCBsb2FkZWRFbmRJbmRleDogc3RhcnRJbmRleCArIGl0ZW1zLmxlbmd0aCwgbG9hZGVkVG90YWxSZWNvcmRDb3VudDogdG90YWxSZWNvcmRDb3VudCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFydEluZGV4ID49IGdyb3VwLmxvYWRlZEVuZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIGl0ZW1zOiBbLi4uZ3JvdXAuaXRlbXMsIC4uLml0ZW1zXSwgbG9hZGVkRW5kSW5kZXg6IHN0YXJ0SW5kZXggKyBpdGVtcy5sZW5ndGgsIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ6IHRvdGFsUmVjb3JkQ291bnQgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA8IGdyb3VwLmxvYWRlZFN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgaXRlbXM6IFsuLi5pdGVtcywgLi4uZ3JvdXAuaXRlbXNdLCBsb2FkZWRTdGFydEluZGV4OiBzdGFydEluZGV4LCBsb2FkZWRUb3RhbFJlY29yZENvdW50OiB0b3RhbFJlY29yZENvdW50IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXRHcm91cFdhdGNoZWRDb3VudChncm91cElkOiBzdHJpbmcsIHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyLCBwbGF5ZWRSdW50aW1lVGlja3M6IG51bWJlciwgdG90YWxSdW50aW1lVGlja3M6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuZ3JvdXBzLm1hcChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXBJZCA/IHsgLi4uZywgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudCwgcGxheWVkUnVudGltZVRpY2tzLCB0b3RhbFJ1bnRpbWVUaWNrcyB9IDogZylcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRqdXN0R3JvdXBXYXRjaFN0YXRzKGl0ZW1JZDogc3RyaW5nLCBkZWx0YVBsYXllZENvdW50OiBudW1iZXIsIGRlbHRhUGxheWVkUnVudGltZVRpY2tzOiBudW1iZXIpOiBHcm91cCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cHMuZmluZChnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpXG4gICAgICAgIGlmICghZ3JvdXApIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgICBjb25zdCB1cGRhdGVkR3JvdXA6IEdyb3VwID0ge1xuICAgICAgICAgICAgLi4uZ3JvdXAsXG4gICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGdyb3VwLnBsYXllZEl0ZW1Db3VudCArIGRlbHRhUGxheWVkQ291bnQsXG4gICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UID8gVU5LTk9XTl9XQVRDSEVEX0NPVU5UIDogZ3JvdXAucGxheWVkUnVudGltZVRpY2tzICsgZGVsdGFQbGF5ZWRSdW50aW1lVGlja3NcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuZ3JvdXBzLm1hcChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXAuZ3JvdXBJZCA/IHVwZGF0ZWRHcm91cCA6IGcpXG4gICAgICAgIHJldHVybiB1cGRhdGVkR3JvdXBcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlSXRlbShpdGVtVG9VcGRhdGU6IFByZXZpZXdJdGVtKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGdyb3VwID0+XG4gICAgICAgICAgICBncm91cC5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbVRvVXBkYXRlLklkKVxuICAgICAgICAgICAgICAgID8geyAuLi5ncm91cCwgaXRlbXM6IGdyb3VwLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1Ub1VwZGF0ZS5JZCA/IGl0ZW1Ub1VwZGF0ZSA6IGl0ZW0pIH1cbiAgICAgICAgICAgICAgICA6IGdyb3VwXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbmV2ZXIgdGhlIHBvcHVwIHN3aXRjaGVzIHdoYXQgaXQncyBkaXNwbGF5aW5nIChvcGVuaW5nLCBzZWxlY3RpbmcgYSBncm91cCwgZ29pbmcgYmFjayB0byB0aGUgZ3JvdXAgbGlzdClcbiAgICBwdWJsaWMgYmVnaW5OZXdWaWV3KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiArK3RoaXMuX3ZpZXdUb2tlblxuICAgIH1cblxuICAgIHB1YmxpYyBpc0N1cnJlbnRWaWV3KHRva2VuOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRva2VuID09PSB0aGlzLl92aWV3VG9rZW5cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBjdXJyZW50Vmlld1Rva2VuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3VG9rZW5cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdGNvbnN0IGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRpZihBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlKGkgPCBkZWZpbml0aW9uLmxlbmd0aCkge1xuXHRcdFx0dmFyIGtleSA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdHZhciBiaW5kaW5nID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdGlmKGJpbmRpbmcgPT09IDApIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiBkZWZpbml0aW9uW2krK10gfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGJpbmRpbmcgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihiaW5kaW5nID09PSAwKSB7IGkrKzsgfVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL1NlcnZpY2VzL0xvZ2dlclwiO1xuaW1wb3J0IHtQcmV2aWV3QnV0dG9uVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7RGlhbG9nQ29udGFpbmVyVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvRGlhbG9nQ29udGFpbmVyVGVtcGxhdGVcIjtcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcbmltcG9ydCB7TGlzdEVsZW1lbnRGYWN0b3J5fSBmcm9tIFwiLi9MaXN0RWxlbWVudEZhY3RvcnlcIjtcbmltcG9ydCB7UG9wdXBUaXRsZVRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xuaW1wb3J0IHthZGp1c3RXYXRjaGVkQ291bnQsIERhdGFGZXRjaGVyLCBjeWNsZVdhdGNoZWRDb3VudE1vZGUsIHVwZGF0ZUJsdXJEb219IGZyb20gXCIuL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7UGx1Z2luU2V0dGluZ3N9IGZyb20gXCIuL01vZGVscy9QbHVnaW5TZXR0aW5nc1wiO1xuaW1wb3J0IHtTZXJ2ZXJTZXR0aW5nc30gZnJvbSBcIi4vTW9kZWxzL1NlcnZlclNldHRpbmdzXCI7XG5pbXBvcnQge0VuZHBvaW50c30gZnJvbSBcIi4vRW5kcG9pbnRzXCI7XG5pbXBvcnQge0dyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtHcm91cEl0ZW1zUmVzdWx0fSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBJdGVtc1Jlc3VsdFwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge2FjdGl2YXRlU3Bpbm5lciwgc3Bpbm5lckh0bWx9IGZyb20gXCIuL0NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IHtzZXRJdGVtT3ZlcmxheUFjdGl2ZSwgdXBkYXRlSXRlbVByb2dyZXNzRG9tfSBmcm9tIFwiLi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7dXBkYXRlRW5kVGltZURpc3BsYXl9IGZyb20gXCIuL0NvbXBvbmVudHMvSXRlbURldGFpbHNcIjtcblxuaW1wb3J0ICcuL1N0eWxlcy9TdHlsZXMuY3NzJ1xuXG4vLyBpbml0IHNlcnZpY2VzIGFuZCBoZWxwZXJzXG5jb25zdCBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoKVxuY29uc3QgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSA9IG5ldyBQcm9ncmFtRGF0YVN0b3JlKClcbmNvbnN0IHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyID0gbmV3IFBsYXliYWNrSGFuZGxlcihsb2dnZXIpXG5jb25zdCBsaXN0RWxlbWVudEZhY3RvcnkgPSBuZXcgTGlzdEVsZW1lbnRGYWN0b3J5KHBsYXliYWNrSGFuZGxlciwgcHJvZ3JhbURhdGFTdG9yZSwgbG9nZ2VyKVxuXG5jb25zdCBjb2xsZWN0aW9uc0J5SXRlbUlkID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8R3JvdXBbXT4+KClcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwW10+IHtcbiAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5DT05UQUlOSU5HX0NPTExFQ1RJT05TfWBcbiAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByYXc6IGFueVtdID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIHJldHVybiByYXcubWFwKChnOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXIsXG4gICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgdG90YWxJdGVtQ291bnQ6IGcuVG90YWxJdGVtQ291bnQsXG4gICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IGcuUGxheWVkUnVudGltZVRpY2tzLFxuICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IGcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgfSkpXG4gICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgbG9hZCBDb2xsZWN0aW9ucy9QbGF5bGlzdHMgY29udGFpbmluZyB0aGlzIG1vdmllXCIsIGV4KVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8R3JvdXBbXT4ge1xuICAgIGxldCBwcm9taXNlID0gY29sbGVjdGlvbnNCeUl0ZW1JZC5nZXQoaXRlbUlkKVxuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkKVxuICAgICAgICBjb2xsZWN0aW9uc0J5SXRlbUlkLnNldChpdGVtSWQsIHByb21pc2UpXG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgLy8gRW5zdXJlIEFwaUNsaWVudC9FdmVudHMgZXhpc3QgYW5kIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgaWYgKHR5cGVvZiBBcGlDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBFdmVudHMgPT09ICd1bmRlZmluZWQnIHx8ICFBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZD8uKCkpIHtcbiAgICAgICAgc2V0VGltZW91dChpbml0aWFsaXplLCAzMDApXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG5ldyBEYXRhRmV0Y2hlcihwcm9ncmFtRGF0YVN0b3JlKVxuXG4gICAgY29uc3QgcGx1Z2luU2V0dGluZ3NVcmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5QTFVHSU5fU0VUVElOR1N9YClcbiAgICBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmw6IHBsdWdpblNldHRpbmdzVXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIC50aGVuKChjb25maWc6IFBsdWdpblNldHRpbmdzKSA9PiB7XG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzID0gY29uZmlnXG4gICAgICAgICAgICBsb2dnZXIuc2V0TG9nTGV2ZWwoY29uZmlnLkxvZ0xldmVsKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBsb2FkIHBsdWdpbiBzZXR0aW5ncywgZmFsbGluZyBiYWNrIHRvIGRlZmF1bHRzXCIsIGV4KSlcblxuICAgIGNvbnN0IHNlcnZlclNldHRpbmdzVXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuU0VSVkVSX1NFVFRJTkdTfWApXG4gICAgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsOiBzZXJ2ZXJTZXR0aW5nc1VybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAudGhlbigoY29uZmlnOiBTZXJ2ZXJTZXR0aW5ncykgPT4gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncyA9IGNvbmZpZylcbiAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgbG9hZCBzZXJ2ZXIgc2V0dGluZ3MsIGZhbGxpbmcgYmFjayB0byBkZWZhdWx0c1wiLCBleCkpXG5cbiAgICBsb2dnZXIuaW5mbyhcIkluUGxheWVyRXBpc29kZVByZXZpZXcgaW5pdGlhbGl6ZWRcIilcbn1cbmluaXRpYWxpemUoKVxuXG5jb25zdCBTRUFSQ0hfQ09MTEVDVElPTlNfR1JPVVBfTkFNRSA9ICdTZWFyY2ggQ29sbGVjdGlvbnMvUGxheWxpc3RzJ1xuXG5jb25zdCB2aWRlb1BhdGhzOiBzdHJpbmdbXSA9IFsnL3ZpZGVvJ11cbmxldCBwcmV2aW91c1JvdXRlUGF0aDogc3RyaW5nID0gbnVsbFxubGV0IHByZXZpZXdDb250YWluZXJMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG5sZXQgcGVuZGluZ1ByZWxvYWRJdGVtSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG5sZXQgcGVuZGluZ1ByZWxvYWQ6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbFxubGV0IHByZWxvYWRPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsXG5sZXQgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGxcblxuZnVuY3Rpb24gZ2V0QWN0aXZlQnV0dG9uc0JhcigpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtdHlwZT1cInZpZGVvLW9zZFwiXTpub3QoLmhpZGUpIC5idXR0b25zJylcbn1cblxuLy8gV2FpdCBmb3IgdGhlIE9TRCdzIGAuYnV0dG9uc2AgY29udGFpbmVyIHRvIGV4aXN0XG5mdW5jdGlvbiB3YWl0Rm9yQnV0dG9uc0NvbnRhaW5lcihvblJlYWR5OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKGdldEFjdGl2ZUJ1dHRvbnNCYXIoKSkge1xuICAgICAgICBvblJlYWR5KClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGlmICghZ2V0QWN0aXZlQnV0dG9uc0JhcigpKSByZXR1cm5cbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyID0gbnVsbFxuICAgICAgICBvblJlYWR5KClcbiAgICB9KVxuICAgIGJ1dHRvbnNDb250YWluZXJPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdzaG93Jywgdmlld1Nob3dFdmVudEhhbmRsZXIpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB2aWV3U2hvd0V2ZW50SGFuZGxlcilcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKCkpXG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVJhdGluZ0J1dHRvbigpOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIGdldEFjdGl2ZUJ1dHRvbnNCYXIoKT8ucXVlcnlTZWxlY3RvcignLmJ0blVzZXJSYXRpbmcuYXV0b1NpemUucGFwZXItaWNvbi1idXR0b24tbGlnaHQnKSA/PyBudWxsXG59XG5cbmZ1bmN0aW9uIGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGdldEFjdGl2ZVJhdGluZ0J1dHRvbigpPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA/PyBudWxsXG59XG5cbmxldCBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kOiBudW1iZXIgPSAtMVxuZnVuY3Rpb24gb25WaWRlb1RpbWVVcGRhdGUodGhpczogSFRNTFZpZGVvRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uU2Vjb25kID0gTWF0aC5mbG9vcih0aGlzLmN1cnJlbnRUaW1lKVxuICAgIGlmIChwb3NpdGlvblNlY29uZCA9PT0gbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCkgcmV0dXJuXG4gICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IHBvc2l0aW9uU2Vjb25kXG5cbiAgICBjb25zdCBpdGVtSWQgPSBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKClcbiAgICBpZiAoIWl0ZW1JZCkgcmV0dXJuXG5cbiAgICBpZiAoaXRlbUlkICE9PSBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNJdGVtSWQgPSBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWRcbiAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gaXRlbUlkXG4gICAgICAgIHNldEl0ZW1PdmVybGF5QWN0aXZlKHByZXZpb3VzSXRlbUlkLCBmYWxzZSlcbiAgICAgICAgc2V0SXRlbU92ZXJsYXlBY3RpdmUoaXRlbUlkLCB0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSBwcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKGl0ZW1JZClcbiAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0uUnVuVGltZVRpY2tzKSByZXR1cm5cblxuICAgIGNvbnN0IHBvc2l0aW9uVGlja3MgPSB0aGlzLmN1cnJlbnRUaW1lICogMTBfMDAwXzAwMFxuICAgIGNvbnN0IHBsYXllZFBlcmNlbnRhZ2UgPSAocG9zaXRpb25UaWNrcyAvIGl0ZW0uUnVuVGltZVRpY2tzKSAqIDEwMFxuXG4gICAgY29uc3QgcGxheWVkID0gaXRlbS5Vc2VyRGF0YS5QbGF5ZWQgfHwgcGxheWVkUGVyY2VudGFnZSA+PSBwcm9ncmFtRGF0YVN0b3JlLnNlcnZlclNldHRpbmdzLk1heFJlc3VtZVBjdFxuICAgIGNvbnN0IHVwZGF0ZWRJdGVtOiBQcmV2aWV3SXRlbSA9IHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgVXNlckRhdGE6IHtcbiAgICAgICAgICAgIC4uLml0ZW0uVXNlckRhdGEsXG4gICAgICAgICAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IHBvc2l0aW9uVGlja3MsXG4gICAgICAgICAgICBQbGF5ZWRQZXJjZW50YWdlOiBwbGF5ZWRQZXJjZW50YWdlLFxuICAgICAgICAgICAgUGxheWVkOiBwbGF5ZWRcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0odXBkYXRlZEl0ZW0pXG4gICAgXG4gICAgdXBkYXRlSXRlbVByb2dyZXNzRG9tKGl0ZW1JZCwgcGxheWVkUGVyY2VudGFnZSlcbiAgICB1cGRhdGVFbmRUaW1lRGlzcGxheSh1cGRhdGVkSXRlbSlcbiAgICBpZiAocGxheWVkICE9PSBpdGVtLlVzZXJEYXRhLlBsYXllZCkgdXBkYXRlQmx1ckRvbShwcm9ncmFtRGF0YVN0b3JlLCBpdGVtSWQsIHBsYXllZClcbiAgICBhZGp1c3RXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZSwgaXRlbSwgaXRlbS5Vc2VyRGF0YS5QbGF5ZWQsIHBsYXllZCwgaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MsIHBvc2l0aW9uVGlja3MpXG59XG5cbmZ1bmN0aW9uIG9uVmlkZW9SYXRlQ2hhbmdlKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuZW5kc0F0W2RhdGEtaXRlbS1pZF0nKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gcHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZChlbGVtZW50LmRhdGFzZXQuaXRlbUlkKVxuICAgICAgICBpZiAoaXRlbSkgdXBkYXRlRW5kVGltZURpc3BsYXkoaXRlbSlcbiAgICB9KVxufVxuXG4vLyBUcmFja3Mgd2hpY2ggQm94U2V0L1BsYXlsaXN0IGRldGFpbHMgcGFnZSAoaWYgYW55KSB3YXMgdmlzaXRlZCBpbW1lZGlhdGVseSBiZWZvcmUgbmF2aWdhdGluZyBpbnRvIHBsYXliYWNrXG5jb25zdCBERVRBSUxTX1JPVVRFX1BBVEg6IHN0cmluZyA9ICcvZGV0YWlscydcbmNvbnN0IERBU0hCT0FSRF9ST1VURV9QQVRIOiBzdHJpbmcgPSAnL2hvbWUnXG5jb25zdCBjb2xsZWN0aW9uTGlrZUl0ZW1UeXBlczogU2V0PEl0ZW1UeXBlPiA9IG5ldyBTZXQoW0l0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuUGxheWxpc3RdKVxubGV0IHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQ6IHN0cmluZyA9IG51bGxcbmNvbnN0IEVNUFRZX0dVSUQgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJ1xuXG5mdW5jdGlvbiByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNvbGxlY3Rpb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgcHJvZ3JhbURhdGFTdG9yZS5pbnZhbGlkYXRlR3JvdXBzQ2FjaGUoKVxuXG4gICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuU0VUX1NPVVJDRV9DT0xMRUNUSU9OfWBcbiAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tkZXZpY2VJZH0nLCBBcGlDbGllbnQuZGV2aWNlSWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tjb2xsZWN0aW9uSWR9JywgY29sbGVjdGlvbklkKSlcbiAgICBBcGlDbGllbnQuYWpheCh7dHlwZTogJ0dFVCcsIHVybH0pLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcmVjb3JkIHNvdXJjZSBjb2xsZWN0aW9uIGZvciBwbGF5YmFjayBzZXNzaW9uXCIsIGV4KSlcbn1cblxuZnVuY3Rpb24gY2xlYXJTb3VyY2VDb2xsZWN0aW9uKCk6IHZvaWQge1xuICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oRU1QVFlfR1VJRClcbn1cblxuZnVuY3Rpb24gY2FwdHVyZVNvdXJjZUNvbGxlY3Rpb24oY3VycmVudFJvdXRlUGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgW2N1cnJlbnRQYXRoLCBjdXJyZW50UXVlcnldID0gY3VycmVudFJvdXRlUGF0aC5zcGxpdCgnPycpXG4gICAgY29uc3QgcHJldmlvdXNQYXRoID0gcHJldmlvdXNSb3V0ZVBhdGg/LnNwbGl0KCc/JylbMF1cblxuICAgIGlmIChjdXJyZW50UGF0aCA9PT0gREFTSEJPQVJEX1JPVVRFX1BBVEgpIHtcbiAgICAgICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IG51bGxcbiAgICAgICAgY2xlYXJTb3VyY2VDb2xsZWN0aW9uKClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQYXRoID09PSBERVRBSUxTX1JPVVRFX1BBVEgpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsc0lkID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50UXVlcnkgPz8gJycpLmdldCgnaWQnKVxuICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxuICAgICAgICBpZiAoIWRldGFpbHNJZCkgcmV0dXJuXG5cbiAgICAgICAgQXBpQ2xpZW50LmdldEl0ZW0oQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSwgZGV0YWlsc0lkKS50aGVuKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVHlwZTogSXRlbVR5cGUgPSBJdGVtVHlwZVtpdGVtLlR5cGUgYXMgdW5rbm93biBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gY29sbGVjdGlvbkxpa2VJdGVtVHlwZXMuaGFzKGl0ZW1UeXBlKSA/IGRldGFpbHNJZCA6IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMoY3VycmVudFBhdGgpICYmIHByZXZpb3VzUGF0aCA9PT0gREVUQUlMU19ST1VURV9QQVRIKSB7XG4gICAgICAgIGlmIChwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkKVxuICAgICAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjbGVhclNvdXJjZUNvbGxlY3Rpb24oKVxuICAgIH1cblxuICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBudWxsXG59XG5cbi8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGNvbGxlY3Rpb24vcGxheWxpc3QgaWQgdGhyb3VnaCBhIHBsYXkgYWN0aW9uIG9uIGEgY2FyZCB0aGUgc2FtZSB3YXkgYXMgaGVsbHlmaW4gZG9lcyBpdCBpdHNlbGZcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qZWxseWZpbi9qZWxseWZpbi13ZWIvYmxvYi9yZWxlYXNlLTEwLjExLnovc3JjL2NvbXBvbmVudHMvc2hvcnRjdXRzLmpzI0wyMTZcbmNvbnN0IFBMQVlCQUNLX1RSSUdHRVJfQUNUSU9OUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KFsncGxheScsICdyZXN1bWUnLCAncGxheWFsbGZyb21oZXJlJ10pXG5mdW5jdGlvbiBvbkRvY3VtZW50Q2xpY2tDYXB0dXJlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLy8gQ3ljbGUgZ3JvdXAgc3RhdCBkaXNwbGF5IG1vZGVcbiAgICBjb25zdCB3YXRjaGVkQ291bnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LmNsb3Nlc3Q/LjxIVE1MRWxlbWVudD4oJyNwcmV2aWV3UG9wdXAgLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCcpXG4gICAgaWYgKHdhdGNoZWRDb3VudEVsZW1lbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgZ3JvdXBFbGVtZW50ID0gd2F0Y2hlZENvdW50RWxlbWVudC5jbG9zZXN0PEhUTUxFbGVtZW50PignW2lkXj1cImdyb3VwLVwiXScpXG4gICAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBFbGVtZW50ID8gcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuZmluZChnID0+IGBncm91cC0ke2cuZ3JvdXBJZH1gID09PSBncm91cEVsZW1lbnQuaWQpIDogcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cFxuICAgICAgICBpZiAoZ3JvdXApIGN5Y2xlV2F0Y2hlZENvdW50TW9kZShwcm9ncmFtRGF0YVN0b3JlLCB3YXRjaGVkQ291bnRFbGVtZW50LCBncm91cClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gT25seSBjYXB0dXJlIG5hdGl2ZSBldmVudHMgYW5kIGlnbm9yZSBhbnkgZnJvbSB0aGUgUHJldmlldyBMaXN0XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5jbG9zZXN0Py4oJyNwcmV2aWV3UG9wdXAnKSkgcmV0dXJuXG5cbiAgICBjb25zdCBhY3Rpb25FbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LmNsb3Nlc3Q/LignW2RhdGEtYWN0aW9uXScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgIGlmICghYWN0aW9uRWxlbWVudCB8fCAhUExBWUJBQ0tfVFJJR0dFUl9BQ1RJT05TLmhhcyhhY3Rpb25FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSkpIHJldHVyblxuXG4gICAgY29uc3QgY2FyZCA9IGFjdGlvbkVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtaWRdJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKCFjYXJkKSByZXR1cm5cblxuICAgIGNvbnN0IGNoaWxkT2ZDb2xsZWN0aW9uSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xsZWN0aW9uaWQnKSA/PyBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1wbGF5bGlzdGlkJylcbiAgICBpZiAoY2hpbGRPZkNvbGxlY3Rpb25JZCkge1xuICAgICAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKGNoaWxkT2ZDb2xsZWN0aW9uSWQpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNhcmRJdGVtVHlwZTogSXRlbVR5cGUgPSBJdGVtVHlwZVtjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgYXMgdW5rbm93biBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgY29uc3QgY2FyZElkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuICAgIGlmIChjYXJkSWQgJiYgY29sbGVjdGlvbkxpa2VJdGVtVHlwZXMuaGFzKGNhcmRJdGVtVHlwZSkpIHtcbiAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihjYXJkSWQpXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBcbiAgICBjbGVhclNvdXJjZUNvbGxlY3Rpb24oKVxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkRvY3VtZW50Q2xpY2tDYXB0dXJlLCB0cnVlKVxuXG5mdW5jdGlvbiB2aWV3U2hvd0V2ZW50SGFuZGxlcigpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50Um91dGVQYXRoOiBzdHJpbmcgPSBnZXRMb2NhdGlvblBhdGgoKVxuXG4gICAgZnVuY3Rpb24gZ2V0TG9jYXRpb25QYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxuICAgICAgICBjb25zdCBjdXJyZW50Um91dGVJbmRleDogbnVtYmVyID0gbG9jYXRpb24ubGFzdEluZGV4T2YoJy8nKVxuICAgICAgICByZXR1cm4gbG9jYXRpb24uc3Vic3RyaW5nKGN1cnJlbnRSb3V0ZUluZGV4KVxuICAgIH1cblxuICAgIC8vIEluaXRpYWwgYXR0ZW1wdCB0byBsb2FkIHRoZSB2aWRlbyB2aWV3IG9yIHNjaGVkdWxlIHJldHJpZXMuXG4gICAgY2FwdHVyZVNvdXJjZUNvbGxlY3Rpb24oY3VycmVudFJvdXRlUGF0aClcbiAgICBhdHRlbXB0TG9hZFZpZGVvVmlldygpXG4gICAgcHJldmlvdXNSb3V0ZVBhdGggPSBjdXJyZW50Um91dGVQYXRoXG4gICAgXG4gICAgZnVuY3Rpb24gYXR0ZW1wdExvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XG4gICAgICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRSb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcHJldmlldyBjb250YWluZXIgaXMgYWxyZWFkeSBsb2FkZWQgYmVmb3JlIGxvYWRpbmdcbiAgICAgICAgICAgIGlmIChwcmV2aWV3Q29udGFpbmVyTG9hZGVkIHx8IGlzUHJldmlld0J1dHRvbkNyZWF0ZWQoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIC8vIFJlc2VydmUgaW1tZWRpYXRlbHkgc28gYSBzZWNvbmQgdmlld3Nob3cgZG9lc24ndCBxdWV1ZSBhbm90aGVyIHdhaXRcbiAgICAgICAgICAgIHByZXZpZXdDb250YWluZXJMb2FkZWQgPSB0cnVlXG4gICAgICAgICAgICB3YWl0Rm9yQnV0dG9uc0NvbnRhaW5lcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gbmF2aWdhdGVkIGJhY2sgb3V0IG9mIHRoZSBwbGF5ZXIpIHdoaWxlIHdlIHdlcmUgd2FpdGluZ1xuICAgICAgICAgICAgICAgIGlmICghdmlkZW9QYXRocy5pbmNsdWRlcyhnZXRMb2NhdGlvblBhdGgoKSkgfHwgaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpKSByZXR1cm5cbiAgICAgICAgICAgICAgICBsb2FkVmlkZW9WaWV3KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhwcmV2aW91c1JvdXRlUGF0aCkpIHtcbiAgICAgICAgICAgIHVubG9hZFZpZGVvVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiTG9hZGluZyB2aWRlbyB2aWV3XCIpXG5cbiAgICAgICAgbGV0IHByZXZpZXdCdXR0b246IFByZXZpZXdCdXR0b25UZW1wbGF0ZSB8IG51bGwgPSBudWxsXG4gICAgICAgIGxldCBwcmV2aWV3QnV0dG9uTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICAgICAgLy8gT25seSBhY3R1YWxseSBpbnNlcnRlZCBpbnRvIHRoZSBPU0Qgb25jZSB0aGUgaXRlbSdzIHR5cGUgaXMgY29uZmlybWVkIGVuYWJsZWQgLSBzZWUgcHJlbG9hZFByZXZpZXdEYXRhLlxuICAgICAgICBmdW5jdGlvbiBpbnNlcnRQcmV2aWV3QnV0dG9uKCk6IHZvaWQge1xuICAgICAgICAgICAgaWYgKHByZXZpZXdCdXR0b24pIHJldHVyblxuICAgICAgICAgICAgaWYgKCF2aWRlb1BhdGhzLmluY2x1ZGVzKGdldExvY2F0aW9uUGF0aCgpKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNCYXIgPSBnZXRBY3RpdmVCdXR0b25zQmFyKClcbiAgICAgICAgICAgIGlmICghYnV0dG9uc0Jhcikge1xuICAgICAgICAgICAgICAgIHdhaXRGb3JCdXR0b25zQ29udGFpbmVyKGluc2VydFByZXZpZXdCdXR0b24pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudCBpcyB1c2VkIGZvciBjYXN0aW5nIGZyb20gRWxlbWVudCB0byBIVE1MRWxlbWVudFxuICAgICAgICAgICAgY29uc3QgcGFyZW50OiBIVE1MRWxlbWVudCA9IGJ1dHRvbnNCYXIubGFzdEVsZW1lbnRDaGlsZC5wYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5Vc2VyUmF0aW5nXCIpKTtcbiAgICAgICAgICAgIC8vIGlmIGluZGV4IGlzIGludmFsaWQgdHJ5IHRvIHVzZSB0aGUgb2xkIHBvc2l0aW9uICh1c2VkIGluIEplbGx5ZmluIDEwLjguMTIpXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKVxuICAgICAgICAgICAgICAgIGluZGV4ID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmZpbmRJbmRleCgoY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9zZFRpbWVUZXh0XCIpKVxuXG4gICAgICAgICAgICBwcmV2aWV3QnV0dG9uID0gbmV3IFByZXZpZXdCdXR0b25UZW1wbGF0ZShwYXJlbnQsIGluZGV4KVxuICAgICAgICAgICAgcHJldmlld0J1dHRvbi5yZW5kZXIocHJldmlld0J1dHRvbkNsaWNrSGFuZGxlcilcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFZpZGVvRWxlbWVudD4oJ3ZpZGVvLmh0bWx2aWRlb3BsYXllcicpXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBvblZpZGVvVGltZVVwZGF0ZSlcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcigncmF0ZWNoYW5nZScsIG9uVmlkZW9SYXRlQ2hhbmdlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmV0Y2hQcmV2aWV3SXRlbVR5cGUgPSBhc3luYyAoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPEl0ZW1UeXBlPiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX1BSRVZJRVdfVFlQRX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9JywgQXBpQ2xpZW50LmRldmljZUlkKCkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICAgICAgICAgIGNvbnN0IHJhd1R5cGU6IHN0cmluZyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgcmV0dXJuIEl0ZW1UeXBlW3Jhd1R5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9hZEl0ZW1QcmV2aWV3RGF0YSA9IGFzeW5jIChpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8e1xuICAgICAgICAgICAgaXRlbVR5cGU6IHN0cmluZywgY29udGFpbmVyTmFtZTogc3RyaW5nIHwgbnVsbCwgZ3JvdXBzOiBHcm91cFtdLCBhY3RpdmVHcm91cElkOiBzdHJpbmcsIGFjdGl2ZUl0ZW1JbmRleDogbnVtYmVyXG4gICAgICAgIH0+ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKClcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLklURU1fUFJFVklFV19EQVRBfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCB1c2VySWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tkZXZpY2VJZH0nLCBBcGlDbGllbnQuZGV2aWNlSWQoKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpKVxuICAgICAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiByYXcuSXRlbVR5cGUsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyTmFtZTogcmF3LkNvbnRhaW5lck5hbWUsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiByYXcuR3JvdXBzLm1hcCgoZzogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZTogZy5Hcm91cE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHBsYXllZEl0ZW1Db3VudDogZy5QbGF5ZWRJdGVtQ291bnQsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbUNvdW50OiBnLlRvdGFsSXRlbUNvdW50LFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IGcuUGxheWVkUnVudGltZVRpY2tzLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbFJ1bnRpbWVUaWNrczogZy5Ub3RhbFJ1bnRpbWVUaWNrc1xuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkOiByYXcuQWN0aXZlR3JvdXBJZCxcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtSW5kZXg6IHJhdy5BY3RpdmVJdGVtSW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRHcm91cEl0ZW1zID0gYXN5bmMgKGdyb3VwSWQ6IHN0cmluZywgc3RhcnRJbmRleDogbnVtYmVyID0gMCwgbGltaXQ6IG51bWJlciA9IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplKTogUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5HUk9VUF9JVEVNU31gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7Z3JvdXBJZH0nLCBncm91cElkKSxcbiAgICAgICAgICAgICAgICB7IHN0YXJ0SW5kZXgsIGxpbWl0IH0pXG4gICAgICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogR3JvdXBJdGVtc1Jlc3VsdCA9IHsgaXRlbXM6IHJhdy5JdGVtcywgdG90YWxSZWNvcmRDb3VudDogcmF3LlRvdGFsUmVjb3JkQ291bnQgfVxuXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnJlY29yZExvYWRlZEl0ZW1zKGdyb3VwSWQsIHJlc3VsdC5pdGVtcywgc3RhcnRJbmRleCwgcmVzdWx0LnRvdGFsUmVjb3JkQ291bnQpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHByZWxvYWRQcmV2aWV3RGF0YShpdGVtSWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmICghaXRlbUlkKSByZXR1cm5cbiAgICAgICAgICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5pc0dyb3Vwc0NhY2hlRXhwaXJlZCAmJiBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5zb21lKGcgPT4gZy5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBBbHJlYWR5IGZldGNoZWQgKGFuZCB0aGVyZWZvcmUgYWxyZWFkeSBrbm93bi1hbGxvd2VkKSBlYXJsaWVyIHRoaXMgc2Vzc2lvbiAtIGp1c3Qgc2hvdyB0aGUgYnV0dG9uLlxuICAgICAgICAgICAgICAgIGluc2VydFByZXZpZXdCdXR0b24oKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBlbmRpbmdQcmVsb2FkSXRlbUlkID09PSBpdGVtSWQpIHJldHVyblxuXG4gICAgICAgICAgICBwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9IGl0ZW1JZFxuICAgICAgICAgICAgcGVuZGluZ1ByZWxvYWQgPSAoYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpZXdUeXBlID0gYXdhaXQgZmV0Y2hQcmV2aWV3SXRlbVR5cGUoaXRlbUlkKVxuICAgICAgICAgICAgICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5pc1R5cGVBbGxvd2VkRm9yUHJldmlldyhwcmV2aWV3VHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBQcmV2aWV3IG5vdCBlbmFibGVkIGZvciBpdGVtIHR5cGUgJyR7cHJldmlld1R5cGV9Jywgc2tpcHBpbmcgYnV0dG9uIGZvciBpdGVtICR7aXRlbUlkfWApXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGluc2VydFByZXZpZXdCdXR0b24oKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpdGVtVHlwZSwgY29udGFpbmVyTmFtZSwgZ3JvdXBzLCBhY3RpdmVHcm91cElkLCBhY3RpdmVJdGVtSW5kZXggfSA9IGF3YWl0IGxvYWRJdGVtUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gZ3JvdXBzXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5tYXJrR3JvdXBzRmV0Y2hlZCgpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS50eXBlID0gSXRlbVR5cGVbaXRlbVR5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSA9IGNvbnRhaW5lck5hbWUgPz8gJydcblxuICAgICAgICAgICAgICAgIGNvbnN0IFBBR0VfU0laRSA9IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZU9mQWN0aXZlRXBpc29kZSA9IE1hdGguZmxvb3IoYWN0aXZlSXRlbUluZGV4IC8gUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgLSAxKSAqIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93TGltaXQgPSAocGFnZU9mQWN0aXZlRXBpc29kZSArIDIpICogUEFHRV9TSVpFIC0gaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXhcblxuICAgICAgICAgICAgICAgIGF3YWl0IGxvYWRHcm91cEl0ZW1zKGFjdGl2ZUdyb3VwSWQsIGluaXRpYWxXaW5kb3dTdGFydEluZGV4LCBpbml0aWFsV2luZG93TGltaXQpXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBQcmVsb2FkZWQgJHtncm91cHMubGVuZ3RofSBncm91cChzKSBmb3IgaXRlbSAke2l0ZW1JZH1gKVxuICAgICAgICAgICAgfSkoKS5jYXRjaCgoZXg6IHVua25vd24pID0+IHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBwcmVsb2FkIHByZXZpZXcgZGF0YVwiLCBleClcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkKSBwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9IG51bGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBXYWl0IHRoYXQgZGF0YS1pZCBnZXRzIHBvcHVsYXRlZCBieSBKZWxseWZpblxuICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVByZWxvYWQoKTogdm9pZCB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKClcbiAgICAgICAgICAgIGlmIChpdGVtSWQpIHtcbiAgICAgICAgICAgICAgICBwcmVsb2FkUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBnZXRBY3RpdmVSYXRpbmdCdXR0b24oKVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgcmF0aW5nIGJ1dHRvbiBpdHNlbGYgaGFzbid0IGJlZW4gY3JlYXRlZCB5ZXQgLSB3YWl0IGZvciB0aGUgT1NEIHRvIGZpbmlzaCBidWlsZGluZyBpdCwgdGhlbiByZXRyeS5cbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXRBY3RpdmVSYXRpbmdCdXR0b24oKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlciA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVQcmVsb2FkKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcbiAgICAgICAgICAgICAgICBpZiAoIWlkKSByZXR1cm5cbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlciA9IG51bGxcbiAgICAgICAgICAgICAgICBwcmVsb2FkUHJldmlld0RhdGEoaWQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLWlkJ10gfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNjaGVkdWxlUHJlbG9hZCgpXG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcHJldmlld0J1dHRvbkNsaWNrSGFuZGxlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGlmIChwcmV2aWV3QnV0dG9uTG9hZGluZykgcmV0dXJuXG4gICAgICAgICAgICBwcmV2aWV3QnV0dG9uTG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZG9QcmV2aWV3QnV0dG9uQ2xpY2soKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBvcGVuIHByZXZpZXcgcG9wdXBcIiwgZXgpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3QnV0dG9uTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkb1ByZXZpZXdCdXR0b25DbGljaygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwZXJpbWVudGFsIGFuZCB3aWxsIG1heWJlIGJlIHVzZWQgaW4gZnV0dXJlIHJlbGVhc2VzXG4gICAgICAgICAgICBjb25zdCBnZXROb3dQbGF5aW5nSXRlbUlkRnJvbVNlc3Npb24gPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuTk9XX1BMQVlJTkdfSVRFTX1gKVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCByZXNvbHZlIG5vdy1wbGF5aW5nIGl0ZW0gZnJvbSBzZXNzaW9uLCBmYWxsaW5nIGJhY2sgdG8gT1NEIHJhdGluZyBidXR0b25cIiwgZXgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dDb250YWluZXI6IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlID0gbmV3IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlKGRvY3VtZW50LmJvZHksIGRvY3VtZW50LmJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIGRpYWxvZ0NvbnRhaW5lci5yZW5kZXIoKVxuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbnRlbnRDb250YWluZXInKVxuXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKClcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gcmVzcG9uc2Ugb2YgdGhlIE9TRCdzIHByZWxvYWQgb2YgdGhpcyBzYW1lIGl0ZW0sIHdhaXQgZm9yIGl0IGluc3RlYWQgb2YgZmlyaW5nIGEgZHVwbGljYXRlIGZldGNoLlxuICAgICAgICAgICAgaWYgKHBlbmRpbmdQcmVsb2FkSXRlbUlkID09PSBpdGVtSWQgJiYgcGVuZGluZ1ByZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicHJldmlld1Njcm9sbFNwaW5uZXJcIj4ke3NwaW5uZXJIdG1sKCl9PC9kaXY+YFxuICAgICAgICAgICAgICAgIGFjdGl2YXRlU3Bpbm5lcihjb250ZW50RGl2KVxuICAgICAgICAgICAgICAgIGF3YWl0IHBlbmRpbmdQcmVsb2FkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZEdyb3VwID0gIXByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWRcbiAgICAgICAgICAgICAgICA/IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmZpbmQoZyA9PiBnLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpKVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgICAgICAgIGxldCBhY3RpdmVHcm91cElkOiBzdHJpbmdcbiAgICAgICAgICAgIGxldCBpbml0aWFsUGFnZTogR3JvdXBJdGVtc1Jlc3VsdFxuICAgICAgICAgICAgbGV0IGluaXRpYWxXaW5kb3dTdGFydEluZGV4OiBudW1iZXJcblxuICAgICAgICAgICAgaWYgKGNhY2hlZEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBPcGVuaW5nIHByZXZpZXcgcG9wdXAgZm9yIGl0ZW0gJHtpdGVtSWR9IHVzaW5nIGNhY2hlZCBncm91cCBkYXRhYClcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkID0gY2FjaGVkR3JvdXAuZ3JvdXBJZFxuICAgICAgICAgICAgICAgIGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gY2FjaGVkR3JvdXAubG9hZGVkU3RhcnRJbmRleCA/PyAwXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2UgPSB7IGl0ZW1zOiBbLi4uY2FjaGVkR3JvdXAuaXRlbXNdLCB0b3RhbFJlY29yZENvdW50OiBjYWNoZWRHcm91cC5sb2FkZWRUb3RhbFJlY29yZENvdW50ID8/IGNhY2hlZEdyb3VwLml0ZW1zLmxlbmd0aCB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgT3BlbmluZyBwcmV2aWV3IHBvcHVwIGZvciBpdGVtICR7aXRlbUlkfSwgZmV0Y2hpbmcgZ3JvdXAgZGF0YWApXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByZXZpZXdTY3JvbGxTcGlubmVyXCI+JHtzcGlubmVySHRtbCgpfTwvZGl2PmBcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoY29udGVudERpdilcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbVR5cGUsIGNvbnRhaW5lck5hbWUsIGdyb3VwcywgYWN0aXZlR3JvdXBJZDogZmV0Y2hlZEFjdGl2ZUdyb3VwSWQsIGFjdGl2ZUl0ZW1JbmRleCB9ID0gYXdhaXQgbG9hZEl0ZW1QcmV2aWV3RGF0YShpdGVtSWQpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBncm91cHNcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLm1hcmtHcm91cHNGZXRjaGVkKClcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPSBJdGVtVHlwZVtpdGVtVHlwZSBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ib3hTZXROYW1lID0gY29udGFpbmVyTmFtZSA/PyAnJ1xuICAgICAgICAgICAgICAgIGFjdGl2ZUdyb3VwSWQgPSBmZXRjaGVkQWN0aXZlR3JvdXBJZFxuXG4gICAgICAgICAgICAgICAgLy8gTG9hZCBhIDMtcGFnZSB3aW5kb3cgKHBhZ2Ugb2YgdGhlIGFjdGl2ZSBlcGlzb2RlLCBwbHVzIG9uZSBwYWdlIGJlZm9yZSBhbmQgYWZ0ZXIpXG4gICAgICAgICAgICAgICAgY29uc3QgUEFHRV9TSVpFID0gcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FcGlzb2RlUGFnZVNpemVcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlT2ZBY3RpdmVFcGlzb2RlID0gTWF0aC5mbG9vcihhY3RpdmVJdGVtSW5kZXggLyBQQUdFX1NJWkUpXG4gICAgICAgICAgICAgICAgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXggPSBNYXRoLm1heCgwLCAocGFnZU9mQWN0aXZlRXBpc29kZSAtIDEpICogUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxXaW5kb3dMaW1pdCA9IChwYWdlT2ZBY3RpdmVFcGlzb2RlICsgMikgKiBQQUdFX1NJWkUgLSBpbml0aWFsV2luZG93U3RhcnRJbmRleFxuXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2UgPSBhd2FpdCBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBpbml0aWFsV2luZG93U3RhcnRJbmRleCwgaW5pdGlhbFdpbmRvd0xpbWl0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBpdGVtSWRcbiAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCA9IGFjdGl2ZUdyb3VwSWRcblxuICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJyAvLyByZW1vdmUgdGhlIGxvYWRpbmcgc3Bpbm5lclxuICAgICAgICAgICAgY29uc3Qgdmlld1Rva2VuID0gcHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuXG4gICAgICAgICAgICAvLyBBIHN0YW5kYWxvbmUgbW92aWUgaGFzIG5vIG1lYW5pbmdmdWwgZ3JvdXAgbmFtZSBvZiBpdHMgb3duOyBhbiBpdGVtIHNvdXJjZWQgZnJvbSBhIFBsYXlsaXN0L0JveFNldFxuICAgICAgICAgICAgLy8gYWxyZWFkeSBoYXMgdGhhdCBjb2xsZWN0aW9uJ3MgcmVhbCBuYW1lLCBzbyBvbmx5IHRoZSBzdGFuZGFsb25lLW1vdmllIGNhc2UgZ2V0cyByZWxhYmVsZWQuXG4gICAgICAgICAgICBjb25zdCBpc1N0YW5kYWxvbmVNb3ZpZSA9IHByb2dyYW1EYXRhU3RvcmUudHlwZSA9PT0gSXRlbVR5cGUuTW92aWVcbiAgICAgICAgICAgIGNvbnN0IGlzU291cmNlZEZyb21Db2xsZWN0aW9uID0gcHJvZ3JhbURhdGFTdG9yZS50eXBlID09PSBJdGVtVHlwZS5QbGF5bGlzdCB8fCBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPT09IEl0ZW1UeXBlLkJveFNldFxuXG4gICAgICAgICAgICAvLyBMYWJlbCB0aGUgbW92aWUncyBvd24gZ3JvdXAgYXMgdGhlIGNvbGxlY3Rpb24gc2VhcmNoIHVwIGZyb250LCBldmVuIGJlZm9yZSBhbnkgcmVzdWx0cyBhcmUga25vd24uXG4gICAgICAgICAgICBpZiAoaXNTdGFuZGFsb25lTW92aWUgJiYgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLm1hcCgoZywgaSkgPT4gaSA9PT0gMCA/IHsgLi4uZywgZ3JvdXBOYW1lOiBTRUFSQ0hfQ09MTEVDVElPTlNfR1JPVVBfTkFNRSB9IDogZylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT25seSBzZWFyY2ggb25jZSBwZXIgZnJlc2ggZ3JvdXAtZmV0Y2ggKG5vdCBvbiBldmVyeSBwb3B1cCByZW9wZW4gd2hpbGUgY2FjaGVkIGdyb3VwcyBhbHJlYWR5IGluY2x1ZGUgdGhlIHNlYXJjaCByZXN1bHRzKS5cbiAgICAgICAgICAgIC8vIGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyBpdHNlbGYgaXMgbWVtb2l6ZWQgcGVyIGl0ZW0gZm9yIHRoZSB3aG9sZSBwYWdlIHNlc3Npb24sIHNvIGV2ZW4gdGhpcyBjYW4ndCByZS10cmlnZ2VyIHRoZVxuICAgICAgICAgICAgLy8gZXhwZW5zaXZlIGJhY2tlbmQgc2NhbiBtb3JlIHRoYW4gb25jZSBwZXIgaXRlbSwgbm8gbWF0dGVyIGhvdyBvZnRlbiB0aGUgcG9wdXAgaXMgcmVvcGVuZWQgd2hpbGUgaXQncyBwZW5kaW5nLlxuICAgICAgICAgICAgY29uc3QgaXNTZWFyY2hpbmdDb2xsZWN0aW9ucyA9IChpc1N0YW5kYWxvbmVNb3ZpZSB8fCBpc1NvdXJjZWRGcm9tQ29sbGVjdGlvbikgJiYgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnMgJiYgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICBsZXQgY29sbGVjdGlvbnNTZWFyY2hEb25lID0gIWlzU2VhcmNoaW5nQ29sbGVjdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zU2VhcmNoOiBQcm9taXNlPHZvaWQ+ID0gaXNTZWFyY2hpbmdDb2xsZWN0aW9uc1xuICAgICAgICAgICAgICAgID8gZ2V0Q29udGFpbmluZ0NvbGxlY3Rpb25zKGl0ZW1JZCkudGhlbihjb2xsZWN0aW9uR3JvdXBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2xsZWN0aW9uR3JvdXBzLmxlbmd0aCB8fCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgIT09IGl0ZW1JZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGZHcm91cCA9IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzWzBdXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4Y2x1ZGUgdGhlIGNvbGxlY3Rpb24vcGxheWxpc3QgdGhpcyBpdGVtIHdhcyBhbHJlYWR5IHBsYXllZCBmcm9tIC0gaXQncyBhbHJlYWR5IHRoZSBhY3RpdmUvZGVmYXVsdCBncm91cC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R3JvdXBzID0gY29sbGVjdGlvbkdyb3Vwcy5maWx0ZXIoZyA9PiBnLmdyb3VwSWQgIT09IHNlbGZHcm91cC5ncm91cElkKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld0dyb3Vwcy5sZW5ndGgpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IFtzZWxmR3JvdXAsIC4uLm5ld0dyb3Vwc10ubWFwKChnLCBpKSA9PiAoeyAuLi5nLCBpbmRleE51bWJlcjogaSB9KSlcbiAgICAgICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHsgY29sbGVjdGlvbnNTZWFyY2hEb25lID0gdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKClcblxuICAgICAgICAgICAgY29uc3QgY2FuU3dpdGNoR3JvdXBzID0gKCk6IGJvb2xlYW4gPT4gcHJvZ3JhbURhdGFTdG9yZS50eXBlICE9PSBJdGVtVHlwZS5Nb3ZpZSB8fCBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9uc1xuXG4gICAgICAgICAgICBjb25zdCBwb3B1cFRpdGxlOiBQb3B1cFRpdGxlVGVtcGxhdGUgPSBuZXcgUG9wdXBUaXRsZVRlbXBsYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cEZvY3VzQ29udGFpbmVyJyksIC0xLCBwcm9ncmFtRGF0YVN0b3JlKVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5yZW5kZXIoYXN5bmMgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgaWYgKCFjYW5Td2l0Y2hHcm91cHMoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUdyb3VwRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5ncm91cHMsIGNvbnRlbnREaXYsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXAuaW5kZXhOdW1iZXIsIHBvcHVwVGl0bGUsIGxvYWRHcm91cEl0ZW1zKVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwVmlld1Rva2VuID0gcHJvZ3JhbURhdGFTdG9yZS5jdXJyZW50Vmlld1Rva2VuXG5cbiAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbnNTZWFyY2hEb25lKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgncHJldmlld1Njcm9sbFNwaW5uZXInKVxuICAgICAgICAgICAgICAgIHNwaW5uZXIuaW5uZXJIVE1MID0gc3Bpbm5lckh0bWwoKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoc3Bpbm5lcilcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoc3Bpbm5lcilcblxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbGxlY3Rpb25zU2VhcmNoXG4gICAgICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYSBncm91cCB3YXMgc2VsZWN0ZWQsIG9yIHRoZSBwb3B1cCBjbG9zZWQpIHdoaWxlIHRoaXMgd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcoZ3JvdXBWaWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUdyb3VwRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5ncm91cHMsIGNvbnRlbnREaXYsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXAuaW5kZXhOdW1iZXIsIHBvcHVwVGl0bGUsIGxvYWRHcm91cEl0ZW1zKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0U3dpdGNoYWJsZShjYW5Td2l0Y2hHcm91cHMoKSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShjYW5Td2l0Y2hHcm91cHMoKSlcblxuICAgICAgICAgICAgYXdhaXQgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUxhenlJdGVtTGlzdChjb250ZW50RGl2LCAoc3RhcnRJbmRleCkgPT4gbG9hZEdyb3VwSXRlbXMoYWN0aXZlR3JvdXBJZCwgc3RhcnRJbmRleCksIHZpZXdUb2tlbiwgaW5pdGlhbFBhZ2UsIGluaXRpYWxXaW5kb3dTdGFydEluZGV4KVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRUZXh0KHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXA/Lmdyb3VwTmFtZSA/PyAnJylcbiAgICAgICAgICAgIGlmIChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKSBwb3B1cFRpdGxlLnNldFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKVxuICAgICAgICAgICAgaWYgKHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCAmJiBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwPy5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5lbnN1cmVHcm91cFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKVxuICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHBvcHVwVGl0bGUuc2V0V2F0Y2hlZENvdW50KHVwZGF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgd2F0Y2hlZCBjb3VudCBmb3IgZ3JvdXAgJHtwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwPy5ncm91cElkfWAsIGV4KSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRoZSBpdGVtIHRoYXQgaXMgY3VycmVudGx5IHBsYXlpbmdcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSBjb250ZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZExpc3RJdGVtJykgXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBmaW5kIGFjdGl2ZSBtZWRpYSBzb3VyY2UgZWxlbWVudCBpbiBwcmV2aWV3IGxpc3QuIFRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlblwiLCBwcm9ncmFtRGF0YVN0b3JlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aXZlSXRlbT8ucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdW5sb2FkVmlkZW9WaWV3KCk6IHZvaWQge1xuICAgICAgICBsb2dnZXIuZGVidWcoXCJVbmxvYWRpbmcgdmlkZW8gdmlld1wiKVxuXG4gICAgICAgIC8vIENsZWFyIG9sZCBkYXRhIGFuZCByZXNldCBwcmV2aWV3Q29udGFpbmVyTG9hZGVkIGZsYWdcbiAgICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJylcbiAgICAgICAgdmlkZW9FbGVtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgb25WaWRlb1RpbWVVcGRhdGUpXG4gICAgICAgIHZpZGVvRWxlbWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmF0ZWNoYW5nZScsIG9uVmlkZW9SYXRlQ2hhbmdlKVxuICAgICAgICBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kID0gLTFcblxuICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBudWxsXG4gICAgICAgIHBlbmRpbmdQcmVsb2FkSXRlbUlkID0gbnVsbFxuICAgICAgICBwZW5kaW5nUHJlbG9hZCA9IG51bGxcblxuICAgICAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXIgPSBudWxsXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9wdXBQcmV2aWV3QnV0dG9uJykuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQucmVtb3ZlKCkpXG5cbiAgICAgICAgcHJldmlld0NvbnRhaW5lckxvYWRlZCA9IGZhbHNlIC8vIFJlc2V0IGZsYWcgd2hlbiB1bmxvYWRpbmdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1ByZXZpZXdCdXR0b25DcmVhdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZ2V0QWN0aXZlQnV0dG9uc0JhcigpPy5xdWVyeVNlbGVjdG9yKCcjcG9wdXBQcmV2aWV3QnV0dG9uJykgIT0gbnVsbFxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=