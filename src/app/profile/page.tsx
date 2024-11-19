"use client";

import PostWidget from "@/app/(post)/PostWidget";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import { fetchAllPosts, fetchUserPosts } from "@/service/postServices";
import { Post, User } from "@/common/model";
import { useStore } from "@/stores/storeContext";

const ProfilePage = () => {
    const store = useStore();
    const [userId, setUserId] = useState<number | null>(null);
    let user: User | null;

    useEffect(() => {
        const fetchData = async () => {

            user = store!.getUserInfo;
            console.log(`user : ${user}`);

            let userPosts: Post[] = [];
            if (user) {
                setUserId(user.id);
                userPosts = (await fetchUserPosts(user.id)) as Post[];
            }

            store!.setUserFeeds(userPosts);
        };

        fetchData();
    }, [userId]);

    return (
        <div className="flex flex-col gap-3">
            <Profile />
            {store!.userPosts
                .slice()
                .sort((a, b) => {
                    return (
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                    );
                })
                .map(post => (
                    <PostWidget post={post} />
                ))}
        </div>
    );
};

export default ProfilePage;
