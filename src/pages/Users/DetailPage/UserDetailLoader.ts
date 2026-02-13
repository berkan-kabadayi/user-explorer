import type { LoaderFunctionArgs } from "react-router-dom";

export const userDetailLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );

  if (!response.ok) {
    throw new Error("User could not be found.");
  }

  const userDetail = await response.json();
  return userDetail;
};
