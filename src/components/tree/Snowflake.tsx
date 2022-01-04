import { useRef, useEffect } from 'react';
import { snow } from '../../config';

interface ISnowflake {
  offsetWidth: number;
}

export const Snowflake = ({ offsetWidth }: ISnowflake) => {
  const ref = useRef<HTMLElement>(null);

  const style = {
    left: Math.random() * offsetWidth + 'px',
    animationDuration: Math.random() * 3 + snow.duration + 's',
    opacity: String(Math.random()),
  };

  useEffect(() => {
    setTimeout(() => ref.current?.remove(), snow.duration * 1000);
  });

  return <i className="snowflake" style={style} ref={ref}></i>;
};
