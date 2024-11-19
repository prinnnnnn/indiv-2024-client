"use client";

import { User } from "@/common/model";
import { useTheme } from "../ui/ThemeContext";

/* picture */
import defaultProfile from "@/public/assets/default-profile.jpg";
import defaultCover from "@/public/assets/default-cover.jpg";

import Image from "next/image";
import "@/app/ui/hoverable.css";

interface ProfileProp {
  user: User;
}

const Profile = ({ user }: ProfileProp) => {
  const { palette } = useTheme();

  return (
    <div
      className={`w-full min-h-96 rounded-lg p-4 mb-2`}
      style={{ background: palette.bgPrimary }}
    >
      {/* Cover image */}
      {user?.coverPhotoUrl ? (
        <img
          src={user.coverPhotoUrl}
          alt="User Cover" 
          className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] h-[11rem] object-cover rounded-lg"
        />
      ) : (
        <Image
          src={defaultCover}
          alt="User Cover"
          className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] h-[11rem] object-cover rounded-lg"
        />
      )}

      {/* Profile Image and Name */}
      <div className="sm:w-[80%] xs:w-[60%] mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div className=" pb-[-40] aspect-square w-1/4 lg:w-[12rem] md:w-[10rem] sm:w-[8rem] xs:w-[7rem] relative lg:bottom-[3rem] sm:bottom-[2rem] bottom-[3rem]">
          <Image
            src={defaultProfile}
            alt="Profile img"
            layout="fill"
            className="object-cover rounded-md"
            style={{ outline: `3px solid ${palette.secondary}` }}
          />
        </div>

        <div className="flex flex-col md:flex-row w-full md:my-6 md:pl-4 justify-center md:justify-between">
          <div className="md:hidden mx-auto mb-3 md:mx-5 md:my-auto justify-center items-center">
            <button
              className="hoverable flex rounded-md px-4 py-2 text-sm text-white transition-colors"
              style={
                {
                  "--bg-color": palette.primary,
                  "--bg-hover": palette.bgHover,
                } as any
              }
            >
              Follow
            </button>
          </div>

          <h1 className="text-xl lg:text-4xl md:text-3xl sm:text-xl text-center md:text-left">
            Lebron James
          </h1>

          <div className="hidden md:block mx-auto mt-3 md:mx-5 md:my-auto justify-center items-center">
            <button
              className="hoverable flex rounded-md px-4 py-2 text-base text-white transition-colors"
              style={
                {
                  "--bg-color": palette.primary,
                  "--bg-hover": palette.bgHover,
                } as any
              }
            >
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="my-4 md:my-0 xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative xl:-top-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        blanditiis reiciendis harum possimus atque iste tempora tempore sint
        sunt debitis?
        <p className="w-fit text-md"></p>
      </div>
    </div>
  );
};

export default Profile;
