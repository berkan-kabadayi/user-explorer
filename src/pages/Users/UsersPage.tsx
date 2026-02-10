import { useLoaderData } from "react-router-dom";
import type { UserTypes } from "../../types/types";

function UsersPage() {
  const users = useLoaderData() as UserTypes[];

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersPage;
