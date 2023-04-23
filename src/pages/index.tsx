import { HomeView } from "@views/home";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Twenty Six Hugs | Web Development Blog</title>
      </Head>
      <HomeView />
    </>
  );
};

export default Home;
