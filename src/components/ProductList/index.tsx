import ProductItem from "../ProductItem";

interface ProductListProps {
  products: any[];
  searchTerm: string;
  price: number;
  category: string;

function ProductList(props: ProductListProps) {
  return (
    <ul className="list">
      {props.products
        .filter((product) => {
          if (props.searchTerm === "") {
            return product.price <= props.price && props.category !== ""
              ? product.category === props.category
              : product.price <= props.price;
          } else if (
            product.title
              .toLocaleLowerCase()
              .includes(props.searchTerm.toLocaleLowerCase())
          ) {
            return product.price <= props.price && props.category !== ""
              ? product.category === props.category
              : product.price <= props.price;
          }
        })
        .map((product) => (
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
