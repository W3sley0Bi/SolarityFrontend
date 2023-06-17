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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction CreateProduct() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid  } = router.query;\n    const [productName, setproductName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [productPeakPower, setproductPeakPower] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tempCoff, setTempCoff] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [systemLoss, setSystemLoss] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.14);\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.14);\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.role.value);\n    ///uid\n    //token/\n    //role\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (role == 2 || role == 3) {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    //sumbit forma data\n    const handleSubmit = async ()=>{\n        // don not change this post\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(\"http://localhost:3001\", \"/\").concat(Uid, \"/createProject\"), {\n            uid,\n            productName,\n            projectDuration\n        }, {\n            headers: {\n                Authorization: token\n            }\n        }).then((res)=>{\n            console.log(res);\n            if (res.status == 200) {\n                alert(\"Product Created Correctly\");\n                router.push(\"/userFolder/\".concat(Uid));\n            }\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    clearable: true,\n                    bordered: true,\n                    labelPlaceholder: \"Pruduct Name\",\n                    required: true,\n                    name: \"ProductName\",\n                    type: \"text\",\n                    value: productName,\n                    onChange: (e)=>setproductName(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"Pruduct Peak Power\",\n                    required: true,\n                    name: \"productPeakPower\",\n                    type: \"number\",\n                    value: productPeakPower,\n                    onChange: (e)=>setproductPeakPower(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"temperature coefficent\",\n                    required: true,\n                    name: \"tempCoff\",\n                    type: \"number\",\n                    value: tempCoff,\n                    onChange: (e)=>setTempCoff(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"system loss\",\n                    min: 0,\n                    max: 1,\n                    step: 0.01,\n                    required: true,\n                    name: \"systemLoss\",\n                    type: \"number\",\n                    value: systemLoss,\n                    onChange: (e)=>setSystemLoss(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"width\",\n                    min: 0,\n                    required: true,\n                    name: \"width\",\n                    type: \"number\",\n                    value: width,\n                    onChange: (e)=>setWidth(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                    bordered: true,\n                    labelPlaceholder: \"high\",\n                    min: 0,\n                    required: true,\n                    name: \"high\",\n                    type: \"number\",\n                    value: high,\n                    onChange: (e)=>setHhigh(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 77,\n                    columnNumber: 13\n                }, this),\n                \"area: 2.7, width and high nominal_temp: 43\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {\n                    y: 1\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 82,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    onClick: handleSubmit,\n                    children: \" Send \"\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n                    lineNumber: 83,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProduct.js\",\n            lineNumber: 64,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(CreateProduct, \"Hlqs7wF7OH9iJm4hjAEz1o1zj70=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = CreateProduct;\nvar _c;\n$RefreshReg$(_c, \"CreateProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL0NyZWF0ZVByb2R1Y3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDTDtBQUNXO0FBQ1A7QUFDSztBQUNPO0FBQ1A7QUFFakMsU0FBU1csZ0JBQWU7O0lBRW5DLE1BQU1DLFNBQVNULHNEQUFTQTtJQUN4QixNQUFNLEVBQUVVLElBQUcsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzVCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNnQixrQkFBa0JDLG9CQUFvQixHQUFHakIsK0NBQVFBO0lBQ3hELE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQTtJQUN4QyxNQUFNLENBQUNvQixZQUFZQyxjQUFjLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNzQixPQUFPQyxTQUFTLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNd0IsUUFBUWpCLHdEQUFXQSxDQUFDLENBQUNrQixRQUFVQSxNQUFNRCxLQUFLLENBQUNFLEtBQUs7SUFDdEQsTUFBTUMsTUFBTXBCLHdEQUFXQSxDQUFDLENBQUNrQixRQUFVQSxNQUFNRSxHQUFHLENBQUNELEtBQUs7SUFDbEQsTUFBTUUsT0FBT3JCLHdEQUFXQSxDQUFDLENBQUNrQixRQUFVQSxNQUFNRyxJQUFJLENBQUNGLEtBQUs7SUFFcEQsTUFBTTtJQUNOLFFBQVE7SUFDUixNQUFNO0lBQ056QixnREFBU0EsQ0FBQyxJQUFJO1FBQ1YsSUFBRyxDQUFDVSxPQUFPa0IsT0FBTyxFQUFFO1FBRXZCLFdBQVk7WUFDVCxJQUFJRCxRQUFRLEtBQUtBLFFBQVEsR0FBRztnQkFDeEJqQixPQUFPbUIsSUFBSSxDQUFDLGVBQW1CLE9BQUpIO1lBQzdCLENBQUM7UUFDQztJQUdSLEdBQUc7UUFBQ2hCLE9BQU9rQixPQUFPO0tBQUM7SUFFbkIsbUJBQW1CO0lBQ25CLE1BQU1F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QTtRQUNiQSxvREFBV0E7UUFDVkEsb0RBQVdBOzs7S0FaSkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckZvbGRlci9bVWlkXS9DcmVhdGVQcm9kdWN0LmpzPzJhYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IElucHV0LCBTcGFjZXIgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoRnVuIH0gZnJvbSBcIi4uLy4uLy4uL2pzL2ZldGNoRnVuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2R1Y3QoKXtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBVaWQgfSA9IHJvdXRlci5xdWVyeVxuICAgIGNvbnN0IFtwcm9kdWN0TmFtZSwgc2V0cHJvZHVjdE5hbWVdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbcHJvZHVjdFBlYWtQb3dlciwgc2V0cHJvZHVjdFBlYWtQb3dlcl0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3RlbXBDb2ZmLCBzZXRUZW1wQ29mZl0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3N5c3RlbUxvc3MsIHNldFN5c3RlbUxvc3NdID0gdXNlU3RhdGUoMC4xNClcbiAgICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDAuMTQpXG5cbiAgICBjb25zdCB0b2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudG9rZW4udmFsdWUpO1xuICAgIGNvbnN0IHVpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudWlkLnZhbHVlKTtcbiAgICBjb25zdCByb2xlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yb2xlLnZhbHVlKTtcbiAgXG4gICAgLy8vdWlkXG4gICAgLy90b2tlbi9cbiAgICAvL3JvbGVcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG5cbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAocm9sZSA9PSAyIHx8IHJvbGUgPT0gMykge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyRm9sZGVyLyR7dWlkfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKClcblxuICAgIFxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gICAgLy9zdW1iaXQgZm9ybWEgZGF0YVxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgIC8vIGRvbiBub3QgY2hhbmdlIHRoaXMgcG9zdFxuICAgICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05PREVfU0VSVkVSfS8ke1VpZH0vY3JlYXRlUHJvamVjdGAsIHt1aWQscHJvZHVjdE5hbWUscHJvamVjdER1cmF0aW9ufSwge1xuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09IDIwMCl7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IENyZWF0ZWQgQ29ycmVjdGx5XCIpXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyRm9sZGVyLyR7VWlkfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblxuICAgICAgICBcblxuICAgIH07XG5cbiAgICByZXR1cm4oXG4gICAgICAgIFxuICAgICAgICA8PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8SW5wdXQgY2xlYXJhYmxlIGJvcmRlcmVkIGxhYmVsUGxhY2Vob2xkZXI9XCJQcnVkdWN0IE5hbWVcIiByZXF1aXJlZD17dHJ1ZX0gbmFtZT0nUHJvZHVjdE5hbWUnIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Byb2R1Y3ROYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldHByb2R1Y3ROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDxTcGFjZXIgeT17MX0gLz5cbiAgICAgICAgICAgIDxJbnB1dCAgYm9yZGVyZWQgbGFiZWxQbGFjZWhvbGRlcj1cIlBydWR1Y3QgUGVhayBQb3dlclwiIHJlcXVpcmVkPXt0cnVlfSBuYW1lPSdwcm9kdWN0UGVha1Bvd2VyJyB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3Byb2R1Y3RQZWFrUG93ZXJ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0cHJvZHVjdFBlYWtQb3dlcihlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8U3BhY2VyIHk9ezF9IC8+XG4gICAgICAgICAgICA8SW5wdXQgYm9yZGVyZWQgbGFiZWxQbGFjZWhvbGRlcj1cInRlbXBlcmF0dXJlIGNvZWZmaWNlbnRcIiByZXF1aXJlZD17dHJ1ZX0gbmFtZT0ndGVtcENvZmYnIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGVtcENvZmZ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGVtcENvZmYoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPFNwYWNlciB5PXsxfSAvPlxuICAgICAgICAgICAgPElucHV0ICBib3JkZXJlZCBsYWJlbFBsYWNlaG9sZGVyPVwic3lzdGVtIGxvc3NcIiBtaW49ezB9IG1heD17MX0gc3RlcD17MC4wMX0gcmVxdWlyZWQ9e3RydWV9IG5hbWU9J3N5c3RlbUxvc3MnIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17c3lzdGVtTG9zc30gb25DaGFuZ2U9eyhlKSA9PiBzZXRTeXN0ZW1Mb3NzKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDxTcGFjZXIgeT17MX0gLz5cblxuICAgICAgICAgICAgPElucHV0ICBib3JkZXJlZCBsYWJlbFBsYWNlaG9sZGVyPVwid2lkdGhcIiBtaW49ezB9IHJlcXVpcmVkPXt0cnVlfSBuYW1lPSd3aWR0aCcgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt3aWR0aH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRXaWR0aChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8SW5wdXQgIGJvcmRlcmVkIGxhYmVsUGxhY2Vob2xkZXI9XCJoaWdoXCIgbWluPXswfSByZXF1aXJlZD17dHJ1ZX0gbmFtZT0naGlnaCcgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtoaWdofSBvbkNoYW5nZT17KGUpID0+IHNldEhoaWdoKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDxTcGFjZXIgeT17MX0gLz5cbiAgICAgICAgICAgXG4gICAgYXJlYTogMi43LCB3aWR0aCBhbmQgaGlnaFxuICAgIG5vbWluYWxfdGVtcDogNDNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPFNwYWNlciB5PXsxfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PiBTZW5kIDwvQnV0dG9uPiAgIFxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJJbnB1dCIsIlNwYWNlciIsIkJ1dHRvbiIsIkxheW91dCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJmZXRjaEZ1biIsIkNyZWF0ZVByb2R1Y3QiLCJyb3V0ZXIiLCJVaWQiLCJxdWVyeSIsInByb2R1Y3ROYW1lIiwic2V0cHJvZHVjdE5hbWUiLCJwcm9kdWN0UGVha1Bvd2VyIiwic2V0cHJvZHVjdFBlYWtQb3dlciIsInRlbXBDb2ZmIiwic2V0VGVtcENvZmYiLCJzeXN0ZW1Mb3NzIiwic2V0U3lzdGVtTG9zcyIsIndpZHRoIiwic2V0V2lkdGgiLCJ0b2tlbiIsInN0YXRlIiwidmFsdWUiLCJ1aWQiLCJyb2xlIiwiaXNSZWFkeSIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX05PREVfU0VSVkVSIiwicHJvamVjdER1cmF0aW9uIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImFsZXJ0IiwiY2F0Y2giLCJlcnIiLCJjbGVhcmFibGUiLCJib3JkZXJlZCIsImxhYmVsUGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm5hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwieSIsIm1pbiIsIm1heCIsInN0ZXAiLCJoaWdoIiwic2V0SGhpZ2giLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/CreateProduct.js\n"));

/***/ })

});