import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './App.scss';
import { FavoritesContext } from './contexts/FavoritesContext';
import Storage from './helpers/Storage';
import { maxFavorites } from './config';

function App() {
  const storage = new Storage();
  const storedFavorites: string[] = storage.get('favorites') || [];
  const [favorites, setFavorites] = React.useState(storedFavorites);

  const handleToggleFavorites = (value: string) => {
    let newFavorites = [...favorites];
    if (favorites.includes(value)) {
      newFavorites = favorites.filter((el) => el !== value);
    } else {
      if (newFavorites.length >= maxFavorites) {
        alert(
          `There is a limit for favorites. No more than ${maxFavorites} items`
        );
      } else {
        newFavorites.push(value);
      }
    }
    storage.set('favorites', newFavorites);
    setFavorites(newFavorites);
    return newFavorites;
  };

  const contextData = {
    favorites,
    handleToggleFavorites,
  };

  return (
    <div className="App">
      <FavoritesContext.Provider value={contextData}>
        <Header />
        <main>
          <div className="container">
            <Outlet />
          </div>
        </main>
        <Footer />
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
