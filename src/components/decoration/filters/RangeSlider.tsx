import { SyntheticEvent, useState } from 'react';
import { Slider } from '@mui/material';
import { rangeViewInputProps } from '../../../types/filters';
import { ObserverItem } from '../../../helpers/Observer';

export const RangeSlider = ({
  filterName,
  rangeChangeHandler,
  rangeState,
  initialData,
  resetObserver,
}: rangeViewInputProps) => {
  const initialValues = initialData.map((el) => {
    return +el[filterName];
  });
  const minInitialValue = Math.min(...initialValues);
  const maxInitialValue = Math.max(...initialValues);

  const [stateMinValue, stateMaxValue] = rangeState || [];

  const [value, setValue] = useState([
    stateMinValue || minInitialValue,
    stateMaxValue || maxInitialValue,
  ]);
  const [minValue, maxValue] = value;

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const commitChange = (
    event: Event | SyntheticEvent<Element>,
    newValue: number | number[]
  ) => {
    rangeChangeHandler(newValue as number[]);
  };

  const resetState = () => {
    setValue([minInitialValue, maxInitialValue]);
  };

  resetObserver!.subscribe(new ObserverItem(filterName, resetState));

  return (
    <div className="range-slider">
      <div>{minValue}</div>
      <Slider
        getAriaLabel={() => ''}
        value={value}
        onChange={handleChange}
        onChangeCommitted={commitChange}
        valueLabelDisplay="auto"
        min={minInitialValue}
        max={maxInitialValue}
      />
      <div>{maxValue}</div>
    </div>
  );
};
