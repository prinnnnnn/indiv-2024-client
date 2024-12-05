"use client";

import { useTheme } from "../ui/ThemeContext";

/* picture */
import defaultProfile from "@/public/assets/default-profile.jpg";
import defaultCover from "@/public/assets/default-cover.jpg";

import Image from "next/image";
import "@/app/ui/hoverable.css";
import { observer } from "mobx-react-lite";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProfileViewModel } from "./ProfileViewModel";

const Profile = ({ vm }: { vm: ProfileViewModel }) => {
  const { id } = useParams();
  const profileId = id;
  const { palette } = useTheme();

  const [isPending, setIsPending] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (vm.isLoading) {
    return <b style={{ color: `${palette.accent}` }}>Loading...</b>;
  }

  const user = vm.user;

  const cancel = () => {
    setShowModal(false);
  };
  console.log(`profileId: ${profileId}, user id : ${vm.user?.id}`);

  const canEdit = profileId == undefined || Number(profileId) === vm.user?.id;
  console.log(`canEdit ${canEdit}`);
  const canFollow = !canEdit;

  return (
    <>
      <div
        className={`w-full min-h-96 rounded-lg p-4 mb-2`}
        style={{ background: palette.bgPrimary }}
      >
        {/* Cover image */}
        {vm.user && vm.user.coverPhotoUrl ? (
          <img
            src={vm.user.coverPhotoUrl}
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
          <div className="pb-[-40] aspect-square lg:w-[12rem] md:w-[15rem] sm:w-[8rem] w-[7rem] max-h-[7rem] sm:max-h-[8rem] md:max-h-[12rem] relative bottom-[2rem]">
            {vm.user && vm.user.profilePath ? (
              <img
                src={vm.user.profilePath}
                alt="User Profile"
                className="w-full h-full object-cover rounded-full bg-white"
              />
            ) : (
              <Image
                src={defaultProfile}
                alt="Profile img"
                layout="fill"
                className="object-cover rounded-md"
                style={{
                  outline: `3px solid ${palette.secondary}`,
                }}
              />
            )}
          </div>

          <div className="flex flex-col md:flex-row w-full md:my-6 md:pl-4 justify-center md:justify-between">
            <div className="md:hidden mx-auto mb-3 md:mx-5 md:my-auto justify-center items-center">
              {canFollow && (
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
              )}
              {canEdit && (
                <button
                  className="hoverable flex rounded-md px-4 py-2 text-sm text-white transition-colors"
                  onClick={() => setShowModal(true)}
                  style={
                    {
                      "--bg-color": palette.primary,
                      "--bg-hover": palette.bgHover,
                    } as any
                  }
                >
                  Edit Peofile
                </button>
              )}
            </div>

            <h1 className="text-xl lg:text-4xl md:text-3xl sm:text-xl text-center md:text-left">
              {`${vm.user!.firstName} ${vm.user!.lastName}`}
            </h1>

            <div className="hidden md:block mx-auto mt-3 md:mx-5 md:my-auto justify-center items-center">
              {canFollow && (
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
              )}
              {canEdit && (
                <button
                  className="hoverable flex rounded-md px-4 py-2 text-sm text-white transition-colors"
                  onClick={() => setShowModal(true)}
                  style={
                    {
                      "--bg-color": palette.primary,
                      "--bg-hover": palette.bgHover,
                    } as any
                  }
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="my-4 md:my-2 xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative xl:-top-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          blanditiis reiciendis harum possimus atque iste tempora tempore sint
          sunt debitis?
          <p className="w-fit text-md"></p>
        </div>
      </div>

      {/* Modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[70vw] min-w-[300px] md:min-w-[500px] my-6 mx-auto max-w-5xl max-h-[80vh]">
              {/*content*/}
              <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none"
                style={{ background: palette.bgPrimary }}
              >
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Profile</h3>
                </div>

                {/*body*/}
                <div
                  className={`w-full min-h-96 rounded-lg p-4 mb-2`}
                  style={{ background: palette.bgPrimary }}
                >
                  {/* Cover image */}
                  {vm.user && vm.user.coverPhotoUrl ? (
                    <img
                      src={vm.user.coverPhotoUrl}
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
                    <div className="pb-[-40] aspect-square lg:w-[12rem] md:w-[15rem] sm:w-[8rem] w-[7rem] max-h-[7rem] sm:max-h-[8rem] md:max-h-[12rem] relative bottom-[2rem]">
                      {vm.user && vm.user.profilePath ? (
                        <img
                          src={vm.user.profilePath}
                          alt="User Profile"
                          className="w-full h-full object-cover rounded-full bg-white"
                        />
                      ) : (
                        <Image
                          src={defaultProfile}
                          alt="Profile img"
                          layout="fill"
                          className="object-cover rounded-md"
                          style={{
                            outline: `3px solid ${palette.secondary}`,
                          }}
                        />
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row w-full md:pl-4 justify-center md:justify-between my-auto relative bottom-[1rem] ">

                      <h1 className="text-xl lg:text-4xl md:text-3xl sm:text-xl text-center md:text-left">
                        {`${vm.user!.firstName} ${vm.user!.lastName}`}
                      </h1>

                    </div>
                  </div>

                  {/* Bio */}
                  <div className="my-4 md:my-2 xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative xl:-top-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus blanditiis reiciendis harum possimus atque iste
                    tempora tempore sint sunt debitis?
                    <p className="w-fit text-md"></p>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <p className="text-red-500 my-auto">{errorMessage}</p>
                  <button
                    className="text-gray-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={cancel}
                  >
                    Cancel
                  </button>
                  <button
                    aria-disabled={isPending}
                    className="hoverable text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    style={
                      {
                        "--bg-color": palette.primary,
                        "--bg-hover": palette.bgHover,
                      } as any
                    }
                  >
                    <b>{isPending ? "Updating" : "Update Profile"}</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default observer(Profile);
