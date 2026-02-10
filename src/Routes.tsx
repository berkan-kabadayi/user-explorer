import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./pages/root";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/Users/UsersPage";
import { usersLoader } from "./pages/Users/UsersLoader";
import Favorites from "./pages/Favorites/Favorites";
import UsersDetailPage from "./pages/Users/UserDetailPage";
import { userDetailLoader } from "./pages/Users/UserDetailLoader";
import UserPosts from "./pages/Users/UserPosts";
import { userPostsLoader } from "./pages/Users/UserPostsLoader";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
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
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
