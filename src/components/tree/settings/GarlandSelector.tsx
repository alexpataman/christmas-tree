import { Dispatch, SetStateAction } from 'react';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { garlandIDs } from '../../../config';
import './GarlandSelector.scss';

interface IGarlandSelector {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  isEnabled: boolean;
  setIsEnabled: Dispatch<SetStateAction<boolean>>;
}

export default function GarlandSelector(props: IGarlandSelector) {
  const { state, setState, isEnabled, setIsEnabled } = props;

  const clickHandler = (el: string) => {
    setState(el);
    setIsEnabled(true);
  };

  return (
    <div className="widget GarlandSelector">
      <h5>Гирлянда</h5>
      <div className="selectors">
        <ul>
          {garlandIDs.map((el) => (
            <li
              className={`grl-${el} ${state === el ? 'active' : ''}`}
              onClick={() => clickHandler(el)}
              key={el}
            ></li>
          ))}
        </ul>
        <div className="switcher">
          <Typography>Выкл</Typography>
          <Switch
            checked={isEnabled}
            onChange={(event) => setIsEnabled(event.target.checked)}
          />
          <Typography>Вкл</Typography>
        </div>
      </div>
    </div>
  );
}
