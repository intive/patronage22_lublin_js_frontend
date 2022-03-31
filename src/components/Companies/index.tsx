import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Companies(props: any) {
  return (
    <FormControl sx={{ minWidth: 180 }}>
      <Select
        displayEmpty
        id="demo-controlled-open-select"
        value={props.value}
        label="Age"
        onChange={props.onChange}
        style={{ height: 30 }}
      >
        <MenuItem disabled value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"apple"}>Apple</MenuItem>
        <MenuItem value={"android"}>Android</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Companies;
