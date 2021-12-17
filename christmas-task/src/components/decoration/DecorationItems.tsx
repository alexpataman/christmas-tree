import { IDataItem } from '../../types/common';
import DecorationItem from './DecorationItem';

export type DecorationListingProps = {
  items: IDataItem[];
};

export default function DecorationListing(props: DecorationListingProps) {
  const onClickHandler = () => {
    console.log('clicked');
  };

  return (
    <div className="Decoration__items">
      {props.items.map((item) => (
        <DecorationItem item={item} onClick={onClickHandler} key={item.num} />
      ))}
    </div>
  );
}
