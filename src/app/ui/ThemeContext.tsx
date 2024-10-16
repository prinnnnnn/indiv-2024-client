import { createContext, useState } from "react";


type ThemeType = {
  theme: string;
  palette: Palette;
  toggleTheme: () => void;
};

type Palette = {
  text: string;
  bg: string;
  bgHover: string;
};

const ThemeContext = createContext<ThemeType>({
  theme: "",
  palette: { text: "", bg: "", bgHover: "" },
  toggleTheme: () => {},
});

const darkPalette: Palette = {
  text: "text-white",
  bg: "bg-[#282828]",
  bgHover: "hover:bg-[#3e3e3e]",
};

const lightPalette: Palette = {
  text: "text-black",
  bg: "bg-[#1DA1F2]",
  bgHover: "hover:bg-blue-300",
};

// @ts-ignore
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [palette, setPalette] = useState(
    lightPalette
  );
  const toggleTheme = () => {
    console.log('toggle theme');
    
    setTheme(theme === "light" ? "dark" : "light");
    setPalette(palette === lightPalette ? darkPalette : lightPalette);
  };

  return (
    <ThemeContext.Provider value={{ theme, palette, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
