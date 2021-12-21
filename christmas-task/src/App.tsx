import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './App.scss';
import { FavoritesContext } from './contexts/FavoritesContext';
import Storage from './helpers/Storage';
import { maxFavorites } from './config';
import Modal from './components/common/Modal';

interface IModal {
  title?: string;
  content?: string;
}

function App() {
  const storage = new Storage();
  const storedFavorites: string[] = storage.get('favorites') || [];
  const [favorites, setFavorites] = React.useState(storedFavorites);
  const [modalData, setModalData] = React.useState<IModal>({});
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleToggleFavorites = (value: string) => {
    let newFavorites = [...favorites];
    if (favorites.includes(value)) {
      newFavorites = favorites.filter((el) => el !== value);
    } else {
      if (newFavorites.length >= maxFavorites) {
        setModalData({
          title: `В избранном может быть не более ${maxFavorites} игрушек`,
          content: `Удалите что-то из избранного, чтобы добавить что-то новое.`,
        });
        setModalOpen(true);
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

  const handleModalClose = () => {
    setModalOpen(false);
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
      {modalOpen && (
        <Modal
          open={modalOpen}
          title={modalData.title}
          content={modalData.content}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;
