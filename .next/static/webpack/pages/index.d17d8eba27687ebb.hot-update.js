"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Popup.jsx":
/*!******************************!*\
  !*** ./components/Popup.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Popup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Popup(param) {\n    let { is_close, Setis_close } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const lastPopupTime = localStorage.getItem(\"lastPopupTime\");\n        const currentTime = new Date().getTime();\n        const fiveHours = 5 * 60 * 60 * 1000;\n        if (!lastPopupTime || currentTime - lastPopupTime > fiveHours) {\n            Setis_close(true);\n            localStorage.setItem(\"lastPopupTime\", currentTime);\n        }\n        const interval = setInterval(()=>{\n            const lastPopupTime = localStorage.getItem(\"lastPopupTime\");\n            const currentTime = new Date().getTime();\n            if (!lastPopupTime || currentTime - lastPopupTime > fiveHours) {\n                Setis_close(true);\n                localStorage.setItem(\"lastPopupTime\", currentTime);\n            }\n        }, fiveHours);\n        return ()=>clearInterval(interval);\n    }, [\n        Setis_close\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"popupshow \".concat(is_close ? \"\" : \"activex\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"items_in\",\n            style: {\n                backgroundImage: 'url(\"/assets/img/bg/DabarNetwork.png\")',\n                backgroundSize: \"cover\",\n                backgroundPosition: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: ()=>Setis_close(false),\n                    className: \"x_text\",\n                    children: \"Close\"\n                }, void 0, false, {\n                    fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/components/Popup.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/components/Popup.jsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/components/Popup.jsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/components/Popup.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Popup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Popup;\nvar _c;\n$RefreshReg$(_c, \"Popup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvcHVwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBRTFCLFNBQVNFLE1BQU0sS0FBeUI7UUFBekIsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUUsR0FBekI7O0lBQzVCSCxnREFBU0EsQ0FBQztRQUNSLE1BQU1JLGdCQUFnQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzNDLE1BQU1DLGNBQWMsSUFBSUMsT0FBT0MsT0FBTztRQUN0QyxNQUFNQyxZQUFZLElBQUksS0FBSyxLQUFLO1FBRWhDLElBQUksQ0FBQ04saUJBQWtCRyxjQUFjSCxnQkFBZ0JNLFdBQVk7WUFDL0RQLFlBQVk7WUFDWkUsYUFBYU0sT0FBTyxDQUFDLGlCQUFpQko7UUFDeEM7UUFFQSxNQUFNSyxXQUFXQyxZQUFZO1lBQzNCLE1BQU1ULGdCQUFnQkMsYUFBYUMsT0FBTyxDQUFDO1lBQzNDLE1BQU1DLGNBQWMsSUFBSUMsT0FBT0MsT0FBTztZQUV0QyxJQUFJLENBQUNMLGlCQUFrQkcsY0FBY0gsZ0JBQWdCTSxXQUFZO2dCQUMvRFAsWUFBWTtnQkFDWkUsYUFBYU0sT0FBTyxDQUFDLGlCQUFpQko7WUFDeEM7UUFDRixHQUFHRztRQUVILE9BQU8sSUFBTUksY0FBY0Y7SUFDN0IsR0FBRztRQUFDVDtLQUFZO0lBRWhCLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFXLGFBQXVDLE9BQTFCZCxXQUFXLEtBQUs7a0JBQzNDLDRFQUFDZTtZQUNDRCxXQUFVO1lBQ1ZFLE9BQU87Z0JBQ0xDLGlCQUFpQjtnQkFDakJDLGdCQUFnQjtnQkFDaEJDLG9CQUFvQjtZQUN0QjtzQkFFQSw0RUFBQ047MEJBQ0MsNEVBQUNPO29CQUFLQyxTQUFTLElBQU1wQixZQUFZO29CQUFRYSxXQUFVOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEU7R0F4Q3dCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BvcHVwLmpzeD8yZTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3B1cCh7IGlzX2Nsb3NlLCBTZXRpc19jbG9zZSB9KSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxhc3RQb3B1cFRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdFBvcHVwVGltZScpO1xyXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IGZpdmVIb3VycyA9IDUgKiA2MCAqIDYwICogMTAwMDtcclxuXHJcbiAgICBpZiAoIWxhc3RQb3B1cFRpbWUgfHwgKGN1cnJlbnRUaW1lIC0gbGFzdFBvcHVwVGltZSA+IGZpdmVIb3VycykpIHtcclxuICAgICAgU2V0aXNfY2xvc2UodHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0UG9wdXBUaW1lJywgY3VycmVudFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCBsYXN0UG9wdXBUaW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RQb3B1cFRpbWUnKTtcclxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIGlmICghbGFzdFBvcHVwVGltZSB8fCAoY3VycmVudFRpbWUgLSBsYXN0UG9wdXBUaW1lID4gZml2ZUhvdXJzKSkge1xyXG4gICAgICAgIFNldGlzX2Nsb3NlKHRydWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0UG9wdXBUaW1lJywgY3VycmVudFRpbWUpO1xyXG4gICAgICB9XHJcbiAgICB9LCBmaXZlSG91cnMpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbU2V0aXNfY2xvc2VdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9wdXBzaG93ICR7aXNfY2xvc2UgPyAnJyA6ICdhY3RpdmV4J31gfT5cclxuICAgICAgPHNlY3Rpb25cclxuICAgICAgICBjbGFzc05hbWU9J2l0ZW1zX2luJ1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCIvYXNzZXRzL2ltZy9iZy9EYWJhck5ldHdvcmsucG5nXCIpJyxcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gU2V0aXNfY2xvc2UoZmFsc2UpfSBjbGFzc05hbWU9J3hfdGV4dCc+Q2xvc2U8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiUG9wdXAiLCJpc19jbG9zZSIsIlNldGlzX2Nsb3NlIiwibGFzdFBvcHVwVGltZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiZml2ZUhvdXJzIiwic2V0SXRlbSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJzcGFuIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Popup.jsx\n"));

/***/ })

});