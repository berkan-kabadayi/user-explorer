import { Link, useLoaderData } from "react-router-dom";
import type { UserTypes } from "../../types/types";
import { useFavoritesStore } from "../../store/store";
import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

function HomePage() {
  const users = useLoaderData() as UserTypes[];
  const { favorites } = useFavoritesStore();

  const [seed] = useState(() => Math.random());

  const randomFavorites = useMemo(() => {
    if (favorites.length === 0) return [];

    const seededRandom = (s: number) => {
      const x = Math.sin(s++) * 10000;
      return x - Math.floor(x);
    };

    const shuffled = [...favorites];
    let currentSeed = seed;

    for (let i = shuffled.length - 1; i > 0; i--) {
      currentSeed = (currentSeed * 16807) % 2147483647;
      const j = Math.floor(seededRandom(currentSeed) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, 3);
  }, [favorites, seed]);

  return (
    <>
      <div>
        <h1>👋 Welcome to User Explorer!</h1>

        <div>
          <h2>📊 Statistics</h2>
          <div>
            <div>
              <h3>{users.length}</h3>
              <p>Total Users</p>
            </div>
            <div>
              <h3>{favorites.length}</h3>
              <p>Favorites</p>
            </div>
          </div>
        </div>

        <div>
          <h2>⭐ Featured Favorites</h2>
          {randomFavorites.length === 0 ? (
            <p>No favorites yet. Start exploring!</p>
          ) : (
            <ul>
              {randomFavorites.map((fav) => (
                <li key={fav.id}>
                  <span>{fav.type}</span>
                  {fav.type === "post" && (
                    <Link to={`/users/${fav.userId}/posts/${fav.id}`}>
                      {fav.title}
                    </Link>
                  )}
                  {fav.type === "photo" && (
                    <Link to={`/users/${fav.userId}/albums/${fav.albumId}`}>
                      {fav.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2>👥 Quick Actions</h2>
          <Link to="/users">
            <Button>Browse All Users</Button>
          </Link>
          <Link to="/favorites">
            <Button>View All Favorites</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
