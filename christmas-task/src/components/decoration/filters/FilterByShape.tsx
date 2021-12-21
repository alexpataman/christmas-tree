import { filterViewInputProps } from '../../../types/filters';
import './FilterByShape.scss';

const options = ['ball', 'bell', 'cone', 'snowflake', 'toy'];

export default function FilterByShape(props: filterViewInputProps) {
  const { filterChangeHandler, filterState } = props;

  return (
    <div className="FilterByShape">
      Форма:
      <ul className="list">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => filterChangeHandler(option)}
            className={`
            button
            type-${option}
            ${filterState && filterState.includes(option) ? 'active' : ''}`}
          >
            {option}
          </button>
        ))}
      </ul>
    </div>
  );
}
