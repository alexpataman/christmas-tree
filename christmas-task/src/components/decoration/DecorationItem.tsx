import { useState } from 'react';
import { IDataItem } from '../../types/common';

type DecorationItemProps = {
  item: IDataItem;
  onClick: () => string[];
  favoriteState: boolean;
};

export const DecorationItem = ({
  item,
  onClick,
  favoriteState,
}: DecorationItemProps) => {
  const [isFavorite, setIsFavorite] = useState(favoriteState);

  const toggleIsFavorite = () => {
    const favorites = onClick();
    setIsFavorite(favorites.includes(item.num));
  };

  return (
    <div onClick={toggleIsFavorite} className="DecorationItem">
      <h4 className="title">{item.name}</h4>
      <img
        src={`./assets/toys/${item.num}.png`}
        alt={item.name}
        className="img"
      />
      <ul className="props">
        <li>Количество: {item.quantity}</li>
        <li>Год: {item.year}</li>
        <li>Форма: {item.shape}</li>
        <li>Цвет: {item.color}</li>
        <li>Размер: {item.size}</li>
        <li>Любимая: {item.favorite ? 'да' : 'нет'}</li>
      </ul>
      {isFavorite && (
        <div className="ribbon" title="Добавлена в избранное"></div>
      )}
    </div>
  );
};
