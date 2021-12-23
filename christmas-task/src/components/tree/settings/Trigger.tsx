import { Dispatch, SetStateAction } from 'react';
import React from 'react';
import './TriggerSettings.scss';

interface ITrigger {
  name: string;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

export default function Trigger(props: ITrigger) {
  const { name, state, setState } = props;

  let className = name;

  if (state) {
    className += ' active';
  }

  return <span className={className} onClick={() => setState(!state)}></span>;
}
