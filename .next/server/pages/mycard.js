"use strict";
(() => {
var exports = {};
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ mycard),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
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
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_namespaceObject);
;// CONCATENATED MODULE: ./components/Modal.js




const Modal = ({ show , onClose , children , title  })=>{
    const [isBrowser, setIsBrowser] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setIsBrowser(true);
    }, []);
    const handleCloseClick = (e)=>{
        e.preventDefault();
        onClose();
    };
    const modalContent = show ? /*#__PURE__*/ jsx_runtime.jsx(StyledModalOverlay, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(StyledModal, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(StyledModalHeader, {
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "#",
                        onClick: handleCloseClick,
                        children: "x"
                    })
                }),
                title && /*#__PURE__*/ jsx_runtime.jsx(StyledModalTitle, {
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime.jsx(StyledModalBody, {
                    children: children
                })
            ]
        })
    }) : null;
    if (isBrowser) {
        return /*#__PURE__*/ external_react_dom_default().createPortal(modalContent, document.getElementById("modal-root"));
    } else {
        return null;
    }
};
const StyledModalBody = (external_styled_components_default()).div`
  padding-top: 10px;
`;
const StyledModalHeader = (external_styled_components_default()).div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;
const StyledModal = (external_styled_components_default()).div`
  background: white;
  width: 700px;
  height: 200px;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = (external_styled_components_default()).div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
/* harmony default export */ const components_Modal = (Modal);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./pages/mycard.js







const fetchGitHubUser = async (accessToken)=>{
    try {
        const response = await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            return data.login;
        } else {
            throw new Error("Failed to fetch GitHub user data");
        }
    } catch (error) {
        console.error("Failed to fetch GitHub user data:", error);
    }
};
function MyCard({ user_profile_info , repos , orgs  }) {
    const inputRef1 = (0,external_react_.useRef)(null);
    const inputRef2 = (0,external_react_.useRef)(null);
    const handleCopy1 = ()=>{
        if (inputRef1.current) {
            inputRef1.current.select();
            document.execCommand("copy");
            alert("copy successful");
        }
    };
    const handleCopy2 = ()=>{
        if (inputRef2.current) {
            inputRef2.current.select();
            document.execCommand("copy");
            alert("copy successful");
        }
    };
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    const { data: session , status  } = (0,react_.useSession)();
    function onClick(event) {
        const element = event.currentTarget;
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        } else {
            element.style.transform = "rotateY(180deg)";
        }
    }
    //로그인 된 경우 Login 버튼 없애기
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            " ",
            " ",
            " ",
            /*#__PURE__*/ jsx_runtime.jsx(header/* default */.Z, {}),
            " ",
            " ",
            " ",
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "text-gray-600 body-font mb-24",
                children: [
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "jsx-df655d5d3b8d00b7" + " " + "container mx-auto flex flex-col px-5 py-24 justify-center items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                onClick: onClick,
                                className: "jsx-df655d5d3b8d00b7" + " " + "card rounded-md w-96 h-60 bg-black",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "jsx-df655d5d3b8d00b7" + " " + "front",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "profile",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: user_profile_info.avatar_url,
                                                    alt: "profileimg",
                                                    className: "jsx-df655d5d3b8d00b7" + " " + "profileimg"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "introduction",
                                                children: user_profile_info.bio
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "followers_num",
                                                children: [
                                                    "\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66",
                                                    user_profile_info.followers
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "followers",
                                                children: "followers"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "following_num",
                                                children: user_profile_info.following
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "following",
                                                children: "following"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "organization",
                                                children: [
                                                    "\uD83C\uDFD9 ",
                                                    user_profile_info.company
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "email",
                                                children: [
                                                    "✉ ",
                                                    user_profile_info.email
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "location",
                                                children: [
                                                    "\uD83C\uDF0D ",
                                                    user_profile_info.location
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "name",
                                                children: user_profile_info.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "git-id",
                                                children: [
                                                    "@",
                                                    user_profile_info.login
                                                ]
                                            }),
                                            orgs[0] && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                src: orgs[0].avatar_url,
                                                alt: "profileimg",
                                                className: "jsx-df655d5d3b8d00b7" + " " + "image1"
                                            }),
                                            orgs[1] && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                src: orgs[1].avatar_url,
                                                alt: "profileimg",
                                                className: "jsx-df655d5d3b8d00b7" + " " + "image2"
                                            }),
                                            orgs[2] && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                src: orgs[1].avatar_url,
                                                alt: "profileimg",
                                                className: "jsx-df655d5d3b8d00b7" + " " + "image2"
                                            }),
                                            orgs[3] && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                src: orgs[1].avatar_url,
                                                alt: "profileimg",
                                                className: "jsx-df655d5d3b8d00b7" + " " + "image2"
                                            }),
                                            orgs[4] && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                src: orgs[1].avatar_url,
                                                alt: "profileimg",
                                                className: "jsx-df655d5d3b8d00b7" + " " + "image2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "line"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "repos1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "typelevel-parser1",
                                                        children: [
                                                            "\uD83D\uDCCC",
                                                            repos[0].name
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "stars1",
                                                        children: [
                                                            "⭐",
                                                            repos[0].stargazers_count
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "TypeScript1",
                                                        children: [
                                                            "\uD83D\uDD35",
                                                            repos[0].language
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "text1",
                                                        children: repos[0].descriptions
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "repos2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "typelevel-parser2",
                                                        children: [
                                                            "\uD83D\uDCCC",
                                                            repos[1].name
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "stars2",
                                                        children: [
                                                            "⭐",
                                                            repos[1].stargazers_count
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "TypeScript2",
                                                        children: [
                                                            "\uD83D\uDD35",
                                                            repos[1].language
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "text2",
                                                        children: repos[1].descriptions
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "jsx-df655d5d3b8d00b7" + " " + "back",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "jsx-df655d5d3b8d00b7" + " " + "flex flex-row items-center justify-center h-full",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "jsx-df655d5d3b8d00b7" + " " + "flex-shrink-0",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: `https://github-readme-stats.vercel.app/api?username=${user_profile_info.login}&show_icons=true&theme=tokyonight`,
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "h-60"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "jsx-df655d5d3b8d00b7" + " " + "flex-shrink-0",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${user_profile_info.login}&layout=compact&theme=tokyonight`,
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "h-60"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            jsx_runtime.jsx((style_default()), {
                                id: "df655d5d3b8d00b7",
                                children: ".card.jsx-df655d5d3b8d00b7{-webkit-transition:-webkit-transform 1s;-moz-transition:-moz-transform 1s;-o-transition:-o-transform 1s;transition:-webkit-transform 1s;transition:-moz-transform 1s;transition:-o-transform 1s;transition:transform 1s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;cursor:pointer;-webkit-transform:rotatey(0);-moz-transform:rotatey(0);transform:rotatey(0);position:relative}.back.jsx-df655d5d3b8d00b7,.front.jsx-df655d5d3b8d00b7{-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;color:white;position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.back.jsx-df655d5d3b8d00b7{-webkit-transform:rotatey(180deg);-moz-transform:rotatey(180deg);transform:rotatey(180deg)}.profile.jsx-df655d5d3b8d00b7{left:35px;top:15px;width:90px;height:90px;background:rgba(191,255,255,.800000011920929);opacity:1;position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow:hidden;background-position:center center;border:.5px solid rgba(61,25,25,1)}.introduction.jsx-df655d5d3b8d00b7{width:125px;left:20px;top:110px;position:absolute;font-size:5px;text-align:center}.followers_num.jsx-df655d5d3b8d00b7{left:10px;top:155px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.followers.jsx-df655d5d3b8d00b7{position:absolute;top:155px;left:45px;font-size:10px;opacity:.5;font-family:NanumSquare Neo;font-weight:Regular}.following_num.jsx-df655d5d3b8d00b7{left:90px;top:155px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular}.following.jsx-df655d5d3b8d00b7{position:absolute;top:155px;left:110px;font-size:10px;opacity:.5;font-family:NanumSquare Neo;font-weight:Regular}.organization.jsx-df655d5d3b8d00b7{left:13px;top:175px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.email.jsx-df655d5d3b8d00b7{left:13px;top:195px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.location.jsx-df655d5d3b8d00b7{left:11px;top:215px;position:absolute;font-size:10px;font-family:NanumSquare Neo;font-weight:Regular;display:inline-block;white-space:nowrap}.name.jsx-df655d5d3b8d00b7{left:160px;top:20px;position:absolute;font-size:25px;font-family:NanumSquare Neo;font-weight:Heavy;display:inline-block;white-space:nowrap}.git-id.jsx-df655d5d3b8d00b7{left:160px;top:50px;position:absolute;font-size:17px;opacity:.5;font-family:NanumSquare Neo;display:inline-block;white-space:nowrap}.image1.jsx-df655d5d3b8d00b7{position:absolute;width:25px;height:25px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;opacity:.6;top:80px;left:160px}.image2.jsx-df655d5d3b8d00b7{position:absolute;width:25px;height:25px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;opacity:.6;top:80px;left:190px}.line.jsx-df655d5d3b8d00b7{position:absolute;width:220px;color:#808080;left:160px;top:110px}.repos1.jsx-df655d5d3b8d00b7{position:absolute;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border-color:gray;border-width:1px;width:220px;height:50px;left:160px;top:120px}.typelevel-parser1.jsx-df655d5d3b8d00b7{position:relative;left:10px;font-size:10px;color:rgb(0,153,255);font-family:NanumSquare Neo;font-weight:Heavy}.stars1.jsx-df655d5d3b8d00b7{position:relative;top:-13px;left:120px;font-size:10px;font-family:NanumSquare Neo}.TypeScript1.jsx-df655d5d3b8d00b7{position:relative;top:-28px;left:155px;font-size:10px;font-family:NanumSquare Neo}.text1.jsx-df655d5d3b8d00b7{position:relative;left:5px;top:-30px;font-size:10px;font-family:NanumSquare Neo}.repos2.jsx-df655d5d3b8d00b7{position:absolute;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border-color:gray;border-width:1px;width:220px;height:50px;left:160px;top:180px}.typelevel-parser2.jsx-df655d5d3b8d00b7{position:relative;left:10px;font-size:10px;color:rgb(0,153,255);font-family:NanumSquare Neo;font-weight:Heavy}.stars2.jsx-df655d5d3b8d00b7{position:relative;top:-13px;left:120px;font-size:10px;font-family:NanumSquare Neo}.TypeScript2.jsx-df655d5d3b8d00b7{position:relative;top:-28px;left:155px;font-size:10px;font-family:NanumSquare Neo}.text2.jsx-df655d5d3b8d00b7{position:relative;left:5px;top:-30px;font-size:10px;font-family:NanumSquare Neo}"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "jsx-df655d5d3b8d00b7" + " " + "w-full md:w-2/3 flex flex-col mb-16 items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "jsx-df655d5d3b8d00b7" + " " + "flex w-full justify-center items-end",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-df655d5d3b8d00b7" + " " + "relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "hero-field",
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "leading-7 text-sm text-gray-600",
                                                        children: "Markdown code:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        ref: inputRef2,
                                                        type: "text",
                                                        id: "hero-field",
                                                        name: "hero-field",
                                                        defaultValue: `[![MY IT 명함](https://git-business-card.web.app/mycard/${user_profile_info.login})](https://git-business-card.web.app)`,
                                                        className: "jsx-df655d5d3b8d00b7" + " " + "w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-df655d5d3b8d00b7",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-df655d5d3b8d00b7",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                onClick: ()=>setShowModal(true),
                                                                className: "jsx-df655d5d3b8d00b7" + " " + "mr-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-12",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("pre", {
                                                                    className: "jsx-df655d5d3b8d00b7",
                                                                    children: "공유"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                onClick: handleCopy2,
                                                                className: "jsx-df655d5d3b8d00b7" + " " + "inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-12",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("pre", {
                                                                    className: "jsx-df655d5d3b8d00b7",
                                                                    children: "복사"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(components_Modal, {
                                                        onClose: ()=>setShowModal(false),
                                                        show: showModal,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
                                                            className: "jsx-df655d5d3b8d00b7" + " " + "text-gray-600 body-font",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "jsx-df655d5d3b8d00b7" + " " + "container mx-auto flex px-5  justify-center items-center",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "jsx-df655d5d3b8d00b7" + " " + "w-full md:w-2/3 flex flex-col mb-16 items-center text-center",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "jsx-df655d5d3b8d00b7" + " " + "flex w-full justify-center items-end",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "jsx-df655d5d3b8d00b7" + " " + "relative mr-4 lg:w-full md:w-full text-left",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                        htmlFor: "hero-field",
                                                                                        className: "jsx-df655d5d3b8d00b7" + " " + "leading-7 text-sm text-gray-600",
                                                                                        children: "Image URL:"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                        type: "text",
                                                                                        id: "hero-field",
                                                                                        name: "hero-field",
                                                                                        ref: inputRef1,
                                                                                        defaultValue: `https://git-business-card.web.app/mycard/${user_profile_info.login}`,
                                                                                        className: "jsx-df655d5d3b8d00b7" + " " + "w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                onClick: handleCopy1,
                                                                                className: "jsx-df655d5d3b8d00b7" + " " + "inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-12",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("pre", {
                                                                                    className: "jsx-df655d5d3b8d00b7",
                                                                                    children: "복사"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "jsx-df655d5d3b8d00b7" + " " + "flex"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {})
        ]
    });
}
async function getServerSideProps(context) {
    const session = await (0,react_.getSession)({
        req: context.req
    });
    if (session?.accessToken) {
        const user = await fetchGitHubUser(session.accessToken);
        const response1 = await fetch(`https://api.github.com/users/${user}`);
        const response2 = await fetch(`https://api.github.com/users/${user}/repos`);
        const response3 = await fetch(`https://api.github.com/users/${user}/orgs`);
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
    return {
        props: {}
    };
}
/* harmony default export */ const mycard = (MyCard);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fmycard&absolutePagePath=private-next-pages%2Fmycard.js&preferredRegion=!

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,947], () => (__webpack_exec__(286)));
module.exports = __webpack_exports__;

})();