import { filterViewInputProps } from '../../../types/filters';
import { sizeOptions as options } from '../../../config';
import './FilterBySize.scss';

export const FilterBySize = (props: filterViewInputProps) => {
  const { filterChangeHandler, filterState } = props;

  return (
    <div className="FilterBySize">
      Размер:
      <ul className="list">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => filterChangeHandler(option.value)}
            className={`            
            type-${option.id}
            ${
              filterState && filterState.includes(option.value) ? 'active' : ''
            }`}
          >
            {option.value}
          </button>
        ))}
      </ul>
    </div>
  );
};
