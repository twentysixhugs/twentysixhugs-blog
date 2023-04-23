import { Typography } from "@mui/material";
import * as Styles from "./styles";
import { useRouter } from "next/router";
import { CategoryEntryProps } from "./types";
import { theme } from "@app";

export const CategoryEntry = ({ name, displayName }: CategoryEntryProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.query.category = name;
    router.push(router);
  };

  return (
    <Styles.MainContainer onClick={handleClick}>
      <Typography
        variant="subtitle2"
        color={theme.colors.text.primary}
        sx={{
          "&:hover": {
            color: theme.colors.text.pageHeading,
            opacity: 0.9,
          },
        }}
      >
        {displayName}
      </Typography>
    </Styles.MainContainer>
  );
};
