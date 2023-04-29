import { Typography } from "@mui/material";

import { ArticleList } from "@components";
import { theme } from "src/appConfig";
import { ArticleListItem, useBreakpoints } from "@shared";

import * as Styles from "./styles";

export const HomeArticles = ({ articles }: { articles: ArticleListItem[] }) => {
  const { isSm, isXs } = useBreakpoints();

  const getPageMt = () => {
    if (isXs || isSm) {
      return theme.page.margin.topMobile;
    }

    return theme.page.margin.top;
  };

  return (
    <Styles.MainContainer>
      <Typography
        variant="h2"
        component="h1"
        color={theme.colors.text.pageHeading}
        sx={{ opacity: 0.9, ...((isXs || isSm) && { fontSize: "20px" }) }}
        mb={theme.page.margin.listHeading}
        mt={getPageMt()}
        fontSize={"30px"}
      >
        Featured articles
      </Typography>
      <ArticleList articles={articles} />
    </Styles.MainContainer>
  );
};
