import ProductItem from "../ProductItem";

interface ProductListProps {
  products: any;
}

function ProductList(props: ProductListProps) {
  return (
    <ul className="list">
      {props.products.map((product: any) => (
        <ProductItem
          key={product.id}
          id={product.id}
          photos={product.photos}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </ul>
  );
}

export default ProductList;
