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
`, "",{"version":3,"sources":["webpack://./Web/Styles/Styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,0DAA0D;IAC1D,eAAe;IACf,WAAW;IACX,aAAa;IACb,UAAU;IACV,WAAW;AACf;AACA;IACI,eAAe;AACnB;AACA;IACI,yBAAyB;IACzB,OAAO;IACP,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;IACpB,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,iDAAiD;AACrD;AACA;IACI,UAAU;IACV,2CAA2C;AAC/C;AACA,uEAAuE;AACvE;IACI,2BAA2B;IAC3B,2BAA2B;AAC/B;AACA;IACI,gBAAgB;IAChB,gCAAgC;IAChC,gEAAgE;AACpE;AACA;IACI,UAAU;AACd;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,0CAA0C;IAC1C,kBAAkB;AACtB;AACA;IACI,0CAA0C;AAC9C;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,eAAe;AACnB;AACA;IACI,WAAW;AACf;AACA;IACI,oBAAoB;AACxB;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,cAAc;AAClB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,0BAA0B;IAC1B,eAAe;IACf,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA,sEAAsE;AACtE;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,2BAA2B;IAC3B,wBAAwB;AAC5B;AACA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,qBAAqB;AACzB;AACA;IACI,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,qBAAqB;IACrB,oBAAoB;IACpB,wBAAwB;IACxB,yBAAyB;IACzB,wBAAwB;AAC5B","sourcesContent":[".selectedListItem {\n    height: auto;\n}\n.previewListItem {\n    flex-direction: column;\n    align-items: flex-start;\n}\n.previewListItemContent {\n    width: 100%;\n    min-height: 15.5vh;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n}\n.previewListItem-sideBySide {\n    margin-bottom: 1em;\n}\n.previewListItem-sideBySide .previewItemTitle .actionSheetItemText {\n    font-size: 1.3em;\n}\n.previewListItem-sideBySide .previewItemDescription {\n    margin-top: 1em;\n}\n.previewListItem-sideBySide .previewListItemContent .itemMiscInfo.previewItemDetails {\n    margin-left: 0.5em !important;\n}\n.previewPopup {\n    animation: 140ms ease-out 0s 1 normal both running scaleup;\n    position: fixed;\n    margin: 0px;\n    bottom: 1.5vh;\n    left: 50vw;\n    width: 48vw;\n}\n.previewPopupTitle {\n    max-height: 4vh;\n}\n.previewPopupTitle h1.actionSheetTitle {\n    margin-left: 0 !important;\n    flex: 1;\n    min-width: 0;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.previewGroupWatchedCount {\n    cursor: pointer;\n    pointer-events: auto;\n    margin-left: auto;\n    margin-right: 0.4em;\n    padding: 0.2em 0.6em;\n    border-radius: 0.3em;\n    white-space: nowrap;\n    opacity: 0.7;\n    display: flex;\n    align-items: center;\n    transition: opacity 0.15s, background-color 0.15s;\n}\n.previewGroupWatchedCount:hover {\n    opacity: 1;\n    background-color: rgba(255, 255, 255, 0.12);\n}\n/* Remove button highlighting when hovering over the group statistics */\n.previewGroupListItemTitle:has(.previewGroupWatchedCount:hover) {\n    background: none !important;\n    box-shadow: none !important;\n}\n.previewPopupScroller {\n    max-height: 60vh;\n    scrollbar-width: thin !important;\n    scrollbar-color: rgba(255, 255, 255, 0.4) transparent !important;\n}\n.previewPopupScroller::-webkit-scrollbar {\n    width: 8px;\n}\n.previewPopupScroller::-webkit-scrollbar-track {\n    background: transparent;\n}\n.previewPopupScroller::-webkit-scrollbar-thumb {\n    background-color: rgba(255, 255, 255, 0.4);\n    border-radius: 4px;\n}\n.previewPopupScroller::-webkit-scrollbar-thumb:hover {\n    background-color: rgba(255, 255, 255, 0.6);\n}\n.previewQuickActionContainer {\n    margin-left: auto;\n}\n.previewQuickActionContainer button:disabled {\n    opacity: 0.3;\n    cursor: default;\n}\n.previewItemContainer {\n    width: 100%;\n}\n.previewItemTitle {\n    pointer-events: none;\n}\n.previewGroupListItemTitle {\n    width: 100%;\n}\n.previewGroupListItemTitle .listItemBody {\n    min-width: 0;\n}\n.previewGroupListItemTitle .actionSheetItemText {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.previewItemImageCard {\n    max-width: 30%;\n}\n.previewItemContentRow {\n    align-items: flex-start;\n}\n.previewItemDescriptionColumn {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    min-width: 0;\n}\n.previewItemDescription {\n    margin-left: 0.5em;\n    margin-top: 0.5em;\n    margin-right: 1.5em;\n    display: block;\n    overflow: hidden;\n    max-height: 150px;\n}\n.previewItemDescription.expanded {\n    max-height: none;\n}\n.previewItemReadMoreButton {\n    align-self: flex-start;\n    margin-left: 0.5em;\n    margin-top: 0.25em;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n    font-size: 0.9em;\n    opacity: 0.75;\n}\n.previewItemReadMoreButton:hover {\n    opacity: 1;\n}\n.previewItemDetails {\n    margin-left: 1em;\n    justify-content: start !important;\n}\n\n/* Lock the position of this details, so that no theme can change it */\n.previewListItemContent .itemMiscInfo.previewItemDetails {\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    right: auto !important;\n    bottom: auto !important;\n    transform: none !important;\n    margin-left: 1em !important;\n    margin-top: 0 !important;\n}\n.blur {\n    filter: blur(6px);\n    transition: filter 0.3s ease;\n    display: inline-block;\n}\n.blur:hover {\n    filter: blur(0);\n}\n.previewItemImageCard .blur {\n    filter: blur(32px);\n}\n.previewItemImageCard:hover .blur {\n    filter: blur(0);\n}\n.previewScrollSpinner {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1em 0;\n}\n.previewScrollSpinner .docspinner {\n    position: relative !important;\n    top: auto !important;\n    left: auto !important;\n    margin: 0 !important;\n    width: 1.95em !important;\n    height: 1.95em !important;\n    z-index: auto !important;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5QbGF5ZXJQcmV2aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZ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Qy9ELENBQUM7SUFFRCxTQUFTLHNCQUFzQjs7UUFDM0IsT0FBTywwQkFBbUIsRUFBRSwwQ0FBRSxhQUFhLENBQUMscUJBQXFCLENBQUMsS0FBSSxJQUFJO0lBQzlFLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vV2ViL1N0eWxlcy9TdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1N0eWxlcy9TdHlsZXMuY3NzPzg0MGUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9CYXNlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvRGlhbG9nQ29udGFpbmVyVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0l0ZW1EZXRhaWxzLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1ByZXZpZXdCdXR0b25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvRmF2b3JpdGVJY29uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUXVpY2tBY3Rpb25zL1BsYXlJY29uVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUXVpY2tBY3Rpb25zL1BsYXlTdGF0ZUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9TcGlubmVyLnRzIiwid2VicGFjazovLy8uL1dlYi9FbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0xpc3RFbGVtZW50RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL0V4cGFuZGVkSXRlbUxheW91dC50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL0l0ZW1UeXBlLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvTG9nTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9QbHVnaW5TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvUHJldmlld0RhdGEvV2F0Y2hQcm9ncmVzcy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1NlcnZlclNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvV2F0Y2hDb3VudERpc3BsYXlNb2RlLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9EYXRhRmV0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vV2ViL0luUGxheWVyUHJldmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlbGVjdGVkTGlzdEl0ZW0ge1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5wcmV2aWV3TGlzdEl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucHJldmlld0xpc3RJdGVtQ29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTUuNXZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0l0ZW1UaXRsZSAuYWN0aW9uU2hlZXRJdGVtVGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbn1cbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuLnByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlIC5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IC5pdGVtTWlzY0luZm8ucHJldmlld0l0ZW1EZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW0gIWltcG9ydGFudDtcbn1cbi5wcmV2aWV3UG9wdXAge1xuICAgIGFuaW1hdGlvbjogMTQwbXMgZWFzZS1vdXQgMHMgMSBub3JtYWwgYm90aCBydW5uaW5nIHNjYWxldXA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvdHRvbTogMS41dmg7XG4gICAgbGVmdDogNTB2dztcbiAgICB3aWR0aDogNDh2dztcbn1cbi5wcmV2aWV3UG9wdXBUaXRsZSB7XG4gICAgbWF4LWhlaWdodDogNHZoO1xufVxuLnByZXZpZXdQb3B1cFRpdGxlIGgxLmFjdGlvblNoZWV0VGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMC40ZW07XG4gICAgcGFkZGluZzogMC4yZW0gMC42ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMsIGJhY2tncm91bmQtY29sb3IgMC4xNXM7XG59XG4ucHJldmlld0dyb3VwV2F0Y2hlZENvdW50OmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4vKiBSZW1vdmUgYnV0dG9uIGhpZ2hsaWdodGluZyB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIGdyb3VwIHN0YXRpc3RpY3MgKi9cbi5wcmV2aWV3R3JvdXBMaXN0SXRlbVRpdGxlOmhhcygucHJldmlld0dyb3VwV2F0Y2hlZENvdW50OmhvdmVyKSB7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlciB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcbiAgICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi5wcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciBidXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ucHJldmlld0l0ZW1Db250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnByZXZpZXdJdGVtVGl0bGUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGUgLmxpc3RJdGVtQm9keSB7XG4gICAgbWluLXdpZHRoOiAwO1xufVxuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGUgLmFjdGlvblNoZWV0SXRlbVRleHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5wcmV2aWV3SXRlbUltYWdlQ2FyZCB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG59XG4ucHJldmlld0l0ZW1Db250ZW50Um93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uLmV4cGFuZGVkIHtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xufVxuLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b24ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5wcmV2aWV3SXRlbURldGFpbHMge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydCAhaW1wb3J0YW50O1xufVxuXG4vKiBMb2NrIHRoZSBwb3NpdGlvbiBvZiB0aGlzIGRldGFpbHMsIHNvIHRoYXQgbm8gdGhlbWUgY2FuIGNoYW5nZSBpdCAqL1xuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQgLml0ZW1NaXNjSW5mby5wcmV2aWV3SXRlbURldGFpbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4uYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDZweCk7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYmx1cjpob3ZlciB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xufVxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkIC5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoMzJweCk7XG59XG4ucHJldmlld0l0ZW1JbWFnZUNhcmQ6aG92ZXIgLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbn1cbi5wcmV2aWV3U2Nyb2xsU3Bpbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFlbSAwO1xufVxuLnByZXZpZXdTY3JvbGxTcGlubmVyIC5kb2NzcGlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEuOTVlbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMS45NWVtICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogYXV0byAhaW1wb3J0YW50O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9XZWIvU3R5bGVzL1N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwwREFBMEQ7SUFDMUQsZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLE9BQU87SUFDUCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpREFBaUQ7QUFDckQ7QUFDQTtJQUNJLFVBQVU7SUFDViwyQ0FBMkM7QUFDL0M7QUFDQSx1RUFBdUU7QUFDdkU7SUFDSSwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGdFQUFnRTtBQUNwRTtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsT0FBTztJQUNQLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUEsc0VBQXNFO0FBQ3RFO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWxlY3RlZExpc3RJdGVtIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ucHJldmlld0xpc3RJdGVtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDE1LjV2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0l0ZW1UaXRsZSAuYWN0aW9uU2hlZXRJdGVtVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLnByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlIC5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IC5pdGVtTWlzY0luZm8ucHJldmlld0l0ZW1EZXRhaWxzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV2aWV3UG9wdXAge1xcbiAgICBhbmltYXRpb246IDE0MG1zIGVhc2Utb3V0IDBzIDEgbm9ybWFsIGJvdGggcnVubmluZyBzY2FsZXVwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3R0b206IDEuNXZoO1xcbiAgICBsZWZ0OiA1MHZ3O1xcbiAgICB3aWR0aDogNDh2dztcXG59XFxuLnByZXZpZXdQb3B1cFRpdGxlIHtcXG4gICAgbWF4LWhlaWdodDogNHZoO1xcbn1cXG4ucHJldmlld1BvcHVwVGl0bGUgaDEuYWN0aW9uU2hlZXRUaXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRlbTtcXG4gICAgcGFkZGluZzogMC4yZW0gMC42ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMsIGJhY2tncm91bmQtY29sb3IgMC4xNXM7XFxufVxcbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQ6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xcbn1cXG4vKiBSZW1vdmUgYnV0dG9uIGhpZ2hsaWdodGluZyB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIGdyb3VwIHN0YXRpc3RpY3MgKi9cXG4ucHJldmlld0dyb3VwTGlzdEl0ZW1UaXRsZTpoYXMoLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudDpob3Zlcikge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLnByZXZpZXdQb3B1cFNjcm9sbGVyIHtcXG4gICAgbWF4LWhlaWdodDogNjB2aDtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbGJhci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogOHB4O1xcbn1cXG4ucHJldmlld1BvcHVwU2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuLnByZXZpZXdRdWlja0FjdGlvbkNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ucHJldmlld1F1aWNrQWN0aW9uQ29udGFpbmVyIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4ucHJldmlld0l0ZW1Db250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnByZXZpZXdJdGVtVGl0bGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGUgLmxpc3RJdGVtQm9keSB7XFxuICAgIG1pbi13aWR0aDogMDtcXG59XFxuLnByZXZpZXdHcm91cExpc3RJdGVtVGl0bGUgLmFjdGlvblNoZWV0SXRlbVRleHQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5wcmV2aWV3SXRlbUltYWdlQ2FyZCB7XFxuICAgIG1heC13aWR0aDogMzAlO1xcbn1cXG4ucHJldmlld0l0ZW1Db250ZW50Um93IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAwO1xcbn1cXG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG59XFxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb24uZXhwYW5kZWQge1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbn1cXG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMC4yNWVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cXG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5wcmV2aWV3SXRlbURldGFpbHMge1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIExvY2sgdGhlIHBvc2l0aW9uIG9mIHRoaXMgZGV0YWlscywgc28gdGhhdCBubyB0aGVtZSBjYW4gY2hhbmdlIGl0ICovXFxuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQgLml0ZW1NaXNjSW5mby5wcmV2aWV3SXRlbURldGFpbHMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcXG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMWVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG59XFxuLmJsdXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYmx1cjpob3ZlciB7XFxuICAgIGZpbHRlcjogYmx1cigwKTtcXG59XFxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkIC5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDMycHgpO1xcbn1cXG4ucHJldmlld0l0ZW1JbWFnZUNhcmQ6aG92ZXIgLmJsdXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XFxufVxcbi5wcmV2aWV3U2Nyb2xsU3Bpbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG59XFxuLnByZXZpZXdTY3JvbGxTcGlubmVyIC5kb2NzcGlubmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XFxuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMS45NWVtICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMS45NWVtICFpbXBvcnRhbnQ7XFxuICAgIHotaW5kZXg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVGVtcGxhdGUge1xuICAgIC8qXG4gICAgICogdGhlIEhUTUwgYmFzZWQgSUQgb2YgdGhlIG5ldyBnZW5lcmF0ZWQgRWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZWxlbWVudElkOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50LCBwcml2YXRlIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7IH1cblxuICAgIHB1YmxpYyBnZXRDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkFmdGVySW5kZXg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEVsZW1lbnRJZChlbGVtZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRJZDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmdldEVsZW1lbnRJZCgpfWApO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBzdHJpbmc7XG5cbiAgICBhYnN0cmFjdCByZW5kZXIoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IHZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgYWRkRWxlbWVudFRvQ29udGFpbmVyKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIC8vIEFkZCBFbGVtZW50IGFzIHRoZSBmaXJzdCBjaGlsZCBpZiBwb3NpdGlvbiBpcyBuZWdhdGl2ZVxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSA8IDAgJiYgdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZmlyc3RFbGVtZW50Q2hpbGQuYmVmb3JlKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgaWYgY29udGFpbmVyIGlzIGVtcHR5XG4gICAgICAgIGlmICghdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuaW5uZXJIVE1MID0gdGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGlsZEJlZm9yZSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkubGFzdEVsZW1lbnRDaGlsZFxuICAgICAgICBpZiAodGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpICYmIHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgPj0gMClcbiAgICAgICAgICAgIGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlblt0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpXTtcbiAgICAgICAgXG4gICAgICAgIGNoaWxkQmVmb3JlLmFmdGVyKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgc3RyaW5nVG9Ob2RlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcpOiBOb2RlIHtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHRlbXBsYXRlU3RyaW5nO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBkaWFsb2dCYWNrZHJvcElkID0gJ2RpYWxvZ0JhY2tkcm9wJ1xuICAgIGRpYWxvZ0NvbnRhaW5lcklkID0gJ2RpYWxvZ0NvbnRhaW5lcidcbiAgICBwb3B1cENvbnRlbnRDb250YWluZXJJZCA9ICdwb3B1cENvbnRlbnRDb250YWluZXInXG4gICAgcG9wdXBGb2N1c0NvbnRhaW5lcklkID0gJ3BvcHVwRm9jdXNDb250YWluZXInXG4gICAgXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncHJldmlld1BvcHVwJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5kaWFsb2dCYWNrZHJvcElkfVwiIGNsYXNzPVwiZGlhbG9nQmFja2Ryb3AgZGlhbG9nQmFja2Ryb3BPcGVuZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmRpYWxvZ0NvbnRhaW5lcklkfVwiIGNsYXNzPVwiZGlhbG9nQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBGb2N1c0NvbnRhaW5lcklkfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb2N1c2NvbnRhaW5lciBkaWFsb2cgYWN0aW9uc2hlZXQtbm90LWZ1bGxzY3JlZW4gYWN0aW9uU2hlZXQgY2VudGVyZWREaWFsb2cgb3BlbmVkIHByZXZpZXdQb3B1cCBhY3Rpb25TaGVldENvbnRlbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlzdG9yeT1cInRydWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmVtb3Zlb25jbG9zZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBDb250ZW50Q29udGFpbmVySWR9XCIgY2xhc3M9XCJhY3Rpb25TaGVldFNjcm9sbGVyIHNjcm9sbFkgcHJldmlld1BvcHVwU2Nyb2xsZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRFbGVtZW50SWQoKSkpXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge3JlbmRlcldhdGNoZWRDb3VudElubmVySHRtbH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4uL01vZGVscy9XYXRjaENvdW50RGlzcGxheU1vZGVcIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZ3JvdXA6IEdyb3VwLCBwcml2YXRlIGlzQ3VycmVudEdyb3VwOiBib29sZWFuLCBwcml2YXRlIHNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4sIHByaXZhdGUgd2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgZ3JvdXAtJHtncm91cC5ncm91cElkfWApO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5ncm91cC5ncm91cElkfVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlIHByZXZpZXdHcm91cExpc3RJdGVtVGl0bGVcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiJHt0aGlzLmlzQ3VycmVudEdyb3VwID8gXCJtYXRlcmlhbC1pY29ucyBjaGVja1wiIDogXCJcIn1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uU2hlZXRJdGVtVGV4dFwiPiR7dGhpcy5ncm91cC5ncm91cE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnNob3dXYXRjaGVkQ291bnQgPyBgPGRpdiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFwiPiR7cmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sKHRoaXMuZ3JvdXAsIHRoaXMud2F0Y2hDb3VudERpc3BsYXlNb2RlKX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmFjdGlvblNoZWV0SXRlbVRleHQnKS50aXRsZSA9IHRoaXMuZ3JvdXAuZ3JvdXBOYW1lO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4gY2xpY2tIYW5kbGVyKGUpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5YmFja1JhdGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJyk/LnBsYXliYWNrUmF0ZSB8fCAxO1xufVxuXG5mdW5jdGlvbiB6ZXJvUGFkKG51bTogbnVtYmVyLCBwbGFjZXM6IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgIHJldHVybiBTdHJpbmcobnVtKS5wYWRTdGFydChwbGFjZXMsICcwJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFbmRUaW1lKHJ1bnRpbWVUaWNrczogbnVtYmVyLCBwbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gY29udmVydCBmcm9tIHRpY2tzICgxMDBucyB1bml0cykgdG8gbWlsbGlzZWNvbmRzXG4gICAgcnVudGltZVRpY2tzIC89IDEwMDAwO1xuICAgIHBsYXliYWNrUG9zaXRpb25UaWNrcyAvPSAxMDAwMDtcblxuICAgIGNvbnN0IHJlbWFpbmluZ01zOiBudW1iZXIgPSAocnVudGltZVRpY2tzIC0gcGxheWJhY2tQb3NpdGlvblRpY2tzKSAvIGdldEN1cnJlbnRQbGF5YmFja1JhdGUoKTtcblxuICAgIGxldCB0aWNrczogbnVtYmVyID0gRGF0ZS5ub3coKSArIHJlbWFpbmluZ01zO1xuICAgIHRpY2tzIC09IChuZXcgRGF0ZSgpKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAgKiAxMDAwOyAvLyBhZGp1c3QgZm9yIHRpbWV6b25lXG5cbiAgICBsZXQgaG91cnM6IHN0cmluZyA9IHplcm9QYWQoTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCkpO1xuICAgIGxldCBtaW51dGVzOiBzdHJpbmcgPSB6ZXJvUGFkKE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDYwKSAlIDYwKSk7XG5cbiAgICByZXR1cm4gYEVuZHMgYXQgJHtob3Vyc306JHttaW51dGVzfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbmRUaW1lRGlzcGxheShpdGVtOiBQcmV2aWV3SXRlbSk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZW5kc0F0W2RhdGEtaXRlbS1pZD1cIiR7aXRlbS5JZH1cIl1gKVxuICAgIGlmICghZWxlbWVudCB8fCAhaXRlbS5SdW5UaW1lVGlja3MpIHJldHVyblxuXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGZvcm1hdEVuZFRpbWUoaXRlbS5SdW5UaW1lVGlja3MsIGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKVxufVxuXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbHNUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgaXRlbS0ke2l0ZW0uSWR9YCk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX0tZGV0YWlsc1wiIGNsYXNzPVwiaXRlbU1pc2NJbmZvIGl0ZW1NaXNjSW5mby1wcmltYXJ5IHByZXZpZXdJdGVtRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLlByZW1pZXJlRGF0ZSA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAkeyhuZXcgRGF0ZSh0aGlzLml0ZW0uUHJlbWllcmVEYXRlKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuZ2V0TG9jYWxlKCkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPiR7dGhpcy5mb3JtYXRSdW5UaW1lKHRoaXMuaXRlbS5SdW5UaW1lVGlja3MpfTwvZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNvbW11bml0eVJhdGluZyA/IGA8ZGl2IGNsYXNzPVwic3RhclJhdGluZ0NvbnRhaW5lciBtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgc3Rhckljb24gc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ29tbXVuaXR5UmF0aW5nLnRvRml4ZWQoMSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZyA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbSBtZWRpYUluZm9Dcml0aWNSYXRpbmcgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nID49IDYwID8gJ21lZGlhSW5mb0NyaXRpY1JhdGluZ0ZyZXNoJyA6ICdtZWRpYUluZm9Dcml0aWNSYXRpbmdSb3R0ZW4nfVwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmd9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmRzQXQgbWVkaWFJbmZvSXRlbVwiIGRhdGEtaXRlbS1pZD1cIiR7dGhpcy5pdGVtLklkfVwiPiR7Zm9ybWF0RW5kVGltZSh0aGlzLml0ZW0uUnVuVGltZVRpY2tzLCB0aGlzLml0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMb2NhbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5sYW5ndWFnZXNcbiAgICAgICAgICAgID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXSAvLyBAdHMtaWdub3JlIGZvciB1c2VyTGFuZ3VhZ2UgKHRoaXMgYWRkcyBzdXBwb3J0IGZvciBJRSkgVE9ETzogTW92ZSB0byBpbnRlcmZhY2VcbiAgICAgICAgICAgIDogKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvcm1hdFJ1blRpbWUodGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIGZvcm1hdCB0aGUgdGlja3MgdG8gYSBzdHJpbmcgd2l0aCBtaW51dGVzIGFuZCBob3Vyc1xuICAgICAgICB0aWNrcyAvPSAxMDAwMDsgLy8gY29udmVydCBmcm9tIG1pY3Jvc2Vjb25kcyB0byBtaWxsaXNlY29uZHNcbiAgICAgICAgbGV0IGhvdXJzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyAzNjAwKSAlIDI0KTtcbiAgICAgICAgbGV0IG1pbnV0ZXM6IG51bWJlciA9IE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDYwKSAlIDYwKTtcbiAgICAgICAgbGV0IGhvdXJzU3RyaW5nOiBzdHJpbmcgPSBob3VycyA+IDAgPyBgJHtob3Vyc31oIGAgOiAnJztcbiAgICAgICAgcmV0dXJuIGAke2hvdXJzU3RyaW5nfSR7bWludXRlc31tYDtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7RmF2b3JpdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZVwiXG5pbXBvcnQge1BsYXlTdGF0ZUljb25UZW1wbGF0ZX0gZnJvbSBcIi4vUXVpY2tBY3Rpb25zL1BsYXlTdGF0ZUljb25UZW1wbGF0ZVwiXG5pbXBvcnQge1BsYXlJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9QbGF5SWNvblRlbXBsYXRlXCJcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi4vU2VydmljZXMvUGxheWJhY2tIYW5kbGVyXCJcbmltcG9ydCB7SXRlbURldGFpbHNUZW1wbGF0ZX0gZnJvbSBcIi4vSXRlbURldGFpbHNcIlxuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIlxuaW1wb3J0IHt0b2dnbGVQbGF5ZWRTdGF0ZUxvY2FsbHl9IGZyb20gXCIuLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiXG5pbXBvcnQge0V4cGFuZGVkSXRlbUxheW91dH0gZnJvbSBcIi4uL01vZGVscy9FeHBhbmRlZEl0ZW1MYXlvdXRcIlxuXG4vLyBTaG93cy9oaWRlcyB0aGUgXCJzdGFydCBwbGF5YmFja1wiIG92ZXJsYXkgZm9yIGEgcmVuZGVyZWQgbGlzdCBpdGVtXG5leHBvcnQgY29uc3Qgc2V0SXRlbU92ZXJsYXlBY3RpdmUgPSAoaXRlbUlkOiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhcmRPdmVybGF5LSR7aXRlbUlkfWApPy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgaXNBY3RpdmUpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXlCdXR0b24tJHtpdGVtSWR9YCk/LnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCBpc0FjdGl2ZSlcbn1cblxuLy8gVXBkYXRlcyBvciBjcmVhdGVzIHRoZSBwcm9ncmVzcyBiYXIgb2YgYSByZW5kZXJlZCBsaXN0IGl0ZW1cbmV4cG9ydCBjb25zdCB1cGRhdGVJdGVtUHJvZ3Jlc3NEb20gPSAoaXRlbUlkOiBzdHJpbmcsIHBlcmNlbnRhZ2U6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGZvcmVncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS0ke2l0ZW1JZH1gKT8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5pdGVtUHJvZ3Jlc3NCYXJGb3JlZ3JvdW5kJylcbiAgICBpZiAoZm9yZWdyb3VuZCkge1xuICAgICAgICBmb3JlZ3JvdW5kLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudGFnZX0lYFxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzY2FsYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmV2aWV3SXRlbUltYWdlQ2FyZC0ke2l0ZW1JZH1gKT8ucGFyZW50RWxlbWVudFxuICAgIGlmICghc2NhbGFibGUgfHwgIXBlcmNlbnRhZ2UpIHJldHVyblxuICAgIHNjYWxhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNjYXJkT3ZlcmxheS0nICsgaXRlbUlkKT8uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiaW5uZXJDYXJkRm9vdGVyIGZ1bGxJbm5lckNhcmRGb290ZXIgaW5uZXJDYXJkRm9vdGVyQ2xlYXIgaXRlbVByb2dyZXNzQmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByb2dyZXNzQmFyRm9yZWdyb3VuZFwiIHN0eWxlPVwid2lkdGg6JHtwZXJjZW50YWdlfSU7XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PmApXG59XG5cbi8vIEluZGV4IG51bWJlciBzcGFuIGZvciB0aGUgdGl0bGUgcm93LCBlLmcuIFwiPHNwYW4+MTwvc3Bhbj5cIiBvciBcIjxzcGFuPjEtMjwvc3Bhbj5cIiBmb3IgYSBtdWx0aS1lcGlzb2RlIGZpbGUuXG4vLyBFbXB0eSBmb3IgTW92aWVzLCBvciBpdGVtcyB3aXRob3V0IGFuIEluZGV4TnVtYmVyLlxuY29uc3QgaW5kZXhOdW1iZXJIdG1sID0gKGl0ZW06IFByZXZpZXdJdGVtLCBncm91cFR5cGU6IEl0ZW1UeXBlKTogc3RyaW5nID0+IHtcbiAgICBpZiAoIWl0ZW0uSW5kZXhOdW1iZXIgfHwgZ3JvdXBUeXBlID09PSBJdGVtVHlwZS5Nb3ZpZSkgcmV0dXJuICcnXG4gICAgXG4gICAgaWYgKGl0ZW0uSW5kZXhOdW1iZXJFbmQgJiYgaXRlbS5JbmRleE51bWJlckVuZCAhPT0gaXRlbS5JbmRleE51bWJlcikge1xuICAgICAgICByZXR1cm4gYDxzcGFuPiR7aXRlbS5JbmRleE51bWJlcn0tJHtpdGVtLkluZGV4TnVtYmVyRW5kfTwvc3Bhbj5gXG4gICAgfVxuXG4gICAgcmV0dXJuIGA8c3Bhbj4ke2l0ZW0uSW5kZXhOdW1iZXJ9PC9zcGFuPmBcbn1cblxuZXhwb3J0IGNsYXNzIExpc3RFbGVtZW50VGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcXVpY2tBY3Rpb25Db250YWluZXI6IEhUTUxFbGVtZW50XG4gICAgcHJpdmF0ZSBwbGF5U3RhdGVJY29uOiBQbGF5U3RhdGVJY29uVGVtcGxhdGVcbiAgICBwcml2YXRlIGZhdm9yaXRlSWNvbjogRmF2b3JpdGVJY29uVGVtcGxhdGVcbiAgICBwcml2YXRlIHBsYXlJY29uPzogUGxheUljb25UZW1wbGF0ZVxuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0sIHByaXZhdGUgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGl0ZW0tJHtpdGVtLklkfWApXG5cbiAgICAgICAgLy8gY3JlYXRlIHRlbXAgcXVpY2sgYWN0aW9uIGNvbnRhaW5lclxuICAgICAgICB0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICAvLyBjcmVhdGUgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24gPSBuZXcgUGxheVN0YXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIC0xLCB0aGlzLml0ZW0pXG4gICAgICAgIHRoaXMuZmF2b3JpdGVJY29uID0gbmV3IEZhdm9yaXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIDAsIHRoaXMuaXRlbSlcbiAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXhwYW5kQWxsSXRlbXMpXG4gICAgICAgICAgICB0aGlzLnBsYXlJY29uID0gbmV3IFBsYXlJY29uVGVtcGxhdGUodGhpcy5xdWlja0FjdGlvbkNvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSwgdGhpcy5pdGVtLklkID09PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZClcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBhZGQgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24ucmVuZGVyKClcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24ucmVuZGVyKClcbiAgICAgICAgdGhpcy5wbGF5SWNvbj8ucmVuZGVyKClcblxuICAgICAgICAvLyBhZGQgaXRlbSBkZXRhaWxzL2luZm9cbiAgICAgICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBkZXRhaWxzOiBJdGVtRGV0YWlsc1RlbXBsYXRlID0gbmV3IEl0ZW1EZXRhaWxzVGVtcGxhdGUoZGV0YWlsc0NvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSlcbiAgICAgICAgZGV0YWlscy5yZW5kZXIoKVxuXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZVN0eWxlOiBzdHJpbmcgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9JdGVtcy8ke3RoaXMuaXRlbS5JZH0vSW1hZ2VzL1ByaW1hcnk/dGFnPSR7dGhpcy5pdGVtLlByaW1hcnlJbWFnZVRhZ30nKWBcblxuICAgICAgICBjb25zdCBzaG91bGRCbHVyOiBib29sZWFuID0gISh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuT25seUJsdXJVbndhdGNoZWQgJiYgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZClcblxuICAgICAgICAvLyBPbmx5IHRha2VzIGVmZmVjdCB3aGlsZSBldmVyeSBpdGVtIGlzIGZvcmNlLWV4cGFuZGVkXG4gICAgICAgIGNvbnN0IHVzZVNpZGVCeVNpZGVMYXlvdXQ6IGJvb2xlYW4gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXhwYW5kQWxsSXRlbXNcbiAgICAgICAgICAgICYmIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FeHBhbmRlZEl0ZW1MYXlvdXQgPT09IEV4cGFuZGVkSXRlbUxheW91dC5TaWRlQnlTaWRlXG5cbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICBjb25zdCB0aXRsZVJvdzogc3RyaW5nID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdJdGVtQ29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld0l0ZW1UaXRsZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgJHtpbmRleE51bWJlckh0bWwodGhpcy5pdGVtLCB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uU2hlZXRJdGVtVGV4dFwiPiR7dGhpcy5pdGVtLk5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld1F1aWNrQWN0aW9uQ29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICBjb25zdCBpbWFnZUNhcmQ6IHN0cmluZyA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG92ZXJmbG93QmFja2Ryb3BDYXJkIGNhcmQtaG92ZXJhYmxlIGNhcmQtd2l0aHVzZXJkYXRhIHByZXZpZXdJdGVtSW1hZ2VDYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRCb3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRTY2FsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRQYWRkZXIgY2FyZFBhZGRlci1vdmVyZmxvd0JhY2tkcm9wIGxhenktaGlkZGVuLWNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkSW1hZ2VJY29uIG1hdGVyaWFsLWljb25zIHR2XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlld0l0ZW1JbWFnZUNhcmQtJHt0aGlzLml0ZW0uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkSW1hZ2VDb250YWluZXIgY2FyZENvbnRlbnQgaXRlbUFjdGlvbiBsYXp5IGJsdXJoYXNoZWQgbGF6eS1pbWFnZS1mYWRlaW4tZmFzdCAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5CbHVyVGh1bWJuYWlsICYmIHNob3VsZEJsdXIgPyAnYmx1cicgOiAnJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIiR7YmFja2dyb3VuZEltYWdlU3R5bGV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaFByb2dyZXNzICYmIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImlubmVyQ2FyZEZvb3RlciBmdWxsSW5uZXJDYXJkRm9vdGVyIGlubmVyQ2FyZEZvb3RlckNsZWFyIGl0ZW1Qcm9ncmVzc0JhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByb2dyZXNzQmFyRm9yZWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiR7dGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2V9JTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZE92ZXJsYXktJHt0aGlzLml0ZW0uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkT3ZlcmxheUNvbnRhaW5lciBpdGVtQWN0aW9uICR7dGhpcy5pdGVtLklkID09PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCA/ICdoaWRlJyA6ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydC1pdGVtLSR7dGhpcy5pdGVtLklkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcz1cInBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZE92ZXJsYXlCdXR0b24gY2FyZE92ZXJsYXlCdXR0b24taG92ZXIgaXRlbUFjdGlvbiBwYXBlci1pY29uLWJ1dHRvbi1saWdodCBjYXJkT3ZlcmxheUZhYi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwicmVzdW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2FyZE92ZXJsYXlCdXR0b25JY29uIGNhcmRPdmVybGF5QnV0dG9uSWNvbi1ob3ZlciBwbGF5X2Fycm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkJsb2NrOiBzdHJpbmcgPSBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZXZpZXdJdGVtRGVzY3JpcHRpb24gJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuQmx1ckRlc2NyaXB0aW9uICYmIHNob3VsZEJsdXIgPyAnYmx1cicgOiAnJ31cIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5EZXNjcmlwdGlvbiA/PyAnJ31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbiBoaWRlXCI+U2hvdyBtb3JlPC9idXR0b24+XG4gICAgICAgIGBcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIGNvbnN0IGNvbnRlbnRSb3c6IHN0cmluZyA9IHVzZVNpZGVCeVNpZGVMYXlvdXQgPyBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBwcmV2aWV3SXRlbUNvbnRlbnRSb3dcIj5cbiAgICAgICAgICAgICAgICAke2ltYWdlQ2FyZH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1EZXNjcmlwdGlvbkNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAke3RpdGxlUm93fVxuICAgICAgICAgICAgICAgICAgICAke2RldGFpbHNDb250YWluZXIuaW5uZXJIVE1MfVxuICAgICAgICAgICAgICAgICAgICAke2Rlc2NyaXB0aW9uQmxvY2t9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCA6IGBcbiAgICAgICAgICAgICR7ZGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBwcmV2aWV3SXRlbUNvbnRlbnRSb3dcIj5cbiAgICAgICAgICAgICAgICAke2ltYWdlQ2FyZH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1EZXNjcmlwdGlvbkNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAke2Rlc2NyaXB0aW9uQmxvY2t9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW0ke3VzZVNpZGVCeVNpZGVMYXlvdXQgPyAnIHByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlJyA6ICcnfVwiXG4gICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0uSWR9XCI+XG4gICAgICAgICAgICAgICAgJHt1c2VTaWRlQnlTaWRlTGF5b3V0ID8gJycgOiB0aXRsZVJvd31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0xpc3RJdGVtQ29udGVudCBoaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICR7Y29udGVudFJvd31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbGlja0hhbmRsZXIoZSkpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGF5U3RhdGVCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXlTdGF0ZUJ1dHRvbi0ke3RoaXMuaXRlbS5JZH1gKVxuICAgICAgICBwbGF5U3RhdGVCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHRvZ2dsZVBsYXllZFN0YXRlTG9jYWxseSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHRoaXMuaXRlbS5JZClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlld0l0ZW1EZXNjcmlwdGlvbicpXG4gICAgICAgICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpXG5cbiAgICAgICAgY29uc3Qgc3RhcnRQbGF5YmFjayA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB2b2lkIHRoaXMucGxheWJhY2tIYW5kbGVyLnBsYXkodGhpcy5pdGVtLklkLCB0aGlzLml0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5BdXRvQ2xvc2VQcmV2aWV3KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnQtaXRlbS0ke3RoaXMuaXRlbS5JZH1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UGxheWJhY2spXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGF5QnV0dG9uLSR7dGhpcy5pdGVtLklkfWApPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UGxheWJhY2spXG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuL0Jhc2VUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtyZW5kZXJXYXRjaGVkQ291bnRJbnRvfSBmcm9tIFwiLi4vU2VydmljZXMvRGF0YUZldGNoZXJcIjtcblxuZXhwb3J0IGNsYXNzIFBvcHVwVGl0bGVUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BvcHVwVGl0bGVDb250YWluZXInKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld1BvcHVwVGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInBvcHVwVGl0bGVTd2l0Y2hJY29uXCIgY2xhc3M9XCJhY3Rpb25zaGVldE1lbnVJdGVtSWNvbiBsaXN0SXRlbUljb24gbGlzdEl0ZW1JY29uLXRyYW5zcGFyZW50IG1hdGVyaWFsLWljb25zIGtleWJvYXJkX2JhY2tzcGFjZSAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5ncm91cHMubGVuZ3RoID4gMSA/ICcnIDogJ2hpZGUnfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJhY3Rpb25TaGVldFRpdGxlXCI+PC9oMT5cbiAgICAgICAgICAgICAgICAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50ID8gJzxkaXYgY2xhc3M9XCJwcmV2aWV3R3JvdXBXYXRjaGVkQ291bnRcIj48L2Rpdj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbikge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbGlja0hhbmRsZXIoZSkpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFRleHQodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcignaDEnKVxuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0ZXh0XG4gICAgICAgIHRpdGxlLnRpdGxlID0gdGV4dFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTd2l0Y2hhYmxlKHN3aXRjaGFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJyNwb3B1cFRpdGxlU3dpdGNoSWNvbicpPy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIXN3aXRjaGFibGUpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFdhdGNoZWRDb3VudChncm91cDogR3JvdXApIHtcbiAgICAgICAgY29uc3Qgd2F0Y2hlZENvdW50RWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICAgICAgaWYgKHdhdGNoZWRDb3VudEVsZW1lbnQpIHJlbmRlcldhdGNoZWRDb3VudEludG8odGhpcy5wcm9ncmFtRGF0YVN0b3JlLCB3YXRjaGVkQ291bnRFbGVtZW50LCBncm91cClcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldFZpc2libGUoaXNWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpXG4gICAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lciwgcG9zaXRpb25BZnRlckluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BvcHVwUHJldmlld0J1dHRvbicpO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCIgY2xhc3M9XCJhdXRvU2l6ZSBwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiIGlzPVwicGFwZXItaWNvbi1idXR0b24tbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVwaXNvZGUgUHJldmlld1wiPlxuICAgICAgICAgICAgICAgIDwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPlxuICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJzdmcxXCJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2IDRcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImxheWVyMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0NDdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MC40NzY0Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtwYWludC1vcmRlcjpzdHJva2UgbWFya2VycyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMy43NTY4Njc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIuMTY5MzY2MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMC4yMzgyMzMwM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PVwiMS44MjU3MzM1XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJyZWN0NDctNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NjU5NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gMS4wMjkxNDM3LDEuMDMyMDQ4MiBoIDMuNzUyODk5MSB2IDIuMTcyMjM5NCBsIDAuMDA2NzYsLTIuMTU3MjU5NSB6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJyZWN0NDctOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NzQyNztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gMS44MjI4NjE0LDAuMjM4NzEzMzYgaCAzLjc1OTI1OSBWIDIuNDEwMTIxMSBsIC0wLjAwNjgsLTIuMTcxNDA3NzQgelwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogYW55ID0+IGNsaWNrSGFuZGxlcigpKTtcbiAgICB9XG59IiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuLi9CYXNlVGVtcGxhdGVcIlxuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uLy4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiXG5cbmV4cG9ydCBjbGFzcyBGYXZvcml0ZUljb25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdmYXZvcml0ZUJ1dHRvbi0nICsgaXRlbS5JZClcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1yYXRpbmdidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5pdGVtPy5JZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNlcnZlcmlkPVwiJHt0aGlzLml0ZW0/LlNlcnZlcklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbXR5cGU9XCJFcGlzb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1saWtlcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXNmYXZvcml0ZT1cIiR7dGhpcy5pdGVtPy5Vc2VyRGF0YT8uSXNGYXZvcml0ZSA/PyBmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGZhdm9yaXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGVtcGxhdGV9IGZyb20gXCIuLi9CYXNlVGVtcGxhdGVcIlxuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uLy4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiXG5cbmV4cG9ydCBjbGFzcyBQbGF5SWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSwgcHJpdmF0ZSBpc0FjdGl2ZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BsYXlCdXR0b24tJyArIHRoaXMuaXRlbS5JZClcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgICAgIGlzPVwicGFwZXItaWNvbi1idXR0b24tbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmlzQWN0aXZlID8gJ2Rpc2FibGVkJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBsYXlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHBsYXlfYXJyb3dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIFBsYXlTdGF0ZUljb25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwbGF5U3RhdGVCdXR0b24tJyArIHRoaXMuaXRlbS5JZClcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1wbGF5c3RhdGVidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5pdGVtPy5JZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNlcnZlcmlkPVwiJHt0aGlzLml0ZW0/LlNlcnZlcklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbXR5cGU9XCJFcGlzb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1saWtlcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGxheWVkPVwiJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5QbGF5ZWQgPz8gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNYXJrIHBsYXllZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2hlY2sgcGxheXN0YXRlYnV0dG9uLWljb24tJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5QbGF5ZWQgPyBcInBsYXllZFwiIDogXCJ1bnBsYXllZFwifVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn1cbiIsImNvbnN0IFNQSU5ORVJfTEFZRVJTX0hUTUw6IHN0cmluZyA9IFsxLCAyLCAzLCA0XS5tYXAobGF5ZXIgPT5cbiAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19sYXllciBtZGwtc3Bpbm5lcl9fbGF5ZXItJHtsYXllcn1cIj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXIgbWRsLXNwaW5uZXJfX2xlZnRcIj5gICtcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZSBtZGwtc3Bpbm5lcl9fY2lyY2xlTGVmdFwiPjwvZGl2PmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZS1jbGlwcGVyIG1kbC1zcGlubmVyX19yaWdodFwiPmAgK1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlIG1kbC1zcGlubmVyX19jaXJjbGVSaWdodFwiPjwvZGl2PmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgYDwvZGl2PmBcbikuam9pbignJylcblxuZXhwb3J0IGZ1bmN0aW9uIHNwaW5uZXJIdG1sKGV4dHJhQ2xhc3Nlczogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdiBkaXI9XCJsdHJcIiBjbGFzcz1cImRvY3NwaW5uZXIgbWRsLXNwaW5uZXIgJHtleHRyYUNsYXNzZXN9XCI+JHtTUElOTkVSX0xBWUVSU19IVE1MfTwvZGl2PmBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlU3Bpbm5lcihjb250YWluZXI6IFBhcmVudE5vZGUpOiB2b2lkIHtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm1kbC1zcGlubmVyJyk/LmNsYXNzTGlzdC5hZGQoJ21kbFNwaW5uZXJBY3RpdmUnKVxufSIsImV4cG9ydCBlbnVtIEVuZHBvaW50cyB7XG4gICAgQkFTRSA9IFwiSW5QbGF5ZXJQcmV2aWV3XCIsXG4gICAgUExBWV9NRURJQSA9IFwiL0l0ZW1zL3tpdGVtSWR9L1BsYXkve3RpY2tzfVwiLFxuICAgIE5PV19QTEFZSU5HX0lURU0gPSBcIi9Ob3dQbGF5aW5nSXRlbVwiLFxuICAgIFNFUlZFUl9TRVRUSU5HUyA9IFwiL1NlcnZlclNldHRpbmdzXCIsXG4gICAgSVRFTV9QUkVWSUVXX1RZUEUgPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L0l0ZW1zL3tpdGVtSWR9L1ByZXZpZXdJdGVtVHlwZVwiLFxuICAgIElURU1fUFJFVklFV19EQVRBID0gXCIvVXNlcnMve3VzZXJJZH0ve2RldmljZUlkfS9JdGVtcy97aXRlbUlkfS9QcmV2aWV3RGF0YVwiLFxuICAgIEdST1VQX0lURU1TID0gXCIvVXNlcnMve3VzZXJJZH0vR3JvdXBzL3tncm91cElkfS9JdGVtc1wiLFxuICAgIEdST1VQX1dBVENIRURfQ09VTlQgPSBcIi9Vc2Vycy97dXNlcklkfS9Hcm91cHMve2dyb3VwSWR9L1dhdGNoZWRDb3VudFwiLFxuICAgIENPTlRBSU5JTkdfQ09MTEVDVElPTlMgPSBcIi9Vc2Vycy97dXNlcklkfS9JdGVtcy97aXRlbUlkfS9Db250YWluaW5nQ29sbGVjdGlvbnNcIixcbiAgICBTRVRfU09VUkNFX0NPTExFQ1RJT04gPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L1NvdXJjZUNvbGxlY3Rpb24ve2NvbGxlY3Rpb25JZH1cIixcbiAgICBQTFVHSU5fU0VUVElOR1MgPSBcIi9QbHVnaW5TZXR0aW5nc1wiXG59IiwiaW1wb3J0IHtMaXN0RWxlbWVudFRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge0dyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtHcm91cExpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlXCI7XG5pbXBvcnQge1BvcHVwVGl0bGVUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGVcIjtcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi9FbmRwb2ludHNcIjtcbmltcG9ydCB7R3JvdXBJdGVtc1Jlc3VsdH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwSXRlbXNSZXN1bHRcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHthY3RpdmF0ZVNwaW5uZXIsIHNwaW5uZXJIdG1sfSBmcm9tIFwiLi9Db21wb25lbnRzL1NwaW5uZXJcIjtcbmltcG9ydCB7dXBkYXRlV2F0Y2hlZENvdW50RG9tfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL1NlcnZpY2VzL0xvZ2dlclwiO1xuXG4vLyBUaGUgYmFja2VuZCBhbHJlYWR5IHJldHVybnMgUGxheWxpc3RzL0JveFNldHMgYW5kIEZvbGRlcnMgaW4gdGhlaXIgb3duIG1hbnVhbCBpdGVtL2Rpc3NwbGF5IG9yZGVyXG4vLyBzb3J0aW5nIHNob3VsZCBvbmx5IGFwcGx5IGZvciBzZWFzb24tYmFzZWQgKEVwaXNvZGUpIGdyb3Vwcywgd2hlcmUgaXQgcmVmbGVjdHMgYWN0dWFsIGVwaXNvZGUgb3JkZXIuXG5jb25zdCBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzOiBTZXQ8SXRlbVR5cGU+ID0gbmV3IFNldChbSXRlbVR5cGUuUGxheWxpc3QsIEl0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuRm9sZGVyLCBJdGVtVHlwZS5Nb3ZpZV0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0RWxlbWVudEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikgeyB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlSXRlbUVsZW1lbnRzKGl0ZW1zOiBQcmV2aWV3SXRlbVtdLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50LCBvZmZzZXQ6IG51bWJlciA9IDApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcHJlc2VydmVPcmRlciA9IHByZXNlcnZlQmFja2VuZE9yZGVyVHlwZXMuaGFzKHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlKVxuICAgICAgICBpZiAoIXByZXNlcnZlT3JkZXIpXG4gICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLkluZGV4TnVtYmVyIC0gYi5JbmRleE51bWJlcilcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEZvciBQbGF5bGlzdHMvQm94U2V0cywgc2hvdyB0aGUgYWN0dWFsIGxpc3QgcG9zaXRpb24gaW5zdGVhZCBvZiB0aGUgSW5kZXhOdW1iZXIgZnJvbSB0aGVpciBzZWFzb24vZXBpc29kZS5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcmVzZXJ2ZU9yZGVyID8geyAuLi5pdGVtc1tpXSwgSW5kZXhOdW1iZXI6IG9mZnNldCArIGkgKyAxLCBJbmRleE51bWJlckVuZDogdW5kZWZpbmVkIH0gOiBpdGVtc1tpXVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIHBhcmVudERpdiwgb2Zmc2V0ICsgaSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgYXN5bmMgcHJlcGVuZEl0ZW1FbGVtZW50cyhpdGVtczogUHJldmlld0l0ZW1bXSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcHJlc2VydmVPcmRlciA9IHByZXNlcnZlQmFja2VuZE9yZGVyVHlwZXMuaGFzKHRoaXMucHJvZ3JhbURhdGFTdG9yZS50eXBlKVxuICAgICAgICBpZiAoIXByZXNlcnZlT3JkZXIpXG4gICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLkluZGV4TnVtYmVyIC0gYi5JbmRleE51bWJlcilcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHByZXNlcnZlT3JkZXIgPyB7IC4uLml0ZW1zW2ldLCBJbmRleE51bWJlcjogb2Zmc2V0ICsgaSArIDEsIEluZGV4TnVtYmVyRW5kOiB1bmRlZmluZWQgfSA6IGl0ZW1zW2ldXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlbmRlckl0ZW0oaXRlbSwgcGFyZW50RGl2LCAtMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3cgYSBcIlNob3cgbW9yZVwiIGJ1dHRvbiBpZiBkZXNjcmlwdGlvbiBleGNlZWRzIG1heCBoZWlnaHRcbiAgICBwcml2YXRlIGFwcGx5RGVzY3JpcHRpb25SZWFkTW9yZShpdGVtQ29udGFpbmVyOiBFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaXRlbUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKVxuICAgICAgICBjb25zdCByZWFkTW9yZUJ1dHRvbiA9IGl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcmV2aWV3SXRlbVJlYWRNb3JlQnV0dG9uJylcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbiB8fCAhcmVhZE1vcmVCdXR0b24pIHJldHVyblxuXG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJylcbiAgICAgICAgcmVhZE1vcmVCdXR0b24udGV4dENvbnRlbnQgPSAnU2hvdyBtb3JlJ1xuXG4gICAgICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSBkZXNjcmlwdGlvbi5zY3JvbGxIZWlnaHQgPiBkZXNjcmlwdGlvbi5jbGllbnRIZWlnaHRcbiAgICAgICAgcmVhZE1vcmVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFpc092ZXJmbG93aW5nKVxuICAgICAgICBpZiAoIWlzT3ZlcmZsb3dpbmcpIHJldHVyblxuXG4gICAgICAgIHJlYWRNb3JlQnV0dG9uLm9uY2xpY2sgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpXG4gICAgICAgICAgICByZWFkTW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9IGV4cGFuZGVkID8gJ1Nob3cgbGVzcycgOiAnU2hvdyBtb3JlJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV2ZWFscyBhbiBpdGVtJ3MgY29udGVudFxuICAgIHByaXZhdGUgZXhwYW5kSXRlbShpdGVtQ29udGFpbmVyOiBFbGVtZW50LCBtYXJrU2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGlmIChtYXJrU2VsZWN0ZWQpIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICB0aGlzLmFwcGx5RGVzY3JpcHRpb25SZWFkTW9yZShpdGVtQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJlbmRlckl0ZW0oaXRlbTogUHJldmlld0l0ZW0sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGl0ZW1MaXN0RWxlbWVudFRlbXBsYXRlID0gbmV3IExpc3RFbGVtZW50VGVtcGxhdGUocGFyZW50RGl2LCBwb3NpdGlvbkFmdGVySW5kZXgsIGl0ZW0sIHRoaXMucGxheWJhY2tIYW5kbGVyLCB0aGlzLnByb2dyYW1EYXRhU3RvcmUpO1xuICAgICAgICBpdGVtTGlzdEVsZW1lbnRUZW1wbGF0ZS5yZW5kZXIoKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIHdoZW4gZXZlcnkgaXRlbSBpcyBhbHJlYWR5IGV4cGFuZGVkLCB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB0b2dnbGVcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXhwYW5kQWxsSXRlbXMpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gaGlkZSBpdGVtIGNvbnRlbnQgZm9yIGFsbCBleGlzdGluZyBpdGVtcyBpbiB0aGUgcHJldmlldyBsaXN0XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXZpZXdMaXN0SXRlbUNvbnRlbnRcIikuZm9yRWFjaCgoZWxlbWVudDogRWxlbWVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWRMaXN0SXRlbScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXI6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS0ke2l0ZW0uSWR9YCkucXVlcnlTZWxlY3RvcignLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQnKTtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbShpdGVtQ29udGFpbmVyLCB0cnVlKTtcblxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJzdGFydFwiIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpdGVtTm9kZTogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLSR7aXRlbS5JZH1gKS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0xpc3RJdGVtQ29udGVudCcpO1xuICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkV4cGFuZEFsbEl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZEl0ZW0oaXRlbU5vZGUsIGl0ZW0uSWQgPT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLklkID09PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRJdGVtKGl0ZW1Ob2RlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlU3Bpbm5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdwcmV2aWV3U2Nyb2xsU3Bpbm5lcicpXG4gICAgICAgIHNwaW5uZXIuaW5uZXJIVE1MID0gc3Bpbm5lckh0bWwoKVxuICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoc3Bpbm5lcilcbiAgICAgICAgcmV0dXJuIHNwaW5uZXJcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBhdHRhY2hTY3JvbGxQYWdpbmF0aW9uKFxuICAgICAgICBwYXJlbnREaXY6IEhUTUxFbGVtZW50LFxuICAgICAgICBsb2FkUGFnZTogKHN0YXJ0SW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PixcbiAgICAgICAgdmlld1Rva2VuOiBudW1iZXIsXG4gICAgICAgIGluaXRpYWxUb3RhbExvYWRlZDogbnVtYmVyLFxuICAgICAgICBpbml0aWFsVG90YWxSZWNvcmRDb3VudDogbnVtYmVyLFxuICAgICAgICBpbml0aWFsTG9hZGVkU3RhcnRJbmRleDogbnVtYmVyXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IFNDUk9MTF9UUklHR0VSX0RJU1RBTkNFX1BYID0gMjAwXG5cbiAgICAgICAgbGV0IHRvdGFsTG9hZGVkID0gaW5pdGlhbFRvdGFsTG9hZGVkXG4gICAgICAgIGxldCB0b3RhbFJlY29yZENvdW50ID0gaW5pdGlhbFRvdGFsUmVjb3JkQ291bnRcbiAgICAgICAgbGV0IGxvYWRlZFN0YXJ0SW5kZXggPSBpbml0aWFsTG9hZGVkU3RhcnRJbmRleFxuICAgICAgICBsZXQgbG9hZGluZ0ZvcndhcmQgPSBmYWxzZVxuICAgICAgICBsZXQgbG9hZGluZ0JhY2t3YXJkID0gZmFsc2VcblxuICAgICAgICBjb25zdCBsb2FkTmV4dFBhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBsb2FkaW5nRm9yd2FyZCA9IHRydWVcbiAgICAgICAgICAgIGNvbnN0IHNwaW5uZXIgPSB0aGlzLmNyZWF0ZVNwaW5uZXJFbGVtZW50KClcbiAgICAgICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChzcGlubmVyKVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMsIHRvdGFsUmVjb3JkQ291bnQ6IG5ld1RvdGFsUmVjb3JkQ291bnQgfSA9IGF3YWl0IGxvYWRQYWdlKHRvdGFsTG9hZGVkKVxuICAgICAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbUVsZW1lbnRzKGl0ZW1zLCBwYXJlbnREaXYsIHRvdGFsTG9hZGVkKVxuICAgICAgICAgICAgICAgIHRvdGFsTG9hZGVkICs9IGl0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICAgIHRvdGFsUmVjb3JkQ291bnQgPSBuZXdUb3RhbFJlY29yZENvdW50XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgbmV3bHkgbG9hZGVkIHBhZ2UgbWlnaHQgc3RpbGwgbm90IGZpbGwgdGhlIGNvbnRhaW5lciwgc28gcmUtY2hlY2sgcmlnaHQgYXdheS5cbiAgICAgICAgICAgICAgICBjaGVja1Njcm9sbFBvc2l0aW9uKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgbmV4dCBwYWdlIG9mIGl0ZW1zIChzdGFydEluZGV4ICR7dG90YWxMb2FkZWR9KWAsIGV4KVxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0ZvcndhcmQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9hZFByZXZpb3VzUGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgIGxvYWRpbmdCYWNrd2FyZCA9IHRydWVcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodEJlZm9yZVNwaW5uZXIgPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgICBjb25zdCBzcGlubmVyID0gdGhpcy5jcmVhdGVTcGlubmVyRWxlbWVudCgpXG4gICAgICAgICAgICBwYXJlbnREaXYuaW5zZXJ0QmVmb3JlKHNwaW5uZXIsIHBhcmVudERpdi5maXJzdENoaWxkKVxuICAgICAgICAgICAgcGFyZW50RGl2LnNjcm9sbFRvcCArPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsSGVpZ2h0QmVmb3JlU3Bpbm5lclxuXG4gICAgICAgICAgICBjb25zdCBwYWdlU2l6ZSA9IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FcGlzb2RlUGFnZVNpemVcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXJ0SW5kZXggPSBNYXRoLm1heCgwLCBsb2FkZWRTdGFydEluZGV4IC0gcGFnZVNpemUpXG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpdGVtcyB9ID0gYXdhaXQgbG9hZFBhZ2UobmV3U3RhcnRJbmRleClcbiAgICAgICAgICAgICAgICAvLyBUaGUgdmlldyBtYXkgaGF2ZSBtb3ZlZCBvbiAoZS5nLiBiYWNrIHRvIHRoZSBncm91cCBsaXN0KSB3aGlsZSB0aGlzIHBhZ2Ugd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodEJlZm9yZVByZXBlbmQgPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgICAgICAgc3Bpbm5lci5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHJlcGVuZEl0ZW1FbGVtZW50cyhpdGVtcywgcGFyZW50RGl2LCBuZXdTdGFydEluZGV4KVxuICAgICAgICAgICAgICAgIHBhcmVudERpdi5zY3JvbGxUb3AgKz0gcGFyZW50RGl2LnNjcm9sbEhlaWdodCAtIHNjcm9sbEhlaWdodEJlZm9yZVByZXBlbmRcbiAgICAgICAgICAgICAgICBsb2FkZWRTdGFydEluZGV4ID0gbmV3U3RhcnRJbmRleFxuXG4gICAgICAgICAgICAgICAgY2hlY2tTY3JvbGxQb3NpdGlvbigpXG4gICAgICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHByZXZpb3VzIHBhZ2Ugb2YgaXRlbXMgKHN0YXJ0SW5kZXggJHtuZXdTdGFydEluZGV4fSlgLCBleClcbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdCYWNrd2FyZCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGVja1Njcm9sbFBvc2l0aW9uID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsUG9zaXRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5lYXJCb3R0b20gPSBwYXJlbnREaXYuc2Nyb2xsVG9wICsgcGFyZW50RGl2LmNsaWVudEhlaWdodCA+PSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0IC0gU0NST0xMX1RSSUdHRVJfRElTVEFOQ0VfUFhcbiAgICAgICAgICAgIGlmICghbG9hZGluZ0ZvcndhcmQgJiYgdG90YWxMb2FkZWQgPCB0b3RhbFJlY29yZENvdW50ICYmIG5lYXJCb3R0b20pIHtcbiAgICAgICAgICAgICAgICBsb2FkTmV4dFBhZ2UoKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZWFyVG9wID0gcGFyZW50RGl2LnNjcm9sbFRvcCA8PSBTQ1JPTExfVFJJR0dFUl9ESVNUQU5DRV9QWFxuICAgICAgICAgICAgaWYgKCFsb2FkaW5nQmFja3dhcmQgJiYgbG9hZGVkU3RhcnRJbmRleCA+IDAgJiYgbmVhclRvcCkge1xuICAgICAgICAgICAgICAgIGxvYWRQcmV2aW91c1BhZ2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsUG9zaXRpb24pXG4gICAgICAgIGNoZWNrU2Nyb2xsUG9zaXRpb24oKVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVMYXp5SXRlbUxpc3QoXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGxvYWRQYWdlOiAoc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+LFxuICAgICAgICB2aWV3VG9rZW46IG51bWJlcixcbiAgICAgICAgaW5pdGlhbFBhZ2U/OiBHcm91cEl0ZW1zUmVzdWx0LFxuICAgICAgICBpbml0aWFsT2Zmc2V0OiBudW1iZXIgPSAwXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGZpcnN0UGFnZSA9IGluaXRpYWxQYWdlID8/IGF3YWl0IGxvYWRQYWdlKDApXG4gICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNDdXJyZW50Vmlldyh2aWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUl0ZW1FbGVtZW50cyhmaXJzdFBhZ2UuaXRlbXMsIHBhcmVudERpdiwgaW5pdGlhbE9mZnNldClcblxuICAgICAgICBjb25zdCB0b3RhbExvYWRlZCA9IGluaXRpYWxPZmZzZXQgKyBmaXJzdFBhZ2UuaXRlbXMubGVuZ3RoXG4gICAgICAgIHRoaXMuYXR0YWNoU2Nyb2xsUGFnaW5hdGlvbihwYXJlbnREaXYsIGxvYWRQYWdlLCB2aWV3VG9rZW4sIHRvdGFsTG9hZGVkLCBmaXJzdFBhZ2UudG90YWxSZWNvcmRDb3VudCwgaW5pdGlhbE9mZnNldClcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGZldGNoR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXBJZDogc3RyaW5nKTogUHJvbWlzZTx7IHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyLCBwbGF5ZWRSdW50aW1lVGlja3M6IG51bWJlciwgdG90YWxSdW50aW1lVGlja3M6IG51bWJlciB9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLkdST1VQX1dBVENIRURfQ09VTlR9YFxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7Z3JvdXBJZH0nLCBncm91cElkKSlcbiAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IHJhdy5QbGF5ZWRJdGVtQ291bnQsXG4gICAgICAgICAgICB0b3RhbEl0ZW1Db3VudDogcmF3LlRvdGFsSXRlbUNvdW50LFxuICAgICAgICAgICAgcGxheWVkUnVudGltZVRpY2tzOiByYXcuUGxheWVkUnVudGltZVRpY2tzLFxuICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IHJhdy5Ub3RhbFJ1bnRpbWVUaWNrc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGVuc3VyZUdyb3VwV2F0Y2hlZENvdW50KGdyb3VwOiBHcm91cCk6IFByb21pc2U8R3JvdXA+IHtcbiAgICAgICAgaWYgKGdyb3VwLnBsYXllZEl0ZW1Db3VudCAhPT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKSByZXR1cm4gZ3JvdXBcblxuICAgICAgICBjb25zdCB7IHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQsIHBsYXllZFJ1bnRpbWVUaWNrcywgdG90YWxSdW50aW1lVGlja3MgfSA9IGF3YWl0IHRoaXMuZmV0Y2hHcm91cFdhdGNoZWRDb3VudChncm91cC5ncm91cElkKVxuICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuc2V0R3JvdXBXYXRjaGVkQ291bnQoZ3JvdXAuZ3JvdXBJZCwgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudCwgcGxheWVkUnVudGltZVRpY2tzLCB0b3RhbFJ1bnRpbWVUaWNrcylcbiAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIHBsYXllZEl0ZW1Db3VudCwgdG90YWxJdGVtQ291bnQsIHBsYXllZFJ1bnRpbWVUaWNrcywgdG90YWxSdW50aW1lVGlja3MgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVHcm91cEVsZW1lbnRzKFxuICAgICAgICBncm91cHM6IEdyb3VwW10sXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGN1cnJlbnRHcm91cEluZGV4OiBudW1iZXIsXG4gICAgICAgIHRpdGxlQ29udGFpbmVyOiBQb3B1cFRpdGxlVGVtcGxhdGUsXG4gICAgICAgIGxvYWRJdGVtczogKGdyb3VwSWQ6IHN0cmluZywgc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+XG4gICAgKTogdm9pZCB7XG4gICAgICAgIGdyb3Vwcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4TnVtYmVyIC0gYi5pbmRleE51bWJlcilcblxuICAgICAgICAvLyBJbnZhbGlkYXRlcyBhbnkgaXRlbSBsb2FkIHN0aWxsIGluIHByb2dyZXNzc1xuICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IG5ldyBHcm91cExpc3RFbGVtZW50VGVtcGxhdGUocGFyZW50RGl2LCBpLCBncm91cHNbaV0sIGdyb3Vwc1tpXS5pbmRleE51bWJlciA9PT0gY3VycmVudEdyb3VwSW5kZXgsIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50LCB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuV2F0Y2hDb3VudERpc3BsYXlNb2RlKVxuICAgICAgICAgICAgZ3JvdXAucmVuZGVyKGFzeW5jIChlOiBNb3VzZUV2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQgPSBncm91cHNbaV0uZ3JvdXBJZFxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFRleHQoZ3JvdXBzW2ldLmdyb3VwTmFtZSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0V2F0Y2hlZENvdW50KGdyb3Vwc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3Vwc1tpXS5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVHcm91cFdhdGNoZWRDb3VudChncm91cHNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4odXBkYXRlZCA9PiB0aXRsZUNvbnRhaW5lci5zZXRXYXRjaGVkQ291bnQodXBkYXRlZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgd2F0Y2hlZCBjb3VudCBmb3IgZ3JvdXAgJHtncm91cHNbaV0uZ3JvdXBJZH1gLCBleCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKVxuXG4gICAgICAgICAgICAgICAgcGFyZW50RGl2LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgY29uc3Qgdmlld1Rva2VuID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmJlZ2luTmV3VmlldygpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWQgPSAhdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzR3JvdXBzQ2FjaGVFeHBpcmVkXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5maW5kKGcgPT4gZy5ncm91cElkID09PSBncm91cHNbaV0uZ3JvdXBJZClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsUGFnZTogR3JvdXBJdGVtc1Jlc3VsdCB8IHVuZGVmaW5lZCA9IGNhY2hlZD8ubG9hZGVkU3RhcnRJbmRleCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8geyBpdGVtczogWy4uLmNhY2hlZC5pdGVtc10sIHRvdGFsUmVjb3JkQ291bnQ6IGNhY2hlZC5sb2FkZWRUb3RhbFJlY29yZENvdW50ID8/IGNhY2hlZC5pdGVtcy5sZW5ndGggfVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxPZmZzZXQgPSBjYWNoZWQ/LmxvYWRlZFN0YXJ0SW5kZXggPz8gMFxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVMYXp5SXRlbUxpc3QocGFyZW50RGl2LCAoc3RhcnRJbmRleCkgPT4gbG9hZEl0ZW1zKGdyb3Vwc1tpXS5ncm91cElkLCBzdGFydEluZGV4KSwgdmlld1Rva2VuLCBpbml0aWFsUGFnZSwgaW5pdGlhbE9mZnNldClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCBpdGVtcyBmb3IgZ3JvdXAgJHtncm91cHNbaV0uZ3JvdXBJZH1gLCBleClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgJiYgZ3JvdXBzW2ldLnBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVHcm91cFdhdGNoZWRDb3VudChncm91cHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHVwZGF0ZWQgPT4gdXBkYXRlV2F0Y2hlZENvdW50RG9tKHRoaXMucHJvZ3JhbURhdGFTdG9yZSwgdXBkYXRlZCkpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXg6IHVua25vd24pID0+IHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHdhdGNoZWQgY291bnQgZm9yIGdyb3VwICR7Z3JvdXBzW2ldLmdyb3VwSWR9YCwgZXgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gRXhwYW5kZWRJdGVtTGF5b3V0IHtcbiAgICBEZWZhdWx0ID0gMCxcbiAgICBTaWRlQnlTaWRlID0gMSxcbn1cbiIsImV4cG9ydCBlbnVtIEl0ZW1UeXBlIHtcbiAgICBBZ2dyZWdhdGVGb2xkZXIsXG4gICAgQXVkaW8sXG4gICAgQXVkaW9Cb29rLFxuICAgIEJhc2VQbHVnaW5Gb2xkZXIsXG4gICAgQm9vayxcbiAgICBCb3hTZXQsXG4gICAgQ2hhbm5lbCxcbiAgICBDaGFubmVsRm9sZGVySXRlbSxcbiAgICBDb2xsZWN0aW9uRm9sZGVyLFxuICAgIEVwaXNvZGUsXG4gICAgRm9sZGVyLFxuICAgIEdlbnJlLFxuICAgIE1hbnVhbFBsYXlsaXN0c0ZvbGRlcixcbiAgICBNb3ZpZSxcbiAgICBMaXZlVHZDaGFubmVsLFxuICAgIExpdmVUdlByb2dyYW0sXG4gICAgTXVzaWNBbGJ1bSxcbiAgICBNdXNpY0FydGlzdCxcbiAgICBNdXNpY0dlbnJlLFxuICAgIE11c2ljVmlkZW8sXG4gICAgUGVyc29uLFxuICAgIFBob3RvLFxuICAgIFBob3RvQWxidW0sXG4gICAgUGxheWxpc3QsXG4gICAgUGxheWxpc3RzRm9sZGVyLFxuICAgIFByb2dyYW0sXG4gICAgUmVjb3JkaW5nLFxuICAgIFNlYXNvbixcbiAgICBTZXJpZXMsXG4gICAgU3R1ZGlvLFxuICAgIFRyYWlsZXIsXG4gICAgVHZDaGFubmVsLFxuICAgIFR2UHJvZ3JhbSxcbiAgICBVc2VyUm9vdEZvbGRlcixcbiAgICBVc2VyVmlldyxcbiAgICBWaWRlbyxcbiAgICBZZWFyXG59IiwiZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICAgIE5vbmUgPSAwLFxuICAgIEVycm9yID0gMSxcbiAgICBJbmZvcm1hdGlvbiA9IDIsXG4gICAgRGVidWcgPSAzLFxufVxuIiwiaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vSXRlbVR5cGVcIjtcbmltcG9ydCB7V2F0Y2hDb3VudERpc3BsYXlNb2RlfSBmcm9tIFwiLi9XYXRjaENvdW50RGlzcGxheU1vZGVcIjtcbmltcG9ydCB7TG9nTGV2ZWx9IGZyb20gXCIuL0xvZ0xldmVsXCI7XG5pbXBvcnQge0V4cGFuZGVkSXRlbUxheW91dH0gZnJvbSBcIi4vRXhwYW5kZWRJdGVtTGF5b3V0XCI7XG5cbmV4cG9ydCB0eXBlIFBsdWdpblNldHRpbmdzID0ge1xuICAgIEVuYWJsZWRJdGVtVHlwZXM6IEl0ZW1UeXBlW10sXG4gICAgQmx1ckRlc2NyaXB0aW9uOiBib29sZWFuLFxuICAgIEJsdXJUaHVtYm5haWw6IGJvb2xlYW4sXG4gICAgRXBpc29kZVBhZ2VTaXplOiBudW1iZXIsXG4gICAgU2hvd1dhdGNoZWRDb3VudDogYm9vbGVhbixcbiAgICBXYXRjaENvdW50RGlzcGxheU1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSxcbiAgICBTZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnM6IGJvb2xlYW4sXG4gICAgRGlzcGxheU1vdmllRm9sZGVyU2libGluZ3M6IGJvb2xlYW4sXG4gICAgT25seUJsdXJVbndhdGNoZWQ6IGJvb2xlYW4sXG4gICAgU2hvd1dhdGNoUHJvZ3Jlc3M6IGJvb2xlYW4sXG4gICAgRXhwYW5kQWxsSXRlbXM6IGJvb2xlYW4sXG4gICAgRXhwYW5kZWRJdGVtTGF5b3V0OiBFeHBhbmRlZEl0ZW1MYXlvdXQsXG4gICAgQXV0b0Nsb3NlUHJldmlldzogYm9vbGVhbixcbiAgICBMb2dMZXZlbDogTG9nTGV2ZWwsXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0UGx1Z2luU2V0dGluZ3M6IFBsdWdpblNldHRpbmdzID0ge1xuICAgIEVuYWJsZWRJdGVtVHlwZXM6IFtJdGVtVHlwZS5TZXJpZXMsIEl0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuTW92aWUsIEl0ZW1UeXBlLlZpZGVvXSxcbiAgICBCbHVyRGVzY3JpcHRpb246IGZhbHNlLFxuICAgIEJsdXJUaHVtYm5haWw6IGZhbHNlLFxuICAgIEVwaXNvZGVQYWdlU2l6ZTogMTAsXG4gICAgU2hvd1dhdGNoZWRDb3VudDogdHJ1ZSxcbiAgICBXYXRjaENvdW50RGlzcGxheU1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Ib3Vyc01pbnV0ZXMsXG4gICAgU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zOiB0cnVlLFxuICAgIERpc3BsYXlNb3ZpZUZvbGRlclNpYmxpbmdzOiBmYWxzZSxcbiAgICBPbmx5Qmx1clVud2F0Y2hlZDogZmFsc2UsXG4gICAgU2hvd1dhdGNoUHJvZ3Jlc3M6IHRydWUsXG4gICAgRXhwYW5kQWxsSXRlbXM6IGZhbHNlLFxuICAgIEV4cGFuZGVkSXRlbUxheW91dDogRXhwYW5kZWRJdGVtTGF5b3V0LkRlZmF1bHQsXG4gICAgQXV0b0Nsb3NlUHJldmlldzogdHJ1ZSxcbiAgICBMb2dMZXZlbDogTG9nTGV2ZWwuSW5mb3JtYXRpb24sXG59IiwiaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vUHJldmlld0l0ZW1cIjtcblxuZXhwb3J0IHR5cGUgR3JvdXAgPSB7XG4gICAgZ3JvdXBJZDogc3RyaW5nXG4gICAgZ3JvdXBOYW1lOiBzdHJpbmdcbiAgICBpdGVtczogUHJldmlld0l0ZW1bXVxuICAgIGluZGV4TnVtYmVyOiBudW1iZXJcbiAgICBwbGF5ZWRJdGVtQ291bnQ6IG51bWJlclxuICAgIHRvdGFsSXRlbUNvdW50OiBudW1iZXJcbiAgICBwbGF5ZWRSdW50aW1lVGlja3M6IG51bWJlclxuICAgIHRvdGFsUnVudGltZVRpY2tzOiBudW1iZXJcbiAgICBsb2FkZWRTdGFydEluZGV4PzogbnVtYmVyXG4gICAgbG9hZGVkRW5kSW5kZXg/OiBudW1iZXJcbiAgICBsb2FkZWRUb3RhbFJlY29yZENvdW50PzogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBVTktOT1dOX1dBVENIRURfQ09VTlQgPSAtMVxuXG5leHBvcnQgY29uc3QgZm9ybWF0V2F0Y2hlZENvdW50ID0gKHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyKTogc3RyaW5nID0+XG4gICAgcGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQgfHwgdG90YWxJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVFxuICAgICAgICA/ICfigKYgd2F0Y2hlZCdcbiAgICAgICAgOiBgJHtwbGF5ZWRJdGVtQ291bnR9LyR7dG90YWxJdGVtQ291bnR9IHdhdGNoZWRgXG5cbiIsImltcG9ydCB7Zm9ybWF0V2F0Y2hlZENvdW50LCBHcm91cCwgVU5LTk9XTl9XQVRDSEVEX0NPVU5UfSBmcm9tIFwiLi9Hcm91cFwiO1xuaW1wb3J0IHtXYXRjaENvdW50RGlzcGxheU1vZGV9IGZyb20gXCIuLi9XYXRjaENvdW50RGlzcGxheU1vZGVcIjtcblxuY29uc3QgVElDS1NfUEVSX1NFQ09ORCA9IDEwXzAwMF8wMDBcblxuY29uc3QgZ2V0VGltZVN0cmluZyA9ICh0aWNrczogbnVtYmVyLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHNlY29uZHMgPSB0aWNrcyAvIFRJQ0tTX1BFUl9TRUNPTkRcbiAgICBjb25zdCB0b3RhbE1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MClcbiAgICBjb25zdCB0b3RhbEhvdXJzID0gTWF0aC5mbG9vcih0b3RhbE1pbnV0ZXMgLyA2MClcbiAgICBjb25zdCB0b3RhbERheXMgPSBNYXRoLmZsb29yKHRvdGFsSG91cnMgLyAyNClcbiAgICBjb25zdCB0b3RhbE1vbnRocyA9IE1hdGguZmxvb3IodG90YWxEYXlzIC8gMzApXG4gICAgY29uc3QgdG90YWxZZWFycyA9IE1hdGguZmxvb3IodG90YWxEYXlzIC8gMzY1KVxuXG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Ib3Vyc01pbnV0ZXMpIHtcbiAgICAgICAgaWYgKHRvdGFsSG91cnMgPj0gMSkge1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IHRvdGFsTWludXRlcyAlIDYwXG4gICAgICAgICAgICByZXR1cm4gbWludXRlcyA+IDAgPyBgJHt0b3RhbEhvdXJzfWggJHttaW51dGVzfW1gIDogYCR7dG90YWxIb3Vyc31oYFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbE1pbnV0ZXMgPiAwID8gYCR7dG90YWxNaW51dGVzfW1gIDogJzBtJ1xuICAgIH1cblxuICAgIGlmICh0b3RhbFllYXJzID49IDEpIHtcbiAgICAgICAgY29uc3QgbW9udGhzID0gTWF0aC5mbG9vcigodG90YWxEYXlzICUgMzY1KSAvIDMwKVxuICAgICAgICByZXR1cm4gbW9udGhzID4gMCA/IGAke3RvdGFsWWVhcnN9eSAke21vbnRoc31tb2AgOiBgJHt0b3RhbFllYXJzfXlgXG4gICAgfVxuICAgIGlmICh0b3RhbE1vbnRocyA+PSAxKSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0b3RhbERheXMgJSAzMFxuICAgICAgICByZXR1cm4gZGF5cyA+IDAgPyBgJHt0b3RhbE1vbnRoc31tbyAke2RheXN9ZGAgOiBgJHt0b3RhbE1vbnRoc31tb2BcbiAgICB9XG4gICAgaWYgKHRvdGFsRGF5cyA+PSAxKSB7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gdG90YWxIb3VycyAlIDI0XG4gICAgICAgIHJldHVybiBob3VycyA+IDAgPyBgJHt0b3RhbERheXN9ZCAke2hvdXJzfWhgIDogYCR7dG90YWxEYXlzfWRgXG4gICAgfVxuICAgIGlmICh0b3RhbEhvdXJzID49IDEpIHtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IHRvdGFsTWludXRlcyAlIDYwXG4gICAgICAgIHJldHVybiBtaW51dGVzID4gMCA/IGAke3RvdGFsSG91cnN9aCAke21pbnV0ZXN9bWAgOiBgJHt0b3RhbEhvdXJzfWhgXG4gICAgfVxuICAgIHJldHVybiB0b3RhbE1pbnV0ZXMgPiAwID8gYCR7dG90YWxNaW51dGVzfW1gIDogJzBtJ1xufVxuXG5jb25zdCBjbGFtcFByb2dyZXNzID0gKHByb2dyZXNzOiBudW1iZXIpOiBudW1iZXIgPT4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBNYXRoLnJvdW5kKHByb2dyZXNzKSkpXG5cbmV4cG9ydCBjb25zdCBnZXRXYXRjaFByb2dyZXNzUGVyY2VudCA9IChncm91cDogR3JvdXAsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IG51bWJlciA9PiB7XG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Db3VudCkge1xuICAgICAgICBpZiAoIWdyb3VwLnRvdGFsSXRlbUNvdW50KSByZXR1cm4gMFxuICAgICAgICByZXR1cm4gY2xhbXBQcm9ncmVzcygoZ3JvdXAucGxheWVkSXRlbUNvdW50IC8gZ3JvdXAudG90YWxJdGVtQ291bnQpICogMTAwKVxuICAgIH1cblxuICAgIGlmICghZ3JvdXAudG90YWxSdW50aW1lVGlja3MpIHJldHVybiAwXG4gICAgcmV0dXJuIGNsYW1wUHJvZ3Jlc3MoKGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyAvIGdyb3VwLnRvdGFsUnVudGltZVRpY2tzKSAqIDEwMClcbn1cblxuZXhwb3J0IGNvbnN0IGlzV2F0Y2hlZENvdW50VW5rbm93biA9IChncm91cDogR3JvdXAsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IGJvb2xlYW4gPT4ge1xuICAgIGlmIChncm91cC5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCB8fCBncm91cC50b3RhbEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgcmV0dXJuIG1vZGUgIT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Db3VudFxuICAgICAgICAmJiAoZ3JvdXAucGxheWVkUnVudGltZVRpY2tzID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQgfHwgZ3JvdXAudG90YWxSdW50aW1lVGlja3MgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVClcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdFdhdGNoZWRDb3VudFRleHQgPSAoZ3JvdXA6IEdyb3VwLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChtb2RlID09PSBXYXRjaENvdW50RGlzcGxheU1vZGUuQ291bnQpXG4gICAgICAgIHJldHVybiBmb3JtYXRXYXRjaGVkQ291bnQoZ3JvdXAucGxheWVkSXRlbUNvdW50LCBncm91cC50b3RhbEl0ZW1Db3VudClcblxuICAgIGlmIChtb2RlID09PSBXYXRjaENvdW50RGlzcGxheU1vZGUuUGVyY2VudGFnZSlcbiAgICAgICAgcmV0dXJuIGAke2dldFdhdGNoUHJvZ3Jlc3NQZXJjZW50KGdyb3VwLCBtb2RlKX0lYFxuXG4gICAgY29uc3Qgc2FmZVRvdGFsID0gTWF0aC5tYXgoMCwgZ3JvdXAudG90YWxSdW50aW1lVGlja3MgfHwgMClcbiAgICBjb25zdCBzYWZlUGxheWVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc2FmZVRvdGFsLCBncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgfHwgMCkpXG4gICAgcmV0dXJuIGAke2dldFRpbWVTdHJpbmcoc2FmZVBsYXllZCwgbW9kZSl9IC8gJHtnZXRUaW1lU3RyaW5nKHNhZmVUb3RhbCwgbW9kZSl9YFxufVxuXG4vLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbjAwYmNvZHIvSmVsbHlmaW4tRW5oYW5jZWQvYmxvYi9tYWluL0plbGx5ZmluLlBsdWdpbi5KZWxseWZpbkVuaGFuY2VkL2pzL2VuaGFuY2VkL2l0ZW1kZXRhaWxzL2ZlYXR1cmVzLWRldGFpbHMtbWVkaWEtaW5mby5qc1xuY29uc3QgZ2V0V2F0Y2hQcm9ncmVzc0ljb25IdG1sID0gKHByb2dyZXNzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGNpcmN1bWZlcmVuY2UgPSAyICogTWF0aC5QSSAqIDggLy8gcmFkaXVzID0gOFxuICAgIGNvbnN0IG9mZnNldCA9IGNpcmN1bWZlcmVuY2UgLSAocHJvZ3Jlc3MgLyAxMDApICogY2lyY3VtZmVyZW5jZVxuXG4gICAgaWYgKHByb2dyZXNzID49IDEwMCkge1xuICAgICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMC4zZW07IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgZmxleC1zaHJpbms6IDA7XCI+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjhcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkuNSAxNS41bC0zLTMgMS40LTEuNEw5LjUgMTIuN2w1LjYtNS42IDEuNCAxLjR6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgPC9zdmc+YFxuICAgIH1cblxuICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwLjNlbTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBmbGV4LXNocmluazogMDtcIj5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgb3BhY2l0eT1cIjAuMlwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCJcbiAgICAgICAgICAgIHN0eWxlPVwic3Ryb2tlLWRhc2hhcnJheTogJHtjaXJjdW1mZXJlbmNlfTsgc3Ryb2tlLWRhc2hvZmZzZXQ6ICR7b2Zmc2V0fTsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcIi8+XG4gICAgPC9zdmc+YFxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sID0gKGdyb3VwOiBHcm91cCwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogc3RyaW5nID0+IHtcbiAgICBpZiAoaXNXYXRjaGVkQ291bnRVbmtub3duKGdyb3VwLCBtb2RlKSlcbiAgICAgICAgcmV0dXJuIGAke2dldFdhdGNoUHJvZ3Jlc3NJY29uSHRtbCgwKX08c3BhbiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFRleHRcIj4sLCw8L3NwYW4+YFxuXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRXYXRjaFByb2dyZXNzUGVyY2VudChncm91cCwgbW9kZSlcbiAgICByZXR1cm4gYCR7Z2V0V2F0Y2hQcm9ncmVzc0ljb25IdG1sKHByb2dyZXNzKX08c3BhbiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFRleHRcIj4ke2Zvcm1hdFdhdGNoZWRDb3VudFRleHQoZ3JvdXAsIG1vZGUpfTwvc3Bhbj5gXG59XG5cbi8vIEN5Y2xlcyBDb3VudCAtPiBUaW1lIC0+IFBlcmNlbnRhZ2UuIFRoZSB0aW1lIGZvcm1hdCBmb2xsb3dzIHRoZSBwbHVnaW4gc2V0dGluZywgSG91cnNNaW51dGVzIHVubGVzcyBpdCBpcyBBbGxVbml0cy5cbmV4cG9ydCBjb25zdCBuZXh0V2F0Y2hDb3VudERpc3BsYXlNb2RlID0gKG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSwgZGVmYXVsdE1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IFdhdGNoQ291bnREaXNwbGF5TW9kZSA9PiB7XG4gICAgY29uc3QgdGltZU1vZGUgPSBkZWZhdWx0TW9kZSA9PT0gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkFsbFVuaXRzID8gV2F0Y2hDb3VudERpc3BsYXlNb2RlLkFsbFVuaXRzIDogV2F0Y2hDb3VudERpc3BsYXlNb2RlLkhvdXJzTWludXRlc1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICBjYXNlIFdhdGNoQ291bnREaXNwbGF5TW9kZS5Db3VudDogcmV0dXJuIHRpbWVNb2RlXG4gICAgICAgIGNhc2UgV2F0Y2hDb3VudERpc3BsYXlNb2RlLlBlcmNlbnRhZ2U6IHJldHVybiBXYXRjaENvdW50RGlzcGxheU1vZGUuQ291bnRcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIFdhdGNoQ291bnREaXNwbGF5TW9kZS5QZXJjZW50YWdlXG4gICAgfVxufVxuIiwiZXhwb3J0IHR5cGUgU2VydmVyU2V0dGluZ3MgPSB7XG4gICAgTWluUmVzdW1lUGN0OiBudW1iZXIsIFxuICAgIE1heFJlc3VtZVBjdDogbnVtYmVyLCBcbiAgICBNaW5SZXN1bWVEdXJhdGlvblNlY29uZHM6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNlcnZlclNldHRpbmdzOiBTZXJ2ZXJTZXR0aW5ncyA9IHtcbiAgICBNaW5SZXN1bWVQY3Q6IDUsXG4gICAgTWF4UmVzdW1lUGN0OiA5MCxcbiAgICBNaW5SZXN1bWVEdXJhdGlvblNlY29uZHM6IDMwMFxufSIsImV4cG9ydCBlbnVtIFdhdGNoQ291bnREaXNwbGF5TW9kZSB7XG4gICAgQ291bnQgPSAwLFxuICAgIEhvdXJzTWludXRlcyA9IDEsXG4gICAgQWxsVW5pdHMgPSAyLFxuICAgIFBlcmNlbnRhZ2UgPSAzLFxufVxuIiwiaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge25leHRXYXRjaENvdW50RGlzcGxheU1vZGUsIHJlbmRlcldhdGNoZWRDb3VudElubmVySHRtbH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzXCI7XG5cbnR5cGUgVXNlckRhdGFDaGFuZ2VkRW50cnkgPSB7XG4gICAgSXRlbUlkOiBzdHJpbmdcbiAgICBQbGF5ZWQ6IGJvb2xlYW5cbiAgICBJc0Zhdm9yaXRlOiBib29sZWFuXG4gICAgUGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXJcbiAgICBQbGF5ZWRQZXJjZW50YWdlPzogbnVtYmVyXG59XG5cbnR5cGUgV2ViU29ja2V0TWVzc2FnZSA9IHtcbiAgICBNZXNzYWdlVHlwZTogc3RyaW5nXG4gICAgRGF0YTogYW55XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXYXRjaGVkQ291bnRJbnRvKHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBncm91cDogR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBtb2RlID0gZWxlbWVudC5kYXRhc2V0Lm1vZGUgIT09IHVuZGVmaW5lZCA/IE51bWJlcihlbGVtZW50LmRhdGFzZXQubW9kZSkgOiBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLldhdGNoQ291bnREaXNwbGF5TW9kZVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sKGdyb3VwLCBtb2RlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ljbGVXYXRjaGVkQ291bnRNb2RlKHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBncm91cDogR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZWxlbWVudC5kYXRhc2V0Lm1vZGUgIT09IHVuZGVmaW5lZCA/IE51bWJlcihlbGVtZW50LmRhdGFzZXQubW9kZSkgOiBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLldhdGNoQ291bnREaXNwbGF5TW9kZVxuICAgIGVsZW1lbnQuZGF0YXNldC5tb2RlID0gU3RyaW5nKG5leHRXYXRjaENvdW50RGlzcGxheU1vZGUoY3VycmVudCwgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5XYXRjaENvdW50RGlzcGxheU1vZGUpKVxuICAgIHJlbmRlcldhdGNoZWRDb3VudEludG8ocHJvZ3JhbURhdGFTdG9yZSwgZWxlbWVudCwgZ3JvdXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXYXRjaGVkQ291bnREb20ocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgZ3JvdXA6IEdyb3VwKTogdm9pZCB7XG4gICAgaWYgKGdyb3VwLmdyb3VwSWQgPT09IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCkge1xuICAgICAgICBjb25zdCBwb3B1cFdhdGNoZWRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cFRpdGxlQ29udGFpbmVyJyk/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICAgICAgaWYgKHBvcHVwV2F0Y2hlZENvdW50KSByZW5kZXJXYXRjaGVkQ291bnRJbnRvKHByb2dyYW1EYXRhU3RvcmUsIHBvcHVwV2F0Y2hlZENvdW50LCBncm91cClcbiAgICB9XG5cbiAgICBjb25zdCBncm91cExpc3RXYXRjaGVkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ3JvdXAtJHtncm91cC5ncm91cElkfWApPy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCcpXG4gICAgaWYgKGdyb3VwTGlzdFdhdGNoZWRDb3VudCkgcmVuZGVyV2F0Y2hlZENvdW50SW50byhwcm9ncmFtRGF0YVN0b3JlLCBncm91cExpc3RXYXRjaGVkQ291bnQsIGdyb3VwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQmx1ckRvbShwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBpdGVtSWQ6IHN0cmluZywgcGxheWVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzXG4gICAgY29uc3Qgc2hvdWxkQmx1ciA9ICEoc2V0dGluZ3MuT25seUJsdXJVbndhdGNoZWQgJiYgcGxheWVkKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmV2aWV3SXRlbUltYWdlQ2FyZC0ke2l0ZW1JZH1gKT8uY2xhc3NMaXN0LnRvZ2dsZSgnYmx1cicsIHNldHRpbmdzLkJsdXJUaHVtYm5haWwgJiYgc2hvdWxkQmx1cilcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS0ke2l0ZW1JZH1gKT8ucXVlcnlTZWxlY3RvcignLnByZXZpZXdJdGVtRGVzY3JpcHRpb24nKT8uY2xhc3NMaXN0LnRvZ2dsZSgnYmx1cicsIHNldHRpbmdzLkJsdXJEZXNjcmlwdGlvbiAmJiBzaG91bGRCbHVyKVxufVxuXG5mdW5jdGlvbiBwbGF5ZWRSdW50aW1lQ29udHJpYnV0aW9uKGl0ZW06IFByZXZpZXdJdGVtLCBwbGF5ZWQ6IGJvb2xlYW4sIHBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGxheWVkID8gKGl0ZW0uUnVuVGltZVRpY2tzID8/IDApIDogcGxheWJhY2tQb3NpdGlvblRpY2tzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RXYXRjaGVkQ291bnQoXG4gICAgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSxcbiAgICBpdGVtOiBQcmV2aWV3SXRlbSxcbiAgICB3YXNQbGF5ZWQ6IGJvb2xlYW4sXG4gICAgaXNQbGF5ZWQ6IGJvb2xlYW4sXG4gICAgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXIsXG4gICAgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzOiBudW1iZXJcbik6IHZvaWQge1xuICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50KSByZXR1cm5cblxuICAgIGNvbnN0IGRlbHRhUGxheWVkQ291bnQgPSBOdW1iZXIoaXNQbGF5ZWQpIC0gTnVtYmVyKHdhc1BsYXllZClcbiAgICBjb25zdCBkZWx0YVBsYXllZFJ1bnRpbWVUaWNrcyA9XG4gICAgICAgIHBsYXllZFJ1bnRpbWVDb250cmlidXRpb24oaXRlbSwgaXNQbGF5ZWQsIG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcykgLVxuICAgICAgICBwbGF5ZWRSdW50aW1lQ29udHJpYnV0aW9uKGl0ZW0sIHdhc1BsYXllZCwgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzKVxuICAgIGlmIChkZWx0YVBsYXllZENvdW50ID09PSAwICYmIGRlbHRhUGxheWVkUnVudGltZVRpY2tzID09PSAwKSByZXR1cm5cblxuICAgIGNvbnN0IHVwZGF0ZWRHcm91cCA9IHByb2dyYW1EYXRhU3RvcmUuYWRqdXN0R3JvdXBXYXRjaFN0YXRzKGl0ZW0uSWQsIGRlbHRhUGxheWVkQ291bnQsIGRlbHRhUGxheWVkUnVudGltZVRpY2tzKVxuICAgIGlmICh1cGRhdGVkR3JvdXApIHVwZGF0ZVdhdGNoZWRDb3VudERvbShwcm9ncmFtRGF0YVN0b3JlLCB1cGRhdGVkR3JvdXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQbGF5ZWRTdGF0ZUxvY2FsbHkocHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSwgaXRlbUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtOiBQcmV2aWV3SXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoaXRlbUlkKVxuICAgIGlmICghaXRlbSkgcmV0dXJuXG5cbiAgICBjb25zdCB3YXNQbGF5ZWQgPSBpdGVtLlVzZXJEYXRhLlBsYXllZFxuICAgIGNvbnN0IGlzUGxheWVkID0gIXdhc1BsYXllZFxuICAgIGNvbnN0IG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcyA9IGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzXG4gICAgY29uc3QgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzID0gaXNQbGF5ZWQgPyAwIDogb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzXG5cbiAgICBwcm9ncmFtRGF0YVN0b3JlLnVwZGF0ZUl0ZW0oe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBVc2VyRGF0YTogeyAuLi5pdGVtLlVzZXJEYXRhLCBQbGF5ZWQ6IGlzUGxheWVkLCBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcyB9XG4gICAgfSlcbiAgICB1cGRhdGVCbHVyRG9tKHByb2dyYW1EYXRhU3RvcmUsIGl0ZW1JZCwgaXNQbGF5ZWQpXG4gICAgYWRqdXN0V2F0Y2hlZENvdW50KHByb2dyYW1EYXRhU3RvcmUsIGl0ZW0sIHdhc1BsYXllZCwgaXNQbGF5ZWQsIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcywgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzKVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUZldGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBFdmVudHMub24oQXBpQ2xpZW50LCAnbWVzc2FnZScsIChfZXZlbnQsIG1lc3NhZ2U6IFdlYlNvY2tldE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLk1lc3NhZ2VUeXBlICE9PSAnVXNlckRhdGFDaGFuZ2VkJykgcmV0dXJuXG4gICAgICAgICAgICBpZiAobWVzc2FnZS5EYXRhLlVzZXJJZCAhPT0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhTGlzdDogVXNlckRhdGFDaGFuZ2VkRW50cnlbXSA9IG1lc3NhZ2UuRGF0YS5Vc2VyRGF0YUxpc3QgPz8gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgdXNlckRhdGEgb2YgdXNlckRhdGFMaXN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbTogUHJldmlld0l0ZW0gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQodXNlckRhdGEuSXRlbUlkKVxuICAgICAgICAgICAgICAgIGlmICghaXRlbSkgY29udGludWVcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdhc1BsYXllZCA9IGl0ZW0uVXNlckRhdGEuUGxheWVkXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzID0gaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3NcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIFVzZXJEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLlVzZXJEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVkOiB1c2VyRGF0YS5QbGF5ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBJc0Zhdm9yaXRlOiB1c2VyRGF0YS5Jc0Zhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWJhY2tQb3NpdGlvblRpY2tzOiB1c2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZWRQZXJjZW50YWdlOiB1c2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlQmx1ckRvbSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHVzZXJEYXRhLkl0ZW1JZCwgdXNlckRhdGEuUGxheWVkKVxuICAgICAgICAgICAgICAgIGFkanVzdFdhdGNoZWRDb3VudCh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIGl0ZW0sIHdhc1BsYXllZCwgdXNlckRhdGEuUGxheWVkLCBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3MsIHVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQge0xvZ0xldmVsfSBmcm9tIFwiLi4vTW9kZWxzL0xvZ0xldmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAgIHByaXZhdGUgbG9nTGV2ZWw6IExvZ0xldmVsID0gTG9nTGV2ZWwuSW5mb3JtYXRpb25cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nX3ByZWZpeDogc3RyaW5nID0gXCJbSW5QbGF5ZXJFcGlzb2RlUHJldmlld11cIikge1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMb2dMZXZlbChsZXZlbDogTG9nTGV2ZWwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dMZXZlbCA9IGxldmVsXG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA8IExvZ0xldmVsLkRlYnVnKSByZXR1cm5cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPCBMb2dMZXZlbC5FcnJvcikgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7dGhpcy5sb2dfcHJlZml4fSAke21zZ31gLCBkZXRhaWxzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uZGV0YWlsczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPCBMb2dMZXZlbC5JbmZvcm1hdGlvbikgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuLi9FbmRwb2ludHNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXliYWNrSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikgeyB9XG5cbiAgICBhc3luYyBwbGF5KGl0ZW1JZDogc3RyaW5nLCBzdGFydFBvc2l0aW9uVGlja3M6IG51bWJlcik6IFByb21pc2U8dm9pZCB8IFJlc3BvbnNlPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5QTEFZX01FRElBfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t0aWNrc30nLCBzdGFydFBvc2l0aW9uVGlja3MudG9TdHJpbmcoKSkpXG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwgfSlcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3Qgc3RhcnQgdGhlIHBsYXliYWNrIG9mIGFuIGl0ZW1gLCBleClcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1Byb2dyYW1EYXRhfSBmcm9tIFwiLi4vTW9kZWxzL1Byb2dyYW1EYXRhXCI7XG5pbXBvcnQge0dyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7RGVmYXVsdFBsdWdpblNldHRpbmdzLCBQbHVnaW5TZXR0aW5nc30gZnJvbSBcIi4uL01vZGVscy9QbHVnaW5TZXR0aW5nc1wiO1xuaW1wb3J0IHtEZWZhdWx0U2VydmVyU2V0dGluZ3MsIFNlcnZlclNldHRpbmdzfSBmcm9tIFwiLi4vTW9kZWxzL1NlcnZlclNldHRpbmdzXCI7XG5cbmNvbnN0IEdST1VQU19DQUNIRV9UVEwgPSA1ICogNjAgKiAxMDAwXG5cbi8vIEl0ZW0gVHlwZSBtYXBwaW5ncyBmb3IgdGhlIFR5cGVzIHNlbGVjdGFibGUgaW4gdGhlIFBsdWdpbiBDb25maWd1cmF0aW9uXG5jb25zdCBQUkVWSUVXX1RZUEVfR1JPVVBTOiBQYXJ0aWFsPFJlY29yZDxJdGVtVHlwZSwgSXRlbVR5cGVbXT4+ID0ge1xuICAgIFtJdGVtVHlwZS5TZXJpZXNdOiBbSXRlbVR5cGUuU2VyaWVzLCBJdGVtVHlwZS5TZWFzb24sIEl0ZW1UeXBlLkVwaXNvZGVdLFxuICAgIFtJdGVtVHlwZS5Cb3hTZXRdOiBbSXRlbVR5cGUuQm94U2V0LCBJdGVtVHlwZS5QbGF5bGlzdF0sXG4gICAgW0l0ZW1UeXBlLlZpZGVvXTogW0l0ZW1UeXBlLlZpZGVvLCBJdGVtVHlwZS5Gb2xkZXJdXG59XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtRGF0YVN0b3JlIHtcbiAgICBwcml2YXRlIF9wcm9ncmFtRGF0YTogUHJvZ3JhbURhdGFcbiAgICBwcml2YXRlIF92aWV3VG9rZW46IG51bWJlciA9IDBcbiAgICBwcml2YXRlIF9ncm91cHNDYWNoZWRBdDogbnVtYmVyIHwgbnVsbCA9IG51bGxcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZU1lZGlhU291cmNlSWQ6ICcnLFxuICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogJycsXG4gICAgICAgICAgICBib3hTZXROYW1lOiAnJyxcbiAgICAgICAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICBwbHVnaW5TZXR0aW5nczogRGVmYXVsdFBsdWdpblNldHRpbmdzLFxuICAgICAgICAgICAgc2VydmVyU2V0dGluZ3M6IERlZmF1bHRTZXJ2ZXJTZXR0aW5nc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVNZWRpYVNvdXJjZUlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhY3RpdmVNZWRpYVNvdXJjZUlkKGFjdGl2ZU1lZGlhU291cmNlSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gYWN0aXZlTWVkaWFTb3VyY2VJZFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlR3JvdXBJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYWN0aXZlR3JvdXBJZChhY3RpdmVHcm91cElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuYWN0aXZlR3JvdXBJZCA9IGFjdGl2ZUdyb3VwSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZUdyb3VwKCk6IEdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAuZ3JvdXBJZCA9PT0gdGhpcy5hY3RpdmVHcm91cElkKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBJdGVtVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS50eXBlXG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0eXBlKHR5cGU6IEl0ZW1UeXBlKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnR5cGUgPSB0eXBlXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib3hTZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3hTZXROYW1lKGJveFNldE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ib3hTZXROYW1lID0gYm94U2V0TmFtZVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ3JvdXBzKCk6IEdyb3VwW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBncm91cHMoZ3JvdXBzOiBHcm91cFtdKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmdyb3VwcyA9IGdyb3Vwc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGx1Z2luU2V0dGluZ3MoKTogUGx1Z2luU2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3JhbURhdGEucGx1Z2luU2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsdWdpblNldHRpbmdzKHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5wbHVnaW5TZXR0aW5ncyA9IHNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZXJ2ZXJTZXR0aW5ncygpOiBTZXJ2ZXJTZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5zZXJ2ZXJTZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmVyU2V0dGluZ3Moc2V0dGluZ3M6IFNlcnZlclNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnNlcnZlclNldHRpbmdzID0gc2V0dGluZ3NcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG1hcmtHcm91cHNGZXRjaGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ncm91cHNDYWNoZWRBdCA9IERhdGUubm93KClcbiAgICB9XG5cbiAgICBwdWJsaWMgaW52YWxpZGF0ZUdyb3Vwc0NhY2hlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ncm91cHNDYWNoZWRBdCA9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzR3JvdXBzQ2FjaGVFeHBpcmVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPT09IG51bGwgfHwgRGF0ZS5ub3coKSAtIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID4gR1JPVVBTX0NBQ0hFX1RUTFxuICAgIH1cblxuICAgIHB1YmxpYyBpc1R5cGVBbGxvd2VkRm9yUHJldmlldyh0eXBlOiBJdGVtVHlwZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxvd2VkUHJldmlld1R5cGVzLnNvbWUoY29uZmlndXJlZFR5cGUgPT4gKFBSRVZJRVdfVFlQRV9HUk9VUFNbY29uZmlndXJlZFR5cGVdID8/IFtjb25maWd1cmVkVHlwZV0pLmluY2x1ZGVzKHR5cGUpKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWxsb3dlZFByZXZpZXdUeXBlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luU2V0dGluZ3MuRW5hYmxlZEl0ZW1UeXBlc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtQnlJZChpdGVtSWQ6IHN0cmluZyk6IFByZXZpZXdJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzXG4gICAgICAgICAgICAuZmxhdE1hcChncm91cCA9PiBncm91cC5pdGVtcylcbiAgICAgICAgICAgIC5maW5kKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgcmVjb3JkTG9hZGVkSXRlbXMoZ3JvdXBJZDogc3RyaW5nLCBpdGVtczogUHJldmlld0l0ZW1bXSwgc3RhcnRJbmRleDogbnVtYmVyLCB0b3RhbFJlY29yZENvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzID0gdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzLm1hcChncm91cCA9PiB7XG4gICAgICAgICAgICBpZiAoZ3JvdXAuZ3JvdXBJZCAhPT0gZ3JvdXBJZClcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBcblxuICAgICAgICAgICAgaWYgKGdyb3VwLmxvYWRlZFN0YXJ0SW5kZXggPT09IHVuZGVmaW5lZCB8fCBncm91cC5sb2FkZWRFbmRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIGl0ZW1zLCBsb2FkZWRTdGFydEluZGV4OiBzdGFydEluZGV4LCBsb2FkZWRFbmRJbmRleDogc3RhcnRJbmRleCArIGl0ZW1zLmxlbmd0aCwgbG9hZGVkVG90YWxSZWNvcmRDb3VudDogdG90YWxSZWNvcmRDb3VudCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFydEluZGV4ID49IGdyb3VwLmxvYWRlZEVuZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZ3JvdXAsIGl0ZW1zOiBbLi4uZ3JvdXAuaXRlbXMsIC4uLml0ZW1zXSwgbG9hZGVkRW5kSW5kZXg6IHN0YXJ0SW5kZXggKyBpdGVtcy5sZW5ndGgsIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ6IHRvdGFsUmVjb3JkQ291bnQgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA8IGdyb3VwLmxvYWRlZFN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgaXRlbXM6IFsuLi5pdGVtcywgLi4uZ3JvdXAuaXRlbXNdLCBsb2FkZWRTdGFydEluZGV4OiBzdGFydEluZGV4LCBsb2FkZWRUb3RhbFJlY29yZENvdW50OiB0b3RhbFJlY29yZENvdW50IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXRHcm91cFdhdGNoZWRDb3VudChncm91cElkOiBzdHJpbmcsIHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyLCBwbGF5ZWRSdW50aW1lVGlja3M6IG51bWJlciwgdG90YWxSdW50aW1lVGlja3M6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuZ3JvdXBzLm1hcChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXBJZCA/IHsgLi4uZywgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudCwgcGxheWVkUnVudGltZVRpY2tzLCB0b3RhbFJ1bnRpbWVUaWNrcyB9IDogZylcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRqdXN0R3JvdXBXYXRjaFN0YXRzKGl0ZW1JZDogc3RyaW5nLCBkZWx0YVBsYXllZENvdW50OiBudW1iZXIsIGRlbHRhUGxheWVkUnVudGltZVRpY2tzOiBudW1iZXIpOiBHcm91cCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cHMuZmluZChnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpXG4gICAgICAgIGlmICghZ3JvdXApIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgICBjb25zdCB1cGRhdGVkR3JvdXA6IEdyb3VwID0ge1xuICAgICAgICAgICAgLi4uZ3JvdXAsXG4gICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGdyb3VwLnBsYXllZEl0ZW1Db3VudCArIGRlbHRhUGxheWVkQ291bnQsXG4gICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UID8gVU5LTk9XTl9XQVRDSEVEX0NPVU5UIDogZ3JvdXAucGxheWVkUnVudGltZVRpY2tzICsgZGVsdGFQbGF5ZWRSdW50aW1lVGlja3NcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuZ3JvdXBzLm1hcChnID0+IGcuZ3JvdXBJZCA9PT0gZ3JvdXAuZ3JvdXBJZCA/IHVwZGF0ZWRHcm91cCA6IGcpXG4gICAgICAgIHJldHVybiB1cGRhdGVkR3JvdXBcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlSXRlbShpdGVtVG9VcGRhdGU6IFByZXZpZXdJdGVtKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGdyb3VwID0+XG4gICAgICAgICAgICBncm91cC5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbVRvVXBkYXRlLklkKVxuICAgICAgICAgICAgICAgID8geyAuLi5ncm91cCwgaXRlbXM6IGdyb3VwLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1Ub1VwZGF0ZS5JZCA/IGl0ZW1Ub1VwZGF0ZSA6IGl0ZW0pIH1cbiAgICAgICAgICAgICAgICA6IGdyb3VwXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbmV2ZXIgdGhlIHBvcHVwIHN3aXRjaGVzIHdoYXQgaXQncyBkaXNwbGF5aW5nIChvcGVuaW5nLCBzZWxlY3RpbmcgYSBncm91cCwgZ29pbmcgYmFjayB0byB0aGUgZ3JvdXAgbGlzdClcbiAgICBwdWJsaWMgYmVnaW5OZXdWaWV3KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiArK3RoaXMuX3ZpZXdUb2tlblxuICAgIH1cblxuICAgIHB1YmxpYyBpc0N1cnJlbnRWaWV3KHRva2VuOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRva2VuID09PSB0aGlzLl92aWV3VG9rZW5cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBjdXJyZW50Vmlld1Rva2VuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3VG9rZW5cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdGNvbnN0IGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRpZihBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlKGkgPCBkZWZpbml0aW9uLmxlbmd0aCkge1xuXHRcdFx0dmFyIGtleSA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdHZhciBiaW5kaW5nID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdGlmKGJpbmRpbmcgPT09IDApIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiBkZWZpbml0aW9uW2krK10gfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGJpbmRpbmcgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihiaW5kaW5nID09PSAwKSB7IGkrKzsgfVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL1NlcnZpY2VzL0xvZ2dlclwiO1xuaW1wb3J0IHtQcmV2aWV3QnV0dG9uVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlXCI7XG5pbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7RGlhbG9nQ29udGFpbmVyVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvRGlhbG9nQ29udGFpbmVyVGVtcGxhdGVcIjtcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcbmltcG9ydCB7TGlzdEVsZW1lbnRGYWN0b3J5fSBmcm9tIFwiLi9MaXN0RWxlbWVudEZhY3RvcnlcIjtcbmltcG9ydCB7UG9wdXBUaXRsZVRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL1BvcHVwVGl0bGVUZW1wbGF0ZVwiO1xuaW1wb3J0IHthZGp1c3RXYXRjaGVkQ291bnQsIERhdGFGZXRjaGVyLCBjeWNsZVdhdGNoZWRDb3VudE1vZGUsIHVwZGF0ZUJsdXJEb219IGZyb20gXCIuL1NlcnZpY2VzL0RhdGFGZXRjaGVyXCI7XG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7UGx1Z2luU2V0dGluZ3N9IGZyb20gXCIuL01vZGVscy9QbHVnaW5TZXR0aW5nc1wiO1xuaW1wb3J0IHtTZXJ2ZXJTZXR0aW5nc30gZnJvbSBcIi4vTW9kZWxzL1NlcnZlclNldHRpbmdzXCI7XG5pbXBvcnQge0VuZHBvaW50c30gZnJvbSBcIi4vRW5kcG9pbnRzXCI7XG5pbXBvcnQge0dyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtHcm91cEl0ZW1zUmVzdWx0fSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBJdGVtc1Jlc3VsdFwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5pbXBvcnQge2FjdGl2YXRlU3Bpbm5lciwgc3Bpbm5lckh0bWx9IGZyb20gXCIuL0NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IHtzZXRJdGVtT3ZlcmxheUFjdGl2ZSwgdXBkYXRlSXRlbVByb2dyZXNzRG9tfSBmcm9tIFwiLi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7dXBkYXRlRW5kVGltZURpc3BsYXl9IGZyb20gXCIuL0NvbXBvbmVudHMvSXRlbURldGFpbHNcIjtcblxuaW1wb3J0ICcuL1N0eWxlcy9TdHlsZXMuY3NzJ1xuXG4vLyBpbml0IHNlcnZpY2VzIGFuZCBoZWxwZXJzXG5jb25zdCBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoKVxuY29uc3QgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSA9IG5ldyBQcm9ncmFtRGF0YVN0b3JlKClcbmNvbnN0IHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyID0gbmV3IFBsYXliYWNrSGFuZGxlcihsb2dnZXIpXG5jb25zdCBsaXN0RWxlbWVudEZhY3RvcnkgPSBuZXcgTGlzdEVsZW1lbnRGYWN0b3J5KHBsYXliYWNrSGFuZGxlciwgcHJvZ3JhbURhdGFTdG9yZSwgbG9nZ2VyKVxuXG5jb25zdCBjb2xsZWN0aW9uc0J5SXRlbUlkID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8R3JvdXBbXT4+KClcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwW10+IHtcbiAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5DT05UQUlOSU5HX0NPTExFQ1RJT05TfWBcbiAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByYXc6IGFueVtdID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIHJldHVybiByYXcubWFwKChnOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXIsXG4gICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgdG90YWxJdGVtQ291bnQ6IGcuVG90YWxJdGVtQ291bnQsXG4gICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IGcuUGxheWVkUnVudGltZVRpY2tzLFxuICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IGcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgfSkpXG4gICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgbG9hZCBDb2xsZWN0aW9ucy9QbGF5bGlzdHMgY29udGFpbmluZyB0aGlzIG1vdmllXCIsIGV4KVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8R3JvdXBbXT4ge1xuICAgIGxldCBwcm9taXNlID0gY29sbGVjdGlvbnNCeUl0ZW1JZC5nZXQoaXRlbUlkKVxuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkKVxuICAgICAgICBjb2xsZWN0aW9uc0J5SXRlbUlkLnNldChpdGVtSWQsIHByb21pc2UpXG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgLy8gRW5zdXJlIEFwaUNsaWVudC9FdmVudHMgZXhpc3QgYW5kIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgaWYgKHR5cGVvZiBBcGlDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBFdmVudHMgPT09ICd1bmRlZmluZWQnIHx8ICFBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZD8uKCkpIHtcbiAgICAgICAgc2V0VGltZW91dChpbml0aWFsaXplLCAzMDApXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG5ldyBEYXRhRmV0Y2hlcihwcm9ncmFtRGF0YVN0b3JlKVxuXG4gICAgY29uc3QgcGx1Z2luU2V0dGluZ3NVcmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5QTFVHSU5fU0VUVElOR1N9YClcbiAgICBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmw6IHBsdWdpblNldHRpbmdzVXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIC50aGVuKChjb25maWc6IFBsdWdpblNldHRpbmdzKSA9PiB7XG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzID0gY29uZmlnXG4gICAgICAgICAgICBsb2dnZXIuc2V0TG9nTGV2ZWwoY29uZmlnLkxvZ0xldmVsKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBsb2FkIHBsdWdpbiBzZXR0aW5ncywgZmFsbGluZyBiYWNrIHRvIGRlZmF1bHRzXCIsIGV4KSlcblxuICAgIGNvbnN0IHNlcnZlclNldHRpbmdzVXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuU0VSVkVSX1NFVFRJTkdTfWApXG4gICAgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsOiBzZXJ2ZXJTZXR0aW5nc1VybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAudGhlbigoY29uZmlnOiBTZXJ2ZXJTZXR0aW5ncykgPT4gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncyA9IGNvbmZpZylcbiAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgbG9hZCBzZXJ2ZXIgc2V0dGluZ3MsIGZhbGxpbmcgYmFjayB0byBkZWZhdWx0c1wiLCBleCkpXG5cbiAgICBsb2dnZXIuaW5mbyhcIkluUGxheWVyRXBpc29kZVByZXZpZXcgaW5pdGlhbGl6ZWRcIilcbn1cbmluaXRpYWxpemUoKVxuXG5jb25zdCBTRUFSQ0hfQ09MTEVDVElPTlNfR1JPVVBfTkFNRSA9ICdTZWFyY2ggQ29sbGVjdGlvbnMvUGxheWxpc3RzJ1xuXG5jb25zdCB2aWRlb1BhdGhzOiBzdHJpbmdbXSA9IFsnL3ZpZGVvJ11cbmxldCBwcmV2aW91c1JvdXRlUGF0aDogc3RyaW5nID0gbnVsbFxubGV0IHByZXZpZXdDb250YWluZXJMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG5sZXQgcGVuZGluZ1ByZWxvYWRJdGVtSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG5sZXQgcGVuZGluZ1ByZWxvYWQ6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbFxubGV0IHByZWxvYWRPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsXG5sZXQgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGxcblxuZnVuY3Rpb24gZ2V0QWN0aXZlQnV0dG9uc0JhcigpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtdHlwZT1cInZpZGVvLW9zZFwiXTpub3QoLmhpZGUpIC5idXR0b25zJylcbn1cblxuLy8gV2FpdCBmb3IgdGhlIE9TRCdzIGAuYnV0dG9uc2AgY29udGFpbmVyIHRvIGV4aXN0XG5mdW5jdGlvbiB3YWl0Rm9yQnV0dG9uc0NvbnRhaW5lcihvblJlYWR5OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKGdldEFjdGl2ZUJ1dHRvbnNCYXIoKSkge1xuICAgICAgICBvblJlYWR5KClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGlmICghZ2V0QWN0aXZlQnV0dG9uc0JhcigpKSByZXR1cm5cbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyID0gbnVsbFxuICAgICAgICBvblJlYWR5KClcbiAgICB9KVxuICAgIGJ1dHRvbnNDb250YWluZXJPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdzaG93Jywgdmlld1Nob3dFdmVudEhhbmRsZXIpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB2aWV3U2hvd0V2ZW50SGFuZGxlcilcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKCkpXG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVJhdGluZ0J1dHRvbigpOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIGdldEFjdGl2ZUJ1dHRvbnNCYXIoKT8ucXVlcnlTZWxlY3RvcignLmJ0blVzZXJSYXRpbmcuYXV0b1NpemUucGFwZXItaWNvbi1idXR0b24tbGlnaHQnKSA/PyBudWxsXG59XG5cbmZ1bmN0aW9uIGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGdldEFjdGl2ZVJhdGluZ0J1dHRvbigpPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA/PyBudWxsXG59XG5cbmxldCBwZW5kaW5nSXRlbVN3aXRjaEJ1dHRvbjogRWxlbWVudCB8IG51bGwgPSBudWxsXG5sZXQgaXRlbVN3aXRjaE9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGxcblxuZnVuY3Rpb24gb25WaWRlb0VtcHRpZWQoKTogdm9pZCB7XG4gICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IC0xXG4gICAgaXRlbVN3aXRjaE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICBwZW5kaW5nSXRlbVN3aXRjaEJ1dHRvbiA9IGdldEFjdGl2ZVJhdGluZ0J1dHRvbigpXG4gICAgaWYgKCFwZW5kaW5nSXRlbVN3aXRjaEJ1dHRvbikgcmV0dXJuXG4gICAgXG4gICAgaXRlbVN3aXRjaE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4gc3RvcFdhaXRpbmdGb3JJdGVtU3dpdGNoKCkpXG4gICAgaXRlbVN3aXRjaE9ic2VydmVyLm9ic2VydmUocGVuZGluZ0l0ZW1Td2l0Y2hCdXR0b24sIHsgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbJ2RhdGEtaWQnXSB9KVxufVxuXG5mdW5jdGlvbiBzdG9wV2FpdGluZ0Zvckl0ZW1Td2l0Y2goKTogdm9pZCB7XG4gICAgaXRlbVN3aXRjaE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICBpdGVtU3dpdGNoT2JzZXJ2ZXIgPSBudWxsXG4gICAgcGVuZGluZ0l0ZW1Td2l0Y2hCdXR0b24gPSBudWxsXG59XG5cbmxldCBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kOiBudW1iZXIgPSAtMVxuZnVuY3Rpb24gb25WaWRlb1RpbWVVcGRhdGUodGhpczogSFRNTFZpZGVvRWxlbWVudCk6IHZvaWQge1xuICAgIGlmIChwZW5kaW5nSXRlbVN3aXRjaEJ1dHRvbikge1xuICAgICAgICAvLyBBIHJlY3JlYXRlZCBPU0QgaGFzIGEgbmV3IGJ1dHRvbi4gVGhlIG9ic2VydmVkIG9uZSBuZXZlciB1cGRhdGVzLlxuICAgICAgICBpZiAocGVuZGluZ0l0ZW1Td2l0Y2hCdXR0b24gPT09IGdldEFjdGl2ZVJhdGluZ0J1dHRvbigpKSByZXR1cm5cbiAgICAgICAgc3RvcFdhaXRpbmdGb3JJdGVtU3dpdGNoKClcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvblNlY29uZCA9IE1hdGguZmxvb3IodGhpcy5jdXJyZW50VGltZSlcbiAgICBpZiAocG9zaXRpb25TZWNvbmQgPT09IGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQpIHJldHVyblxuICAgIGxhc3RUcmFja2VkUG9zaXRpb25TZWNvbmQgPSBwb3NpdGlvblNlY29uZFxuXG4gICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG4gICAgaWYgKCFpdGVtSWQpIHJldHVyblxuXG4gICAgaWYgKGl0ZW1JZCAhPT0gcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzSXRlbUlkID0gcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCA9IGl0ZW1JZFxuICAgICAgICBzZXRJdGVtT3ZlcmxheUFjdGl2ZShwcmV2aW91c0l0ZW1JZCwgZmFsc2UpXG4gICAgICAgIHNldEl0ZW1PdmVybGF5QWN0aXZlKGl0ZW1JZCwgdHJ1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtID0gcHJvZ3JhbURhdGFTdG9yZS5nZXRJdGVtQnlJZChpdGVtSWQpXG4gICAgaWYgKCFpdGVtIHx8ICFpdGVtLlJ1blRpbWVUaWNrcykgcmV0dXJuXG5cbiAgICBjb25zdCBwb3NpdGlvblRpY2tzID0gdGhpcy5jdXJyZW50VGltZSAqIDEwXzAwMF8wMDBcbiAgICBjb25zdCBwbGF5ZWRQZXJjZW50YWdlID0gKHBvc2l0aW9uVGlja3MgLyBpdGVtLlJ1blRpbWVUaWNrcykgKiAxMDBcblxuICAgIGNvbnN0IHBsYXllZCA9IGl0ZW0uVXNlckRhdGEuUGxheWVkIHx8IHBsYXllZFBlcmNlbnRhZ2UgPj0gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncy5NYXhSZXN1bWVQY3RcbiAgICBjb25zdCB1cGRhdGVkSXRlbTogUHJldmlld0l0ZW0gPSB7XG4gICAgICAgIC4uLml0ZW0sXG4gICAgICAgIFVzZXJEYXRhOiB7XG4gICAgICAgICAgICAuLi5pdGVtLlVzZXJEYXRhLFxuICAgICAgICAgICAgUGxheWJhY2tQb3NpdGlvblRpY2tzOiBwb3NpdGlvblRpY2tzLFxuICAgICAgICAgICAgUGxheWVkUGVyY2VudGFnZTogcGxheWVkUGVyY2VudGFnZSxcbiAgICAgICAgICAgIFBsYXllZDogcGxheWVkXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHVwZGF0ZWRJdGVtKVxuICAgIFxuICAgIHVwZGF0ZUl0ZW1Qcm9ncmVzc0RvbShpdGVtSWQsIHBsYXllZFBlcmNlbnRhZ2UpXG4gICAgdXBkYXRlRW5kVGltZURpc3BsYXkodXBkYXRlZEl0ZW0pXG4gICAgaWYgKHBsYXllZCAhPT0gaXRlbS5Vc2VyRGF0YS5QbGF5ZWQpIHVwZGF0ZUJsdXJEb20ocHJvZ3JhbURhdGFTdG9yZSwgaXRlbUlkLCBwbGF5ZWQpXG4gICAgYWRqdXN0V2F0Y2hlZENvdW50KHByb2dyYW1EYXRhU3RvcmUsIGl0ZW0sIGl0ZW0uVXNlckRhdGEuUGxheWVkLCBwbGF5ZWQsIGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzLCBwb3NpdGlvblRpY2tzKVxufVxuXG5mdW5jdGlvbiBvblZpZGVvUmF0ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLmVuZHNBdFtkYXRhLWl0ZW0taWRdJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoZWxlbWVudC5kYXRhc2V0Lml0ZW1JZClcbiAgICAgICAgaWYgKGl0ZW0pIHVwZGF0ZUVuZFRpbWVEaXNwbGF5KGl0ZW0pXG4gICAgfSlcbn1cblxuLy8gVHJhY2tzIHdoaWNoIEJveFNldC9QbGF5bGlzdCBkZXRhaWxzIHBhZ2UgKGlmIGFueSkgd2FzIHZpc2l0ZWQgaW1tZWRpYXRlbHkgYmVmb3JlIG5hdmlnYXRpbmcgaW50byBwbGF5YmFja1xuY29uc3QgREVUQUlMU19ST1VURV9QQVRIOiBzdHJpbmcgPSAnL2RldGFpbHMnXG5jb25zdCBEQVNIQk9BUkRfUk9VVEVfUEFUSDogc3RyaW5nID0gJy9ob21lJ1xuY29uc3QgY29sbGVjdGlvbkxpa2VJdGVtVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLlBsYXlsaXN0XSlcbmxldCBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkOiBzdHJpbmcgPSBudWxsXG5jb25zdCBFTVBUWV9HVUlEID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCdcblxuZnVuY3Rpb24gcmVjb3JkU291cmNlQ29sbGVjdGlvbihjb2xsZWN0aW9uSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHByb2dyYW1EYXRhU3RvcmUuaW52YWxpZGF0ZUdyb3Vwc0NhY2hlKClcblxuICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLlNFVF9TT1VSQ0VfQ09MTEVDVElPTn1gXG4gICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCkpXG4gICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9JywgQXBpQ2xpZW50LmRldmljZUlkKCkpXG4gICAgICAgIC5yZXBsYWNlKCd7Y29sbGVjdGlvbklkfScsIGNvbGxlY3Rpb25JZCkpXG4gICAgQXBpQ2xpZW50LmFqYXgoe3R5cGU6ICdHRVQnLCB1cmx9KS5jYXRjaCgoZXg6IHVua25vd24pID0+IGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IHJlY29yZCBzb3VyY2UgY29sbGVjdGlvbiBmb3IgcGxheWJhY2sgc2Vzc2lvblwiLCBleCkpXG59XG5cbmZ1bmN0aW9uIGNsZWFyU291cmNlQ29sbGVjdGlvbigpOiB2b2lkIHtcbiAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKEVNUFRZX0dVSUQpXG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVTb3VyY2VDb2xsZWN0aW9uKGN1cnJlbnRSb3V0ZVBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFtjdXJyZW50UGF0aCwgY3VycmVudFF1ZXJ5XSA9IGN1cnJlbnRSb3V0ZVBhdGguc3BsaXQoJz8nKVxuICAgIGNvbnN0IHByZXZpb3VzUGF0aCA9IHByZXZpb3VzUm91dGVQYXRoPy5zcGxpdCgnPycpWzBdXG5cbiAgICBpZiAoY3VycmVudFBhdGggPT09IERBU0hCT0FSRF9ST1VURV9QQVRIKSB7XG4gICAgICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBudWxsXG4gICAgICAgIGNsZWFyU291cmNlQ29sbGVjdGlvbigpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjdXJyZW50UGF0aCA9PT0gREVUQUlMU19ST1VURV9QQVRIKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNJZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoY3VycmVudFF1ZXJ5ID8/ICcnKS5nZXQoJ2lkJylcbiAgICAgICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IG51bGxcbiAgICAgICAgaWYgKCFkZXRhaWxzSWQpIHJldHVyblxuXG4gICAgICAgIEFwaUNsaWVudC5nZXRJdGVtKEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCksIGRldGFpbHNJZCkudGhlbigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVR5cGU6IEl0ZW1UeXBlID0gSXRlbVR5cGVbaXRlbS5UeXBlIGFzIHVua25vd24gYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IGNvbGxlY3Rpb25MaWtlSXRlbVR5cGVzLmhhcyhpdGVtVHlwZSkgPyBkZXRhaWxzSWQgOiBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRQYXRoKSAmJiBwcmV2aW91c1BhdGggPT09IERFVEFJTFNfUk9VVEVfUEFUSCkge1xuICAgICAgICBpZiAocGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZClcbiAgICAgICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24ocGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2xlYXJTb3VyY2VDb2xsZWN0aW9uKClcbiAgICB9XG5cbiAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxufVxuXG4vLyBSZXRyaWV2ZSB0aGUgY3VycmVudCBjb2xsZWN0aW9uL3BsYXlsaXN0IGlkIHRocm91Z2ggYSBwbGF5IGFjdGlvbiBvbiBhIGNhcmQgdGhlIHNhbWUgd2F5IGFzIGhlbGx5ZmluIGRvZXMgaXQgaXRzZWxmXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamVsbHlmaW4vamVsbHlmaW4td2ViL2Jsb2IvcmVsZWFzZS0xMC4xMS56L3NyYy9jb21wb25lbnRzL3Nob3J0Y3V0cy5qcyNMMjE2XG5jb25zdCBQTEFZQkFDS19UUklHR0VSX0FDVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbJ3BsYXknLCAncmVzdW1lJywgJ3BsYXlhbGxmcm9taGVyZSddKVxuZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrQ2FwdHVyZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8vIEN5Y2xlIGdyb3VwIHN0YXQgZGlzcGxheSBtb2RlXG4gICAgY29uc3Qgd2F0Y2hlZENvdW50RWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5jbG9zZXN0Py48SFRNTEVsZW1lbnQ+KCcjcHJldmlld1BvcHVwIC5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQnKVxuICAgIGlmICh3YXRjaGVkQ291bnRFbGVtZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnN0IGdyb3VwRWxlbWVudCA9IHdhdGNoZWRDb3VudEVsZW1lbnQuY2xvc2VzdDxIVE1MRWxlbWVudD4oJ1tpZF49XCJncm91cC1cIl0nKVxuICAgICAgICBjb25zdCBncm91cCA9IGdyb3VwRWxlbWVudCA/IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmZpbmQoZyA9PiBgZ3JvdXAtJHtnLmdyb3VwSWR9YCA9PT0gZ3JvdXBFbGVtZW50LmlkKSA6IHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBcbiAgICAgICAgaWYgKGdyb3VwKSBjeWNsZVdhdGNoZWRDb3VudE1vZGUocHJvZ3JhbURhdGFTdG9yZSwgd2F0Y2hlZENvdW50RWxlbWVudCwgZ3JvdXApXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE9ubHkgY2FwdHVyZSBuYXRpdmUgZXZlbnRzIGFuZCBpZ25vcmUgYW55IGZyb20gdGhlIFByZXZpZXcgTGlzdFxuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8uY2xvc2VzdD8uKCcjcHJldmlld1BvcHVwJykpIHJldHVyblxuXG4gICAgY29uc3QgYWN0aW9uRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5jbG9zZXN0Py4oJ1tkYXRhLWFjdGlvbl0nKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcbiAgICBpZiAoIWFjdGlvbkVsZW1lbnQgfHwgIVBMQVlCQUNLX1RSSUdHRVJfQUNUSU9OUy5oYXMoYWN0aW9uRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJykpKSByZXR1cm5cblxuICAgIGNvbnN0IGNhcmQgPSBhY3Rpb25FbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLWlkXScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgIGlmICghY2FyZCkgcmV0dXJuXG5cbiAgICBjb25zdCBjaGlsZE9mQ29sbGVjdGlvbklkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGVjdGlvbmlkJykgPz8gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWxpc3RpZCcpXG4gICAgaWYgKGNoaWxkT2ZDb2xsZWN0aW9uSWQpIHtcbiAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihjaGlsZE9mQ29sbGVjdGlvbklkKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjYXJkSXRlbVR5cGU6IEl0ZW1UeXBlID0gSXRlbVR5cGVbY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpIGFzIHVua25vd24gYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgIGNvbnN0IGNhcmRJZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcbiAgICBpZiAoY2FyZElkICYmIGNvbGxlY3Rpb25MaWtlSXRlbVR5cGVzLmhhcyhjYXJkSXRlbVR5cGUpKSB7XG4gICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY2FyZElkKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgY2xlYXJTb3VyY2VDb2xsZWN0aW9uKClcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Eb2N1bWVudENsaWNrQ2FwdHVyZSwgdHJ1ZSlcblxuZnVuY3Rpb24gdmlld1Nob3dFdmVudEhhbmRsZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFJvdXRlUGF0aDogc3RyaW5nID0gZ2V0TG9jYXRpb25QYXRoKClcblxuICAgIGZ1bmN0aW9uIGdldExvY2F0aW9uUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsb2NhdGlvbjogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlSW5kZXg6IG51bWJlciA9IGxvY2F0aW9uLmxhc3RJbmRleE9mKCcvJylcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnN1YnN0cmluZyhjdXJyZW50Um91dGVJbmRleClcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsIGF0dGVtcHQgdG8gbG9hZCB0aGUgdmlkZW8gdmlldyBvciBzY2hlZHVsZSByZXRyaWVzLlxuICAgIGNhcHR1cmVTb3VyY2VDb2xsZWN0aW9uKGN1cnJlbnRSb3V0ZVBhdGgpXG4gICAgYXR0ZW1wdExvYWRWaWRlb1ZpZXcoKVxuICAgIHByZXZpb3VzUm91dGVQYXRoID0gY3VycmVudFJvdXRlUGF0aFxuICAgIFxuICAgIGZ1bmN0aW9uIGF0dGVtcHRMb2FkVmlkZW9WaWV3KCk6IHZvaWQge1xuICAgICAgICBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhjdXJyZW50Um91dGVQYXRoKSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByZXZpZXcgY29udGFpbmVyIGlzIGFscmVhZHkgbG9hZGVkIGJlZm9yZSBsb2FkaW5nXG4gICAgICAgICAgICBpZiAocHJldmlld0NvbnRhaW5lckxvYWRlZCB8fCBpc1ByZXZpZXdCdXR0b25DcmVhdGVkKCkpIHJldHVyblxuXG4gICAgICAgICAgICAvLyBSZXNlcnZlIGltbWVkaWF0ZWx5IHNvIGEgc2Vjb25kIHZpZXdzaG93IGRvZXNuJ3QgcXVldWUgYW5vdGhlciB3YWl0XG4gICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gdHJ1ZVxuICAgICAgICAgICAgd2FpdEZvckJ1dHRvbnNDb250YWluZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIG5hdmlnYXRlZCBiYWNrIG91dCBvZiB0aGUgcGxheWVyKSB3aGlsZSB3ZSB3ZXJlIHdhaXRpbmdcbiAgICAgICAgICAgICAgICBpZiAoIXZpZGVvUGF0aHMuaW5jbHVkZXMoZ2V0TG9jYXRpb25QYXRoKCkpIHx8IGlzUHJldmlld0J1dHRvbkNyZWF0ZWQoKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgbG9hZFZpZGVvVmlldygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMocHJldmlvdXNSb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICB1bmxvYWRWaWRlb1ZpZXcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGxvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIkxvYWRpbmcgdmlkZW8gdmlld1wiKVxuXG4gICAgICAgIGxldCBwcmV2aWV3QnV0dG9uOiBQcmV2aWV3QnV0dG9uVGVtcGxhdGUgfCBudWxsID0gbnVsbFxuICAgICAgICBsZXQgcHJldmlld0J1dHRvbkxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgICAgIC8vIE9ubHkgYWN0dWFsbHkgaW5zZXJ0ZWQgaW50byB0aGUgT1NEIG9uY2UgdGhlIGl0ZW0ncyB0eXBlIGlzIGNvbmZpcm1lZCBlbmFibGVkIC0gc2VlIHByZWxvYWRQcmV2aWV3RGF0YS5cbiAgICAgICAgZnVuY3Rpb24gaW5zZXJ0UHJldmlld0J1dHRvbigpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmIChwcmV2aWV3QnV0dG9uKSByZXR1cm5cbiAgICAgICAgICAgIGlmICghdmlkZW9QYXRocy5pbmNsdWRlcyhnZXRMb2NhdGlvblBhdGgoKSkpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBidXR0b25zQmFyID0gZ2V0QWN0aXZlQnV0dG9uc0JhcigpXG4gICAgICAgICAgICBpZiAoIWJ1dHRvbnNCYXIpIHtcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQnV0dG9uc0NvbnRhaW5lcihpbnNlcnRQcmV2aWV3QnV0dG9uKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsYXN0RWxlbWVudENoaWxkLnBhcmVudEVsZW1lbnQgaXMgdXNlZCBmb3IgY2FzdGluZyBmcm9tIEVsZW1lbnQgdG8gSFRNTEVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudDogSFRNTEVsZW1lbnQgPSBidXR0b25zQmFyLmxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikuZmluZEluZGV4KChjaGlsZDogRWxlbWVudCk6IGJvb2xlYW4gPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuVXNlclJhdGluZ1wiKSk7XG4gICAgICAgICAgICAvLyBpZiBpbmRleCBpcyBpbnZhbGlkIHRyeSB0byB1c2UgdGhlIG9sZCBwb3NpdGlvbiAodXNlZCBpbiBKZWxseWZpbiAxMC44LjEyKVxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSlcbiAgICAgICAgICAgICAgICBpbmRleCA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvc2RUaW1lVGV4dFwiKSlcblxuICAgICAgICAgICAgcHJldmlld0J1dHRvbiA9IG5ldyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUocGFyZW50LCBpbmRleClcbiAgICAgICAgICAgIHByZXZpZXdCdXR0b24ucmVuZGVyKHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIpXG4gICAgICAgICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxWaWRlb0VsZW1lbnQ+KCd2aWRlby5odG1sdmlkZW9wbGF5ZXInKVxuICAgICAgICAgICAgdmlkZW9FbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgb25WaWRlb1RpbWVVcGRhdGUpXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3JhdGVjaGFuZ2UnLCBvblZpZGVvUmF0ZUNoYW5nZSlcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcignZW1wdGllZCcsIG9uVmlkZW9FbXB0aWVkKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmV0Y2hQcmV2aWV3SXRlbVR5cGUgPSBhc3luYyAoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPEl0ZW1UeXBlPiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX1BSRVZJRVdfVFlQRX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9JywgQXBpQ2xpZW50LmRldmljZUlkKCkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICAgICAgICAgIGNvbnN0IHJhd1R5cGU6IHN0cmluZyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgcmV0dXJuIEl0ZW1UeXBlW3Jhd1R5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9hZEl0ZW1QcmV2aWV3RGF0YSA9IGFzeW5jIChpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8e1xuICAgICAgICAgICAgaXRlbVR5cGU6IHN0cmluZywgY29udGFpbmVyTmFtZTogc3RyaW5nIHwgbnVsbCwgZ3JvdXBzOiBHcm91cFtdLCBhY3RpdmVHcm91cElkOiBzdHJpbmcsIGFjdGl2ZUl0ZW1JbmRleDogbnVtYmVyXG4gICAgICAgIH0+ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKClcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLklURU1fUFJFVklFV19EQVRBfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCB1c2VySWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tkZXZpY2VJZH0nLCBBcGlDbGllbnQuZGV2aWNlSWQoKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2l0ZW1JZH0nLCBpdGVtSWQpKVxuICAgICAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiByYXcuSXRlbVR5cGUsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyTmFtZTogcmF3LkNvbnRhaW5lck5hbWUsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiByYXcuR3JvdXBzLm1hcCgoZzogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZTogZy5Hcm91cE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHBsYXllZEl0ZW1Db3VudDogZy5QbGF5ZWRJdGVtQ291bnQsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbUNvdW50OiBnLlRvdGFsSXRlbUNvdW50LFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IGcuUGxheWVkUnVudGltZVRpY2tzLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbFJ1bnRpbWVUaWNrczogZy5Ub3RhbFJ1bnRpbWVUaWNrc1xuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkOiByYXcuQWN0aXZlR3JvdXBJZCxcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtSW5kZXg6IHJhdy5BY3RpdmVJdGVtSW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRHcm91cEl0ZW1zID0gYXN5bmMgKGdyb3VwSWQ6IHN0cmluZywgc3RhcnRJbmRleDogbnVtYmVyID0gMCwgbGltaXQ6IG51bWJlciA9IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplKTogUHJvbWlzZTxHcm91cEl0ZW1zUmVzdWx0PiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5HUk9VUF9JVEVNU31gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7Z3JvdXBJZH0nLCBncm91cElkKSxcbiAgICAgICAgICAgICAgICB7IHN0YXJ0SW5kZXgsIGxpbWl0IH0pXG4gICAgICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogR3JvdXBJdGVtc1Jlc3VsdCA9IHsgaXRlbXM6IHJhdy5JdGVtcywgdG90YWxSZWNvcmRDb3VudDogcmF3LlRvdGFsUmVjb3JkQ291bnQgfVxuXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnJlY29yZExvYWRlZEl0ZW1zKGdyb3VwSWQsIHJlc3VsdC5pdGVtcywgc3RhcnRJbmRleCwgcmVzdWx0LnRvdGFsUmVjb3JkQ291bnQpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHByZWxvYWRQcmV2aWV3RGF0YShpdGVtSWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmICghaXRlbUlkKSByZXR1cm5cbiAgICAgICAgICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5pc0dyb3Vwc0NhY2hlRXhwaXJlZCAmJiBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5zb21lKGcgPT4gZy5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBBbHJlYWR5IGZldGNoZWQgKGFuZCB0aGVyZWZvcmUgYWxyZWFkeSBrbm93bi1hbGxvd2VkKSBlYXJsaWVyIHRoaXMgc2Vzc2lvbiAtIGp1c3Qgc2hvdyB0aGUgYnV0dG9uLlxuICAgICAgICAgICAgICAgIGluc2VydFByZXZpZXdCdXR0b24oKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBlbmRpbmdQcmVsb2FkSXRlbUlkID09PSBpdGVtSWQpIHJldHVyblxuXG4gICAgICAgICAgICBwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9IGl0ZW1JZFxuICAgICAgICAgICAgcGVuZGluZ1ByZWxvYWQgPSAoYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpZXdUeXBlID0gYXdhaXQgZmV0Y2hQcmV2aWV3SXRlbVR5cGUoaXRlbUlkKVxuICAgICAgICAgICAgICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5pc1R5cGVBbGxvd2VkRm9yUHJldmlldyhwcmV2aWV3VHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBQcmV2aWV3IG5vdCBlbmFibGVkIGZvciBpdGVtIHR5cGUgJyR7cHJldmlld1R5cGV9Jywgc2tpcHBpbmcgYnV0dG9uIGZvciBpdGVtICR7aXRlbUlkfWApXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGluc2VydFByZXZpZXdCdXR0b24oKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpdGVtVHlwZSwgY29udGFpbmVyTmFtZSwgZ3JvdXBzLCBhY3RpdmVHcm91cElkLCBhY3RpdmVJdGVtSW5kZXggfSA9IGF3YWl0IGxvYWRJdGVtUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gZ3JvdXBzXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5tYXJrR3JvdXBzRmV0Y2hlZCgpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS50eXBlID0gSXRlbVR5cGVbaXRlbVR5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSA9IGNvbnRhaW5lck5hbWUgPz8gJydcblxuICAgICAgICAgICAgICAgIGNvbnN0IFBBR0VfU0laRSA9IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZU9mQWN0aXZlRXBpc29kZSA9IE1hdGguZmxvb3IoYWN0aXZlSXRlbUluZGV4IC8gUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgLSAxKSAqIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93TGltaXQgPSAocGFnZU9mQWN0aXZlRXBpc29kZSArIDIpICogUEFHRV9TSVpFIC0gaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXhcblxuICAgICAgICAgICAgICAgIGF3YWl0IGxvYWRHcm91cEl0ZW1zKGFjdGl2ZUdyb3VwSWQsIGluaXRpYWxXaW5kb3dTdGFydEluZGV4LCBpbml0aWFsV2luZG93TGltaXQpXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBQcmVsb2FkZWQgJHtncm91cHMubGVuZ3RofSBncm91cChzKSBmb3IgaXRlbSAke2l0ZW1JZH1gKVxuICAgICAgICAgICAgfSkoKS5jYXRjaCgoZXg6IHVua25vd24pID0+IHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBwcmVsb2FkIHByZXZpZXcgZGF0YVwiLCBleClcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkKSBwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9IG51bGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBXYWl0IHRoYXQgZGF0YS1pZCBnZXRzIHBvcHVsYXRlZCBieSBKZWxseWZpblxuICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVByZWxvYWQoKTogdm9pZCB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKClcbiAgICAgICAgICAgIGlmIChpdGVtSWQpIHtcbiAgICAgICAgICAgICAgICBwcmVsb2FkUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBnZXRBY3RpdmVSYXRpbmdCdXR0b24oKVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgcmF0aW5nIGJ1dHRvbiBpdHNlbGYgaGFzbid0IGJlZW4gY3JlYXRlZCB5ZXQgLSB3YWl0IGZvciB0aGUgT1NEIHRvIGZpbmlzaCBidWlsZGluZyBpdCwgdGhlbiByZXRyeS5cbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXRBY3RpdmVSYXRpbmdCdXR0b24oKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlciA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVQcmVsb2FkKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlcj8uZGlzY29ubmVjdCgpXG4gICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcbiAgICAgICAgICAgICAgICBpZiAoIWlkKSByZXR1cm5cbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlciA9IG51bGxcbiAgICAgICAgICAgICAgICBwcmVsb2FkUHJldmlld0RhdGEoaWQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLWlkJ10gfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNjaGVkdWxlUHJlbG9hZCgpXG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcHJldmlld0J1dHRvbkNsaWNrSGFuZGxlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGlmIChwcmV2aWV3QnV0dG9uTG9hZGluZykgcmV0dXJuXG4gICAgICAgICAgICBwcmV2aWV3QnV0dG9uTG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZG9QcmV2aWV3QnV0dG9uQ2xpY2soKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBvcGVuIHByZXZpZXcgcG9wdXBcIiwgZXgpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdQb3B1cCcpPy5yZW1vdmUoKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3QnV0dG9uTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkb1ByZXZpZXdCdXR0b25DbGljaygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwZXJpbWVudGFsIGFuZCB3aWxsIG1heWJlIGJlIHVzZWQgaW4gZnV0dXJlIHJlbGVhc2VzXG4gICAgICAgICAgICBjb25zdCBnZXROb3dQbGF5aW5nSXRlbUlkRnJvbVNlc3Npb24gPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuTk9XX1BMQVlJTkdfSVRFTX1gKVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCByZXNvbHZlIG5vdy1wbGF5aW5nIGl0ZW0gZnJvbSBzZXNzaW9uLCBmYWxsaW5nIGJhY2sgdG8gT1NEIHJhdGluZyBidXR0b25cIiwgZXgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dDb250YWluZXI6IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlID0gbmV3IERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlKGRvY3VtZW50LmJvZHksIGRvY3VtZW50LmJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIGRpYWxvZ0NvbnRhaW5lci5yZW5kZXIoKVxuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbnRlbnRDb250YWluZXInKVxuXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKClcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gcmVzcG9uc2Ugb2YgdGhlIE9TRCdzIHByZWxvYWQgb2YgdGhpcyBzYW1lIGl0ZW0sIHdhaXQgZm9yIGl0IGluc3RlYWQgb2YgZmlyaW5nIGEgZHVwbGljYXRlIGZldGNoLlxuICAgICAgICAgICAgaWYgKHBlbmRpbmdQcmVsb2FkSXRlbUlkID09PSBpdGVtSWQgJiYgcGVuZGluZ1ByZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicHJldmlld1Njcm9sbFNwaW5uZXJcIj4ke3NwaW5uZXJIdG1sKCl9PC9kaXY+YFxuICAgICAgICAgICAgICAgIGFjdGl2YXRlU3Bpbm5lcihjb250ZW50RGl2KVxuICAgICAgICAgICAgICAgIGF3YWl0IHBlbmRpbmdQcmVsb2FkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZEdyb3VwID0gIXByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWRcbiAgICAgICAgICAgICAgICA/IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmZpbmQoZyA9PiBnLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpKVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgICAgICAgIGxldCBhY3RpdmVHcm91cElkOiBzdHJpbmdcbiAgICAgICAgICAgIGxldCBpbml0aWFsUGFnZTogR3JvdXBJdGVtc1Jlc3VsdFxuICAgICAgICAgICAgbGV0IGluaXRpYWxXaW5kb3dTdGFydEluZGV4OiBudW1iZXJcblxuICAgICAgICAgICAgaWYgKGNhY2hlZEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBPcGVuaW5nIHByZXZpZXcgcG9wdXAgZm9yIGl0ZW0gJHtpdGVtSWR9IHVzaW5nIGNhY2hlZCBncm91cCBkYXRhYClcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkID0gY2FjaGVkR3JvdXAuZ3JvdXBJZFxuICAgICAgICAgICAgICAgIGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gY2FjaGVkR3JvdXAubG9hZGVkU3RhcnRJbmRleCA/PyAwXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2UgPSB7IGl0ZW1zOiBbLi4uY2FjaGVkR3JvdXAuaXRlbXNdLCB0b3RhbFJlY29yZENvdW50OiBjYWNoZWRHcm91cC5sb2FkZWRUb3RhbFJlY29yZENvdW50ID8/IGNhY2hlZEdyb3VwLml0ZW1zLmxlbmd0aCB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgT3BlbmluZyBwcmV2aWV3IHBvcHVwIGZvciBpdGVtICR7aXRlbUlkfSwgZmV0Y2hpbmcgZ3JvdXAgZGF0YWApXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByZXZpZXdTY3JvbGxTcGlubmVyXCI+JHtzcGlubmVySHRtbCgpfTwvZGl2PmBcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoY29udGVudERpdilcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbVR5cGUsIGNvbnRhaW5lck5hbWUsIGdyb3VwcywgYWN0aXZlR3JvdXBJZDogZmV0Y2hlZEFjdGl2ZUdyb3VwSWQsIGFjdGl2ZUl0ZW1JbmRleCB9ID0gYXdhaXQgbG9hZEl0ZW1QcmV2aWV3RGF0YShpdGVtSWQpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBncm91cHNcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLm1hcmtHcm91cHNGZXRjaGVkKClcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPSBJdGVtVHlwZVtpdGVtVHlwZSBhcyBrZXlvZiB0eXBlb2YgSXRlbVR5cGVdXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ib3hTZXROYW1lID0gY29udGFpbmVyTmFtZSA/PyAnJ1xuICAgICAgICAgICAgICAgIGFjdGl2ZUdyb3VwSWQgPSBmZXRjaGVkQWN0aXZlR3JvdXBJZFxuXG4gICAgICAgICAgICAgICAgLy8gTG9hZCBhIDMtcGFnZSB3aW5kb3cgKHBhZ2Ugb2YgdGhlIGFjdGl2ZSBlcGlzb2RlLCBwbHVzIG9uZSBwYWdlIGJlZm9yZSBhbmQgYWZ0ZXIpXG4gICAgICAgICAgICAgICAgY29uc3QgUEFHRV9TSVpFID0gcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FcGlzb2RlUGFnZVNpemVcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlT2ZBY3RpdmVFcGlzb2RlID0gTWF0aC5mbG9vcihhY3RpdmVJdGVtSW5kZXggLyBQQUdFX1NJWkUpXG4gICAgICAgICAgICAgICAgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXggPSBNYXRoLm1heCgwLCAocGFnZU9mQWN0aXZlRXBpc29kZSAtIDEpICogUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxXaW5kb3dMaW1pdCA9IChwYWdlT2ZBY3RpdmVFcGlzb2RlICsgMikgKiBQQUdFX1NJWkUgLSBpbml0aWFsV2luZG93U3RhcnRJbmRleFxuXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2UgPSBhd2FpdCBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBpbml0aWFsV2luZG93U3RhcnRJbmRleCwgaW5pdGlhbFdpbmRvd0xpbWl0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBpdGVtSWRcbiAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCA9IGFjdGl2ZUdyb3VwSWRcblxuICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJyAvLyByZW1vdmUgdGhlIGxvYWRpbmcgc3Bpbm5lclxuICAgICAgICAgICAgY29uc3Qgdmlld1Rva2VuID0gcHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBpc1N0YW5kYWxvbmVNb3ZpZSA9IHByb2dyYW1EYXRhU3RvcmUudHlwZSA9PT0gSXRlbVR5cGUuTW92aWVcbiAgICAgICAgICAgIGNvbnN0IGlzU291cmNlZEZyb21Db2xsZWN0aW9uID0gcHJvZ3JhbURhdGFTdG9yZS50eXBlID09PSBJdGVtVHlwZS5QbGF5bGlzdCB8fCBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPT09IEl0ZW1UeXBlLkJveFNldFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaXNTdGFuZGFsb25lTW92aWUgJiYgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLm1hcCgoZywgaSkgPT4gaSA9PT0gMCAmJiBnLmdyb3VwSWQgPT09IGl0ZW1JZCA/IHsgLi4uZywgZ3JvdXBOYW1lOiBTRUFSQ0hfQ09MTEVDVElPTlNfR1JPVVBfTkFNRSB9IDogZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaXNTZWFyY2hpbmdDb2xsZWN0aW9ucyA9IChpc1N0YW5kYWxvbmVNb3ZpZSB8fCBpc1NvdXJjZWRGcm9tQ29sbGVjdGlvbikgJiYgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnMgJiYgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICBsZXQgY29sbGVjdGlvbnNTZWFyY2hEb25lID0gIWlzU2VhcmNoaW5nQ29sbGVjdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zU2VhcmNoOiBQcm9taXNlPHZvaWQ+ID0gaXNTZWFyY2hpbmdDb2xsZWN0aW9uc1xuICAgICAgICAgICAgICAgID8gZ2V0Q29udGFpbmluZ0NvbGxlY3Rpb25zKGl0ZW1JZCkudGhlbihjb2xsZWN0aW9uR3JvdXBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2xsZWN0aW9uR3JvdXBzLmxlbmd0aCB8fCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQgIT09IGl0ZW1JZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGZHcm91cCA9IHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzWzBdXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4Y2x1ZGUgdGhlIGNvbGxlY3Rpb24vcGxheWxpc3QgdGhpcyBpdGVtIHdhcyBhbHJlYWR5IHBsYXllZCBmcm9tIC0gaXQncyBhbHJlYWR5IHRoZSBhY3RpdmUvZGVmYXVsdCBncm91cC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R3JvdXBzID0gY29sbGVjdGlvbkdyb3Vwcy5maWx0ZXIoZyA9PiBnLmdyb3VwSWQgIT09IHNlbGZHcm91cC5ncm91cElkKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld0dyb3Vwcy5sZW5ndGgpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IFtzZWxmR3JvdXAsIC4uLm5ld0dyb3Vwc10ubWFwKChnLCBpKSA9PiAoeyAuLi5nLCBpbmRleE51bWJlcjogaSB9KSlcbiAgICAgICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHsgY29sbGVjdGlvbnNTZWFyY2hEb25lID0gdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKClcblxuICAgICAgICAgICAgY29uc3QgY2FuU3dpdGNoR3JvdXBzID0gKCk6IGJvb2xlYW4gPT4gcHJvZ3JhbURhdGFTdG9yZS50eXBlICE9PSBJdGVtVHlwZS5Nb3ZpZSB8fCBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9uc1xuXG4gICAgICAgICAgICBjb25zdCBwb3B1cFRpdGxlOiBQb3B1cFRpdGxlVGVtcGxhdGUgPSBuZXcgUG9wdXBUaXRsZVRlbXBsYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cEZvY3VzQ29udGFpbmVyJyksIC0xLCBwcm9ncmFtRGF0YVN0b3JlKVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5yZW5kZXIoYXN5bmMgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgaWYgKCFjYW5Td2l0Y2hHcm91cHMoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQ29udGVudENvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUdyb3VwRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5ncm91cHMsIGNvbnRlbnREaXYsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXAuaW5kZXhOdW1iZXIsIHBvcHVwVGl0bGUsIGxvYWRHcm91cEl0ZW1zKVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwVmlld1Rva2VuID0gcHJvZ3JhbURhdGFTdG9yZS5jdXJyZW50Vmlld1Rva2VuXG5cbiAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbnNTZWFyY2hEb25lKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgncHJldmlld1Njcm9sbFNwaW5uZXInKVxuICAgICAgICAgICAgICAgIHNwaW5uZXIuaW5uZXJIVE1MID0gc3Bpbm5lckh0bWwoKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoc3Bpbm5lcilcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoc3Bpbm5lcilcblxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbGxlY3Rpb25zU2VhcmNoXG4gICAgICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYSBncm91cCB3YXMgc2VsZWN0ZWQsIG9yIHRoZSBwb3B1cCBjbG9zZWQpIHdoaWxlIHRoaXMgd2FzIGxvYWRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcoZ3JvdXBWaWV3VG9rZW4pKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUdyb3VwRWxlbWVudHMocHJvZ3JhbURhdGFTdG9yZS5ncm91cHMsIGNvbnRlbnREaXYsIHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXAuaW5kZXhOdW1iZXIsIHBvcHVwVGl0bGUsIGxvYWRHcm91cEl0ZW1zKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0U3dpdGNoYWJsZShjYW5Td2l0Y2hHcm91cHMoKSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VmlzaWJsZShjYW5Td2l0Y2hHcm91cHMoKSlcblxuICAgICAgICAgICAgYXdhaXQgbGlzdEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUxhenlJdGVtTGlzdChjb250ZW50RGl2LCAoc3RhcnRJbmRleCkgPT4gbG9hZEdyb3VwSXRlbXMoYWN0aXZlR3JvdXBJZCwgc3RhcnRJbmRleCksIHZpZXdUb2tlbiwgaW5pdGlhbFBhZ2UsIGluaXRpYWxXaW5kb3dTdGFydEluZGV4KVxuICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRUZXh0KHByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXA/Lmdyb3VwTmFtZSA/PyAnJylcbiAgICAgICAgICAgIGlmIChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKSBwb3B1cFRpdGxlLnNldFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKVxuICAgICAgICAgICAgaWYgKHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCAmJiBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwPy5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCkge1xuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5lbnN1cmVHcm91cFdhdGNoZWRDb3VudChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwKVxuICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHBvcHVwVGl0bGUuc2V0V2F0Y2hlZENvdW50KHVwZGF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgd2F0Y2hlZCBjb3VudCBmb3IgZ3JvdXAgJHtwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwPy5ncm91cElkfWAsIGV4KSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRoZSBpdGVtIHRoYXQgaXMgY3VycmVudGx5IHBsYXlpbmdcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSBjb250ZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZExpc3RJdGVtJykgXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBmaW5kIGFjdGl2ZSBtZWRpYSBzb3VyY2UgZWxlbWVudCBpbiBwcmV2aWV3IGxpc3QuIFRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlblwiLCBwcm9ncmFtRGF0YVN0b3JlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aXZlSXRlbT8ucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdW5sb2FkVmlkZW9WaWV3KCk6IHZvaWQge1xuICAgICAgICBsb2dnZXIuZGVidWcoXCJVbmxvYWRpbmcgdmlkZW8gdmlld1wiKVxuXG4gICAgICAgIC8vIENsZWFyIG9sZCBkYXRhIGFuZCByZXNldCBwcmV2aWV3Q29udGFpbmVyTG9hZGVkIGZsYWdcbiAgICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJylcbiAgICAgICAgdmlkZW9FbGVtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgb25WaWRlb1RpbWVVcGRhdGUpXG4gICAgICAgIHZpZGVvRWxlbWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmF0ZWNoYW5nZScsIG9uVmlkZW9SYXRlQ2hhbmdlKVxuICAgICAgICB2aWRlb0VsZW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VtcHRpZWQnLCBvblZpZGVvRW1wdGllZClcbiAgICAgICAgc3RvcFdhaXRpbmdGb3JJdGVtU3dpdGNoKClcbiAgICAgICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IC0xXG5cbiAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgcHJlbG9hZE9ic2VydmVyID0gbnVsbFxuICAgICAgICBwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9IG51bGxcbiAgICAgICAgcGVuZGluZ1ByZWxvYWQgPSBudWxsXG5cbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyID0gbnVsbFxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BvcHVwUHJldmlld0J1dHRvbicpLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZSgpKVxuXG4gICAgICAgIHByZXZpZXdDb250YWluZXJMb2FkZWQgPSBmYWxzZSAvLyBSZXNldCBmbGFnIHdoZW4gdW5sb2FkaW5nXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGdldEFjdGl2ZUJ1dHRvbnNCYXIoKT8ucXVlcnlTZWxlY3RvcignI3BvcHVwUHJldmlld0J1dHRvbicpICE9IG51bGxcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9