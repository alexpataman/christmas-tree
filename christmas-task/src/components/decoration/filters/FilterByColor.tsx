import classNames from 'classnames';
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
            className={classNames(`type-${option.id}`, {
              active: filterState && filterState.includes(option.value),
            })}
          >
            {option.value}
          </button>
        ))}
      </ul>
    </div>
  );
};
