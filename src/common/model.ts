export interface User {
    id: number
    email: string
    password: string
    firstName: string
    lastName: string
    profilePath: string
    bio: string
    coverPhotoUrl: string
    createdAt: Date
    updatedAt: Date
}

export interface Post {
    id: number
    content: string
    createdAt: Date
    updatedAt: Date
    imageUrl: string
    authorId: number
    author: User
    profileImg: string
}

export interface RegisterForm {
    email: string
    password: string
    firstName: string
    lastName: string
}