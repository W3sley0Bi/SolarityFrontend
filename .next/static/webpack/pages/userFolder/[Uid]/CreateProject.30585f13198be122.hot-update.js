"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userFolder/[Uid]/CreateProject",{

/***/ "./pages/userFolder/[Uid]/CreateProject.js":
/*!*************************************************!*\
  !*** ./pages/userFolder/[Uid]/CreateProject.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddFiles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction AddFiles() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid  } = router.query;\n    const [projectName, setprojectName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.role.value);\n    ///uid\n    //token/\n    //role\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (role == 4) {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    //sumbit forma data\n    const handleSubmit = async ()=>{\n        // don not change this post\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(\"http://localhost:3001\", \"/\").concat(Uid, \"/createProject\"), {\n            project\n        }, {\n            headers: {\n                Authorization: token\n            }\n        }).then((res)=>{\n            if (res.status == 200) {\n                alert(\"files add correctly\");\n                router.push(\"/userFolder/\".concat(Uid));\n            }\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    clearable: true,\n                    bordered: true,\n                    labelPlaceholder: \"Project Name\",\n                    helperText: \"Required\",\n                    required: true,\n                    name: \"ProjectName\",\n                    type: \"text\",\n                    value: projectName,\n                    onChange: (e)=>setProject(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"Project Name\",\n                    helperText: \"Required\",\n                    required: true,\n                    name: \"ProjectName\",\n                    type: \"number\",\n                    value: projectDuration,\n                    onChange: (e)=>setProject(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    onClick: handleSubmit,\n                    children: \" Send \"\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n            lineNumber: 65,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(AddFiles, \"13q071qkLofs9YQjggdlshB3kLI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = AddFiles;\nvar _c;\n$RefreshReg$(_c, \"AddFiles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL0NyZWF0ZVByb2plY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDTDtBQUNHO0FBQ0M7QUFDRTtBQUNHO0FBQ087QUFDUDtBQUVqQyxTQUFTVyxXQUFVOztJQUU5QixNQUFNQyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFVSxJQUFHLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM1QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQUM7SUFFL0MsTUFBTWdCLFFBQVFULHdEQUFXQSxDQUFDLENBQUNVLFFBQVVBLE1BQU1ELEtBQUssQ0FBQ0UsS0FBSztJQUN0RCxNQUFNQyxNQUFNWix3REFBV0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNRSxHQUFHLENBQUNELEtBQUs7SUFDbEQsTUFBTUUsT0FBT2Isd0RBQVdBLENBQUMsQ0FBQ1UsUUFBVUEsTUFBTUcsSUFBSSxDQUFDRixLQUFLO0lBRXBELE1BQU07SUFDTixRQUFRO0lBQ1IsTUFBTTtJQUNOakIsZ0RBQVNBLENBQUMsSUFBSTtRQUNWLElBQUcsQ0FBQ1UsT0FBT1UsT0FBTyxFQUFFO1FBRXZCLFdBQVk7WUFHVCxJQUFJRCxRQUFRLEdBQUc7Z0JBRVhULE9BQU9XLElBQUksQ0FBQyxlQUFtQixPQUFKSDtZQUM3QixDQUFDO1FBRUM7SUFHUixHQUFHO1FBQUNSLE9BQU9VLE9BQU87S0FBQztJQUVuQixtQkFBbUI7SUFDbkIsTUFBTUUsZUFBZSxVQUFZO1FBRTlCLDJCQUEyQjtRQUMxQnhCLGtEQUFVLENBQUMsR0FBMENhLE9BQXZDYSx1QkFBbUMsRUFBQyxLQUFPLE9BQUpiLEtBQUksbUJBQWlCO1lBQUNnQjtRQUFPLEdBQUc7WUFDakZDLFNBQVE7Z0JBQ0pDLGVBQWVkO1lBRW5CO1FBQ0osR0FDQ2UsSUFBSSxDQUFDQyxDQUFBQSxNQUFNO1lBQ1IsSUFBR0EsSUFBSUMsTUFBTSxJQUFJLEtBQUk7Z0JBQ2pCQyxNQUFNO2dCQUNOdkIsT0FBT1csSUFBSSxDQUFDLGVBQW1CLE9BQUpWO1lBQy9CLENBQUM7UUFDTCxHQUNDdUIsS0FBSyxDQUFDQyxDQUFBQSxNQUFPQyxRQUFRQyxHQUFHLENBQUNGO0lBSTlCO0lBRUEscUJBRUk7a0JBQ0EsNEVBQUM5QiwwREFBTUE7OzhCQUVILDhEQUFDSCxvREFBS0E7b0JBQUNvQyxTQUFTO29CQUFDQyxRQUFRO29CQUFDQyxrQkFBaUI7b0JBQWVDLFlBQVc7b0JBQVdDLFVBQVUsSUFBSTtvQkFBRUMsTUFBSztvQkFBY0MsTUFBSztvQkFBTzNCLE9BQU9KO29CQUFhZ0MsVUFBVSxDQUFDQyxJQUFNQyxXQUFXRCxFQUFFRSxNQUFNLENBQUMvQixLQUFLOzs7Ozs7OEJBQzdMLDhEQUFDZixvREFBS0E7b0JBQUNxQyxRQUFRO29CQUFDQyxrQkFBaUI7b0JBQWVDLFlBQVc7b0JBQVdDLFVBQVUsSUFBSTtvQkFBRUMsTUFBSztvQkFBY0MsTUFBSztvQkFBUzNCLE9BQU9nQztvQkFBaUJKLFVBQVUsQ0FBQ0MsSUFBTUMsV0FBV0QsRUFBRUUsTUFBTSxDQUFDL0IsS0FBSzs7Ozs7OzhCQUV6TCw4REFBQ2QscURBQU1BO29CQUFDK0MsU0FBUzVCOzhCQUFjOzs7Ozs7Ozs7Ozs7O0FBSTNDLENBQUM7R0EvRHVCYjs7UUFFTFIsa0RBQVNBO1FBSVZLLG9EQUFXQTtRQUNiQSxvREFBV0E7UUFDVkEsb0RBQVdBOzs7S0FSSkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckZvbGRlci9bVWlkXS9DcmVhdGVQcm9qZWN0LmpzPzRiNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoRnVuIH0gZnJvbSBcIi4uLy4uLy4uL2pzL2ZldGNoRnVuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEZpbGVzKCl7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgVWlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCBbcHJvamVjdE5hbWUsIHNldHByb2plY3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCB0b2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudG9rZW4udmFsdWUpO1xuICAgIGNvbnN0IHVpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudWlkLnZhbHVlKTtcbiAgICBjb25zdCByb2xlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yb2xlLnZhbHVlKTtcbiAgXG4gICAgLy8vdWlkXG4gICAgLy90b2tlbi9cbiAgICAvL3JvbGVcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG5cbiAgICAoYXN5bmMgKCkgPT4ge1xuXG5cbiAgICAgICAgaWYgKHJvbGUgPT0gNCkge1xuXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL3VzZXJGb2xkZXIvJHt1aWR9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KSgpXG5cbiAgICBcbiAgICB9LCBbcm91dGVyLmlzUmVhZHldKTtcblxuICAgIC8vc3VtYml0IGZvcm1hIGRhdGFcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAvLyBkb24gbm90IGNoYW5nZSB0aGlzIHBvc3RcbiAgICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19OT0RFX1NFUlZFUn0vJHtVaWR9L2NyZWF0ZVByb2plY3RgLCB7cHJvamVjdH0sIHtcbiAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcz0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgICAgICAgICBhbGVydChcImZpbGVzIGFkZCBjb3JyZWN0bHlcIilcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3VzZXJGb2xkZXIvJHtVaWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG4gICAgICAgIFxuXG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgICAgXG4gICAgICAgIDw+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxJbnB1dCBjbGVhcmFibGUgYm9yZGVyZWQgbGFiZWxQbGFjZWhvbGRlcj1cIlByb2plY3QgTmFtZVwiIGhlbHBlclRleHQ9XCJSZXF1aXJlZFwiIHJlcXVpcmVkPXt0cnVlfSBuYW1lPSdQcm9qZWN0TmFtZScgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvamVjdE5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvamVjdChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8SW5wdXQgYm9yZGVyZWQgbGFiZWxQbGFjZWhvbGRlcj1cIlByb2plY3QgTmFtZVwiIGhlbHBlclRleHQ9XCJSZXF1aXJlZFwiIHJlcXVpcmVkPXt0cnVlfSBuYW1lPSdQcm9qZWN0TmFtZScgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwcm9qZWN0RHVyYXRpb259IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvamVjdChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PiBTZW5kIDwvQnV0dG9uPiAgIFxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJJbnB1dCIsIkJ1dHRvbiIsInVzZURyb3B6b25lIiwiTGF5b3V0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImZldGNoRnVuIiwiQWRkRmlsZXMiLCJyb3V0ZXIiLCJVaWQiLCJxdWVyeSIsInByb2plY3ROYW1lIiwic2V0cHJvamVjdE5hbWUiLCJ0b2tlbiIsInN0YXRlIiwidmFsdWUiLCJ1aWQiLCJyb2xlIiwiaXNSZWFkeSIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX05PREVfU0VSVkVSIiwicHJvamVjdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImFsZXJ0IiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJhYmxlIiwiYm9yZGVyZWQiLCJsYWJlbFBsYWNlaG9sZGVyIiwiaGVscGVyVGV4dCIsInJlcXVpcmVkIiwibmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJzZXRQcm9qZWN0IiwidGFyZ2V0IiwicHJvamVjdER1cmF0aW9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/CreateProject.js\n"));

/***/ })

});