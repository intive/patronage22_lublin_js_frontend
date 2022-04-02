import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import ServiceItem from './SeviceItem';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import PsychologyIcon from '@mui/icons-material/Psychology';
import React, { ReactComponentElement, ReactNode } from "react";
import { Node } from "postcss";


const services =
    [
        {
            "id": 1, "title": "Mission", "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "image": <RocketLaunchIcon fontSize="large"/>,
            // "image": '/vision.svg',
        },
        {
            "id": 2, "title": "Vision", "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "image": <PsychologyIcon fontSize="large"/>,
        },
        {
            "id": 3, "title": "History", "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "image":<ManageHistoryIcon fontSize="large"/>,
        }

    ]


const CustomText = styled(Typography)(({ theme }) => ({
    color: theme.palette.info.light
}));


function ServiceSection(props: any) {

    return (
        <Box sx={{ marginTop: 15, flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant='h4'>
                            Unique items
                        </Typography>
                        <Typography variant='h4'>
                            made only For You
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <CustomText variant='inherit'>
                            <Box sx={{ marginTop: 3, fontWeight: '300', fontSize: 20 }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Iusto, at sed omnis corporis doloremque possimus velit!
                            </Box>
                        </CustomText>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ width: '100%', marginTop: 7 }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {services && services.map((service: { id: any; description: any; title: any, image:ReactNode }) =>
                        <Grid item xs={12} sm={6} md={4} key={service.id}  >
                            <ServiceItem
                                id={service.id}
                                image={service.image}
                                title={service.title}
                                description={service.description}
                            />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Box>
    );
}

export default ServiceSection;