import { filterViewInputProps } from '../../../types/filters';
import './FilterByColor.scss';

const options = [
  { id: 'white', value: 'белый' },
  { id: 'yellow', value: 'желтый' },
  { id: 'red', value: 'красный' },
  { id: 'blue', value: 'синий' },
  { id: 'green', value: 'зелёный' },
];

export default function FilterByColor(props: filterViewInputProps) {
  const { filterChangeHandler, filterState } = props;

  return (
    <div className="FilterByColor">
      Цвет:
      <ul className="FilterByColor__list">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => filterChangeHandler(option.value)}
            className={`
            FilterByColor__button
            FilterByColor__button_type-${option.id}
            ${
              filterState && filterState.includes(option.value)
                ? 'FilterByColor_active'
                : ''
            }`}
          >
            {option.value}
          </button>
        ))}
      </ul>
    </div>
  );
}
