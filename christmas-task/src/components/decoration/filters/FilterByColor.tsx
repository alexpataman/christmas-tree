import { filterViewInputProps } from '../../../types/filters';

export default function FilterByColor(props: filterViewInputProps) {
  const { filterChangeHandler } = props;

  return (
    <div>
      Color:
      <div>
        <button onClick={() => filterChangeHandler('green')}>Green</button>
        <button onClick={() => filterChangeHandler('red')}>Red</button>
        <button onClick={() => filterChangeHandler('yellow')}>Yellow</button>
      </div>
    </div>
  );
}
