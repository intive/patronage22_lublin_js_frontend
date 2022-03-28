import React from "react";

interface ProductDetailProps {
  photos: string;
  title: string;
  description: string;
}

function ProductDetail(props: ProductDetailProps) {
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
