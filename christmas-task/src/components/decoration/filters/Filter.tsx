import { FilterContext } from '../../../contexts/FilterContext';
import {
  FilterChangeHandler,
  filterInputProps,
  FilterOptionsSet,
  FilterValue,
} from '../../../types/filters';

export default function Filter(props: filterInputProps) {
  const { filterName, filterType, FilterComponent } = props;

  const setFilterValue = (
    value: FilterValue,
    filterSettings: {},
    handler: FilterChangeHandler
  ) => {
    const currentState = filterSettings[
      filterName as keyof typeof filterSettings
    ] as FilterOptionsSet;
    let state = currentState || [];

    if (state.includes(value)) {
      state = state.filter((el) => el !== value);
    } else {
      if (filterType === 'single') {
        state.length = 0;
      }

      state.push(value);
    }

    handler(filterName, state as FilterOptionsSet);
  };

  return (
    <>
      <FilterContext.Consumer>
        {({ filterSettings, handleFilterChange }) => (
          <FilterComponent
            key={filterName}
            filterState={
              filterSettings[filterName as keyof typeof filterSettings]
            }
            filterChangeHandler={(value: FilterValue) =>
              setFilterValue(value, filterSettings, handleFilterChange)
            }
          />
        )}
      </FilterContext.Consumer>
    </>
  );
}
