export interface FiltersGroupProps {
  setCheckBox: (name: string) => void;
  checkedCheckbox: string;
  sortArray: (column?: string) => void;
}
