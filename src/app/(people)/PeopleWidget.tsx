import React, { useEffect, useState } from "react";
import { useTheme } from "../ui/ThemeContext";
import Image from "next/image";
import defaultProfile from "@/public/assets/default-profile.jpg";
import { User } from "@/common/model";
import axios from "axios";
import { fetchRandomUsers } from "@/service/userServices";
import Link from "next/link";

const SuggestionCard = ({ user }: { user: User }) => {
    return (
        <div className="flex flex-row">
            <div className="relative w-[40px] h-[40px]">
                {user.profilePath && (
                    <img
                        src={user.profilePath}
                        alt="Profile img"
                        className="w-full h-full object-cover rounded-full mt-[0.3rem]"
                    />
                )}
                {!user.profilePath && (
                    <Image
                        src={defaultProfile}
                        alt="Profile img"
                        layout="fill"
                        className="object-cover rounded-full mt-[0.3rem]"
                    />
                )}
            </div>
            <div className="px-2 flex flex-col flex-grow">
                <Link
                    href={`/profile/${user.id}`}
                    className="hover:underline transition duration-300 ease-in-out"
                >
                    <b>{`${user.firstName} ${user.lastName}`}</b>
                </Link>
                <p>{user.bio}</p>
            </div>
        </div>
    );
};

const PeopleWidget = () => {
    const { palette } = useTheme();
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        const fetchdata = async () => {
            const users = await fetchRandomUsers();
            setUsers(users!);
        };

        fetchdata();
    }, []);

    return (
        <div
            className={` w-full min-h-48 rounded-lg p-4 flex flex-col gap-1`}
            style={{
                background: palette.bgPrimary,
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
        >
            <h3 style={{ color: palette.primary }}>Who to follows</h3>

            <div className="mt-3 flex flex-col justify-around gap-3">
                {users &&
                    users.map(user => (
                        <SuggestionCard user={user} key={user.id} />
                    ))}
            </div>
        </div>
    );
};

export default PeopleWidget;
