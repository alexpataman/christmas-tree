import { filterViewInputProps } from '../../../types/filters';
import './FilterByFavorite.scss';

export const FilterByFavorite = (props: filterViewInputProps) => {
  const { filterChangeHandler, filterSettings } = props;
  const state = !!filterSettings && filterSettings.includes(true);

  return (
    <div className="FilterByFavorite">
      Только любимые:
      <div>
        <input
          type="checkbox"
          className="favorite-input"
          id="checkbox"
          onChange={() => filterChangeHandler(!state)}
          checked={!!state}
        />
        <label htmlFor="checkbox" className="favorite-input-label"></label>
      </div>
    </div>
  );
};
