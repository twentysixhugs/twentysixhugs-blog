import { Box, styled } from "@mui/material";

import { theme } from "@app";

export const MainContainer = styled(Box)({
  display: "flex",
  gap: "48px",
  [theme.breakpoints.down("sm")]: {
    flexFlow: "column",
  },
});
