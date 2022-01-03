import './Garland.scss';

interface IGarland {
  type: string;
}

export const Garland = (props: IGarland) => {
  const { type } = props;
  let garland = [];

  for (let i = 0; i < 5; i++) {
    let row = [];
    const inRowNum = 2 * i + 1;
    let margin = 0;
    for (let k = 0; k < inRowNum; k++) {
      margin = k < inRowNum / 2 ? margin + 1 : margin - 1;
      const style = {
        marginTop: `${margin}em`,
      };
      row.push(<span key={k} style={style}></span>);
    }
    garland.push(<div key={i}>{row}</div>);
  }

  return <div className={`Garland ${type}`}>{garland}</div>;
};
