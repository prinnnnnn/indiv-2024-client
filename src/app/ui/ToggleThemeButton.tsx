"use client";

import React from "react";
import { useTheme } from "./ThemeContext";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const ToggleThemeButton = () => {
  const { theme, palette, toggleTheme } = useTheme();

  return (
    <div>
      <button
        className={`text-${palette.primary}`}
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? (
          <IoIosSunny
            // fontSize={size}
            className={`inline-block text-${palette.primary} text-5xl`}
          />
        ) : (
          <IoIosMoon
            // fontSize={size}
            className={`inline-block text-${palette.primary} text-5xl`}
          />
        )}
        {/* Toggle Theme */}
      </button>
    </div>
  );
};

export default ToggleThemeButton;
