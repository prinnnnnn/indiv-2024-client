"use client";

import React from "react";
import { useTheme } from "./ThemeContext";

const ToggleThemeBtn = () => {
    const { theme, palette, toggleTheme } =  useTheme();
    return (
        <div>
            <button
                className={`${palette.bg} ${palette.bgHover} ${palette.text} absolute top-5 right-5 rounded-full border z-10 
                 font-bold border-solid border-transparent transition-colors flex items-center justify-center
                 gap-2  hover:text-lg text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5`}
                onClick={() => toggleTheme()}
            >
                {theme}
            </button>
        </div>
    );
};

export default ToggleThemeBtn;
