import React from "react";
import SignUpForm from "./SignUpForm";

const SignupPage = () => {
    return (
        <div className="flex w-full md:w-5/6 h-screen justify-center items-center">
            <div className="flex flex-col w-full md:w-8/12 justify-center items-center gap-12 lg:border-2 border-gray-600 rounded-lg px-5 py-8">
                {/* Headers */}
                <div className="flex flex-col items-center">
                    <h2>Create an account</h2>
                    <p>
                        Already have an account?{" "}
                        <a href="/login">
                            <u>Log In</u>
                        </a>
                    </p>
                </div>
                {/* Forms, submit button */}
                <div className="">
                    <SignUpForm />
                </div>
                {/* Footer */}
                {/* <footer>
                    OR Continue with
                    <div className="flex flex-row"></div>
                </footer> */}
            </div>
        </div>
    );
};

export default SignupPage;
