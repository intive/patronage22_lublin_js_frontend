import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import MainButton from "../MainButton";
import Link from "next/link";
import ProductItem from "../ProductItem";
import {ProductItemProps} from '../ProductItem';




const products =
    [
        {
            "id": 1, "title": "Pierwszy produkt", "price": 15000, "description": "Opis proiduktu",
            "photos": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
        }
        ,

        {
            "id": 2, "title": "Drugi produkt", "price": 15555, "description": "First Prod",
            "photos": "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80"
        }
        ,

        {
            "id": 3, "title": "Trzeci produkt", "price": 15551412, "description": "Sec Prod",
            "photos": "https://images.unsplash.com/photo-1589244159943-460088ed5c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80"
        }

    ]

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

function PopularProducts(props: ProductItemProps) {
    const { id, photos, title, description, price,url} = props;
    return (
        <Box sx={{ marginTop: 10, flexGrow: 1 }}>
            <Typography variant='h4' textAlign={'center'}>
                <Box>Popular Products</Box>
                <Underline />
            </Typography>

            <Box sx={{  marginTop: 7, flexGrow: 1 }}>
                <Grid container 
                justifyContent={'center'}
              spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm:6,  md: 12 }}
                >
                    {products && products.map((product: { id: any; photos: any; description: any; title: any; price: any; }) =>
                        <Grid item 
                        key={product.id} 
                        justifyContent={'center'}>
                        <ProductItem 
                          id={product.id}
                            photos={product.photos}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        />
                        </Grid>
                    )}
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