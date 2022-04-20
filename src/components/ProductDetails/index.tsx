import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import MainButton from "../MainButton";
import Link from "next/link";
import ProductImages from "../Product Images";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Stack } from "@mui/material";
import AddToCart from "../AddToCart";
import { Photo } from "../../types/models";

const CustomText = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.light,
}));

interface ProductDetailProps {
  price: number;
  photos: Array<Photo>;
  title: string;
  description: string;
}

function ProductDetail(props: ProductDetailProps) {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <section>
      <Box sx={{ marginTop: 7 }}>
        <Link href='/products' passHref>
          <MainButton>BACK TO PRODUCTS</MainButton>
        </Link>
      </Box>
      <Box sx={{ marginTop: 5, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12}>
            <Box>
              <ProductImages />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Box
              sx={{
                paddingLeft: { md: "30px", xs: "10px" },
                marginLeft: { xs: "20%", sm: "30%", md: 0 },
              }}
            >
              <Box sx={{ marginTop: { xs: 5, sm: 5, md: 0 } }}>
                <Typography variant='h4'>
                  <Box>{props.title}</Box>
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 200,
                  display: "inline-flex",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                <Rating
                  name='text-feedback'
                  value={3.5}
                  readOnly
                  precision={0.5}
                  icon={
                    <StarIcon style={{ color: "#0057D8" }} fontSize='inherit' />
                  }
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
                  }
                />
                <Box>23 reviews</Box>
              </Box>
              <Typography
                sx={{ fontSize: 25, marginTop: 3, color: "#003E7D" }}
                component='div'
              >
                ${props.price}.00
              </Typography>
              <CustomText variant='inherit'>
                <Box
                  sx={{
                    marginTop: 3,
                    fontWeight: "300",
                    fontSize: 20,
                    textAlign: "justify",
                  }}
                >
                  {props.description}
                </Box>
              </CustomText>
              <Box sx={{ marginTop: 3 }}>
                <Stack direction='row' alignItems='flex-start' spacing={2}>
                  <Typography
                    sx={{ fontSize: 18 }}
                    gutterBottom
                    component='div'
                  >
                    Brand:
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18 }}
                    gutterBottom
                    component='div'
                  >
                    Preston Publishing
                  </Typography>
                </Stack>
                <Stack direction='row' alignItems='flex-start' spacing={2}>
                  <Typography
                    sx={{ fontSize: 18 }}
                    gutterBottom
                    component='div'
                  >
                    Available:
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18 }}
                    gutterBottom
                    component='div'
                  >
                    In Stock
                  </Typography>
                </Stack>
              </Box>
              <AddToCart />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default ProductDetail;
