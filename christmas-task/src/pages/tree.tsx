import { useEffect } from 'react';
import './tree.css';

export default function Tree() {
  useEffect(() => {
    document.title = `Tree`;
  });

  return (
    <div className="container Tree">
      <h1>This page is under construction</h1>
    </div>
  );
}
