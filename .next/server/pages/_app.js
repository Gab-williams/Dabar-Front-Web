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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/context.js":
/*!*******************************!*\
  !*** ./components/context.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Provider: () => (/* binding */ Provider),\n/* harmony export */   context: () => (/* binding */ context),\n/* harmony export */   \"default\": () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction Provider({ children }) {\n    let [selectedx, setSelectedx] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const countryCode = localStorage.getItem(\"countrycode\");\n        let parsedCountryCode = {};\n        try {\n            parsedCountryCode = countryCode ? JSON.parse(countryCode) : {};\n            if (Object.keys(parsedCountryCode).length > 0) {\n                setSelectedx(parsedCountryCode.countrycode);\n            } else {\n                setSelectedx(\"GB\");\n            }\n        } catch (error) {\n            console.error(\"Error parsing JSON:\", error);\n        }\n    }, [\n        selectedx\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context.Provider, {\n        value: {\n            selectedx: selectedx,\n            setSelectedx: setSelectedx\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/components/context.js\",\n        lineNumber: 23,\n        columnNumber: 8\n    }, this);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDN0QsTUFBTUksd0JBQVVILG9EQUFhQTtBQUNmLFNBQVNJLFNBQVMsRUFBQ0MsUUFBUSxFQUFDO0lBQ3ZDLElBQUksQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxjQUFjQyxhQUFhQyxPQUFPLENBQUM7UUFDL0MsSUFBSUMsb0JBQW9CLENBQUM7UUFDekIsSUFBSTtZQUNGQSxvQkFBb0JILGNBQWNJLEtBQUtDLEtBQUssQ0FBQ0wsZUFBZSxDQUFDO1lBQzdELElBQUdNLE9BQU9DLElBQUksQ0FBQ0osbUJBQW1CSyxNQUFNLEdBQUcsR0FBRTtnQkFDM0NULGFBQWFJLGtCQUFrQk0sV0FBVztZQUM1QyxPQUFLO2dCQUNIVixhQUFhO1lBQ2Y7UUFDRixFQUFFLE9BQU9XLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7UUFDdkM7SUFDSSxHQUFFO1FBQUNaO0tBQVU7SUFHYixxQkFDRyw4REFBQ0gsUUFBUUMsUUFBUTtRQUFDZ0IsT0FBTztZQUN4QmQsV0FBVUE7WUFDVkMsY0FBYUE7UUFDYjtrQkFDRUY7Ozs7OztBQUdWO0FBRTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFiYXIvLi9jb21wb25lbnRzL2NvbnRleHQuanM/NDAxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gICAgbGV0IFtzZWxlY3RlZHgsIHNldFNlbGVjdGVkeF0gPSB1c2VTdGF0ZSgnJylcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgY29uc3QgY291bnRyeUNvZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50cnljb2RlXCIpO1xubGV0IHBhcnNlZENvdW50cnlDb2RlID0ge307XG50cnkge1xuICBwYXJzZWRDb3VudHJ5Q29kZSA9IGNvdW50cnlDb2RlID8gSlNPTi5wYXJzZShjb3VudHJ5Q29kZSkgOiB7fTtcbiAgaWYoT2JqZWN0LmtleXMocGFyc2VkQ291bnRyeUNvZGUpLmxlbmd0aCA+IDApe1xuICAgIHNldFNlbGVjdGVkeChwYXJzZWRDb3VudHJ5Q29kZS5jb3VudHJ5Y29kZSlcbiAgfWVsc2V7XG4gICAgc2V0U2VsZWN0ZWR4KFwiR0JcIikgIFxuICB9XG59IGNhdGNoIChlcnJvcikge1xuICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBKU09OOlwiLCBlcnJvcik7XG59XG4gICAgfSxbc2VsZWN0ZWR4XSlcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgPGNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgXG4gICAgICAgIHNlbGVjdGVkeDpzZWxlY3RlZHgsXG4gICAgICAgIHNldFNlbGVjdGVkeDpzZXRTZWxlY3RlZHgsXG4gICAgICAgIH19PlxuICAgICAgICAge2NoaWxkcmVufVxuICAgICAgIDwvY29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCB7UHJvdmlkZXIsIGNvbnRleHR9Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29udGV4dCIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZWxlY3RlZHgiLCJzZXRTZWxlY3RlZHgiLCJjb3VudHJ5Q29kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZWRDb3VudHJ5Q29kZSIsIkpTT04iLCJwYXJzZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjb3VudHJ5Y29kZSIsImVycm9yIiwiY29uc29sZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context.js\n");

/***/ }),

/***/ "./components/elements/Preloader.js":
/*!******************************************!*\
  !*** ./components/elements/Preloader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Preloader)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Preloader() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"preloader\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"loading-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"loading-center-absolute\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"object\",\n                            id: \"object_one\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/components/elements/Preloader.js\",\n                            lineNumber: 7,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"object\",\n                            id: \"object_two\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/components/elements/Preloader.js\",\n                            lineNumber: 8,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"object\",\n                            id: \"object_three\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/components/elements/Preloader.js\",\n                            lineNumber: 9,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/components/elements/Preloader.js\",\n                    lineNumber: 6,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/components/elements/Preloader.js\",\n                lineNumber: 5,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/components/elements/Preloader.js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VsZW1lbnRzL1ByZWxvYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0E7SUFDcEIscUJBQ0k7a0JBQ0ksNEVBQUNDO1lBQUlDLElBQUc7c0JBQ0osNEVBQUNEO2dCQUFJQyxJQUFHOzBCQUNKLDRFQUFDRDtvQkFBSUMsSUFBRzs7c0NBQ0osOERBQUNEOzRCQUFJRSxXQUFVOzRCQUFTRCxJQUFHOzs7Ozs7c0NBQzNCLDhEQUFDRDs0QkFBSUUsV0FBVTs0QkFBU0QsSUFBRzs7Ozs7O3NDQUMzQiw4REFBQ0Q7NEJBQUlFLFdBQVU7NEJBQVNELElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFiYXIvLi9jb21wb25lbnRzL2VsZW1lbnRzL1ByZWxvYWRlci5qcz84ZWQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWxvYWRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBpZD1cInByZWxvYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZy1jZW50ZXItYWJzb2x1dGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JqZWN0XCIgaWQ9XCJvYmplY3Rfb25lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JqZWN0XCIgaWQ9XCJvYmplY3RfdHdvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JqZWN0XCIgaWQ9XCJvYmplY3RfdGhyZWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/elements/Preloader.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_elements_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/elements/Preloader */ \"./components/elements/Preloader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/css/animate.min.css */ \"./public/assets/css/animate.min.css\");\n/* harmony import */ var _public_assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/css/bootstrap.min.css */ \"./public/assets/css/bootstrap.min.css\");\n/* harmony import */ var _public_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/css/flaticon.css */ \"./public/assets/css/flaticon.css\");\n/* harmony import */ var _public_assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_assets_css_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/assets/css/fontawesome-all.min.css */ \"./public/assets/css/fontawesome-all.min.css\");\n/* harmony import */ var _public_assets_css_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_assets_css_imageRevealHover_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/assets/css/imageRevealHover.css */ \"./public/assets/css/imageRevealHover.css\");\n/* harmony import */ var _public_assets_css_imageRevealHover_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_imageRevealHover_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _public_assets_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/assets/css/magnific-popup.css */ \"./public/assets/css/magnific-popup.css\");\n/* harmony import */ var _public_assets_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _public_assets_css_main_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/assets/css/main.css */ \"./public/assets/css/main.css\");\n/* harmony import */ var _public_assets_css_main_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_main_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _public_assets_css_slick_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/assets/css/slick.css */ \"./public/assets/css/slick.css\");\n/* harmony import */ var _public_assets_css_slick_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_slick_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _public_assets_css_spacing_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/assets/css/spacing.css */ \"./public/assets/css/spacing.css\");\n/* harmony import */ var _public_assets_css_spacing_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_spacing_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _public_assets_css_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/assets/css/swiper-bundle.css */ \"./public/assets/css/swiper-bundle.css\");\n/* harmony import */ var _public_assets_css_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _public_assets_css_app_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../public/assets/css/app.css */ \"./public/assets/css/app.css\");\n/* harmony import */ var _public_assets_css_app_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_app_css__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/context */ \"./components/context.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_19__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import \"../public/assets/css/style.css\"\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoading(false);\n        }, 1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_context__WEBPACK_IMPORTED_MODULE_18__.Provider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                            children: `\n                 @font-face {\n                    font-family: 'Josefin Sans';\n                    font-style: bold;\n                    font-weight: 400;\n                    src: url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap') format('woff2');\n                }\n                  @font-face {\n                    font-family: 'Josefin Sans';\n                    font-style: regular;\n                    font-weight: 300;\n                    src: url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap') format('woff2');\n                }\n                \n                    @font-face {\n                        font-family: 'Josefin Sans';\n                        font-style: bold;\n                        font-weight: 700;\n                        src: url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap') format('woff2');\n                    }\n                    \n\n                    body {\n                        font-family: 'Josefin Sans', sans-serif;\n                        margin: 0;\n                        padding: 0;\n                    }\n\n                    h1, h2, h3, h4, h5, h6 {\n                        font-family: 'Josefin Sans', sans-serif;\n                    }\n\n                    p {\n                        font-family: 'Josefin Sans', sans-serif;\n                    }\n                `\n                        }, void 0, false, {\n                            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_19___default()), {\n                                    strategy: \"afterInteractive\",\n                                    src: \"https://www.googletagmanager.com/gtag/js?id=G-J8HLPZVV8W\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 18\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_19___default()), {\n                                    id: \"google-analytics\",\n                                    strategy: \"afterInteractive\",\n                                    children: `\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n    gtag('config', 'G-J8HLPZVV8W');\n  `\n                                }, void 0, false, {\n                                    fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 1\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this),\n                        !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            className: \"hide-nextjs-portal\",\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n                            lineNumber: 99,\n                            columnNumber: 28\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_Preloader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n                            lineNumber: 99,\n                            columnNumber: 90\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n                    lineNumber: 90,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Mustafaking/Documents/GitHub/Dabar-Front-Web/pages/_app.js\",\n            lineNumber: 35,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDWjtBQUNmO0FBQ1Q7QUFDVztBQUNBO0FBQ2U7QUFDRTtBQUNMO0FBQ1c7QUFDSDtBQUNGO0FBQ1Y7QUFDQztBQUNFO0FBQ007QUFDaEQsMENBQTBDO0FBQ0w7QUFFWTtBQUNoQjtBQUVqQyxTQUFTTSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUlUsV0FBVztZQUNURCxXQUFXO1FBQ2IsR0FBRztJQUNMLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUVBLDRFQUFDTiwwREFBUUE7OzhCQUNQLDhEQUFDRCxrREFBSUE7O3NDQUtILDhEQUFDUzs0QkFDQ0MsS0FBSTs0QkFDSkMsTUFBSzs7Ozs7O3NDQUVQLDhEQUFDRjs0QkFDQ0MsS0FBSTs0QkFDSkMsTUFBSzs7Ozs7O3NDQUVQLDhEQUFDRjs0QkFDQ0MsS0FBSTs0QkFDSkMsTUFBSzs7Ozs7O3NDQUVQLDhEQUFDQztzQ0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFtQ0QsQ0FBQzs7Ozs7Ozs7Ozs7OzhCQUVYLDhEQUFDQzs7c0NBQUssOERBQUNDOzs4Q0FBSSw4REFBQ1oscURBQU1BO29DQUFDYSxVQUFTO29DQUFtQkMsS0FBSTs7Ozs7OzhDQUV6RCw4REFBQ2QscURBQU1BO29DQUFDZSxJQUFHO29DQUFtQkYsVUFBUzs4Q0FDcEMsQ0FBQzs7Ozs7RUFLRixDQUFDOzs7Ozs7Ozs7Ozs7d0JBQ2EsQ0FBQ1Qsd0JBQVUsOERBQUNGOzRCQUFVYyxXQUFVOzRCQUFzQixHQUFHYixTQUFTOzs7OztpREFBTyw4REFBQ1Isc0VBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkc7QUFFQSxpRUFBZU0sS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhYmFyLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmVsb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9lbGVtZW50cy9QcmVsb2FkZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL2Nzcy9hbmltYXRlLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9hc3NldHMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL2Nzcy9mbGF0aWNvbi5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9hc3NldHMvY3NzL2ZvbnRhd2Vzb21lLWFsbC5taW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL2Nzcy9pbWFnZVJldmVhbEhvdmVyLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9jc3MvbWFnbmlmaWMtcG9wdXAuY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL2Nzcy9tYWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9jc3Mvc2xpY2suY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL2Nzcy9zcGFjaW5nLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9jc3Mvc3dpcGVyLWJ1bmRsZS5jc3NcIjtcbi8vIGltcG9ydCBcIi4uL3B1YmxpYy9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL2Nzcy9hcHAuY3NzXCJcblxuaW1wb3J0ICB7IFByb3ZpZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb250ZXh0XCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0sIDEwMDApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuIFxuICAgIDxQcm92aWRlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgXG5cblxuXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANDAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEA0MDAmZGlzcGxheT1zd2FwJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IHJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+PGRpdj48U2NyaXB0IHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1KOEhMUFpWVjhXXCIgLz5cblxuPFNjcmlwdCBpZD1cImdvb2dsZS1hbmFseXRpY3NcIiBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIj5cbiAge2BcbiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICBndGFnKCdjb25maWcnLCAnRy1KOEhMUFpWVjhXJyk7XG4gIGB9XG48L1NjcmlwdD48L2Rpdj57IWxvYWRpbmcgPyA8Q29tcG9uZW50IGNsYXNzTmFtZT1cImhpZGUtbmV4dGpzLXBvcnRhbFwiIHsuLi5wYWdlUHJvcHN9IC8+IDogPFByZWxvYWRlciAvPn08L21haW4+XG48L1Byb3ZpZGVyPlxuXG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIlByb3ZpZGVyIiwiU2NyaXB0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldFRpbWVvdXQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInN0eWxlIiwibWFpbiIsImRpdiIsInN0cmF0ZWd5Iiwic3JjIiwiaWQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/assets/css/animate.min.css":
/*!*******************************************!*\
  !*** ./public/assets/css/animate.min.css ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/app.css":
/*!***********************************!*\
  !*** ./public/assets/css/app.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/bootstrap.min.css":
/*!*********************************************!*\
  !*** ./public/assets/css/bootstrap.min.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/flaticon.css":
/*!****************************************!*\
  !*** ./public/assets/css/flaticon.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/fontawesome-all.min.css":
/*!***************************************************!*\
  !*** ./public/assets/css/fontawesome-all.min.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/imageRevealHover.css":
/*!************************************************!*\
  !*** ./public/assets/css/imageRevealHover.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/magnific-popup.css":
/*!**********************************************!*\
  !*** ./public/assets/css/magnific-popup.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/main.css":
/*!************************************!*\
  !*** ./public/assets/css/main.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/slick.css":
/*!*************************************!*\
  !*** ./public/assets/css/slick.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/spacing.css":
/*!***************************************!*\
  !*** ./public/assets/css/spacing.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/swiper-bundle.css":
/*!*********************************************!*\
  !*** ./public/assets/css/swiper-bundle.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/swiper"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();