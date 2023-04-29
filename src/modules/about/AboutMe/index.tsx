import { AboutDescription, AboutPicture } from "@components";

import * as Styles from "./styles";

export const AboutMe = ({ avatarSrc }: { avatarSrc: string }) => {
  return (
    <Styles.MainContainer>
      <AboutPicture src={avatarSrc} />
      <AboutDescription />
    </Styles.MainContainer>
  );
};
