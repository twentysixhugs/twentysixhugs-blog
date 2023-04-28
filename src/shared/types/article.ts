import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type ArticleMdxData = {
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  readingTime: string;
  featured: boolean;
};

export type ArticleListItem = {
  title: string;
  description: string;
  slug: string;
  featured: boolean;
  readingTime: string;
  publishedAt: string;
};

export type Article = {
  title: string;
  description: string;
  content: string;
  slug: string;
  image: string;
  id: string;
};

export type RenderArticleMeta = {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  frontmatter: ArticleMdxData;
};
