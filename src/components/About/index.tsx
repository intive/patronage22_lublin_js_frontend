import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';



const CustomText = styled(Typography)(({ theme }) => ({
    color: theme.palette.info.light
}));

const Underline = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: '100px',
    height: '5px',
    marginRight: 'auto',
    borderRadius: '10%',
    marginTop: '5px'
}));

const StyledImage = styled('img')(() => ({
    width: '100%',
    display: 'block',
    borderRadius: '3%',
    height: '500px',
    objectFit: 'cover'
}));

function About(props: any) {
    return (
        <Box sx={{ marginTop: 10, flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ width: '100%', bordeRadius: '7%' }}>
                        <StyledImage className='about-image' src='https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt=''
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} marginTop={5}>
                    <Box sx={{ paddingLeft: { md: '30px', xs: '10px' } }}>
                        <Box>
                            <Typography variant='h4' component='div'>
                                <Box>Our Story</Box>
                                <Underline />
                            </Typography>
                        </Box>
                        <CustomText variant='inherit'>
                            <Box sx={{ marginTop: 3, fontWeight: '300', fontSize: 20, textAlign: 'justify' }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                            </Box>
                        </CustomText>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default About;