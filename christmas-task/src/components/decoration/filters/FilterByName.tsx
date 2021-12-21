import { filterViewInputProps } from '../../../types/filters';
import './FilterByName.scss';

export default function FilterByName(props: filterViewInputProps) {
  const { filterChangeHandler, filterState } = props;
  let value;
  if (filterState) {
    [value] = Array.from(filterState.values()) as string[];
  } else {
    value = '';
  }

  return (
    <div className="FilterByName">
      <h5 className="title">Поиск</h5>
      <div className="searchWrapper">
        <input
          autoFocus
          placeholder="Начните печатать..."
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
}
