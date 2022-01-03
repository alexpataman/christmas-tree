import { DragPreviewImage, useDrag } from 'react-dnd';
import { FavoriteItems, IDataItem } from '../../types/common';
import { ITEM_TYPES } from '../../types/tree';

export interface IFavoritesItemProps {
  item: IDataItem;
  quantity: number;
  isFavorite: boolean;
  toggleFavorites: (num: string) => FavoriteItems;
}

export const FavoritesItem = ({
  item,
  quantity,
  isFavorite,
  toggleFavorites,
}: IFavoritesItemProps) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ITEM_TYPES.NEW,
    item: { id: null, data: item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const imgUrl = `./assets/toys/${item.num}s.png`;
  let draggableImg;

  if (quantity > 0) {
    draggableImg = (
      <>
        <DragPreviewImage connect={preview} src={imgUrl} />
        <img
          src={imgUrl}
          alt={item.name}
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
          }}
        />
      </>
    );
  }

  return (
    <li title={item.name}>
      {draggableImg}
      <span>{quantity}</span>
      {isFavorite && (
        <i
          title="Убрать из избранного"
          onClick={() => toggleFavorites(item.num)}
        ></i>
      )}
    </li>
  );
};
