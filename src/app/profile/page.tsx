"use client";

import PostWidget from "@/app/(post)/PostWidget";
import Profile from "./Profile";



const ProfilePage = () => {
    return (
        <div className="flex flex-col gap-3">
            <Profile />
            {[1, 2].map(x => (
                <PostWidget />
            ))}
        </div>
    );
};

export default ProfilePage;
