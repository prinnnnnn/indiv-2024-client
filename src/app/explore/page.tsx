"use client";

import { useTheme } from "@/app/ui/ThemeContext";
import SearchBar from "../(search)/SearchBar";
import { useState } from "react";
import { ExploreViewModel } from "./ExploreViewModel";
import PostWidget from "../(post)/PostWidget";
import { observer } from "mobx-react-lite";

const DiscoveryPage = () => {
    const { palette } = useTheme();
    const [viewModel] = useState<ExploreViewModel>(new ExploreViewModel());

    return (
        <>
            <SearchBar />
            {/* <div
                className={`w-full min-h-96 rounded-lg p-4 mb-2 mt-3`}
                style={{ background: palette.bgPrimary }}
            > */}
                <div className="flex flex-col gap-3 mt-3">
                    {viewModel.posts &&
                        viewModel.posts
                            .slice()
                            .sort((a, b) => {
                                return (
                                    new Date(b.createdAt).getTime() -
                                    new Date(a.createdAt).getTime()
                                );
                            })
                            .map(post => (
                                <PostWidget
                                    key={post.id}
                                    post={post}
                                    vm={viewModel}
                                />
                            ))}
                </div>
            {/* </div> */}
        </>
    );
};

export default observer(DiscoveryPage);
