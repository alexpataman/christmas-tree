import React, { useState, useEffect } from 'react';
import { data } from '../data/data';
import * as config from '../config';
import { FilterContext } from '../contexts/FilterContext';
import {
  FilterSettings,
  FilterChangeHandler,
  RangeChangeHandler,
} from '../types/filters';
import { LOCAL_STORAGE_KEYS } from '../types/common';
import { sortOption } from '../types/sort';
import storage from '../helpers/storage';
import Observer from '../helpers/Observer';
import getItems from '../helpers/getItems';
import sortItems from '../helpers/sortItems';
import DecorationFilters from '../components/decoration/DecorationFilters';
import DecorationItems from '../components/decoration/DecorationItems';
import './decoration.scss';

export default function Decoration(): React.ReactElement {
  const [filterSettings, setFilterSettings] = useState(
    storage.get(LOCAL_STORAGE_KEYS.FILTER_SETTINGS) || {}
  );

  const [rangeSettings, setRangeSettings] = useState(
    storage.get(LOCAL_STORAGE_KEYS.RANGE_SETTINGS) || {}
  );

  const [sortSettings, setSortSettings] = useState(
    storage.get(LOCAL_STORAGE_KEYS.SORT_SETTINGS) ||
      config.defaultDecorationSortOrder
  );

  const [items, setItems] = useState(
    getItems(filterSettings, rangeSettings, sortSettings)
  );

  const resetObserver = new Observer();

  useEffect(() => {
    document.title = config.pageTitles.decoration;
  }, []);

  useEffect(() => {
    storage.set('filterSettings', filterSettings);
    storage.set('rangeSettings', rangeSettings);
    storage.set('sortSettings', sortSettings);
  }, [filterSettings, rangeSettings, sortSettings]);

  const handleFilterChange: FilterChangeHandler = (key, value) => {
    const newFilterSettings = {
      ...filterSettings,
      [key]: value,
    } as FilterSettings;
    setFilterSettings(newFilterSettings);
    setItems(getItems(newFilterSettings, rangeSettings, sortSettings));
  };

  const handleRangeChange: RangeChangeHandler = (key, value) => {
    const newRangeSettings = {
      ...rangeSettings,
      [key]: value,
    } as FilterSettings;
    setRangeSettings(newRangeSettings);
    setItems(getItems(filterSettings, newRangeSettings, sortSettings));
  };

  const handleSortChange = (option: sortOption) => {
    if (option) {
      setSortSettings(option.value);
      setItems((currentItems) => [...sortItems(currentItems, option.value)]);
    }
  };

  const handleReset = () => {
    setFilterSettings({});
    setRangeSettings({});
    setItems(getItems({}, {}, sortSettings));
    resetObserver.fire();
  };

  const contextData = {
    initialData: data,
    filterSettings,
    rangeSettings,
    sortSettings,
    resetObserver,
    handleFilterChange,
    handleRangeChange,
    handleSortChange,
    handleReset,
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
