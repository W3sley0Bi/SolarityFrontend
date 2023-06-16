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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FileModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/FileModal */ \"./components/FileModal.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n/* harmony import */ var _components_RedirectHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/RedirectHandler */ \"./components/RedirectHandler.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Loader */ \"./components/Loader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ProjectContent() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid , ProjectContent  } = router.query;\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n        lineNumber: 15,\n        columnNumber: 38\n    }, this));\n    const [formButton, setFormButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [addFile, setAddFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.role.value);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (Uid == uid || role == 1) {\n                const res = await (0,_js_fetchFun__WEBPACK_IMPORTED_MODULE_6__.fetchFun)(\"/userFolder/\".concat(Uid, \"/\").concat(ProjectContent), \"GET\", {}, token);\n                if (res === 401) {\n                    router.push(\"/Login\");\n                } else {\n                    console.log(res);\n                    const data = res.result.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"field_product_id: \",\n                                item.field_product_id,\n                                \"project_id: \",\n                                item.project_id,\n                                \"1, lon: 52, lat: 12, utc_offset: 5, tilt: 45, orientation: 'S', company_product_id: 1\",\n                                item.lon,\n                                item.lat,\n                                item.utc_offset,\n                                item.tilt,\n                                item.orientation,\n                                item.company_product_id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this));\n                    setData(data);\n                }\n            } else {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                formButton,\n                addFile,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.Container, {\n                    gap: 2,\n                    style: {\n                        flexDirection: \"column\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        data\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n            lineNumber: 71,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(ProjectContent, \"O50kInCVPxBz5zpnLBjgbfFS0mo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = ProjectContent;\nvar _c;\n$RefreshReg$(_c, \"ProjectContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL1tQcm9qZWN0Q29udGVudF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNMO0FBQ2M7QUFDTDtBQUNPO0FBQ1A7QUFDa0I7QUFDRjtBQUNqQjtBQUVoQyxTQUFTYyxpQkFBZ0I7O0lBRXBDLE1BQU1DLFNBQVNiLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVjLElBQUcsRUFBQ0YsZUFBYyxFQUFFLEdBQUdDLE9BQU9FLEtBQUs7SUFDM0MsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUduQiwrQ0FBUUEsZUFBQyw4REFBQ2EsMERBQU1BOzs7OztJQUN4QyxNQUFNLENBQUNPLFlBQVdDLGNBQWMsR0FBR3JCLCtDQUFRQTtJQUMzQyxNQUFNLENBQUNzQixTQUFRQyxXQUFXLEdBQUd2QiwrQ0FBUUE7SUFDckMsTUFBTXdCLFFBQVFuQix3REFBV0EsQ0FBQyxDQUFDb0IsUUFBVUEsTUFBTUQsS0FBSyxDQUFDRSxLQUFLO0lBQ3RELE1BQU1DLE1BQU10Qix3REFBV0EsQ0FBQyxDQUFDb0IsUUFBVUEsTUFBTUUsR0FBRyxDQUFDRCxLQUFLO0lBQ2xELE1BQU1FLE9BQU92Qix3REFBV0EsQ0FBQyxDQUFDb0IsUUFBVUEsTUFBTUcsSUFBSSxDQUFDRixLQUFLO0lBR3BEekIsZ0RBQVNBLENBQUMsSUFBSTtRQUNWLElBQUcsQ0FBQ2MsT0FBT2MsT0FBTyxFQUFFO1FBQ3ZCLFdBQVk7WUFHVCxJQUFJYixPQUFPVyxPQUFPQyxRQUFRLEdBQUc7Z0JBQzNCLE1BQU1FLE1BQU0sTUFBTXZCLHNEQUFRQSxDQUFDLGVBQXNCTyxPQUFQRSxLQUFJLEtBQWtCLE9BQWZGLGlCQUFrQixPQUFPLENBQUMsR0FBR1U7Z0JBQzlFLElBQUlNLFFBQVEsS0FBSztvQkFDZmYsT0FBT2dCLElBQUksQ0FBQztnQkFDZCxPQUFPO29CQUNEQyxRQUFRQyxHQUFHLENBQUNIO29CQUNaLE1BQU1aLE9BQU9ZLElBQUlJLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxxQkFDeEIsOERBQUNDOztnQ0FBSTtnQ0FDY0QsS0FBS0UsZ0JBQWdCO2dDQUFDO2dDQUM1QkYsS0FBS0csVUFBVTtnQ0FBQztnQ0FPekJILEtBQUtJLEdBQUc7Z0NBQ1RKLEtBQUtLLEdBQUc7Z0NBQ1JMLEtBQUtNLFVBQVU7Z0NBQ2ZOLEtBQUtPLElBQUk7Z0NBQ1RQLEtBQUtRLFdBQVc7Z0NBQ2hCUixLQUFLUyxrQkFBa0I7Ozs7Ozs7b0JBUTFCMUIsUUFBUUQ7Z0JBRVosQ0FBQztZQUVMLE9BQU07Z0JBQ0ZILE9BQU9nQixJQUFJLENBQUMsZUFBbUIsT0FBSko7WUFFL0IsQ0FBQztRQUNUO0lBQ0EsR0FBRztRQUFDWixPQUFPYyxPQUFPO0tBQUM7SUFHbkIscUJBQ0k7a0JBQ0EsNEVBQUN6QiwwREFBTUE7O2dCQUNGZ0I7Z0JBQ0FFOzhCQUNMLDhEQUFDYix3REFBU0E7b0JBQUNxQyxLQUFLO29CQUFHQyxPQUFPO3dCQUFFQyxlQUFlO29CQUFTOztzQ0FDbEQsOERBQUNDOzs7Ozt3QkFDQS9COzs7Ozs7Ozs7Ozs7OztBQUtYLENBQUM7R0F0RXVCSjs7UUFFTFosa0RBQVNBO1FBS1ZHLG9EQUFXQTtRQUNiQSxvREFBV0E7UUFDVkEsb0RBQVdBOzs7S0FUSlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckZvbGRlci9bVWlkXS9bUHJvamVjdENvbnRlbnRdLmpzPzAzOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEZpbGVNb2RhbCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9GaWxlTW9kYWxcIlxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoRnVuIH0gZnJvbSAnLi4vLi4vLi4vanMvZmV0Y2hGdW4nO1xuaW1wb3J0IFJlZGlyZWN0SGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9SZWRpcmVjdEhhbmRsZXJcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIFNwYWNlciB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Mb2FkZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Q29udGVudCgpe1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IFVpZCxQcm9qZWN0Q29udGVudCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoPExvYWRlcj48L0xvYWRlcj4pXG4gICAgY29uc3QgW2Zvcm1CdXR0b24sc2V0Rm9ybUJ1dHRvbl0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2FkZEZpbGUsc2V0QWRkRmlsZV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgdG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRva2VuLnZhbHVlKTtcbiAgICBjb25zdCB1aWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVpZC52YWx1ZSk7XG4gICAgY29uc3Qgcm9sZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucm9sZS52YWx1ZSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgXG5cbiAgICAgICAgaWYgKFVpZCA9PSB1aWQgfHwgcm9sZSA9PSAxKSB7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hGdW4oYC91c2VyRm9sZGVyLyR7VWlkfS8ke1Byb2plY3RDb250ZW50fWAsIFwiR0VUXCIsIHt9LCB0b2tlbik7XG4gICAgICAgICAgaWYgKHJlcyA9PT0gNDAxKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9Mb2dpblwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLnJlc3VsdC5tYXAoaXRlbSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgZmllbGRfcHJvZHVjdF9pZDoge2l0ZW0uZmllbGRfcHJvZHVjdF9pZH1cbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdF9pZDoge2l0ZW0ucHJvamVjdF9pZH1cbiAgICAgICAgICAgICAgICAgICAgMSxcbiAgbG9uOiA1MixcbiAgbGF0OiAxMixcbiAgdXRjX29mZnNldDogNSxcbiAgdGlsdDogNDUsXG4gIG9yaWVudGF0aW9uOiAnUycsXG4gIGNvbXBhbnlfcHJvZHVjdF9pZDogMXtpdGVtLmxvbn1cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYXR9XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0udXRjX29mZnNldH1cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aWx0fVxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm9yaWVudGF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbXBhbnlfcHJvZHVjdF9pZH1cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIC8vbWFwIHZpZXdcbiAgICAgICAgICAgICAgICAgIC8vIDxGaWxlTW9kYWwga2V5PXtpdGVtLmlkRmlsZX0gaWRGaWxlPXtpdGVtLmlkRmlsZX0gZmlsZV9uYW1lPXtpdGVtLmZpbGVfbmFtZX0gZmlsZV9kYXRhPXtpdGVtLmZpbGVfZGF0YX0gZmlsZV90eXBlPXtpdGVtLmZpbGVfdHlwZX0gPjwvRmlsZU1vZGFsPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGRhdGEpIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyRm9sZGVyLyR7dWlkfWApO1xuICAgIFxuICAgICAgICAgICAgfVxuICAgIH0pKClcbiAgICB9LCBbcm91dGVyLmlzUmVhZHldKTtcblxuXG4gICAgcmV0dXJuKCBcbiAgICAgICAgPD5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIHtmb3JtQnV0dG9ufVxuICAgICAgICAgICAge2FkZEZpbGV9XG4gICAgICAgIDxDb250YWluZXIgZ2FwPXsyfSBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtkYXRhfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJGaWxlTW9kYWwiLCJMYXlvdXQiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiZmV0Y2hGdW4iLCJSZWRpcmVjdEhhbmRsZXIiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJTcGFjZXIiLCJMb2FkZXIiLCJQcm9qZWN0Q29udGVudCIsInJvdXRlciIsIlVpZCIsInF1ZXJ5IiwiZGF0YSIsInNldERhdGEiLCJmb3JtQnV0dG9uIiwic2V0Rm9ybUJ1dHRvbiIsImFkZEZpbGUiLCJzZXRBZGRGaWxlIiwidG9rZW4iLCJzdGF0ZSIsInZhbHVlIiwidWlkIiwicm9sZSIsImlzUmVhZHkiLCJyZXMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsIm1hcCIsIml0ZW0iLCJkaXYiLCJmaWVsZF9wcm9kdWN0X2lkIiwicHJvamVjdF9pZCIsImxvbiIsImxhdCIsInV0Y19vZmZzZXQiLCJ0aWx0Iiwib3JpZW50YXRpb24iLCJjb21wYW55X3Byb2R1Y3RfaWQiLCJnYXAiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/[ProjectContent].js\n"));

/***/ })

});