import Image from "next/image";
import { GrUserManager, GrUserWorker } from "react-icons/gr";
import { TiGroup } from "react-icons/ti";

const Home = () => {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col items-center gap-8 row-start-2 sm:items-start border-black border-2 rounded-3xl p-6 ">
                <h1 className="flex text-5xl font-extrabold">
                    MAI
                    <span className="text-black rounded-xl px-2 me-2">
                        AO
                    </span>{" "}
                    <TiGroup className="text-black" width={20} height={20}/>
                </h1>
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

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full border bg-[#112D4E] font-bold border-solid transition-colors
                         flex items-center justify-center bg-foreground text-background gap-2 
                        hover:bg-[#3F72AF] hover:text-lg text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-36"
                        href="/login"
                    >
                        Log In
                    </a>
                    <a
                        className="rounded-full border-2 border-solid border-[#c1dbf9] font-bold transition-colors flex items-center 
                                justify-center hover:bg-[#f2f2f2] dark:hover:bg-cyan-400 hover:text-lg hover:border-transparent
                                 hover:text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-36"
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
};

export default Home;
