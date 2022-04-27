import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface CompanyProsp {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

function Companies(props: CompanyProsp) {
  const companies = ["All", "Apple", "Android"];
  return (
    <FormControl sx={{ minWidth: 180 }}>
      <Select
        displayEmpty
        id="demo-controlled-open-select"
        value={props.value}
        label="Company"
        onChange={props.onChange}
        className="select"
      >
        <MenuItem disabled value="">
          <em>None</em>
        </MenuItem>
        {companies.map((company) => {
          return (
            <MenuItem key={company} value={company}>
              {company}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default Companies;
