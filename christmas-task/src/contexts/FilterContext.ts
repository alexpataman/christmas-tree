import React from 'react';
import { SortOption, SortSettings } from '../types/sort';
import { IDataItem } from '../types/common';
import Observer from '../helpers/Observer';
import {
  FilterOptionsSet,
  RangeOptionsSet,
  RangeSettings,
  FilterSettings,
} from '../types/filters';

interface IFilterContext {
  initialData: IDataItem[];
  filterSettings: FilterSettings;
  rangeSettings: RangeSettings;
  sortSettings: SortSettings;
  resetObserver: Observer | undefined;
  handleFilterChange: (key: string, value: FilterOptionsSet) => void;
  handleRangeChange: (key: string, value: RangeOptionsSet) => void;
  handleSortChange: (option: SortOption) => void;
  handleReset: () => void;
}

export const FilterContext = React.createContext<IFilterContext>({
  initialData: [],
  filterSettings: {},
  rangeSettings: {},
  sortSettings: '',
  resetObserver: undefined,
  handleFilterChange: () => {},
  handleRangeChange: () => {},
  handleSortChange: () => {},
  handleReset: () => {},
});
