import { Header } from "@components";
import * as Styles from "./styles";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Styles.MainContainer>
      <Header />

      <Styles.InnerContainer>{children}</Styles.InnerContainer>
    </Styles.MainContainer>
  );
};
