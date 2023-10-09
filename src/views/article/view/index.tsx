import { Box } from "@mui/material";
import { MDXRemote } from "next-mdx-remote";
import { useEffect } from "react";

import { Layout } from "@containers";
import { useBreakpoints } from "@shared";
import { theme } from "@app";
import { ArticleHeading, ArticleImage, Code, PostCTA } from "@components";

import { ArticleViewProps } from "./types";
import * as Styles from "./styles";

export const ArticleView = ({ source, frontmatter }: ArticleViewProps) => {
  const { isSm, isXs } = useBreakpoints();

  useEffect(() => {
    const links = document.querySelectorAll(
      ".article-main-container a"
    ) as unknown as HTMLLinkElement[];

    const paragraphs = document.querySelectorAll(".article-main-container p");

    links.forEach((link) => {
      link.target = "_blank";
      link.rel = "noreferrer noopener";
    });

    paragraphs.forEach((p) => {
      p.classList.add("article__p");
    });
  }, []);

  const getPageMt = () => {
    if (isXs || isSm) {
      return theme.page.margin.topMobile;
    }

    return theme.page.margin.top;
  };

  return (
    <Layout innerContainerSx={{ paddingInline: "23vw" }}>
      <Styles.MainContainer className="article-main-container">
        <Box mt={getPageMt()}>
          <ArticleHeading
            title={frontmatter.title}
            publishedAt={frontmatter.publishedAt}
            readingTime={frontmatter.readingTime}
          />
          <Styles.Content>
            <MDXRemote
              {...source}
              components={{ code: Code, img: ArticleImage as any }}
            />
          </Styles.Content>
          <Box mt="30px">
            <PostCTA />
          </Box>
        </Box>
      </Styles.MainContainer>
    </Layout>
  );
};
