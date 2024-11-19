"use client";

import { fetchUserInfo } from "@/service/userServices";
import React, { useEffect } from "react";
import Profile from "../Profile";
import { User } from "@/common/model";

async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <p>Profile ID: {id}</p>
      </div>
    </div>
  );
}

export default page;
