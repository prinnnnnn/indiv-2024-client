"use client";

import { useTheme } from "@/app/ui/ThemeContext";
import ToggleThemeButton from "@/app/ui/ToggleThemeButton";
import PeopleWidget from "@/app/ui/PeopleWidget";

/* Components */
import SideNav from "@/app/ui/SideNav";
import TrendsWidget from "@/app/(trend)/TrendsWidget"
import SearchBar from "@/app/(search)/SearchBar";
import PostForm from "@/app/(post)/PostForm";
import PostWidget from "@/app/(post)/PostWidget";

/* State management */
import { observer, useObserver } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { HomeViewModel } from "./HomeViewModel";
import { useStore } from "@/stores/storeContext";

const HomePage = () => {

    const { palette } = useTheme();
    const store = useStore();
    const [viewModel, setViewModel] = useState<HomeViewModel | null>();

    useEffect(() => {
        setViewModel(new HomeViewModel({
            user: store!.getUserInfo,
            posts: store!.homeFeeds,
        }));
    }, [])

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
                        {viewModel && viewModel.homeFeeds && viewModel.homeFeeds.map(post => (
                            <PostWidget post={post} />
                        ))}
                        {viewModel && viewModel.homeFeeds && [1, 2, 3, 4, 5].map(() => <PostWidget post={viewModel.homeFeeds[0]} />)}
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
