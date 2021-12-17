import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
