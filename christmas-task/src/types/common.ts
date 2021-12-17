export type voidCallback = () => void;

interface IDataBase {
  [key: string]: string | boolean;
}

export interface IDataItem extends IDataBase {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}
