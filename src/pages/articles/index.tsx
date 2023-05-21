import Head from "next/head";

import { ArticleListItem, Category, sortArticles } from "@shared";
import { ArticleListView } from "@views/article/list";
import { getAllArticles, getAllCategories } from "@utils";

export async function getStaticProps() {
  const articles = await getAllArticles();
  const categories = await getAllCategories();

  return {
    props: {
      articles: sortArticles(articles),
      categories,
    },
  };
}

const Articles = ({
  articles,
  categories,
}: {
  articles: ArticleListItem[];
  categories: Category[];
}) => {
  return (
    <>
      <Head>
        <title>Articles | Twenty Six Hugs</title>
        <meta
          name="description"
          content={`Explore my collection of articles on web development and life improvement where I share my personal experience. I cover a range of topics to help you improve your skills and achieve your goals.`}
        />
        <meta property="og:title" content={`Articles - Twenty Six Hugs`} />
        <meta
          property="og:description"
          content={`Explore my collection of articles on web development and life improvement where I share my personal experience. I cover a range of topics to help you improve your skills and achieve your goals.`}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/articles`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <ArticleListView categories={categories} articles={articles} />
    </>
  );
};

export default Articles;
