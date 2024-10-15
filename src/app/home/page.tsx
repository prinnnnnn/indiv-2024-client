"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { IoIosChatbubbles, IoMdNotifications } from "react-icons/io";

/* Icons for navs */
import { IoHome } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { SiSnowflake } from "react-icons/si";
import { TiGroup } from "react-icons/ti";

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

  const pathName = usePathname();

  return (
    <div className="flex flex-row justify-center w-full">
      <div className="flex flex-row justify-between w-10/12 gap-5 pt-10">
        {/* Icon and Sidenav */}
        <div className="flex-grow bg-[#DBE2EF] dark:bg-[#282828] rounded-lg h-fit">
          <div className="flex flex-col px-4 pb-6 pt-2 items-start">
            <div className="flex flex-row gap-4 items-center">
              <SiSnowflake className="text-[#1DA1F2] dark:text-orange-500 text-6xl me-0" />
              <h2>
                PRIN{""}
                <span className="dark:hidden">N</span>
                <span className="hidden dark:inline-block text-black bg-orange-500 rounded-xl px-2 ms-1">
                  HUB
                </span>
                {""}
              </h2>
            </div>
            <div className="bg-white dark:bg-[#3e3e3e] w-full mt-4 pl-3 py-4 flex flex-col gap-3 rounded-lg">
              {menus.map(({ name, icon }) => {
                let style = "flex flex-row items-center px-2 py-2 ";

                if (pathName.slice(1, pathName.length) === name.toLowerCase())
                  style += "text-[#1DA1F2] dark:text-orange-500";

                return (
                  <div className={style}>
                    {icon}
                    <p className="ml-2 text-lg">{name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* feeds, Form for create post, posts of the followers */}
        <div className="basis-1/2 bg-[#DBE2EF] dark:bg-[#282828] px-6 py-6 rounded-lg">
          <div className="flex flex-col gap-3">
            <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-12 rounded-lg p-4">Home</div>
            <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-36 rounded-lg p-4 mb-5">
              PostForm
            </div>
            {menus.map((_, i) => (
              <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-96 rounded-lg p-4 mb-2">
                {i + 1}th Post
              </div>
            ))}
          </div>
        </div>

        {/* Seach, Trending, who to follow  */}
        <div className="flex-grow bg-[#DBE2EF] dark:bg-[#282828] rounded-lg px-6 py-6 h-fit">
          <div className="flex flex-col gap-4">
            <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-4 rounded-lg p-4">Search</div>
            <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-60 rounded-lg p-4">
              Trendings
            </div>
            <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-48 rounded-lg p-4">
              Who to follows
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
