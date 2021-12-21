import { filterViewInputProps } from '../../../types/filters';
import './FilterBySize.scss';

const options = [
  { id: 'large', value: 'большой' },
  { id: 'medium', value: 'средний' },
  { id: 'small', value: 'малый' },
];

export default function FilterBySize(props: filterViewInputProps) {
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
            button
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
