"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userFolder/[Uid]/[ProjectContent]",{

/***/ "./pages/userFolder/[Uid]/[ProjectContent].js":
/*!****************************************************!*\
  !*** ./pages/userFolder/[Uid]/[ProjectContent].js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FileModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/FileModal */ \"./components/FileModal.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n/* harmony import */ var _components_RedirectHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/RedirectHandler */ \"./components/RedirectHandler.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Map */ \"./components/Map.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction ProjectContent() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid , ProjectContent  } = router.query;\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n        lineNumber: 17,\n        columnNumber: 38\n    }, this));\n    const [formButton, setFormButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [addFile, setAddFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.role.value);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (Uid == uid || role == 1) {\n                const res = await (0,_js_fetchFun__WEBPACK_IMPORTED_MODULE_6__.fetchFun)(\"/userFolder/\".concat(Uid, \"/\").concat(ProjectContent), \"GET\", {}, token);\n                if (res === 401) {\n                    router.push(\"/Login\");\n                } else {\n                    console.log(res);\n                    const data = res.result.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"field_product_id: \",\n                                item.field_product_id,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                }, this),\n                                \"project_id: \",\n                                item.project_id,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 41,\n                                    columnNumber: 21\n                                }, this),\n                                \"lon:\",\n                                item.lon,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 43,\n                                    columnNumber: 21\n                                }, this),\n                                \"lat: \",\n                                item.lat,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, this),\n                                \"utc_offset: \",\n                                item.utc_offset,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 47,\n                                    columnNumber: 21\n                                }, this),\n                                \"tilt: \",\n                                item.tilt,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, this),\n                                \"orientation: \",\n                                item.orientation,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 21\n                                }, this),\n                                \"company_product_id: \",\n                                item.company_product_id,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 53,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 54,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this));\n                    setData(data);\n                }\n            } else {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                formButton,\n                addFile,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.Container, {\n                    gap: 2,\n                    style: {\n                        flexDirection: \"column\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Map__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        data\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n            lineNumber: 77,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(ProjectContent, \"O50kInCVPxBz5zpnLBjgbfFS0mo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = ProjectContent;\nvar _c;\n$RefreshReg$(_c, \"ProjectContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL1tQcm9qZWN0Q29udGVudF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNMO0FBQ2M7QUFDTDtBQUNPO0FBQ1A7QUFDa0I7QUFDRjtBQUNqQjtBQUNOO0FBQ1I7QUFFbEIsU0FBU2UsaUJBQWdCOztJQUVwQyxNQUFNQyxTQUFTZCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFZSxJQUFHLEVBQUNGLGVBQWMsRUFBRSxHQUFHQyxPQUFPRSxLQUFLO0lBQzNDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHcEIsK0NBQVFBLGVBQUMsOERBQUNhLDBEQUFNQTs7Ozs7SUFDeEMsTUFBTSxDQUFDUSxZQUFXQyxjQUFjLEdBQUd0QiwrQ0FBUUE7SUFDM0MsTUFBTSxDQUFDdUIsU0FBUUMsV0FBVyxHQUFHeEIsK0NBQVFBO0lBQ3JDLE1BQU15QixRQUFRcEIsd0RBQVdBLENBQUMsQ0FBQ3FCLFFBQVVBLE1BQU1ELEtBQUssQ0FBQ0UsS0FBSztJQUN0RCxNQUFNQyxNQUFNdkIsd0RBQVdBLENBQUMsQ0FBQ3FCLFFBQVVBLE1BQU1FLEdBQUcsQ0FBQ0QsS0FBSztJQUNsRCxNQUFNRSxPQUFPeEIsd0RBQVdBLENBQUMsQ0FBQ3FCLFFBQVVBLE1BQU1HLElBQUksQ0FBQ0YsS0FBSztJQUdwRDFCLGdEQUFTQSxDQUFDLElBQUk7UUFDVixJQUFHLENBQUNlLE9BQU9jLE9BQU8sRUFBRTtRQUN2QixXQUFZO1lBR1QsSUFBSWIsT0FBT1csT0FBT0MsUUFBUSxHQUFHO2dCQUMzQixNQUFNRSxNQUFNLE1BQU14QixzREFBUUEsQ0FBQyxlQUFzQlEsT0FBUEUsS0FBSSxLQUFrQixPQUFmRixpQkFBa0IsT0FBTyxDQUFDLEdBQUdVO2dCQUM5RSxJQUFJTSxRQUFRLEtBQUs7b0JBQ2ZmLE9BQU9nQixJQUFJLENBQUM7Z0JBQ2QsT0FBTztvQkFDREMsUUFBUUMsR0FBRyxDQUFDSDtvQkFDWixNQUFNWixPQUFPWSxJQUFJSSxNQUFNLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ3hCLDhEQUFDQzs7Z0NBQUk7Z0NBQ2NELEtBQUtFLGdCQUFnQjs4Q0FDeEMsOERBQUNDOzs7OztnQ0FBSTtnQ0FDUUgsS0FBS0ksVUFBVTs4Q0FDNUIsOERBQUNEOzs7OztnQ0FBSTtnQ0FDQUgsS0FBS0ssR0FBRzs4Q0FDYiw4REFBQ0Y7Ozs7O2dDQUFJO2dDQUNDSCxLQUFLTSxHQUFHOzhDQUNkLDhEQUFDSDs7Ozs7Z0NBQUk7Z0NBQ1FILEtBQUtPLFVBQVU7OENBQzVCLDhEQUFDSjs7Ozs7Z0NBQUk7Z0NBQ0VILEtBQUtRLElBQUk7OENBQ2hCLDhEQUFDTDs7Ozs7Z0NBQUk7Z0NBQ1NILEtBQUtTLFdBQVc7OENBQzlCLDhEQUFDTjs7Ozs7Z0NBQUk7Z0NBQ2dCSCxLQUFLVSxrQkFBa0I7OENBQzVDLDhEQUFDUDs7Ozs7OENBQ0QsOERBQUNBOzs7Ozs4Q0FDRCw4REFBQ0E7Ozs7Ozs7Ozs7O29CQVFEcEIsUUFBUUQ7Z0JBRVosQ0FBQztZQUVMLE9BQU07Z0JBQ0ZILE9BQU9nQixJQUFJLENBQUMsZUFBbUIsT0FBSko7WUFFL0IsQ0FBQztRQUNUO0lBQ0EsR0FBRztRQUFDWixPQUFPYyxPQUFPO0tBQUM7SUFHbkIscUJBQ0k7a0JBQ0EsNEVBQUMxQiwwREFBTUE7O2dCQUNGaUI7Z0JBQ0FFOzhCQUNMLDhEQUFDZCx5REFBU0E7b0JBQUN1QyxLQUFLO29CQUFHQyxPQUFPO3dCQUFFQyxlQUFlO29CQUFTOztzQ0FDbEQsOERBQUNwQyx1REFBR0E7Ozs7O3NDQUNKLDhEQUFDMEI7Ozs7O3dCQUNBckI7Ozs7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQztHQTNFdUJKOztRQUVMYixrREFBU0E7UUFLVkcsb0RBQVdBO1FBQ2JBLG9EQUFXQTtRQUNWQSxvREFBV0E7OztLQVRKVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL1tQcm9qZWN0Q29udGVudF0uanM/MDM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgRmlsZU1vZGFsIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0ZpbGVNb2RhbFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZmV0Y2hGdW4gfSBmcm9tICcuLi8uLi8uLi9qcy9mZXRjaEZ1bic7XG5pbXBvcnQgUmVkaXJlY3RIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1JlZGlyZWN0SGFuZGxlclwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgU3BhY2VyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xvYWRlclwiXG5pbXBvcnQgTWFwIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL01hcFwiXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdENvbnRlbnQoKXtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBVaWQsUHJvamVjdENvbnRlbnQgfSA9IHJvdXRlci5xdWVyeVxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKDxMb2FkZXI+PC9Mb2FkZXI+KVxuICAgIGNvbnN0IFtmb3JtQnV0dG9uLHNldEZvcm1CdXR0b25dID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFthZGRGaWxlLHNldEFkZEZpbGVdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IHRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50b2tlbi52YWx1ZSk7XG4gICAgY29uc3QgdWlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51aWQudmFsdWUpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJvbGUudmFsdWUpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIFxuXG4gICAgICAgIGlmIChVaWQgPT0gdWlkIHx8IHJvbGUgPT0gMSkge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRnVuKGAvdXNlckZvbGRlci8ke1VpZH0vJHtQcm9qZWN0Q29udGVudH1gLCBcIkdFVFwiLCB7fSwgdG9rZW4pO1xuICAgICAgICAgIGlmIChyZXMgPT09IDQwMSkge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvTG9naW5cIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5yZXN1bHQubWFwKGl0ZW0gPT4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkX3Byb2R1Y3RfaWQ6IHtpdGVtLmZpZWxkX3Byb2R1Y3RfaWR9XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RfaWQ6IHtpdGVtLnByb2plY3RfaWR9XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIGxvbjp7aXRlbS5sb259XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIGxhdDoge2l0ZW0ubGF0fVxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICB1dGNfb2Zmc2V0OiB7aXRlbS51dGNfb2Zmc2V0fVxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICB0aWx0OiB7aXRlbS50aWx0fVxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjoge2l0ZW0ub3JpZW50YXRpb259XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnlfcHJvZHVjdF9pZDoge2l0ZW0uY29tcGFueV9wcm9kdWN0X2lkfVxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgLy9tYXAgdmlld1xuICAgICAgICAgICAgICAgICAgLy8gPEZpbGVNb2RhbCBrZXk9e2l0ZW0uaWRGaWxlfSBpZEZpbGU9e2l0ZW0uaWRGaWxlfSBmaWxlX25hbWU9e2l0ZW0uZmlsZV9uYW1lfSBmaWxlX2RhdGE9e2l0ZW0uZmlsZV9kYXRhfSBmaWxlX3R5cGU9e2l0ZW0uZmlsZV90eXBlfSA+PC9GaWxlTW9kYWw+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoZGF0YSkgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3VzZXJGb2xkZXIvJHt1aWR9YCk7XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgfSkoKVxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG5cbiAgICByZXR1cm4oIFxuICAgICAgICA8PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAge2Zvcm1CdXR0b259XG4gICAgICAgICAgICB7YWRkRmlsZX1cbiAgICAgICAgPENvbnRhaW5lciBnYXA9ezJ9IHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgPE1hcD48L01hcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7ZGF0YX1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiRmlsZU1vZGFsIiwiTGF5b3V0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImZldGNoRnVuIiwiUmVkaXJlY3RIYW5kbGVyIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiU3BhY2VyIiwiTG9hZGVyIiwiTWFwIiwiUHJvamVjdENvbnRlbnQiLCJyb3V0ZXIiLCJVaWQiLCJxdWVyeSIsImRhdGEiLCJzZXREYXRhIiwiZm9ybUJ1dHRvbiIsInNldEZvcm1CdXR0b24iLCJhZGRGaWxlIiwic2V0QWRkRmlsZSIsInRva2VuIiwic3RhdGUiLCJ2YWx1ZSIsInVpZCIsInJvbGUiLCJpc1JlYWR5IiwicmVzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJtYXAiLCJpdGVtIiwiZGl2IiwiZmllbGRfcHJvZHVjdF9pZCIsImJyIiwicHJvamVjdF9pZCIsImxvbiIsImxhdCIsInV0Y19vZmZzZXQiLCJ0aWx0Iiwib3JpZW50YXRpb24iLCJjb21wYW55X3Byb2R1Y3RfaWQiLCJnYXAiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/[ProjectContent].js\n"));

/***/ })

});