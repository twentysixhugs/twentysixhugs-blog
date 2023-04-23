import { Theme } from "@mui/material";
import { createContext, useContext } from "react";

type DynamicThemeContextType = {
  updateTheme: (newTheme: Theme) => void;
};

export const DynamicThemeContext = createContext<DynamicThemeContextType>(
  {} as DynamicThemeContextType
);

export const useDynamicThemeContext = () => useContext(DynamicThemeContext);
