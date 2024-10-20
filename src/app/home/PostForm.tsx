import React from "react";
import { useTheme } from "../ui/ThemeContext";

const PostForm = () => {

    const { palette } = useTheme();

    return (
        <div className={`${palette.bgSecondary} w-full min-h-36 rounded-lg p-4 mb-5`}>
            What's on your mind?
        </div>
    );
};

export default PostForm;
