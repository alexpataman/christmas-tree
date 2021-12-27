import Storage from '../../helpers/Storage';
import './ResetLocalStorage.scss';

export default function ResetLocalStorage() {
  const resetLocalStorage = () => {
    const storage = new Storage();
    storage.clear();
    window.location.reload();
  };

  return (
    <div className="ResetLocalStorage">
      <button onClick={resetLocalStorage}>Сброс Local Storage</button>
    </div>
  );
}
