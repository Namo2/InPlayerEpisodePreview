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
`, "",{"version":3,"sources":["webpack://./Web/Styles/Styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,0DAA0D;IAC1D,eAAe;IACf,WAAW;IACX,aAAa;IACb,UAAU;IACV,WAAW;AACf;AACA;IACI,eAAe;AACnB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,gCAAgC;IAChC,gEAAgE;AACpE;AACA;IACI,UAAU;AACd;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,0CAA0C;IAC1C,kBAAkB;AACtB;AACA;IACI,0CAA0C;AAC9C;AACA;IACI,iBAAiB;AACrB;AACA;IACI,WAAW;AACf;AACA;IACI,oBAAoB;AACxB;AACA;IACI,cAAc;AAClB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,0BAA0B;IAC1B,eAAe;IACf,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA,sEAAsE;AACtE;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,2BAA2B;IAC3B,wBAAwB;AAC5B;AACA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,qBAAqB;AACzB;AACA;IACI,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,qBAAqB;IACrB,oBAAoB;IACpB,wBAAwB;IACxB,yBAAyB;IACzB,wBAAwB;AAC5B","sourcesContent":[".selectedListItem {\n    height: auto;\n}\n.previewListItem {\n    flex-direction: column;\n    align-items: flex-start;\n}\n.previewListItemContent {\n    width: 100%;\n    min-height: 15.5vh;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n}\n.previewListItem-sideBySide {\n    margin-bottom: 1em;\n}\n.previewListItem-sideBySide .previewItemTitle .actionSheetItemText {\n    font-size: 1.3em;\n}\n.previewListItem-sideBySide .previewItemDescription {\n    margin-top: 1em;\n}\n.previewListItem-sideBySide .previewListItemContent .itemMiscInfo.previewItemDetails {\n    margin-left: 0.5em !important;\n}\n.previewPopup {\n    animation: 140ms ease-out 0s 1 normal both running scaleup;\n    position: fixed;\n    margin: 0px;\n    bottom: 1.5vh;\n    left: 50vw;\n    width: 48vw;\n}\n.previewPopupTitle {\n    max-height: 4vh;\n}\n.previewPopupTitle h1.actionSheetTitle {\n    margin-left: 0 !important;\n}\n.previewGroupWatchedCount {\n    margin-left: auto;\n    margin-right: 1em;\n    padding-left: 1em;\n    white-space: nowrap;\n    opacity: 0.7;\n    display: flex;\n    align-items: center;\n}\n.previewPopupScroller {\n    max-height: 60vh;\n    scrollbar-width: thin !important;\n    scrollbar-color: rgba(255, 255, 255, 0.4) transparent !important;\n}\n.previewPopupScroller::-webkit-scrollbar {\n    width: 8px;\n}\n.previewPopupScroller::-webkit-scrollbar-track {\n    background: transparent;\n}\n.previewPopupScroller::-webkit-scrollbar-thumb {\n    background-color: rgba(255, 255, 255, 0.4);\n    border-radius: 4px;\n}\n.previewPopupScroller::-webkit-scrollbar-thumb:hover {\n    background-color: rgba(255, 255, 255, 0.6);\n}\n.previewQuickActionContainer {\n    margin-left: auto;\n}\n.previewItemContainer {\n    width: 100%;\n}\n.previewItemTitle {\n    pointer-events: none;\n}\n.previewItemImageCard {\n    max-width: 30%;\n}\n.previewItemContentRow {\n    align-items: flex-start;\n}\n.previewItemDescriptionColumn {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    min-width: 0;\n}\n.previewItemDescription {\n    margin-left: 0.5em;\n    margin-top: 0.5em;\n    margin-right: 1.5em;\n    display: block;\n    overflow: hidden;\n    max-height: 150px;\n}\n.previewItemDescription.expanded {\n    max-height: none;\n}\n.previewItemReadMoreButton {\n    align-self: flex-start;\n    margin-left: 0.5em;\n    margin-top: 0.25em;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n    font-size: 0.9em;\n    opacity: 0.75;\n}\n.previewItemReadMoreButton:hover {\n    opacity: 1;\n}\n.previewItemDetails {\n    margin-left: 1em;\n    justify-content: start !important;\n}\n\n/* Lock the position of this details, so that no theme can change it */\n.previewListItemContent .itemMiscInfo.previewItemDetails {\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    right: auto !important;\n    bottom: auto !important;\n    transform: none !important;\n    margin-left: 1em !important;\n    margin-top: 0 !important;\n}\n.blur {\n    filter: blur(6px);\n    transition: filter 0.3s ease;\n    display: inline-block;\n}\n.blur:hover {\n    filter: blur(0);\n}\n.previewItemImageCard .blur {\n    filter: blur(32px);\n}\n.previewItemImageCard:hover .blur {\n    filter: blur(0);\n}\n.previewScrollSpinner {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1em 0;\n}\n.previewScrollSpinner .docspinner {\n    position: relative !important;\n    top: auto !important;\n    left: auto !important;\n    margin: 0 !important;\n    width: 1.95em !important;\n    height: 1.95em !important;\n    z-index: auto !important;\n}\n"],"sourceRoot":""}]);
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
const setItemOverlayActive = (itemId, isActive) => { var _a; return (_a = document.getElementById(`cardOverlay-${itemId}`)) === null || _a === void 0 ? void 0 : _a.classList.toggle('hide', isActive); };
exports.setItemOverlayActive = setItemOverlayActive;
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
                ${(_a = this.item.Description) !== null && _a !== void 0 ? _a : ''}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxVQUFVLEtBQUssT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHO1NBQ3ZFO1FBQ0QsT0FBTyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO0tBQ3REO0lBRUQsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pELE9BQU8sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEtBQUssTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHO0tBQ3RFO0lBQ0QsSUFBSSxXQUFXLElBQUksQ0FBQyxFQUFFO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLFNBQVMsR0FBRyxFQUFFO1FBQzNCLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxJQUFJO0tBQ3JFO0lBQ0QsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO1FBQ2hCLE1BQU0sS0FBSyxHQUFHLFVBQVUsR0FBRyxFQUFFO1FBQzdCLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHO0tBQ2pFO0lBQ0QsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLFlBQVksR0FBRyxFQUFFO1FBQ2pDLE9BQU8sT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEtBQUssT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHO0tBQ3ZFO0lBQ0QsT0FBTyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxH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QUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXJGLHNCQUFzQixHQUFHLEtBQUssRUFBQyw0QkFBNEI7SUFDL0QsQ0FBQztJQUVELFNBQVMsc0JBQXNCOztRQUMzQixPQUFPLDBCQUFtQixFQUFFLDBDQUFFLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFJLElBQUk7SUFDOUUsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9XZWIvU3R5bGVzL1N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9XZWIvU3R5bGVzL1N0eWxlcy5jc3M/ODQwZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL0Jhc2VUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Hcm91cExpc3RFbGVtZW50VGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvSXRlbURldGFpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvTGlzdEVsZW1lbnRUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0NvbXBvbmVudHMvUHJldmlld0J1dHRvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9XZWIvQ29tcG9uZW50cy9RdWlja0FjdGlvbnMvUGxheVN0YXRlSWNvblRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL1dlYi9Db21wb25lbnRzL1NwaW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL0VuZHBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTGlzdEVsZW1lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvRXhwYW5kZWRJdGVtTGF5b3V0LnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvSXRlbVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9Mb2dMZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9XZWIvTW9kZWxzL1BsdWdpblNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzLnRzIiwid2VicGFjazovLy8uL1dlYi9Nb2RlbHMvU2VydmVyU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL01vZGVscy9XYXRjaENvdW50RGlzcGxheU1vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL0RhdGFGZXRjaGVyLnRzIiwid2VicGFjazovLy8uL1dlYi9TZXJ2aWNlcy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9XZWIvU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9XZWIvSW5QbGF5ZXJQcmV2aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VsZWN0ZWRMaXN0SXRlbSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLnByZXZpZXdMaXN0SXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxNS41dmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuLnByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlIC5wcmV2aWV3SXRlbVRpdGxlIC5hY3Rpb25TaGVldEl0ZW1UZXh0IHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xufVxuLnByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlIC5wcmV2aWV3SXRlbURlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUgLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQgLml0ZW1NaXNjSW5mby5wcmV2aWV3SXRlbURldGFpbHMge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbSAhaW1wb3J0YW50O1xufVxuLnByZXZpZXdQb3B1cCB7XG4gICAgYW5pbWF0aW9uOiAxNDBtcyBlYXNlLW91dCAwcyAxIG5vcm1hbCBib3RoIHJ1bm5pbmcgc2NhbGV1cDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm90dG9tOiAxLjV2aDtcbiAgICBsZWZ0OiA1MHZ3O1xuICAgIHdpZHRoOiA0OHZ3O1xufVxuLnByZXZpZXdQb3B1cFRpdGxlIHtcbiAgICBtYXgtaGVpZ2h0OiA0dmg7XG59XG4ucHJldmlld1BvcHVwVGl0bGUgaDEuYWN0aW9uU2hlZXRUaXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlciB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcbiAgICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi5wcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnByZXZpZXdJdGVtQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5wcmV2aWV3SXRlbVRpdGxlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5wcmV2aWV3SXRlbUltYWdlQ2FyZCB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG59XG4ucHJldmlld0l0ZW1Db250ZW50Um93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG59XG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uLmV4cGFuZGVkIHtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xufVxuLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b24ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5wcmV2aWV3SXRlbURldGFpbHMge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydCAhaW1wb3J0YW50O1xufVxuXG4vKiBMb2NrIHRoZSBwb3NpdGlvbiBvZiB0aGlzIGRldGFpbHMsIHNvIHRoYXQgbm8gdGhlbWUgY2FuIGNoYW5nZSBpdCAqL1xuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQgLml0ZW1NaXNjSW5mby5wcmV2aWV3SXRlbURldGFpbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4uYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDZweCk7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYmx1cjpob3ZlciB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xufVxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkIC5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoMzJweCk7XG59XG4ucHJldmlld0l0ZW1JbWFnZUNhcmQ6aG92ZXIgLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbn1cbi5wcmV2aWV3U2Nyb2xsU3Bpbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFlbSAwO1xufVxuLnByZXZpZXdTY3JvbGxTcGlubmVyIC5kb2NzcGlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEuOTVlbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMS45NWVtICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogYXV0byAhaW1wb3J0YW50O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9XZWIvU3R5bGVzL1N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwwREFBMEQ7SUFDMUQsZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsZ0VBQWdFO0FBQ3BFO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsT0FBTztJQUNQLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUEsc0VBQXNFO0FBQ3RFO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWxlY3RlZExpc3RJdGVtIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ucHJldmlld0xpc3RJdGVtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDE1LjV2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJldmlld0xpc3RJdGVtLXNpZGVCeVNpZGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0l0ZW1UaXRsZSAuYWN0aW9uU2hlZXRJdGVtVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcbi5wcmV2aWV3TGlzdEl0ZW0tc2lkZUJ5U2lkZSAucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLnByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlIC5wcmV2aWV3TGlzdEl0ZW1Db250ZW50IC5pdGVtTWlzY0luZm8ucHJldmlld0l0ZW1EZXRhaWxzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV2aWV3UG9wdXAge1xcbiAgICBhbmltYXRpb246IDE0MG1zIGVhc2Utb3V0IDBzIDEgbm9ybWFsIGJvdGggcnVubmluZyBzY2FsZXVwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3R0b206IDEuNXZoO1xcbiAgICBsZWZ0OiA1MHZ3O1xcbiAgICB3aWR0aDogNDh2dztcXG59XFxuLnByZXZpZXdQb3B1cFRpdGxlIHtcXG4gICAgbWF4LWhlaWdodDogNHZoO1xcbn1cXG4ucHJldmlld1BvcHVwVGl0bGUgaDEuYWN0aW9uU2hlZXRUaXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV2aWV3R3JvdXBXYXRjaGVkQ291bnQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcmV2aWV3UG9wdXBTY3JvbGxlciB7XFxuICAgIG1heC1oZWlnaHQ6IDYwdmg7XFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG4ucHJldmlld1BvcHVwU2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuLnByZXZpZXdQb3B1cFNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHJldmlld1BvcHVwU2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5wcmV2aWV3UG9wdXBTY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcbi5wcmV2aWV3UXVpY2tBY3Rpb25Db250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnByZXZpZXdJdGVtQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5wcmV2aWV3SXRlbVRpdGxlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5wcmV2aWV3SXRlbUltYWdlQ2FyZCB7XFxuICAgIG1heC13aWR0aDogMzAlO1xcbn1cXG4ucHJldmlld0l0ZW1Db250ZW50Um93IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5wcmV2aWV3SXRlbURlc2NyaXB0aW9uQ29sdW1uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAwO1xcbn1cXG4ucHJldmlld0l0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG59XFxuLnByZXZpZXdJdGVtRGVzY3JpcHRpb24uZXhwYW5kZWQge1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbn1cXG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMC4yNWVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cXG4ucHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5wcmV2aWV3SXRlbURldGFpbHMge1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIExvY2sgdGhlIHBvc2l0aW9uIG9mIHRoaXMgZGV0YWlscywgc28gdGhhdCBubyB0aGVtZSBjYW4gY2hhbmdlIGl0ICovXFxuLnByZXZpZXdMaXN0SXRlbUNvbnRlbnQgLml0ZW1NaXNjSW5mby5wcmV2aWV3SXRlbURldGFpbHMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcXG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMWVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG59XFxuLmJsdXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYmx1cjpob3ZlciB7XFxuICAgIGZpbHRlcjogYmx1cigwKTtcXG59XFxuLnByZXZpZXdJdGVtSW1hZ2VDYXJkIC5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDMycHgpO1xcbn1cXG4ucHJldmlld0l0ZW1JbWFnZUNhcmQ6aG92ZXIgLmJsdXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XFxufVxcbi5wcmV2aWV3U2Nyb2xsU3Bpbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG59XFxuLnByZXZpZXdTY3JvbGxTcGlubmVyIC5kb2NzcGlubmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XFxuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMS45NWVtICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMS45NWVtICFpbXBvcnRhbnQ7XFxuICAgIHotaW5kZXg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVGVtcGxhdGUge1xuICAgIC8qXG4gICAgICogdGhlIEhUTUwgYmFzZWQgSUQgb2YgdGhlIG5ldyBnZW5lcmF0ZWQgRWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZWxlbWVudElkOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50LCBwcml2YXRlIHBvc2l0aW9uQWZ0ZXJJbmRleDogbnVtYmVyKSB7IH1cblxuICAgIHB1YmxpYyBnZXRDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkFmdGVySW5kZXg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEVsZW1lbnRJZChlbGVtZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRJZDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmdldEVsZW1lbnRJZCgpfWApO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldFRlbXBsYXRlKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBzdHJpbmc7XG5cbiAgICBhYnN0cmFjdCByZW5kZXIoLi4uY2xpY2tIYW5kbGVyczogRnVuY3Rpb25bXSk6IHZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgYWRkRWxlbWVudFRvQ29udGFpbmVyKC4uLmNsaWNrSGFuZGxlcnM6IEZ1bmN0aW9uW10pOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIC8vIEFkZCBFbGVtZW50IGFzIHRoZSBmaXJzdCBjaGlsZCBpZiBwb3NpdGlvbiBpcyBuZWdhdGl2ZVxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbkFmdGVySW5kZXgoKSA8IDAgJiYgdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZmlyc3RFbGVtZW50Q2hpbGQuYmVmb3JlKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIEVsZW1lbnQgaWYgY29udGFpbmVyIGlzIGVtcHR5XG4gICAgICAgIGlmICghdGhpcy5nZXRDb250YWluZXIoKS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuaW5uZXJIVE1MID0gdGhpcy5nZXRUZW1wbGF0ZSguLi5jbGlja0hhbmRsZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGlsZEJlZm9yZSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkubGFzdEVsZW1lbnRDaGlsZFxuICAgICAgICBpZiAodGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpICYmIHRoaXMuZ2V0UG9zaXRpb25BZnRlckluZGV4KCkgPj0gMClcbiAgICAgICAgICAgIGNoaWxkQmVmb3JlID0gdGhpcy5nZXRDb250YWluZXIoKS5jaGlsZHJlblt0aGlzLmdldFBvc2l0aW9uQWZ0ZXJJbmRleCgpXTtcbiAgICAgICAgXG4gICAgICAgIGNoaWxkQmVmb3JlLmFmdGVyKHRoaXMuc3RyaW5nVG9Ob2RlKHRoaXMuZ2V0VGVtcGxhdGUoLi4uY2xpY2tIYW5kbGVycykpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgc3RyaW5nVG9Ob2RlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcpOiBOb2RlIHtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHRlbXBsYXRlU3RyaW5nO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxufSIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRhaW5lclRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBkaWFsb2dCYWNrZHJvcElkID0gJ2RpYWxvZ0JhY2tkcm9wJ1xuICAgIGRpYWxvZ0NvbnRhaW5lcklkID0gJ2RpYWxvZ0NvbnRhaW5lcidcbiAgICBwb3B1cENvbnRlbnRDb250YWluZXJJZCA9ICdwb3B1cENvbnRlbnRDb250YWluZXInXG4gICAgcG9wdXBGb2N1c0NvbnRhaW5lcklkID0gJ3BvcHVwRm9jdXNDb250YWluZXInXG4gICAgXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncHJldmlld1BvcHVwJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5kaWFsb2dCYWNrZHJvcElkfVwiIGNsYXNzPVwiZGlhbG9nQmFja2Ryb3AgZGlhbG9nQmFja2Ryb3BPcGVuZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmRpYWxvZ0NvbnRhaW5lcklkfVwiIGNsYXNzPVwiZGlhbG9nQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBGb2N1c0NvbnRhaW5lcklkfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb2N1c2NvbnRhaW5lciBkaWFsb2cgYWN0aW9uc2hlZXQtbm90LWZ1bGxzY3JlZW4gYWN0aW9uU2hlZXQgY2VudGVyZWREaWFsb2cgb3BlbmVkIHByZXZpZXdQb3B1cCBhY3Rpb25TaGVldENvbnRlbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlzdG9yeT1cInRydWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmVtb3Zlb25jbG9zZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMucG9wdXBDb250ZW50Q29udGFpbmVySWR9XCIgY2xhc3M9XCJhY3Rpb25TaGVldFNjcm9sbGVyIHNjcm9sbFkgcHJldmlld1BvcHVwU2Nyb2xsZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRFbGVtZW50SWQoKSkpXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwXCI7XG5pbXBvcnQge3JlbmRlcldhdGNoZWRDb3VudElubmVySHRtbH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9XYXRjaFByb2dyZXNzXCI7XG5pbXBvcnQge1dhdGNoQ291bnREaXNwbGF5TW9kZX0gZnJvbSBcIi4uL01vZGVscy9XYXRjaENvdW50RGlzcGxheU1vZGVcIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgZ3JvdXA6IEdyb3VwLCBwcml2YXRlIGlzQ3VycmVudEdyb3VwOiBib29sZWFuLCBwcml2YXRlIHNob3dXYXRjaGVkQ291bnQ6IGJvb2xlYW4sIHByaXZhdGUgd2F0Y2hDb3VudERpc3BsYXlNb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgZ3JvdXAtJHtncm91cC5ncm91cElkfWApO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICBpcz1cImVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5ncm91cC5ncm91cElkfVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0SXRlbSBwcmV2aWV3SXRlbVRpdGxlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7dGhpcy5pc0N1cnJlbnRHcm91cCA/IFwibWF0ZXJpYWwtaWNvbnMgY2hlY2tcIiA6IFwiXCJ9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdEl0ZW1Cb2R5IGFjdGlvbnNoZWV0TGlzdEl0ZW1Cb2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvblNoZWV0SXRlbVRleHRcIj4ke3RoaXMuZ3JvdXAuZ3JvdXBOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5zaG93V2F0Y2hlZENvdW50ID8gYDxkaXYgY2xhc3M9XCJwcmV2aWV3R3JvdXBXYXRjaGVkQ291bnRcIj4ke3JlbmRlcldhdGNoZWRDb3VudElubmVySHRtbCh0aGlzLmdyb3VwLCB0aGlzLndhdGNoQ291bnREaXNwbGF5TW9kZSl9PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXJlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4gY2xpY2tIYW5kbGVyKGUpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCI7XG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCI7XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5YmFja1JhdGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVmlkZW9FbGVtZW50PigndmlkZW8uaHRtbHZpZGVvcGxheWVyJyk/LnBsYXliYWNrUmF0ZSB8fCAxO1xufVxuXG5mdW5jdGlvbiB6ZXJvUGFkKG51bTogbnVtYmVyLCBwbGFjZXM6IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgIHJldHVybiBTdHJpbmcobnVtKS5wYWRTdGFydChwbGFjZXMsICcwJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFbmRUaW1lKHJ1bnRpbWVUaWNrczogbnVtYmVyLCBwbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gY29udmVydCBmcm9tIHRpY2tzICgxMDBucyB1bml0cykgdG8gbWlsbGlzZWNvbmRzXG4gICAgcnVudGltZVRpY2tzIC89IDEwMDAwO1xuICAgIHBsYXliYWNrUG9zaXRpb25UaWNrcyAvPSAxMDAwMDtcblxuICAgIGNvbnN0IHJlbWFpbmluZ01zOiBudW1iZXIgPSAocnVudGltZVRpY2tzIC0gcGxheWJhY2tQb3NpdGlvblRpY2tzKSAvIGdldEN1cnJlbnRQbGF5YmFja1JhdGUoKTtcblxuICAgIGxldCB0aWNrczogbnVtYmVyID0gRGF0ZS5ub3coKSArIHJlbWFpbmluZ01zO1xuICAgIHRpY2tzIC09IChuZXcgRGF0ZSgpKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAgKiAxMDAwOyAvLyBhZGp1c3QgZm9yIHRpbWV6b25lXG5cbiAgICBsZXQgaG91cnM6IHN0cmluZyA9IHplcm9QYWQoTWF0aC5mbG9vcigodGlja3MgLyAxMDAwIC8gMzYwMCkgJSAyNCkpO1xuICAgIGxldCBtaW51dGVzOiBzdHJpbmcgPSB6ZXJvUGFkKE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDYwKSAlIDYwKSk7XG5cbiAgICByZXR1cm4gYEVuZHMgYXQgJHtob3Vyc306JHttaW51dGVzfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbmRUaW1lRGlzcGxheShpdGVtOiBQcmV2aWV3SXRlbSk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZW5kc0F0W2RhdGEtaXRlbS1pZD1cIiR7aXRlbS5JZH1cIl1gKVxuICAgIGlmICghZWxlbWVudCB8fCAhaXRlbS5SdW5UaW1lVGlja3MpIHJldHVyblxuXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGZvcm1hdEVuZFRpbWUoaXRlbS5SdW5UaW1lVGlja3MsIGl0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKVxufVxuXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbHNUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZChgaXRlbS0ke2l0ZW0uSWR9YCk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX0tZGV0YWlsc1wiIGNsYXNzPVwiaXRlbU1pc2NJbmZvIGl0ZW1NaXNjSW5mby1wcmltYXJ5IHByZXZpZXdJdGVtRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLlByZW1pZXJlRGF0ZSA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAkeyhuZXcgRGF0ZSh0aGlzLml0ZW0uUHJlbWllcmVEYXRlKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuZ2V0TG9jYWxlKCkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbVwiPiR7dGhpcy5mb3JtYXRSdW5UaW1lKHRoaXMuaXRlbS5SdW5UaW1lVGlja3MpfTwvZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNvbW11bml0eVJhdGluZyA/IGA8ZGl2IGNsYXNzPVwic3RhclJhdGluZ0NvbnRhaW5lciBtZWRpYUluZm9JdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgc3Rhckljb24gc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLml0ZW0uQ29tbXVuaXR5UmF0aW5nLnRvRml4ZWQoMSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICR7dGhpcy5pdGVtLkNyaXRpY1JhdGluZyA/IGA8ZGl2IGNsYXNzPVwibWVkaWFJbmZvSXRlbSBtZWRpYUluZm9Dcml0aWNSYXRpbmcgJHt0aGlzLml0ZW0uQ3JpdGljUmF0aW5nID49IDYwID8gJ21lZGlhSW5mb0NyaXRpY1JhdGluZ0ZyZXNoJyA6ICdtZWRpYUluZm9Dcml0aWNSYXRpbmdSb3R0ZW4nfVwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5Dcml0aWNSYXRpbmd9XG4gICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmRzQXQgbWVkaWFJbmZvSXRlbVwiIGRhdGEtaXRlbS1pZD1cIiR7dGhpcy5pdGVtLklkfVwiPiR7Zm9ybWF0RW5kVGltZSh0aGlzLml0ZW0uUnVuVGltZVRpY2tzLCB0aGlzLml0ZW0uVXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMb2NhbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5sYW5ndWFnZXNcbiAgICAgICAgICAgID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXSAvLyBAdHMtaWdub3JlIGZvciB1c2VyTGFuZ3VhZ2UgKHRoaXMgYWRkcyBzdXBwb3J0IGZvciBJRSkgVE9ETzogTW92ZSB0byBpbnRlcmZhY2VcbiAgICAgICAgICAgIDogKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvcm1hdFJ1blRpbWUodGlja3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIGZvcm1hdCB0aGUgdGlja3MgdG8gYSBzdHJpbmcgd2l0aCBtaW51dGVzIGFuZCBob3Vyc1xuICAgICAgICB0aWNrcyAvPSAxMDAwMDsgLy8gY29udmVydCBmcm9tIG1pY3Jvc2Vjb25kcyB0byBtaWxsaXNlY29uZHNcbiAgICAgICAgbGV0IGhvdXJzOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aWNrcyAvIDEwMDAgLyAzNjAwKSAlIDI0KTtcbiAgICAgICAgbGV0IG1pbnV0ZXM6IG51bWJlciA9IE1hdGguZmxvb3IoKHRpY2tzIC8gMTAwMCAvIDYwKSAlIDYwKTtcbiAgICAgICAgbGV0IGhvdXJzU3RyaW5nOiBzdHJpbmcgPSBob3VycyA+IDAgPyBgJHtob3Vyc31oIGAgOiAnJztcbiAgICAgICAgcmV0dXJuIGAke2hvdXJzU3RyaW5nfSR7bWludXRlc31tYDtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4vQmFzZVRlbXBsYXRlXCJcbmltcG9ydCB7RmF2b3JpdGVJY29uVGVtcGxhdGV9IGZyb20gXCIuL1F1aWNrQWN0aW9ucy9GYXZvcml0ZUljb25UZW1wbGF0ZVwiXG5pbXBvcnQge1BsYXlTdGF0ZUljb25UZW1wbGF0ZX0gZnJvbSBcIi4vUXVpY2tBY3Rpb25zL1BsYXlTdGF0ZUljb25UZW1wbGF0ZVwiXG5pbXBvcnQge1BsYXliYWNrSGFuZGxlcn0gZnJvbSBcIi4uL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiXG5pbXBvcnQge0l0ZW1EZXRhaWxzVGVtcGxhdGV9IGZyb20gXCIuL0l0ZW1EZXRhaWxzXCJcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIlxuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiXG5pbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi4vTW9kZWxzL0l0ZW1UeXBlXCJcbmltcG9ydCB7dG9nZ2xlUGxheWVkU3RhdGVMb2NhbGx5fSBmcm9tIFwiLi4vU2VydmljZXMvRGF0YUZldGNoZXJcIlxuaW1wb3J0IHtFeHBhbmRlZEl0ZW1MYXlvdXR9IGZyb20gXCIuLi9Nb2RlbHMvRXhwYW5kZWRJdGVtTGF5b3V0XCJcblxuLy8gU2hvd3MvaGlkZXMgdGhlIFwic3RhcnQgcGxheWJhY2tcIiBvdmVybGF5IGZvciBhIHJlbmRlcmVkIGxpc3QgaXRlbVxuZXhwb3J0IGNvbnN0IHNldEl0ZW1PdmVybGF5QWN0aXZlID0gKGl0ZW1JZDogc3RyaW5nLCBpc0FjdGl2ZTogYm9vbGVhbikgPT5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2FyZE92ZXJsYXktJHtpdGVtSWR9YCk/LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBpc0FjdGl2ZSlcblxuLy8gSW5kZXggbnVtYmVyIHNwYW4gZm9yIHRoZSB0aXRsZSByb3csIGUuZy4gXCI8c3Bhbj4xPC9zcGFuPlwiIG9yIFwiPHNwYW4+MS0yPC9zcGFuPlwiIGZvciBhIG11bHRpLWVwaXNvZGUgZmlsZS5cbi8vIEVtcHR5IGZvciBNb3ZpZXMsIG9yIGl0ZW1zIHdpdGhvdXQgYW4gSW5kZXhOdW1iZXIuXG5jb25zdCBpbmRleE51bWJlckh0bWwgPSAoaXRlbTogUHJldmlld0l0ZW0sIGdyb3VwVHlwZTogSXRlbVR5cGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmICghaXRlbS5JbmRleE51bWJlciB8fCBncm91cFR5cGUgPT09IEl0ZW1UeXBlLk1vdmllKSByZXR1cm4gJydcbiAgICBcbiAgICBpZiAoaXRlbS5JbmRleE51bWJlckVuZCAmJiBpdGVtLkluZGV4TnVtYmVyRW5kICE9PSBpdGVtLkluZGV4TnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBgPHNwYW4+JHtpdGVtLkluZGV4TnVtYmVyfS0ke2l0ZW0uSW5kZXhOdW1iZXJFbmR9PC9zcGFuPmBcbiAgICB9XG5cbiAgICByZXR1cm4gYDxzcGFuPiR7aXRlbS5JbmRleE51bWJlcn08L3NwYW4+YFxufVxuXG5leHBvcnQgY2xhc3MgTGlzdEVsZW1lbnRUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBxdWlja0FjdGlvbkNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgICBwcml2YXRlIHBsYXlTdGF0ZUljb246IFBsYXlTdGF0ZUljb25UZW1wbGF0ZVxuICAgIHByaXZhdGUgZmF2b3JpdGVJY29uOiBGYXZvcml0ZUljb25UZW1wbGF0ZVxuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0sIHByaXZhdGUgcGxheWJhY2tIYW5kbGVyOiBQbGF5YmFja0hhbmRsZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoYGl0ZW0tJHtpdGVtLklkfWApXG5cbiAgICAgICAgLy8gY3JlYXRlIHRlbXAgcXVpY2sgYWN0aW9uIGNvbnRhaW5lclxuICAgICAgICB0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICAvLyBjcmVhdGUgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24gPSBuZXcgUGxheVN0YXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIC0xLCB0aGlzLml0ZW0pXG4gICAgICAgIHRoaXMuZmF2b3JpdGVJY29uID0gbmV3IEZhdm9yaXRlSWNvblRlbXBsYXRlKHRoaXMucXVpY2tBY3Rpb25Db250YWluZXIsIDAsIHRoaXMuaXRlbSlcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBhZGQgcXVpY2sgYWN0aW9uc1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZUljb24ucmVuZGVyKClcbiAgICAgICAgdGhpcy5mYXZvcml0ZUljb24ucmVuZGVyKClcblxuICAgICAgICAvLyBhZGQgaXRlbSBkZXRhaWxzL2luZm9cbiAgICAgICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBkZXRhaWxzOiBJdGVtRGV0YWlsc1RlbXBsYXRlID0gbmV3IEl0ZW1EZXRhaWxzVGVtcGxhdGUoZGV0YWlsc0NvbnRhaW5lciwgLTEsIHRoaXMuaXRlbSlcbiAgICAgICAgZGV0YWlscy5yZW5kZXIoKVxuXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZVN0eWxlOiBzdHJpbmcgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9JdGVtcy8ke3RoaXMuaXRlbS5JZH0vSW1hZ2VzL1ByaW1hcnk/dGFnPSR7dGhpcy5pdGVtLlByaW1hcnlJbWFnZVRhZ30nKWBcblxuICAgICAgICBjb25zdCBzaG91bGRCbHVyOiBib29sZWFuID0gISh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuT25seUJsdXJVbndhdGNoZWQgJiYgdGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZClcblxuICAgICAgICAvLyBPbmx5IHRha2VzIGVmZmVjdCB3aGlsZSBldmVyeSBpdGVtIGlzIGZvcmNlLWV4cGFuZGVkXG4gICAgICAgIGNvbnN0IHVzZVNpZGVCeVNpZGVMYXlvdXQ6IGJvb2xlYW4gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXhwYW5kQWxsSXRlbXNcbiAgICAgICAgICAgICYmIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FeHBhbmRlZEl0ZW1MYXlvdXQgPT09IEV4cGFuZGVkSXRlbUxheW91dC5TaWRlQnlTaWRlXG5cbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICBjb25zdCB0aXRsZVJvdzogc3RyaW5nID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdJdGVtQ29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld0l0ZW1UaXRsZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgJHtpbmRleE51bWJlckh0bWwodGhpcy5pdGVtLCB0aGlzLnByb2dyYW1EYXRhU3RvcmUudHlwZSl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbUJvZHkgYWN0aW9uc2hlZXRMaXN0SXRlbUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uU2hlZXRJdGVtVGV4dFwiPiR7dGhpcy5pdGVtLk5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld1F1aWNrQWN0aW9uQ29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnF1aWNrQWN0aW9uQ29udGFpbmVyLmlubmVySFRNTH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICBjb25zdCBpbWFnZUNhcmQ6IHN0cmluZyA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG92ZXJmbG93QmFja2Ryb3BDYXJkIGNhcmQtaG92ZXJhYmxlIGNhcmQtd2l0aHVzZXJkYXRhIHByZXZpZXdJdGVtSW1hZ2VDYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRCb3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRTY2FsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRQYWRkZXIgY2FyZFBhZGRlci1vdmVyZmxvd0JhY2tkcm9wIGxhenktaGlkZGVuLWNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkSW1hZ2VJY29uIG1hdGVyaWFsLWljb25zIHR2XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlld0l0ZW1JbWFnZUNhcmQtJHt0aGlzLml0ZW0uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkSW1hZ2VDb250YWluZXIgY2FyZENvbnRlbnQgaXRlbUFjdGlvbiBsYXp5IGJsdXJoYXNoZWQgbGF6eS1pbWFnZS1mYWRlaW4tZmFzdCAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5CbHVyVGh1bWJuYWlsICYmIHNob3VsZEJsdXIgPyAnYmx1cicgOiAnJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIiR7YmFja2dyb3VuZEltYWdlU3R5bGV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaFByb2dyZXNzICYmIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImlubmVyQ2FyZEZvb3RlciBmdWxsSW5uZXJDYXJkRm9vdGVyIGlubmVyQ2FyZEZvb3RlckNsZWFyIGl0ZW1Qcm9ncmVzc0JhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVByb2dyZXNzQmFyRm9yZWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiR7dGhpcy5pdGVtLlVzZXJEYXRhLlBsYXllZFBlcmNlbnRhZ2V9JTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZE92ZXJsYXktJHt0aGlzLml0ZW0uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkT3ZlcmxheUNvbnRhaW5lciBpdGVtQWN0aW9uICR7dGhpcy5pdGVtLklkID09PSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlTWVkaWFTb3VyY2VJZCA/ICdoaWRlJyA6ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwibGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydC1pdGVtLSR7dGhpcy5pdGVtLklkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcz1cInBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZE92ZXJsYXlCdXR0b24gY2FyZE92ZXJsYXlCdXR0b24taG92ZXIgaXRlbUFjdGlvbiBwYXBlci1pY29uLWJ1dHRvbi1saWdodCBjYXJkT3ZlcmxheUZhYi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwicmVzdW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2FyZE92ZXJsYXlCdXR0b25JY29uIGNhcmRPdmVybGF5QnV0dG9uSWNvbi1ob3ZlciBwbGF5X2Fycm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkJsb2NrOiBzdHJpbmcgPSBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZXZpZXdJdGVtRGVzY3JpcHRpb24gJHt0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuQmx1ckRlc2NyaXB0aW9uICYmIHNob3VsZEJsdXIgPyAnYmx1cicgOiAnJ31cIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaXRlbS5EZXNjcmlwdGlvbiA/PyAnJ31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJldmlld0l0ZW1SZWFkTW9yZUJ1dHRvbiBoaWRlXCI+U2hvdyBtb3JlPC9idXR0b24+XG4gICAgICAgIGBcblxuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIGNvbnN0IGNvbnRlbnRSb3c6IHN0cmluZyA9IHVzZVNpZGVCeVNpZGVMYXlvdXQgPyBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBwcmV2aWV3SXRlbUNvbnRlbnRSb3dcIj5cbiAgICAgICAgICAgICAgICAke2ltYWdlQ2FyZH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1EZXNjcmlwdGlvbkNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAke3RpdGxlUm93fVxuICAgICAgICAgICAgICAgICAgICAke2RldGFpbHNDb250YWluZXIuaW5uZXJIVE1MfVxuICAgICAgICAgICAgICAgICAgICAke2Rlc2NyaXB0aW9uQmxvY2t9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCA6IGBcbiAgICAgICAgICAgICR7ZGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBwcmV2aWV3SXRlbUNvbnRlbnRSb3dcIj5cbiAgICAgICAgICAgICAgICAke2ltYWdlQ2FyZH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0l0ZW1EZXNjcmlwdGlvbkNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAke2Rlc2NyaXB0aW9uQmxvY2t9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuXG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0SXRlbSBsaXN0SXRlbS1idXR0b24gYWN0aW9uU2hlZXRNZW51SXRlbSBlbWJ5LWJ1dHRvbiBwcmV2aWV3TGlzdEl0ZW0ke3VzZVNpZGVCeVNpZGVMYXlvdXQgPyAnIHByZXZpZXdMaXN0SXRlbS1zaWRlQnlTaWRlJyA6ICcnfVwiXG4gICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0uSWR9XCI+XG4gICAgICAgICAgICAgICAgJHt1c2VTaWRlQnlTaWRlTGF5b3V0ID8gJycgOiB0aXRsZVJvd31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0xpc3RJdGVtQ29udGVudCBoaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICR7Y29udGVudFJvd31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjbGlja0hhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbGlja0hhbmRsZXIoZSkpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGF5U3RhdGVCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXlTdGF0ZUJ1dHRvbi0ke3RoaXMuaXRlbS5JZH1gKVxuICAgICAgICBwbGF5U3RhdGVCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHRvZ2dsZVBsYXllZFN0YXRlTG9jYWxseSh0aGlzLnByb2dyYW1EYXRhU3RvcmUsIHRoaXMuaXRlbS5JZClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlld0l0ZW1EZXNjcmlwdGlvbicpXG4gICAgICAgICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpXG5cbiAgICAgICAgY29uc3QgaXRlbUltYWdlQ2FyZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnQtaXRlbS0ke3RoaXMuaXRlbS5JZH1gKVxuICAgICAgICBpdGVtSW1hZ2VDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wbGF5YmFja0hhbmRsZXIucGxheSh0aGlzLml0ZW0uSWQsIHRoaXMuaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MpKVxuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuLi9Nb2RlbHMvSXRlbVR5cGVcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7cmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1dhdGNoUHJvZ3Jlc3NcIjtcblxuZXhwb3J0IGNsYXNzIFBvcHVwVGl0bGVUZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ3BvcHVwVGl0bGVDb250YWluZXInKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiIGNsYXNzPVwibGlzdEl0ZW0gcHJldmlld1BvcHVwVGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInBvcHVwVGl0bGVTd2l0Y2hJY29uXCIgY2xhc3M9XCJhY3Rpb25zaGVldE1lbnVJdGVtSWNvbiBsaXN0SXRlbUljb24gbGlzdEl0ZW1JY29uLXRyYW5zcGFyZW50IG1hdGVyaWFsLWljb25zIGtleWJvYXJkX2JhY2tzcGFjZSAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5ncm91cHMubGVuZ3RoID4gMSA/ICcnIDogJ2hpZGUnfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJhY3Rpb25TaGVldFRpdGxlXCI+PC9oMT5cbiAgICAgICAgICAgICAgICAke3RoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TaG93V2F0Y2hlZENvdW50ID8gJzxkaXYgY2xhc3M9XCJwcmV2aWV3R3JvdXBXYXRjaGVkQ291bnRcIj48L2Rpdj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY2xpY2tIYW5kbGVyOiBGdW5jdGlvbikge1xuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnRUb0NvbnRhaW5lcigpXG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjbGlja0hhbmRsZXIoZSkpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFRleHQodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJUZXh0ID0gdGV4dFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTd2l0Y2hhYmxlKHN3aXRjaGFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJyNwb3B1cFRpdGxlU3dpdGNoSWNvbicpPy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIXN3aXRjaGFibGUpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFdhdGNoZWRDb3VudChncm91cDogR3JvdXApIHtcbiAgICAgICAgY29uc3Qgd2F0Y2hlZENvdW50RWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICAgICAgaWYgKHdhdGNoZWRDb3VudEVsZW1lbnQpIHdhdGNoZWRDb3VudEVsZW1lbnQuaW5uZXJIVE1MID0gcmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sKGdyb3VwLCB0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuV2F0Y2hDb3VudERpc3BsYXlNb2RlKVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0VmlzaWJsZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KClcbiAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXJlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QmFzZVRlbXBsYXRlfSBmcm9tIFwiLi9CYXNlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFByZXZpZXdCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRJZCgncG9wdXBQcmV2aWV3QnV0dG9uJyk7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gbGFuZ3VhZ2U9SFRNTFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5nZXRFbGVtZW50SWQoKX1cIiBjbGFzcz1cImF1dG9TaXplIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCIgaXM9XCJwYXBlci1pY29uLWJ1dHRvbi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXBpc29kZSBQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+XG4gICAgICAgICAgICAgICAgPHN2ZyBpZD1cInN2ZzFcIlxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYgNFwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwibGF5ZXIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3Q0N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowLjQ3NjQ2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBtYXJrZXJzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzLjc1Njg2NzZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMi4xNjkzNjYxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIwLjIzODIzMzAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIxLjgyNTczMzVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc2NTk3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjAyOTE0MzcsMS4wMzIwNDgyIGggMy43NTI4OTkxIHYgMi4xNzIyMzk0IGwgMC4wMDY3NiwtMi4xNTcyNTk1IHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInJlY3Q0Ny04XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjAuNDc3NDI3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7cGFpbnQtb3JkZXI6c3Ryb2tlIG1hcmtlcnMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibSAxLjgyMjg2MTQsMC4yMzg3MTMzNiBoIDMuNzU5MjU5IFYgMi40MTAxMjExIGwgLTAuMDA2OCwtMi4xNzE0MDc3NCB6XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGNsaWNrSGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiBhbnkgPT4gY2xpY2tIYW5kbGVyKCkpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlSWNvblRlbXBsYXRlIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBwb3NpdGlvbkFmdGVySW5kZXg6IG51bWJlciwgcHJpdmF0ZSBpdGVtOiBQcmV2aWV3SXRlbSkge1xuICAgICAgICBzdXBlcihjb250YWluZXIsIHBvc2l0aW9uQWZ0ZXJJbmRleClcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50SWQoJ2Zhdm9yaXRlQnV0dG9uLScgKyBpdGVtLklkKVxuICAgIH1cblxuICAgIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3RoaXMuZ2V0RWxlbWVudElkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJlbWJ5LXJhdGluZ2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1BY3Rpb24gcGFwZXItaWNvbi1idXR0b24tbGlnaHQgZW1ieS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0aGlzLml0ZW0/LklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2VydmVyaWQ9XCIke3RoaXMuaXRlbT8uU2VydmVySWQgPz8gJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtdHlwZT1cIkVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxpa2VzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pc2Zhdm9yaXRlPVwiJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5Jc0Zhdm9yaXRlID8/IGZhbHNlfVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZmF2b3JpdGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudFRvQ29udGFpbmVyKClcbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VUZW1wbGF0ZX0gZnJvbSBcIi4uL0Jhc2VUZW1wbGF0ZVwiXG5pbXBvcnQge1ByZXZpZXdJdGVtfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1ByZXZpZXdJdGVtXCJcblxuZXhwb3J0IGNsYXNzIFBsYXlTdGF0ZUljb25UZW1wbGF0ZSBleHRlbmRzIEJhc2VUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIsIHByaXZhdGUgaXRlbTogUHJldmlld0l0ZW0pIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyLCBwb3NpdGlvbkFmdGVySW5kZXgpXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudElkKCdwbGF5U3RhdGVCdXR0b24tJyArIHRoaXMuaXRlbS5JZClcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICAvLyBsYW5ndWFnZT1IVE1MXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHt0aGlzLmdldEVsZW1lbnRJZCgpfVwiXG4gICAgICAgICAgICAgICAgICAgIGlzPVwiZW1ieS1wbGF5c3RhdGVidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtQWN0aW9uIHBhcGVyLWljb24tYnV0dG9uLWxpZ2h0IGVtYnktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7dGhpcy5pdGVtPy5JZCA/PyAnJ31cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNlcnZlcmlkPVwiJHt0aGlzLml0ZW0/LlNlcnZlcklkID8/ICcnfVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbXR5cGU9XCJFcGlzb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1saWtlcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGxheWVkPVwiJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5QbGF5ZWQgPz8gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNYXJrIHBsYXllZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2hlY2sgcGxheXN0YXRlYnV0dG9uLWljb24tJHt0aGlzLml0ZW0/LlVzZXJEYXRhPy5QbGF5ZWQgPyBcInBsYXllZFwiIDogXCJ1bnBsYXllZFwifVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50VG9Db250YWluZXIoKVxuICAgIH1cbn1cbiIsImNvbnN0IFNQSU5ORVJfTEFZRVJTX0hUTUw6IHN0cmluZyA9IFsxLCAyLCAzLCA0XS5tYXAobGF5ZXIgPT5cbiAgICBgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyX19sYXllciBtZGwtc3Bpbm5lcl9fbGF5ZXItJHtsYXllcn1cIj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXIgbWRsLXNwaW5uZXJfX2xlZnRcIj5gICtcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZSBtZGwtc3Bpbm5lcl9fY2lyY2xlTGVmdFwiPjwvZGl2PmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXJfX2NpcmNsZS1jbGlwcGVyIG1kbC1zcGlubmVyX19yaWdodFwiPmAgK1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtZGwtc3Bpbm5lcl9fY2lyY2xlIG1kbC1zcGlubmVyX19jaXJjbGVSaWdodFwiPjwvZGl2PmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgYDwvZGl2PmBcbikuam9pbignJylcblxuZXhwb3J0IGZ1bmN0aW9uIHNwaW5uZXJIdG1sKGV4dHJhQ2xhc3Nlczogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdiBkaXI9XCJsdHJcIiBjbGFzcz1cImRvY3NwaW5uZXIgbWRsLXNwaW5uZXIgJHtleHRyYUNsYXNzZXN9XCI+JHtTUElOTkVSX0xBWUVSU19IVE1MfTwvZGl2PmBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlU3Bpbm5lcihjb250YWluZXI6IFBhcmVudE5vZGUpOiB2b2lkIHtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm1kbC1zcGlubmVyJyk/LmNsYXNzTGlzdC5hZGQoJ21kbFNwaW5uZXJBY3RpdmUnKVxufSIsImV4cG9ydCBlbnVtIEVuZHBvaW50cyB7XG4gICAgQkFTRSA9IFwiSW5QbGF5ZXJQcmV2aWV3XCIsXG4gICAgUExBWV9NRURJQSA9IFwiL0l0ZW1zL3tpdGVtSWR9L1BsYXkve3RpY2tzfVwiLFxuICAgIE5PV19QTEFZSU5HX0lURU0gPSBcIi9Ob3dQbGF5aW5nSXRlbVwiLFxuICAgIFNFUlZFUl9TRVRUSU5HUyA9IFwiL1NlcnZlclNldHRpbmdzXCIsXG4gICAgSVRFTV9QUkVWSUVXX1RZUEUgPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L0l0ZW1zL3tpdGVtSWR9L1ByZXZpZXdJdGVtVHlwZVwiLFxuICAgIElURU1fUFJFVklFV19EQVRBID0gXCIvVXNlcnMve3VzZXJJZH0ve2RldmljZUlkfS9JdGVtcy97aXRlbUlkfS9QcmV2aWV3RGF0YVwiLFxuICAgIEdST1VQX0lURU1TID0gXCIvVXNlcnMve3VzZXJJZH0vR3JvdXBzL3tncm91cElkfS9JdGVtc1wiLFxuICAgIEdST1VQX1dBVENIRURfQ09VTlQgPSBcIi9Vc2Vycy97dXNlcklkfS9Hcm91cHMve2dyb3VwSWR9L1dhdGNoZWRDb3VudFwiLFxuICAgIENPTlRBSU5JTkdfQ09MTEVDVElPTlMgPSBcIi9Vc2Vycy97dXNlcklkfS9JdGVtcy97aXRlbUlkfS9Db250YWluaW5nQ29sbGVjdGlvbnNcIixcbiAgICBTRVRfU09VUkNFX0NPTExFQ1RJT04gPSBcIi9Vc2Vycy97dXNlcklkfS97ZGV2aWNlSWR9L1NvdXJjZUNvbGxlY3Rpb24ve2NvbGxlY3Rpb25JZH1cIixcbiAgICBQTFVHSU5fU0VUVElOR1MgPSBcIi9QbHVnaW5TZXR0aW5nc1wiXG59IiwiaW1wb3J0IHtMaXN0RWxlbWVudFRlbXBsYXRlfSBmcm9tIFwiLi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuaW1wb3J0IHtQcm9ncmFtRGF0YVN0b3JlfSBmcm9tIFwiLi9TZXJ2aWNlcy9Qcm9ncmFtRGF0YVN0b3JlXCI7XG5pbXBvcnQge0dyb3VwLCBVTktOT1dOX1dBVENIRURfQ09VTlR9IGZyb20gXCIuL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtHcm91cExpc3RFbGVtZW50VGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvR3JvdXBMaXN0RWxlbWVudFRlbXBsYXRlXCI7XG5pbXBvcnQge1BvcHVwVGl0bGVUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9Qb3B1cFRpdGxlVGVtcGxhdGVcIjtcbmltcG9ydCB7UGxheWJhY2tIYW5kbGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9QbGF5YmFja0hhbmRsZXJcIjtcbmltcG9ydCB7RW5kcG9pbnRzfSBmcm9tIFwiLi9FbmRwb2ludHNcIjtcbmltcG9ydCB7R3JvdXBJdGVtc1Jlc3VsdH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwSXRlbXNSZXN1bHRcIjtcbmltcG9ydCB7SXRlbVR5cGV9IGZyb20gXCIuL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHthY3RpdmF0ZVNwaW5uZXIsIHNwaW5uZXJIdG1sfSBmcm9tIFwiLi9Db21wb25lbnRzL1NwaW5uZXJcIjtcbmltcG9ydCB7dXBkYXRlV2F0Y2hlZENvdW50RG9tfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL1NlcnZpY2VzL0xvZ2dlclwiO1xuXG4vLyBUaGUgYmFja2VuZCBhbHJlYWR5IHJldHVybnMgUGxheWxpc3RzL0JveFNldHMgYW5kIEZvbGRlcnMgaW4gdGhlaXIgb3duIG1hbnVhbCBpdGVtL2Rpc3NwbGF5IG9yZGVyXG4vLyBzb3J0aW5nIHNob3VsZCBvbmx5IGFwcGx5IGZvciBzZWFzb24tYmFzZWQgKEVwaXNvZGUpIGdyb3Vwcywgd2hlcmUgaXQgcmVmbGVjdHMgYWN0dWFsIGVwaXNvZGUgb3JkZXIuXG5jb25zdCBwcmVzZXJ2ZUJhY2tlbmRPcmRlclR5cGVzOiBTZXQ8SXRlbVR5cGU+ID0gbmV3IFNldChbSXRlbVR5cGUuUGxheWxpc3QsIEl0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuRm9sZGVyXSlcblxuZXhwb3J0IGNsYXNzIExpc3RFbGVtZW50RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF5YmFja0hhbmRsZXI6IFBsYXliYWNrSGFuZGxlciwgcHJpdmF0ZSBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7IH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVJdGVtRWxlbWVudHMoaXRlbXM6IFByZXZpZXdJdGVtW10sIHBhcmVudERpdjogSFRNTEVsZW1lbnQsIG9mZnNldDogbnVtYmVyID0gMCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBwcmVzZXJ2ZU9yZGVyID0gcHJlc2VydmVCYWNrZW5kT3JkZXJUeXBlcy5oYXModGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUpXG4gICAgICAgIGlmICghcHJlc2VydmVPcmRlcilcbiAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGEuSW5kZXhOdW1iZXIgLSBiLkluZGV4TnVtYmVyKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gRm9yIFBsYXlsaXN0cy9Cb3hTZXRzLCBzaG93IHRoZSBhY3R1YWwgbGlzdCBwb3NpdGlvbiBpbnN0ZWFkIG9mIHRoZSBJbmRleE51bWJlciBmcm9tIHRoZWlyIHNlYXNvbi9lcGlzb2RlLlxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHByZXNlcnZlT3JkZXIgPyB7IC4uLml0ZW1zW2ldLCBJbmRleE51bWJlcjogb2Zmc2V0ICsgaSArIDEsIEluZGV4TnVtYmVyRW5kOiB1bmRlZmluZWQgfSA6IGl0ZW1zW2ldXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlbmRlckl0ZW0oaXRlbSwgcGFyZW50RGl2LCBvZmZzZXQgKyBpKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBhc3luYyBwcmVwZW5kSXRlbUVsZW1lbnRzKGl0ZW1zOiBQcmV2aWV3SXRlbVtdLCBwYXJlbnREaXY6IEhUTUxFbGVtZW50LCBvZmZzZXQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBwcmVzZXJ2ZU9yZGVyID0gcHJlc2VydmVCYWNrZW5kT3JkZXJUeXBlcy5oYXModGhpcy5wcm9ncmFtRGF0YVN0b3JlLnR5cGUpXG4gICAgICAgIGlmICghcHJlc2VydmVPcmRlcilcbiAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGEuSW5kZXhOdW1iZXIgLSBiLkluZGV4TnVtYmVyKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcHJlc2VydmVPcmRlciA/IHsgLi4uaXRlbXNbaV0sIEluZGV4TnVtYmVyOiBvZmZzZXQgKyBpICsgMSwgSW5kZXhOdW1iZXJFbmQ6IHVuZGVmaW5lZCB9IDogaXRlbXNbaV1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVySXRlbShpdGVtLCBwYXJlbnREaXYsIC0xKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2hvdyBhIFwiU2hvdyBtb3JlXCIgYnV0dG9uIGlmIGRlc2NyaXB0aW9uIGV4Y2VlZHMgbWF4IGhlaWdodFxuICAgIHByaXZhdGUgYXBwbHlEZXNjcmlwdGlvblJlYWRNb3JlKGl0ZW1Db250YWluZXI6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBpdGVtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0l0ZW1EZXNjcmlwdGlvbicpXG4gICAgICAgIGNvbnN0IHJlYWRNb3JlQnV0dG9uID0gaXRlbUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdJdGVtUmVhZE1vcmVCdXR0b24nKVxuICAgICAgICBpZiAoIWRlc2NyaXB0aW9uIHx8ICFyZWFkTW9yZUJ1dHRvbikgcmV0dXJuXG5cbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKVxuICAgICAgICByZWFkTW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdTaG93IG1vcmUnXG5cbiAgICAgICAgY29uc3QgaXNPdmVyZmxvd2luZyA9IGRlc2NyaXB0aW9uLnNjcm9sbEhlaWdodCA+IGRlc2NyaXB0aW9uLmNsaWVudEhlaWdodFxuICAgICAgICByZWFkTW9yZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIWlzT3ZlcmZsb3dpbmcpXG4gICAgICAgIGlmICghaXNPdmVyZmxvd2luZykgcmV0dXJuXG5cbiAgICAgICAgcmVhZE1vcmVCdXR0b24ub25jbGljayA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBjb25zdCBleHBhbmRlZCA9IGRlc2NyaXB0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJylcbiAgICAgICAgICAgIHJlYWRNb3JlQnV0dG9uLnRleHRDb250ZW50ID0gZXhwYW5kZWQgPyAnU2hvdyBsZXNzJyA6ICdTaG93IG1vcmUnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXZlYWxzIGFuIGl0ZW0ncyBjb250ZW50XG4gICAgcHJpdmF0ZSBleHBhbmRJdGVtKGl0ZW1Db250YWluZXI6IEVsZW1lbnQsIG1hcmtTZWxlY3RlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgaWYgKG1hcmtTZWxlY3RlZCkgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZExpc3RJdGVtJyk7XG4gICAgICAgIHRoaXMuYXBwbHlEZXNjcmlwdGlvblJlYWRNb3JlKGl0ZW1Db250YWluZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgcmVuZGVySXRlbShpdGVtOiBQcmV2aWV3SXRlbSwgcGFyZW50RGl2OiBIVE1MRWxlbWVudCwgcG9zaXRpb25BZnRlckluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgaXRlbUxpc3RFbGVtZW50VGVtcGxhdGUgPSBuZXcgTGlzdEVsZW1lbnRUZW1wbGF0ZShwYXJlbnREaXYsIHBvc2l0aW9uQWZ0ZXJJbmRleCwgaXRlbSwgdGhpcy5wbGF5YmFja0hhbmRsZXIsIHRoaXMucHJvZ3JhbURhdGFTdG9yZSk7XG4gICAgICAgIGl0ZW1MaXN0RWxlbWVudFRlbXBsYXRlLnJlbmRlcigoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgLy8gd2hlbiBldmVyeSBpdGVtIGlzIGFscmVhZHkgZXhwYW5kZWQsIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHRvZ2dsZVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5FeHBhbmRBbGxJdGVtcykgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBoaWRlIGl0ZW0gY29udGVudCBmb3IgYWxsIGV4aXN0aW5nIGl0ZW1zIGluIHRoZSBwcmV2aWV3IGxpc3RcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJldmlld0xpc3RJdGVtQ29udGVudFwiKS5mb3JFYWNoKChlbGVtZW50OiBFbGVtZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZExpc3RJdGVtJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lcjogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLSR7aXRlbS5JZH1gKS5xdWVyeVNlbGVjdG9yKCcucHJldmlld0xpc3RJdGVtQ29udGVudCcpO1xuICAgICAgICAgICAgdGhpcy5leHBhbmRJdGVtKGl0ZW1Db250YWluZXIsIHRydWUpO1xuXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1Ob2RlOiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tJHtpdGVtLklkfWApLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3TGlzdEl0ZW1Db250ZW50Jyk7XG4gICAgICAgIGlmICh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXhwYW5kQWxsSXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbShpdGVtTm9kZSwgaXRlbS5JZCA9PT0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uSWQgPT09IHRoaXMucHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZEl0ZW0oaXRlbU5vZGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVTcGlubmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ3ByZXZpZXdTY3JvbGxTcGlubmVyJylcbiAgICAgICAgc3Bpbm5lci5pbm5lckhUTUwgPSBzcGlubmVySHRtbCgpXG4gICAgICAgIGFjdGl2YXRlU3Bpbm5lcihzcGlubmVyKVxuICAgICAgICByZXR1cm4gc3Bpbm5lclxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGF0dGFjaFNjcm9sbFBhZ2luYXRpb24oXG4gICAgICAgIHBhcmVudERpdjogSFRNTEVsZW1lbnQsXG4gICAgICAgIGxvYWRQYWdlOiAoc3RhcnRJbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPEdyb3VwSXRlbXNSZXN1bHQ+LFxuICAgICAgICB2aWV3VG9rZW46IG51bWJlcixcbiAgICAgICAgaW5pdGlhbFRvdGFsTG9hZGVkOiBudW1iZXIsXG4gICAgICAgIGluaXRpYWxUb3RhbFJlY29yZENvdW50OiBudW1iZXIsXG4gICAgICAgIGluaXRpYWxMb2FkZWRTdGFydEluZGV4OiBudW1iZXJcbiAgICApOiB2b2lkIHtcbiAgICAgICAgY29uc3QgU0NST0xMX1RSSUdHRVJfRElTVEFOQ0VfUFggPSAyMDBcblxuICAgICAgICBsZXQgdG90YWxMb2FkZWQgPSBpbml0aWFsVG90YWxMb2FkZWRcbiAgICAgICAgbGV0IHRvdGFsUmVjb3JkQ291bnQgPSBpbml0aWFsVG90YWxSZWNvcmRDb3VudFxuICAgICAgICBsZXQgbG9hZGVkU3RhcnRJbmRleCA9IGluaXRpYWxMb2FkZWRTdGFydEluZGV4XG4gICAgICAgIGxldCBsb2FkaW5nRm9yd2FyZCA9IGZhbHNlXG4gICAgICAgIGxldCBsb2FkaW5nQmFja3dhcmQgPSBmYWxzZVxuXG4gICAgICAgIGNvbnN0IGxvYWROZXh0UGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgIGxvYWRpbmdGb3J3YXJkID0gdHJ1ZVxuICAgICAgICAgICAgY29uc3Qgc3Bpbm5lciA9IHRoaXMuY3JlYXRlU3Bpbm5lckVsZW1lbnQoKVxuICAgICAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKHNwaW5uZXIpXG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpdGVtcywgdG90YWxSZWNvcmRDb3VudDogbmV3VG90YWxSZWNvcmRDb3VudCB9ID0gYXdhaXQgbG9hZFBhZ2UodG90YWxMb2FkZWQpXG4gICAgICAgICAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtRGF0YVN0b3JlLmlzQ3VycmVudFZpZXcodmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJdGVtRWxlbWVudHMoaXRlbXMsIHBhcmVudERpdiwgdG90YWxMb2FkZWQpXG4gICAgICAgICAgICAgICAgdG90YWxMb2FkZWQgKz0gaXRlbXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgdG90YWxSZWNvcmRDb3VudCA9IG5ld1RvdGFsUmVjb3JkQ291bnRcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBuZXdseSBsb2FkZWQgcGFnZSBtaWdodCBzdGlsbCBub3QgZmlsbCB0aGUgY29udGFpbmVyLCBzbyByZS1jaGVjayByaWdodCBhd2F5LlxuICAgICAgICAgICAgICAgIGNoZWNrU2Nyb2xsUG9zaXRpb24oKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCBuZXh0IHBhZ2Ugb2YgaXRlbXMgKHN0YXJ0SW5kZXggJHt0b3RhbExvYWRlZH0pYCwgZXgpXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5yZW1vdmUoKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nRm9yd2FyZCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkUHJldmlvdXNQYWdlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgbG9hZGluZ0JhY2t3YXJkID0gdHJ1ZVxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0QmVmb3JlU3Bpbm5lciA9IHBhcmVudERpdi5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgIGNvbnN0IHNwaW5uZXIgPSB0aGlzLmNyZWF0ZVNwaW5uZXJFbGVtZW50KClcbiAgICAgICAgICAgIHBhcmVudERpdi5pbnNlcnRCZWZvcmUoc3Bpbm5lciwgcGFyZW50RGl2LmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICBwYXJlbnREaXYuc2Nyb2xsVG9wICs9IHBhcmVudERpdi5zY3JvbGxIZWlnaHQgLSBzY3JvbGxIZWlnaHRCZWZvcmVTcGlubmVyXG5cbiAgICAgICAgICAgIGNvbnN0IHBhZ2VTaXplID0gdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZVxuICAgICAgICAgICAgY29uc3QgbmV3U3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIGxvYWRlZFN0YXJ0SW5kZXggLSBwYWdlU2l6ZSlcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1zIH0gPSBhd2FpdCBsb2FkUGFnZShuZXdTdGFydEluZGV4KVxuICAgICAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGJhY2sgdG8gdGhlIGdyb3VwIGxpc3QpIHdoaWxlIHRoaXMgcGFnZSB3YXMgbG9hZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0QmVmb3JlUHJlcGVuZCA9IHBhcmVudERpdi5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wcmVwZW5kSXRlbUVsZW1lbnRzKGl0ZW1zLCBwYXJlbnREaXYsIG5ld1N0YXJ0SW5kZXgpXG4gICAgICAgICAgICAgICAgcGFyZW50RGl2LnNjcm9sbFRvcCArPSBwYXJlbnREaXYuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsSGVpZ2h0QmVmb3JlUHJlcGVuZFxuICAgICAgICAgICAgICAgIGxvYWRlZFN0YXJ0SW5kZXggPSBuZXdTdGFydEluZGV4XG5cbiAgICAgICAgICAgICAgICBjaGVja1Njcm9sbFBvc2l0aW9uKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgcHJldmlvdXMgcGFnZSBvZiBpdGVtcyAoc3RhcnRJbmRleCAke25ld1N0YXJ0SW5kZXh9KWAsIGV4KVxuICAgICAgICAgICAgICAgIHNwaW5uZXIucmVtb3ZlKClcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0JhY2t3YXJkID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoZWNrU2Nyb2xsUG9zaXRpb24gPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnREaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGxQb3NpdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmVhckJvdHRvbSA9IHBhcmVudERpdi5zY3JvbGxUb3AgKyBwYXJlbnREaXYuY2xpZW50SGVpZ2h0ID49IHBhcmVudERpdi5zY3JvbGxIZWlnaHQgLSBTQ1JPTExfVFJJR0dFUl9ESVNUQU5DRV9QWFxuICAgICAgICAgICAgaWYgKCFsb2FkaW5nRm9yd2FyZCAmJiB0b3RhbExvYWRlZCA8IHRvdGFsUmVjb3JkQ291bnQgJiYgbmVhckJvdHRvbSkge1xuICAgICAgICAgICAgICAgIGxvYWROZXh0UGFnZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5lYXJUb3AgPSBwYXJlbnREaXYuc2Nyb2xsVG9wIDw9IFNDUk9MTF9UUklHR0VSX0RJU1RBTkNFX1BYXG4gICAgICAgICAgICBpZiAoIWxvYWRpbmdCYWNrd2FyZCAmJiBsb2FkZWRTdGFydEluZGV4ID4gMCAmJiBuZWFyVG9wKSB7XG4gICAgICAgICAgICAgICAgbG9hZFByZXZpb3VzUGFnZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnREaXYuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGxQb3NpdGlvbilcbiAgICAgICAgY2hlY2tTY3JvbGxQb3NpdGlvbigpXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUxhenlJdGVtTGlzdChcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgbG9hZFBhZ2U6IChzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4sXG4gICAgICAgIHZpZXdUb2tlbjogbnVtYmVyLFxuICAgICAgICBpbml0aWFsUGFnZT86IEdyb3VwSXRlbXNSZXN1bHQsXG4gICAgICAgIGluaXRpYWxPZmZzZXQ6IG51bWJlciA9IDBcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZmlyc3RQYWdlID0gaW5pdGlhbFBhZ2UgPz8gYXdhaXQgbG9hZFBhZ2UoMClcbiAgICAgICAgLy8gVGhlIHZpZXcgbWF5IGhhdmUgbW92ZWQgb24gKGUuZy4gYmFjayB0byB0aGUgZ3JvdXAgbGlzdCkgd2hpbGUgdGhpcyBwYWdlIHdhcyBsb2FkaW5nLlxuICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KHZpZXdUb2tlbikpIHJldHVyblxuXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbUVsZW1lbnRzKGZpcnN0UGFnZS5pdGVtcywgcGFyZW50RGl2LCBpbml0aWFsT2Zmc2V0KVxuXG4gICAgICAgIGNvbnN0IHRvdGFsTG9hZGVkID0gaW5pdGlhbE9mZnNldCArIGZpcnN0UGFnZS5pdGVtcy5sZW5ndGhcbiAgICAgICAgdGhpcy5hdHRhY2hTY3JvbGxQYWdpbmF0aW9uKHBhcmVudERpdiwgbG9hZFBhZ2UsIHZpZXdUb2tlbiwgdG90YWxMb2FkZWQsIGZpcnN0UGFnZS50b3RhbFJlY29yZENvdW50LCBpbml0aWFsT2Zmc2V0KVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZmV0Y2hHcm91cFdhdGNoZWRDb3VudChncm91cElkOiBzdHJpbmcpOiBQcm9taXNlPHsgcGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIsIHBsYXllZFJ1bnRpbWVUaWNrczogbnVtYmVyLCB0b3RhbFJ1bnRpbWVUaWNrczogbnVtYmVyIH0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfV0FUQ0hFRF9DT1VOVH1gXG4gICAgICAgICAgICAucmVwbGFjZSgne3VzZXJJZH0nLCBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpKVxuICAgICAgICAgICAgLnJlcGxhY2UoJ3tncm91cElkfScsIGdyb3VwSWQpKVxuICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBsYXllZEl0ZW1Db3VudDogcmF3LlBsYXllZEl0ZW1Db3VudCxcbiAgICAgICAgICAgIHRvdGFsSXRlbUNvdW50OiByYXcuVG90YWxJdGVtQ291bnQsXG4gICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IHJhdy5QbGF5ZWRSdW50aW1lVGlja3MsXG4gICAgICAgICAgICB0b3RhbFJ1bnRpbWVUaWNrczogcmF3LlRvdGFsUnVudGltZVRpY2tzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQoZ3JvdXA6IEdyb3VwKTogUHJvbWlzZTxHcm91cD4ge1xuICAgICAgICBpZiAoZ3JvdXAucGxheWVkSXRlbUNvdW50ICE9PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHJldHVybiBncm91cFxuXG4gICAgICAgIGNvbnN0IHsgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudCwgcGxheWVkUnVudGltZVRpY2tzLCB0b3RhbFJ1bnRpbWVUaWNrcyB9ID0gYXdhaXQgdGhpcy5mZXRjaEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwLmdyb3VwSWQpXG4gICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5zZXRHcm91cFdhdGNoZWRDb3VudChncm91cC5ncm91cElkLCBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50LCBwbGF5ZWRSdW50aW1lVGlja3MsIHRvdGFsUnVudGltZVRpY2tzKVxuICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgcGxheWVkSXRlbUNvdW50LCB0b3RhbEl0ZW1Db3VudCwgcGxheWVkUnVudGltZVRpY2tzLCB0b3RhbFJ1bnRpbWVUaWNrcyB9XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZUdyb3VwRWxlbWVudHMoXG4gICAgICAgIGdyb3VwczogR3JvdXBbXSxcbiAgICAgICAgcGFyZW50RGl2OiBIVE1MRWxlbWVudCxcbiAgICAgICAgY3VycmVudEdyb3VwSW5kZXg6IG51bWJlcixcbiAgICAgICAgdGl0bGVDb250YWluZXI6IFBvcHVwVGl0bGVUZW1wbGF0ZSxcbiAgICAgICAgbG9hZEl0ZW1zOiAoZ3JvdXBJZDogc3RyaW5nLCBzdGFydEluZGV4OiBudW1iZXIpID0+IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD5cbiAgICApOiB2b2lkIHtcbiAgICAgICAgZ3JvdXBzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXhOdW1iZXIgLSBiLmluZGV4TnVtYmVyKVxuXG4gICAgICAgIC8vIEludmFsaWRhdGVzIGFueSBpdGVtIGxvYWQgc3RpbGwgaW4gcHJvZ3Jlc3NzXG4gICAgICAgIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5iZWdpbk5ld1ZpZXcoKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwTGlzdEVsZW1lbnRUZW1wbGF0ZShwYXJlbnREaXYsIGksIGdyb3Vwc1tpXSwgZ3JvdXBzW2ldLmluZGV4TnVtYmVyID09PSBjdXJyZW50R3JvdXBJbmRleCwgdGhpcy5wcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQsIHRoaXMucHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5XYXRjaENvdW50RGlzcGxheU1vZGUpXG4gICAgICAgICAgICBncm91cC5yZW5kZXIoYXN5bmMgKGU6IE1vdXNlRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYWN0aXZlR3JvdXBJZCA9IGdyb3Vwc1tpXS5ncm91cElkXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuc2V0VGV4dChncm91cHNbaV0uZ3JvdXBOYW1lKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRXYXRjaGVkQ291bnQoZ3JvdXBzW2ldKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBzW2ldLnBsYXllZEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZUdyb3VwV2F0Y2hlZENvdW50KGdyb3Vwc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbih1cGRhdGVkID0+IHRpdGxlQ29udGFpbmVyLnNldFdhdGNoZWRDb3VudCh1cGRhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiB0aGlzLmxvZ2dlci5lcnJvcihgQ291bGRuJ3QgbG9hZCB3YXRjaGVkIGNvdW50IGZvciBncm91cCAke2dyb3Vwc1tpXS5ncm91cElkfWAsIGV4KSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpXG5cbiAgICAgICAgICAgICAgICBwYXJlbnREaXYuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3VG9rZW4gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZCA9ICF0aGlzLnByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWRcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmZpbmQoZyA9PiBnLmdyb3VwSWQgPT09IGdyb3Vwc1tpXS5ncm91cElkKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxQYWdlOiBHcm91cEl0ZW1zUmVzdWx0IHwgdW5kZWZpbmVkID0gY2FjaGVkPy5sb2FkZWRTdGFydEluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyB7IGl0ZW1zOiBbLi4uY2FjaGVkLml0ZW1zXSwgdG90YWxSZWNvcmRDb3VudDogY2FjaGVkLmxvYWRlZFRvdGFsUmVjb3JkQ291bnQgPz8gY2FjaGVkLml0ZW1zLmxlbmd0aCB9XG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbE9mZnNldCA9IGNhY2hlZD8ubG9hZGVkU3RhcnRJbmRleCA/PyAwXG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUxhenlJdGVtTGlzdChwYXJlbnREaXYsIChzdGFydEluZGV4KSA9PiBsb2FkSXRlbXMoZ3JvdXBzW2ldLmdyb3VwSWQsIHN0YXJ0SW5kZXgpLCB2aWV3VG9rZW4sIGluaXRpYWxQYWdlLCBpbml0aWFsT2Zmc2V0KVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIGl0ZW1zIGZvciBncm91cCAke2dyb3Vwc1tpXS5ncm91cElkfWAsIGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2hvd1dhdGNoZWRDb3VudCAmJiBncm91cHNbaV0ucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZUdyb3VwV2F0Y2hlZENvdW50KGdyb3Vwc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odXBkYXRlZCA9PiB1cGRhdGVXYXRjaGVkQ291bnREb20odGhpcy5wcm9ncmFtRGF0YVN0b3JlLCB1cGRhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gdGhpcy5sb2dnZXIuZXJyb3IoYENvdWxkbid0IGxvYWQgd2F0Y2hlZCBjb3VudCBmb3IgZ3JvdXAgJHtncm91cHNbaV0uZ3JvdXBJZH1gLCBleCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBFeHBhbmRlZEl0ZW1MYXlvdXQge1xuICAgIERlZmF1bHQgPSAwLFxuICAgIFNpZGVCeVNpZGUgPSAxLFxufVxuIiwiZXhwb3J0IGVudW0gSXRlbVR5cGUge1xuICAgIEFnZ3JlZ2F0ZUZvbGRlcixcbiAgICBBdWRpbyxcbiAgICBBdWRpb0Jvb2ssXG4gICAgQmFzZVBsdWdpbkZvbGRlcixcbiAgICBCb29rLFxuICAgIEJveFNldCxcbiAgICBDaGFubmVsLFxuICAgIENoYW5uZWxGb2xkZXJJdGVtLFxuICAgIENvbGxlY3Rpb25Gb2xkZXIsXG4gICAgRXBpc29kZSxcbiAgICBGb2xkZXIsXG4gICAgR2VucmUsXG4gICAgTWFudWFsUGxheWxpc3RzRm9sZGVyLFxuICAgIE1vdmllLFxuICAgIExpdmVUdkNoYW5uZWwsXG4gICAgTGl2ZVR2UHJvZ3JhbSxcbiAgICBNdXNpY0FsYnVtLFxuICAgIE11c2ljQXJ0aXN0LFxuICAgIE11c2ljR2VucmUsXG4gICAgTXVzaWNWaWRlbyxcbiAgICBQZXJzb24sXG4gICAgUGhvdG8sXG4gICAgUGhvdG9BbGJ1bSxcbiAgICBQbGF5bGlzdCxcbiAgICBQbGF5bGlzdHNGb2xkZXIsXG4gICAgUHJvZ3JhbSxcbiAgICBSZWNvcmRpbmcsXG4gICAgU2Vhc29uLFxuICAgIFNlcmllcyxcbiAgICBTdHVkaW8sXG4gICAgVHJhaWxlcixcbiAgICBUdkNoYW5uZWwsXG4gICAgVHZQcm9ncmFtLFxuICAgIFVzZXJSb290Rm9sZGVyLFxuICAgIFVzZXJWaWV3LFxuICAgIFZpZGVvLFxuICAgIFllYXJcbn0iLCJleHBvcnQgZW51bSBMb2dMZXZlbCB7XG4gICAgTm9uZSA9IDAsXG4gICAgRXJyb3IgPSAxLFxuICAgIEluZm9ybWF0aW9uID0gMixcbiAgICBEZWJ1ZyA9IDMsXG59XG4iLCJpbXBvcnQge0l0ZW1UeXBlfSBmcm9tIFwiLi9JdGVtVHlwZVwiO1xuaW1wb3J0IHtXYXRjaENvdW50RGlzcGxheU1vZGV9IGZyb20gXCIuL1dhdGNoQ291bnREaXNwbGF5TW9kZVwiO1xuaW1wb3J0IHtMb2dMZXZlbH0gZnJvbSBcIi4vTG9nTGV2ZWxcIjtcbmltcG9ydCB7RXhwYW5kZWRJdGVtTGF5b3V0fSBmcm9tIFwiLi9FeHBhbmRlZEl0ZW1MYXlvdXRcIjtcblxuZXhwb3J0IHR5cGUgUGx1Z2luU2V0dGluZ3MgPSB7XG4gICAgRW5hYmxlZEl0ZW1UeXBlczogSXRlbVR5cGVbXSxcbiAgICBCbHVyRGVzY3JpcHRpb246IGJvb2xlYW4sXG4gICAgQmx1clRodW1ibmFpbDogYm9vbGVhbixcbiAgICBFcGlzb2RlUGFnZVNpemU6IG51bWJlcixcbiAgICBTaG93V2F0Y2hlZENvdW50OiBib29sZWFuLFxuICAgIFdhdGNoQ291bnREaXNwbGF5TW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlLFxuICAgIFNlYXJjaENvbnRhaW5pbmdDb2xsZWN0aW9uczogYm9vbGVhbixcbiAgICBPbmx5Qmx1clVud2F0Y2hlZDogYm9vbGVhbixcbiAgICBTaG93V2F0Y2hQcm9ncmVzczogYm9vbGVhbixcbiAgICBFeHBhbmRBbGxJdGVtczogYm9vbGVhbixcbiAgICBFeHBhbmRlZEl0ZW1MYXlvdXQ6IEV4cGFuZGVkSXRlbUxheW91dCxcbiAgICBMb2dMZXZlbDogTG9nTGV2ZWwsXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0UGx1Z2luU2V0dGluZ3M6IFBsdWdpblNldHRpbmdzID0ge1xuICAgIEVuYWJsZWRJdGVtVHlwZXM6IFtJdGVtVHlwZS5TZXJpZXMsIEl0ZW1UeXBlLkJveFNldCwgSXRlbVR5cGUuTW92aWUsIEl0ZW1UeXBlLlZpZGVvXSxcbiAgICBCbHVyRGVzY3JpcHRpb246IGZhbHNlLFxuICAgIEJsdXJUaHVtYm5haWw6IGZhbHNlLFxuICAgIEVwaXNvZGVQYWdlU2l6ZTogMTAsXG4gICAgU2hvd1dhdGNoZWRDb3VudDogdHJ1ZSxcbiAgICBXYXRjaENvdW50RGlzcGxheU1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Ib3Vyc01pbnV0ZXMsXG4gICAgU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zOiB0cnVlLFxuICAgIE9ubHlCbHVyVW53YXRjaGVkOiBmYWxzZSxcbiAgICBTaG93V2F0Y2hQcm9ncmVzczogdHJ1ZSxcbiAgICBFeHBhbmRBbGxJdGVtczogZmFsc2UsXG4gICAgRXhwYW5kZWRJdGVtTGF5b3V0OiBFeHBhbmRlZEl0ZW1MYXlvdXQuRGVmYXVsdCxcbiAgICBMb2dMZXZlbDogTG9nTGV2ZWwuSW5mb3JtYXRpb24sXG59IiwiaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4vUHJldmlld0l0ZW1cIjtcblxuZXhwb3J0IHR5cGUgR3JvdXAgPSB7XG4gICAgZ3JvdXBJZDogc3RyaW5nXG4gICAgZ3JvdXBOYW1lOiBzdHJpbmdcbiAgICBpdGVtczogUHJldmlld0l0ZW1bXVxuICAgIGluZGV4TnVtYmVyOiBudW1iZXJcbiAgICBwbGF5ZWRJdGVtQ291bnQ6IG51bWJlclxuICAgIHRvdGFsSXRlbUNvdW50OiBudW1iZXJcbiAgICBwbGF5ZWRSdW50aW1lVGlja3M6IG51bWJlclxuICAgIHRvdGFsUnVudGltZVRpY2tzOiBudW1iZXJcbiAgICBsb2FkZWRTdGFydEluZGV4PzogbnVtYmVyXG4gICAgbG9hZGVkRW5kSW5kZXg/OiBudW1iZXJcbiAgICBsb2FkZWRUb3RhbFJlY29yZENvdW50PzogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBVTktOT1dOX1dBVENIRURfQ09VTlQgPSAtMVxuXG5leHBvcnQgY29uc3QgZm9ybWF0V2F0Y2hlZENvdW50ID0gKHBsYXllZEl0ZW1Db3VudDogbnVtYmVyLCB0b3RhbEl0ZW1Db3VudDogbnVtYmVyKTogc3RyaW5nID0+XG4gICAgcGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQgfHwgdG90YWxJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVFxuICAgICAgICA/ICfigKYgd2F0Y2hlZCdcbiAgICAgICAgOiBgJHtwbGF5ZWRJdGVtQ291bnR9LyR7dG90YWxJdGVtQ291bnR9IHdhdGNoZWRgXG5cbiIsImltcG9ydCB7Zm9ybWF0V2F0Y2hlZENvdW50LCBHcm91cCwgVU5LTk9XTl9XQVRDSEVEX0NPVU5UfSBmcm9tIFwiLi9Hcm91cFwiO1xuaW1wb3J0IHtXYXRjaENvdW50RGlzcGxheU1vZGV9IGZyb20gXCIuLi9XYXRjaENvdW50RGlzcGxheU1vZGVcIjtcblxuY29uc3QgVElDS1NfUEVSX1NFQ09ORCA9IDEwXzAwMF8wMDBcblxuY29uc3QgZ2V0VGltZVN0cmluZyA9ICh0aWNrczogbnVtYmVyLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHNlY29uZHMgPSB0aWNrcyAvIFRJQ0tTX1BFUl9TRUNPTkRcbiAgICBjb25zdCB0b3RhbE1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MClcbiAgICBjb25zdCB0b3RhbEhvdXJzID0gTWF0aC5mbG9vcih0b3RhbE1pbnV0ZXMgLyA2MClcbiAgICBjb25zdCB0b3RhbERheXMgPSBNYXRoLmZsb29yKHRvdGFsSG91cnMgLyAyNClcbiAgICBjb25zdCB0b3RhbE1vbnRocyA9IE1hdGguZmxvb3IodG90YWxEYXlzIC8gMzApXG4gICAgY29uc3QgdG90YWxZZWFycyA9IE1hdGguZmxvb3IodG90YWxEYXlzIC8gMzY1KVxuXG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Ib3Vyc01pbnV0ZXMpIHtcbiAgICAgICAgaWYgKHRvdGFsSG91cnMgPj0gMSkge1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IHRvdGFsTWludXRlcyAlIDYwXG4gICAgICAgICAgICByZXR1cm4gbWludXRlcyA+IDAgPyBgJHt0b3RhbEhvdXJzfWggJHttaW51dGVzfW1gIDogYCR7dG90YWxIb3Vyc31oYFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbE1pbnV0ZXMgPiAwID8gYCR7dG90YWxNaW51dGVzfW1gIDogJzBtJ1xuICAgIH1cblxuICAgIGlmICh0b3RhbFllYXJzID49IDEpIHtcbiAgICAgICAgY29uc3QgbW9udGhzID0gTWF0aC5mbG9vcigodG90YWxEYXlzICUgMzY1KSAvIDMwKVxuICAgICAgICByZXR1cm4gbW9udGhzID4gMCA/IGAke3RvdGFsWWVhcnN9eSAke21vbnRoc31tb2AgOiBgJHt0b3RhbFllYXJzfXlgXG4gICAgfVxuICAgIGlmICh0b3RhbE1vbnRocyA+PSAxKSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0b3RhbERheXMgJSAzMFxuICAgICAgICByZXR1cm4gZGF5cyA+IDAgPyBgJHt0b3RhbE1vbnRoc31tbyAke2RheXN9ZGAgOiBgJHt0b3RhbE1vbnRoc31tb2BcbiAgICB9XG4gICAgaWYgKHRvdGFsRGF5cyA+PSAxKSB7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gdG90YWxIb3VycyAlIDI0XG4gICAgICAgIHJldHVybiBob3VycyA+IDAgPyBgJHt0b3RhbERheXN9ZCAke2hvdXJzfWhgIDogYCR7dG90YWxEYXlzfWRgXG4gICAgfVxuICAgIGlmICh0b3RhbEhvdXJzID49IDEpIHtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IHRvdGFsTWludXRlcyAlIDYwXG4gICAgICAgIHJldHVybiBtaW51dGVzID4gMCA/IGAke3RvdGFsSG91cnN9aCAke21pbnV0ZXN9bWAgOiBgJHt0b3RhbEhvdXJzfWhgXG4gICAgfVxuICAgIHJldHVybiB0b3RhbE1pbnV0ZXMgPiAwID8gYCR7dG90YWxNaW51dGVzfW1gIDogJzBtJ1xufVxuXG5jb25zdCBjbGFtcFByb2dyZXNzID0gKHByb2dyZXNzOiBudW1iZXIpOiBudW1iZXIgPT4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBNYXRoLnJvdW5kKHByb2dyZXNzKSkpXG5cbmV4cG9ydCBjb25zdCBnZXRXYXRjaFByb2dyZXNzUGVyY2VudCA9IChncm91cDogR3JvdXAsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IG51bWJlciA9PiB7XG4gICAgaWYgKG1vZGUgPT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Db3VudCkge1xuICAgICAgICBpZiAoIWdyb3VwLnRvdGFsSXRlbUNvdW50KSByZXR1cm4gMFxuICAgICAgICByZXR1cm4gY2xhbXBQcm9ncmVzcygoZ3JvdXAucGxheWVkSXRlbUNvdW50IC8gZ3JvdXAudG90YWxJdGVtQ291bnQpICogMTAwKVxuICAgIH1cblxuICAgIGlmICghZ3JvdXAudG90YWxSdW50aW1lVGlja3MpIHJldHVybiAwXG4gICAgcmV0dXJuIGNsYW1wUHJvZ3Jlc3MoKGdyb3VwLnBsYXllZFJ1bnRpbWVUaWNrcyAvIGdyb3VwLnRvdGFsUnVudGltZVRpY2tzKSAqIDEwMClcbn1cblxuZXhwb3J0IGNvbnN0IGlzV2F0Y2hlZENvdW50VW5rbm93biA9IChncm91cDogR3JvdXAsIG1vZGU6IFdhdGNoQ291bnREaXNwbGF5TW9kZSk6IGJvb2xlYW4gPT4ge1xuICAgIGlmIChncm91cC5wbGF5ZWRJdGVtQ291bnQgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVCB8fCBncm91cC50b3RhbEl0ZW1Db3VudCA9PT0gVU5LTk9XTl9XQVRDSEVEX0NPVU5UKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgcmV0dXJuIG1vZGUgIT09IFdhdGNoQ291bnREaXNwbGF5TW9kZS5Db3VudFxuICAgICAgICAmJiAoZ3JvdXAucGxheWVkUnVudGltZVRpY2tzID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQgfHwgZ3JvdXAudG90YWxSdW50aW1lVGlja3MgPT09IFVOS05PV05fV0FUQ0hFRF9DT1VOVClcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdFdhdGNoZWRDb3VudFRleHQgPSAoZ3JvdXA6IEdyb3VwLCBtb2RlOiBXYXRjaENvdW50RGlzcGxheU1vZGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChtb2RlID09PSBXYXRjaENvdW50RGlzcGxheU1vZGUuQ291bnQpXG4gICAgICAgIHJldHVybiBmb3JtYXRXYXRjaGVkQ291bnQoZ3JvdXAucGxheWVkSXRlbUNvdW50LCBncm91cC50b3RhbEl0ZW1Db3VudClcblxuICAgIGlmIChtb2RlID09PSBXYXRjaENvdW50RGlzcGxheU1vZGUuUGVyY2VudGFnZSlcbiAgICAgICAgcmV0dXJuIGAke2dldFdhdGNoUHJvZ3Jlc3NQZXJjZW50KGdyb3VwLCBtb2RlKX0lYFxuXG4gICAgY29uc3Qgc2FmZVRvdGFsID0gTWF0aC5tYXgoMCwgZ3JvdXAudG90YWxSdW50aW1lVGlja3MgfHwgMClcbiAgICBjb25zdCBzYWZlUGxheWVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc2FmZVRvdGFsLCBncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgfHwgMCkpXG4gICAgcmV0dXJuIGAke2dldFRpbWVTdHJpbmcoc2FmZVBsYXllZCwgbW9kZSl9IC8gJHtnZXRUaW1lU3RyaW5nKHNhZmVUb3RhbCwgbW9kZSl9YFxufVxuXG4vLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbjAwYmNvZHIvSmVsbHlmaW4tRW5oYW5jZWQvYmxvYi9tYWluL0plbGx5ZmluLlBsdWdpbi5KZWxseWZpbkVuaGFuY2VkL2pzL2VuaGFuY2VkL2l0ZW1kZXRhaWxzL2ZlYXR1cmVzLWRldGFpbHMtbWVkaWEtaW5mby5qc1xuY29uc3QgZ2V0V2F0Y2hQcm9ncmVzc0ljb25IdG1sID0gKHByb2dyZXNzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGNpcmN1bWZlcmVuY2UgPSAyICogTWF0aC5QSSAqIDggLy8gcmFkaXVzID0gOFxuICAgIGNvbnN0IG9mZnNldCA9IGNpcmN1bWZlcmVuY2UgLSAocHJvZ3Jlc3MgLyAxMDApICogY2lyY3VtZmVyZW5jZVxuXG4gICAgaWYgKHByb2dyZXNzID49IDEwMCkge1xuICAgICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMC4zZW07IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgZmxleC1zaHJpbms6IDA7XCI+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjhcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkuNSAxNS41bC0zLTMgMS40LTEuNEw5LjUgMTIuN2w1LjYtNS42IDEuNCAxLjR6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgPC9zdmc+YFxuICAgIH1cblxuICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwLjNlbTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBmbGV4LXNocmluazogMDtcIj5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgb3BhY2l0eT1cIjAuMlwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCJcbiAgICAgICAgICAgIHN0eWxlPVwic3Ryb2tlLWRhc2hhcnJheTogJHtjaXJjdW1mZXJlbmNlfTsgc3Ryb2tlLWRhc2hvZmZzZXQ6ICR7b2Zmc2V0fTsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcIi8+XG4gICAgPC9zdmc+YFxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sID0gKGdyb3VwOiBHcm91cCwgbW9kZTogV2F0Y2hDb3VudERpc3BsYXlNb2RlKTogc3RyaW5nID0+IHtcbiAgICBpZiAoaXNXYXRjaGVkQ291bnRVbmtub3duKGdyb3VwLCBtb2RlKSlcbiAgICAgICAgcmV0dXJuIGAke2dldFdhdGNoUHJvZ3Jlc3NJY29uSHRtbCgwKX08c3BhbiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFRleHRcIj4sLCw8L3NwYW4+YFxuXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRXYXRjaFByb2dyZXNzUGVyY2VudChncm91cCwgbW9kZSlcbiAgICByZXR1cm4gYCR7Z2V0V2F0Y2hQcm9ncmVzc0ljb25IdG1sKHByb2dyZXNzKX08c3BhbiBjbGFzcz1cInByZXZpZXdHcm91cFdhdGNoZWRDb3VudFRleHRcIj4ke2Zvcm1hdFdhdGNoZWRDb3VudFRleHQoZ3JvdXAsIG1vZGUpfTwvc3Bhbj5gXG59XG4iLCJleHBvcnQgdHlwZSBTZXJ2ZXJTZXR0aW5ncyA9IHtcbiAgICBNaW5SZXN1bWVQY3Q6IG51bWJlciwgXG4gICAgTWF4UmVzdW1lUGN0OiBudW1iZXIsIFxuICAgIE1pblJlc3VtZUR1cmF0aW9uU2Vjb25kczogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0U2VydmVyU2V0dGluZ3M6IFNlcnZlclNldHRpbmdzID0ge1xuICAgIE1pblJlc3VtZVBjdDogNSxcbiAgICBNYXhSZXN1bWVQY3Q6IDkwLFxuICAgIE1pblJlc3VtZUR1cmF0aW9uU2Vjb25kczogMzAwXG59IiwiZXhwb3J0IGVudW0gV2F0Y2hDb3VudERpc3BsYXlNb2RlIHtcbiAgICBDb3VudCA9IDAsXG4gICAgSG91cnNNaW51dGVzID0gMSxcbiAgICBBbGxVbml0cyA9IDIsXG4gICAgUGVyY2VudGFnZSA9IDMsXG59XG4iLCJpbXBvcnQge1Byb2dyYW1EYXRhU3RvcmV9IGZyb20gXCIuL1Byb2dyYW1EYXRhU3RvcmVcIjtcbmltcG9ydCB7UHJldmlld0l0ZW19IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvUHJldmlld0l0ZW1cIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7cmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sfSBmcm9tIFwiLi4vTW9kZWxzL1ByZXZpZXdEYXRhL1dhdGNoUHJvZ3Jlc3NcIjtcblxudHlwZSBVc2VyRGF0YUNoYW5nZWRFbnRyeSA9IHtcbiAgICBJdGVtSWQ6IHN0cmluZ1xuICAgIFBsYXllZDogYm9vbGVhblxuICAgIElzRmF2b3JpdGU6IGJvb2xlYW5cbiAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlclxuICAgIFBsYXllZFBlcmNlbnRhZ2U/OiBudW1iZXJcbn1cblxudHlwZSBXZWJTb2NrZXRNZXNzYWdlID0ge1xuICAgIE1lc3NhZ2VUeXBlOiBzdHJpbmdcbiAgICBEYXRhOiBhbnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdhdGNoZWRDb3VudERvbShwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLCBncm91cDogR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBodG1sID0gcmVuZGVyV2F0Y2hlZENvdW50SW5uZXJIdG1sKGdyb3VwLCBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLldhdGNoQ291bnREaXNwbGF5TW9kZSlcblxuICAgIGlmIChncm91cC5ncm91cElkID09PSBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQpIHtcbiAgICAgICAgY29uc3QgcG9wdXBXYXRjaGVkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBUaXRsZUNvbnRhaW5lcicpPy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByZXZpZXdHcm91cFdhdGNoZWRDb3VudCcpXG4gICAgICAgIGlmIChwb3B1cFdhdGNoZWRDb3VudCkgcG9wdXBXYXRjaGVkQ291bnQuaW5uZXJIVE1MID0gaHRtbFxuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwTGlzdFdhdGNoZWRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBncm91cC0ke2dyb3VwLmdyb3VwSWR9YCk/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJldmlld0dyb3VwV2F0Y2hlZENvdW50JylcbiAgICBpZiAoZ3JvdXBMaXN0V2F0Y2hlZENvdW50KSBncm91cExpc3RXYXRjaGVkQ291bnQuaW5uZXJIVE1MID0gaHRtbFxufVxuXG5mdW5jdGlvbiBwbGF5ZWRSdW50aW1lQ29udHJpYnV0aW9uKGl0ZW06IFByZXZpZXdJdGVtLCBwbGF5ZWQ6IGJvb2xlYW4sIHBsYXliYWNrUG9zaXRpb25UaWNrczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGxheWVkID8gKGl0ZW0uUnVuVGltZVRpY2tzID8/IDApIDogcGxheWJhY2tQb3NpdGlvblRpY2tzXG59XG5cbmZ1bmN0aW9uIGFkanVzdFdhdGNoZWRDb3VudChcbiAgICBwcm9ncmFtRGF0YVN0b3JlOiBQcm9ncmFtRGF0YVN0b3JlLFxuICAgIGl0ZW06IFByZXZpZXdJdGVtLFxuICAgIHdhc1BsYXllZDogYm9vbGVhbixcbiAgICBpc1BsYXllZDogYm9vbGVhbixcbiAgICBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlcixcbiAgICBuZXdQbGF5YmFja1Bvc2l0aW9uVGlja3M6IG51bWJlclxuKTogdm9pZCB7XG4gICAgaWYgKCFwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQpIHJldHVyblxuICAgIGlmICh3YXNQbGF5ZWQgPT09IGlzUGxheWVkKSByZXR1cm5cblxuICAgIGNvbnN0IGRlbHRhUGxheWVkQ291bnQgPSBpc1BsYXllZCA/IDEgOiAtMVxuICAgIGNvbnN0IGRlbHRhUGxheWVkUnVudGltZVRpY2tzID1cbiAgICAgICAgcGxheWVkUnVudGltZUNvbnRyaWJ1dGlvbihpdGVtLCBpc1BsYXllZCwgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzKSAtXG4gICAgICAgIHBsYXllZFJ1bnRpbWVDb250cmlidXRpb24oaXRlbSwgd2FzUGxheWVkLCBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3MpXG5cbiAgICBjb25zdCB1cGRhdGVkR3JvdXAgPSBwcm9ncmFtRGF0YVN0b3JlLmFkanVzdEdyb3VwV2F0Y2hTdGF0cyhpdGVtLklkLCBkZWx0YVBsYXllZENvdW50LCBkZWx0YVBsYXllZFJ1bnRpbWVUaWNrcylcbiAgICBpZiAodXBkYXRlZEdyb3VwKSB1cGRhdGVXYXRjaGVkQ291bnREb20ocHJvZ3JhbURhdGFTdG9yZSwgdXBkYXRlZEdyb3VwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUGxheWVkU3RhdGVMb2NhbGx5KHByb2dyYW1EYXRhU3RvcmU6IFByb2dyYW1EYXRhU3RvcmUsIGl0ZW1JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaXRlbTogUHJldmlld0l0ZW0gPSBwcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKGl0ZW1JZClcbiAgICBpZiAoIWl0ZW0pIHJldHVyblxuXG4gICAgY29uc3Qgd2FzUGxheWVkID0gaXRlbS5Vc2VyRGF0YS5QbGF5ZWRcbiAgICBjb25zdCBpc1BsYXllZCA9ICF3YXNQbGF5ZWRcbiAgICBjb25zdCBvbGRQbGF5YmFja1Bvc2l0aW9uVGlja3MgPSBpdGVtLlVzZXJEYXRhLlBsYXliYWNrUG9zaXRpb25UaWNrc1xuICAgIGNvbnN0IG5ld1BsYXliYWNrUG9zaXRpb25UaWNrcyA9IGlzUGxheWVkID8gMCA6IG9sZFBsYXliYWNrUG9zaXRpb25UaWNrc1xuXG4gICAgcHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgVXNlckRhdGE6IHsgLi4uaXRlbS5Vc2VyRGF0YSwgUGxheWVkOiBpc1BsYXllZCwgUGxheWJhY2tQb3NpdGlvblRpY2tzOiBuZXdQbGF5YmFja1Bvc2l0aW9uVGlja3MgfVxuICAgIH0pXG4gICAgYWRqdXN0V2F0Y2hlZENvdW50KHByb2dyYW1EYXRhU3RvcmUsIGl0ZW0sIHdhc1BsYXllZCwgaXNQbGF5ZWQsIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcywgbmV3UGxheWJhY2tQb3NpdGlvblRpY2tzKVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUZldGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSkge1xuICAgICAgICBFdmVudHMub24oQXBpQ2xpZW50LCAnbWVzc2FnZScsIChfZXZlbnQsIG1lc3NhZ2U6IFdlYlNvY2tldE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLk1lc3NhZ2VUeXBlICE9PSAnVXNlckRhdGFDaGFuZ2VkJykgcmV0dXJuXG4gICAgICAgICAgICBpZiAobWVzc2FnZS5EYXRhLlVzZXJJZCAhPT0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhTGlzdDogVXNlckRhdGFDaGFuZ2VkRW50cnlbXSA9IG1lc3NhZ2UuRGF0YS5Vc2VyRGF0YUxpc3QgPz8gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgdXNlckRhdGEgb2YgdXNlckRhdGFMaXN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbTogUHJldmlld0l0ZW0gPSB0aGlzLnByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQodXNlckRhdGEuSXRlbUlkKVxuICAgICAgICAgICAgICAgIGlmICghaXRlbSkgY29udGludWVcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdhc1BsYXllZCA9IGl0ZW0uVXNlckRhdGEuUGxheWVkXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkUGxheWJhY2tQb3NpdGlvblRpY2tzID0gaXRlbS5Vc2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3NcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1EYXRhU3RvcmUudXBkYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIFVzZXJEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLlVzZXJEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVkOiB1c2VyRGF0YS5QbGF5ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBJc0Zhdm9yaXRlOiB1c2VyRGF0YS5Jc0Zhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWJhY2tQb3NpdGlvblRpY2tzOiB1c2VyRGF0YS5QbGF5YmFja1Bvc2l0aW9uVGlja3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZWRQZXJjZW50YWdlOiB1c2VyRGF0YS5QbGF5ZWRQZXJjZW50YWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgYWRqdXN0V2F0Y2hlZENvdW50KHRoaXMucHJvZ3JhbURhdGFTdG9yZSwgaXRlbSwgd2FzUGxheWVkLCB1c2VyRGF0YS5QbGF5ZWQsIG9sZFBsYXliYWNrUG9zaXRpb25UaWNrcywgdXNlckRhdGEuUGxheWJhY2tQb3NpdGlvblRpY2tzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCB7TG9nTGV2ZWx9IGZyb20gXCIuLi9Nb2RlbHMvTG9nTGV2ZWxcIjtcblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gICAgcHJpdmF0ZSBsb2dMZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JbmZvcm1hdGlvblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dfcHJlZml4OiBzdHJpbmcgPSBcIltJblBsYXllckVwaXNvZGVQcmV2aWV3XVwiKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExvZ0xldmVsKGxldmVsOiBMb2dMZXZlbCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ0xldmVsID0gbGV2ZWxcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmRldGFpbHM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxvZ0xldmVsIDwgTG9nTGV2ZWwuRGVidWcpIHJldHVyblxuICAgICAgICBjb25zb2xlLmRlYnVnKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA8IExvZ0xldmVsLkVycm9yKSByZXR1cm5cbiAgICAgICAgY29uc29sZS5lcnJvcihgJHt0aGlzLmxvZ19wcmVmaXh9ICR7bXNnfWAsIGRldGFpbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5kZXRhaWxzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA8IExvZ0xldmVsLkluZm9ybWF0aW9uKSByZXR1cm5cbiAgICAgICAgY29uc29sZS5pbmZvKGAke3RoaXMubG9nX3ByZWZpeH0gJHttc2d9YCwgZGV0YWlscyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vTG9nZ2VyXCI7XG5pbXBvcnQge0VuZHBvaW50c30gZnJvbSBcIi4uL0VuZHBvaW50c1wiO1xuXG5leHBvcnQgY2xhc3MgUGxheWJhY2tIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7IH1cblxuICAgIGFzeW5jIHBsYXkoaXRlbUlkOiBzdHJpbmcsIHN0YXJ0UG9zaXRpb25UaWNrczogbnVtYmVyKTogUHJvbWlzZTx2b2lkIHwgUmVzcG9uc2U+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLlBMQVlfTUVESUF9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW1JZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3RpY2tzfScsIHN0YXJ0UG9zaXRpb25UaWNrcy50b1N0cmluZygpKSlcblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCB9KVxuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBzdGFydCB0aGUgcGxheWJhY2sgb2YgYW4gaXRlbWAsIGV4KVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7UHJvZ3JhbURhdGF9IGZyb20gXCIuLi9Nb2RlbHMvUHJvZ3JhbURhdGFcIjtcbmltcG9ydCB7R3JvdXAsIFVOS05PV05fV0FUQ0hFRF9DT1VOVH0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9Hcm91cFwiO1xuaW1wb3J0IHtQcmV2aWV3SXRlbX0gZnJvbSBcIi4uL01vZGVscy9QcmV2aWV3RGF0YS9QcmV2aWV3SXRlbVwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4uL01vZGVscy9JdGVtVHlwZVwiO1xuaW1wb3J0IHtEZWZhdWx0UGx1Z2luU2V0dGluZ3MsIFBsdWdpblNldHRpbmdzfSBmcm9tIFwiLi4vTW9kZWxzL1BsdWdpblNldHRpbmdzXCI7XG5pbXBvcnQge0RlZmF1bHRTZXJ2ZXJTZXR0aW5ncywgU2VydmVyU2V0dGluZ3N9IGZyb20gXCIuLi9Nb2RlbHMvU2VydmVyU2V0dGluZ3NcIjtcblxuY29uc3QgR1JPVVBTX0NBQ0hFX1RUTCA9IDUgKiA2MCAqIDEwMDBcblxuLy8gSXRlbSBUeXBlIG1hcHBpbmdzIGZvciB0aGUgVHlwZXMgc2VsZWN0YWJsZSBpbiB0aGUgUGx1Z2luIENvbmZpZ3VyYXRpb25cbmNvbnN0IFBSRVZJRVdfVFlQRV9HUk9VUFM6IFBhcnRpYWw8UmVjb3JkPEl0ZW1UeXBlLCBJdGVtVHlwZVtdPj4gPSB7XG4gICAgW0l0ZW1UeXBlLlNlcmllc106IFtJdGVtVHlwZS5TZXJpZXMsIEl0ZW1UeXBlLlNlYXNvbiwgSXRlbVR5cGUuRXBpc29kZV0sXG4gICAgW0l0ZW1UeXBlLkJveFNldF06IFtJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLlBsYXlsaXN0XSxcbiAgICBbSXRlbVR5cGUuVmlkZW9dOiBbSXRlbVR5cGUuVmlkZW8sIEl0ZW1UeXBlLkZvbGRlcl1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2dyYW1EYXRhU3RvcmUge1xuICAgIHByaXZhdGUgX3Byb2dyYW1EYXRhOiBQcm9ncmFtRGF0YVxuICAgIHByaXZhdGUgX3ZpZXdUb2tlbjogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgX2dyb3Vwc0NhY2hlZEF0OiBudW1iZXIgfCBudWxsID0gbnVsbFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhID0ge1xuICAgICAgICAgICAgYWN0aXZlTWVkaWFTb3VyY2VJZDogJycsXG4gICAgICAgICAgICBhY3RpdmVHcm91cElkOiAnJyxcbiAgICAgICAgICAgIGJveFNldE5hbWU6ICcnLFxuICAgICAgICAgICAgdHlwZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIHBsdWdpblNldHRpbmdzOiBEZWZhdWx0UGx1Z2luU2V0dGluZ3MsXG4gICAgICAgICAgICBzZXJ2ZXJTZXR0aW5nczogRGVmYXVsdFNlcnZlclNldHRpbmdzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZU1lZGlhU291cmNlSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZU1lZGlhU291cmNlSWRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZU1lZGlhU291cmNlSWQoYWN0aXZlTWVkaWFTb3VyY2VJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmFjdGl2ZU1lZGlhU291cmNlSWQgPSBhY3RpdmVNZWRpYVNvdXJjZUlkXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3RpdmVHcm91cElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVHcm91cElkXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhY3RpdmVHcm91cElkKGFjdGl2ZUdyb3VwSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5hY3RpdmVHcm91cElkID0gYWN0aXZlR3JvdXBJZFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlR3JvdXAoKTogR3JvdXAge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHMuZmluZChncm91cCA9PiBncm91cC5ncm91cElkID09PSB0aGlzLmFjdGl2ZUdyb3VwSWQpXG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0eXBlKCk6IEl0ZW1UeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLnR5cGVcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHR5cGUodHlwZTogSXRlbVR5cGUpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEudHlwZSA9IHR5cGVcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJveFNldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLmJveFNldE5hbWVcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJveFNldE5hbWUoYm94U2V0TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLmJveFNldE5hbWUgPSBib3hTZXROYW1lXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBncm91cHMoKTogR3JvdXBbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHNcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGdyb3Vwcyhncm91cHM6IEdyb3VwW10pIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuZ3JvdXBzID0gZ3JvdXBzXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwbHVnaW5TZXR0aW5ncygpOiBQbHVnaW5TZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmFtRGF0YS5wbHVnaW5TZXR0aW5nc1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGx1Z2luU2V0dGluZ3Moc2V0dGluZ3M6IFBsdWdpblNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW1EYXRhLnBsdWdpblNldHRpbmdzID0gc2V0dGluZ3NcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlcnZlclNldHRpbmdzKCk6IFNlcnZlclNldHRpbmdzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyYW1EYXRhLnNlcnZlclNldHRpbmdzXG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXJ2ZXJTZXR0aW5ncyhzZXR0aW5nczogU2VydmVyU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbURhdGEuc2VydmVyU2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgbWFya0dyb3Vwc0ZldGNoZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID0gRGF0ZS5ub3coKVxuICAgIH1cblxuICAgIHB1YmxpYyBpbnZhbGlkYXRlR3JvdXBzQ2FjaGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dyb3Vwc0NhY2hlZEF0ID0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNHcm91cHNDYWNoZUV4cGlyZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cHNDYWNoZWRBdCA9PT0gbnVsbCB8fCBEYXRlLm5vdygpIC0gdGhpcy5fZ3JvdXBzQ2FjaGVkQXQgPiBHUk9VUFNfQ0FDSEVfVFRMXG4gICAgfVxuXG4gICAgcHVibGljIGlzVHlwZUFsbG93ZWRGb3JQcmV2aWV3KHR5cGU6IEl0ZW1UeXBlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRQcmV2aWV3VHlwZXMuc29tZShjb25maWd1cmVkVHlwZSA9PiAoUFJFVklFV19UWVBFX0dST1VQU1tjb25maWd1cmVkVHlwZV0gPz8gW2NvbmZpZ3VyZWRUeXBlXSkuaW5jbHVkZXModHlwZSkpXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhbGxvd2VkUHJldmlld1R5cGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5TZXR0aW5ncy5FbmFibGVkSXRlbVR5cGVzXG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW1CeUlkKGl0ZW1JZDogc3RyaW5nKTogUHJldmlld0l0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHNcbiAgICAgICAgICAgIC5mbGF0TWFwKGdyb3VwID0+IGdyb3VwLml0ZW1zKVxuICAgICAgICAgICAgLmZpbmQoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtSWQpXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyByZWNvcmRMb2FkZWRJdGVtcyhncm91cElkOiBzdHJpbmcsIGl0ZW1zOiBQcmV2aWV3SXRlbVtdLCBzdGFydEluZGV4OiBudW1iZXIsIHRvdGFsUmVjb3JkQ291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMgPSB0aGlzLl9wcm9ncmFtRGF0YS5ncm91cHMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgICAgIGlmIChncm91cC5ncm91cElkICE9PSBncm91cElkKVxuICAgICAgICAgICAgICAgIHJldHVybiBncm91cFxuXG4gICAgICAgICAgICBpZiAoZ3JvdXAubG9hZGVkU3RhcnRJbmRleCA9PT0gdW5kZWZpbmVkIHx8IGdyb3VwLmxvYWRlZEVuZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgaXRlbXMsIGxvYWRlZFN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsIGxvYWRlZEVuZEluZGV4OiBzdGFydEluZGV4ICsgaXRlbXMubGVuZ3RoLCBsb2FkZWRUb3RhbFJlY29yZENvdW50OiB0b3RhbFJlY29yZENvdW50IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPj0gZ3JvdXAubG9hZGVkRW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ncm91cCwgaXRlbXM6IFsuLi5ncm91cC5pdGVtcywgLi4uaXRlbXNdLCBsb2FkZWRFbmRJbmRleDogc3RhcnRJbmRleCArIGl0ZW1zLmxlbmd0aCwgbG9hZGVkVG90YWxSZWNvcmRDb3VudDogdG90YWxSZWNvcmRDb3VudCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFydEluZGV4IDwgZ3JvdXAubG9hZGVkU3RhcnRJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmdyb3VwLCBpdGVtczogWy4uLml0ZW1zLCAuLi5ncm91cC5pdGVtc10sIGxvYWRlZFN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsIGxvYWRlZFRvdGFsUmVjb3JkQ291bnQ6IHRvdGFsUmVjb3JkQ291bnQgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldEdyb3VwV2F0Y2hlZENvdW50KGdyb3VwSWQ6IHN0cmluZywgcGxheWVkSXRlbUNvdW50OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIsIHBsYXllZFJ1bnRpbWVUaWNrczogbnVtYmVyLCB0b3RhbFJ1bnRpbWVUaWNrczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGcgPT4gZy5ncm91cElkID09PSBncm91cElkID8geyAuLi5nLCBwbGF5ZWRJdGVtQ291bnQsIHRvdGFsSXRlbUNvdW50LCBwbGF5ZWRSdW50aW1lVGlja3MsIHRvdGFsUnVudGltZVRpY2tzIH0gOiBnKVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGp1c3RHcm91cFdhdGNoU3RhdHMoaXRlbUlkOiBzdHJpbmcsIGRlbHRhUGxheWVkQ291bnQ6IG51bWJlciwgZGVsdGFQbGF5ZWRSdW50aW1lVGlja3M6IG51bWJlcik6IEdyb3VwIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdyb3Vwcy5maW5kKGcgPT4gZy5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKSlcbiAgICAgICAgaWYgKCFncm91cCkgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRHcm91cDogR3JvdXAgPSB7XG4gICAgICAgICAgICAuLi5ncm91cCxcbiAgICAgICAgICAgIHBsYXllZEl0ZW1Db3VudDogZ3JvdXAucGxheWVkSXRlbUNvdW50ICsgZGVsdGFQbGF5ZWRDb3VudCxcbiAgICAgICAgICAgIHBsYXllZFJ1bnRpbWVUaWNrczogZ3JvdXAucGxheWVkUnVudGltZVRpY2tzID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQgPyBVTktOT1dOX1dBVENIRURfQ09VTlQgOiBncm91cC5wbGF5ZWRSdW50aW1lVGlja3MgKyBkZWx0YVBsYXllZFJ1bnRpbWVUaWNrc1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMubWFwKGcgPT4gZy5ncm91cElkID09PSBncm91cC5ncm91cElkID8gdXBkYXRlZEdyb3VwIDogZylcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRHcm91cFxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVJdGVtKGl0ZW1Ub1VwZGF0ZTogUHJldmlld0l0ZW0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLmdyb3Vwcy5tYXAoZ3JvdXAgPT5cbiAgICAgICAgICAgIGdyb3VwLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLklkID09PSBpdGVtVG9VcGRhdGUuSWQpXG4gICAgICAgICAgICAgICAgPyB7IC4uLmdyb3VwLCBpdGVtczogZ3JvdXAuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbVRvVXBkYXRlLklkID8gaXRlbVRvVXBkYXRlIDogaXRlbSkgfVxuICAgICAgICAgICAgICAgIDogZ3JvdXBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIENhbGxlZCB3aGVuZXZlciB0aGUgcG9wdXAgc3dpdGNoZXMgd2hhdCBpdCdzIGRpc3BsYXlpbmcgKG9wZW5pbmcsIHNlbGVjdGluZyBhIGdyb3VwLCBnb2luZyBiYWNrIHRvIHRoZSBncm91cCBsaXN0KVxuICAgIHB1YmxpYyBiZWdpbk5ld1ZpZXcoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICsrdGhpcy5fdmlld1Rva2VuXG4gICAgfVxuXG4gICAgcHVibGljIGlzQ3VycmVudFZpZXcodG9rZW46IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdG9rZW4gPT09IHRoaXMuX3ZpZXdUb2tlblxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRWaWV3VG9rZW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdUb2tlblxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0Y29uc3QgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vU2VydmljZXMvTG9nZ2VyXCI7XG5pbXBvcnQge1ByZXZpZXdCdXR0b25UZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9QcmV2aWV3QnV0dG9uVGVtcGxhdGVcIjtcbmltcG9ydCB7UHJvZ3JhbURhdGFTdG9yZX0gZnJvbSBcIi4vU2VydmljZXMvUHJvZ3JhbURhdGFTdG9yZVwiO1xuaW1wb3J0IHtEaWFsb2dDb250YWluZXJUZW1wbGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9EaWFsb2dDb250YWluZXJUZW1wbGF0ZVwiO1xuaW1wb3J0IHtQbGF5YmFja0hhbmRsZXJ9IGZyb20gXCIuL1NlcnZpY2VzL1BsYXliYWNrSGFuZGxlclwiO1xuaW1wb3J0IHtMaXN0RWxlbWVudEZhY3Rvcnl9IGZyb20gXCIuL0xpc3RFbGVtZW50RmFjdG9yeVwiO1xuaW1wb3J0IHtQb3B1cFRpdGxlVGVtcGxhdGV9IGZyb20gXCIuL0NvbXBvbmVudHMvUG9wdXBUaXRsZVRlbXBsYXRlXCI7XG5pbXBvcnQge0RhdGFGZXRjaGVyfSBmcm9tIFwiLi9TZXJ2aWNlcy9EYXRhRmV0Y2hlclwiO1xuaW1wb3J0IHtJdGVtVHlwZX0gZnJvbSBcIi4vTW9kZWxzL0l0ZW1UeXBlXCI7XG5pbXBvcnQge1BsdWdpblNldHRpbmdzfSBmcm9tIFwiLi9Nb2RlbHMvUGx1Z2luU2V0dGluZ3NcIjtcbmltcG9ydCB7U2VydmVyU2V0dGluZ3N9IGZyb20gXCIuL01vZGVscy9TZXJ2ZXJTZXR0aW5nc1wiO1xuaW1wb3J0IHtFbmRwb2ludHN9IGZyb20gXCIuL0VuZHBvaW50c1wiO1xuaW1wb3J0IHtHcm91cCwgVU5LTk9XTl9XQVRDSEVEX0NPVU5UfSBmcm9tIFwiLi9Nb2RlbHMvUHJldmlld0RhdGEvR3JvdXBcIjtcbmltcG9ydCB7R3JvdXBJdGVtc1Jlc3VsdH0gZnJvbSBcIi4vTW9kZWxzL1ByZXZpZXdEYXRhL0dyb3VwSXRlbXNSZXN1bHRcIjtcbmltcG9ydCB7YWN0aXZhdGVTcGlubmVyLCBzcGlubmVySHRtbH0gZnJvbSBcIi4vQ29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQge3NldEl0ZW1PdmVybGF5QWN0aXZlfSBmcm9tIFwiLi9Db21wb25lbnRzL0xpc3RFbGVtZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7dXBkYXRlRW5kVGltZURpc3BsYXl9IGZyb20gXCIuL0NvbXBvbmVudHMvSXRlbURldGFpbHNcIjtcblxuaW1wb3J0ICcuL1N0eWxlcy9TdHlsZXMuY3NzJ1xuXG4vLyBpbml0IHNlcnZpY2VzIGFuZCBoZWxwZXJzXG5jb25zdCBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoKVxuY29uc3QgcHJvZ3JhbURhdGFTdG9yZTogUHJvZ3JhbURhdGFTdG9yZSA9IG5ldyBQcm9ncmFtRGF0YVN0b3JlKClcbmNvbnN0IHBsYXliYWNrSGFuZGxlcjogUGxheWJhY2tIYW5kbGVyID0gbmV3IFBsYXliYWNrSGFuZGxlcihsb2dnZXIpXG5jb25zdCBsaXN0RWxlbWVudEZhY3RvcnkgPSBuZXcgTGlzdEVsZW1lbnRGYWN0b3J5KHBsYXliYWNrSGFuZGxlciwgcHJvZ3JhbURhdGFTdG9yZSwgbG9nZ2VyKVxuXG5jb25zdCBjb2xsZWN0aW9uc0J5SXRlbUlkID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8R3JvdXBbXT4+KClcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwW10+IHtcbiAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5DT05UQUlOSU5HX0NPTExFQ1RJT05TfWBcbiAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKSlcbiAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByYXc6IGFueVtdID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIHJldHVybiByYXcubWFwKChnOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBncm91cElkOiBnLkdyb3VwSWQsXG4gICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgaW5kZXhOdW1iZXI6IGcuSW5kZXhOdW1iZXIsXG4gICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgdG90YWxJdGVtQ291bnQ6IGcuVG90YWxJdGVtQ291bnQsXG4gICAgICAgICAgICBwbGF5ZWRSdW50aW1lVGlja3M6IGcuUGxheWVkUnVudGltZVRpY2tzLFxuICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IGcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgfSkpXG4gICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgbG9hZCBDb2xsZWN0aW9ucy9QbGF5bGlzdHMgY29udGFpbmluZyB0aGlzIG1vdmllXCIsIGV4KVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8R3JvdXBbXT4ge1xuICAgIGxldCBwcm9taXNlID0gY29sbGVjdGlvbnNCeUl0ZW1JZC5nZXQoaXRlbUlkKVxuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gZmV0Y2hDb250YWluaW5nQ29sbGVjdGlvbnMoaXRlbUlkKVxuICAgICAgICBjb2xsZWN0aW9uc0J5SXRlbUlkLnNldChpdGVtSWQsIHByb21pc2UpXG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgLy8gRW5zdXJlIEFwaUNsaWVudC9FdmVudHMgZXhpc3QgYW5kIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgaWYgKHR5cGVvZiBBcGlDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBFdmVudHMgPT09ICd1bmRlZmluZWQnIHx8ICFBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZD8uKCkpIHtcbiAgICAgICAgc2V0VGltZW91dChpbml0aWFsaXplLCAzMDApXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG5ldyBEYXRhRmV0Y2hlcihwcm9ncmFtRGF0YVN0b3JlKVxuXG4gICAgY29uc3QgcGx1Z2luU2V0dGluZ3NVcmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5QTFVHSU5fU0VUVElOR1N9YClcbiAgICBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmw6IHBsdWdpblNldHRpbmdzVXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgIC50aGVuKChjb25maWc6IFBsdWdpblNldHRpbmdzKSA9PiB7XG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzID0gY29uZmlnXG4gICAgICAgICAgICBsb2dnZXIuc2V0TG9nTGV2ZWwoY29uZmlnLkxvZ0xldmVsKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGV4OiB1bmtub3duKSA9PiBsb2dnZXIuZXJyb3IoXCJDb3VsZG4ndCBsb2FkIHBsdWdpbiBzZXR0aW5ncywgZmFsbGluZyBiYWNrIHRvIGRlZmF1bHRzXCIsIGV4KSlcblxuICAgIGNvbnN0IHNlcnZlclNldHRpbmdzVXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuU0VSVkVSX1NFVFRJTkdTfWApXG4gICAgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsOiBzZXJ2ZXJTZXR0aW5nc1VybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAudGhlbigoY29uZmlnOiBTZXJ2ZXJTZXR0aW5ncykgPT4gcHJvZ3JhbURhdGFTdG9yZS5zZXJ2ZXJTZXR0aW5ncyA9IGNvbmZpZylcbiAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgbG9hZCBzZXJ2ZXIgc2V0dGluZ3MsIGZhbGxpbmcgYmFjayB0byBkZWZhdWx0c1wiLCBleCkpXG5cbiAgICBsb2dnZXIuaW5mbyhcIkluUGxheWVyRXBpc29kZVByZXZpZXcgaW5pdGlhbGl6ZWRcIilcbn1cbmluaXRpYWxpemUoKVxuXG5jb25zdCBTRUFSQ0hfQ09MTEVDVElPTlNfR1JPVVBfTkFNRSA9ICdTZWFyY2ggQ29sbGVjdGlvbnMvUGxheWxpc3RzJ1xuXG5jb25zdCB2aWRlb1BhdGhzOiBzdHJpbmdbXSA9IFsnL3ZpZGVvJ11cbmxldCBwcmV2aW91c1JvdXRlUGF0aDogc3RyaW5nID0gbnVsbFxubGV0IHByZXZpZXdDb250YWluZXJMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG5sZXQgcGVuZGluZ1ByZWxvYWRJdGVtSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG5sZXQgcGVuZGluZ1ByZWxvYWQ6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbFxubGV0IHByZWxvYWRPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsXG5sZXQgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGxcblxuZnVuY3Rpb24gZ2V0QWN0aXZlQnV0dG9uc0JhcigpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtdHlwZT1cInZpZGVvLW9zZFwiXTpub3QoLmhpZGUpIC5idXR0b25zJylcbn1cblxuLy8gV2FpdCBmb3IgdGhlIE9TRCdzIGAuYnV0dG9uc2AgY29udGFpbmVyIHRvIGV4aXN0XG5mdW5jdGlvbiB3YWl0Rm9yQnV0dG9uc0NvbnRhaW5lcihvblJlYWR5OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKGdldEFjdGl2ZUJ1dHRvbnNCYXIoKSkge1xuICAgICAgICBvblJlYWR5KClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICBidXR0b25zQ29udGFpbmVyT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGlmICghZ2V0QWN0aXZlQnV0dG9uc0JhcigpKSByZXR1cm5cbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyID0gbnVsbFxuICAgICAgICBvblJlYWR5KClcbiAgICB9KVxuICAgIGJ1dHRvbnNDb250YWluZXJPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdzaG93Jywgdmlld1Nob3dFdmVudEhhbmRsZXIpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB2aWV3U2hvd0V2ZW50SGFuZGxlcilcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKCkpXG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVJhdGluZ0J1dHRvbigpOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIGdldEFjdGl2ZUJ1dHRvbnNCYXIoKT8ucXVlcnlTZWxlY3RvcignLmJ0blVzZXJSYXRpbmcuYXV0b1NpemUucGFwZXItaWNvbi1idXR0b24tbGlnaHQnKSA/PyBudWxsXG59XG5cbmZ1bmN0aW9uIGdldExhdGVzdFVzZXJSYXRpbmdJdGVtSWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGdldEFjdGl2ZVJhdGluZ0J1dHRvbigpPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA/PyBudWxsXG59XG5cbmxldCBsYXN0VHJhY2tlZFBvc2l0aW9uU2Vjb25kOiBudW1iZXIgPSAtMVxuZnVuY3Rpb24gb25WaWRlb1RpbWVVcGRhdGUodGhpczogSFRNTFZpZGVvRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uU2Vjb25kID0gTWF0aC5mbG9vcih0aGlzLmN1cnJlbnRUaW1lKVxuICAgIGlmIChwb3NpdGlvblNlY29uZCA9PT0gbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCkgcmV0dXJuXG4gICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IHBvc2l0aW9uU2Vjb25kXG5cbiAgICBjb25zdCBpdGVtSWQgPSBnZXRMYXRlc3RVc2VyUmF0aW5nSXRlbUlkKClcbiAgICBpZiAoIWl0ZW1JZCkgcmV0dXJuXG5cbiAgICBpZiAoaXRlbUlkICE9PSBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWQpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNJdGVtSWQgPSBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZU1lZGlhU291cmNlSWRcbiAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gaXRlbUlkXG4gICAgICAgIHNldEl0ZW1PdmVybGF5QWN0aXZlKHByZXZpb3VzSXRlbUlkLCBmYWxzZSlcbiAgICAgICAgc2V0SXRlbU92ZXJsYXlBY3RpdmUoaXRlbUlkLCB0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSBwcm9ncmFtRGF0YVN0b3JlLmdldEl0ZW1CeUlkKGl0ZW1JZClcbiAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0uUnVuVGltZVRpY2tzKSByZXR1cm5cblxuICAgIGNvbnN0IHBvc2l0aW9uVGlja3MgPSB0aGlzLmN1cnJlbnRUaW1lICogMTBfMDAwXzAwMFxuICAgIGNvbnN0IHBsYXllZFBlcmNlbnRhZ2UgPSAocG9zaXRpb25UaWNrcyAvIGl0ZW0uUnVuVGltZVRpY2tzKSAqIDEwMFxuXG4gICAgcHJvZ3JhbURhdGFTdG9yZS51cGRhdGVJdGVtKHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgVXNlckRhdGE6IHtcbiAgICAgICAgICAgIC4uLml0ZW0uVXNlckRhdGEsXG4gICAgICAgICAgICBQbGF5YmFja1Bvc2l0aW9uVGlja3M6IHBvc2l0aW9uVGlja3MsXG4gICAgICAgICAgICBQbGF5ZWRQZXJjZW50YWdlOiBwbGF5ZWRQZXJjZW50YWdlLFxuICAgICAgICAgICAgUGxheWVkOiBwbGF5ZWRQZXJjZW50YWdlID49IHByb2dyYW1EYXRhU3RvcmUuc2VydmVyU2V0dGluZ3MuTWF4UmVzdW1lUGN0XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBvblZpZGVvUmF0ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLmVuZHNBdFtkYXRhLWl0ZW0taWRdJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHByb2dyYW1EYXRhU3RvcmUuZ2V0SXRlbUJ5SWQoZWxlbWVudC5kYXRhc2V0Lml0ZW1JZClcbiAgICAgICAgaWYgKGl0ZW0pIHVwZGF0ZUVuZFRpbWVEaXNwbGF5KGl0ZW0pXG4gICAgfSlcbn1cblxuLy8gVHJhY2tzIHdoaWNoIEJveFNldC9QbGF5bGlzdCBkZXRhaWxzIHBhZ2UgKGlmIGFueSkgd2FzIHZpc2l0ZWQgaW1tZWRpYXRlbHkgYmVmb3JlIG5hdmlnYXRpbmcgaW50byBwbGF5YmFja1xuY29uc3QgREVUQUlMU19ST1VURV9QQVRIOiBzdHJpbmcgPSAnL2RldGFpbHMnXG5jb25zdCBEQVNIQk9BUkRfUk9VVEVfUEFUSDogc3RyaW5nID0gJy9ob21lJ1xuY29uc3QgY29sbGVjdGlvbkxpa2VJdGVtVHlwZXM6IFNldDxJdGVtVHlwZT4gPSBuZXcgU2V0KFtJdGVtVHlwZS5Cb3hTZXQsIEl0ZW1UeXBlLlBsYXlsaXN0XSlcbmxldCBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkOiBzdHJpbmcgPSBudWxsXG5jb25zdCBFTVBUWV9HVUlEID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCdcblxuZnVuY3Rpb24gcmVjb3JkU291cmNlQ29sbGVjdGlvbihjb2xsZWN0aW9uSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHByb2dyYW1EYXRhU3RvcmUuaW52YWxpZGF0ZUdyb3Vwc0NhY2hlKClcblxuICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLlNFVF9TT1VSQ0VfQ09MTEVDVElPTn1gXG4gICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCkpXG4gICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9JywgQXBpQ2xpZW50LmRldmljZUlkKCkpXG4gICAgICAgIC5yZXBsYWNlKCd7Y29sbGVjdGlvbklkfScsIGNvbGxlY3Rpb25JZCkpXG4gICAgQXBpQ2xpZW50LmFqYXgoe3R5cGU6ICdHRVQnLCB1cmx9KS5jYXRjaCgoZXg6IHVua25vd24pID0+IGxvZ2dlci5lcnJvcihcIkNvdWxkbid0IHJlY29yZCBzb3VyY2UgY29sbGVjdGlvbiBmb3IgcGxheWJhY2sgc2Vzc2lvblwiLCBleCkpXG59XG5cbmZ1bmN0aW9uIGNsZWFyU291cmNlQ29sbGVjdGlvbigpOiB2b2lkIHtcbiAgICByZWNvcmRTb3VyY2VDb2xsZWN0aW9uKEVNUFRZX0dVSUQpXG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVTb3VyY2VDb2xsZWN0aW9uKGN1cnJlbnRSb3V0ZVBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFtjdXJyZW50UGF0aCwgY3VycmVudFF1ZXJ5XSA9IGN1cnJlbnRSb3V0ZVBhdGguc3BsaXQoJz8nKVxuICAgIGNvbnN0IHByZXZpb3VzUGF0aCA9IHByZXZpb3VzUm91dGVQYXRoPy5zcGxpdCgnPycpWzBdXG5cbiAgICBpZiAoY3VycmVudFBhdGggPT09IERBU0hCT0FSRF9ST1VURV9QQVRIKSB7XG4gICAgICAgIHBlbmRpbmdTb3VyY2VDb2xsZWN0aW9uSWQgPSBudWxsXG4gICAgICAgIGNsZWFyU291cmNlQ29sbGVjdGlvbigpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjdXJyZW50UGF0aCA9PT0gREVUQUlMU19ST1VURV9QQVRIKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbHNJZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoY3VycmVudFF1ZXJ5ID8/ICcnKS5nZXQoJ2lkJylcbiAgICAgICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IG51bGxcbiAgICAgICAgaWYgKCFkZXRhaWxzSWQpIHJldHVyblxuXG4gICAgICAgIEFwaUNsaWVudC5nZXRJdGVtKEFwaUNsaWVudC5nZXRDdXJyZW50VXNlcklkKCksIGRldGFpbHNJZCkudGhlbigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVR5cGU6IEl0ZW1UeXBlID0gSXRlbVR5cGVbaXRlbS5UeXBlIGFzIHVua25vd24gYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgcGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZCA9IGNvbGxlY3Rpb25MaWtlSXRlbVR5cGVzLmhhcyhpdGVtVHlwZSkgPyBkZXRhaWxzSWQgOiBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2aWRlb1BhdGhzLmluY2x1ZGVzKGN1cnJlbnRQYXRoKSAmJiBwcmV2aW91c1BhdGggPT09IERFVEFJTFNfUk9VVEVfUEFUSCkge1xuICAgICAgICBpZiAocGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZClcbiAgICAgICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24ocGVuZGluZ1NvdXJjZUNvbGxlY3Rpb25JZClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2xlYXJTb3VyY2VDb2xsZWN0aW9uKClcbiAgICB9XG5cbiAgICBwZW5kaW5nU291cmNlQ29sbGVjdGlvbklkID0gbnVsbFxufVxuXG4vLyBSZXRyaWV2ZSB0aGUgY3VycmVudCBjb2xsZWN0aW9uL3BsYXlsaXN0IGlkIHRocm91Z2ggYSBwbGF5IGFjdGlvbiBvbiBhIGNhcmQgdGhlIHNhbWUgd2F5IGFzIGhlbGx5ZmluIGRvZXMgaXQgaXRzZWxmXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamVsbHlmaW4vamVsbHlmaW4td2ViL2Jsb2IvcmVsZWFzZS0xMC4xMS56L3NyYy9jb21wb25lbnRzL3Nob3J0Y3V0cy5qcyNMMjE2XG5jb25zdCBQTEFZQkFDS19UUklHR0VSX0FDVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbJ3BsYXknLCAncmVzdW1lJywgJ3BsYXlhbGxmcm9taGVyZSddKVxuZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrQ2FwdHVyZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8vIE9ubHkgY2FwdHVyZSBuYXRpdmUgZXZlbnRzIGFuZCBpZ25vcmUgYW55IGZyb20gdGhlIFByZXZpZXcgTGlzdFxuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8uY2xvc2VzdD8uKCcjcHJldmlld1BvcHVwJykpIHJldHVyblxuXG4gICAgY29uc3QgYWN0aW9uRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5jbG9zZXN0Py4oJ1tkYXRhLWFjdGlvbl0nKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcbiAgICBpZiAoIWFjdGlvbkVsZW1lbnQgfHwgIVBMQVlCQUNLX1RSSUdHRVJfQUNUSU9OUy5oYXMoYWN0aW9uRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJykpKSByZXR1cm5cblxuICAgIGNvbnN0IGNhcmQgPSBhY3Rpb25FbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLWlkXScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgIGlmICghY2FyZCkgcmV0dXJuXG5cbiAgICBjb25zdCBjaGlsZE9mQ29sbGVjdGlvbklkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGVjdGlvbmlkJykgPz8gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWxpc3RpZCcpXG4gICAgaWYgKGNoaWxkT2ZDb2xsZWN0aW9uSWQpIHtcbiAgICAgICAgcmVjb3JkU291cmNlQ29sbGVjdGlvbihjaGlsZE9mQ29sbGVjdGlvbklkKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjYXJkSXRlbVR5cGU6IEl0ZW1UeXBlID0gSXRlbVR5cGVbY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpIGFzIHVua25vd24gYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgIGNvbnN0IGNhcmRJZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcbiAgICBpZiAoY2FyZElkICYmIGNvbGxlY3Rpb25MaWtlSXRlbVR5cGVzLmhhcyhjYXJkSXRlbVR5cGUpKSB7XG4gICAgICAgIHJlY29yZFNvdXJjZUNvbGxlY3Rpb24oY2FyZElkKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgY2xlYXJTb3VyY2VDb2xsZWN0aW9uKClcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Eb2N1bWVudENsaWNrQ2FwdHVyZSwgdHJ1ZSlcblxuZnVuY3Rpb24gdmlld1Nob3dFdmVudEhhbmRsZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFJvdXRlUGF0aDogc3RyaW5nID0gZ2V0TG9jYXRpb25QYXRoKClcblxuICAgIGZ1bmN0aW9uIGdldExvY2F0aW9uUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsb2NhdGlvbjogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlSW5kZXg6IG51bWJlciA9IGxvY2F0aW9uLmxhc3RJbmRleE9mKCcvJylcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnN1YnN0cmluZyhjdXJyZW50Um91dGVJbmRleClcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsIGF0dGVtcHQgdG8gbG9hZCB0aGUgdmlkZW8gdmlldyBvciBzY2hlZHVsZSByZXRyaWVzLlxuICAgIGNhcHR1cmVTb3VyY2VDb2xsZWN0aW9uKGN1cnJlbnRSb3V0ZVBhdGgpXG4gICAgYXR0ZW1wdExvYWRWaWRlb1ZpZXcoKVxuICAgIHByZXZpb3VzUm91dGVQYXRoID0gY3VycmVudFJvdXRlUGF0aFxuICAgIFxuICAgIGZ1bmN0aW9uIGF0dGVtcHRMb2FkVmlkZW9WaWV3KCk6IHZvaWQge1xuICAgICAgICBpZiAodmlkZW9QYXRocy5pbmNsdWRlcyhjdXJyZW50Um91dGVQYXRoKSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByZXZpZXcgY29udGFpbmVyIGlzIGFscmVhZHkgbG9hZGVkIGJlZm9yZSBsb2FkaW5nXG4gICAgICAgICAgICBpZiAocHJldmlld0NvbnRhaW5lckxvYWRlZCB8fCBpc1ByZXZpZXdCdXR0b25DcmVhdGVkKCkpIHJldHVyblxuXG4gICAgICAgICAgICAvLyBSZXNlcnZlIGltbWVkaWF0ZWx5IHNvIGEgc2Vjb25kIHZpZXdzaG93IGRvZXNuJ3QgcXVldWUgYW5vdGhlciB3YWl0XG4gICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyTG9hZGVkID0gdHJ1ZVxuICAgICAgICAgICAgd2FpdEZvckJ1dHRvbnNDb250YWluZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIG5hdmlnYXRlZCBiYWNrIG91dCBvZiB0aGUgcGxheWVyKSB3aGlsZSB3ZSB3ZXJlIHdhaXRpbmdcbiAgICAgICAgICAgICAgICBpZiAoIXZpZGVvUGF0aHMuaW5jbHVkZXMoZ2V0TG9jYXRpb25QYXRoKCkpIHx8IGlzUHJldmlld0J1dHRvbkNyZWF0ZWQoKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgbG9hZFZpZGVvVmlldygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvUGF0aHMuaW5jbHVkZXMocHJldmlvdXNSb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICB1bmxvYWRWaWRlb1ZpZXcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGxvYWRWaWRlb1ZpZXcoKTogdm9pZCB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIkxvYWRpbmcgdmlkZW8gdmlld1wiKVxuXG4gICAgICAgIGxldCBwcmV2aWV3QnV0dG9uOiBQcmV2aWV3QnV0dG9uVGVtcGxhdGUgfCBudWxsID0gbnVsbFxuICAgICAgICBsZXQgcHJldmlld0J1dHRvbkxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgICAgIC8vIE9ubHkgYWN0dWFsbHkgaW5zZXJ0ZWQgaW50byB0aGUgT1NEIG9uY2UgdGhlIGl0ZW0ncyB0eXBlIGlzIGNvbmZpcm1lZCBlbmFibGVkIC0gc2VlIHByZWxvYWRQcmV2aWV3RGF0YS5cbiAgICAgICAgZnVuY3Rpb24gaW5zZXJ0UHJldmlld0J1dHRvbigpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmIChwcmV2aWV3QnV0dG9uKSByZXR1cm5cbiAgICAgICAgICAgIGlmICghdmlkZW9QYXRocy5pbmNsdWRlcyhnZXRMb2NhdGlvblBhdGgoKSkpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBidXR0b25zQmFyID0gZ2V0QWN0aXZlQnV0dG9uc0JhcigpXG4gICAgICAgICAgICBpZiAoIWJ1dHRvbnNCYXIpIHtcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQnV0dG9uc0NvbnRhaW5lcihpbnNlcnRQcmV2aWV3QnV0dG9uKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsYXN0RWxlbWVudENoaWxkLnBhcmVudEVsZW1lbnQgaXMgdXNlZCBmb3IgY2FzdGluZyBmcm9tIEVsZW1lbnQgdG8gSFRNTEVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudDogSFRNTEVsZW1lbnQgPSBidXR0b25zQmFyLmxhc3RFbGVtZW50Q2hpbGQucGFyZW50RWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikuZmluZEluZGV4KChjaGlsZDogRWxlbWVudCk6IGJvb2xlYW4gPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuVXNlclJhdGluZ1wiKSk7XG4gICAgICAgICAgICAvLyBpZiBpbmRleCBpcyBpbnZhbGlkIHRyeSB0byB1c2UgdGhlIG9sZCBwb3NpdGlvbiAodXNlZCBpbiBKZWxseWZpbiAxMC44LjEyKVxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSlcbiAgICAgICAgICAgICAgICBpbmRleCA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5maW5kSW5kZXgoKGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvc2RUaW1lVGV4dFwiKSlcblxuICAgICAgICAgICAgcHJldmlld0J1dHRvbiA9IG5ldyBQcmV2aWV3QnV0dG9uVGVtcGxhdGUocGFyZW50LCBpbmRleClcbiAgICAgICAgICAgIHByZXZpZXdCdXR0b24ucmVuZGVyKHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIpXG4gICAgICAgICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxWaWRlb0VsZW1lbnQ+KCd2aWRlby5odG1sdmlkZW9wbGF5ZXInKVxuICAgICAgICAgICAgdmlkZW9FbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgb25WaWRlb1RpbWVVcGRhdGUpXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ3JhdGVjaGFuZ2UnLCBvblZpZGVvUmF0ZUNoYW5nZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZldGNoUHJldmlld0l0ZW1UeXBlID0gYXN5bmMgKGl0ZW1JZDogc3RyaW5nKTogUHJvbWlzZTxJdGVtVHlwZT4gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuSVRFTV9QUkVWSUVXX1RZUEV9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHVzZXJJZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2RldmljZUlkfScsIEFwaUNsaWVudC5kZXZpY2VJZCgpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7aXRlbUlkfScsIGl0ZW1JZCkpXG4gICAgICAgICAgICBjb25zdCByYXdUeXBlOiBzdHJpbmcgPSBhd2FpdCBBcGlDbGllbnQuYWpheCh7IHR5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnanNvbicgfSlcbiAgICAgICAgICAgIHJldHVybiBJdGVtVHlwZVtyYXdUeXBlIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRJdGVtUHJldmlld0RhdGEgPSBhc3luYyAoaXRlbUlkOiBzdHJpbmcpOiBQcm9taXNlPHtcbiAgICAgICAgICAgIGl0ZW1UeXBlOiBzdHJpbmcsIGNvbnRhaW5lck5hbWU6IHN0cmluZyB8IG51bGwsIGdyb3VwczogR3JvdXBbXSwgYWN0aXZlR3JvdXBJZDogc3RyaW5nLCBhY3RpdmVJdGVtSW5kZXg6IG51bWJlclxuICAgICAgICB9PiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBBcGlDbGllbnQuZ2V0Q3VycmVudFVzZXJJZCgpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBcGlDbGllbnQuZ2V0VXJsKGAvJHtFbmRwb2ludHMuQkFTRX0ke0VuZHBvaW50cy5JVEVNX1BSRVZJRVdfREFUQX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t1c2VySWR9JywgdXNlcklkKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7ZGV2aWNlSWR9JywgQXBpQ2xpZW50LmRldmljZUlkKCkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tpdGVtSWR9JywgaXRlbUlkKSlcbiAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IEFwaUNsaWVudC5hamF4KHsgdHlwZTogJ0dFVCcsIHVybCwgZGF0YVR5cGU6ICdqc29uJyB9KVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpdGVtVHlwZTogcmF3Lkl0ZW1UeXBlLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck5hbWU6IHJhdy5Db250YWluZXJOYW1lLFxuICAgICAgICAgICAgICAgIGdyb3VwczogcmF3Lkdyb3Vwcy5tYXAoKGc6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogZy5Hcm91cElkLFxuICAgICAgICAgICAgICAgICAgICBncm91cE5hbWU6IGcuR3JvdXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgIGluZGV4TnVtYmVyOiBnLkluZGV4TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZWRJdGVtQ291bnQ6IGcuUGxheWVkSXRlbUNvdW50LFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1Db3VudDogZy5Ub3RhbEl0ZW1Db3VudCxcbiAgICAgICAgICAgICAgICAgICAgcGxheWVkUnVudGltZVRpY2tzOiBnLlBsYXllZFJ1bnRpbWVUaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxSdW50aW1lVGlja3M6IGcuVG90YWxSdW50aW1lVGlja3NcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgYWN0aXZlR3JvdXBJZDogcmF3LkFjdGl2ZUdyb3VwSWQsXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbUluZGV4OiByYXcuQWN0aXZlSXRlbUluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkR3JvdXBJdGVtcyA9IGFzeW5jIChncm91cElkOiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciA9IDAsIGxpbWl0OiBudW1iZXIgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZSk6IFByb21pc2U8R3JvdXBJdGVtc1Jlc3VsdD4gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQXBpQ2xpZW50LmdldEN1cnJlbnRVc2VySWQoKVxuICAgICAgICAgICAgY29uc3QgdXJsID0gQXBpQ2xpZW50LmdldFVybChgLyR7RW5kcG9pbnRzLkJBU0V9JHtFbmRwb2ludHMuR1JPVVBfSVRFTVN9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7dXNlcklkfScsIHVzZXJJZClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne2dyb3VwSWR9JywgZ3JvdXBJZCksXG4gICAgICAgICAgICAgICAgeyBzdGFydEluZGV4LCBsaW1pdCB9KVxuICAgICAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IEdyb3VwSXRlbXNSZXN1bHQgPSB7IGl0ZW1zOiByYXcuSXRlbXMsIHRvdGFsUmVjb3JkQ291bnQ6IHJhdy5Ub3RhbFJlY29yZENvdW50IH1cblxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5yZWNvcmRMb2FkZWRJdGVtcyhncm91cElkLCByZXN1bHQuaXRlbXMsIHN0YXJ0SW5kZXgsIHJlc3VsdC50b3RhbFJlY29yZENvdW50KVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBwcmVsb2FkUHJldmlld0RhdGEoaXRlbUlkOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1JZCkgcmV0dXJuXG4gICAgICAgICAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUuaXNHcm91cHNDYWNoZUV4cGlyZWQgJiYgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMuc29tZShnID0+IGcuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uSWQgPT09IGl0ZW1JZCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gQWxyZWFkeSBmZXRjaGVkIChhbmQgdGhlcmVmb3JlIGFscmVhZHkga25vd24tYWxsb3dlZCkgZWFybGllciB0aGlzIHNlc3Npb24gLSBqdXN0IHNob3cgdGhlIGJ1dHRvbi5cbiAgICAgICAgICAgICAgICBpbnNlcnRQcmV2aWV3QnV0dG9uKClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkKSByZXR1cm5cblxuICAgICAgICAgICAgcGVuZGluZ1ByZWxvYWRJdGVtSWQgPSBpdGVtSWRcbiAgICAgICAgICAgIHBlbmRpbmdQcmVsb2FkID0gKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aWV3VHlwZSA9IGF3YWl0IGZldGNoUHJldmlld0l0ZW1UeXBlKGl0ZW1JZClcbiAgICAgICAgICAgICAgICBpZiAoIXByb2dyYW1EYXRhU3RvcmUuaXNUeXBlQWxsb3dlZEZvclByZXZpZXcocHJldmlld1R5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJldmlldyBub3QgZW5hYmxlZCBmb3IgaXRlbSB0eXBlICcke3ByZXZpZXdUeXBlfScsIHNraXBwaW5nIGJ1dHRvbiBmb3IgaXRlbSAke2l0ZW1JZH1gKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnNlcnRQcmV2aWV3QnV0dG9uKClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbVR5cGUsIGNvbnRhaW5lck5hbWUsIGdyb3VwcywgYWN0aXZlR3JvdXBJZCwgYWN0aXZlSXRlbUluZGV4IH0gPSBhd2FpdCBsb2FkSXRlbVByZXZpZXdEYXRhKGl0ZW1JZClcbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmdyb3VwcyA9IGdyb3Vwc1xuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUubWFya0dyb3Vwc0ZldGNoZWQoKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUudHlwZSA9IEl0ZW1UeXBlW2l0ZW1UeXBlIGFzIGtleW9mIHR5cGVvZiBJdGVtVHlwZV1cbiAgICAgICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmJveFNldE5hbWUgPSBjb250YWluZXJOYW1lID8/ICcnXG5cbiAgICAgICAgICAgICAgICBjb25zdCBQQUdFX1NJWkUgPSBwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLkVwaXNvZGVQYWdlU2l6ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VPZkFjdGl2ZUVwaXNvZGUgPSBNYXRoLmZsb29yKGFjdGl2ZUl0ZW1JbmRleCAvIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93U3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIChwYWdlT2ZBY3RpdmVFcGlzb2RlIC0gMSkgKiBQQUdFX1NJWkUpXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFdpbmRvd0xpbWl0ID0gKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgKyAyKSAqIFBBR0VfU0laRSAtIGluaXRpYWxXaW5kb3dTdGFydEluZGV4XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBsb2FkR3JvdXBJdGVtcyhhY3RpdmVHcm91cElkLCBpbml0aWFsV2luZG93U3RhcnRJbmRleCwgaW5pdGlhbFdpbmRvd0xpbWl0KVxuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJlbG9hZGVkICR7Z3JvdXBzLmxlbmd0aH0gZ3JvdXAocykgZm9yIGl0ZW0gJHtpdGVtSWR9YClcbiAgICAgICAgICAgIH0pKCkuY2F0Y2goKGV4OiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcHJlbG9hZCBwcmV2aWV3IGRhdGFcIiwgZXgpXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ1ByZWxvYWRJdGVtSWQgPT09IGl0ZW1JZCkgcGVuZGluZ1ByZWxvYWRJdGVtSWQgPSBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2FpdCB0aGF0IGRhdGEtaWQgZ2V0cyBwb3B1bGF0ZWQgYnkgSmVsbHlmaW5cbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVQcmVsb2FkKCk6IHZvaWQge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG4gICAgICAgICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgcHJlbG9hZFByZXZpZXdEYXRhKGl0ZW1JZClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0QWN0aXZlUmF0aW5nQnV0dG9uKClcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHJhdGluZyBidXR0b24gaXRzZWxmIGhhc24ndCBiZWVuIGNyZWF0ZWQgeWV0IC0gd2FpdCBmb3IgdGhlIE9TRCB0byBmaW5pc2ggYnVpbGRpbmcgaXQsIHRoZW4gcmV0cnkuXG4gICAgICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2V0QWN0aXZlUmF0aW5nQnV0dG9uKCkpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUHJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgICAgICAgICAgICAgaWYgKCFpZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgICAgICAgICBwcmVsb2FkT2JzZXJ2ZXIgPSBudWxsXG4gICAgICAgICAgICAgICAgcHJlbG9hZFByZXZpZXdEYXRhKGlkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHByZWxvYWRPYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGF0YS1pZCddIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzY2hlZHVsZVByZWxvYWQoKVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHByZXZpZXdCdXR0b25DbGlja0hhbmRsZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBpZiAocHJldmlld0J1dHRvbkxvYWRpbmcpIHJldHVyblxuICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRvUHJldmlld0J1dHRvbkNsaWNrKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3Qgb3BlbiBwcmV2aWV3IHBvcHVwXCIsIGV4KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKClcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbkxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9QcmV2aWV3QnV0dG9uQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVyaW1lbnRhbCBhbmQgd2lsbCBtYXliZSBiZSB1c2VkIGluIGZ1dHVyZSByZWxlYXNlc1xuICAgICAgICAgICAgY29uc3QgZ2V0Tm93UGxheWluZ0l0ZW1JZEZyb21TZXNzaW9uID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IEFwaUNsaWVudC5nZXRVcmwoYC8ke0VuZHBvaW50cy5CQVNFfSR7RW5kcG9pbnRzLk5PV19QTEFZSU5HX0lURU19YClcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgQXBpQ2xpZW50LmFqYXgoeyB0eXBlOiAnR0VUJywgdXJsLCBkYXRhVHlwZTogJ2pzb24nIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXg6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgcmVzb2x2ZSBub3ctcGxheWluZyBpdGVtIGZyb20gc2Vzc2lvbiwgZmFsbGluZyBiYWNrIHRvIE9TRCByYXRpbmcgYnV0dG9uXCIsIGV4KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyOiBEaWFsb2dDb250YWluZXJUZW1wbGF0ZSA9IG5ldyBEaWFsb2dDb250YWluZXJUZW1wbGF0ZShkb2N1bWVudC5ib2R5LCBkb2N1bWVudC5ib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICBkaWFsb2dDb250YWluZXIucmVuZGVyKClcblxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb250ZW50Q29udGFpbmVyJylcblxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZ2V0TGF0ZXN0VXNlclJhdGluZ0l0ZW1JZCgpXG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHJlc3BvbnNlIG9mIHRoZSBPU0QncyBwcmVsb2FkIG9mIHRoaXMgc2FtZSBpdGVtLCB3YWl0IGZvciBpdCBpbnN0ZWFkIG9mIGZpcmluZyBhIGR1cGxpY2F0ZSBmZXRjaC5cbiAgICAgICAgICAgIGlmIChwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9PT0gaXRlbUlkICYmIHBlbmRpbmdQcmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByZXZpZXdTY3JvbGxTcGlubmVyXCI+JHtzcGlubmVySHRtbCgpfTwvZGl2PmBcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVNwaW5uZXIoY29udGVudERpdilcbiAgICAgICAgICAgICAgICBhd2FpdCBwZW5kaW5nUHJlbG9hZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjYWNoZWRHcm91cCA9ICFwcm9ncmFtRGF0YVN0b3JlLmlzR3JvdXBzQ2FjaGVFeHBpcmVkXG4gICAgICAgICAgICAgICAgPyBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5maW5kKGcgPT4gZy5pdGVtcy5zb21lKGl0ZW0gPT4gaXRlbS5JZCA9PT0gaXRlbUlkKSlcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICAgICAgICBsZXQgYWN0aXZlR3JvdXBJZDogc3RyaW5nXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFBhZ2U6IEdyb3VwSXRlbXNSZXN1bHRcbiAgICAgICAgICAgIGxldCBpbml0aWFsV2luZG93U3RhcnRJbmRleDogbnVtYmVyXG5cbiAgICAgICAgICAgIGlmIChjYWNoZWRHcm91cCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgT3BlbmluZyBwcmV2aWV3IHBvcHVwIGZvciBpdGVtICR7aXRlbUlkfSB1c2luZyBjYWNoZWQgZ3JvdXAgZGF0YWApXG4gICAgICAgICAgICAgICAgYWN0aXZlR3JvdXBJZCA9IGNhY2hlZEdyb3VwLmdyb3VwSWRcbiAgICAgICAgICAgICAgICBpbml0aWFsV2luZG93U3RhcnRJbmRleCA9IGNhY2hlZEdyb3VwLmxvYWRlZFN0YXJ0SW5kZXggPz8gMFxuICAgICAgICAgICAgICAgIGluaXRpYWxQYWdlID0geyBpdGVtczogWy4uLmNhY2hlZEdyb3VwLml0ZW1zXSwgdG90YWxSZWNvcmRDb3VudDogY2FjaGVkR3JvdXAubG9hZGVkVG90YWxSZWNvcmRDb3VudCA/PyBjYWNoZWRHcm91cC5pdGVtcy5sZW5ndGggfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYE9wZW5pbmcgcHJldmlldyBwb3B1cCBmb3IgaXRlbSAke2l0ZW1JZH0sIGZldGNoaW5nIGdyb3VwIGRhdGFgKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcmV2aWV3U2Nyb2xsU3Bpbm5lclwiPiR7c3Bpbm5lckh0bWwoKX08L2Rpdj5gXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVTcGlubmVyKGNvbnRlbnREaXYpXG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1UeXBlLCBjb250YWluZXJOYW1lLCBncm91cHMsIGFjdGl2ZUdyb3VwSWQ6IGZldGNoZWRBY3RpdmVHcm91cElkLCBhY3RpdmVJdGVtSW5kZXggfSA9IGF3YWl0IGxvYWRJdGVtUHJldmlld0RhdGEoaXRlbUlkKVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzID0gZ3JvdXBzXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5tYXJrR3JvdXBzRmV0Y2hlZCgpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS50eXBlID0gSXRlbVR5cGVbaXRlbVR5cGUgYXMga2V5b2YgdHlwZW9mIEl0ZW1UeXBlXVxuICAgICAgICAgICAgICAgIHByb2dyYW1EYXRhU3RvcmUuYm94U2V0TmFtZSA9IGNvbnRhaW5lck5hbWUgPz8gJydcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cElkID0gZmV0Y2hlZEFjdGl2ZUdyb3VwSWRcblxuICAgICAgICAgICAgICAgIC8vIExvYWQgYSAzLXBhZ2Ugd2luZG93IChwYWdlIG9mIHRoZSBhY3RpdmUgZXBpc29kZSwgcGx1cyBvbmUgcGFnZSBiZWZvcmUgYW5kIGFmdGVyKVxuICAgICAgICAgICAgICAgIGNvbnN0IFBBR0VfU0laRSA9IHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuRXBpc29kZVBhZ2VTaXplXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZU9mQWN0aXZlRXBpc29kZSA9IE1hdGguZmxvb3IoYWN0aXZlSXRlbUluZGV4IC8gUEFHRV9TSVpFKVxuICAgICAgICAgICAgICAgIGluaXRpYWxXaW5kb3dTdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgKHBhZ2VPZkFjdGl2ZUVwaXNvZGUgLSAxKSAqIFBBR0VfU0laRSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsV2luZG93TGltaXQgPSAocGFnZU9mQWN0aXZlRXBpc29kZSArIDIpICogUEFHRV9TSVpFIC0gaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXhcblxuICAgICAgICAgICAgICAgIGluaXRpYWxQYWdlID0gYXdhaXQgbG9hZEdyb3VwSXRlbXMoYWN0aXZlR3JvdXBJZCwgaW5pdGlhbFdpbmRvd1N0YXJ0SW5kZXgsIGluaXRpYWxXaW5kb3dMaW1pdClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkID0gaXRlbUlkXG4gICAgICAgICAgICBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwSWQgPSBhY3RpdmVHcm91cElkXG5cbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJycgLy8gcmVtb3ZlIHRoZSBsb2FkaW5nIHNwaW5uZXJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdUb2tlbiA9IHByb2dyYW1EYXRhU3RvcmUuYmVnaW5OZXdWaWV3KClcblxuICAgICAgICAgICAgLy8gQSBzdGFuZGFsb25lIG1vdmllIGhhcyBubyBtZWFuaW5nZnVsIGdyb3VwIG5hbWUgb2YgaXRzIG93bjsgYW4gaXRlbSBzb3VyY2VkIGZyb20gYSBQbGF5bGlzdC9Cb3hTZXRcbiAgICAgICAgICAgIC8vIGFscmVhZHkgaGFzIHRoYXQgY29sbGVjdGlvbidzIHJlYWwgbmFtZSwgc28gb25seSB0aGUgc3RhbmRhbG9uZS1tb3ZpZSBjYXNlIGdldHMgcmVsYWJlbGVkLlxuICAgICAgICAgICAgY29uc3QgaXNTdGFuZGFsb25lTW92aWUgPSBwcm9ncmFtRGF0YVN0b3JlLnR5cGUgPT09IEl0ZW1UeXBlLk1vdmllXG4gICAgICAgICAgICBjb25zdCBpc1NvdXJjZWRGcm9tQ29sbGVjdGlvbiA9IHByb2dyYW1EYXRhU3RvcmUudHlwZSA9PT0gSXRlbVR5cGUuUGxheWxpc3QgfHwgcHJvZ3JhbURhdGFTdG9yZS50eXBlID09PSBJdGVtVHlwZS5Cb3hTZXRcblxuICAgICAgICAgICAgLy8gTGFiZWwgdGhlIG1vdmllJ3Mgb3duIGdyb3VwIGFzIHRoZSBjb2xsZWN0aW9uIHNlYXJjaCB1cCBmcm9udCwgZXZlbiBiZWZvcmUgYW55IHJlc3VsdHMgYXJlIGtub3duLlxuICAgICAgICAgICAgaWYgKGlzU3RhbmRhbG9uZU1vdmllICYmIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwcy5tYXAoKGcsIGkpID0+IGkgPT09IDAgPyB7IC4uLmcsIGdyb3VwTmFtZTogU0VBUkNIX0NPTExFQ1RJT05TX0dST1VQX05BTUUgfSA6IGcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9ubHkgc2VhcmNoIG9uY2UgcGVyIGZyZXNoIGdyb3VwLWZldGNoIChub3Qgb24gZXZlcnkgcG9wdXAgcmVvcGVuIHdoaWxlIGNhY2hlZCBncm91cHMgYWxyZWFkeSBpbmNsdWRlIHRoZSBzZWFyY2ggcmVzdWx0cykuXG4gICAgICAgICAgICAvLyBnZXRDb250YWluaW5nQ29sbGVjdGlvbnMgaXRzZWxmIGlzIG1lbW9pemVkIHBlciBpdGVtIGZvciB0aGUgd2hvbGUgcGFnZSBzZXNzaW9uLCBzbyBldmVuIHRoaXMgY2FuJ3QgcmUtdHJpZ2dlciB0aGVcbiAgICAgICAgICAgIC8vIGV4cGVuc2l2ZSBiYWNrZW5kIHNjYW4gbW9yZSB0aGFuIG9uY2UgcGVyIGl0ZW0sIG5vIG1hdHRlciBob3cgb2Z0ZW4gdGhlIHBvcHVwIGlzIHJlb3BlbmVkIHdoaWxlIGl0J3MgcGVuZGluZy5cbiAgICAgICAgICAgIGNvbnN0IGlzU2VhcmNoaW5nQ29sbGVjdGlvbnMgPSAoaXNTdGFuZGFsb25lTW92aWUgfHwgaXNTb3VyY2VkRnJvbUNvbGxlY3Rpb24pICYmIHByb2dyYW1EYXRhU3RvcmUucGx1Z2luU2V0dGluZ3MuU2VhcmNoQ29udGFpbmluZ0NvbGxlY3Rpb25zICYmIHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgbGV0IGNvbGxlY3Rpb25zU2VhcmNoRG9uZSA9ICFpc1NlYXJjaGluZ0NvbGxlY3Rpb25zXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uc1NlYXJjaDogUHJvbWlzZTx2b2lkPiA9IGlzU2VhcmNoaW5nQ29sbGVjdGlvbnNcbiAgICAgICAgICAgICAgICA/IGdldENvbnRhaW5pbmdDb2xsZWN0aW9ucyhpdGVtSWQpLnRoZW4oY29sbGVjdGlvbkdyb3VwcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sbGVjdGlvbkdyb3Vwcy5sZW5ndGggfHwgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVNZWRpYVNvdXJjZUlkICE9PSBpdGVtSWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxmR3JvdXAgPSBwcm9ncmFtRGF0YVN0b3JlLmdyb3Vwc1swXVxuICAgICAgICAgICAgICAgICAgICAvLyBFeGNsdWRlIHRoZSBjb2xsZWN0aW9uL3BsYXlsaXN0IHRoaXMgaXRlbSB3YXMgYWxyZWFkeSBwbGF5ZWQgZnJvbSAtIGl0J3MgYWxyZWFkeSB0aGUgYWN0aXZlL2RlZmF1bHQgZ3JvdXAuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dyb3VwcyA9IGNvbGxlY3Rpb25Hcm91cHMuZmlsdGVyKGcgPT4gZy5ncm91cElkICE9PSBzZWxmR3JvdXAuZ3JvdXBJZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdHcm91cHMubGVuZ3RoKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbURhdGFTdG9yZS5ncm91cHMgPSBbc2VsZkdyb3VwLCAuLi5uZXdHcm91cHNdLm1hcCgoZywgaSkgPT4gKHsgLi4uZywgaW5kZXhOdW1iZXI6IGkgfSkpXG4gICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7IGNvbGxlY3Rpb25zU2VhcmNoRG9uZSA9IHRydWUgfSlcbiAgICAgICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpXG5cbiAgICAgICAgICAgIGNvbnN0IGNhblN3aXRjaEdyb3VwcyA9ICgpOiBib29sZWFuID0+IHByb2dyYW1EYXRhU3RvcmUudHlwZSAhPT0gSXRlbVR5cGUuTW92aWUgfHwgcHJvZ3JhbURhdGFTdG9yZS5wbHVnaW5TZXR0aW5ncy5TZWFyY2hDb250YWluaW5nQ29sbGVjdGlvbnNcblxuICAgICAgICAgICAgY29uc3QgcG9wdXBUaXRsZTogUG9wdXBUaXRsZVRlbXBsYXRlID0gbmV3IFBvcHVwVGl0bGVUZW1wbGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBGb2N1c0NvbnRhaW5lcicpLCAtMSwgcHJvZ3JhbURhdGFTdG9yZSlcbiAgICAgICAgICAgIHBvcHVwVGl0bGUucmVuZGVyKGFzeW5jIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIGlmICghY2FuU3dpdGNoR3JvdXBzKCkpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgcG9wdXBUaXRsZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbnRlbnRDb250YWluZXInKVxuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJydcblxuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVHcm91cEVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLCBjb250ZW50RGl2LCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwLmluZGV4TnVtYmVyLCBwb3B1cFRpdGxlLCBsb2FkR3JvdXBJdGVtcylcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cFZpZXdUb2tlbiA9IHByb2dyYW1EYXRhU3RvcmUuY3VycmVudFZpZXdUb2tlblxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25zU2VhcmNoRG9uZSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ3ByZXZpZXdTY3JvbGxTcGlubmVyJylcbiAgICAgICAgICAgICAgICBzcGlubmVyLmlubmVySFRNTCA9IHNwaW5uZXJIdG1sKClcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHNwaW5uZXIpXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVTcGlubmVyKHNwaW5uZXIpXG5cbiAgICAgICAgICAgICAgICBhd2FpdCBjb2xsZWN0aW9uc1NlYXJjaFxuICAgICAgICAgICAgICAgIC8vIFRoZSB2aWV3IG1heSBoYXZlIG1vdmVkIG9uIChlLmcuIGEgZ3JvdXAgd2FzIHNlbGVjdGVkLCBvciB0aGUgcG9wdXAgY2xvc2VkKSB3aGlsZSB0aGlzIHdhcyBsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGlmICghcHJvZ3JhbURhdGFTdG9yZS5pc0N1cnJlbnRWaWV3KGdyb3VwVmlld1Rva2VuKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBzcGlubmVyLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVHcm91cEVsZW1lbnRzKHByb2dyYW1EYXRhU3RvcmUuZ3JvdXBzLCBjb250ZW50RGl2LCBwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwLmluZGV4TnVtYmVyLCBwb3B1cFRpdGxlLCBsb2FkR3JvdXBJdGVtcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFN3aXRjaGFibGUoY2FuU3dpdGNoR3JvdXBzKCkpXG4gICAgICAgICAgICBwb3B1cFRpdGxlLnNldFZpc2libGUoY2FuU3dpdGNoR3JvdXBzKCkpXG5cbiAgICAgICAgICAgIGF3YWl0IGxpc3RFbGVtZW50RmFjdG9yeS5jcmVhdGVMYXp5SXRlbUxpc3QoY29udGVudERpdiwgKHN0YXJ0SW5kZXgpID0+IGxvYWRHcm91cEl0ZW1zKGFjdGl2ZUdyb3VwSWQsIHN0YXJ0SW5kZXgpLCB2aWV3VG9rZW4sIGluaXRpYWxQYWdlLCBpbml0aWFsV2luZG93U3RhcnRJbmRleClcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuc2V0VGV4dChwcm9ncmFtRGF0YVN0b3JlLmFjdGl2ZUdyb3VwPy5ncm91cE5hbWUgPz8gJycpXG4gICAgICAgICAgICBpZiAocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cCkgcG9wdXBUaXRsZS5zZXRXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cClcbiAgICAgICAgICAgIGlmIChwcm9ncmFtRGF0YVN0b3JlLnBsdWdpblNldHRpbmdzLlNob3dXYXRjaGVkQ291bnQgJiYgcHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8ucGxheWVkSXRlbUNvdW50ID09PSBVTktOT1dOX1dBVENIRURfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICBsaXN0RWxlbWVudEZhY3RvcnkuZW5zdXJlR3JvdXBXYXRjaGVkQ291bnQocHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odXBkYXRlZCA9PiBwb3B1cFRpdGxlLnNldFdhdGNoZWRDb3VudCh1cGRhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChleDogdW5rbm93bikgPT4gbG9nZ2VyLmVycm9yKGBDb3VsZG4ndCBsb2FkIHdhdGNoZWQgY291bnQgZm9yIGdyb3VwICR7cHJvZ3JhbURhdGFTdG9yZS5hY3RpdmVHcm91cD8uZ3JvdXBJZH1gLCBleCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0aGUgaXRlbSB0aGF0IGlzIGN1cnJlbnRseSBwbGF5aW5nXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtID0gY29udGVudERpdi5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWRMaXN0SXRlbScpIFxuICAgICAgICAgICAgaWYgKCFhY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ291bGRuJ3QgZmluZCBhY3RpdmUgbWVkaWEgc291cmNlIGVsZW1lbnQgaW4gcHJldmlldyBsaXN0LiBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW5cIiwgcHJvZ3JhbURhdGFTdG9yZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0/LnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVubG9hZFZpZGVvVmlldygpOiB2b2lkIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiVW5sb2FkaW5nIHZpZGVvIHZpZXdcIilcblxuICAgICAgICAvLyBDbGVhciBvbGQgZGF0YSBhbmQgcmVzZXQgcHJldmlld0NvbnRhaW5lckxvYWRlZCBmbGFnXG4gICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFZpZGVvRWxlbWVudD4oJ3ZpZGVvLmh0bWx2aWRlb3BsYXllcicpXG4gICAgICAgIHZpZGVvRWxlbWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIG9uVmlkZW9UaW1lVXBkYXRlKVxuICAgICAgICB2aWRlb0VsZW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JhdGVjaGFuZ2UnLCBvblZpZGVvUmF0ZUNoYW5nZSlcbiAgICAgICAgbGFzdFRyYWNrZWRQb3NpdGlvblNlY29uZCA9IC0xXG5cbiAgICAgICAgcHJlbG9hZE9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgcHJlbG9hZE9ic2VydmVyID0gbnVsbFxuICAgICAgICBwZW5kaW5nUHJlbG9hZEl0ZW1JZCA9IG51bGxcbiAgICAgICAgcGVuZGluZ1ByZWxvYWQgPSBudWxsXG5cbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lck9ic2VydmVyID0gbnVsbFxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UG9wdXAnKT8ucmVtb3ZlKClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BvcHVwUHJldmlld0J1dHRvbicpLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZSgpKVxuXG4gICAgICAgIHByZXZpZXdDb250YWluZXJMb2FkZWQgPSBmYWxzZSAvLyBSZXNldCBmbGFnIHdoZW4gdW5sb2FkaW5nXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNQcmV2aWV3QnV0dG9uQ3JlYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGdldEFjdGl2ZUJ1dHRvbnNCYXIoKT8ucXVlcnlTZWxlY3RvcignI3BvcHVwUHJldmlld0J1dHRvbicpICE9IG51bGxcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9