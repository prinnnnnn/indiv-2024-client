"use client"

import { createContext, useContext, useState } from "react";

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

export const useTheme = () => {
    return useContext(ThemeContext);
}

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

export const ThemeProvider = ({ children } : {
    children: React.ReactNode;
}) => {
    const [theme, setTheme] = useState("light");
    const [palette, setPalette] = useState(lightPalette);
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        setPalette(palette === lightPalette ? darkPalette : lightPalette);
    };

    return (
        <ThemeContext.Provider value={{ theme, palette, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
