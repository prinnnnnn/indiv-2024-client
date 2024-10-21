import React from "react";
import { useTheme } from "../ui/ThemeContext";

const TrendsWidget = () => {

    const { palette } = useTheme();

    return (
        <div className={`${palette.bgPrimary} w-full min-h-60 rounded-lg p-4`}>Trendings</div>
    );
};

export default TrendsWidget;
