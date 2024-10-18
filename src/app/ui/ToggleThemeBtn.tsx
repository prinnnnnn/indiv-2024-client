"use client";

import React from "react";
import { useTheme } from "./ThemeContext";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const ToggleThemeBtn = () => {

    const { theme, palette, toggleTheme } =  useTheme();

    return (
        <div>
            <button
                className={``}
                onClick={() => toggleTheme()}
            >
                {theme === "light" ? (
                    <IoIosSunny fontSize={40} className="inline-block" color="black"/>    
                ) : (
                    <IoIosMoon fontSize={40} className="inline-block" color="white"/>
                )}
            </button>
        </div>
    );
};

export default ToggleThemeBtn;
