import { FilterSettings, RangeSettings } from '../types/filters';
import { IDataItem } from '../types/common';

export default function filterItems(
  items: IDataItem[],
  filterSettings: FilterSettings,
  rangeSettings: RangeSettings
) {
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
        isItemInFilterScope = filterSettings[key].includes(item[key] as string);
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
}
