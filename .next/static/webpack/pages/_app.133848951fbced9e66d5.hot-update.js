webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/MainNavigation/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/MainNavigation/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Dmytro_Desktop_nextjs_meetups_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/Menu/index.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/ShoppingCart */ "./node_modules/@mui/icons-material/ShoppingCart.js");
/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_icons_material_Face__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/Face */ "./node_modules/@mui/icons-material/Face.js");
/* harmony import */ var _mui_icons_material_Face__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Face__WEBPACK_IMPORTED_MODULE_17__);



var _jsxFileName = "C:\\Users\\Dmytro\\Desktop\\nextjs\\meetups\\src\\components\\MainNavigation\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

















var pages = ["Home", "About", "Products"];
var settings = ["Profile", "Account", "Dashboard", "Logout"];

var MainNavigation = function MainNavigation() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](null),
      _React$useState2 = Object(C_Users_Dmytro_Desktop_nextjs_meetups_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      anchorElNav = _React$useState2[0],
      setAnchorElNav = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](null),
      _React$useState4 = Object(C_Users_Dmytro_Desktop_nextjs_meetups_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      anchorElUser = _React$useState4[0],
      setAnchorElUser = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState6 = Object(C_Users_Dmytro_Desktop_nextjs_meetups_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      userLogged = _React$useState6[0],
      setUserLogged = _React$useState6[1];

  var handleOpenNavMenu = function handleOpenNavMenu(event) {
    setAnchorElNav(event.currentTarget);
  };

  var handleOpenUserMenu = function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget);
  };

  var handleCloseNavMenu = function handleCloseNavMenu() {
    setAnchorElNav(null);
  };

  var handleCloseUserMenu = function handleCloseUserMenu() {
    setAnchorElUser(null);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "static",
    className: "app-bar",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
      maxWidth: "xl",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        disableGutters: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "h6",
          noWrap: true,
          component: "div",
          sx: {
            mr: 2,
            display: {
              xs: "none",
              md: "flex"
            }
          },
          children: "LOGO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
          sx: {
            flexGrow: 1,
            display: {
              xs: "flex",
              md: "none"
            }
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            size: "large",
            "aria-label": "account of current user",
            "aria-controls": "menu-appbar",
            "aria-haspopup": "true",
            onClick: handleOpenNavMenu,
            color: "inherit",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "menu-appbar",
            anchorEl: anchorElNav,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            keepMounted: true,
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            open: Boolean(anchorElNav),
            onClose: handleCloseNavMenu,
            sx: {
              display: {
                xs: "block",
                md: "none"
              }
            },
            children: pages.map(function (page) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
                onClick: handleCloseNavMenu,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  textAlign: "center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
                    href: page === "Home" ? "/" : "/".concat(page.toLocaleLowerCase()),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "nav-link",
                      children: page
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, _this)
              }, page, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "h6",
          noWrap: true,
          component: "div",
          sx: {
            flexGrow: 1,
            display: {
              xs: "flex",
              md: "none"
            }
          },
          children: "LOGO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
          sx: {
            flexGrow: 1,
            display: {
              xs: "none",
              md: "flex"
            }
          },
          children: pages.map(function (page) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
              href: page === "Home" ? "/" : "/".concat(page.toLocaleLowerCase()),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
                className: "nav-link",
                onClick: handleCloseNavMenu,
                sx: {
                  my: 2,
                  color: "white",
                  display: "block"
                },
                children: page
              }, page, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this), userLogged ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
          sx: {
            flexGrow: 0
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], {
            title: "Open settings",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
              onClick: handleOpenUserMenu,
              sx: {
                p: 0
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
                alt: "Remy Sharp",
                src: "/static/images/avatar/2.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
            sx: {
              mt: "45px"
            },
            id: "menu-appbar",
            anchorEl: anchorElUser,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            keepMounted: true,
            transformOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            open: Boolean(anchorElUser),
            onClose: handleCloseUserMenu,
            children: settings.map(function (setting) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
                onClick: handleCloseUserMenu,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  textAlign: "center",
                  children: setting
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 21
                }, _this)
              }, setting, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
          sx: {
            flexGrow: 0
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
            href: "/cart",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
              color: "inherit",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_16___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 19
              }, _this), " Cart"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
            href: "/login",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
              color: "inherit",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_icons_material_Face__WEBPACK_IMPORTED_MODULE_17___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 19
              }, _this), " Login"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s(MainNavigation, "AmF8Cff9p6GQ+7hvZlfqk6P1h0Q=");

_c = MainNavigation;
/* harmony default export */ __webpack_exports__["default"] = (MainNavigation);
/*
import React from "react";
import classes from "./index.module.css";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FaceIcon from "@mui/icons-material/Face";

function MainNavigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.box}>
        <Toolbar className={classes.toolbar}>
          <Link href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 2 }}
              style={{ cursor: "pointer" }}
            >
              LOGO
            </Typography>
          </Link>
          <div className={classes.menu}>
            <Link href="/about">
              <Button color="inherit">About Us</Button>
            </Link>
            <Link href="/contact">
              <Button color="inherit">Contact</Button>
            </Link>
          </div>
          <Link href="/cart">
            <Button color="inherit">
              <ShoppingCartIcon className={classes.icon} /> Cart
            </Button>
          </Link>
          <Link href="/login">
            <Button color="inherit">
              <FaceIcon className={classes.icon} /> Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainNavigation;
*/

var _c;

$RefreshReg$(_c, "MainNavigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbk5hdmlnYXRpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbInBhZ2VzIiwic2V0dGluZ3MiLCJNYWluTmF2aWdhdGlvbiIsIlJlYWN0IiwiYW5jaG9yRWxOYXYiLCJzZXRBbmNob3JFbE5hdiIsImFuY2hvckVsVXNlciIsInNldEFuY2hvckVsVXNlciIsInVzZXJMb2dnZWQiLCJzZXRVc2VyTG9nZ2VkIiwiaGFuZGxlT3Blbk5hdk1lbnUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVPcGVuVXNlck1lbnUiLCJoYW5kbGVDbG9zZU5hdk1lbnUiLCJoYW5kbGVDbG9zZVVzZXJNZW51IiwibXIiLCJkaXNwbGF5IiwieHMiLCJtZCIsImZsZXhHcm93IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiQm9vbGVhbiIsIm1hcCIsInBhZ2UiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsIm15IiwiY29sb3IiLCJwIiwibXQiLCJzZXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLEtBQUssR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFVBQWxCLENBQWQ7QUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixXQUF2QixFQUFvQyxRQUFwQyxDQUFqQjs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSx3QkFDV0MsOENBQUEsQ0FBZSxJQUFmLENBRFg7QUFBQTtBQUFBLE1BQ3BCQyxXQURvQjtBQUFBLE1BQ1BDLGNBRE87O0FBQUEseUJBRWFGLDhDQUFBLENBQWUsSUFBZixDQUZiO0FBQUE7QUFBQSxN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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTMzODQ4OTUxZmJjZWQ5ZTY2ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiQG11aS9tYXRlcmlhbC9NZW51XCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9NZW51XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2x0aXBcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0XCI7XHJcbmltcG9ydCBGYWNlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9GYWNlXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL2xvZ28ucG5nXCI7XHJcblxyXG5jb25zdCBwYWdlcyA9IFtcIkhvbWVcIiwgXCJBYm91dFwiLCBcIlByb2R1Y3RzXCJdO1xyXG5jb25zdCBzZXR0aW5ncyA9IFtcIlByb2ZpbGVcIiwgXCJBY2NvdW50XCIsIFwiRGFzaGJvYXJkXCIsIFwiTG9nb3V0XCJdO1xyXG5cclxuY29uc3QgTWFpbk5hdmlnYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FuY2hvckVsTmF2LCBzZXRBbmNob3JFbE5hdl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYW5jaG9yRWxVc2VyLCBzZXRBbmNob3JFbFVzZXJdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3VzZXJMb2dnZWQsIHNldFVzZXJMb2dnZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuTmF2TWVudSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbE5hdihldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5Vc2VyTWVudSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbFVzZXIoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VOYXZNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWxOYXYobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVc2VyTWVudSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsVXNlcihudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cImFwcC1iYXJcIj5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCI+XHJcbiAgICAgICAgPFRvb2xiYXIgZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgc3g9e3sgbXI6IDIsIGRpc3BsYXk6IHsgeHM6IFwibm9uZVwiLCBtZDogXCJmbGV4XCIgfSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMT0dPXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgZGlzcGxheTogeyB4czogXCJmbGV4XCIsIG1kOiBcIm5vbmVcIiB9IH19PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibWVudS1hcHBiYXJcIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVuTmF2TWVudX1cclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICBpZD1cIm1lbnUtYXBwYmFyXCJcclxuICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWxOYXZ9XHJcbiAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJib3R0b21cIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsTmF2KX1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU5hdk1lbnV9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHsgeHM6IFwiYmxvY2tcIiwgbWQ6IFwibm9uZVwiIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwYWdlcy5tYXAoKHBhZ2UpID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e3BhZ2V9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTmF2TWVudX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA9PT0gXCJIb21lXCIgPyBcIi9cIiA6IGAvJHtwYWdlLnRvTG9jYWxlTG93ZXJDYXNlKCl9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57cGFnZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiB7IHhzOiBcImZsZXhcIiwgbWQ6IFwibm9uZVwiIH0gfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTE9HT1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgZGlzcGxheTogeyB4czogXCJub25lXCIsIG1kOiBcImZsZXhcIiB9IH19PlxyXG4gICAgICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e3BhZ2UgPT09IFwiSG9tZVwiID8gXCIvXCIgOiBgLyR7cGFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VOYXZNZW51fVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyBteTogMiwgY29sb3I6IFwid2hpdGVcIiwgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIHt1c2VyTG9nZ2VkID8gKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAwIH19PlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiT3BlbiBzZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlblVzZXJNZW51fSBzeD17eyBwOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD1cIlJlbXkgU2hhcnBcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9hdmF0YXIvMi5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgc3g9e3sgbXQ6IFwiNDVweFwiIH19XHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lbnUtYXBwYmFyXCJcclxuICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbFVzZXJ9XHJcbiAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWw6IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbFVzZXIpfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVc2VyTWVudX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2V0dGluZ3MubWFwKChzZXR0aW5nKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e3NldHRpbmd9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXNlck1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHRleHRBbGlnbj1cImNlbnRlclwiPntzZXR0aW5nfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAwIH19PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICAgICAgPFNob3BwaW5nQ2FydEljb24gLz4gQ2FydFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGYWNlSWNvbiAvPiBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQXBwQmFyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZpZ2F0aW9uO1xyXG5cclxuLypcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01lbnVcIjtcclxuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0XCI7XHJcbmltcG9ydCBGYWNlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9GYWNlXCI7XHJcblxyXG5mdW5jdGlvbiBNYWluTmF2aWdhdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxyXG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAyIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTE9HT1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+QWJvdXQgVXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkNvbnRhY3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz4gQ2FydFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICA8RmFjZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+IExvZ2luXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2aWdhdGlvbjtcclxuKi9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==