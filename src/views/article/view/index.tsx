import { Box, Typography, useTheme } from "@mui/material";
import * as Styles from "./styles";
import { ArticleViewProps } from "./types";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote";
import { Layout } from "@containers";
import ReactDOMServer from "react-dom/server";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useCopyToClipboard } from "@shared";
import { theme } from "@app";
import { COPY_TIMEOUT } from "./constants";

const components = {
  // Define a custom component for rendering code blocks
  code: ({
    className,
    children,
  }: {
    className?: string;
    children?: ReactNode;
  }) => {
    // Since eslint doesn't detect it as a react component, I have to disable it for certain lines

    //eslint-disable-next-line
    const [copiedText, copyToClipboard] = useCopyToClipboard();

    //eslint-disable-next-line
    const [justCopied, setJustCopied] = useState(false);
    // Extract the language from the class name (e.g. "language-jsx" -> "jsx")
    const language = className?.replace("language-", "") || "javascript";

    // Use ReactDOMServer to convert the React children to an HTML string
    const codeHtml = ReactDOMServer.renderToString(
      <div style={{ fontSize: "16px" }}>{children}</div>
    );

    //eslint-disable-next-line
    const ref = useRef<HTMLElement | null>(null);

    //eslint-disable-next-line
    useEffect(() => {
      if (!ref.current) return;

      ref.current.innerHTML = `${codeHtml}`;
    }, [ref.current]);

    const handleCopy = () => {
      copyToClipboard(ref.current?.textContent || "");
      setJustCopied(true);

      setTimeout(() => {
        setJustCopied(false);
      }, COPY_TIMEOUT);
    };

    return (
      <Styles.CodeWrapper>
        <Styles.Copy onClick={handleCopy}>
          {justCopied ? (
            <Styles.CopyDoneIcon aria-label="code copied" />
          ) : (
            <Styles.ClipboardIcon aria-label="copy to clipboard" />
          )}
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.text.description} !important`,
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            {justCopied ? "Copied!" : "Copy code"}
          </Typography>
        </Styles.Copy>

        <pre style={{ margin: 0 }}>
          <code
            style={{ borderRadius: "12px", background: "#13111c" }}
            ref={ref}
            className={`hljs ${language}`}
          ></code>
        </pre>
      </Styles.CodeWrapper>
    );
  },
};

export const ArticleView = ({ source, frontmatter }: ArticleViewProps) => {
  const { colors, page } = useTheme();

  return (
    <Layout innerContainerSx={{ paddingInline: "23vw" }}>
      <Styles.MainContainer>
        <Box mt={page.margin.top}>
          <Typography
            variant="h1"
            color={colors.text.pageHeading}
            sx={{ opacity: 0.9 }}
          >
            {frontmatter.title}
          </Typography>
          <Typography mt="16px" variant="subtitle1" color={colors.text.label}>
            {dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")} &mdash;{" "}
            {frontmatter.readingTime}
          </Typography>
          <Styles.Content>
            <MDXRemote {...source} components={components} />
          </Styles.Content>
        </Box>
      </Styles.MainContainer>
    </Layout>
  );
};
