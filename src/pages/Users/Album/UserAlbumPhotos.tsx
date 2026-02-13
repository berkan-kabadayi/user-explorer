import { useLoaderData } from "react-router-dom";
import type { AlbumPhotoTypes } from "../../../types/types";

function UserAlbumPhotos() {
  const photos = useLoaderData() as AlbumPhotoTypes[];

  return (
    <>
      <h3>Album Photos</h3>
      <div>
        {photos.slice(0, 12).map((photo) => (
          <div key={photo.id}>
            <img
              src={`https://picsum.photos/150?random=${photo.id}`}
              alt={photo.title}
            />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserAlbumPhotos;
