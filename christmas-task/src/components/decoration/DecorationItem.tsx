import React from 'react';
import { IDataItem } from '../../types/common';
import './DecorationItem.scss';

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
      <h4 className="DecorationItem__title">{props.item.name}</h4>
      <div className="DecorationItem__img-container">
        <img
          src={`./assets/toys/${props.item.num}.png`}
          alt={props.item.name}
          className="DecorationItem__img"
        />
      </div>
      <ul className="DecorationItem__props">
        <li>Quantity: {props.item.quantity}</li>
        <li>Year: {props.item.year}</li>
        <li>Shape: {props.item.shape}</li>
        <li>Color: {props.item.color}</li>
        <li>Size: {props.item.size}</li>
        <li>Favorite: {props.item.favorite ? 'yes' : 'no'}</li>
      </ul>
      {isFavorite && <div className="ribbon" title="Favorite"></div>}
    </div>
  );
}
