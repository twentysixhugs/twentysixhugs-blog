import { theme } from "src/appConfig";
import { Box, styled } from "@mui/material";

export const MainContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 12px",
  boxSizing: "border-box",
  background: theme.colors.background.second,
  borderRadius: "8px",
  cursor: "pointer",
  userSelect: "none",
});
