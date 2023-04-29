import { Header } from "@components";
import { useIsLoadingOnMount } from "@shared";

import * as Styles from "./styles";
import { LayoutProps } from "./types";

export const Layout = ({ children, sx, innerContainerSx }: LayoutProps) => {
  const isLoading = useIsLoadingOnMount();

  return (
    <Styles.MainContainer sx={sx}>
      <Header />
      <Styles.InnerContainer
        aria-busy={isLoading}
        sx={{ ...innerContainerSx, ...(isLoading && { visibility: "hidden" }) }}
      >
        {children}
      </Styles.InnerContainer>
    </Styles.MainContainer>
  );
};
