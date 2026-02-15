import { Button } from "react-bootstrap";
import { useFavoritesStore } from "../../store/store";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites, removeFavorite } = useFavoritesStore();

  if (favorites.length === 0) {
    return (
      <div>
        <h1>Favorites</h1>
        <p>No favorites yet. Start adding some!</p>
      </div>
    );
  }

  return (
    <>
      <h1>Favorites {favorites.length}</h1>
      <ul>
        {favorites.map((fav) => {
          return (
            <li key={fav.id}>
              <span>{fav.type}</span>
              <h3>{fav.title}</h3>
              {fav.type === "post" && (
                <Link to={`/users/${fav.userId}/posts/${fav.id}`}>
                  {fav.title}
                </Link>
              )}
              {fav.type === "photo" && (
                <>
                  <Link to={`/users/${fav.userId}/albums/${fav.albumId}`}>
                    {fav.title}
                  </Link>
                  <img
                    src={`https://picsum.photos/150?random=${fav.id}`}
                    alt={fav.title}
                  />
                </>
              )}
              <Button onClick={() => removeFavorite(fav.id)}>Remove</Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Favorites;
