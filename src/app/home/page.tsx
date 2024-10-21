"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { IoIosChatbubbles, IoMdNotifications } from "react-icons/io";

/* Icons for navs */
import { IoHome } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import SideNav from "./SideNav";
import PostWidget from "./PostWidget";
import PostForm from "./PostForm";
import SearchBar from "./SearchBar";
import { useTheme } from "../ui/ThemeContext";
import ToggleThemeButton from "../ui/ToggleThemeButton";
import TrendsWidget from "./TrendsWidget";
import PeopleWidget from "./PeopleWidget";
import { RiLogoutCircleRLine } from "react-icons/ri";

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

  const { palette } = useTheme();

  return (
    <div className="flex flex-row justify-center w-full">
      <div className="absolute top-2 md:top-5 right-2 md:right-5">
        <ToggleThemeButton/>
      </div>
      <div className="flex flex-row justify-evenly md:justify-between w-full md:w-10/12 gap-0 sm:gap-5 pt-10">
        {/* Navigation Bar */}
        <SideNav menus={menus} />

        {/* feeds, Form for create post, posts of the followers */}
        <div
          className={`basis-5/6 md:basis-1/2 ${palette.bgSecondary} px-6 py-6 rounded-lg`}
        >
          <div className="flex flex-col gap-3">
            <SearchBar />
            <PostForm />
            {[1, 2].map((x) => (
              <PostWidget i={x} />
            ))}
          </div>
        </div>

        {/* Trending, who to follow  */}
        <div
          className={`flex-grow ${palette.bgSecondary} hidden md:block rounded-lg px-6 py-6 h-fit`}
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
