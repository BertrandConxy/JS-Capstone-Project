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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  background-color: black;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.navlist {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  gap: 20px;\\r\\n  padding: 0 50px;\\r\\n}\\r\\n\\r\\n.movie-art {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.subtitles h4 {\\r\\n  color: white;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.movies-btn {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.reserve-btn {\\r\\n  background-color: green;\\r\\n  color: white;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 768px) {\\r\\n  header {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding: 30px 50px 0 50px;\\r\\n  }\\r\\n\\r\\n  .logoImg {\\r\\n    height: 60px;\\r\\n  }\\r\\n\\r\\n  .navlist {\\r\\n    display: flex;\\r\\n    list-style-type: none;\\r\\n    gap: 50px;\\r\\n    font-size: 24px;\\r\\n  }\\r\\n\\r\\n  .nav-items {\\r\\n    color: white;\\r\\n    text-decoration: none;\\r\\n  }\\r\\n\\r\\n  .nav-items:hover {\\r\\n    color: green;\\r\\n  }\\r\\n\\r\\n  .main {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(4, 1fr);\\r\\n    gap: 20px;\\r\\n    padding: 0 50px;\\r\\n  }\\r\\n\\r\\n  .grid-items {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  /* .subtitles h4 {\\r\\n    color: white;\\r\\n  } */\\r\\n\\r\\n  footer {\\r\\n    bottom: 0;\\r\\n    left: 25%;\\r\\n    color: white;\\r\\n  }\\r\\n\\r\\n  .footer-container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding-top: 10px;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 10px;\\r\\n  }\\r\\n\\r\\n  .support-container {\\r\\n    display: flex;\\r\\n    border-top: 1px solid green;\\r\\n    flex-flow: wrap;\\r\\n    gap: 100px;\\r\\n  }\\r\\n\\r\\n  .heading {\\r\\n    padding: 10px  0;\\r\\n  }\\r\\n\\r\\n  .news {\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  input[type='email'] {\\r\\n    padding: 10px;\\r\\n  }\\r\\n\\r\\n  input[type='submit'] {\\r\\n    background: rgb(240, 8, 8);\\r\\n    border: none;\\r\\n    color: white;\\r\\n    padding: 10px;\\r\\n  }\\r\\n\\r\\n  .list {\\r\\n    list-style-type: none;\\r\\n  }\\r\\n\\r\\n  .social {\\r\\n    display: flex;\\r\\n    padding-top: 20px;\\r\\n    margin-top: 40px;\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  .pop-up {\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    height: 100vh;\\r\\n    width: 100vw;\\r\\n    z-index: 111;\\r\\n    background-color: rgba(231, 224, 224, 0.1);\\r\\n  }\\r\\n\\r\\n  .pop-content {\\r\\n    position: relative;\\r\\n    padding: 50px;\\r\\n    width: 90vw;\\r\\n    border-radius: 15px;\\r\\n    height: 90vh;\\r\\n    display: flex;\\r\\n    flex-flow: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    color: white;\\r\\n    background: rgb(85, 83, 83);\\r\\n  }\\r\\n\\r\\n  img {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .image-container {\\r\\n    width: 30%;\\r\\n    height: auto;\\r\\n  }\\r\\n\\r\\n  .details {\\r\\n    display: flex;\\r\\n    flex-flow: row wrap;\\r\\n    justify-content: center;\\r\\n    gap: 100px;\\r\\n  }\\r\\n\\r\\n  .block {\\r\\n    display: flex;\\r\\n    flex-flow: column;\\r\\n  }\\r\\n}\\r\\n\\r\\n.nav-items {\\r\\n  color: white;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.nav-items:hover {\\r\\n  color: green;\\r\\n}\\r\\n\\r\\n#main {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(4, 1fr);\\r\\n  gap: 20px;\\r\\n  padding: 0 50px;\\r\\n}\\r\\n\\r\\n.grid-items {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  bottom: 0;\\r\\n  left: 25%;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.footer-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding-top: 10px;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.support-container {\\r\\n  display: flex;\\r\\n  border-top: 1px solid green;\\r\\n  flex-flow: wrap;\\r\\n  gap: 100px;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n  padding: 10px 0;\\r\\n}\\r\\n\\r\\n.news {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\ninput[type=\\\"email\\\"] {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\ninput[type=\\\"submit\\\"] {\\r\\n  background: rgb(240, 8, 8);\\r\\n  border: none;\\r\\n  color: white;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.social {\\r\\n  display: flex;\\r\\n  padding-top: 20px;\\r\\n  margin-top: 40px;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.reserve-pop-up {\\r\\n  position: absolute;\\r\\n  display: flex;\\r\\n  overflow-y: scroll;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100vw;\\r\\n  height: auto;\\r\\n  padding-bottom: 10000px;\\r\\n  backdrop-filter: blur(10px);\\r\\n  z-index: 1111;\\r\\n  background-color: rgba(14, 13, 13, 0.9);\\r\\n}\\r\\n\\r\\n.res-pop-content {\\r\\n  position: relative;\\r\\n  padding: 50px;\\r\\n  margin-top: 10px;\\r\\n  width: 90vw;\\r\\n  height: 100%;\\r\\n  border-radius: 15px;\\r\\n  display: flex;\\r\\n  flex-flow: row wrap;\\r\\n  justify-content: space-around;\\r\\n  background-color: rgb(25, 26, 25);\\r\\n}\\r\\n\\r\\n.res-close-btn {\\r\\n  font-size: 40px;\\r\\n  font-weight: bold;\\r\\n  background: none;\\r\\n  border: none;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  margin-top: 14px;\\r\\n  margin-right: 55px;\\r\\n  cursor: pointer;\\r\\n  color: rgb(19, 129, 19);\\r\\n}\\r\\n\\r\\n.top-container {\\r\\n  padding-top: 30px;\\r\\n  padding-bottom: 25px;\\r\\n}\\r\\n\\r\\n.comments-popup {\\r\\n  background-color: rgba(34, 34, 34, 0.25);\\r\\n}\\r\\n\\r\\n.image-and-download {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding-top: 20px;\\r\\n}\\r\\n\\r\\n.tv-show-image {\\r\\n  width: 60%;\\r\\n  max-width: 400px;\\r\\n}\\r\\n\\r\\n.download-btn {\\r\\n  width: 60%;\\r\\n  max-width: 400px;\\r\\n  margin-top: 10px;\\r\\n  background-color: green;\\r\\n  border: none;\\r\\n  padding: 10px;\\r\\n  color: white;\\r\\n  font-size: 20px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  display: flex;\\r\\n  flex-flow: column;\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n.reserve-img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  color: green;\\r\\n  font-weight: 700;\\r\\n  font-size: 3em;\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  padding-right: 5%;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.tv-show-info {\\r\\n  margin-top: 30px;\\r\\n  padding: 0 10%;\\r\\n}\\r\\n\\r\\n.tv-show-title {\\r\\n  font-size: 25px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.tv-shows-genres {\\r\\n  margin-bottom: 25px;\\r\\n}\\r\\n\\r\\n.lang-and-rating {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 25px;\\r\\n}\\r\\n\\r\\n.summary-div {\\r\\n  text-align: justify;\\r\\n}\\r\\n\\r\\n.comments-header,\\r\\n.add-comments-header {\\r\\n  margin-top: 20px;\\r\\n  text-align: center;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.all-comments {\\r\\n  height: 50vh;\\r\\n  overflow-y: auto;\\r\\n  padding-bottom: 20px;\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\\r\\n.single-comment {\\r\\n  width: 80%;\\r\\n  margin: 7px auto;\\r\\n  background-color: whitesmoke;\\r\\n  color: green;\\r\\n  padding: 2.5%;\\r\\n}\\r\\n\\r\\n.add-comments-form {\\r\\n  padding-bottom: 50px;\\r\\n}\\r\\n\\r\\n.comments-input {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  margin: 0 auto;\\r\\n  width: 80%;\\r\\n  max-width: 550px;\\r\\n}\\r\\n\\r\\n.comment-nameInput {\\r\\n  padding: 10px;\\r\\n  outline-color: green;\\r\\n}\\r\\n\\r\\n.comment-insights {\\r\\n  padding: 10px;\\r\\n  height: 120px;\\r\\n  outline-color: green;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-family: poppins, sans-serif;\\r\\n  font-style: italic;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.add-comment-btn {\\r\\n  background-color: green;\\r\\n  border: none;\\r\\n  padding: 7px;\\r\\n  color: white;\\r\\n  font-size: 20px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.download-link {\\r\\n  color: white;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.submission-fail {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n/* [MEDIA QUERIES] COMMENTS POP-UP */\\r\\n\\r\\n@media only screen and (min-width: 800px) {\\r\\n  .top-container {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n    gap: 30px;\\r\\n    margin-left: 10px;\\r\\n  }\\r\\n\\r\\n  .tv-show-info {\\r\\n    margin-top: 0;\\r\\n    padding: 20px 5% 0 0;\\r\\n    max-width: 550px;\\r\\n  }\\r\\n\\r\\n  .tv-show-image {\\r\\n    width: 100%;\\r\\n    max-width: 400px;\\r\\n  }\\r\\n\\r\\n  .download-btn {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .pop-up {\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    height: 100vh;\\r\\n    width: 100vw;\\r\\n    z-index: 111;\\r\\n    background-color: rgba(231, 224, 224, 0.1);\\r\\n  }\\r\\n\\r\\n  .pop-content {\\r\\n    position: relative;\\r\\n    padding: 50px;\\r\\n    width: 90vw;\\r\\n    border-radius: 15px;\\r\\n    height: 90vh;\\r\\n    display: flex;\\r\\n    flex-flow: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    color: white;\\r\\n    background: rgb(85, 83, 83);\\r\\n  }\\r\\n\\r\\n  img {\\r\\n    width: 100%;\\r\\n    height: 95%;\\r\\n  }\\r\\n\\r\\n  .image-container {\\r\\n    width: 30%;\\r\\n    height: auto;\\r\\n  }\\r\\n\\r\\n  .details {\\r\\n    display: flex;\\r\\n    flex-flow: row wrap;\\r\\n    justify-content: center;\\r\\n    gap: 100px;\\r\\n  }\\r\\n\\r\\n  .block {\\r\\n    display: flex;\\r\\n    flex-flow: column;\\r\\n  }\\r\\n\\r\\n  .single-comment {\\r\\n    max-width: 600px;\\r\\n    padding: 5px 20px;\\r\\n  }\\r\\n}\\r\\n\\r\\n#res-form {\\r\\n  display: flex;\\r\\n  flex-flow: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.reserve-form {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\ninput[type='text'],\\r\\ninput[type='date'] {\\r\\n  height: 40px;\\r\\n  width: 300px;\\r\\n  margin: 10px 0;\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n#res-btn {\\r\\n  font-weight: bold;\\r\\n  font-size: 20px;\\r\\n  background-color: rgba(3, 107, 3);\\r\\n  width: 150px;\\r\\n  padding: 13px;\\r\\n  border-radius: 10px;\\r\\n  margin-left: 150px;\\r\\n  transition: all 1s;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#res-btn:hover {\\r\\n  background-color: rgba(13, 202, 13, 0.7);\\r\\n}\\r\\n\\r\\n.res-container {\\r\\n  height: 150px;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://project-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_Logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Logo.png */ \"./src/assets/Logo.png\");\n/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_reservation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/reservation.js */ \"./src/modules/reservation.js\");\n\n\n\n\n\n\n\n\n\n\n// import { displayData } from './modules/reservation.js';\n\ndocument.querySelector('.logo').innerHTML = `<a href=\"#\"><img class=\"logoImg\" src=\"${_assets_Logo_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Cinimash\" /></a>`;\n\nconst starter = async () => {\n  const data = await (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.fetchMovies)();\n  await (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\n};\n\nstarter();\n\ndocument.querySelector('.logo').innerHTML = `<a href=\"#\"><img class=\"logoImg\" src=\"${_assets_Logo_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Cinimash\" /></a>`;\n\n_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.mainContainer.addEventListener('click', (e) => {\n  if (e.target.className === 'reserve-btn') {\n    const id = e.target.getAttribute('data-target');\n    (0,_modules_reservation_js__WEBPACK_IMPORTED_MODULE_5__.displayData)(id);\n  }\n});\n// window.addEventListener('DOMContentLoaded', () => {\n//   displayData(2);\n// });\n\n_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.postCommentsBtn.addEventListener('click', () => {\n  if (_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.userNameInput.value !== '' && _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.userCommentInput.value !== '') {\n    (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__.postComments)(100);\n    _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.userNameInput.value = '';\n    _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.userCommentInput.value = '';\n  } else {\n    _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.submissionFail.innerHTML = 'Submission failed. Please try again.';\n  }\n  (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__.getComments)(100);\n});\n\n(0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(22);\n(0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__.getComments)(100);\n\n\n//# sourceURL=webpack://project-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postComments\": () => (/* binding */ postComments),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"default\": () => (/* binding */ openCommentsPopup)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n\n\nconst openCommentsPopup = async (id) => {\n  const response = await fetch(`${_utils_js__WEBPACK_IMPORTED_MODULE_0__.MoviesApi}/${id}`);\n  const movieData = await response.json();\n\n  const movieName = movieData.name;\n  const movieImage = movieData.image.medium;\n  const movieLanguage = movieData.language;\n  const movieDownload = movieData.officialSite;\n  const movieRating = movieData.rating.average;\n  const movieSummary = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.truncateSummary)(movieData.summary, 350);\n\n  let movieGenres = '';\n  const genreArray = movieData.genres;\n  genreArray.forEach((genre, index) => {\n    if (index < genreArray.length - 1) {\n      movieGenres += `${genre}, `;\n    } else {\n      movieGenres += genre;\n    }\n  });\n\n  const commentsHTML = `\n      <button class=\"close-btn\">X</button>\n      <div class=\"top-container\">\n        <div class=\"image-and-download\">\n          <img class=\"tv-show-image\" src=\"${movieImage}\">\n          <button class=\"download-btn\" type=\"button\">\n            <a class=\"download-link\" href=\"${movieDownload}\" target=\"_blank\">Download</a>\n          </button>\n        </div>\n        <div class=\"tv-show-info\">\n          <h3 class=\"tv-show-title\">${movieName}</h3>\n          <div class=\"tv-shows-genres\">\n            <strong>Genre: </strong>${movieGenres}\n          </div>\n          <div class=\"lang-and-rating\">\n            <p class=\"tv-show-language\"><strong>Language: </strong>${movieLanguage}</p>\n            <p class=\"tv-show-rating\"><strong>Rating: </strong>${movieRating}</p>\n          </div>\n          <div class=\"summary-div\">\n            <strong>SUMMARY: </strong><br>\n            ${movieSummary}\n          </div>\n        </div>\n      </div>\n    `;\n  _utils_js__WEBPACK_IMPORTED_MODULE_0__.detailsContainer.innerHTML = commentsHTML;\n};\n\n_utils_js__WEBPACK_IMPORTED_MODULE_0__.postCommentsBtn.addEventListener('click', () => {\n  // console.log(userNameInput.value);\n  // console.log(userCommentInput.value);\n});\n\nconst postComments = async (id) => {\n  await fetch(`${_utils_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi}/comments?item_id=${id}`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: '100',\n      username: `\"${_utils_js__WEBPACK_IMPORTED_MODULE_0__.userNameInput.value}\"`,\n      comment: `\"${_utils_js__WEBPACK_IMPORTED_MODULE_0__.userCommentInput.value}\"`,\n    }),\n    headers: {\n      'Content-Type': 'application/json; charset=UTF-8',\n    },\n  });\n};\n\nconst getComments = async (id) => {\n  const response = await fetch(`${_utils_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi}/comments?item_id=${id}`);\n  const commentsData = await response.json();\n  const reversedData = commentsData.reverse();\n\n  let allComments = '';\n  reversedData.forEach((comment) => {\n    allComments\n    += `\n      <div class=\"single-comment\">\n        <div class=\"comment-date\">${comment.creation_date}</div>\n        <p class=\"name-and-message\"><strong>${comment.username}: </strong>${comment.comment}</p>\n      </div>\n    `;\n  });\n  _utils_js__WEBPACK_IMPORTED_MODULE_0__.commentsContainer.innerHTML = allComments;\n};\n\n\n\n\n//# sourceURL=webpack://project-webpack/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst display = (movies) => {\n  movies.forEach((e, index) => {\n    const list = document.querySelector('.main');\n    if (index < 24) {\n      list.innerHTML += `\n      <div class=\"grid-items\">\n      <ul class=\"image-card\">\n      <img class=\"movie-art\" src=\"${e.image.medium}\" alt=\"\">\n      </ul>\n      <div class=\"subtitles\">\n      <h4>${e.name} <i class=\"fa fa-heart\"></i></h4>\n\n      </div>\n      <div class=\"movie-btn\">\n      <button class=\"common-btn\" id=\"${e.id}\">Comments</i></button>\n      <button class=\"reserve-btn\" data-target=\"${e.id}\">Reservation</i></button>\n       </div> \n      </div>\n    `;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://project-webpack/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reserveCounter\": () => (/* binding */ reserveCounter),\n/* harmony export */   \"displayData\": () => (/* binding */ displayData)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n/* eslint-disable import/prefer-default-export */\n\n\nconst popUp = document.createElement('div');\npopUp.className = 'reserve-pop-up';\nconst footer = document.querySelector('footer');\n\nconst addReservation = async (id, Username, startDate, endDate) => {\n  const reservation = {\n    item_id: id,\n    username: Username,\n    date_start: startDate,\n    date_end: endDate,\n  };\n  const response = await fetch(`${_utils_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi}/reservations/`, {\n    method: 'POST',\n    body: JSON.stringify(reservation),\n    headers: {\n      'Content-type': 'application/json',\n    },\n  });\n  return response;\n};\n\nconst DisplayReservations = async (id, content) => {\n  const response = await fetch(`${_utils_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi}/reservations?item_id=${id}`);\n  const result = await response.json();\n  result.reverse();\n  const resContainer = document.createElement('div');\n  result.forEach((data) => {\n    resContainer.innerHTML += `<p class='reservation-text'>${data.date_start} - ${data.date_end} by ${data.username}</p>`;\n  });\n  content.appendChild(resContainer);\n};\n\nconst reserveCounter = async (id, div) => {\n  const response = await fetch(`${_utils_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi}/reservations?item_id=${id}`);\n  const result = await response.json();\n  let counter = 0;\n  for (let i = 0; i < result.length; i += 1) {\n    counter += 1;\n  }\n  const counterPlace = document.createElement('span');\n  counterPlace.innerHTML = `(${counter})`;\n  div.appendChild(counterPlace);\n  return counter;\n};\n\nconst displayData = async (id) => {\n  const respone = await fetch(`${_utils_js__WEBPACK_IMPORTED_MODULE_0__.MoviesApi}/${id}`);\n  const result = await respone.json();\n\n  const MovieName = result.name;\n  const MovieLanguage = result.language;\n  const MovieGenre = result.genres;\n  const MovieDuration = result.runtime;\n  const Movierating = result.rating.average;\n  const MovieCover = result.image.original;\n  document.body.insertBefore(popUp, footer);\n  const popUpContent = document.createElement('div');\n  popUpContent.className = 'res-pop-content';\n  popUpContent.innerHTML = `<div class= image-container><img class='reserve-img'src=${MovieCover} alt = 'cover picture'></div><button class='res-close-btn'>X</button>\n    <div class='description'><h2 class='heading'>${MovieName}</h2><div class=details><div class='block'><span><strong>Language</strong>: ${MovieLanguage}</span>\n    <span><strong>Genre</strong>: ${MovieGenre[0]} | ${MovieGenre[1]} | ${MovieGenre[2]}</span></div><div class='block'><span><strong>Duration</strong>: ${MovieDuration} minutes</span>\n    <span><strong>Ratings</strong>: ${Movierating} / 10</span></div></div><div class='reserve-post'><h3 class='heading h-reserve'>Reservations</h3><div class='res-container'></div></div><div class='reserve-form'><h3 class='heading'>Add Reservation</h3><form id='res-form'><input type='text' id='reserver' placeholder='Enter your name'>\n    <label for='start-date'>Start Date</label><input type='date' id='start-date' placeholder='YYYY/MM/DD'>\n    <label for='start-date'>End Date</label><input type='date' id='end-date' placeholder='End-date YYYY/MM/DD'>\n    <input type='submit' value='Reserve' id='res-btn'></form></div></div>`;\n  popUp.appendChild(popUpContent);\n  const username = document.getElementById('reserver');\n  const start = document.getElementById('start-date');\n  const end = document.getElementById('end-date');\n  const form = document.getElementById('res-form');\n  const reserveContainer = document.querySelector('.res-container');\n  const resHeader = document.querySelector('.h-reserve');\n  const closeBtn = document.querySelector('.res-close-btn');\n  closeBtn.addEventListener('click', () => {\n    document.body.removeChild(popUp);\n    window.location.reload();\n  });\n  DisplayReservations(id, reserveContainer);\n  reserveCounter(id, resHeader);\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    addReservation(id, username.value, start.value, end.value);\n    form.reset();\n  });\n};\n\n\n//# sourceURL=webpack://project-webpack/./src/modules/reservation.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"involvementApi\": () => (/* binding */ involvementApi),\n/* harmony export */   \"MoviesApi\": () => (/* binding */ MoviesApi),\n/* harmony export */   \"detailsContainer\": () => (/* binding */ detailsContainer),\n/* harmony export */   \"commentsContainer\": () => (/* binding */ commentsContainer),\n/* harmony export */   \"truncateSummary\": () => (/* binding */ truncateSummary),\n/* harmony export */   \"fetchMovies\": () => (/* binding */ fetchMovies),\n/* harmony export */   \"userNameInput\": () => (/* binding */ userNameInput),\n/* harmony export */   \"userCommentInput\": () => (/* binding */ userCommentInput),\n/* harmony export */   \"postCommentsBtn\": () => (/* binding */ postCommentsBtn),\n/* harmony export */   \"submissionFail\": () => (/* binding */ submissionFail),\n/* harmony export */   \"mainContainer\": () => (/* binding */ mainContainer)\n/* harmony export */ });\nconst involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rddf0xwSVTLNIiHbS9z7';\n\nconst MoviesApi = 'https://api.tvmaze.com/shows';\n\nconst fetchMovies = async () => {\n  const response = await fetch(MoviesApi);\n  const allMovies = await response.json();\n\n  return allMovies;\n};\n\nconst detailsContainer = document.querySelector('.details-wrapper');\nconst commentsContainer = document.querySelector('.all-comments');\nconst userNameInput = document.querySelector('.comment-nameInput');\nconst userCommentInput = document.querySelector('.comment-insights');\nconst postCommentsBtn = document.querySelector('.add-comment-btn');\nconst submissionFail = document.querySelector('.submission-fail');\nconst mainContainer = document.querySelector('.main');\n\nconst truncateSummary = (string, limit) => {\n  if (string.length > limit) {\n    return string.substring(0, limit);\n  }\n  return string;\n};\n\n\n\n\n//# sourceURL=webpack://project-webpack/./src/modules/utils.js?");

/***/ }),

/***/ "./src/assets/Logo.png":
/*!*****************************!*\
  !*** ./src/assets/Logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6b22e7d36df79ced908e.png\";\n\n//# sourceURL=webpack://project-webpack/./src/assets/Logo.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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