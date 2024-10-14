"use client";

import React from "react";

/* form */
import { Formik } from "formik";
import * as yup from "yup";
import { User } from "@/common/model";
import TextField from "./TextField";

const formLabels = [
    {
        label: "Email",
        name: "email",
        type: "text",
        placeholder: "",
        // placeholder: "Enter your email...",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "",
        // placeholder: "Enter your password...",
    },
    {
        label: "Firstname",
        name: "firstname",
        type: "text",
        placeholder: "",
        // placeholder: "Enter your firstname...",
    },
    {
        label: "Lastname",
        name: "lastname",
        type: "text",
        placeholder: "",
        // placeholder: "Enter your lastname...",
    },
]

const SignUpForm = () => {
    const registerSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        email: yup.string().email("Invalid email").required("required"),
        password: yup.string().required("required"),
        // location: yup.string().required("required"),
        // occupation: yup.string().required("required"),
        // picture: yup.string().required("required"),
    });

    const handleSubmit = async () => {};

    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={{}}
            validationSchema={registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
                    {/* Form fields */}
                    {formLabels.map(({ label, name, type, placeholder}) => {
                        return (
                            <TextField
                                label={label}
                                name={name}
                                type={type}
                                placeholder={placeholder}
                            />
                        )
                    })}
                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:text-lg hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-40 sm:px-64 sm:min-w-44 "

                    >
                        <h3>Create Account</h3>
                    </button>
                </form>
            )}
        </Formik>
    );
};

export default SignUpForm;
