import { FilterContext } from '../../../contexts/FilterContext';
import Storage from '../../../helpers/Storage';
import './Reset.scss';

export default function Reset() {
  const resetLocalStorage = () => {
    const storage = new Storage();
    storage.clear();
    window.location.reload();
  };

  return (
    <div className="Reset">
      <FilterContext.Consumer>
        {({ handleReset }) => (
          <>
            <button onClick={handleReset}>Сброс фильтров</button>
            <button onClick={resetLocalStorage}>Сброс Local Storage</button>
          </>
        )}
      </FilterContext.Consumer>
    </div>
  );
}
