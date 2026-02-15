import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Badge,
  ListGroup,
} from "react-bootstrap";
import { useFavoritesStore } from "../../store/store";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites, removeFavorite } = useFavoritesStore();

  const photos = favorites.filter((fav) => fav.type === "photo");
  const posts = favorites.filter((fav) => fav.type === "post");

  if (favorites.length === 0) {
    return (
      <Container className="mt-4">
        <h1>Favorites</h1>
        <p className="text-muted">No favorites yet. Start adding some!</p>
        <Link to="/users">
          <Button variant="primary">Browse Users</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Favorites ({favorites.length})</h1>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => {
            if (window.confirm("Clear all favorites?")) {
              favorites.forEach((fav) => removeFavorite(fav.id));
            }
          }}
        >
          Clear All
        </Button>
      </div>

      {photos.length > 0 && (
        <div className="mb-5">
          <h2 className="mb-3">📸 Photos ({photos.length})</h2>
          <Row>
            {photos.map((photo) => (
              <Col key={photo.id} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://picsum.photos/300/200?random=${photo.id}`}
                    alt={photo.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Badge bg="success" className="mb-2">
                      photo
                    </Badge>
                    <Card.Title>
                      <Link
                        to={`/users/${photo.userId}/albums/${photo.albumId}`}
                      >
                        {photo.title}
                      </Link>
                    </Card.Title>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFavorite(photo.id)}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {posts.length > 0 && (
        <div>
          <h2 className="mb-3">📝 Posts ({posts.length})</h2>
          <ListGroup>
            {posts.map((post) => (
              <ListGroup.Item
                key={post.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <Badge bg="primary" className="me-2">
                    post
                  </Badge>
                  <Link to={`/users/${post.userId}/posts/${post.id}`}>
                    {post.title}
                  </Link>
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => removeFavorite(post.id)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </Container>
  );
}

export default Favorites;
