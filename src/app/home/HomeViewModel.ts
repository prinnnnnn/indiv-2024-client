"use client"

import { Post, User } from "@/common/model";
import { fetchAllPosts, fetchLikedPostsIds, likePost } from "@/service/postServices";
import { fetchFollowings, fetchUserInfo } from "@/service/userServices";
import { getCookie } from "@/utils/helpers";
import { PostWidgetVM } from "@/utils/viewModel";
import assert from "assert";
import { autorun, makeObservable, computed, action, runInAction, observable } from "mobx";

export class HomeViewModel implements PostWidgetVM {

    user: User | undefined;
    posts: Post[] | undefined;
    followingIds: number[] | undefined;
    likedPostIds: number[];
    isLoading: boolean;
    // numLikes: number;

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
            const likedIds = await fetchLikedPostsIds();
            runInAction(() => {
                this.likedPostIds = likedIds;
            })

            this.isLoading = false;
            
        } catch (error) {
            if (!(error instanceof ReferenceError))
                console.error("Error initializing data:", error);
        }
    };

    constructor() {

        
        this.user = undefined;
        this.posts = [];
        this.followingIds = [];
        this.likedPostIds = [];
        this.isLoading = true;
        this.initData();
        
        makeObservable(this, {

            /* observable */
            user: observable,
            posts: observable,
            followingIds: observable,
            likedPostIds: observable,
            isLoading: observable,

            /* computed */
            userInfo: computed,
            homeFeeds: computed,

            /* actions */
            likePost: action,
            followUser: action,
            isLikedByLoggedInUser: action,

        });


        // autorun(() => {
        //     console.log(`Current state of home view model...`);
        //     // console.log(this.user);
        //     // console.log(this.posts);
        //     // console.log(this.followingIds);
        //     console.log(this.likedPostIds);
        //     console.log(this.isLoading);
        //     console.log(`\n\n`);
        // })

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

    async likePost(postId: number) {

        try {

            const type = await likePost(postId);
    
            if (type === "dislike") {
                this.likedPostIds = this.likedPostIds!.filter(id => postId !== id);
                this.posts = this.posts!.map(post => (post.id === postId ? {
                    ...post,
                    likeCounts: post.likeCounts - 1,
                } : post))
            } else {
                this.likedPostIds!.push(postId);
                this.posts = this.posts!.map(post => (post.id === postId ? {
                    ...post,
                    likeCounts: post.likeCounts + 1,
                } : post))
            }

            console.log(this.likedPostIds);

        } catch (err) {
            console.error(err);
        }

    }

    isLikedByLoggedInUser(postId: number) {
        return this.likedPostIds.includes(postId);
    }

    followUser() {

    }

}