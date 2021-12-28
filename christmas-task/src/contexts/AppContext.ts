import React from 'react';

export const AppContext = React.createContext({
  favorites: [] as string[],
  handleToggleFavorites: (value: string) => [''],
});
