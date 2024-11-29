"use client"

import { Post, User } from "@/common/model";
import { fetchAllPosts } from "@/service/postServices";
import { fetchFollowings, fetchUserInfo } from "@/service/userServices";
import { getCookie } from "@/utils/helpers";
import assert from "assert";
import { autorun, makeObservable, makeAutoObservable, toJS, computed, action, runInAction, observable } from "mobx";

export class HomeViewModel {

    public user: User | undefined;
    public posts: Post[] | undefined;
    public followingIds: number[] | undefined;
    // private likedPostIds: number[];

    private initData = async () => {
        
        try {

            assert(window !== undefined);

            /* fetch user info */
            const userInfo = await fetchUserInfo();
            runInAction(() => {
                this.user = userInfo;
            });
            
            /* fetch followings Id */
            const followingIds = await fetchFollowings();
            runInAction(() => {
                this.followingIds = followingIds;
            });
            
            /* fetch follower posts */
            const posts = await fetchAllPosts();
            runInAction(() => {
                this.posts = posts;
            });

            /* fetch posts'id liked by user */
            // Add similar pattern for likedPostIds
        } catch (error) {
            console.error("Error initializing data:", error);
        }
    };

    constructor() {

        
        this.user = undefined;
        this.posts = [];
        this.followingIds = [];
        this.initData();
        
        makeObservable(this, {

            /* observable */
            user: observable,
            posts: observable,

            /* computed */
            userInfo: computed,
            homeFeeds: computed,

            /* actions */
            likePost: action,
            followUser: action,

        });


        autorun(() => {
            console.log(`Current state of home view model...`);
            console.log(this.user);
            console.log(this.posts);
            console.log(this.followingIds);
            console.log(`\n\n`);
        })

    }


    get userInfo() {
        return this.user;
    }

    get homeFeeds() {
        return this.posts;
    }

    createPost(post: Post) {
        this.posts?.push(post);
    }

    rollBackCreatePost() {
        this.posts?.pop();
    }

    likePost() {

    }

    followUser() {

    }

}