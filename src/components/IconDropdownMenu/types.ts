import { ReactNode } from "react";

type MenuItem = {
  value: string;
  label: string;
};

export type IconDropdownMenuProps = {
  icon: ReactNode;
  menuItems: MenuItem[];
  onSubmit: (value: string) => void;
  direction?: "vertical" | "horizontal";
};
