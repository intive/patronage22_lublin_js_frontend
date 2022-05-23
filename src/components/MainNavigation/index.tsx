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
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FaceIcon from "@mui/icons-material/Face";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const pages = ["Home", "Products", "About", "Contact"];
const settings = ["Profile", "Orders"];

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const MainNavigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart);
  const { cartItems } = cart;

  let totalCartItems: number = 0;

  cartItems?.forEach((item: any) => {
    totalCartItems += item.quantity;
  });

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
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "block" } }}
          >
            <WhatshotIcon sx={{ fontSize: 50, color: "#0057D8" }} />
            <Typography variant="subtitle2" color="#0057D8" lineHeight={1}>
              e-shop
            </Typography>
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
                  <Typography textAlign="center" component="div">
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
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            >
              <WhatshotIcon sx={{ fontSize: 50, color: "#0057D8" }} />
              <Typography variant="subtitle2" color="#0057D8" lineHeight={1}>
                e-shop
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
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

          {userInfo ? (
            <Box sx={{ flexGrow: 0 }}>
              <Link href="/cart">
                <Button color="inherit">
                  Cart
                  <StyledBadge
                    badgeContent={totalCartItems === 0 ? "0" : totalCartItems}
                    color="primary"
                  >
                    <ShoppingCartIcon />
                  </StyledBadge>
                </Button>
              </Link>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ size: "medium", p: 0, ml: 2 }}
              >
                <Avatar src="/broken-image.jpg"
                  sx={{ color: 'white', bgcolor: '#0056ad', width: 24, height: 24 }}
                />
              </IconButton>
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
                    <Typography textAlign="center">
                    <Link href={`/${setting.toLocaleLowerCase()}`}>
                    <div className="nav-link">{setting}</div>
                      </Link>
                      </Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  key="Logout"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Link href="/cart">
                <Button color="inherit">
                  Cart
                  <StyledBadge
                    badgeContent={totalCartItems === 0 ? "0" : totalCartItems}
                    color="primary"
                  >
                    <ShoppingCartIcon />
                  </StyledBadge>
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
