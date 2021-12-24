import Garland from './garland';
import './Result.scss';

interface IResult {
  tree: number;
  background: number;
  garland: string;
  snowEnabled: boolean;
  audioEnabled: boolean;
  garlandEnabled: boolean;
}

export default function Result(props: IResult) {
  const {
    tree,
    background,
    garland,
    snowEnabled,
    audioEnabled,
    garlandEnabled,
  } = props;

  console.log(
    garlandEnabled,
    snowEnabled,
    audioEnabled,
    tree,
    background,
    garland
  );

  return (
    <div className={`Result bg-${background}`}>
      <div className={`tree-container bg-${tree}`}>
        {garlandEnabled && <Garland type={garland} />}
      </div>
    </div>
  );
}
