import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";
import ServiceSection from "../components/ServiceSection";


function HomePage(props: any) {
  return (
    <section>
      <Hero/>
      <PopularProducts/>
      <ServiceSection/>
    </section>
  );
}

export default HomePage;
