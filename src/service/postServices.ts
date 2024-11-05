import { Post } from "@/common/model";
import axios from "axios"
import { getPresignedUrl } from "./storageService";

const serverAddr = process.env.SERVER_ADDRESS;

export const createPost = async () => {
    /* userId from redux store */
    /* POST - /posts/ */
}

export const fetchAllPosts = async () => {
    const options = { 
        method: 'GET',
        url: `${serverAddr}/posts/`,
        withCredentials: true,
    };

    try {
        const { data } = await axios.request(options);
        console.log(data);
        const posts = await Promise.all(
            (data as Post[]).map(async (post) => ({
                ...post,
                imageUrl: await getPresignedUrl(post.imageUrl),
            }))
        );
        return posts;
    } catch (error) {
        console.error(error);
    }
}

export const fetchFollowersPosts = async () => {
    /* userId from redux store */
    /* GET - /posts/:userId/feeds */
}

export const likePost = async (postId: number) => {
    /* userId from redux store */
    /* PATCH - /posts/:userId/:postId */
}