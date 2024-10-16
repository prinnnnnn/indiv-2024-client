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

        <SideNav menus={menus} />

        {/* feeds, Form for create post, posts of the followers */}
        <div className="basis-1/2 bg-[#DBE2EF] dark:bg-[#282828] px-6 py-6 rounded-lg">
          <div className="flex flex-col gap-3">
            <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-12 rounded-lg p-4">Home</div>
            <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-36 rounded-lg p-4 mb-5">
              PostForm
            </div>
            {[1,2,3,4,5,6].map((_, i) => (
              <PostWidget i={_}/>
            ))}
          </div>
        </div>

        {/* Seach, Trending, who to follow  */}
        <SideBar/>


      </div>
    </div>
  );
};

export default HomePage;
