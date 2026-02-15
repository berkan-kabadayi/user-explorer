import { useLoaderData, useParams } from "react-router-dom";
import type { AlbumPhotoTypes } from "../../../types/types";
import { useFavoritesStore } from "../../../store/store";
import { Button } from "react-bootstrap";

function UserAlbumPhotos() {
  const photos = useLoaderData() as AlbumPhotoTypes[];
  const { userId } = useParams();
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const handleFavoriteToggle = (photo: AlbumPhotoTypes) => {
    if (isFavorite(photo.id)) {
      removeFavorite(photo.id);
    } else {
      addFavorite({
        id: photo.id,
        userId: Number(userId),
        albumId: photo.albumId,
        title: photo.title,
        url: photo.url,
        type: "photo",
      });
    }
  };

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
            <Button
              size="sm"
              variant={isFavorite(photo.id) ? "warning" : "outline-warning"}
              onClick={() => handleFavoriteToggle(photo)}
            >
              {isFavorite(photo.id) ? "★" : "☆"}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserAlbumPhotos;
