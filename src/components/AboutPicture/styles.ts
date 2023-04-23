import { styled } from "@mui/material";
import Image from "next/image";
import { keyframes } from "@emotion/react";

const slide = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Avatar = styled(Image)({
  borderRadius: "100%",
  objectFit: "cover",
  animation: `${slide} 1s ease-out both`,
  animationDelay: "0.7s",
});
