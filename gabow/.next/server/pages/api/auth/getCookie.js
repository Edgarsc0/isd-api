"use strict";
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
exports.id = "pages/api/auth/getCookie";
exports.ids = ["pages/api/auth/getCookie"];
exports.modules = {

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./pages/api/auth/getCookie.js":
/*!*************************************!*\
  !*** ./pages/api/auth/getCookie.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default().config();\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { params  } = req.cookies;\n    if (params) {\n        const decryptedToken = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.decrypt(params, process.env.SECRET_KEY).toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8));\n        try {\n            jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(decryptedToken, process.env.SECURE_KEY);\n            return res.json({\n                status: \"Token verified\",\n                cookie: params\n            });\n        } catch (error) {\n            return res.json({\n                status: \"Invalid token\"\n            });\n        }\n    } else {\n        return res.json({\n            status: \"Invalid token\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9nZXRDb29raWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUNGO0FBQ0g7QUFFNUJFLG9EQUFhLEVBQUUsQ0FBQztBQUdoQiw2QkFBZSxvQ0FBU0UsR0FBRyxFQUFDQyxHQUFHLEVBQUM7SUFDNUIsTUFBTSxFQUFDQyxNQUFNLEdBQUMsR0FBQ0YsR0FBRyxDQUFDRyxPQUFPO0lBQzFCLElBQUdELE1BQU0sRUFBQztRQUNOLE1BQU1FLGNBQWMsR0FBQ1IsNERBQW9CLENBQUNNLE1BQU0sRUFBQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQyxDQUFDQyxRQUFRLENBQUNkLDJEQUFpQixDQUFDO1FBQ3BHLElBQUk7WUFDQUMsMERBQVUsQ0FBQ08sY0FBYyxFQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ00sVUFBVSxDQUFDO1lBQ2pELE9BQU9iLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDO2dCQUNaQyxNQUFNLEVBQUMsZ0JBQWdCO2dCQUN2QkMsTUFBTSxFQUFDZixNQUFNO2FBQ2hCLENBQUMsQ0FBQztRQUNQLEVBQUUsT0FBT2dCLEtBQUssRUFBRTtZQUNaLE9BQU9qQixHQUFHLENBQUNjLElBQUksQ0FBQztnQkFDWkMsTUFBTSxFQUFDLGVBQWU7YUFDekIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLE9BQUs7UUFDRCxPQUFPZixHQUFHLENBQUNjLElBQUksQ0FBQztZQUNaQyxNQUFNLEVBQUMsZUFBZTtTQUN6QixDQUFDLENBQUM7SUFDUCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhYm93Mi4wLy4vcGFnZXMvYXBpL2F1dGgvZ2V0Q29va2llLmpzP2Y4ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyeXB0b0pTIGZyb20gXCJjcnlwdG8tanNcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJlcSxyZXMpe1xyXG4gICAgY29uc3Qge3BhcmFtc309cmVxLmNvb2tpZXM7XHJcbiAgICBpZihwYXJhbXMpe1xyXG4gICAgICAgIGNvbnN0IGRlY3J5cHRlZFRva2VuPUNyeXB0b0pTLkFFUy5kZWNyeXB0KHBhcmFtcyxwcm9jZXNzLmVudi5TRUNSRVRfS0VZKS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgand0LnZlcmlmeShkZWNyeXB0ZWRUb2tlbixwcm9jZXNzLmVudi5TRUNVUkVfS0VZKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOlwiVG9rZW4gdmVyaWZpZWRcIixcclxuICAgICAgICAgICAgICAgIGNvb2tpZTpwYXJhbXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czpcIkludmFsaWQgdG9rZW5cIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICBzdGF0dXM6XCJJbnZhbGlkIHRva2VuXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJDcnlwdG9KUyIsImp3dCIsImRvdGVudiIsImNvbmZpZyIsInJlcSIsInJlcyIsInBhcmFtcyIsImNvb2tpZXMiLCJkZWNyeXB0ZWRUb2tlbiIsIkFFUyIsImRlY3J5cHQiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUX0tFWSIsInRvU3RyaW5nIiwiZW5jIiwiVXRmOCIsInZlcmlmeSIsIlNFQ1VSRV9LRVkiLCJqc29uIiwic3RhdHVzIiwiY29va2llIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/getCookie.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/getCookie.js"));
module.exports = __webpack_exports__;

})();