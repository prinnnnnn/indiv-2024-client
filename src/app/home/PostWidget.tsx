import Image from "next/image";
import React from "react";
import LeBron from "@/public/assets/LeBron.png";
import LeBron_Post from "@/public/assets/LeBron_Post.jpg";
import { MdBookmarkAdd, MdVerified } from "react-icons/md";
import { FaRegHandPointUp, FaShare } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { BiSolidCommentDetail } from "react-icons/bi";
import { AiFillFire, AiFillLike } from "react-icons/ai";

interface PostProp {
  i: number;
}

const PostWidget = ({ i }: PostProp) => {
  const username = "LeBron James";

  return (
    <>
      <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-96 rounded-lg p-4 mb-2">
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
          <div>{username}</div>
          <div>
            <MdVerified className="mt-0.5 text-xl text-[#1DA1F2] dark:text-orange-500" />
          </div>
        </div>

        {/* Contents */}
        <div>
          {/* Images */}
          <div className="relative w-full min-h-[70vh] bg-blue-300 dark:bg-gray-400 rounded-md mt-3 ">
            <Image
              src={LeBron_Post}
              alt="Post img"
              layout="fill"
              className="object-cover object-top rounded-md"
            />
          </div>

          {/* Buttons */}
          <div className=" my-4 flex flex-row justify-around ">
            <AiFillFire />
            <BiSolidCommentDetail />
            <FaShare />
            <MdBookmarkAdd />
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
