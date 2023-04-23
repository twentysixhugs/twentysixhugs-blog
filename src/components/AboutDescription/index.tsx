import { Typography, useTheme } from "@mui/material";
import * as Styles from "./styles";
import { ABOUT_DESCRIPTION, EMAIL } from "./constants";
import * as Icons from "./icons";

export const AboutDescription = () => {
  const { colors } = useTheme();

  const handleCopy = (value: string) => {
    if (typeof window !== "undefined" && window.navigator) {
      window.navigator.clipboard.writeText(value);
    }
  };

  return (
    <Styles.MainContainer>
      <Typography color={colors.text.pageHeading} variant="h1">
        Iaan Lamanosau
      </Typography>
      <Typography mt="5px" variant="body1" color={colors.text.label}>
        A frontend developer
      </Typography>
      <Typography
        mt="20px"
        variant="body2"
        color={colors.text.description}
        sx={{ lineHeight: "35px" }}
      >
        {ABOUT_DESCRIPTION}
      </Typography>
      <Typography
        mt="16px"
        variant="body2"
        color={colors.text.pageHeading}
        sx={{ opacity: 0.9 }}
      >
        Contact me:
      </Typography>
      <Typography
        sx={{ display: "flex", alignItems: "center", gap: "8px" }}
        variant="subtitle1"
        color={colors.text.heading}
      >
        {EMAIL}{" "}
        <Icons.ContentCopyIcon
          onClick={() => handleCopy(EMAIL)}
          sx={{ cursor: "pointer" }}
        />
      </Typography>
      <Styles.Links>
        <Icons.GitHub />
        <Icons.LinkedIn />
        <Icons.Telegram />
      </Styles.Links>
    </Styles.MainContainer>
  );
};
