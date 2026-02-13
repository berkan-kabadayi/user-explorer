export interface UserTypes {
  id: number;
  name: string;
}

export interface UserDetailTypes {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UserPostsType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface UserCommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface UserAlbumsTypes {
  userId: number;
  id: number;
  title: string;
}

export interface AlbumPhotoTypes {
  albumId: number;
  id: number;
  title: string;
  url: string;
}

export interface UserTodosTypes {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface UserPostDetailResponse {
  post: UserPostsType;
  comments: UserCommentType[];
}