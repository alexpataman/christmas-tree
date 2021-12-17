import { FilterContext } from '../../../contexts/FilterContext';
import { FilterChangeHandler, filterInputProps } from '../../../types/filters';
import { useState } from 'react';

export default function Filter(props: filterInputProps) {
  const { filterName, filterType, FilterComponent } = props;

  const [state, setState] = useState(new Set());
  const setFilterValue = (value: string, handler: FilterChangeHandler) => {
    setState((current) => {
      if (current.has(value)) {
        current.delete(value);
      } else {
        if (filterType === 'single') {
          current.clear();
        }
        current.add(value);
      }
      return current;
    });
    handler(filterName, state as Set<unknown>);
  };

  return (
    <div>
      <FilterContext.Consumer>
        {({ filterSettings, handleFilterChange }) => (
          <FilterComponent
            key={filterName}
            filterState={
              filterSettings[filterName as keyof typeof filterSettings]
            }
            filterChangeHandler={(value: string) =>
              setFilterValue(value, handleFilterChange)
            }
          />
        )}
      </FilterContext.Consumer>
    </div>
  );
}
