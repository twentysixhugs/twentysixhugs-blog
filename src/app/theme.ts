import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 1024,
      lg: 1600,
      xl: 1920,
    },
  },
  colors: {
    background: {
      first: "#231e2e",
      second: "#352d45",
      third: "#4a3f61",
    },
    text: {
      primary: "#a88ee7",
      pageHeading: "#e3ddff",
      heading: "#9286ff",
      description: "#5f5c7c",
      label: "#9a88da",
    },
  },
  page: {
    padding: {
      lg: "200px",
    },
    margin: {
      listHeading: "25px",
      top: "40px",
    },
  },
  typography: {
    h1: {
      fontSize: "48px",
      fontWeight: 600,
      fontFamily: "'Open Sans', sans-serif",
    },
    h2: {
      fontSize: "18px",
      fontWeight: 600,
      fontFamily: "'Open Sans', sans-serif",
    },
    body1: {
      fontSize: "24px",
      fontWeight: 500,
      fontFamily: "'Open Sans', sans-serif",
    },
    body2: {
      fontSize: "20px",
      fontWeight: 500,
      fontFamily: "'Open Sans', sans-serif",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 500,
      fontFamily: "'Open Sans', sans-serif",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
      fontFamily: "'Open Sans', sans-serif",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 500,
      fontFamily: "'Open Sans', sans-serif",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        "::-webkit-scrollbar": {
          width: "0px",
          height: "0px",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#2c2539",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#5f5c7c",
          borderRadius: "12px",
        },
      }),
    },
  },
});
