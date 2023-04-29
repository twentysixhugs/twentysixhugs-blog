import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import { theme } from "src/appConfig";
import { ArticleList } from "@modules";
import { Layout } from "@containers";
import { CategorySelector } from "@modules";
import { ArticleListItem, Category, useBreakpoints } from "@shared";


export const ArticleListView = ({
  articles,
  categories,
}: {
  articles: ArticleListItem[];
  categories: Category[];
}) => {
  const { isXl, isLg, isMd, isSm, isXs } = useBreakpoints();

  const router = useRouter();

  const category = router.query.category as string;

  const articlesToRender = category
    ? articles.filter((article) => {
        const value = category
          .split(",")
          .some((category) => category === article.category);
        return value;
      })
    : articles;

  const getPageMt = () => {
    if (isXs || isSm) {
      return theme.page.margin.topMobile;
    }

    return theme.page.margin.top;
  };

  return (
    <Layout>
      <Box
        sx={{
          marginTop: getPageMt(),
          display: "flex",
          flexFlow: "column",
        }}
      >
        <Typography
          variant={"h1"}
          component="h1"
          color={theme.colors.text.pageHeading}
          sx={{ opacity: 0.9, ...((isXs || isSm) && { fontSize: "20px" }) }}
          mb={theme.page.margin.listHeading}
        >
          All articles
        </Typography>
        {(isSm || isXs) && (
          <Box mb="50px">
            <CategorySelector categories={categories} />
          </Box>
        )}
        <Box sx={{ display: "flex", gap: "20px" }}>
          <ArticleList articles={articlesToRender} />
          <Box sx={{ marginLeft: "auto" }}>
            {(isXl || isLg || isMd) && (
              <CategorySelector categories={categories} />
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
