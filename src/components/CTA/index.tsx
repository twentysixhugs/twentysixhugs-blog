import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

import { theme } from "@app";
import { useBreakpoints, useCopyToClipboard } from "@shared";

import * as Styles from "./styles";

export const PostCTA = () => {
  const copy = useCopyToClipboard()[1];

  const [showCopyDone, setShowCopyDone] = useState(false);

  const { isXs, isSm } = useBreakpoints();

  const handleCopy = () => {
    copy(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/articles/${slug}`);
    setShowCopyDone(true);
  };

  useEffect(() => {
    let timeout: any;

    if (showCopyDone) {
      timeout = setTimeout(() => setShowCopyDone(false), 2500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showCopyDone]);

  const router = useRouter();

  const { slug } = router.query;

  const fontSizes = (() => {
    let title;
    let question;
    let ctaBtn;

    if (isXs || isSm) {
      title = theme.typography.subtitle1.fontSize;
      question = theme.typography.subtitle2.fontSize;
      ctaBtn = theme.typography.subtitle1.fontSize;
    } else {
      title = theme.typography.h6.fontSize;
      question = theme.typography.h6.fontSize;
      ctaBtn = theme.typography.h5.fontSize;
    }

    return { title, question, ctaBtn };
  })();

  return (
    <Styles.MainContainer>
      <Typography
        variant="h6"
        color={theme.colors.text.heading}
        sx={{ fontSize: `${fontSizes.title} !important` }}
      >
        Like the post?
      </Typography>
      <Typography
        variant="body1"
        fontSize={fontSizes.question}
        color={theme.colors.text.pageHeading}
        component="span"
      >
        How about sharing it with friends?
      </Typography>
      <Typography
        display="flex"
        alignItems="center"
        gap="8px"
        mt="15px"
        sx={{ cursor: "pointer" }}
        onClick={handleCopy}
        variant="body1"
        fontSize={fontSizes.ctaBtn}
        color={theme.colors.text.primary}
        component="span"
        role="button"
      >
        Copy article link
        {showCopyDone ? <DoneIcon /> : <ContentCopyIcon />}
      </Typography>
    </Styles.MainContainer>
  );
};
