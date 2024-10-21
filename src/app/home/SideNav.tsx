"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { SiSnowflake } from "react-icons/si";
import { useTheme } from "../ui/ThemeContext";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { logout } from "@/service/authServices";

interface MenuItem {
  name: string;
  icon: JSX.Element;
}

interface SideNavProp {
  menus: MenuItem[];
}

const SideNav: React.FC<SideNavProp> = ({ menus }) => {
  const pathName = usePathname();
  const { theme, palette } = useTheme();

  const router = useRouter();

  const clientLogOut = () => {
    try {
      logout();
      // alert('loggin out')
      router.push("/login");
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  console.log(palette);

  return (
    <div className={`flex-grow-0 md:flex-grow ${palette.bgSecondary} rounded-lg h-fit`}>
      <div className="flex flex-col px-4 pb-6 pt-2 items-start">
        <div
          // text-[#1DA1F2]
          className={`flex flex-row gap-2 items-center mx-auto md:mx-0 pt-3 text-${palette.primary}  `}
        >
          {/* <div className={`flex flex-row gap-2 items-center pt-3 text-orange-500`}> */}
          <SiSnowflake className={`text-5xl me-0`} />
          <div className="hidden md:block">
            <h2 className={theme === "light" ? "text-black" : "text-white"}>
              PRIN{""}
              {theme === "light" ? (
                <span className="me-9">NN</span>
              ) : (
                <span
                  className={`text-black bg-${palette.primary} rounded-xl px-2 ms-1`}
                >
                  HUB
                </span>
              )}
            </h2>
          </div>
        </div>
        <div
          className={`${palette.bgPrimary} w-full mt-4 px-3 py-4 flex flex-col gap-3 rounded-lg`}
        >
          {menus.map(({ name, icon }) => {
            let style = "flex flex-row items-center px-2 py-2 ";

            if (pathName.slice(1, pathName.length) === name.toLowerCase())
              style += `text-${palette.primary}`;

            // console.log(style);

            return (
              <div className={style}>
                {icon}
                <p className="hidden md:block ml-2 text-lg">{name}</p>
              </div>
            );
          })}
          <button
            className={`flex flex-row items-center px-2 py-2`}
            onClick={clientLogOut}
          >
            <RiLogoutCircleRLine className="text-xl" />
            <p className="hidden md:block ml-2 text-lg">Log Out</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
