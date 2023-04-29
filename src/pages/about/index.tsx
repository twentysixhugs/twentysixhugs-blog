import Head from "next/head";
import path from "path";
import fs from "fs";

import { AboutView } from "@views/about/view";

export async function getStaticProps() {
  const imagePath = path.join(process.cwd(), "data", "images", "avatar.jpg");

  // Read the image data from the file using fs.readFileSync
  const imageBuffer = fs.readFileSync(imagePath);

  // Convert the image data to a base64-encoded string
  const imageData = Buffer.from(imageBuffer).toString("base64");

  return {
    props: { avatarSrc: `data:image/jpeg;base64,${imageData}` },
  };
}

const About = ({ avatarSrc }: { avatarSrc: string }) => {
  return (
    <>
      <Head>
        <title>About me | Iaan Lamanosau</title>
        <meta name="description" content="The story behind why I write" />
        <meta property="og:title" content="About me - Iaan Lamanosau" />
        <meta
          property="og:description"
          content="The story behind why I write"
        />
        <meta property="og:url" content="https://twentysixhugs.dev/about" />
        <meta property="og:type" content="website" />
      </Head>
      <AboutView avatarSrc={avatarSrc} />
    </>
  );
};

export default About;
