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
