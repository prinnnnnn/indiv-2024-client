"use client"

import { Post, User } from "@/common/model";
import { fetchAllPosts } from "@/service/postServices";
import { fetchFollowings, fetchUserInfo } from "@/service/userServices";
import { getCookie } from "@/utils/helpers";
import assert from "assert";
import { autorun, makeObservable, computed, action, runInAction, observable } from "mobx";