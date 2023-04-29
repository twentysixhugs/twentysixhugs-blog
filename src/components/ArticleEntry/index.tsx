import { Typography } from "@mui/material";
import Link from "next/link";

import { ARTICLE_ROUTES, routes, theme } from "src/appConfig";
import { getEllipsisStyles, useBreakpoints } from "@shared";

import * as Styles from "./styles";
import { ArticleEntryProps } from "./types";

export const ArticleEntry = ({
  description,
  title,
  slug,
}: ArticleEntryProps) => {
  const { isXs, isSm } = useBreakpoints();

  const getTitleVariant = () => {
    if (isXs || isSm) {
      return "subtitle1";
    }

    return "body1";
  };

  const getDescriptionVariant = () => {
    if (isXs || isSm) {
      return "subtitle2";
    }

    return "subtitle1";
  };

  const getTitleEllipsis = () => {
    if (isXs || isSm) {
      return getEllipsisStyles(title, 5);
    }

    return getEllipsisStyles(title, 2);
  };

  const getDescriptionEllipsis = () => {
    if (isXs || isSm) {
      return getEllipsisStyles(description, 5);
    }

    return getEllipsisStyles(description, 2);
  };

  return (
    <Styles.MainContainer>
      <Styles.DataContainer>
        <Link
          style={{ textDecoration: "none", width: "90%" }}
          href={routes[ARTICLE_ROUTES.ARTICLE].makePath({ slug })}
        >
          {" "}
          <Typography
            sx={{
              "&:hover": { textDecoration: "underline" },
              lineHeight: "1.3",
              ...getTitleEllipsis(),
              width: "90%",
            }}
            variant={getTitleVariant()}
            color={theme.colors.text.heading}
            component="h2"
          >
            {title}
          </Typography>
        </Link>

        <Typography
          variant={getDescriptionVariant()}
          color={theme.colors.text.description}
          mt="4px"
          component="p"
          sx={{ ...getDescriptionEllipsis() }}
        >
          {description}
        </Typography>
      </Styles.DataContainer>
    </Styles.MainContainer>
  );
};
