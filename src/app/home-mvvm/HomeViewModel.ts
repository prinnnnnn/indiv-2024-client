import { Post, User } from "@/common/model";
import { autorun, makeAutoObservable, toJS } from "mobx";

type PageState = {
    user: User | null,
    posts: Post[] | null,
}
export class HomeViewModel {

    private data: PageState = {
        user: null,
        posts: null,
    }

    constructor(payload: PageState) {

        this.data = payload;
        makeAutoObservable(this);
        
    }

    get user() {
        return this.data.user;
    }

    get homeFeeds() {
        return this.data.posts;
    }

}