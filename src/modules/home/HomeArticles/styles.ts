import { Box, keyframes, styled } from "@mui/material";

import {
  APPEAR_KEYFRAMES_ADDITIONAL_DELAY,
  APPEAR_KEYFRAMES_LENGTH,
  HEADING_TYPED_AFTER,
} from "../constants";

const articleListKeyframes = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0
  }
  to {
    transform: translateY(0);
    opacity: 1
  }
`;

export const MainContainer = styled(Box)({
  display: "flex",
  flexFlow: "column",
  animation: `${articleListKeyframes} ${APPEAR_KEYFRAMES_LENGTH}ms ease-out both`,
  animationDelay: `${
    HEADING_TYPED_AFTER + APPEAR_KEYFRAMES_ADDITIONAL_DELAY
  }ms`,
});
