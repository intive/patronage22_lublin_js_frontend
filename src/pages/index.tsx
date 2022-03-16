import Link from "next/link";

function HomePage(props: any) {
  return (
    <section>
      <h1>Home</h1>
      <p>
        Check out our new <Link href="products">products</Link>
      </p>
    </section>
  );
}

export default HomePage;
