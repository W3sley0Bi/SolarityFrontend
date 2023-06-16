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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddFiles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/fetchFun */ \"./js/fetchFun.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction AddFiles() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Uid  } = router.query;\n    const [folder, setFolder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [folders, setFolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.token.value);\n    const uid = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.uid.value);\n    const role = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.role.value);\n    ///uid\n    //token/\n    //role\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            if (role == 4) {\n                router.push(\"/userFolder/\".concat(uid));\n            }\n        })();\n    }, [\n        router.isReady\n    ]);\n    //sumbit forma data\n    const handleSubmit = async ()=>{\n        const formData = new FormData(); // create a new FormData instance\n        formData.append(\"folder\", folder); // append the folder value\n        // don not change this post\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(\"http://localhost:3001\", \"/\").concat(Uid, \"/addFolder\"), formData, {\n            headers: {\n                Authorization: token\n            }\n        }).then((res)=>{\n            if (res.status == 200) {\n                alert(\"files add correctly\");\n                router.push(\"/userFolder/\".concat(Uid));\n            }\n        }).catch((err)=>console.log(err));\n    };\n    const { getRootProps , getInputProps , isDragActive  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_7__.useDropzone)({\n        onDrop: (acceptedFiles)=>{\n            setFiles(acceptedFiles);\n        },\n        multiple: true,\n        accept: \"image/*, .pdf\"\n    });\n    //.doc, .docx, .xls, .xlsx, .csv\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                    clearable: true,\n                    bordered: true,\n                    labelPlaceholder: \"Project Name\",\n                    helperText: \"Required\",\n                    required: true,\n                    name: \"ProjectName\",\n                    type: \"text\",\n                    value: folder,\n                    onChange: (e)=>setFolder(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                    onClick: handleSubmit,\n                    children: \" Send \"\n                }, void 0, false, {\n                    fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n                    lineNumber: 80,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wesleyobi/Desktop/DWT/DWTProject_MatricularNumber/frontend/pages/userFolder/[Uid]/CreateProject.js\",\n            lineNumber: 77,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(AddFiles, \"kYm7tRZQ1Cjb9CPZQ234Id0KvVA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_dropzone__WEBPACK_IMPORTED_MODULE_7__.useDropzone\n    ];\n});\n_c = AddFiles;\nvar _c;\n$RefreshReg$(_c, \"AddFiles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyRm9sZGVyL1tVaWRdL0NyZWF0ZVByb2plY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBQ0w7QUFDRztBQUNDO0FBQ0U7QUFDRztBQUNPO0FBQ1A7QUFFakMsU0FBU1csV0FBVTs7SUFFOUIsTUFBTUMsU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVUsSUFBRyxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDNUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2dCLE9BQU9DLFNBQVMsR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHbkIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTW9CLFFBQVFiLHdEQUFXQSxDQUFDLENBQUNjLFFBQVVBLE1BQU1ELEtBQUssQ0FBQ0UsS0FBSztJQUN0RCxNQUFNQyxNQUFNaEIsd0RBQVdBLENBQUMsQ0FBQ2MsUUFBVUEsTUFBTUUsR0FBRyxDQUFDRCxLQUFLO0lBQ2xELE1BQU1FLE9BQU9qQix3REFBV0EsQ0FBQyxDQUFDYyxRQUFVQSxNQUFNRyxJQUFJLENBQUNGLEtBQUs7SUFFcEQsTUFBTTtJQUNOLFFBQVE7SUFDUixNQUFNO0lBQ05yQixnREFBU0EsQ0FBQyxJQUFJO1FBQ1YsSUFBRyxDQUFDVSxPQUFPYyxPQUFPLEVBQUU7UUFFdkIsV0FBWTtZQUdULElBQUlELFFBQVEsR0FBRztnQkFFWGIsT0FBT2UsSUFBSSxDQUFDLGVBQW1CLE9BQUpIO1lBQzdCLENBQUM7UUFFQztJQUdSLEdBQUc7UUFBQ1osT0FBT2MsT0FBTztLQUFDO0lBRW5CLG1CQUFtQjtJQUNuQixNQUFNRSxlQUFlLFVBQVk7UUFFN0IsTUFBTUMsV0FBVyxJQUFJQyxZQUFZLGlDQUFpQztRQUNsRUQsU0FBU0UsTUFBTSxDQUFDLFVBQVVoQixTQUFTLDBCQUEwQjtRQUU5RCwyQkFBMkI7UUFDMUJmLGtEQUFVLENBQUMsR0FBMENhLE9BQXZDb0IsdUJBQW1DLEVBQUMsS0FBTyxPQUFKcEIsS0FBSSxlQUFhZ0IsVUFBVTtZQUM1RU8sU0FBUTtnQkFDSkMsZUFBZWhCO1lBRW5CO1FBQ0osR0FDQ2lCLElBQUksQ0FBQ0MsQ0FBQUEsTUFBTTtZQUNSLElBQUdBLElBQUlDLE1BQU0sSUFBSSxLQUFJO2dCQUNqQkMsTUFBTTtnQkFDTjdCLE9BQU9lLElBQUksQ0FBQyxlQUFtQixPQUFKZDtZQUMvQixDQUFDO1FBQ0wsR0FDQzZCLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBT0MsUUFBUUMsR0FBRyxDQUFDRjtJQUk5QjtJQUVBLE1BQU0sRUFBQ0csYUFBWSxFQUFFQyxjQUFhLEVBQUVDLGFBQVksRUFBQyxHQUFHMUMsMkRBQVdBLENBQUM7UUFDNUQyQyxRQUFRQyxDQUFBQSxnQkFBaUI7WUFDckJoQyxTQUFTZ0M7UUFDYjtRQUNBQyxVQUFVLElBQUk7UUFDZEMsUUFBUTtJQUNaO0lBQ0osZ0NBQWdDO0lBQzVCLHFCQUVJO2tCQUNBLDRFQUFDN0MsMERBQU1BOzs4QkFDSCw4REFBQ0gsb0RBQUtBO29CQUFDaUQsU0FBUztvQkFBQ0MsUUFBUTtvQkFBQ0Msa0JBQWlCO29CQUFlQyxZQUFXO29CQUFXQyxVQUFVLElBQUk7b0JBQUVDLE1BQUs7b0JBQWNDLE1BQUs7b0JBQU9wQyxPQUFPUjtvQkFBUTZDLFVBQVUsQ0FBQ0MsSUFBTTdDLFVBQVU2QyxFQUFFQyxNQUFNLENBQUN2QyxLQUFLOzs7Ozs7OEJBRXZMLDhEQUFDbEIscURBQU1BO29CQUFDMEQsU0FBU25DOzhCQUFjOzs7Ozs7Ozs7Ozs7O0FBSTNDLENBQUM7R0F6RXVCakI7O1FBRUxSLGtEQUFTQTtRQUtWSyxvREFBV0E7UUFDYkEsb0RBQVdBO1FBQ1ZBLG9EQUFXQTtRQThDNEJGLHVEQUFXQTs7O0tBdkQzQ0siLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckZvbGRlci9bVWlkXS9DcmVhdGVQcm9qZWN0LmpzPzRiNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoRnVuIH0gZnJvbSBcIi4uLy4uLy4uL2pzL2ZldGNoRnVuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEZpbGVzKCl7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgVWlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCBbZm9sZGVyLCBzZXRGb2xkZXJdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtmb2xkZXJzLCBzZXRGb2xkZXJzXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgdG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRva2VuLnZhbHVlKTtcbiAgICBjb25zdCB1aWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVpZC52YWx1ZSk7XG4gICAgY29uc3Qgcm9sZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucm9sZS52YWx1ZSk7XG4gIFxuICAgIC8vL3VpZFxuICAgIC8vdG9rZW4vXG4gICAgLy9yb2xlXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuXG4gICAgKGFzeW5jICgpID0+IHtcblxuXG4gICAgICAgIGlmIChyb2xlID09IDQpIHtcblxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyRm9sZGVyLyR7dWlkfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSkoKVxuXG4gICAgXG4gICAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgICAvL3N1bWJpdCBmb3JtYSBkYXRhXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7IC8vIGNyZWF0ZSBhIG5ldyBGb3JtRGF0YSBpbnN0YW5jZVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmb2xkZXJcIiwgZm9sZGVyKTsgLy8gYXBwZW5kIHRoZSBmb2xkZXIgdmFsdWVcblxuICAgICAgIC8vIGRvbiBub3QgY2hhbmdlIHRoaXMgcG9zdFxuICAgICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05PREVfU0VSVkVSfS8ke1VpZH0vYWRkRm9sZGVyYCwgZm9ybURhdGEsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcz0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgICAgICAgICBhbGVydChcImZpbGVzIGFkZCBjb3JyZWN0bHlcIilcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3VzZXJGb2xkZXIvJHtVaWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG4gICAgICAgIFxuXG4gICAgfTtcblxuICAgIGNvbnN0IHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZX0gPSB1c2VEcm9wem9uZSh7XG4gICAgICAgIG9uRHJvcDogYWNjZXB0ZWRGaWxlcyA9PiB7XG4gICAgICAgICAgICBzZXRGaWxlcyhhY2NlcHRlZEZpbGVzKVxuICAgICAgICB9LFxuICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICAgICAgYWNjZXB0OiAnaW1hZ2UvKiwgLnBkZicsXG4gICAgfSlcbi8vLmRvYywgLmRvY3gsIC54bHMsIC54bHN4LCAuY3N2XG4gICAgcmV0dXJuKFxuICAgICAgICBcbiAgICAgICAgPD5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxJbnB1dCBjbGVhcmFibGUgYm9yZGVyZWQgbGFiZWxQbGFjZWhvbGRlcj1cIlByb2plY3QgTmFtZVwiIGhlbHBlclRleHQ9XCJSZXF1aXJlZFwiIHJlcXVpcmVkPXt0cnVlfSBuYW1lPSdQcm9qZWN0TmFtZScgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9sZGVyfSBvbkNoYW5nZT17KGUpID0+IHNldEZvbGRlcihlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PiBTZW5kIDwvQnV0dG9uPiAgIFxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJJbnB1dCIsIkJ1dHRvbiIsInVzZURyb3B6b25lIiwiTGF5b3V0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImZldGNoRnVuIiwiQWRkRmlsZXMiLCJyb3V0ZXIiLCJVaWQiLCJxdWVyeSIsImZvbGRlciIsInNldEZvbGRlciIsImZpbGVzIiwic2V0RmlsZXMiLCJmb2xkZXJzIiwic2V0Rm9sZGVycyIsInRva2VuIiwic3RhdGUiLCJ2YWx1ZSIsInVpZCIsInJvbGUiLCJpc1JlYWR5IiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX05PREVfU0VSVkVSIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiYWxlcnQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsIm11bHRpcGxlIiwiYWNjZXB0IiwiY2xlYXJhYmxlIiwiYm9yZGVyZWQiLCJsYWJlbFBsYWNlaG9sZGVyIiwiaGVscGVyVGV4dCIsInJlcXVpcmVkIiwibmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/userFolder/[Uid]/CreateProject.js\n"));

/***/ })

});