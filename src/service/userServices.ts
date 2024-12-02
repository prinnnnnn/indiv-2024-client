import { User } from "@/common/model";
import axios, { AxiosRequestConfig } from "axios";
import { getPresignedUrl } from "./storageService";

const serverAddr = process.env.SERVER_ADDRESS;

export const fetchFollowings = async () => {

    const options: AxiosRequestConfig = {
        method: "GET",
        url: `${serverAddr}/users/following/`,
        withCredentials: true,
    };

    try {
        const { data } = await axios.request(options);
        return data as number[];
    } catch (error) {
        throw error;
    }
};

export const followUser = async () => {

};

export const fetchUserInfo = async (userId?: number) => {

    const options: AxiosRequestConfig = {
        method: "GET",
        url: `${serverAddr}/users/`.concat(userId ? `${userId}` : "profile"),
        withCredentials: true,
    };

    try {
        const { data } = await axios.request(options);
        // console.log(data);
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
    }
};

export const updateProfileCoverPicture = async () => {

}

export const fetchRandomUsers = async () => {

    try {

        const { data } = await axios.get(`${serverAddr}/users/random`, { withCredentials: true });

        const randomUsers = await Promise.all(data.map(async (user: User) => {
            return {
                ...user,
                profilePath: user.profilePath
                    ? await getPresignedUrl(user.profilePath)
                    : null,
            }
        }))

        return randomUsers;

    } catch (error) {
        console.error(error)
    }

}