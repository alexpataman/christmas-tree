import { filterViewInputProps } from '../../../types/filters';
import './FilterByName.scss';

export const FilterByName = (props: filterViewInputProps) => {
  const { filterChangeHandler, filterState } = props;
  let value = '';
  if (filterState) {
    [value] = Array.from(filterState.values()) as string[];
  }

  return (
    <div className="FilterByName">
      <h5 className="title">Поиск</h5>
      <div className="searchWrapper">
        <input
          autoFocus
          placeholder="Название игрушки..."
          type="text"
          value={value}
          onChange={(event) => filterChangeHandler(event.target.value)}
          className={`search ${value.length > 0 && 'not-empty'}`}
        />
        {value.length > 0 && (
          <div className="clear" onClick={() => filterChangeHandler('')} />
        )}
      </div>
    </div>
  );
};
