import { filterViewInputProps } from '../../../types/filters';
import './FilterBySize.scss';

const options = ['large', 'medium', 'small'];

export default function FilterBySize(props: filterViewInputProps) {
  const { filterChangeHandler, filterState } = props;

  return (
    <div className="FilterBySize">
      Размер:
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
