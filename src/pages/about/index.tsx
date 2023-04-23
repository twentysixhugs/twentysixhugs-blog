import { AboutView } from "@views/about/view";
import { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About me | Iaan Lamanosau</title>
      </Head>
      <AboutView />
    </>
  );
};

export default About;
