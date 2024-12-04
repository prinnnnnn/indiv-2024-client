"use client";

import { useState } from "react";
import Profile from "../Profile";
import { observer } from "mobx-react-lite";
import { ProfileIDViewModel } from "./ProfileIDViewModel";
import PostWidget from "@/app/(post)/PostWidget";
import { useParams } from "next/navigation";

const ProfileByIdPage = () => {

    const { id } = useParams();
    const userId = id;
    const [viewModel] = useState<ProfileIDViewModel>(new ProfileIDViewModel(Number(userId)));

    return (
        <div className="flex flex-col gap-3">
            <Profile vm={viewModel} />
            {viewModel.posts &&
                viewModel.posts
                    .slice()
                    .sort((a, b) => {
                        return (
                            new Date(b.createdAt).getTime() -
                            new Date(a.createdAt).getTime()
                        );
                    })
                    .map(post => (
                        <PostWidget post={post} vm={viewModel} key={post.id} />
                    ))}
        </div>
    );
};

export default observer(ProfileByIdPage);
