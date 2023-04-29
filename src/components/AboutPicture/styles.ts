import { styled } from "@mui/material";
import { keyframes } from "@emotion/react";

import { theme } from "@app";

const slide = keyframes`
  from {
    left: -100%;
    opacity: 0
  }
  to {
    left: 0;
    opacity: 1;
  }
`;

const appearMobile = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;

export const Avatar = styled("img")({
  position: "relative",
  borderRadius: "100%",
  objectFit: "cover",
  animation: `${slide} 1s ease-out both`,
  animationDelay: "0.7s",
  width: "400px",
  height: "400px",
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    height: "150px",
    animation: `${appearMobile} 1s ease-out both`,
    animationDelay: "0.6s",
  },
});
