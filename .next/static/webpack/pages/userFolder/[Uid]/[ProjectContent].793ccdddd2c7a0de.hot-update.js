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

/***/ "./js/fetchFun.js":
/*!************************!*\
  !*** ./js/fetchFun.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchFast\": function() { return /* binding */ fetchFast; },\n/* harmony export */   \"fetchFun\": function() { return /* binding */ fetchFun; }\n/* harmony export */ });\n// cambaire tutte le get in post poi\n\nconst fetchFun = async (url, method, body, token)=>{\n    let res;\n    switch(method){\n        case \"GET\":\n            res = await fetch(\"\".concat(\"http://localhost:3001\").concat(url), {\n                method: \"\".concat(method),\n                headers: {\n                    authorization: token\n                }\n            });\n            break;\n        case \"POST\":\n            //check here the behaviur if you send files\n            res = await fetch(\"\".concat(\"http://localhost:3001\").concat(url), {\n                method: \"\".concat(method),\n                headers: {\n                    authorization: token,\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(body)\n            });\n            break;\n        case \"DELETE\":\n            break;\n        case \"PUT\":\n            break;\n        default:\n            break;\n    }\n    if (!res.ok) {\n        //  if (res.status === 401) {\n        //   router.push(\"/Login\");\n        //   return\n        // }\n        return res.status;\n    } else {\n        return await res.json();\n    }\n};\nconst fetchFast = async (url, method)=>{\n    let res;\n    res = await fetch(\"localhost:8000\".concat(url), {\n        method: \"\".concat(method)\n    });\n    if (!res.ok) {\n        //  if (res.status === 401) {\n        //   router.push(\"/Login\");\n        //   return\n        // }\n        return res.status;\n    } else {\n        return await res.json();\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9mZXRjaEZ1bi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9DQUFvQztBQUNWO0FBRW5CLE1BQU1DLFdBQVcsT0FBT0MsS0FBS0MsUUFBUUMsTUFBTUMsUUFBVTtJQUMxRCxJQUFJQztJQUVKLE9BQVFIO1FBQ04sS0FBSztZQUNIRyxNQUFNLE1BQU1DLE1BQU0sR0FBeUNMLE9BQXRDTSx1QkFBbUMsRUFBTyxPQUFKTixNQUFPO2dCQUNoRUMsUUFBUSxHQUFVLE9BQVBBO2dCQUNYUSxTQUFTO29CQUNQQyxlQUFlUDtnQkFDakI7WUFDRjtZQUNBLEtBQU07UUFFUixLQUFLO1lBQ0gsMkNBQTJDO1lBQzNDQyxNQUFNLE1BQU1DLE1BQU0sR0FBeUNMLE9BQXRDTSx1QkFBbUMsRUFBTyxPQUFKTixNQUFPO2dCQUNoRUMsUUFBUSxHQUFVLE9BQVBBO2dCQUNYUSxTQUFTO29CQUNQQyxlQUFlUDtvQkFDZixnQkFBZ0I7Z0JBQ2xCO2dCQUNBRCxNQUFNUyxLQUFLQyxTQUFTLENBQUNWO1lBQ3ZCO1lBRUEsS0FBTTtRQUNSLEtBQUs7WUFDSCxLQUFNO1FBQ1IsS0FBSztZQUNILEtBQU07UUFDUjtZQUNFLEtBQU07SUFDVjtJQUVBLElBQUksQ0FBQ0UsSUFBSVMsRUFBRSxFQUFFO1FBQ1gsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQixXQUFXO1FBQ1gsSUFBSTtRQUNKLE9BQU9ULElBQUlVLE1BQU07SUFDbkIsT0FBTztRQUNMLE9BQU8sTUFBTVYsSUFBSVcsSUFBSTtJQUN2QixDQUFDO0FBQ0gsRUFBRTtBQUVLLE1BQU1DLFlBQVksT0FBT2hCLEtBQUtDLFNBQVc7SUFDOUMsSUFBSUc7SUFFSkEsTUFBTSxNQUFNQyxNQUFNLGlCQUFxQixPQUFKTCxNQUFPO1FBQ3hDQyxRQUFRLEdBQVUsT0FBUEE7SUFDYjtJQUVBLElBQUksQ0FBQ0csSUFBSVMsRUFBRSxFQUFFO1FBQ1gsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQixXQUFXO1FBQ1gsSUFBSTtRQUNKLE9BQU9ULElBQUlVLE1BQU07SUFDbkIsT0FBTztRQUNMLE9BQU8sTUFBTVYsSUFBSVcsSUFBSTtJQUN2QixDQUFDO0FBQ0gsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9qcy9mZXRjaEZ1bi5qcz84OGIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNhbWJhaXJlIHR1dHRlIGxlIGdldCBpbiBwb3N0IHBvaVxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGdW4gPSBhc3luYyAodXJsLCBtZXRob2QsIGJvZHksIHRva2VuKSA9PiB7XG4gIGxldCByZXM7XG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19OT0RFX1NFUlZFUn0ke3VybH1gLCB7XG4gICAgICAgIG1ldGhvZDogYCR7bWV0aG9kfWAsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgLy9jaGVjayBoZXJlIHRoZSBiZWhhdml1ciBpZiB5b3Ugc2VuZCBmaWxlc1xuICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTk9ERV9TRVJWRVJ9JHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6IGAke21ldGhvZH1gLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgfSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJERUxFVEVcIjpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQVVRcIjpcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGlmICghcmVzLm9rKSB7XG4gICAgLy8gIGlmIChyZXMuc3RhdHVzID09PSA0MDEpIHtcbiAgICAvLyAgIHJvdXRlci5wdXNoKFwiL0xvZ2luXCIpO1xuICAgIC8vICAgcmV0dXJuXG4gICAgLy8gfVxuICAgIHJldHVybiByZXMuc3RhdHVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGYXN0ID0gYXN5bmMgKHVybCwgbWV0aG9kKSA9PiB7XG4gIGxldCByZXM7XG5cbiAgcmVzID0gYXdhaXQgZmV0Y2goYGxvY2FsaG9zdDo4MDAwJHt1cmx9YCwge1xuICAgIG1ldGhvZDogYCR7bWV0aG9kfWBcbiAgfSk7XG5cbiAgaWYgKCFyZXMub2spIHtcbiAgICAvLyAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSkge1xuICAgIC8vICAgcm91dGVyLnB1c2goXCIvTG9naW5cIik7XG4gICAgLy8gICByZXR1cm5cbiAgICAvLyB9XG4gICAgcmV0dXJuIHJlcy5zdGF0dXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJmZXRjaEZ1biIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJ0b2tlbiIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX05PREVfU0VSVkVSIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hGYXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/fetchFun.js\n"));

/***/ })

});