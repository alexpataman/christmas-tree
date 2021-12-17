import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data/data';
import DecorationFilters from '../components/decoration/DecorationFilters';
import DecorationItems from '../components/decoration/DecorationItems';
import { FilterContext } from '../contexts/FilterContext';
import { FilterChangeHandler, FilterSettings } from '../types/filters';
import { IDataItem } from '../types/common';
import './decoration.css';

export default function Decoration(): React.ReactElement {
  const [filterSettings, setFilterSettings] = useState({});
  const [items, setItems] = useState(data as IDataItem[]);

  const filterItems = (
    items: IDataItem[],
    newFilterSettings: FilterSettings
  ) => {
    return items.filter((item) => {
      return Object.keys(newFilterSettings).every((key) => {
        return (
          !newFilterSettings[key].size ||
          newFilterSettings[key].has(item[key] as string)
        );
      });
    });
  };

  useEffect(() => {
    document.title = `Decoration`;
    console.log(filterSettings);
  });

  const handleFilterChange: FilterChangeHandler = (key, value) => {
    const newFilterSettings = {
      ...filterSettings,
      [key]: value,
    } as FilterSettings;
    setFilterSettings(newFilterSettings);
    setItems(filterItems(data, newFilterSettings));
  };

  const contextData = {
    filterSettings,
    handleFilterChange,
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
