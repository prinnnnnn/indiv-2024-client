"use client";

/* form */
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import "../ui/hoverable.css"
import TextField from "@/app/signup/TextField";
import { useTheme } from "../ui/ThemeContext";
import { values } from "mobx";
import { RegisterForm, User } from "@/common/model";
import { register } from "@/service/authServices";
import { redirect, useRouter } from "next/navigation";

const formLabels = [
    {
        label: "Email",
        name: "email",
        type: "text",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
    },
    {
        label: "Firstname",
        name: "firstName",
        type: "text",
    },
    {
        label: "Lastname",
        name: "lastName",
        type: "text",
    },
]

const SignUpForm = () => {
    
    const registerSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        email: yup.string().email("Invalid email").required("required"),
        password: yup.string().required("required"),
    });

    const router = useRouter();

    const handleFormSubmit = async (
        values: RegisterForm,
        onSubmitProps: FormikHelpers<RegisterForm>
    ) => {
        // console.log("Submit handler is called...");
        await register(values)
        router.push('/home')
        onSubmitProps.resetForm();
    };
    const initialForm = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    };

    const { palette } = useTheme();

    return (
        <Formik
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
                    {/* Form fields */}
                    {formLabels.map(({ label, name, type }) => {
                        return (
                            <TextField
                                key={name}
                                label={label}
                                name={name}
                                type={type}
                                placeholder=""
                            />
                        )
                    })}
                    {/* BUTTON */}
                    <div className="w-full flex flex-col items-center">
                        {/* bg-[#2fadfc] */}
                        <button
                            type="submit"
                            className={`hoverable rounded-full border border-solid 
                            flex items-center justify-center
                            border-transparent sm:text-base
                            sm:h-12 sm:px-4 py-1 md:w-full`}
                            style={
                                {
                                  "--bg-color": palette.primary,
                                  "--bg-hover": palette.bgHover,
                                } as any}
                        >
                            <h3>Create Account</h3>
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default SignUpForm;
