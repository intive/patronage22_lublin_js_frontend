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
          lineNumber: 45,
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
              lineNumber: 63,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
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
                      lineNumber: 91,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, _this)
              }, page, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
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
          lineNumber: 98,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
          sx: {
            flexGrow: 1,
            display: {
              xs: "none",
              md: "flex"
            },
            marginLeft: "25vw"
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
                lineNumber: 117,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
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
                lineNumber: 133,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
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
                  lineNumber: 154,
                  columnNumber: 21
                }, _this)
              }, setting, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
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
                lineNumber: 163,
                columnNumber: 19
              }, _this), " Cart"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
            href: "/login",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
              color: "inherit",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_icons_material_Face__WEBPACK_IMPORTED_MODULE_17___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 19
              }, _this), " Login"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbk5hdmlnYXRpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbInBhZ2VzIiwic2V0dGluZ3MiLCJNYWluTmF2aWdhdGlvbiIsIlJlYWN0IiwiYW5jaG9yRWxOYXYiLCJzZXRBbmNob3JFbE5hdiIsImFuY2hvckVsVXNlciIsInNldEFuY2hvckVsVXNlciIsInVzZXJMb2dnZWQiLCJzZXRVc2VyTG9nZ2VkIiwiaGFuZGxlT3Blbk5hdk1lbnUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVPcGVuVXNlck1lbnUiLCJoYW5kbGVDbG9zZU5hdk1lbnUiLCJoYW5kbGVDbG9zZVVzZXJNZW51IiwibXIiLCJkaXNwbGF5IiwieHMiLCJtZCIsImZsZXhHcm93IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiQm9vbGVhbiIsIm1hcCIsInBhZ2UiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsIm1hcmdpbkxlZnQiLCJteSIsImNvbG9yIiwicCIsIm10Iiwic2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixVQUFsQixDQUFkO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsV0FBdkIsRUFBb0MsUUFBcEMsQ0FBakI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsd0JBQ1dDLDhDQUFBLENBQWUsSUFBZixDQURYO0FBQUE7QUFBQSxNQUNwQkMsV0FEb0I7QUFBQSxNQUNQQyxjQURPOztBQUFBLHlCQUVhRiw4Q0FBQSxDQUFlLElBQWYsQ0FG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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFjNjgxMGQzYmJlNDhlOTllN2U5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTWVudVwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudVwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sdGlwXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTaG9wcGluZ0NhcnRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1Nob3BwaW5nQ2FydFwiO1xyXG5pbXBvcnQgRmFjZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRmFjZVwiO1xyXG5cclxuY29uc3QgcGFnZXMgPSBbXCJIb21lXCIsIFwiQWJvdXRcIiwgXCJQcm9kdWN0c1wiXTtcclxuY29uc3Qgc2V0dGluZ3MgPSBbXCJQcm9maWxlXCIsIFwiQWNjb3VudFwiLCBcIkRhc2hib2FyZFwiLCBcIkxvZ291dFwiXTtcclxuXHJcbmNvbnN0IE1haW5OYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthbmNob3JFbE5hdiwgc2V0QW5jaG9yRWxOYXZdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2FuY2hvckVsVXNlciwgc2V0QW5jaG9yRWxVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt1c2VyTG9nZ2VkLCBzZXRVc2VyTG9nZ2VkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk5hdk1lbnUgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWxOYXYoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuVXNlck1lbnUgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWxVc2VyKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTmF2TWVudSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsTmF2KG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXNlck1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbFVzZXIobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJhcHAtYmFyXCI+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxyXG4gICAgICAgIDxUb29sYmFyIGRpc2FibGVHdXR0ZXJzPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgIHN4PXt7IG1yOiAyLCBkaXNwbGF5OiB7IHhzOiBcIm5vbmVcIiwgbWQ6IFwiZmxleFwiIH0gfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTE9HT1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIGRpc3BsYXk6IHsgeHM6IFwiZmxleFwiLCBtZDogXCJub25lXCIgfSB9fT5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1lbnUtYXBwYmFyXCJcclxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbk5hdk1lbnV9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgaWQ9XCJtZW51LWFwcGJhclwiXHJcbiAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsTmF2fVxyXG4gICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbE5hdil9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VOYXZNZW51fVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB7IHhzOiBcImJsb2NrXCIsIG1kOiBcIm5vbmVcIiB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtwYWdlfSBvbkNsaWNrPXtoYW5kbGVDbG9zZU5hdk1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgPT09IFwiSG9tZVwiID8gXCIvXCIgOiBgLyR7cGFnZS50b0xvY2FsZUxvd2VyQ2FzZSgpfWBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e3BhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSwgZGlzcGxheTogeyB4czogXCJmbGV4XCIsIG1kOiBcIm5vbmVcIiB9IH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExPR09cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB7IHhzOiBcIm5vbmVcIiwgbWQ6IFwiZmxleFwiIH0sXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIyNXZ3XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwYWdlcy5tYXAoKHBhZ2UpID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17cGFnZSA9PT0gXCJIb21lXCIgPyBcIi9cIiA6IGAvJHtwYWdlLnRvTG9jYWxlTG93ZXJDYXNlKCl9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgICAgICAga2V5PXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU5hdk1lbnV9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IG15OiAyLCBjb2xvcjogXCJ3aGl0ZVwiLCBkaXNwbGF5OiBcImJsb2NrXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3BhZ2V9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAge3VzZXJMb2dnZWQgPyAoXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDAgfX0+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJPcGVuIHNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuVXNlck1lbnV9IHN4PXt7IHA6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwiUmVteSBTaGFycFwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2F2YXRhci8yLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICBzeD17eyBtdDogXCI0NXB4XCIgfX1cclxuICAgICAgICAgICAgICAgIGlkPVwibWVudS1hcHBiYXJcIlxyXG4gICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsVXNlcn1cclxuICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWw6IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsVXNlcil9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVzZXJNZW51fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZXR0aW5ncy5tYXAoKHNldHRpbmcpID0+IChcclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17c2V0dGluZ30gb25DbGljaz17aGFuZGxlQ2xvc2VVc2VyTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdGV4dEFsaWduPVwiY2VudGVyXCI+e3NldHRpbmd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDAgfX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiAvPiBDYXJ0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICAgICAgPEZhY2VJY29uIC8+IExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9BcHBCYXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmlnYXRpb247XHJcblxyXG4vKlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudVwiO1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TaG9wcGluZ0NhcnRcIjtcclxuaW1wb3J0IEZhY2VJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0ZhY2VcIjtcclxuXHJcbmZ1bmN0aW9uIE1haW5OYXZpZ2F0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XHJcbiAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDIgfX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMT0dPXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnV9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5BYm91dCBVczwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+Q29udGFjdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPiBDYXJ0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgIDxGYWNlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz4gTG9naW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZpZ2F0aW9uO1xyXG4qL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9