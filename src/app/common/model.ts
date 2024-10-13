export interface User {
    id: number
    email: string
    password: string
    firstName: string
    lastName: string
    profilePath: string
    bio: string
    coverPhoto: string
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
}