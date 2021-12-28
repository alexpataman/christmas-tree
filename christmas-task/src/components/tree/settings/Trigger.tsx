import { Dispatch, SetStateAction } from 'react';
import './TriggerSettings.scss';

interface ITrigger {
  name: string;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

export default function Trigger(props: ITrigger) {
  const { name, state, setState } = props;
  const clickHandler = (value: boolean) => setState(value);

  return (
    <span
      className={`${name} ${state && 'active'}`}
      onClick={() => clickHandler(!state)}
    ></span>
  );
}
