import React from "react";
import classes from "./index.module.css";

function ProductDetail(props: any) {
  return (
    <section className={classes.detail}>
      <img src={props.photos} alt={props.title} />
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </section>
  );
}

export default ProductDetail;
