import ProductDetail from "../../components/ProductDetail";
import { GetStaticProps, GetStaticPaths } from "next";
import { InferGetStaticPropsType } from "next";
import { loadProductDetails, loadProducts } from "../../lib/products";
// import { mapEntriesSlugToPaths } from "../../lib/utils";

function ProductDetailPage({
  productDetails,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <section>
      <h2>
        Home {">"} Products{" "}
        <span className="location">
          {" "}
          {">"} {productDetails.title}
        </span>
      </h2>
      <ProductDetail
        id={productDetails.id}
        title={productDetails.title}
        description={productDetails.description}
        photos={productDetails.photos}
        price={productDetails.price}
      />
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await loadProducts();
  // const paths = mapEntriesSlugToPaths(products);
  return {
    paths:
      products?.map((product: any) => ({
        params: { id: `${product.id}` },
      })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params;
  const product = await loadProductDetails(id);
  return {
    props: {
      productDetails: {
        id: product?.id || null,
        title: product?.title || null,
        description: product?.description || null,
        photos: product?.photos || null,
        price: product?.price || null,
      },
    },
  };
};

export default ProductDetailPage;
