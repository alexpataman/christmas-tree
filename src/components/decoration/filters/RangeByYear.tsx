import { rangeViewInputProps } from '../../../types/filters';
import { RangeSlider } from './RangeSlider';

export const FilterByYear = (props: rangeViewInputProps) => {
  return (
    <>
      <h5>Год: </h5>
      <RangeSlider {...props} />
    </>
  );
};
