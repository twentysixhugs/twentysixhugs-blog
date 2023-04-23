import { ArticleListView } from "@views/article/list";
import { NextPage } from "next";
import Head from "next/head";

const Articles: NextPage = () => {
  return (
    <>
      <Head>
        <title>Twenty Six Hugs | Articles</title>
      </Head>
      <ArticleListView />
    </>
  );
};

export default Articles;
