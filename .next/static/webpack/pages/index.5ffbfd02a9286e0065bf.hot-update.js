webpackHotUpdate_N_E("pages/index",{

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/meetups/MeetupItem.module.css");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/index.js");
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardActions */ "./node_modules/@mui/material/CardActions/index.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/index.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");


var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\nextjs\\meetups\\components\\meetups\\MeetupItem.js",
    _s = $RefreshSig$();










function MeetupItem(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        maxWidth: 445
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__["default"], {
        component: "img",
        alt: props.title,
        height: "140",
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
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "body2",
          color: "text.secondary",
          children: props.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "h5",
          color: "text.primary",
          children: "117$"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          size: "small",
          children: "Buy now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          size: "small",
          onClick: showDetailsHandler,
          children: "Learn More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
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

_s(MeetupItem, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = MeetupItem;
/* harmony default export */ __webpack_exports__["default"] = (MeetupItem);
/**
 * <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
 */

var _c;

$RefreshReg$(_c, "MeetupItem");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0uanMiXSwibmFtZXMiOlsiTWVldHVwSXRlbSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2hvd0RldGFpbHNIYW5kbGVyIiwicHVzaCIsImlkIiwiY2xhc3NlcyIsIml0ZW0iLCJtYXhXaWR0aCIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFDekIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxXQUFTQyxrQkFBVCxHQUE4QjtBQUM1QkYsVUFBTSxDQUFDRyxJQUFQLENBQVksTUFBTUosS0FBSyxDQUFDSyxFQUF4QjtBQUNEOztBQUVELHNCQUNFO0FBQUksYUFBUyxFQUFFQyw2REFBTyxDQUFDQyxJQUF2QjtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQU0sUUFBRSxFQUFFO0FBQUVDLGdCQUFRLEVBQUU7QUFBWixPQUFWO0FBQUEsOEJBQ0UscUVBQUMsK0RBQUQ7QUFDRSxpQkFBUyxFQUFDLEtBRFo7QUFFRSxXQUFHLEVBQUVSLEtBQUssQ0FBQ1MsS0FGYjtBQUdFLGNBQU0sRUFBQyxLQUhUO0FBSUUsYUFBSyxFQUFFVCxLQUFLLENBQUNVO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UscUVBQUMsaUVBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxnRUFBRDtBQUFZLHNCQUFZLE1BQXhCO0FBQXlCLGlCQUFPLEVBQUMsSUFBakM7QUFBc0MsbUJBQVMsRUFBQyxLQUFoRDtBQUFBLG9CQUNHVixLQUFLLENBQUNTO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLHFFQUFDLGdFQUFEO0FBQVksaUJBQU8sRUFBQyxPQUFwQjtBQUE0QixlQUFLLEVBQUMsZ0JBQWxDO0FBQUEsb0JBQ0dULEtBQUssQ0FBQ1c7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBT0UscUVBQUMsZ0VBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLGVBQUssRUFBQyxjQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQWtCRSxxRUFBQyxpRUFBRDtBQUFBLGdDQUNFLHFFQUFDLDREQUFEO0FBQVEsY0FBSSxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyw0REFBRDtBQUFRLGNBQUksRUFBQyxPQUFiO0FBQXFCLGlCQUFPLEVBQUVSLGtCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztHQXBDUUosVTtVQUNRRyxxRDs7O0tBRFJILFU7QUFzQ01BLHlFQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWZmYmZkMDJhOTI4NmUwMDY1YmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWVldHVwSXRlbS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnNcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkTWVkaWFcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5cbmZ1bmN0aW9uIE1lZXR1cEl0ZW0ocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgZnVuY3Rpb24gc2hvd0RldGFpbHNIYW5kbGVyKCkge1xuICAgIHJvdXRlci5wdXNoKFwiL1wiICsgcHJvcHMuaWQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgPENhcmQgc3g9e3sgbWF4V2lkdGg6IDQ0NSB9fT5cbiAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgYWx0PXtwcm9wcy50aXRsZX1cbiAgICAgICAgICBoZWlnaHQ9XCIxNDBcIlxuICAgICAgICAgIGltYWdlPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge3Byb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb2xvcj1cInRleHQucHJpbWFyeVwiPlxuICAgICAgICAgICAgMTE3JFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+QnV5IG5vdzwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgb25DbGljaz17c2hvd0RldGFpbHNIYW5kbGVyfT5cbiAgICAgICAgICAgIExlYXJuIE1vcmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2xpPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBJdGVtO1xuXG4vKipcbiAqIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dEZXRhaWxzSGFuZGxlcn0+U2hvdyBEZXRhaWxzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgIDwvbGk+XG4gKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=