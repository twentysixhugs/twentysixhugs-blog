import { CategoryEntry } from "@components";
import * as Styles from "./styles";
import { Box, Typography } from "@mui/material";
import { theme } from "src/appConfig";

const categories = [
  { name: "react", displayName: "React" },
  { name: "english", displayName: "English" },
  { name: "career_development", displayName: "Career development" },
  { name: "category1", displayName: "category 1" },
  { name: "category2", displayName: "category 2" },
  { name: "category22", displayName: "category 22" },
  { name: "category4", displayName: "category 4" },
  { name: "category5", displayName: "category 5" },
  { name: "category6", displayName: "category 6" },
  { name: "category7", displayName: "category 7" },
];

export const CategorySelector = () => {
  return (
    <Styles.MainContainer>
      <Typography
        mb="12px"
        variant="body1"
        color={theme.colors.text.pageHeading}
        sx={{ opacity: 0.9 }}
      >
        Categories
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          columnGap: "10px",
          rowGap: "12px",
        }}
      >
        {" "}
        {categories.map(({ name, displayName }) => (
          <CategoryEntry name={name} displayName={displayName} key={name} />
        ))}
      </Box>
    </Styles.MainContainer>
  );
};
