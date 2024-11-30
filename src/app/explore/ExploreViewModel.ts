"use client"

import { Post, User } from "@/common/model";
import { fetchAllPosts } from "@/service/postServices";
import { fetchFollowings, fetchUserInfo } from "@/service/userServices";
import assert from "assert";
import { autorun, makeObservable, makeAutoObservable, toJS, computed, action, runInAction, observable } from "mobx";