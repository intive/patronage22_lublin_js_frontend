import Link from "next/link";

function HomePage(props: any) {
  return (
    <section>
      <p>
        Check out our new <Link href="products">products</Link>
      </p>
    </section>
  );
}

export default HomePage;
