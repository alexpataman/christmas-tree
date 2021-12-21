import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './home.scss';

export default function Home() {
  useEffect(() => {
    document.title = `Главная`;
  });

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
}
