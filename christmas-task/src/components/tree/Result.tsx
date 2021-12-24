import Garland from './Garland';
import './Result.scss';
import Snow from './Snow';

interface IResult {
  tree: number;
  background: number;
  garland: string;
  snowEnabled: boolean;
  garlandEnabled: boolean;
}

export default function Result(props: IResult) {
  const { tree, background, garland, snowEnabled, garlandEnabled } = props;

  return (
    <div className={`Result bg-${background}`}>
      {snowEnabled && <Snow />}
      <div className={`tree-container bg-${tree}`}>
        {garlandEnabled && <Garland type={garland} />}
      </div>
    </div>
  );
}
