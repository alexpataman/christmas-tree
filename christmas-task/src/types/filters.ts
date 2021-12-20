import Observer from '../helpers/Observer';
import { IDataItem, voidCallback } from './common';

export type RangeOptionsSet = number[];

export type RangeSettings = {
  [key: string]: RangeOptionsSet;
};

export type RangeChangeHandler = (key: string, value: number[]) => void;

export type RangeValue = number[];

export type rangeViewInputProps = {
  key: string;
  rangeState: RangeOptionsSet;
  rangeChangeHandler: (value: RangeValue) => void;
  initialData: IDataItem[];
  filterName: string;
  resetObserver?: Observer;
};

export type rangeInputProps = {
  filterName: string;
  RangeComponent: React.FC<rangeViewInputProps>;
};

export type FilterOptionsSet = Set<unknown>;

export type FilterSettings = {
  [key: string]: FilterOptionsSet;
};

export type FilterChangeHandler = (key: string, value: Set<unknown>) => void;

export type FilterValue = string | boolean;

export type filterViewInputProps = {
  key: string;
  filterState: FilterOptionsSet;
  filterChangeHandler: (value: FilterValue) => void;
};

export type filterInputProps = {
  filterName: string;
  filterType: 'single' | 'multiple';
  FilterComponent: React.FC<filterViewInputProps>;
};

export interface ISetStateHandler<Type> {
  (arg: Type): Type;
}
