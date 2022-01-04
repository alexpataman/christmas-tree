import { filterViewInputProps } from '../../../types/filters';
import { colorOptions as options } from '../../../config';
import { FilterPicker } from './FilterPicker';
import './FilterByColor.scss';

export const FilterByColor = (props: filterViewInputProps) => {
  return (
    <div className="FilterByColor">
      Цвет:
      <FilterPicker {...props} options={options} />
    </div>
  );
};
