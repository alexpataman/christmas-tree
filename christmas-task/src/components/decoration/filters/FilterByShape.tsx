import { filterViewInputProps } from '../../../types/filters';
import { shapeOptions as options } from '../../../config';
import { FilterPicker } from './FilterPicker';
import './FilterByShape.scss';

export const FilterByShape = (props: filterViewInputProps) => {
  return (
    <div className="FilterByShape">
      Форма:
      <FilterPicker {...props} options={options} />
    </div>
  );
};
