import { Post, User } from "@/common/model";
import { makeAutoObservable, observable } from "mobx";

export class HomeViewModel {

    // @observable
    public user: User | null

    // @observable
    public homeFeeds: Post[] | null

    constructor(user: User, feeds: Post[]) {
        this.user = user;
        this.homeFeeds = feeds;
        makeAutoObservable(this);
    }
}