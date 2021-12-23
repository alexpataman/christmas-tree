import { data } from '../../data/data_ru';
import './Favorites.scss';

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
          <li title={item.name} key={item.num}>
            <img src={`./assets/toys/${item.num}.png`} alt={item.name} />
            <span>{item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
