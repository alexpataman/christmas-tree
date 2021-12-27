import Storage from '../../helpers/Storage';

export default function ResetLocalStorage() {
  const resetLocalStorage = () => {
    const storage = new Storage();
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
}
