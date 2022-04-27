import ProductItem from "../ProductItem";

interface ProductListProps {
  products: any[];
  searchTerm: string;
  price: number;
  categoryId: number;
}

function ProductList(props: ProductListProps) {
  return (
    <ul className="list">
      {props.products
        .filter((product) => {
          const { title, price, categoryId } = product;
          if (props.searchTerm === "") {
            return price <= props.price && props.categoryId !== 0
              ? categoryId === props.categoryId
              : price <= props.price;
          } else if (
            title
              .toLocaleLowerCase()
              .includes(props.searchTerm.toLocaleLowerCase())
          ) {
            return price <= props.price && props.categoryId !== 0
              ? categoryId === props.categoryId
              : price <= props.price;
          }
        })
        .map((product) => {
          const { id, photos, title, description, price } = product;

          return (
            <ProductItem
              key={id}
              id={id}
              photos={photos}
              title={title}
              description={description}
              price={price}
            />
          );
        })}
    </ul>
  );
}

export default ProductList;
