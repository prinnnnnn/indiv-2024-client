import LoginForm from "@/app/login/LoginForm";
import { SiSnowflake } from "react-icons/si";
import { TiGroup } from "react-icons/ti";

const LoginPage = () => {
  return (
    <main className="flex items-center justify-center h-screen md:h-screen">
      <div className="relative mx-auto border-2 border-gray-600 rounded-lg flex w-full flex-col space-y-2.5 p-4 md:-mt-32 md:p-8 lg:p-10">
        <div className="flex h-20 w-full items-end rounded-lg p-3">
          <h1 className=" flex text-5xl font-extrabold">
            PRIN{""}
            <span className="dark:hidden">N</span>
            <span className="hidden dark:inline-block text-black bg-orange-500 rounded-xl px-2 ms-1 me-2">
              HUB
            </span>
            {""}
            <TiGroup className="hidden dark:inline-block text-orange-500" />
          </h1>
            <SiSnowflake className="text-[#1DA1F2] dark:hidden text-6xl ms-2 scale-75 my-auto" />
        </div>
        <h3>Please log in to continue.</h3>
        <div className="mb-2">
          <LoginForm />
        </div>
        <p className="mt-2">
          Doesn't have an account?{" "}
          <a className="text-[#1DA1F2]" href="/signup">
            Sign up here
          </a>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
