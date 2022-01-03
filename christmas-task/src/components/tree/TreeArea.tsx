import { useRef } from 'react';
import { useDrop, XYCoord } from 'react-dnd';
import {
  SetDecorationItem,
  DecorationItem,
  SET_METHODS,
  ITEM_TYPES,
} from '../../types/tree';
import { treeCoords } from '../../config';

interface ITreeAreaProps {
  tree: number;
  setDecorationItem: SetDecorationItem;
}

export const TreeArea = ({ tree, setDecorationItem }: ITreeAreaProps) => {
  const container = useRef(null);

  const [, drop] = useDrop(() => ({
    accept: [ITEM_TYPES.NEW, ITEM_TYPES.EXISTING],
    drop: (item: DecorationItem, monitor) => {
      setDecorationItem(
        item.id,
        item.data,
        monitor.getItemType() === ITEM_TYPES.NEW
          ? SET_METHODS.ADD
          : SET_METHODS.UPDATE,
        getCoordinates(container.current, monitor.getSourceClientOffset())
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      getClientOffset: monitor.getClientOffset(),
      getSourceClientOffset: monitor.getSourceClientOffset(),
    }),
  }));

  return (
    <div ref={container} className="tree-area">
      <map name="tree-map">
        <area
          ref={drop}
          alt="Christmas Tree"
          coords={treeCoords[tree]}
          shape="poly"
          tabIndex={1}
        />
      </map>
      <img
        useMap="#tree-map"
        alt=""
        className="tree-img"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      />
    </div>
  );
};

function getCoordinates(
  elem: HTMLElement | null,
  dropCoordinates: XYCoord | null
) {
  if (!elem || !dropCoordinates) {
    return { x: 0, y: 0 };
  }

  let box = elem.getBoundingClientRect();

  return {
    x: dropCoordinates.x - box.left,
    y: dropCoordinates.y - box.top,
  };
}
