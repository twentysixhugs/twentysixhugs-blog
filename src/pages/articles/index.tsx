import { ArticleListItem } from "@shared";
import { ArticleListView } from "@views/article/list";
import Head from "next/head";
import { getAllArticles } from "@utils";

export async function getStaticProps() {
  const articles = await getAllArticles();

  articles.sort((a, b) => {
    if (a.publishedAt > b.publishedAt) return 1;
    if (a.publishedAt < b.publishedAt) return -1;

    return 0;
  });

  return {
    props: {
      articles: [...articles].reverse(),
    },
  };
}

const Articles = ({ articles }: { articles: ArticleListItem[] }) => {
  return (
    <>
      <Head>
        <title>Twenty Six Hugs | Articles</title>
      </Head>

      <ArticleListView articles={articles} />
    </>
  );
};

export default Articles;
