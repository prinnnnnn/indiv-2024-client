import React from "react";
import { useTheme } from "./ThemeContext";

const PeopleWidget = () => {

    const { palette } = useTheme();

    return (
        <div className={` w-full min-h-48 rounded-lg p-4`}
        style={{background: palette.bgPrimary}}>
            Who to follows
        </div>
    );
};

export default PeopleWidget;
