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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            // clientId: process.env.GITHUB_ID,\n            // clientSecret: process.env.GITHUB_SECRET,\n            clientId: \"b2bc3e73cc39eae48072\",\n            clientSecret: \"fbe8005522503b684dd9f1fb8146306b90905dcc\",\n            scope: \"read:user read:org\"\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBRXZELGlFQUFlQSxnREFBUUEsQ0FBQztJQUV4QkUsV0FBVztRQUNYRCxpRUFBY0EsQ0FBQztZQUNiLG1DQUFtQztZQUNuQywyQ0FBMkM7WUFDM0NFLFVBQVU7WUFDVkMsY0FBYztZQUNkQyxPQUFPO1FBRUw7S0FBRztBQXlCUCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0LWJ1c2luZXNzLWNhcmQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIFxucHJvdmlkZXJzOiBbXG5HaXRodWJQcm92aWRlcih7XG4gIC8vIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gIC8vIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgY2xpZW50SWQ6IFwiYjJiYzNlNzNjYzM5ZWFlNDgwNzJcIixcbiAgY2xpZW50U2VjcmV0OiBcImZiZTgwMDU1MjI1MDNiNjg0ZGQ5ZjFmYjgxNDYzMDZiOTA5MDVkY2NcIixcbiAgc2NvcGU6IFwicmVhZDp1c2VyIHJlYWQ6b3JnXCIsXG5cbiAgICB9KV0sXG5cbiAgLy8gY2FsbGJhY2tzOiB7XG4gIC8vICAgYXN5bmMgand0KHsgdG9rZW4sIGFjY291bnQgfSkge1xuICAvLyAgICAgLy8gUGVyc2lzdCB0aGUgT0F1dGggYWNjZXNzX3Rva2VuIHRvIHRoZSB0b2tlbiByaWdodCBhZnRlciBzaWduaW5cbiAgLy8gICAgIGlmIChhY2NvdW50KSB7XG4gIC8vICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NfdG9rZW5cbiAgLy8gICAgIH1cbiAgLy8gICAgIHJldHVybiB0b2tlblxuICAvLyAgIH0sXG4gIC8vICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcbiAgLy8gICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50LCBsaWtlIGFuIGFjY2Vzc190b2tlbiBmcm9tIGEgcHJvdmlkZXIuXG4gIC8vICAgICBzZXNzaW9uLmFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW5cbiAgLy8gICAgIHJldHVybiBzZXNzaW9uXG4gIC8vICAgfVxuICAvLyB9LFxuXG4gIC8vIHBhZ2VzOiB7XG4gIC8vICAgLy9zaWduSW46ICcvYXV0aC9sb2dpbicsXG4gIC8vICAgLy9zaWduT3V0OiAnL2F1dGgvc2lnbm91dCcsXG4gIC8vICAgZXJyb3I6ICcvYXV0aC9lcnJvcicsIC8vIEVycm9yIGNvZGUgcGFzc2VkIGluIHF1ZXJ5IHN0cmluZyBhcyA/ZXJyb3I9XG4gIC8vICAgdmVyaWZ5UmVxdWVzdDogJy9hdXRoL3ZlcmlmeS1yZXF1ZXN0JywgLy8gKHVzZWQgZm9yIGNoZWNrIGVtYWlsIG1lc3NhZ2UpXG4gIC8vICAgbmV3VXNlcjogJy9hdXRoL25ldy11c2VyJyAvLyBOZXcgdXNlcnMgd2lsbCBiZSBkaXJlY3RlZCBoZXJlIG9uIGZpcnN0IHNpZ24gaW4gKGxlYXZlIHRoZSBwcm9wZXJ0eSBvdXQgaWYgbm90IG9mIGludGVyZXN0KVxuICAvLyB9XG5cbn0pXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0Iiwic2NvcGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();