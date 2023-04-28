import { ArticleList as ArticleListComponent } from "@components";
import { ArticleListItem } from "@shared";

export const ArticleList = ({ articles }: { articles: ArticleListItem[] }) => {
  return <ArticleListComponent articles={articles} />;
};
