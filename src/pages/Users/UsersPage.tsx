import { Link, useLoaderData } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import type { UserTypes } from "../../types/types";

function UsersPage() {
  const users = useLoaderData() as UserTypes[];

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Users</h1>
      
      <Row className="justify-content-center">
        {users.map((user) => (
          <Col key={user.id} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text className="text-muted">
                  @{user.name.toLowerCase().replace(/\s+/g, '')}
                </Card.Text>
                <Link to={`/users/${user.id}`}>
                  <Button variant="primary" size="sm">
                    View Profile
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UsersPage;