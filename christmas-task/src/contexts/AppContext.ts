import React from 'react';
import { FavoriteItems, FavoriteItem } from '../types/common';

interface IAppContext {
  favorites: FavoriteItems;
  toggleFavorites: (value: FavoriteItem) => FavoriteItems;
}

export const AppContext = React.createContext<IAppContext>({
  favorites: [],
  toggleFavorites: () => [],
});
