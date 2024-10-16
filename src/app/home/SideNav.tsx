import { usePathname } from "next/navigation";
import React from "react";
import { SiSnowflake } from "react-icons/si";
interface MenuItem {
    name: string;
    icon: JSX.Element;
}

interface SideNavProp {
    menus: MenuItem[];
}

const SideNav = ({ menus }: SideNavProp) => {
    const pathName = usePathname();

    return (
        <div className="flex-grow bg-[#DBE2EF] dark:bg-[#282828] rounded-lg h-fit">
            <div className="flex flex-col px-4 pb-6 pt-2 items-start">
                <div className="flex flex-row gap-2 items-center pt-3">
                    <SiSnowflake className="text-[#1DA1F2] dark:text-orange-500 text-5xl me-0" />
                    <h2>
                        PRIN{""}
                        <span className="dark:hidden">NN</span>
                        <span className="hidden dark:inline-block text-black bg-orange-500 rounded-xl px-2 ms-1">
                            HUB
                        </span>
                        {""}
                    </h2>
                </div>
                <div className="bg-white dark:bg-[#3e3e3e] w-full mt-4 pl-3 py-4 flex flex-col gap-3 rounded-lg">
                    {menus.map(({ name, icon }) => {
                        let style = "flex flex-row items-center px-2 py-2 ";

                        if (
                            pathName.slice(1, pathName.length) ===
                            name.toLowerCase()
                        )
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
    );
};

export default SideNav;
