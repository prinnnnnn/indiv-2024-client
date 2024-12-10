"use client"

import { Post, User } from "@/common/model";
import { fetchAllPosts, fetchLikedPostsIds, fetchUserPosts, likePost } from "@/service/postServices";
import { fetchFollowings, fetchUserInfo, updateProfileCoverPicture } from "@/service/userServices";
import { PostWidgetVM, ProfileVM } from "@/utils/viewModel";
import assert from "assert";
import { autorun, makeObservable, computed, action, runInAction, observable } from "mobx";

export class ProfileViewModel implements PostWidgetVM, ProfileVM {

    user: User | undefined;
    posts: Post[] | undefined;
    followingIds: number[] = [];
    likedPostIds: number[] = [];
    isLoading: boolean;

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
            const posts = await fetchUserPosts(this.user!.id);
            runInAction(() => {
                this.posts = posts;
            });

            /* fetch posts'id liked by user */
            const likedIds = await fetchLikedPostsIds();
            runInAction(() => {
                this.likedPostIds = likedIds.data;
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

            /* actions */
            likePost: action,
            followUser: action,
            isLikedByLoggedInUser: action,

        });

    }

    async changeProfilePic(picture: File): Promise<void> {
        this.user = await updateProfileCoverPicture({ picture }, "profile");
    }

    async changeCoverPic(picture: File): Promise<void> {
        this.user = await updateProfileCoverPicture({ picture }, "cover");
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