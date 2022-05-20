import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SortProsp {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

function Sort(props: SortProsp) {
  return (
    <FormControl sx={{ minWidth: 180 }}>
      <Select
        displayEmpty
        id="demo-controlled-open-select"
        // value={props.value}
        value={"low-price"}
        label="Sort"
        onChange={props.onChange}
        style={{ height: 30 }}
      >
        <MenuItem value={"low-price"}>Price (Lowest)</MenuItem>
        <MenuItem value={"high-price"}>Price (Highest)</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Sort;
