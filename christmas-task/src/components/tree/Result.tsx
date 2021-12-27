import React from 'react';
import { IDataItem } from '../../types/common';
import { DecorationItem, Position } from '../../pages/tree';
import Garland from './Garland';
import './Result.scss';
import Snow from './Snow';
import TreeArea from './TreeArea';
import TreeDecoration from './TreeDecorations';
import RemoveArea from './RemoveArea';

interface IResult {
  tree: number;
  background: number;
  garland: string;
  snowEnabled: boolean;
  garlandEnabled: boolean;
  resultTreeRef: React.MutableRefObject<HTMLDivElement>;
  decoration: DecorationItem[];
  setDecorationItem: (
    id: number,
    data: IDataItem,
    type: string,
    method: string,
    position?: Position
  ) => void;
}

export default function Result(props: IResult) {
  const {
    tree,
    background,
    garland,
    snowEnabled,
    garlandEnabled,
    resultTreeRef,
    decoration,
    setDecorationItem,
  } = props;

  return (
    <div className={`Result bg-${background}`}>
      {snowEnabled && <Snow />}
      <div className={`tree-container bg-${tree}`} ref={resultTreeRef}>
        <TreeArea tree={tree} setDecorationItem={setDecorationItem} />
        <TreeDecoration
          decoration={decoration}
          setDecorationItem={setDecorationItem}
        />
        {garlandEnabled && <Garland type={garland} />}
      </div>
      <RemoveArea setDecorationItem={setDecorationItem} />
    </div>
  );
}
