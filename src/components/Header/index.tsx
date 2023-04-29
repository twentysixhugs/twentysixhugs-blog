import {
  Tooltip,
  Typography,
  TypographyVariant,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

import { ARTICLE_ROUTES, MAIN_ROUTES, routes } from "src/appConfig";
import { useBreakpoints, useIsLoadingOnMount } from "@shared";

import * as Styles from "./styles";

export const Header = () => {
  const { colors } = useTheme();

  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();

  const isLoading = useIsLoadingOnMount();

  const router = useRouter();

  const getLinkVariant = (): TypographyVariant => {
    if (isXs || isSm) {
      return "subtitle2";
    }

    return "body2";
  };

  const getLinkMl = (): string => {
    if (isSm) {
      return "30px";
    }

    if (isXs) {
      return "20px";
    }

    return "70px";
  };

  const homeRoute = routes[MAIN_ROUTES.HOME].makePath();

  return (
    <Styles.MainContainer aria-label="Page header">
      <Styles.Nav
        aria-busy={isLoading}
        sx={{ ...(isLoading && { visibility: "hidden" }) }}
      >
        <Styles.Ul>
          <Styles.Li>
            {(isXl || isLg || isMd) && (
              <Typography
                component="span"
                variant={getLinkVariant()}
                fontWeight={600}
                color={colors.text.primary}
                className="link"
              >
                <Link href={homeRoute}>Twenty Six Hugs</Link>
              </Typography>
            )}
            {(isSm || isXs) && (
              <Styles.HomeIcon onClick={() => router.push(homeRoute)} />
            )}
          </Styles.Li>
          <Styles.Li sx={{ marginLeft: getLinkMl() }}>
            <Typography
              component="span"
              variant={getLinkVariant()}
              color={colors.text.primary}
              className="link"
            >
              <Link href={routes[ARTICLE_ROUTES.ARTICLES_LIST].makePath()}>
                Articles 📚
              </Link>
            </Typography>
          </Styles.Li>
          <Styles.Li sx={{ marginLeft: getLinkMl() }}>
            <Tooltip enterTouchDelay={0} title="Coming soon!">
              <Typography
                className="link"
                component="span"
                sx={{ cursor: "default" }}
                variant={getLinkVariant()}
                color={colors.text.primary}
              >
                Learning 🧠
              </Typography>
            </Tooltip>
          </Styles.Li>
          <Styles.Li sx={{ marginLeft: "auto" }}>
            <Typography
              component="span"
              className="link"
              variant={getLinkVariant()}
              color={colors.text.primary}
            >
              <Link href={routes[MAIN_ROUTES.ABOUT].makePath()}>
                {isXs || isSm ? "About" : "About me"}
              </Link>
            </Typography>
          </Styles.Li>
        </Styles.Ul>
      </Styles.Nav>
    </Styles.MainContainer>
  );
};
