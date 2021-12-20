import { Link } from 'react-router-dom';
import './home.scss';

export default function Home() {
  return (
    <div className="Home">
      <div className="title">
        Christmas Game <br />
        "Decorate Christmas Tree"
      </div>
      <Link to="/decoration" className="button">
        Start
      </Link>
    </div>
  );
}
