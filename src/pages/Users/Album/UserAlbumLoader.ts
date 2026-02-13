import type { LoaderFunctionArgs } from "react-router-dom";


export const userAlbumsLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.userId}/photos`
  );

  if (!response.ok) {
    throw new Error("Albums could not be fetched");
  }

  const userAlbums = await response.json();
  return userAlbums;
};
