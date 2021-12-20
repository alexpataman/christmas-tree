export type voidCallback = () => void;

interface IDataBase {
  [key: string]: string | boolean;
}

export interface IDataItem extends IDataBase {
  num: string;
  name: string;
  quantity: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}
