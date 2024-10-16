"use client"

import Image from "next/image";
import { GrUserManager, GrUserWorker } from "react-icons/gr";
import { SiSnowflake } from "react-icons/si";
import ToggleThemeBtn from "./ui/ToggleThemeBtn";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-sf-display-regular)]">
            <ToggleThemeBtn />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="flex items-center gap-3">
                    <SiSnowflake className="text-[#1DA1F2] dark:text-orange-500 text-5xl dark:ms-0 my-auto" />
                    <h1 className=" flex text-5xl font-extrabold">
                        PRIN{""}
                        <span>NN</span>
                        {/* <span className="hidden dark:inline-block text-black bg-orange-500 rounded-xl px-2 ms-1 me-2">
                            HUB
                        </span> */}
                        {""}
                    </h1>
                </div>
                <ul className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">Indiv 2024/1 By </li>
                    <li className="mb-2 flex">
                        <GrUserManager className="me-2" /> Parinthorn
                        Pornchaiwiwat
                    </li>
                    <li className="flex">
                        <GrUserWorker className="me-2" />
                        Kanisorn Puttaruksa
                    </li>
                </ul>

                <div className="flex flex-row w-full gap-4 justify-around items-center sm:flex-row mx-auto px-2">
                    <a
                        className="rounded-full border bg-[#1DA1F2] dark:bg-orange-500
                                    font-bold border-solid border-transparent transition-colors 
                                    flex items-center justify-center bg-foreground text-background 
                                    gap-2 hover:bg-blue-300 hover:text-lg dark:hover:bg-orange-300
                                     text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5 md:w-1/2"
                        href="/login"
                    >
                        Log In
                    </a>
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145]
                         transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]
                          hover:text-lg hover:border-transparent text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5 sm:min-w-[80] md:w-1/2"
                        href="/signup"
                    >
                        Register
                    </a>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}
