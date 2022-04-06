import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

interface SearchProsp {
  onChange: (e: React.ChangeEvent) => void;
}

function SearchBar(props: SearchProsp) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 200,
        position: "relative",
      }}
    >
      <TextField
        id="standard-search"
        label="Search"
        type="search"
        variant="standard"
        onChange={props.onChange}
      />
    </Box>
  );
}

export default SearchBar;
