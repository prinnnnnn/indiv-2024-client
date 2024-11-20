import axios from "axios";
// import '@/envConfig'
import { RegisterForm, User } from "@/common/model";
import { fetchAllPosts } from "./postServices";
import { getPresignedUrl } from "./storageService";

const serverAddr = process.env.SERVER_ADDRESS;

export const register = async (user: RegisterForm) => {
  console.log("registering");

  const options = {
    method: "POST",
    url: `${serverAddr}/auth/register`,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    data: user,
  };

  try {
    let {
      data: { user, token },
    } = await axios.request(options);

    user = {
      ...user,
      coverPhotoUrl: user.coverPhotoUrl
        ? await getPresignedUrl(user.coverPhotoUrl)
        : null,
      profilePath: user.profilePath
        ? await getPresignedUrl(user.profilePath)
        : null,
    } as User;

    await fetchAllPosts();
    return {
      user,
      token,
    };
  } catch (error) {
    throw error;
  }
};

interface loginArgs {
  email: string;
  password: string;
}

export const login = async ({ email, password }: loginArgs) => {
  const options = {
    method: "POST",
    url: `${serverAddr}/auth/login`,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    data: { email, password },
  };

  try {
    let {
      data: { user, token },
    } = await axios.request(options);

    user = {
      ...user,
      coverPhotoUrl: user.coverPhotoUrl
        ? await getPresignedUrl(user.coverPhotoUrl)
        : null,
      profilePath: user.profilePath
        ? await getPresignedUrl(user.profilePath)
        : null,
    } as User;

    return {
      user,
      token,
    };
  } catch (error) {
    throw error;
  }
};
