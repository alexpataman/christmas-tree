import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as config from '../config';
import './home.scss';

export const Home = () => {
  useEffect(() => {
    document.title = config.pageTitles.home;
  }, []);

  return (
    <div className="Home">
      <div className="title">
        Новогодняя игра <br />
        "Наряди ёлку"
      </div>
      <Link to="/decoration" className="button">
        Начать
      </Link>
    </div>
  );
};
