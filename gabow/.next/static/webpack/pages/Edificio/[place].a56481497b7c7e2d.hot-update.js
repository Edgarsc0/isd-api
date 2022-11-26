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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Edificio.module.scss */ \"./styles/Edificio.module.scss\");\n/* harmony import */ var _styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.esm.js\");\n/* harmony import */ var _components_Edificios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Edificios */ \"./components/Edificios.jsx\");\n/* harmony import */ var _components_ShowImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ShowImage */ \"./components/ShowImage.jsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Flechas = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = function() {\n    return __webpack_require__.e(/*! import() */ \"components_Flechas_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Flechas */ \"./components/Flechas.jsx\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"Edificio\\\\[place].js -> \" + \"../../components/Flechas\"\n        ]\n    },\n    ssr: false\n});\n_c1 = Flechas;\nvar Edificio = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var place = router.query.place;\n    var data = [\n        {\n            label: \"Aul_Piso1\",\n            path: \"../public/Espacios/Aul_Piso1.svg\"\n        },\n        {\n            label: \"Aul_Piso2\",\n            path: \"../public/Espacios/Aul_Piso2.svg\"\n        },\n        {\n            label: \"Aul_Piso3\",\n            path: \"../public/Espacios/Aul_Piso3.svg\"\n        },\n        {\n            label: \"Aul_PlantaBaja\",\n            path: \"../public/Espacios/Aul_PlantaBaja.svg\"\n        },\n        {\n            label: \"Espacios_Libres\",\n            path: \"../public/Espacios/Espacios_Libres.svg\"\n        },\n        {\n            label: \"Ofi_Piso1\",\n            path: \"../public/Espacios/Ofi_Piso1.svg\"\n        },\n        {\n            label: \"Ofi_PlantaBaja\",\n            path: \"../public/Espacios/Ofi_PlantaBaja.svg\"\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data[0]), piso = ref[0], setPiso = ref[1];\n    console.log(place);\n    if (place == \"CECyT 9\") {\n        var cambiar = function(selectedOption) {\n            console.log(selectedOption);\n            setPiso(selectedOption);\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_8___default().buscador),\n                        type: \"search\",\n                        placeholder: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_8___default().buscador),\n                        options: data,\n                        onChange: cambiar,\n                        placeholder: \"Piso\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShowImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        width: 80,\n                        piso: piso\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/Ruta\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button),\n                            children: \"Iniciar ruta\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                            lineNumber: 58,\n                            columnNumber: 40\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false);\n    }\n    if (place == \"Town Center\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_8___default().buscador),\n                        type: \"search\",\n                        placeholder: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/Ruta\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button),\n                            children: \"Iniciar ruta\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                            lineNumber: 67,\n                            columnNumber: 40\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                lineNumber: 65,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false);\n    }\n};\n_s(Edificio, \"rjkGLIaDQLLk4DHYoU6gj3y3sIg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = Edificio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edificio);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Flechas$dynamic\");\n$RefreshReg$(_c1, \"Flechas\");\n$RefreshReg$(_c2, \"Edificio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs2QkFBRTtrQ0FDdkUsOERBQUM1QixrREFBSTt3QkFBQ2dDLElBQUksRUFBQyxPQUFPO2tDQUFDLDRFQUFDQyxRQUFNOzRCQUFDTixJQUFJLEVBQUMsUUFBUTs0QkFBQ0osU0FBUyxFQUFFdEIsNEVBQWE7c0NBQUUsY0FBWTs7Ozs7aUNBQVM7Ozs7OzZCQUFPOzs7Ozs7cUJBQzdGO3lCQUNQLENBQ047SUFDTCxDQUFDO0FBQ0wsQ0FBQztHQTVES1EsUUFBUTs7UUFDR1Asa0RBQVM7OztBQURwQk8sTUFBQUEsUUFBUTtBQThEZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9FZGlmaWNpby9bcGxhY2VdLmpzP2VlOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0VkaWZpY2lvLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXHJcbmltcG9ydCBFZGlmaWNpb3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FZGlmaWNpb3MnXHJcbmltcG9ydCBTaG93SW1hZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaG93SW1hZ2UnXHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIlxyXG5jb25zdCBGbGVjaGFzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL0ZsZWNoYXNcIiksIHsgc3NyOiBmYWxzZSB9KVxyXG5cclxuY29uc3QgRWRpZmljaW8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7cGxhY2V9PXJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IGRhdGE9W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6XCJBdWxfUGlzbzFcIixcclxuICAgICAgICAgICAgcGF0aDpcIi4uL3B1YmxpYy9Fc3BhY2lvcy9BdWxfUGlzbzEuc3ZnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6XCJBdWxfUGlzbzJcIixcclxuICAgICAgICAgICAgcGF0aDpcIi4uL3B1YmxpYy9Fc3BhY2lvcy9BdWxfUGlzbzIuc3ZnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6XCJBdWxfUGlzbzNcIixcclxuICAgICAgICAgICAgcGF0aDpcIi4uL3B1YmxpYy9Fc3BhY2lvcy9BdWxfUGlzbzMuc3ZnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6XCJBdWxfUGxhbnRhQmFqYVwiLFxyXG4gICAgICAgICAgICBwYXRoOlwiLi4vcHVibGljL0VzcGFjaW9zL0F1bF9QbGFudGFCYWphLnN2Z1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOlwiRXNwYWNpb3NfTGlicmVzXCIsXHJcbiAgICAgICAgICAgIHBhdGg6XCIuLi9wdWJsaWMvRXNwYWNpb3MvRXNwYWNpb3NfTGlicmVzLnN2Z1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOlwiT2ZpX1Bpc28xXCIsXHJcbiAgICAgICAgICAgIHBhdGg6XCIuLi9wdWJsaWMvRXNwYWNpb3MvT2ZpX1Bpc28xLnN2Z1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOlwiT2ZpX1BsYW50YUJhamFcIixcclxuICAgICAgICAgICAgcGF0aDpcIi4uL3B1YmxpYy9Fc3BhY2lvcy9PZmlfUGxhbnRhQmFqYS5zdmdcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuICAgIGNvbnN0IFtwaXNvLHNldFBpc29dPXVzZVN0YXRlKGRhdGFbMF0pO1xyXG4gICAgY29uc29sZS5sb2cocGxhY2UpO1xyXG4gICAgaWYocGxhY2U9PVwiQ0VDeVQgOVwiKXtcclxuICAgICAgICBjb25zdCBjYW1iaWFyPShzZWxlY3RlZE9wdGlvbik9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRPcHRpb24pO1xyXG4gICAgICAgICAgICBzZXRQaXNvKHNlbGVjdGVkT3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuYnVzY2Fkb3J9IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj0nQnVzY2FyJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9e3N0eWxlcy5idXNjYWRvcn0gb3B0aW9ucz17ZGF0YX0gb25DaGFuZ2U9e2NhbWJpYXJ9IHBsYWNlaG9sZGVyPSdQaXNvJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNob3dJbWFnZSB3aWR0aD17ODB9IHBpc289e3Bpc299PjwvU2hvd0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvUnV0YVwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+SW5pY2lhciBydXRhPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1pZihwbGFjZSA9PSAnVG93biBDZW50ZXInKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5idXNjYWRvcn0gdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPSdCdXNjYXInLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1J1dGFcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PkluaWNpYXIgcnV0YTwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaWZpY2lvIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpbmsiLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJTZWxlY3QiLCJFZGlmaWNpb3MiLCJTaG93SW1hZ2UiLCJkeW5hbWljIiwiRmxlY2hhcyIsInNzciIsIkVkaWZpY2lvIiwicm91dGVyIiwicGxhY2UiLCJxdWVyeSIsImRhdGEiLCJsYWJlbCIsInBhdGgiLCJwaXNvIiwic2V0UGlzbyIsImNvbnNvbGUiLCJsb2ciLCJjYW1iaWFyIiwic2VsZWN0ZWRPcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbnB1dCIsImJ1c2NhZG9yIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwid2lkdGgiLCJocmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Edificio/[place].js\n"));

/***/ })

});