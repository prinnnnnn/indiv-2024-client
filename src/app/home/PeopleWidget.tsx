import React from "react";
import { useTheme } from "../ui/ThemeContext";

const PeopleWidget = () => {

    const { palette } = useTheme();

    return (
        <div className={`${palette.bgSecondary} w-full min-h-48 rounded-lg p-4`}>
            Who to follows
        </div>
    );
};

export default PeopleWidget;
