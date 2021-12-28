import React from 'react';
import { IDataItem } from '../../types/common';
// import './DecorationItem.scss';

type DecorationItemProps = {
  item: IDataItem;
  onClick: () => string[];
  isFavorite: boolean;
};

export default function DecorationItem(props: DecorationItemProps) {
  const [isFavorite, setIsFavorite] = React.useState(props.isFavorite);

  const toggleIsFavorite = () => {
    const favorites = props.onClick();
    setIsFavorite(favorites.includes(props.item.num));
  };

  return (
    <div onClick={toggleIsFavorite} className="DecorationItem">
      <h4 className="title">{props.item.name}</h4>
      <div>
        <img
          src={`./assets/toys/${props.item.num}.png`}
          alt={props.item.name}
          className="img"
        />
      </div>
      <ul className="props">
        <li>Количество: {props.item.quantity}</li>
        <li>Год: {props.item.year}</li>
        <li>Форма: {props.item.shape}</li>
        <li>Цвет: {props.item.color}</li>
        <li>Размер: {props.item.size}</li>
        <li>Любимая: {props.item.favorite ? 'да' : 'нет'}</li>
      </ul>
      {isFavorite && (
        <div className="ribbon" title="Добавлена в избранное"></div>
      )}
    </div>
  );
}
