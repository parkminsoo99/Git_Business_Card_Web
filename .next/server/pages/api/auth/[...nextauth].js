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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            // clientId: process.env.GITHUB_ID,\n            // clientSecret: process.env.GITHUB_SECRET,\n            clientId: \"b2bc3e73cc39eae48072\",\n            clientSecret: \"fbe8005522503b684dd9f1fb8146306b90905dcc\",\n            scope: \"read:user read:org\"\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , account , profile  }) {\n            // Persist the OAuth access_token to the token right after signin\n            if (account) {\n                token.accessToken = account.access_token;\n                token.id = profile.id;\n                token.login = profile.login;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // Send properties to the client, like an access_token from a provider.\n            session.accessToken = token.accessToken;\n            session.user.id = token.id;\n            session.user.login = token.login;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBRXZELGlFQUFlQSxnREFBUUEsQ0FBQztJQUV4QkUsV0FBVztRQUNYRCxpRUFBY0EsQ0FBQztZQUNiLG1DQUFtQztZQUNuQywyQ0FBMkM7WUFDM0NFLFVBQVU7WUFDVkMsY0FBYztZQUNkQyxPQUFPO1FBRUw7S0FBRztJQUVMQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBQ0MsUUFBTyxFQUFFLEVBQUU7WUFDcEMsaUVBQWlFO1lBQ2pFLElBQUlELFNBQVM7Z0JBQ1hELE1BQU1HLFdBQVcsR0FBR0YsUUFBUUcsWUFBWTtnQkFDeENKLE1BQU1LLEVBQUUsR0FBQ0gsUUFBUUcsRUFBRTtnQkFDbkJMLE1BQU1NLEtBQUssR0FBR0osUUFBUUksS0FBSztZQUM3QixDQUFDO1lBQ0QsT0FBT047UUFDVDtRQUNBLE1BQU1PLFNBQVEsRUFBRUEsUUFBTyxFQUFFUCxNQUFLLEVBQUVRLEtBQUksRUFBRSxFQUFFO1lBQ3RDLHVFQUF1RTtZQUN2RUQsUUFBUUosV0FBVyxHQUFHSCxNQUFNRyxXQUFXO1lBQ3ZDSSxRQUFRQyxJQUFJLENBQUNILEVBQUUsR0FBR0wsTUFBTUssRUFBRTtZQUMxQkUsUUFBUUMsSUFBSSxDQUFDRixLQUFLLEdBQUdOLE1BQU1NLEtBQUs7WUFDaEMsT0FBT0M7UUFDVDtJQUNGO0FBVUYsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdC1idXNpbmVzcy1jYXJkLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIFxyXG5wcm92aWRlcnM6IFtcclxuR2l0aHViUHJvdmlkZXIoe1xyXG4gIC8vIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXHJcbiAgLy8gY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxyXG4gIGNsaWVudElkOiBcImIyYmMzZTczY2MzOWVhZTQ4MDcyXCIsXHJcbiAgY2xpZW50U2VjcmV0OiBcImZiZTgwMDU1MjI1MDNiNjg0ZGQ5ZjFmYjgxNDYzMDZiOTA5MDVkY2NcIixcclxuICBzY29wZTogXCJyZWFkOnVzZXIgcmVhZDpvcmdcIixcclxuXHJcbiAgICB9KV0sXHJcblxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIGFjY291bnQscHJvZmlsZSB9KSB7XHJcbiAgICAgIC8vIFBlcnNpc3QgdGhlIE9BdXRoIGFjY2Vzc190b2tlbiB0byB0aGUgdG9rZW4gcmlnaHQgYWZ0ZXIgc2lnbmluXHJcbiAgICAgIGlmIChhY2NvdW50KSB7XHJcbiAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc190b2tlblxyXG4gICAgICAgIHRva2VuLmlkPXByb2ZpbGUuaWRcclxuICAgICAgICB0b2tlbi5sb2dpbiA9IHByb2ZpbGUubG9naW5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW5cclxuICAgIH0sXHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICAvLyBTZW5kIHByb3BlcnRpZXMgdG8gdGhlIGNsaWVudCwgbGlrZSBhbiBhY2Nlc3NfdG9rZW4gZnJvbSBhIHByb3ZpZGVyLlxyXG4gICAgICBzZXNzaW9uLmFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW5cclxuICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWRcclxuICAgICAgc2Vzc2lvbi51c2VyLmxvZ2luID0gdG9rZW4ubG9naW5cclxuICAgICAgcmV0dXJuIHNlc3Npb25cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyBwYWdlczoge1xyXG4gIC8vICAgLy9zaWduSW46ICcvYXV0aC9sb2dpbicsXHJcbiAgLy8gICAvL3NpZ25PdXQ6ICcvYXV0aC9zaWdub3V0JyxcclxuICAvLyAgIGVycm9yOiAnL2F1dGgvZXJyb3InLCAvLyBFcnJvciBjb2RlIHBhc3NlZCBpbiBxdWVyeSBzdHJpbmcgYXMgP2Vycm9yPVxyXG4gIC8vICAgdmVyaWZ5UmVxdWVzdDogJy9hdXRoL3ZlcmlmeS1yZXF1ZXN0JywgLy8gKHVzZWQgZm9yIGNoZWNrIGVtYWlsIG1lc3NhZ2UpXHJcbiAgLy8gICBuZXdVc2VyOiAnL2F1dGgvbmV3LXVzZXInIC8vIE5ldyB1c2VycyB3aWxsIGJlIGRpcmVjdGVkIGhlcmUgb24gZmlyc3Qgc2lnbiBpbiAobGVhdmUgdGhlIHByb3BlcnR5IG91dCBpZiBub3Qgb2YgaW50ZXJlc3QpXHJcbiAgLy8gfVxyXG5cclxufSlcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsInNjb3BlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiaWQiLCJsb2dpbiIsInNlc3Npb24iLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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