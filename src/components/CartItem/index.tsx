import React from 'react';
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import { FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell from '@mui/material/TableCell';
import { Button } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



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
    value: string;
    onChange: (event: SelectChangeEvent<number>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CartItem(props: ProductItemProps) {
    const { id, photos, title, price, value, onChange, onClick } = props;
    const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    const router = useRouter();

    function showDetailsHandler() {
        router.push("/products/" + id);
    }

    return (
        <>
            <TableCell component="th" scope="row" >
                <Button onClick={showDetailsHandler}>
                    <SmallImage
                        src={photos}
                        alt={title}
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
                        label=""
                        onChange={onChange}
                        style={{ height: 30 }}
                        defaultValue={1}
                    >
                        <MenuItem value="1">
                        </MenuItem>
                        {quantities.map((quantity) => {
                            return <MenuItem value={quantity}>{quantity}</MenuItem>;
                        })}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell>
                <Typography align='left' sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                    {price}
                </Typography>
            </TableCell>
            <TableCell align="left">
                <IconButton
                    onClick={onClick}  >
                    <DeleteOutlineIcon color='primary' />
                </IconButton>
            </TableCell>
        </>
    );
}

export default CartItem;





