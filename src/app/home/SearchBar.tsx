import React from "react";

const SearchBar = () => {
  return (
    <div className="flex">
      <input
        className="bg-white dark:bg-[#3e3e3e] focus:ring-2 focus:ring-[#1DA1F2] dark:focus:ring-white w-full min-h-12 rounded-lg p-4"
        type="text"
        placeholder="Search"
      />
      {/* <FaSearch /> */}
    </div>
  );
};

export default SearchBar;
