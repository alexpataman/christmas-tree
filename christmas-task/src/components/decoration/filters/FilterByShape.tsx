import { filterViewInputProps } from '../../../types/filters';

export default function FilterByShape(props: filterViewInputProps) {
  const { filterChangeHandler } = props;

  return (
    <div>
      Shape:
      <div>
        <button onClick={() => filterChangeHandler('ball')}>ball</button>
        <button onClick={() => filterChangeHandler('figure')}>figure</button>
        <button onClick={() => filterChangeHandler('bump')}>bump</button>
      </div>
    </div>
  );
}
