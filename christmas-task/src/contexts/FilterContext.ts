import React from 'react';
import { sortOption } from '../types/sort';
import { IDataItem } from '../types/common';
import Observer from '../helpers/Observer';
import { FilterOptionsSet } from '../types/filters';

export const FilterContext = React.createContext({
  initialData: [] as IDataItem[],
  filterSettings: {},
  rangeSettings: {},
  sortSettings: {},
  resetObserver: new Observer(),
  handleFilterChange: (key: string, value: FilterOptionsSet) => {},
  handleRangeChange: (key: string, value: number[]) => {},
  handleSortChange: (option: sortOption) => {},
  handleReset: () => {},
});
