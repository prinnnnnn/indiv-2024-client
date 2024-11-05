import axios from "axios";

const serverAddr = process.env.SERVER_ADDRESS;

export const fetchFollowings = async (userId: number) => {
    /* userId from redux store */
    const options = { method: 'GET', url: `${serverAddr}/users/following/${userId}` };

    try {
        const { data } = await axios.request(options);
        return data as number[]
    } catch (error) {
        throw error
    }
}

export const followUser = async () => {
    /* userId from redux store */
}