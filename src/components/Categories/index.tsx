import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

interface CategoryProsp {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

function Categories(props: CategoryProsp) {
  const categories = [
    "Books",
    "Clothing",
    "Furnitures",
    "Accessorries",
    "Jewelery",
  ];

  return (
    <FormControl sx={{ minWidth: 180 }}>
      <Select
        displayEmpty
        id="demo-controlled-open-select"
        value={props.value}
        label="Category"
        onChange={props.onChange}
        className="select"
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {categories.map((category) => {
          return <MenuItem value={category}>{category}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}

export default Categories;
