import { useDrop } from 'react-dnd';
import { DecorationItem } from '../../types/tree';
import { SetDecorationItem, SET_METHODS, ITEM_TYPES } from '../../types/tree';

interface ITreeAreaProps {
  setDecorationItem: SetDecorationItem;
}

export default function RemoveArea({ setDecorationItem }: ITreeAreaProps) {
  const [, drop] = useDrop(() => ({
    accept: [ITEM_TYPES.EXISTING],
    drop: (item: DecorationItem) => {
      setDecorationItem(item.id, item.data, SET_METHODS.DELETE);
    },
  }));

  return <div ref={drop} className="drop-decoration"></div>;
}
