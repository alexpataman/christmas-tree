import { data } from '../data/data';
import { filterItems } from './filterItems';
import { sortItems } from './sortItems';

export const getItems = (
  filterSettings: {},
  rangeSettings: {},
  sortSettings: string
) => {
  const filteredItems = filterItems(data, filterSettings, rangeSettings);
  const sortedItems = sortItems(filteredItems, sortSettings);
  return sortedItems;
};
