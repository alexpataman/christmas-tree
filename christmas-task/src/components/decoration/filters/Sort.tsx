import { FilterContext } from '../../../contexts/FilterContext';
import Select from 'react-select';

export default function Sort() {
  const options = [
    {
      value: 'name_asc',
      label: 'По названию, от А до Я',
    },
    {
      value: 'name_desc',
      label: 'По названию, от Я до А',
    },
    {
      value: 'year_asc',
      label: 'По году, по возрастанию',
    },
    {
      value: 'year_desc',
      label: 'По году, по убыванию',
    },
    {
      value: 'quantity_asc',
      label: 'По количеству, по возрастанию',
    },
    {
      value: 'quantity_desc',
      label: 'По количеству, по убыванию',
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
