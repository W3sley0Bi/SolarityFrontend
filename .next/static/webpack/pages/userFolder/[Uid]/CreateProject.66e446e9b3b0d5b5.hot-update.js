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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddFiles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction AddFiles() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid  } = router.query;\n    const [projectName, setProjectName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [projectDuration, setProjectDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.role.value);\n    ///uid\n    //token/\n    //role\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (role == 4) {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    //sumbit forma data\n    const handleSubmit = async ()=>{\n        console.log(project);\n    // don not change this post\n    // axios.post(`${process.env.NEXT_PUBLIC_NODE_SERVER}/${Uid}/createProject`, {project}, {\n    //     headers:{\n    //         Authorization: token,\n    //     }\n    // })\n    // .then(res=> {\n    //     if(res.status == 200){\n    //         alert(\"files add correctly\")\n    //         router.push(`/userFolder/${Uid}`)\n    //     }\n    // })\n    // .catch(err => console.log(err))\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                    clearable: true,\n                    bordered: true,\n                    labelPlaceholder: \"Project Name\",\n                    helperText: \"Required\",\n                    required: true,\n                    name: \"ProjectName\",\n                    type: \"text\",\n                    value: projectName,\n                    onChange: (e)=>setProjectName(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"Project Name\",\n                    helperText: \"Required\",\n                    required: true,\n                    name: \"ProjectName\",\n                    type: \"number\",\n                    value: projectDuration,\n                    onChange: (e)=>setProjectDuration(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: handleSubmit,\n                    children: \" Send \"\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n            lineNumber: 66,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(AddFiles, \"1304qzbv5CMsHXnuzfKmy9BTKnA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = AddFiles;\nvar _c;\n$RefreshReg$(_c, \"AddFiles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL0NyZWF0ZVByb2plY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNMO0FBQ0c7QUFDQztBQUNFO0FBQ0c7QUFDTztBQUNQO0FBRWpDLFNBQVNXLFdBQVU7O0lBRTlCLE1BQU1DLFNBQVNULHNEQUFTQTtJQUN4QixNQUFNLEVBQUVVLElBQUcsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzVCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNnQixpQkFBaUJDLG1CQUFtQixHQUFHakIsK0NBQVFBLENBQUM7SUFFdkQsTUFBTWtCLFFBQVFYLHdEQUFXQSxDQUFDLENBQUNZLFFBQVVBLE1BQU1ELEtBQUssQ0FBQ0UsS0FBSztJQUN0RCxNQUFNQyxNQUFNZCx3REFBV0EsQ0FBQyxDQUFDWSxRQUFVQSxNQUFNRSxHQUFHLENBQUNELEtBQUs7SUFDbEQsTUFBTUUsT0FBT2Ysd0RBQVdBLENBQUMsQ0FBQ1ksUUFBVUEsTUFBTUcsSUFBSSxDQUFDRixLQUFLO0lBRXBELE1BQU07SUFDTixRQUFRO0lBQ1IsTUFBTTtJQUNObkIsZ0RBQVNBLENBQUMsSUFBSTtRQUNWLElBQUcsQ0FBQ1UsT0FBT1ksT0FBTyxFQUFFO1FBRXZCLFdBQVk7WUFHVCxJQUFJRCxRQUFRLEdBQUc7Z0JBRVhYLE9BQU9hLElBQUksQ0FBQyxlQUFtQixPQUFKSDtZQUM3QixDQUFDO1FBRUM7SUFHUixHQUFHO1FBQUNWLE9BQU9ZLE9BQU87S0FBQztJQUVuQixtQkFBbUI7SUFDbkIsTUFBTUUsZUFBZSxVQUFZO1FBQ3JDQyxRQUFRQyxHQUFHLENBQUNDO0lBQ0wsMkJBQTJCO0lBQzFCLHlGQUF5RjtJQUN6RixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBRWhDLFFBQVE7SUFDUixLQUFLO0lBQ0wsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qix1Q0FBdUM7SUFDdkMsNENBQTRDO0lBQzVDLFFBQVE7SUFDUixLQUFLO0lBQ0wsa0NBQWtDO0lBSXRDO0lBRUEscUJBRUk7a0JBQ0EsNEVBQUN0QiwwREFBTUE7OzhCQUVILDhEQUFDSCxvREFBS0E7b0JBQUMwQixTQUFTO29CQUFDQyxRQUFRO29CQUFDQyxrQkFBaUI7b0JBQWVDLFlBQVc7b0JBQVdDLFVBQVUsSUFBSTtvQkFBRUMsTUFBSztvQkFBY0MsTUFBSztvQkFBT2YsT0FBT047b0JBQWFzQixVQUFVLENBQUNDLElBQU10QixlQUFlc0IsRUFBRUMsTUFBTSxDQUFDbEIsS0FBSzs7Ozs7OzhCQUNqTSw4REFBQ2pCLG9EQUFLQTtvQkFBQzJCLFFBQVE7b0JBQUNDLGtCQUFpQjtvQkFBZUMsWUFBVztvQkFBV0MsVUFBVSxJQUFJO29CQUFFQyxNQUFLO29CQUFjQyxNQUFLO29CQUFTZixPQUFPSjtvQkFBaUJvQixVQUFVLENBQUNDLElBQU1wQixtQkFBbUJvQixFQUFFQyxNQUFNLENBQUNsQixLQUFLOzs7Ozs7OEJBRWpNLDhEQUFDaEIscURBQU1BO29CQUFDbUMsU0FBU2Q7OEJBQWM7Ozs7Ozs7Ozs7Ozs7QUFJM0MsQ0FBQztHQWhFdUJmOztRQUVMUixrREFBU0E7UUFLVkssb0RBQVdBO1FBQ2JBLG9EQUFXQTtRQUNWQSxvREFBV0E7OztLQVRKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL0NyZWF0ZVByb2plY3QuanM/NGI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZmV0Y2hGdW4gfSBmcm9tIFwiLi4vLi4vLi4vanMvZmV0Y2hGdW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkRmlsZXMoKXtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBVaWQgfSA9IHJvdXRlci5xdWVyeVxuICAgIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbcHJvamVjdER1cmF0aW9uLCBzZXRQcm9qZWN0RHVyYXRpb25dID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IHRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50b2tlbi52YWx1ZSk7XG4gICAgY29uc3QgdWlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51aWQudmFsdWUpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJvbGUudmFsdWUpO1xuICBcbiAgICAvLy91aWRcbiAgICAvL3Rva2VuL1xuICAgIC8vcm9sZVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcblxuICAgIChhc3luYyAoKSA9PiB7XG5cblxuICAgICAgICBpZiAocm9sZSA9PSA0KSB7XG5cbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdXNlckZvbGRlci8ke3VpZH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pKClcblxuICAgIFxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gICAgLy9zdW1iaXQgZm9ybWEgZGF0YVxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbmNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgICAgLy8gZG9uIG5vdCBjaGFuZ2UgdGhpcyBwb3N0XG4gICAgICAgIC8vIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTk9ERV9TRVJWRVJ9LyR7VWlkfS9jcmVhdGVQcm9qZWN0YCwge3Byb2plY3R9LCB7XG4gICAgICAgIC8vICAgICBoZWFkZXJzOntcbiAgICAgICAgLy8gICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyAudGhlbihyZXM9PiB7XG4gICAgICAgIC8vICAgICBpZihyZXMuc3RhdHVzID09IDIwMCl7XG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoXCJmaWxlcyBhZGQgY29ycmVjdGx5XCIpXG4gICAgICAgIC8vICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyRm9sZGVyLyR7VWlkfWApXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblxuICAgICAgICBcblxuICAgIH07XG5cbiAgICByZXR1cm4oXG4gICAgICAgIFxuICAgICAgICA8PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8SW5wdXQgY2xlYXJhYmxlIGJvcmRlcmVkIGxhYmVsUGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIiBoZWxwZXJUZXh0PVwiUmVxdWlyZWRcIiByZXF1aXJlZD17dHJ1ZX0gbmFtZT0nUHJvamVjdE5hbWUnIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Byb2plY3ROYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFByb2plY3ROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDxJbnB1dCBib3JkZXJlZCBsYWJlbFBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lXCIgaGVscGVyVGV4dD1cIlJlcXVpcmVkXCIgcmVxdWlyZWQ9e3RydWV9IG5hbWU9J1Byb2plY3ROYW1lJyB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3Byb2plY3REdXJhdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9qZWN0RHVyYXRpb24oZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICBcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT4gU2VuZCA8L0J1dHRvbj4gICBcbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiSW5wdXQiLCJCdXR0b24iLCJ1c2VEcm9wem9uZSIsIkxheW91dCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJmZXRjaEZ1biIsIkFkZEZpbGVzIiwicm91dGVyIiwiVWlkIiwicXVlcnkiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwicHJvamVjdER1cmF0aW9uIiwic2V0UHJvamVjdER1cmF0aW9uIiwidG9rZW4iLCJzdGF0ZSIsInZhbHVlIiwidWlkIiwicm9sZSIsImlzUmVhZHkiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInByb2plY3QiLCJjbGVhcmFibGUiLCJib3JkZXJlZCIsImxhYmVsUGxhY2Vob2xkZXIiLCJoZWxwZXJUZXh0IiwicmVxdWlyZWQiLCJuYW1lIiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/CreateProject.js\n"));

/***/ })

});