"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userFolder/[Uid]",{

/***/ "./components/Folder.js":
/*!******************************!*\
  !*** ./components/Folder.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Folder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/fetchFun */ \"./js/fetchFun.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Folder(prop) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.role.value);\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.token.value);\n    const [deleteButton, setDeleteButton] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function deleteProject(id) {\n        let conf = confirm(\"Are you sure you wanna delete the project?\");\n        if (!conf) return;\n        const res = await (0,_js_fetchFun__WEBPACK_IMPORTED_MODULE_4__.fetchFun)(\"/deleteProject\", \"POST\", {\n            id\n        }, token);\n        //console.log(res)\n        location.reload();\n    }\n    async function deleteProduct(id) {\n        let conf = confirm(\"Are you sure you wanna delete this product?\");\n        if (!conf) return;\n        const res = await (0,_js_fetchFun__WEBPACK_IMPORTED_MODULE_4__.fetchFun)(\"/deleteProduct\", \"POST\", {\n            id\n        }, token);\n        //console.log(res)\n        location.reload();\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        /* to do \n      - check if the prop.status is 0\n      */ if ((role == 1 || prop.Uid == uid) && role != 4) {\n            setDeleteButton(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"        \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {\n                        y: .5\n                    }, void 0, false, {\n                        fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        onClick: ()=>deleteProject(prop.id),\n                        src: \"https://cdn-icons-png.flaticon.com/512/1828/1828851.png\",\n                        width: \"50px\",\n                        height: \"50px\",\n                        alt: \"delete\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true));\n        } else {\n            setDeleteButton(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"        \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {\n                        y: .5\n                    }, void 0, false, {\n                        fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        onClick: ()=>deleteProduct(prop.id),\n                        src: \"https://cdn-icons-png.flaticon.com/512/1828/1828851.png\",\n                        width: \"50px\",\n                        height: \"50px\",\n                        alt: \"delete\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Row, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                    style: {\n                        backgroundColor: \"#1F2122\",\n                        borderRadius: \"15px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                        onClick: ()=>router.push(\"/userFolder/\".concat(prop.Uid, \"/\").concat(prop.id)),\n                        children: [\n                            role == 4 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://cdn-icons-png.flaticon.com/128/3463/3463399.png\",\n                                style: {\n                                    width: \"35%\",\n                                    marginRight: \"10%\",\n                                    padding\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n                                lineNumber: 80,\n                                columnNumber: 28\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://cdn-icons-png.flaticon.com/512/716/716784.png\",\n                                style: {\n                                    width: \"15%\",\n                                    marginRight: \"10%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n                                lineNumber: 83,\n                                columnNumber: 22\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    flexDirection: \"column\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            color: \"white\"\n                                        },\n                                        children: [\n                                            \"ID: \",\n                                            prop.id\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            color: \"white\"\n                                        },\n                                        children: [\n                                            \"Name: \",\n                                            prop.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n                                lineNumber: 88,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n                        lineNumber: 78,\n                        columnNumber: 15\n                    }, this)\n                }, prop.id, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n                    lineNumber: 70,\n                    columnNumber: 5\n                }, this),\n                deleteButton\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/components/Folder.js\",\n            lineNumber: 69,\n            columnNumber: 1\n        }, this)\n    }, void 0, false);\n}\n_s(Folder, \"wkQtgUgstG6q3eO4IJQMooefW3Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Folder;\nvar _c;\n$RefreshReg$(_c, \"Folder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzttQkFuQjdDcEMsS0FBS1UsRUFBRTs7Ozs7Z0JBdUJiSDs7Ozs7Ozs7QUFJYixDQUFDO0dBckZ1QlI7O1FBQ0xQLGtEQUFTQTtRQUNaSSxvREFBV0E7UUFDVkEsb0RBQVdBO1FBQ1ZBLG9EQUFXQTs7O0tBSkxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9sZGVyLmpzP2IyYWYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICAgIExpbmssXG4gICAgQ29udGFpbmVyLFxuICAgIFJvdyxcbiAgICBTcGFjZXJcbiAgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaEZ1biB9IGZyb20gXCIuLi9qcy9mZXRjaEZ1blwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb2xkZXIocHJvcCl7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB1aWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVpZC52YWx1ZSk7XG4gICAgY29uc3Qgcm9sZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucm9sZS52YWx1ZSk7XG4gICAgY29uc3QgdG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRva2VuLnZhbHVlKTtcbiAgICBjb25zdCBbZGVsZXRlQnV0dG9uLCBzZXREZWxldGVCdXR0b25dID0gdXNlU3RhdGUoKTtcbiAgXG5cbiAgICBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkKSB7XG4gICAgICBsZXQgY29uZiA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbm5hIGRlbGV0ZSB0aGUgcHJvamVjdD9cIik7XG4gICAgICBpZighY29uZikgcmV0dXJuXG4gICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hGdW4oXCIvZGVsZXRlUHJvamVjdFwiLCBcIlBPU1RcIiwge2lkfSwgdG9rZW4pO1xuICAgICAgIC8vY29uc29sZS5sb2cocmVzKVxuICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICB9XG4gICBcbiAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3QoaWQpIHtcbiAgICBsZXQgY29uZiA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbm5hIGRlbGV0ZSB0aGlzIHByb2R1Y3Q/XCIpO1xuICAgIGlmKCFjb25mKSByZXR1cm5cbiAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hGdW4oXCIvZGVsZXRlUHJvZHVjdFwiLCBcIlBPU1RcIiwge2lkfSwgdG9rZW4pO1xuICAgICAvL2NvbnNvbGUubG9nKHJlcylcbiAgICAgbG9jYXRpb24ucmVsb2FkKClcbiB9XG4gXG5cbiAgICB1c2VNZW1vKCgpID0+IHtcbiAgICAgIC8qIHRvIGRvIFxuICAgICAgLSBjaGVjayBpZiB0aGUgcHJvcC5zdGF0dXMgaXMgMFxuICAgICAgKi9cbiAgICAgIGlmICgocm9sZSA9PSAxIHx8IHByb3AuVWlkID09IHVpZCkgJiYgcm9sZSAhPSA0KSB7XG4gICAgICAgIHNldERlbGV0ZUJ1dHRvbihcbiAgICAgICAgICA8PiAgICAgICAgPFNwYWNlciB5PXsuNX0vPlxuICAgICAgICAgIDxpbWcgb25DbGljaz17KCkgPT4gZGVsZXRlUHJvamVjdChwcm9wLmlkKX1cbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzE4MjgvMTgyODg1MS5wbmdcIlxuICAgICAgICAgICAgd2lkdGg9XCI1MHB4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgYWx0PVwiZGVsZXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHNldERlbGV0ZUJ1dHRvbihcbiAgICAgICAgICA8PiAgICAgICAgPFNwYWNlciB5PXsuNX0vPlxuICAgICAgICAgIDxpbWcgb25DbGljaz17KCkgPT4gZGVsZXRlUHJvZHVjdChwcm9wLmlkKX1cbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzE4MjgvMTgyODg1MS5wbmdcIlxuICAgICAgICAgICAgd2lkdGg9XCI1MHB4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgYWx0PVwiZGVsZXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sW10pXG5cbiAgICByZXR1cm4oXG48PlxuPFJvdz5cbiAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIGtleT17cHJvcC5pZH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFGMjEyMlwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC91c2VyRm9sZGVyLyR7cHJvcC5VaWR9LyR7cHJvcC5pZH1gKX0+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7cm9sZSA9PSA0ID8gPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMzQ2My8zNDYzMzk5LnBuZ1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzNSVcIiwgbWFyZ2luUmlnaHQ6IFwiMTAlXCIsIHBhZGRpbmcgfX1cbiAgICAgICAgICAgICAgICAvPiA6IDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi83MTYvNzE2Nzg0LnBuZ1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTUlXCIsIG1hcmdpblJpZ2h0OiBcIjEwJVwiIH19XG4gICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+SUQ6IHtwcm9wLmlkfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+TmFtZToge3Byb3AubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAge2RlbGV0ZUJ1dHRvbn1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJDb250YWluZXIiLCJSb3ciLCJTcGFjZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiZmV0Y2hGdW4iLCJGb2xkZXIiLCJwcm9wIiwicm91dGVyIiwidWlkIiwic3RhdGUiLCJ2YWx1ZSIsInJvbGUiLCJ0b2tlbiIsImRlbGV0ZUJ1dHRvbiIsInNldERlbGV0ZUJ1dHRvbiIsImRlbGV0ZVByb2plY3QiLCJpZCIsImNvbmYiLCJjb25maXJtIiwicmVzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJkZWxldGVQcm9kdWN0IiwiVWlkIiwieSIsImltZyIsIm9uQ2xpY2siLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luQm90dG9tIiwicHVzaCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImRpdiIsImZsZXhEaXJlY3Rpb24iLCJwIiwiY29sb3IiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Folder.js\n"));

/***/ })

});