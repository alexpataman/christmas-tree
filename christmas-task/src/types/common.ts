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

export enum LOCAL_STORAGE_KEYS {
  FAVORITES = 'favorites',
  FILTER_SETTINGS = 'filterSettings',
  RANGE_SETTINGS = 'rangeSettings',
  SORT_SETTINGS = 'sortSettings',
  BACKGROUND = 'background',
  TREE = 'tree',
  GARLAND = 'garland',
  DECORATION = 'decoration',
  GARLAND_ENABLED = 'garlandEnabled',
  AUDIO_ENABLED = 'audioEnabled',
  SNOW_ENABLED = 'snowEnabled',
  PRESETS = 'presets',
}
