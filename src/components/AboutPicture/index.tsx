import * as Styles from "./styles";

export const AboutPicture = ({ src }: { src: string }) => {
  return <Styles.Avatar alt="My face" src={src} />;
};
