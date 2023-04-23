import { Box, Typography, keyframes, styled } from "@mui/material";
import {
  APPEAR_KEYFRAMES_ADDITIONAL_DELAY,
  APPEAR_KEYFRAMES_LENGTH,
  HEADING_TYPED_AFTER,
} from "../constants";

export const Introduction = styled(Box)({
  display: "flex",
  flexFlow: "column",
  width: "90%",
});

const descriptionKeyframes = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0
  }
  to {
    transform: translateY(0);
    opacity: 1
  }
`;

export const Description = styled(Typography)({
  animation: `${descriptionKeyframes} ${APPEAR_KEYFRAMES_LENGTH}ms ease-out both`,
  animationDelay: `${
    HEADING_TYPED_AFTER + APPEAR_KEYFRAMES_ADDITIONAL_DELAY
  }ms`,
});
