import { Post, User } from "@/common/model";
// import { action, computed, makeObservable, observable, autorun, runInAction } from "mobx";
// import { enableStaticRendering } from "mobx-react-lite";

// enableStaticRendering(typeof window === "undefined");
export class RootStore {

    user: User | null
    followings: number[] // for checking if user follow ones
    followers: User[]
    feeds: Post[]
    likedPostIds: number[] // for checking if user like it
    createdAt: number

    constructor() {

        this.user = null;
        this.followings = [];
        this.followers = [];
        this.feeds = [];
        this.likedPostIds = [];
        this.createdAt = Date.now()

    //     makeObservable(this, {

    //         /* Observables */
    //         user: observable,
    //         followings: observable,
    //         followers: observable,
    //         feeds: observable,
    //         likedPostIds: observable,
    //         createdAt: observable,

    //         /* actions */
    //         login: action,
    //         updateUserInfo: action,
    //         followUser: action,
    //         likePost: action,
    //         isFollowed: action,
    //         isPostLiked: action,

    //         /* computed */
    //         getUserInfo: computed,
    //         homeFeeds: computed,

    //     })
        
    //     /* autorun */
    //     autorun(this.logUserDetails)
    }

    logUserDetails = () => {
        console.log(`Current user: ${this.user}`);
        console.log(`User's home feeds...`);
        console.log(this.feeds);
        console.log(`State created at: ${this.createdAt}`);
    }
    
    get getUserInfo() {
        return this.user 
    }
    
    get homeFeeds() {
        return this.feeds;
    }

    isFollowed(userId: number) {
        return this.followings.includes(userId);
    }

    isPostLiked(postId: number) {
        return this.likedPostIds.includes(postId)
    }

    login(user: User) {
        this.user = user;

        if (typeof window === undefined) {
            console.log(`mobx's Login Called at server`);
        } else {
            console.log(`mobx's Login Called at client`);
        }

    }

    logout() {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        this.user = null;
        this.followers = [];
        this.feeds = [];
    }

    updateUserInfo(payload: User) {
        this.user = {
            ...this.user,
            ...payload,
        }
    }

    setFeeds(posts: Post[]) {
        this.feeds = posts;
    }

    setFollowings(userIds: number[]) {
        this.followings = userIds;
    }

    setLikedPosts(postIds: number[]) {
        this.likedPostIds = postIds;
    }

    followUser() {

    }

    likePost() {

    }

    commentPost() {

    }

    sendMessage() {

    }
}