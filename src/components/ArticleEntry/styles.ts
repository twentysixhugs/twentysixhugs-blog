import { Box, styled } from "@mui/material";
import Image from "next/image";

export const MainContainer = styled(Box)({
  display: "flex",
  borderRadius: "16px",
  gap: "20px",
  alignItems: "flex-start",
  boxSizing: "border-box",
  minHeight: "112px",
});

export const DataContainer = styled(Box)({
  display: "flex",
  flexFlow: "column",
  height: "130px",
});

export const StyledImage = styled(Image)({
  borderRadius: "16px",
  objectFit: "cover",
  boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.2)",
});
