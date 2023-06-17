"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userFolder/[Uid]/CreateProduct",{

/***/ "./pages/userFolder/[Uid]/CreateProduct.js":
/*!*************************************************!*\
  !*** ./pages/userFolder/[Uid]/CreateProduct.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction CreateProduct() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid  } = router.query;\n    const [productName, setproductName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [productPeakPower, setproductPeakPower] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tempCoff, setTempCoff] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [systemLoss, setSystemLoss] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.14);\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [high, setHigh] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.role.value);\n    ///uid\n    //token/\n    //role\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (role == 2 || role == 3) {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    //sumbit forma data\n    const handleSubmit = async ()=>{\n        const area = width;\n        // don not change this post\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(\"http://localhost:3001\", \"/\").concat(Uid, \"/createProject\"), {\n            uid,\n            productName,\n            projectDuration\n        }, {\n            headers: {\n                Authorization: token\n            }\n        }).then((res)=>{\n            console.log(res);\n            if (res.status == 200) {\n                alert(\"Product Created Correctly\");\n                router.push(\"/userFolder/\".concat(Uid));\n            }\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    clearable: true,\n                    bordered: true,\n                    labelPlaceholder: \"Pruduct Name\",\n                    required: true,\n                    name: \"ProductName\",\n                    type: \"text\",\n                    value: productName,\n                    onChange: (e)=>setproductName(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"Pruduct Peak Power\",\n                    required: true,\n                    name: \"productPeakPower\",\n                    type: \"number\",\n                    value: productPeakPower,\n                    onChange: (e)=>setproductPeakPower(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"temperature coefficent\",\n                    required: true,\n                    name: \"tempCoff\",\n                    type: \"number\",\n                    value: tempCoff,\n                    onChange: (e)=>setTempCoff(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"system loss\",\n                    min: 0,\n                    max: 1,\n                    step: 0.01,\n                    required: true,\n                    name: \"systemLoss\",\n                    type: \"number\",\n                    value: systemLoss,\n                    onChange: (e)=>setSystemLoss(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"width\",\n                    min: 0,\n                    required: true,\n                    name: \"width\",\n                    type: \"number\",\n                    value: width,\n                    onChange: (e)=>setWidth(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"high\",\n                    min: 0,\n                    required: true,\n                    name: \"high\",\n                    type: \"number\",\n                    value: high,\n                    onChange: (e)=>setHigh(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 77,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, this),\n                \"area: 2.7, width and high nominal_temp: 43\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 83,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    onClick: handleSubmit,\n                    children: \" Send \"\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n            lineNumber: 65,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(CreateProduct, \"fbxsosEjtFWvlk0f4RirYhLwe0w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = CreateProduct;\nvar _c;\n$RefreshReg$(_c, \"CreateProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL0NyZWF0ZVByb2R1Y3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDTDtBQUNXO0FBQ1A7QUFDSztBQUNPO0FBQ1A7QUFFakMsU0FBU1csZ0JBQWU7O0lBRW5DLE1BQU1DLFNBQVNULHNEQUFTQTtJQUN4QixNQUFNLEVBQUVVLElBQUcsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzVCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNnQixrQkFBa0JDLG9CQUFvQixHQUFHakIsK0NBQVFBO0lBQ3hELE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQTtJQUN4QyxNQUFNLENBQUNvQixZQUFZQyxjQUFjLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNzQixPQUFPQyxTQUFTLEdBQUd2QiwrQ0FBUUE7SUFDbEMsTUFBTSxDQUFDd0IsTUFBTUMsUUFBUSxHQUFHekIsK0NBQVFBO0lBRWhDLE1BQU0wQixRQUFRbkIsd0RBQVdBLENBQUMsQ0FBQ29CLFFBQVVBLE1BQU1ELEtBQUssQ0FBQ0UsS0FBSztJQUN0RCxNQUFNQyxNQUFNdEIsd0RBQVdBLENBQUMsQ0FBQ29CLFFBQVVBLE1BQU1FLEdBQUcsQ0FBQ0QsS0FBSztJQUNsRCxNQUFNRSxPQUFPdkIsd0RBQVdBLENBQUMsQ0FBQ29CLFFBQVVBLE1BQU1HLElBQUksQ0FBQ0YsS0FBSztJQUVwRCxNQUFNO0lBQ04sUUFBUTtJQUNSLE1BQU07SUFDTjNCLGdEQUFTQSxDQUFDLElBQUk7UUFDVixJQUFHLENBQUNVLE9BQU9vQixPQUFPLEVBQUU7UUFFdkIsV0FBWTtZQUNULElBQUlELFFBQVEsS0FBS0EsUUFBUSxHQUFHO2dCQUN4Qm5CLE9BQU9xQixJQUFJLENBQUMsZUFBbUIsT0FBSkg7WUFDN0IsQ0FBQztRQUNDO0lBR1IsR0FBRztRQUFDbEIsT0FB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Yzs7Ozs7Ozs7Ozs7OztBQUkzQyxDQUFDO0dBOUV1QnZCOztRQUVMUixrREFBU0E7UUFTVkssb0RBQVdBO1FBQ2JBLG9EQUFXQTtRQUNWQSxvREFBV0E7OztLQWJKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL0NyZWF0ZVByb2R1Y3QuanM/MmFjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgSW5wdXQsIFNwYWNlciB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZmV0Y2hGdW4gfSBmcm9tIFwiLi4vLi4vLi4vanMvZmV0Y2hGdW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpe1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IFVpZCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgY29uc3QgW3Byb2R1Y3ROYW1lLCBzZXRwcm9kdWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtwcm9kdWN0UGVha1Bvd2VyLCBzZXRwcm9kdWN0UGVha1Bvd2VyXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbdGVtcENvZmYsIHNldFRlbXBDb2ZmXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbc3lzdGVtTG9zcywgc2V0U3lzdGVtTG9zc10gPSB1c2VTdGF0ZSgwLjE0KVxuICAgIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtoaWdoLCBzZXRIaWdoXSA9IHVzZVN0YXRlKClcblxuICAgIGNvbnN0IHRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50b2tlbi52YWx1ZSk7XG4gICAgY29uc3QgdWlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51aWQudmFsdWUpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJvbGUudmFsdWUpO1xuICBcbiAgICAvLy91aWRcbiAgICAvL3Rva2VuL1xuICAgIC8vcm9sZVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcblxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChyb2xlID09IDIgfHwgcm9sZSA9PSAzKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL3VzZXJGb2xkZXIvJHt1aWR9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKVxuXG4gICAgXG4gICAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgICAvL3N1bWJpdCBmb3JtYSBkYXRhXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBhcmVhID0gd2lkdGhcbiAgICAgICAvLyBkb24gbm90IGNoYW5nZSB0aGlzIHBvc3RcbiAgICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19OT0RFX1NFUlZFUn0vJHtVaWR9L2NyZWF0ZVByb2plY3RgLCB7dWlkLHByb2R1Y3ROYW1lLHByb2plY3REdXJhdGlvbn0sIHtcbiAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PSAyMDApe1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBDcmVhdGVkIENvcnJlY3RseVwiKVxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdXNlckZvbGRlci8ke1VpZH1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG5cbiAgICAgICAgXG5cbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgICBcbiAgICAgICAgPD5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPElucHV0IGNsZWFyYWJsZSBib3JkZXJlZCBsYWJlbFBsYWNlaG9sZGVyPVwiUHJ1ZHVjdCBOYW1lXCIgcmVxdWlyZWQ9e3RydWV9IG5hbWU9J1Byb2R1Y3ROYW1lJyB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcm9kdWN0TmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRwcm9kdWN0TmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8U3BhY2VyIHk9ezF9IC8+XG4gICAgICAgICAgICA8SW5wdXQgIGJvcmRlcmVkIGxhYmVsUGxhY2Vob2xkZXI9XCJQcnVkdWN0IFBlYWsgUG93ZXJcIiByZXF1aXJlZD17dHJ1ZX0gbmFtZT0ncHJvZHVjdFBlYWtQb3dlcicgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwcm9kdWN0UGVha1Bvd2VyfSBvbkNoYW5nZT17KGUpID0+IHNldHByb2R1Y3RQZWFrUG93ZXIoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPFNwYWNlciB5PXsxfSAvPlxuICAgICAgICAgICAgPElucHV0IGJvcmRlcmVkIGxhYmVsUGxhY2Vob2xkZXI9XCJ0ZW1wZXJhdHVyZSBjb2VmZmljZW50XCIgcmVxdWlyZWQ9e3RydWV9IG5hbWU9J3RlbXBDb2ZmJyB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RlbXBDb2ZmfSBvbkNoYW5nZT17KGUpID0+IHNldFRlbXBDb2ZmKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDxTcGFjZXIgeT17MX0gLz5cbiAgICAgICAgICAgIDxJbnB1dCAgYm9yZGVyZWQgbGFiZWxQbGFjZWhvbGRlcj1cInN5c3RlbSBsb3NzXCIgbWluPXswfSBtYXg9ezF9IHN0ZXA9ezAuMDF9IHJlcXVpcmVkPXt0cnVlfSBuYW1lPSdzeXN0ZW1Mb3NzJyB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3N5c3RlbUxvc3N9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3lzdGVtTG9zcyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8U3BhY2VyIHk9ezF9IC8+XG5cbiAgICAgICAgICAgIDxJbnB1dCAgYm9yZGVyZWQgbGFiZWxQbGFjZWhvbGRlcj1cIndpZHRoXCIgbWluPXswfSByZXF1aXJlZD17dHJ1ZX0gbmFtZT0nd2lkdGgnIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17d2lkdGh9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0V2lkdGgoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPElucHV0ICBib3JkZXJlZCBsYWJlbFBsYWNlaG9sZGVyPVwiaGlnaFwiIG1pbj17MH0gcmVxdWlyZWQ9e3RydWV9IG5hbWU9J2hpZ2gnIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17aGlnaH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRIaWdoKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDxTcGFjZXIgeT17MX0gLz5cbiAgICAgICAgICAgXG4gICAgYXJlYTogMi43LCB3aWR0aCBhbmQgaGlnaFxuICAgIG5vbWluYWxfdGVtcDogNDNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPFNwYWNlciB5PXsxfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PiBTZW5kIDwvQnV0dG9uPiAgIFxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJJbnB1dCIsIlNwYWNlciIsIkJ1dHRvbiIsIkxheW91dCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJmZXRjaEZ1biIsIkNyZWF0ZVByb2R1Y3QiLCJyb3V0ZXIiLCJVaWQiLCJxdWVyeSIsInByb2R1Y3ROYW1lIiwic2V0cHJvZHVjdE5hbWUiLCJwcm9kdWN0UGVha1Bvd2VyIiwic2V0cHJvZHVjdFBlYWtQb3dlciIsInRlbXBDb2ZmIiwic2V0VGVtcENvZmYiLCJzeXN0ZW1Mb3NzIiwic2V0U3lzdGVtTG9zcyIsIndpZHRoIiwic2V0V2lkdGgiLCJoaWdoIiwic2V0SGlnaCIsInRva2VuIiwic3RhdGUiLCJ2YWx1ZSIsInVpZCIsInJvbGUiLCJpc1JlYWR5IiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImFyZWEiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX05PREVfU0VSVkVSIiwicHJvamVjdER1cmF0aW9uIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImFsZXJ0IiwiY2F0Y2giLCJlcnIiLCJjbGVhcmFibGUiLCJib3JkZXJlZCIsImxhYmVsUGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm5hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwieSIsIm1pbiIsIm1heCIsInN0ZXAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/CreateProduct.js\n"));

/***/ })

});