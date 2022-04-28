import { GetStaticProps } from "next";
import Hero from "../components/Hero";
import NewsletterSection from "../components/NewsletterSection";
import PopularProducts from "../components/PopularProducts";
import ServiceSection from "../components/ServiceSection";
import { loadProducts } from "../lib/products";
import { Product } from "../types/models";

interface HomePageProps {
  products: Product[];
 
}
function HomePage(props:HomePageProps) {
  
  return (
    <section>
      <Hero/>
      <PopularProducts 
      products={props.products.slice(0,3)}
      />
      <ServiceSection/>
      <NewsletterSection/>
    </section>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const products = await loadProducts();
  
  return {
    props: {
      products:
        products?.map((product: Product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          photos: product?.photos
           || null,
          description: product.description,
          categoryId: product.categoryId,
         
        })) || [],
    },
  };
};







export default HomePage;
