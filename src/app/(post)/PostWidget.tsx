"use client";

/* React */
import Image from "next/image";
import React, { FC } from "react";
import { format } from "date-fns";

/* picture */
import defaultProfile from "@/public/assets/default-profile.jpg";

/* Icons */
import { MdBookmarkAdd, MdVerified } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";

/* Theme */
import { useTheme } from "@/app/ui/ThemeContext";

/* Model */
import { Post } from "@/common/model";
import { HomeViewModel } from "../home/HomeViewModel";
import { observer } from "mobx-react-lite";
import { formatNumber } from "@/utils/helpers";
import { PostWidgetVM } from "@/utils/viewModel";
import Link from "next/link";

interface PostProp {
    post: Post;
    vm: PostWidgetVM;
}

const PostWidget: FC<PostProp> = ({ post, vm }) => {
    
    console.log(post);
    const username = `${post.author.firstName} ${post.author.lastName}`;
    const { palette } = useTheme();

    return (
        <>
            <div
                className={`w-full rounded-lg p-4 mb-2`}
                style={{ background: palette.bgPrimary }}
            >
                {/* Header */}
                <div className="flex flex-row gap-3 items-center mb-2">
                    <div className="relative w-[50px] h-[50px]">
                        {post.profileImg ? (
                            <img
                                key={`${post?.profileImg}`}
                                src={`${post.profileImg}`}
                                alt="Profile img"
                                className="object-cover w-full h-full rounded-full"
                            />
                        ) : (
                            <Image
                                src={defaultProfile}
                                alt="Profile img"
                                className="object-cover w-full h-full rounded-full"
                            />
                        )}
                    </div>
                    <div className="flex flex-col justify-center">
                        <Link
                            href={`/profile/${post.authorId}`}
                            className="hover:underline transition duration-300 ease-in-out"
                        >
                            <h4 className="text-lg md:text-xl">{username}</h4>
                        </Link>
                        <p className="text-sm">
                            {format(
                                new Date(post.createdAt),
                                "dd MMMM yyyy HH:mm"
                            )}
                        </p>
                    </div>
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
                    {post?.imageUrl ? (
                        <div className="relative w-full bg-blue-300 dark:bg-gray-400 rounded-md mt-3 ">
                            <img
                                src={`${post.imageUrl}`}
                                alt="Post img"
                                // layout="responsive"
                                className="object-fit rounded-md w-full"
                            />
                        </div>
                    ) : (
                        <div className="text-lg md:text-xl">
                            <p>
                                <span className="font-bold">{username}</span>{" "}
                                {post?.content}
                            </p>
                        </div>
                    )}
                </div>

                {/* Buttons */}
                <div className=" my-4 flex flex-row justify-around text-lg md:text-xl">
                    <button
                        className="flex items-center gap-0"
                        onClick={async () => {
                            await vm.likePost(post.id);
                        }}
                    >
                        {/* <button className="flex items-center gap-0" onClick={async () => {await vm.likePost(post.id); setLiked(prev => prev)}}> */}
                        <b>{formatNumber(post!.likeCounts)}</b>

                        <AiFillFire
                            fontSize={25}
                            color={`${palette.primary}`}
                            style={{
                                color: vm.isLikedByLoggedInUser(post!.id)
                                    ? palette.primary
                                    : palette.text,
                            }}
                        />

                        {/* liked post */}
                    </button>
                    <div className="flex items-center gap-1">
                        <b>0</b>
                        <FaCommentDots fontSize={25} />
                    </div>
                    <div className="flex items-center gap-0">
                        <b>0</b>
                        <div>
                            <IoIosShareAlt fontSize={25} />
                        </div>
                    </div>
                    <div>
                        <MdBookmarkAdd fontSize={25} />
                    </div>
                </div>

                {/* Captions with image. */}
                {post?.imageUrl && post?.content !== "" && (
                    <div className="text-lg md:text-xl">
                        <p>
                            <span className="font-bold">{username}</span>{" "}
                            {post?.content}
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default observer(PostWidget);
