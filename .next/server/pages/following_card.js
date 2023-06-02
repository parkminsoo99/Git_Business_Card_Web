"use strict";
(() => {
var exports = {};
exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 9692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Following_Card),
  "getStaticProps": () => (/* reexport */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./components/header.js
var header = __webpack_require__(3592);
// EXTERNAL MODULE: ./components/footer.js
var footer = __webpack_require__(91);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./pages/following_card.js






const fetchGitHubFollowUser = async (accessToken, username)=>{
    try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Failed to fetch GitHub user data: ${response.status}`);
        }
    } catch (error) {
        console.error("Failed to fetch GitHub user data:", error);
    }
};
function Following_Card({ followingUsers , followingUserOrgs , followingUserRepos  }) {
    const [followingList, setFollowingList] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            const session = await (0,react_.getSession)();
            if (session?.accessToken) {
                const updatedFollowingList = await Promise.all(followingUsers.map(async (followingUser)=>{
                    const userData = await fetchGitHubFollowUser(session.accessToken, followingUser.login);
                    return {
                        ...followingUser,
                        ...userData
                    };
                }));
                setFollowingList(updatedFollowingList);
            }
        };
        fetchData();
    }, []);
    function onClick(event) {
        const element = event.currentTarget;
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        } else {
            element.style.transform = "rotateY(180deg)";
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "jsx-c12d6c355a2fd5f" + " " + "content",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "jsx-c12d6c355a2fd5f" + " " + "card-grid",
                    children: followingList.map((followingUser, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            onClick: onClick,
                            className: "jsx-c12d6c355a2fd5f" + " " + "card rounded-md w-96 h-60 bg-black",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "jsx-c12d6c355a2fd5f" + " " + "front",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "profile",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: followingUser.avatar_url,
                                                alt: "profileimg",
                                                className: "jsx-c12d6c355a2fd5f" + " " + "profileimg"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "introduction",
                                            children: followingUser.bio
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "followers_num",
                                            children: [
                                                "\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66 ",
                                                followingUser.followers
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "followers",
                                            children: "followers"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "following_num",
                                            children: [
                                                " ",
                                                followingUser.following
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "following",
                                            children: "following"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "organization",
                                            children: [
                                                "\uD83C\uDFD9 ",
                                                followingUser.company
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "email",
                                            children: [
                                                "✉ ",
                                                followingUser.email
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "location",
                                            children: [
                                                "\uD83C\uDF0D ",
                                                followingUser.location
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "name",
                                            children: followingUser.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "git-id",
                                            children: [
                                                "@",
                                                followingUser.login
                                            ]
                                        }),
                                        followingUserOrgs[0] && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            src: followingUserOrgs[0].avatar_url,
                                            alt: "profileimg",
                                            className: "jsx-c12d6c355a2fd5f" + " " + "image2"
                                        }),
                                        followingUserOrgs[1] && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            src: followingUserOrgs[1].avatar_url,
                                            alt: "profileimg",
                                            className: "jsx-c12d6c355a2fd5f" + " " + "image2"
                                        }),
                                        followingUserOrgs[2] && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            src: followingUserOrgs[2].avatar_url,
                                            alt: "profileimg",
                                            className: "jsx-c12d6c355a2fd5f" + " " + "image2"
                                        }),
                                        followingUserOrgs[3] && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            src: followingUserOrgs[3].avatar_url,
                                            alt: "profileimg",
                                            className: "jsx-c12d6c355a2fd5f" + " " + "image2"
                                        }),
                                        followingUserOrgs[4] && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            src: followingUserOrgs[4].avatar_url,
                                            alt: "profileimg",
                                            className: "jsx-c12d6c355a2fd5f" + " " + "image2"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("hr", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "line"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "repos1",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "jsx-c12d6c355a2fd5f" + " " + "typelevel-parser1",
                                                    children: [
                                                        "\uD83D\uDCCC",
                                                        followingUserRepos[index][0].name
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "jsx-c12d6c355a2fd5f" + " " + "stars1",
                                                    children: [
                                                        "⭐",
                                                        followingUserRepos[index][0].stargazers_count
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "jsx-c12d6c355a2fd5f" + " " + "TypeScript1",
                                                    children: [
                                                        "\uD83D\uDD35",
                                                        followingUserRepos[index][0].language
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "jsx-c12d6c355a2fd5f" + " " + "text1",
                                                    children: followingUserRepos[index][0].descriptions
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "jsx-c12d6c355a2fd5f" + " " + "repos2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "jsx-c12d6c355a2fd5f" + " " + "typelevel-parser2",
                                                    children: [
                                                        "\uD83D\uDCCC",
                                                        followingUserRepos[index][1].name
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "jsx-c12d6c355a2fd5f" + " " + "stars2",
                                                    children: [
                                                        "⭐",
                                                        followingUserRepos[index][1].stargazers_count
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "jsx-c12d6c355a2fd5f" + " " + "TypeScript2",
                                                    children: [
                                                        "\uD83D\uDD35",
                                                        followingUserRepos[index][1].language
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "jsx-c12d6c355a2fd5f" + " " + "text2",
                                                    children: followingUserRepos[index][1].descriptions
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "jsx-c12d6c355a2fd5f" + " " + "back",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "jsx-c12d6c355a2fd5f" + " " + "flex flex-row items-center justify-center h-full",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "jsx-c12d6c355a2fd5f" + " " + "flex-shrink-0",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: `https://github-readme-stats.vercel.app/api?username=${followingUser.login}&show_icons=true&theme=tokyonight`,
                                                    className: "jsx-c12d6c355a2fd5f" + " " + "h-60"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "jsx-c12d6c355a2fd5f" + " " + "flex-shrink-0",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${followingUser.login}&layout=compact&theme=tokyonight`,
                                                    className: "jsx-c12d6c355a2fd5f" + " " + "h-60"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, followingUser.id))
                })
            }),
            jsx_runtime.jsx((style_default()), {
                id: "e028108c667d73aa",
                children: ".content.jsx-c12d6c355a2fd5f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.card-grid.jsx-c12d6c355a2fd5f{display:grid;grid-gap:80px;grid-template-columns:repeat(3,1fr)}.card.jsx-c12d6c355a2fd5f{-webkit-transition:-webkit-transform 1s;-moz-transition:-moz-transform 1s;-o-transition:-o-transform 1s;transition:-webkit-transform 1s;transition:-moz-transform 1s;transition:-o-transform 1s;transition:transform 1s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;cursor:pointer;-webkit-transform:rotatey(0);-moz-transform:rotatey(0);transform:rotatey(0);position:relative}.back.jsx-c12d6c355a2fd5f,.front.jsx-c12d6c355a2fd5f{-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;color:white;position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.back.jsx-c12d6c355a2fd5f{-webkit-transform:rotatey(180deg);-moz-transform:rotatey(180deg);transform:rotatey(180deg)}.profile.jsx-c12d6c355a2fd5f{left:35px;top:15px;width:90px;height:90px;background:rgba(191,255,255,.800000011920929);opacity:1;position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow:hidden;background-position:center center;border:.5px solid rgba(61,25,25,1)}.introduction.jsx-c12d6c355a2fd5f{width:125px;left:20px;top:110px;position:absolute;font-size:5px;text-align:center}.followers_num.jsx-c12d6c355a2fd5f{left:10px;top:155px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.followers.jsx-c12d6c355a2fd5f{position:absolute;top:155px;left:45px;font-size:10px;opacity:.5;font-family:NanumSquare Neo;font-weight:Regular}.following_num.jsx-c12d6c355a2fd5f{left:90px;top:155px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular}.following.jsx-c12d6c355a2fd5f{position:absolute;top:155px;left:110px;font-size:10px;opacity:.5;font-family:NanumSquare Neo;font-weight:Regular}.organization.jsx-c12d6c355a2fd5f{left:13px;top:175px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.email.jsx-c12d6c355a2fd5f{left:13px;top:195px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.location.jsx-c12d6c355a2fd5f{left:11px;top:215px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.name.jsx-c12d6c355a2fd5f{left:160px;top:20px;position:absolute;font-size:25px;font-family:NanumSquare Neo;font-weight:Heavy;display:inline-block;white-space:nowrap}.git-id.jsx-c12d6c355a2fd5f{left:160px;top:50px;position:absolute;font-size:17px;opacity:.5;font-family:NanumSquare Neo;display:inline-block;white-space:nowrap}.image1.jsx-c12d6c355a2fd5f{position:absolute;width:25px;height:25px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;opacity:.6;top:80px;left:160px}.image2.jsx-c12d6c355a2fd5f{position:absolute;width:25px;height:25px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;opacity:.6;top:80px;left:190px}.line.jsx-c12d6c355a2fd5f{position:absolute;width:220px;color:#808080;left:160px;top:110px}.repos1.jsx-c12d6c355a2fd5f{position:absolute;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border-color:gray;border-width:1px;width:220px;height:50px;left:160px;top:120px}.typelevel-parser1.jsx-c12d6c355a2fd5f{position:relative;left:10px;font-size:10px;color:rgb(0,153,255);font-family:NanumSquare Neo;font-weight:Heavy}.stars1.jsx-c12d6c355a2fd5f{position:relative;top:-13px;left:120px;font-size:10px;font-family:NanumSquare Neo}.TypeScript1.jsx-c12d6c355a2fd5f{position:relative;top:-28px;left:155px;font-size:10px;font-family:NanumSquare Neo}.text1.jsx-c12d6c355a2fd5f{position:relative;left:5px;top:-30px;font-size:10px;font-family:NanumSquare Neo}.repos2.jsx-c12d6c355a2fd5f{position:absolute;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border-color:gray;border-width:1px;width:220px;height:50px;left:160px;top:180px}.typelevel-parser2.jsx-c12d6c355a2fd5f{position:relative;left:10px;font-size:10px;color:rgb(0,153,255);font-family:NanumSquare Neo;font-weight:Heavy}.stars2.jsx-c12d6c355a2fd5f{position:relative;top:-13px;left:120px;font-size:10px;font-family:NanumSquare Neo}.TypeScript2.jsx-c12d6c355a2fd5f{position:relative;top:-28px;left:155px;font-size:10px;font-family:NanumSquare Neo}.text2.jsx-c12d6c355a2fd5f{position:relative;left:5px;top:-30px;font-size:10px;font-family:NanumSquare Neo}"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {}),
            jsx_runtime.jsx((style_default()), {
                id: "b4597285e4d39733",
                children: "@media(max-width:768px){.content.jsx-c12d6c355a2fd5f .card{@apply w-1/2;}}@media(max-width:480px){.content.jsx-c12d6c355a2fd5f .card{@apply w-full;}}"
            })
        ]
    });
}
async function getStaticProps(context) {
    const session = await (0,react_.getSession)({
        req: context.req
    });
    if (session?.accessToken) {
        const user = session.user.name;
        const response5 = await fetch(`https://api.github.com/users/${user}/following`);
        const following = await response5.json();
        // Fetch following users
        // Ensure `following` is an array
        const followingArray = Array.isArray(following) ? following : [];
        // Fetch information of following users
        const followingUsers = [];
        const followingUserOrgs = [];
        const followingUserRepos = [];
        for (const followingUser of followingArray){
            const response = await fetch(`https://api.github.com/users/${followingUser.login}`);
            const followingUserInfo = await response.json();
            if (!followingUsers.some((user)=>user.id === followingUserInfo.id)) {
                followingUsers.push(followingUserInfo);
            }
            const response1 = await fetch(`https://api.github.com/users/${followingUser.login}/orgs`);
            const response2 = await fetch(`https://api.github.com/users/${followingUser.login}/repos`);
            const followingUserOrgInfo = await response1.json();
            const followingUserReposInfo = await response2.json();
            followingUserOrgs.push(followingUserOrgInfo);
            followingUserRepos.push(followingUserReposInfo);
            console.log(followingUserOrgs);
        }
        return {
            props: {
                followingUsers,
                followingUserOrgs,
                followingUserRepos
            }
        };
    }
    return {
        props: {}
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Ffollowing_card&absolutePagePath=private-next-pages%2Ffollowing_card.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,947], () => (__webpack_exec__(9692)));
module.exports = __webpack_exports__;

})();