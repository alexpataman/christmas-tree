import { IDataItem } from '../../types/common';

type DecorationItemProps = {
  item: IDataItem;
  onClick: () => void;
};

export default function DecorationItem(props: DecorationItemProps) {
  return (
    <div onClick={props.onClick}>
      <h4>{props.item.name}</h4>
      <ul>
        <li>Quantity: {props.item.count}</li>
        <li>Year: {props.item.year}</li>
        <li>Shape: {props.item.shape}</li>
        <li>Color: {props.item.color}</li>
        <li>Size: {props.item.size}</li>
      </ul>
    </div>
  );
}
