import { ArticleListItem } from "@shared";
import { getFeaturedArticles } from "@utils";
import { HomeView } from "@views/home";
import Head from "next/head";

export async function getStaticProps() {
  const articles = await getFeaturedArticles();

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
const Home = ({ articles }: { articles: ArticleListItem[] }) => {
  return (
    <>
      <Head>
        <title>Twenty Six Hugs | Web Development Blog</title>
      </Head>
      <HomeView articles={articles} />
    </>
  );
};

export default Home;
