import React from "react";
import { useTheme } from "../ui/ThemeContext";

const SearchBar = () => {

    const { palette } = useTheme();

    return (
        <div className="flex">
            <input
                className={`${palette.bgSecondary} focus:ring-2 focus:ring-[#1DA1F2] w-full min-h-12 rounded-lg p-4`}
                type="text"
                placeholder="Discover posts, users, or topics..."
            />
            {/* <FaSearch /> */}
        </div>
    );
};

export default SearchBar;
