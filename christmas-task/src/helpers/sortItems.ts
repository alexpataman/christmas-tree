import { IDataItem } from '../types/common';

export const sortItems = (items: IDataItem[], sortSettings: string) => {
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
