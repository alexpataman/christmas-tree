import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { storage } from './helpers/storage';
import { AppContext } from './contexts/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Modal, IModal } from './components/common/Modal';
import * as types from './types/common';
import * as config from './config';
import './App.scss';

export const App = () => {
  const [favorites, setFavorites] = useState<types.FavoriteItems>(
    storage.get(types.LOCAL_STORAGE_KEYS.FAVORITES) || []
  );
  const [modalData, setModalData] = useState<IModal>({});
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleFavorites = (value: string) => {
    let newFavorites = [...favorites];
    if (favorites.includes(value)) {
      newFavorites = favorites.filter((el) => el !== value);
    } else {
      if (newFavorites.length >= config.maxFavorites) {
        setModalData({
          title: `Извините, все слоты заполнены`,
          content: `В избранном может быть не более ${config.maxFavorites} игрушек. Удалите что-то из избранного, чтобы добавить что-то новое.`,
        });
        setModalOpen(true);
      } else {
        newFavorites.push(value);
      }
    }
    storage.set(types.LOCAL_STORAGE_KEYS.FAVORITES, newFavorites);
    setFavorites(newFavorites);
    return newFavorites;
  };

  const contextData = {
    favorites,
    toggleFavorites,
    setModalData,
    setModalOpen,
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <AppContext.Provider value={contextData}>
        <Header />
        <main>
          <div className="container">
            <Outlet />
          </div>
        </main>
        <Footer />
      </AppContext.Provider>
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
};

export default App;
