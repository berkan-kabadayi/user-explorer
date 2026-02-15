import { Link, useLoaderData } from "react-router-dom";
import type { UserPostsType } from "../../../types/types";
import { useFavoritesStore } from "../../../store/store";
import { Button } from "react-bootstrap";

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
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/users/${post.userId}/posts/${post.id}`}>
              {post.title}
            </Link>
            <Button onClick={() => handleFavoriteToggle(post)}>
              {isFavorite(post.id) ? "★" : "☆"}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserPosts;
