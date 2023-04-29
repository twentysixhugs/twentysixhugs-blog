import { Box, styled } from "@mui/material";

export const MainContainer = styled("article")({
  display: "flex",
  borderRadius: "16px",
  gap: "20px",
  alignItems: "flex-start",
  boxSizing: "border-box",
});

export const DataContainer = styled(Box)({
  display: "flex",
  flexFlow: "column",
});
