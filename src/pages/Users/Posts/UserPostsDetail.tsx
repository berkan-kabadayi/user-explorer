import { useLoaderData, useParams, Link } from "react-router-dom";
import type { UserPostDetailResponse } from "../../../types/types";

function UserPostsDetail() {
  const { post, comments } = useLoaderData() as UserPostDetailResponse;
  const { userId } = useParams();

  return (
    <div>
      <Link to={`/users/${userId}/posts`}>← Back to Posts</Link>

      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>

      <hr />

      <h3>Comments ({comments.length})</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong> ({comment.email})
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserPostsDetail;
