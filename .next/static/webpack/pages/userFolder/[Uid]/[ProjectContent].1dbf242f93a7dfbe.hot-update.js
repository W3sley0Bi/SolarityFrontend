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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FileModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/FileModal */ \"./components/FileModal.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n/* harmony import */ var _components_RedirectHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/RedirectHandler */ \"./components/RedirectHandler.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction ProjectContent() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid , ProjectContent  } = router.query;\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n        lineNumber: 17,\n        columnNumber: 38\n    }, this));\n    const [formButton, setFormButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [addFile, setAddFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.role.value);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (Uid == uid || role == 1) {\n                const res = await (0,_js_fetchFun__WEBPACK_IMPORTED_MODULE_6__.fetchFun)(\"/userFolder/\".concat(Uid, \"/\").concat(ProjectContent), \"GET\", {}, token);\n                if (res === 401) {\n                    router.push(\"/Login\");\n                } else {\n                    console.log(res);\n                    const data = res.result.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"field_product_id: \",\n                                item.field_product_id,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                }, this),\n                                \"project_id: \",\n                                item.project_id,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 41,\n                                    columnNumber: 21\n                                }, this),\n                                \"lon:\",\n                                item.lon,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 43,\n                                    columnNumber: 21\n                                }, this),\n                                \"lat: \",\n                                item.lat,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, this),\n                                \"utc_offset: \",\n                                item.utc_offset,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 47,\n                                    columnNumber: 21\n                                }, this),\n                                \"tilt: \",\n                                item.tilt,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, this),\n                                \"orientation: \",\n                                item.orientation,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 21\n                                }, this),\n                                \"company_product_id: \",\n                                item.company_product_id,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 53,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 54,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this));\n                    setData(data);\n                }\n            } else {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    const DynamicHeader = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(()=>__webpack_require__.e(/*! import() */ \"components_Map_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Map */ \"./components/Map.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"userFolder/[Uid]/[ProjectContent].js -> \" + \"../../../components/Map\"\n            ]\n        },\n        ssr: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                formButton,\n                addFile,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.Container, {\n                    gap: 2,\n                    style: {\n                        flexDirection: \"column\"\n                    },\n                    children: [\n                        DynamicHeader,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        data\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n            lineNumber: 80,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(ProjectContent, \"O50kInCVPxBz5zpnLBjgbfFS0mo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = ProjectContent;\nvar _c;\n$RefreshReg$(_c, \"ProjectContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL1tQcm9qZWN0Q29udGVudF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNjO0FBQ0w7QUFDTztBQUNQO0FBQ2tCO0FBQ0Y7QUFDakI7QUFDZDtBQUNDO0FBRW5CLFNBQVNlLGlCQUFnQjs7SUFFcEMsTUFBTUMsU0FBU2Qsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRWUsSUFBRyxFQUFDRixlQUFjLEVBQUUsR0FBR0MsT0FBT0UsS0FBSztJQUMzQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR3BCLCtDQUFRQSxlQUFDLDhEQUFDYSwwREFBTUE7Ozs7O0lBQ3hDLE1BQU0sQ0FBQ1EsWUFBV0MsY0FBYyxHQUFHdEIsK0NBQVFBO0lBQzNDLE1BQU0sQ0FBQ3VCLFNBQVFDLFdBQVcsR0FBR3hCLCtDQUFRQTtJQUNyQyxNQUFNeUIsUUFBUXBCLHdEQUFXQSxDQUFDLENBQUNxQixRQUFVQSxNQUFNRCxLQUFLLENBQUNFLEtBQUs7SUFDdEQsTUFBTUMsTUFBTXZCLHdEQUFXQSxDQUFDLENBQUNxQixRQUFVQSxNQUFNRSxHQUFHLENBQUNELEtBQUs7SUFDbEQsTUFBTUUsT0FBT3hCLHdEQUFXQSxDQUFDLENBQUNxQixRQUFVQSxNQUFNRyxJQUFJLENBQUNGLEtBQUs7SUFHcEQxQixnREFBU0EsQ0FBQyxJQUFJO1FBQ1YsSUFBRyxDQUFDZSxPQUFPYyxPQUFPLEVBQUU7UUFDdkIsV0FBWTtZQUdULElBQUliLE9BQU9XLE9BQU9DLFFBQVEsR0FBRztnQkFDM0IsTUFBTUUsTUFBTSxNQUFNeEIsc0RBQVFBLENBQUMsZUFBc0JRLE9BQVBFLEtBQUksS0FBa0IsT0FBZkYsaUJBQWtCLE9BQU8sQ0FBQyxHQUFHVTtnQkFDOUUsSUFBSU0sUUFBUSxLQUFLO29CQUNmZixPQUFPZ0IsSUFBSSxDQUFDO2dCQUNkLE9BQU87b0JBQ0RDLFFBQVFDLEdBQUcsQ0FBQ0g7b0JBQ1osTUFBTVosT0FBT1ksSUFBSUksTUFBTSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLHFCQUN4Qiw4REFBQ0M7O2dDQUFJO2dDQUNjRCxLQUFLRSxnQkFBZ0I7OENBQ3hDLDhEQUFDQzs7Ozs7Z0NBQUk7Z0NBQ1FILEtBQUtJLFVBQVU7OENBQzVCLDhEQUFDRDs7Ozs7Z0NBQUk7Z0NBQ0FILEtBQUtLLEdBQUc7OENBQ2IsOERBQUNGOzs7OztnQ0FBSTtnQ0FDQ0gsS0FBS00sR0FBRzs4Q0FDZCw4REFBQ0g7Ozs7O2dDQUFJO2dDQUNRSCxLQUFLTyxVQUFVOzhDQUM1Qiw4REFBQ0o7Ozs7O2dDQUFJO2dDQUNFSCxLQUFLUSxJQUFJOzhDQUNoQiw4REFBQ0w7Ozs7O2dDQUFJO2dDQUNTSCxLQUFLUyxXQUFXOzhDQUM5Qiw4REFBQ047Ozs7O2dDQUFJO2dDQUNnQkgsS0FBS1Usa0JBQWtCOzhDQUM1Qyw4REFBQ1A7Ozs7OzhDQUNELDhEQUFDQTs7Ozs7OENBQ0QsOERBQUNBOzs7Ozs7Ozs7OztvQkFRRHBCLFFBQVFEO2dCQUVaLENBQUM7WUFFTCxPQUFNO2dCQUNGSCxPQUFPZ0IsSUFBSSxDQUFDLGVBQW1CLE9BQUpKO1lBRS9CLENBQUM7UUFDVDtJQUNBLEdBQUc7UUFBQ1osT0FBT2MsT0FBTztLQUFDO0lBRW5CLE1BQU1rQixnQkFBZ0JsQyxvREFBT0EsQ0FBQyxJQUFNLG9LQUFPOzs7Ozs7UUFDekNtQyxLQUFLLEtBQUs7O0lBR1oscUJBQ0k7a0JBQ0EsNEVBQUM3QywwREFBTUE7O2dCQUNGaUI7Z0JBQ0FFOzhCQUNMLDhEQUFDZCx5REFBU0E7b0JBQUN5QyxLQUFLO29CQUFHQyxPQUFPO3dCQUFFQyxlQUFlO29CQUFTOzt3QkFDbkRKO3NDQUVDLDhEQUFDUjs7Ozs7d0JBQ0FyQjs7Ozs7Ozs7Ozs7Ozs7QUFLWCxDQUFDO0dBL0V1Qko7O1FBRUxiLGtEQUFTQTtRQUtWRyxvREFBV0E7UUFDYkEsb0RBQVdBO1FBQ1ZBLG9EQUFXQTs7O0tBVEpVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJGb2xkZXIvW1VpZF0vW1Byb2plY3RDb250ZW50XS5qcz8wMzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBGaWxlTW9kYWwgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRmlsZU1vZGFsXCJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaEZ1biB9IGZyb20gJy4uLy4uLy4uL2pzL2ZldGNoRnVuJztcbmltcG9ydCBSZWRpcmVjdEhhbmRsZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUmVkaXJlY3RIYW5kbGVyXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBTcGFjZXIgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTG9hZGVyXCJcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Q29udGVudCgpe1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IFVpZCxQcm9qZWN0Q29udGVudCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoPExvYWRlcj48L0xvYWRlcj4pXG4gICAgY29uc3QgW2Zvcm1CdXR0b24sc2V0Rm9ybUJ1dHRvbl0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2FkZEZpbGUsc2V0QWRkRmlsZV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgdG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRva2VuLnZhbHVlKTtcbiAgICBjb25zdCB1aWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVpZC52YWx1ZSk7XG4gICAgY29uc3Qgcm9sZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucm9sZS52YWx1ZSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgXG5cbiAgICAgICAgaWYgKFVpZCA9PSB1aWQgfHwgcm9sZSA9PSAxKSB7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hGdW4oYC91c2VyRm9sZGVyLyR7VWlkfS8ke1Byb2plY3RDb250ZW50fWAsIFwiR0VUXCIsIHt9LCB0b2tlbik7XG4gICAgICAgICAgaWYgKHJlcyA9PT0gNDAxKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9Mb2dpblwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLnJlc3VsdC5tYXAoaXRlbSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgZmllbGRfcHJvZHVjdF9pZDoge2l0ZW0uZmllbGRfcHJvZHVjdF9pZH1cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdF9pZDoge2l0ZW0ucHJvamVjdF9pZH1cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgbG9uOntpdGVtLmxvbn1cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgbGF0OiB7aXRlbS5sYXR9XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIHV0Y19vZmZzZXQ6IHtpdGVtLnV0Y19vZmZzZXR9XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIHRpbHQ6IHtpdGVtLnRpbHR9XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiB7aXRlbS5vcmllbnRhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgY29tcGFueV9wcm9kdWN0X2lkOiB7aXRlbS5jb21wYW55X3Byb2R1Y3RfaWR9XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAvL21hcCB2aWV3XG4gICAgICAgICAgICAgICAgICAvLyA8RmlsZU1vZGFsIGtleT17aXRlbS5pZEZpbGV9IGlkRmlsZT17aXRlbS5pZEZpbGV9IGZpbGVfbmFtZT17aXRlbS5maWxlX25hbWV9IGZpbGVfZGF0YT17aXRlbS5maWxlX2RhdGF9IGZpbGVfdHlwZT17aXRlbS5maWxlX3R5cGV9ID48L0ZpbGVNb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShkYXRhKSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdXNlckZvbGRlci8ke3VpZH1gKTtcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICB9KSgpXG4gICAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgICBjb25zdCBEeW5hbWljSGVhZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL2NvbXBvbmVudHMvTWFwJyksIHtcbiAgICAgIHNzcjogZmFsc2UsXG4gICAgfSlcblxuICAgIHJldHVybiggXG4gICAgICAgIDw+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICB7Zm9ybUJ1dHRvbn1cbiAgICAgICAgICAgIHthZGRGaWxlfVxuICAgICAgICA8Q29udGFpbmVyIGdhcD17Mn0gc3R5bGU9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAge0R5bmFtaWNIZWFkZXJ9XG4gICAgICAgICAgXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge2RhdGF9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5cbiBcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkZpbGVNb2RhbCIsIkxheW91dCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJmZXRjaEZ1biIsIlJlZGlyZWN0SGFuZGxlciIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIlNwYWNlciIsIkxvYWRlciIsImR5bmFtaWMiLCJQcm9qZWN0Q29udGVudCIsInJvdXRlciIsIlVpZCIsInF1ZXJ5IiwiZGF0YSIsInNldERhdGEiLCJmb3JtQnV0dG9uIiwic2V0Rm9ybUJ1dHRvbiIsImFkZEZpbGUiLCJzZXRBZGRGaWxlIiwidG9rZW4iLCJzdGF0ZSIsInZhbHVlIiwidWlkIiwicm9sZSIsImlzUmVhZHkiLCJyZXMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsIm1hcCIsIml0ZW0iLCJkaXYiLCJmaWVsZF9wcm9kdWN0X2lkIiwiYnIiLCJwcm9qZWN0X2lkIiwibG9uIiwibGF0IiwidXRjX29mZnNldCIsInRpbHQiLCJvcmllbnRhdGlvbiIsImNvbXBhbnlfcHJvZHVjdF9pZCIsIkR5bmFtaWNIZWFkZXIiLCJzc3IiLCJnYXAiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/[ProjectContent].js\n"));

/***/ })

});