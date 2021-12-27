import { data } from '../../data/data_ru';
import './Favorites.scss';
import FavoritesItem from './FavoritesItem';
import { maxFavorites } from '../../config';

interface IFavorites {
  favorites: string[];
  toggleFavorites: (num: string) => string[];
}

export default function Favorites(props: IFavorites) {
  const { favorites, toggleFavorites } = props;
  const favoriteItems = data.filter((item) => favorites.includes(item.num));
  let items;
  if (favoriteItems.length < maxFavorites) {
    items = Array.from(new Set([...favoriteItems, ...data])).slice(
      0,
      maxFavorites
    );
  } else {
    items = favoriteItems;
  }

  return (
    <div className="widget Favorites">
      <h5>Игрушки</h5>
      <ul>
        {items.map((item) => (
          <FavoritesItem
            item={item}
            key={item.num}
            isFavorite={favoriteItems.includes(item)}
            toggleFavorites={toggleFavorites}
          />
        ))}
      </ul>
    </div>
  );
}
