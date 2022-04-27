import { GetStaticProps, GetStaticPaths } from "next";
import { InferGetStaticPropsType } from "next";
import StaticPage from "../components/StaticPage";
import { getPages, getPageBySlug } from "../lib/pages";

function SlugPage({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section>
      <h2>
        Home{" "}
        <span className='location'>
          {" "}
          {">"} {pageData.title}
        </span>
      </h2>
      <StaticPage title={pageData.title} description={pageData.description} />
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getPages();
  return {
    paths:
      pages?.map((page: any) => ({
        params: { slug: page.slug },
      })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const slug = context.params.slug;

  const page = await getPageBySlug(slug);

  return {
    props: {
      pageData: {
        id: page?.id,
        title: page?.title || "404 Page",
        description: page?.description || "No such a page",
        slug: page?.slug || "",
      },
    },
  };
};

export default SlugPage;
