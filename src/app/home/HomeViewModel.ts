import { Post, User } from "@/common/model";
import { fetchAllPosts } from "@/service/postServices";
import { fetchFollowings, fetchUserInfo } from "@/service/userServices";
import { getCookie } from "@/utils/helpers";
import { autorun, makeObservable, makeAutoObservable, toJS, computed, action } from "mobx";

type PageState = {
    user: User | null,
    posts: Post[] | null,
}
export class HomeViewModel {

    private data: PageState = {
        user: null,
        posts: null,
    }

    private user: User | undefined;
    private posts: Post[] | undefined;
    private followingIds: number[] | undefined;
    // private likedPostIds: number[];

    private initData = async (userId: number) => {

        /* fetch user info */
        this.user = await fetchUserInfo(userId);
        
        /* fetch followings Id */
        this.followingIds = await fetchFollowings(userId);

        /* fetch follower posts */
        this.posts = await fetchAllPosts();

        /* fetch posts'id liked by user */
        // this.likedPostIds

    }

    constructor() {

        // const userId ;

        this.initData(4);

        makeObservable(this, {

            /* computed */
            userInfo: computed,
            homeFeeds: computed,

            /* actions */
            likePost: action,
            followUser: action,

        });
        
    }

    get userInfo() {
        return this.user;
    }

    get homeFeeds() {
        return this.posts;
    }

    likePost() {
        
    }

    followUser() {

    } 

}