import axios from "axios"
// import '@/envConfig'
import { RegisterForm, User } from "@/common/model"
import { fetchAllPosts } from "./postServices";

const serverAddr = process.env.SERVER_ADDRESS;

export const register = async (user: RegisterForm) => {
    
    const options = {
        method: 'POST',
        url: `${serverAddr}/auth/register`,
        headers: { 'Content-Type': 'application/json' },
        data: user,
    };
    
    try {
        const { data: { user, token } } = await axios.request(options);
        await fetchAllPosts();
        return {
            user,
            token,
        }
        
    } catch (error) {
        throw error
    }
    
}

interface loginArgs {
    email: string
    password: string
}

export const login = async ({ email, password }: loginArgs) => {
    
    const options = {
        method: 'POST',
        url: `${serverAddr}/auth/login`,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        data: { email, password },
    };

    try {
        const { data: { user, token} } = await axios.request(options);
        return {
            user, token
        }

    } catch (error) {
        throw error;
    }
}