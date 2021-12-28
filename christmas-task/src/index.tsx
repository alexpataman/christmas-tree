import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Tree from './pages/tree';
import Decoration from './pages/decoration';
import Home from './pages/home';
import './helpers/taskCheck2';
import './index.css';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/decoration" element={<Decoration />} />
          <Route path="/tree" element={<Tree />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
