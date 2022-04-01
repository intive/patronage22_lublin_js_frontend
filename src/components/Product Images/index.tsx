import React, { useState } from 'react'
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';


const main =
    [
        {
            'id': '1',
            'url':
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'
        },
        {
            'id': '2',
            'url':
                'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80'
        },
        {
            'id': '3',
            'url':
                'https://images.unsplash.com/photo-1589244159943-460088ed5c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80'
        },
        {
            'id': '4',
            'url':
                'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },
        {
            'id': '5',
            'url': 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        }
    ]

const images =
    [
        {
            'id': '1',
            'label': 'Mockup cosmetics',
            'url': 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },
        {
            'id': '2',
            'label': 'Teftiba Furniture',
            'url':
                'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },
        {
            'id': '3',
            'label': 'Alisa Anton Flowers',
            'url':
                'https://images.unsplash.com/photo-1589244159943-460088ed5c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80'
        },
        {
            'id': '4',
            'label': 'Lucas Favre',
            'url':
                'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80'
        },
        {
            'id': '5',
            'label': 'Clark Street Mercantile',
            'url':
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'
        },
    ]


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
    width:'100%',
    borderRadius:'7%',
    height:'75px',
}));


const ProductImages: React.FC = (props: any) => {

    const [mainImage, setMainImage] = useState(images[0])
    return (
        <>
            <MainImage src={mainImage.url} alt='' className='mainImage ' />
            <Gallery className='gallery'>
                {images && images.map((image:
                    { id: any, label: any, url: any; }, index) => {
                    return (
                        <ImageTab
                            src={image.url}
                            alt=''
                            key={index}
                            className={`${image.url === mainImage.url ? 'active' : null}`}
                            onClick={() => console.log(setMainImage(images[index]))}
                        />
                    )
                })}
            </Gallery>
        </>
    );
}

export default ProductImages;