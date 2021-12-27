import React from 'react';
import { useDrop, XYCoord } from 'react-dnd';
import { SetDecorationItem, DecorationItem } from '../../pages/tree';
import { treeCoords } from '../../config';

interface ITreeAreaProps {
  tree: number;
  setDecorationItem: SetDecorationItem;
}

export default function TreeArea({ tree, setDecorationItem }: ITreeAreaProps) {
  const container = React.useRef(null);

  const [, drop] = useDrop(() => ({
    accept: ['new', 'existing'],
    drop: (item: DecorationItem, monitor) => {
      setDecorationItem(
        item.id,
        item.data,
        monitor.getItemType() as string,
        monitor.getItemType() === 'new' ? 'add' : 'update',
        getCoordinates(container.current, monitor.getSourceClientOffset())
      );
      return { name: 'Dustbin1', el: 'test' };
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
}

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
