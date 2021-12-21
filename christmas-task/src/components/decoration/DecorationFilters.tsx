import { ErrorBoundary } from '../common/ErrorBoundary';
import DecorationFilterGroup from './DecorationFilterGroup';
import FilterByColor from './filters/FilterByColor';
import FilterByShape from './filters/FilterByShape';
import FilterBySize from './filters/FilterBySize';
import FilterByFavorite from './filters/FilterByFavorite';
import Filter from './filters/Filter';
import Sort from './filters/Sort';
import styles from './DecorationFilters.module.scss';
import Reset from './filters/Reset';
import Range from './filters/Range';
import FilterByQuantity from './filters/RangeByQuantity';
import FilterByYear from './filters/RangeByYear';
import FilterByName from './filters/FilterByName';

export default function DecorationFilters() {
  return (
    <div className={styles.container}>
      <ErrorBoundary>
        <DecorationFilterGroup title="Фильтры по значению">
          <Filter
            filterName="shape"
            filterType="multiple"
            FilterComponent={FilterByShape}
          />
          <Filter
            filterName="size"
            filterType="multiple"
            FilterComponent={FilterBySize}
          />
          <Filter
            filterName="color"
            filterType="multiple"
            FilterComponent={FilterByColor}
          />
          <Filter
            filterName="favorite"
            filterType="single"
            FilterComponent={FilterByFavorite}
          />
        </DecorationFilterGroup>
        <DecorationFilterGroup title="Фильтры по диапазону">
          <Range filterName="quantity" RangeComponent={FilterByQuantity} />
          <Range filterName="year" RangeComponent={FilterByYear} />
        </DecorationFilterGroup>
        <DecorationFilterGroup title="">
          <Filter
            filterName="name"
            filterType="single"
            FilterComponent={FilterByName}
          />
          <Sort />
          <Reset />
        </DecorationFilterGroup>
      </ErrorBoundary>
    </div>
  );
}
