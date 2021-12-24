import './Garland.scss';

interface IGarland {
  type: string;
}

export default function Garland(props: IGarland) {
  const { type } = props;
  let garland = [];

  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let k = 0; k < i; k++) {
      row.push(<span key={k}></span>);
    }
    garland.push(<div key={i}>{row}</div>);
  }

  return <div className={`Garland ${type}`}>{garland}</div>;
}
