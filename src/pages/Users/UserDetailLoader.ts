import type { LoaderFunctionArgs } from "react-router-dom";

export const userDetailLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );

  const userDetail = await response.json();
  return userDetail;
};
