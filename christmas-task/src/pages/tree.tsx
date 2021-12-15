import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Tree() {
  useEffect(() => {
    document.title = `Tree`;
  });

  return (
    <main>
      <h2>Tree</h2>
      <Link to="/">Back</Link> |{' '}
    </main>
  );
}
