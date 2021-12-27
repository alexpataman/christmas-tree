import { data } from '../../data/data_ru';
import './Favorites.scss';
import FavoritesItem from './FavoritesItem';

interface IFavorites {
  favorites: string[];
}

export default function Favorites(props: IFavorites) {
  const { favorites } = props;
  const items = data.filter((item) => favorites.includes(item.num));

  return (
    <div className="widget Favorites">
      <h5>Игрушки</h5>
      <ul>
        {items.map((item) => (
          <FavoritesItem item={item} key={item.num} />
        ))}
      </ul>
    </div>
  );
}
