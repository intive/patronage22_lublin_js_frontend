import Hero from "../components/Hero";
import NewsletterSection from "../components/NewsletterSection";
import PopularProducts from "../components/PopularProducts";
import ServiceSection from "../components/ServiceSection";


function HomePage(props: any) {
  return (
    <section>
      <Hero/>
      <PopularProducts/>
      <ServiceSection/>
      <NewsletterSection/>
    </section>
  );
}

export default HomePage;
