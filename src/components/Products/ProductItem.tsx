import { useRouter } from "next/router";
import classes from "./ProductItem.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProductItem(props: any) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/products/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card sx={{ maxWidth: 445 }}>
        <CardMedia
          component="img"
          alt={props.title}
          image="https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy now</Button>
          <Button size="small" onClick={showDetailsHandler}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </li>
  );
}

export default ProductItem;
