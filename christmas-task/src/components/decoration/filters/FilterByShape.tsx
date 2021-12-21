import { filterViewInputProps } from '../../../types/filters';
import './FilterByShape.scss';

const options = [
  { id: 'ball', value: 'шар' },
  { id: 'bell', value: 'колокольчик' },
  { id: 'cone', value: 'шишка' },
  { id: 'snowflake', value: 'снежинка' },
  { id: 'toy', value: 'фигурка' },
];

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
