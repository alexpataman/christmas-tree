import { rangeViewInputProps } from '../../../types/filters';
import { RangeSlider } from './RangeSlider';

export const FilterByQuantity = (props: rangeViewInputProps) => {
  return (
    <>
      <h5>Количество: </h5>
      <RangeSlider {...props} />
    </>
  );
};
