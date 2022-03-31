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

/***/ "./src/components/Categories/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Categories/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/List */ "@mui/material/List");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ListItem */ "@mui/material/ListItem");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\components\\Categories\\index.tsx";




function Categories(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      marginTop: "-1rem",
      marginLeft: "-1rem"
    },
    children: props.categories.map(category => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "category-item",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
        sx: {
          fontSize: 14,
          color: "#0056ad",
          cursor: "pointer"
        },
        gutterBottom: true,
        component: "div",
        children: category
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "./src/components/Companies/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Companies/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/MenuItem */ "@mui/material/MenuItem");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/FormControl */ "@mui/material/FormControl");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Select */ "@mui/material/Select");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\components\\Companies\\index.tsx";




function Companies(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
    sx: {
      minWidth: 180
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Select__WEBPACK_IMPORTED_MODULE_3___default.a, {
      displayEmpty: true,
      id: "demo-controlled-open-select",
      value: props.value,
      label: "Age",
      onChange: props.onChange,
      style: {
        height: 30
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
        disabled: true,
        value: "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
          children: "None"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
        value: "all",
        children: "All"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
        value: "apple",
        children: "Apple"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
        value: "android",
        children: "Android"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Companies);

/***/ }),

/***/ "./src/components/ListProductsView/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/ListProductsView/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Paper */ "@mui/material/Paper");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Stack */ "@mui/material/Stack");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_ZoomInOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/ZoomInOutlined */ "@mui/icons-material/ZoomInOutlined");
/* harmony import */ var _mui_icons_material_ZoomInOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ZoomInOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardMedia */ "@mui/material/CardMedia");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ "@mui/material/IconButton");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\components\\ListProductsView\\index.tsx";










function ListProductsView(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const Item = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["styled"])(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_1___default.a)(({
    theme
  }) => ({
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.text.secondary
  }));
  const CustomIcon = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["styled"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a)(({
    theme
  }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    background: theme.palette.primary.main,
    transform: "translate(-50%, -50%)",
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
  const CustomContainer = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["styled"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default.a)(({
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default.a, {
    sx: {
      width: "100%",
      marginLeft: "1rem"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default.a, {
      spacing: 2,
      children: props.products.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CustomContainer, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default.a, {
            component: "img",
            alt: product.title,
            image: product.photos,
            sx: {
              transition: "all 0.3s linear",
              width: "250px",
              height: "150px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CustomIcon, {
            onClick: () => {
              router.push("/products/" + product.id);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_icons_material_ZoomInOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, {
              sx: {
                color: "white",
                fontSize: "40px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
          sx: {
            fontSize: 14
          },
          gutterBottom: true,
          component: "div",
          children: product.description
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
          children: product.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default.a, {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          spacing: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
            sx: {
              fontSize: 14
            },
            gutterBottom: true,
            component: "div",
            children: product.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
            sx: {
              fontSize: 14
            },
            gutterBottom: true,
            component: "div",
            children: [product.price, ".00$"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ListProductsView);

/***/ }),

/***/ "./src/components/MainButton/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/MainButton/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\components\\MainButton\\index.tsx";



const CustomButton = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["styled"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Button"])(({
  theme
}) => ({
  backgroundColor: theme.palette.primary.main,
  fontSize: 14,
  padding: '12px 30px',
  lineHeight: 1.5,
  border: '1px solid',
  borderColor: theme.palette.primary.main,
  textTransform: 'none',
  borderRadius: '0.25 rem',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
    boxShadow: 'none',
    color: theme.palette.text.primary
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.light
  }
}));
const MainButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(({
  onClick,
  href,
  children
}, ref) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    href: href,
    onClick: onClick,
    ref: ref,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (MainButton);

/***/ }),

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

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\components\\ProductItem\\index.tsx";









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

/***/ "./src/components/SearchBar/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SearchBar/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ "@mui/material/TextField");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\components\\SearchBar\\index.tsx";



function SearchBar(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: 200,
      position: "relative"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "standard-search",
      label: "Search",
      type: "search",
      variant: "standard",
      onChange: props.onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/components/Sort/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Sort/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/MenuItem */ "@mui/material/MenuItem");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/FormControl */ "@mui/material/FormControl");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Select */ "@mui/material/Select");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\components\\Sort\\index.tsx";




function Sort(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
    sx: {
      minWidth: 180
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Select__WEBPACK_IMPORTED_MODULE_3___default.a, {
      displayEmpty: true,
      id: "demo-controlled-open-select",
      value: props.value,
      label: "Sort",
      onChange: props.onChange,
      style: {
        height: 30
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
        value: "low-price",
        children: "Price (Lowest)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
        value: "high-price",
        children: "Price (Highest)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Sort);

/***/ }),

/***/ "./src/pages/products/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/products/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ProductList */ "./src/components/ProductList/index.tsx");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Grid */ "@mui/material/Grid");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Slider */ "@mui/material/Slider");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MainButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/MainButton */ "./src/components/MainButton/index.tsx");
/* harmony import */ var _mui_icons_material_GridView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/GridView */ "@mui/icons-material/GridView");
/* harmony import */ var _mui_icons_material_GridView__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_GridView__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/FormatListBulleted */ "@mui/icons-material/FormatListBulleted");
/* harmony import */ var _mui_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ListProductsView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ListProductsView */ "./src/components/ListProductsView/index.tsx");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/SearchBar */ "./src/components/SearchBar/index.tsx");
/* harmony import */ var _components_Categories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Categories */ "./src/components/Categories/index.tsx");
/* harmony import */ var _components_Companies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Companies */ "./src/components/Companies/index.tsx");
/* harmony import */ var _components_Sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Sort */ "./src/components/Sort/index.tsx");

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\pages\\products\\index.tsx";













const products = [{
  id: 1,
  title: "Pierwszy produkt",
  price: 1499.99,
  description: "Opis proiduktu",
  category: "Books",
  photos: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
}, {
  id: 2,
  title: "Drugi produkt",
  price: 105.99,
  description: "First Prod",
  category: "Clothing",
  photos: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80"
}, {
  id: 3,
  title: "Trzeci produkt",
  price: 59.99,
  description: "Sec Prod",
  photos: "https://images.unsplash.com/photo-1589244159943-460088ed5c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80"
}, {
  id: 4,
  title: "Pierwszy produkt",
  price: 10229.5,
  description: "Opis proiduktu",
  category: "Jewelery",
  photos: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
}, {
  id: 5,
  title: "Drugi produkt",
  price: 5000.99,
  category: "Accessorries",
  description: "First Prod",
  photos: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80"
}, {
  id: 6,
  title: "Trzeci produkt",
  price: 2499.89,
  description: "Sec Prod",
  category: "Furnitures",
  photos: "https://images.unsplash.com/photo-1589244159943-460088ed5c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80"
}];

function ProductsPage() {
  const maxPrice = Math.max.apply(Math, products.map(function (o) {
    return o.price;
  }));
  const minPrice = Math.min.apply(Math, products.map(function (o) {
    return o.price;
  }));
  const {
    0: company,
    1: setCompany
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: price,
    1: setPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(maxPrice);
  const {
    0: sortCondition,
    1: setSortCondition
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: isListView,
    1: setListView
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: searchTerm,
    1: setSearchTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const categories = ["All", "Books", "Clothing", "Furnitures", "Accessorries", "Jewelery"];

  const handleSliderChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleChange = event => {
    setCompany(event.target.value);
  };

  const handleSortChange = event => {
    setSortCondition(event.target.value);
  };

  const handleListView = () => {
    setListView(true);
  };

  const handleGridView = () => {
    setListView(false);
  };

  const clearFiltersHandler = () => {
    setPrice(maxPrice);
    setSortCondition("");
    setSearchTerm("");
    setCategory(null);
  };

  if (false) {}

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Home ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "location",
        children: [" ", ">", " Products"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 14
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
      sx: {
        marginTop: 5
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        spacing: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 12,
          md: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
            onChange: event => {
              setSearchTerm(event.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Category"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Categories__WEBPACK_IMPORTED_MODULE_11__["default"], {
            categories: categories
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Companies__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onChange: handleChange,
            value: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "#0056ad"
            },
            children: ["$ ", price, ",00"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
            sx: {
              width: 180
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_5___default.a, {
              value: price,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              min: minPrice,
              max: maxPrice,
              step: 100
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
            sx: {
              marginTop: 3
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
              onClick: clearFiltersHandler,
              children: "CLEAR FILTERS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 12,
          md: 9,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
            sx: {
              width: "100%",
              marginLeft: "1rem",
              display: "flex",
              alignItems: "center"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_icons_material_GridView__WEBPACK_IMPORTED_MODULE_7___default.a, {
              style: {
                marginRight: "0.5rem",
                cursor: "pointer"
              },
              onClick: handleGridView
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_8___default.a, {
              style: {
                marginRight: "0.5rem",
                cursor: "pointer"
              },
              onClick: handleListView
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                marginRight: "0.5rem"
              },
              children: [products.length, " products found"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                height: "3px",
                width: "42%",
                backgroundColor: "blue",
                marginRight: "0.5rem"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                marginRight: "0.5rem"
              },
              children: "Sort By"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Sort__WEBPACK_IMPORTED_MODULE_13__["default"], {
              onChange: handleSortChange,
              value: sortCondition
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "products",
            children: !isListView ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__["default"], {
              products: sortCondition === "high-price" ? products.filter(product => {
                if (searchTerm === "") {
                  return product.price <= price && category ? product.category === category : product.price <= price;
                } else if (product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                  return product.price <= price && category ? product.category === category : product.price <= price;
                }
              }).sort(function (a, b) {
                return b.price - a.price;
              }) : products.filter(product => {
                if (searchTerm === "") {
                  return product.price <= price && category ? product.category === category : product.price <= price;
                } else if (product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                  return product.price <= price && category ? product.category === category : product.price <= price;
                }
              }).sort(function (a, b) {
                return a.price - b.price;
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ListProductsView__WEBPACK_IMPORTED_MODULE_9__["default"], {
              products: sortCondition === "high-price" ? products.filter(product => {
                if (searchTerm === "") {
                  return product.price <= price && category ? product.category === category : product.price <= price;
                } else if (product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                  return product.price <= price && category ? product.category === category : product.price <= price;
                }
              }).sort(function (a, b) {
                return b.price - a.price;
              }) : products.filter(product => {
                if (searchTerm === "") {
                  return product.price <= price && category ? product.category === category : product.price <= price;
                } else if (product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                  return product.price <= price && category ? product.category === category : product.price <= price;
                }
              }).sort(function (a, b) {
                return a.price - b.price;
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 5
  }, this);
}
/*
export const getStaticProps: GetStaticProps = async () => {
  const products = await loadProducts();

  return {
    props: {
      products: products.map((product: any) => ({
        title: product.title,
        description: product.description,
        id: product.id,
        photos: product.photos[0].url,
        price: product.price,
      })),
    },
  };
};
*/


/* harmony default export */ __webpack_exports__["default"] = (ProductsPage);

/***/ }),

/***/ "@mui/icons-material/FormatListBulleted":
/*!*********************************************************!*\
  !*** external "@mui/icons-material/FormatListBulleted" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/FormatListBulleted");

/***/ }),

/***/ "@mui/icons-material/GridView":
/*!***********************************************!*\
  !*** external "@mui/icons-material/GridView" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/GridView");

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

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Box");

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

/***/ "@mui/material/FormControl":
/*!********************************************!*\
  !*** external "@mui/material/FormControl" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/List":
/*!*************************************!*\
  !*** external "@mui/material/List" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/List");

/***/ }),

/***/ "@mui/material/ListItem":
/*!*****************************************!*\
  !*** external "@mui/material/ListItem" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ "@mui/material/MenuItem":
/*!*****************************************!*\
  !*** external "@mui/material/MenuItem" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/Select":
/*!***************************************!*\
  !*** external "@mui/material/Select" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Select");

/***/ }),

/***/ "@mui/material/Slider":
/*!***************************************!*\
  !*** external "@mui/material/Slider" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Slider");

/***/ }),

/***/ "@mui/material/Stack":
/*!**************************************!*\
  !*** external "@mui/material/Stack" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ "@mui/material/TextField":
/*!******************************************!*\
  !*** external "@mui/material/TextField" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/TextField");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcmllcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tcGFuaWVzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaXN0UHJvZHVjdHNWaWV3L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdExpc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Zvcm1hdExpc3RCdWxsZXRlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvR3JpZFZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL1pvb21Jbk91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9TbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1N0YWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDYXRlZ29yaWVzIiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiZm9udFNpemUiLCJjb2xvciIsImN1cnNvciIsIkNvbXBhbmllcyIsIm1pbldpZHRoIiwidmFsdWUiLCJvbkNoYW5nZSIsImhlaWdodCIsIkxpc3RQcm9kdWN0c1ZpZXciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJJdGVtIiwic3R5bGVkIiwiUGFwZXIiLCJ0aGVtZSIsInBhZGRpbmciLCJzcGFjaW5nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiQ3VzdG9tSWNvbiIsIkljb25CdXR0b24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsIm1haW4iLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiQ3VzdG9tQ29udGFpbmVyIiwiQm94IiwiYmFja2dyb3VuZENvbG9yIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwidGl0bGUiLCJwaG90b3MiLCJwdXNoIiwiaWQiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiQ3VzdG9tQnV0dG9uIiwiQnV0dG9uIiwibGluZUhlaWdodCIsImJvcmRlciIsImJvcmRlckNvbG9yIiwidGV4dFRyYW5zZm9ybSIsImxpZ2h0IiwiYm94U2hhZG93IiwiTWFpbkJ1dHRvbiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsIm9uQ2xpY2siLCJocmVmIiwiY2hpbGRyZW4iLCJyZWYiLCJQcm9kdWN0SXRlbSIsInNob3dEZXRhaWxzSGFuZGxlciIsIlByb2R1Y3RMaXN0IiwiU2VhcmNoQmFyIiwiU29ydCIsIlByb2R1Y3RzUGFnZSIsIm1heFByaWNlIiwiTWF0aCIsIm1heCIsImFwcGx5IiwibyIsIm1pblByaWNlIiwibWluIiwiY29tcGFueSIsInNldENvbXBhbnkiLCJ1c2VTdGF0ZSIsInNldFByaWNlIiwic29ydENvbmRpdGlvbiIsInNldFNvcnRDb25kaXRpb24iLCJpc0xpc3RWaWV3Iiwic2V0TGlzdFZpZXciLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNldENhdGVnb3J5IiwiaGFuZGxlU2xpZGVyQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImhhbmRsZVNvcnRDaGFuZ2UiLCJoYW5kbGVMaXN0VmlldyIsImhhbmRsZUdyaWRWaWV3IiwiY2xlYXJGaWx0ZXJzSGFuZGxlciIsIm1hcmdpblJpZ2h0IiwibGVuZ3RoIiwiZmlsdGVyIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJpbmNsdWRlcyIsInNvcnQiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUFnQztBQUM5QixzQkFDRSxxRUFBQyx5REFBRDtBQUFNLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsT0FBYjtBQUFzQkMsZ0JBQVUsRUFBRTtBQUFsQyxLQUFiO0FB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Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xyXG5cclxuZnVuY3Rpb24gQ2F0ZWdvcmllcyhwcm9wczogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IHN0eWxlPXt7IG1hcmdpblRvcDogXCItMXJlbVwiLCBtYXJnaW5MZWZ0OiBcIi0xcmVtXCIgfX0+XHJcbiAgICAgIHtwcm9wcy5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnk6IGFueSkgPT4gKFxyXG4gICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9XCJjYXRlZ29yeS1pdGVtXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBzeD17eyBmb250U2l6ZTogMTQsIGNvbG9yOiBcIiMwMDU2YWRcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICkpfVxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7XHJcbiIsImltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TZWxlY3RcIjtcclxuXHJcbmZ1bmN0aW9uIENvbXBhbmllcyhwcm9wczogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQ29udHJvbCBzeD17eyBtaW5XaWR0aDogMTgwIH19PlxyXG4gICAgICA8U2VsZWN0XHJcbiAgICAgICAgZGlzcGxheUVtcHR5XHJcbiAgICAgICAgaWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3RcIlxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICBsYWJlbD1cIkFnZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogMzAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZCB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgPGVtPk5vbmU8L2VtPlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcImFsbFwifT5BbGw8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCJhcHBsZVwifT5BcHBsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcImFuZHJvaWRcIn0+QW5kcm9pZDwvTWVudUl0ZW0+XHJcbiAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wYW5pZXM7XHJcbiIsImltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcclxuaW1wb3J0IFpvb21Jbk91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9ab29tSW5PdXRsaW5lZFwiO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RMaXN0UHJvcHMge1xyXG4gIHByb2R1Y3RzOiBhbnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExpc3RQcm9kdWN0c1ZpZXcocHJvcHM6IFByb2R1Y3RMaXN0UHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBJdGVtID0gc3R5bGVkKFBhcGVyKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgQ3VzdG9tSWNvbiA9IHN0eWxlZChJY29uQnV0dG9uKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcDogXCI1MCVcIixcclxuICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgd2lkdGg6IFwiM3JlbVwiLFxyXG4gICAgaGVpZ2h0OiBcIjNyZW1cIixcclxuICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgbGluZWFyXCIsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIFwiJjpob3ZlciBcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBDdXN0b21Db250YWluZXIgPSBzdHlsZWQoQm94KSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjIyXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4yNXJlbVwiLFxyXG4gICAgXCImOmhvdmVyIGltZ1wiOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBcIiY6aG92ZXIgYnV0dG9uXCI6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luTGVmdDogXCIxcmVtXCIgfX0+XHJcbiAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cclxuICAgICAgICB7cHJvcHMucHJvZHVjdHMubWFwKChwcm9kdWN0OiBhbnkpID0+IChcclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8Q3VzdG9tQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBpbWFnZT17cHJvZHVjdC5waG90b3N9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGxpbmVhclwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTUwcHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q3VzdG9tSWNvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9kdWN0cy9cIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Wm9vbUluT3V0bGluZWRJY29uXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ3VzdG9tSWNvbj5cclxuICAgICAgICAgICAgPC9DdXN0b21Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxNCB9fSBndXR0ZXJCb3R0b20gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDE0IH19IGd1dHRlckJvdHRvbSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICB7cHJvZHVjdC5jYXRlZ29yeX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgc3BhY2luZz17M31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxNCB9fSBndXR0ZXJCb3R0b20gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDE0IH19IGd1dHRlckJvdHRvbSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlfS4wMCRcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU3RhY2s+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UHJvZHVjdHNWaWV3O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuXHJcblxyXG5jb25zdCBDdXN0b21CdXR0b24gPSBzdHlsZWQoQnV0dG9uKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgZm9udFNpemU6IDE0LFxyXG4gIHBhZGRpbmc6ICcxMnB4IDMwcHgnLFxyXG4gIGxpbmVIZWlnaHQ6IDEuNSxcclxuICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgYm9yZGVyUmFkaXVzOiAnMC4yNSByZW0nLFxyXG4gICcmOmhvdmVyJzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXHJcbiAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxyXG4gICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgfSxcclxuICAnJjphY3RpdmUnOiB7XHJcbiAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxyXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICB9LFxyXG59KSlcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBvbkNsaWNrPzogKGU6IGFueSkgPT4gdm9pZDtcclxuICBocmVmPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSZWYgPSBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcblxyXG5jb25zdCBNYWluQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFByb3BzPigoeyBvbkNsaWNrLCBocmVmLCBjaGlsZHJlbiB9LCByZWYpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICB2YXJpYW50PSdjb250YWluZWQnIGhyZWY9e2hyZWZ9IG9uQ2xpY2s9e29uQ2xpY2t9IHJlZj17cmVmfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvbj5cclxuICApXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkJ1dHRvbjsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnNcIjtcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgWm9vbUluT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1pvb21Jbk91dGxpbmVkXCI7XHJcbmltcG9ydCB7IEJveCwgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcclxuXHJcbmNvbnN0IEN1c3RvbUljb24gPSBzdHlsZWQoSWNvbkJ1dHRvbikoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIHRvcDogXCI1MCVcIixcclxuICBsZWZ0OiBcIjUwJVwiLFxyXG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIHdpZHRoOiBcIjNyZW1cIixcclxuICBoZWlnaHQ6IFwiM3JlbVwiLFxyXG4gIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGxpbmVhclwiLFxyXG4gIG9wYWNpdHk6IDAsXHJcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICBcIiY6aG92ZXIgXCI6IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEN1c3RvbUNvbnRhaW5lciA9IHN0eWxlZChCb3gpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIyMlwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIwLjI1cmVtXCIsXHJcbiAgXCImOmhvdmVyIGltZ1wiOiB7XHJcbiAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gIH0sXHJcbiAgXCImOmhvdmVyIGJ1dHRvblwiOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBQcm9kdWN0SXRlbVByb3BzIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHBob3Rvczogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcmljZTogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0SXRlbShwcm9wczogUHJvZHVjdEl0ZW1Qcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBmdW5jdGlvbiBzaG93RGV0YWlsc0hhbmRsZXIoKSB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9wcm9kdWN0cy9cIiArIHByb3BzLmlkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPEN1c3RvbUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgYWx0PXtwcm9wcy50aXRsZX1cclxuICAgICAgICAgICAgaW1hZ2U9e3Byb3BzLnBob3Rvc31cclxuICAgICAgICAgICAgc3g9e3sgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBsaW5lYXJcIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDdXN0b21JY29uIG9uQ2xpY2s9e3Nob3dEZXRhaWxzSGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxab29tSW5PdXRsaW5lZEljb25cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DdXN0b21JY29uPlxyXG4gICAgICAgIDwvQ3VzdG9tQ29udGFpbmVyPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxNCB9fSBndXR0ZXJCb3R0b20gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxNCB9fSBndXR0ZXJCb3R0b20gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAge3Byb3BzLnByaWNlfS4wMCRcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTtcclxuIiwiaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuLi9Qcm9kdWN0SXRlbVwiO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RMaXN0UHJvcHMge1xyXG4gIHByb2R1Y3RzOiBhbnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KHByb3BzOiBQcm9kdWN0TGlzdFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IGFueSkgPT4gKFxyXG4gICAgICAgIDxQcm9kdWN0SXRlbVxyXG4gICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgaWQ9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICBwaG90b3M9e3Byb2R1Y3QucGhvdG9zfVxyXG4gICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcclxuIiwiaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaEJhcihwcm9wczogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgc3g9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBpZD1cInN0YW5kYXJkLXNlYXJjaFwiXHJcbiAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iLCJpbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTWVudUl0ZW1cIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU2VsZWN0XCI7XHJcblxyXG5mdW5jdGlvbiBTb3J0KHByb3BzOiBhbnkpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Db250cm9sIHN4PXt7IG1pbldpZHRoOiAxODAgfX0+XHJcbiAgICAgIDxTZWxlY3RcclxuICAgICAgICBkaXNwbGF5RW1wdHlcclxuICAgICAgICBpZD1cImRlbW8tY29udHJvbGxlZC1vcGVuLXNlbGVjdFwiXHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIGxhYmVsPVwiU29ydFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogMzAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCJsb3ctcHJpY2VcIn0+UHJpY2UgKExvd2VzdCk8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCJoaWdoLXByaWNlXCJ9PlByaWNlIChIaWdoZXN0KTwvTWVudUl0ZW0+XHJcbiAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3J0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0XCI7XHJcbmltcG9ydCB7IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBsb2FkUHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vbGliL3Byb2R1Y3RzXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9TbGlkZXJcIjtcclxuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkJ1dHRvblwiO1xyXG5pbXBvcnQgR3JpZFZpZXdJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dyaWRWaWV3XCI7XHJcbmltcG9ydCBGb3JtYXRMaXN0QnVsbGV0ZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Zvcm1hdExpc3RCdWxsZXRlZFwiO1xyXG5pbXBvcnQgTGlzdFByb2R1Y3RzVmlldyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MaXN0UHJvZHVjdHNWaWV3XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhdGVnb3JpZXNcIjtcclxuaW1wb3J0IENvbXBhbmllcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21wYW5pZXNcIjtcclxuaW1wb3J0IFNvcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU29ydFwiO1xyXG5cclxuY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogXCJQaWVyd3N6eSBwcm9kdWt0XCIsXHJcbiAgICBwcmljZTogMTQ5OS45OSxcclxuICAgIGRlc2NyaXB0aW9uOiBcIk9waXMgcHJvaWR1a3R1XCIsXHJcbiAgICBjYXRlZ29yeTogXCJCb29rc1wiLFxyXG4gICAgcGhvdG9zOlxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDQxOTg2MzAwOTE3LTY0Njc0YmQ2MDBkOD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzI3MCZxPTgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiBcIkRydWdpIHByb2R1a3RcIixcclxuICAgIHByaWNlOiAxMDUuOTksXHJcbiAgICBkZXNjcmlwdGlvbjogXCJGaXJzdCBQcm9kXCIsXHJcbiAgICBjYXRlZ29yeTogXCJDbG90aGluZ1wiLFxyXG4gICAgcGhvdG9zOlxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTI2NDA2OTE1ODk0LTdiY2Q2NWY2MDg0NT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTYyNCZxPTgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiBcIlRyemVjaSBwcm9kdWt0XCIsXHJcbiAgICBwcmljZTogNTkuOTksXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTZWMgUHJvZFwiLFxyXG4gICAgcGhvdG9zOlxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg5MjQ0MTU5OTQzLTQ2MDA4OGVkNWM5Mj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA5MCZxPTgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiBcIlBpZXJ3c3p5IHByb2R1a3RcIixcclxuICAgIHByaWNlOiAxMDIyOS41LFxyXG4gICAgZGVzY3JpcHRpb246IFwiT3BpcyBwcm9pZHVrdHVcIixcclxuICAgIGNhdGVnb3J5OiBcIkpld2VsZXJ5XCIsXHJcbiAgICBwaG90b3M6XHJcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDE5ODYzMDA5MTctNjQ2NzRiZDYwMGQ4P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMjcwJnE9ODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgdGl0bGU6IFwiRHJ1Z2kgcHJvZHVrdFwiLFxyXG4gICAgcHJpY2U6IDUwMDAuOTksXHJcbiAgICBjYXRlZ29yeTogXCJBY2Nlc3NvcnJpZXNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkZpcnN0IFByb2RcIixcclxuICAgIHBob3RvczpcclxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNjQwNjkxNTg5NC03YmNkNjVmNjA4NDU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2MjQmcT04MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICB0aXRsZTogXCJUcnplY2kgcHJvZHVrdFwiLFxyXG4gICAgcHJpY2U6IDI0OTkuODksXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTZWMgUHJvZFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiRnVybml0dXJlc1wiLFxyXG4gICAgcGhvdG9zOlxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg5MjQ0MTU5OTQzLTQ2MDA4OGVkNWM5Mj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA5MCZxPTgwXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RzUGFnZSgpIHtcclxuICBjb25zdCBtYXhQcmljZSA9IE1hdGgubWF4LmFwcGx5KFxyXG4gICAgTWF0aCxcclxuICAgIHByb2R1Y3RzLm1hcChmdW5jdGlvbiAobykge1xyXG4gICAgICByZXR1cm4gby5wcmljZTtcclxuICAgIH0pXHJcbiAgKTtcclxuICBjb25zdCBtaW5QcmljZSA9IE1hdGgubWluLmFwcGx5KFxyXG4gICAgTWF0aCxcclxuICAgIHByb2R1Y3RzLm1hcChmdW5jdGlvbiAobykge1xyXG4gICAgICByZXR1cm4gby5wcmljZTtcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2NvbXBhbnksIHNldENvbXBhbnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZTxhbnk+KG1heFByaWNlKTtcclxuICBjb25zdCBbc29ydENvbmRpdGlvbiwgc2V0U29ydENvbmRpdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNMaXN0Vmlldywgc2V0TGlzdFZpZXddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGU8YW55PihudWxsKTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAgIFwiQWxsXCIsXHJcbiAgICBcIkJvb2tzXCIsXHJcbiAgICBcIkNsb3RoaW5nXCIsXHJcbiAgICBcIkZ1cm5pdHVyZXNcIixcclxuICAgIFwiQWNjZXNzb3JyaWVzXCIsXHJcbiAgICBcIkpld2VsZXJ5XCIsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKGV2ZW50OiBhbnksIG5ld1ZhbHVlOiBhbnkpID0+IHtcclxuICAgIHNldFByaWNlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgc2V0Q29tcGFueShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvcnRDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgc2V0U29ydENvbmRpdGlvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxpc3RWaWV3ID0gKCkgPT4ge1xyXG4gICAgc2V0TGlzdFZpZXcodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR3JpZFZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRMaXN0VmlldyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYXJGaWx0ZXJzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldFByaWNlKG1heFByaWNlKTtcclxuICAgIHNldFNvcnRDb25kaXRpb24oXCJcIik7XHJcbiAgICBzZXRTZWFyY2hUZXJtKFwiXCIpO1xyXG4gICAgc2V0Q2F0ZWdvcnkobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnktaXRlbVwiKTtcclxuICAgIGNhdGVnb3J5TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGlmIChpdGVtLnRleHRDb250ZW50ID09PSBcIkFsbFwiKSB7XHJcbiAgICAgICAgICBzZXRDYXRlZ29yeShudWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0Q2F0ZWdvcnkoaXRlbS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgSG9tZSA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvblwiPiB7XCI+XCJ9IFByb2R1Y3RzPC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8Qm94IHN4PXt7IG1hcmdpblRvcDogNSB9fT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGg0PkNhdGVnb3J5PC9oND5cclxuICAgICAgICAgICAgPENhdGVnb3JpZXMgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz5cclxuICAgICAgICAgICAgPGg0PkNvbXBhbnk8L2g0PlxyXG4gICAgICAgICAgICA8Q29tcGFuaWVzIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtjb21wYW55fSAvPlxyXG4gICAgICAgICAgICA8aDQ+UHJpY2U8L2g0PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCIjMDA1NmFkXCIgfX0+JCB7cHJpY2V9LDAwPC9wPlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IHdpZHRoOiAxODAgfX0+XHJcbiAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImlucHV0LXNsaWRlclwiXHJcbiAgICAgICAgICAgICAgICBtaW49e21pblByaWNlfVxyXG4gICAgICAgICAgICAgICAgbWF4PXttYXhQcmljZX1cclxuICAgICAgICAgICAgICAgIHN0ZXA9ezEwMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW5Ub3A6IDMgfX0+XHJcbiAgICAgICAgICAgICAgPE1haW5CdXR0b24gb25DbGljaz17Y2xlYXJGaWx0ZXJzSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICBDTEVBUiBGSUxURVJTXHJcbiAgICAgICAgICAgICAgPC9NYWluQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OX0+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkVmlld0ljb25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVHcmlkVmlld31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtYXRMaXN0QnVsbGV0ZWRJY29uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGlzdFZpZXd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGh9IHByb2R1Y3RzIGZvdW5kXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzcHhcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDIlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIgfX0+U29ydCBCeTwvcD5cclxuICAgICAgICAgICAgICA8U29ydCBvbkNoYW5nZT17aGFuZGxlU29ydENoYW5nZX0gdmFsdWU9e3NvcnRDb25kaXRpb259IC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICB7IWlzTGlzdFZpZXcgPyAoXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdExpc3RcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdHM9e1xyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRDb25kaXRpb24gPT09IFwiaGlnaC1wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QucHJpY2UgPD0gcHJpY2UgJiYgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3QuY2F0ZWdvcnkgPT09IGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlIDw9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb2NhbGVMb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5wcmljZSA8PSBwcmljZSAmJiBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvZHVjdC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2UgPD0gcHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYTogYW55LCBiOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnByaWNlIC0gYS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnByaWNlIDw9IHByaWNlICYmIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9kdWN0LmNhdGVnb3J5ID09PSBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZSA8PSBwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG9jYWxlTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QucHJpY2UgPD0gcHJpY2UgJiYgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3QuY2F0ZWdvcnkgPT09IGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlIDw9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGE6IGFueSwgYjogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5wcmljZSAtIGIucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPExpc3RQcm9kdWN0c1ZpZXdcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdHM9e1xyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRDb25kaXRpb24gPT09IFwiaGlnaC1wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QucHJpY2UgPD0gcHJpY2UgJiYgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3QuY2F0ZWdvcnkgPT09IGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlIDw9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb2NhbGVMb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5wcmljZSA8PSBwcmljZSAmJiBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvZHVjdC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2UgPD0gcHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYTogYW55LCBiOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnByaWNlIC0gYS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnByaWNlIDw9IHByaWNlICYmIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9kdWN0LmNhdGVnb3J5ID09PSBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZSA8PSBwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG9jYWxlTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QucHJpY2UgPD0gcHJpY2UgJiYgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3QuY2F0ZWdvcnkgPT09IGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlIDw9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGE6IGFueSwgYjogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5wcmljZSAtIGIucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbi8qXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBsb2FkUHJvZHVjdHMoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IGFueSkgPT4gKHtcclxuICAgICAgICB0aXRsZTogcHJvZHVjdC50aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcHJvZHVjdC5kZXNjcmlwdGlvbixcclxuICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICBwaG90b3M6IHByb2R1Y3QucGhvdG9zWzBdLnVybCxcclxuICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgfSkpLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Zvcm1hdExpc3RCdWxsZXRlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dyaWRWaWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvWm9vbUluT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9