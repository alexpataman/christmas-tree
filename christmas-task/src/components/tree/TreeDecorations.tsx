import { DecorationItem, SetDecorationItem } from '../../pages/tree';
import TreeDecoration from './TreeDecoration';

interface ITreeDecorationsProps {
  decoration: DecorationItem[];
  setDecorationItem: SetDecorationItem;
  resultMainContainerRef: React.MutableRefObject<HTMLDivElement>;
}

export default function TreeDecorations({
  decoration,
  setDecorationItem,
  resultMainContainerRef,
}: ITreeDecorationsProps) {
  return (
    <>
      {decoration.map((el, index) => (
        <TreeDecoration
          key={el.id}
          decoration={el}
          setDecorationItem={setDecorationItem}
          resultMainContainerRef={resultMainContainerRef}
        />
      ))}
    </>
  );
}
