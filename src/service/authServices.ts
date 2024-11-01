import axios from "axios"
import rootStore from "@/stores/rootStore"
// import '@/envConfig'
import { RegisterForm, User } from "../common/model"

const serverAddr = `http://localhost:3001`

export const register = async (user: RegisterForm) => {

    // console.log(`Server address: ${serverAddr}`);

    const options = {
        method: 'POST',
        url: `${serverAddr}/auth/register`,
        headers: { 'Content-Type': 'application/json' },
        data: user,
    };

    try {
        const { data: { user, token } } = await axios.request(options);
        rootStore.login(user, token);

    } catch (error) {
        throw error
    }

}

interface loginArgs {
    email: string
    password: string
}

export const login = async ({ email, password }: loginArgs) => {
    /* return user info for store updating */
    /* POST - /auth/login */
    const options = {
        method: 'POST',
        url: `${serverAddr}/auth/login`,
        headers: { 'Content-Type': 'application/json' },
        data: { email, password }
    };

    try {
        const { data: { user, token} } = await axios.request(options);
        

    } catch (error) {
        throw error;
    }
}

export const logout = () => {
    /* delete userId, jwt token in redux store */
}