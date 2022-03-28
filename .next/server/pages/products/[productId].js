module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/products/[productId].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/ProductDetails/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/ProductDetails/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/eszarowska/Desktop/patronage22_lublin_js_frontend/src/components/ProductDetails/index.tsx\";\n\n\nfunction ProductDetail(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.photos,\n      alt: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: props.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlscy9pbmRleC50c3g/YTgwOCJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlsIiwicHJvcHMiLCJwaG90b3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBbUM7QUFDakMsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxNQUFoQjtBQUF3QixTQUFHLEVBQUVELEtBQUssQ0FBQ0U7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw4QkFDRTtBQUFBLGtCQUFLRixLQUFLLENBQUNFO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSUYsS0FBSyxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztBQUVjSiw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUHJvZHVjdERldGFpbChwcm9wczogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aW1nIHNyYz17cHJvcHMucGhvdG9zfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductDetails/index.tsx\n");

/***/ }),

/***/ "./src/pages/products/[productId].tsx":
/*!********************************************!*\
  !*** ./src/pages/products/[productId].tsx ***!
  \********************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProductDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ProductDetails */ \"./src/components/ProductDetails/index.tsx\");\n\n\nvar _jsxFileName = \"/Users/eszarowska/Desktop/patronage22_lublin_js_frontend/src/pages/products/[productId].tsx\";\n\n\nfunction ProductDetails(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [\"Home \", \">\", \" Products\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"location\",\n        children: [\" \", \">\", \" \", props.productData.title]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ProductDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: props.productData.title,\n      description: props.productData.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\nasync function getStaticPaths() {\n  const res = await fetch(\"http://proxy-patronageapi.bsolutions.usermd.net/api/products/getAllProductsExternal\");\n  const products = await res.json();\n  return {\n    fallback: \"blocking\",\n    paths: products.map(product => ({\n      params: {\n        productId: product.id.toString()\n      }\n    }))\n  };\n}\nasync function getStaticProps(context) {\n  const productId = context.params.productId;\n  const res = await fetch(` http://proxy-patronageapi.bsolutions.usermd.net/api/products/external/${productId}`);\n  const selectedProduct = await res.json();\n  return {\n    props: {\n      productData: {\n        id: selectedProduct.id.toString(),\n        title: selectedProduct.title,\n        description: selectedProduct.description\n      }\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdHMvW3Byb2R1Y3RJZF0udHN4PzkwZmIiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbHMiLCJwcm9wcyIsInByb2R1Y3REYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJwcm9kdWN0cyIsImpzb24iLCJmYWxsYmFjayIsInBhdGhzIiwibWFwIiwicHJvZHVjdCIsInBhcmFtcyIsInByb2R1Y3RJZCIsImlkIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJzZWxlY3RlZFByb2R1Y3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQW9DO0FBQ2xDLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSwwQkFDUSxHQURSLGVBQ3NCLEdBRHRCLGVBRUU7QUFBTSxpQkFBUyxFQUFDLFVBQWhCO0FBQUEsbUJBQ0csR0FESCxFQUVHLEdBRkgsT0FFU0EsS0FBSyxDQUFDQyxXQUFOLENBQWtCQyxLQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFLHFFQUFDLGtFQUFEO0FBQ0UsV0FBSyxFQUFFRixLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLEtBRDNCO0FBRUUsaUJBQVcsRUFBRUYsS0FBSyxDQUFDQyxXQUFOLENBQWtCRTtBQUZqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQSxrQkFERjtBQWVEOztBQUVNLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDckIscUZBRHFCLENBQXZCO0FBR0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUF2QjtBQUVBLFNBQU87QUFDTEMsWUFBUSxFQUFFLFVBREw7QUFFTEMsU0FBSyxFQUFFSCxRQUFRLENBQUNJLEdBQVQsQ0FBY0MsT0FBRCxLQUFtQjtBQUNyQ0MsWUFBTSxFQUFFO0FBQUVDLGlCQUFTLEVBQUVGLE9BQU8sQ0FBQ0csRUFBUixDQUFXQyxRQUFYO0FBQWI7QUFENkIsS0FBbkIsQ0FBYjtBQUZGLEdBQVA7QUFNRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQTRDO0FBQ2pELFFBQU1KLFNBQVMsR0FBR0ksT0FBTyxDQUFDTCxNQUFSLENBQWVDLFNBQWpDO0FBRUEsUUFBTVQsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDckIsMEVBQXlFUSxTQUFVLEVBRDlELENBQXZCO0FBR0EsUUFBTUssZUFBZSxHQUFHLE1BQU1kLEdBQUcsQ0FBQ0csSUFBSixFQUE5QjtBQUVBLFNBQU87QUFDTFIsU0FBSyxFQUFFO0FBQ0xDLGlCQUFXLEVBQUU7QUFDWGMsVUFBRSxFQUFFSSxlQUFlLENBQUNKLEVBQWhCLENBQW1CQyxRQUFuQixFQURPO0FBRVhkLGFBQUssRUFBRWlCLGVBQWUsQ0FBQ2pCLEtBRlo7QUFHWEMsbUJBQVcsRUFBRWdCLGVBQWUsQ0FBQ2hCO0FBSGxCO0FBRFI7QUFERixHQUFQO0FBU0Q7QUFFY0osNkVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMvW3Byb2R1Y3RJZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3REZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdERldGFpbHNcIjtcblxuZnVuY3Rpb24gUHJvZHVjdERldGFpbHMocHJvcHM6IGFueSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+XG4gICAgICAgIEhvbWUge1wiPlwifSBQcm9kdWN0c3tcIiBcIn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9jYXRpb25cIj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAge1wiPlwifSB7cHJvcHMucHJvZHVjdERhdGEudGl0bGV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvaDE+XG4gICAgICA8UHJvZHVjdERldGFpbFxuICAgICAgICB0aXRsZT17cHJvcHMucHJvZHVjdERhdGEudGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5wcm9kdWN0RGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwOi8vcHJveHktcGF0cm9uYWdlYXBpLmJzb2x1dGlvbnMudXNlcm1kLm5ldC9hcGkvcHJvZHVjdHMvZ2V0QWxsUHJvZHVjdHNFeHRlcm5hbFwiXG4gICk7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsXG4gICAgcGF0aHM6IHByb2R1Y3RzLm1hcCgocHJvZHVjdDogYW55KSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IHByb2R1Y3RJZDogcHJvZHVjdC5pZC50b1N0cmluZygpIH0sXG4gICAgfSkpLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dDogYW55KSB7XG4gIGNvbnN0IHByb2R1Y3RJZCA9IGNvbnRleHQucGFyYW1zLnByb2R1Y3RJZDtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgIGAgaHR0cDovL3Byb3h5LXBhdHJvbmFnZWFwaS5ic29sdXRpb25zLnVzZXJtZC5uZXQvYXBpL3Byb2R1Y3RzL2V4dGVybmFsLyR7cHJvZHVjdElkfWBcbiAgKTtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9kdWN0ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0RGF0YToge1xuICAgICAgICBpZDogc2VsZWN0ZWRQcm9kdWN0LmlkLnRvU3RyaW5nKCksXG4gICAgICAgIHRpdGxlOiBzZWxlY3RlZFByb2R1Y3QudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZFByb2R1Y3QuZGVzY3JpcHRpb24sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/products/[productId].tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });