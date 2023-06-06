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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            // clientId: process.env.GITHUB_ID,\n            // clientSecret: process.env.GITHUB_SECRET,\n            clientId: \"dfbe105d4ef7647aa2e1\",\n            clientSecret: \"b6b124c860b8e4df3c81850f4101d06b15a287fa\",\n            scope: \"read:user read:org\"\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , account , profile  }) {\n            // Persist the OAuth access_token to the token right after signin\n            if (account) {\n                token.accessToken = account.access_token;\n                token.id = profile.id;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // Send properties to the client, like an access_token from a provider.\n            session.accessToken = token.accessToken;\n            session.user.id = token.id;\n            return session;\n        }\n    },\n    pages: {\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBRXZELGlFQUFlQSxnREFBUUEsQ0FBQztJQUV4QkUsV0FBVztRQUNYRCxpRUFBY0EsQ0FBQztZQUNiLG1DQUFtQztZQUNuQywyQ0FBMkM7WUFDM0NFLFVBQVU7WUFDVkMsY0FBYztZQUNkQyxPQUFPO1FBRUw7S0FBRztJQUVMQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBQ0MsUUFBTyxFQUFFO1lBQ2xDLGlFQUFpRTtZQUNqRSxJQUFJRCxTQUFTO2dCQUNYRCxNQUFNRyxjQUFjRixRQUFRRztnQkFDNUJKLE1BQU1LLEtBQUdILFFBQVFHO1lBQ25CO1lBQ0EsT0FBT0w7UUFDVDtRQUNBLE1BQU1NLFNBQVEsRUFBRUEsUUFBTyxFQUFFTixNQUFLLEVBQUVPLEtBQUksRUFBRTtZQUNwQyx1RUFBdUU7WUFDdkVELFFBQVFILGNBQWNILE1BQU1HO1lBQzVCRyxRQUFRQyxLQUFLRixLQUFLTCxNQUFNSztZQUN4QixPQUFPQztRQUNUO0lBQ0Y7SUFFQUUsT0FBTztJQU1QO0FBRUYsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdC1idXNpbmVzcy1jYXJkLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCJcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBcbnByb3ZpZGVyczogW1xuR2l0aHViUHJvdmlkZXIoe1xuICAvLyBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAvLyBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gIGNsaWVudElkOiBcImRmYmUxMDVkNGVmNzY0N2FhMmUxXCIsXG4gIGNsaWVudFNlY3JldDogXCJiNmIxMjRjODYwYjhlNGRmM2M4MTg1MGY0MTAxZDA2YjE1YTI4N2ZhXCIsXG4gIHNjb3BlOiBcInJlYWQ6dXNlciByZWFkOm9yZ1wiLFxuXG4gICAgfSldLFxuXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCBhY2NvdW50LHByb2ZpbGUgfSkge1xuICAgICAgLy8gUGVyc2lzdCB0aGUgT0F1dGggYWNjZXNzX3Rva2VuIHRvIHRoZSB0b2tlbiByaWdodCBhZnRlciBzaWduaW5cbiAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NfdG9rZW5cbiAgICAgICAgdG9rZW4uaWQ9cHJvZmlsZS5pZFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgLy8gU2VuZCBwcm9wZXJ0aWVzIHRvIHRoZSBjbGllbnQsIGxpa2UgYW4gYWNjZXNzX3Rva2VuIGZyb20gYSBwcm92aWRlci5cbiAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlblxuICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWRcbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfVxuICB9LFxuXG4gIHBhZ2VzOiB7XG4gICAgLy8gLy8gc2lnbkluOiAnL2F1dGgvbG9naW4nLFxuICAgIC8vIC8vIHNpZ25PdXQ6ICcvYXV0aC9zaWdub3V0JyxcbiAgICAvLyBlcnJvcjogJy9hdXRoL2Vycm9yJywgLy8gRXJyb3IgY29kZSBwYXNzZWQgaW4gcXVlcnkgc3RyaW5nIGFzID9lcnJvcj1cbiAgICAvLyB2ZXJpZnlSZXF1ZXN0OiAnL2F1dGgvdmVyaWZ5LXJlcXVlc3QnLCAvLyAodXNlZCBmb3IgY2hlY2sgZW1haWwgbWVzc2FnZSlcbiAgICAvLyBuZXdVc2VyOiAnL2F1dGgvbmV3LXVzZXInIC8vIE5ldyB1c2VycyB3aWxsIGJlIGRpcmVjdGVkIGhlcmUgb24gZmlyc3Qgc2lnbiBpbiAobGVhdmUgdGhlIHByb3BlcnR5IG91dCBpZiBub3Qgb2YgaW50ZXJlc3QpXG4gIH1cblxufSlcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdpdGh1YlByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJzY29wZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiYWNjb3VudCIsInByb2ZpbGUiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImlkIiwic2Vzc2lvbiIsInVzZXIiLCJwYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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