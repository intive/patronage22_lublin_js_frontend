module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/products/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/ProductItem/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ProductItem/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ "@mui/material/Card");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardActions */ "@mui/material/CardActions");
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardContent */ "@mui/material/CardContent");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardMedia */ "@mui/material/CardMedia");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ "@mui/material/Button");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\components\\ProductItem\\index.tsx";








function ProductItem(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  function showDetailsHandler() {
    router.push("/products/" + props.id);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: "item",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
      sx: {
        maxWidth: 445
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5___default.a, {
        component: "img",
        alt: props.title,
        image: props.photos
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
          gutterBottom: true,
          variant: "h5",
          component: "div",
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
          variant: "body2",
          color: "text.secondary",
          children: props.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
          variant: "h6",
          color: "div",
          className: "price",
          children: [props.price, ".00$"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
          size: "small",
          children: "Buy now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
          size: "small",
          onClick: showDetailsHandler,
          children: "Learn More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ }),

/***/ "./src/components/ProductList/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ProductList/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductItem */ "./src/components/ProductItem/index.tsx");

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\components\\ProductList\\index.tsx";


function ProductList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "list",
    children: props.products.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: product.id,
      photos: product.photos,
      title: product.title,
      description: product.description,
      price: product.price
    }, product.id, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./src/lib/products.tsx":
/*!******************************!*\
  !*** ./src/lib/products.tsx ***!
  \******************************/
/*! exports provided: loadProducts, loadProductDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProducts", function() { return loadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProductDetails", function() { return loadProductDetails; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function loadProducts() {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://proxy-patronageapi.bsolutions.usermd.net/api/products/getAllProductsExternal");
  const data = await res.data;
  return data;
}
async function loadProductDetails(productId) {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://proxy-patronageapi.bsolutions.usermd.net/api/products/external/${productId}`);
  const data = await res.data;
  return data;
}

/***/ }),

/***/ "./src/pages/products/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/products/index.tsx ***!
  \**************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ProductList */ "./src/components/ProductList/index.tsx");
/* harmony import */ var _lib_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/products */ "./src/lib/products.tsx");

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\pages\\products\\index.tsx";



function ProductsPage({
  products
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: ["Home ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "location",
        children: [" ", ">", " Products"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 14
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      products: products
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

const getStaticProps = async () => {
  const products = await Object(_lib_products__WEBPACK_IMPORTED_MODULE_2__["loadProducts"])();
  return {
    props: {
      products: products.map(product => ({
        title: product.title,
        description: product.description,
        id: product.id,
        photos: product.photos[0].url,
        price: product.price
      }))
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (ProductsPage);

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Card":
/*!*************************************!*\
  !*** external "@mui/material/Card" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ "@mui/material/CardActions":
/*!********************************************!*\
  !*** external "@mui/material/CardActions" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ "@mui/material/CardContent":
/*!********************************************!*\
  !*** external "@mui/material/CardContent" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ "@mui/material/CardMedia":
/*!******************************************!*\
  !*** external "@mui/material/CardMedia" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/CardMedia");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Byb2R1Y3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJQcm9kdWN0SXRlbSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2hvd0RldGFpbHNIYW5kbGVyIiwicHVzaCIsImlkIiwibWF4V2lkdGgiLCJ0aXRsZSIsInBob3RvcyIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsImxvYWRQcm9kdWN0cyIsInJlcyIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImxvYWRQcm9kdWN0RGV0YWlscyIsInByb2R1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QSx3QkFBNkIsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQywrREFBRDtBQUFhLGNBQVEsRUFBRUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0FBRU0sTUFBTVcsY0FBOEIsR0FBRyxZQUFZO0FBQ3hELFFBQU1YLFFBQVEsR0FBRyxNQUFNRyxrRUFBWSxFQUFuQztBQUVBLFNBQU87QUFDTGYsU0FBSyxFQUFFO0FBQ0xZLGNBQVEsRUFBRUEsUUFBUSxDQUFDQyxHQUFULENBQWNDLE9BQUQsS0FBbUI7QUFDeENQLGFBQUssRUFBRU8sT0FBTyxDQUFDUCxLQUR5QjtBQUV4Q0UsbUJBQVcsRUFBRUssT0FBTyxDQUFDTCxXQUZtQjtBQUd4Q0osVUFBRSxFQUFFUyxPQUFPLENBQUNULEVBSDRCO0FBSXhDRyxjQUFNLEVBQUVNLE9BQU8sQ0FBQ04sTUFBUixDQUFlLENBQWYsRUFBa0JnQixHQUpjO0FBS3hDZCxhQUFLLEVBQUVJLE9BQU8sQ0FBQ0o7QUFMeUIsT0FBbkIsQ0FBYjtBQURMO0FBREYsR0FBUDtBQVdELENBZE07QUFnQlFZLDJFQUFmLEU7Ozs7Ozs7Ozs7O0FDbENBLGlEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zXCI7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdEl0ZW1Qcm9wcyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBwaG90b3M6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEl0ZW0ocHJvcHM6IFByb2R1Y3RJdGVtUHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgZnVuY3Rpb24gc2hvd0RldGFpbHNIYW5kbGVyKCkge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZHVjdHMvXCIgKyBwcm9wcy5pZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgPENhcmQgc3g9e3sgbWF4V2lkdGg6IDQ0NSB9fT5cclxuICAgICAgICA8Q2FyZE1lZGlhIGNvbXBvbmVudD1cImltZ1wiIGFsdD17cHJvcHMudGl0bGV9IGltYWdlPXtwcm9wcy5waG90b3N9IC8+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICB7cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiZGl2XCIgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuICAgICAgICAgICAge3Byb3BzLnByaWNlfS4wMCRcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+QnV5IG5vdzwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXtzaG93RGV0YWlsc0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICBMZWFybiBNb3JlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtO1xyXG4iLCJpbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4uL1Byb2R1Y3RJdGVtXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdExpc3RQcm9wcyB7XHJcbiAgcHJvZHVjdHM6IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0TGlzdChwcm9wczogUHJvZHVjdExpc3RQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICB7cHJvcHMucHJvZHVjdHMubWFwKChwcm9kdWN0OiBhbnkpID0+IChcclxuICAgICAgICA8UHJvZHVjdEl0ZW1cclxuICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgcGhvdG9zPXtwcm9kdWN0LnBob3Rvc31cclxuICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBwcmljZT17cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUHJvZHVjdHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgXCJodHRwOi8vcHJveHktcGF0cm9uYWdlYXBpLmJzb2x1dGlvbnMudXNlcm1kLm5ldC9hcGkvcHJvZHVjdHMvZ2V0QWxsUHJvZHVjdHNFeHRlcm5hbFwiXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmRhdGE7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFByb2R1Y3REZXRhaWxzKHByb2R1Y3RJZDogYW55KSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHA6Ly9wcm94eS1wYXRyb25hZ2VhcGkuYnNvbHV0aW9ucy51c2VybWQubmV0L2FwaS9wcm9kdWN0cy9leHRlcm5hbC8ke3Byb2R1Y3RJZH1gXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmRhdGE7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImltcG9ydCBQcm9kdWN0TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdFwiO1xyXG5pbXBvcnQgeyBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgbG9hZFByb2R1Y3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9wcm9kdWN0c1wiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdHNQYWdlKHtcclxuICBwcm9kdWN0cyxcclxufTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPlxyXG4gICAgICAgIEhvbWUgPHNwYW4gY2xhc3NOYW1lPVwibG9jYXRpb25cIj4ge1wiPlwifSBQcm9kdWN0czwvc3Bhbj5cclxuICAgICAgPC9oMT5cclxuICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgbG9hZFByb2R1Y3RzKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0czogcHJvZHVjdHMubWFwKChwcm9kdWN0OiBhbnkpID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IHByb2R1Y3QudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgcGhvdG9zOiBwcm9kdWN0LnBob3Rvc1swXS51cmwsXHJcbiAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXHJcbiAgICAgIH0pKSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=