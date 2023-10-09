import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type ArticleMdxData = {
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  readingTime: string;
  featuredIndex: boolean;
  category: string;
};

export type ArticleListItem = {
  title: string;
  description: string;
  slug: string;
  featuredIndex: number;
  readingTime: string;
  publishedAt: string;
  category: string;
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
