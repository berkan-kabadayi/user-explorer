import type { LoaderFunctionArgs } from "react-router-dom";

export const userAlbumPhotosLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`
  );

  if (!response.ok) {
    throw new Error("Album photos could not be fetched");
  }

  const albums = await response.json();
  return albums.slice(0, 9);
};
