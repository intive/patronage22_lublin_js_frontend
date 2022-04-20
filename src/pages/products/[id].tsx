import ProductDetail from "../../components/ProductDetails";
import { GetStaticProps, GetStaticPaths } from "next";
import { InferGetStaticPropsType } from "next";
import { loadProductDetails, loadProducts } from "../../lib/products";
import { Product } from "../../types/models";

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

export function mapEntriesSlugToPaths(entries: any[]) {
  if (!entries.length) return [];
  return entries.map((item) => ({ params: { id: item.id.toString() } }));
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = (await loadProducts()) as Product[];
  const paths = mapEntriesSlugToPaths(products);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const productId = context.params.id;

  const selectedProduct = (await loadProductDetails(productId)) as Product;

  const { id, title, description, price, photos } = selectedProduct;

  return {
    props: {
      productData: {
        id: id,
        title: title,
        description: description,
        photos: photos,
        price: price,
      },
    },
  };
};

export default ProductDetails;
