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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddFiles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction AddFiles() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid  } = router.query;\n    const [projectName, setProjectName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [projectDuration, setProjectDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(30);\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.role.value);\n    ///uid\n    //token/\n    //role\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (role == 4) {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    //sumbit forma data\n    const handleSubmit = async ()=>{\n        console.log(projectName, projectDuration);\n    // don not change this post\n    // axios.post(`${process.env.NEXT_PUBLIC_NODE_SERVER}/${Uid}/createProject`, {projectName}, {\n    //     headers:{\n    //         Authorization: token,\n    //     }\n    // })\n    // .then(res=> {\n    //     if(res.status == 200){\n    //         alert(\"files add correctly\")\n    //         router.push(`/userFolder/${Uid}`)\n    //     }\n    // })\n    // .catch(err => console.log(err))\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                    clearable: true,\n                    bordered: true,\n                    labelPlaceholder: \"Project Name\",\n                    required: true,\n                    name: \"ProjectName\",\n                    type: \"text\",\n                    value: projectName,\n                    onChange: (e)=>setProjectName(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"Duration\",\n                    required: true,\n                    name: \"ProjectName\",\n                    type: \"number\",\n                    value: projectDuration,\n                    onChange: (e)=>setProjectDuration(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: handleSubmit,\n                    children: \" Send \"\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n            lineNumber: 65,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(AddFiles, \"5TnzDjj/3q60kA/yhHvL7v1+ZRk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = AddFiles;\nvar _c;\n$RefreshReg$(_c, \"AddFiles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL0NyZWF0ZVByb2plY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNMO0FBQ1c7QUFDUDtBQUNLO0FBQ087QUFDUDtBQUVqQyxTQUFTVyxXQUFVOztJQUU5QixNQUFNQyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFVSxJQUFHLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM1QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDZ0IsaUJBQWlCQyxtQkFBbUIsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1rQixRQUFRWCx3REFBV0EsQ0FBQyxDQUFDWSxRQUFVQSxNQUFNRCxLQUFLLENBQUNFLEtBQUs7SUFDdEQsTUFBTUMsTUFBTWQsd0RBQVdBLENBQUMsQ0FBQ1ksUUFBVUEsTUFBTUUsR0FBRyxDQUFDRCxLQUFLO0lBQ2xELE1BQU1FLE9BQU9mLHdEQUFXQSxDQUFDLENBQUNZLFFBQVVBLE1BQU1HLElBQUksQ0FBQ0YsS0FBSztJQUVwRCxNQUFNO0lBQ04sUUFBUTtJQUNSLE1BQU07SUFDTm5CLGdEQUFTQSxDQUFDLElBQUk7UUFDVixJQUFHLENBQUNVLE9BQU9ZLE9BQU8sRUFBRTtRQUV2QixXQUFZO1lBR1QsSUFBSUQsUUFBUSxHQUFHO2dCQUVYWCxPQUFPYSxJQUFJLENBQUMsZUFBbUIsT0FBSkg7WUFDN0IsQ0FBQztRQUVDO0lBR1IsR0FBRztRQUFDVixPQUFPWSxPQUFPO0tBQUM7SUFFbkIsbUJBQW1CO0lBQ25CLE1BQU1FLGVBQWUsVUFBWTtRQUNyQ0MsUUFBUUMsR0FBRyxDQUFDYixhQUFZRTtJQUNqQiwyQkFBMkI7SUFDMUIsNkZBQTZGO0lBQzdGLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFFaEMsUUFBUTtJQUNSLEtBQUs7SUFDTCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLHVDQUF1QztJQUN2Qyw0Q0FBNEM7SUFDNUMsUUFBUTtJQUNSLEtBQUs7SUFDTCxrQ0FBa0M7SUFJdEM7SUFFQSxxQkFFSTtrQkFDQSw0RUFBQ1YsMERBQU1BOzs4QkFFSCw4REFBQ0gsb0RBQUtBO29CQUFDeUIsU0FBUztvQkFBQ0MsUUFBUTtvQkFBQ0Msa0JBQWlCO29CQUFlQyxVQUFVLElBQUk7b0JBQUVDLE1BQUs7b0JBQWNDLE1BQUs7b0JBQU9iLE9BQU9OO29CQUFhb0IsVUFBVSxDQUFDQyxJQUFNcEIsZUFBZW9CLEVBQUVDLE1BQU0sQ0FBQ2hCLEtBQUs7Ozs7Ozs4QkFDM0ssOERBQUNoQixxREFBTUE7b0JBQUNpQyxHQUFHOzs7Ozs7OEJBQ1gsOERBQUNsQyxvREFBS0E7b0JBQUMwQixRQUFRO29CQUFDQyxrQkFBaUI7b0JBQVlDLFVBQVUsSUFBSTtvQkFBRUMsTUFBSztvQkFBY0MsTUFBSztvQkFBU2IsT0FBT0o7b0JBQWlCa0IsVUFBVSxDQUFDQyxJQUFNbEIsbUJBQW1Ca0IsRUFBRUMsTUFBTSxDQUFDaEIsS0FBSzs7Ozs7OzhCQUN4Syw4REFBQ2hCLHFEQUFNQTtvQkFBQ2lDLEdBQUc7Ozs7Ozs4QkFDWCw4REFBQ2hDLHFEQUFNQTtvQkFBQ2lDLFNBQVNiOzhCQUFjOzs7Ozs7Ozs7Ozs7O0FBSTNDLENBQUM7R0FqRXVCZjs7UUFFTFIsa0RBQVNBO1FBS1ZLLG9EQUFXQTtRQUNiQSxvREFBV0E7UUFDVkEsb0RBQVdBOzs7S0FUSkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckZvbGRlci9bVWlkXS9DcmVhdGVQcm9qZWN0LmpzPzRiNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IElucHV0LCBTcGFjZXIgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoRnVuIH0gZnJvbSBcIi4uLy4uLy4uL2pzL2ZldGNoRnVuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEZpbGVzKCl7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgVWlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCBbcHJvamVjdE5hbWUsIHNldFByb2plY3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW3Byb2plY3REdXJhdGlvbiwgc2V0UHJvamVjdER1cmF0aW9uXSA9IHVzZVN0YXRlKDMwKVxuXG4gICAgY29uc3QgdG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRva2VuLnZhbHVlKTtcbiAgICBjb25zdCB1aWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVpZC52YWx1ZSk7XG4gICAgY29uc3Qgcm9sZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucm9sZS52YWx1ZSk7XG4gIFxuICAgIC8vL3VpZFxuICAgIC8vdG9rZW4vXG4gICAgLy9yb2xlXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuXG4gICAgKGFzeW5jICgpID0+IHtcblxuXG4gICAgICAgIGlmIChyb2xlID09IDQpIHtcblxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyRm9sZGVyLyR7dWlkfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSkoKVxuXG4gICAgXG4gICAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgICAvL3N1bWJpdCBmb3JtYSBkYXRhXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuY29uc29sZS5sb2cocHJvamVjdE5hbWUscHJvamVjdER1cmF0aW9uKVxuICAgICAgIC8vIGRvbiBub3QgY2hhbmdlIHRoaXMgcG9zdFxuICAgICAgICAvLyBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05PREVfU0VSVkVSfS8ke1VpZH0vY3JlYXRlUHJvamVjdGAsIHtwcm9qZWN0TmFtZX0sIHtcbiAgICAgICAgLy8gICAgIGhlYWRlcnM6e1xuICAgICAgICAvLyAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIC50aGVuKHJlcz0+IHtcbiAgICAgICAgLy8gICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgLy8gICAgICAgICBhbGVydChcImZpbGVzIGFkZCBjb3JyZWN0bHlcIilcbiAgICAgICAgLy8gICAgICAgICByb3V0ZXIucHVzaChgL3VzZXJGb2xkZXIvJHtVaWR9YClcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG4gICAgICAgIFxuXG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgICAgXG4gICAgICAgIDw+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxJbnB1dCBjbGVhcmFibGUgYm9yZGVyZWQgbGFiZWxQbGFjZWhvbGRlcj1cIlByb2plY3QgTmFtZVwiIHJlcXVpcmVkPXt0cnVlfSBuYW1lPSdQcm9qZWN0TmFtZScgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvamVjdE5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvamVjdE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPFNwYWNlciB5PXsxfSAvPlxuICAgICAgICAgICAgPElucHV0IGJvcmRlcmVkIGxhYmVsUGxhY2Vob2xkZXI9XCJEdXJhdGlvblwiICByZXF1aXJlZD17dHJ1ZX0gbmFtZT0nUHJvamVjdE5hbWUnIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cHJvamVjdER1cmF0aW9ufSBvbkNoYW5nZT17KGUpID0+IHNldFByb2plY3REdXJhdGlvbihlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8U3BhY2VyIHk9ezF9IC8+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+IFNlbmQgPC9CdXR0b24+ICAgXG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIklucHV0IiwiU3BhY2VyIiwiQnV0dG9uIiwiTGF5b3V0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImZldGNoRnVuIiwiQWRkRmlsZXMiLCJyb3V0ZXIiLCJVaWQiLCJxdWVyeSIsInByb2plY3ROYW1lIiwic2V0UHJvamVjdE5hbWUiLCJwcm9qZWN0RHVyYXRpb24iLCJzZXRQcm9qZWN0RHVyYXRpb24iLCJ0b2tlbiIsInN0YXRlIiwidmFsdWUiLCJ1aWQiLCJyb2xlIiwiaXNSZWFkeSIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJhYmxlIiwiYm9yZGVyZWQiLCJsYWJlbFBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJuYW1lIiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/CreateProject.js\n"));

/***/ })

});