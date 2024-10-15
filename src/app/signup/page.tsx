import React from "react";
import SignUpForm from "./SignUpForm";

const SignupPage = () => {
    return (
        <div className="w-7/12">
            <div className="flex flex-col justify-between items-center pt-10 gap-12">
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
                <footer>
                    OR Continue with
                    <div className="flex flex-row"></div>
                </footer>
            </div>
        </div>
    );
};

export default SignupPage;
