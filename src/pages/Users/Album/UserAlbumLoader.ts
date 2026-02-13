import type { LoaderFunctionArgs } from "react-router-dom";


export const userAlbumsLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/albums`
  );

  if (!response.ok) {
    throw new Error("Albums could not be fetched");
  }

  const userAlbums = await response.json();
  return userAlbums
};
