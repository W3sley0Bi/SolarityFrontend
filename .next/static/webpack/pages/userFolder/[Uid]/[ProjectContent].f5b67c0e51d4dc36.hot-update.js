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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FileModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/FileModal */ \"./components/FileModal.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n/* harmony import */ var _components_RedirectHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/RedirectHandler */ \"./components/RedirectHandler.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Loader */ \"./components/Loader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ProjectContent() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid , ProjectContent  } = router.query;\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n        lineNumber: 15,\n        columnNumber: 38\n    }, this));\n    const [formButton, setFormButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [addFile, setAddFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.role.value);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (Uid == uid || role == 1) {\n                const res = await (0,_js_fetchFun__WEBPACK_IMPORTED_MODULE_6__.fetchFun)(\"/userFolder/\".concat(Uid, \"/\").concat(ProjectContent), \"GET\", {}, token);\n                if (res === 401) {\n                    router.push(\"/Login\");\n                } else {\n                    console.log(res);\n                    const data = res.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this));\n                    setData(data);\n                }\n            } else {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                formButton,\n                addFile,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.Container, {\n                    gap: 2,\n                    style: {\n                        flexDirection: \"column\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        data\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/[ProjectContent].js\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(ProjectContent, \"O50kInCVPxBz5zpnLBjgbfFS0mo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = ProjectContent;\nvar _c;\n$RefreshReg$(_c, \"ProjectContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL1tQcm9qZWN0Q29udGVudF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNMO0FBQ2M7QUFDTDtBQUNPO0FBQ1A7QUFDa0I7QUFDRjtBQUNqQjtBQUVoQyxTQUFTYyxpQkFBZ0I7O0lBRXBDLE1BQU1DLFNBQVNiLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVjLElBQUcsRUFBQ0YsZUFBYyxFQUFFLEdBQUdDLE9BQU9FLEtBQUs7SUFDM0MsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUduQiwrQ0FBUUEsZUFBQyw4REFBQ2EsMERBQU1BOzs7OztJQUN4QyxNQUFNLENBQUNPLFlBQVdDLGNBQWMsR0FBR3JCLCtDQUFRQTtJQUMzQyxNQUFNLENBQUNzQixTQUFRQyxXQUFXLEdBQUd2QiwrQ0FBUUE7SUFDckMsTUFBTXdCLFFBQVFuQix3REFBV0EsQ0FBQyxDQUFDb0IsUUFBVUEsTUFBTUQsS0FBSyxDQUFDRSxLQUFLO0lBQ3RELE1BQU1DLE1BQU10Qix3REFBV0EsQ0FBQyxDQUFDb0IsUUFBVUEsTUFBTUUsR0FBRyxDQUFDRCxLQUFLO0lBQ2xELE1BQU1FLE9BQU92Qix3REFBV0EsQ0FBQyxDQUFDb0IsUUFBVUEsTUFBTUcsSUFBSSxDQUFDRixLQUFLO0lBR3BEekIsZ0RBQVNBLENBQUMsSUFBSTtRQUNWLElBQUcsQ0FBQ2MsT0FBT2MsT0FBTyxFQUFFO1FBQ3ZCLFdBQVk7WUFHVCxJQUFJYixPQUFPVyxPQUFPQyxRQUFRLEdBQUc7Z0JBQzNCLE1BQU1FLE1BQU0sTUFBTXZCLHNEQUFRQSxDQUFDLGVBQXNCTyxPQUFQRSxLQUFJLEtBQWtCLE9BQWZGLGlCQUFrQixPQUFPLENBQUMsR0FBR1U7Z0JBQzlFLElBQUlNLFFBQVEsS0FBSztvQkFDZmYsT0FBT2dCLElBQUksQ0FBQztnQkFDZCxPQUFPO29CQUNEQyxRQUFRQyxHQUFHLENBQUNIO29CQUNaLE1BQU1aLE9BQU9ZLElBQUlJLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ2pCLDhEQUFDQzs7Ozs7b0JBTURqQixRQUFRRDtnQkFFWixDQUFDO1lBRUwsT0FBTTtnQkFDRkgsT0FBT2dCLElBQUksQ0FBQyxlQUFtQixPQUFKSjtZQUUvQixDQUFDO1FBQ1Q7SUFDQSxHQUFHO1FBQUNaLE9BQU9jLE9BQU87S0FBQztJQUduQixxQkFDSTtrQkFDQSw0RUFBQ3pCLDBEQUFNQTs7Z0JBQ0ZnQjtnQkFDQUU7OEJBQ0wsOERBQUNiLHdEQUFTQTtvQkFBQzRCLEtBQUs7b0JBQUdDLE9BQU87d0JBQUVDLGVBQWU7b0JBQVM7O3NDQUNsRCw4REFBQ0M7Ozs7O3dCQUNBdEI7Ozs7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQztHQXREdUJKOztRQUVMWixrREFBU0E7UUFLVkcsb0RBQVdBO1FBQ2JBLG9EQUFXQTtRQUNWQSxvREFBV0E7OztLQVRKUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL1tQcm9qZWN0Q29udGVudF0uanM/MDM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgRmlsZU1vZGFsIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0ZpbGVNb2RhbFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZmV0Y2hGdW4gfSBmcm9tICcuLi8uLi8uLi9qcy9mZXRjaEZ1bic7XG5pbXBvcnQgUmVkaXJlY3RIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1JlZGlyZWN0SGFuZGxlclwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgU3BhY2VyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xvYWRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RDb250ZW50KCl7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgVWlkLFByb2plY3RDb250ZW50IH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSg8TG9hZGVyPjwvTG9hZGVyPilcbiAgICBjb25zdCBbZm9ybUJ1dHRvbixzZXRGb3JtQnV0dG9uXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbYWRkRmlsZSxzZXRBZGRGaWxlXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCB0b2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudG9rZW4udmFsdWUpO1xuICAgIGNvbnN0IHVpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudWlkLnZhbHVlKTtcbiAgICBjb25zdCByb2xlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yb2xlLnZhbHVlKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBcblxuICAgICAgICBpZiAoVWlkID09IHVpZCB8fCByb2xlID09IDEpIHtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEZ1bihgL3VzZXJGb2xkZXIvJHtVaWR9LyR7UHJvamVjdENvbnRlbnR9YCwgXCJHRVRcIiwge30sIHRva2VuKTtcbiAgICAgICAgICBpZiAocmVzID09PSA0MDEpIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL0xvZ2luXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMubWFwKGl0ZW0gPT4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAvL21hcCB2aWV3XG4gICAgICAgICAgICAgICAgICAvLyA8RmlsZU1vZGFsIGtleT17aXRlbS5pZEZpbGV9IGlkRmlsZT17aXRlbS5pZEZpbGV9IGZpbGVfbmFtZT17aXRlbS5maWxlX25hbWV9IGZpbGVfZGF0YT17aXRlbS5maWxlX2RhdGF9IGZpbGVfdHlwZT17aXRlbS5maWxlX3R5cGV9ID48L0ZpbGVNb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShkYXRhKSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdXNlckZvbGRlci8ke3VpZH1gKTtcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICB9KSgpXG4gICAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cblxuICAgIHJldHVybiggXG4gICAgICAgIDw+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICB7Zm9ybUJ1dHRvbn1cbiAgICAgICAgICAgIHthZGRGaWxlfVxuICAgICAgICA8Q29udGFpbmVyIGdhcD17Mn0gc3R5bGU9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7ZGF0YX1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiRmlsZU1vZGFsIiwiTGF5b3V0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImZldGNoRnVuIiwiUmVkaXJlY3RIYW5kbGVyIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiU3BhY2VyIiwiTG9hZGVyIiwiUHJvamVjdENvbnRlbnQiLCJyb3V0ZXIiLCJVaWQiLCJxdWVyeSIsImRhdGEiLCJzZXREYXRhIiwiZm9ybUJ1dHRvbiIsInNldEZvcm1CdXR0b24iLCJhZGRGaWxlIiwic2V0QWRkRmlsZSIsInRva2VuIiwic3RhdGUiLCJ2YWx1ZSIsInVpZCIsInJvbGUiLCJpc1JlYWR5IiwicmVzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwiZGl2IiwiZ2FwIiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/[ProjectContent].js\n"));

/***/ })

});