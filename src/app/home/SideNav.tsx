"use client"

import { usePathname } from "next/navigation";
import React from "react";
import { SiSnowflake } from "react-icons/si";
import { useTheme } from "../ui/ThemeContext";
interface MenuItem {
    name: string;
    icon: JSX.Element;
}

interface SideNavProp {
    menus: MenuItem[];
}

const SideNav: React.FC<SideNavProp> = ({ menus }) => {

    const pathName = usePathname();
    const { palette } = useTheme();

    console.log(palette);

    return (
        <div className={`flex-grow ${palette.background} rounded-lg h-fit`}>
            <div className="flex flex-col px-4 pb-6 pt-2 items-start">
                <div className={`flex flex-row gap-2 items-center pt-3 text-${palette.primary}`}>
                {/* <div className={`flex flex-row gap-2 items-center pt-3 text-orange-500`}> */}
                    <SiSnowflake className={`text-5xl me-0`} />
                    <h2>
                        PRIN{""}
                        <span>NN</span>
                    </h2>
                </div>
                <div className={`${palette.bgSecondary} w-full mt-4 pl-3 py-4 flex flex-col gap-3 rounded-lg`}>
                    {menus.map(({ name, icon }) => {
                        let style = "flex flex-row items-center px-2 py-2 ";

                        if (
                            pathName.slice(1, pathName.length) ===
                            name.toLowerCase()
                        )
                            style += `text-${palette.primary}`;

                        // console.log(style);

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
    );
};

export default SideNav;
