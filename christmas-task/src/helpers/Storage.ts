import { localStoragePrefix } from '../config';

type storeType = object | string;

export default class Storage {
  constructor(private prefix = localStoragePrefix) {}

  computeFieldName(fieldName: string) {
    return this.prefix + fieldName;
  }

  set(fieldName: string, data: storeType) {
    localStorage.setItem(
      this.computeFieldName(fieldName),
      JSON.stringify(data)
    );
  }

  get(fieldName: string) {
    const computedName = this.computeFieldName(fieldName);
    const storedItem = localStorage.getItem(computedName);

    return this.exists(fieldName) && storedItem ? JSON.parse(storedItem) : null;
  }

  exists(fieldName: string) {
    return !!localStorage.getItem(this.computeFieldName(fieldName));
  }

  clear() {
    Object.keys(localStorage).forEach((el) => {
      if (el.indexOf(this.prefix) === 0) {
        localStorage.removeItem(el);
      }
    });
  }
}
