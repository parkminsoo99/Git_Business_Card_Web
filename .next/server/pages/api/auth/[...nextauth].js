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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            // clientId: process.env.GITHUB_ID,\n            // clientSecret: process.env.GITHUB_SECRET,\n            clientId: \"b2bc3e73cc39eae48072\",\n            clientSecret: \"fbe8005522503b684dd9f1fb8146306b90905dcc\",\n            scope: \"read:user read:org\"\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , account , profile  }) {\n            // Persist the OAuth access_token to the token right after signin\n            if (account) {\n                token.accessToken = account.access_token;\n                token.id = profile.id;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // Send properties to the client, like an access_token from a provider.\n            session.accessToken = token.accessToken;\n            session.user.id = token.id;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBRXZELGlFQUFlQSxnREFBUUEsQ0FBQztJQUV4QkUsV0FBVztRQUNYRCxpRUFBY0EsQ0FBQztZQUNiLG1DQUFtQztZQUNuQywyQ0FBMkM7WUFDM0NFLFVBQVU7WUFDVkMsY0FBYztZQUNkQyxPQUFPO1FBRUw7S0FBRztJQUVMQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBQ0MsUUFBTyxFQUFFLEVBQUU7WUFDcEMsaUVBQWlFO1lBQ2pFLElBQUlELFNBQVM7Z0JBQ1hELE1BQU1HLFdBQVcsR0FBR0YsUUFBUUcsWUFBWTtnQkFDeENKLE1BQU1LLEVBQUUsR0FBQ0gsUUFBUUcsRUFBRTtZQUNyQixDQUFDO1lBQ0QsT0FBT0w7UUFDVDtRQUNBLE1BQU1NLFNBQVEsRUFBRUEsUUFBTyxFQUFFTixNQUFLLEVBQUVPLEtBQUksRUFBRSxFQUFFO1lBQ3RDLHVFQUF1RTtZQUN2RUQsUUFBUUgsV0FBVyxHQUFHSCxNQUFNRyxXQUFXO1lBQ3ZDRyxRQUFRQyxJQUFJLENBQUNGLEVBQUUsR0FBR0wsTUFBTUssRUFBRTtZQUMxQixPQUFPQztRQUNUO0lBQ0Y7QUFVRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0LWJ1c2luZXNzLWNhcmQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgXHJcbnByb3ZpZGVyczogW1xyXG5HaXRodWJQcm92aWRlcih7XHJcbiAgLy8gY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcclxuICAvLyBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXHJcbiAgY2xpZW50SWQ6IFwiYjJiYzNlNzNjYzM5ZWFlNDgwNzJcIixcclxuICBjbGllbnRTZWNyZXQ6IFwiZmJlODAwNTUyMjUwM2I2ODRkZDlmMWZiODE0NjMwNmI5MDkwNWRjY1wiLFxyXG4gIHNjb3BlOiBcInJlYWQ6dXNlciByZWFkOm9yZ1wiLFxyXG5cclxuICAgIH0pXSxcclxuXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCxwcm9maWxlIH0pIHtcclxuICAgICAgLy8gUGVyc2lzdCB0aGUgT0F1dGggYWNjZXNzX3Rva2VuIHRvIHRoZSB0b2tlbiByaWdodCBhZnRlciBzaWduaW5cclxuICAgICAgaWYgKGFjY291bnQpIHtcclxuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IGFjY291bnQuYWNjZXNzX3Rva2VuXHJcbiAgICAgICAgdG9rZW4uaWQ9cHJvZmlsZS5pZFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlblxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50LCBsaWtlIGFuIGFjY2Vzc190b2tlbiBmcm9tIGEgcHJvdmlkZXIuXHJcbiAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlblxyXG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZFxyXG4gICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIHBhZ2VzOiB7XHJcbiAgLy8gICAvL3NpZ25JbjogJy9hdXRoL2xvZ2luJyxcclxuICAvLyAgIC8vc2lnbk91dDogJy9hdXRoL3NpZ25vdXQnLFxyXG4gIC8vICAgZXJyb3I6ICcvYXV0aC9lcnJvcicsIC8vIEVycm9yIGNvZGUgcGFzc2VkIGluIHF1ZXJ5IHN0cmluZyBhcyA/ZXJyb3I9XHJcbiAgLy8gICB2ZXJpZnlSZXF1ZXN0OiAnL2F1dGgvdmVyaWZ5LXJlcXVlc3QnLCAvLyAodXNlZCBmb3IgY2hlY2sgZW1haWwgbWVzc2FnZSlcclxuICAvLyAgIG5ld1VzZXI6ICcvYXV0aC9uZXctdXNlcicgLy8gTmV3IHVzZXJzIHdpbGwgYmUgZGlyZWN0ZWQgaGVyZSBvbiBmaXJzdCBzaWduIGluIChsZWF2ZSB0aGUgcHJvcGVydHkgb3V0IGlmIG5vdCBvZiBpbnRlcmVzdClcclxuICAvLyB9XHJcblxyXG59KVxyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0Iiwic2NvcGUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsImFjY291bnQiLCJwcm9maWxlIiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJpZCIsInNlc3Npb24iLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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