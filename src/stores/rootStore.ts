import { Post, User } from "@/common/model";
import { makeAutoObservable } from "mobx";

export class RootStore {

    user: User | null
    token: string | null
    followers: User[]
    feeds: Post[]

    constructor() {

        this.user = null;
        this.followers = [];
        this.token = "";
        this.feeds = [];
        makeAutoObservable(this);

    }

    async login(user: User, token: string) {
        this.user = user;
        this.token = token;
    }

    async updateInfo() {

    }

    async followUser() {

    }

    async likePost() {

    }

    async commentPost() {

    }

    async sendMessage() {

    }
}

const rootStore = new RootStore();
export default rootStore;