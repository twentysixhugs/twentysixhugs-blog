import { Box, styled } from "@mui/material";
import { keyframes } from "@emotion/react";

const slide = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const MainContainer = styled(Box)({
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  animation: `${slide} 1s ease-out both`,
});

export const Links = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginTop: "20px",
  "& .icon": {
    fontSize: "50px",
  },
});
