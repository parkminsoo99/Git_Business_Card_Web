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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            // clientId: process.env.GITHUB_ID,\n            // clientSecret: process.env.GITHUB_SECRET,\n            clientId: \"b2bc3e73cc39eae48072\",\n            clientSecret: \"fbe8005522503b684dd9f1fb8146306b90905dcc\",\n            scope: \"read:user read:org\"\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , account , profile  }) {\n            // Persist the OAuth access_token to the token right after signin\n            if (account) {\n                token.accessToken = account.access_token;\n                token.id = profile.id;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // Send properties to the client, like an access_token from a provider.\n            session.accessToken = token.accessToken;\n            session.user.id = token.id;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBRXZELGlFQUFlQSxnREFBUUEsQ0FBQztJQUV4QkUsV0FBVztRQUNYRCxpRUFBY0EsQ0FBQztZQUNiLG1DQUFtQztZQUNuQywyQ0FBMkM7WUFDM0NFLFVBQVU7WUFDVkMsY0FBYztZQUNkQyxPQUFPO1FBRUw7S0FBRztJQUVMQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBQ0MsUUFBTyxFQUFFLEVBQUU7WUFDcEMsaUVBQWlFO1lBQ2pFLElBQUlELFNBQVM7Z0JBQ1hELE1BQU1HLFdBQVcsR0FBR0YsUUFBUUcsWUFBWTtnQkFDeENKLE1BQU1LLEVBQUUsR0FBQ0gsUUFBUUcsRUFBRTtZQUNyQixDQUFDO1lBQ0QsT0FBT0w7UUFDVDtRQUNBLE1BQU1NLFNBQVEsRUFBRUEsUUFBTyxFQUFFTixNQUFLLEVBQUVPLEtBQUksRUFBRSxFQUFFO1lBQ3RDLHVFQUF1RTtZQUN2RUQsUUFBUUgsV0FBVyxHQUFHSCxNQUFNRyxXQUFXO1lBQ3ZDRyxRQUFRQyxJQUFJLENBQUNGLEVBQUUsR0FBR0wsTUFBTUssRUFBRTtZQUMxQixPQUFPQztRQUNUO0lBQ0Y7QUFVRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0LWJ1c2luZXNzLWNhcmQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIFxucHJvdmlkZXJzOiBbXG5HaXRodWJQcm92aWRlcih7XG4gIC8vIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gIC8vIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgY2xpZW50SWQ6IFwiYjJiYzNlNzNjYzM5ZWFlNDgwNzJcIixcbiAgY2xpZW50U2VjcmV0OiBcImZiZTgwMDU1MjI1MDNiNjg0ZGQ5ZjFmYjgxNDYzMDZiOTA5MDVkY2NcIixcbiAgc2NvcGU6IFwicmVhZDp1c2VyIHJlYWQ6b3JnXCIsXG5cbiAgICB9KV0sXG5cbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIGFjY291bnQscHJvZmlsZSB9KSB7XG4gICAgICAvLyBQZXJzaXN0IHRoZSBPQXV0aCBhY2Nlc3NfdG9rZW4gdG8gdGhlIHRva2VuIHJpZ2h0IGFmdGVyIHNpZ25pblxuICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc190b2tlblxuICAgICAgICB0b2tlbi5pZD1wcm9maWxlLmlkXG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XG4gICAgICAvLyBTZW5kIHByb3BlcnRpZXMgdG8gdGhlIGNsaWVudCwgbGlrZSBhbiBhY2Nlc3NfdG9rZW4gZnJvbSBhIHByb3ZpZGVyLlxuICAgICAgc2Vzc2lvbi5hY2Nlc3NUb2tlbiA9IHRva2VuLmFjY2Vzc1Rva2VuXG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZFxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9XG4gIH0sXG5cbiAgLy8gcGFnZXM6IHtcbiAgLy8gICAvL3NpZ25JbjogJy9hdXRoL2xvZ2luJyxcbiAgLy8gICAvL3NpZ25PdXQ6ICcvYXV0aC9zaWdub3V0JyxcbiAgLy8gICBlcnJvcjogJy9hdXRoL2Vycm9yJywgLy8gRXJyb3IgY29kZSBwYXNzZWQgaW4gcXVlcnkgc3RyaW5nIGFzID9lcnJvcj1cbiAgLy8gICB2ZXJpZnlSZXF1ZXN0OiAnL2F1dGgvdmVyaWZ5LXJlcXVlc3QnLCAvLyAodXNlZCBmb3IgY2hlY2sgZW1haWwgbWVzc2FnZSlcbiAgLy8gICBuZXdVc2VyOiAnL2F1dGgvbmV3LXVzZXInIC8vIE5ldyB1c2VycyB3aWxsIGJlIGRpcmVjdGVkIGhlcmUgb24gZmlyc3Qgc2lnbiBpbiAobGVhdmUgdGhlIHByb3BlcnR5IG91dCBpZiBub3Qgb2YgaW50ZXJlc3QpXG4gIC8vIH1cblxufSlcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdpdGh1YlByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJzY29wZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiYWNjb3VudCIsInByb2ZpbGUiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImlkIiwic2Vzc2lvbiIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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