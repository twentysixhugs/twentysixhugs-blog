import { theme } from "src/appConfig";
import { ArticleList } from "@modules";
import { Layout } from "@containers";
import { CategorySelector } from "@modules";
import { Box, Typography } from "@mui/material";
import { ArticleListItem } from "@shared";

export const ArticleListView = ({
  articles,
}: {
  articles: ArticleListItem[];
}) => {
  return (
    <Layout>
      <Box
        sx={{
          marginTop: theme.page.margin.top,
          display: "flex",
          flexFlow: "column",
        }}
      >
        <Typography
          variant="h1"
          color={theme.colors.text.pageHeading}
          sx={{ opacity: 0.9 }}
          mb={theme.page.margin.listHeading}
        >
          All articles
        </Typography>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <ArticleList articles={articles} />
          <CategorySelector />
        </Box>
      </Box>
    </Layout>
  );
};
