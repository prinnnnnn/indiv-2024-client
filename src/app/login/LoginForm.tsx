"use client";

import "../ui/FormInput.css";
import { login } from "@/service/authServices";
import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import "../ui/hoverable.css";
import { useTheme } from "../ui/ThemeContext";
import { useRouter } from "next/navigation";
import { useStore } from "@/stores/storeContext";
import { fetchAllPosts } from "@/service/postServices";
import { Post } from "@/common/model";
import { fetchFollowings } from "@/service/userServices";
// import { useObserver } from "mobx-react-lite";

const LoginForm = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isPending, setIsPending] = useState(false);
    const { palette } = useTheme();

    const router = useRouter();
    const store = useStore();
    
    // console.log(palette);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);
        setErrorMessage("");

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("remember", rememberMe.toString());

        try {

            const { user } = await login({ email, password });
            // console.log(`Response from LoginForm...`);
            // console.log(user);
            // store!.login(user);
            // console.log("Login successful");
            /* TODO
            1. fetch all followers' posts
            2. fetch all followings ids
            3. fetch all liked posts's ids
            */

            /* followers' posts */
            // const posts = await fetchAllPosts() as Post[];
            // store!.setFeeds(posts)

            /* followings' id */
            // const followings = await fetchFollowings(user.id);
            router.push("/home");

        } catch (error: any) {
            setErrorMessage("An unexpected error occurred.");
        } finally {
            setIsPending(false);
        }

    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3 w-full">
            {/* <ToggleThemeBtn /> */}
            <div className={`relative z-0 w-full mb-5 group `}>
                <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className={`input-peer block py-2.5 px-0 w-full text-sm bg-transparent 
                    border-0 border-b-2 appearance-none
                    focus:outline-none focus:ring-0 peer`}
                    style={
                        {
                            "--primary-color": palette.primary,
                            color: palette.text,
                            "--autofill-text-color" :palette.text
                        } as any
                    }
                    placeholder=" "
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label
                    htmlFor="floating_email"
                    className={`label-peer
                      peer-focus:font-medium absolute text-sm duration-300 transform
                     -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                      peer-placeholder-shown:scale-100
                      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    style={{ "--primary-color": palette.primary } as any}
                >
                    Email address
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className={`input-peer block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                            appearance-none  focus:outline-none 
                            focus:ring-0 peer`}
                    style={
                        {
                            "--primary-color": palette.primary,
                            color: palette.text,
                            "--autofill-text-color" :palette.text
                        } as any
                    }
                    placeholder=" "
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <label
                    htmlFor="floating_password"
                    className={`label-peer peer-focus:font-medium absolute text-sm duration-300 transform
                     -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                       peer-placeholder-shown:scale-100
                       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    style={{ "--primary-color": palette.primary } as any}
                >
                    Password
                </label>
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        checked={rememberMe}
                        onChange={e => setRememberMe(e.target.checked)}
                        className={`w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[${palette.primary}]`}
                    />
                </div>
                <label
                    htmlFor="remember"
                    className={`ms-2 text-sm font-medium`}
                    style={{ color: palette.secondary }}
                >
                    Remember me
                </label>
            </div>
            <div className="">
                <button
                    aria-disabled={isPending}
                    type="submit"
                    className={`hoverable mx-auto mt-5 rounded-lg border border-solid border-black/[.08]
                    dark:border-white/[.145] transition-colors flex items-center justify-center
                        hover:text-lg hover:border-transparent
                        text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5 sm:min-w-44`}
                    style={
                        {
                            "--bg-color": palette.primary,
                            "--bg-hover": palette.bgHover,
                        } as any
                    }
                >
                    <b>{isPending ? "Submitting..." : "Login"}</b>
                </button>
            </div>
            {errorMessage && (
                <div className="mt-2 text-red-500 flex items-center">
                    <AiOutlineExclamationCircle className="mr-2" />
                    <span>{errorMessage}</span>
                </div>
            )}
        </form>
    );
};

export default LoginForm;
