import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FaceIcon from "@mui/icons-material/Face";


const pages = ["Home", "About", "Products"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MainNavigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userLogged, setUserLogged] = React.useState(false);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="app-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={
                        page === "Home" ? "/" : `/${page.toLocaleLowerCase()}`
                      }
                    >
                      <div className="nav-link">{page}</div>
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "30vw",
            }}
          >
            {pages.map((page) => (
              <Link
                href={page === "Home" ? "/" : `/${page.toLocaleLowerCase()}`}
              >
                <Button
                  className="nav-link"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          {userLogged ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Link href="/cart">
                <Button color="inherit">
                  <ShoppingCartIcon /> Cart
                </Button>
              </Link>
              <Link href="/login">
                <Button color="inherit">
                  <FaceIcon /> Login
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainNavigation;

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
