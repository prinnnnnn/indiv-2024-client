import { Post, User } from "@/common/model";
import { autorun, computed, makeAutoObservable, makeObservable, toJS } from "mobx";
// import { action, computed, makeObservable, observable, autorun, runInAction } from "mobx";
// import { enableStaticRendering } from "mobx-react-lite";

// enableStaticRendering(typeof window === "undefined");

type AppState = {
    user: User | null
    followings: number[] // for checking if user follow ones
    followers: User[]
    posts: Post[]
    userPosts: Post[]
    likedPostIds: number[] // for checking if user like it
    createdAt: number
}

export class RootStore {

    private data: AppState = {
        user: null,
        followings: [],
        followers: [],
        posts: [],
        userPosts: [],
        likedPostIds: [],
        createdAt: 0,
    }
    

    constructor() {

        this.data.createdAt = Date.now()
        makeObservable(this, {
            getUserInfo: computed,
            homeFeeds: computed,
        })

        autorun(() => {
            if (this.getUserInfo) {
                localStorage.setItem("AppState", JSON.stringify(toJS(this.data)));
            }
            this.logUserDetails();
        })

    }

    loadFromLocalStorage() {
        const storedData = localStorage.getItem("AppState");
        if (storedData) {
            // console.log(storedData);
            this.data = JSON.parse(storedData);
        }
    }

    logUserDetails = () => {
        console.log(`Current user: ${this.data.user}`);
        console.log(`User's home feeds...`);
        console.log(this.data.posts);
        console.log(`State created at: ${this.data.createdAt}`);
    }
    
    get getUserInfo() {
        return this.data.user 
    }
    
    get homeFeeds() {
        return this.data.posts;
    }

    get userPosts() {
        return this.data.userPosts;
    }

    isFollowed(userId: number) {
        return this.data.followings.includes(userId);
    }

    isPostLiked(postId: number) {
        return this.data.likedPostIds.includes(postId)
    }

    login(user: User) {
        this.data.user = user;

        if (typeof window === undefined) {
            console.log(`mobx's Login Called at server`);
        } else {
            console.log(`mobx's Login Called at client`);
        }

        localStorage.setItem("AppState", JSON.stringify(toJS(this.data)));

    }

    logout() {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        this.data.user = null;
        this.data.followers = [];
        this.data.posts = [];
        localStorage.removeItem("AppState");
    }

    updateUserInfo(payload: User) {
        this.data.user = {
            ...this.data.user,
            ...payload,
        }
    }

    setFeeds(posts: Post[]) {
        this.data.posts = posts;
    }

    setUserFeeds(posts: Post[]) {
        this.data.userPosts = posts;
    }

    setFollowings(userIds: number[]) {
        this.data.followings = userIds;
    }

    setLikedPosts(postIds: number[]) {
        this.data.likedPostIds = postIds;
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