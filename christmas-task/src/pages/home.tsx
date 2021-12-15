import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = `Home`;
  });

  return (
    <main>
      <h2>Home</h2>      
    </main>
  );
}
