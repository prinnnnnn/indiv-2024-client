"use client";

import React, { useEffect, useRef } from "react";

/* form */
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
// import { User } from "@/common/model";
import TextField from "./TextField";
import { RegisterForm } from "@/common/model";
import axios from "axios";

const formLabels = [
    {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Enter your email...",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "Enter your password...",
    },
    {
        label: "Firstname",
        name: "firstName",
        type: "text",
        placeholder: "Enter your firstname...",
    },
    {
        label: "Lastname",
        name: "lastName",
        type: "text",
        placeholder: "Enter your lastname...",
    },
];

const SignUpForm = () => {
    const registerSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        email: yup.string().email("Invalid email").required("required"),
        password: yup.string().required("required"),
    });

    const handleFormSubmit = async (
        values: RegisterForm,
        onSubmitProps: FormikHelpers<RegisterForm>
    ) => {
        // console.log("Submit handler is called...");
        const formData = new FormData();

        for (let value in values) {
            formData.append(
                value,
                values[value as keyof RegisterForm] as string | Blob
            );
        }

        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }
        // console.log(values);
        // if (!(values.picture instanceof File))
        //     return

        // await axios.post(`${}/auth/register`, formData);

        onSubmitProps.resetForm();
    };

    const initialForm = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    };

    return (
        <Formik<RegisterForm>
            onSubmit={handleFormSubmit}
            initialValues={initialForm}
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
                <Form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 items-center"
                >
                    {/* Form fields (text) */}
                    {formLabels.map(({ label, name, type, placeholder }) => (
                        <TextField
                            key={label}
                            label={label}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                        />
                    ))}

                    {/* Form fields (image) */}

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="bg-white border border-[#DBE2EF] py-2 px-64 rounded-full
                                    hover:bg-[#112D4E] hover:text-lg hover:text-white mt-5"
                    >
                        <h3>Create Account</h3>
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default SignUpForm;
