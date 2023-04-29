import { styled } from "@mui/material";

import { theme } from "@app";

export const MainContainer = styled("section")({
  display: "flex",
  flexFlow: "column",
  width: "350px",
  borderRadius: "8px",
  boxSizing: "border-box",
  flex: "0 0 auto",

  [theme.breakpoints.down("sm")]: {
    width: `calc(320px - ${theme.page.padding.sm})`,
  },
});

export const Ul = styled("ul")({
  display: "flex",
  flexFlow: "row wrap",
  columnGap: "10px",
  rowGap: "12px",
  margin: 0,
  padding: 0,
  listStyle: "none",
});

export const Li = styled("li")({
  margin: 0,
  padding: 0,
  listStyle: "none",
});
