"use client";

import { useStore } from "@/stores/storeContext";
import PostWidget from "../ui/PostWidget";
import PostForm from "./PostForm";
import SearchBar from "./SearchBar";

const HomePage = () => {

    const store = useStore();

    return (
        <div className="flex flex-col gap-3">
            <SearchBar />       
            <PostForm />
            {store?.homeFeeds.map(post => (
                <PostWidget post={post}/>
            ))}
        </div>
    );
};

export default HomePage;
