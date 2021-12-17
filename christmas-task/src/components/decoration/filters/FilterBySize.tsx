import { filterViewInputProps } from '../../../types/filters';
import './FilterBySize.css';

const options = ['large', 'medium', 'small'];

export default function FilterBySize(props: filterViewInputProps) {
  const { filterChangeHandler, filterState } = props;

  return (
    <div className="FilterBySize">
      Size:
      <ul className="FilterBySize__list">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => filterChangeHandler(option)}
            className={`
            FilterBySize__button
            FilterBySize__button_type-${option}
            ${
              filterState && filterState.has(option)
                ? 'FilterBySize_active'
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
