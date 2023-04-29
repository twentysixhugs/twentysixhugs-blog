export type CategoryEntryProps = {
  name: string;
  displayName: string;
  onClick: (name: string, selected: boolean) => void;
};
