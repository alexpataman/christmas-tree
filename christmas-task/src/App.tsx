import React from 'react';
import { Outlet } from 'react-router-dom';
import storage from './helpers/storage';
import { LOCAL_STORAGE_KEYS } from './types/common';
import Modal, { IModal } from './components/common/Modal';
import { AppContext } from './contexts/AppContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { maxFavorites } from './config';
import './App.scss';

function App() {
  const [favorites, setFavorites] = React.useState<string[]>(
    storage.get(LOCAL_STORAGE_KEYS.FAVORITES) || []
  );
  const [modalData, setModalData] = React.useState<IModal>({});
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const handleToggleFavorites = (value: string) => {
    let newFavorites = [...favorites];
    if (favorites.includes(value)) {
      newFavorites = favorites.filter((el) => el !== value);
    } else {
      if (newFavorites.length >= maxFavorites) {
        setModalData({
          title: `Извините, все слоты заполнены`,
          content: `В избранном может быть не более ${maxFavorites} игрушек. Удалите что-то из избранного, чтобы добавить что-то новое.`,
        });
        setModalOpen(true);
      } else {
        newFavorites.push(value);
      }
    }
    storage.set(LOCAL_STORAGE_KEYS.FAVORITES, newFavorites);
    setFavorites(newFavorites);
    return newFavorites;
  };

  const contextData = {
    favorites,
    handleToggleFavorites,
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
}

export default App;
