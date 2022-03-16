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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ cursor: "pointer" }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/about">
            <Button color="inherit">About Us</Button>
          </Link>
          <Link href="/contact">
            <Button color="inherit">Contact</Button>
          </Link>
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
