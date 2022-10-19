/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Games/EasyMode";
exports.ids = ["pages/Games/EasyMode"];
exports.modules = {

/***/ "./pages/Games/EasyMode/styles.module.css":
/*!************************************************!*\
  !*** ./pages/Games/EasyMode/styles.module.css ***!
  \************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"square\": \"styles_square__xpbkI\",\n\t\"fadeIn\": \"styles_fadeIn__jbyWx\",\n\t\"boardInner\": \"styles_boardInner__Ahx6v\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9HYW1lcy9FYXN5TW9kZS9zdHlsZXMubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGdvcml0aG1zLy4vcGFnZXMvR2FtZXMvRWFzeU1vZGUvc3R5bGVzLm1vZHVsZS5jc3M/YTA4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzcXVhcmVcIjogXCJzdHlsZXNfc3F1YXJlX194cGJrSVwiLFxuXHRcImZhZGVJblwiOiBcInN0eWxlc19mYWRlSW5fX2pieVd4XCIsXG5cdFwiYm9hcmRJbm5lclwiOiBcInN0eWxlc19ib2FyZElubmVyX19BaHg2dlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Games/EasyMode/styles.module.css\n");

/***/ }),

/***/ "./pages/Games/EasyMode/index.js":
/*!***************************************!*\
  !*** ./pages/Games/EasyMode/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/Games/EasyMode/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Easy() {\n    const rowsData1 = {\n        rows: 5,\n        columns: 5\n    };\n    let rows = [];\n    for(var i = 1; i <= rowsData1[\"rows\"]; i++){\n        let cell = [];\n        for(var j = 1; j <= rowsData1[\"columns\"]; j++){\n            cell.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().square),\n                children: \" \"\n            }, j, false, {\n                fileName: \"C:\\\\Users\\\\stamg\\\\OneDrive\\\\Desktop\\\\algorithms\\\\pages\\\\Games\\\\EasyMode\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 27\n            }, this));\n        }\n        rows.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: cell\n        }, i, false, {\n            fileName: \"C:\\\\Users\\\\stamg\\\\OneDrive\\\\Desktop\\\\algorithms\\\\pages\\\\Games\\\\EasyMode\\\\index.js\",\n            lineNumber: 13,\n            columnNumber: 23\n        }, this));\n    }\n    //assigning ref\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                id: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().boardInner),\n                children: rows\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stamg\\\\OneDrive\\\\Desktop\\\\algorithms\\\\pages\\\\Games\\\\EasyMode\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stamg\\\\OneDrive\\\\Desktop\\\\algorithms\\\\pages\\\\Games\\\\EasyMode\\\\index.js\",\n            lineNumber: 18,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stamg\\\\OneDrive\\\\Desktop\\\\algorithms\\\\pages\\\\Games\\\\EasyMode\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 13\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Easy);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9HYW1lcy9FYXN5TW9kZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFBMEI7QUFDZTtBQUV6QyxTQUFTRSxJQUFJLEdBQUc7SUFDUixNQUFNQyxTQUFTLEdBQUc7UUFBQ0MsSUFBSSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFDLENBQUM7S0FBQztJQUN0QyxJQUFJRCxJQUFJLEdBQUcsRUFBRTtJQUNiLElBQUssSUFBSUUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJSCxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUVHLENBQUMsRUFBRSxDQUFDO1FBQ3hDLElBQUlDLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUlMLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRUssQ0FBQyxFQUFFLENBQUU7WUFDNUNELElBQUksQ0FBQ0UsSUFBSSxlQUFDLDhEQUFDQyxJQUFFO2dCQUFTQyxTQUFTLEVBQUVWLGtFQUFhOzBCQUFFLEdBQUM7ZUFBOUJPLENBQUM7Ozs7b0JBQWtDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQ0RKLElBQUksQ0FBQ0ssSUFBSSxlQUFDLDhEQUFDSSxJQUFFO3NCQUFXTixJQUFJO1dBQVRELENBQUM7Ozs7Z0JBQWUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxlQUFlO0lBQ1gscUJBQ0ksOERBQUNRLEtBQUc7a0JBQ0EsNEVBQUNDLE9BQUs7c0JBQ0YsNEVBQUNDLE9BQUs7Z0JBQUNDLEVBQUUsRUFBRWhCLHNFQUFpQjswQkFDdkJHLElBQUk7Ozs7O29CQUNEOzs7OztnQkFDSjs7Ozs7WUFDTixDQUNUO0FBQ1QsQ0FBQztBQUlELGlFQUFlRixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGdvcml0aG1zLy4vcGFnZXMvR2FtZXMvRWFzeU1vZGUvaW5kZXguanM/ZWMyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnOyBcclxuICBcclxuZnVuY3Rpb24gRWFzeSgpIHtcclxuICAgICAgICBjb25zdCByb3dzRGF0YTEgPSB7cm93czogNSwgY29sdW1uczo1fTtcclxuICAgICAgICBsZXQgcm93cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHJvd3NEYXRhMVsncm93cyddOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8PSByb3dzRGF0YTFbJ2NvbHVtbnMnXTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnB1c2goPHRkIGtleT17an0gY2xhc3NOYW1lPXtzdHlsZXMuc3F1YXJlfT4gPC90ZD4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvd3MucHVzaCg8dHIga2V5PXtpfT57IGNlbGwgfTwvdHI+KTtcclxuICAgICAgICB9XHJcbiAgICAvL2Fzc2lnbmluZyByZWZcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGlkPXtzdHlsZXMuYm9hcmRJbm5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cm93c31cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVhc3k7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiRWFzeSIsInJvd3NEYXRhMSIsInJvd3MiLCJjb2x1bW5zIiwiaSIsImNlbGwiLCJqIiwicHVzaCIsInRkIiwiY2xhc3NOYW1lIiwic3F1YXJlIiwidHIiLCJkaXYiLCJ0YWJsZSIsInRib2R5IiwiaWQiLCJib2FyZElubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Games/EasyMode/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Games/EasyMode/index.js"));
module.exports = __webpack_exports__;

})();