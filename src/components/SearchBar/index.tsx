import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function SearchBar(props: any) {
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
