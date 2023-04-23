import { AboutMe } from "@modules";
import { Box } from "@mui/material";

export const AboutView = () => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt="15vh"
    >
      <AboutMe />
    </Box>
  );
};
