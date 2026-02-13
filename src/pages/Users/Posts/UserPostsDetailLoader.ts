import type { LoaderFunctionArgs } from "react-router-dom";

export const userPostDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const commentsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`
  );

  if (!postResponse.ok || !commentsResponse.ok) {
    throw new Error("Failed to load post details.");
  }

  const post = await postResponse.json();
  const comments = await commentsResponse.json();

  return { post, comments };
};