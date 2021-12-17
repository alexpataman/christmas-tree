import { ErrorBoundary } from '../../helpers/ErrorBoundary';
import DecorationFilterGroup from './DecorationFilterGroup';
import FilterByColor from './filters/FilterByColor';
import FilterByShape from './filters/FilterByShape';
import FilterBySize from './filters/FilterBySize';
import Filter from './filters/Filter';

export default function Filters() {
  return (
    <div>
      <ErrorBoundary>
        <DecorationFilterGroup title="Filter By Value">
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
            filterName="shape"
            filterType="single"
            FilterComponent={FilterByShape}
          />
        </DecorationFilterGroup>
      </ErrorBoundary>
    </div>
  );
}
