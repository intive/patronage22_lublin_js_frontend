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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


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
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
            htmlFor: "email",
            children: "Email address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
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
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["FormHelperText"], {
            children: "We'll never share your email with anyone else."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
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
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["New Customer? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/register",
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 27
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJlbWFpbElucHV0UmVmIiwidXNlUmVmIiwicGFzc3dvcmRJbnB1dFJlZiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImluaXRpYWxWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiY2xhc3NlcyIsImNvbnRhaW5lciIsInZhbHVlcyIsImFjdGlvbnMiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRTdWJtaXR0aW5nIiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFDbkIsTUFBTUMsYUFBYSxHQUFHQyxvREFBTSxDQUFtQixJQUFuQixDQUE1QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHRCxvREFBTSxDQUFtQixJQUFuQixDQUEvQjs7QUFFQSxNQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBNEI7QUFDaERBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0QsR0FKRDs7QUFNQSxNQUFNQyxhQUEyQixHQUFHO0FBQUVDLFNBQUssRUFBRSxFQUFUO0FBQWFDLFlBQVEsRUFBRTtBQUF2QixHQUFwQztBQUVBLHNCQUNFO0FBQVMsYUFBUyxFQUFFQyx3REFBTyxDQUFDQyxTQUE1QjtBQUFBLDJCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsbUJBQWEsRUFBRUosYUFEakI7QUFFRSxjQUFRLEVBQUUsa0JBQUNLLE1BQUQsRUFBU0MsT0FBVCxFQUFxQjtBQUM3QlIsZUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRU0sZ0JBQU0sRUFBTkEsTUFBRjtBQUFVQyxpQkFBTyxFQUFQQTtBQUFWLFNBQVo7QUFDQUMsYUFBSyxDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFELENBQUw7QUFDQUMsZUFBTyxDQUFDSSxhQUFSLENBQXNCLEtBQXRCO0FBQ0QsT0FOSDtBQUFBLDZCQVFFLHFFQUFDLDJDQUFEO0FBQU0sZ0JBQVEsRUFBRWYsYUFBaEI7QUFBK0IsaUJBQVMsRUFBRVEsd0RBQU8sQ0FBQ1EsSUFBbEQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLHlEQUFEO0FBQUEsa0NBQ0UscUVBQUMsdURBQUQ7QUFBVyxtQkFBTyxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUscUVBQUMsbURBQUQ7QUFDRSxjQUFFLEVBQUMsT0FETDtBQUVFLGdCQUFJLEVBQUMsT0FGUDtBQUdFLGdCQUFJLEVBQUMsT0FIUDtBQUlFLHVCQUFXLEVBQUMsYUFKZDtBQUtFLG9CQUFRLEVBQUVuQixhQUxaO0FBTUUsb0JBQVE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBVUUscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBaUJFLHFFQUFDLHlEQUFEO0FBQUEsa0NBQ0UscUVBQUMsdURBQUQ7QUFBVyxtQkFBTyxFQUFDLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUscUVBQUMsbURBQUQ7QUFDRSxjQUFFLEVBQUMsVUFETDtBQUVFLGdCQUFJLEVBQUMsVUFGUDtBQUdFLGdCQUFJLEVBQUMsVUFIUDtBQUlFLHVCQUFXLEVBQUMsVUFKZDtBQUtFLG9CQUFRLEVBQUVFLGdCQUxaO0FBTUUsb0JBQVE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkYsZUE2QkU7QUFBSyxtQkFBUyxFQUFFUyx3REFBTyxDQUFDRyxPQUF4QjtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3QkYsZUFnQ0U7QUFBQSxvREFDZ0IscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlERDs7R0E3RFFmLFM7O0tBQUFBLFM7QUErRE1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjBmYmE3YzZmNGRlMTJlYTAzODI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBGb3JtSGVscGVyVGV4dCwgSW5wdXQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW50ZXJmYWNlIE15Rm9ybVZhbHVlcyB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMb2dpbkZvcm0oKSB7XHJcbiAgY29uc3QgZW1haWxJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBwYXNzd29yZElucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJTdWJtaXR0ZWQhXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXM6IE15Rm9ybVZhbHVlcyA9IHsgZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgdmFsdWVzLCBhY3Rpb25zIH0pO1xyXG4gICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxyXG4gICAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgICAgICBpbnB1dFJlZj17ZW1haWxJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICAgICAgV2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbCB3aXRoIGFueW9uZSBlbHNlLlxyXG4gICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlucHV0UmVmPXtwYXNzd29yZElucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICA8YnV0dG9uPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBOZXcgQ3VzdG9tZXI/IDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==