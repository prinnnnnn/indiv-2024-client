import { Post, User } from "@/common/model";
import { action, computed, makeObservable, observable, autorun, runInAction } from "mobx";

export class RootStore {

    user: User | null
    followers: User[]
    feeds: Post[]

    constructor() {

        this.user = null;
        this.followers = [];
        this.feeds = [];

        makeObservable(this, {

            /* Observables */
            user: observable,
            followers: observable,
            feeds: observable,

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
    }

    
    get getUserInfo() {
        return this.user 
    }
    
    get homeFeeds() {
        return this.feeds;
    }
    

    login(user: User, token: string) {
        this.user = user;
        document.cookie = `token=${token}; path=/; max-age=${86400}; samesite=strict`;
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

    followUser() {

    }

    likePost() {

    }

    commentPost() {

    }

    sendMessage() {

    }
}

const rootStore = new RootStore();
export default rootStore;