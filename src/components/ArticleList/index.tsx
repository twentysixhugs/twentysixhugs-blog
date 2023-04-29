import { Divider } from "@mui/material";

import { ArticleEntry } from "@components";
import { theme } from "@app";

import * as Styles from "./styles";
import { ArticleListProps } from "./types";

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <Styles.MainContainer>
      {articles.map(({ description, title, slug }, i) => (
        <>
          {i !== 0 && (
            <Divider
              sx={{ borderColor: theme.colors.text.description, opacity: 0.2 }}
            />
          )}
          <Styles.Li>
            <ArticleEntry
              slug={slug}
              key={slug}
              title={title}
              description={description}
            />
          </Styles.Li>
        </>
      ))}
    </Styles.MainContainer>
  );
};
