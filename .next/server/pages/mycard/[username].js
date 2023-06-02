"use strict";
(() => {
var exports = {};
exports.id = 837;
exports.ids = [837];
exports.modules = {

/***/ 3737:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_mycard_username_js__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ private_next_pages_mycard_username_js__WEBPACK_IMPORTED_MODULE_0__.Fe),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ private_next_pages_mycard_username_js__WEBPACK_IMPORTED_MODULE_0__.b1)
/* harmony export */ });
/* harmony import */ var private_next_pages_mycard_username_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7406);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_mycard_username_js__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_mycard_username_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b1": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2134);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__]);
isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const fetchGitHubUser = async (accessToken)=>{
    try {
        const response = await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            const username = data.login;
            return username;
        } else {
            throw new Error("Failed to fetch GitHub user data");
        }
    } catch (error) {
        console.error("Failed to fetch GitHub user data:", error);
    // 오류 처리 로직
    }
};
// export async function getStaticPaths() {
//   // 여기에서 필요한 로직을 추가하여 사용자 목록을 가져올 수 있습니다.
//   // 예시로 두 명의 사용자를 가정합니다.
//   const users = ['user1', 'user2'];
//   const paths = users.map((username) => ({
//     params: { username },
//   }));
//   return {
//     paths,
//     fallback: true, // fallback을 true로 설정하여 정적으로 미리 생성되지 않은 페이지도 렌더링될 수 있도록 합니다.
//   };
// }
async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking"
    };
}
;
async function getStaticProps({ params  }) {
    const name = params.username;
    const response1 = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__["default"])(`https://api.github.com/users/${name}`);
    const response2 = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__["default"])(`https://api.github.com/users/${name}/repos`);
    const response3 = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__["default"])(`https://api.github.com/users/${name}/orgs`);
    const user_profile_info = await response1.json();
    const repos = await response2.json();
    const orgs = await response3.json();
    return {
        props: {
            user_profile_info,
            repos,
            orgs
        }
    };
}
const UserPage = ({ user_profile_info , repos , orgs  })=>{
    console.log("function in : ", user_profile_info);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    //console.log('GitHub Username:', user.login);
    if (router.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    function onClick(event) {
        const element = event.currentTarget;
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        } else {
            element.style.transform = "rotateY(180deg)";
        }
    }
    //로그인 된 경우 Login 버튼 없애기
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            " ",
            " ",
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "text-gray-600 body-font mb-24",
                children: [
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-19794a22f856e14f" + " " + "container mx-auto flex flex-col px-5 py-24 justify-center items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                onClick: onClick,
                                className: "jsx-19794a22f856e14f" + " " + "card rounded-md w-96 h-60 bg-black",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-19794a22f856e14f" + " " + "front",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "profile",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: user_profile_info.avatar_url,
                                                    alt: "profileimg",
                                                    className: "jsx-19794a22f856e14f" + " " + "profileimg"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "introduction",
                                                children: user_profile_info.bio
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "followers_num",
                                                children: [
                                                    "\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66",
                                                    user_profile_info.followers
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "followers",
                                                children: "followers"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "following_num",
                                                children: user_profile_info.following
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "following",
                                                children: "following"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "organization",
                                                children: [
                                                    "\uD83C\uDFD9 ",
                                                    user_profile_info.company
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "email",
                                                children: [
                                                    "✉ ",
                                                    user_profile_info.email
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "location",
                                                children: [
                                                    "\uD83C\uDF0D ",
                                                    user_profile_info.location
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "name",
                                                children: user_profile_info.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "git-id",
                                                children: [
                                                    "@",
                                                    user_profile_info.login
                                                ]
                                            }),
                                            orgs[0] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                src: orgs[0].avatar_url,
                                                alt: "profileimg",
                                                className: "jsx-19794a22f856e14f" + " " + "image1"
                                            }),
                                            orgs[1] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                src: orgs[1].avatar_url,
                                                alt: "profileimg",
                                                className: "jsx-19794a22f856e14f" + " " + "image2"
                                            }),
                                            orgs[2] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                src: orgs[1].avatar_url,
                                                alt: "profileimg",
                                                className: "jsx-19794a22f856e14f" + " " + "image2"
                                            }),
                                            orgs[3] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                src: orgs[1].avatar_url,
                                                alt: "profileimg",
                                                className: "jsx-19794a22f856e14f" + " " + "image2"
                                            }),
                                            orgs[4] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                src: orgs[1].avatar_url,
                                                alt: "profileimg",
                                                className: "jsx-19794a22f856e14f" + " " + "image2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                className: "jsx-19794a22f856e14f" + " " + "line"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "repos1",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-19794a22f856e14f" + " " + "typelevel-parser1",
                                                        children: [
                                                            "\uD83D\uDCCC",
                                                            repos[0].name
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-19794a22f856e14f" + " " + "stars1",
                                                        children: [
                                                            "⭐",
                                                            repos[0].stargazers_count
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-19794a22f856e14f" + " " + "TypeScript1",
                                                        children: [
                                                            "\uD83D\uDD35",
                                                            repos[0].language
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-19794a22f856e14f" + " " + "text1",
                                                        children: repos[0].descriptions
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-19794a22f856e14f" + " " + "repos2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-19794a22f856e14f" + " " + "typelevel-parser2",
                                                        children: [
                                                            "\uD83D\uDCCC",
                                                            repos[1].name
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-19794a22f856e14f" + " " + "stars2",
                                                        children: [
                                                            "⭐",
                                                            repos[1].stargazers_count
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-19794a22f856e14f" + " " + "TypeScript2",
                                                        children: [
                                                            "\uD83D\uDD35",
                                                            repos[1].language
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-19794a22f856e14f" + " " + "text2",
                                                        children: repos[1].descriptions
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-19794a22f856e14f" + " " + "back",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-19794a22f856e14f" + " " + "flex flex-row items-center justify-center h-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-19794a22f856e14f" + " " + "flex-shrink-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: `https://github-readme-stats.vercel.app/api?username=${user_profile_info.login}&show_icons=true&theme=tokyonight`,
                                                        className: "jsx-19794a22f856e14f" + " " + "h-60"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-19794a22f856e14f" + " " + "flex-shrink-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${user_profile_info.login}&layout=compact&theme=tokyonight`,
                                                        className: "jsx-19794a22f856e14f" + " " + "h-60"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                                id: "19794a22f856e14f",
                                children: ".card.jsx-19794a22f856e14f{-webkit-transition:-webkit-transform 1s;-moz-transition:-moz-transform 1s;-o-transition:-o-transform 1s;transition:-webkit-transform 1s;transition:-moz-transform 1s;transition:-o-transform 1s;transition:transform 1s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;cursor:pointer;-webkit-transform:rotatey(0);-moz-transform:rotatey(0);transform:rotatey(0);position:relative}.back.jsx-19794a22f856e14f,.front.jsx-19794a22f856e14f{-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;color:white;position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.back.jsx-19794a22f856e14f{-webkit-transform:rotatey(180deg);-moz-transform:rotatey(180deg);transform:rotatey(180deg)}.profile.jsx-19794a22f856e14f{left:35px;top:15px;width:90px;height:90px;background:rgba(191,255,255,.800000011920929);opacity:1;position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow:hidden;background-position:center center;border:.5px solid rgba(61,25,25,1)}.introduction.jsx-19794a22f856e14f{width:125px;left:20px;top:110px;position:absolute;font-size:5px;text-align:center}.followers_num.jsx-19794a22f856e14f{left:10px;top:155px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.followers.jsx-19794a22f856e14f{position:absolute;top:155px;left:45px;font-size:10px;opacity:.5;font-family:NanumSquare Neo;font-weight:Regular}.following_num.jsx-19794a22f856e14f{left:90px;top:155px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular}.following.jsx-19794a22f856e14f{position:absolute;top:155px;left:110px;font-size:10px;opacity:.5;font-family:NanumSquare Neo;font-weight:Regular}.organization.jsx-19794a22f856e14f{left:13px;top:175px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.email.jsx-19794a22f856e14f{left:13px;top:195px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.location.jsx-19794a22f856e14f{left:11px;top:215px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.name.jsx-19794a22f856e14f{left:160px;top:20px;position:absolute;font-size:25px;font-family:NanumSquare Neo;font-weight:Heavy;display:inline-block;white-space:nowrap}.git-id.jsx-19794a22f856e14f{left:160px;top:50px;position:absolute;font-size:17px;opacity:.5;font-family:NanumSquare Neo;display:inline-block;white-space:nowrap}.image1.jsx-19794a22f856e14f{position:absolute;width:25px;height:25px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;opacity:.6;top:80px;left:160px}.image2.jsx-19794a22f856e14f{position:absolute;width:25px;height:25px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;opacity:.6;top:80px;left:190px}.line.jsx-19794a22f856e14f{position:absolute;width:220px;color:#808080;left:160px;top:110px}.repos1.jsx-19794a22f856e14f{position:absolute;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border-color:gray;border-width:1px;width:220px;height:50px;left:160px;top:120px}.typelevel-parser1.jsx-19794a22f856e14f{position:relative;left:10px;font-size:10px;color:rgb(0,153,255);font-family:NanumSquare Neo;font-weight:Heavy}.stars1.jsx-19794a22f856e14f{position:relative;top:-13px;left:120px;font-size:10px;font-family:NanumSquare Neo}.TypeScript1.jsx-19794a22f856e14f{position:relative;top:-28px;left:155px;font-size:10px;font-family:NanumSquare Neo}.text1.jsx-19794a22f856e14f{position:relative;left:5px;top:-30px;font-size:10px;font-family:NanumSquare Neo}.repos2.jsx-19794a22f856e14f{position:absolute;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border-color:gray;border-width:1px;width:220px;height:50px;left:160px;top:180px}.typelevel-parser2.jsx-19794a22f856e14f{position:relative;left:10px;font-size:10px;color:rgb(0,153,255);font-family:NanumSquare Neo;font-weight:Heavy}.stars2.jsx-19794a22f856e14f{position:relative;top:-13px;left:120px;font-size:10px;font-family:NanumSquare Neo}.TypeScript2.jsx-19794a22f856e14f{position:relative;top:-28px;left:155px;font-size:10px;font-family:NanumSquare Neo}.text2.jsx-19794a22f856e14f{position:relative;left:5px;top:-30px;font-size:10px;font-family:NanumSquare Neo}"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 2134:
/***/ ((module) => {

module.exports = import("isomorphic-unfetch");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(3737)));
module.exports = __webpack_exports__;

})();