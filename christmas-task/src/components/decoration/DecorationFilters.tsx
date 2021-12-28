import { FILTER_TYPES } from '../../types/filters';
import { ErrorBoundary } from '../common/ErrorBoundary';
import DecorationFilterGroup from './DecorationFilterGroup';
import FilterByColor from './filters/FilterByColor';
import FilterByShape from './filters/FilterByShape';
import FilterBySize from './filters/FilterBySize';
import FilterByFavorite from './filters/FilterByFavorite';
import Filter from './filters/Filter';
import Sort from './filters/Sort';
import Reset from './filters/Reset';
import Range from './filters/Range';
import FilterByQuantity from './filters/RangeByQuantity';
import FilterByYear from './filters/RangeByYear';
import FilterByName from './filters/FilterByName';
import './DecorationFilters.scss';

export default function DecorationFilters() {
  return (
    <div className="DecorationFilters">
      <ErrorBoundary>
        <DecorationFilterGroup title="Фильтры по значению">
          <Filter
            filterName="shape"
            filterType={FILTER_TYPES.MULTIPLE}
            FilterComponent={FilterByShape}
          />
          <Filter
            filterName="size"
            filterType={FILTER_TYPES.MULTIPLE}
            FilterComponent={FilterBySize}
          />
          <Filter
            filterName="color"
            filterType={FILTER_TYPES.MULTIPLE}
            FilterComponent={FilterByColor}
          />
          <Filter
            filterName="favorite"
            filterType={FILTER_TYPES.SINGLE}
            FilterComponent={FilterByFavorite}
          />
        </DecorationFilterGroup>
        <DecorationFilterGroup title="Фильтры по диапазону">
          <Range filterName="quantity" RangeComponent={FilterByQuantity} />
          <Range filterName="year" RangeComponent={FilterByYear} />
        </DecorationFilterGroup>
        <DecorationFilterGroup>
          <Filter
            filterName="name"
            filterType={FILTER_TYPES.MULTIPLE}
            FilterComponent={FilterByName}
          />
          <Sort />
          <Reset />
        </DecorationFilterGroup>
      </ErrorBoundary>
    </div>
  );
}
