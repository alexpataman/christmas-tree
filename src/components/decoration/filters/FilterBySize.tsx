import { filterViewInputProps } from '../../../types/filters';
import { sizeOptions as options } from '../../../config';
import { FilterPicker } from './FilterPicker';
import './FilterBySize.scss';

export const FilterBySize = (props: filterViewInputProps) => {
  return (
    <div className="FilterBySize">
      Размер:
      <FilterPicker {...props} options={options} />
    </div>
  );
};
