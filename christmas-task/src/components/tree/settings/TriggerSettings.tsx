import { Dispatch, SetStateAction } from 'react';
import { Trigger } from './Trigger';
import './TriggerSettings.scss';

interface IOtherSettings {
  snowEnabled: boolean;
  setSnowState: Dispatch<SetStateAction<boolean>>;
  audioEnabled: boolean;
  setAudioState: Dispatch<SetStateAction<boolean>>;
}

export const OtherSettings = (props: IOtherSettings) => {
  const { audioEnabled, snowEnabled, setAudioState, setSnowState } = props;

  return (
    <div className="widget TriggerSettings">
      <div className="triggers">
        <Trigger name="audio" state={audioEnabled} setState={setAudioState} />
        <Trigger name="snow" state={snowEnabled} setState={setSnowState} />
      </div>
    </div>
  );
};
