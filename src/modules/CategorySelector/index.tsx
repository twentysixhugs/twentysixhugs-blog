import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import { theme } from "src/appConfig";
import { Category, useBreakpoints } from "@shared";
import { CategoryEntry } from "@components";

import * as Styles from "./styles";

export const CategorySelector = ({
  categories,
}: {
  categories: Category[];
}) => {
  const { isXs, isSm } = useBreakpoints();

  const router = useRouter();

  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectChange = (name: string, selectedValue: boolean) => {
    let newValue: string[] = [];

    if (selectedValue) {
      newValue = [...selected, name];
      setSelected(newValue);
    } else {
      newValue = selected.filter((item) => item !== name);
      setSelected(newValue);
    }

    if (!newValue.length) {
      router.replace({
        pathname: "/articles",
      });
    } else {
      router.replace({
        pathname: "/articles",
        query: {
          category: newValue.join(","),
        },
      });
    }
  };

  const getTitleVariant = () => {
    if (isXs || isSm) {
      return "subtitle2";
    }

    return "body1";
  };

  return (
    <Styles.MainContainer aria-labelledby="categories-heading">
      <Typography
        mb="12px"
        component="h2"
        id="categories-heading"
        variant={getTitleVariant()}
        color={theme.colors.text.pageHeading}
        sx={{ opacity: 0.9 }}
      >
        Categories
      </Typography>
      <Styles.Ul>
        {categories.map(({ name, label }) => (
          <Styles.Li key={name}>
            <CategoryEntry
              onClick={(name, selected) => handleSelectChange(name, selected)}
              displayName={label}
              name={name}
            />
          </Styles.Li>
        ))}
      </Styles.Ul>
    </Styles.MainContainer>
  );
};
