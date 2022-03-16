import classes from "./ProductDetail.module.css";

function ProductDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </section>
  );
}

export default ProductDetail;
