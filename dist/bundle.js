/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #E64833;\n    min-height: 100vh;\n    font-family: Verdana, Geneva, Tahoma, sans-serif; \n}\n\n.maindiv{\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n\n\n    min-height: 80vh;\n    min-width: 80vw;\n    border-radius: 15px;\n\n    box-shadow: 10px 10px 10px rgb(0, 0, 0); \n}\n\n.maincontainer {\n    background-color: #FBE9D0;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column; \n    background-color: #244855;\n    color: #FBE9D0;\n    width: 200px;\n    border-top-left-radius: 15px;\n    border-bottom-left-radius: 15px;\n}\n\n#sidebarlist{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin-top: 20px;\n    align-items: center;\n}\n\n#addlistdiv {\n    margin-top: auto;\n}\n\n#addlistdiv .brownbutton {\n    width: 90%;\n    height: 50px;\n    margin-bottom: 8px;\n    margin-left: 8px;\n    font-size: 20px;\n    box-shadow: 3px 3px 3px black;\n}\n\n#addlistdiv .brownbutton:hover {\n    background-color:#663f35;\n}\n\n.todoList {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.todoList .todoEntry{\n\n    padding-left: 15px;\n}\n.todoList label{\n    padding-left: 10px;\n    font-size: 25px;\n}\n\n.todoEntry {\n    display: flex;\n    gap: 10px;\n}\n\n.todoEntry input[type=checkbox]{\n    margin-top: 0px;\n    transform: scale(2);\n}\n\n#detailPane {\n    display: none;\n    position: absolute;\n    top: 75%;\n    left: 80%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    border: solid #9d9d9d;\n    background-color: antiquewhite;\n    box-shadow: 5px 5px 5px black; \n    border-radius: 10px;\n    padding: 20px;\n    margin-right: 10px;\n}\n\n.popupform{\n    display: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    border: solid #9d9d9d;\n    background-color: antiquewhite;\n}\n\n#buttondiv{\n    display: flex;\n    padding: 10px;\n    border-top-right-radius: 15px;\n    margin-left: auto; \n}\n\n#addform label {\n    font-size: 20px;\n}\n#addform input {\n    width: 90%;\n    clear: both;\n    font-size: 20px;\n}\n\n#addform ul {\n    list-style-type: none;\n}\n\n.brownbutton {\n    border: none;\n    background-color: #874F41;\n    color: #FBE9D0;\n    border-radius: 5px;\n    box-shadow: 3px 3px 3px black;\n}\n\n#addtodo {    \n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 8px; \n    font-size: 30px;\n    line-height: 30px;\n}\n\n.detaildiv {\n    display: flex;\n    justify-content: flex-end;\n    padding-right: 10px;\n    margin-left: auto;\n}\n\n#addlistformdiv {\n    display: none;\n    flex-direction: column; \n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    padding: 8px;\n}\n\n\n#addtodo:hover{\n    background-color: #663f35;\n}\n\n.detailbtn:hover{\n    background-color:#1e363f;\n}\n.detailbtn {\n    font-size: 15px;\n    background-color: #244855;\n    margin-right: 5px;\n}\n\n.listbutton {\n    border: none;\n    border-radius: 5px;\n    background-color:#FBE9D0;\n    font-size: 20px;\n    width: 60%;\n    box-shadow: 3px 3px 3px black;\n}\n\n.deletebtn{\n    font-size: 10px; \n    line-height: 0px;\n    width: 15px;\n    height: 15px;\n}\n\n.listbutton:hover {\n    background-color: #cdb89b;\n}\n\n.listbuttondiv{\n    width: 100%;\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n}\n\n#topbar {\n    display: flex;\n    gap: 10px;\n}\n\n#listName {\n    display: flex;\n    justify-content: center;\n    margin-left: 15px;\n}   \n\n#listNameText {\n    font-size: 35px;\n    line-height: 0px;\n}\n\n.submitbutton {\n    border: none;\n    background-color: #FBE9D0;\n    border-radius: 5px;\n    box-shadow: 3px 3px 3px black;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodoDOM: () => (/* binding */ addTodoDOM),\n/* harmony export */   closeForm: () => (/* binding */ closeForm),\n/* harmony export */   removeTodo: () => (/* binding */ removeTodo),\n/* harmony export */   showDetails: () => (/* binding */ showDetails),\n/* harmony export */   showForm: () => (/* binding */ showForm)\n/* harmony export */ });\nfunction addTodoDOM(todo){\n    const todoList = document.querySelector(\".todoList\");\n    let newTodo = document.createElement(\"div\");\n    newTodo.id = todo.id + \"div\";\n    newTodo.classList.add(\"todoEntry\");\n\n    newTodo.appendChild(addTodoEntry(todo));\n    newTodo.appendChild(addDetailBtn(todo)); \n    console.log(\"addToDOM\");\n    todoList.appendChild(newTodo);\n}\nfunction addTodoEntry(todo){\n    let todoEntryDiv = document.createElement(\"div\"); \n    let todoText  = document.createElement(\"label\");\n    let todoCheck = document.createElement(\"input\");\n\n    todoCheck.type = \"checkbox\";\n    todoCheck.id = todo.id + \"cbox\";\n    \n    todoText.for = todoCheck.id;\n    todoText.textContent = todo.name;\n    \n   \n    todoEntryDiv.appendChild(todoCheck); \n    todoEntryDiv.appendChild(todoText);\n\n    return todoEntryDiv;\n}\nfunction addDesc(todo){\n    let description = document.createElement(\"p\");\n    description.textContent = todo.desc;\n    return description;\n}\n\nfunction addDetailBtn(todo){\n\n    let detailsbtn = document.createElement(\"button\");\n    let detaildiv = document.createElement(\"div\");\n    \n    detailsbtn.textContent = \"details\";\n    detailsbtn.classList.add(\"brownbutton\"); \n    detailsbtn.classList.add(\"detailbtn\"); \n    detailsbtn.id = todo.id + \"detailbtn\";\n    detaildiv.classList.add(\"detaildiv\");\n    \n    detaildiv.appendChild(detailsbtn);\n    return detaildiv;\n}\n\nfunction showForm(regform){\n    if(regform){\n    document.querySelector(\"#addformdiv\").style.display = \"block\";\n    }\n    else{\n        document.querySelector(\"#addlistformdiv\").style.display = \"flex\";\n    }\n}\n\n\nfunction closeForm(isreg){\n    if(isreg){ \n        document.getElementById(\"addform\").reset();\n        document.querySelector(\"#addformdiv\").style.display = \"none\";\n    } else {\n        document.getElementById(\"addlistform\").reset();\n        document.querySelector(\"#addlistformdiv\").style.display = \"none\";\n    }\n}\n\nfunction removeTodo(todo){\n    let todoentrydiv = document.getElementById(todo.id + \"div\");\n    todoentrydiv.style.transition = \"opacity 1000ms ease\";\n    todoentrydiv.style.opacity = 0;\n    setTimeout(function(){\n        todoentrydiv.parentNode.removeChild(todoentrydiv);\n    }, 900);\n}; \n\nfunction showDetails(todo){\n    //add div to html template, make this show the div;\n    let details = document.getElementById(\"detailPane\");\n    let descText = document.getElementById(\"detailDesc\");\n    let dateText = document.getElementById(\"detailDate\");\n    descText.textContent = todo.desc;\n    dateText.textContent = todo.date; \n    details.style.display = \"block\";\n}\n\n\n//# sourceURL=webpack://todo/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nlet listOfLists = [];\nlet storedData = localStorage.getItem(\"storedData\");\nlet currList = [];\n\nclass todoList {\n    constructor(name, list = []){\n        this.name = name;\n        this.list = list;\n    }\n\n    addEntry(todo){\n        this.list.push(todo);\n    }\n}\n\nclass todoEntry {\n    constructor(name, desc, date){\n        this.id = currList.list.length;\n        this.name = name;\n        this.desc = desc;\n        this.date = date;\n    }\n}\n\nfunction addTodo(todo){\n    //add new todo entry to current list\n    //console.log(currList.name + \" help \" + todo.name);\n    currList.addEntry(todo);\n    if(currList.name == document.querySelector(\".todoList\").id){\n       (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addTodoDOM)(todo);       \n       entryEventHandlers(todo);\n    }  \n}\n\nfunction entryEventHandlers(todo){\n    //add even listener to checkbox that deletes entry when clicked, fades away\n    \n    let detailbtn = document.getElementById(todo.id + \"detailbtn\");\n    detailbtn.addEventListener(\"click\", () => {\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showDetails)(todo)\n    });\n    \n    let cbox = document.getElementById(todo.id + \"cbox\");\n    cbox.addEventListener(\"click\", () => {\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(todo);\n        currList.list.splice(todo.id, 1);\n        updateIDs(todo);\n        storeList();\n    });\n}\n\n//update IDs of all todoEntries and their DOM element IDs from deleted ID to last entry \nfunction updateIDs(todo){\n\n        for(let i = todo.id; i < currList.list.length; i++){\n            let cid = currList.list[i].id;\n            document.getElementById(cid + \"div\").id = (cid-1) + \"div\";\n            document.getElementById(cid + \"cbox\").id = (cid-1) + \"cbox\";\n            currList.list[i].id -= 1;\n        }\n}\n\nfunction addListeners(){\n    let addformbtn = document.querySelector(\"#addtodo\");\n    addformbtn.addEventListener(\"click\", () => {\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showForm)(true);\n    });\n\n    let submitbtn = document.querySelector(\"#submitform\");\n    submitbtn.addEventListener(\"click\", e =>{\n        let nameformtext = document.getElementById(\"name\").value;\n        let descformtext = document.getElementById(\"desc\").value;\n        let dateform = document.getElementById(\"date\").value;\n\n        addTodo(new todoEntry(nameformtext, descformtext, dateform));\n        storeList();\n        e.preventDefault();\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.closeForm)(true);\n    });\n\n    let closedetailBtn = document.querySelector(\"#closedetailbtn\");\n    closedetailBtn.addEventListener(\"click\", e =>{\n        let detailPane = document.getElementById(\"detailPane\");\n        detailPane.style.display = \"none\";\n    });\n\n    let addlistbtn = document.querySelector(\"#addlistbtn\");\n    addlistbtn.addEventListener(\"click\", e =>{\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showForm)(false);\n    });\n\n    \n    let submitlistbtn = document.querySelector(\"#submitlistform\");\n    submitlistbtn.addEventListener(\"click\", e =>{\n        e.preventDefault();\n        let listname = document.getElementById(\"listname\").value;\n        if(listname.length > 8){\n            alert(\"list name must be less than 8 characters\");\n        }\n        else {\n            addList(new todoList(listname));\n            storeList();\n            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.closeForm)(false);\n            //console.log(listOfLists);\n        }\n    });\n}\n\nfunction storeList(){\n    localStorage.setItem(\"storedData\", JSON.stringify(listOfLists));\n}\n\nfunction addList(list){\n    listOfLists.push(list);\n    addListButton(list);\n}\n\nfunction addListButton(list){\n    let listBtn = document.createElement(\"button\");\n    let listDeleteBtn = document.createElement(\"button\");\n    let listBtnDiv = document.createElement(\"div\");\n\n    listBtnDiv.classList.add(\"listbuttondiv\");\n    listBtn.classList.add(\"listbutton\");\n    listDeleteBtn.classList.add(\"listbutton\");\n    listDeleteBtn.classList.add(\"deletebtn\");\n\n    listBtn.textContent = list.name;\n    listDeleteBtn.textContent = \"x\";\n\n    listDeleteBtn.addEventListener(\"click\", () => {\n\n        if(list.list.length > 0){\n            alert(\"Cannot delete list with entries\");\n            return;\n        }\n\n        if(confirm(\"Do you really want to delete this?\")){\n            listOfLists.splice(listOfLists.indexOf(list), 1);\n            document.querySelector(\"#sidebarlist\").removeChild(listBtnDiv);\n            storeList();\n        } \n    });\n\n    listBtn.addEventListener(\"click\", () => {\n        let todoListDiv = document.querySelector(\".todoList\");\n        todoListDiv.replaceChildren();\n        currList = list;\n        todoListDiv.id = list.name;\n        list.list.forEach(element => {\n            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addTodoDOM)(element);\n            entryEventHandlers(element);\n        });\n        todoListDiv.id = currList.name;\n        document.querySelector(\"#listNameText\").textContent = currList.name;\n    });\n    \n    listBtnDiv.appendChild(listBtn);\n    listBtnDiv.appendChild(listDeleteBtn);\n\n    document.querySelector(\"#sidebarlist\").appendChild(listBtnDiv);\n}\n\nif(storedData == null){\n    localStorage.setItem(\"storedData\", JSON.stringify(listOfLists));\n    let mainList = new todoList(\"main\");\n    addList(mainList);\n    storeList();\n    currList = listOfLists[0];\n} else {\n    storedData = JSON.parse(storedData); \n    storedData.forEach((element, index) => {\n        addList(new todoList(element.name));\n        currList = listOfLists[index];\n        element.list.forEach(todo => {\n            addTodo(new todoEntry(todo.name, todo.desc, todo.date));\n        });\n    });\n    currList = listOfLists[0];\n    document.querySelector(\"#listNameText\").textContent = currList.name;\n}\naddListeners();\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;