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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // cookies: {\n    //   sessionToken: {\n    //     name: \"next-auth.session-token\",\n    //     options: {\n    //       domain: \".localhost\",\n    //       path: \"/\",\n    //       httpOnly: true,\n    //       sameSite: \"lax\",\n    //       secure: false\n    //     }\n    //   }\n    // },\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBQ3ZELGlFQUFlQSxnREFBUUEsQ0FBQztJQUN0QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsTUFBTTtJQUNOLEtBQUs7SUFFUEUsV0FBVztRQUNYRCxpRUFBY0EsQ0FBQztZQUNiRSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUNyQztLQUFHO0FBWVAsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdC1idXNpbmVzcy1jYXJkLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgLy8gY29va2llczoge1xyXG4gIC8vICAgc2Vzc2lvblRva2VuOiB7XHJcbiAgLy8gICAgIG5hbWU6IFwibmV4dC1hdXRoLnNlc3Npb24tdG9rZW5cIixcclxuICAvLyAgICAgb3B0aW9uczoge1xyXG4gIC8vICAgICAgIGRvbWFpbjogXCIubG9jYWxob3N0XCIsXHJcbiAgLy8gICAgICAgcGF0aDogXCIvXCIsXHJcbiAgLy8gICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgLy8gICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXHJcbiAgLy8gICAgICAgc2VjdXJlOiBmYWxzZVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgLy8gfSxcclxuXHJcbnByb3ZpZGVyczogW1xyXG5HaXRodWJQcm92aWRlcih7XHJcbiAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcclxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVRcclxuICAgIH0pXSxcclxuICBcclxuICAvLyBwYWdlczoge1xyXG4gIC8vICAgc2lnbkluOiBcIi9zaWduaW5cIlxyXG4gIC8vICAgfSxcclxuICAvLyBjYWxsYmFja3M6IHtcclxuICAvLyAgIHNpZ25Jbih1c2VyLCBhY2NvdW50LCBwcm9maWxlKSB7XHJcbiAgLy8gICAgIHVzZXIubmFtZSA9IHNsdWcodXNlci5lbWFpbC5zbGljZSgwLCB1c2VyLmVtYWlsLmluZGV4T2YoJ0AnKSkpIC8vIG9yIHdoYXRldmVyIGVsc2VcclxuICAvLyAgICAgY29uc29sZS5sb2codXNlci5uYW1lKTtcclxuICAvLyAgICAgcmV0dXJuIHRydWVcclxuICAvLyAgIH0sXHJcbiAgLy8gfSxcclxufSlcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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