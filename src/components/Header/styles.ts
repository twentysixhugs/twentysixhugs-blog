import { Box, styled } from "@mui/material";
import { theme } from "src/appConfig";

export const MainContainer = styled(Box)({
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  padding: `10px ${theme.page.padding.lg}`,
  boxSizing: "border-box",
  width: "100%",
  background: theme.colors.background.second,
  height: "72px",
  boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.1)",
  "& a": {
    textDecoration: "none",
  },
  "& .link:hover": {
    textDecoration: "underline",
  },
});
