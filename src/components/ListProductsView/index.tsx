import Stack from "@mui/material/Stack";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import MainButton from "../MainButton";
import { Item, CustomIcon, CustomContainer } from "../../styles/styles";
import { getImageUrl } from "../../lib/utils";

interface ProductListProps {
  products: any[];
  searchTerm: string;
  price: number;
  categoryId: number;
}

function ListProductsView(props: ProductListProps) {
  const router = useRouter();

  return (
    <Box sx={{ width: "100%", marginLeft: "1rem" }}>
      <Stack spacing={2}>
        {props.products
          .filter((product) => {
            if (props.searchTerm === "") {
              return product.price <= props.price && props.categoryId !== 0
                ? product.categoryId === props.categoryId
                : product.price <= props.price;
            } else if (
              product.title
                .toLocaleLowerCase()
                .includes(props.searchTerm.toLocaleLowerCase())
            ) {
              return product.price <= props.price && props.categoryId !== 0
                ? product.categoryId === props.categoryId
                : product.price <= props.price;
            }
          })
          .map((product) => (
            <Item key={product.id}>
              <CustomContainer>
                <CardMedia
                  component="img"
                  alt={product.title}
                  image={getImageUrl(product.photos)}
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
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={3}
                style={{ marginLeft: "1.5rem" }}
              >
                <Typography sx={{ fontSize: 16 }} gutterBottom component="h3">
                  {product.title}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  gutterBottom
                  style={{ marginTop: "-0.5rem" }}
                  component="div"
                >
                  ${product.price}
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom component="h3">
                  {product.description}
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom component="div">
                  <MainButton
                    onClick={() => {
                      router.push("/products/" + product.id);
                    }}
                  >
                    Details
                  </MainButton>
                </Typography>
              </Stack>
            </Item>
          ))}
      </Stack>
    </Box>
  );
}

export default ListProductsView;
