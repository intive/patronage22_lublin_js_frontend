import React, { useState } from 'react';
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell from '@mui/material/TableCell';
import { Button } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InputLabel from '@mui/material/InputLabel';





const CustomIcon = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    transition: "all 0.3s linear",
    opacity: 0,
    cursor: "pointer",
    "&:hover ": {
        background: theme.palette.primary.main,
    },
}));

const SmallImage = styled('img')(({ theme }) => ({
    width: '100px',
    height: '70px',
    borderRadius: '5%'

}));

interface ProductItemProps {
    id: number;
    photos: string;
    title: string;
    description: string;
    price: number;
    onDelete: any,
    item: any
}

function CartItem(props: any, onClick: any) {

    const router = useRouter();

    function showDetailsHandler() {
        router.push("/products/" + props.id);
    }

    return (
        <>
            <TableCell component="th" scope="row" >
                <Button onClick={showDetailsHandler}>
                    <SmallImage
                        src={props.photos}
                        alt={props.title}
                    >
                    </SmallImage>
                </Button>
            </TableCell>
            <TableCell >
                <Typography>
                    {props.title}
                </Typography>
            </TableCell>
            <TableCell align='left' sx={{ display: { xs: 'none', md: 'table-cell' } }}>{props.price}</TableCell>
            <TableCell >
                <FormControl sx={{ minWidth: 40 }}>
                    <Select
                        displayEmpty
                        id="demo-controlled-open-select"
                        value={props.value}
                        label=""
                        onChange={props.onChange}
                        style={{ height: 30 }}
                        defaultValue={1}
                    >
                        <MenuItem value="1">
                        </MenuItem>
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"4"}>4</MenuItem>
                        <MenuItem value={"5"}>5</MenuItem>
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell>
                <Typography align='left' sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                    {props.price}
                </Typography>
            </TableCell>
            <TableCell align="left">
                <IconButton
                    onClick={() => props.id}  >
                    <DeleteOutlineIcon color='primary' />
                </IconButton>
            </TableCell>
        </>
    );
}

export default CartItem;





