import { Box } from "@mui/material";

import { theme } from "@app";
import { Layout } from "@containers";
import { AboutMe } from "@modules";
import { useBreakpoints } from "@shared";

export const AboutView = () => {
  const { isSm, isXs } = useBreakpoints();

  const getPageMt = () => {
    if (isXs || isSm) {
      return theme.page.margin.topMobile;
    }

    return "15vh";
  };
  return (
    <Layout innerContainerSx={{ overflow: "hidden" }}>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={getPageMt()}
      >
        <AboutMe />
      </Box>
    </Layout>
  );
};
