import { useLoaderData, useParams, Link } from "react-router-dom";
import { Card, Badge, Button, Container } from "react-bootstrap";
//                                ^^^^^^^^^ Import'a ekle
import type { UserPostDetailResponse } from "../../../types/types";

function UserPostsDetail() {
  const { post, comments } = useLoaderData() as UserPostDetailResponse;
  const { userId } = useParams();

  return (
    <Container className="mt-4">
      <Link to={`/users/${userId}/posts`} className="text-decoration-none">
        <Button variant="outline-secondary" size="sm" className="mb-3">
          ← Back to Posts
        </Button>
      </Link>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title as="h2">{post.title}</Card.Title>
          <Card.Text className="text-muted">{post.body}</Card.Text>
        </Card.Body>
      </Card>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Comments</h3>
        <Badge bg="secondary">{comments.length}</Badge>
      </div>

      {comments.length === 0 ? (
        <Card>
          <Card.Body className="text-center text-muted">
            No comments yet.
          </Card.Body>
        </Card>
      ) : (
        <>
          {comments.map((comment) => (
            <Card key={comment.id} className="mb-3">
              <Card.Body>
                <div className="d-flex align-items-start mb-2">
                  <div className="me-2">👤</div>
                  <div>
                    <strong>{comment.name}</strong>
                    <br />
                    <small className="text-muted">{comment.email}</small>
                  </div>
                </div>
                <Card.Text>{comment.body}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}

export default UserPostsDetail;
