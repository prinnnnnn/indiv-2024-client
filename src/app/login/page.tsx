import LoginForm from "@/app/login/LoginForm";
import { SiSnowflake } from "react-icons/si";


const LoginPage = () => {

  return (
    <main className="flex items-center justify-center h-screen md:h-screen">
      <div className="relative mx-auto md:border-2 border-gray-600 rounded-lg flex w-full flex-col space-y-2.5 p-4 md:-mt-32 md:p-8 lg:p-10">
        <div className="flex h-20 w-full rounded-lg p-3 items-center gap-2">
            <SiSnowflake className="text-[#1DA1F2] dark:text-orange-500 text-5xl ms-2 dark:ms-0" />
          <h1 className=" flex text-5xl font-extrabold">
            PRIN{""}
            <span className="dark:hidden">NN</span>
            <span className="hidden dark:inline-block text-black bg-orange-500 rounded-xl px-2 ms-1 me-2">
              HUB
            </span>
            {""}
          </h1>
        </div>
        <h3>Please log in to continue.</h3>
        <div className="mb-2">
          <LoginForm />
        </div>
        <p className="mt-2">
          Doesn't have an account?{" "}
          <a className="text-[#1DA1F2] dark:text-orange-400" href="/signup">
            Sign up here
          </a>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
