import { useRef, useEffect, useState, Fragment } from 'react';
import { Snowflake } from './Snowflake';
import './Snow.scss';

export const Snow = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [snowflakes, setSnowflakes] = useState([
    <Snowflake offsetWidth={container.current?.offsetWidth || 0} />,
  ]);

  const createSnowFlake = () => {
    const newSnowflake = (
      <Snowflake offsetWidth={container.current?.offsetWidth || 0} />
    );
    setSnowflakes([...snowflakes, newSnowflake]);
  };

  useEffect(() => {
    const interval = setInterval(() => createSnowFlake(), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="Snow" ref={container}>
      {snowflakes.map((el, index) => (
        <Fragment key={index}>{el}</Fragment>
      ))}
    </div>
  );
};
