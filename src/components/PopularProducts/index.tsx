import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import MainButton from "../MainButton";
import Link from "next/link";
import ProductItem from "../ProductItem";
import {ProductItemProps} from '../ProductItem';


const Underline = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: '150px',
    height: '5px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10%',
    marginTop: '5px'
}));

interface PopularPoductsProps {
    products: any[];
  }


function PopularProducts(props: PopularPoductsProps) {
     const { products} = props;
    return (
        <Box sx={{ marginTop: 10, flexGrow: 1 }}>
            <Typography variant='h4' textAlign={'center'} component='div'>
                <Box>Popular Products</Box>
                <Underline />
            </Typography>

            <Box sx={{  marginTop: 7, flexGrow: 1 }}>
                <Grid container 
                justifyContent={'center'}
              spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm:6,  md: 12 }}
                >
                    {products && products.map((product) =>{
                         const { id, photos, title, description, price } = product;
                       return(
                         <Grid item 
                        key={id} 
                        justifyContent={'center'}>
                        <ProductItem 
                          id={id}
                            photos={photos}
                            title={title}
                            description={description}
                            price={price}
                        />
                        </Grid>
                    )})}
                </Grid>
            </Box>
            <Box sx={{ marginTop: 3, textAlign: 'center' }}>
                <Link href="/products" passHref>
                    <MainButton>
                        ALL PRODUCTS
                    </MainButton>
                </Link>
            </Box>
        </Box>
    );
}
export default PopularProducts;