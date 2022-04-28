import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';

const Container = styled(Box)(({ theme }) => ({
    marginTop: 10,
    padding: '1.5rem',
    display: 'flex',
    backgroundColor: theme.palette.text.primary,
    color: 'white',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height:'5rem',

}))

function Footer() {
    return (
        <Container>
            <Typography component='div'>
                &copy; {new Date().getFullYear()}
                <span> Copany name All rights reserved</span>
            </Typography>
        </Container>
    );
}

export default Footer;