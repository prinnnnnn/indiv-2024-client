import { Post } from "@/common/model";
import axios, { AxiosRequestConfig } from "axios";
import { getPresignedUrl } from "./storageService";

const serverAddr = process.env.SERVER_ADDRESS;

export const createPost = async (formData: FormData) => {
    console.log("creating test");

    const options: AxiosRequestConfig = {
        method: "POST",
        url: `${serverAddr}/posts/`,
        data: formData,
        withCredentials: true,
    };

    try {
        const { data } = await axios.request(options);
        // console.log(data);
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
        url: `${serverAddr}/posts/user/${userId}`,
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
                // likeCounts: 0
            }))
        );
        return posts as Post[];
    } catch (error) {
        console.error(error);
        return []
    }
};

export const fetchFollowersPosts = async () => {
    /* userId from redux store */
    /* GET - /posts/:userId/feeds */
};

export const likePost = async (postId: number) => {
    /* PATCH - /posts/:postId */

    try {

        const options = {
            method: "PATCH",
            url: `${serverAddr}/posts/${postId}`,
            withCredentials: true,
        };

        const response = await axios.request(options)
        
        return response.status === 200 ? "dislike" : "like";
            
    } catch (error) {
        throw error;
    }

};

export const fetchLikedPostsIds = async () => {

    try {

        const { data } = await axios.get(`${serverAddr}/posts/likesRecord/`, { withCredentials: true });

        return data;
        
    } catch (error) {
        throw error;
    }

}

export const fetchRandomPosts = async () => {
    
    try {

        const options: AxiosRequestConfig = {
            method: "GET",
            url: `${serverAddr}/posts/random`,
            withCredentials: true,
        }

        const { data } = await axios.request(options);
        console.log(data);

        const randomPosts = await Promise.all(data.map(async (post: Post) => ({
            ...post,
            imageUrl: post.imageUrl ? await getPresignedUrl(post.imageUrl) : post.imageUrl,
            profileImg: post.author.profilePath ? await getPresignedUrl(post.author.profilePath) : null,
        })));

        return randomPosts; 
        
    } catch (error) {
        throw error;
    }

}
