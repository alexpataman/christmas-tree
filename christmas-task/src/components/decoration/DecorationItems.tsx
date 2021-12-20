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

  if (props.items.length > 0) {
    return (
      <div className="DecorationListing">
        {props.items.map((item) => (
          <DecorationItem item={item} onClick={onClickHandler} key={item.num} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="no-results">
        <h1>Sorry, no results were found</h1>
      </div>
    );
  }
}
