import { filterViewInputProps } from '../../../types/filters';
import { colorOptions as options } from '../../../config';
import './FilterByColor.scss';

export const FilterByColor = (props: filterViewInputProps) => {
  const { filterChangeHandler, filterState } = props;

  return (
    <div className="FilterByColor">
      Цвет:
      <ul>
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
