import { User } from "@/common/model";

export interface PostWidgetVM {
    user: User | undefined,
    isLoading: boolean,
    likePost(postId: number): void,
    isLikedByLoggedInUser(postId: number): boolean,
}

export interface ProfileVM {
    user: User | undefined,
    isLoading: boolean,
    likePost(postId: number): void,
    isLikedByLoggedInUser(postId: number): boolean,
}