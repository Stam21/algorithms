"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Games/EasyMode",{

/***/ "./pages/Games/EasyMode/index.js":
/*!***************************************!*\
  !*** ./pages/Games/EasyMode/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/Games/EasyMode/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Easy() {\n    var rowsData1 = {\n        rows: 5,\n        columns: 5\n    };\n    var rows = [];\n    for(var i = 0; i < rowsData1[\"rows\"]; i++){\n        var cell = [];\n        for(var j = 0; j < rowsData1[\"columns\"]; j++){\n            cell.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().square),\n                children: \"COOL\"\n            }, j, false, {\n                fileName: \"C:\\\\Users\\\\stamg\\\\OneDrive\\\\Desktop\\\\algorithms\\\\pages\\\\Games\\\\EasyMode\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 27\n            }, this));\n        }\n        rows.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().square),\n            children: cell\n        }, i, false, {\n            fileName: \"C:\\\\Users\\\\stamg\\\\OneDrive\\\\Desktop\\\\algorithms\\\\pages\\\\Games\\\\EasyMode\\\\index.js\",\n            lineNumber: 13,\n            columnNumber: 23\n        }, this));\n    }\n    //assigning ref\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                id: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().boardInner),\n                children: rows\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stamg\\\\OneDrive\\\\Desktop\\\\algorithms\\\\pages\\\\Games\\\\EasyMode\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stamg\\\\OneDrive\\\\Desktop\\\\algorithms\\\\pages\\\\Games\\\\EasyMode\\\\index.js\",\n            lineNumber: 18,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stamg\\\\OneDrive\\\\Desktop\\\\algorithms\\\\pages\\\\Games\\\\EasyMode\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 13\n    }, this);\n}\n_c = Easy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Easy);\nvar _c;\n$RefreshReg$(_c, \"Easy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9HYW1lcy9FYXN5TW9kZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFBMEI7QUFDZTtBQUV6QyxTQUFTRSxJQUFJLEdBQUc7SUFDUixJQUFNQyxTQUFTLEdBQUc7UUFBQ0MsSUFBSSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFDLENBQUM7S0FBQztJQUN0QyxJQUFJRCxJQUFJLEdBQUcsRUFBRTtJQUNiLElBQUssSUFBSUUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSCxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUVHLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLElBQUlDLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdMLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRUssQ0FBQyxFQUFFLENBQUU7WUFDM0NELElBQUksQ0FBQ0UsSUFBSSxlQUFDLDhEQUFDQyxJQUFFO2dCQUFTQyxTQUFTLEVBQUVWLGtFQUFhOzBCQUFHLE1BQUk7ZUFBbENPLENBQUM7Ozs7b0JBQXNDLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBQ0RKLElBQUksQ0FBQ0ssSUFBSSxlQUFDLDhEQUFDSSxJQUFFO1lBQVNGLFNBQVMsRUFBRVYsa0VBQWE7c0JBQUdNLElBQUk7V0FBbENELENBQUM7Ozs7Z0JBQXVDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0wsZUFBZTtJQUNYLHFCQUNJLDhEQUFDUSxLQUFHO2tCQUNBLDRFQUFDQyxPQUFLO3NCQUNGLDRFQUFDQyxPQUFLO2dCQUFDQyxFQUFFLEVBQUVoQixzRUFBaUI7MEJBQ25CRyxJQUFJOzs7OztvQkFDTDs7Ozs7Z0JBQ0o7Ozs7O1lBQ04sQ0FDVDtBQUNULENBQUM7QUFwQlFGLEtBQUFBLElBQUk7QUF3QmIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9HYW1lcy9FYXN5TW9kZS9pbmRleC5qcz9lYzJiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7IFxyXG4gIFxyXG5mdW5jdGlvbiBFYXN5KCkge1xyXG4gICAgICAgIGNvbnN0IHJvd3NEYXRhMSA9IHtyb3dzOiA1LCBjb2x1bW5zOjV9O1xyXG4gICAgICAgIGxldCByb3dzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzRGF0YTFbJ3Jvd3MnXTsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGNlbGwgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByb3dzRGF0YTFbJ2NvbHVtbnMnXTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnB1c2goPHRkIGtleT17an0gY2xhc3NOYW1lPXtzdHlsZXMuc3F1YXJlfSA+Q09PTDwvdGQ+KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3dzLnB1c2goPHRyIGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZXMuc3F1YXJlfT57Y2VsbH08L3RyPik7XHJcbiAgICAgICAgfVxyXG4gICAgLy9hc3NpZ25pbmcgcmVmXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSBpZD17c3R5bGVzLmJvYXJkSW5uZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWFzeTsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJFYXN5Iiwicm93c0RhdGExIiwicm93cyIsImNvbHVtbnMiLCJpIiwiY2VsbCIsImoiLCJwdXNoIiwidGQiLCJjbGFzc05hbWUiLCJzcXVhcmUiLCJ0ciIsImRpdiIsInRhYmxlIiwidGJvZHkiLCJpZCIsImJvYXJkSW5uZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Games/EasyMode/index.js\n"));

/***/ })

});