import React from 'react';

export const FavoritesContext = React.createContext({
  favorites: [] as string[],
  handleToggleFavorites: (value: string) => [''],
});
