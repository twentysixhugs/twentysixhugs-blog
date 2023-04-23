import { ArticleList } from "@components";
import * as Styles from "./styles";
import { Typography } from "@mui/material";
import { theme } from "@app";

export const HomeArticles = () => {
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
      <ArticleList />
    </Styles.MainContainer>
  );
};
