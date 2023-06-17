"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _stores_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stores/store */ \"./stores/store.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserCard */ \"./components/UserCard.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../js/fetchFun */ \"./js/fetchFun.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Loader */ \"./components/Loader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [workers, setWorkers] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/index.js\",\n        lineNumber: 13,\n        columnNumber: 42\n    }, this));\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.role.value);\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            //user role\n            if (role * 1 != 2) {\n                router.push(\"/userFolder/\".concat(uid));\n            } else {\n                const res = await (0,_js_fetchFun__WEBPACK_IMPORTED_MODULE_8__.fetchFun)(\"/workers\", \"GET\", {}, token);\n                console.log(res);\n                // alert(res)\n                if (res === 401) {\n                    router.push(\"/Login\");\n                } else {\n                    const items = res.map((person)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: person.idUser,\n                            name: person.name\n                        }, person.idUser, false, {\n                            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this));\n                    setWorkers(items);\n                }\n            }\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"5fe06f1156fe83cd\",\n                children: '.gridContainer.jsx-5fe06f1156fe83cd{justify=\"flex-start\"\\n        }'\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Container, {\n                    gap: 2,\n                    className: \"gridContainer\",\n                    children: workers\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"AE4AN/Rw9m4eUkMrSr8TmIo7lTg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDYjtBQUNpRDtBQUN6QjtBQUNaO0FBQ0Q7QUFDSTtBQUNKO0FBQ0Q7QUFFMUIsU0FBU2tCLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLGVBQUMsOERBQUNlLDBEQUFNQTs7Ozs7SUFDOUMsTUFBTUksUUFBUVYsd0RBQVdBLENBQUMsQ0FBQ1csUUFBVUEsTUFBTUQsS0FBSyxDQUFDRSxLQUFLO0lBQ3RELE1BQU1DLE1BQU1iLHdEQUFXQSxDQUFDLENBQUNXLFFBQVVBLE1BQU1FLEdBQUcsQ0FBQ0QsS0FBSztJQUNsRCxNQUFNRSxPQUFPZCx3REFBV0EsQ0FBQyxDQUFDVyxRQUFVQSxNQUFNRyxJQUFJLENBQUNGLEtBQUs7SUFDcEQsSUFBSUcsU0FBUzFCLHNEQUFTQTtJQUt0QkMsZ0RBQVNBLENBQUMsSUFBTTtRQUViLFdBQVk7WUFDWCxXQUFXO1lBQ1gsSUFBSXdCLE9BQUssS0FBSyxHQUFHO2dCQUNmQyxPQUFPQyxJQUFJLENBQUMsZUFBbUIsT0FBSkg7WUFDN0IsT0FBSztnQkFDTCxNQUFNSSxNQUFNLE1BQU1aLHNEQUFRQSxDQUFDLFlBQVksT0FBTyxDQUFDLEdBQUdLO2dCQUNsRFEsUUFBUUMsR0FBRyxDQUFDRjtnQkFDYixhQUFhO2dCQUNaLElBQUlBLFFBQVEsS0FBSztvQkFFZkYsT0FBT0MsSUFBSSxDQUFDO2dCQUNkLE9BQU87b0JBQ0wsTUFBTUksUUFBUUgsSUFBSUksR0FBRyxDQUFDLENBQUNDLHVCQUNyQiw4REFBQ2xCLDREQUFRQTs0QkFFUG1CLElBQUlELE9BQU9FLE1BQU07NEJBQ2pCQyxNQUFNSCxPQUFPRyxJQUFJOzJCQUZaSCxPQUFPRSxNQUFNOzs7OztvQkFLdkJmLFdBQVdXO2dCQUNaLENBQUM7WUFDSCxDQUFDO1FBQ0Q7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7Ozs7OzBCQU9FLDhEQUFDakIsMERBQU1BOzBCQUNMLDRFQUFDVCw4REFBYztvQkFBQ2lDLEtBQUs7b0JBQUdDLFdBQVU7OEJBQy9CcEI7Ozs7Ozs7Ozs7Ozs7QUFNWCxDQUFDO0dBckR1QkQ7O1FBRVJQLG9EQUFXQTtRQUNiQSxvREFBV0E7UUFDVkEsb0RBQVdBO1FBQ1hYLGtEQUFTQTs7O0tBTEFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIENhcmQsIFRleHQsIFJvdywgU3BhY2VyLCBMaW5rIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSBcIi4uL3N0b3Jlcy9zdG9yZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBVc2VyQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQ2FyZFwiO1xuaW1wb3J0IHsgZmV0Y2hGdW4gfSBmcm9tIFwiLi4vanMvZmV0Y2hGdW5cIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3dvcmtlcnMsIHNldFdvcmtlcnNdID0gdXNlU3RhdGUoPExvYWRlcj48L0xvYWRlcj4pO1xuICBjb25zdCB0b2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudG9rZW4udmFsdWUpO1xuICBjb25zdCB1aWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVpZC52YWx1ZSk7XG4gIGNvbnN0IHJvbGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJvbGUudmFsdWUpO1xuICBsZXQgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAvL3VzZXIgcm9sZVxuICAgICAgaWYgKHJvbGUqMSAhPSAyKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvdXNlckZvbGRlci8ke3VpZH1gKTtcbiAgICAgIH1lbHNle1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hGdW4oXCIvd29ya2Vyc1wiLCBcIkdFVFwiLCB7fSwgdG9rZW4pO1xuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAvLyBhbGVydChyZXMpXG4gICAgICBpZiAocmVzID09PSA0MDEpIHtcblxuICAgICAgICByb3V0ZXIucHVzaChcIi9Mb2dpblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcmVzLm1hcCgocGVyc29uKSA9PiAoXG4gICAgICAgICAgPFVzZXJDYXJkXG4gICAgICAgICAgICBrZXk9e3BlcnNvbi5pZFVzZXJ9XG4gICAgICAgICAgICBpZD17cGVyc29uLmlkVXNlcn1cbiAgICAgICAgICAgIG5hbWU9e3BlcnNvbi5uYW1lfVxuICAgICAgICAgID48L1VzZXJDYXJkPlxuICAgICAgICApKTtcbiAgICAgICBzZXRXb3JrZXJzKGl0ZW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgIC5ncmlkQ29udGFpbmVye1xuICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICB9YH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8R3JpZC5Db250YWluZXIgZ2FwPXsyfSBjbGFzc05hbWU9XCJncmlkQ29udGFpbmVyXCI+XG4gICAgICAgICAge3dvcmtlcnN9XG4gICAgICAgICBcbiAgICAgICAgPC9HcmlkLkNvbnRhaW5lcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJCdXR0b24iLCJHcmlkIiwiQ2FyZCIsIlRleHQiLCJSb3ciLCJTcGFjZXIiLCJMaW5rIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInNldFRva2VuIiwiTGF5b3V0IiwiVXNlckNhcmQiLCJmZXRjaEZ1biIsIkxvYWRlciIsIkhvbWUiLCJ3b3JrZXJzIiwic2V0V29ya2VycyIsInRva2VuIiwic3RhdGUiLCJ2YWx1ZSIsInVpZCIsInJvbGUiLCJyb3V0ZXIiLCJwdXNoIiwicmVzIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwibWFwIiwicGVyc29uIiwiaWQiLCJpZFVzZXIiLCJuYW1lIiwiQ29udGFpbmVyIiwiZ2FwIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});