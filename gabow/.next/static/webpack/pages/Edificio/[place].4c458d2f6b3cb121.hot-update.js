"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Edificio/[place]",{

/***/ "./pages/Edificio/[place].js":
/*!***********************************!*\
  !*** ./pages/Edificio/[place].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Edificio.module.scss */ \"./styles/Edificio.module.scss\");\n/* harmony import */ var _styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.esm.js\");\n/* harmony import */ var _components_Edificios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Edificios */ \"./components/Edificios.jsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Flechas = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function() {\n    return __webpack_require__.e(/*! import() */ \"components_Flechas_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Flechas */ \"./components/Flechas.jsx\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"Edificio\\\\[place].js -> \" + \"../../components/Flechas\"\n        ]\n    },\n    ssr: false\n});\n_c1 = Flechas;\nvar Edificio = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var place = router.query.place;\n    var data = [\n        {\n            label: \"Aul_Piso1\",\n            path: \"../../public/Espacios/Aul_Piso1.svg\"\n        },\n        {\n            label: \"Aul_Piso2\",\n            path: \"../../public/Espacios/Aul_Piso2.svg\"\n        },\n        {\n            label: \"Aul_Piso3\",\n            path: \"../../public/Espacios/Aul_Piso3.svg\"\n        },\n        {\n            label: \"Aul_PlantaBaja\",\n            path: \"../../public/Espacios/Aul_PlantaBaja.svg\"\n        },\n        {\n            label: \"Espacios_Libres\",\n            path: \"../../public/Espacios/Espacios_Libres.svg\"\n        },\n        {\n            label: \"Ofi_Piso1\",\n            path: \"../../public/Espacios/Ofi_Piso1.svg\"\n        },\n        {\n            label: \"Ofi_PlantaBaja\",\n            path: \"../../public/Espacios/Ofi_PlantaBaja.svg\"\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data[0]), piso = ref[0], setPiso = ref[1];\n    console.log(place);\n    if (place == \"CECyT 9\") {\n        var cambiar = function(selectedOption) {\n            console.log(selectedOption);\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().buscador),\n                        type: \"search\",\n                        placeholder: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().buscador),\n                        options: data,\n                        onChange: cambiar,\n                        placeholder: \"Piso\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/Ruta\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().button),\n                            children: \"Iniciar ruta\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                            lineNumber: 57,\n                            columnNumber: 40\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false);\n    }\n    if (place == \"Town Center\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().buscador),\n                        type: \"search\",\n                        placeholder: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/Ruta\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().button),\n                            children: \"Iniciar ruta\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                            lineNumber: 66,\n                            columnNumber: 40\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                lineNumber: 64,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false);\n    }\n};\n_s(Edificio, \"rjkGLIaDQLLk4DHYoU6gj3y3sIg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = Edificio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edificio);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Flechas$dynamic\");\n$RefreshReg$(_c1, \"Flechas\");\n$RefreshReg$(_c2, \"Edificio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NDQUFFLGNBQVk7Ozs7O2lDQUFTOzs7Ozs2QkFBTzs7Ozs7O3FCQUM3Rjt5QkFDUCxDQUNOO0lBQ0wsQ0FBQztBQUNMLENBQUM7R0EzREtPLFFBQVE7O1FBQ0dOLGtEQUFTOzs7QUFEcEJNLE1BQUFBLFFBQVE7QUE2RGQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRWRpZmljaW8vW3BsYWNlXS5qcz9lZTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9FZGlmaWNpby5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xyXG5pbXBvcnQgRWRpZmljaW9zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRWRpZmljaW9zJ1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXHJcbmNvbnN0IEZsZWNoYXMgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvRmxlY2hhc1wiKSwgeyBzc3I6IGZhbHNlIH0pXHJcblxyXG5jb25zdCBFZGlmaWNpbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtwbGFjZX09cm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgZGF0YT1bXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDpcIkF1bF9QaXNvMVwiLFxyXG4gICAgICAgICAgICBwYXRoOlwiLi4vLi4vcHVibGljL0VzcGFjaW9zL0F1bF9QaXNvMS5zdmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDpcIkF1bF9QaXNvMlwiLFxyXG4gICAgICAgICAgICBwYXRoOlwiLi4vLi4vcHVibGljL0VzcGFjaW9zL0F1bF9QaXNvMi5zdmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDpcIkF1bF9QaXNvM1wiLFxyXG4gICAgICAgICAgICBwYXRoOlwiLi4vLi4vcHVibGljL0VzcGFjaW9zL0F1bF9QaXNvMy5zdmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDpcIkF1bF9QbGFudGFCYWphXCIsXHJcbiAgICAgICAgICAgIHBhdGg6XCIuLi8uLi9wdWJsaWMvRXNwYWNpb3MvQXVsX1BsYW50YUJhamEuc3ZnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6XCJFc3BhY2lvc19MaWJyZXNcIixcclxuICAgICAgICAgICAgcGF0aDpcIi4uLy4uL3B1YmxpYy9Fc3BhY2lvcy9Fc3BhY2lvc19MaWJyZXMuc3ZnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6XCJPZmlfUGlzbzFcIixcclxuICAgICAgICAgICAgcGF0aDpcIi4uLy4uL3B1YmxpYy9Fc3BhY2lvcy9PZmlfUGlzbzEuc3ZnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6XCJPZmlfUGxhbnRhQmFqYVwiLFxyXG4gICAgICAgICAgICBwYXRoOlwiLi4vLi4vcHVibGljL0VzcGFjaW9zL09maV9QbGFudGFCYWphLnN2Z1wiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgY29uc3QgW3Bpc28sc2V0UGlzb109dXNlU3RhdGUoZGF0YVswXSk7XHJcbiAgICBjb25zb2xlLmxvZyhwbGFjZSk7XHJcblxyXG4gICAgaWYocGxhY2U9PVwiQ0VDeVQgOVwiKXtcclxuICAgICAgICBjb25zdCBjYW1iaWFyPShzZWxlY3RlZE9wdGlvbik9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRPcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5idXNjYWRvcn0gdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPSdCdXNjYXInLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT17c3R5bGVzLmJ1c2NhZG9yfSBvcHRpb25zPXtkYXRhfSBvbkNoYW5nZT17Y2FtYmlhcn0gcGxhY2Vob2xkZXI9J1Bpc28nLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1J1dGFcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PkluaWNpYXIgcnV0YTwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9aWYocGxhY2UgPT0gJ1Rvd24gQ2VudGVyJyl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuYnVzY2Fkb3J9IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj0nQnVzY2FyJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9SdXRhXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5JbmljaWFyIHJ1dGE8L2J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGlmaWNpbyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJMaW5rIiwic3R5bGVzIiwidXNlUm91dGVyIiwiU2VsZWN0IiwiRWRpZmljaW9zIiwiZHluYW1pYyIsIkZsZWNoYXMiLCJzc3IiLCJFZGlmaWNpbyIsInJvdXRlciIsInBsYWNlIiwicXVlcnkiLCJkYXRhIiwibGFiZWwiLCJwYXRoIiwicGlzbyIsInNldFBpc28iLCJjb25zb2xlIiwibG9nIiwiY2FtYmlhciIsInNlbGVjdGVkT3B0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW5wdXQiLCJidXNjYWRvciIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Edificio/[place].js\n"));

/***/ })

});