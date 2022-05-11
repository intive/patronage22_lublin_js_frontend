import React, { useState } from 'react'
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import { CONSTANTS } from '../../types/constants';

const CustomText = styled(Typography)(({ theme }) => ({
    color: theme.palette.info.light
}));

const MainImage = styled('img')(({ theme }) => ({
    height: '450px',
    borderRadius: '5%',
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
        height: '350px'
    },
}));



const Gallery = styled('div')(({ theme }) => ({
    marginTop: '1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    columnGap: '1rem',
    '& img': {
        height: '75px',
        cursor: 'pointer'
    },
    [theme.breakpoints.down('sm')]: {
        '& img': {
            height: '50px',
        }
    },
    [theme.breakpoints.up('md')]: {
        '& img': {
            height: '75px',
        }
    }
}));
const ImageTab = styled('img')(({ theme }) => ({
    width: '100%',
    borderRadius: '7%',
    height: '75px',
}));

interface ProductImagesProps {
    images: any;
}


const ProductImages = (props: ProductImagesProps) => {


    const [mainImage, setMainImage] = useState(props.images[0])
    return (
        <>
            <MainImage src={`${CONSTANTS.URL}/${mainImage?.url}`} alt='' className='mainImage ' />
            {/* <MainImage src={props.photos} alt='' className='mainImage ' /> */}
            <Gallery className='gallery'>
                {props.images && props.images.map((image:
                    { id: any, label: any, url: any; }, index: any) => {
                    return (
                        <ImageTab
                            src={`${CONSTANTS.URL}/${image?.url}`}
                            alt=''
                            key={index}
                            className={`${CONSTANTS.URL}/${image?.url} === ${CONSTANTS.URL}/${mainImage?.url} ? 'active' : null`}
                            onClick={() => setMainImage(props.images[index])}
                        />
                    )
                })}
            </Gallery>
        </>
    );
}

export default ProductImages;