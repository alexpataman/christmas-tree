import './GarlandRounded.scss';

interface IGarland {
  type: string;
}

const ratio = 60;

export default function Garland(props: IGarland) {
  const { type } = props;
  let garland = [];

  for (let i = 0; i < 6; i++) {
    let row = [];
    const inRowNum = 2 * i + 1;
    let margin = 0;
    for (let k = 0; k < inRowNum; k++) {
      margin = k < inRowNum / 2 ? margin + 1 : margin - 1;

      const deg = k * (180 / (inRowNum - 1)) - 90;

      const style = {
        height: `${(i * ratio) / 2}px`,
        transform: `rotate(${deg}deg)`,
        transformOrigin: 'top left',
      };

      row.push(
        <div className="light-wrapper" style={style}>
          <span className="light" key={k}></span>
        </div>
      );
    }
    garland.push(
      <div className="row" key={i} style={{ width: `${i * ratio}px` }}>
        {row}
      </div>
    );
  }

  return <div className={`Garland ${type}`}>{garland}</div>;
}
