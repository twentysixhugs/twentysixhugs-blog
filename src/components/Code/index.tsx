import { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Typography } from "@mui/material";

import { useBreakpoints, useCopyToClipboard } from "@shared";
import { theme } from "@app";

import { CodeProps } from "./types";
import * as Styles from "./styles";
import { COPY_TIMEOUT } from "./constants";

export const Code = ({ className, children }: CodeProps) => {
  const { isSm, isXs } = useBreakpoints();

  const copyToClipboard = useCopyToClipboard()[1];

  const [justCopied, setJustCopied] = useState(false);
  // Extract the language from the class name (e.g. "language-jsx" -> "jsx")
  const language = className?.replace("language-", "") || "javascript";

  // Use ReactDOMServer to convert the React children to an HTML string
  const codeHtml = ReactDOMServer.renderToString(
    <div
      style={{
        fontSize: "16px",
        ...((isSm || isXs) && { fontSize: "14px" }),
      }}
    >
      {children}
    </div>
  );

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = `${codeHtml}`;
  }, [ref.current, codeHtml]);

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
        {!isXs && !isSm && (
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
        )}
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
};
