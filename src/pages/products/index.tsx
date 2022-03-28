import ProductList from "../../components/ProductList";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import { loadProducts } from "../../lib/products";

function ProductsPage({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section>
      <h3>
        Home <span className="location"> {">"} Products</span>
      </h3>
      <ProductList products={products} />
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await loadProducts();

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
};

export default ProductsPage;
