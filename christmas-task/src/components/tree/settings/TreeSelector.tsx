import { Dispatch, SetStateAction } from 'react';
import { treeIDs } from '../../../config';
import './TreeSelector.scss';

interface ITreeSelector {
  state: number;
  setState: Dispatch<SetStateAction<number>>;
}

export default function TreeSelector(props: ITreeSelector) {
  const { state, setState } = props;
  const clickHandler = (id: number) => setState(id);

  return (
    <div className="widget TreeSelector">
      <h5>Выберите ёлку</h5>
      <ul>
        {treeIDs.map((el) => (
          <li
            className={`bg-${el} ${state === el ? 'active' : ''}`}
            onClick={() => clickHandler(el)}
            key={el}
          ></li>
        ))}
      </ul>
    </div>
  );
}
