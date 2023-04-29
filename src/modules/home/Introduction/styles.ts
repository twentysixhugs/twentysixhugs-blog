import { Box, Typography, keyframes, styled } from "@mui/material";

import { theme } from "@app";

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
}) as typeof Typography;

const titleKeyframes = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 0.9
  }
`;

export const Title = styled(Typography)({
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    minHeight: "unset",
    marginBottom: "15px",
  },
  width: "100%",
  opacity: 0.9,
  "& *": {
    width: "100%",
    wordBreak: "break-word",
  },
  [theme.breakpoints.down("md")]: {
    animation: `${titleKeyframes} ${APPEAR_KEYFRAMES_LENGTH}ms ease-out both`,
  },
}) as typeof Typography;
