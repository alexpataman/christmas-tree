import { RefObject } from 'react';
import { DecorationItem, SetDecorationItem } from '../../types/tree';
import { TreeDecoration } from './TreeDecoration';

interface ITreeDecorationsProps {
  decoration: DecorationItem[];
  setDecorationItem: SetDecorationItem;
  resultMainContainerRef: RefObject<HTMLDivElement>;
}

export const TreeDecorations = ({
  decoration,
  setDecorationItem,
  resultMainContainerRef,
}: ITreeDecorationsProps) => {
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
};
