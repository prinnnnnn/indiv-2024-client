"use client";

import { createContext, useContext, useState } from "react";

type ThemeType = {
    theme: "light" | "dark";
    palette: Palette;
    toggleTheme: () => void;
};

type Palette = {
    text: string;
    primary: string;
    secondary: string;
    background: string;
    bgSecondary: string;
    accent: string;
    link: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    bgHover: string;
};

const ThemeContext = createContext<ThemeType>({
    theme: "light",
    palette: {
        text: "",
        primary: "",
        secondary: "",
        background: "",
        bgSecondary: "",
        accent: "",
        link: "",
        border: "",
        success: "",
        warning: "",
        error: "",
        bgHover: "",
    },
    toggleTheme: () => {},
});

export const useTheme = () => {
    return useContext(ThemeContext);
};

const lightPalette: Palette = {
    text: "text-black",
    primary: "[#1DA1F2]",
    secondary: "[#E3FDFD]",
    background: "bg-[#DBE2EF]",
    bgSecondary: "bg-white",
    accent: "[#112D4E]",
    link: "[#3F72AF]",
    border: "[#0F4C75]",
    success: "[#21BF73]",
    warning: "[#F07B3F]",
    error: "[#FF0000]",
    bgHover: "hover:bg-blue-300",
};

const darkPalette: Palette = {
    text: "text-black",
    primary: "orange-500",
    secondary: "[#FF8F00]",
    background: "bg-[#282828]",
    bgSecondary: "bg-[#3e3e3e]",
    accent: "[#F94C10]",
    link: "[#3F72AF]",
    border: "[#0F4C75]",
    success: "[#06D001]",
    warning: "[#FF6600]",
    error: "[#DA1212]",
    bgHover: "hover:bg-orange-300",
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [palette, setPalette] = useState<Palette>(lightPalette);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        setPalette(theme === "light" ? darkPalette : lightPalette);

        if (theme === "light") {
            document.documentElement.style.setProperty('--background', "#171717");
            document.documentElement.style.setProperty('--foreground', "#ffffff");
        } else {
            document.documentElement.style.setProperty('--background', "#ffffff");
            document.documentElement.style.setProperty('--foreground', "#171717");
        }
        
    };

    return (
        <ThemeContext.Provider value={{ theme, palette, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
