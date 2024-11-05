import { useTheme } from "../ui/ThemeContext";
import Image from "next/image";
import LeBron from "@/public/assets/LeBron.png";
import { BsFillSendPlusFill } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { ChangeEvent, DragEvent, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import "@/app/ui/hoverable.css";

const PostForm = () => {
    const { palette } = useTheme();

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    const cancel = () => {
        closeModal();
        setPostText("");
    };

    const [showModal, setShowModal] = useState(false);

    const autoGrow = (element: HTMLTextAreaElement) => {
        element.style.height = "auto"; // Reset height to allow shrinking
        element.style.height = `${Math.max(element.scrollHeight, 50)}px`; // Set height based on content or minimum height
    };

    const [postText, setPostText] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    // Handle the file selected through input
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Get the first file
        if (file) {
            setSelectedImage(file);
        }
    };

    // Handle file dropped into the upload area
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0]; // Get the first file from the drop event
        setSelectedImage(file);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const removeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div
            className={`w-full min-h-20 rounded-lg p-4 mb-5`}
            style={{ background: palette.bgPrimary }}
        >
            <div className="flex justify-between">
                <div className="relative w-[50px] h-[50px]">
                    <Image
                        src={LeBron}
                        alt="Profile img"
                        layout="fill"
                        className="object-cover rounded-full"
                    />
                </div>
                <div className="w-3/5 lg:w-4/5 lg:px-2">
                    <textarea
                        className="outline-none w-full h-full"
                        placeholder="What's on your mind?"
                        onInput={e => autoGrow(e.target as HTMLTextAreaElement)}
                        value={postText}
                        onChange={e => setPostText(e.target.value)}
                        rows={2}
                        style={{
                            background: palette.bgPrimary,
                            resize: "none",
                        }}
                    />
                </div>

                <div
                    className="flex flex-row text-2xl gap-5 me-2"
                    style={{ color: palette.primary }}
                >
                    <button>
                        <BsFillSendPlusFill />
                    </button>
                    <button type="button" onClick={() => setShowModal(true)}>
                        <ImAttachment />
                    </button>
                </div>
            </div>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-[60vw] min-w-[500px] my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none"
                                style={{ background: palette.bgPrimary }}
                            >
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Create Post
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 opacity-80 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={closeModal}
                                    >
                                        <IoClose
                                            style={{ color: palette.text }}
                                        />
                                    </button>
                                </div>

                                {/*body*/}
                                <div className="m-5 ">
                                    <div className="flex gap-5 items-center ">
                                        <div className="relative w-[50px] h-[50px]">
                                            <Image
                                                src={LeBron}
                                                alt="Profile img"
                                                layout="fill"
                                                className="object-cover rounded-full"
                                            />
                                        </div>
                                        <h1 className="text-xl">
                                            LeBron James
                                        </h1>
                                    </div>
                                </div>

                                <div className="relative px-6 flex-auto">
                                    <textarea
                                        className="outline-none w-full h-full text-xl"
                                        placeholder="What's on your mind?"
                                        onInput={e =>
                                            autoGrow(
                                                e.target as HTMLTextAreaElement
                                            )
                                        }
                                        value={postText}
                                        onChange={e =>
                                            setPostText(e.target.value)
                                        }
                                        rows={5}
                                        style={{
                                            background: palette.bgPrimary,
                                            resize: "none",
                                        }}
                                    />
                                </div>

                                <div
                                    className="border-2 border-dashed border-gray-300 m-4 p-5 rounded-lg mb-4 cursor-pointer hover:border-blue-500 "
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onClick={() =>
                                        document
                                            .getElementById("fileInput")
                                            ?.click()
                                    }
                                >
                                    {!selectedImage ? (
                                        <div className="text-center text-gray-500">
                                            + Add a photo
                                        </div>
                                    ) : (
                                        <div className="relative w-full aspect-auto">
                                            <img
                                                src={URL.createObjectURL(
                                                    selectedImage
                                                )}
                                                alt="Selected"
                                                className="w-full h-full object-cover rounded"
                                            />
                                            <button
                                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                                onClick={removeImage}
                                            >
                                                <IoClose
                                                    style={{
                                                        color: palette.text,
                                                    }}
                                                />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <input
                                    type="file"
                                    id="fileInput"
                                    multiple
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-gray-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={cancel}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="hoverable text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        style={
                                            {
                                                "--bg-color": palette.primary,
                                                "--bg-hover": palette.bgHover,
                                            } as any
                                        }
                                    >
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default PostForm;
