import { CONSTANTS } from "../../types/constants";
import { Product } from "../../types/models";
import ProductItem from "../ProductItem";

interface ProductListProps {
  products: Product[];
  searchTerm: string;
  price: number;
  category: number;
}

function ProductList(props: ProductListProps) {
  return (
    <ul className='list'>
      {props.products
        .filter((product) => {
          if (props.searchTerm === "") {
            return product.price <= props.price && props.category !== 0
              ? product.categoryId === props.category
              : product.price <= props.price;
          } else if (
            product.title
              .toLocaleLowerCase()
              .includes(props.searchTerm.toLocaleLowerCase())
          ) {
            return product.price <= props.price && props.category !== 0
              ? product.categoryId === props.category
              : product.price <= props.price;
          }
        })
        .map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            photos={
              product.photos?.length
                ? `${CONSTANTS.URL}/${product.photos[0].url}`
                : undefined
            }
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
    </ul>
  );
}

export default ProductList;
