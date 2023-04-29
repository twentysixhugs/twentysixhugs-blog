import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 1050,
      md: 1300,
      lg: 1600,
      xl: 1920,
    },
  },
  colors: {
    background: {
      first: "#13111a",
      second: "#211c2b",
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
      md: "100px",
      sm: "30px",
      xs: "20px",
    },
    margin: {
      listHeading: "30px",
      top: "60px",
      topMobile: "40px",
    },
  },
  typography: {
    h1: {
      fontSize: "48px",
      fontWeight: 600,
      fontFamily: "'Open Sans', sans-serif",
    },
    h2: {
      fontSize: "24px",
      fontWeight: 600,
      fontFamily: "'Open Sans', sans-serif",
    },
    h3: {
      fontSize: "22px",
      fontWeight: 600,
      fontFamily: "'Open Sans', sans-serif",
    },
    h4: {
      fontSize: "20px",
      fontWeight: 600,
      fontFamily: "'Open Sans', sans-serif",
    },
    h5: {
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
      fontSize: "18px",
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
      styleOverrides: (theme) => ({
        "::-webkit-scrollbar": {
          width: "10px",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#2c2539",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#5f5c7c",
          borderRadius: "12px",
        },
        body: {
          background: `linear-gradient(180deg, ${theme.colors.background.first} 0%, ${theme.colors.background.second} 100%)`,
        },
      }),
    },
  },
});
