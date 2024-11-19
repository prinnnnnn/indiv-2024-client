import { User } from "@/common/model";
import axios, { AxiosRequestConfig } from "axios";
import { userInfo } from "os";
import { getPresignedUrl } from "./storageService";
import { notFound } from "next/navigation";

const serverAddr = process.env.SERVER_ADDRESS;

export const fetchFollowings = async (userId: number) => {
  /* userId from redux store */
  const options = {
    method: "GET",
    url: `${serverAddr}/users/following/${userId}`,
  };

  try {
    const { data } = await axios.request(options);
    return data as number[];
  } catch (error) {
    throw error;
  }
};

export const followUser = async () => {
  /* userId from redux store */
};

export const fetchUserInfo = async (userId: number) => {
  console.log(`fetching user user id:${userId}`);

  const options: AxiosRequestConfig = {
    method: "GET",
    url: `http://localhost:3001/users/${userId}`,
    withCredentials: true,
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
    const userInfo: User = {
      ...data,
      coverPhotoUrl: data.coverPhotoUrl
        ? await getPresignedUrl(data.coverPhotoUrl)
        : null,
      profilePath: data.profilePath
        ? await getPresignedUrl(data.profilePath)
        : null,
    };

    return userInfo;
  } catch (error) {
    console.error(error);
    // notFound()
  }
};
