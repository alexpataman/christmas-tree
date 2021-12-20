import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import FavoriteCounter from './FavoriteCounter';
import './Header.scss';

export default function Header() {
  return (
    <header className="Header">
      <div className="container">
        <Link to="/" className="logo">
          Home
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/decoration">Decoration</Link>
          <Link to="/tree">Tree</Link>
        </nav>
        <FavoritesContext.Consumer>
          {({ favorites }) => <FavoriteCounter favorites={favorites} />}
        </FavoritesContext.Consumer>
      </div>
    </header>
  );
}
