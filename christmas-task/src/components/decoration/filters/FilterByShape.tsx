import { filterViewInputProps } from '../../../types/filters';
import { shapeOptions as options } from '../../../config';
import './FilterByShape.scss';

export default function FilterByShape(props: filterViewInputProps) {
  const { filterChangeHandler, filterState } = props;

  return (
    <div className="FilterByShape">
      Форма:
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
}
