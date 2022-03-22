import React from "react";

function ProductDetail(props: any) {
  return (
    <section>
      <img src={props.photos} alt={props.title} />
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </section>
  );
}

export default ProductDetail;
