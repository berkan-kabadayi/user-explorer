import { Link, useLoaderData } from "react-router-dom";
import type { UserPostsType } from "../../../types/types";

function UserPosts() {
  const posts = useLoaderData() as UserPostsType[];
  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/users/${post.userId}/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserPosts;
