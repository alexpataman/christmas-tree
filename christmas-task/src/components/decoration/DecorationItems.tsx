import { FavoritesContext } from '../../contexts/FavoritesContext';
import { IDataItem } from '../../types/common';
import DecorationItem from './DecorationItem';
import './DecorationItems.scss';

export type DecorationListingProps = {
  items: IDataItem[];
};

export default function DecorationListing(props: DecorationListingProps) {
  if (props.items.length > 0) {
    return (
      <FavoritesContext.Consumer>
        {({ favorites, handleToggleFavorites }) => (
          <div className="DecorationListing">
            {props.items.map((item) => (
              <DecorationItem
                item={item}
                onClick={() => handleToggleFavorites(item.num)}
                key={item.num}
                isFavorite={favorites.includes(item.num)}
              />
            ))}
          </div>
        )}
      </FavoritesContext.Consumer>
    );
  } else {
    return (
      <div className="no-results">
        <h1>Sorry, no results were found</h1>
      </div>
    );
  }
}
