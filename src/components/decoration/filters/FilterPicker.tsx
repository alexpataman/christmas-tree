import classNames from 'classnames';
import { filterViewInputProps, FilterOptions } from '../../../types/filters';
import './FilterBySize.scss';

interface IFilterPickerProps extends filterViewInputProps {
  options: FilterOptions;
}

export const FilterPicker = (props: IFilterPickerProps) => {
  const { options, filterChangeHandler, filterSettings } = props;

  return (
    <ul className="list">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => filterChangeHandler(option.value)}
          className={classNames(`type-${option.id}`, {
            active: filterSettings && filterSettings.includes(option.value),
          })}
        >
          {option.value}
        </button>
      ))}
    </ul>
  );
};
