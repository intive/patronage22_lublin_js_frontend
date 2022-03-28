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
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardContent */ "@mui/material/CardContent");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardMedia */ "@mui/material/CardMedia");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ "@mui/material/IconButton");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_ZoomInOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ZoomInOutlined */ "@mui/icons-material/ZoomInOutlined");
/* harmony import */ var _mui_icons_material_ZoomInOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ZoomInOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend\\patronage22_lublin_js_frontend\\src\\components\\ProductItem\\index.tsx";









const CustomIcon = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__["styled"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a)(({
  theme
}) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  transition: "all 0.3s linear",
  opacity: 0,
  cursor: "pointer",
  "&:hover ": {
    background: theme.palette.primary.main
  }
}));
const CustomContainer = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__["styled"])(_mui_material__WEBPACK_IMPORTED_MODULE_8__["Box"])(({
  theme
}) => ({
  position: "relative",
  backgroundColor: "#222",
  borderRadius: "0.25rem",
  "&:hover img": {
    opacity: 0.5,
    cursor: "pointer"
  },
  "&:hover button": {
    opacity: 1
  }
}));

function ProductItem(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  function showDetailsHandler() {
    router.push("/products/" + props.id);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "item",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CustomContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default.a, {
          component: "img",
          alt: props.title,
          image: props.photos,
          sx: {
            transition: "all 0.3s linear"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CustomIcon, {
          onClick: showDetailsHandler,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_icons_material_ZoomInOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
            sx: {
              color: "white",
              fontSize: "40px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_8__["Stack"], {
          direction: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          spacing: 2,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
            sx: {
              fontSize: 14
            },
            gutterBottom: true,
            component: "div",
            children: props.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
            sx: {
              fontSize: 14
            },
            gutterBottom: true,
            component: "div",
            children: [props.price, ".00$"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend\\patronage22_lublin_js_frontend\\src\\components\\ProductList\\index.tsx";


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

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend\\patronage22_lublin_js_frontend\\src\\pages\\products\\index.tsx";



function ProductsPage({
  products
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
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

/***/ "@mui/icons-material/ZoomInOutlined":
/*!*****************************************************!*\
  !*** external "@mui/icons-material/ZoomInOutlined" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/ZoomInOutlined");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/Card":
/*!*************************************!*\
  !*** external "@mui/material/Card" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Card");

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

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/styles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Byb2R1Y3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvWm9vbUluT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ3VzdG9tSWNvbiIsInN0eWxlZCIsIkljb25CdXR0b24iLCJ0aGVtZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJhY2tncm91bmQiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIiwib3BhY2l0eSIsImN1cnNvciIsIkN1c3RvbUNvbnRhaW5lciIsIkJveCIsImJhY2tncm91bmRDb2xvciIsIlByb2R1Y3RJdGVtIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaG93RGV0YWlsc0hhbmRsZXIiLCJwdXNoIiwiaWQiLCJ0aXRsZSIsInBob3RvcyIsImNvbG9yIiwiZm9udFNpemUiLCJwcmljZSIsIlByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiZGVzY3JpcHRpb24iLCJsb2FkUHJvZHVjdHMiLCJyZXMiLCJheGlvcyIsImdldCIsImRhdGEiLCJsb2FkUHJvZHVjdERldGFpbHMiLCJwcm9kdWN0SWQiLCJQcm9kdWN0c1BhZ2UiLCJnZXRTdGF0aWNQcm9wcyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVB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QUFnQlFhLDJFQUFmLEU7Ozs7Ozs7Ozs7O0FDbENBLCtEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zXCI7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFpvb21Jbk91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9ab29tSW5PdXRsaW5lZFwiO1xyXG5pbXBvcnQgeyBCb3gsIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcblxyXG5jb25zdCBDdXN0b21JY29uID0gc3R5bGVkKEljb25CdXR0b24pKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICB0b3A6IFwiNTAlXCIsXHJcbiAgbGVmdDogXCI1MCVcIixcclxuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICB3aWR0aDogXCIzcmVtXCIsXHJcbiAgaGVpZ2h0OiBcIjNyZW1cIixcclxuICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBsaW5lYXJcIixcclxuICBvcGFjaXR5OiAwLFxyXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgXCImOmhvdmVyIFwiOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBDdXN0b21Db250YWluZXIgPSBzdHlsZWQoQm94KSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiMyMjJcIixcclxuICBib3JkZXJSYWRpdXM6IFwiMC4yNXJlbVwiLFxyXG4gIFwiJjpob3ZlciBpbWdcIjoge1xyXG4gICAgb3BhY2l0eTogMC41LFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICB9LFxyXG4gIFwiJjpob3ZlciBidXR0b25cIjoge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdEl0ZW1Qcm9wcyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBwaG90b3M6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEl0ZW0ocHJvcHM6IFByb2R1Y3RJdGVtUHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgZnVuY3Rpb24gc2hvd0RldGFpbHNIYW5kbGVyKCkge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZHVjdHMvXCIgKyBwcm9wcy5pZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxDdXN0b21Db250YWluZXI+XHJcbiAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgIGFsdD17cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgIGltYWdlPXtwcm9wcy5waG90b3N9XHJcbiAgICAgICAgICAgIHN4PXt7IHRyYW5zaXRpb246IFwiYWxsIDAuM3MgbGluZWFyXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q3VzdG9tSWNvbiBvbkNsaWNrPXtzaG93RGV0YWlsc0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8Wm9vbUluT3V0bGluZWRJY29uXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ3VzdG9tSWNvbj5cclxuICAgICAgICA8L0N1c3RvbUNvbnRhaW5lcj5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMTQgfX0gZ3V0dGVyQm90dG9tIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMTQgfX0gZ3V0dGVyQm90dG9tIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5wcmljZX0uMDAkXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEl0ZW07XHJcbiIsImltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vUHJvZHVjdEl0ZW1cIjtcclxuXHJcbmludGVyZmFjZSBQcm9kdWN0TGlzdFByb3BzIHtcclxuICBwcm9kdWN0czogW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KHByb3BzOiBQcm9kdWN0TGlzdFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IGFueSkgPT4gKFxyXG4gICAgICAgIDxQcm9kdWN0SXRlbVxyXG4gICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgaWQ9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICBwaG90b3M9e3Byb2R1Y3QucGhvdG9zfVxyXG4gICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQcm9kdWN0cygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBcImh0dHA6Ly9wcm94eS1wYXRyb25hZ2VhcGkuYnNvbHV0aW9ucy51c2VybWQubmV0L2FwaS9wcm9kdWN0cy9nZXRBbGxQcm9kdWN0c0V4dGVybmFsXCJcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuZGF0YTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUHJvZHVjdERldGFpbHMocHJvZHVjdElkOiBhbnkpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cDovL3Byb3h5LXBhdHJvbmFnZWFwaS5ic29sdXRpb25zLnVzZXJtZC5uZXQvYXBpL3Byb2R1Y3RzL2V4dGVybmFsLyR7cHJvZHVjdElkfWBcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuZGF0YTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0XCI7XHJcbmltcG9ydCB7IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBsb2FkUHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vbGliL3Byb2R1Y3RzXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0c1BhZ2Uoe1xyXG4gIHByb2R1Y3RzLFxyXG59OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgSG9tZSA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvblwiPiB7XCI+XCJ9IFByb2R1Y3RzPC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBsb2FkUHJvZHVjdHMoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IGFueSkgPT4gKHtcclxuICAgICAgICB0aXRsZTogcHJvZHVjdC50aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcHJvZHVjdC5kZXNjcmlwdGlvbixcclxuICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICBwaG90b3M6IHByb2R1Y3QucGhvdG9zWzBdLnVybCxcclxuICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgfSkpLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1pvb21Jbk91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkTWVkaWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==