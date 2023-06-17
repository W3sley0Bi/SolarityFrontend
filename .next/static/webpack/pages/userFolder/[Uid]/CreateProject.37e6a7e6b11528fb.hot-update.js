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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddFiles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction AddFiles() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid  } = router.query;\n    const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.role.value);\n    ///uid\n    //token/\n    //role\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (role == 4) {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    //sumbit forma data\n    const handleSubmit = async ()=>{\n        const formData = new FormData(); // create a new FormData instance\n        formData.append(\"project\", project);\n        // don not change this post\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(\"http://localhost:3001\", \"/\").concat(Uid, \"/createProject\"), formData, {\n            headers: {\n                Authorization: token\n            }\n        }).then((res)=>{\n            if (res.status == 200) {\n                alert(\"files add correctly\");\n                router.push(\"/userFolder/\".concat(Uid));\n            }\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    clearable: true,\n                    bordered: true,\n                    labelPlaceholder: \"Project Name\",\n                    helperText: \"Required\",\n                    required: true,\n                    name: \"ProjectName\",\n                    type: \"text\",\n                    value: project,\n                    onChange: (e)=>setProject(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    onClick: handleSubmit,\n                    children: \" Send \"\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n            lineNumber: 68,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(AddFiles, \"lVifsOu1JaNlz1LQMzhXE20gzu0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = AddFiles;\nvar _c;\n$RefreshReg$(_c, \"AddFiles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL0NyZWF0ZVByb2plY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDTDtBQUNHO0FBQ0M7QUFDRTtBQUNHO0FBQ087QUFDUDtBQUVqQyxTQUFTVyxXQUFVOztJQUU5QixNQUFNQyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFVSxJQUFHLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM1QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUM7SUFFdkMsTUFBTWdCLFFBQVFULHdEQUFXQSxDQUFDLENBQUNVLFFBQVVBLE1BQU1ELEtBQUssQ0FBQ0UsS0FBSztJQUN0RCxNQUFNQyxNQUFNWix3REFBV0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNRSxHQUFHLENBQUNELEtBQUs7SUFDbEQsTUFBTUUsT0FBT2Isd0RBQVdBLENBQUMsQ0FBQ1UsUUFBVUEsTUFBTUcsSUFBSSxDQUFDRixLQUFLO0lBRXBELE1BQU07SUFDTixRQUFRO0lBQ1IsTUFBTTtJQUNOakIsZ0RBQVNBLENBQUMsSUFBSTtRQUNWLElBQUcsQ0FBQ1UsT0FBT1UsT0FBTyxFQUFFO1FBRXZCLFdBQVk7WUFHVCxJQUFJRCxRQUFRLEdBQUc7Z0JBRVhULE9BQU9XLElBQUksQ0FBQyxlQUFtQixPQUFKSDtZQUM3QixDQUFDO1FBRUM7SUFHUixHQUFHO1FBQUNSLE9BQU9VLE9BQU87S0FBQztJQUVuQixtQkFBbUI7SUFDbkIsTUFBTUUsZUFBZSxVQUFZO1FBRTdCLE1BQU1DLFdBQVcsSUFBSUMsWUFBWSxpQ0FBaUM7UUFDbEVELFNBQVNFLE1BQU0sQ0FBQyxXQUFXWjtRQUU1QiwyQkFBMkI7UUFDMUJmLGtEQUFVLENBQUMsR0FBMENhLE9BQXZDZ0IsdUJBQW1DLEVBQUMsS0FBTyxPQUFKaEIsS0FBSSxtQkFBaUJZLFVBQVU7WUFDaEZPLFNBQVE7Z0JBQ0pDLGVBQWVoQjtZQUVuQjtRQUNKLEdBQ0NpQixJQUFJLENBQUNDLENBQUFBLE1BQU07WUFDUixJQUFHQSxJQUFJQyxNQUFNLElBQUksS0FBSTtnQkFDakJDLE1BQU07Z0JBQ056QixPQUFPVyxJQUFJLENBQUMsZUFBbUIsT0FBSlY7WUFDL0IsQ0FBQztRQUNMLEdBQ0N5QixLQUFLLENBQUNDLENBQUFBLE1BQU9DLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFJOUI7SUFFQSxxQkFFSTtrQkFDQSw0RUFBQ2hDLDBEQUFNQTs7OEJBQ0gsOERBQUNILG9EQUFLQTtvQkFBQ3NDLFNBQVM7b0JBQUNDLFFBQVE7b0JBQUNDLGtCQUFpQjtvQkFBZUMsWUFBVztvQkFBV0MsVUFBVSxJQUFJO29CQUFFQyxNQUFLO29CQUFjQyxNQUFLO29CQUFPN0IsT0FBT0o7b0JBQVNrQyxVQUFVLENBQUNDLElBQU1sQyxXQUFXa0MsRUFBRUMsTUFBTSxDQUFDaEMsS0FBSzs7Ozs7OzhCQUV6TCw4REFBQ2QscURBQU1BO29CQUFDK0MsU0FBUzVCOzhCQUFjOzs7Ozs7Ozs7Ozs7O0FBSTNDLENBQUM7R0FoRXVCYjs7UUFFTFIsa0RBQVNBO1FBSVZLLG9EQUFXQTtRQUNiQSxvREFBV0E7UUFDVkEsb0RBQVdBOzs7S0FSSkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckZvbGRlci9bVWlkXS9DcmVhdGVQcm9qZWN0LmpzPzRiNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoRnVuIH0gZnJvbSBcIi4uLy4uLy4uL2pzL2ZldGNoRnVuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEZpbGVzKCl7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgVWlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCBbcHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgdG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRva2VuLnZhbHVlKTtcbiAgICBjb25zdCB1aWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVpZC52YWx1ZSk7XG4gICAgY29uc3Qgcm9sZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucm9sZS52YWx1ZSk7XG4gIFxuICAgIC8vL3VpZFxuICAgIC8vdG9rZW4vXG4gICAgLy9yb2xlXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuXG4gICAgKGFzeW5jICgpID0+IHtcblxuXG4gICAgICAgIGlmIChyb2xlID09IDQpIHtcblxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyRm9sZGVyLyR7dWlkfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSkoKVxuXG4gICAgXG4gICAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgICAvL3N1bWJpdCBmb3JtYSBkYXRhXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7IC8vIGNyZWF0ZSBhIG5ldyBGb3JtRGF0YSBpbnN0YW5jZVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm9qZWN0XCIsIHByb2plY3QpOyBcblxuICAgICAgIC8vIGRvbiBub3QgY2hhbmdlIHRoaXMgcG9zdFxuICAgICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05PREVfU0VSVkVSfS8ke1VpZH0vY3JlYXRlUHJvamVjdGAsIGZvcm1EYXRhLCB7XG4gICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXM9PiB7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09IDIwMCl7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJmaWxlcyBhZGQgY29ycmVjdGx5XCIpXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyRm9sZGVyLyR7VWlkfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblxuICAgICAgICBcblxuICAgIH07XG5cbiAgICByZXR1cm4oXG4gICAgICAgIFxuICAgICAgICA8PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPElucHV0IGNsZWFyYWJsZSBib3JkZXJlZCBsYWJlbFBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lXCIgaGVscGVyVGV4dD1cIlJlcXVpcmVkXCIgcmVxdWlyZWQ9e3RydWV9IG5hbWU9J1Byb2plY3ROYW1lJyB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcm9qZWN0fSBvbkNoYW5nZT17KGUpID0+IHNldFByb2plY3QoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+IFNlbmQgPC9CdXR0b24+ICAgXG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIklucHV0IiwiQnV0dG9uIiwidXNlRHJvcHpvbmUiLCJMYXlvdXQiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiZmV0Y2hGdW4iLCJBZGRGaWxlcyIsInJvdXRlciIsIlVpZCIsInF1ZXJ5IiwicHJvamVjdCIsInNldFByb2plY3QiLCJ0b2tlbiIsInN0YXRlIiwidmFsdWUiLCJ1aWQiLCJyb2xlIiwiaXNSZWFkeSIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19OT0RFX1NFUlZFUiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImFsZXJ0IiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJhYmxlIiwiYm9yZGVyZWQiLCJsYWJlbFBsYWNlaG9sZGVyIiwiaGVscGVyVGV4dCIsInJlcXVpcmVkIiwibmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/CreateProject.js\n"));

/***/ })

});