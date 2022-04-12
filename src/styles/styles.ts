import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  color: theme.palette.text.secondary,
}));

export const CustomIcon = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  background: theme.palette.primary.main,
  transform: "translate(-50%, -50%)",
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

export const CustomContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#222",
  borderRadius: "0.25rem",
  "&:hover img": {
    opacity: 0.5,
    cursor: "pointer",
  },
  "&:hover button": {
    opacity: 1,
  },
}));
