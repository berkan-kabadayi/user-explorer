import { Link, useLoaderData } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";
import type { UserPostsType } from "../../../types/types";
import { useFavoritesStore } from "../../../store/store";

function UserPosts() {
  const posts = useLoaderData() as UserPostsType[];
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const handleFavoriteToggle = (post: UserPostsType) => {
    if (isFavorite(post.id)) {
      removeFavorite(post.id);
    } else {
      addFavorite({
        id: post.id,
        userId: post.userId,
        title: post.title,
        type: "post",
      });
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Posts</h2>
        <Badge bg="secondary">{posts.length}</Badge>
      </div>

      {posts.map((post) => (
        <Card key={post.id} className="mb-3">
          <Card.Body className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <Link 
                to={`/users/${post.userId}/posts/${post.id}`}
                className="text-decoration-none"
              >
                <h5 className="mb-1">{post.title}</h5>
              </Link>
              <p className="mb-0 text-muted small">
                {post.body.substring(0, 100)}...
              </p>
            </div>
            
            <Button 
              variant={isFavorite(post.id) ? "warning" : "outline-warning"}
              size="sm"
              onClick={() => handleFavoriteToggle(post)}
              className="ms-2"
            >
              {isFavorite(post.id) ? "★" : "☆"}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default UserPosts;
