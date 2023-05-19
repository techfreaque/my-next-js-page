"use strict";
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 5418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NavBar),
  "B": () => (/* binding */ titleIds)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/NavBar/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.5075d831.png","height":159,"width":384,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAAAAACLoxGUAAAAJklEQVR42mP4//XcoWv/H79k2LFg+9U/z3euZDh3e92p71cf3QEAEUMT+v9c7qEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/colorPalette.js
var colorPalette = __webpack_require__(9850);
// EXTERNAL MODULE: ./components/constantsAboutMe.js
var constantsAboutMe = __webpack_require__(8444);
;// CONCATENATED MODULE: ./components/NavBar/Header.jsx









const titleIds = {
    aboutMe: "about-me",
    myProjects: "my-projects",
    myResume: "my-resume",
    myServices: "my-services",
    getInTouch: "get-in-touch"
};
function NavBar() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        style: {
            position: "fixed",
            width: "100%",
            top: "0",
            background: "#fff",
            zIndex: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                display: "flex",
                alignItems: "center",
                maxWidth: "1500px",
                margin: "auto"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("a", {
                    href: `/#`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        style: {
                            color: "#000",
                            fontSize: "40px",
                            marginRight: "20px",
                            marginLeft: "20px",
                            height: "50px"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: logo,
                            alt: "A42.ch",
                            style: {
                                height: "95%",
                                width: "auto",
                                margin: "auto"
                            }
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    style: {
                        width: "calc(100% - 330px)"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Menu, {
                        theme: "light",
                        mode: "horizontal",
                        // defaultSelectedKeys={
                        //     ['about']
                        // }
                        selectedKeys: [],
                        items: [
                            {
                                label: /*#__PURE__*/ jsx_runtime.jsx(MenuItem, {
                                    itemName: "About Me",
                                    ankerId: titleIds.aboutMe,
                                    icon: /*#__PURE__*/ jsx_runtime.jsx(icons_.AudioOutlined, {})
                                }),
                                key: titleIds.aboutMe
                            },
                            {
                                label: /*#__PURE__*/ jsx_runtime.jsx(MenuItem, {
                                    itemName: "My Projects",
                                    ankerId: titleIds.myProjects,
                                    icon: /*#__PURE__*/ jsx_runtime.jsx(icons_.AppstoreOutlined, {})
                                }),
                                key: titleIds.myProjects
                            },
                            {
                                label: /*#__PURE__*/ jsx_runtime.jsx(MenuItem, {
                                    itemName: "My Resume",
                                    ankerId: titleIds.myResume,
                                    icon: /*#__PURE__*/ jsx_runtime.jsx(icons_.HistoryOutlined, {})
                                }),
                                key: titleIds.myResume
                            }
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    style: {
                        marginLeft: "auto",
                        width: "180px"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_antd_.Space, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Tooltip, {
                                title: "It's easy! Just click and shoot me a message",
                                children: /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Button, {
                                    ankerId: titleIds.getInTouch,
                                    href: `mailto:${constantsAboutMe/* myEmailAddress */.S3}?subject=${constantsAboutMe/* contactEmailSubject */.Zp}`,
                                    size: "large",
                                    style: {
                                        color: colorPalette/* pageColors.primary */.q.primary
                                    },
                                    icon: /*#__PURE__*/ jsx_runtime.jsx(icons_.RocketOutlined, {}),
                                    children: "Say Hello"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Tooltip, {
                                title: "Follow me on GitHub",
                                children: /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Button, {
                                    size: "large",
                                    target: "blank",
                                    href: constantsAboutMe/* githubProfileURL */.xq,
                                    icon: /*#__PURE__*/ jsx_runtime.jsx(icons_.GithubOutlined, {})
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function MenuItem({ itemName , ankerId , icon  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("a", {
        href: `/#${ankerId}`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                " ",
                icon,
                /*#__PURE__*/ jsx_runtime.jsx("span", {
                    style: icon ? {
                        marginLeft: "5px"
                    } : {},
                    children: itemName
                })
            ]
        })
    });
}


/***/ }),

/***/ 9850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ getFancyColorsStyle),
/* harmony export */   "q": () => (/* binding */ pageColors)
/* harmony export */ });
const pageColors = {
    primary: "#00c2cb"
};
function getFancyColorsStyle(isHover) {
    return {
        color: "transparent",
        backgroundImage: `linear-gradient(to right ,#eeaed5, ${pageColors.primary}, #ff7f50, #ee4b2b, #eeaed5)`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundSize: "200%",
        backgroundPosition: "-200%",
        transition: "all ease-in-out 2s",
        ...isHover ? {
            backgroundPosition: "200%"
        } : {}
    };
}


/***/ }),

/***/ 8444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S3": () => (/* binding */ myEmailAddress),
/* harmony export */   "Zp": () => (/* binding */ contactEmailSubject),
/* harmony export */   "xq": () => (/* binding */ githubProfileURL)
/* harmony export */ });
const githubProfileURL = "https://github.com/techfreaque";
const myEmailAddress = "max@a42.ch";
const contactEmailSubject = "Let's discuss a cooperation";


/***/ })

};
;