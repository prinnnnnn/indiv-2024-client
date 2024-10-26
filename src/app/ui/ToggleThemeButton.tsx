"use client";

import React from "react";
import { useTheme } from "./ThemeContext";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const ToggleThemeButton = () => {
  const { theme, palette, toggleTheme } = useTheme();

  return (
    <div>
      <button
        style={{color: palette.primary}}
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? (
          <IoIosSunny
            className={`inline-block text-5xl`}
          />
        ) : (
          <IoIosMoon
            className={`inline-block text-5xl`}
          />
        )}
        {/* Toggle Theme */}
      </button>
    </div>
  );
};

export default ToggleThemeButton;
