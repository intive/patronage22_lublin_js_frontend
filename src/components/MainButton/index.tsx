import React from "react";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';


const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  fontSize: 14,
  padding: '12px 30px',
  lineHeight: 1.5,
  border: '1px solid',
  borderColor: theme.palette.primary.main,
  textTransform: 'none',
  borderRadius: '0.25 rem',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
    boxShadow: 'none',
    color: theme.palette.text.primary,
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
  },
}))

type Props = {
  children: React.ReactNode;
  onClick?: (e: any) => void;
  href?: string;
  type?:string;
}

export type Ref = HTMLButtonElement;


const MainButton = React.forwardRef<Ref, Props>(({ onClick, href, children }, ref) => {
  return (
    <CustomButton
      variant='contained' href={href} onClick={onClick} ref={ref}
    >
      {children}
    </CustomButton>
  )
});

export default MainButton;