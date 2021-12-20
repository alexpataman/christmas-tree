import React from 'react';
import { ActionMeta } from 'react-select';
import { sortOptions } from '../types/sort';
import { IDataItem, voidCallback } from '../types/common';
import Observer from '../helpers/Observer';
import { FilterOptionsSet } from '../types/filters';

export const FilterContext = React.createContext({
  initialData: [] as IDataItem[],
  filterSettings: {},
  rangeSettings: {},
  sortSettings: {},
  handleFilterChange: (key: string, value: FilterOptionsSet) => {},
  handleRangeChange: (key: string, value: number[]) => {},
  handleSortChange: (
    option: sortOptions,
    actionMeta: ActionMeta<unknown>
  ) => {},
  handleReset: () => {},
  // resetObserver: [] as voidCallback[],
  resetObserver: new Observer(),
});
