import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HeroCarousel from "../HeroCarousel";
import { styled } from '@mui/material/styles';
import MainButton from "../MainButton";
import Link from "next/link";



const CustomText = styled(Typography)(({ theme }) => ({
    color: theme.palette.info.light
}));

function ProductItem(props: any) {
    return (
        <Box sx={{ marginTop:10,flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ marginTop:10 }}>
                        <Box>
                            <Typography
                                variant='h4'
                            >
                                Brands You know and love
                            </Typography>
                            <Typography variant='h4'>
                                Shopping has never been easier
                            </Typography>
                        </Box>
                        <CustomText variant='inherit'>
                            <Box sx={{ marginTop: 3, fontWeight: '300', fontSize: 20 }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Iusto, at sed omnis corporis doloremque possimus velit!
                                Repudiandae nisi odit, aperiam odio ducimus,obcaecati
                                libero et quia tempora excepturi quis alias?
                            </Box>
                        </CustomText>
                        <Box sx={{ marginTop: 3 }}>
                        <Link href="/products" passHref>
                            <MainButton>
                                SHOP NOW
                            </MainButton>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <HeroCarousel />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductItem;