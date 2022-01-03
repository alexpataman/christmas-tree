import { StrictMode } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { render } from 'react-dom';
import { App } from './App';
import { Tree } from './pages/tree';
import { Decoration } from './pages/decoration';
import { Home } from './pages/home';
import './index.css';

const rootElement = document.getElementById('root');

render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/decoration" element={<Decoration />} />
          <Route path="/tree" element={<Tree />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
  rootElement
);
