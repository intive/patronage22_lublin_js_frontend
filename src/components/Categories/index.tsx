import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function Categories(props: any) {
  return (
    <List style={{ marginTop: "-1rem", marginLeft: "-1rem" }}>
      {props.categories.map((category: any) => (
        <ListItem className="category-item">
          <Typography
            sx={{ fontSize: 14, color: "#0056ad", cursor: "pointer" }}
            gutterBottom
            component="div"
          >
            {category}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

export default Categories;
