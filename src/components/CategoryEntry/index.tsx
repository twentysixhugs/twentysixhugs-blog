import { Typography } from "@mui/material";
import { useState } from "react";

import { theme } from "src/appConfig";
import { useBreakpoints } from "@shared";

import * as Styles from "./styles";
import { CategoryEntryProps } from "./types";


export const CategoryEntry = ({
  displayName,
  name,
  onClick,
}: CategoryEntryProps) => {
  const { isXs, isSm } = useBreakpoints();

  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
    onClick(name, !selected);
  };

  const getVariant = () => {
    if (isXs || isSm) {
      return "caption";
    }

    return "subtitle2";
  };

  return (
    <Styles.MainContainer
      onClick={handleSelect}
      sx={{
        ...(selected && { background: theme.colors.background.third }),
      }}
    >
      <Typography
        variant={getVariant()}
        color={theme.colors.text.primary}
        sx={{
          "&:hover": {
            color: theme.colors.text.pageHeading,
            opacity: 0.9,
          },
          ...(selected && { color: theme.colors.text.pageHeading }),
        }}
      >
        {displayName}
      </Typography>
    </Styles.MainContainer>
  );
};
