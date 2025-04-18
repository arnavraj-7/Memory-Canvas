import React from "react";



export const ThemeContext=React.createContext("dark");
export const useTheme=()=>React.useContext(ThemeContext);
export const ThemeProvider=ThemeContext.Provider;
