import { useEffect, RefObject } from 'react';
import { useDrag } from 'react-dnd';
import {
  DecorationItem,
  SetDecorationItem,
  SET_METHODS,
} from '../../types/tree';

interface ITreeDecorationProps {
  decoration: DecorationItem;
  setDecorationItem: SetDecorationItem;
  resultMainContainerRef: RefObject<HTMLDivElement>;
}

interface DropResult {
  name: string;
}

export const TreeDecoration = ({
  decoration,
  setDecorationItem,
  resultMainContainerRef,
}: ITreeDecorationProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'existing',
    item: { id: decoration.id, data: decoration.data },
    end: (item, monitor) => {
      resultMainContainerRef.current?.classList.remove('is-dragging');
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && !dropResult) {
        setDecorationItem(item.id, item.data, SET_METHODS.DELETE);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const imgUrl = `./assets/toys/${decoration.data.num}s.png`;

  useEffect(() => {
    if (isDragging) {
      resultMainContainerRef.current?.classList.add('is-dragging');
    }
  });

  if (isDragging) {
    return <div ref={drag} />;
  } else {
    return (
      <img
        src={imgUrl}
        alt={decoration.data.name}
        style={{
          left: decoration.position?.x,
          top: decoration.position?.y,
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
        className="decoration-item"
        ref={drag}
      />
    );
  }
};
