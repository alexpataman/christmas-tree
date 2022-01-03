import { createContext } from 'react';
import { FavoriteItems, FavoriteItem } from '../types/common';

interface IAppContext {
  favorites: FavoriteItems;
  toggleFavorites: (value: FavoriteItem) => FavoriteItems;
}

export const AppContext = createContext<IAppContext>({
  favorites: [],
  toggleFavorites: () => [],
});
