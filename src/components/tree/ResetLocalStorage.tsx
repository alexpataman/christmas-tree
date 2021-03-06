import { storage } from '../../helpers/StorageService';

export const ResetLocalStorage = () => {
  const resetLocalStorage = () => {
    storage.clear();
    window.location.reload();
  };

  return (
    <>
      <button className="button" onClick={resetLocalStorage}>
        Сброс Local Storage
      </button>
    </>
  );
};
