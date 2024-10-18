"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { IoIosChatbubbles, IoMdNotifications } from "react-icons/io";

/* Icons for navs */
import { IoHome } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import SideNav from "./SideNav";
import SideBar from "./SideBar";
import PostWidget from "./PostWidget";
import PostForm from "./PostForm";
import SearchBar from "./SearchBar";
import { useTheme } from "../ui/ThemeContext";
import ToggleThemeBtn from "../ui/ToggleThemeBtn";
import TrendsWidget from "./TrendsWidget";
import PeopleWidget from "./PeopleWidget";

const HomePage = () => {
    const menus = [
        {
            name: "Home",
            icon: <IoHome className="text-xl" />,
        },
        {
            name: "Explore",
            icon: <MdExplore className="text-xl" />,
        },
        {
            name: "Notification",
            icon: <IoMdNotifications className="text-xl" />,
        },
        {
            name: "Chat",
            icon: <IoIosChatbubbles className="text-xl" />,
        },
        {
            name: "Profile",
            icon: <CgProfile className="text-xl" />,
        },
        {
            name: "More",
            icon: <CgMoreO className="text-xl" />,
        },
    ];

    const { theme, palette, toggleTheme } = useTheme();

    return (
        <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-between w-10/12 gap-5 pt-10">
                {/* Navigation Bar */}
                <SideNav menus={menus} />

                {/* feeds, Form for create post, posts of the followers */}
                <div
                    className={`basis-1/2 ${palette.background} px-6 py-6 rounded-lg`}
                >
                    <div className="flex flex-col gap-3">
                        <SearchBar />
                        <PostForm />
                        {[1, 2].map(x => (
                            <PostWidget i={x} />
                        ))}
                    </div>
                </div>

                {/* Seach, Trending, who to follow  */}
                <div className={`flex-grow ${palette.background} rounded-lg px-6 py-6 h-fit`}>
                    <div className="flex flex-col gap-4">
                        <div className="flex">
                            <ToggleThemeBtn />
                        </div>
                        <TrendsWidget />
                        <PeopleWidget />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
