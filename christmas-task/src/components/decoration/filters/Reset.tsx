import { FilterContext } from '../../../contexts/FilterContext';
import './Reset.scss';

export default function Reset() {
  return (
    <div className="Reset">
      <FilterContext.Consumer>
        {({ handleReset }) => <button onClick={handleReset}>Reset</button>}
      </FilterContext.Consumer>
    </div>
  );
}
