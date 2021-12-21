import React, { useState, useEffect } from 'react';
import { data } from '../data/data_ru';
import DecorationFilters from '../components/decoration/DecorationFilters';
import DecorationItems from '../components/decoration/DecorationItems';
import { FilterContext } from '../contexts/FilterContext';
import {
  FilterChangeHandler,
  FilterSettings,
  RangeChangeHandler,
  RangeSettings,
} from '../types/filters';
import { IDataItem } from '../types/common';
import './decoration.scss';
import { ActionMeta } from 'react-select';
import { sortOptions } from '../types/sort';
import Observer from '../helpers/Observer';
import Storage from '../helpers/Storage';

export default function Decoration(): React.ReactElement {
  const storage = new Storage();

  const [filterSettings, setFilterSettings] = useState(
    storage.get('filterSettings') || {}
  );
  const [rangeSettings, setRangeSettings] = useState(
    storage.get('rangeSettings') || {}
  );
  const [sortSettings, setSortSettings] = useState(
    storage.get('sortSettings') || 'name_asc'
  );

  const filterItems = (
    items: IDataItem[],
    filterSettings: FilterSettings,
    rangeSettings: RangeSettings
  ) => {
    return items.filter((item) => {
      const meetFilerCondition = Object.keys(filterSettings).every((key) => {
        const isFilterSet = filterSettings[key].length > 0;

        let isItemInFilterScope;
        if (key === 'name') {
          const filterValues = Array.from(filterSettings[key]);
          isItemInFilterScope = filterValues.some(
            (el) =>
              item[key].toLowerCase().indexOf(String(el).toLowerCase()) !== -1
          );
        } else {
          isItemInFilterScope = filterSettings[key].includes(
            item[key] as string
          );
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
    document.title = `Игрушки`;
    storage.set('filterSettings', filterSettings);
    storage.set('rangeSettings', rangeSettings);
    storage.set('sortSettings', sortSettings);
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

  const [items, setItems] = useState(
    getItems(filterSettings, rangeSettings, sortSettings)
  );
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
