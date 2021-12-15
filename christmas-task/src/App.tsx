import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/decoration">Decoration</Link>|{' '}
          <Link to="/tree">Tree</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
