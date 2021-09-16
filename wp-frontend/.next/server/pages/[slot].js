"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[slot]";
exports.ids = ["pages/[slot]"];
exports.modules = {

/***/ "./function/request/index.js":
/*!***********************************!*\
  !*** ./function/request/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"qfetch\": () => (/* binding */ qfetch)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ \"./function/request/pages.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _pages__WEBPACK_IMPORTED_MODULE_1__) if([\"default\",\"qfetch\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _pages__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\nasync function qfetch(gql) {\n  return await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(\"http://localhost:8080/wordpress/graphql\", gql);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mdW5jdGlvbi9yZXF1ZXN0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRU8sZUFBZUMsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkI7QUFDakMsU0FBTyxNQUFNRix3REFBTyxDQUFDRyx5Q0FBRCxFQUF1QkQsR0FBdkIsQ0FBcEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dwLWZyb250ZW5kLy4vZnVuY3Rpb24vcmVxdWVzdC9pbmRleC5qcz9iM2QzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCJcblxuZXhwb3J0ICogZnJvbSBcIi4vcGFnZXNcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcWZldGNoKGdxbCkge1xuXHRyZXR1cm4gYXdhaXQgcmVxdWVzdChwcm9jZXNzLmVudi5FTkRQT0lOVCwgZ3FsKVxufSJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwicWZldGNoIiwiZ3FsIiwicHJvY2VzcyIsImVudiIsIkVORFBPSU5UIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./function/request/index.js\n");

/***/ }),

/***/ "./function/request/pages.js":
/*!***********************************!*\
  !*** ./function/request/pages.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPagesBy\": () => (/* binding */ getPagesBy),\n/* harmony export */   \"getPages\": () => (/* binding */ getPages)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DEFAULT_PAGE = `\n\tslug\n\ttitle\n\tid\n\tcontent\n\texcerpt\n`;\nconst getPagesBy = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`\n\tquery ($slot: String) {\n\t\tpageBy(slot: $slot) {\n\t\t\t${DEFAULT_PAGE}\n\t\t}\n\t}\n`;\nconst getPages = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`\n\tquery {\n\t\tpages {\n\t\t\tnodes {\n\t\t\t\t${DEFAULT_PAGE}\n\t\t\t}\n\t\t}\n\t}\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mdW5jdGlvbi9yZXF1ZXN0L3BhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUdBLE1BQU1DLFlBQVksR0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtBQVFPLE1BQU1DLFVBQVUsR0FBR0YsZ0RBQUk7QUFDOUI7QUFDQTtBQUNBLEtBQUtDLFlBQWE7QUFDbEI7QUFDQTtBQUNBLENBTk87QUFRQSxNQUFNRSxRQUFRLEdBQUdILGdEQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLFlBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsQ0FSTyIsInNvdXJjZXMiOlsid2VicGFjazovL3dwLWZyb250ZW5kLy4vZnVuY3Rpb24vcmVxdWVzdC9wYWdlcy5qcz8yMjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcblxuXG5jb25zdCBERUZBVUxUX1BBR0UgPSBgXG5cdHNsdWdcblx0dGl0bGVcblx0aWRcblx0Y29udGVudFxuXHRleGNlcnB0XG5gXG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlc0J5ID0gZ3FsYFxuXHRxdWVyeSAoJHNsb3Q6IFN0cmluZykge1xuXHRcdHBhZ2VCeShzbG90OiAkc2xvdCkge1xuXHRcdFx0JHtERUZBVUxUX1BBR0V9XG5cdFx0fVxuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlcyA9IGdxbGBcblx0cXVlcnkge1xuXHRcdHBhZ2VzIHtcblx0XHRcdG5vZGVzIHtcblx0XHRcdFx0JHtERUZBVUxUX1BBR0V9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5gIl0sIm5hbWVzIjpbImdxbCIsIkRFRkFVTFRfUEFHRSIsImdldFBhZ2VzQnkiLCJnZXRQYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./function/request/pages.js\n");

/***/ }),

/***/ "./pages/[slot].js":
/*!*************************!*\
  !*** ./pages/[slot].js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @request */ \"./function/request/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/arthurtinseau/Desktop/Dev/GATSBY/wp-frontend/pages/[slot].js\";\n\n\n\nconst Slot = ({\n  data\n}) => {\n  console.log(data);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n    children: \"voici le contenu de la page\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, undefined);\n};\n\nasync function getServerSideProps({\n  params\n}) {\n  // res.statusCode = 302\n  // res.setHeader('Location', `/`)\n  const slot = params.slot;\n  const data = await (0,_request__WEBPACK_IMPORTED_MODULE_0__.qfetch)(_request__WEBPACK_IMPORTED_MODULE_0__.getPagesBy, {\n    slot\n  });\n  return {\n    props: {\n      data: {\n        id: \"salut\"\n      }\n    }\n  };\n} // export function getStaticPaths (e) {\n// \treturn {\n// \t\tpaths: [],\n// \t\tfallback: 'blocking'\n// \t}\n// }\n// export async function getStaticProps (context) {\n// \tconsole.log(context)\n// \treturn {\n// \t\tprops: {\n// \t\t}\n// \t}\n// }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slot);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2xvdF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUVBLE1BQU1FLElBQUksR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFjO0FBRTFCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUVBLHNCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFHQSxDQVBEOztBQVNPLGVBQWVHLGtCQUFmLENBQWtDO0FBQUNDLEVBQUFBO0FBQUQsQ0FBbEMsRUFBNEM7QUFDbEQ7QUFDQTtBQUVBLFFBQU1DLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFwQjtBQUVBLFFBQU1MLElBQUksR0FBRyxNQUFNRixnREFBTSxDQUFDRCxnREFBRCxFQUFhO0FBQUVRLElBQUFBO0FBQUYsR0FBYixDQUF6QjtBQUVBLFNBQU87QUFDTkMsSUFBQUEsS0FBSyxFQUFFO0FBQ05OLE1BQUFBLElBQUksRUFBRTtBQUNMTyxRQUFBQSxFQUFFLEVBQUU7QUFEQztBQURBO0FBREQsR0FBUDtBQU9BLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWVSLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cC1mcm9udGVuZC8uL3BhZ2VzL1tzbG90XS5qcz8xNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFBhZ2VzQnksIHFmZXRjaCB9IGZyb20gXCJAcmVxdWVzdFwiO1xuXG5jb25zdCBTbG90ID0gKHsgZGF0YSB9KSA9PiB7XG5cdFxuXHRjb25zb2xlLmxvZyhkYXRhKVxuXG5cdHJldHVybiAoXG5cdFx0PGgxPnZvaWNpIGxlIGNvbnRlbnUgZGUgbGEgcGFnZTwvaDE+XG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zfSkge1xuXHQvLyByZXMuc3RhdHVzQ29kZSA9IDMwMlxuXHQvLyByZXMuc2V0SGVhZGVyKCdMb2NhdGlvbicsIGAvYClcblxuXHRjb25zdCBzbG90ID0gcGFyYW1zLnNsb3Q7XG5cblx0Y29uc3QgZGF0YSA9IGF3YWl0IHFmZXRjaChnZXRQYWdlc0J5LCB7IHNsb3QgfSlcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGlkOiBcInNhbHV0XCJcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzIChlKSB7XG4vLyBcdHJldHVybiB7XG4vLyBcdFx0cGF0aHM6IFtdLFxuLy8gXHRcdGZhbGxiYWNrOiAnYmxvY2tpbmcnXG4vLyBcdH1cbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzIChjb250ZXh0KSB7XG4vLyBcdGNvbnNvbGUubG9nKGNvbnRleHQpXG4vLyBcdHJldHVybiB7XG4vLyBcdFx0cHJvcHM6IHtcblx0XHRcdFxuLy8gXHRcdH1cbi8vIFx0fVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBTbG90Il0sIm5hbWVzIjpbImdldFBhZ2VzQnkiLCJxZmV0Y2giLCJTbG90IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJzbG90IiwicHJvcHMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[slot].js\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[slot].js"));
module.exports = __webpack_exports__;

})();