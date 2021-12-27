import { DecorationItem, SetDecorationItem, Position } from '../../pages/tree';
import { IDataItem } from '../../types/common';
import { DragPreviewImage, useDrag } from 'react-dnd';

interface ITreeDecorationProps {
  decoration: DecorationItem;
  setDecorationItem: SetDecorationItem;
}

interface DropResult {
  name: string;
}

export default function TreeDecoration({
  decoration,
  setDecorationItem,
}: ITreeDecorationProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'existing',
    item: { id: decoration.id, data: decoration.data },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && !dropResult) {
        setDecorationItem(
          item.id,
          item.data,
          monitor.getItemType() as string,
          'delete'
        );
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const imgUrl = `./assets/toys/${decoration.data.num}s.png`;

  return (
    <>
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
    </>
  );
}
