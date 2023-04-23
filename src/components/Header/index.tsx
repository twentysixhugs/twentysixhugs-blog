import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import * as Styles from "./styles";
import Link from "next/link";
import { ARTICLE_ROUTES, MAIN_ROUTES, routes } from "@app";
import TranslateIcon from "@mui/icons-material/Translate";
import { IconDropdownMenu } from "@components";
import { languages } from "./constants";

export const Header = () => {
  const { colors } = useTheme();

  const handleLanguageSubmit = (value: string) => {
    console.log(value);
    // TODO
  };

  return (
    <Styles.MainContainer>
      <Link href={routes[MAIN_ROUTES.HOME].makePath()}>
        <Typography
          variant="body2"
          fontWeight={600}
          color={colors.text.primary}
          className="link"
        >
          Twenty Six Hugs
        </Typography>
      </Link>
      <Link href={routes[ARTICLE_ROUTES.ARTICLES_LIST].makePath()}>
        <Typography ml="70px" variant="body2" color={colors.text.primary}>
          <span className="link">Articles</span> 📚
        </Typography>
      </Link>
      <Tooltip title="Coming soon!">
        <Typography
          sx={{ cursor: "default" }}
          ml="70px"
          variant="body2"
          color={colors.text.primary}
        >
          Learning 🧠
        </Typography>
      </Tooltip>
      <Tooltip title="Coming soon!">
        <Typography
          sx={{ cursor: "default" }}
          ml="70px"
          variant="body2"
          color={colors.text.primary}
        >
          Newsletter ✉️
        </Typography>
      </Tooltip>
      <Box ml="auto">
        <IconDropdownMenu
          menuItems={languages}
          onSubmit={handleLanguageSubmit}
          icon={<TranslateIcon sx={{ color: colors.text.primary }} />}
          direction="horizontal"
        />
      </Box>

      <Box ml="20px">
        <Link href={routes[MAIN_ROUTES.ABOUT].makePath()}>
          <Typography
            className="link"
            variant="body2"
            color={colors.text.primary}
          >
            <span className="link">About me</span>
          </Typography>
        </Link>
      </Box>
    </Styles.MainContainer>
  );
};
