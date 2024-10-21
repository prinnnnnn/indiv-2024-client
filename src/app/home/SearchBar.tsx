import React from "react";
import { useTheme } from "../ui/ThemeContext";

const SearchBar = () => {

    const { palette } = useTheme();

    return (
        <div>
            <input
                className={`${palette.bgPrimary} focus:ring-[2px] focus:ring-${palette.primary}
                             focus:outline-none w-full min-h-12 rounded-lg p-4`}
                type="text"
                placeholder="Discover posts, users, or topics..."
            />
        </div>
    );
};

export default SearchBar;
