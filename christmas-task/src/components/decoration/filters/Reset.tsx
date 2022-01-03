import { FilterContext } from '../../../contexts/FilterContext';
import './Reset.scss';

export const Reset = () => {
  return (
    <div className="Reset">
      <FilterContext.Consumer>
        {({ handleReset }) => (
          <button onClick={handleReset}>Сброс фильтров</button>
        )}
      </FilterContext.Consumer>
    </div>
  );
};
