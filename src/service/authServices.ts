import axios from "axios"
import { redirect } from "next/navigation"
import { RegisterForm, User } from "../common/model"

export const register = async (user: RegisterForm) => {

    console.log(user);
    
    const options = {
        method: 'POST',
        url: 'http://localhost:3001/auth/register',
        headers: {'Content-Type': 'application/json'},
        data: user, 
      };
      
      try {
        const { data } = await axios.request(options);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
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