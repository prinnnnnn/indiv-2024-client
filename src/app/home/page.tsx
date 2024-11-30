"use client";

import { useTheme } from "@/app/ui/ThemeContext";
import ToggleThemeButton from "@/app/ui/ToggleThemeButton";
import PeopleWidget from "@/app/(people)/PeopleWidget";

/* Components */
import SideNav from "@/app/ui/SideNav";
import TrendsWidget from "@/app/(trend)/TrendsWidget";
import SearchBar from "@/app/(search)/SearchBar";
import PostForm from "@/app/(post)/PostForm";
import PostWidget from "@/app/(post)/PostWidget";

/* State management */
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { HomeViewModel } from "./HomeViewModel";

const HomePage = () => {

    const { palette } = useTheme();
    const [viewModel] = useState<HomeViewModel>(() => new HomeViewModel());

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
                        <PostForm vm={viewModel}/>
                        {viewModel &&
                            viewModel.homeFeeds &&
                            viewModel.homeFeeds
                                .slice()
                                .sort((a, b) => {
                                    return (
                                        new Date(b.createdAt).getTime() -
                                        new Date(a.createdAt).getTime()
                                    );
                                })
                                .map(post => <PostWidget post={post} vm={viewModel} key={post.id} />)}
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

export default observer(HomePage);