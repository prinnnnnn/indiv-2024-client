"use client";

import Image from "next/image";
import React, { FC } from "react";
import LeBron from "@/public/assets/LeBron.png";
import LeBron_Post from "@/public/assets/LeBron_Post.jpg";
import { MdBookmarkAdd, MdVerified } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { useTheme } from "./ThemeContext";
import { Post } from "@/common/model";
import { getPresignedUrl } from "@/service/storageService";

interface PostProp {
    // i: number;
    post?: Post;
}

const PostWidget: FC<PostProp> = ({ post }) => {
    const username = "LeBron James";

    const { palette } = useTheme();

    return (
        <>
            <div
                className={`w-full min-h-80 rounded-lg p-4 mb-2`}
                style={{ background: palette.bgPrimary }}
            >
                {/* Header */}
                <div className="flex flex-row gap-3 items-center mb-2">
                    <div className="relative w-[50px] h-[50px]">
                        <Image
                            src={LeBron}
                            alt="Profile img"
                            layout="fill"
                            className="object-cover rounded-full"
                        />
                    </div>
                    <h4 className="text-xl md:text-2xl">{username}</h4>
                    <div>
                        <MdVerified
                            className={`mt-auto text-2xl md:text-3xl`}
                            style={{ color: palette.primary }}
                        />
                    </div>
                </div>

                {/* Contents */}
                <div>
                    {/* Images */}
                    {post?.imageUrl && (
                        <div className="relative w-full aspect-w-16 aspect-h-9 bg-blue-300 dark:bg-gray-400 rounded-md mt-3 ">
                            <img
                                src={`${post.imageUrl}`}
                                alt="Post img"
                                // layout="responsive"
                                className="object-contain rounded-md"
                            />
                        </div>
                    )}

                    {/* Buttons */}
                    <div className=" my-4 flex flex-row justify-around md:text-2xl">
                        <div className="flex items-center gap-0">
                            <b>12.4M</b>
                            <AiFillFire fontSize={25} />
                        </div>
                        <div className="flex items-center gap-1">
                            <b>505k</b>
                            <FaCommentDots fontSize={25} />
                        </div>
                        <div className="flex items-center gap-0">
                            <b>67.3k</b>
                            <div>
                                <IoIosShareAlt fontSize={25} />
                            </div>
                        </div>
                        <div>
                            <MdBookmarkAdd fontSize={25} />
                        </div>
                    </div>

                    {/* Captions */}
                    <div className="text-xl md:text-2xl">
                        <p>
                            <span className="font-bold">{username}</span>{" "}
                            {post?.content}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostWidget;
