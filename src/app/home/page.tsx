"use client";

import React from "react";

import SideNav from "@/app/ui/SideNav";
import PostWidget from "./PostWidget";
import PostForm from "./PostForm";
import SearchBar from "./SearchBar";
import { useTheme } from "../ui/ThemeContext";
import ToggleThemeButton from "../ui/ToggleThemeButton";
import TrendsWidget from "./TrendsWidget";
import PeopleWidget from "./PeopleWidget";
import { useRouter } from "next/navigation";

const HomePage = () => {

    const router = useRouter();

    const { palette } = useTheme();

    return (
        <div className="flex flex-row justify-center w-full">
            <div className="absolute top-2 md:top-5 right-2 md:right-5">
                <ToggleThemeButton />
            </div>
            <div className="flex flex-row justify-evenly md:justify-between w-full md:w-10/12 gap-0 sm:gap-5 pt-10">
                {/* Navigation Bar */}
                <SideNav />

                {/* feeds, Form for create post, posts of the followers */}
                <div
                    className={`basis-5/6 md:basis-1/2 px-6 py-6 rounded-lg`}
                    style={{ background: palette.bgSecondary }}
                >
                    <div className="flex flex-col gap-3">
                        <SearchBar />
                        <PostForm />
                        {[1, 2].map(x => (
                            <PostWidget i={x} />
                        ))}
                    </div>
                </div>

                {/* Trending, who to follow  */}
                <div
                    className={`flex-grow hidden md:block rounded-lg px-6 py-6 h-fit`}
                    style={{ background: palette.bgSecondary }}
                >
                    <div className="flex flex-col gap-4">
                        <TrendsWidget />
                        <PeopleWidget />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
