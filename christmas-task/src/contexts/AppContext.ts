import React from 'react';
import { IModal } from '../App';

export const AppContext = React.createContext({
  favorites: [] as string[],
  handleToggleFavorites: (value: string) => [''],
});
