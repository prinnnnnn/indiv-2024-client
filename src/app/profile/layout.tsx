"use client";

import PeopleWidget from "../(people)/PeopleWidget";
import SideNav from "../ui/SideNav";
import { useTheme } from "../ui/ThemeContext";
import ToggleThemeButton from "../ui/ToggleThemeButton";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { palette } = useTheme();
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
                    {children}
                </div>

                {/* Trending, who to follow  */}
                <div
                    className={`flex-grow hidden md:block rounded-lg px-6 py-6 h-fit`}
                    style={{ background: palette.bgSecondary }}
                >
                    <div className="flex flex-col gap-4">
                        <PeopleWidget />
                    </div>
                </div>
            </div>
        </div>
    );
}
