import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./pages/root";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/Users/UsersPage";
import { usersLoader } from "./pages/Users/UsersLoader";
import Favorites from "./pages/Favorites/Favorites";
import UsersDetailPage from "./pages/Users/DetailPage/UserDetailPage";
import { userDetailLoader } from "./pages/Users/DetailPage/UserDetailLoader";
import UserPosts from "./pages/Users/Posts/UserPosts";
import { userPostsLoader } from "./pages/Users/Posts/UserPostsLoader";
import UserAlbums from "./pages/Users/Album/UserAlbum";
import { userAlbumsLoader } from "./pages/Users/Album/UserAlbumLoader";
import UserAlbumPhotos from "./pages/Users/Album/UserAlbumPhotos";
import { userAlbumPhotosLoader } from "./pages/Users/Album/UserAlbumPhotosLoader";
import UserTodos from "./pages/Users/Todos/UserTodos";
import { userTodosLoader } from "./pages/Users/Todos/UserTodosLoader";
import UserPostsDetail from "./pages/Users/Posts/UserPostsDetail";
import { userPostDetailsLoader } from "./pages/Users/Posts/UserPostsDetailLoader";
import ErrorPage from "./ErrorPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "users/:userId",
        element: <UsersDetailPage />,
        loader: userDetailLoader,
        children: [
          {
            path: "posts",
            element: <UserPosts />,
            loader: userPostsLoader,
          },
          {
            path: "albums",
            element: <UserAlbums />,
            loader: userAlbumsLoader,
            children: [
              {
                path: ":albumId",
                element: <UserAlbumPhotos />,
                loader: userAlbumPhotosLoader,
              },
            ],
          },
          {
            path: "todos",
            element: <UserTodos />,
            loader: userTodosLoader,
          },
        ],
      },
      {
        
        path: "users/:userId/posts/:postId",
        element: <UserPostsDetail />,
        loader: userPostDetailsLoader,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);