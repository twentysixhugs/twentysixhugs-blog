import { Typography, useTheme } from "@mui/material";

import { useBreakpoints } from "@shared";

import * as Styles from "./styles";
import { ABOUT_DESCRIPTION, EMAIL } from "./constants";
import * as Icons from "./icons";

export const AboutDescription = () => {
  const { colors } = useTheme();
  const { isSm, isXs } = useBreakpoints();

  const handleCopy = (value: string) => {
    if (typeof window !== "undefined" && window.navigator) {
      window.navigator.clipboard.writeText(value);
    }
  };

  const getJobTitleVariant = () => {
    if (isSm || isXs) {
      return "subtitle1";
    }

    return "body1";
  };

  const getDescriptionVariant = () => {
    if (isSm || isXs) {
      return "subtitle2";
    }

    return "body2";
  };

  const getContactTitleVariant = () => {
    if (isSm || isXs) {
      return "subtitle2";
    }

    return "body2";
  };

  const getContactDataVariant = () => {
    if (isSm || isXs) {
      return "subtitle2";
    }

    return "subtitle1";
  };

  return (
    <Styles.MainContainer>
      <section>
        <Typography
          color={colors.text.pageHeading}
          variant="h1"
          component="h1"
          sx={{ ...((isXs || isSm) && { fontSize: "20px" }) }}
        >
          Iaan Lamanosau
        </Typography>
        <Typography
          mt="5px"
          component="h2"
          variant={getJobTitleVariant()}
          color={colors.text.label}
        >
          A frontend developer
        </Typography>
      </section>
      <section>
        <Typography
          mt="20px"
          component="p"
          variant={getDescriptionVariant()}
          color={colors.text.description}
          sx={{
            lineHeight: "35px",
            ...((isXs || isSm) && { lineHeight: "25px" }),
          }}
        >
          {ABOUT_DESCRIPTION}
        </Typography>
      </section>
      <section>
        <Typography
          mt="16px"
          variant={getContactTitleVariant()}
          color={colors.text.pageHeading}
          sx={{ opacity: 0.9 }}
          component="h3"
        >
          Contact me:
        </Typography>
        <Typography
          component="p"
          sx={{ display: "flex", alignItems: "center", gap: "8px" }}
          variant={getContactDataVariant()}
          color={colors.text.heading}
        >
          {EMAIL}
          <Icons.ContentCopyIcon
            onClick={() => handleCopy(EMAIL)}
            sx={{ cursor: "pointer" }}
          />
        </Typography>
      </section>
      <section>
        <Styles.Links>
          <Styles.Li>
            <Icons.GitHub />
          </Styles.Li>
          <Styles.Li>
            <Icons.LinkedIn />
          </Styles.Li>
          <Styles.Li>
            <Icons.Telegram />
          </Styles.Li>
        </Styles.Links>
      </section>
    </Styles.MainContainer>
  );
};
