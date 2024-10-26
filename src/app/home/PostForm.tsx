import React from "react";
import { useTheme } from "../ui/ThemeContext";

const PostForm = () => {

    const { palette } = useTheme();

    return (
        <div className={`w-full min-h-36 rounded-lg p-4 mb-5`}
        style={{background: palette.bgPrimary}}>
            What's on your mind?
        </div>
    );
};

export default PostForm;
