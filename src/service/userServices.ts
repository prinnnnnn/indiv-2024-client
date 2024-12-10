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

export const followUser = async (followId: number) => {
  const options = {
    method: "PATCH",
    url: `${serverAddr}/users/follow/${followId}`,
  };

  try {
    const { data } = await axios.request(options);
    return data.id;
  } catch (error) {
    console.error(error);
  }
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

export const updateProfileCoverPicture = async (
  data: any,
  type: "profile" | "cover"
) => {
  const options: AxiosRequestConfig = {
    method: "PATCH",
    url: `${serverAddr}/users/upload/${type}Picture`,
    withCredentials: true,
    data: data,
  };

  try {
    const { data } = await axios.request(options);

    const user: User = {
      ...data,
      coverPhotoUrl: data.coverPhotoUrl
        ? await getPresignedUrl(data.coverPhotoUrl)
        : null,
      profilePath: data.profilePath
        ? await getPresignedUrl(data.profilePath)
        : null,
    };

    return user;
  } catch (error) {
    throw error;
  }
};

export const updateUserInfo = async (userId: Number, data: any) => {
  console.log("Updating user info");
  const options = {
    method: 'PATCH',
    url: `http://localhost:3001/users/${userId}`,
    headers: {'Content-Type': 'text/plain;charset=UTF-8'},
    withCredentials: true,
    data: data,
  };
  
  try {
    const { data } = await axios.request(options);
    console.log(data);
    const user: User = {
        ...data,
        coverPhotoUrl: data.coverPhotoUrl
          ? await getPresignedUrl(data.coverPhotoUrl)
          : null,
        profilePath: data.profilePath
          ? await getPresignedUrl(data.profilePath)
          : null,
      };
    return user;
  } catch (error) {
    console.error(error);
  }
}

export const fetchRandomUsers = async () => {
  try {
    const { data } = await axios.get(`${serverAddr}/users/random`, {
      withCredentials: true,
    });

    const randomUsers = await Promise.all(
      data.map(async (user: User) => {
        return {
          ...user,
          profilePath: user.profilePath
            ? await getPresignedUrl(user.profilePath)
            : null,
        };
      })
    );

    return randomUsers;
  } catch (error) {
    console.error(error);
  }
};
