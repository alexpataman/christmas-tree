import { FilterContext } from '../../../contexts/FilterContext';
import Select from 'react-select';

export default function Sort() {
  const options = [
    {
      value: 'name_asc',
      label: 'By title from A to Z',
    },
    {
      value: 'name_desc',
      label: 'By title from Z to A',
    },
    {
      value: 'year_asc',
      label: 'By year, ascending',
    },
    {
      value: 'year_desc',
      label: 'By year, descending',
    },
  ];

  interface stateObject {
    isSelected?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
  }

  const customStyles = {
    option: (provided: object, state: stateObject) => {
      return {
        ...provided,
        color: state.isSelected ? 'white' : 'green',
        background: state.isSelected ? 'grey' : 'transparent',
        padding: 20,
        cursor: 'pointer',
      };
    },
  };

  const getCurrentValue = (sortSettings: string) =>
    options.find((el) => el.value === sortSettings);

  return (
    <div>
      <h5 className="title">Sort Order</h5>
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
