import Head from "next/head";

import { ArticleListItem, sortArticles } from "@shared";
import { getFeaturedArticles } from "@utils";
import { HomeView } from "@views/home";

export async function getStaticProps() {
  const articles = await getFeaturedArticles();

  return {
    props: {
      articles: sortArticles(articles),
    },
  };
}
const Home = ({ articles }: { articles: ArticleListItem[] }) => {
  return (
    <>
      <Head>
        <title>Twenty Six Hugs | Web Development Blog</title>
        <meta
          name="description"
          content="A blog for developers. Write about web development, life improvement and achieving your goals"
        />
        <meta
          property="og:title"
          content={`Twenty Six Hugs - Web Development Blog`}
        />
        <meta
          property="og:description"
          content="A blog for developers. Write about software development, life improvement and achieving your goals"
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN_NAME} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`} />
      </Head>
      <HomeView articles={articles} />
    </>
  );
};

export default Home;
