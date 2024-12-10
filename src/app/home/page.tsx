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
import React, { useCallback, useState } from "react";
import { HomeViewModel } from "./HomeViewModel";

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const HomePage = () => {
  const { palette, theme } = useTheme();
  const [viewModel] = useState<HomeViewModel>(() => new HomeViewModel());

  const sortedPosts = viewModel.posts
    ? viewModel.posts.slice().sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      })
    : [];

  const rowRenderer = ({ key, index, style }) => (
    <div style={style}>
      <PostWidget
        post={sortedPosts[index]}
        vm={viewModel}
        key={sortedPosts[index].id}
      />
    </div>
  );

  if (viewModel.isLoading) {
    return <b style={{ color: `${palette.accent}` }}>Loading...</b>;
  }

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
            <PostForm vm={viewModel} />


            {/* Posts */}
            {viewModel &&
              viewModel.homeFeeds &&
              sortedPosts
                .slice()
                .map((post) => (
                  <PostWidget post={post} vm={viewModel} key={post.id} />
                ))}

            {/* React Virtualized */}
            {/* <div style={{ width: "100%", height: "70vh" }}>
              <AutoSizer>
                {({ width, height }) => (
                  <List
                    width={width}
                    height={height}
                    itemSize={500}
                    itemCount={sortedPosts.length}
                  >
                    {rowRenderer}
                  </List>
                )}
              </AutoSizer>
            </div> */}
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
