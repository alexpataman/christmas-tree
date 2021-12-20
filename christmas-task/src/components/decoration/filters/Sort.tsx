import { FilterContext } from '../../../contexts/FilterContext';
import { useState } from 'react';
import Select from 'react-select';
import { title } from 'process';

export default function Sort() {
  const [state, setState] = useState(new Set());

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
      label: 'By year, asc',
    },
    {
      value: 'year_desc',
      label: 'By year, desc',
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
          // console.log(sortSettings);
          // const current = {
          //   value: sortSettings,
          //   label: 'By title from Z to A',
          // };

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
