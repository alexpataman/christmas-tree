import { useEffect } from 'react';
import './tree.css';

export default function Tree() {
  useEffect(() => {
    document.title = `Ёлка`;
  });

  return (
    <div className="container Tree">
      <h1>Страница в разработке</h1>
    </div>
  );
}
