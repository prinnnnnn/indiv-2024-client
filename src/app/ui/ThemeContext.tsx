"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeType = {
    theme: "light" | "dark";
    palette: Palette;
    toggleTheme: () => void;
};

type Palette = {
    text: string;
    primary: string;
    secondary: string;
    bgPrimary: string;
    bgSecondary: string;
    accent: string;
    link: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    bgHover: string;
    white: "#FFFFFF";
    black: "#000000"; 
    hovarble: string;
};

/* @ts-ignore */
const ThemeContext = createContext<ThemeType>(null);

export const useTheme = () => {
    return useContext(ThemeContext);
};

const lightPalette: Palette = {
    text: "#000000",
    primary: "#2fadfc",
    secondary: "#32a5fd",
    bgPrimary: "#ffffff",
    bgSecondary: "#DBE2EF",
    accent: "#222D4E",
    link: "#3F72AF",
    border: "#0F4C75",
    success: "#21BF73",
    warning: "#F07B3F",
    error: "#FF0000",
    bgHover: "#72beee",
    white: "#FFFFFF",
    black: "#000000",
    hovarble: "hover:bg-[72beee]"
};

const darkPalette: Palette = {
    text: "#FFFFFF",
    primary: "#ff7525",
    secondary: "#FF8F00",
    bgPrimary: "#3e3e3e",
    bgSecondary: "#282828",
    accent: "#696969",
    link: "#3F72AF",
    border: "#0F4C75",
    success: "#06D001",
    warning: "#FF6600",
    error: "#DA1212",
    bgHover: "#ffb76f",
    white: "#FFFFFF",
    black: "#000000",
    hovarble: "hover:bg-[ffb76f]"
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [palette, setPalette] = useState<Palette>(lightPalette);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            if (storedTheme === "light") {
                setTheme(storedTheme);
                setPalette(lightPalette);
                document.documentElement.style.setProperty(
                    "--background",
                    "#ffffff"
                );
                document.documentElement.style.setProperty(
                    "--foreground",
                    "#171717"
                );
            } else {
                setTheme("dark");
                setPalette(darkPalette);
                document.documentElement.style.setProperty(
                    "--background",
                    "#171717"
                );
                document.documentElement.style.setProperty(
                    "--foreground",
                    "#ffffff"
                );
            }
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, palette, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
