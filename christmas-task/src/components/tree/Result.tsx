import { MutableRefObject, useRef } from 'react';
import { IDataItem } from '../../types/common';
import { DecorationItem, Position } from '../../pages/tree';
import Garland from './Garland';
import Snow from './Snow';
import TreeArea from './TreeArea';
import TreeDecoration from './TreeDecorations';
import RemoveArea from './RemoveArea';
import './Result.scss';

interface IResult {
  tree: number;
  background: number;
  garland: string;
  snowEnabled: boolean;
  garlandEnabled: boolean;
  resultTreeRef: MutableRefObject<HTMLDivElement>;
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

  const resultMainContainerRef = useRef(document.createElement('div'));

  return (
    <div className={`Result bg-${background}`} ref={resultMainContainerRef}>
      {snowEnabled && <Snow />}
      <div className={`tree-container bg-${tree}`} ref={resultTreeRef}>
        <TreeArea tree={tree} setDecorationItem={setDecorationItem} />
        <TreeDecoration
          decoration={decoration}
          setDecorationItem={setDecorationItem}
          resultMainContainerRef={resultMainContainerRef}
        />
        {garlandEnabled && <Garland type={garland} />}
      </div>
      <RemoveArea setDecorationItem={setDecorationItem} />
    </div>
  );
}
