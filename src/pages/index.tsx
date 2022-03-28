import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";


function HomePage(props: any) {
  return (
    <section>
      <Hero/>
      <PopularProducts/>
    </section>
  );
}

export default HomePage;
