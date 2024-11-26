import { Post } from "@/common/model";
import axios, { AxiosRequestConfig } from "axios";
import { getPresignedUrl } from "./storageService";

const serverAddr = process.env.SERVER_ADDRESS;

export const createPost = async (formData: FormData) => {
    console.log("creating test");

    const options: AxiosRequestConfig = {
        method: "POST",
        // TODO: implement userId from state 
        url: `${serverAddr}/posts/`,
        data: formData,
        withCredentials: true,
    };

    try {
        const { data } = await axios.request(options);
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const fetchAllPosts = async () => {

    const options = {
        method: "GET",
        url: `${serverAddr}/posts/`,
        withCredentials: true,
    };

    try {
        
        const { data } = await axios.request(options);
        const posts = await Promise.all(
            (data as Post[]).map(async (post) => ({
                ...post,
                imageUrl: post.imageUrl ? await getPresignedUrl(post.imageUrl) : null,
                profileImg: post.author.profilePath ? await getPresignedUrl(post.author.profilePath) : null,
                // profileImg: await getPresignedUrl(post.imageUrl),
            }))
        );

        return posts as Post[];
    } catch (error) {
        console.error(error);
    }
};

export const fetchUserPosts = async (userId: Number | null) => {

    const options = {
        method: "GET",
        url: `${serverAddr}/posts/user`,
        withCredentials: true,
    };

    try {
        const { data } = await axios.request(options);
        console.log("fetching user posts");
        console.log(data);
        const posts = await Promise.all(
            (data as Post[]).map(async (post) => ({
                ...post,
                imageUrl: post.imageUrl ? await getPresignedUrl(post.imageUrl) : null,
                profileImg: post.author.profilePath ? await getPresignedUrl(post.author.profilePath) : null,
            }))
        );
        return posts;
    } catch (error) {
        console.error(error);
    }
};

export const fetchFollowersPosts = async () => {
    /* userId from redux store */
    /* GET - /posts/:userId/feeds */
};

export const likePost = async (postId: number) => {
    /* userId from redux store */
    /* PATCH - /posts/:userId/:postId */
};
