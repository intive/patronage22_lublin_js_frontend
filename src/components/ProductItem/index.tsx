import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CONSTANTS } from "../../types/constants";

const CustomIcon = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  transition: "all 0.3s linear",
  opacity: 0,
  cursor: "pointer",
  "&:hover ": {
    background: theme.palette.primary.main,
  },
}));

const CustomContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#222",
  borderRadius: "0.25rem",
  "&:hover img": {
    opacity: 0.5,
    cursor: "pointer",
  },
  "&:hover button": {
    opacity: 1,
  },
}));

interface ProductItemProps {
  id: number;
  photos?: string;
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
    <div className='item'>
      <Card>
        <CustomContainer>
          <CardMedia
            component='img'
            alt={props.title}
            image={props.photos}
            sx={{ transition: "all 0.3s linear" }}
          />
          <CustomIcon onClick={showDetailsHandler}>
            <ZoomInOutlinedIcon
              sx={{
                color: "white",
                fontSize: "40px",
              }}
            />
          </CustomIcon>
        </CustomContainer>
        <CardContent>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='flex-start'
            spacing={2}
          >
            <Typography sx={{ fontSize: 14 }} gutterBottom component='div'>
              {props.title}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom component='div'>
              {props.price}.00$
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductItem;
