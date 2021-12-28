import { useNavigate } from 'react-router-dom';

interface FavoriteCounterProps {
  favorites: string[];
}

export default function FavoriteCounter({ favorites }: FavoriteCounterProps) {
  let navigate = useNavigate();

  return (
    <div
      className="favorite"
      title="Избранное"
      onClick={() => navigate('/tree')}
    >
      <span>{favorites.length}</span>
    </div>
  );
}
