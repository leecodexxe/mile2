"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; },\n/* harmony export */   name: function() { return /* binding */ name; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/db/client */ \"(app-pages-browser)/./server/db/client.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default,name auto */ \n\n\n\nvar _s = $RefreshSig$();\n\n\n//HOME PAGE\nfunction Page(param) {\n    var posts = param.posts;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), 2), login = _useState[0], setLogin = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), password = _useState1[0], setPassword = _useState1[1];\n    console.log(\"this is login info\" + login, password);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"You clicked \",\n                    login,\n                    \" times\"\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setLogin(login + 1);\n                },\n                children: \"Click me\"\n            }, void 0, false, {\n                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 14,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"j5ZWtFgAyuhVQw2O7yoKJbVPIuc=\");\n_c = Page;\nfunction name(username, password) {\n    return _name.apply(this, arguments);\n}\nfunction _name() {\n    _name = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function(username, password) {\n        var data, isInDataBase;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _server_db_client__WEBPACK_IMPORTED_MODULE_1__.prisma.userdata.findMany()\n                    ];\n                case 1:\n                    data = _state.sent();\n                    isInDataBase = data.map(function(data) {\n                        if (username === data.username && password === data.pw) {\n                            return true;\n                        }\n                    });\n                    return [\n                        2,\n                        isInDataBase ? true : false\n                    ];\n            }\n        });\n    });\n    return _name.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0M7QUFDZjtBQUVoQyxXQUFXO0FBQ00sU0FBU0UsS0FBSyxLQUFPO1FBQVAsY0FBQ0M7O0lBQzVCLElBQXlCRixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsUUFBM0JHLFFBQWtCSCxjQUFaSSxXQUFZSjtJQUN6QixJQUErQkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQWpDSyxXQUF3QkwsZUFBZk0sY0FBZU47SUFDL0JPLFFBQVFDLEdBQUcsQ0FBQyx1QkFBcUJMLE9BQU1FO0lBQ3ZDLHFCQUNJLDhEQUFDSTs7MEJBQ0MsOERBQUNDOztvQkFBRTtvQkFBYVA7b0JBQU07Ozs7Ozs7MEJBQ3RCLDhEQUFDUTtnQkFBT0MsU0FBUzsyQkFBTVIsU0FBU0QsUUFBUTs7MEJBQUk7Ozs7Ozs7Ozs7OztBQUl0RDtHQVgwQkY7S0FBQUE7QUFZbkIsU0FBZVksS0FBS0MsUUFBZSxFQUFDVCxRQUFlO1dBQXBDUTs7U0FBQUE7SUFBQUEsUUFBZiw0RUFBb0JDLFFBQWUsRUFBQ1QsUUFBZTtZQUNoRFUsTUFDQUM7Ozs7b0JBRE87O3dCQUFNakIscURBQU1BLENBQUNrQixRQUFRLENBQUNDLFFBQVE7OztvQkFBckNILE9BQU87b0JBQ1BDLGVBQWVELEtBQUtJLEdBQUcsQ0FBQyxTQUFDSjt3QkFDM0IsSUFBR0QsYUFBYUMsS0FBS0QsUUFBUSxJQUFJVCxhQUFhVSxLQUFLSyxFQUFFLEVBQUM7NEJBQ2xELE9BQU87d0JBQ1g7b0JBQ0o7b0JBQ0E7O3dCQUFPSixlQUFnQixPQUFPOzs7O0lBQ2xDO1dBUnNCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vc2VydmVyL2RiL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vSE9NRSBQQUdFXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7cG9zdHN9KXtcclxuICAgIGNvbnN0IFtsb2dpbixzZXRMb2dpbl0gPSB1c2VTdGF0ZSgxKVxyXG4gICAgY29uc3QgW3Bhc3N3b3JkLHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGxvZ2luIGluZm9cIitsb2dpbixwYXNzd29yZClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPllvdSBjbGlja2VkIHtsb2dpbn0gdGltZXM8L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldExvZ2luKGxvZ2luICsgMSl9PkNsaWNrIG1lPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIFxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBuYW1lKHVzZXJuYW1lOlN0cmluZyxwYXNzd29yZDpTdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEudXNlcmRhdGEuZmluZE1hbnkoKVxyXG4gICAgY29uc3QgaXNJbkRhdGFCYXNlID0gZGF0YS5tYXAoKGRhdGEpPT57XHJcbiAgICAgICAgaWYodXNlcm5hbWUgPT09IGRhdGEudXNlcm5hbWUgJiYgcGFzc3dvcmQgPT09IGRhdGEucHcpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gaXNJbkRhdGFCYXNlID8gIHRydWUgOiBmYWxzZVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJwb3N0cyIsImxvZ2luIiwic2V0TG9naW4iLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImRpdiIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwibmFtZSIsInVzZXJuYW1lIiwiZGF0YSIsImlzSW5EYXRhQmFzZSIsInVzZXJkYXRhIiwiZmluZE1hbnkiLCJtYXAiLCJwdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});