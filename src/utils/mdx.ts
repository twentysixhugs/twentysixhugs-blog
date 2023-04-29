import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

import { ArticleListItem, ArticleMdxData } from "@shared";

const articlesPath = path.join(process.cwd(), "data/articles");

export async function getSlug() {
  const files = fs.readdirSync(articlesPath);

  return files.map((file) => file.split(".")[0]);
}

export async function getArticleFromSlug(slug: string): Promise<{
  content: string;
  frontmatter: ArticleMdxData;
}> {
  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const source = fs.readFileSync(articleDir);
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      description: data.description,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(content).text,
      category: data.category,
      ...data,
    } as ArticleMdxData,
  };
}

export async function getAllArticles() {
  const articles = fs.readdirSync(path.join(process.cwd(), "data/articles"));

  return articles.reduce((allArticles, articleSlug) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), "data/articles", articleSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ] as ArticleListItem[];
  }, [] as ArticleListItem[]);
}

export async function getFeaturedArticles() {
  const articles = await getAllArticles();
  const res = articles.filter(({ featured }) => !!featured);
  return res;
}
