import type { AppProps } from "next/app";
import "src/global.css";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

import { theme } from "src/appConfig";
import { DynamicThemeContext } from "src/appConfig/context";

import "highlight.js/styles/github-dark.css";

export default function App({ Component, pageProps }: AppProps) {
  const [themeState, setThemeState] = useState(() => theme);

  return (
    <DynamicThemeContext.Provider value={{ updateTheme: setThemeState }}>
      <ThemeProvider theme={themeState}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </DynamicThemeContext.Provider>
  );
}
