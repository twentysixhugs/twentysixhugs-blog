import { Box, styled } from "@mui/material";
import { keyframes } from "@emotion/react";

import { theme } from "@app";

const slide = keyframes`
  from {
    left: 100%;
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

export const MainContainer = styled(Box)({
  position: "relative",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  animation: `${slide} 1s ease-out both`,
  [theme.breakpoints.down("sm")]: {
    animation: `${appearMobile} 1s ease-out both`,
  },
});

export const Links = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginTop: "20px",
  "& .icon": {
    fontSize: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    "& .icon": {
      fontSize: "35px",
    },
  },
});

export const Ul = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
});

export const Li = styled("li")({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "flex",
  alignItems: "center",
});
