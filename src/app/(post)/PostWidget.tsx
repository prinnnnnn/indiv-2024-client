"use client";

/* React */
import Image from "next/image";
import React, { FC } from "react";
import { format } from "date-fns";
// import LeBron from "@/public/assets/LeBron.png";
// import LeBron_Post from "@/public/assets/LeBron_Post.jpg";

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

interface PostProp {
  post?: Post;
}

// const names = [
//     "Lionel Messi",
//     "Lamine Yamal"
// ]

const PostWidget: FC<PostProp> = ({ post }) => {
  const username = `${post!.author.firstName} ${post!.author.lastName}`;

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
            <Image
              src={defaultProfile}
              alt="Profile img"
              layout="fill"
              className="object-cover rounded-full"
            />
          </div>
          <h4 className="text-lg md:text-xl">{username}</h4>
          <div>
            <MdVerified
              className={`mt-auto text-2xl md:text-3xl`}
              style={{ color: palette.primary }}
            />
          </div>
        </div>
        <p className="text-sm">{format(new Date(post!.createdAt), "dd MMMM yyyy HH:mm")}</p>

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
                <span className="font-bold">{username}</span> {post?.content}
              </p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className=" my-4 flex flex-row justify-around text-lg md:text-xl">
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

        {/* Captions with image. */}
        {post?.imageUrl && (
          <div className="text-lg md:text-xl">
            <p>
              <span className="font-bold">{username}</span> {post?.content}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default PostWidget;
