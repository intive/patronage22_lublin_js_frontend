import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import MainButton from "../MainButton";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

interface CartTotalsProps {
  subTotal: number;
  deliveryCost: number;
  orderTotal: number;
}

function CartTotals(props: CartTotalsProps) {
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Box>
      <Card sx={{ minWidth: "280px" }}>
        <CardContent sx={{ textAlign: "end" }}>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                Subtotal:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {props.subTotal.toFixed(2)}$
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                Delivery Costs:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {props.deliveryCost.toFixed(2)}$
              </Typography>
            </Grid>
          </Grid>
          <hr color={"lightgrey"} />
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6">Order Total:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                {props.orderTotal.toFixed(2)}$
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ display: "grid" }}>
          <Link href={userInfo ? "/shipping" : "/login"} passHref>
            <MainButton>
              {userInfo
                ? "proceed to checkout".toLocaleUpperCase()
                : "login".toLocaleUpperCase()}
            </MainButton>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CartTotals;
