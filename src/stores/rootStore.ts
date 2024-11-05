import { Post, User } from "@/common/model";
import { action, computed, makeObservable, observable, autorun, runInAction } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";

enableStaticRendering(typeof window === "undefined");
export class RootStore {

    user: User | null
    followers: User[]
    feeds: Post[]
    createdAt: number

    constructor() {

        this.user = null;
        this.followers = [];
        this.feeds = [];
        this.createdAt = Date.now()

        makeObservable(this, {

            /* Observables */
            user: observable,
            followers: observable,
            feeds: observable,
            createdAt: observable,

            /* actions */
            login: action,
            updateUserInfo: action,
            followUser: action,
            likePost: action,

            /* computed */
            getUserInfo: computed,
            homeFeeds: computed,

        })
        
        /* autorun */
        autorun(this.logUserDetails)
    }

    logUserDetails = () => {
        console.log(`Current user: ${this.user}`);
        console.log(`User's home feeds: ${this.feeds}`);
        console.log(`State created at: ${this.createdAt}`);
    }
    
    get getUserInfo() {
        return this.user 
    }
    
    get homeFeeds() {
        return this.feeds;
    }

    login(user: User, token: string) {
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

    followUser() {

    }

    likePost() {

    }

    commentPost() {

    }

    sendMessage() {

    }
}