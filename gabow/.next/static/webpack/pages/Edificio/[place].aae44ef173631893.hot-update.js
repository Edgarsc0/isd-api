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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Edificio.module.scss */ \"./styles/Edificio.module.scss\");\n/* harmony import */ var _styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.esm.js\");\n/* harmony import */ var _components_Edificios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Edificios */ \"./components/Edificios.jsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Flechas = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function() {\n    return __webpack_require__.e(/*! import() */ \"components_Flechas_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Flechas */ \"./components/Flechas.jsx\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"Edificio\\\\[place].js -> \" + \"../../components/Flechas\"\n        ]\n    },\n    ssr: false\n});\n_c1 = Flechas;\nvar Edificio = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var place = router.query.place;\n    console.log(place);\n    if (place == \"CECyT 9\") {\n        var data = [\n            {\n                label: \"Aul_Piso1\",\n                path: \"../../public/Espacios/Aul_Piso1.svg\"\n            },\n            {\n                label: \"Aul_Piso2\",\n                path: \"../../public/Espacios/Aul_Piso2.svg\"\n            },\n            {\n                label: \"Aul_Piso3\",\n                path: \"../../public/Espacios/Aul_Piso3.svg\"\n            },\n            {\n                label: \"Aul_PlantaBaja\",\n                path: \"../../public/Espacios/Aul_PlantaBaja.svg\"\n            },\n            {\n                label: \"Espacios_Libres\",\n                path: \"../../public/Espacios/Espacios_Libres.svg\"\n            },\n            {\n                label: \"Ofi_Piso1\",\n                path: \"../../public/Espacios/Ofi_Piso1.svg\"\n            },\n            {\n                label: \"Ofi_PlantaBaja\",\n                path: \"../../public/Espacios/Ofi_PlantaBaja.svg\"\n            }\n        ];\n        var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data[0]), piso = ref[0], setPiso = ref[1];\n        var cambiar = function(selectedOption) {\n            console.log(selectedOption);\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().buscador),\n                        type: \"search\",\n                        placeholder: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().buscador),\n                        options: data,\n                        onChange: cambiar,\n                        placeholder: \"Piso\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/Ruta\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().button),\n                            children: \"Iniciar ruta\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                            lineNumber: 56,\n                            columnNumber: 40\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false);\n    }\n    if (place == \"Town Center\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().buscador),\n                        type: \"search\",\n                        placeholder: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/Ruta\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: (_styles_Edificio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().button),\n                            children: \"Iniciar ruta\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                            lineNumber: 65,\n                            columnNumber: 40\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Users\\\\esanc\\\\OneDrive\\\\Escritorio\\\\pr\\\\gabow\\\\pages\\\\Edificio\\\\[place].js\",\n                lineNumber: 63,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false);\n    }\n};\n_s(Edificio, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = Edificio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edificio);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Flechas$dynamic\");\n$RefreshReg$(_c1, \"Flechas\");\n$RefreshReg$(_c2, \"Edificio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVyQiw0RUFBYTtzQ0FBRSxjQUFZOzs7OztpQ0FBUzs7Ozs7NkJBQU87Ozs7OztxQkFDN0Y7eUJBQ1AsQ0FDTjtJQUNMLENBQUM7QUFDTCxDQUFDO0dBMURLTyxRQUFROztRQUNHTixrREFBUzs7O0FBRHBCTSxNQUFBQSxRQUFRO0FBNERkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0VkaWZpY2lvL1twbGFjZV0uanM/ZWU5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvRWRpZmljaW8ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcclxuaW1wb3J0IEVkaWZpY2lvcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0VkaWZpY2lvcydcclxuXHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIlxyXG5jb25zdCBGbGVjaGFzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL0ZsZWNoYXNcIiksIHsgc3NyOiBmYWxzZSB9KVxyXG5cclxuY29uc3QgRWRpZmljaW8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7cGxhY2V9PXJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKHBsYWNlKTtcclxuICAgIGlmKHBsYWNlPT1cIkNFQ3lUIDlcIil7XHJcbiAgICAgICAgY29uc3QgZGF0YT1bXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOlwiQXVsX1Bpc28xXCIsXHJcbiAgICAgICAgICAgICAgICBwYXRoOlwiLi4vLi4vcHVibGljL0VzcGFjaW9zL0F1bF9QaXNvMS5zdmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDpcIkF1bF9QaXNvMlwiLFxyXG4gICAgICAgICAgICAgICAgcGF0aDpcIi4uLy4uL3B1YmxpYy9Fc3BhY2lvcy9BdWxfUGlzbzIuc3ZnXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6XCJBdWxfUGlzbzNcIixcclxuICAgICAgICAgICAgICAgIHBhdGg6XCIuLi8uLi9wdWJsaWMvRXNwYWNpb3MvQXVsX1Bpc28zLnN2Z1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOlwiQXVsX1BsYW50YUJhamFcIixcclxuICAgICAgICAgICAgICAgIHBhdGg6XCIuLi8uLi9wdWJsaWMvRXNwYWNpb3MvQXVsX1BsYW50YUJhamEuc3ZnXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6XCJFc3BhY2lvc19MaWJyZXNcIixcclxuICAgICAgICAgICAgICAgIHBhdGg6XCIuLi8uLi9wdWJsaWMvRXNwYWNpb3MvRXNwYWNpb3NfTGlicmVzLnN2Z1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOlwiT2ZpX1Bpc28xXCIsXHJcbiAgICAgICAgICAgICAgICBwYXRoOlwiLi4vLi4vcHVibGljL0VzcGFjaW9zL09maV9QaXNvMS5zdmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDpcIk9maV9QbGFudGFCYWphXCIsXHJcbiAgICAgICAgICAgICAgICBwYXRoOlwiLi4vLi4vcHVibGljL0VzcGFjaW9zL09maV9QbGFudGFCYWphLnN2Z1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc3QgW3Bpc28sc2V0UGlzb109dXNlU3RhdGUoZGF0YVswXSk7XHJcbiAgICAgICAgY29uc3QgY2FtYmlhcj0oc2VsZWN0ZWRPcHRpb24pPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkT3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuYnVzY2Fkb3J9IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj0nQnVzY2FyJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9e3N0eWxlcy5idXNjYWRvcn0gb3B0aW9ucz17ZGF0YX0gb25DaGFuZ2U9e2NhbWJpYXJ9IHBsYWNlaG9sZGVyPSdQaXNvJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9SdXRhXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5JbmljaWFyIHJ1dGE8L2J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfWlmKHBsYWNlID09ICdUb3duIENlbnRlcicpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmJ1c2NhZG9yfSB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9J0J1c2NhcicvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvUnV0YVwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+SW5pY2lhciBydXRhPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpZmljaW8iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsInN0eWxlcyIsInVzZVJvdXRlciIsIlNlbGVjdCIsIkVkaWZpY2lvcyIsImR5bmFtaWMiLCJGbGVjaGFzIiwic3NyIiwiRWRpZmljaW8iLCJyb3V0ZXIiLCJwbGFjZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJsYWJlbCIsInBhdGgiLCJwaXNvIiwic2V0UGlzbyIsImNhbWJpYXIiLCJzZWxlY3RlZE9wdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImlucHV0IiwiYnVzY2Fkb3IiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJocmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Edificio/[place].js\n"));

/***/ })

});