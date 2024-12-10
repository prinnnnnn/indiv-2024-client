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
import "../ui/FormInput.css";
import { updateUserInfo } from "@/service/userServices";
import { ProfileViewModel } from "./ProfileViewModel";

const Profile = ({ vm }: { vm: ProfileViewModel }) => {
  const { id } = useParams();
  const profileId = id;
  const { palette } = useTheme();

  const [isPending, setIsPending] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [profileFirstName, setFirstName] = useState("");
  const [profileLastName, setLastName] = useState("");
  const [profileBio, setBio] = useState("");

  const autoGrow = (element: HTMLTextAreaElement) => {
    element.style.height = "auto"; // Reset height to allow shrinking
    element.style.height = `${Math.max(element.scrollHeight, 50)}px`; // Set height based on content or minimum height
  };

  if (vm.isLoading) {
    return <b style={{ color: `${palette.accent}` }}>Loading...</b>;
  }

  const user = vm.user;
  const resetProfile = () => {
    setFirstName(user!.firstName);
    setLastName(user!.lastName);
    setBio(user!.bio);
  };

  const openModal = () => {
    setShowModal(true);
    resetProfile();
  };

  const cancel = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {
    setIsPending(true);
    setErrorMessage("");
    const formData = new FormData();
    formData.append("firstName", profileFirstName);
    formData.append("lastName", profileLastName);
    formData.append("bio", profileBio);

    try {
      const updatedUser = await updateUserInfo(user!.id, formData);
      console.log(`updatedUser: ${updatedUser}`);
    } catch (error: any) {
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setIsPending(false);
      setShowModal(false);

      // Hard reload to fetch data
      window.location.reload();
    }
  };

  const canEdit = profileId == undefined;
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
                  onClick={() => openModal()}
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
          {user!.bio}
          <p className="w-fit text-md"></p>
        </div>
      </div>

      {/* Modal */}
      {showModal ? (
        <>
          <form onSubmit={handleSubmit}>
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
                    <div className="relative group">
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

                      {/* Overlay and Edit text */}
                      <div className="absolute inset-0 bg-gray-600 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center rounded-lg">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                          Upload New Cover Inage
                        </span>
                      </div>
                    </div>

                    {/* Profile Image and Name */}
                    <div className="sm:w-[80%] xs:w-[60%] mx-auto flex flex-col md:flex-row items-center md:items-start justify-around">
                      <div className="pb-[-40] aspect-square lg:w-[12rem] md:w-[15rem] sm:w-[8rem] w-[7rem] max-h-[7rem] sm:max-h-[8rem] md:max-h-[12rem] relative bottom-[2rem] group">
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
                        <div className="absolute inset-0 bg-gray-600 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center rounded-full">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-center">
                            Upload New <br />
                            Profile Picture
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col md:pl-4">
                        {/* Name inputs */}
                        <div className="flex flex-col md:flex-row w-full justify-center md:justify-between pt-10 mb-0 relative bottom-[1rem] gap-5 ">
                          <div className={`relative z-0 w-full mb-5 group `}>
                            <input
                              type="text"
                              name="fistNameInput"
                              id="fistNameInput"
                              className={`input-peer block py-2.5 px-0 w-full text-lg bg-transparent 
                                      border-0 border-b-2 appearance-none
                                      focus:outline-none focus:ring-0 peer`}
                              style={
                                {
                                  "--primary-color": palette.primary,
                                  color: palette.text,
                                  "--autofill-text-color": palette.text,
                                } as any
                              }
                              placeholder=" "
                              required
                              value={profileFirstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label
                              htmlFor="fistNameInput"
                              className={`label-peer
                                        peer-focus:font-medium absolute text-base duration-300 transform
                                      -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                                        peer-placeholder-shown:scale-100
                                        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                              style={
                                { "--primary-color": palette.primary } as any
                              }
                            >
                              First Name
                            </label>
                          </div>
                          <div className={`relative z-0 w-full mb-5 group `}>
                            <input
                              type="test"
                              name="lastNameInput"
                              id="lastNameInput"
                              className={`input-peer block py-2.5 px-0 w-full text-lg bg-transparent 
                                      border-0 border-b-2 appearance-none
                                      focus:outline-none focus:ring-0 peer`}
                              style={
                                {
                                  "--primary-color": palette.primary,
                                  color: palette.text,
                                  "--autofill-text-color": palette.text,
                                } as any
                              }
                              placeholder=" "
                              required
                              value={profileLastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                            <label
                              htmlFor="lastNameInput"
                              className={`label-peer
                                        peer-focus:font-medium absolute text-base duration-300 transform
                                      -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                                        peer-placeholder-shown:scale-100
                                        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                              style={
                                { "--primary-color": palette.primary } as any
                              }
                            >
                              Lastname
                            </label>
                          </div>
                        </div>

                        {/* Bio */}
                        <div className=" w-full mx-auto flex flex-col gap-4 relative xl:-top-6">
                          <textarea
                            name="bioInput"
                            id="bioInput"
                            className="outline-none w-full h-full input-peer relative mt-[30px]"
                            placeholder="Tell us about yourself."
                            onInput={(e) =>
                              autoGrow(e.target as HTMLTextAreaElement)
                            }
                            value={profileBio}
                            onChange={(e) => setBio(e.target.value)}
                            rows={2}
                            style={{
                              background: palette.bgPrimary,
                              resize: "none",
                            }}
                          />
                          <label
                            htmlFor="bioInput"
                            className="label-peer duration-300 transform absolute"
                            style={
                              { "--primary-color": palette.primary } as any
                            }
                          >
                            Bio
                          </label>
                        </div>
                      </div>
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
          </form>
        </>
      ) : null}
    </>
  );
};

export default observer(Profile);
