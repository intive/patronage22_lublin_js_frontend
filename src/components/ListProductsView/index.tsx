import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

interface ProductListProps {
  products: any;
}

function ListProductsView(props: ProductListProps) {
  const router = useRouter();
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.text.secondary,
  }));

  const CustomIcon = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    background: theme.palette.primary.main,
    transform: "translate(-50%, -50%)",
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
  return (
    <Box sx={{ width: "100%", marginLeft: "1rem" }}>
      <Stack spacing={2}>
        {props.products.map((product: any) => (
          <Item>
            <CustomContainer>
              <CardMedia
                component="img"
                alt={product.title}
                image={product.photos}
                sx={{
                  transition: "all 0.3s linear",
                  width: "250px",
                  height: "150px",
                }}
              />
              <CustomIcon
                onClick={() => {
                  router.push("/products/" + product.id);
                }}
              >
                <ZoomInOutlinedIcon
                  sx={{
                    color: "white",
                    fontSize: "40px",
                  }}
                />
              </CustomIcon>
            </CustomContainer>
            <Typography sx={{ fontSize: 14 }} gutterBottom component="div">
              {product.description}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom component="div">
              {product.category}
            </Typography>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={3}
            >
              <Typography sx={{ fontSize: 14 }} gutterBottom component="div">
                {product.title}
              </Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom component="div">
                {product.price}.00$
              </Typography>
            </Stack>
          </Item>
        ))}
      </Stack>
    </Box>
  );
}

export default ListProductsView;
