import { Box, styled } from "@mui/material";

import { theme } from "src/appConfig";

export const MainContainer = styled("main")({
  position: "relative",
  width: "100%",
  boxSizing: "border-box",
  background: `linear-gradient(180deg, ${theme.colors.background.first} 0%, ${theme.colors.background.second} 100%)`,
  minHeight: "100vh",
  [theme.breakpoints.down("md")]: {
    paddingBottom: "50px",
  },
});

export const InnerContainer = styled(Box)({
  padding: `0 ${theme.page.padding.lg}`,
  paddingBottom: "80px",
  width: "100%",
  boxSizing: "border-box",

  [theme.breakpoints.down("md")]: {
    padding: `0 ${theme.page.padding.md}`,
  },
  [theme.breakpoints.down("sm")]: {
    padding: `0 ${theme.page.padding.sm}`,
  },
});
