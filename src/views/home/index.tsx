import { Introduction, HomeArticles } from "@modules";
import { Box } from "@mui/material";

export const HomeView = () => {
  return (
    <Box sx={{ display: "flex", flexFlow: "column" }}>
      <Introduction />
      <HomeArticles />
    </Box>
  );
};
