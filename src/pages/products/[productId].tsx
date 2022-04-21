import ProductDetail from "../../components/ProductDetails";
import { GetStaticProps, GetStaticPaths } from "next";
import { InferGetStaticPropsType } from "next";
import { loadProductDetails, loadProducts } from "../../lib/products";

function ProductDetails({
  productData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section>
      <h2>
        Home {">"} Products{" "}
        <span className='location'>
          {" "}
          {">"} {productData.title}
        </span>
      </h2>
      <ProductDetail
        title={productData.title}
        description={productData.description}
        photos={productData.photos}
        price={productData.price}
      />
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await loadProducts();

  return {
    fallback: "blocking",
    paths: products.map((product: any) => ({
      params: { productId: product.id.toString() },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const productId = context.params.productId;

  const selectedProduct = await loadProductDetails(productId);

  return {
    props: {
      productData: {
        id: selectedProduct.id.toString(),
        title: selectedProduct.title,
        description: selectedProduct.description,
        photos: selectedProduct.photos[0].url,
        price: selectedProduct.price,
      },
    },
  };
};

export default ProductDetails;
