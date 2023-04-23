import type { AppProps } from "next/app";
import "src/global.css";
import { Layout } from "@containers";
import { ThemeProvider } from "@mui/material";
import { theme } from "@app";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { DynamicThemeContext } from "@context";

export default function App({ Component, pageProps }: AppProps) {
  const [themeState, setThemeState] = useState(() => theme);

  return (
    <DynamicThemeContext.Provider value={{ updateTheme: setThemeState }}>
      <ThemeProvider theme={themeState}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </DynamicThemeContext.Provider>
  );
}
