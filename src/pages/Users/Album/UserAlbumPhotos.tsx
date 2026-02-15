import { useLoaderData, useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import type { AlbumPhotoTypes } from "../../../types/types";
import { useFavoritesStore } from "../../../store/store";

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
    <Container className="mt-4">
      <Link to={`/users/${userId}/albums`} className="text-decoration-none">
        <Button variant="outline-secondary" size="sm" className="mb-3">
          ← Back to Albums
        </Button>
      </Link>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Album Photos</h2>
        <Badge bg="secondary">{photos.length}</Badge>
      </div>

      <Row>
        {photos.slice(0, 12).map((photo) => (
          <Col key={photo.id} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src={`https://picsum.photos/300?random=${photo.id}`}
                alt={photo.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Text className="small text-truncate" title={photo.title}>
                  {photo.title}
                </Card.Text>
                <Button
                  size="sm"
                  variant={isFavorite(photo.id) ? "warning" : "outline-warning"}
                  onClick={() => handleFavoriteToggle(photo)}
                  className="w-100"
                >
                  {isFavorite(photo.id) ? "★ Favorited" : "☆ Add to Favorites"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UserAlbumPhotos;