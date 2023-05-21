import { Box, styled } from "@mui/material";

import { theme } from "@app";

export const MainContainer = styled(Box)({
  display: "flex",
  flexFlow: "column",
});

export const Content = styled(Box)({
  "h1, h2, h3, h4, h5, h6": {
    color: theme.colors.text.heading,
    opacity: 0.8,
  },
  h2: {
    fontSize: theme.typography.h2.fontSize,
  },
  h3: {
    fontSize: theme.typography.h3.fontSize,
  },
  h4: {
    fontSize: theme.typography.h4.fontSize,
  },
  h5: {
    fontSize: theme.typography.h5.fontSize,
  },
  p: {
    fontSize: theme.typography.subtitle1.fontSize,
    lineHeight: "2.2rem",
    opacity: 0.9,

    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "1.6rem",
    },
  },
  "ul, ol, li": {
    fontSize: theme.typography.subtitle1.fontSize,
    lineHeight: "2.2rem",
    opacity: 0.95,
    color: "#e8e6e3",
  },
  strong: { fontWeight: 700 },
  ul: { paddingLeft: "22px" },
  ol: { paddingLeft: "24px" },
  "li p": { margin: 0 },
  a: {
    color: theme.colors.text.primary,
  },
  color: "#e8e6e3",
  img: {
    maxWidth: `calc(100vw - ${theme.page.padding.lg} - ${theme.page.padding.lg})`,
  },
  [theme.breakpoints.between("sm", "md")]: {
    img: {
      maxWidth: `calc(100vw - ${theme.page.padding.md} - ${theme.page.padding.md})`,
    },
  },
  [theme.breakpoints.between("xs", "sm")]: {
    img: {
      maxWidth: `calc(100vw - ${theme.page.padding.sm} - ${theme.page.padding.sm})`,
    },
  },
  [theme.breakpoints.down("xs")]: {
    img: {
      maxWidth: `calc(100vw - ${theme.page.padding.sm} - ${theme.page.padding.sm})`,
    },
  },
});
