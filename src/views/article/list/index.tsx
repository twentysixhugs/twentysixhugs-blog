import { theme } from "@app";
import { ArticleList } from "@components";
import { CategorySelector } from "@modules";
import { Box, Typography } from "@mui/material";

export const ArticleListView = () => {
  return (
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
        <ArticleList />
        <CategorySelector />
      </Box>
    </Box>
  );
};
