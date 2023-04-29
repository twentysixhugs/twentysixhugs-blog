import { Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";

import { useBreakpoints } from "@shared";

import { ArticleHeadingProps } from "./types";

export const ArticleHeading = ({
  publishedAt,
  readingTime,
  title,
}: ArticleHeadingProps) => {
  const { colors } = useTheme();
  const { isSm, isXs } = useBreakpoints();

  const getMetaVariant = () => {
    if (isXs || isSm) {
      return "subtitle2";
    }

    return "subtitle1";
  };

  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        color={colors.text.pageHeading}
        sx={{ opacity: 0.9, ...((isXs || isSm) && { fontSize: "20px" }) }}
      >
        {title}
      </Typography>
      <Typography
        mt="16px"
        component="p"
        variant={getMetaVariant()}
        color={colors.text.label}
      >
        {dayjs(publishedAt).format("MMMM D, YYYY")} &mdash; {readingTime}
      </Typography>
    </>
  );
};
