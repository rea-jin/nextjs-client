// 型を指定するためだけのファイル

export interface UserType {
    id: number;
    usernmae: string;
    email: string;
    password: string;
    posts: Post[];
}


export interface PostType {
    id: number;
    content: string;
    createdAt: string;
    authorId: number;
    author: User;
}