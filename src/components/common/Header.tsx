import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';
import { FavoriteCounter } from './FavoriteCounter';
import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <Link to="/" className="logo">
          Главная
        </Link>
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/decoration">Игрушки</Link>
          <Link to="/tree">Ёлка</Link>
        </nav>
        <AppContext.Consumer>
          {({ favorites }) => <FavoriteCounter favorites={favorites} />}
        </AppContext.Consumer>
      </div>
    </header>
  );
};
