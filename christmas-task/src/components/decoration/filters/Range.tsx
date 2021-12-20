import { FilterContext } from '../../../contexts/FilterContext';
import {
  RangeChangeHandler,
  rangeInputProps,
  RangeValue,
} from '../../../types/filters';
import './Range.scss';

export default function Filter(props: rangeInputProps) {
  const { filterName, RangeComponent } = props;

  const setFilterValue = (
    value: RangeValue,
    rangeSettings: {},
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
            rangeState={rangeSettings[filterName as keyof typeof rangeSettings]}
            rangeChangeHandler={(value: RangeValue) =>
              setFilterValue(value, rangeSettings, handleRangeChange)
            }
            resetObserver={resetObserver}
          />
        )}
      </FilterContext.Consumer>
    </div>
  );
}
