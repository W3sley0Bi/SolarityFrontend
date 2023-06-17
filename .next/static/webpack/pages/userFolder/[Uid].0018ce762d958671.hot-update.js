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

/***/ "./pages/userFolder/[Uid].js":
/*!***********************************!*\
  !*** ./pages/userFolder/[Uid].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserFolders; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_RedirectHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/RedirectHandler */ \"./components/RedirectHandler.js\");\n/* harmony import */ var _components_Folder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Folder */ \"./components/Folder.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _stores_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/store */ \"./stores/store.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../js/fetchFun */ \"./js/fetchFun.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/NoData */ \"./components/NoData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction UserFolders() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid  } = router.query;\n    const [folders, setFolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid].js\",\n        lineNumber: 18,\n        columnNumber: 42\n    }, this));\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.role.value);\n    const [addFolder, setAddFolder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            //user role\n            if (role != 4) {\n                let addFolderbutton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RedirectHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    route: \"\".concat(Uid, \"/CreateProject\"),\n                    children: \" + Create Project \"\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid].js\",\n                    lineNumber: 30,\n                    columnNumber: 31\n                }, this);\n                setAddFolder(addFolderbutton);\n            } else {\n                let addFolderbutton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RedirectHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    route: \"\".concat(Uid, \"/CreateProduct\"),\n                    children: \" + Create Product \"\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid].js\",\n                    lineNumber: 33,\n                    columnNumber: 31\n                }, this);\n                setAddFolder(addFolderbutton);\n            }\n            if ((Uid == uid || role == 1) && role != 4) {\n                const res = await (0,_js_fetchFun__WEBPACK_IMPORTED_MODULE_8__.fetchFun)(\"/userFolder/\".concat(Uid), \"GET\", {}, token);\n                if (res === 401) {\n                    router.push(\"/Login\");\n                } else {\n                    if (res.length > 0) {\n                        console.log(res);\n                        const folders = res.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Folder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                idProject: item.idProject,\n                                Uid: Uid,\n                                name: item.name,\n                                children: \" \"\n                            }, item.idProject, false, {\n                                fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid].js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this));\n                        setFolders(folders);\n                    } else {\n                        setFolders(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NoData__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid].js\",\n                            lineNumber: 49,\n                            columnNumber: 24\n                        }, this));\n                    }\n                }\n            } else if (role == 4) {\n                const res = await (0,_js_fetchFun__WEBPACK_IMPORTED_MODULE_8__.fetchFun)(\"/company/\".concat(Uid), \"GET\", {}, token);\n                if (res === 401) {\n                    router.push(\"/Login\");\n                } else {\n                    if (res.length > 0) {\n                        console.log(res);\n                        const folders = res.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Folder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                idProject: item.idProject,\n                                Uid: Uid,\n                                name: item.name,\n                                children: \" \"\n                            }, item.idProject, false, {\n                                fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid].js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this));\n                        setFolders(folders);\n                    } else {\n                        setFolders(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NoData__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid].js\",\n                            lineNumber: 64,\n                            columnNumber: 24\n                        }, this));\n                    }\n                }\n            } else {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: [\n                addFolder,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.Container, {\n                    gap: 2,\n                    style: {\n                        flexDirection: \"column\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid].js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        folders\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid].js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid].js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(UserFolders, \"ogVjqbrtHkwjGvvlQqLVIWAHT1s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = UserFolders;\nvar _c;\n$RefreshReg$(_c, \"UserFolders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNKO0FBQ0U7QUFDcUI7QUFDbEI7QUFDQTtBQUNVO0FBQ1Q7QUFDRDtBQUNEO0FBQ0E7QUFDQztBQUU5QixTQUFTZSxjQUFjOztJQUNwQyxNQUFNQyxTQUFTYixzREFBU0E7SUFDeEIsTUFBTSxFQUFFYyxJQUFHLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM1QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR25CLCtDQUFRQSxlQUFDLDhEQUFDWSwwREFBTUE7Ozs7O0lBQzlDLE1BQU1RLFFBQVFiLHdEQUFXQSxDQUFDLENBQUNjLFFBQVVBLE1BQU1ELEtBQUssQ0FBQ0UsS0FBSztJQUN0RCxNQUFNQyxNQUFNaEIsd0RBQVdBLENBQUMsQ0FBQ2MsUUFBVUEsTUFBTUUsR0FBRyxDQUFDRCxLQUFLO0lBQ2xELE1BQU1FLE9BQU9qQix3REFBV0EsQ0FBQyxDQUFDYyxRQUFVQSxNQUFNRyxJQUFJLENBQUNGLEtBQUs7SUFDcEQsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUcxQiwrQ0FBUUE7SUFFMUNDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLENBQUNjLE9BQU9ZLE9BQU8sRUFBRTtRQUVwQixXQUFZO1lBQ1gsV0FBVztZQUNYLElBQUdILFFBQVEsR0FBRztnQkFDWixJQUFJSSxnQ0FBa0IsOERBQUN4QixtRUFBZUE7b0JBQUN5QixPQUFPLEdBQU8sT0FBSmIsS0FBSTs4QkFBaUI7Ozs7OztnQkFDdEVVLGFBQWFFO1lBQ2YsT0FBSztnQkFDSCxJQUFJQSxnQ0FBa0IsOERBQUN4QixtRUFBZUE7b0JBQUN5QixPQUFPLEdBQU8sT0FBSmIsS0FBSTs4QkFBaUI7Ozs7OztnQkFDdEVVLGFBQWFFO1lBQ2YsQ0FBQztZQUVELElBQUksQ0FBQ1osT0FBT08sT0FBT0MsUUFBUSxNQUFNQSxRQUFRLEdBQUc7Z0JBQzFDLE1BQU1NLE1BQU0sTUFBTW5CLHNEQUFRQSxDQUFDLGVBQW1CLE9BQUpLLE1BQU8sT0FBTyxDQUFDLEdBQUdJO2dCQUM1RCxJQUFJVSxRQUFRLEtBQUs7b0JBQ2ZmLE9BQU9nQixJQUFJLENBQUM7Z0JBQ2QsT0FBTztvQkFDTCxJQUFHRCxJQUFJRSxNQUFNLEdBQUcsR0FBRTt3QkFDaEJDLFFBQVFDLEdBQUcsQ0FBQ0o7d0JBQ2QsTUFBTVosVUFBVVksSUFBSUssR0FBRyxDQUFDLENBQUNDLHFCQUN2Qiw4REFBQy9CLDBEQUFNQTtnQ0FBc0JnQyxXQUFXRCxLQUFLQyxTQUFTO2dDQUFFckIsS0FBS0E7Z0NBQUtzQixNQUFNRixLQUFLRSxJQUFJOzBDQUFFOytCQUF0RUYsS0FBS0MsU0FBUzs7Ozs7d0JBRTdCbEIsV0FBV0Q7b0JBQ1gsT0FBSzt3QkFDSEMseUJBQVcsOERBQUNOLDJEQUFNQTs7Ozs7b0JBQ3BCLENBQUM7Z0JBQ0gsQ0FBQztZQUNILE9BQU8sSUFBR1csUUFBUSxHQUFFO2dCQUNsQixNQUFNTSxNQUFNLE1BQU1uQixzREFBUUEsQ0FBQyxZQUFnQixPQUFKSyxNQUFPLE9BQU8sQ0FBQyxHQUFHSTtnQkFDekQsSUFBSVUsUUFBUSxLQUFLO29CQUNmZixPQUFPZ0IsSUFBSSxDQUFDO2dCQUNkLE9BQU87b0JBQ0wsSUFBR0QsSUFBSUUsTUFBTSxHQUFHLEdBQUU7d0JBQ2hCQyxRQUFRQyxHQUFHLENBQUNKO3dCQUNkLE1BQU1aLFVBQVVZLElBQUlLLEdBQUcsQ0FBQyxDQUFDQyxxQkFDdkIsOERBQUMvQiwwREFBTUE7Z0NBQXNCZ0MsV0FBV0QsS0FBS0MsU0FBUztnQ0FBRXJCLEtBQUtBO2dDQUFLc0IsTUFBTUYsS0FBS0UsSUFBSTswQ0FBRTsrQkFBdEVGLEtBQUtDLFNBQVM7Ozs7O3dCQUU3QmxCLFdBQVdEO29CQUNYLE9BQUs7d0JBQ0hDLHlCQUFXLDhEQUFDTiwyREFBTUE7Ozs7O29CQUNwQixDQUFDO2dCQUNILENBQUM7WUFDSCxPQUNJO2dCQUNGRSxPQUFPZ0IsSUFBSSxDQUFDLGVBQW1CLE9BQUpSO1lBQzdCLENBQUM7UUFDSDtJQUNGLEdBQUc7UUFBQ1IsT0FBT1ksT0FBTztRQUFDWjtLQUFPO0lBRTFCLHFCQUNFO2tCQUNFLDRFQUFDTCwwREFBTUE7O2dCQUVKZTs4QkFFRCw4REFBQ25CLHlEQUFTQTtvQkFBQ2lDLEtBQUs7b0JBQUdDLE9BQU87d0JBQUVDLGVBQWU7b0JBQVM7O3NDQUNsRCw4REFBQ0M7Ozs7O3dCQUNBeEI7Ozs7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQztHQXhFdUJKOztRQUNQWixrREFBU0E7UUFHVkssb0RBQVdBO1FBQ2JBLG9EQUFXQTtRQUNWQSxvREFBV0E7OztLQU5GTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdLmpzP2JmZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IFJlZGlyZWN0SGFuZGxlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SZWRpcmVjdEhhbmRsZXJcIjtcbmltcG9ydCBGb2xkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9sZGVyXCI7XG5pbXBvcnQge0NvbnRhaW5lcix9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gXCIuLi8uLi9zdG9yZXMvc3RvcmVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBmZXRjaEZ1biB9IGZyb20gXCIuLi8uLi9qcy9mZXRjaEZ1blwiXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRlclwiXG5pbXBvcnQgTm9EYXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05vRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyRm9sZGVycygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgVWlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtmb2xkZXJzLCBzZXRGb2xkZXJzXSA9IHVzZVN0YXRlKDxMb2FkZXI+PC9Mb2FkZXI+KTtcbiAgY29uc3QgdG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRva2VuLnZhbHVlKTtcbiAgY29uc3QgdWlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51aWQudmFsdWUpO1xuICBjb25zdCByb2xlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yb2xlLnZhbHVlKTtcbiAgY29uc3QgW2FkZEZvbGRlciwgc2V0QWRkRm9sZGVyXSA9IHVzZVN0YXRlKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcblxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAvL3VzZXIgcm9sZVxuICAgICAgaWYocm9sZSAhPSA0ICl7XG4gICAgICAgIGxldCBhZGRGb2xkZXJidXR0b24gPSA8UmVkaXJlY3RIYW5kbGVyIHJvdXRlPXtgJHtVaWR9L0NyZWF0ZVByb2plY3RgfT4gKyBDcmVhdGUgUHJvamVjdCA8L1JlZGlyZWN0SGFuZGxlcj5cbiAgICAgICAgc2V0QWRkRm9sZGVyKGFkZEZvbGRlcmJ1dHRvbilcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWRkRm9sZGVyYnV0dG9uID0gPFJlZGlyZWN0SGFuZGxlciByb3V0ZT17YCR7VWlkfS9DcmVhdGVQcm9kdWN0YH0+ICsgQ3JlYXRlIFByb2R1Y3QgPC9SZWRpcmVjdEhhbmRsZXI+XG4gICAgICAgIHNldEFkZEZvbGRlcihhZGRGb2xkZXJidXR0b24pXG4gICAgICB9XG5cbiAgICAgIGlmICgoVWlkID09IHVpZCB8fCByb2xlID09IDEpICYmIHJvbGUgIT0gNCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEZ1bihgL3VzZXJGb2xkZXIvJHtVaWR9YCwgXCJHRVRcIiwge30sIHRva2VuKTtcbiAgICAgICAgaWYgKHJlcyA9PT0gNDAxKSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvTG9naW5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYocmVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgIGNvbnN0IGZvbGRlcnMgPSByZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Rm9sZGVyIGtleT17aXRlbS5pZFByb2plY3R9IGlkUHJvamVjdD17aXRlbS5pZFByb2plY3R9IFVpZD17VWlkfSBuYW1lPXtpdGVtLm5hbWV9PiA8L0ZvbGRlcj5cbiAgICAgICAgICApKTtcbiAgICAgICAgICBzZXRGb2xkZXJzKGZvbGRlcnMpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0Rm9sZGVycyg8Tm9EYXRhPjwvTm9EYXRhPik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYocm9sZSA9PSA0KXtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hGdW4oYC9jb21wYW55LyR7VWlkfWAsIFwiR0VUXCIsIHt9LCB0b2tlbik7XG4gICAgICAgIGlmIChyZXMgPT09IDQwMSkge1xuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL0xvZ2luXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmKHJlcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICBjb25zdCBmb2xkZXJzID0gcmVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEZvbGRlciBrZXk9e2l0ZW0uaWRQcm9qZWN0fSBpZFByb2plY3Q9e2l0ZW0uaWRQcm9qZWN0fSBVaWQ9e1VpZH0gbmFtZT17aXRlbS5uYW1lfT4gPC9Gb2xkZXI+XG4gICAgICAgICAgKSk7XG4gICAgICAgICAgc2V0Rm9sZGVycyhmb2xkZXJzKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNldEZvbGRlcnMoPE5vRGF0YT48L05vRGF0YT4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcm91dGVyLnB1c2goYC91c2VyRm9sZGVyLyR7dWlkfWApO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH0sIFtyb3V0ZXIuaXNSZWFkeSxyb3V0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7Lyoge2NvZGl0aW9uYWwgcmVuZGVyaW5nIGhlcmUgZm9yIHRoZSBidXR0b24gaWYgdGhlIGhlIGhhcyB0aGUgcm9sZS4gdGhlbiBjaGVrIGFsc28gdGhlfSAqL31cbiAgICAgICAge2FkZEZvbGRlcn1cbiAgICAgICAgXG4gICAgICAgIDxDb250YWluZXIgZ2FwPXsyfSBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtmb2xkZXJzfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJJbnB1dCIsIlJlZGlyZWN0SGFuZGxlciIsIkZvbGRlciIsIkNvbnRhaW5lciIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzZXRUb2tlbiIsIkxheW91dCIsImZldGNoRnVuIiwiTG9hZGVyIiwiTm9EYXRhIiwiVXNlckZvbGRlcnMiLCJyb3V0ZXIiLCJVaWQiLCJxdWVyeSIsImZvbGRlcnMiLCJzZXRGb2xkZXJzIiwidG9rZW4iLCJzdGF0ZSIsInZhbHVlIiwidWlkIiwicm9sZSIsImFkZEZvbGRlciIsInNldEFkZEZvbGRlciIsImlzUmVhZHkiLCJhZGRGb2xkZXJidXR0b24iLCJyb3V0ZSIsInJlcyIsInB1c2giLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSIsImlkUHJvamVjdCIsIm5hbWUiLCJnYXAiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid].js\n"));

/***/ })

});