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

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ showMap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_leaflet_MapContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet/MapContainer */ \"./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet_TileLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet/TileLayer */ \"./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/fetchFun */ \"./js/fetchFun.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction showMap(props) {\n    _s();\n    const [searchQ, setSearchQ] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleSubmit = ()=>{\n        let query = \"/locationsearch?q=\".concat(encodeURIComponent(searchQ));\n        let res = (0,_js_fetchFun__WEBPACK_IMPORTED_MODULE_3__.fetchFast)(\"/locationsearch?q=\" + query, \"GET\");\n        console.log(res);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            justifyContent: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Search Locations //\",\n                    searchQ\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (event)=>{\n                    setSearchQ(event.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                className: \"element\",\n                onClick: handleSubmit,\n                children: \" Register \"\n            }, void 0, false, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet_MapContainer__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {\n                style: {\n                    width: \"90%\",\n                    height: \"70vh\",\n                    marginTop: \"4vh\",\n                    zindex: \"1\"\n                },\n                center: [\n                    50,\n                    12\n                ],\n                zoom: 13,\n                scrollWheelZoom: false,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet_TileLayer__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Marker, {\n                        position: [\n                            50,\n                            12\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Popup, {\n                            children: [\n                                \"A pretty CSS3 popup. \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 30\n                                }, this),\n                                \" Easily customizable.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                            lineNumber: 32,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            \",\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n        lineNumber: 22,\n        columnNumber: 13\n    }, this);\n}\n_s(showMap, \"OkiS6COJppCGmI30NrbazD9xKxo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ047QUFDUDtBQUNOO0FBQ0Q7QUFDTDtBQUNVO0FBQ0M7QUFDUztBQUdyQyxTQUFTVSxRQUFRQyxLQUFLLEVBQUU7O0lBRW5DLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUE7SUFFdEMsTUFBTVMsZUFBZSxJQUFNO1FBQ3ZCLElBQUlDLFFBQVEscUJBQWlELE9BQTVCQyxtQkFBbUJKO1FBQ3BELElBQUlLLE1BQU1ULHVEQUFTQSxDQUFDLHVCQUFxQk8sT0FBTztRQUNoREcsUUFBUUMsR0FBRyxDQUFDRjtJQUNoQjtJQUVBLHFCQUFRLDhEQUFDRztRQUFJQyxPQUFPO1lBQUNDLGdCQUFlO1FBQVE7OzBCQUN4Qyw4REFBQ0M7O29CQUFHO29CQUFvQlg7Ozs7Ozs7MEJBQ3hCLDhEQUFDWTtnQkFBTUMsVUFBVyxDQUFDQyxRQUFVO29CQUFDYixXQUFXYSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7Z0JBQUM7Ozs7OzswQkFDNUQsOERBQUNyQixxREFBTUE7Z0JBQUNzQixXQUFVO2dCQUFVQyxTQUFTaEI7MEJBQWM7Ozs7OzswQkFDbkQsOERBQUNkLG9FQUFZQTtnQkFBQ3FCLE9BQU87b0JBQUNVLE9BQU87b0JBQU9DLFFBQVE7b0JBQVFDLFdBQVc7b0JBQU9DLFFBQU87Z0JBQUc7Z0JBQUdDLFFBQVE7b0JBQUM7b0JBQUc7aUJBQUc7Z0JBQUVDLE1BQU07Z0JBQUlDLGlCQUFpQixLQUFLOztrQ0FDcEksOERBQUNwQyw4REFBU0E7d0JBQ1pxQyxhQUFZO3dCQUNaQyxLQUFJOzs7Ozs7a0NBRU4sOERBQUNwQyxpREFBTUE7d0JBQUNxQyxVQUFVOzRCQUFDOzRCQUFHO3lCQUFHO2tDQUN2Qiw0RUFBQ3BDLGdEQUFLQTs7Z0NBQUM7OENBQ2dCLDhEQUFDcUM7Ozs7O2dDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHbEI7Ozs7Ozs7QUFJakIsQ0FBQztHQTVCdUIvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcC5qcz9lNTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWxlYWZsZXQvTWFwQ29udGFpbmVyJ1xuaW1wb3J0IHsgVGlsZUxheWVyIH0gZnJvbSAncmVhY3QtbGVhZmxldC9UaWxlTGF5ZXInXG5pbXBvcnQgeyB1c2VNYXAgfSBmcm9tICdyZWFjdC1sZWFmbGV0L2hvb2tzJ1xuaW1wb3J0IHsgTWFya2VyIH0gZnJvbSAncmVhY3QtbGVhZmxldCdcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAncmVhY3QtbGVhZmxldCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgZmV0Y2hGYXN0LCBmZXRjaEZ1biB9IGZyb20gJy4uL2pzL2ZldGNoRnVuJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dNYXAocHJvcHMpIHtcblxuICAgIGNvbnN0IFtzZWFyY2hRLCBzZXRTZWFyY2hRXSA9IHVzZVN0YXRlKClcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gYC9sb2NhdGlvbnNlYXJjaD9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaFEpfWBcbiAgICAgICAgbGV0IHJlcyA9IGZldGNoRmFzdCgnL2xvY2F0aW9uc2VhcmNoP3E9JytxdWVyeSwgJ0dFVCcpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICB9XG5cbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PlxuICAgICAgICA8aDE+U2VhcmNoIExvY2F0aW9ucyAvL3tzZWFyY2hRfTwvaDE+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KChldmVudCkgPT4ge3NldFNlYXJjaFEoZXZlbnQudGFyZ2V0LnZhbHVlKX0pfT48L2lucHV0PlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImVsZW1lbnRcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PiBSZWdpc3RlciA8L0J1dHRvbj5cbiAgICAgICAgPE1hcENvbnRhaW5lciBzdHlsZT17e3dpZHRoOiBcIjkwJVwiLCBoZWlnaHQ6IFwiNzB2aFwiLCBtYXJnaW5Ub3A6IFwiNHZoXCIsIHppbmRleDpcIjFcIn19IGNlbnRlcj17WzUwLDEyXX0gem9vbT17MTN9IHNjcm9sbFdoZWVsWm9vbT17ZmFsc2V9PlxuICAgICAgICA8VGlsZUxheWVyXG4gICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICB1cmw9XCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiXG4gICAgLz5cbiAgICA8TWFya2VyIHBvc2l0aW9uPXtbNTAsMTJdfT5cbiAgICAgIDxQb3B1cD5cbiAgICAgICAgQSBwcmV0dHkgQ1NTMyBwb3B1cC4gPGJyIC8+IEVhc2lseSBjdXN0b21pemFibGUuXG4gICAgICA8L1BvcHVwPlxuICAgIDwvTWFya2VyPlxuICA8L01hcENvbnRhaW5lcj4sXG4gICAgPC9kaXY+KTtcblxuXG59Il0sIm5hbWVzIjpbIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsInVzZU1hcCIsIk1hcmtlciIsIlBvcHVwIiwidXNlU3RhdGUiLCJMYXlvdXQiLCJCdXR0b24iLCJmZXRjaEZhc3QiLCJmZXRjaEZ1biIsInNob3dNYXAiLCJwcm9wcyIsInNlYXJjaFEiLCJzZXRTZWFyY2hRIiwiaGFuZGxlU3VibWl0IiwicXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsImgxIiwiaW5wdXQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJ6aW5kZXgiLCJjZW50ZXIiLCJ6b29tIiwic2Nyb2xsV2hlZWxab29tIiwiYXR0cmlidXRpb24iLCJ1cmwiLCJwb3NpdGlvbiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Map.js\n"));

/***/ })

});