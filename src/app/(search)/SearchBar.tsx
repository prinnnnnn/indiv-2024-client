'use client'

import React, { useState } from "react";
import { useTheme } from "../ui/ThemeContext";

const SearchBar = () => {
  const { palette } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <input
        className={`shadow-none focus:shadow-sm focus:outline-none w-full min-h-12 rounded-lg p-4`}
        style={{
          background: palette.bgPrimary,
          boxShadow: isFocused ? `0 0 0 2px ${palette.secondary}` : 'none',
          transition: 'box-shadow 0.2s ease', // optional transition for smooth effect
      }}
        type="text"
        placeholder="Discover posts, users, or topics..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchBar;
