import { IDataItem } from '../../types/common';
import DecorationItem from './DecorationItem';
import './DecorationItems.scss';

export type DecorationListingProps = {
  items: IDataItem[];
};

export default function DecorationListing(props: DecorationListingProps) {
  const onClickHandler = () => {
    console.log('clicked');
  };

  return (
    <div className="DecorationListing">
      {props.items.length > 0 ? (
        props.items.map((item) => (
          <DecorationItem item={item} onClick={onClickHandler} key={item.num} />
        ))
      ) : (
        <h1>Sorry, no results were found</h1>
      )}
    </div>
  );
}
