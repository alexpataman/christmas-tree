import { AppContext } from '../../contexts/AppContext';
import { IDataItem } from '../../types/common';
import { DecorationItem } from './DecorationItem';
import './DecorationItems.scss';

export type DecorationItemsProps = {
  items: IDataItem[];
};

export const DecorationItems = (props: DecorationItemsProps) => {
  if (props.items.length > 0) {
    return (
      <AppContext.Consumer>
        {({ favorites, toggleFavorites }) => (
          <div className="DecorationListing">
            {props.items.map((item) => (
              <DecorationItem
                item={item}
                onClick={() => toggleFavorites(item.num)}
                key={item.num}
                favoriteState={favorites.includes(item.num)}
              />
            ))}
          </div>
        )}
      </AppContext.Consumer>
    );
  } else {
    return (
      <div className="no-results">
        <h1>Извините, совпадений не обнаружено</h1>
      </div>
    );
  }
};
