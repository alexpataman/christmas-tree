import { FilterContext } from '../../../contexts/FilterContext';
import {
  RangeChangeHandler,
  rangeInputProps,
  RangeValue,
  RangeSettings,
} from '../../../types/filters';
import './Range.scss';

export const Range = (props: rangeInputProps) => {
  const { filterName, RangeComponent } = props;

  const setFilterValue = (
    value: RangeValue,
    rangeSettings: RangeSettings,
    handler: RangeChangeHandler
  ) => {
    handler(filterName, value);
  };

  return (
    <div className="Range">
      <FilterContext.Consumer>
        {({ rangeSettings, handleRangeChange, initialData, resetObserver }) => (
          <RangeComponent
            initialData={initialData}
            key={filterName}
            filterName={filterName}
            rangeState={rangeSettings[filterName]}
            rangeChangeHandler={(value) =>
              setFilterValue(value, rangeSettings, handleRangeChange)
            }
            resetObserver={resetObserver}
          />
        )}
      </FilterContext.Consumer>
    </div>
  );
};
