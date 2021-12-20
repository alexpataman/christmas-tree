import { filterViewInputProps } from '../../../types/filters';
import './FilterByFavorite.scss';

export default function FilterByFavorite(props: filterViewInputProps) {
  const { filterChangeHandler, filterState } = props;
  const state = !!filterState && filterState.has(true);

  return (
    <div className="FilterByFavorite">
      Favorite Only:
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
}
