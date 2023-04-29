import { ArticleListItem } from "../types";

export const sortArticles = (articles: ArticleListItem[]) => {
  return [...articles]
    .sort((a, b) => {
      if (a.publishedAt > b.publishedAt) return 1;
      if (a.publishedAt < b.publishedAt) return -1;

      return 0;
    })
    .reverse();
};
