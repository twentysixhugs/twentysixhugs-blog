import { ArticleEntryProps } from "./types";
import * as Styles from "./styles";
import { Typography } from "@mui/material";
import { ARTICLE_ROUTES, routes, theme } from "src/appConfig";
import Link from "next/link";
import { getEllipsisStyles } from "@shared";

export const ArticleEntry = ({
  description,
  image,
  title,
  id,
}: ArticleEntryProps) => {
  return (
    <Styles.MainContainer>
      <Styles.StyledImage width={130} height={130} src={image} alt={""} />
      <Styles.DataContainer>
        <Link
          style={{ textDecoration: "none" }}
          href={routes[ARTICLE_ROUTES.ARTICLE].makePath({ id })}
        >
          {" "}
          <Typography
            sx={{
              "&:hover": { textDecoration: "underline" },
              lineHeight: "1.3",
              ...getEllipsisStyles(description, 2),
            }}
            variant="body1"
            color={theme.colors.text.heading}
            component="h3"
          >
            {title}
          </Typography>
        </Link>

        <Typography
          variant="subtitle1"
          color={theme.colors.text.description}
          mt="4px"
          sx={{ ...getEllipsisStyles(description, 2) }}
        >
          {description}
        </Typography>
      </Styles.DataContainer>
    </Styles.MainContainer>
  );
};
