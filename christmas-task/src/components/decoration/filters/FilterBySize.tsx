import { filterViewInputProps } from '../../../types/filters';

export default function FilterBySize(props: filterViewInputProps) {
  const { filterChangeHandler } = props;

  return (
    <div>
      Size:
      <div>
        <button onClick={() => filterChangeHandler('large')}>Large</button>
        <button onClick={() => filterChangeHandler('medium')}>Medium</button>
        <button onClick={() => filterChangeHandler('small')}>Small</button>
      </div>
    </div>
  );
}
