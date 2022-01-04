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

  const listValues = [
    {
      title: 'Количество',
      prop: 'quantity',
    },
    {
      title: 'Год',
      prop: 'year',
    },
    {
      title: 'Форма',
      prop: 'shape',
    },
    {
      title: 'Цвет',
      prop: 'color',
    },
    {
      title: 'Размер',
      prop: 'size',
    },
    {
      title: 'Любимая',
      prop: 'favorite',
    },
  ];

  const getItemValue = (value: string | boolean) => {
    return typeof value !== 'boolean' ? value : value ? 'да' : 'нет';
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
        {listValues.map((el) => (
          <li>
            {el.title}: {getItemValue(item[el.prop])}
          </li>
        ))}
      </ul>
      {isFavorite && (
        <div className="ribbon" title="Добавлена в избранное"></div>
      )}
    </div>
  );
};
