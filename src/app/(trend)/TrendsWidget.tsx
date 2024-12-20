import React from "react";
import { useTheme } from "../ui/ThemeContext";

const trends = [
    { word: "ArneSlot", numTweets: Math.floor(Math.random() * 100000) },
    { word: "KingTrump", numTweets: Math.floor(Math.random() * 10000) },
    { word: "KlongZuperLeague", numTweets: Math.floor(Math.random() * 1000) },
    { word: "PiromsopaGang", numTweets: Math.floor(Math.random() * 100) },
];

const TrendsWidget = () => {
    const { palette } = useTheme();

    return (
        <div
            className={` w-full min-h-60 rounded-lg p-4`}
            style={{ 
                background: palette.bgPrimary,
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
        >
            <h3 style={{ color: palette.primary }}>Trendings</h3>

            <hr className="mt-1" />
            <div className="flex flex-col pr-5 py-2 justify-around gap-3">
                {trends.map(trend => (
                    <div className="flex flex-col" key={trend.word}>
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

// box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;