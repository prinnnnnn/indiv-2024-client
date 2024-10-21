// import axios from "axios"
import { redirect } from "next/navigation"
import { User } from "../common/model"

export const register = async (user: User) => {
    /*  */
    // await axios.post(`${serverUrl}/auth/register`, user);
}

interface loginArgs {
    email: string
    password: string
}

export const login = ({ email, password }: loginArgs) => {
    /* return user info for redux store dispatching */
    /* POST - /auth/login */
    return null;
}

export const logout = () => {
    /* delete userId, jwt token in redux store */
}