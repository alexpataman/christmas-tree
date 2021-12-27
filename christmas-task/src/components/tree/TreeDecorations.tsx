import { DecorationItem, SetDecorationItem } from '../../pages/tree';
import TreeDecoration from './TreeDecoration';

interface ITreeDecorationsProps {
  decoration: DecorationItem[];
  setDecorationItem: SetDecorationItem;
}

export default function TreeDecorations({
  decoration,
  setDecorationItem,
}: ITreeDecorationsProps) {
  return (
    <>
      {decoration.map((el, index) => (
        <TreeDecoration
          key={el.id}
          decoration={el}
          setDecorationItem={setDecorationItem}
        />
      ))}
    </>
  );
}
