import { styled } from "@mui/material";
import HomeIconComponent from "@mui/icons-material/Home";

import { theme } from "src/appConfig";

export const MainContainer = styled("header")({
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  padding: `10px ${theme.page.padding.lg}`,
  boxSizing: "border-box",
  width: "100%",
  background: theme.colors.background.second,
  height: "72px",
  boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.1)",
  "& a": {
    textDecoration: "none",
    color: "unset",
  },
  "& .link:hover": {
    textDecoration: "underline",
  },
  [theme.breakpoints.down("md")]: {
    padding: `10px ${theme.page.padding.md}`,
  },
  [theme.breakpoints.down("sm")]: {
    padding: `10px ${theme.page.padding.sm}`,
  },
  [theme.breakpoints.down("xs")]: {
    padding: `10px ${theme.page.padding.xs}`,
  },
});

export const HomeIcon = styled(HomeIconComponent)({
  color: theme.colors.text.primary,
});

export const Nav = styled("nav")({
  width: "100%",
});

export const Ul = styled("ul")({
  display: "flex",
  width: "100%",
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
