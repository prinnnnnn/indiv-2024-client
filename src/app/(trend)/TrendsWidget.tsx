import React from "react";
import { useTheme } from "../ui/ThemeContext";

const trends = [
    { word: "ComSysArch", numTweets: Math.floor(Math.random() * 100) },
    { word: "CEM2", numTweets: Math.floor(Math.random() * 100) },
    { word: "DBSys", numTweets: Math.floor(Math.random() * 100) },
    { word: "SE1", numTweets: Math.floor(Math.random() * 100) },
];

const TrendsWidget = () => {
    const { palette } = useTheme();

    return (
        <div
            className={` w-full min-h-60 rounded-lg p-4`}
            style={{ background: palette.bgPrimary }}
        >
            <h3 style={{ color: palette.primary }}>Trendings</h3>

            <hr className="mt-1" />
            <div className="flex flex-col pr-5 py-2 justify-around gap-3">
                {trends.map(trend => (
                    <div className="flex flex-col">
                        <b>#{trend.word}</b>
                        <p>{trend.numTweets} posts</p>
                        <hr className="mt-1" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendsWidget;
