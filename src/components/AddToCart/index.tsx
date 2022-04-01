import { Box, Button, Grid, Typography } from '@mui/material';
import React, { ReactNode} from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import MainButton from "../MainButton";
import Link from "next/link";

interface CounterBtn {
    label: ReactNode;
    onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const CounterBtn: React.FunctionComponent<CounterBtn> = ({ label, onClick }) => {
    return (
        <div onClick={onClick}>
            <div className="child">{label}</div>
        </div>
    )
}


interface CounterDisplayProps {
    count: number;
};

const CounterDisplay: React.FunctionComponent<CounterDisplayProps> = ({ count }) => {
    return (
        <Typography variant='h4' >{count}</Typography>
    );
}


const AddToCart: React.FunctionComponent = () => {
    const [count, setCount] = React.useState<number>(1);

    const inc = () => {
        setCount(count +1)
       
    };
    
    const dec = () => {
        setCount((count) => {
            let tempAmount = count - 1
            if (tempAmount < 1) {
              tempAmount = 1
            }
            return tempAmount
          })
    }

    return (
        <Box sx={{ flexGrow: 1, maxWidth: '170px', marginTop:5 }}>
            <Grid container spacing={2}  >
                <Grid item xs={4}>
                    <CounterBtn label={<RemoveIcon fontSize="large" />} onClick={dec} />
                </Grid>
                <Grid item xs={4}>
                    <CounterDisplay count={count} />
                </Grid>
                <Grid item xs={4}>
                    <CounterBtn label={<AddIcon fontSize="large" />} onClick={inc} />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ marginTop: 2 }}>
                        <Link href="/cart" passHref>
                            <MainButton>
                                ADD TO CART
                            </MainButton>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AddToCart;