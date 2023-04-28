import { Box, styled } from "@mui/material";
import { theme } from "src/appConfig";

export const MainContainer = styled(Box)({
  position: "relative",
  width: "100%",
  boxSizing: "border-box",
  background: `linear-gradient(180deg, ${theme.colors.background.first} 0%, ${theme.colors.background.second} 100%)`,
  minHeight: "100vh",
});

export const InnerContainer = styled(Box)({
  padding: `0 ${theme.page.padding.lg}`,
  paddingBottom: "80px",
  width: "100%",
  boxSizing: "border-box",
});
