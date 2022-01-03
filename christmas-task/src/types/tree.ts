import { IDataItem } from '../types/common';

export type Position = { x: number; y: number } | null;

export type Preset = {
  screenshot: string | undefined;
  data: {
    background: string;
    garland: string;
    snowEnabled: string;
    tree: string;
    audioEnabled: string;
    decoration: DecorationItem[];
    garlandEnabled: string;
  };
};

export type DecorationItem = {
  id: number;
  position: Position;
  data: IDataItem;
};

export type SetDecorationItem = (
  id: number,
  item: IDataItem,
  method: number,
  position?: Position
) => void;

export enum SET_METHODS {
  ADD,
  UPDATE,
  DELETE,
}

export enum ITEM_TYPES {
  NEW = 'new',
  EXISTING = 'existing',
}
