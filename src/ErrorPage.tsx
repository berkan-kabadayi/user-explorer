import { Link, useRouteError } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Card className="text-center shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
        <Card.Body className="p-5">
          <div style={{ fontSize: "5rem" }} className="mb-3">
            ⚠️
          </div>
          <Card.Title as="h1" className="mb-3">
            Oops! Something went wrong
          </Card.Title>
          <Card.Text className="text-danger mb-4" style={{ fontSize: "1.1rem" }}>
            {error.message || "An unexpected error occurred"}
          </Card.Text>
          <Link to="/" className="text-decoration-none">
            <Button variant="primary" size="lg">
              ← Go back to Home
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ErrorPage;