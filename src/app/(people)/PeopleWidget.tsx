import React, { useEffect } from "react";
import { useTheme } from "../ui/ThemeContext";
import Image from "next/image";
import defaultProfile from "@/public/assets/default-profile.jpg";

const SuggestionCard = ({
    name = "Leo Messi",
    bio = "The best player in the world",
}) => {
    return (
        <div className="flex flex-row">
            <div className="relative w-[40px] h-[40px]">
                <Image
                    src={defaultProfile}
                    alt="Profile img"
                    layout="fill"
                    className="object-cover rounded-full mt-[0.3rem]"
                />
            </div>
            <div className="px-2 flex flex-col flex-grow">
                <b>{name}</b>
                <p>{bio}</p>
            </div>
        </div>
    );
};

const mockUsers = [
    { name: "Leo Messi", bio: "The best player in " },
    { name: "u2", bio: "bio2" },
    { name: "u3", bio: "bio3" },
    { name: "u4", bio: "bio4" },
    { name: "u5", bio: "bio5" },
];

const PeopleWidget = () => {
    const { palette } = useTheme();

    // useEffect

    return (
        <div
            className={` w-full min-h-48 rounded-lg p-4 flex flex-col gap-1`}
            style={{
                background: palette.bgPrimary,
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
        >
            <h3 style={{ color: palette.primary }}>Who to follows</h3>
    
            <div className="mt-3 flex flex-col justify-around gap-3">
                {mockUsers.map(user => (
                    <SuggestionCard name={user.name} bio={user.bio} />
                ))}
            </div>
        </div>
    );
};

export default PeopleWidget;
