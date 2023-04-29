import { Header } from "@components";

import * as Styles from "./styles";
import { LayoutProps } from "./types";

export const Layout = ({ children, sx, innerContainerSx }: LayoutProps) => {
  return (
    <Styles.MainContainer sx={sx}>
      <Header />
      <Styles.InnerContainer sx={innerContainerSx}>
        {children}
      </Styles.InnerContainer>
    </Styles.MainContainer>
  );
};
