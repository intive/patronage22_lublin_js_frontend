import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import CartItem from "../CartItem";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link';
import MainButton from '../MainButton';
import CartTotals from '../CartTotals';
import { Grid } from '@mui/material';




function CartContent(props: any) {
    const [products, setProducts] = useState([
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

    ])

    const handleRemove = (id: any) => {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
    };


    return (
        <Box>
            <Box sx={{ marginTop: 10, flexGrow: 1 }}>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell sx={{ paddingLeft:7 }}>Item</TableCell>
                                <TableCell  >Title </TableCell>
                                <TableCell align='left' sx={{ display: { xs: 'none', md: 'table-cell' } }}>Price</TableCell>
                                <TableCell >Quantity</TableCell>
                                <TableCell align='left' sx={{ display: { xs: 'none', md: 'table-cell' } }}>Subtotal</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products && products.map((product: { id: any; photos: any; description: any; title: any; price: any; }, index: number) =>
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <CartItem
                                        id={product.id}
                                        photos={product.photos}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                        onClick={() => handleRemove(product.id)}
                                    />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Grid container sx={{ marginTop: 1 }}>
                <Grid item xs={6} sx={{textAlign:'start'}}>
                    <Link href="/products" passHref>
                        <MainButton>
                            CONTINUE SHOPIING
                        </MainButton>
                    </Link>
                </Grid>
                <Grid item xs={6} sx={{textAlign:'end'}}>
                    <Link href="/cart" passHref>
                        <MainButton>
                           CLEAR CART
                        </MainButton>
                    </Link>
                </Grid>
            </Grid>
            <Grid container sx={{ marginTop: 5 }}>
                <Grid item xs={6} md={9} />
                <Grid item xs={6} md={3}>
                    <CartTotals />
                </Grid>
            </Grid>
        </Box >
    );
}

export default CartContent;
