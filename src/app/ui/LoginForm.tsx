"use client";

import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import styled from "styled-components";
import { login } from "../service/authServices";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isPending, setIsPending] = useState(false);

    // const registerSchema = yup.object().shape({
    //     firstName: yup.string().required("required"),
    //     lastName: yup.string().required("required"),
    //     email: yup.string().email("Invalid email").required("required"),
    //     password: yup.string().required("required"),
    //     location: yup.string().required("required"),
    //     occupation: yup.string().required("required"),
    //     picture: yup.string().required("required"),
    // });

    // const loginSchema = yup.object().shape({
    //     email: yup.string().email("Invalid email").required("required"),
    //     password: yup.string().required("required"),
    // });

    return <></>;
}

export default LoginForm;