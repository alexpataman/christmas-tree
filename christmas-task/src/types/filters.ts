export type FilterOptionsSet = Set<unknown>;

export type FilterSettings = {
  [key: string]: FilterOptionsSet;
};

export type FilterChangeHandler = (key: string, value: Set<unknown>) => void;

export type filterViewInputProps = {
  key: string;
  filterState: FilterOptionsSet;
  filterChangeHandler: (value: string) => void;
};

export type filterInputProps = {
  filterName: string;
  filterType: 'single' | 'multiple';
  FilterComponent: React.FC<filterViewInputProps>;
};

export interface ISetStateHandler<Type> {
  (arg: Type): Type;
}
