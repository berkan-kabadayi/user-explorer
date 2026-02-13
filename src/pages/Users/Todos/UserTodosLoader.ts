import type { LoaderFunctionArgs } from "react-router-dom";

export const userTodosLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.userId) {
    throw new Error("Invalid user ID.");
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/todos?_limit=15`
  );

  if (!response.ok) {
    throw new Error("Failed to load user todos.");
  }

  return response.json();
};
