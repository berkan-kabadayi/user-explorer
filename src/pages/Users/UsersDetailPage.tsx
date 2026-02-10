import { Link, useLoaderData, useParams } from "react-router-dom";
import type { UserDetailTypes } from "../../types/types";

function UsersDetailPage() {
  const userDetailRoutes = [
    {
      route: "posts",
      name: "Posts",
    },
    {
      route: "albums",
      name: "Albums",
    },
    {
      route: "todos",
      name: "Todos",
    },
  ];
  const usersDetail = useLoaderData() as UserDetailTypes;
  const { userId } = useParams();
  return (
    <>
      <h1>{usersDetail.name}</h1>
      <p>Username: {usersDetail.username}</p>
      <p>E-mail: {usersDetail.email}</p>
      <nav>
        <ul>
          {userDetailRoutes.map((routeLink, index) => (
            <li key={index}>
              <Link to={`/users/${userId}/${routeLink.route}`}>
                {routeLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default UsersDetailPage;
