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
          content={`Explore my collection of articles on web development and growing as a developer. I cover a range of topics to help you improve your skills and achieve your career goals.`}
        />
        <meta property="og:title" content={`Articles - Twenty Six Hugs`} />
        <meta
          property="og:description"
          content={`Explore my collection of articles on web development and growing as a developer. I cover a range of topics to help you improve your skills and achieve your career goals.`}
        />
        <meta
          property="og:url"
          content={`https://twentysixhugs.dev/articles`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <ArticleListView categories={categories} articles={articles} />
    </>
  );
};

export default Articles;
