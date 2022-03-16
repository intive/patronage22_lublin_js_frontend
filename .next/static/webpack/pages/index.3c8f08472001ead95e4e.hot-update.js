webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Products/ProductItem.js":
/*!********************************************!*\
  !*** ./components/Products/ProductItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductItem.module.css */ "./components/Products/ProductItem.module.css");
/* harmony import */ var _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProductItem_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/index.js");
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardActions */ "./node_modules/@mui/material/CardActions/index.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/index.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");


var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\nextjs\\meetups\\components\\Products\\ProductItem.js",
    _s = $RefreshSig$();










function ProductItem(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  function showDetailsHandler() {
    router.push("/products/" + props.id);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        maxWidth: 445
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__["default"], {
        component: "img",
        alt: props.title,
        image: props.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          gutterBottom: true,
          variant: "h5",
          component: "div",
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "body2",
          color: "text.secondary",
          children: props.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          size: "small",
          children: "Buy now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          size: "small",
          onClick: showDetailsHandler,
          children: "Learn More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(ProductItem, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = ProductItem;
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

var _c;

$RefreshReg$(_c, "ProductItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Products/ProductItem.module.css":
/*!****************************************************!*\
  !*** ./components/Products/ProductItem.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./ProductItem.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Products/ProductItem.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./ProductItem.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Products/ProductItem.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./ProductItem.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Products/ProductItem.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Products/ProductList.js":
/*!********************************************!*\
  !*** ./components/Products/ProductList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem */ "./components/Products/ProductItem.js");
/* harmony import */ var _ProductList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductList.module.css */ "./components/Products/ProductList.module.css");
/* harmony import */ var _ProductList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProductList_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\nextjs\\meetups\\components\\Products\\ProductList.js";



function ProductList(props) {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _ProductList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    children: props.products.map(function (product) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: product.id,
        image: product.image,
        title: product.title,
        description: product.description
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

$RefreshReg$(_c, "ProductList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Products/ProductList.module.css":
/*!****************************************************!*\
  !*** ./components/Products/ProductList.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./ProductList.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Products/ProductList.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./ProductList.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Products/ProductList.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./ProductList.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Products/ProductList.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/meetups/MeetupItem.js":
false,

/***/ "./components/meetups/MeetupItem.module.css":
false,

/***/ "./components/meetups/MeetupList.js":
false,

/***/ "./components/meetups/MeetupList.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Products/ProductItem.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/Products/ProductItem.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ProductItem_item__sKm5h {\n  width: 350px;\n}\n\n.ProductItem_item__sKm5h img {\n  height: 200px;\n}\n", "",{"version":3,"sources":["webpack://components/Products/ProductItem.module.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf","sourcesContent":[".item {\n  width: 350px;\n}\n\n.item img {\n  height: 200px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"item": "ProductItem_item__sKm5h"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Products/ProductList.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/Products/ProductList.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ProductList_list__rw_bJ {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n\n.ProductList_list__rw_bJ li {\n  margin: 1rem 1.5rem;\n}\n", "",{"version":3,"sources":["webpack://components/Products/ProductList.module.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,qBAAa;EAAb,aAAa;EACb,uBAAe;UAAf,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;UAAnB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":[".list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.list li {\n  margin: 1rem 1.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"list": "ProductList_list__rw_bJ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/meetups/MeetupItem.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/meetups/MeetupList.module.css":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Products/ProductList */ "./components/Products/ProductList.js");


var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\nextjs\\meetups\\pages\\index.js";

var DUMMY_PRODUCTS = [{
  id: "m1",
  title: "A First Meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
  address: "Some address 5, 12345 Some City",
  description: "This is a first meetup!"
}, {
  id: "m2",
  title: "A Second Meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
  address: "Some address 10, 12345 Some City",
  description: "This is a second meetup!"
}, {
  id: "m3",
  title: "A Second Meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
  address: "Some address 10, 12345 Some City",
  description: "This is a second meetup!"
}, {
  id: "m4",
  title: "A Second Meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
  address: "Some address 10, 12345 Some City",
  description: "This is a second meetup!"
}];

function HomePage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      style: {
        textTransform: "uppercase",
        letterSpacing: "2px"
      },
      children: "Latest Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Products_ProductList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      products: DUMMY_PRODUCTS
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0SXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0SXRlbS5tb2R1bGUuY3NzPzEzNGEiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdExpc3QubW9kdWxlLmNzcz82ZTA3Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RJdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdExpc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdEl0ZW0iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEZXRhaWxzSGFuZGxlciIsInB1c2giLCJpZCIsImNsYXNzZXMiLCJpdGVtIiwibWF4V2lkdGgiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJQcm9kdWN0TGlzdCIsImxpc3QiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJEVU1NWV9QUk9EVUNUUyIsImFkZHJlc3MiLCJIb21lUGFnZSIsInRleHRUcmFuc2Zvcm0iLCJsZXR0ZXJTcGFjaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUFBOztBQUMxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFdBQVNDLGtCQUFULEdBQThCO0FBQzVCRixVQUFNLENBQUNHLElBQVAsQ0FBWSxlQUFl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QUFDbEIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLFdBQUssRUFBRTtBQUFFQyxxQkFBYSxFQUFFLFdBQWpCO0FBQThCQyxxQkFBYSxFQUFFO0FBQTdDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLHdFQUFEO0FBQWEsY0FBUSxFQUFFSjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQVFEOztLQVRRRSxRO0FBV01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNjOGYwODQ3MjAwMWVhZDk1ZTRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Byb2R1Y3RJdGVtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9uc1wiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcblxuZnVuY3Rpb24gUHJvZHVjdEl0ZW0ocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgZnVuY3Rpb24gc2hvd0RldGFpbHNIYW5kbGVyKCkge1xuICAgIHJvdXRlci5wdXNoKFwiL3Byb2R1Y3RzL1wiICsgcHJvcHMuaWQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgPENhcmQgc3g9e3sgbWF4V2lkdGg6IDQ0NSB9fT5cbiAgICAgICAgPENhcmRNZWRpYSBjb21wb25lbnQ9XCJpbWdcIiBhbHQ9e3Byb3BzLnRpdGxlfSBpbWFnZT17cHJvcHMuaW1hZ2V9IC8+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiPkJ1eSBub3c8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9e3Nob3dEZXRhaWxzSGFuZGxlcn0+XG4gICAgICAgICAgICBMZWFybiBNb3JlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEl0ZW07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL1Byb2R1Y3RJdGVtLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL1Byb2R1Y3RJdGVtLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9Qcm9kdWN0SXRlbS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi9Qcm9kdWN0SXRlbVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUHJvZHVjdExpc3QubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBQcm9kdWN0TGlzdChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICB7cHJvcHMucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgIDxQcm9kdWN0SXRlbVxuICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgICBpZD17cHJvZHVjdC5pZH1cbiAgICAgICAgICBpbWFnZT17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9Qcm9kdWN0TGlzdC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9Qcm9kdWN0TGlzdC5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vUHJvZHVjdExpc3QubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuUHJvZHVjdEl0ZW1faXRlbV9fc0ttNWgge1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4uUHJvZHVjdEl0ZW1faXRlbV9fc0ttNWggaW1nIHtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RJdGVtLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLml0ZW0ge1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4uaXRlbSBpbWcge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaXRlbVwiOiBcIlByb2R1Y3RJdGVtX2l0ZW1fX3NLbTVoXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlByb2R1Y3RMaXN0X2xpc3RfX3J3X2JKIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLlByb2R1Y3RMaXN0X2xpc3RfX3J3X2JKIGxpIHtcXG4gIG1hcmdpbjogMXJlbSAxLjVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RMaXN0Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBYTtFQUFiLGFBQWE7RUFDYix1QkFBZTtVQUFmLGVBQWU7RUFDZiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCBsaSB7XFxuICBtYXJnaW46IDFyZW0gMS41cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJsaXN0XCI6IFwiUHJvZHVjdExpc3RfbGlzdF9fcndfYkpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdExpc3RcIjtcclxuXHJcbmNvbnN0IERVTU1ZX1BST0RVQ1RTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJBIEZpcnN0IE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgZmlyc3QgbWVldHVwIVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIkEgU2Vjb25kIE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgMTAsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNlY29uZCBtZWV0dXAhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtM1wiLFxyXG4gICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAxMCwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cCFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm00XCIsXHJcbiAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDEwLCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBzZWNvbmQgbWVldHVwIVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGxldHRlclNwYWNpbmc6IFwiMnB4XCIgfX0+XHJcbiAgICAgICAgTGF0ZXN0IFByb2R1Y3RzXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxQcm9kdWN0TGlzdCBwcm9kdWN0cz17RFVNTVlfUFJPRFVDVFN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==