"use client";

import PostWidget from "../ui/PostWidget";
import PostForm from "./PostForm";
import SearchBar from "./SearchBar";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-3">
      <SearchBar />
      <PostForm />
      {[1, 2].map((x) => (
        <PostWidget i={x} />
      ))}
    </div>
  );
};

export default HomePage;
