import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import NewsletterForm from "../NewsletterForm";



const CustomText = styled(Typography)(({ theme }) => ({
    color: theme.palette.info.light
}));

function NewsletterSection(props: any) {
    return (
        <Box sx={{ marginTop: 20, flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Box>
                            <Typography
                                variant='h4'
                            >
                                Join our newsletter and get 10% off
                            </Typography>
                        </Box>
                        <CustomText variant='inherit'>
                            <Box sx={{ marginTop: 3, fontWeight: '300', fontSize: 20 }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Iusto, at sed omnis corporis doloremque possimus velit!
                            </Box>
                        </CustomText>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ marginTop: 5, textAlign:'end' }}>
                        <NewsletterForm />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default NewsletterSection;