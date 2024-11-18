"use client";

import PostWidget from "@/app/(post)/PostWidget";
import Profile from "./Profile";
import { useEffect } from "react";
import { fetchAllPosts, fetchPosts } from "@/service/postServices";
import { Post } from "@/common/model";
import { useStore } from "@/stores/storeContext";

const ProfilePage = () => {
  const store = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const user = store!.getUserInfo;
      console.log(`user : ${user}`);
      const userPosts = (await fetchAllPosts()) as Post[];
      // if (user) {
      //     userPosts = await fetchPosts(user.id) as Post[];
      //     console.log(userPosts);
      // }
      store!.setUserFeeds(userPosts);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <Profile />
      {store!.userPosts
        .slice()
        .sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        })
        .map((post) => (
          <PostWidget post={post} />
        ))}
    </div>
  );
};

export default ProfilePage;
