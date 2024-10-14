import LoginForm from "@/app/ui/LoginForm";
import { TiGroup } from "react-icons/ti";

const LoginPage = () => {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto border-2 border-gray-600 rounded-lg flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end rounded-lg p-3">
                    <h1 className=" flex text-5xl font-extrabold">
                        PRIN
                        <span className="text-black bg-orange-500 rounded-xl px-2 me-2">
                            HUB
                        </span>{" "}
                        <TiGroup className="text-orange-500" />
                    </h1>
                </div>
                <h3>Please log in to continue.</h3>
                <div className="">
                    <LoginForm />
                </div>
                <p className="mt-2">
                    Doesn't have an account?{" "}
                    <a className="text-blue-500" href="/signup">
                        Sign up here
                    </a>
                </p>
            </div>
        </main>
    );
}

export default LoginPage;
