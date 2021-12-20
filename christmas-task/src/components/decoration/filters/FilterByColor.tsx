import { filterViewInputProps } from '../../../types/filters';
import './FilterByColor.scss';

const options = ['white', 'yellow', 'red', 'blue', 'green'];

export default function FilterByColor(props: filterViewInputProps) {
  const { filterChangeHandler, filterState } = props;

  return (
    <div className="FilterByColor">
      Color:
      <ul className="FilterByColor__list">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => filterChangeHandler(option)}
            className={`
            FilterByColor__button
            FilterByColor__button_type-${option}
            ${
              filterState && filterState.has(option)
                ? 'FilterByColor_active'
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
