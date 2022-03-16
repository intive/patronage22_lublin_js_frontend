webpackHotUpdate_N_E("pages/login",{

/***/ "./src/components/LoginForm/index.tsx":
/*!********************************************!*\
  !*** ./src/components/LoginForm/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ "./src/components/LoginForm/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");


var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\nextjs\\meetups\\src\\components\\LoginForm\\index.tsx",
    _s = $RefreshSig$();






function LoginForm() {
  _s();

  var emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var passwordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var submitHandler = function submitHandler(event) {
    event.preventDefault();
    console.log("Submitted!");
  };

  var initialValues = {
    email: "",
    password: ""
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
      initialValues: initialValues,
      onSubmit: function onSubmit(values, actions) {
        console.log({
          values: values,
          actions: actions
        });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: submitHandler,
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
            htmlFor: "email",
            children: "Email address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Input"], {
            id: "email",
            type: "email",
            name: "email",
            placeholder: "Enter email",
            inputRef: emailInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["FormHelperText"], {
            children: "We'll never share your email with anyone else."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Input"], {
            id: "password",
            type: "password",
            name: "password",
            placeholder: "Password",
            inputRef: passwordInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "New Customer? Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_s(LoginForm, "ooKQCLNXcyO+sbTEMp0ZPxRpehw=");

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJlbWFpbElucHV0UmVmIiwidXNlUmVmIiwicGFzc3dvcmRJbnB1dFJlZiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImluaXRpYWxWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiY2xhc3NlcyIsImNvbnRhaW5lciIsInZhbHVlcyIsImFjdGlvbnMiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRTdWJtaXR0aW5nIiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUNuQixNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLENBQW1CLElBQW5CLENBQTVCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdELG9EQUFNLENBQW1CLElBQW5CLENBQS9COztBQUVBLE1BQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUE0QjtBQUNoREEsU0FBSyxDQUFDQyxjQUFOO0FBRUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDRCxHQUpEOztBQU1BLE1BQU1DLGFBQTJCLEdBQUc7QUFBRUMsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsWUFBUSxFQUFFO0FBQXZCLEdBQXBDO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLHdEQUFPLENBQUNDLFNBQTVCO0FBQUEsMkJBQ0UscUVBQUMsNkNBQUQ7QUFDRSxtQkFBYSxFQUFFSixhQURqQjtBQUVFLGNBQVEsRUFBRSxrQkFBQ0ssTUFBRCxFQUFTQyxPQUFULEVBQXFCO0FBQzdCUixlQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFTSxnQkFBTSxFQUFOQSxNQUFGO0FBQVVDLGlCQUFPLEVBQVBBO0FBQVYsU0FBWjtBQUNBQyxhQUFLLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixNQUFmLEVBQXVCLElBQXZCLEVBQTZCLENBQTdCLENBQUQsQ0FBTDtBQUNBQyxlQUFPLENBQUNJLGFBQVIsQ0FBc0IsS0FBdEI7QUFDRCxPQU5IO0FBQUEsNkJBUUUscUVBQUMsMkNBQUQ7QUFBTSxnQkFBUSxFQUFFZixhQUFoQjtBQUErQixpQkFBUyxFQUFFUSx3REFBTyxDQUFDUSxJQUFsRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMseURBQUQ7QUFBQSxrQ0FDRSxxRUFBQyx1REFBRDtBQUFXLG1CQUFPLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSxxRUFBQyxtREFBRDtBQUNFLGNBQUUsRUFBQyxPQURMO0FBRUUsZ0JBQUksRUFBQyxPQUZQO0FBR0UsZ0JBQUksRUFBQyxPQUhQO0FBSUUsdUJBQVcsRUFBQyxhQUpkO0FBS0Usb0JBQVEsRUFBRW5CLGFBTFo7QUFNRSxvQkFBUTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFVRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFpQkUscUVBQUMseURBQUQ7QUFBQSxrQ0FDRSxxRUFBQyx1REFBRDtBQUFXLG1CQUFPLEVBQUMsVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSxxRUFBQyxtREFBRDtBQUNFLGNBQUUsRUFBQyxVQURMO0FBRUUsZ0JBQUksRUFBQyxVQUZQO0FBR0UsZ0JBQUksRUFBQyxVQUhQO0FBSUUsdUJBQVcsRUFBQyxVQUpkO0FBS0Usb0JBQVEsRUFBRUUsZ0JBTFo7QUFNRSxvQkFBUTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRixlQTZCRTtBQUFLLG1CQUFTLEVBQUVTLHdEQUFPLENBQUNHLE9BQXhCO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdCRixlQWdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStDRDs7R0EzRFFmLFM7O0tBQUFBLFM7QUE2RE1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjdiMzA5MjE4YWQyNjE4ZmE2ZGM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBGb3JtSGVscGVyVGV4dCwgSW5wdXQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuXHJcbmludGVyZmFjZSBNeUZvcm1WYWx1ZXMge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xyXG4gIGNvbnN0IGVtYWlsSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgcGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiU3VibWl0dGVkIVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0aWFsVmFsdWVzOiBNeUZvcm1WYWx1ZXMgPSB7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCBhY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IHZhbHVlcywgYWN0aW9ucyB9KTtcclxuICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xyXG4gICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgYWRkcmVzczwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgaW5wdXRSZWY9e2VtYWlsSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgICAgIFdlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS5cclxuICAgICAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpbnB1dFJlZj17cGFzc3dvcmRJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cD5OZXcgQ3VzdG9tZXI/IFJlZ2lzdGVyPC9wPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9