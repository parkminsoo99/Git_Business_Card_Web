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
exports.id = "pages/mycard/userfollowers";
exports.ids = ["pages/mycard/userfollowers"];
exports.modules = {

/***/ "./pages/mycard/userfollowers.js":
/*!***************************************!*\
  !*** ./pages/mycard/userfollowers.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__]);\nisomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst UserFollowers = ({ username  })=>{\n    const [followers, setFollowers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchFollowers = async ()=>{\n            const response = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`https://api.github.com/users/${username}/followers`);\n            const followersData = await response.json();\n            setFollowers(followersData);\n        };\n        fetchFollowers();\n    }, [\n        username\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Followers:\"\n            }, void 0, false, {\n                fileName: \"/Users/minsoo/Desktop/git-business-card/pages/mycard/userfollowers.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: followers.map((follower)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: follower.login\n                    }, follower.id, false, {\n                        fileName: \"/Users/minsoo/Desktop/git-business-card/pages/mycard/userfollowers.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/minsoo/Desktop/git-business-card/pages/mycard/userfollowers.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/minsoo/Desktop/git-business-card/pages/mycard/userfollowers.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserFollowers);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9teWNhcmQvdXNlcmZvbGxvd2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0w7QUFFdkMsTUFBTUcsZ0JBQWdCLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDdEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTyxpQkFBaUIsVUFBWTtZQUNqQyxNQUFNQyxXQUFXLE1BQU1OLDhEQUFLQSxDQUFDLENBQUMsNkJBQTZCLEVBQUVFLFNBQVMsVUFBVSxDQUFDO1lBQ2pGLE1BQU1LLGdCQUFnQixNQUFNRCxTQUFTRSxJQUFJO1lBQ3pDSixhQUFhRztRQUNmO1FBRUFGO0lBQ0YsR0FBRztRQUFDSDtLQUFTO0lBRWIscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0VSLFVBQVVTLEdBQUcsQ0FBQyxDQUFDQyx5QkFDZCw4REFBQ0M7a0NBQXNCRCxTQUFTRSxLQUFLO3VCQUE1QkYsU0FBU0csRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QjtBQUVBLGlFQUFlZixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0LWJ1c2luZXNzLWNhcmQvLi9wYWdlcy9teWNhcmQvdXNlcmZvbGxvd2Vycy5qcz82NzFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgVXNlckZvbGxvd2VycyA9ICh7IHVzZXJuYW1lIH0pID0+IHtcbiAgY29uc3QgW2ZvbGxvd2Vycywgc2V0Rm9sbG93ZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRm9sbG93ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJuYW1lfS9mb2xsb3dlcnNgKTtcbiAgICAgIGNvbnN0IGZvbGxvd2Vyc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRGb2xsb3dlcnMoZm9sbG93ZXJzRGF0YSk7XG4gICAgfTtcblxuICAgIGZldGNoRm9sbG93ZXJzKCk7XG4gIH0sIFt1c2VybmFtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5Gb2xsb3dlcnM6PC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAge2ZvbGxvd2Vycy5tYXAoKGZvbGxvd2VyKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17Zm9sbG93ZXIuaWR9Pntmb2xsb3dlci5sb2dpbn08L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyRm9sbG93ZXJzO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2giLCJVc2VyRm9sbG93ZXJzIiwidXNlcm5hbWUiLCJmb2xsb3dlcnMiLCJzZXRGb2xsb3dlcnMiLCJmZXRjaEZvbGxvd2VycyIsInJlc3BvbnNlIiwiZm9sbG93ZXJzRGF0YSIsImpzb24iLCJkaXYiLCJoMiIsInVsIiwibWFwIiwiZm9sbG93ZXIiLCJsaSIsImxvZ2luIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mycard/userfollowers.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("isomorphic-unfetch");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/mycard/userfollowers.js"));
module.exports = __webpack_exports__;

})();