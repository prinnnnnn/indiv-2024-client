"use client";

import LoginForm from "@/app/login/LoginForm";
import { SiSnowflake } from "react-icons/si";
import { useTheme } from "../ui/ThemeContext";
import ToggleThemeButton from "../ui/ToggleThemeButton";

const LoginPage = () => {
  const { palette, theme } = useTheme();

  return (
    <main className="flex items-center justify-center h-screen md:h-screen">
      <div className="absolute top-5 right-5">
        <ToggleThemeButton />
      </div>
      <div className="relative mx-auto md:border-2 border-gray-600 rounded-lg flex w-full flex-col space-y-2.5 p-4 md:-mt-32 md:p-8 lg:p-10">
        <div className="flex h-20 w-full rounded-lg p-3 items-center gap-2">
          <SiSnowflake
            className={`text-${palette.primary} text-5xl ms-2 dark:ms-0`}
          />
          <h1 className=" flex text-5xl font-extrabold">
            PRIN
            {theme === "light" ? (
              <span className="me-9">NN</span>
            ) : (
              <span
                className={`text-black bg-${palette.primary} rounded-xl px-2 ms-1`}
              >
                HUB
              </span>
            )}
          </h1>
        </div>
        <h3>Please log in to continue.</h3>
        <div className="mb-2">
          <LoginForm />
        </div>
        <p className="mt-2">
          Doesn't have an account?{" "}
          <a className={`text-${palette.primary}`} href="/signup">
            <u>
              <b>Sign up here</b>
            </u>
          </a>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
