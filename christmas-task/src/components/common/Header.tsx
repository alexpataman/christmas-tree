import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <div className="Header__logo"></div>
      <nav className="Header__nav">
        <Link to="/">Home</Link>
        <Link to="/decoration">Decoration</Link>
        <Link to="/tree">Tree</Link>
      </nav>
    </header>
  );
}
