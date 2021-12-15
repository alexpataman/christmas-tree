import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Decoration() {
  useEffect(() => {
    document.title = `Decoration`;
  });

  return (
    <main>
      <h2>Decoration</h2>
      <Link to="/">Back</Link> |{' '}
    </main>
  );
}
