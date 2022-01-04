import { FilterContext } from '../../../contexts/FilterContext';
import {
  FilterChangeHandler,
  filterInputProps,
  FilterValue,
  FILTER_TYPES,
  FilterSettings,
} from '../../../types/filters';

export const Filter = (props: filterInputProps) => {
  const { filterName, filterType, FilterComponent } = props;

  const setFilterValue = (
    value: FilterValue,
    filterSettings: FilterSettings,
    handler: FilterChangeHandler
  ) => {
    const currentFilterSettings = filterSettings[filterName];
    let newFilterSettings = currentFilterSettings || [];

    if (newFilterSettings.includes(value)) {
      newFilterSettings = newFilterSettings.filter((el) => el !== value);
    } else {
      if (filterType === FILTER_TYPES.SINGLE) {
        newFilterSettings.length = 0;
      }
      newFilterSettings.push(value);
    }

    handler(filterName, newFilterSettings);
  };

  return (
    <FilterContext.Consumer>
      {({ filterSettings, handleFilterChange }) => (
        <FilterComponent
          key={filterName}
          filterSettings={filterSettings[filterName]}
          filterChangeHandler={(value: FilterValue) =>
            setFilterValue(value, filterSettings, handleFilterChange)
          }
        />
      )}
    </FilterContext.Consumer>
  );
};
