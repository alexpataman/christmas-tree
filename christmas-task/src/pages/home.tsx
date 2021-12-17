import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <div className="Home">
      <div className="Home__title">
        Christmas Game <br />
        "Decorate Christmas Tree"
      </div>
      <Link to="/decoration" className="Home__button">
        Start
      </Link>
    </div>
  );
}
