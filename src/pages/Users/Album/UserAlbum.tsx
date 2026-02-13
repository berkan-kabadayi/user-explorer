import { Link, Outlet, useLoaderData } from "react-router-dom";
import type { UserAlbumsTypes } from "../../../types/types";

function UserAlbums() {
  const albums = useLoaderData() as UserAlbumsTypes[];

  return (
    <>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={album.id.toString()}>{album.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default UserAlbums;
