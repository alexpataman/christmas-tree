export type FilterSettings = {
  [key: string]: Set<string>;
};

export type FilterChangeHandler = (key: string, value: Set<unknown>) => void;

export type filterViewInputProps = {
  key: string;
  filterChangeHandler: (value: string) => void;
};

export type filterInputProps = {
  filterName: string;
  filterType: 'single' | 'multiple';
  FilterComponent: React.FC<{
    key: string;
    filterChangeHandler: (value: string) => void;
  }>;
};

export interface ISetStateHandler<Type> {
  (arg: Type): Type;
}
