import ProductDetail from "../../components/ProductDetails";

function ProductDetails(props: any) {
  return (
    <>
      <h1>
        Home {">"} Products{" "}
        <span className="location">
          {" "}
          {">"} {props.productData.title}
        </span>
      </h1>
      <ProductDetail
        title={props.productData.title}
        description={props.productData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "http://proxy-patronageapi.bsolutions.usermd.net/api/products/getAllProductsExternal"
  );
  const products = await res.json();

  return {
    fallback: "blocking",
    paths: products.map((product: any) => ({
      params: { productId: product.id.toString() },
    })),
  };
}

export async function getStaticProps(context: any) {
  const productId = context.params.productId;

  const res = await fetch(
   ` http://proxy-patronageapi.bsolutions.usermd.net/api/products/external/${productId}`
  );
  const selectedProduct = await res.json();

  return {
    props: {
      productData: {
        id: selectedProduct.id.toString(),
        title: selectedProduct.title,
        description: selectedProduct.description,
      },
    },
  };
}

export default ProductDetails;
