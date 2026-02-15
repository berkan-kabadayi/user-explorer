import { Link, Outlet, useLoaderData } from "react-router-dom";
import { Row, Col, Card, Badge } from "react-bootstrap";
import type { UserAlbumsTypes } from "../../../types/types";

function UserAlbums() {
  const albums = useLoaderData() as UserAlbumsTypes[];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Albums</h2>
        <Badge bg="secondary">{albums.length}</Badge>
      </div>

      <Row>
        {albums.map((album) => (
          <Col key={album.id} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Body>
                <div className="text-center mb-2" style={{ fontSize: '3rem' }}>
                  📸
                </div>
                <Card.Title className="text-center">
                  <Link 
                    to={album.id.toString()}
                    className="text-decoration-none"
                  >
                    {album.title}
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Outlet />
    </div>
  );
}

export default UserAlbums;