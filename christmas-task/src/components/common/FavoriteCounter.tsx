interface FavoriteCounterProps {
  favorites: string[];
}

export default function FavoriteCounter(props: FavoriteCounterProps) {
  let { favorites } = props;
  return (
    <div className="favorite" title="Избранное">
      <span>{favorites.length}</span>
    </div>
  );
}
