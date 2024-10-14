import React from "react";

const HomePage = () => {
    return (
        <div className="flex flex-row justify-between w-10/12">
            {/* Icon and Sidenav */}
            <div className="flex-grow">
                <div className="flex flex-col">
                    <div className="">
                        SideNav
                    </div>
                </div>
            </div>

            {/* feeds, Form for create post, posts of the followers */}
            <div className="flex-grow">
                <div className="flex flex-col">
                    <div className="">
                        Home
                    </div>
                    <div className="">
                        PostForm
                    </div>
                    <div className="">
                        Feeds
                    </div>
                </div>
            </div>

            {/* Seach, Trending, who to follow  */}
            <div className="flex-grow">
                <div className="flex flex-col">
                    <div className="">
                        Search
                    </div>
                    <div className="">
                        Trendings
                    </div>
                    <div className="">
                        Who to follows
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;
