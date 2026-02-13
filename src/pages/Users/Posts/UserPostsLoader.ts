import type { LoaderFunctionArgs } from "react-router-dom";

export const userPostsLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/posts`
  );

  if (!response.ok) {
    throw new Error("Failed to load user posts.");
  }

  const userPosts = await response.json();
  return userPosts;
};
