import { ArticleEntry } from "@components";
import * as Styles from "./styles";
import { Divider } from "@mui/material";
import { ArticleListProps } from "./types";
import { theme } from "@app";

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
          <ArticleEntry
            slug={slug}
            key={slug}
            title={title}
            description={description}
          />
        </>
      ))}
    </Styles.MainContainer>
  );
};
