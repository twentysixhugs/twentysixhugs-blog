import { ArticleList } from "@components";
import * as Styles from "./styles";
import { Typography } from "@mui/material";
import { theme } from "src/appConfig";
import { ArticleListItem } from "@shared";

export const HomeArticles = ({ articles }: { articles: ArticleListItem[] }) => {
  return (
    <Styles.MainContainer>
      <Typography
        variant="h2"
        color={theme.colors.text.pageHeading}
        sx={{ opacity: 0.9 }}
        mb={theme.page.margin.listHeading}
        mt={"60px"}
        fontSize={"30px"}
      >
        Featured articles
      </Typography>
      <ArticleList articles={articles} />
    </Styles.MainContainer>
  );
};
