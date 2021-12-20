import { FilterContext } from '../../../contexts/FilterContext';
import {
  FilterChangeHandler,
  filterInputProps,
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
    ] as Set<unknown>;
    const state = currentState || new Set();

    if (state.has(value)) {
      state.delete(value);
    } else {
      if (filterType === 'single') {
        state.clear();
      }

      state.add(value);
    }

    handler(filterName, state as Set<unknown>);
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
