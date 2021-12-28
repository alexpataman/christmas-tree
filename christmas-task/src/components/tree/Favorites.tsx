import { data } from '../../data/data';
import FavoritesItem from './FavoritesItem';
import { maxFavorites } from '../../config';
import { DecorationItem } from '../../types/tree';
import './Favorites.scss';

interface IFavorites {
  favorites: string[];
  decoration: DecorationItem[];
  toggleFavorites: (num: string) => string[];
}

export default function Favorites(props: IFavorites) {
  const { favorites, toggleFavorites, decoration } = props;
  const favoriteItems = data.filter((item) => favorites.includes(item.num));
  let items;

  if (favoriteItems.length) {
    items = favoriteItems;
  } else {
    items = data.slice(0, maxFavorites);
  }

  const itemsQuantity = items.reduce((acc, el) => {
    const usedItems = decoration.filter(
      (decorated) => decorated.data.num === el.num
    );
    acc[el.num] = +el.quantity - Object.keys(usedItems).length;
    return acc;
  }, {} as { [key: string]: number });

  return (
    <div className="widget Favorites">
      <h5>Игрушки</h5>
      <ul>
        {items.map((item) => (
          <FavoritesItem
            item={item}
            quantity={itemsQuantity[item.num]}
            key={item.num}
            isFavorite={favoriteItems.includes(item)}
            toggleFavorites={toggleFavorites}
          />
        ))}
      </ul>
    </div>
  );
}
