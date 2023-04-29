import { Box } from "@mui/material";
import { MDXRemote } from "next-mdx-remote";

import { Layout } from "@containers";
import { useBreakpoints } from "@shared";
import { theme } from "@app";
import { ArticleHeading, Code } from "@components";

import { ArticleViewProps } from "./types";
import * as Styles from "./styles";

export const ArticleView = ({ source, frontmatter }: ArticleViewProps) => {
  const { isSm, isXs } = useBreakpoints();

  const getPageMt = () => {
    if (isXs || isSm) {
      return theme.page.margin.topMobile;
    }

    return theme.page.margin.top;
  };

  return (
    <Layout innerContainerSx={{ paddingInline: "23vw" }}>
      <Styles.MainContainer>
        <Box mt={getPageMt()}>
          <ArticleHeading
            title={frontmatter.title}
            publishedAt={frontmatter.publishedAt}
            readingTime={frontmatter.readingTime}
          />
          <Styles.Content>
            <MDXRemote {...source} components={{ code: Code }} />
          </Styles.Content>
        </Box>
      </Styles.MainContainer>
    </Layout>
  );
};
