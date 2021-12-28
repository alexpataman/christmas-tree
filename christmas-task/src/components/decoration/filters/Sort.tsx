import Select from 'react-select';
import { FilterContext } from '../../../contexts/FilterContext';
import { sortOptions as options } from '../../../config';

export default function Sort() {
  interface stateObject {
    isSelected?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
  }

  const customStyles = {
    option: (provided: object, state: stateObject) => {
      return {
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        background: state.isSelected ? 'grey' : 'transparent',
        padding: 10,
        cursor: 'pointer',
      };
    },
  };

  const getCurrentValue = (sortSettings: string) =>
    options.find((el) => el.value === sortSettings);

  return (
    <div>
      <h5 className="title">Сортировка</h5>
      <FilterContext.Consumer>
        {({ sortSettings, handleSortChange }) => {
          return (
            <Select
              className="react-select-container"
              styles={customStyles}
              onChange={handleSortChange}
              options={options}
              placeholder="Select sort order"
              value={getCurrentValue(sortSettings as string)}
            />
          );
        }}
      </FilterContext.Consumer>
    </div>
  );
}
