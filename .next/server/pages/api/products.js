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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/products.js":
/*!***********************************!*\
  !*** ./src/pages/api/products.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  res.status(200).json([{\n    \"id\": 1,\n    \"title\": \"Pierwszy produkt\",\n    \"price\": 15000,\n    \"description\": \"Opis proiduktu\",\n    \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n  }, {\n    \"id\": 2,\n    \"title\": \"Drugi produkt\",\n    \"price\": 15555,\n    \"description\": \"First Prod\",\n    \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n  }, {\n    \"id\": 3,\n    \"title\": \"Trzeci produkt\",\n    \"price\": 15551412,\n    \"description\": \"Sec Prod\",\n    \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n  }]);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3RzLmpzP2FkMDMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxnRUFBQ0EsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFFekJBLEtBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQ0ksQ0FDUTtBQUFFLFVBQU0sQ0FBUjtBQUFXLGFBQVMsa0JBQXBCO0FBQXdDLGFBQVMsS0FBakQ7QUFBd0QsbUJBQWUsZ0JBQXZFO0FBQ0EsY0FBVTtBQURWLEdBRFIsRUFLUTtBQUFFLFVBQU0sQ0FBUjtBQUFXLGFBQVMsZUFBcEI7QUFBcUMsYUFBUyxLQUE5QztBQUFxRCxtQkFBZSxZQUFwRTtBQUNBLGNBQVU7QUFEVixHQUxSLEVBU1E7QUFBRSxVQUFNLENBQVI7QUFBVyxhQUFTLGdCQUFwQjtBQUFzQyxhQUFTLFFBQS9DO0FBQXlELG1CQUFlLFVBQXhFO0FBQ0EsY0FBVTtBQURWLEdBVFIsQ0FESjtBQWNELENBaEJIIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9wcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oXG4gICAgICAgIFtcbiAgICAgICAgICAgICAgICB7IFwiaWRcIjogMSwgXCJ0aXRsZVwiOiBcIlBpZXJ3c3p5IHByb2R1a3RcIiwgXCJwcmljZVwiOiAxNTAwMCwgXCJkZXNjcmlwdGlvblwiOiBcIk9waXMgcHJvaWR1a3R1XCIsIFxuICAgICAgICAgICAgICAgIFwicGhvdG9zXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDE5ODYzMDA5MTctNjQ2NzRiZDYwMGQ4P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMjcwJnE9ODBcIiB9XG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsgXCJpZFwiOiAyLCBcInRpdGxlXCI6IFwiRHJ1Z2kgcHJvZHVrdFwiLCBcInByaWNlXCI6IDE1NTU1LCBcImRlc2NyaXB0aW9uXCI6IFwiRmlyc3QgUHJvZFwiLCBcbiAgICAgICAgICAgICAgICBcInBob3Rvc1wiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDQxOTg2MzAwOTE3LTY0Njc0YmQ2MDBkOD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzI3MCZxPTgwXCIgfVxuICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7IFwiaWRcIjogMywgXCJ0aXRsZVwiOiBcIlRyemVjaSBwcm9kdWt0XCIsIFwicHJpY2VcIjogMTU1NTE0MTIsIFwiZGVzY3JpcHRpb25cIjogXCJTZWMgUHJvZFwiLCBcbiAgICAgICAgICAgICAgICBcInBob3Rvc1wiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDQxOTg2MzAwOTE3LTY0Njc0YmQ2MDBkOD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzI3MCZxPTgwXCJ9XG4gICAgICAgICAgICBcbiAgICAgIF0pO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/products.js\n");

/***/ })

/******/ });