import { Link, useLoaderData } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  ListGroup,
} from "react-bootstrap";
import type { UserTypes } from "../../types/types";
import { useFavoritesStore } from "../../store/store";
import { useMemo, useState } from "react";

function HomePage() {
  const users = useLoaderData() as UserTypes[];
  const { favorites } = useFavoritesStore();
  const [seed] = useState(() => Math.random());

  const randomFavorites = useMemo(() => {
    if (favorites.length === 0) return [];

    const seededRandom = (s: number) => {
      const x = Math.sin(s++) * 10000;
      return x - Math.floor(x);
    };

    const shuffled = [...favorites];
    let currentSeed = seed;

    for (let i = shuffled.length - 1; i > 0; i--) {
      currentSeed = (currentSeed * 16807) % 2147483647;
      const j = Math.floor(seededRandom(currentSeed) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, 3);
  }, [favorites, seed]);

  return (
    <Container className="mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3">Welcome to User Explorer!</h1>
        <p className="lead text-muted">
          Explore users, manage favorites, and organize your content
        </p>
      </div>

      <Row className="mb-5">
        <Col md={6} className="mb-3">
          <Card className="text-center shadow-sm h-100">
            <Card.Body>
              <div style={{ fontSize: "3rem" }} className="mb-2">
                👥
              </div>
              <h2 className="display-5">{users.length}</h2>
              <Card.Text className="text-muted">Total Users</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card className="text-center shadow-sm h-100">
            <Card.Body>
              <div style={{ fontSize: "3rem" }} className="mb-2">
                ⭐
              </div>
              <h2 className="display-5">{favorites.length}</h2>
              <Card.Text className="text-muted">Favorites</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-5 shadow-sm">
        <Card.Header>
          <h2 className="mb-0">⭐ Featured Favorites</h2>
        </Card.Header>
        <Card.Body>
          {randomFavorites.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted mb-3">
                No favorites yet. Start exploring!
              </p>
              <Link to="/users">
                <Button variant="outline-primary">Browse Users</Button>
              </Link>
            </div>
          ) : (
            <ListGroup variant="flush">
              {randomFavorites.map((fav) => (
                <ListGroup.Item
                  key={fav.id}
                  className="d-flex align-items-center"
                >
                  <Badge
                    bg={fav.type === "post" ? "primary" : "success"}
                    className="me-3"
                  >
                    {fav.type}
                  </Badge>
                  {fav.type === "post" && (
                    <Link
                      to={`/users/${fav.userId}/posts/${fav.id}`}
                      className="text-decoration-none"
                    >
                      {fav.title}
                    </Link>
                  )}
                  {fav.type === "photo" && (
                    <Link
                      to={`/users/${fav.userId}/albums/${fav.albumId}`}
                      className="text-decoration-none"
                    >
                      {fav.title}
                    </Link>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Header>
          <h2 className="mb-0">👥 Quick Actions</h2>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} className="mb-3 mb-md-0">
              <Link to="/users" className="text-decoration-none">
                <Button variant="primary" size="lg" className="w-100">
                  Browse All Users
                </Button>
              </Link>
            </Col>
            <Col md={6}>
              <Link to="/favorites" className="text-decoration-none">
                <Button variant="warning" size="lg" className="w-100">
                  View All Favorites
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HomePage;
