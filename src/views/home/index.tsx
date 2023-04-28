import { Layout } from "@containers";
import { Introduction, HomeArticles } from "@modules";
import { Box } from "@mui/material";
import { ArticleListItem } from "@shared";

export const HomeView = ({ articles }: { articles: ArticleListItem[] }) => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexFlow: "column" }}>
        <Introduction />
        <HomeArticles articles={articles} />
      </Box>
    </Layout>
  );
};
