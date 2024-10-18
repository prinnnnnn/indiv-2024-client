"use client"

import React from "react";
import SignUpForm from "./SignUpForm";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useTheme } from "../ui/ThemeContext";

const loginOptions = [
    {name: "Google", icon: <FaGoogle fontSize={20} /> },
    {name: "Facebook", icon: <FaFacebook fontSize={20} /> },
    {name: "Twitter", icon: <FaTwitter fontSize={20} /> },
]

const SignupPage = () => {

    const { palette } = useTheme();

    return (
        <div className="flex w-full md:w-5/6 h-screen justify-center items-center">
            <div className={`flex flex-col w-full md:w-6/12 justify-center ${palette.background}
            items-center gap-12 lg:border-2 border-gray-600 rounded-lg px-20 py-8 text-${palette.text}`}>
                {/* Headers */}
                <div className="flex flex-col items-center">
                    <h2>Create an account</h2>
                    <p>
                        Already have an account?{" "}
                        <a href="/login">
                            <u><b>Log In</b></u>
                        </a>
                    </p>
                </div>

                {/* Forms, submit button */}
                <div className="w-full">
                    <SignUpForm />
                </div>

                {/* Footer */}
                <footer className="w-full">
                    <b>OR Continue with</b>
                    <div className="flex flex-row mt-2 justify-between items-center">
                        {loginOptions.map(({ name, icon }) => (
                            <div key={name} className="flex flex-row justify-start items-center gap-3">
                                {icon}{" "}
                                <b>{name}</b>
                            </div>
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default SignupPage;
