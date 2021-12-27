import { IDataItem } from '../../types/common';
import { DecorationItem, Position } from '../../pages/tree';
import Garland from './Garland';
import './Result.scss';
import Snow from './Snow';
import TreeArea from './TreeArea';
import TreeDecoration from './TreeDecorations';
import { useDrop } from 'react-dnd';
import RemoveArea from './RemoveArea';

interface IResult {
  tree: number;
  background: number;
  garland: string;
  snowEnabled: boolean;
  garlandEnabled: boolean;
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
    decoration,
    setDecorationItem,
  } = props;

  return (
    <div className={`Result bg-${background}`}>
      {snowEnabled && <Snow />}
      <div className={`tree-container bg-${tree}`}>
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
