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
/* harmony import */ var _MainButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MainButton */ "./src/components/MainButton/index.tsx");

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\frontend_patronage\\patronage22_lublin_js_frontend\\src\\components\\ListProductsView\\index.tsx";











function ListProductsView(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const Item = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["styled"])(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_1___default.a)(({
    theme
  }) => ({
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "flex-start",
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
            lineNumber: 64,
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
              lineNumber: 79,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default.a, {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          spacing: 3,
          style: {
            marginLeft: "1.5rem"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
            sx: {
              fontSize: 16
            },
            gutterBottom: true,
            component: "h3",
            children: product.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
            sx: {
              fontSize: 14
            },
            gutterBottom: true,
            style: {
              marginTop: "-0.5rem"
            },
            component: "div",
            children: ["$", product.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
            sx: {
              fontSize: 14
            },
            gutterBottom: true,
            component: "h3",
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
            sx: {
              fontSize: 14
            },
            gutterBottom: true,
            component: "div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
              onClick: () => {
                router.push("/products/" + product.id);
              },
              children: "Details"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcmllcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tcGFuaWVzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaXN0UHJvZHVjdHNWaWV3L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdExpc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Zvcm1hdExpc3RCdWxsZXRlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvR3JpZFZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL1pvb21Jbk91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9TbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1N0YWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDYXRlZ29yaWVzIiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiZm9udFNpemUiLCJjb2xvciIsImN1cnNvciIsIkNvbXBhbmllcyIsIm1pbldpZHRoIiwidmFsdWUiLCJvbkNoYW5nZSIsImhlaWdodCIsIkxpc3RQcm9kdWN0c1ZpZXciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJJdGVtIiwic3R5bGVkIiwiUGFwZXIiLCJ0aGVtZSIsInBhZGRpbmciLCJzcGFjaW5nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiQ3VzdG9tSWNvbiIsIkljb25CdXR0b24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsIm1haW4iLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiQ3VzdG9tQ29udGFpbmVyIiwiQm94IiwiYmFja2dyb3VuZENvbG9yIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwidGl0bGUiLCJwaG90b3MiLCJwdXNoIiwiaWQiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiQ3VzdG9tQnV0dG9uIiwiQnV0dG9uIiwibGluZUhlaWdodCIsImJvcmRlciIsImJvcmRlckNvbG9yIiwidGV4dFRyYW5zZm9ybSIsImxpZ2h0IiwiYm94U2hhZG93IiwiTWFpbkJ1dHRvbiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsIm9uQ2xpY2siLCJocmVmIiwiY2hpbGRyZW4iLCJyZWYiLCJQcm9kdWN0SXRlbSIsInNob3dEZXRhaWxzSGFuZGxlciIsIlByb2R1Y3RMaXN0IiwiU2VhcmNoQmFyIiwiU29ydCIsIlByb2R1Y3RzUGFnZSIsIm1heFByaWNlIiwiTWF0aCIsIm1heCIsImFwcGx5IiwibyIsIm1pblByaWNlIiwibWluIiwiY29tcGFueSIsInNldENvbXBhbnkiLCJ1c2VTdGF0ZSIsInNldFByaWNlIiwic29ydENvbmRpdGlvbiIsInNldFNvcnRDb25kaXRpb24iLCJpc0xpc3RWaWV3Iiwic2V0TGlzdFZpZXciLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNldENhdGVnb3J5IiwiaGFuZGxlU2xpZGVyQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImhhbmRsZVNvcnRDaGFuZ2UiLCJoYW5kbGVMaXN0VmlldyIsImhhbmRsZUdyaWRWaWV3IiwiY2xlYXJGaWx0ZXJzSGFuZGxlciIsIm1hcmdpblJpZ2h0IiwibGVuZ3RoIiwiZmlsdGVyIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJpbmNsdWRlcyIsInNvcnQiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUFnQztBQUM5QixzQkFDRSxxRUFBQyx5REFBRDtBQUFNLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsT0FBYjtBQUFzQkMsZ0JBQVUsRUFBRTtBQUFsQyxLQUFiO0FB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Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xyXG5cclxuZnVuY3Rpb24gQ2F0ZWdvcmllcyhwcm9wczogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IHN0eWxlPXt7IG1hcmdpblRvcDogXCItMXJlbVwiLCBtYXJnaW5MZWZ0OiBcIi0xcmVtXCIgfX0+XHJcbiAgICAgIHtwcm9wcy5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnk6IGFueSkgPT4gKFxyXG4gICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9XCJjYXRlZ29yeS1pdGVtXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBzeD17eyBmb250U2l6ZTogMTQsIGNvbG9yOiBcIiMwMDU2YWRcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICkpfVxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7XHJcbiIsImltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TZWxlY3RcIjtcclxuXHJcbmZ1bmN0aW9uIENvbXBhbmllcyhwcm9wczogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQ29udHJvbCBzeD17eyBtaW5XaWR0aDogMTgwIH19PlxyXG4gICAgICA8U2VsZWN0XHJcbiAgICAgICAgZGlzcGxheUVtcHR5XHJcbiAgICAgICAgaWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3RcIlxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICBsYWJlbD1cIkFnZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogMzAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZCB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgPGVtPk5vbmU8L2VtPlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcImFsbFwifT5BbGw8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCJhcHBsZVwifT5BcHBsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcImFuZHJvaWRcIn0+QW5kcm9pZDwvTWVudUl0ZW0+XHJcbiAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wYW5pZXM7XHJcbiIsImltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcclxuaW1wb3J0IFpvb21Jbk91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9ab29tSW5PdXRsaW5lZFwiO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi4vTWFpbkJ1dHRvblwiO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RMaXN0UHJvcHMge1xyXG4gIHByb2R1Y3RzOiBhbnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExpc3RQcm9kdWN0c1ZpZXcocHJvcHM6IFByb2R1Y3RMaXN0UHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBJdGVtID0gc3R5bGVkKFBhcGVyKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgQ3VzdG9tSWNvbiA9IHN0eWxlZChJY29uQnV0dG9uKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcDogXCI1MCVcIixcclxuICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgd2lkdGg6IFwiM3JlbVwiLFxyXG4gICAgaGVpZ2h0OiBcIjNyZW1cIixcclxuICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgbGluZWFyXCIsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIFwiJjpob3ZlciBcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBDdXN0b21Db250YWluZXIgPSBzdHlsZWQoQm94KSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjIyXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4yNXJlbVwiLFxyXG4gICAgXCImOmhvdmVyIGltZ1wiOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBcIiY6aG92ZXIgYnV0dG9uXCI6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luTGVmdDogXCIxcmVtXCIgfX0+XHJcbiAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cclxuICAgICAgICB7cHJvcHMucHJvZHVjdHMubWFwKChwcm9kdWN0OiBhbnkpID0+IChcclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8Q3VzdG9tQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBpbWFnZT17cHJvZHVjdC5waG90b3N9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGxpbmVhclwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTUwcHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q3VzdG9tSWNvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9kdWN0cy9cIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Wm9vbUluT3V0bGluZWRJY29uXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ3VzdG9tSWNvbj5cclxuICAgICAgICAgICAgPC9DdXN0b21Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICBzcGFjaW5nPXszfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMS41cmVtXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxNiB9fSBndXR0ZXJCb3R0b20gY29tcG9uZW50PVwiaDNcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6IDE0IH19XHJcbiAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCItMC41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJHtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMTQgfX0gZ3V0dGVyQm90dG9tIGNvbXBvbmVudD1cImgzXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDE0IH19IGd1dHRlckJvdHRvbSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgIDxNYWluQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9kdWN0cy9cIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICA8L01haW5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N0YWNrPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFByb2R1Y3RzVmlldztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcblxyXG5cclxuY29uc3QgQ3VzdG9tQnV0dG9uID0gc3R5bGVkKEJ1dHRvbikoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gIGZvbnRTaXplOiAxNCxcclxuICBwYWRkaW5nOiAnMTJweCAzMHB4JyxcclxuICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG4gIGJvcmRlclJhZGl1czogJzAuMjUgcmVtJyxcclxuICAnJjpob3Zlcic6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxyXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gIH0sXHJcbiAgJyY6YWN0aXZlJzoge1xyXG4gICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXHJcbiAgfSxcclxufSkpXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgb25DbGljaz86IChlOiBhbnkpID0+IHZvaWQ7XHJcbiAgaHJlZj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmVmID0gSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG5cclxuY29uc3QgTWFpbkJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBQcm9wcz4oKHsgb25DbGljaywgaHJlZiwgY2hpbGRyZW4gfSwgcmVmKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25cclxuICAgICAgdmFyaWFudD0nY29udGFpbmVkJyBocmVmPXtocmVmfSBvbkNsaWNrPXtvbkNsaWNrfSByZWY9e3JlZn1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5CdXR0b247IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zXCI7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFpvb21Jbk91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9ab29tSW5PdXRsaW5lZFwiO1xyXG5pbXBvcnQgeyBCb3gsIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcblxyXG5jb25zdCBDdXN0b21JY29uID0gc3R5bGVkKEljb25CdXR0b24pKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICB0b3A6IFwiNTAlXCIsXHJcbiAgbGVmdDogXCI1MCVcIixcclxuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICB3aWR0aDogXCIzcmVtXCIsXHJcbiAgaGVpZ2h0OiBcIjNyZW1cIixcclxuICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBsaW5lYXJcIixcclxuICBvcGFjaXR5OiAwLFxyXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgXCImOmhvdmVyIFwiOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBDdXN0b21Db250YWluZXIgPSBzdHlsZWQoQm94KSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiMyMjJcIixcclxuICBib3JkZXJSYWRpdXM6IFwiMC4yNXJlbVwiLFxyXG4gIFwiJjpob3ZlciBpbWdcIjoge1xyXG4gICAgb3BhY2l0eTogMC41LFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICB9LFxyXG4gIFwiJjpob3ZlciBidXR0b25cIjoge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdEl0ZW1Qcm9wcyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBwaG90b3M6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEl0ZW0ocHJvcHM6IFByb2R1Y3RJdGVtUHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgZnVuY3Rpb24gc2hvd0RldGFpbHNIYW5kbGVyKCkge1xyXG4gICAgcm91dGVyLnB1c2goXCIvcHJvZHVjdHMvXCIgKyBwcm9wcy5pZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxDdXN0b21Db250YWluZXI+XHJcbiAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgIGFsdD17cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgIGltYWdlPXtwcm9wcy5waG90b3N9XHJcbiAgICAgICAgICAgIHN4PXt7IHRyYW5zaXRpb246IFwiYWxsIDAuM3MgbGluZWFyXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q3VzdG9tSWNvbiBvbkNsaWNrPXtzaG93RGV0YWlsc0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8Wm9vbUluT3V0bGluZWRJY29uXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ3VzdG9tSWNvbj5cclxuICAgICAgICA8L0N1c3RvbUNvbnRhaW5lcj5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMTQgfX0gZ3V0dGVyQm90dG9tIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMTQgfX0gZ3V0dGVyQm90dG9tIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5wcmljZX0uMDAkXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEl0ZW07XHJcbiIsImltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vUHJvZHVjdEl0ZW1cIjtcclxuXHJcbmludGVyZmFjZSBQcm9kdWN0TGlzdFByb3BzIHtcclxuICBwcm9kdWN0czogYW55O1xyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0TGlzdChwcm9wczogUHJvZHVjdExpc3RQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICB7cHJvcHMucHJvZHVjdHMubWFwKChwcm9kdWN0OiBhbnkpID0+IChcclxuICAgICAgICA8UHJvZHVjdEl0ZW1cclxuICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgcGhvdG9zPXtwcm9kdWN0LnBob3Rvc31cclxuICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBwcmljZT17cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XHJcbiIsImltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hCYXIocHJvcHM6IGFueSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgaWQ9XCJzdGFuZGFyZC1zZWFyY2hcIlxyXG4gICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIiwiaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbXVpL21hdGVyaWFsL1NlbGVjdFwiO1xyXG5cclxuZnVuY3Rpb24gU29ydChwcm9wczogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQ29udHJvbCBzeD17eyBtaW5XaWR0aDogMTgwIH19PlxyXG4gICAgICA8U2VsZWN0XHJcbiAgICAgICAgZGlzcGxheUVtcHR5XHJcbiAgICAgICAgaWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3RcIlxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICBsYWJlbD1cIlNvcnRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDMwIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wibG93LXByaWNlXCJ9PlByaWNlIChMb3dlc3QpPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiaGlnaC1wcmljZVwifT5QcmljZSAoSGlnaGVzdCk8L01lbnVJdGVtPlxyXG4gICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29ydDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdFwiO1xyXG5pbXBvcnQgeyBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgbG9hZFByb2R1Y3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9wcm9kdWN0c1wiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU2xpZGVyXCI7XHJcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5CdXR0b25cIjtcclxuaW1wb3J0IEdyaWRWaWV3SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9HcmlkVmlld1wiO1xyXG5pbXBvcnQgRm9ybWF0TGlzdEJ1bGxldGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Gb3JtYXRMaXN0QnVsbGV0ZWRcIjtcclxuaW1wb3J0IExpc3RQcm9kdWN0c1ZpZXcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGlzdFByb2R1Y3RzVmlld1wiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBDb21wYW5pZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29tcGFuaWVzXCI7XHJcbmltcG9ydCBTb3J0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NvcnRcIjtcclxuXHJcbmNvbnN0IHByb2R1Y3RzID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6IFwiUGllcndzenkgcHJvZHVrdFwiLFxyXG4gICAgcHJpY2U6IDE0OTkuOTksXHJcbiAgICBkZXNjcmlwdGlvbjogXCJPcGlzIHByb2lkdWt0dVwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiQm9va3NcIixcclxuICAgIHBob3RvczpcclxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ0MTk4NjMwMDkxNy02NDY3NGJkNjAwZDg/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMyNzAmcT04MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogXCJEcnVnaSBwcm9kdWt0XCIsXHJcbiAgICBwcmljZTogMTA1Ljk5LFxyXG4gICAgZGVzY3JpcHRpb246IFwiRmlyc3QgUHJvZFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiQ2xvdGhpbmdcIixcclxuICAgIHBob3RvczpcclxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNjQwNjkxNTg5NC03YmNkNjVmNjA4NDU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2MjQmcT04MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogXCJUcnplY2kgcHJvZHVrdFwiLFxyXG4gICAgcHJpY2U6IDU5Ljk5LFxyXG4gICAgZGVzY3JpcHRpb246IFwiU2VjIFByb2RcIixcclxuICAgIHBob3RvczpcclxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4OTI0NDE1OTk0My00NjAwODhlZDVjOTI/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwOTAmcT04MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogXCJQaWVyd3N6eSBwcm9kdWt0XCIsXHJcbiAgICBwcmljZTogMTAyMjkuNSxcclxuICAgIGRlc2NyaXB0aW9uOiBcIk9waXMgcHJvaWR1a3R1XCIsXHJcbiAgICBjYXRlZ29yeTogXCJKZXdlbGVyeVwiLFxyXG4gICAgcGhvdG9zOlxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDQxOTg2MzAwOTE3LTY0Njc0YmQ2MDBkOD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzI3MCZxPTgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIHRpdGxlOiBcIkRydWdpIHByb2R1a3RcIixcclxuICAgIHByaWNlOiA1MDAwLjk5LFxyXG4gICAgY2F0ZWdvcnk6IFwiQWNjZXNzb3JyaWVzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJGaXJzdCBQcm9kXCIsXHJcbiAgICBwaG90b3M6XHJcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjY0MDY5MTU4OTQtN2JjZDY1ZjYwODQ1P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjI0JnE9ODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgdGl0bGU6IFwiVHJ6ZWNpIHByb2R1a3RcIixcclxuICAgIHByaWNlOiAyNDk5Ljg5LFxyXG4gICAgZGVzY3JpcHRpb246IFwiU2VjIFByb2RcIixcclxuICAgIGNhdGVnb3J5OiBcIkZ1cm5pdHVyZXNcIixcclxuICAgIHBob3RvczpcclxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4OTI0NDE1OTk0My00NjAwODhlZDVjOTI/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwOTAmcT04MFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0c1BhZ2UoKSB7XHJcbiAgY29uc3QgbWF4UHJpY2UgPSBNYXRoLm1heC5hcHBseShcclxuICAgIE1hdGgsXHJcbiAgICBwcm9kdWN0cy5tYXAoZnVuY3Rpb24gKG8pIHtcclxuICAgICAgcmV0dXJuIG8ucHJpY2U7XHJcbiAgICB9KVxyXG4gICk7XHJcbiAgY29uc3QgbWluUHJpY2UgPSBNYXRoLm1pbi5hcHBseShcclxuICAgIE1hdGgsXHJcbiAgICBwcm9kdWN0cy5tYXAoZnVuY3Rpb24gKG8pIHtcclxuICAgICAgcmV0dXJuIG8ucHJpY2U7XHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtjb21wYW55LCBzZXRDb21wYW55XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGU8YW55PihtYXhQcmljZSk7XHJcbiAgY29uc3QgW3NvcnRDb25kaXRpb24sIHNldFNvcnRDb25kaXRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzTGlzdFZpZXcsIHNldExpc3RWaWV3XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICBcIkFsbFwiLFxyXG4gICAgXCJCb29rc1wiLFxyXG4gICAgXCJDbG90aGluZ1wiLFxyXG4gICAgXCJGdXJuaXR1cmVzXCIsXHJcbiAgICBcIkFjY2Vzc29ycmllc1wiLFxyXG4gICAgXCJKZXdlbGVyeVwiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNsaWRlckNoYW5nZSA9IChldmVudDogYW55LCBuZXdWYWx1ZTogYW55KSA9PiB7XHJcbiAgICBzZXRQcmljZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIHNldENvbXBhbnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTb3J0Q2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIHNldFNvcnRDb25kaXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMaXN0VmlldyA9ICgpID0+IHtcclxuICAgIHNldExpc3RWaWV3KHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUdyaWRWaWV3ID0gKCkgPT4ge1xyXG4gICAgc2V0TGlzdFZpZXcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyRmlsdGVyc0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRQcmljZShtYXhQcmljZSk7XHJcbiAgICBzZXRTb3J0Q29uZGl0aW9uKFwiXCIpO1xyXG4gICAgc2V0U2VhcmNoVGVybShcIlwiKTtcclxuICAgIHNldENhdGVnb3J5KG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5LWl0ZW1cIik7XHJcbiAgICBjYXRlZ29yeUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICBpZiAoaXRlbS50ZXh0Q29udGVudCA9PT0gXCJBbGxcIikge1xyXG4gICAgICAgICAgc2V0Q2F0ZWdvcnkobnVsbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldENhdGVnb3J5KGl0ZW0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIEhvbWUgPHNwYW4gY2xhc3NOYW1lPVwibG9jYXRpb25cIj4ge1wiPlwifSBQcm9kdWN0czwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPEJveCBzeD17eyBtYXJnaW5Ub3A6IDUgfX0+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXszfT5cclxuICAgICAgICAgICAgPFNlYXJjaEJhclxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoND5DYXRlZ29yeTwvaDQ+XHJcbiAgICAgICAgICAgIDxDYXRlZ29yaWVzIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IC8+XHJcbiAgICAgICAgICAgIDxoND5Db21wYW55PC9oND5cclxuICAgICAgICAgICAgPENvbXBhbmllcyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17Y29tcGFueX0gLz5cclxuICAgICAgICAgICAgPGg0PlByaWNlPC9oND5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiIzAwNTZhZFwiIH19PiQge3ByaWNlfSwwMDwvcD5cclxuICAgICAgICAgICAgPEJveCBzeD17eyB3aWR0aDogMTgwIH19PlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJpbnB1dC1zbGlkZXJcIlxyXG4gICAgICAgICAgICAgICAgbWluPXttaW5QcmljZX1cclxuICAgICAgICAgICAgICAgIG1heD17bWF4UHJpY2V9XHJcbiAgICAgICAgICAgICAgICBzdGVwPXsxMDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgbWFyZ2luVG9wOiAzIH19PlxyXG4gICAgICAgICAgICAgIDxNYWluQnV0dG9uIG9uQ2xpY2s9e2NsZWFyRmlsdGVyc0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgQ0xFQVIgRklMVEVSU1xyXG4gICAgICAgICAgICAgIDwvTWFpbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezl9PlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZFZpZXdJY29uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlR3JpZFZpZXd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybWF0TGlzdEJ1bGxldGVkSWNvblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpc3RWaWV3fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RofSBwcm9kdWN0cyBmb3VuZFxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiM3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQyJVwiLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiIH19PlNvcnQgQnk8L3A+XHJcbiAgICAgICAgICAgICAgPFNvcnQgb25DaGFuZ2U9e2hhbmRsZVNvcnRDaGFuZ2V9IHZhbHVlPXtzb3J0Q29uZGl0aW9ufSAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgeyFpc0xpc3RWaWV3ID8gKFxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RMaXN0XHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0Q29uZGl0aW9uID09PSBcImhpZ2gtcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnByaWNlIDw9IHByaWNlICYmIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9kdWN0LmNhdGVnb3J5ID09PSBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZSA8PSBwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG9jYWxlTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QucHJpY2UgPD0gcHJpY2UgJiYgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3QuY2F0ZWdvcnkgPT09IGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlIDw9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGE6IGFueSwgYjogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5wcmljZSAtIGEucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5wcmljZSA8PSBwcmljZSAmJiBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvZHVjdC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2UgPD0gcHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnByaWNlIDw9IHByaWNlICYmIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9kdWN0LmNhdGVnb3J5ID09PSBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZSA8PSBwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhOiBhbnksIGI6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxMaXN0UHJvZHVjdHNWaWV3XHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0Q29uZGl0aW9uID09PSBcImhpZ2gtcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnByaWNlIDw9IHByaWNlICYmIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9kdWN0LmNhdGVnb3J5ID09PSBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZSA8PSBwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG9jYWxlTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QucHJpY2UgPD0gcHJpY2UgJiYgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3QuY2F0ZWdvcnkgPT09IGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlIDw9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGE6IGFueSwgYjogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5wcmljZSAtIGEucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5wcmljZSA8PSBwcmljZSAmJiBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvZHVjdC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2UgPD0gcHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnByaWNlIDw9IHByaWNlICYmIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9kdWN0LmNhdGVnb3J5ID09PSBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZSA8PSBwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhOiBhbnksIGI6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG4vKlxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgbG9hZFByb2R1Y3RzKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0czogcHJvZHVjdHMubWFwKChwcm9kdWN0OiBhbnkpID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IHByb2R1Y3QudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgcGhvdG9zOiBwcm9kdWN0LnBob3Rvc1swXS51cmwsXHJcbiAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXHJcbiAgICAgIH0pKSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9Gb3JtYXRMaXN0QnVsbGV0ZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9HcmlkVmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1pvb21Jbk91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Cb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkTWVkaWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1NlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1NsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1N0YWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==