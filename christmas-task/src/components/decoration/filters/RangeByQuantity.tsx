import { rangeViewInputProps } from '../../../types/filters';
import { Slider } from '@mui/material';
import React, { SyntheticEvent, useEffect } from 'react';
import { ObserverItem } from '../../../helpers/Observer';

export default function FilterByQuantity(props: rangeViewInputProps) {
  let {
    filterName,
    rangeChangeHandler,
    rangeState,
    initialData,
    resetObserver,
  } = props;

  const initialValues = initialData.map((el) => {
    return +el[filterName] as number;
  });

  const minInitialValue = Math.min(...initialValues);
  const maxInitialValue = Math.max(...initialValues);

  const [stateMinValue, stateMaxValue] = rangeState || [];

  const [value, setValue] = React.useState([
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
    <div>
      <h5>Quantity: </h5>
      <div className="range-slider">
        <div>{minValue}</div>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          onChangeCommitted={commitChange}
          valueLabelDisplay="auto"
          min={minInitialValue}
          max={maxInitialValue}
        />
        <div>{maxValue}</div>
      </div>
    </div>
  );
}
