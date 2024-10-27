"use client";

import React from "react";
import SignUpForm from "./SignUpForm";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useTheme } from "../ui/ThemeContext";
import ToggleThemeButton from "../ui/ToggleThemeButton";

const loginOptions = [
  { name: "Google", icon: <FaGoogle fontSize={20} /> },
  { name: "Facebook", icon: <FaFacebook fontSize={20} /> },
  { name: "Twitter", icon: <FaTwitter fontSize={20} /> },
];

const SignupPage = () => {
  const { palette } = useTheme();

  return (
    <div className="flex w-full md:w-5/6 h-screen justify-center items-center">
      <div className="absolute top-2 md:top-5 right-5">
        <ToggleThemeButton />
      </div>
      <div
        className={`flex flex-col w-full md:w-6/12 justify-center bg-transparent
            items-center gap-12 lg:border-2 border-gray-600 rounded-lg px-20 py-8`}
        style={{color: palette.text}}
      >
        {/* Headers */}
        <div className="flex flex-col items-center text-center">
          <h2 className="my-3">Create an account</h2>
          <p>
            Already have an account?{" "}
            <a href="/login" style={{color:palette.secondary}}>
              <br className="sm:hidden" />
              <u>
                <b>Log In</b>
              </u>
            </a>
          </p>
        </div>

        {/* Forms, submit button */}
        <div className="w-full">
          <SignUpForm />
        </div>

        {/* Footer */}
        <footer className="w-full text-center">
          <b>OR Continue with</b>
          <div className="flex flex-col sm:flex-row mt-2 justify-between items-center">
            {loginOptions.map(({ name, icon }) => (
              <div
                key={name}
                className="flex flex-row justify-start items-center gap-3 my-3"
              >
                {icon} <b>{name}</b>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SignupPage;
