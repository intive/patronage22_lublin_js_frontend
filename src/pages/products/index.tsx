import ProductList from "../../components/Products/ProductList";

function ProductsPage(props: any) {
  return (
    <>
      <h1>Latest Products</h1>
      <ProductList products={props.products} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://proxy-patronageapi.bsolutions.usermd.net/api/products/getAllProductsExternal"
  );
  const products = await res.json();

  return {
    props: {
      products: products.map((product: any) => ({
        title: product.title,
        description: product.description,
        id: product.id,
        photos: product.photos[0].url,
        price: product.price,
      })),
    },
  };
}

export default ProductsPage;
