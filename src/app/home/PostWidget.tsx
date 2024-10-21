"use client";

import Image from "next/image";
import React from "react";
import LeBron from "@/public/assets/LeBron.png";
import LeBron_Post from "@/public/assets/LeBron_Post.jpg";
import { MdBookmarkAdd, MdVerified } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { useTheme } from "../ui/ThemeContext";

interface PostProp {
  i: number;
}

const PostWidget = ({ i }: PostProp) => {
  const username = "LeBron James";

  const { palette } = useTheme();

  return (
    <>
      <div
        className={`${palette.bgPrimary} w-full min-h-96 rounded-lg p-4 mb-2`}
      >
        {/* Header */}
        <div className="flex flex-row gap-2 items-center">
          <div className="relative w-[25px] h-[25px]">
            <Image
              src={LeBron}
              alt="Profile img"
              layout="fill"
              className="object-cover rounded-full"
            />
          </div>
          <h4>{username}</h4>
          <div>
            <MdVerified className={`mt-0.5 text-xl text-${palette.primary}`} />
          </div>
        </div>

        {/* Contents */}
        <div>
          {/* Images */}
          <div className="relative w-full aspect-w-16 aspect-h-9 bg-blue-300 dark:bg-gray-400 rounded-md mt-3 ">
            <Image
              src={LeBron_Post}
              alt="Post img"
              layout="responsive"
              width={1600} // Example width
              height={900} // Example height to maintain aspect ratio
              className="object-contain rounded-md"
            />
          </div>

          {/* Buttons */}
          <div className=" my-4 flex flex-row justify-around ">
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
          <div className="">
            <p>
              <span className="font-bold">{username}</span> Ballin' with the
              boys. 🏀
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostWidget;
