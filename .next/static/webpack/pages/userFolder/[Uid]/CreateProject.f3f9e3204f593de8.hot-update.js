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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddFiles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction AddFiles() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid  } = router.query;\n    const [projectName, setProjectName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [projectDuration, setProjectDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(30);\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.role.value);\n    ///uid\n    //token/\n    //role\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (role == 4) {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    //sumbit forma data\n    const handleSubmit = async ()=>{\n        // don not change this post\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(\"http://localhost:3001\", \"/\").concat(Uid, \"/createProject\"), {\n            uidprojectName,\n            projectDuration\n        }, {\n            headers: {\n                Authorization: token\n            }\n        }).then((res)=>{\n            if (res.status == 200) {\n                alert(\"files add correctly\");\n                router.push(\"/userFolder/\".concat(Uid));\n            }\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    clearable: true,\n                    bordered: true,\n                    labelPlaceholder: \"Project Name\",\n                    required: true,\n                    name: \"ProjectName\",\n                    type: \"text\",\n                    value: projectName,\n                    onChange: (e)=>setProjectName(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"Duration\",\n                    required: true,\n                    name: \"ProjectName\",\n                    type: \"number\",\n                    value: projectDuration,\n                    onChange: (e)=>setProjectDuration(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    onClick: handleSubmit,\n                    children: \" Send \"\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n            lineNumber: 65,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(AddFiles, \"5TnzDjj/3q60kA/yhHvL7v1+ZRk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = AddFiles;\nvar _c;\n$RefreshReg$(_c, \"AddFiles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL0NyZWF0ZVByb2plY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDTDtBQUNXO0FBQ1A7QUFDSztBQUNPO0FBQ1A7QUFFakMsU0FBU1csV0FBVTs7SUFFOUIsTUFBTUMsU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVUsSUFBRyxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDNUIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2dCLGlCQUFpQkMsbUJBQW1CLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUV2RCxNQUFNa0IsUUFBUVgsd0RBQVdBLENBQUMsQ0FBQ1ksUUFBVUEsTUFBTUQsS0FBSyxDQUFDRSxLQUFLO0lBQ3RELE1BQU1DLE1BQU1kLHdEQUFXQSxDQUFDLENBQUNZLFFBQVVBLE1BQU1FLEdBQUcsQ0FBQ0QsS0FBSztJQUNsRCxNQUFNRSxPQUFPZix3REFBV0EsQ0FBQyxDQUFDWSxRQUFVQSxNQUFNRyxJQUFJLENBQUNGLEtBQUs7SUFFcEQsTUFBTTtJQUNOLFFBQVE7SUFDUixNQUFNO0lBQ05uQixnREFBU0EsQ0FBQyxJQUFJO1FBQ1YsSUFBRyxDQUFDVSxPQUFPWSxPQUFPLEVBQUU7UUFFdkIsV0FBWTtZQUdULElBQUlELFFBQVEsR0FBRztnQkFFWFgsT0FBT2EsSUFBSSxDQUFDLGVBQW1CLE9BQUpIO1lBQzdCLENBQUM7UUFFQztJQUdSLEdBQUc7UUFBQ1YsT0FBT1ksT0FBTztLQUFDO0lBRW5CLG1CQUFtQjtJQUNuQixNQUFNRSxlQUFlLFVBQVk7UUFFOUIsMkJBQTJCO1FBQzFCMUIsa0RBQVUsQ0FBQyxHQUEwQ2EsT0FBdkNlLHVCQUFtQyxFQUFDLEtBQU8sT0FBSmYsS0FBSSxtQkFBaUI7WUFBQ2tCO1lBQWVkO1FBQWUsR0FBRztZQUN4R2UsU0FBUTtnQkFDSkMsZUFBZWQ7WUFFbkI7UUFDSixHQUNDZSxJQUFJLENBQUNDLENBQUFBLE1BQU07WUFDUixJQUFHQSxJQUFJQyxNQUFNLElBQUksS0FBSTtnQkFDakJDLE1BQU07Z0JBQ056QixPQUFPYSxJQUFJLENBQUMsZUFBbUIsT0FBSlo7WUFDL0IsQ0FBQztRQUNMLEdBQ0N5QixLQUFLLENBQUNDLENBQUFBLE1BQU9DLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFJOUI7SUFFQSxxQkFFSTtrQkFDQSw0RUFBQ2hDLDBEQUFNQTs7OEJBRUgsOERBQUNILG9EQUFLQTtvQkFBQ3NDLFNBQVM7b0JBQUNDLFFBQVE7b0JBQUNDLGtCQUFpQjtvQkFBZUMsVUFBVSxJQUFJO29CQUFFQyxNQUFLO29CQUFjQyxNQUFLO29CQUFPMUIsT0FBT047b0JBQWFpQyxVQUFVLENBQUNDLElBQU1qQyxlQUFlaUMsRUFBRUMsTUFBTSxDQUFDN0IsS0FBSzs7Ozs7OzhCQUMzSyw4REFBQ2hCLHFEQUFNQTtvQkFBQzhDLEdBQUc7Ozs7Ozs4QkFDWCw4REFBQy9DLG9EQUFLQTtvQkFBQ3VDLFFBQVE7b0JBQUNDLGtCQUFpQjtvQkFBV0MsVUFBVSxJQUFJO29CQUFFQyxNQUFLO29CQUFjQyxNQUFLO29CQUFTMUIsT0FBT0o7b0JBQWlCK0IsVUFBVSxDQUFDQyxJQUFNL0IsbUJBQW1CK0IsRUFBRUMsTUFBTSxDQUFDN0IsS0FBSzs7Ozs7OzhCQUN2Syw4REFBQ2hCLHFEQUFNQTtvQkFBQzhDLEdBQUc7Ozs7Ozs4QkFDWCw4REFBQzdDLHFEQUFNQTtvQkFBQzhDLFNBQVMxQjs4QkFBYzs7Ozs7Ozs7Ozs7OztBQUkzQyxDQUFDO0dBakV1QmY7O1FBRUxSLGtEQUFTQTtRQUtWSyxvREFBV0E7UUFDYkEsb0RBQVdBO1FBQ1ZBLG9EQUFXQTs7O0tBVEpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJGb2xkZXIvW1VpZF0vQ3JlYXRlUHJvamVjdC5qcz80YjRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBJbnB1dCwgU3BhY2VyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaEZ1biB9IGZyb20gXCIuLi8uLi8uLi9qcy9mZXRjaEZ1blwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRGaWxlcygpe1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IFVpZCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtwcm9qZWN0RHVyYXRpb24sIHNldFByb2plY3REdXJhdGlvbl0gPSB1c2VTdGF0ZSgzMClcblxuICAgIGNvbnN0IHRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50b2tlbi52YWx1ZSk7XG4gICAgY29uc3QgdWlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51aWQudmFsdWUpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJvbGUudmFsdWUpO1xuICBcbiAgICAvLy91aWRcbiAgICAvL3Rva2VuL1xuICAgIC8vcm9sZVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcblxuICAgIChhc3luYyAoKSA9PiB7XG5cblxuICAgICAgICBpZiAocm9sZSA9PSA0KSB7XG5cbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdXNlckZvbGRlci8ke3VpZH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pKClcblxuICAgIFxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gICAgLy9zdW1iaXQgZm9ybWEgZGF0YVxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgIC8vIGRvbiBub3QgY2hhbmdlIHRoaXMgcG9zdFxuICAgICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05PREVfU0VSVkVSfS8ke1VpZH0vY3JlYXRlUHJvamVjdGAsIHt1aWRwcm9qZWN0TmFtZSxwcm9qZWN0RHVyYXRpb259LCB7XG4gICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXM9PiB7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09IDIwMCl7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJmaWxlcyBhZGQgY29ycmVjdGx5XCIpXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyRm9sZGVyLyR7VWlkfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblxuICAgICAgICBcblxuICAgIH07XG5cbiAgICByZXR1cm4oXG4gICAgICAgIFxuICAgICAgICA8PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8SW5wdXQgY2xlYXJhYmxlIGJvcmRlcmVkIGxhYmVsUGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIiByZXF1aXJlZD17dHJ1ZX0gbmFtZT0nUHJvamVjdE5hbWUnIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Byb2plY3ROYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFByb2plY3ROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDxTcGFjZXIgeT17MX0gLz5cbiAgICAgICAgICAgIDxJbnB1dCBib3JkZXJlZCBsYWJlbFBsYWNlaG9sZGVyPVwiRHVyYXRpb25cIiByZXF1aXJlZD17dHJ1ZX0gbmFtZT0nUHJvamVjdE5hbWUnIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cHJvamVjdER1cmF0aW9ufSBvbkNoYW5nZT17KGUpID0+IHNldFByb2plY3REdXJhdGlvbihlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8U3BhY2VyIHk9ezF9IC8+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+IFNlbmQgPC9CdXR0b24+ICAgXG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIklucHV0IiwiU3BhY2VyIiwiQnV0dG9uIiwiTGF5b3V0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImZldGNoRnVuIiwiQWRkRmlsZXMiLCJyb3V0ZXIiLCJVaWQiLCJxdWVyeSIsInByb2plY3ROYW1lIiwic2V0UHJvamVjdE5hbWUiLCJwcm9qZWN0RHVyYXRpb24iLCJzZXRQcm9qZWN0RHVyYXRpb24iLCJ0b2tlbiIsInN0YXRlIiwidmFsdWUiLCJ1aWQiLCJyb2xlIiwiaXNSZWFkeSIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX05PREVfU0VSVkVSIiwidWlkcHJvamVjdE5hbWUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJhbGVydCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNsZWFyYWJsZSIsImJvcmRlcmVkIiwibGFiZWxQbGFjZWhvbGRlciIsInJlcXVpcmVkIiwibmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ5Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/CreateProject.js\n"));

/***/ })

});