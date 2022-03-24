import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ProductItemProps {
  id: number;
  photos: string;
  title: string;
  description: string;
  price: number;
}

function ProductItem(props: ProductItemProps) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/products/" + props.id);
  }

  return (
    <li className="item">
      <Card sx={{ maxWidth: 445 }}>
        <CardMedia component="img" alt={props.title} image={props.photos} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Typography variant="h6" color="div" className="price">
            {props.price}.00$
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
