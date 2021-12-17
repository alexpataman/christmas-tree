import { filterViewInputProps } from '../../../types/filters';
import './FilterByShape.css';

const options = ['ball', 'bell', 'cone', 'snowflake', 'toy'];

export default function FilterByShape(props: filterViewInputProps) {
  const { filterChangeHandler, filterState } = props;

  return (
    <div className="FilterByShape">
      Shape:
      <ul className="FilterByShape__list">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => filterChangeHandler(option)}
            className={`
            FilterByShape__button
            FilterByShape__button_type-${option}
            ${
              filterState && filterState.has(option)
                ? 'FilterByShape_active'
                : ''
            }`}
          >
            {option}
          </button>
        ))}
      </ul>
    </div>
  );
}
