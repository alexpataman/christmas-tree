import { DecorationItem, SET_METHODS } from '../types/tree';

export default function updateItems(
  newItem: DecorationItem,
  method: SET_METHODS,
  items: DecorationItem[]
) {
  switch (method) {
    case SET_METHODS.UPDATE:
      return [
        ...items.map((el) => {
          if (el.id === newItem.id) {
            Object.assign(el.position, newItem.position);
          }
          return el;
        }),
      ];
    case SET_METHODS.DELETE:
      return [...items.filter((el) => el.id !== newItem.id)];
    case SET_METHODS.ADD:
    default:
      newItem.id = new Date().getTime();
      return [...items, newItem];
  }
}
