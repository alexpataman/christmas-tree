import React, { useState, useEffect } from 'react';
import { data } from '../data/data';
import DecorationFilters from '../components/decoration/DecorationFilters';
import DecorationItems from '../components/decoration/DecorationItems';
import { FilterContext } from '../contexts/FilterContext';
import {
  FilterChangeHandler,
  FilterSettings,
  RangeChangeHandler,
  RangeSettings,
} from '../types/filters';
import { IDataItem, voidCallback } from '../types/common';
import './decoration.scss';
import { ActionMeta } from 'react-select';
import { sortOptions } from '../types/sort';
import Observer from '../helpers/Observer';

export default function Decoration(): React.ReactElement {
  const [filterSettings, setFilterSettings] = useState({});
  const [rangeSettings, setRangeSettings] = useState({});
  const [sortSettings, setSortSettings] = useState('');

  const [items, setItems] = useState(data as IDataItem[]);

  const filterItems = (
    items: IDataItem[],
    filterSettings: FilterSettings,
    rangeSettings: RangeSettings
  ) => {
    console.log('filterSettings', filterSettings);
    console.log('rangeSettings', rangeSettings);

    return items.filter((item) => {
      const meetFilerCondition = Object.keys(filterSettings).every((key) => {
        const isFilterSet = filterSettings[key].size;

        let isItemInFilterScope;
        if (key === 'name') {
          const filterValues = Array.from(filterSettings[key]);
          isItemInFilterScope = filterValues.some(
            (el) =>
              item[key].toLowerCase().indexOf(String(el).toLowerCase()) !== -1
          );
        } else {
          isItemInFilterScope = filterSettings[key].has(item[key] as string);
        }

        return !isFilterSet || isItemInFilterScope;
      });

      const meetRangeCondition = Object.keys(rangeSettings).every((key) => {
        const isFilterSet = rangeSettings[key].length;
        const [from, to] = rangeSettings[key];
        const value = +item[key];
        const isValueInRange = from <= value && value <= to;

        return isFilterSet && isValueInRange;
      });

      return meetFilerCondition && meetRangeCondition;
    });
  };

  useEffect(() => {
    document.title = `Decoration`;
    // console.log('filterSettings', filterSettings);
    // console.log('rangeSettings', rangeSettings);
    // console.log('sortSettings', sortSettings);
  });

  const handleFilterChange: FilterChangeHandler = (key, value) => {
    const newFilterSettings = {
      ...filterSettings,
      [key]: value,
    } as FilterSettings;
    setFilterSettings(newFilterSettings);
    setItems(getItems(newFilterSettings, rangeSettings, sortSettings));
  };

  const sortItems = (items: IDataItem[], sortSettings: string) => {
    const [field, direction] = sortSettings.split('_');
    return items.sort((a, b) => {
      let compare;
      const getValueToCompare = (value: string | boolean) =>
        Number.isFinite(+value) ? +value : value;

      if (direction === 'desc') {
        compare = getValueToCompare(a[field]) > getValueToCompare(b[field]);
      } else {
        compare = getValueToCompare(a[field]) < getValueToCompare(b[field]);
      }
      return compare ? -1 : 1;
    });
  };

  const handleRangeChange: RangeChangeHandler = (key, value) => {
    const newRangeSettings = {
      ...rangeSettings,
      [key]: value,
    } as FilterSettings;
    setRangeSettings(newRangeSettings);
    setItems(getItems(filterSettings, newRangeSettings, sortSettings));
  };

  const handleSortChange = (
    option: sortOptions,
    actionMeta: ActionMeta<unknown>
  ) => {
    if (option && typeof option === 'object') {
      const value = option['value' as keyof typeof option];

      setSortSettings(value);
      setItems((currentItems) => [...sortItems(currentItems, value)]);
    }
  };

  const handleReset = () => {
    setFilterSettings({});
    setRangeSettings({});
    setItems(getItems({}, {}, sortSettings));
    //resetObserver.forEach((el) => el());
    resetObserver.fire();
  };

  const getItems = (
    filterSettings: {},
    rangeSettings: {},
    sortSettings: string
  ) => {
    const filteredItems = filterItems(data, filterSettings, rangeSettings);
    const sortedItems = sortItems(filteredItems, sortSettings);

    return sortedItems;
  };

  //const resetObserver = [] as voidCallback[];
  const resetObserver = new Observer();

  const contextData = {
    initialData: data,
    filterSettings,
    rangeSettings,
    sortSettings,
    handleFilterChange,
    handleRangeChange,
    handleSortChange,
    handleReset,
    resetObserver,
  };

  return (
    <div className="Decoration">
      <FilterContext.Provider value={contextData}>
        <DecorationFilters />
        <DecorationItems items={items} />
      </FilterContext.Provider>
    </div>
  );
}
