import { Link, Outlet, useLoaderData, useParams, useLocation } from "react-router-dom";
import { Container, Card, Nav } from "react-bootstrap";
import type { UserDetailTypes } from "../../../types/types";

function UsersDetailPage() {
  const userDetailRoutes = [
    { route: "posts", name: "Posts", icon: "📝" },
    { route: "albums", name: "Albums", icon: "📸" },
    { route: "todos", name: "Todos", icon: "✅" },
  ];
  
  const usersDetail = useLoaderData() as UserDetailTypes;
  const { userId } = useParams();
  const location = useLocation();

  return (
    <Container className="mt-4">
      {/* User Info Card */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title as="h2">👤 {usersDetail.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            @{usersDetail.username}
          </Card.Subtitle>
          <Card.Text>
            📧 {usersDetail.email}
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Navigation Tabs */}
      <Nav variant="tabs" className="mb-4">
        {userDetailRoutes.map((routeLink) => (
          <Nav.Item key={routeLink.route}>
            <Nav.Link 
              as={Link} 
              to={`/users/${userId}/${routeLink.route}`}
              active={location.pathname.includes(routeLink.route)}
            >
              {routeLink.icon} {routeLink.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Content Area */}
      <Outlet />
    </Container>
  );
}

export default UsersDetailPage;