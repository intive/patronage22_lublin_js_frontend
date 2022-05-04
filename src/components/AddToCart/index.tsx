import { Box, Button, Grid, Typography } from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import MainButton from "../MainButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";

interface CounterBtn {
  label: ReactNode;
  onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const CounterBtn: React.FunctionComponent<CounterBtn> = ({
  label,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <div className="child">{label}</div>
    </div>
  );
};

interface CounterDisplayProps {
  count: number;
}

interface AddToCartProps {
  id: any;
}

const CounterDisplay: React.FunctionComponent<CounterDisplayProps> = ({
  count,
}) => {
  return <Typography variant="h4">{count}</Typography>;
};

const AddToCart = (props: AddToCartProps) => {
  const [count, setCount] = React.useState<number>(1);
  const router = useRouter();
  const dispatch = useDispatch();

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount((count) => {
      let tempAmount = count - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  const addToCartHandler = () => {
    router.push(`/cart?id=${props.id}?qty=${count}`);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: "170px", marginTop: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CounterBtn label={<RemoveIcon fontSize="large" />} onClick={dec} />
        </Grid>
        <Grid item xs={4}>
          <CounterDisplay count={count} />
        </Grid>
        <Grid item xs={4}>
          <CounterBtn label={<AddIcon fontSize="large" />} onClick={inc} />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ marginTop: 2 }}>
            <MainButton onClick={addToCartHandler}>ADD TO CART</MainButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddToCart;
