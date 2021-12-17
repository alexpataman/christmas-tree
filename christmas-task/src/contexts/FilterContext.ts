import React from 'react';

export const FilterContext = React.createContext({
  filterSettings: {},
  handleFilterChange: (key: string, value: Set<unknown>) => {},
});
