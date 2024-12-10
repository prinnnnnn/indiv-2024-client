"use client";

import PostWidget from "@/app/(post)/PostWidget";
import Profile from "./Profile";
import {useState } from "react";
import { ProfileViewModel } from "./ProfileViewModel";
import { observer } from "mobx-react-lite";

const ProfilePage = () => {
    
    const [viewModel] = useState<ProfileViewModel>(new ProfileViewModel());
    const sortedPosts = viewModel.posts
    ? viewModel.posts.slice().sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      })
    : [];

    return (
        <div className="flex flex-col gap-3">
            <Profile vm={viewModel}/>
            {viewModel.posts && sortedPosts
                .map(post => (
                    <PostWidget post={post} vm={viewModel} key={post.id} />
                ))}
        </div>
    );
};

export default observer(ProfilePage);
