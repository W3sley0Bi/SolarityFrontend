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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ showMap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_leaflet_MapContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet/MapContainer */ \"./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet_TileLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet/TileLayer */ \"./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _js_fetchFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/fetchFun */ \"./js/fetchFun.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction showMap(props) {\n    _s();\n    const [searchQ, setSearchQ] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [queryRes, setQueryRes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [foundLocation, setFound] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [firstSearch, setFirstSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const locationCard = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Card, {\n            isPressable: true,\n            isHoverable: true,\n            variant: \"bordered\",\n            css: {\n                mw: \"400px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    children: \"Text\"\n                }, void 0, false, {\n                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this);\n    };\n    const handleSubmit = ()=>{\n        (async ()=>{\n            let query = \"/locationsearch&q=\".concat(encodeURIComponent(searchQ));\n            let res = await (0,_js_fetchFun__WEBPACK_IMPORTED_MODULE_3__.fetchFast)(query, \"GET\");\n            console.log(res[\"result\"][0]);\n            if (res[\"result\"][0] === undefined) {\n                setFound(false);\n                setQueryRes(undefined);\n                setFirstSearch(false);\n            }\n            setQueryRes(res[\"result\"][0]);\n            setFirstSearch(false);\n            setFound(true);\n        })();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Search Locations\"\n            }, void 0, false, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, {\n                x: 2\n            }, void 0, false, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                placeholder: \"Address Search\",\n                onChange: (event)=>{\n                    setSearchQ(event.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, {\n                y: 1.2\n            }, void 0, false, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                className: \"element\",\n                onClick: handleSubmit,\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, {\n                y: 1.2\n            }, void 0, false, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this),\n            queryRes === undefined && !foundLocation && !firstSearch ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                blockquote: true,\n                children: \"No Data Found\"\n            }, void 0, false, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 62,\n                columnNumber: 71\n            }, this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet_MapContainer__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {\n                style: {\n                    width: \"90%\",\n                    height: \"70vh\",\n                    marginTop: \"4vh\",\n                    zindex: \"1\"\n                },\n                center: [\n                    50,\n                    12\n                ],\n                zoom: 13,\n                scrollWheelZoom: false,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet_TileLayer__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, this),\n                    foundLocation && queryRes != undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Marker, {\n                        position: [\n                            queryRes[\"position\"][\"lat\"],\n                            queryRes[\"position\"][\"long\"]\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Popup, {\n                            children: [\n                                \"A pretty CSS3 popup. \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 38\n                                }, this),\n                                \" Easily customizable.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n                lineNumber: 64,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/salehghrayeb/DWT/FrontEnd/SolarityFrontend/components/Map.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(showMap, \"qRdLzugrYct+/n2sy5A322OhsdQ=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNDb250ZW50IjpbImltcG9ydCB7IE1hcENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1sZWFmbGV0L01hcENvbnRhaW5lclwiO1xuaW1wb3J0IHsgVGlsZUxheWVyIH0gZnJvbSBcInJlYWN0LWxlYWZsZXQvVGlsZUxheWVyXCI7XG5pbXBvcnQgeyB1c2VNYXAgfSBmcm9tIFwicmVhY3QtbGVhZmxldC9ob29rc1wiO1xuaW1wb3J0IHsgTWFya2VyIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBMaXN0VmlldyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgZmV0Y2hGYXN0IH0gZnJvbSBcIi4uL2pzL2ZldGNoRnVuXCI7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgeyBTcGFjZXIgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLFRleHQgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd01hcChwcm9wcykge1xuICBjb25zdCBbc2VhcmNoUSwgc2V0U2VhcmNoUV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcXVlcnlSZXMsIHNldFF1ZXJ5UmVzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtmb3VuZExvY2F0aW9uLCBzZXRGb3VuZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2ZpcnN0U2VhcmNoLCBzZXRGaXJzdFNlYXJjaF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IGxvY2F0aW9uQ2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKDxDYXJkIGlzUHJlc3NhYmxlIGlzSG92ZXJhYmxlIHZhcmlhbnQ9XCJib3JkZXJlZFwiIGNzcz17eyBtdzogXCI0MDBweFwiIH19PlxuICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgPFRleHQ+VGV4dDwvVGV4dD5cbiAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgIDwvQ2FyZD4pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHF1ZXJ5ID0gYC9sb2NhdGlvbnNlYXJjaCZxPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaFEpfWA7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2hGYXN0KHF1ZXJ5LCBcIkdFVFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc1tcInJlc3VsdFwiXVswXSk7XG4gICAgICBpZihyZXNbXCJyZXN1bHRcIl1bMF0gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHNldEZvdW5kKGZhbHNlKVxuICAgICAgICBzZXRRdWVyeVJlcyh1bmRlZmluZWQpO1xuICAgICAgICBzZXRGaXJzdFNlYXJjaChmYWxzZSlcbiAgICAgIH1cbiAgICAgIHNldFF1ZXJ5UmVzKHJlc1tcInJlc3VsdFwiXVswXSk7XG4gICAgICBzZXRGaXJzdFNlYXJjaChmYWxzZSlcbiAgICAgIHNldEZvdW5kKHRydWUpXG4gICAgfSkoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+U2VhcmNoIExvY2F0aW9uczwvaDE+XG4gICAgICA8U3BhY2VyIHg9ezJ9IC8+XG4gICAgICA8SW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIFNlYXJjaFwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBzZXRTZWFyY2hRKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICA+PC9JbnB1dD5cblxuICAgICAgPFNwYWNlciB5PXsxLjJ9IC8+XG5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZWxlbWVudFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIFNlYXJjaFxuICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxTcGFjZXIgeT17MS4yfS8+XG4gICAgICAgIHsocXVlcnlSZXMgPT09IHVuZGVmaW5lZCAmJiAhZm91bmRMb2NhdGlvbiAmJiAhZmlyc3RTZWFyY2gpID8gPFRleHQgYmxvY2txdW90ZT5ObyBEYXRhIEZvdW5kPC9UZXh0PiA6IFwiXCJ9XG5cbiAgICAgICAgICA8TWFwQ29udGFpbmVyXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogXCI5MCVcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjcwdmhcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjR2aFwiLFxuICAgICAgICAgICAgICB6aW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNlbnRlcj17WzUwLCAxMl19XG4gICAgICAgICAgICB6b29tPXsxM31cbiAgICAgICAgICAgIHNjcm9sbFdoZWVsWm9vbT17ZmFsc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRpbGVMYXllclxuICAgICAgICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgICAgIC8+eyBmb3VuZExvY2F0aW9uICYmIHF1ZXJ5UmVzICE9IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgICAgIDxNYXJrZXIgcG9zaXRpb249e1txdWVyeVJlc1tcInBvc2l0aW9uXCJdW1wibGF0XCJdLCBxdWVyeVJlc1tcInBvc2l0aW9uXCJdW1wibG9uZ1wiXV19PlxuICAgICAgICAgICAgICA8UG9wdXA+XG4gICAgICAgICAgICAgICAgQSBwcmV0dHkgQ1NTMyBwb3B1cC4gPGJyIC8+IEVhc2lseSBjdXN0b21pemFibGUuXG4gICAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICAgICA8L01hcmtlcj59XG4gICAgICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwidXNlTWFwIiwiTWFya2VyIiwiUG9wdXAiLCJ1c2VTdGF0ZSIsIkxpc3RWaWV3IiwiTGF5b3V0IiwiQnV0dG9uIiwiZmV0Y2hGYXN0IiwiR3JpZCIsIlNwYWNlciIsIklucHV0IiwiQ2FyZCIsIlRleHQiLCJzaG93TWFwIiwicHJvcHMiLCJzZWFyY2hRIiwic2V0U2VhcmNoUSIsInF1ZXJ5UmVzIiwic2V0UXVlcnlSZXMiLCJmb3VuZExvY2F0aW9uIiwic2V0Rm91bmQiLCJmaXJzdFNlYXJjaCIsInNldEZpcnN0U2VhcmNoIiwibG9jYXRpb25DYXJkIiwiaXNQcmVzc2FibGUiLCJpc0hvdmVyYWJsZSIsInZhcmlhbnQiLCJjc3MiLCJtdyIsIkJvZHkiLCJoYW5kbGVTdWJtaXQiLCJxdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJkaXYiLCJoMSIsIngiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInkiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiYmxvY2txdW90ZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJ6aW5kZXgiLCJjZW50ZXIiLCJ6b29tIiwic2Nyb2xsV2hlZWxab29tIiwiYXR0cmlidXRpb24iLCJ1cmwiLCJwb3NpdGlvbiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Map.js\n"));

/***/ })

});