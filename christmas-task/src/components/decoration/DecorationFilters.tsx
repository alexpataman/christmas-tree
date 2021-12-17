import { ErrorBoundary } from '../../helpers/ErrorBoundary';
import DecorationFilterGroup from './DecorationFilterGroup';
import FilterByColor from './filters/FilterByColor';
import FilterByShape from './filters/FilterByShape';
import FilterBySize from './filters/FilterBySize';
import Filter from './filters/Filter';

export default function Filters() {
  return (
    <div className="Decoration__filters">
      <ErrorBoundary>
        <DecorationFilterGroup title="Filter By Value">
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
        </DecorationFilterGroup>
      </ErrorBoundary>
    </div>
  );
}
