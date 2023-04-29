import { TypographyVariant, useMediaQuery } from "@mui/material";
import TypewriterComponent from "typewriter-effect";

import { theme } from "src/appConfig";
import { useBreakpoints } from "@shared";

import * as Styles from "./styles";
import {
  INTRODUCTION_DESCRIPTION,
  INTRODUCTION_DESCRIPTION_MOBILE,
  INTRODUCTION_HEADING,
  TYPING_DELAY,
} from "../constants";

export const Introduction = () => {
  const isLowerThan1800 = useMediaQuery("(max-width:1800px)");
  const { isXs, isSm, isMd } = useBreakpoints();

  const getDescriptionVariant = (): TypographyVariant => {
    if (isXs || isSm) {
      return "subtitle2";
    }

    return "body2";
  };

  const getPageMt = () => {
    if (isXs || isSm) {
      return theme.page.margin.topMobile;
    }

    return theme.page.margin.top;
  };

  return (
    <Styles.Introduction>
      <Styles.Title
        variant="subtitle1"
        color={theme.colors.text.pageHeading}
        id="home-typewriter-message"
        mt={getPageMt()}
        fontSize={"50px"}
        lineHeight="2rem"
        fontWeight={600}
        sx={{
          ...(isLowerThan1800 && { minHeight: "130px", marginBottom: 0 }),
        }}
      >
        {isXs || isSm || isMd ? (
          INTRODUCTION_HEADING
        ) : (
          <TypewriterComponent
            onInit={(typewriter) =>
              typewriter
                .changeDelay(TYPING_DELAY)
                .typeString(INTRODUCTION_HEADING)
                .start()
            }
          />
        )}
      </Styles.Title>
      <Styles.Description
        component="p"
        color={"#79778f"}
        variant={getDescriptionVariant()}
      >
        {isXs || isSm
          ? INTRODUCTION_DESCRIPTION_MOBILE
          : INTRODUCTION_DESCRIPTION}
      </Styles.Description>
    </Styles.Introduction>
  );
};
