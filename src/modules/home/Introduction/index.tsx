import { Typography, useMediaQuery } from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import * as Styles from "./styles";
import { theme } from "@app";
import {
  INTRODUCTION_DESCRIPTION,
  INTRODUCTION_HEADING,
  TYPING_DELAY,
} from "../constants";

export const Introduction = () => {
  const isLowerThan1800 = useMediaQuery("(max-width:1800px)");

  return (
    <Styles.Introduction>
      <Typography
        variant="h1"
        color={theme.colors.text.pageHeading}
        id="home-typewriter-message"
        mt={theme.page.margin.top}
        fontSize={"50px"}
        sx={{
          marginBottom: "20px",
          ...(isLowerThan1800 && { minHeight: "130px", marginBottom: 0 }),
          width: "100%",
          "& *": {
            width: "100%",
            wordBreak: "break-word",
          },
        }}
      >
        <TypewriterComponent
          onInit={(typewriter) =>
            typewriter
              .changeDelay(TYPING_DELAY)
              .typeString(INTRODUCTION_HEADING)
              .start()
          }
        />
      </Typography>
      <Styles.Description color={"#79778f"} variant="body2">
        {INTRODUCTION_DESCRIPTION}
      </Styles.Description>
    </Styles.Introduction>
  );
};
