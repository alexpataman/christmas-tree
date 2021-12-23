import { Dispatch, SetStateAction } from 'react';
import { backgroundIDs } from '../../../config';
import './BackgroundSelector.scss';

interface IBackgroundSelector {
  state: number;
  setState: Dispatch<SetStateAction<number>>;
}

export default function BackgroundSelector(props: IBackgroundSelector) {
  const { state, setState } = props;

  const clickHandler = (id: number) => {
    setState(id);
  };

  return (
    <div className="widget BackgroundSelector">
      <h5>Выберите фон</h5>
      <ul>
        {backgroundIDs.map((el) => (
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
