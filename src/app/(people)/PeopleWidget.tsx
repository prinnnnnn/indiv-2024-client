import React from "react";
import { useTheme } from "../ui/ThemeContext";

const PeopleWidget = () => {
    const { palette } = useTheme();

    return (
        <div
            className={` w-full min-h-48 rounded-lg p-4`}
            style={{ background: palette.bgPrimary }}
        >
            <h3>Who to follows</h3>
        </div>
    );
};

export default PeopleWidget;
