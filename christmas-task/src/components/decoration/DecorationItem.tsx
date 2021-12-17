import { IDataItem } from '../../types/common';
import './DecorationItem.css';

type DecorationItemProps = {
  item: IDataItem;
  onClick: () => void;
};

export default function DecorationItem(props: DecorationItemProps) {
  return (
    <div onClick={props.onClick} className="DecorationItem">
      <h4 className="DecorationItem__title">{props.item.name}</h4>
      <div className="DecorationItem__img-container">
        <img
          src={`./assets/toys/${props.item.num}.png`}
          alt={props.item.name}
          className="DecorationItem__img"
        />
      </div>
      <ul className="DecorationItem__props">
        <li>Quantity: {props.item.count}</li>
        <li>Year: {props.item.year}</li>
        <li>Shape: {props.item.shape}</li>
        <li>Color: {props.item.color}</li>
        <li>Size: {props.item.size}</li>
      </ul>
    </div>
  );
}
