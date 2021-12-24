import './Snow.scss';
import { snow } from '../../config';
import React from 'react';

export default function Snow() {
  const container = React.useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => createSnowFlake(container.current), 200);
    return () => clearInterval(interval);
  });

  return <div className="Snow" ref={container}></div>;
}

function createSnowFlake(container: HTMLElement | null) {
  if (!container) {
    return;
  }

  const snowFlake = document.createElement('i') as HTMLElement;
  snowFlake.classList.add('snowflake');
  snowFlake.style.left = Math.random() * container.offsetWidth + 'px';
  snowFlake.style.animationDuration = Math.random() * 3 + snow.duration + 's';
  snowFlake.style.opacity = String(Math.random());
  container.appendChild(snowFlake);
  setTimeout(() => {
    snowFlake.remove();
  }, snow.duration * 1000);
}
