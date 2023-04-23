import { AboutDescription, AboutPicture } from "@components";
import * as Styles from "./styles";

export const AboutMe = () => {
  return (
    <Styles.MainContainer>
      <AboutPicture />
      <AboutDescription />
    </Styles.MainContainer>
  );
};
