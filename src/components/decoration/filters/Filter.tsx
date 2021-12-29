import { FilterContext } from '../../../contexts/FilterContext';
import {
  FilterChangeHandler,
  filterInputProps,
  FilterValue,
  FILTER_TYPES,
  FilterSettings,
} from '../../../types/filters';

export default function Filter(props: filterInputProps) {
  const { filterName, filterType, FilterComponent } = props;

  const setFilterValue = (
    value: FilterValue,
    filterSettings: FilterSettings,
    handler: FilterChangeHandler
  ) => {
    const currentState = filterSettings[filterName];
    let state = currentState || [];

    if (state.includes(value)) {
      state = state.filter((el) => el !== value);
    } else {
      if (filterType === FILTER_TYPES.SINGLE) {
        state.length = 0;
      }
      state.push(value);
    }

    handler(filterName, state);
  };

  return (
    <FilterContext.Consumer>
      {({ filterSettings, handleFilterChange }) => (
        <FilterComponent
          key={filterName}
          filterState={filterSettings[filterName]}
          filterChangeHandler={(value: FilterValue) =>
            setFilterValue(value, filterSettings, handleFilterChange)
          }
        />
      )}
    </FilterContext.Consumer>
  );
}
