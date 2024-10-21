"use client";
import "../ui/FormInput.css";
import { login } from "@/service/authServices";
import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useTheme } from "../ui/ThemeContext";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isPending, setIsPending] = useState(false);
    const { palette } = useTheme();

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
            const result = login({ email, password });
            if (result) {
                setErrorMessage(result);
            } else {
                console.log("Login successful");
            }
        } catch (error: any) {
            setErrorMessage("An unexpected error occurred.");
        } finally {
            setIsPending(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3 w-full">
            {/* <ToggleThemeBtn /> */}
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className={`block py-2.5 px-0 w-full text-sm text-${palette.text} bg-transparent 
                    border-0 border-b-2 border-${palette.text} appearance-none
                     focus:border-${palette.primary} focus:outline-none focus:ring-0 focus:border-${palette.primary} peer`}
                    placeholder=" "
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label
                    htmlFor="floating_email"
                    className={`peer-focus:font-medium absolute text-sm text-${palette.text} duration-300 transform \
                     -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                      peer-focus:text-${palette.primary} peer-placeholder-shown:scale-100
                       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                >
                    Email address
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                            appearance-none text-${palette.text} focus:outline-none border-${palette.text}
                                focus:ring-0 focus:border-${palette.primary} peer`}
                    placeholder=" "
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <label
                    htmlFor="floating_password"
                    className={`peer-focus:font-medium absolute text-sm text-${palette.text} duration-300 transform
                     -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                      peer-focus:text-${palette.primary} peer-placeholder-shown:scale-100
                       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
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
                        className={`w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-${palette.primary}`}
                        required
                    />
                </div>
                <label
                    htmlFor="remember"
                    className={`ms-2 text-sm font-medium ${palette.accent}`}
                >
                    terms and conditions
                </label>
            </div>
            <div className="">
                <button
                    aria-disabled={isPending}
                    type="submit"
                    className={`mx-auto mt-5 rounded-lg border border-solid border-black/[.08]
                     dark:border-white/[.145] transition-colors flex items-center justify-center
                      bg-${palette.primary} text-${palette.white} ${palette.bgHover} hover:text-lg hover:border-transparent
                       text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5 sm:min-w-44`}
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
