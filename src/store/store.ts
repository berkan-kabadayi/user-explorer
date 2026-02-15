import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { FavoritesStore } from "../types/types";

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (item) =>
        set((state) => ({
          favorites: [...state.favorites, item],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav.id !== id),
        })),

      isFavorite: (id) => {
        return get().favorites.some((fav) => fav.id === id);
      },
    }),
    {
      name: "favorites-storage",
    }
  )
);
