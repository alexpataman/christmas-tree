import React from 'react';
import { useDrop, XYCoord } from 'react-dnd';
import { IDataItem } from '../../types/common';
import { DecorationItem, Position } from '../../pages/tree';

interface ITreeAreaProps {
  setDecorationItem: (
    id: number,
    item: IDataItem,
    type: string,
    method: string,
    position?: Position
  ) => void;
}

export default function RemoveArea({ setDecorationItem }: ITreeAreaProps) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ['existing'],
    drop: (item: DecorationItem, monitor) => {
      setDecorationItem(
        item.id,
        item.data,
        monitor.getItemType() as string,
        'delete'
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`drop-decoration ${canDrop && 'can-drop'} `}
    ></div>
  );
}
