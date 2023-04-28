import { getArticleFromSlug, getSlug } from "@utils";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import { RenderArticleMeta } from "@shared";
import Head from "next/head";
import { ArticleView } from "@views/article/view";

export async function getStaticPaths() {
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontmatter,
    },
  };
}

const ArticlePage = ({ source, frontmatter }: RenderArticleMeta) => {
  return (
    <>
      <Head>
        <title>{`${frontmatter?.title} | Twenty Six Hugs`}</title>
      </Head>
      <ArticleView source={source} frontmatter={frontmatter} />
    </>
  );
};

export default ArticlePage;
