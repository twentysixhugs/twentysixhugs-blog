import { ReactNode } from "react";
import { SxProps } from "@mui/material/styles";

export type LayoutProps = {
  children: ReactNode;
  sx?: SxProps;
  innerContainerSx?: SxProps;
};
