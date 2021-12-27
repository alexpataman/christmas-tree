import React, { useEffect } from 'react';
import { IDataItem } from '../../types/common';
import { DragPreviewImage, useDrag } from 'react-dnd';

export interface IFavoritesItemProps {
  item: IDataItem;
}

interface DropResult {
  name: string;
}

export default function FavoritesItem({ item }: IFavoritesItemProps) {
  const [{ isDragging, clientOffset }, drag, preview] = useDrag(() => ({
    type: 'new',
    item: { id: null, data: item },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        // console.log(
        //   item,
        //   dropResult,
        //   monitor.getSourceClientOffset(),
        //   monitor.getDifferenceFromInitialOffset()
        // );
        // console.log(
        //   `You dropped ${item.data.name} into ${dropResult.name} => ${clientOffset}!`
        // );
      } else {
        // console.log(`You dropped ${item.data.name} out`);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
      clientOffset: monitor.getClientOffset(),
    }),
  }));

  const imgUrl = `./assets/toys/${item.num}s.png`;

  return (
    <li title={item.name}>
      <DragPreviewImage connect={preview} src={imgUrl} />
      <img
        src={imgUrl}
        alt={item.name}
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
      />

      <span>{item.quantity}</span>
    </li>
  );
}
