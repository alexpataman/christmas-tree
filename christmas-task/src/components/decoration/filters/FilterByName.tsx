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
      <h5 className="title">Search By Title</h5>
      <div className="searchWrapper">
        <input
          autoFocus
          placeholder="Start typing..."
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
