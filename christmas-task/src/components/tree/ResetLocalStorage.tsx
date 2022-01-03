import { storage } from '../../helpers/storage';

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
